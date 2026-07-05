import {

  Component,

  computed,

  HostListener,

  inject,

  OnDestroy,

  OnInit,

  signal,

  ViewChild,

} from '@angular/core';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

import {
  FilterService,
  FreezeService,
  ResizeService,
  SortService,
  TreeGridComponent,
  TreeGridModule,
} from '@syncfusion/ej2-angular-treegrid';

import { L10n } from '@syncfusion/ej2-base';

import { TranslatePipe } from '../../core/i18n/translate.pipe';

import { TranslateService } from '../../core/i18n/translate.service';

import { ThemeService } from '../../core/theme/theme.service';

import {

  AssigneeImg,

  getTreeDataForDepth,

  localizeTaskNames,

  ResourceTypeKey,

  TaskStatusKey,

  TrustKey,

  TreeDepthLevel,

  TreeTask,

} from './treegrid-data';



interface DepthOption {

  text: string;

  value: TreeDepthLevel;

}



const SEARCH_DEBOUNCE_MS = 300;

const PAGE_HEIGHT_OFFSET_PX = 300;
const PAGE_HEIGHT_OFFSET_MOBILE_PX = 340;

/** Every column/header cell keeps at least this width (px). */
const COLUMN_CELL_MIN_PX = 120;

/** Task Name (tree) column needs more room for hierarchy labels. */
const TASK_NAME_MIN_PX = 350;

/** Minimum column widths — headers stay on one line; flex columns grow on wide screens. */
const COLUMN_MIN_WIDTHS: Record<string, number> = {
  taskName: TASK_NAME_MIN_PX,
  skNumber: 100,
  taskID: 100,
  assignee: 160,
  department: 130,
  location: 130,
  startDate: 118,
  endDate: 118,
  duration: 100,
  progress: 148,
  statusKey: 118,
  priority: 108,
  rating: 118,
  budget: 108,
  resourceTypeKey: 130,
  trustKey: 118,
  riskKey: 100,
  mail: 200,
  approved: 200,
};

/** Extra horizontal space is distributed to these columns first. */
const FLEX_COLUMN_FIELDS = ['taskName', 'assignee', 'department', 'mail'] as const;



/** Stable config objects — inline literals reset sort/filter on every change-detection cycle. */

const TREE_FILTER_SETTINGS = { type: 'Menu' as const, hierarchyMode: 'Parent' as const };

const TREE_SORT_SETTINGS = {

  columns: [{ field: 'skNumber', direction: 'Ascending' as const }],

  allowUnsort: true,

};



L10n.load({

  en: {

    treegrid: {

      EmptyRecord: 'No records to display',

      ExpandAll: 'Expand All',

      CollapseAll: 'Collapse All',

    },

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

    treegrid: {

      EmptyRecord: 'لا توجد سجلات للعرض',

      ExpandAll: 'توسيع الكل',

      CollapseAll: 'طي الكل',

    },

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

  selector: 'app-treegrid-page',

  standalone: true,

  imports: [TreeGridModule, DropDownListModule, TextBoxModule, TranslatePipe],

  providers: [SortService, FilterService, FreezeService, ResizeService],

  templateUrl: './treegrid.html',

  styleUrl: './treegrid.scss',

})

export class TreegridPage implements OnInit, OnDestroy {

  private readonly theme = inject(ThemeService);

  private readonly i18n = inject(TranslateService);



  @ViewChild('taskTreeGrid') private treeGrid?: TreeGridComponent;



  protected readonly selectedDepth = signal<TreeDepthLevel>(4);

  protected readonly ratingStars = [1, 2, 3, 4, 5] as const;

  protected readonly gridRowHeight = 44;
  protected readonly columnMinWidth = COLUMN_CELL_MIN_PX;
  protected readonly taskNameMinWidth = TASK_NAME_MIN_PX;
  protected gridHeight = 420;



  protected readonly treeData = computed<TreeTask[]>(() => {

    this.i18n.language();

    const isArabic = this.theme.language() === 'ar';

    const data = getTreeDataForDepth(this.selectedDepth(), isArabic);

    return localizeTaskNames(data, (key) => this.i18n.translate(key));

  });



  protected readonly depthOptions = computed<DepthOption[]>(() => {

    this.i18n.language();

    return [

      { text: this.i18n.translate('treegrid.depth.level1'), value: 1 },

      { text: this.i18n.translate('treegrid.depth.level2'), value: 2 },

      { text: this.i18n.translate('treegrid.depth.level3'), value: 3 },

      { text: this.i18n.translate('treegrid.depth.level4'), value: 4 },

    ];

  });



  protected readonly gridLocale = computed(() =>

    this.theme.language() === 'ar' ? 'ar' : 'en',

  );



  protected readonly filterSettings = TREE_FILTER_SETTINGS;

  protected readonly sortSettings = TREE_SORT_SETTINGS;



  private searchDebounce?: ReturnType<typeof setTimeout>;
  private scrollContent?: HTMLElement;
  private readonly onGridScroll = (): void => this.updateFreezeScrollShadow();

  private lastSearch = '';



  ngOnInit(): void {

    this.updateHeight();

  }



  ngOnDestroy(): void {
    clearTimeout(this.searchDebounce);
    clearTimeout(this.fitTimer);
    this.unbindHorizontalScroll();
  }



  @HostListener('window:resize')

  onResize(): void {
    this.updateHeight();
    this.scheduleColumnFit();
  }

  protected onGridCreated(): void {
    this.scheduleColumnFit();
    this.bindHorizontalScroll();
  }



  protected hasChildren(task: TreeTask): boolean {
    return !!task.subtasks?.length;
  }

  protected freezeDirection(): 'Left' | 'Right' {
    return this.isRtl() ? 'Right' : 'Left';
  }

  protected isRtl(): boolean {

    return this.theme.direction() === 'rtl';

  }



  protected progressValue(task: TreeTask): number {

    return Number(task.progress) || 0;

  }



  protected priorityClass(priority: TreeTask['priority']): string {

    return `treegrid-page__priority--${priority.toLowerCase()}`;

  }



  protected statusClass(statusKey?: TaskStatusKey): string {

    return `treegrid-page__status--${statusKey ?? 'notStarted'}`;

  }



  protected riskClass(riskKey?: TreeTask['riskKey']): string {

    return `treegrid-page__risk--${riskKey ?? 'low'}`;

  }



  protected assigneeIcon(type?: AssigneeImg): string {
    return (type ?? 'usermale') === 'usermale' ? 'person' : 'face';
  }

  protected resourceIcon(key?: ResourceTypeKey): string {
    const icons: Record<ResourceTypeKey, string> = {
      design: 'palette',
      development: 'code',
      qa: 'fact_check',
      management: 'groups',
    };
    return icons[key ?? 'development'];
  }

  protected trustIcon(key?: TrustKey): string {
    const icons: Record<TrustKey, string> = {
      perfect: 'verified',
      sufficient: 'check_circle',
      insufficient: 'warning',
    };
    return icons[key ?? 'sufficient'];
  }

  protected statusLabel(statusKey?: TaskStatusKey): string {

    const key = statusKey ?? 'notStarted';

    return this.i18n.translate(`treegrid.status.${key}`);

  }



  protected resourceLabel(resourceTypeKey?: TreeTask['resourceTypeKey']): string {

    const key = resourceTypeKey ?? 'development';

    return this.i18n.translate(`treegrid.resource.${key}`);

  }



  protected riskLabel(riskKey?: TreeTask['riskKey']): string {

    const key = riskKey ?? 'low';

    return this.i18n.translate(`treegrid.risk.${key}`);

  }



  protected trustLabel(trustKey?: TreeTask['trustKey']): string {

    const key = trustKey ?? 'sufficient';

    return this.i18n.translate(`treegrid.trust.${key}`);

  }



  protected onDepthChange(event: { value: TreeDepthLevel }): void {
    const depth = (event.value ?? 4) as TreeDepthLevel;
    this.selectedDepth.set(depth);
    this.scheduleColumnFit();
  }



  protected onSearch(event: { value?: string }): void {

    const value = event.value ?? '';



    clearTimeout(this.searchDebounce);

    this.searchDebounce = setTimeout(() => {

      this.lastSearch = value;

      this.treeGrid?.search(value);

    }, SEARCH_DEBOUNCE_MS);

  }



  protected onDataBound(): void {
    if (this.lastSearch) {
      this.treeGrid?.search(this.lastSearch);
    }
    this.bindHorizontalScroll();
  }

  /** Show freeze-column shadow only while the grid is scrolled horizontally. */
  private bindHorizontalScroll(): void {
    this.unbindHorizontalScroll();

    const gridEl = this.treeGrid?.element;
    if (!gridEl) {
      return;
    }

    const content = gridEl.querySelector('.e-content') as HTMLElement | null;
    if (!content) {
      return;
    }

    this.scrollContent = content;
    this.updateFreezeScrollShadow();
    content.addEventListener('scroll', this.onGridScroll, { passive: true });
  }

  private unbindHorizontalScroll(): void {
    if (!this.scrollContent) {
      return;
    }

    this.scrollContent.removeEventListener('scroll', this.onGridScroll);
    this.scrollContent = undefined;
  }

  private updateFreezeScrollShadow(): void {
    const gridEl = this.treeGrid?.element;
    const content = this.scrollContent ?? (gridEl?.querySelector('.e-content') as HTMLElement | null);
    if (!gridEl || !content) {
      return;
    }

    const scrolled = Math.abs(content.scrollLeft) > 1;
    gridEl.classList.toggle('treegrid-page__grid--horiz-scroll', scrolled);
  }

  private fitTimer?: ReturnType<typeof setTimeout>;

  private scheduleColumnFit(): void {
    clearTimeout(this.fitTimer);
    this.fitTimer = setTimeout(() => this.fitColumnsToViewport(), 0);
  }

  /** Keep readable min widths; grow flex columns to fill wide viewports. */
  private fitColumnsToViewport(): void {
    const grid = this.treeGrid;
    if (!grid?.element) {
      return;
    }

    const gridWidth = grid.element.clientWidth;
    if (!gridWidth) {
      return;
    }

    const columns = grid.getColumns();
    let minTotal = 0;
    for (const col of columns) {
      const field = col.field as string;
      minTotal += COLUMN_MIN_WIDTHS[field] ?? COLUMN_CELL_MIN_PX;
    }

    const extra = Math.max(0, gridWidth - minTotal);
    const flexBase = FLEX_COLUMN_FIELDS.reduce(
      (sum, field) => sum + COLUMN_MIN_WIDTHS[field],
      0,
    );

    for (const col of columns) {
      const field = col.field as string;
      const min = COLUMN_MIN_WIDTHS[field] ?? COLUMN_CELL_MIN_PX;
      let width = min;

      if (extra > 0 && flexBase > 0 && (FLEX_COLUMN_FIELDS as readonly string[]).includes(field)) {
        width = min + Math.floor(extra * (min / flexBase));
      }

      col.width = Math.max(width, min);
      col.minWidth = min;
    }

    grid.refreshColumns();
  }

  private updateHeight(): void {

    const isMobile = window.matchMedia('(max-width: 900px)').matches;

    const offset = isMobile ? PAGE_HEIGHT_OFFSET_MOBILE_PX : PAGE_HEIGHT_OFFSET_PX;

    this.gridHeight = Math.max(window.innerHeight - offset, isMobile ? 360 : 420);

  }

}


