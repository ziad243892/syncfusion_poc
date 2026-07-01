export type AppLanguage = 'en' | 'ar';
export type TextDirection = 'ltr' | 'rtl';
export type ColorScheme = 'light' | 'dark';

export const ZOOM_LEVELS = [90, 100, 110, 125, 150] as const;
export type ZoomLevel = (typeof ZOOM_LEVELS)[number];

export interface AppPreferences {
  language: AppLanguage;
  direction: TextDirection;
  colorScheme: ColorScheme;
  grayMode: boolean;
  zoomLevel: ZoomLevel;
}

export const DEFAULT_PREFERENCES: AppPreferences = {
  language: 'en',
  direction: 'ltr',
  colorScheme: 'light',
  grayMode: false,
  zoomLevel: 100,
};

export const STORAGE_KEY = 'syncfusion-poc-preferences';
