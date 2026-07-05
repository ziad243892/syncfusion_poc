import { Component, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridComponent, GridModule, PageService } from '@syncfusion/ej2-angular-grids';
import { TabAllModule, TabComponent } from '@syncfusion/ej2-angular-navigations';
import { QueryBuilderComponent, QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { Predicate, Query } from '@syncfusion/ej2-data';
import { createSpinner, hideSpinner, showSpinner } from '@syncfusion/ej2-popups';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TranslateService } from '../../core/i18n/translate.service';
import { ThemeService } from '../../core/theme/theme.service';
import { extractWhereClause, mockNlQueryHandler } from './mock-nl-query-handler';
import {
  QUERY_BUILDER_COLUMNS,
  QUERY_BUILDER_SAMPLE_PROMPT,
  QUERY_BUILDER_USERS,
} from './query-builder-data';

@Component({
  selector: 'app-query-builder',
  standalone: true,
  imports: [FormsModule, ButtonModule, GridModule, QueryBuilderModule, TabAllModule, TranslatePipe],
  providers: [PageService],
  templateUrl: './query-builder.html',
  styleUrl: './query-builder.scss',
})
export class QueryBuilderPage {
  private readonly theme = inject(ThemeService);
  private readonly i18n = inject(TranslateService);

  private readonly queryBuilderRef = viewChild<QueryBuilderComponent>('queryBuilder');
  private readonly gridRef = viewChild<GridComponent>('resultsGrid');
  private readonly tabRef = viewChild<TabComponent>('queryTabs');

  protected readonly users = QUERY_BUILDER_USERS;
  protected readonly columns = QUERY_BUILDER_COLUMNS;
  protected readonly samplePrompt = QUERY_BUILDER_SAMPLE_PROMPT;
  protected readonly pageSettings = { pageSize: 10 };
  protected nlQueryText = QUERY_BUILDER_SAMPLE_PROMPT;
  protected queryError = '';

  protected get tabHeaders(): Array<{ text: string }> {
    return [
      { text: this.i18n.translate('queryBuilder.tabs.naturalLanguage') },
      { text: this.i18n.translate('queryBuilder.tabs.builderUi') },
    ];
  }

  protected isRtl(): boolean {
    return this.theme.direction() === 'rtl';
  }

  /** Syncfusion tab workaround: render both tab panels on first load. */
  protected onTabsCreated(): void {
    const tabs = this.tabRef();
    tabs?.select(1);
    tabs?.select(0);
  }

  protected onGridCreated(): void {
    const gridElement = document.getElementById('query-builder-results-grid');
    if (gridElement) {
      createSpinner({ target: gridElement });
    }
  }

  /** Converts the natural-language prompt into Query Builder rules and filters the grid. */
  protected async generateQuery(): Promise<void> {
    const queryBuilder = this.queryBuilderRef();
    const grid = this.gridRef();
    const gridElement = document.getElementById('query-builder-results-grid');

    if (!queryBuilder || !grid || !this.nlQueryText.trim()) {
      return;
    }

    this.queryError = '';

    if (gridElement) {
      showSpinner(gridElement);
    }

    try {
      const sql = await mockNlQueryHandler(this.nlQueryText);
      const whereClause = extractWhereClause(sql);

      queryBuilder.setRulesFromSql(whereClause);

      const predicate: Predicate = queryBuilder.getPredicate(queryBuilder.getValidRules());
      const query = isNullOrUndefined(predicate) ? new Query() : new Query().where(predicate);

      grid.query = query;
      grid.refresh();
    } catch (error) {
      this.queryError =
        error instanceof Error ? error.message : this.i18n.translate('queryBuilder.errors.generic');
    } finally {
      if (gridElement) {
        hideSpinner(gridElement);
      }
    }
  }
}
