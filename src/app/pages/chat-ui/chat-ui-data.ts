import type { ToolbarSettingsModel } from '@syncfusion/ej2-interactive-chat';

/** Demo prompt/response pairs — replace with a real AI service in production. */
export interface ChatPromptPair {
  prompt: string;
  response: string;
}

/** Suggestion chips shown in the empty AssistView state. */
export const CHAT_PROMPT_SUGGESTIONS: string[] = [
  'How do I prioritize my tasks?',
  'How can I improve my time management skills?',
  'What are best practices for team collaboration?',
  'How do I write clearer status updates?',
];

/** Known prompts mapped to canned demo responses. */
export const CHAT_PROMPT_PAIRS: ChatPromptPair[] = [
  {
    prompt: 'How do I prioritize my tasks?',
    response:
      'Prioritize tasks by urgency and impact: tackle high-impact tasks first, delegate when possible, and break large tasks into smaller steps. For more assistance, feel free to ask—I am here to help!',
  },
  {
    prompt: 'How can I improve my time management skills?',
    response:
      'To improve time management skills, try setting clear goals, using a planner or digital tools, prioritizing tasks, breaking tasks into smaller steps, and minimizing distractions. Regularly review and adjust your approach for better efficiency.',
  },
  {
    prompt: 'What are best practices for team collaboration?',
    response:
      'Use shared channels for updates, document decisions, set clear owners for each task, and schedule short syncs only when async communication is not enough. Celebrate wins and give feedback early.',
  },
  {
    prompt: 'How do I write clearer status updates?',
    response:
      'Lead with the outcome, note blockers or risks, list next steps with owners, and keep updates scannable with bullets. One paragraph is usually enough for weekly status.',
  },
];

/** Fallback text when the prompt is not in the demo catalog. */
export const CHAT_DEFAULT_RESPONSE =
  'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';

/** Simulated network latency for demo responses (milliseconds). */
export const CHAT_RESPONSE_DELAY_MS = 1200;

/** Header toolbar — refresh clears the conversation in the default demo. */
export const CHAT_TOOLBAR_SETTINGS: ToolbarSettingsModel = {
  items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
};
