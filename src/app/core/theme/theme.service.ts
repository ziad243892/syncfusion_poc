import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '../i18n/translate.service';
import {
  AppLanguage,
  AppPreferences,
  ColorScheme,
  DEFAULT_PREFERENCES,
  STORAGE_KEY,
  TextDirection,
  ZOOM_LEVELS,
  ZoomLevel,
} from './theme.models';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly i18n = inject(TranslateService);

  readonly language = signal<AppLanguage>(DEFAULT_PREFERENCES.language);
  readonly direction = signal<TextDirection>(DEFAULT_PREFERENCES.direction);
  readonly colorScheme = signal<ColorScheme>(DEFAULT_PREFERENCES.colorScheme);
  readonly grayMode = signal(DEFAULT_PREFERENCES.grayMode);
  readonly zoomLevel = signal<ZoomLevel>(DEFAULT_PREFERENCES.zoomLevel);

  async init(): Promise<void> {
    const saved = this.readPreferences();
    await this.i18n.load(saved.language);
    this.applyPreferences(saved, false);
  }

  async setLanguage(language: AppLanguage): Promise<void> {
    await this.i18n.load(language);
    this.language.set(language);
    document.documentElement.lang = language;

    if (language === 'ar') {
      this.setDirection('rtl');
      return;
    }

    this.setDirection('ltr');
  }

  async toggleLanguage(): Promise<void> {
    const next: AppLanguage = this.language() === 'en' ? 'ar' : 'en';
    await this.setLanguage(next);
  }

  setDirection(direction: TextDirection): void {
    this.direction.set(direction);
    document.documentElement.setAttribute('dir', direction);
    this.persist();
  }

  toggleDirection(): void {
    this.setDirection(this.direction() === 'ltr' ? 'rtl' : 'ltr');
  }

  setColorScheme(colorScheme: ColorScheme): void {
    this.colorScheme.set(colorScheme);
    this.applyDarkModeClass(colorScheme === 'dark');
    this.persist();
  }

  toggleColorScheme(): void {
    this.setColorScheme(this.colorScheme() === 'light' ? 'dark' : 'light');
  }

  setGrayMode(enabled: boolean): void {
    this.grayMode.set(enabled);
    document.documentElement.classList.toggle('app-gray-mode', enabled);
    this.persist();
  }

  toggleGrayMode(): void {
    this.setGrayMode(!this.grayMode());
  }

  setZoomLevel(level: ZoomLevel): void {
    this.zoomLevel.set(level);
    this.applyZoom(level);
    this.persist();
  }

  zoomIn(): void {
    const currentIndex = ZOOM_LEVELS.indexOf(this.zoomLevel());
    if (currentIndex < ZOOM_LEVELS.length - 1) {
      this.setZoomLevel(ZOOM_LEVELS[currentIndex + 1]);
    }
  }

  zoomOut(): void {
    const currentIndex = ZOOM_LEVELS.indexOf(this.zoomLevel());
    if (currentIndex > 0) {
      this.setZoomLevel(ZOOM_LEVELS[currentIndex - 1]);
    }
  }

  async reset(): Promise<void> {
    localStorage.removeItem(STORAGE_KEY);
    await this.i18n.load(DEFAULT_PREFERENCES.language);
    this.applyPreferences(DEFAULT_PREFERENCES, true);
  }

  private applyDarkModeClass(isDark: boolean): void {
    document.documentElement.classList.toggle('e-dark-mode', isDark);
    document.body.classList.toggle('e-dark-mode', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }

  private applyZoom(level: ZoomLevel): void {
    const factor = level / 100;
    document.documentElement.style.setProperty('--app-zoom-factor', String(factor));
    // Scales the full UI including Syncfusion px-based components (Chrome/Edge).
    document.documentElement.style.zoom = String(factor);
  }

  private applyPreferences(preferences: AppPreferences, persist: boolean): void {
    this.language.set(preferences.language);
    this.direction.set(preferences.direction);
    this.colorScheme.set(preferences.colorScheme);
    this.grayMode.set(preferences.grayMode);
    this.zoomLevel.set(preferences.zoomLevel);

    document.documentElement.lang = preferences.language;
    document.documentElement.setAttribute('dir', preferences.direction);
    this.applyDarkModeClass(preferences.colorScheme === 'dark');
    document.documentElement.classList.toggle('app-gray-mode', preferences.grayMode);
    this.applyZoom(preferences.zoomLevel);

    if (persist) {
      this.persist();
    }
  }

  private persist(): void {
    const preferences: AppPreferences = {
      language: this.language(),
      direction: this.direction(),
      colorScheme: this.colorScheme(),
      grayMode: this.grayMode(),
      zoomLevel: this.zoomLevel(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }

  private readPreferences(): AppPreferences {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return DEFAULT_PREFERENCES;
      }

      const parsed = JSON.parse(raw) as Partial<AppPreferences>;
      const zoomLevel = ZOOM_LEVELS.includes(parsed.zoomLevel as ZoomLevel)
        ? (parsed.zoomLevel as ZoomLevel)
        : DEFAULT_PREFERENCES.zoomLevel;

      return {
        language: parsed.language ?? DEFAULT_PREFERENCES.language,
        direction: parsed.direction ?? DEFAULT_PREFERENCES.direction,
        colorScheme: parsed.colorScheme ?? DEFAULT_PREFERENCES.colorScheme,
        grayMode: parsed.grayMode ?? DEFAULT_PREFERENCES.grayMode,
        zoomLevel,
      };
    } catch {
      return DEFAULT_PREFERENCES;
    }
  }
}
