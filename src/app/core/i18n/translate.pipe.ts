import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  private readonly i18n = inject(TranslateService);

  transform(
    key: string,
    params?: Record<string, string | number>,
  ): string {
    return this.i18n.translate(key, params);
  }
}
