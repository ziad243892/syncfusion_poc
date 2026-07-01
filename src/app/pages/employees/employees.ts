import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import {
  CalculatedFieldService,
  ConditionalFormattingService,
  DisplayOption,
  DrillThroughService,
  ExcelExportService,
  FieldListService,
  GroupingBarService,
  GroupingService,
  IAxisSet,
  IDataOptions,
  IDataSet,
  NumberFormattingService,
  PDFExportService,
  PivotChartService,
  PivotView,
  PivotViewModule,
  ToolbarItems,
  ToolbarService,
  VirtualScrollService,
} from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { enableRipple, Browser } from '@syncfusion/ej2-base';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-charts';
import { ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { Observable } from 'rxjs';
import { Universitydata } from './university-data';

enableRipple(false);

const PIVOT_REPORTS_KEY = 'pivotviewReports';
/** Space reserved for app header, page title, footer, and source link (px). */
const PIVOT_HEIGHT_OFFSET_PX = 425;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
  providers: [
    CalculatedFieldService,
    ToolbarService,
    ConditionalFormattingService,
    FieldListService,
    NumberFormattingService,
    GroupingBarService,
    GroupingService,
    VirtualScrollService,
    DrillThroughService,
    PivotChartService,
    PDFExportService,
    ExcelExportService,
  ],
  standalone: true,
  imports: [PivotViewModule],
})
export class Employees implements OnInit {
  /** Numeric height for ejs-pivotview — equivalent to calc(100vh - 425px). */
  public pivotHeight!: number;

  public dataSourceSettings!: IDataOptions;
  public gridSettings!: GridSettings;
  public toolbarOptions!: ToolbarItems[];
  public chartSettings!: ChartSettings;
  public displayOption!: DisplayOption;
  public observable = new Observable();

  @ViewChild('pivotview')
  public pivotObj!: PivotView;

  @HostListener('window:resize')
  onResize(): void {
    this.updateHeight();
  }

  private updateHeight(): void {
    this.pivotHeight = Math.max(window.innerHeight - PIVOT_HEIGHT_OFFSET_PX, 200);
  }

  saveReport(args: any): void {
    let reports = [];
    let isSaved = false;
    if (localStorage[PIVOT_REPORTS_KEY] && localStorage[PIVOT_REPORTS_KEY] !== '') {
      reports = JSON.parse(localStorage[PIVOT_REPORTS_KEY]);
    }
    if (args.report && args.reportName && args.reportName !== '') {
      const report = JSON.parse(args.report);
      report.dataSourceSettings.dataSource = [];
      report.pivotValues = [];
      args.report = JSON.stringify(report);
      reports.map(function (item: any): any {
        if (args.reportName === item.reportName) {
          item.report = args.report;
          isSaved = true;
        }
      });
      if (!isSaved) {
        reports.push(args);
      }
      localStorage[PIVOT_REPORTS_KEY] = JSON.stringify(reports);
    }
  }

  fetchReport(args: any): void {
    let reportCollection: string[] = [];
    const reeportList: string[] = [];
    if (localStorage[PIVOT_REPORTS_KEY] && localStorage[PIVOT_REPORTS_KEY] !== '') {
      reportCollection = JSON.parse(localStorage[PIVOT_REPORTS_KEY]);
    }
    reportCollection.map(function (item: any): void {
      reeportList.push(item.reportName);
    });
    args.reportName = reeportList;
  }

  loadReport(args: any): void {
    let reportCollection: string[] = [];
    if (localStorage[PIVOT_REPORTS_KEY] && localStorage[PIVOT_REPORTS_KEY] !== '') {
      reportCollection = JSON.parse(localStorage[PIVOT_REPORTS_KEY]);
    }
    reportCollection.map(function (item: any): void {
      if (args.reportName === item.reportName) {
        args.report = item.report;
      }
    });
    if (args.report) {
      const report = JSON.parse(args.report);
      report.dataSourceSettings.dataSource = this.pivotObj.dataSourceSettings.dataSource;
      this.pivotObj.dataSourceSettings = report.dataSourceSettings;
    }
  }

  removeReport(args: any): void {
    let reportCollection: any[] = [];
    if (localStorage[PIVOT_REPORTS_KEY] && localStorage[PIVOT_REPORTS_KEY] !== '') {
      reportCollection = JSON.parse(localStorage[PIVOT_REPORTS_KEY]);
    }
    for (let i = 0; i < reportCollection.length; i++) {
      if (reportCollection[i].reportName === args.reportName) {
        reportCollection.splice(i, 1);
      }
    }
    if (localStorage[PIVOT_REPORTS_KEY] && localStorage[PIVOT_REPORTS_KEY] !== '') {
      localStorage[PIVOT_REPORTS_KEY] = JSON.stringify(reportCollection);
    }
  }

  renameReport(args: any): void {
    let reportsCollection: any[] = [];
    if (localStorage[PIVOT_REPORTS_KEY] && localStorage[PIVOT_REPORTS_KEY] !== '') {
      reportsCollection = JSON.parse(localStorage[PIVOT_REPORTS_KEY]);
    }
    if (args.isReportExists) {
      for (let i = 0; i < reportsCollection.length; i++) {
        if (reportsCollection[i].reportName === args.rename) {
          reportsCollection.splice(i, 1);
        }
      }
    }
    reportsCollection.map(function (item: any): any {
      if (args.reportName === item.reportName) {
        item.reportName = args.rename;
      }
    });
    if (localStorage[PIVOT_REPORTS_KEY] && localStorage[PIVOT_REPORTS_KEY] !== '') {
      localStorage[PIVOT_REPORTS_KEY] = JSON.stringify(reportsCollection);
    }
  }

  newReport(): void {
    this.pivotObj.setProperties(
      { dataSourceSettings: { columns: [], rows: [], values: [], filters: [] } },
      false,
    );
  }

  chartSeriesCreated(): void {
    const chartSeries = this.pivotObj.chartSettings.chartSeries;
    if (chartSeries) {
      chartSeries.legendShape = chartSeries.type === 'Polar' ? 'Rectangle' : 'SeriesType';
    }
  }

  beforeToolbarRender(args: any): void {
    args.customToolbar.splice(6, 0, {
      type: 'Separator',
    });
    args.customToolbar.splice(9, 0, {
      type: 'Separator',
    });
  }

  load(args: any): void {
    if (Browser.isDevice) {
      args.dataSourceSettings.rows = [
        { name: 'rank_display', caption: 'Rank', expandAll: true, allowDragAndDrop: false },
      ];
    }
  }

  ngOnInit(): void {
    this.updateHeight();

    this.chartSettings = {
      title: 'Top Universities Analysis',
      chartSeries: { type: 'Column' },
      load: this.observable.subscribe((args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        (args as ILoadedEventArgs).chart.theme = <ChartTheme>(
          selectedTheme.charAt(0).toUpperCase() +
          selectedTheme.slice(1)
        )
          .replace(/-dark/i, 'Dark')
          .replace(/contrast/i, 'Contrast')
          .replace(/-highContrast/i, 'HighContrast');
      }) as any,
    } as ChartSettings;

    this.displayOption = { view: 'Both' } as DisplayOption;
    this.gridSettings = {
      width: '100%',
      columnWidth: 105,
      allowSelection: true,
      allowTextWrap: true,
      clipMode: 'EllipsisWithTooltip',
      rowHeight: 40,
      selectionSettings: { mode: 'Cell', type: 'Single', cellSelectionMode: 'Box' },
      excelQueryCellInfo: this.observable.subscribe((args) => {
        const excelArgs = args as ExcelQueryCellInfoEventArgs;
        const cell = excelArgs.cell as IAxisSet;
        if (cell.axis === 'value' && cell.value === undefined && excelArgs.style) {
          excelArgs.style.numberFormat = undefined;
        }
      }) as any,
    } as GridSettings;

    this.toolbarOptions = [
      'New',
      'Save',
      'SaveAs',
      'Rename',
      'Remove',
      'Load',
      'Grid',
      'Chart',
      'Export',
      'SubTotal',
      'GrandTotal',
      'Formatting',
      'FieldList',
    ] as ToolbarItems[];

    this.dataSourceSettings = {
      enableSorting: true,
      columns: [{ name: 'region', caption: 'Region' }],
      rows: [
        { name: 'rank_display', caption: 'Rank', expandAll: true, allowDragAndDrop: false },
        { name: 'university', caption: 'University', expandAll: true, allowDragAndDrop: false },
      ],
      formatSettings: [
        { name: 'international_students', format: 'N0' },
        { name: 'faculty_count', format: 'N0' },
      ],
      dataSource: Universitydata as IDataSet[],
      expandAll: false,
      values: [
        { name: 'international_students', caption: 'Students' },
        { name: 'faculty_count', caption: 'Faculty' },
      ],
      filters: [{ name: 'type', caption: 'University Type' }],
      filterSettings: [
        {
          name: 'region',
          type: 'Exclude',
          items: ['Africa', 'Latin America'],
        },
      ],
      fieldMapping: [
        { name: 'rank_display', dataType: 'number' },
        { name: 'country', caption: 'Country' },
        { name: 'city', caption: 'City' },
        { name: 'region', caption: 'Region' },
        { name: 'research_output', caption: 'Research Output' },
        { name: 'student_faculty_ratio', caption: 'Student faculty ratio' },
      ],
      groupSettings: [{ name: 'rank_display', type: 'Number', rangeInterval: 100 }],
      // Highlight only the lowest and highest values — avoids painting most cells red.
      conditionalFormatSettings: [
        {
          measure: 'international_students',
          value1: 2500,
          conditions: 'LessThan',
          style: {
            backgroundColor: '#FEF3C7',
            color: '#92400E',
            fontSize: '12px',
          },
          applyGrandTotals: false,
        },
        {
          measure: 'international_students',
          value1: 12000,
          conditions: 'GreaterThan',
          style: {
            backgroundColor: '#D1FAE5',
            color: '#065F46',
            fontSize: '12px',
          },
          applyGrandTotals: false,
        },
        {
          measure: 'faculty_count',
          value1: 700,
          conditions: 'LessThan',
          style: {
            backgroundColor: '#FEF3C7',
            color: '#92400E',
            fontSize: '12px',
          },
          applyGrandTotals: false,
        },
        {
          measure: 'faculty_count',
          value1: 2200,
          conditions: 'GreaterThan',
          style: {
            backgroundColor: '#D1FAE5',
            color: '#065F46',
            fontSize: '12px',
          },
          applyGrandTotals: false,
        },
      ],
      showHeaderWhenEmpty: false,
      emptyCellsTextContent: '-',
      excludeFields: ['link', 'logo'],
    };
  }
}
