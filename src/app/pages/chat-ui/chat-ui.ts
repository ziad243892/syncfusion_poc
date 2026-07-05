import { Component, inject, viewChild } from '@angular/core';
import {
  ChatUIComponent,
  ChatUIModule,
  type MessageSendEventArgs,
} from '@syncfusion/ej2-angular-interactive-chat';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TranslateService } from '../../core/i18n/translate.service';
import { ThemeService } from '../../core/theme/theme.service';
import {
  CHAT_UI_CONTACT_USER,
  CHAT_UI_CURRENT_USER,
  CHAT_UI_SUGGESTIONS,
  createInitialChatMessages,
} from './chat-ui-data';

@Component({
  selector: 'app-chat-ui',
  standalone: true,
  imports: [ChatUIModule, TranslatePipe],
  templateUrl: './chat-ui.html',
  styleUrl: './chat-ui.scss',
})
export class ChatUiPage {
  private readonly theme = inject(ThemeService);
  private readonly i18n = inject(TranslateService);
  private readonly chatRef = viewChild<ChatUIComponent>('chatUi');

  protected readonly currentUser = CHAT_UI_CURRENT_USER;
  protected readonly contactUser = CHAT_UI_CONTACT_USER;
  protected readonly suggestions = [...CHAT_UI_SUGGESTIONS];
  protected readonly initialMessages = createInitialChatMessages(
    this.currentUser,
    this.contactUser,
  );

  protected readonly chatHeight = '32rem';
  protected readonly chatWidth = '100%';

  protected isRtl(): boolean {
    return this.theme.direction() === 'rtl';
  }

  /** Simulates a teammate reply after the current user sends a message. */
  protected onMessageSend(_args: MessageSendEventArgs): void {
    const chat = this.chatRef();
    if (!chat) {
      return;
    }

    chat.typingUsers = [this.contactUser];

    window.setTimeout(() => {
      chat.typingUsers = [];
      chat.addMessage({
        text: this.i18n.translate('chatUi.mockReply'),
        author: this.contactUser,
        timeStamp: new Date(),
      });
    }, 1400);
  }
}