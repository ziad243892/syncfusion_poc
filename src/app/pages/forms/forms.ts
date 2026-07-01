import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ButtonModule,
  CheckBoxModule,
  RadioButtonModule,
  SwitchModule,
} from '@syncfusion/ej2-angular-buttons';
import {
  AutoCompleteModule,
  ComboBoxModule,
  DropDownListModule,
  ListBoxModule,
  MultiSelectModule,
} from '@syncfusion/ej2-angular-dropdowns';
import {
  ColorPickerModule,
  MaskedTextBoxModule,
  NumericTextBoxModule,
  OtpInputModule,
  RatingModule,
  SliderModule,
  TextAreaModule,
  TextBoxModule,
  UploaderModule,
} from '@syncfusion/ej2-angular-inputs';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { ThemeService } from '../../core/theme/theme.service';
import { DEPARTMENTS, ROLES } from '../../home/data';
import {
  CITIES,
  CONTACT_METHODS,
  EMPLOYMENT_TYPES,
  FormOption,
  NOTIFICATION_TOPICS,
  PRIORITY_LEVELS,
  SKILLS,
} from './forms-data';

interface SelectOption {
  id: string;
  label: string;
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    FormsModule,
    AutoCompleteModule,
    ButtonModule,
    CheckBoxModule,
    ColorPickerModule,
    ComboBoxModule,
    DropDownListModule,
    ListBoxModule,
    MaskedTextBoxModule,
    MultiSelectModule,
    NumericTextBoxModule,
    OtpInputModule,
    RadioButtonModule,
    RatingModule,
    SliderModule,
    SwitchModule,
    TextAreaModule,
    TextBoxModule,
    TranslatePipe,
    UploaderModule,
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class FormsPage {
  private readonly theme = inject(ThemeService);

  protected feedback = signal('');

  // ── 1. Employee registration ──────────────────────────────────────────────
  protected fullName = '';
  protected email = '';
  protected phone = '';
  protected department = 'engineering';
  protected role = 'engineer';
  protected employmentType = 'full-time';
  protected remoteWork = false;
  protected notifications = true;

  // ── 2. Contact & input types ──────────────────────────────────────────────
  protected contactName = '';
  protected mobile = '';
  protected budget = 5000;
  protected city = '';
  protected notes = '';

  // ── 3. Job application (selection controls) ───────────────────────────────
  protected jobTitle = '';
  protected experienceYears = 3;
  protected selectedSkills: string[] = ['angular', 'typescript'];
  protected listboxSkills: string[] = ['sql', 'azure'];

  // ── 4. Preferences & toggles ──────────────────────────────────────────────
  protected darkModePref = false;
  protected marketingEmails = true;
  protected contactMethod = 'email';
  protected selectedTopics: string[] = ['product', 'security'];

  // ── 5. Survey (slider, rating, color) ─────────────────────────────────────
  protected satisfaction = 4;
  protected effortLevel = 60;
  protected brandColor = '#4f46e5';
  protected priority = 'medium';

  // ── 6. Document upload ────────────────────────────────────────────────────
  protected documentTitle = '';
  protected documentCategory = 'report';

  // ── 7. Security (OTP) ─────────────────────────────────────────────────────
  protected otpValue = '';
  protected securityEmail = '';

  protected readonly departmentOptions = computed(() =>
    this.toSelectOptions(DEPARTMENTS.map((item) => ({
      id: item.id,
      labelEn: item.labelEn,
      labelAr: item.labelAr,
    }))),
  );

  protected readonly roleOptions = computed(() =>
    this.toSelectOptions(ROLES.map((item) => ({
      id: item.id,
      labelEn: item.labelEn,
      labelAr: item.labelAr,
    }))),
  );

  protected readonly employmentTypeOptions = computed(() => this.toSelectOptions(EMPLOYMENT_TYPES));
  protected readonly cityOptions = computed(() => this.toSelectOptions(CITIES));
  protected readonly citySuggestions = computed(() => this.cityOptions().map((item) => item.label));
  protected readonly skillOptions = computed(() => this.toSelectOptions(SKILLS));
  protected readonly contactMethodOptions = computed(() => this.toSelectOptions(CONTACT_METHODS));
  protected readonly topicOptions = computed(() => this.toSelectOptions(NOTIFICATION_TOPICS));
  protected readonly priorityOptions = computed(() => this.toSelectOptions(PRIORITY_LEVELS));

  protected readonly documentCategories = computed(() =>
    this.toSelectOptions([
      { id: 'report', labelEn: 'Report', labelAr: 'تقرير' },
      { id: 'invoice', labelEn: 'Invoice', labelAr: 'فاتورة' },
      { id: 'contract', labelEn: 'Contract', labelAr: 'عقد' },
    ]),
  );

  protected saveRegistration(): void {
    this.feedback.set('forms.messages.registrationSaved');
  }

  protected saveContact(): void {
    this.feedback.set('forms.messages.contactSaved');
  }

  protected saveApplication(): void {
    this.feedback.set('forms.messages.applicationSaved');
  }

  protected savePreferences(): void {
    this.feedback.set('forms.messages.preferencesSaved');
  }

  protected saveSurvey(): void {
    this.feedback.set('forms.messages.surveySaved');
  }

  protected saveDocument(): void {
    this.feedback.set('forms.messages.documentSaved');
  }

  protected verifyOtp(): void {
    this.feedback.set('forms.messages.otpVerified');
  }

  protected resetRegistration(): void {
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.department = 'engineering';
    this.role = 'engineer';
    this.employmentType = 'full-time';
    this.remoteWork = false;
    this.notifications = true;
    this.feedback.set('forms.messages.reset');
  }

  protected resetContact(): void {
    this.contactName = '';
    this.mobile = '';
    this.budget = 5000;
    this.city = '';
    this.notes = '';
    this.feedback.set('forms.messages.reset');
  }

  protected resetApplication(): void {
    this.jobTitle = '';
    this.experienceYears = 3;
    this.selectedSkills = ['angular', 'typescript'];
    this.listboxSkills = ['sql', 'azure'];
    this.feedback.set('forms.messages.reset');
  }

  protected resetPreferences(): void {
    this.darkModePref = false;
    this.marketingEmails = true;
    this.contactMethod = 'email';
    this.selectedTopics = ['product', 'security'];
    this.feedback.set('forms.messages.reset');
  }

  protected resetSurvey(): void {
    this.satisfaction = 4;
    this.effortLevel = 60;
    this.brandColor = '#4f46e5';
    this.priority = 'medium';
    this.feedback.set('forms.messages.reset');
  }

  protected resetDocument(): void {
    this.documentTitle = '';
    this.documentCategory = 'report';
    this.feedback.set('forms.messages.reset');
  }

  protected resetSecurity(): void {
    this.otpValue = '';
    this.securityEmail = '';
    this.feedback.set('forms.messages.reset');
  }

  protected isRtl(): boolean {
    return this.theme.direction() === 'rtl';
  }

  /** Maps bilingual static options to the active UI language. */
  private toSelectOptions(items: FormOption[]): SelectOption[] {
    const isArabic = this.theme.language() === 'ar';
    return items.map((item) => ({
      id: item.id,
      label: isArabic ? item.labelAr : item.labelEn,
    }));
  }
}
