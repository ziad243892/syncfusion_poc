import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppLanguage } from '../theme/theme.models';

type TranslationTree = Record<string, unknown>;

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private readonly http = inject(HttpClient);
  private readonly dictionary = signal<TranslationTree>({});
  private readonly revision = signal(0);

  readonly language = signal<AppLanguage>('en');

  async load(language: AppLanguage): Promise<void> {
    const data = await firstValueFrom(
      this.http.get<TranslationTree>(`assets/i18n/${language}.json`),
    );
    this.dictionary.set(data);
    this.language.set(language);
    this.revision.update((value) => value + 1);
  }

  translate(key: string, params?: Record<string, string | number>): string {
    this.revision();
    const value = this.resolveKey(key, this.dictionary());

    if (typeof value !== 'string') {
      return key;
    }

    return this.interpolate(value, params);
  }

  private resolveKey(key: string, tree: TranslationTree): unknown {
    return key.split('.').reduce<unknown>((current, part) => {
      if (current && typeof current === 'object' && part in current) {
        return (current as TranslationTree)[part];
      }
      return undefined;
    }, tree);
  }

  private interpolate(
    value: string,
    params?: Record<string, string | number>,
  ): string {
    if (!params) {
      return value;
    }

    return Object.entries(params).reduce(
      (result, [name, paramValue]) =>
        result.replaceAll(`{{${name}}}`, String(paramValue)),
      value,
    );
  }
}
