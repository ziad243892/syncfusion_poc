import type { MessageModel, UserModel } from '@syncfusion/ej2-interactive-chat';

/** Brand-aligned avatar colors from material3.scss token palette. */
export const CHAT_UI_AVATAR_COLORS = {
  currentUser: '#12A89E',
  contact: '#16294C',
} as const;

/** Current user in the default Syncfusion Chat UI demo. */
export const CHAT_UI_CURRENT_USER: UserModel = {
  id: 'user1',
  user: 'Albert',
  avatarBgColor: CHAT_UI_AVATAR_COLORS.currentUser,
};

/** Conversation partner in the default Syncfusion Chat UI demo. */
export const CHAT_UI_CONTACT_USER: UserModel = {
  id: 'user2',
  user: 'Michale Suyama',
  avatarBgColor: CHAT_UI_AVATAR_COLORS.contact,
};

/** Seed messages that mirror the Syncfusion default Chat UI sample. */
export function createInitialChatMessages(
  currentUser: UserModel,
  contactUser: UserModel,
): MessageModel[] {
  const baseTime = new Date();
  baseTime.setHours(10, 15, 0, 0);

  return [
    {
      id: 'chat-message-1',
      text: 'Hi Michale, are we on track for the deadline?',
      author: currentUser,
      timeStamp: new Date(baseTime.getTime()),
    },
    {
      id: 'chat-message-2',
      text: 'Yes, the design phase is complete.',
      author: contactUser,
      timeStamp: new Date(baseTime.getTime() + 2 * 60 * 1000),
    },
    {
      id: 'chat-message-3',
      text: "I'll review it and send feedback by today.",
      author: currentUser,
      timeStamp: new Date(baseTime.getTime() + 4 * 60 * 1000),
    },
  ];
}

/** Quick-reply chips shown above the message composer. */
export const CHAT_UI_SUGGESTIONS = [
  'Okay, will check it.',
  'Sounds good!',
  'Can we schedule a quick call?',
] as const;
