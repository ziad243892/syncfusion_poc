import { Component, computed, inject } from '@angular/core';
import {
  AccumulationChartModule,
  AccumulationDataLabelService,
  AccumulationLegendService,
  AccumulationTooltipService,
  AreaSeriesService,
  BubbleSeriesService,
  CandleSeriesService,
  CategoryService,
  ChartModule,
  ColumnSeriesService,
  DateTimeService,
  LegendService,
  LineSeriesService,
  PieSeriesService,
  ScatterSeriesService,
  StockChartModule,
  StockLegendService,
  TooltipService,
} from '@syncfusion/ej2-angular-charts';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { ThemeService } from '../../core/theme/theme.service';
import {
  ANALYSIS_KPIS,
  DEPARTMENT_HEADCOUNT,
  MARKET_SHARE,
  MONTHLY_REVENUE,
  PERFORMANCE_DATA,
  STOCK_PRICES,
} from './analysis-data';

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [ChartModule, StockChartModule, AccumulationChartModule, TranslatePipe],
  providers: [
    CategoryService,
    DateTimeService,
    LineSeriesService,
    AreaSeriesService,
    ColumnSeriesService,
    ScatterSeriesService,
    BubbleSeriesService,
    CandleSeriesService,
    LegendService,
    TooltipService,
    PieSeriesService,
    AccumulationLegendService,
    AccumulationTooltipService,
    AccumulationDataLabelService,
    StockLegendService,
  ],
  templateUrl: './analysis.html',
  styleUrl: './analysis.scss',
})
export class AnalysisPage {
  private readonly theme = inject(ThemeService);

  protected readonly kpis = ANALYSIS_KPIS;
  protected readonly monthlyRevenue = MONTHLY_REVENUE;
  protected readonly departmentHeadcount = DEPARTMENT_HEADCOUNT;
  protected readonly stockPrices = STOCK_PRICES;
  protected readonly performanceData = PERFORMANCE_DATA;
  protected readonly marketShare = MARKET_SHARE;

  protected readonly chartTheme = computed(() =>
    this.theme.colorScheme() === 'dark' ? 'MaterialDark' : 'Material',
  );

  protected readonly categoryAxis = { valueType: 'Category' as const };
  protected readonly numericYAxis = { labelFormat: '${value}K' };
  protected readonly legend = { visible: true };
  protected readonly tooltip = { enable: true };
  protected readonly stockPrimaryXAxis = { valueType: 'DateTime' as const };
  protected readonly stockPrimaryYAxis = { labelFormat: '${value}' };
  protected readonly accumulationLegend = { visible: true, position: 'Bottom' as const };
  protected readonly accumulationTooltip = { enable: true };
  protected readonly accumulationDataLabel = { visible: true, name: 'text', position: 'Outside' as const };
  protected readonly scatterMarker = { width: 10, height: 10 };
  protected readonly bubbleOpacity = 0.5;
}
