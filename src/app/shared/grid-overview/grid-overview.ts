import {
  AfterViewInit,
  Component,
  computed,
  inject,
  OnDestroy,
  signal,
  ViewChild,
} from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import {
  FilterService,
  GridComponent,
  GridModule,
  SearchService,
  SelectionService,
  SortService,
  VirtualScrollService,
} from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { closest, L10n } from '@syncfusion/ej2-base';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TranslateService } from '../../core/i18n/translate.service';
import { ThemeService } from '../../core/theme/theme.service';
import {
  getTradeData,
  GridOverviewRow,
  GridStatusKey,
  GridTrustKey,
  toGridOverviewRow,
} from './grid-data';

interface DataRangeOption {
  text: string;
  value: number;
}

const SKELETON_ROW_COUNT = 8;
const SEARCH_DEBOUNCE_MS = 300;
const SCROLL_MASK_MIN_MS = 280;

/** Stable grid config objects — inline literals in the template reset sort/filter on every CD cycle. */
const GRID_FILTER_SETTINGS = { type: 'Menu' as const };
const GRID_LOADING_INDICATOR = { indicatorType: 'Shimmer' as const };
const GRID_SELECTION_SETTINGS = {
  persistSelection: true,
  type: 'Multiple' as const,
  checkboxOnly: true,
};
const GRID_SORT_SETTINGS = {
  columns: [{ field: 'Employees', direction: 'Ascending' as const }],
  allowUnsort: true,
};

const TRUST_SORT_ORDER: Record<GridTrustKey, number> = {
  perfect: 0,
  sufficient: 1,
  insufficient: 2,
};

L10n.load({
  en: {
    grid: {
      EmptyRecord: 'No records to display',
      FilterButton: 'Filter',
      ClearButton: 'Clear',
      StartsWith: 'Starts With',
      EndsWith: 'Ends With',
      Contains: 'Contains',
      Equal: 'Equal',
      NotEqual: 'Not Equal',
      LessThan: 'Less Than',
      LessThanOrEqual: 'Less Than Or Equal',
      GreaterThan: 'Greater Than',
      GreaterThanOrEqual: 'Greater Than Or Equal',
      ChooseDate: 'Choose a Date',
      SortAscending: 'Sort Ascending',
      SortDescending: 'Sort Descending',
      Search: 'Search',
    },
  },
  ar: {
    grid: {
      EmptyRecord: 'لا توجد سجلات للعرض',
      FilterButton: 'تصفية',
      ClearButton: 'مسح',
      StartsWith: 'يبدأ بـ',
      EndsWith: 'ينتهي بـ',
      Contains: 'يحتوي على',
      Equal: 'يساوي',
      NotEqual: 'لا يساوي',
      LessThan: 'أقل من',
      LessThanOrEqual: 'أقل من أو يساوي',
      GreaterThan: 'أكبر من',
      GreaterThanOrEqual: 'أكبر من أو يساوي',
      ChooseDate: 'اختر تاريخاً',
      SortAscending: 'ترتيب تصاعدي',
      SortDescending: 'ترتيب تنازلي',
      Search: 'بحث',
    },
  },
});

@Component({
  selector: 'app-grid-overview',
  standalone: true,
  imports: [GridModule, DropDownListModule, TextBoxModule, TranslatePipe],
  providers: [VirtualScrollService, SelectionService, SortService, FilterService, SearchService],
  templateUrl: './grid-overview.html',
  styleUrl: './grid-overview.scss',
})
export class GridOverview implements AfterViewInit, OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly i18n = inject(TranslateService);

  @ViewChild('overviewGrid') private grid?: GridComponent;

  protected readonly skeletonPlaceholders = Array.from(
    { length: SKELETON_ROW_COUNT },
    (_, index) => index,
  );
  protected readonly ratingStars = [1, 2, 3, 4, 5] as const;

  private readonly records = signal(getTradeData(1000));
  protected readonly searchText = signal('');
  protected readonly isBlockingLoading = signal(true);
  protected readonly isScrollLoading = signal(false);

  protected readonly dataRangeOptions = computed<DataRangeOption[]>(() => {
    this.i18n.language();
    return [
      { text: this.i18n.translate('gridOverview.dataRange.1000'), value: 1000 },
      { text: this.i18n.translate('gridOverview.dataRange.10000'), value: 10000 },
      { text: this.i18n.translate('gridOverview.dataRange.100000'), value: 100000 },
    ];
  });

  protected readonly rows = computed<GridOverviewRow[]>(() => {
    this.i18n.language();
    const isArabic = this.theme.language() === 'ar';

    return this.records().map((record) =>
      toGridOverviewRow(record, isArabic, {
        status: {
          active: this.i18n.translate('gridOverview.status.active'),
          inactive: this.i18n.translate('gridOverview.status.inactive'),
        },
        trustworthiness: {
          perfect: this.i18n.translate('gridOverview.trustworthiness.perfect'),
          sufficient: this.i18n.translate('gridOverview.trustworthiness.sufficient'),
          insufficient: this.i18n.translate('gridOverview.trustworthiness.insufficient'),
        },
      }),
    );
  });

  protected readonly displayRows = computed<GridOverviewRow[]>(() => {
    this.searchText();
    const query = this.searchText().trim().toLowerCase();
    const data = this.rows();

    if (!query) {
      return data;
    }

    return data.filter((row) => {
      const haystack = [
        row.Employees,
        row.Designation,
        row.Mail,
        row.Location,
        row.Status,
        row.Trustworthiness,
        row.Address,
        String(row.EmployeeID),
        String(row.Rating),
        String(row.CurrentSalary),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  });

  protected readonly gridLocale = computed(() =>
    this.theme.language() === 'ar' ? 'ar' : 'en',
  );

  /** Bound by reference so Syncfusion keeps sort state between change-detection runs. */
  protected readonly filterSettings = GRID_FILTER_SETTINGS;
  protected readonly loadingIndicator = GRID_LOADING_INDICATOR;
  protected readonly selectionSettings = GRID_SELECTION_SETTINGS;
  protected readonly sortSettings = GRID_SORT_SETTINGS;

  protected selectedDataCount = 1000;
  protected loadTimeMs: number | null = null;

  private loadStartedAt: number | null = performance.now();
  private pendingLoadMeasurement = true;
  private searchDebounce?: ReturnType<typeof setTimeout>;
  private blockingTimer?: ReturnType<typeof setTimeout>;
  private scrollMaskTimer?: ReturnType<typeof setTimeout>;
  private scrollContent?: HTMLElement | null;
  private scrollMaskShownAt = 0;

  ngAfterViewInit(): void {
    this.beginBlockingLoad();
  }

  ngOnDestroy(): void {
    clearTimeout(this.searchDebounce);
    clearTimeout(this.blockingTimer);
    clearTimeout(this.scrollMaskTimer);
    this.scrollContent?.removeEventListener('scroll', this.onContentScroll);
  }

  protected isRtl(): boolean {
    return this.theme.direction() === 'rtl';
  }

  protected softwareValue(row: GridOverviewRow): number {
    let value = row.Software;
    if (value <= 20) {
      value += 30;
    }
    return value;
  }

  protected employeeIcon(type: GridOverviewRow['EmployeeImg']): string {
    return type === 'usermale' ? 'person' : 'face';
  }

  protected statusIcon(key: GridStatusKey): string {
    return key === 'active' ? 'check_circle' : 'highlight_off';
  }

  protected trustIcon(key: GridTrustKey): string {
    const icons: Record<GridTrustKey, string> = {
      perfect: 'verified',
      sufficient: 'check_circle',
      insufficient: 'warning',
    };
    return icons[key];
  }

  /** Sort trust levels by business order, not translated label text. */
  protected readonly trustSortComparer = (
    _reference: string,
    _comparer: string,
    referenceData: GridOverviewRow,
    comparerData: GridOverviewRow,
  ): number =>
    TRUST_SORT_ORDER[referenceData.TrustworthinessKey] -
    TRUST_SORT_ORDER[comparerData.TrustworthinessKey];

  /** Sort by the percentage shown in the progress bar, not the raw field value. */
  protected readonly softwareSortComparer = (
    _reference: string,
    _comparer: string,
    referenceData: GridOverviewRow,
    comparerData: GridOverviewRow,
  ): number =>
    this.softwareValue(referenceData) - this.softwareValue(comparerData);

  protected onGridCreated(): void {
    this.attachScrollListener();
  }

  protected onSearch(event: { value?: string }): void {
    const value = event.value ?? '';
    this.beginBlockingLoad();

    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => {
      this.searchText.set(value);
      this.endBlockingLoad();
    }, SEARCH_DEBOUNCE_MS);
  }

  protected onDataRangeChange(event: { value: number }): void {
    const nextCount = event.value ?? 1000;
    this.selectedDataCount = nextCount;
    this.pendingLoadMeasurement = true;
    this.loadStartedAt = performance.now();
    this.loadTimeMs = null;
    this.beginBlockingLoad();
    this.records.set(getTradeData(nextCount));
  }

  protected onDataBound(): void {
    this.endBlockingLoad();

    if (!this.pendingLoadMeasurement || this.loadStartedAt === null) {
      return;
    }

    this.loadTimeMs = Math.round(performance.now() - this.loadStartedAt);
    this.pendingLoadMeasurement = false;
    this.loadStartedAt = null;
  }

  protected onActionBegin(args: { requestType?: string }): void {
    // Sorting is instant with virtual scroll — do not flash the blocking skeleton overlay.
    const blockingTypes = ['searching', 'refresh', 'filtering'];
    if (blockingTypes.includes(args.requestType ?? '')) {
      this.beginBlockingLoad();
    }
  }

  protected onActionComplete(args: {
    requestType?: string;
    filterModel?: { options?: { field?: string }; dialogObj?: { element: HTMLElement } };
  }): void {
    const blockingTypes = ['searching', 'refresh', 'filtering'];
    if (blockingTypes.includes(args.requestType ?? '')) {
      this.endBlockingLoad();
    }

    if (args.requestType !== 'filterchoicerequest' || !args.filterModel?.options?.field) {
      return;
    }

    const field = args.filterModel.options.field;
    if (field !== 'Trustworthiness' && field !== 'Rating' && field !== 'StatusKey') {
      return;
    }

    const span = args.filterModel.dialogObj?.element.querySelector('.e-selectall');
    if (span) {
      closest(span as Element, '.e-ftrchk')?.classList.add('e-hide');
    }
  }

  private readonly onContentScroll = (): void => {
    if (this.isBlockingLoading()) {
      return;
    }

    this.isScrollLoading.set(true);
    this.scrollMaskShownAt = performance.now();
    this.grid?.showMaskRow('Y');

    clearTimeout(this.scrollMaskTimer);
    this.scrollMaskTimer = setTimeout(() => this.endScrollMask(), SCROLL_MASK_MIN_MS);
  };

  private attachScrollListener(): void {
    const content = this.grid?.getContent()?.querySelector('.e-content') as HTMLElement | null;
    if (!content || content === this.scrollContent) {
      return;
    }

    this.scrollContent?.removeEventListener('scroll', this.onContentScroll);
    this.scrollContent = content;
    this.scrollContent.addEventListener('scroll', this.onContentScroll, { passive: true });
  }

  private beginBlockingLoad(): void {
    this.isBlockingLoading.set(true);
  }

  private endBlockingLoad(): void {
    clearTimeout(this.blockingTimer);
    this.blockingTimer = setTimeout(() => {
      this.isBlockingLoading.set(false);
      this.attachScrollListener();
    }, 150);
  }

  private endScrollMask(): void {
    const elapsed = performance.now() - this.scrollMaskShownAt;
    if (elapsed < SCROLL_MASK_MIN_MS) {
      this.scrollMaskTimer = setTimeout(
        () => this.endScrollMask(),
        SCROLL_MASK_MIN_MS - elapsed,
      );
      return;
    }

    this.isScrollLoading.set(false);
    this.grid?.removeMaskRow();
  }
}
