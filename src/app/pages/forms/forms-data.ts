/** Bilingual option used across Syncfusion dropdown-style controls. */
export interface FormOption {
  id: string;
  labelEn: string;
  labelAr: string;
}

export const EMPLOYMENT_TYPES: FormOption[] = [
  { id: 'full-time', labelEn: 'Full-time', labelAr: 'دوام كامل' },
  { id: 'part-time', labelEn: 'Part-time', labelAr: 'دوام جزئي' },
  { id: 'contract', labelEn: 'Contract', labelAr: 'عقد' },
];

export const PRIORITY_LEVELS: FormOption[] = [
  { id: 'low', labelEn: 'Low', labelAr: 'منخفض' },
  { id: 'medium', labelEn: 'Medium', labelAr: 'متوسط' },
  { id: 'high', labelEn: 'High', labelAr: 'عالي' },
];

export const CONTACT_METHODS: FormOption[] = [
  { id: 'email', labelEn: 'Email', labelAr: 'البريد الإلكتروني' },
  { id: 'phone', labelEn: 'Phone', labelAr: 'الهاتف' },
  { id: 'sms', labelEn: 'SMS', labelAr: 'رسالة نصية' },
];

export const CITIES: FormOption[] = [
  { id: 'riyadh', labelEn: 'Riyadh', labelAr: 'الرياض' },
  { id: 'jeddah', labelEn: 'Jeddah', labelAr: 'جدة' },
  { id: 'dubai', labelEn: 'Dubai', labelAr: 'دبي' },
  { id: 'cairo', labelEn: 'Cairo', labelAr: 'القاهرة' },
  { id: 'amman', labelEn: 'Amman', labelAr: 'عمّان' },
];

export const SKILLS: FormOption[] = [
  { id: 'angular', labelEn: 'Angular', labelAr: 'أنجولار' },
  { id: 'typescript', labelEn: 'TypeScript', labelAr: 'تايب سكربت' },
  { id: 'dotnet', labelEn: '.NET', labelAr: 'دوت نت' },
  { id: 'sql', labelEn: 'SQL', labelAr: 'إس كيو إل' },
  { id: 'azure', labelEn: 'Azure', labelAr: 'أزور' },
  { id: 'devops', labelEn: 'DevOps', labelAr: 'ديف أوبس' },
];

export const NOTIFICATION_TOPICS: FormOption[] = [
  { id: 'product', labelEn: 'Product updates', labelAr: 'تحديثات المنتج' },
  { id: 'security', labelEn: 'Security alerts', labelAr: 'تنبيهات الأمان' },
  { id: 'billing', labelEn: 'Billing', labelAr: 'الفوترة' },
  { id: 'newsletter', labelEn: 'Newsletter', labelAr: 'النشرة الإخبارية' },
];
