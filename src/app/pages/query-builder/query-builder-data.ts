/** Column metadata for the Query Builder natural-language demo. */
export const QUERY_BUILDER_COLUMNS = [
  { field: 'id', label: 'ID', type: 'number' },
  { field: 'name', label: 'Name', type: 'string' },
  { field: 'email', label: 'Email', type: 'string' },
  { field: 'address', label: 'Address', type: 'string' },
  { field: 'city', label: 'City', type: 'string' },
  { field: 'state', label: 'State', type: 'string' },
  { field: 'credits', label: 'Credits', type: 'number' },
] as const;

export interface QueryBuilderUser {
  id: number;
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  credits: number;
}

const DEMO_NAMES = ['John', 'Jane', 'Bob', 'Alice', 'Tom', 'Sally', 'Jim', 'Mary', 'Peter', 'Nancy'];
const DEMO_CITIES = [
  'Los Angeles',
  'San Diego',
  'New York',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'Dallas',
  'San Jose',
];
const DEMO_STATES = ['California', 'New York', 'Illinois', 'Texas', 'Arizona', 'Pennsylvania'];
const DEMO_STREETS = ['Elm St', 'Oak St', 'Maple Ave', 'Pine St', 'Cedar St', 'Birch St'];
const DEMO_EMAIL_DOMAINS = ['example.com', 'test.com', 'demo.com'];

/** Generates deterministic demo users for the Query Builder grid. */
export function generateQueryBuilderUsers(count: number): QueryBuilderUser[] {
  const users: QueryBuilderUser[] = [];

  for (let index = 0; index < count; index++) {
    const id = index + 1;
    const name = DEMO_NAMES[index % DEMO_NAMES.length];
    const email = `${name.toLowerCase()}${id}@${DEMO_EMAIL_DOMAINS[index % DEMO_EMAIL_DOMAINS.length]}`;
    const address = `${1000 + index * 137} ${DEMO_STREETS[index % DEMO_STREETS.length]}`;
    const city = DEMO_CITIES[index % DEMO_CITIES.length];
    const state = DEMO_STATES[index % DEMO_STATES.length];
    const zipcode = `${10000 + ((index * 913) % 90000)}`;
    const credits = 100 + ((index * 173) % 1900);

    users.push({ id, name, email, address, city, state, zipcode, credits });
  }

  return users;
}

export const QUERY_BUILDER_USERS = generateQueryBuilderUsers(20);

/** Example natural-language prompts shown in the page hint. */
export const QUERY_BUILDER_SAMPLE_PROMPT =
  'find all users who live in los angeles and have over 1000 credits';
