/**
 * Mock AI handler for the Smart TextArea POC.
 * Returns completions in the format expected by Syncfusion (OK:[text]END_INSERTION).
 * Replace with a real aiSuggestionHandler (Azure OpenAI, Gemini, etc.) for production.
 */
export interface ChatMessage {
  role: string;
  content: string;
}

export interface ChatParameters {
  messages: ChatMessage[];
  temperature?: number;
  maxTokens?: number;
  stopSequences?: string[];
  frequencyPenalty?: number;
  presencePenalty?: number;
}

/** Maps partial user input to demo-style sentence completions. */
const COMPLETION_RULES: Array<{ startsWith: string; completion: string }> = [
  { startsWith: 'to investigate', completion: ", we'll need a repro as a public Git repo." },
  { startsWith: 'thank you for contacting', completion: ' us.' },
  { startsWith: 'thank you for reaching', completion: ' out to us.' },
  { startsWith: 'please find the attached', completion: ' report.' },
  { startsWith: "let's schedule a meeting", completion: ' to discuss this further.' },
  { startsWith: 'can you provide an update', completion: ' on this task?' },
  { startsWith: 'thank you for your interest', completion: ' in our product.' },
  { startsWith: 'can i schedule a demo', completion: ' for you?' },
];

function extractUserText(messages: ChatMessage[]): string {
  const lastUser = [...messages].reverse().find((message) => message.role === 'User');
  if (!lastUser) {
    return '';
  }

  const match = lastUser.content.match(/USER_TEXT:\s*([\s\S]*?)\^\^\^/);
  return match?.[1]?.trim() ?? '';
}

function findPhraseCompletion(textBefore: string, phrases: string[]): string | null {
  const normalized = textBefore.toLowerCase();

  for (const phrase of phrases) {
    const phraseLower = phrase.toLowerCase();
    if (phraseLower.startsWith(normalized) && normalized.length < phraseLower.length) {
      return phrase.slice(textBefore.length);
    }
  }

  return null;
}

function formatSuggestion(completion: string): string {
  return `OK:[${completion}]END_INSERTION`;
}

/**
 * Simulates AI sentence completion for the Smart TextArea demo.
 * Type "To investigate" in the GitHub maintainer role to see autocompletion.
 */
export async function mockAiSuggestionHandler(settings: ChatParameters): Promise<string> {
  // Small delay so inline suggestions feel closer to a real network call.
  await new Promise((resolve) => setTimeout(resolve, 180));

  const textBefore = extractUserText(settings.messages);
  if (!textBefore) {
    return 'NO_PREDICTION END_INSERTION';
  }

  const normalized = textBefore.toLowerCase();

  for (const rule of COMPLETION_RULES) {
    if (normalized.endsWith(rule.startsWith) || normalized === rule.startsWith) {
      return formatSuggestion(rule.completion);
    }
  }

  // Fall back to matching against phrases from the system prompt examples.
  const systemMessage = settings.messages.find((message) => message.role === 'System');
  if (systemMessage) {
    const phrases = [...systemMessage.content.matchAll(/- (.+)/g)].map((match) => match[1]);
    const phraseCompletion = findPhraseCompletion(textBefore, phrases);
    if (phraseCompletion) {
      return formatSuggestion(phraseCompletion);
    }
  }

  return 'NO_PREDICTION END_INSERTION';
}
