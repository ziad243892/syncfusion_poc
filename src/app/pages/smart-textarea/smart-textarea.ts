import { Component, inject, viewChild } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import {
  SmartTextAreaComponent,
  SmartTextAreaModule,
} from '@syncfusion/ej2-angular-inputs';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { ThemeService } from '../../core/theme/theme.service';
import { mockAiSuggestionHandler } from './mock-ai-handler';
import {
  DEFAULT_ROLE,
  ROLE_OPTIONS,
  SMART_TEXTAREA_PRESETS,
} from './smart-textarea-data';

@Component({
  selector: 'app-smart-textarea',
  standalone: true,
  imports: [DropDownListModule, SmartTextAreaModule, TranslatePipe],
  templateUrl: './smart-textarea.html',
  styleUrl: './smart-textarea.scss',
})
export class SmartTextareaPage {
  private readonly theme = inject(ThemeService);
  private readonly textareaRef = viewChild<SmartTextAreaComponent>('textareaObj');

  protected readonly rolesData = ROLE_OPTIONS;
  protected readonly selectedRole = DEFAULT_ROLE;
  protected readonly userPhrases =
    SMART_TEXTAREA_PRESETS.find((preset) => preset.userRole === DEFAULT_ROLE)?.userPhrases ?? [];
  protected readonly dropdownWidth = '100%';
  protected readonly serverAIRequest = mockAiSuggestionHandler;

  protected isRtl(): boolean {
    return this.theme.direction() === 'rtl';
  }

  /** Updates role-specific phrases when the user picks a different preset. */
  protected onRoleChange(args: { value: string }): void {
    const textarea = this.textareaRef();
    const selectedPreset = SMART_TEXTAREA_PRESETS.find((preset) => preset.userRole === args.value);

    if (!textarea || !selectedPreset) {
      return;
    }

    textarea.userRole = selectedPreset.userRole;
    textarea.UserPhrases = selectedPreset.userPhrases;
  }
}
