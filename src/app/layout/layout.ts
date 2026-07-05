import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { TranslatePipe } from '../core/i18n/translate.pipe';
import { ZOOM_LEVELS } from '../core/theme/theme.models';
import { ThemeService } from '../core/theme/theme.service';

interface NavItem {
  path: string;
  icon: string;
  labelKey: string;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SidebarModule, TranslatePipe],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  protected readonly theme = inject(ThemeService);
  protected readonly sidebarOpen = signal(false);
  protected readonly currentYear = new Date().getFullYear();
  protected readonly appVersion = '1.0.0';

  protected readonly navItems: NavItem[] = [
    { path: '/dashboard', icon: 'dashboard', labelKey: 'nav.dashboard' },
    { path: '/employees', icon: 'groups', labelKey: 'nav.employees' },
    { path: '/forms', icon: 'description', labelKey: 'nav.forms' },
    { path: '/smart-textarea', icon: 'auto_awesome', labelKey: 'nav.smartTextarea' },
    { path: '/analysis', icon: 'analytics', labelKey: 'nav.analysis' },
    { path: '/treegrid', icon: 'account_tree', labelKey: 'nav.treegrid' },
  ];

  protected readonly isRtl = computed(() => this.theme.direction() === 'rtl');
  protected readonly sidebarType = computed<'Push' | 'Over'>(() =>
    this.isMobile() ? 'Over' : 'Push',
  );

  protected readonly isMobile = signal(this.readMobileState());

  constructor() {
    window.addEventListener('resize', () => {
      this.isMobile.set(this.readMobileState());
      if (!this.isMobile()) {
        this.sidebarOpen.set(true);
      }
    });

    this.sidebarOpen.set(!this.isMobile());
  }

  protected onSidebarCreated(): void {
    if (!this.isMobile()) {
      this.sidebarOpen.set(true);
    }
  }

  protected toggleSidebar(): void {
    this.sidebarOpen.update((open) => !open);
  }

  protected closeSidebarOnMobile(): void {
    if (this.isMobile()) {
      this.sidebarOpen.set(false);
    }
  }

  protected toggleLanguage(): void {
    void this.theme.toggleLanguage();
  }

  protected resetAccessibility(): void {
    void this.theme.reset();
  }

  protected readonly canZoomIn = computed(
    () => this.theme.zoomLevel() < ZOOM_LEVELS[ZOOM_LEVELS.length - 1],
  );

  protected readonly canZoomOut = computed(() => this.theme.zoomLevel() > ZOOM_LEVELS[0]);

  private readMobileState(): boolean {
    return window.matchMedia('(max-width: 900px)').matches;
  }
}
