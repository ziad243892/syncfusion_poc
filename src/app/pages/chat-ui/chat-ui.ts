import { Component, inject, viewChild } from '@angular/core';
import {
  AIAssistViewComponent,
  AIAssistViewModule,
  PromptRequestEventArgs,
} from '@syncfusion/ej2-angular-interactive-chat';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TranslateService } from '../../core/i18n/translate.service';
import { ThemeService } from '../../core/theme/theme.service';
import {
  CHAT_DEFAULT_RESPONSE,
  CHAT_PROMPT_PAIRS,
  CHAT_PROMPT_SUGGESTIONS,
  CHAT_RESPONSE_DELAY_MS,
  CHAT_TOOLBAR_SETTINGS,
} from './chat-ui-data';

@Component({
  selector: 'app-chat-ui',
  standalone: true,
  imports: [AIAssistViewModule, TranslatePipe],
  templateUrl: './chat-ui.html',
  styleUrl: './chat-ui.scss',
})
export class ChatUiPage {
  private readonly theme = inject(ThemeService);
  private readonly i18n = inject(TranslateService);
  private readonly assistViewRef = viewChild<AIAssistViewComponent>('assistView');

  protected readonly promptSuggestions = CHAT_PROMPT_SUGGESTIONS;
  protected readonly toolbarSettings = CHAT_TOOLBAR_SETTINGS;

  protected isRtl(): boolean {
    return this.theme.direction() === 'rtl';
  }

  /** Localized header above suggestion chips inside AssistView. */
  protected promptSuggestionsHeader(): string {
    return this.i18n.translate('chatUi.suggestionsHeader');
  }

  /** Mock handler — looks up canned responses or returns the default integration message. */
  protected onPromptRequest(args: PromptRequestEventArgs): void {
    const assistView = this.assistViewRef();
    if (!assistView) {
      return;
    }

    window.setTimeout(() => {
      const match = CHAT_PROMPT_PAIRS.find((pair) => pair.prompt === args.prompt);
      assistView.addPromptResponse(match?.response ?? CHAT_DEFAULT_RESPONSE);
    }, CHAT_RESPONSE_DELAY_MS);
  }
}
