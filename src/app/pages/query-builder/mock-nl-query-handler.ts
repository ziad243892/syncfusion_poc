/**
 * Mock natural-language query handler for the Query Builder POC.
 * Returns a SQL string in the format expected by Syncfusion setRulesFromSql.
 * Replace with Azure OpenAI / Gemini for production use.
 */

const CITY_ALIASES: Record<string, string> = {
  'los angeles': 'Los Angeles',
  'san diego': 'San Diego',
  'new york': 'New York',
  chicago: 'Chicago',
  houston: 'Houston',
  phoenix: 'Phoenix',
  philadelphia: 'Philadelphia',
  'san antonio': 'San Antonio',
  dallas: 'Dallas',
  'san jose': 'San Jose',
};

const STATE_ALIASES: Record<string, string> = {
  california: 'California',
  'new york': 'New York',
  illinois: 'Illinois',
  texas: 'Texas',
  arizona: 'Arizona',
  pennsylvania: 'Pennsylvania',
};

/** Known demo prompts mapped to WHERE clauses. */
const PRESET_WHERE_CLAUSES: Array<{ includes: string[]; where: string }> = [
  {
    includes: ['los angeles', '1000', 'credit'],
    where: "city = 'Los Angeles' AND credits > 1000",
  },
  {
    includes: ['california', '500', 'credit'],
    where: "state = 'California' AND credits > 500",
  },
  {
    includes: ['new york'],
    where: "city = 'New York'",
  },
  {
    includes: ['credits', 'less than', '200'],
    where: 'credits < 200',
  },
  {
    includes: ['credits', 'under', '300'],
    where: 'credits < 300',
  },
];

function normalizeInput(input: string): string {
  return input.toLowerCase().replace(/\s+/g, ' ').trim();
}

function findCityClause(text: string): string | null {
  for (const [alias, city] of Object.entries(CITY_ALIASES)) {
    if (text.includes(alias) || text.includes(`in ${alias}`) || text.includes(`lives in ${alias}`)) {
      return `city = '${city}'`;
    }
  }

  return null;
}

function findStateClause(text: string): string | null {
  for (const [alias, state] of Object.entries(STATE_ALIASES)) {
    if (text.includes(alias)) {
      return `state = '${state}'`;
    }
  }

  return null;
}

function findCreditsClause(text: string): string | null {
  const greaterThanMatch = text.match(
    /(?:over|more than|greater than|above|at least)\s+(\d+)\s*credits?/,
  );
  if (greaterThanMatch) {
    return `credits > ${greaterThanMatch[1]}`;
  }

  const lessThanMatch = text.match(/(?:under|less than|below|fewer than)\s+(\d+)\s*credits?/);
  if (lessThanMatch) {
    return `credits < ${lessThanMatch[1]}`;
  }

  const creditsGreaterMatch = text.match(/credits?\s*(?:>|greater than|more than)\s*(\d+)/);
  if (creditsGreaterMatch) {
    return `credits > ${creditsGreaterMatch[1]}`;
  }

  const creditsLessMatch = text.match(/credits?\s*(?:<|less than|under)\s*(\d+)/);
  if (creditsLessMatch) {
    return `credits < ${creditsLessMatch[1]}`;
  }

  return null;
}

function parseNaturalLanguageToWhere(input: string): string {
  const text = normalizeInput(input);

  for (const preset of PRESET_WHERE_CLAUSES) {
    if (preset.includes.every((fragment) => text.includes(fragment))) {
      return preset.where;
    }
  }

  const clauses = [findCityClause(text), findStateClause(text), findCreditsClause(text)].filter(
    (clause): clause is string => Boolean(clause),
  );

  if (clauses.length > 0) {
    return clauses.join(' AND ');
  }

  throw new Error('Could not interpret the natural-language query. Try the sample prompt on the page.');
}

/**
 * Simulates an AI service that converts plain language into SQL.
 * The Query Builder expects only the WHERE clause portion.
 */
export async function mockNlQueryHandler(prompt: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 350));

  const whereClause = parseNaturalLanguageToWhere(prompt);
  return `SELECT * FROM user WHERE ${whereClause}`;
}

/** Extracts the WHERE clause from a full SQL string. */
export function extractWhereClause(sql: string): string {
  const normalized = sql.replace(/```sql/gi, '').replace(/```/g, '').trim();
  const whereIndex = normalized.toUpperCase().indexOf('WHERE ');

  if (whereIndex === -1) {
    throw new Error('Generated SQL did not contain a WHERE clause.');
  }

  return normalized
    .slice(whereIndex + 'WHERE '.length)
    .split(';')[0]
    .replace(/\n/g, ' ')
    .trim();
}
