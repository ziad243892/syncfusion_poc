import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { ThemeService } from '../../core/theme/theme.service';
import { DEPARTMENTS, ROLES } from '../../home/data';

interface SelectOption {
  id: string;
  label: string;
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, DropDownListModule, TextBoxModule, TranslatePipe],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class FormsPage {
  private readonly theme = inject(ThemeService);

  protected fullName = '';
  protected email = '';
  protected phone = '';
  protected department = 'engineering';
  protected role = 'engineer';
  protected startDate = '';
  protected remoteWork = false;
  protected notifications = true;
  protected feedback = signal('');

  protected readonly departmentOptions = computed<SelectOption[]>(() => {
    const isArabic = this.theme.language() === 'ar';
    return DEPARTMENTS.map((item) => ({
      id: item.id,
      label: isArabic ? item.labelAr : item.labelEn,
    }));
  });

  protected readonly roleOptions = computed<SelectOption[]>(() => {
    const isArabic = this.theme.language() === 'ar';
    return ROLES.map((item) => ({
      id: item.id,
      label: isArabic ? item.labelAr : item.labelEn,
    }));
  });

  protected save(): void {
    this.feedback.set('forms.messages.saved');
  }

  protected reset(): void {
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.department = 'engineering';
    this.role = 'engineer';
    this.startDate = '';
    this.remoteWork = false;
    this.notifications = true;
    this.feedback.set('forms.messages.reset');
  }

  protected isRtl(): boolean {
    return this.theme.direction() === 'rtl';
  }
}
