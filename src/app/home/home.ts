import { Component } from '@angular/core';
import { TranslatePipe } from '../core/i18n/translate.pipe';
import { GridOverview } from '../shared/grid-overview/grid-overview';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe, GridOverview],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly stats = [
    { labelKey: 'home.stats.employees', value: '128' },
    { labelKey: 'home.stats.departments', value: '8' },
    { labelKey: 'home.stats.active', value: '94' },
    { labelKey: 'home.stats.pending', value: '12' },
  ];
}
