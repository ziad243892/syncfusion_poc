import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// 1. استيراد دالة تسجيل الترخيص من Syncfusion
import { registerLicense } from '@syncfusion/ej2-base';

// 2. تسجيل المفتاح الخاص بك
registerLicense('Ngo9BigBOggjGyl/VkV+Xk9HfVhdXmNWfFN0Q3NbdVtyflVOcC0sT3RfQFtjT31TdkdmUXtWeX1dR2tfUg==');

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
