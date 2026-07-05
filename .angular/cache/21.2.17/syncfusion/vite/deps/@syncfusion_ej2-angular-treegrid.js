import {
  Aggregate,
  Cell,
  CellRenderer,
  CellType,
  Clipboard,
  ColumnChooser,
  ColumnMenu,
  CommandColumn,
  ContextMenu,
  Data,
  DetailRow,
  Edit,
  ExcelExport,
  ExportHelper,
  Filter,
  Freeze,
  Grid,
  InfiniteScroll,
  InterSectionObserver,
  Logger,
  Page,
  PdfExport,
  Print,
  RenderType,
  Reorder,
  Resize,
  RowDD,
  RowDropSettings,
  RowRenderer,
  Scroll,
  Sort,
  Toolbar,
  VirtualContentRenderer,
  VirtualHeaderRenderer,
  VirtualRowModelGenerator,
  VirtualScroll,
  appendChildren,
  calculateAggregate,
  detailLists,
  extend as extend2,
  getActualProperties,
  getNumberFormat,
  getObject,
  getRowIndexFromElement,
  getTransformValues,
  getUid,
  getVisiblePage,
  iterateArrayOrObject,
  parentsUntil,
  resetRowIndex,
  setEnableSeamlessScrolling,
  templateCompiler
} from "./chunk-GWJBQ4MG.js";
import "./chunk-S24ENBJR.js";
import "./chunk-RPUVDG7E.js";
import "./chunk-GPOVBYAA.js";
import "./chunk-Y4X5YPEY.js";
import "./chunk-BVU7BQFE.js";
import {
  ArrayBase,
  ComplexBase,
  ComponentBase,
  ComponentMixins,
  Template,
  setValue as setValue2
} from "./chunk-HEY2Z56I.js";
import {
  CacheAdaptor,
  DataManager,
  DataUtil,
  Deferred,
  JsonAdaptor,
  ODataAdaptor,
  Predicate,
  Query,
  RemoteSaveAdaptor,
  UrlAdaptor,
  WebApiAdaptor,
  WebMethodAdaptor
} from "./chunk-5WDVVTKR.js";
import {
  createSpinner,
  hideSpinner,
  showSpinner
} from "./chunk-UDJEW7V3.js";
import {
  createCheckBox
} from "./chunk-HOBHK6TE.js";
import {
  Browser,
  ChildProperty,
  Collection,
  Complex,
  Component as Component2,
  Event,
  EventHandler,
  Internationalization,
  KeyboardEvents,
  L10n,
  NotifyPropertyChanges,
  Property,
  SanitizeHtmlHelper,
  addClass,
  classList,
  closest,
  compile,
  createElement,
  debounce,
  extend,
  getEnumValue,
  getValue,
  isNullOrUndefined,
  merge,
  remove,
  removeClass,
  select,
  setStyleAttribute,
  setValue
} from "./chunk-BT7RVJDN.js";
import {
  CommonModule
} from "./chunk-QDLX74IB.js";
import "./chunk-PVK2TJ6R.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  Injector,
  NgModule,
  Renderer2,
  ViewContainerRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵloadQuery,
  ɵɵqueryRefresh
} from "./chunk-46EDR2RG.js";
import {
  __decorate
} from "./chunk-YB2C65QT.js";
import "./chunk-GOMI4DH3.js";

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/column.js
var __extends = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Column = (
  /** @class */
  (function() {
    function Column2(options) {
      this.allowEditing = true;
      this.edit = {};
      this.disableHtmlEncode = true;
      this.allowReordering = true;
      this.showColumnMenu = true;
      this.allowFiltering = true;
      this.allowSorting = true;
      this.allowResizing = true;
      this.filter = {};
      this.enableRowSpan = true;
      this.enableColumnSpan = true;
      merge(this, options);
    }
    Column2.prototype.setProperties = function(column) {
      var keys = Object.keys(column);
      for (var i = 0; i < keys.length; i++) {
        this[keys[parseInt(i.toString(), 10)]] = column[keys[parseInt(i.toString(), 10)]];
        if (this.parent && this.parent["isReact"] && keys[parseInt(i.toString(), 10)] === "template") {
          var refreshReactColumnTemplateByUid = "refreshReactColumnTemplateByUid";
          this.parent.clipboardModule["treeGridParent"].renderModule["" + refreshReactColumnTemplateByUid](this.uid);
        }
      }
    };
    return Column2;
  })()
);
var TreeGridColumn = (
  /** @class */
  (function(_super) {
    __extends(TreeGridColumn2, _super);
    function TreeGridColumn2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate2([
      Property(null)
    ], TreeGridColumn2.prototype, "columns", void 0);
    return TreeGridColumn2;
  })(Column)
);
var StackedColumn = (
  /** @class */
  (function(_super) {
    __extends(StackedColumn2, _super);
    function StackedColumn2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return StackedColumn2;
  })(TreeGridColumn)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/loading-indicator.js
var __extends2 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LoadingIndicator = (
  /** @class */
  (function(_super) {
    __extends2(LoadingIndicator2, _super);
    function LoadingIndicator2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate3([
      Property("Spinner")
    ], LoadingIndicator2.prototype, "indicatorType", void 0);
    return LoadingIndicator2;
  })(ChildProperty)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/filter-settings.js
var __extends3 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Predicate2 = (
  /** @class */
  (function(_super) {
    __extends3(Predicate3, _super);
    function Predicate3() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate4([
      Property()
    ], Predicate3.prototype, "field", void 0);
    __decorate4([
      Property()
    ], Predicate3.prototype, "operator", void 0);
    __decorate4([
      Property()
    ], Predicate3.prototype, "value", void 0);
    __decorate4([
      Property()
    ], Predicate3.prototype, "matchCase", void 0);
    __decorate4([
      Property()
    ], Predicate3.prototype, "ignoreAccent", void 0);
    __decorate4([
      Property()
    ], Predicate3.prototype, "predicate", void 0);
    __decorate4([
      Property({})
    ], Predicate3.prototype, "actualFilterValue", void 0);
    __decorate4([
      Property({})
    ], Predicate3.prototype, "actualOperator", void 0);
    __decorate4([
      Property()
    ], Predicate3.prototype, "type", void 0);
    __decorate4([
      Property()
    ], Predicate3.prototype, "ejpredicate", void 0);
    __decorate4([
      Property()
    ], Predicate3.prototype, "uid", void 0);
    __decorate4([
      Property()
    ], Predicate3.prototype, "isForeignKey", void 0);
    return Predicate3;
  })(ChildProperty)
);
var FilterSettings = (
  /** @class */
  (function(_super) {
    __extends3(FilterSettings2, _super);
    function FilterSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate4([
      Collection([], Predicate2)
    ], FilterSettings2.prototype, "columns", void 0);
    __decorate4([
      Property("FilterBar")
    ], FilterSettings2.prototype, "type", void 0);
    __decorate4([
      Property()
    ], FilterSettings2.prototype, "mode", void 0);
    __decorate4([
      Property(true)
    ], FilterSettings2.prototype, "showFilterBarStatus", void 0);
    __decorate4([
      Property(1500)
    ], FilterSettings2.prototype, "immediateModeDelay", void 0);
    __decorate4([
      Property()
    ], FilterSettings2.prototype, "operators", void 0);
    __decorate4([
      Property(false)
    ], FilterSettings2.prototype, "ignoreAccent", void 0);
    __decorate4([
      Property("Parent")
    ], FilterSettings2.prototype, "hierarchyMode", void 0);
    return FilterSettings2;
  })(ChildProperty)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/textwrap-settings.js
var __extends4 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TextWrapSettings = (
  /** @class */
  (function(_super) {
    __extends4(TextWrapSettings2, _super);
    function TextWrapSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate5([
      Property("Both")
    ], TextWrapSettings2.prototype, "wrapMode", void 0);
    return TextWrapSettings2;
  })(ChildProperty)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/logger.js
var __extends5 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var DOC_URL = "https://ej2.syncfusion.com/documentation/treegrid";
var BASE_DOC_URL = "https://ej2.syncfusion.com/documentation";
var ERROR = "[EJ2TreeGrid.Error]";
var IsRowDDEnabled = false;
var Logger2 = (
  /** @class */
  (function(_super) {
    __extends5(Logger3, _super);
    function Logger3(parent) {
      var _this = this;
      Grid.Inject(Logger);
      _this = _super.call(this, parent) || this;
      return _this;
    }
    Logger3.prototype.getModuleName = function() {
      return "logger";
    };
    Logger3.prototype.log = function(types, args) {
      if (!(types instanceof Array)) {
        types = [types];
      }
      var type = types;
      for (var i = 0; i < type.length; i++) {
        var item = detailLists[type[parseInt(i.toString(), 10)]];
        var cOp = item.check(args, this.parent);
        if (cOp.success) {
          var message = item.generateMessage(args, this.parent, cOp.options);
          message = message.replace("EJ2Grid", "EJ2TreeGrid").replace("* Hierarchy Grid", "").replace("* Grouping", "");
          if (IsRowDDEnabled && type[parseInt(i.toString(), 10)] === "primary_column_missing") {
            message = message.replace("Editing", "Row DragAndDrop");
            IsRowDDEnabled = false;
          }
          var index = message.indexOf("https");
          var gridurl = message.substring(index);
          if (type[parseInt(i.toString(), 10)] === "module_missing") {
            message = message.replace(gridurl, DOC_URL + "/modules");
          } else if (type[parseInt(i.toString(), 10)] === "primary_column_missing" || type[parseInt(i.toString(), 10)] === "selection_key_missing") {
            message = message.replace(gridurl, BASE_DOC_URL + "/api/treegrid/column/#isprimarykey");
          } else if (type[parseInt(i.toString(), 10)] === "grid_remote_edit") {
            message = message.replace(gridurl, DOC_URL + "/edit");
          } else if (type[parseInt(i.toString(), 10)] === "virtual_height") {
            message = message.replace(gridurl, DOC_URL + "/virtual");
          } else if (type[parseInt(i.toString(), 10)] === "check_datasource_columns") {
            message = message.replace(gridurl, DOC_URL + "/columns");
          } else if (type[parseInt(i.toString(), 10)] === "locale_missing") {
            message = message.replace(gridurl, DOC_URL + "/global-local/#localization");
          }
          if (type[parseInt(i.toString(), 10)] === "datasource_syntax_mismatch") {
            if (!isNullOrUndefined(this.treeGridObj) && !isNullOrUndefined(this.treeGridObj.dataStateChange)) {
              console[item.logType](message);
            }
          } else {
            console[item.logType](message);
          }
        }
      }
    };
    Logger3.prototype.treeLog = function(types, args, treeGrid) {
      this.treeGridObj = treeGrid;
      if (!(types instanceof Array)) {
        types = [types];
      }
      var type = types;
      if (treeGrid.allowRowDragAndDrop && !treeGrid.columns.filter(function(column) {
        return column.isPrimaryKey;
      }).length) {
        IsRowDDEnabled = true;
        this.log("primary_column_missing", args);
      }
      for (var i = 0; i < type.length; i++) {
        var item = treeGridDetails[type[parseInt(i.toString(), 10)]];
        var cOp = item.check(args, treeGrid);
        if (cOp.success) {
          var message = item.generateMessage(args, treeGrid, cOp.options);
          console[item.logType](message);
        }
      }
    };
    return Logger3;
  })(Logger)
);
var treeGridDetails = {
  // eslint-disable-next-line camelcase
  mapping_fields_missing: {
    type: "mapping_fields_missing",
    logType: "error",
    check: function(args, parent) {
      var opt = { success: false };
      if (isNullOrUndefined(parent.idMapping) && isNullOrUndefined(parent.childMapping) && isNullOrUndefined(parent.parentIdMapping) || !isNullOrUndefined(parent.idMapping) && isNullOrUndefined(parent.parentIdMapping) || isNullOrUndefined(parent.idMapping) && !isNullOrUndefined(parent.parentIdMapping)) {
        opt = { success: true };
      }
      return opt;
    },
    generateMessage: function() {
      return ERROR + ": MAPPING FIELDS MISSING \nOne of the following fields is missing. It is required for the hierarchical relationship of records in TreeGrid:\n* childMapping\n* idMapping\n* parentIdMapping\nRefer to the following documentation links for more details.\n" + (BASE_DOC_URL + "/api/treegrid#childmapping") + "\n" + (BASE_DOC_URL + "/api/treegrid#idmapping") + "\n" + (BASE_DOC_URL + "/api/treegrid#$parentidmapping");
    }
  }
};

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/base/constant.js
var load = "load";
var rowDataBound = "rowDataBound";
var dataBound = "dataBound";
var queryCellInfo = "queryCellInfo";
var beforeDataBound = "beforeDataBound";
var actionBegin = "actionBegin";
var dataStateChange = "dataStateChange";
var actionComplete = "actionComplete";
var rowSelecting = "rowSelecting";
var rowSelected = "rowSelected";
var checkboxChange = "checkboxChange";
var rowDeselected = "rowDeselected";
var toolbarClick = "toolbarClick";
var beforeExcelExport = "beforeExcelExport";
var beforePdfExport = "beforePdfExport";
var resizeStop = "resizeStop";
var expanded = "expanded";
var expanding = "expanding";
var collapsed = "collapsed";
var collapsing = "collapsing";
var remoteExpand = "remoteExpand";
var localPagedExpandCollapse = "localPagedExpandCollapse";
var pagingActions = "pagingActions";
var printGridInit = "printGrid-Init";
var contextMenuOpen = "contextMenuOpen";
var contextMenuClick = "contextMenuClick";
var beforeCopy = "beforeCopy";
var beforePaste = "beforePaste";
var savePreviousRowPosition = "savePreviousRowPosition";
var crudAction = "crudAction";
var beginEdit = "beginEdit";
var beginAdd = "beginAdd";
var recordDoubleClick = "recordDoubleClick";
var cellSave = "cellSave";
var cellSaved = "cellSaved";
var cellEdit = "cellEdit";
var batchDelete = "batchDelete";
var batchCancel = "batchCancel";
var batchAdd = "batchAdd";
var beforeBatchDelete = "beforeBatchDelete";
var beforeBatchAdd = "beforeBatchAdd";
var beforeBatchSave = "beforeBatchSave";
var batchSave = "batchSave";
var keyPressed = "key-pressed";
var updateData = "update-data";
var doubleTap = "double-tap";
var virtualColumnIndex = "virtualColumnIndex";
var virtualActionArgs = "virtual-action-args";
var destroy = "destroy";
var dataListener = "data-listener";
var indexModifier = "index-modifier";
var beforeStartEdit = "edit-form";
var beforeBatchCancel = "before-batch-cancel";
var batchEditFormRendered = "batcheditform-rendered";
var detailDataBound = "detailDataBound";
var rowDrag = "rowDrag";
var rowDragStartHelper = "rowDragStartHelper";
var rowDrop = "rowDrop";
var rowDragStart = "rowDragStart";
var rowsAdd = "rows-add";
var rowsRemove = "rows-remove";
var rowdraging = "row-draging";
var rowDropped = "row-dropped";
var autoCol = "auto-col";
var rowDeselecting = "rowDeselecting";
var headerContent = "e-headercontent";
var movableContent = "e-movablecontent";
var movableHeader = "e-movableheader";
var frozenContent = "e-frozencontent";
var frozenHeader = "e-frozenheader";
var content = "e-content";
var table = "e-table";
var leftRight = "Left-Right";
var frozenRight = "frozen-right";
var frozenLeft = "frozen-left";
var ariaColIndex = "aria-colindex";
var ariaRowIndex = "aria-rowindex";
var actionFailure = "actionFailure";
var collapseActionComplete = "collapseActionComplete";

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/clipboard.js
var __extends6 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var TreeClipboard = (
  /** @class */
  (function(_super) {
    __extends6(TreeClipboard2, _super);
    function TreeClipboard2(parent, serviceLocator) {
      var _this = _super.call(this, parent.grid, serviceLocator) || this;
      _this.treeCopyContent = "";
      _this.copiedUniqueIdCollection = [];
      _this.treeGridParent = parent;
      _this.serviceLocator = serviceLocator;
      return _this;
    }
    TreeClipboard2.prototype.setCopyData = function(withHeader) {
      var copyContent = "copyContent";
      var getCopyData = "getCopyData";
      var isSelect = "isSelect";
      var uniqueID = "uniqueID";
      var currentRecords = this.treeGridParent.getCurrentViewRecords();
      if (window.getSelection().toString() === "") {
        this.clipBoardTextArea.value = this["" + copyContent] = "";
        var rows = this.treeGridParent.grid.getRows();
        if (this.treeGridParent.selectionSettings.mode !== "Cell") {
          var selectedIndexes = this.treeGridParent.getSelectedRowIndexes().sort(function(a, b) {
            return a - b;
          });
          for (var i = 0; i < selectedIndexes.length; i++) {
            if (i > 0) {
              this.treeCopyContent += "\n";
            }
            var selectedRowIndex = selectedIndexes[parseInt(i.toString(), 10)];
            if (!rows[selectedRowIndex].classList.contains("e-summaryrow")) {
              var cells = [].slice.call(rows[selectedRowIndex].querySelectorAll(".e-rowcell"));
              var uniqueid = this.treeGridParent.getSelectedRecords()[parseInt(i.toString(), 10)]["" + uniqueID];
              if (this.copiedUniqueIdCollection.indexOf(uniqueid) === -1) {
                if (this.treeGridParent.copyHierarchyMode === "Parent" || this.treeGridParent.copyHierarchyMode === "Both") {
                  this.parentContentData(currentRecords, selectedRowIndex, rows, withHeader, i);
                }
                this["" + getCopyData](cells, false, "	", withHeader);
                this.treeCopyContent += this["" + copyContent];
                this.copiedUniqueIdCollection.push(uniqueid);
                this["" + copyContent] = "";
                if (this.treeGridParent.copyHierarchyMode === "Child" || this.treeGridParent.copyHierarchyMode === "Both") {
                  this.childContentData(currentRecords, selectedIndexes[parseInt(i.toString(), 10)], rows, withHeader);
                }
              }
            }
          }
          if (withHeader) {
            var headerTextArray = this.treeGridParent.getVisibleColumns().map(function(col) {
              return col.headerText;
            });
            this["" + getCopyData](headerTextArray, false, "	", withHeader);
            this.treeCopyContent = this["" + copyContent] + "\n" + this.treeCopyContent;
          }
          var args = {
            data: this.treeCopyContent,
            cancel: false
          };
          this.treeGridParent.trigger(beforeCopy, args);
          if (args.cancel) {
            return;
          }
          this.clipBoardTextArea.value = this["" + copyContent] = args.data;
          if (!Browser.userAgent.match(/ipad|ipod|iphone/i)) {
            this.clipBoardTextArea.select();
          } else {
            this.clipBoardTextArea.setSelectionRange(0, this.clipBoardTextArea.value.length);
          }
          this["" + isSelect] = true;
          this.copiedUniqueIdCollection = [];
          this.treeCopyContent = "";
        } else {
          _super.prototype.setCopyData.call(this, withHeader);
        }
      }
    };
    TreeClipboard2.prototype.parentContentData = function(currentRecords, selectedIndex, rows, withHeader, index) {
      var getCopyData = "getCopyData";
      var copyContent = "copyContent";
      var parentItem = "parentItem";
      var uniqueID = "uniqueID";
      var level = "level";
      if (!isNullOrUndefined(currentRecords[parseInt(selectedIndex.toString(), 10)]["" + parentItem])) {
        var treeLevel = currentRecords[parseInt(selectedIndex.toString(), 10)]["" + parentItem]["" + level];
        for (var i = 0; i < treeLevel + 1; i++) {
          for (var j = 0; j < currentRecords.length; j++) {
            if (!isNullOrUndefined(currentRecords[parseInt(selectedIndex.toString(), 10)]["" + parentItem]) && currentRecords[parseInt(j.toString(), 10)]["" + uniqueID] === currentRecords[parseInt(selectedIndex.toString(), 10)]["" + parentItem]["" + uniqueID]) {
              selectedIndex = j;
              var cells = [].slice.call(rows[parseInt(selectedIndex.toString(), 10)].querySelectorAll(".e-rowcell"));
              var uniqueid = currentRecords[parseInt(j.toString(), 10)]["" + uniqueID];
              if (this.copiedUniqueIdCollection.indexOf(uniqueid) === -1) {
                this["" + getCopyData](cells, false, "	", withHeader);
                if (index > 0) {
                  this.treeCopyContent = this.treeCopyContent + this["" + copyContent] + "\n";
                } else {
                  this.treeCopyContent = this["" + copyContent] + "\n" + this.treeCopyContent;
                }
                this.copiedUniqueIdCollection.push(uniqueid);
                this["" + copyContent] = "";
                break;
              }
            }
          }
        }
      }
    };
    TreeClipboard2.prototype.copy = function(withHeader) {
      _super.prototype.copy.call(this, withHeader);
    };
    TreeClipboard2.prototype.paste = function(data, rowIndex, colIndex) {
      _super.prototype.paste.call(this, data, rowIndex, colIndex);
    };
    TreeClipboard2.prototype.getModuleName = function() {
      return "clipboard";
    };
    TreeClipboard2.prototype.destroy = function() {
      _super.prototype.destroy.call(this);
    };
    TreeClipboard2.prototype.childContentData = function(currentRecords, selectedIndex, rows, withHeader) {
      var getCopyData = "getCopyData";
      var copyContent = "copyContent";
      var childRecords = "childRecords";
      var hasChildRecords = "hasChildRecords";
      var uniqueID = "uniqueID";
      if (currentRecords[parseInt(selectedIndex.toString(), 10)]["" + hasChildRecords]) {
        var childData = currentRecords[parseInt(selectedIndex.toString(), 10)]["" + childRecords];
        for (var i = 0; i < childData.length; i++) {
          for (var j = 0; j < currentRecords.length; j++) {
            if (!isNullOrUndefined(childData[parseInt(i.toString(), 10)]["" + uniqueID]) && currentRecords[parseInt(j.toString(), 10)]["" + uniqueID] === childData[parseInt(i.toString(), 10)]["" + uniqueID]) {
              if (!isNullOrUndefined(rows[parseInt(j.toString(), 10)]) && !rows[parseInt(j.toString(), 10)].classList.contains("e-summaryrow")) {
                var cells = [].slice.call(rows[parseInt(j.toString(), 10)].querySelectorAll(".e-rowcell"));
                var uniqueid = currentRecords[parseInt(j.toString(), 10)]["" + uniqueID];
                if (this.copiedUniqueIdCollection.indexOf(uniqueid) === -1) {
                  this["" + getCopyData](cells, false, "	", withHeader);
                  this.treeCopyContent += "\n" + this["" + copyContent];
                  this["" + copyContent] = "";
                  this.copiedUniqueIdCollection.push(uniqueid);
                  this.childContentData(currentRecords, j, rows, withHeader);
                }
              }
              break;
            }
          }
        }
      }
    };
    return TreeClipboard2;
  })(Clipboard)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/utils.js
function isRemoteData(parent) {
  if (parent["treeGrid"] && parent["treeGrid"]["isGantt"]) {
    if (parent["taskFields"].hasChildMapping) {
      if (parent.dataSource instanceof DataManager) {
        var adaptor = parent.dataSource.adaptor;
        return adaptor instanceof ODataAdaptor || adaptor instanceof WebApiAdaptor || adaptor instanceof WebMethodAdaptor || adaptor instanceof CacheAdaptor || adaptor instanceof UrlAdaptor;
      }
      return false;
    } else {
      return false;
    }
  } else {
    if (parent.dataSource instanceof DataManager) {
      var adaptor = parent.dataSource.adaptor;
      return adaptor instanceof ODataAdaptor || adaptor instanceof WebApiAdaptor || adaptor instanceof WebMethodAdaptor || adaptor instanceof CacheAdaptor || adaptor instanceof UrlAdaptor;
    }
    return false;
  }
}
function isCountRequired(parent) {
  if (parent.dataSource && "result" in parent.dataSource) {
    return true;
  }
  return false;
}
function isCheckboxcolumn(parent) {
  for (var i = 0; i < parent.columns.length; i++) {
    if (parent.columns[parseInt(i.toString(), 10)].showCheckbox) {
      return true;
    }
  }
  return false;
}
function isFilterChildHierarchy(parent) {
  if (!isNullOrUndefined(parent.grid.searchSettings.key) && parent.grid.searchSettings.key !== "" && (parent.searchSettings.hierarchyMode === "Child" || parent.searchSettings.hierarchyMode === "None") || parent.allowFiltering && parent.grid.filterSettings.columns.length && (parent.filterSettings.hierarchyMode === "Child" || parent.filterSettings.hierarchyMode === "None")) {
    return true;
  }
  return false;
}
function findParentRecords(records) {
  var datas = [];
  var recordsLength = Object.keys(records).length;
  for (var i = 0, len = recordsLength; i < len; i++) {
    var hasChild = getObject("hasChildRecords", records[parseInt(i.toString(), 10)]);
    if (hasChild) {
      datas.push(records[parseInt(i.toString(), 10)]);
    }
  }
  return datas;
}
function getExpandStatus(parent, record, parents) {
  var parentRecord = isNullOrUndefined(record.parentItem) ? null : getParentData(parent, record.parentItem.uniqueID);
  var childParent;
  if (parentRecord != null) {
    if (parent.initialRender && !isNullOrUndefined(parentRecord[parent.expandStateMapping]) && !parentRecord[parent.expandStateMapping]) {
      parentRecord.expanded = false;
      return false;
    } else if (parentRecord.expanded === false) {
      return false;
    } else if (parentRecord.parentItem) {
      childParent = getParentData(parent, parentRecord.parentItem.uniqueID);
      if (childParent && parent.initialRender && !isNullOrUndefined(childParent[parent.expandStateMapping]) && !childParent[parent.expandStateMapping]) {
        childParent.expanded = false;
        return false;
      }
      if (childParent && childParent.expanded === false) {
        return false;
      } else if (childParent) {
        return getExpandStatus(parent, childParent, parents);
      }
      return true;
    } else {
      return true;
    }
  } else {
    return true;
  }
}
function findChildrenRecords(records) {
  var datas = [];
  if (isNullOrUndefined(records) || !records.hasChildRecords && !isNullOrUndefined(records.childRecords) && !records.childRecords.length) {
    return [];
  }
  if (!isNullOrUndefined(records.childRecords)) {
    var childRecords = records.childRecords.filter(function(item) {
      return !item.isSummaryRow;
    });
    var keys = Object.keys(childRecords);
    for (var i = 0, len = keys.length; i < len; i++) {
      datas.push(childRecords[parseInt(i.toString(), 10)]);
      if (childRecords[parseInt(i.toString(), 10)].hasChildRecords || !isNullOrUndefined(childRecords[parseInt(i.toString(), 10)].childRecords) && childRecords[parseInt(i.toString(), 10)].childRecords.length) {
        datas = datas.concat(findChildrenRecords(childRecords[parseInt(i.toString(), 10)]));
      }
    }
  }
  return datas;
}
function isOffline(parent) {
  if (isRemoteData(parent)) {
    var dm = parent.dataSource;
    return !isNullOrUndefined(dm.ready);
  }
  return true;
}
function extendArray(array) {
  var objArr = [];
  var obj;
  var keys;
  for (var i = 0; array && i < array.length; i++) {
    keys = Object.keys(array[parseInt(i.toString(), 10)]);
    obj = {};
    for (var j = 0; j < keys.length; j++) {
      obj[keys[parseInt(j.toString(), 10)]] = array[parseInt(i.toString(), 10)][keys[parseInt(j.toString(), 10)]];
    }
    objArr.push(obj);
  }
  return objArr;
}
function getPlainData(value) {
  delete value.hasChildRecords;
  delete value.childRecords;
  delete value.index;
  delete value.parentItem;
  delete value.level;
  delete value.taskData;
  delete value.uniqueID;
  return value;
}
function getParentData(parent, value, requireFilter) {
  if (requireFilter) {
    var idFilter = "uniqueIDFilterCollection";
    return parent["" + idFilter]["" + value];
  } else {
    var id = "uniqueIDCollection";
    return parent["" + id]["" + value];
  }
}
function isHidden(el) {
  var style = window.getComputedStyle(el);
  return style.display === "none" || style.visibility === "hidden";
}

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/selection.js
var Selection = (
  /** @class */
  (function() {
    function Selection2(parent) {
      this.headerCheckboxFrameEl = null;
      this.checkboxColIndexCache = -2;
      this.parentSelectionCounters = {};
      this.selectedUidMap = /* @__PURE__ */ new Map();
      this.totalSelectableCount = 0;
      this.headerSelectionState = "uncheck";
      this.checkedItemCount = 0;
      this.visibleUidIndex = {};
      this.parent = parent;
      this.selectedItems = [];
      this.selectedIndexes = [];
      this.filteredList = [];
      this.searchingRecords = [];
      this.addEventListener();
    }
    Selection2.prototype.getModuleName = function() {
      return "selection";
    };
    Selection2.prototype.buildVisibleUidMap = function() {
      this.visibleUidIndex = {};
      var view = this.parent.grid.currentViewData;
      if (!view) {
        return;
      }
      for (var i = 0, len = view.length; i < len; i++) {
        var rec = view[parseInt(i.toString(), 10)];
        if (rec && rec.uniqueID) {
          this.visibleUidIndex[rec.uniqueID] = i;
        }
      }
    };
    Selection2.prototype.addEventListener = function() {
      this.parent.on("dataBoundArg", this.headerCheckbox, this);
      this.parent.on("columnCheckbox", this.columnCheckbox, this);
      this.parent.on("updateGridActions", this.updateGridActions, this);
      this.parent.grid.on("colgroup-refresh", this.headerCheckbox, this);
      this.parent.on("checkboxSelection", this.checkboxSelection, this);
    };
    Selection2.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off("dataBoundArg", this.headerCheckbox);
      this.parent.off("columnCheckbox", this.columnCheckbox);
      this.parent.grid.off("colgroup-refresh", this.headerCheckbox);
      this.parent.off("checkboxSelection", this.checkboxSelection);
      this.parent.off("updateGridActions", this.updateGridActions);
    };
    Selection2.prototype.destroy = function() {
      this.resetSelectionCaches();
      this.removeEventListener();
    };
    Selection2.prototype.checkboxSelection = function(args) {
      var _a;
      var target = getObject("target", args);
      var checkWrap = parentsUntil(target, "e-checkbox-wrapper");
      var checkBox;
      if (checkWrap && checkWrap.querySelectorAll(".e-treecheckselect").length > 0) {
        checkBox = checkWrap.querySelector('input[type="checkbox"]');
        var rowIndex = [];
        if (this.parent.frozenRows) {
          rowIndex.push(parseInt(target.closest("tr").getAttribute("aria-rowindex"), 10) - 1);
        } else {
          rowIndex.push(target.closest("tr").rowIndex);
        }
        this.selectCheckboxes(rowIndex);
        var newCheckState = checkBox.nextElementSibling.classList.contains("e-check");
        this.triggerChkChangeEvent(checkBox, newCheckState, target.closest("tr"));
      } else if (checkWrap && checkWrap.querySelectorAll(".e-treeselectall").length > 0 && this.parent.autoCheckHierarchy) {
        var frame = checkWrap.querySelector(".e-frame");
        var currentStateIsUncheck = !frame.classList.contains("e-check") && !frame.classList.contains("e-stop");
        var targetState = currentStateIsUncheck;
        this.headerSelection(targetState);
        checkBox = checkWrap.querySelector('input[type="checkbox"]');
        this.triggerChkChangeEvent(checkBox, targetState, target.closest("tr"));
      }
      if (!isNullOrUndefined(this.parent["parentQuery"]) && this.parent.selectionSettings.persistSelection && this.parent["columnModel"].filter(function(col) {
        return col.type === "checkbox";
      }).length > 0 && isRemoteData(this.parent)) {
        if (this.parent["parentQuery"].length > 0) {
          (_a = this.parent.query.queries).push.apply(_a, this.parent["parentQuery"]);
          this.parent["parentQuery"] = [];
        }
      }
    };
    Selection2.prototype.triggerChkChangeEvent = function(checkBox, checkState, rowElement) {
      var data = this.parent.getCurrentViewRecords()[rowElement.rowIndex];
      var args = {
        checked: checkState,
        target: checkBox,
        rowElement,
        rowData: checkBox.classList.contains("e-treeselectall") ? this.parent.getCheckedRecords() : data
      };
      this.parent.trigger(checkboxChange, args);
    };
    Selection2.prototype.getCheckboxcolumnIndex = function() {
      if (this.checkboxColIndexCache !== -2) {
        return this.checkboxColIndexCache;
      }
      var mappingUid;
      var columnIndex = -1;
      var stackedHeader = "stackedHeader";
      var columnModel = "columnModel";
      var columns = this.parent["" + stackedHeader] ? this.parent["" + columnModel] : this.parent.columns;
      for (var col = 0; col < columns.length; col++) {
        if (columns[parseInt(col.toString(), 10)].showCheckbox) {
          mappingUid = columns[parseInt(col.toString(), 10)].uid;
          break;
        }
      }
      var headerDivs = this.parent.getHeaderContent().querySelectorAll(".e-headercelldiv");
      for (var j = 0; j < headerDivs.length; j++) {
        var headercell = headerDivs[parseInt(j.toString(), 10)];
        if (headercell.getAttribute("data-mappinguid") === mappingUid) {
          columnIndex = j;
          break;
        }
      }
      this.checkboxColIndexCache = isNullOrUndefined(columnIndex) ? -1 : columnIndex;
      return this.checkboxColIndexCache;
    };
    Selection2.prototype.headerCheckbox = function() {
      this.buildVisibleUidMap();
      this.totalSelectableCount = this.countSelectableRecords(this.resolveHeaderSelectionList(true));
      this.columnIndex = this.getCheckboxcolumnIndex();
      if (this.columnIndex > -1) {
        var headerElement = this.parent.getHeaderContent().querySelectorAll(".e-headercelldiv")[this.columnIndex];
        if (headerElement && headerElement.querySelectorAll(".e-treeselectall").length === 0) {
          var value = false;
          var rowChkBox = this.parent.createElement("input", { className: "e-treeselectall", attrs: { "type": "checkbox" } });
          var checkWrap = createCheckBox(this.parent.createElement, false, { checked: value, label: " " });
          checkWrap.classList.add("e-hierarchycheckbox");
          checkWrap.insertBefore(rowChkBox.cloneNode(), checkWrap.firstChild);
          if (!isNullOrUndefined(headerElement)) {
            headerElement.insertBefore(checkWrap, headerElement.firstChild);
          }
          this.headerCheckboxFrameEl = checkWrap.querySelector(".e-frame");
          if (this.parent.autoCheckHierarchy) {
            this.headerSelection();
          }
        } else if (headerElement && headerElement.querySelectorAll(".e-treeselectall").length > 0) {
          this.headerCheckboxFrameEl = headerElement.querySelector(".e-frame");
          if (this.parent.autoCheckHierarchy) {
            this.headerSelection();
          }
        }
      }
    };
    Selection2.prototype.renderColumnCheckbox = function(args) {
      var rowChkBox = this.parent.createElement("input", { className: "e-treecheckselect", attrs: { "type": "checkbox", "aria-label": "checkbox" } });
      var data = args.data;
      args.cell.classList.add("e-treegridcheckbox");
      args.cell.setAttribute("aria-label", "checkbox");
      var value = data.checkboxState === "check";
      var checkWrap = createCheckBox(this.parent.createElement, false, { checked: value, label: " " });
      checkWrap.classList.add("e-hierarchycheckbox");
      if (this.parent.allowTextWrap) {
        checkWrap.querySelector(".e-frame").style.width = "18px";
      }
      if (data.checkboxState === "indeterminate") {
        var checkbox = checkWrap.querySelectorAll(".e-frame")[0];
        removeClass([checkbox], ["e-check", "e-stop", "e-uncheck"]);
        checkWrap.querySelector(".e-frame").classList.add("e-stop");
      } else if (data.checkboxState === "uncheck") {
        var checkbox = checkWrap.querySelectorAll(".e-frame")[0];
        removeClass([checkbox], ["e-check", "e-stop", "e-uncheck"]);
        checkWrap.querySelector(".e-frame").classList.add("e-uncheck");
      } else if (data.checkboxState === "check") {
        var checkbox = checkWrap.querySelectorAll(".e-frame")[0];
        removeClass([checkbox], ["e-check", "e-stop", "e-uncheck"]);
        checkWrap.querySelector(".e-frame").classList.add("e-check");
      }
      checkWrap.insertBefore(rowChkBox.cloneNode(), checkWrap.firstChild);
      return checkWrap;
    };
    Selection2.prototype.columnCheckbox = function(container) {
      var checkWrap = this.renderColumnCheckbox(container);
      var containerELe = container.cell.querySelector(".e-treecolumn-container");
      if (!isNullOrUndefined(containerELe)) {
        if (!container.cell.querySelector(".e-hierarchycheckbox")) {
          containerELe.insertBefore(checkWrap, containerELe.querySelectorAll(".e-treecell")[0]);
        }
      } else {
        var spanEle = this.parent.createElement("span", { className: "e-treecheckbox" });
        var data = container.cell.innerHTML;
        container.cell.innerHTML = "";
        spanEle.innerHTML = data;
        var divEle = this.parent.createElement("div", { className: "e-treecheckbox-container" });
        divEle.appendChild(checkWrap);
        divEle.appendChild(spanEle);
        container.cell.appendChild(divEle);
      }
    };
    Selection2.prototype.selectCheckboxes = function(rowIndexes) {
      for (var i = 0; i < rowIndexes.length; i++) {
        var viewRec = this.parent.getCurrentViewRecords()[rowIndexes[parseInt(i.toString(), 10)]];
        var flatRec = getParentData(this.parent, viewRec.uniqueID);
        var nextState = flatRec.checkboxState === "check" ? "uncheck" : "check";
        flatRec.checkboxState = nextState;
        this.traverSelection(flatRec, nextState, false);
      }
    };
    Selection2.prototype.traverSelection = function(record, checkboxState, isChildItem) {
      var previousState = record.checkboxState;
      if (!isChildItem) {
        this.buildVisibleUidMap();
      }
      var effectiveChildren = Array.isArray(record.childRecords) ? record.childRecords : [];
      if ((!effectiveChildren || effectiveChildren.length === 0) && this.parent.autoCheckHierarchy) {
        effectiveChildren = this.getChildrenFromFlat(record);
      }
      if (this.parent.filterModule && this.parent.filterModule.filteredResult.length > 0 && effectiveChildren && effectiveChildren.length) {
        effectiveChildren = this.getFilteredChildRecords(effectiveChildren);
      }
      if (!this.parent.autoCheckHierarchy || !effectiveChildren || effectiveChildren.length === 0) {
        this.updateSelectedItems(record, checkboxState);
        if (!isChildItem) {
          if (record.parentItem && this.parent.autoCheckHierarchy) {
            this.updateParentSelection(record.parentItem);
          }
          this.updateSelectedCollectionsAfterBulk(this.resolveHeaderSelectionList(), "");
          this.refreshVisibleCheckboxes();
          if (this.parent.autoCheckHierarchy) {
            this.updateHeaderCheckboxState();
          }
        }
        return;
      }
      var childCount = 0;
      var checkedCount = 0;
      var indeterminateCount = 0;
      for (var i = 0; i < effectiveChildren.length; i++) {
        var child = effectiveChildren[parseInt(i.toString(), 10)];
        if (!child || child.isSummaryRow) {
          continue;
        }
        childCount++;
        this.updateSelectedItems(child, checkboxState, true);
        if (child.hasChildRecords) {
          this.traverSelection(child, checkboxState, true);
        }
        if (child.checkboxState === "check") {
          checkedCount++;
        } else if (child.checkboxState === "indeterminate") {
          indeterminateCount++;
        }
      }
      if (record.uniqueID) {
        this.parentSelectionCounters[record.uniqueID] = {
          total: childCount,
          checked: checkedCount,
          indeterminate: indeterminateCount
        };
      }
      var summary = this.parentSelectionCounters[record.uniqueID];
      var finalState = this.deriveParentState(record, summary);
      if (checkboxState === "check" && summary.total > 0 && summary.checked === summary.total && summary.indeterminate === 0) {
        finalState = "check";
      }
      this.updateSelectedItems(record, finalState);
      if (!isChildItem && record.parentItem && this.parent.autoCheckHierarchy) {
        this.updateParentSelection(record.parentItem, previousState, finalState);
      }
      if (!isChildItem) {
        var bulkList = this.resolveHeaderSelectionList();
        this.updateSelectedCollectionsAfterBulk(bulkList, "");
        this.refreshVisibleCheckboxes();
        this.updateHeaderCheckboxState();
      }
    };
    Selection2.prototype.getFilteredChildRecords = function(childRecords) {
      var _this = this;
      var filteredChildRecords = childRecords.filter(function(e) {
        return _this.parent.filterModule.filteredResult.indexOf(e) > -1;
      });
      return filteredChildRecords;
    };
    Selection2.prototype.getChildrenFromFlat = function(record) {
      var all = this.parent.flatData;
      if (!all || !record) {
        return [];
      }
      var pid = record.uniqueID;
      var out = [];
      for (var i = 0; i < all.length; i++) {
        var r = all[parseInt(i.toString(), 10)];
        if (!r || r.isSummaryRow) {
          continue;
        }
        var p = r.parentItem;
        if (p && p.uniqueID === pid) {
          out.push(r);
        }
      }
      return out;
    };
    Selection2.prototype.updateParentSelection = function(parentRecord, previousChildState, nextChildState) {
      var parent = getParentData(this.parent, parentRecord.uniqueID);
      if (!parent) {
        return;
      }
      var summary = this.buildSelectionSummary(parent);
      if (previousChildState) {
        this.applySummaryDelta(summary, previousChildState, -1);
      }
      if (nextChildState) {
        this.applySummaryDelta(summary, nextChildState, 1);
      }
      if (parent.uniqueID) {
        this.parentSelectionCounters[parent.uniqueID] = summary;
      }
      var desiredState = this.deriveParentState(parent, summary);
      if (parent.checkboxState === desiredState) {
        return;
      }
      var parentPrev = parent.checkboxState;
      parent.checkboxState = desiredState;
      this.updateSelectedItems(parent, desiredState);
      if (parent.parentItem) {
        this.updateParentSelection(parent.parentItem, parentPrev, desiredState);
      }
    };
    Selection2.prototype.buildSelectionSummary = function(record, ignoreFilter) {
      var summary = { total: 0, checked: 0, indeterminate: 0 };
      var children = [];
      if (record && Array.isArray(record.childRecords) && record.childRecords.length) {
        children = record.childRecords;
      } else {
        children = this.getChildrenFromFlat(record);
      }
      if (!ignoreFilter && this.parent.filterModule && this.parent.filterModule.filteredResult.length > 0) {
        children = this.getFilteredChildRecords(children);
      }
      for (var i = 0; i < children.length; i++) {
        var child = children[parseInt(i.toString(), 10)];
        if (!child || child.isSummaryRow) {
          continue;
        }
        summary.total++;
        if (child.checkboxState === "check") {
          summary.checked++;
        } else if (child.checkboxState === "indeterminate") {
          summary.indeterminate++;
        }
      }
      return summary;
    };
    Selection2.prototype.applySummaryDelta = function(summary, state, delta) {
      if (state === "check") {
        summary.checked = Math.max(0, summary.checked + delta);
      } else if (state === "indeterminate") {
        summary.indeterminate = Math.max(0, summary.indeterminate + delta);
      }
    };
    Selection2.prototype.deriveParentState = function(record, summary) {
      var total = summary.total;
      var checked = summary.checked;
      var indeterminate = summary.indeterminate;
      if (indeterminate > 0 || checked > 0 && checked !== total) {
        return "indeterminate";
      }
      if (checked === total && total > 0) {
        return "check";
      }
      return "uncheck";
    };
    Selection2.prototype.headerSelection = function(checkAll) {
      if (!isNullOrUndefined(this.parent.filterModule) && this.parent.filterModule.filteredResult.length > 0) {
        var filterResult = this.parent.filterModule.filteredResult;
        if (this.filteredList.length === 0) {
          this.filteredList = filterResult;
        }
        if (this.parent.grid.searchSettings.key.length) {
          this.searchingRecords = filterResult;
        } else {
          if (this.filteredList !== filterResult && !this.parent.grid.searchSettings.key.length) {
            this.filteredList = filterResult;
            this.searchingRecords = [];
          }
        }
      }
      if (this.searchingRecords.length > 0 && !isNullOrUndefined(checkAll)) {
        this.filteredList = this.searchingRecords;
      } else if (this.filteredList.length > 0 && !this.parent.filterSettings.columns.length && !this.parent.grid.searchSettings.key.length) {
        this.filteredList = [];
      }
      var records = this.resolveHeaderSelectionList(true);
      if (!isNullOrUndefined(checkAll)) {
        this.resetSelectionCaches();
        var targetState = checkAll ? "check" : "uncheck";
        this.headerSelectionState = targetState;
        this.processHeaderSelection(records, targetState);
        this.finalizeParentsAfterBulk(records);
        this.updateSelectedCollectionsAfterBulk(records, "");
        this.refreshVisibleCheckboxes();
        this.updateHeaderCheckboxState();
        return;
      }
      this.totalSelectableCount = this.countSelectableRecords(records);
      this.updateHeaderCheckboxState();
    };
    Selection2.prototype.finalizeParentsAfterBulk = function(records) {
      var all = records;
      for (var i = 0; i < all.length; i++) {
        var rec = all[parseInt(i.toString(), 10)];
        if (!rec || !rec.hasChildRecords) {
          continue;
        }
        var summary = this.buildSelectionSummary(rec, true);
        this.parentSelectionCounters[rec.uniqueID] = summary;
        var finalState = this.deriveParentState(rec, summary);
        if (this.headerSelectionState === "check" && summary.total > 0 && summary.checked === summary.total && summary.indeterminate === 0) {
          finalState = "check";
        } else if (this.headerSelectionState === "uncheck") {
          finalState = "uncheck";
        }
        if (rec.checkboxState !== finalState) {
          this.updateSelectedItems(rec, finalState);
        }
      }
    };
    Selection2.prototype.processHeaderSelection = function(records, targetState) {
      for (var i = 0; i < records.length; i++) {
        var record = records[parseInt(i.toString(), 10)];
        if (!record) {
          continue;
        }
        var previousState = record.checkboxState;
        if (previousState === targetState) {
          continue;
        }
        record.checkboxState = targetState;
        this.updateSelectedItems(record, targetState, true);
      }
    };
    Selection2.prototype.updateSelectedCollectionsAfterBulk = function(records, requestType) {
      var hasFilter = !!(this.parent.filterModule && this.parent.filterModule.filteredResult && this.parent.filterModule.filteredResult.length);
      var hasSearch = !!(this.parent.grid && this.parent.grid.searchSettings && this.parent.grid.searchSettings.key && this.parent.grid.searchSettings.key.length);
      var isFilterOrSearch = hasFilter || hasSearch || requestType === "refresh" || requestType === "searching";
      var currentlySelectedItemsInOrder = isFilterOrSearch ? records : this.selectedItems.slice();
      var newSelectedItems = [];
      var newSelectedUidMap = /* @__PURE__ */ new Map();
      var newSelectedIndexes = [];
      for (var _i = 0, currentlySelectedItemsInOrder_1 = currentlySelectedItemsInOrder; _i < currentlySelectedItemsInOrder_1.length; _i++) {
        var item = currentlySelectedItemsInOrder_1[_i];
        if (item.hasChildRecords && isFilterOrSearch && item.level === 0 && this.parent.autoCheckHierarchy) {
          this.updateParentSelection(item);
        }
        if (item.uniqueID && item.checkboxState === "check") {
          newSelectedItems.push(item);
          newSelectedUidMap.set(item.uniqueID, true);
        }
      }
      if (!isFilterOrSearch) {
        var allFlatData = this.parent.flatData;
        if (allFlatData) {
          for (var _a = 0, allFlatData_1 = allFlatData; _a < allFlatData_1.length; _a++) {
            var record = allFlatData_1[_a];
            if (!record || record.isSummaryRow) {
              continue;
            }
            if (record.uniqueID && record.checkboxState === "check" && !newSelectedUidMap.has(record.uniqueID)) {
              newSelectedItems.push(record);
              newSelectedUidMap.set(record.uniqueID, true);
            }
          }
        }
      }
      this.selectedItems = newSelectedItems;
      this.selectedUidMap = newSelectedUidMap;
      this.buildVisibleUidMap();
      for (var _b = 0, _c = this.selectedItems; _b < _c.length; _b++) {
        var item = _c[_b];
        var visibleIdx = this.visibleUidIndex[item.uniqueID];
        if (visibleIdx !== void 0) {
          newSelectedIndexes.push(visibleIdx);
        }
      }
      this.selectedIndexes = newSelectedIndexes;
      this.checkedItemCount = this.selectedItems.length;
      this.totalSelectableCount = this.countSelectableRecords(records);
    };
    Selection2.prototype.refreshVisibleCheckboxes = function() {
      this.buildVisibleUidMap();
      var data = this.parent.getCurrentViewRecords();
      var uidMap = this.parent.uniqueIDCollection;
      for (var i = 0; data && i < data.length; i++) {
        var viewRec = data[parseInt(i.toString(), 10)];
        if (!viewRec) {
          continue;
        }
        var uid = viewRec.uniqueID;
        var srcRec = uidMap && uid != null ? uidMap[String(uid)] : viewRec;
        var state = srcRec && srcRec.checkboxState ? srcRec.checkboxState : "uncheck";
        var rowEl = null;
        var rowUid = viewRec.uid;
        if (rowUid) {
          rowEl = this.parent.grid.getRowElementByUID(rowUid);
        }
        if (!rowEl) {
          var rows = this.parent.getRows();
          rowEl = rows && rows[parseInt(i.toString(), 10)];
          if ((this.parent.frozenRows || this.parent.getFrozenColumns()) && !rowEl) {
            var movableRows = this.parent.getDataRows();
            rowEl = movableRows && movableRows[parseInt(i.toString(), 10)];
          }
        }
        if (rowEl) {
          var frame = rowEl.querySelector(".e-hierarchycheckbox .e-frame");
          if (frame) {
            removeClass([frame], ["e-check", "e-stop", "e-uncheck"]);
            frame.classList.add(state === "indeterminate" ? "e-stop" : "e-" + state);
            var input2 = rowEl.querySelector(".e-treecheckselect");
            if (input2) {
              input2.setAttribute("aria-checked", state === "check" ? "true" : state === "uncheck" ? "false" : "mixed");
            }
          }
        }
      }
    };
    Selection2.prototype.resetSelectionCaches = function() {
      this.parentSelectionCounters = {};
      this.selectedUidMap = /* @__PURE__ */ new Map();
      this.selectedItems = [];
      this.selectedIndexes = [];
      this.totalSelectableCount = 0;
      this.headerSelectionState = "uncheck";
      this.checkedItemCount = 0;
    };
    Selection2.prototype.countSelectableRecords = function(records) {
      var count = 0;
      if (!records) {
        return count;
      }
      for (var i = 0; i < records.length; i++) {
        var rec = records[parseInt(i.toString(), 10)];
        if (rec && !rec.isSummaryRow) {
          count++;
        }
      }
      return count;
    };
    Selection2.prototype.resolveHeaderSelectionList = function(includeAll) {
      var dataToProcess = [];
      if (!isRemoteData(this.parent)) {
        var hasFilter = !!(this.parent.filterModule && this.parent.filterModule.filteredResult && this.parent.filterModule.filteredResult.length);
        var hasSearch = !!(this.parent.grid && this.parent.grid.searchSettings && this.parent.grid.searchSettings.key && this.parent.grid.searchSettings.key.length);
        if (includeAll) {
          if (hasFilter) {
            dataToProcess = this.filteredList && this.filteredList.length ? this.filteredList : this.parent.filterModule.filteredResult;
          } else if (hasSearch && this.searchingRecords && this.searchingRecords.length) {
            dataToProcess = this.searchingRecords;
          } else {
            dataToProcess = this.parent.flatData;
          }
        } else {
          if (hasFilter) {
            dataToProcess = this.filteredList && this.filteredList.length ? this.filteredList : this.parent.filterModule.filteredResult;
          } else if (hasSearch && this.searchingRecords && this.searchingRecords.length) {
            dataToProcess = this.searchingRecords;
          } else {
            dataToProcess = this.parent.flatData;
          }
        }
      } else {
        dataToProcess = this.parent.getCurrentViewRecords();
      }
      return dataToProcess;
    };
    Selection2.prototype.updateHeaderCheckboxState = function() {
      var frame = this.headerCheckboxFrameEl;
      if (!frame) {
        return;
      }
      var recordsForHeaderLogic = this.resolveHeaderSelectionList(true);
      this.totalSelectableCount = this.countSelectableRecords(recordsForHeaderLogic);
      var checkedCountForHeaderLogic = 0;
      for (var _i = 0, recordsForHeaderLogic_1 = recordsForHeaderLogic; _i < recordsForHeaderLogic_1.length; _i++) {
        var record = recordsForHeaderLogic_1[_i];
        if (record && !record.isSummaryRow && record.checkboxState === "check") {
          checkedCountForHeaderLogic++;
        }
      }
      removeClass([frame], ["e-check", "e-stop", "e-uncheck"]);
      if (this.totalSelectableCount === 0) {
        frame.classList.add("e-uncheck");
      } else if (checkedCountForHeaderLogic === 0) {
        frame.classList.add("e-uncheck");
      } else if (checkedCountForHeaderLogic === this.totalSelectableCount) {
        frame.classList.add("e-check");
      } else {
        frame.classList.add("e-stop");
      }
    };
    Selection2.prototype.updateSelectedItems = function(currentRecord, checkState, silent) {
      this.buildVisibleUidMap();
      var uid = currentRecord.uniqueID;
      var uidMap = this.parent.uniqueIDCollection;
      var checkboxRecord = uidMap && uid != null ? uidMap[String(uid)] ? uidMap[String(uid)] : currentRecord : currentRecord;
      var isSummary = currentRecord.isSummaryRow === true;
      var previousState = checkboxRecord.checkboxState;
      var currentVisibleIndex = this.visibleUidIndex[String(uid)];
      checkboxRecord.checkboxState = checkState;
      if (silent) {
        return;
      }
      if (!isSummary && previousState !== checkState) {
        if (checkState === "check") {
          this.checkedItemCount++;
          if (!this.selectedUidMap.has(String(uid))) {
            if (checkboxRecord.uniqueID) {
              this.selectedUidMap.set(String(checkboxRecord.uniqueID), true);
            }
            this.selectedItems.push(checkboxRecord);
            if (currentVisibleIndex !== void 0 && this.selectedIndexes.indexOf(currentVisibleIndex) === -1) {
              this.selectedIndexes.push(currentVisibleIndex);
            }
          }
        } else if (previousState === "check" || previousState === "indeterminate") {
          if (this.checkedItemCount > 0) {
            this.checkedItemCount--;
          }
          if (checkboxRecord && checkboxRecord.uniqueID && this.selectedUidMap.has(String(checkboxRecord.uniqueID))) {
            this.selectedUidMap.delete(String(checkboxRecord.uniqueID));
            var itemIdx = this.selectedItems.indexOf(checkboxRecord);
            if (itemIdx !== -1) {
              this.selectedItems.splice(itemIdx, 1);
            }
            if (currentVisibleIndex !== void 0) {
              var indexInSelectedIndexes = this.selectedIndexes.indexOf(currentVisibleIndex);
              if (indexInSelectedIndexes > -1) {
                this.selectedIndexes.splice(indexInSelectedIndexes, 1);
              }
            }
          }
        }
      }
      var rowEl = null;
      var rowUid = currentRecord.uid;
      if (rowUid) {
        rowEl = this.parent.grid.getRowElementByUID(rowUid);
      }
      if (!rowEl) {
        var recordVisibleIndex = currentVisibleIndex !== void 0 ? currentVisibleIndex : typeof this.visibleUidIndex[String(uid)] === "number" ? this.visibleUidIndex[String(uid)] : -1;
        if (recordVisibleIndex > -1) {
          rowEl = this.parent.getRows()[parseInt(recordVisibleIndex.toString(), 10)];
          if (!rowEl && (this.parent.frozenRows || this.parent.getFrozenColumns())) {
            rowEl = this.parent.getDataRows()[parseInt(recordVisibleIndex.toString(), 10)];
          }
        }
      }
      if (rowEl) {
        var frame = rowEl.querySelector(".e-hierarchycheckbox .e-frame");
        if (frame) {
          removeClass([frame], ["e-check", "e-stop", "e-uncheck"]);
          frame.classList.add(checkState === "indeterminate" ? "e-stop" : "e-" + checkState);
        }
        var input2 = rowEl.querySelector(".e-treecheckselect");
        if (input2) {
          input2.setAttribute("aria-checked", checkState === "check" ? "true" : checkState === "uncheck" ? "false" : "mixed");
        }
      }
    };
    Selection2.prototype.updateGridActions = function(args) {
      var requestType = args.requestType;
      if (isCheckboxcolumn(this.parent)) {
        if (this.parent.autoCheckHierarchy) {
          if (requestType === "sorting" || requestType === "paging") {
            this.updateSelectedCollectionsAfterBulk(this.resolveHeaderSelectionList(), "");
            this.refreshVisibleCheckboxes();
            this.updateHeaderCheckboxState();
          } else if (requestType === "delete" || args.action === "add") {
            var updatedData = [];
            if (requestType === "delete") {
              updatedData = args.data;
            } else {
              updatedData.push(args.data);
            }
            for (var i = 0; i < updatedData.length; i++) {
              if (requestType === "delete") {
                this.updateSelectedItems(updatedData[parseInt(i.toString(), 10)], "uncheck", false);
              }
              if (!isNullOrUndefined(updatedData[parseInt(i.toString(), 10)].parentItem)) {
                this.updateParentSelection(updatedData[parseInt(i.toString(), 10)].parentItem);
              }
            }
            this.updateSelectedCollectionsAfterBulk(this.resolveHeaderSelectionList(true), "");
            this.refreshVisibleCheckboxes();
            if (this.parent.autoCheckHierarchy) {
              this.updateHeaderCheckboxState();
            }
          } else if (args.requestType === "add" && this.parent.autoCheckHierarchy) {
            args.data.checkboxState = "uncheck";
          } else if (requestType === "filtering" || requestType === "searching" || requestType === "refresh") {
            this.updateSelectedCollectionsAfterBulk(this.resolveHeaderSelectionList(), requestType);
            this.refreshVisibleCheckboxes();
            if (this.parent.autoCheckHierarchy) {
              this.updateHeaderCheckboxState();
            }
          }
        } else {
          if ((requestType === "filtering" || requestType === "searching" || requestType === "refresh" || requestType === "sorting" || requestType === "paging" || requestType === "expanding" || requestType === "expand" || requestType === "collapsing" || requestType === "collapse") && !isRemoteData(this.parent)) {
            if (!(isCheckboxcolumn(this.parent) && (requestType === "refresh" && this.parent["isVirtualExpandCollapse"]))) {
              this.selectedItems = [];
              this.selectedUidMap = /* @__PURE__ */ new Map();
              this.selectedIndexes = [];
            }
            if (requestType === "filtering" || requestType === "searching" || requestType === "sorting") {
              this.headerSelection(false);
            }
            this.refreshVisibleCheckboxes();
            if (this.parent.autoCheckHierarchy) {
              this.updateHeaderCheckboxState();
            }
          }
        }
      }
    };
    Selection2.prototype.getCheckedrecords = function() {
      return this.selectedItems;
    };
    Selection2.prototype.getCheckedRowIndexes = function() {
      this.buildVisibleUidMap();
      var orderedVisibleIndexes = [];
      for (var _i = 0, _a = this.selectedItems; _i < _a.length; _i++) {
        var selectedItem = _a[_i];
        var uid = selectedItem.uniqueID;
        if (uid !== void 0 && this.visibleUidIndex[uid] !== void 0) {
          orderedVisibleIndexes.push(this.visibleUidIndex[uid]);
        }
      }
      return orderedVisibleIndexes;
    };
    return Selection2;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/print.js
var Print2 = (
  /** @class */
  (function() {
    function Print3(parent) {
      this.parent = parent;
      Grid.Inject(Print);
      this.addEventListener();
    }
    Print3.prototype.getModuleName = function() {
      return "print";
    };
    Print3.prototype.addEventListener = function() {
      this.parent.grid.on(printGridInit, this.printTreeGrid, this);
    };
    Print3.prototype.removeEventListener = function() {
      this.parent.grid.off(printGridInit, this.printTreeGrid);
    };
    Print3.prototype.printTreeGrid = function(printGrid) {
      var grid = getObject("printgrid", printGrid);
      var gridElement = getObject("element", printGrid);
      grid.addEventListener(queryCellInfo, this.parent.grid.queryCellInfo);
      grid.addEventListener(rowDataBound, this.parent.grid.rowDataBound);
      grid.addEventListener(beforeDataBound, this.parent.grid.beforeDataBound);
      addClass([gridElement], "e-treegrid");
    };
    Print3.prototype.print = function() {
      this.parent.grid.print();
    };
    Print3.prototype.destroy = function() {
      this.removeEventListener();
    };
    return Print3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/search-settings.js
var __extends7 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SearchSettings = (
  /** @class */
  (function(_super) {
    __extends7(SearchSettings2, _super);
    function SearchSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate6([
      Property()
    ], SearchSettings2.prototype, "fields", void 0);
    __decorate6([
      Property(false)
    ], SearchSettings2.prototype, "ignoreCase", void 0);
    __decorate6([
      Property("contains")
    ], SearchSettings2.prototype, "operator", void 0);
    __decorate6([
      Property()
    ], SearchSettings2.prototype, "key", void 0);
    __decorate6([
      Property()
    ], SearchSettings2.prototype, "hierarchyMode", void 0);
    return SearchSettings2;
  })(ChildProperty)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/selection-settings.js
var __extends8 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SelectionSettings = (
  /** @class */
  (function(_super) {
    __extends8(SelectionSettings2, _super);
    function SelectionSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate7([
      Property("Row")
    ], SelectionSettings2.prototype, "mode", void 0);
    __decorate7([
      Property("Flow")
    ], SelectionSettings2.prototype, "cellSelectionMode", void 0);
    __decorate7([
      Property("Single")
    ], SelectionSettings2.prototype, "type", void 0);
    __decorate7([
      Property(false)
    ], SelectionSettings2.prototype, "persistSelection", void 0);
    __decorate7([
      Property("Default")
    ], SelectionSettings2.prototype, "checkboxMode", void 0);
    __decorate7([
      Property(false)
    ], SelectionSettings2.prototype, "checkboxOnly", void 0);
    __decorate7([
      Property(true)
    ], SelectionSettings2.prototype, "enableToggle", void 0);
    return SelectionSettings2;
  })(ChildProperty)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/renderer/render.js
var Render = (
  /** @class */
  (function() {
    function Render2(parent) {
      this.parent = parent;
      this.templateResult = null;
      this.parent.grid.on("template-result", this.columnTemplateResult, this);
      this.parent.grid.on("reactTemplateRender", this.reactTemplateRender, this);
    }
    Render2.prototype.RowModifier = function(args) {
      if (!args.data) {
        return;
      }
      var data = args.data;
      var parentData = data.parentItem;
      if (!isNullOrUndefined(data.parentItem) && !isFilterChildHierarchy(this.parent) && (!(this.parent.allowPaging && !(this.parent.pageSettings.pageSizeMode === "Root")) || isRemoteData(this.parent) && !isOffline(this.parent))) {
        var collapsed2 = this.parent.initialRender && (!(isNullOrUndefined(parentData[this.parent.expandStateMapping]) || parentData[this.parent.expandStateMapping]) || this.parent.enableCollapseAll) || !getExpandStatus(this.parent, args.data, this.parent.grid.getCurrentViewRecords());
        if (collapsed2 && !isNullOrUndefined(args.row)) {
          this.parent["toggleRowVisibility"](args.row, "e-childrow-hidden");
          var rowsObj = this.parent.grid.getRowsObject();
          if (!this.parent.grid.isFrozenGrid() && !isNullOrUndefined(args.row.getAttribute("data-uid"))) {
            rowsObj.filter(function(e) {
              return e.uid === args.row.getAttribute("data-uid");
            })[0].visible = false;
          }
        }
      }
      if (isRemoteData(this.parent) && !isOffline(this.parent)) {
        var proxy_1 = this.parent;
        var parentrec = this.parent.getCurrentViewRecords().filter(function(rec) {
          return getValue(proxy_1.idMapping, rec) === getValue(proxy_1.parentIdMapping, data);
        });
        if (parentrec.length > 0 && !parentrec[0].isSummaryRow && !isNullOrUndefined(args.row)) {
          var display = parentrec[0].expanded ? "e-childrow-visible" : "e-childrow-hidden";
          this.parent["toggleRowVisibility"](args.row, display);
        }
      }
      var summaryRow = getObject("isSummaryRow", args.data);
      if (summaryRow) {
        addClass([args.row], "e-summaryrow");
        var isDragandDropCell = args.row.querySelector(".e-rowdragdrop") || args.row.querySelector(".e-rowdragdrop.e-dragging");
        if (isDragandDropCell) {
          args.row.cells[0].className = "e-rowcell e-summarycell";
          args.row.cells[0].innerHTML = "";
        }
      }
      if (!isNullOrUndefined(args.row)) {
        if (args.row.querySelector(".e-treegridexpand")) {
          args.row.setAttribute("aria-expanded", "true");
        } else if (args.row.querySelector(".e-treegridcollapse")) {
          args.row.setAttribute("aria-expanded", "false");
        }
        if (this.parent.enableCollapseAll && this.parent.initialRender) {
          if (!isNullOrUndefined(data.parentItem)) {
            this.parent["toggleRowVisibility"](args.row, "e-childrow-hidden");
          }
        }
      }
      var dragStartData = "dragStartData";
      var draggedRecord = "draggedRecord";
      if (this.parent.rowDragAndDropModule && this.parent.grid.rowDragAndDropModule && (this.parent.grid.rowDragAndDropModule["" + dragStartData] || this.parent.rowDragAndDropModule["" + draggedRecord]) && this.parent.getContentTable().scrollHeight <= this.parent.getContent().clientHeight) {
        var lastRowBorder = "lastRowBorder";
        var lastVisualData = this.parent.getVisibleRecords()[this.parent.getVisibleRecords().length - 1];
        if (lastVisualData.uniqueID === args.data.uniqueID && !isNullOrUndefined(args.row) && !args.row.cells[0].classList.contains("e-lastrowcell")) {
          this.parent["" + lastRowBorder](args.row, true);
        }
      }
      if (this.parent.isReact) {
        var renderReactTemplates = "renderReactTemplates";
        var thisRef_1 = this;
        thisRef_1.parent["" + renderReactTemplates](function() {
          thisRef_1.parent.trigger(rowDataBound, args);
        });
      } else {
        this.parent.trigger(rowDataBound, args);
      }
    };
    Render2.prototype.cellRender = function(args) {
      if (!args.data) {
        return;
      }
      var grid = this.parent.grid;
      var data = args.data;
      var index;
      var ispadfilter = isNullOrUndefined(data.filterLevel);
      var pad = ispadfilter ? data.level : data.filterLevel;
      var totalIconsWidth = 0;
      var cellElement;
      var column = this.parent.getColumnByUid(args.column.uid);
      var summaryRow = data.isSummaryRow;
      var frozenColumns = this.parent.getFrozenColumns();
      if (!isNullOrUndefined(data.parentItem)) {
        index = data.parentItem.index;
      } else {
        index = data.index;
      }
      var columnIndex;
      var getVirtualColIndexByUid = "getVirtualColIndexByUid";
      if (this.parent.enableColumnVirtualization && !this.parent.initialRender) {
        columnIndex = this.parent["" + getVirtualColIndexByUid](args.column.uid);
      } else {
        columnIndex = grid.getColumnIndexByUid(args.column.uid);
      }
      if (columnIndex === this.parent.treeColumnIndex && (args.requestType === "add" || args.requestType === "rowDragAndDrop" || args.requestType === "delete" || isNullOrUndefined(args.cell.querySelector(".e-treecell")))) {
        var container = createElement("div", { className: "e-treecolumn-container" });
        var emptyExpandIcon = createElement("span", { className: "e-icons e-none" });
        emptyExpandIcon.style.width = "10px";
        emptyExpandIcon.style.display = "inline-block";
        for (var n = 0; n < pad; n++) {
          totalIconsWidth += 10;
          container.appendChild(emptyExpandIcon.cloneNode());
        }
        var iconRequired = !isNullOrUndefined(data.hasFilteredChildRecords) ? data.hasFilteredChildRecords : data.hasChildRecords;
        if (iconRequired && !isNullOrUndefined(data.childRecords)) {
          if (this.parent["isFromGantt"] && this.parent.loadChildOnDemand) {
            iconRequired = data.hasChildRecords;
          } else {
            iconRequired = !(data.childRecords.length === 0);
          }
        }
        if (iconRequired) {
          addClass([args.cell], "e-treerowcell");
          args.cell.setAttribute("aria-expanded", data.expanded ? "true" : "false");
          var expandIcon = createElement("span", { className: "e-icons" });
          var expand = void 0;
          if (this.parent.initialRender) {
            expand = data.expanded && (isNullOrUndefined(data[this.parent.expandStateMapping]) || data[this.parent.expandStateMapping]) && !this.parent.enableCollapseAll;
          } else {
            expand = !(!data.expanded || !getExpandStatus(this.parent, data, this.parent.grid.getCurrentViewRecords()));
            if (this.parent.editSettings.mode === "Cell" && !isRemoteData(this.parent)) {
              var selectedRow = this.parent.flatData.find(function(item) {
                return item.uniqueID === data.uniqueID;
              });
              if (!isNullOrUndefined(selectedRow)) {
                expand = data.expanded !== selectedRow.expanded ? selectedRow.expanded : data.expanded;
              }
            }
          }
          addClass([expandIcon], expand ? "e-treegridexpand" : "e-treegridcollapse");
          totalIconsWidth += 18;
          container.appendChild(expandIcon);
          emptyExpandIcon.style.width = "4px";
          totalIconsWidth += 7;
          container.appendChild(emptyExpandIcon.cloneNode());
        } else if (pad || !pad && !data.level) {
          totalIconsWidth += 20;
          container.appendChild(emptyExpandIcon.cloneNode());
          container.appendChild(emptyExpandIcon.cloneNode());
        }
        cellElement = createElement("span", { className: "e-treecell" });
        if (this.parent.allowTextWrap) {
          cellElement.style.width = "Calc(100% - " + totalIconsWidth + "px)";
        }
        addClass([args.cell], "e-gridrowindex" + index + "level" + data.level);
        this.updateTreeCell(args, cellElement);
        container.appendChild(cellElement);
        args.cell.appendChild(container);
      } else if (this.templateResult) {
        this.templateResult = null;
      }
      var freeze = grid.getFrozenLeftColumnsCount() > 0 || grid.getFrozenRightColumnsCount() > 0 ? true : false;
      if (!freeze) {
        if (frozenColumns > this.parent.treeColumnIndex && frozenColumns > 0 && grid.getColumnIndexByUid(args.column.uid) === frozenColumns) {
          addClass([args.cell], "e-gridrowindex" + index + "level" + data.level);
        } else if (frozenColumns < this.parent.treeColumnIndex && frozenColumns > 0 && (grid.getColumnIndexByUid(args.column.uid) === frozenColumns || grid.getColumnIndexByUid(args.column.uid) === frozenColumns - 1)) {
          addClass([args.cell], "e-gridrowindex" + index + "level" + data.level);
        } else if (frozenColumns === this.parent.treeColumnIndex && frozenColumns > 0 && grid.getColumnIndexByUid(args.column.uid) === this.parent.treeColumnIndex - 1) {
          addClass([args.cell], "e-gridrowindex" + index + "level" + data.level);
        }
      } else {
        var freezerightColumns = grid.getFrozenRightColumns();
        var freezeLeftColumns = grid.getFrozenLeftColumns();
        var movableColumns = grid.getMovableColumns();
        if (freezerightColumns.length > 0 && freezerightColumns[0].field === args.column.field) {
          addClass([args.cell], "e-gridrowindex" + index + "level" + data.level);
        } else if (freezeLeftColumns.length > 0 && freezeLeftColumns[0].field === args.column.field) {
          addClass([args.cell], "e-gridrowindex" + index + "level" + data.level);
        } else if (movableColumns.length > 0 && movableColumns[0].field === args.column.field) {
          addClass([args.cell], "e-gridrowindex" + index + "level" + data.level);
        }
      }
      if (!isNullOrUndefined(column) && column.showCheckbox) {
        this.parent.notify("columnCheckbox", args);
        if (this.parent.allowTextWrap) {
          var checkboxElement = args.cell.querySelectorAll(".e-frame")[0];
          var width = parseInt(checkboxElement.style.width, 16);
          totalIconsWidth += width;
          totalIconsWidth += 10;
          if (grid.getColumnIndexByUid(args.column.uid) === this.parent.treeColumnIndex) {
            cellElement = args.cell.querySelector(".e-treecell");
          } else {
            cellElement = args.cell.querySelector(".e-treecheckbox");
          }
          cellElement.style.width = "Calc(100% - " + totalIconsWidth + "px)";
        }
      }
      if (summaryRow) {
        addClass([args.cell], "e-summarycell");
        var summaryData = getObject(args.column.field, args.data);
        summaryData = isNullOrUndefined(summaryData) ? null : summaryData;
        if (args.cell.querySelector(".e-treecell") != null) {
          args.cell.querySelector(".e-treecell").innerHTML = summaryData;
        } else {
          if (args.column.template) {
            args.cell.innerHTML = null;
          } else {
            args.cell.innerHTML = summaryData;
          }
        }
      }
      this.parent["args"] = args;
      var columnModel = getValue("columnModel", this.parent);
      var treeColumn = columnModel[this.parent.treeColumnIndex];
      if (isNullOrUndefined(this.parent.rowTemplate) && !this.parent.isReact || this.parent.isReact && !args.column["template"]) {
        this.parent.trigger(queryCellInfo, args);
      } else if (this.parent.isReact && treeColumn.field !== args.column.field) {
        var renderReactTemplates = "renderReactTemplates";
        var thisRef_2 = this;
        thisRef_2.parent["" + renderReactTemplates](function() {
          thisRef_2.parent.trigger(queryCellInfo, args);
        });
      }
    };
    Render2.prototype.updateTreeCell = function(args, cellElement) {
      var columnModel = getValue("columnModel", this.parent);
      var treeColumn = columnModel[this.parent.treeColumnIndex];
      var templateFn = "templateFn";
      var colindex = args.column.index;
      if (isNullOrUndefined(treeColumn.field)) {
        args.cell.setAttribute("aria-colindex", colindex + 1 + "");
      }
      if (treeColumn.field === args.column.field && !isNullOrUndefined(treeColumn.template)) {
        args.column.template = treeColumn.template;
        args.column["" + templateFn] = templateCompiler(args.column.template);
        args.cell.classList.add("e-templatecell");
      }
      var textContent = args.cell.querySelector(".e-treecell") != null ? args.cell.querySelector(".e-treecell").innerHTML : args.cell.innerHTML;
      if (typeof args.column.template === "object" && this.templateResult) {
        appendChildren(cellElement, this.templateResult);
        this.templateResult = null;
        args.cell.innerHTML = "";
      } else if (args.cell.classList.contains("e-templatecell")) {
        var len = args.cell.children.length;
        var tempID = this.parent.element.id + args.column.uid;
        if (treeColumn.field === args.column.field && !isNullOrUndefined(treeColumn.template)) {
          var portals = "portals";
          var renderReactTemplates = "renderReactTemplates";
          if (this.parent.isReact && typeof args.column.template !== "string") {
            args.column["" + templateFn](args.data, this.parent, "columnTemplate", tempID, null, null, cellElement);
            if (isNullOrUndefined(this.parent.grid["" + portals])) {
              this.parent.grid["" + portals] = this.parent["" + portals];
            }
            this.parent.notify("renderReactTemplate", this.parent["" + portals]);
            var thisRef_3 = this;
            thisRef_3.parent["" + renderReactTemplates](function() {
              thisRef_3.parent.trigger(queryCellInfo, args);
            });
          } else {
            var str = "isStringTemplate";
            var result = args.column["" + templateFn](extend2({ "index": "" }, args.data), this.parent, "template", tempID, this.parent["" + str]);
            appendChildren(cellElement, result);
          }
          delete args.column.template;
          delete args.column["" + templateFn];
          args.cell.innerHTML = "";
        } else {
          for (var i = 0; i < len; len = args.cell.children.length) {
            cellElement.appendChild(args.cell.children[parseInt(i.toString(), 10)]);
          }
        }
      } else {
        cellElement.innerHTML = textContent;
        args.cell.innerHTML = "";
      }
    };
    Render2.prototype.refreshReactColumnTemplateByUid = function(columnUid) {
      var _this = this;
      if (this.parent.isReact) {
        this.parent.clearTemplate(["columnTemplate"], void 0, function() {
          var cells = "cells";
          var rowIdx = "index";
          var rowsObj = _this.parent.grid.getRowsObject();
          var rows = _this.parent.getDataRows();
          var indent = _this.parent.grid.getIndentCount();
          var cellIndex = _this.parent.grid.getNormalizedColumnIndex(columnUid);
          if (rows.length !== 0) {
            for (var j = 0; j < rowsObj.length; j++) {
              if (rowsObj[parseInt(j.toString(), 10)].isDataRow && !isNullOrUndefined(rowsObj[parseInt(j.toString(), 10)].index)) {
                var cell = rowsObj[parseInt(j.toString(), 10)]["" + cells][parseInt(cellIndex.toString(), 10)];
                var cellRenderer = new CellRenderer(_this.parent.grid, _this.parent.grid.serviceLocator);
                var td = rows.length >= rowsObj.length ? _this.parent.getCellFromIndex(rowsObj[parseInt(j.toString(), 10)].index, cellIndex - indent) : rows[rowsObj[parseInt(j.toString(), 10)].index].querySelector(".e-templatecell");
                cellRenderer.refreshTD(td, cell, rowsObj[parseInt(j.toString(), 10)].data, { index: rowsObj[parseInt(j.toString(), 10)]["" + rowIdx] });
                var treecell = _this.parent.getRows()[parseInt(j.toString(), 10)].cells[parseInt(cellIndex.toString(), 10)];
                _this.cellRender({ data: rowsObj[parseInt(j.toString(), 10)].data, cell: treecell, column: cell.column });
              }
            }
          }
        });
      }
    };
    Render2.prototype.columnTemplateResult = function(args) {
      this.templateResult = args.template;
    };
    Render2.prototype.reactTemplateRender = function(args, callBack) {
      var renderReactTemplates = "renderReactTemplates";
      var portals = "portals";
      this.parent["" + portals] = args;
      this.parent.notify("renderReactTemplate", this.parent["" + portals]);
      this.parent["" + renderReactTemplates](callBack);
    };
    Render2.prototype.destroy = function() {
      this.parent.grid.off("template-result", this.columnTemplateResult);
      this.parent.grid.off("reactTemplateRender", this.reactTemplateRender);
    };
    return Render2;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/base/data.js
var DataManipulation = (
  /** @class */
  (function() {
    function DataManipulation2(grid) {
      this.addedRecords = "addedRecords";
      this.parent = grid;
      this.parentItems = [];
      this.taskIds = [];
      this.hierarchyData = [];
      this.storedIndex = -1;
      this.sortedData = [];
      this.isSortAction = false;
      this.addEventListener();
      this.dataResults = {};
      this.isSelfReference = !isNullOrUndefined(this.parent.parentIdMapping);
    }
    DataManipulation2.prototype.addEventListener = function() {
      this.parent.on("updateRemoteLevel", this.updateParentRemoteData, this);
      this.parent.grid.on("sorting-begin", this.beginSorting, this);
      this.parent.on("updateAction", this.updateData, this);
      this.parent.on(remoteExpand, this.collectExpandingRecs, this);
      this.parent.on("dataProcessor", this.dataProcessor, this);
    };
    DataManipulation2.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off(remoteExpand, this.collectExpandingRecs);
      this.parent.off("updateRemoteLevel", this.updateParentRemoteData);
      this.parent.off("updateAction", this.updateData);
      this.parent.off("dataProcessor", this.dataProcessor);
      this.parent.grid.off("sorting-begin", this.beginSorting);
    };
    DataManipulation2.prototype.destroy = function() {
      this.removeEventListener();
      this.hierarchyData = null;
    };
    DataManipulation2.prototype.isRemote = function() {
      if (!(this.parent.dataSource instanceof DataManager)) {
        return false;
      }
      return true;
    };
    DataManipulation2.prototype.convertToFlatData = function(data) {
      var _this = this;
      this.parent.flatData = !isNullOrUndefined(data) && Object.keys(data).length === 0 && !(this.parent.dataSource instanceof DataManager) ? this.parent.dataSource : [];
      this.parent.parentData = [];
      if (isRemoteData(this.parent) && !isOffline(this.parent) && data instanceof DataManager && !(data instanceof Array)) {
        var dm = this.parent.dataSource;
        if (this.parent.parentIdMapping) {
          this.parent.query = isNullOrUndefined(this.parent.query) ? new Query() : this.parent.query;
          if (this.parent.parentIdMapping) {
            var filterKey = this.parent.query.params.filter(function(param) {
              return param.key === "IdMapping";
            });
            if (this.parent.initialRender && !filterKey.length) {
              this.parent.query.where(this.parent.parentIdMapping, "equal", null);
              this.parent.query.addParams("IdMapping", this.parent.idMapping);
            }
          }
          if (!this.parent.hasChildMapping) {
            var qry = this.parent.query.clone();
            qry.queries = [];
            qry = qry.select([this.parent.parentIdMapping]);
            qry.isCountRequired = true;
            dm.executeQuery(qry).then(function(e) {
              _this.parentItems = DataUtil.distinct(e.result, _this.parent.parentIdMapping, false);
              var req;
              if (e.result) {
                req = 0;
              } else {
                req = 1;
              }
              if (req === 0) {
                setValue("grid.contentModule.isLoaded", true, _this.parent);
                if (!isNullOrUndefined(_this.zerothLevelData)) {
                  setValue("cancel", false, _this.zerothLevelData);
                  getValue("grid.renderModule", _this.parent).dataManagerSuccess(_this.zerothLevelData);
                  _this.zerothLevelData = null;
                }
                _this.parent.grid.hideSpinner();
              }
            });
          }
        }
      } else if (data instanceof Array) {
        this.convertJSONData(data);
      }
    };
    DataManipulation2.prototype.convertJSONData = function(data) {
      this.hierarchyData = [];
      this.taskIds = [];
      if (!this.parent.idMapping) {
        this.hierarchyData = data;
      } else {
        var keys = Object.keys(data);
        for (var i = 0; i < keys.length; i++) {
          var tempData = data[parseInt(i.toString(), 10)];
          this.hierarchyData.push(extend({}, tempData));
          if (!isNullOrUndefined(tempData[this.parent.idMapping])) {
            this.taskIds.push(tempData[this.parent.idMapping]);
          }
        }
      }
      if (this.isSelfReference) {
        var selfData = [];
        var mappingData = new DataManager(this.hierarchyData).executeLocal(new Query().group(this.parent.parentIdMapping));
        for (var i = 0; i < mappingData.length; i++) {
          var groupData = mappingData[parseInt(i.toString(), 10)];
          var index = this.taskIds.indexOf(groupData.key);
          if (!isNullOrUndefined(groupData.key)) {
            if (index > -1) {
              var childData = groupData.items;
              this.hierarchyData[parseInt(index.toString(), 10)][this.parent.childMapping] = childData;
              continue;
            }
          }
          selfData.push.apply(selfData, groupData.items);
        }
        this.hierarchyData = this.selfReferenceUpdate(selfData);
      }
      if (!Object.keys(this.hierarchyData).length) {
        var isGantt = "isGantt";
        var referenceData = !(this.parent.dataSource instanceof DataManager) && this.parent["" + isGantt];
        this.parent.flatData = referenceData ? this.parent.dataSource : [];
      } else {
        this.createRecords(this.hierarchyData);
      }
      this.storedIndex = -1;
    };
    DataManipulation2.prototype.selfReferenceUpdate = function(selfData) {
      var result = [];
      for (var i = 0; i < this.hierarchyData.length && selfData.length > 0; i++) {
        var index = selfData.indexOf(this.hierarchyData[parseInt(i.toString(), 10)]);
        if (index !== -1) {
          result.push(this.hierarchyData[parseInt(i.toString(), 10)]);
          selfData.splice(index, 1);
        }
      }
      return result;
    };
    DataManipulation2.prototype.updateParentRemoteData = function(args) {
      var _this = this;
      var actionArgs = "actionArgs";
      if (isRemoteData(this.parent) && this.parent.enableVirtualization && args["" + actionArgs].requestType === "virtualscroll") {
        this.parent.hideSpinner();
      }
      var records = args.result;
      if (isRemoteData(this.parent) && this.parent.enableVirtualization && (args["" + actionArgs].requestType === "virtualscroll" || args["" + actionArgs].action === "clearFilter" || args["" + actionArgs].searchString === "")) {
        this.parent.query.expands = [];
      }
      if (!this.parent.hasChildMapping && !this.parentItems.length && this.parent.loadChildOnDemand) {
        this.zerothLevelData = args;
        setValue("cancel", true, args);
      } else {
        if (this.parent.loadChildOnDemand) {
          var _loop_1 = function(rec2) {
            if (isCountRequired(this_1.parent) && records[parseInt(rec2.toString(), 10)].hasChildRecords && this_1.parent.initialRender) {
              records[parseInt(rec2.toString(), 10)].expanded = false;
            }
            if (isRemoteData(this_1.parent) && this_1.parent.enableVirtualization) {
              var childRecords_1 = [];
              var parent_1 = this_1.parent;
              records.filter(function(e) {
                if (e["" + parent_1.parentIdMapping] === records[parseInt(rec2.toString(), 10)]["" + parent_1.idMapping]) {
                  childRecords_1.push(e);
                }
              });
              if (childRecords_1.length) {
                records[parseInt(rec2.toString(), 10)].expanded = true;
              } else if (records[parseInt(rec2.toString(), 10)].hasChildRecords) {
                records[parseInt(rec2.toString(), 10)].expanded = false;
              }
            }
            if (isNullOrUndefined(records[parseInt(rec2.toString(), 10)].index)) {
              records[parseInt(rec2.toString(), 10)].taskData = extend({}, records[parseInt(rec2.toString(), 10)]);
              records[parseInt(rec2.toString(), 10)].uniqueID = getUid(this_1.parent.element.id + "_data_");
              setValue("uniqueIDCollection." + records[parseInt(rec2.toString(), 10)].uniqueID, records[parseInt(rec2.toString(), 10)], this_1.parent);
              if (isRemoteData(this_1.parent) && this_1.parent.enableVirtualization && records[parseInt(rec2.toString(), 10)]["" + this_1.parent.parentIdMapping] && (isNullOrUndefined(records[parseInt(rec2.toString(), 10)].level) || records[parseInt(rec2.toString(), 10)].level === 0)) {
                var parentID_1 = records[parseInt(rec2.toString(), 10)]["" + this_1.parent.parentIdMapping];
                var parentRec = records.find(function(record) {
                  return record["" + _this.parent.idMapping] === parentID_1;
                });
                if (parentRec) {
                  records[parseInt(rec2.toString(), 10)].level = parentRec.level + 1;
                } else {
                  var parentRec_1 = args.actual.flatData.find(function(record) {
                    return record["" + _this.parent.idMapping] === parentID_1;
                  });
                  if (isNullOrUndefined(parentRec_1["" + this_1.parent.parentIdMapping])) {
                    records[parseInt(rec2.toString(), 10)].level = 1;
                  } else {
                    records[parseInt(rec2.toString(), 10)].level = parentRec_1.level + 1;
                  }
                }
              } else {
                records[parseInt(rec2.toString(), 10)].level = 0;
              }
              records[parseInt(rec2.toString(), 10)].index = Math.ceil(Math.random() * 1e3);
              if (records[parseInt(rec2.toString(), 10)][this_1.parent.hasChildMapping] || this_1.parentItems.indexOf(records[parseInt(rec2.toString(), 10)][this_1.parent.idMapping]) !== -1) {
                records[parseInt(rec2.toString(), 10)].hasChildRecords = true;
              }
              records[parseInt(rec2.toString(), 10)].checkboxState = "uncheck";
            }
          };
          var this_1 = this;
          for (var rec = 0; rec < records.length; rec++) {
            _loop_1(rec);
          }
        } else {
          var dataResults = "dataResults";
          var expandRecord = "expandRecord";
          if (!isNullOrUndefined(records) && !(!this.parent.loadChildOnDemand && isCountRequired(this.parent) && !isNullOrUndefined(this.parent["" + dataResults]["" + expandRecord])) && !(isRemoteData(this.parent) && !this.parent.loadChildOnDemand && args["" + actionArgs].isExpandCollapse && this.parent.enableVirtualization)) {
            this.convertToFlatData(records);
          }
        }
      }
      if (isRemoteData(this.parent) && !this.parent.loadChildOnDemand && args["" + actionArgs].isExpandCollapse && this.parent.enableVirtualization) {
        args.result = records;
      } else if (isRemoteData(this.parent) && this.parent.enableVirtualization && this.parent.loadChildOnDemand) {
        args.result = records;
      } else {
        args.result = !this.parent.loadChildOnDemand ? this.parent.flatData : records;
      }
      if (isRemoteData(this.parent) && this.parent.enableVirtualization && !this.parent.loadChildOnDemand && this.parent.grid.aggregates.length && this.parent.grid.sortSettings.columns.length === 0 && this.parent.grid.filterSettings.columns.length === 0 && !this.parent.grid.searchSettings.key.length) {
        var query = "query";
        var summaryQuery = args["" + query].queries.filter(function(q) {
          return q.fn === "onAggregates";
        });
        args.result = this.parent.summaryModule.calculateSummaryValue(summaryQuery, this.parent.flatData, true);
      }
      this.parent.notify("updateResults", args);
    };
    DataManipulation2.prototype.collectExpandingRecs = function(rowDetails, isChild) {
      var gridRows = this.parent.getRows();
      var name = "name";
      if (this.parent.rowTemplate) {
        var rows = this.parent.getContentTable().rows;
        gridRows = [].slice.call(rows);
      }
      var childRecord;
      if (rowDetails.rows.length > 0) {
        if (!isChild) {
          rowDetails.record.expanded = true;
        }
        for (var i = 0; i < rowDetails.rows.length; i++) {
          this.parent["toggleRowVisibility"](rowDetails.rows[parseInt(i.toString(), 10)], "e-childrow-visible");
          if (!this.parent.loadChildOnDemand) {
            var targetEle = rowDetails.rows[parseInt(i.toString(), 10)].getElementsByClassName("e-treegridcollapse")[0];
            childRecord = this.parent.rowTemplate ? this.parent.grid.getCurrentViewRecords()[rowDetails.rows[parseInt(i.toString(), 10)].rowIndex] : this.parent.grid.getRowObjectFromUID(rowDetails.rows[parseInt(i.toString(), 10)].getAttribute("data-uid")).data;
            if (!isNullOrUndefined(targetEle) && childRecord.expanded) {
              addClass([targetEle], "e-treegridexpand");
              removeClass([targetEle], "e-treegridcollapse");
            }
            var childRows = [];
            childRows = gridRows.filter(function(r) {
              return r.querySelector(".e-gridrowindex" + childRecord.index + "level" + (childRecord.level + 1));
            });
            if (childRows.length && childRecord.expanded) {
              this.collectExpandingRecs({ record: childRecord, rows: childRows, parentRow: rowDetails.parentRow }, true);
            }
          }
          var expandingTd = rowDetails.rows[parseInt(i.toString(), 10)].querySelector(".e-detailrowcollapse");
          if (!isNullOrUndefined(expandingTd)) {
            this.parent.grid.detailRowModule.expand(expandingTd);
          }
        }
        this.parent.grid.pageSettings.totalRecordsCount += rowDetails.rows.length;
      } else {
        this.fetchRemoteChildData({ action: rowDetails["" + name], record: rowDetails.record, rows: rowDetails.rows, parentRow: rowDetails.parentRow });
      }
    };
    DataManipulation2.prototype.fetchRemoteChildData = function(rowDetails) {
      var _this = this;
      var args = { row: rowDetails.parentRow, data: rowDetails.record };
      var dm = this.parent.dataSource;
      var query = this.parent.grid.getDataModule().generateQuery();
      var clonequries = query.queries.filter(function(e) {
        return e.fn !== "onPage" && e.fn !== "onWhere";
      });
      query.queries = clonequries;
      query.isCountRequired = true;
      var idMappingValue = parseInt(rowDetails.record[this.parent.idMapping], 10);
      if (isNaN(idMappingValue)) {
        idMappingValue = rowDetails.record[this.parent.idMapping].toString();
      }
      if (this.parent.enableVirtualization && rowDetails.action === "remoteExpand") {
        query.take(this.parent.grid.pageSettings.pageSize);
        var expandDetail = [];
        expandDetail.push("ExpandingAction", idMappingValue.toString());
        query.expand(expandDetail);
      } else if (this.parent.enableVirtualization && rowDetails.action === "collapse") {
        query.take(this.parent.grid.pageSettings.pageSize);
        var expandDetail = [];
        expandDetail.push("CollapsingAction", idMappingValue.toString());
        query.expand(expandDetail);
      }
      query.where(this.parent.parentIdMapping, "equal", rowDetails.record[this.parent.idMapping]);
      if (rowDetails.action === "remoteExpand" && this.parent.grid.filterSettings && this.parent.grid.filterSettings.columns.length) {
        var filterqry = this.parent.grid.getDataModule().generateQuery().queries.filter(function(e) {
          return e.fn !== "onPage" && typeof e.e.predicates !== "undefined";
        });
        query.queries.push(filterqry[0]);
      }
      showSpinner(this.parent.element);
      dm.executeQuery(query).then(function(e) {
        var remoteExpandedData = "remoteExpandedData";
        var remoteCollapsedData = "remoteCollapsedData";
        var level = "level";
        var datas = _this.parent.grid.currentViewData.slice();
        var inx;
        var idMapping = _this.parent.idMapping;
        if (_this.parent["isGantt"] && _this.parent.loadChildOnDemand && _this.parent.hasChildMapping) {
          for (var i = 0; i < _this.parent.grid.currentViewData.length; i++) {
            if (rowDetails.record[idMapping] === _this.parent.grid.currentViewData[i][idMapping]) {
              inx = i;
              break;
            }
          }
        } else {
          inx = datas.indexOf(rowDetails.record);
        }
        if (_this.parent.enableVirtualization && (rowDetails.action === "collapse" || rowDetails.action === "remoteExpand")) {
          datas = [];
          for (var i = 0; i < inx; i++) {
            datas.push(_this.parent.grid.currentViewData[parseInt(i.toString(), 10)]);
          }
        }
        if (inx === -1) {
          _this.parent.grid.getRowsObject().forEach(function(rows) {
            if (rows.data.uniqueID === rowDetails.record.uniqueID) {
              inx = rows.index;
            }
          });
        }
        var haveChild = getObject("actual.nextLevel", e);
        var result = e.result;
        var resultChildData = [];
        if (rowDetails.action === "remoteExpand" && _this.parent.grid.filterModule && _this.parent.grid.filterModule["value"]) {
          for (var i = 0; i < datas.length; i++) {
            if (Object.prototype.hasOwnProperty.call(datas[parseInt(i.toString(), 10)], _this.parent.parentIdMapping) && datas[parseInt(i.toString(), 10)]["" + _this.parent.parentIdMapping] !== null && datas[parseInt(i.toString(), 10)].level === 0) {
              datas.splice(i, 1);
              i--;
            }
          }
          for (var i = 0; i < result.length; i++) {
            if (rowDetails.record["" + _this.parent.idMapping] !== result[parseInt(i.toString(), 10)]["" + _this.parent.idMapping] && rowDetails.record["" + _this.parent.idMapping] === result[parseInt(i.toString(), 10)]["" + _this.parent.parentIdMapping]) {
              if (Object.prototype.hasOwnProperty.call(result, i)) {
                resultChildData.push(result[parseInt(i.toString(), 10)]);
              }
            }
          }
          result = resultChildData;
        }
        if (_this.parent.enableVirtualization && rowDetails.action === "remoteExpand") {
          rowDetails.record.childRecords = [];
          for (var i = 0; i < result.length; i++) {
            if (rowDetails.record["" + _this.parent.idMapping] !== result[parseInt(i.toString(), 10)]["" + _this.parent.idMapping] && rowDetails.record["" + _this.parent.idMapping] === result[parseInt(i.toString(), 10)]["" + _this.parent.parentIdMapping] && Object.prototype.hasOwnProperty.call(result, i)) {
              rowDetails.record.childRecords.push(result[parseInt(i.toString(), 10)]);
            }
          }
        } else {
          rowDetails.record.childRecords = result;
        }
        var _loop_2 = function(r2) {
          var record = result[parseInt(r2.toString(), 10)];
          if (_this.parent.enableVirtualization && record["" + _this.parent.idMapping] === rowDetails.record["" + _this.parent.idMapping] && rowDetails.action === "remoteExpand") {
            _this.parent["" + remoteExpandedData].push(rowDetails.record);
          } else if (_this.parent.enableVirtualization && record["" + _this.parent.idMapping] === rowDetails.record["" + _this.parent.idMapping] && rowDetails.action === "collapse") {
            for (var i2 = 0; i2 < _this.parent["" + remoteExpandedData].length; i2++) {
              if (rowDetails.record["" + _this.parent.idMapping] === _this.parent["" + remoteExpandedData][parseInt(i2.toString(), 10)]["" + _this.parent.idMapping]) {
                _this.parent["" + remoteExpandedData].splice(i2, 1);
              }
            }
          }
          record.taskData = extend({}, record);
          if (record["" + _this.parent.parentIdMapping] && _this.parent.enableVirtualization && _this.parent["" + remoteExpandedData].length) {
            for (var i2 = 0; i2 < _this.parent["" + remoteExpandedData].length; i2++) {
              if (record["" + _this.parent.parentIdMapping] === _this.parent["" + remoteExpandedData][parseInt(i2.toString(), 10)]["" + _this.parent.idMapping]) {
                record.level = _this.parent["" + remoteExpandedData][parseInt(i2.toString(), 10)]["" + level] + 1;
                var parentData = _this.parent["" + remoteExpandedData][parseInt(i2.toString(), 10)];
                delete parentData.childRecords;
                record.parentItem = parentData;
                record.parentUniqueID = parentData.uniqueID;
              }
            }
          } else if (_this.parent.enableVirtualization) {
            if ((record["" + _this.parent.hasChildMapping] || _this.parentItems.indexOf(record["" + _this.parent.idMapping]) !== -1) && !(haveChild && !haveChild[parseInt(r2.toString(), 10)])) {
              if (isNullOrUndefined(record["" + _this.parent.parentIdMapping])) {
                record.level = 0;
                if (rowDetails.action === "remoteExpand") {
                  record.childRecords = [];
                  record.childRecords = rowDetails.record.childRecords;
                }
              } else {
                record.level = rowDetails.record.level;
              }
            } else {
              var parentData = extend({}, rowDetails.record);
              delete parentData.childRecords;
              record.parentItem = parentData;
              record.parentUniqueID = rowDetails.record.uniqueID;
            }
          } else {
            record.level = rowDetails.record.level + 1;
            var parentData = extend({}, rowDetails.record);
            delete parentData.childRecords;
            record.parentItem = parentData;
            record.parentUniqueID = rowDetails.record.uniqueID;
          }
          record.index = Math.ceil(Math.random() * 1e3);
          record.uniqueID = getUid(_this.parent.element.id + "_data_");
          if (rowDetails.record["" + _this.parent.idMapping] === record["" + _this.parent.idMapping]) {
            rowDetails.record.uniqueID = record.uniqueID;
          }
          record.checkboxState = "uncheck";
          if (_this.parent.enableVirtualization && isNullOrUndefined(record.level)) {
            for (var p = 0; p < _this.parent.grid.currentViewData.length; p++) {
              if (_this.parent.grid.currentViewData[parseInt(p.toString(), 10)]["" + _this.parent.idMapping] === record["" + _this.parent.parentIdMapping]) {
                record.level = _this.parent.grid.currentViewData[parseInt(p.toString(), 10)]["level"] + 1;
              }
            }
          }
          setValue("uniqueIDCollection." + record.uniqueID, record, _this.parent);
          if ((record["" + _this.parent.hasChildMapping] || _this.parentItems.indexOf(record["" + _this.parent.idMapping]) !== -1) && !(haveChild && !haveChild[parseInt(r2.toString(), 10)])) {
            record.hasChildRecords = true;
            if (_this.parent.enableVirtualization && !_this.parent.loadChildOnDemand) {
              for (var i2 = 0; i2 < _this.parent["" + remoteCollapsedData].length; i2++) {
                if (record["" + _this.parent.idMapping] === _this.parent["" + remoteCollapsedData][parseInt(i2.toString(), 10)]["" + _this.parent.idMapping]) {
                  record.expanded = _this.parent["" + remoteCollapsedData][parseInt(i2.toString(), 10)]["expanded"];
                }
              }
              if (rowDetails.action === "collapse" && record["" + _this.parent.idMapping] !== rowDetails.record["" + _this.parent.idMapping] && record.expanded !== false) {
                record.expanded = true;
              } else if (rowDetails.action === "collapse" && record["" + _this.parent.idMapping] === rowDetails.record["" + _this.parent.idMapping]) {
                record.expanded = false;
                _this.parent["" + remoteCollapsedData].push(rowDetails.record);
              } else if (rowDetails.action === "remoteExpand") {
                for (var i2 = 0; i2 < _this.parent.grid.currentViewData.length; i2++) {
                  if (_this.parent.grid.currentViewData[parseInt(i2.toString(), 10)]["" + _this.parent.idMapping] === record["" + _this.parent.idMapping]) {
                    result.splice(r2, 1, _this.parent.grid.currentViewData[parseInt(i2.toString(), 10)]);
                  }
                }
                if (record[_this.parent.idMapping] === rowDetails.record["" + _this.parent.idMapping]) {
                  for (var i2 = 0; i2 < _this.parent["" + remoteCollapsedData].length; i2++) {
                    if (rowDetails.record["" + _this.parent.idMapping] === _this.parent["" + remoteCollapsedData][parseInt(i2.toString(), 10)]["" + _this.parent.idMapping]) {
                      _this.parent["" + remoteCollapsedData].splice(i2, 1);
                    }
                  }
                }
                if (record.expanded !== false) {
                  record.expanded = true;
                }
              }
            } else if (_this.parent.enableVirtualization && record["" + _this.parent.idMapping] === rowDetails.record["" + _this.parent.idMapping] && rowDetails.action !== "collapse") {
              record.expanded = true;
            } else if (!(_this.parent.enableVirtualization && !_this.parent.loadChildOnDemand)) {
              record.expanded = false;
            }
          }
          var exists = datas.some(function(data) {
            return data["" + _this.parent.idMapping] === record[_this.parent.idMapping];
          });
          if (!exists) {
            datas.splice(inx + r2 + 1, 0, record);
          }
        };
        for (var r = 0; r < result.length; r++) {
          _loop_2(r);
        }
        var localIdMapping = _this.parent.idMapping;
        if (_this.parent.enableVirtualization && _this.parent.loadChildOnDemand) {
          datas.sort(function(firstRecord, secondRecord) {
            return firstRecord["" + localIdMapping] - secondRecord["" + localIdMapping];
          });
        }
        setValue("result", datas, e);
        setValue("action", "beforecontentrender", e);
        _this.parent.trigger(actionComplete, e);
        hideSpinner(_this.parent.element);
        if (_this.parent.grid.aggregates.length > 0 && !_this.parent.enableVirtualization) {
          var gridQuery = getObject("query", e);
          var result_1 = "result";
          if (isNullOrUndefined(gridQuery)) {
            gridQuery = getValue("grid.renderModule.data", _this.parent).aggregateQuery(new Query());
          }
          if (!isNullOrUndefined(gridQuery)) {
            var summaryQuery = gridQuery.queries.filter(function(q) {
              return q.fn === "onAggregates";
            });
            e["" + result_1] = _this.parent.summaryModule.calculateSummaryValue(summaryQuery, e["" + result_1], true);
          }
        }
        if (rowDetails.action === "remoteExpand" && _this.parent.allowPaging && _this.parent.pageSettings.pageSizeMode === "All") {
          _this.parent.grid.pageSettings.totalRecordsCount = _this.parent.grid.pageSettings.totalRecordsCount + result.length;
        }
        if (_this.parent.enableVirtualization) {
          _this.parent.grid.pageSettings.totalRecordsCount = e.count;
        }
        e.count = _this.parent.grid.pageSettings.totalRecordsCount;
        var virtualArgs = {};
        if (_this.parent.enableVirtualization) {
          _this.remoteVirtualAction(virtualArgs);
        }
        var notifyArgs = { index: inx, childData: result };
        if (_this.parent.enableInfiniteScrolling) {
          _this.parent.notify("infinite-remote-expand", notifyArgs);
        } else {
          getValue("grid.renderModule", _this.parent).dataManagerSuccess(e, virtualArgs);
        }
        _this.parent.trigger(expanded, args);
      });
    };
    DataManipulation2.prototype.remoteVirtualAction = function(virtualArgs) {
      virtualArgs.requestType = "refresh";
      setValue("isExpandCollapse", true, virtualArgs);
      var contentModule = getValue("grid.contentModule", this.parent);
      var currentInfo = getValue("currentInfo", contentModule);
      var prevInfo = getValue("prevInfo", contentModule);
      if (currentInfo.loadNext && this.parent.grid.pageSettings.currentPage === currentInfo.nextInfo.page && !this.parent.loadChildOnDemand) {
        this.parent.grid.pageSettings.currentPage = prevInfo.page;
      }
    };
    DataManipulation2.prototype.beginSorting = function() {
      this.isSortAction = true;
      if (isRemoteData(this.parent) && this.parent.enableVirtualization) {
        var index = this.parent.query.queries.indexOf(this.parent.query.queries.filter(function(q) {
          return q.fn === "onSortBy";
        })[0]);
        if (index !== -1) {
          this.parent.query.queries.splice(index, 1);
        }
        if (this.parent.grid.sortSettings.columns.length === 0) {
          this.parent.query.sortBy(null, null);
        }
      }
    };
    DataManipulation2.prototype.createRecords = function(data, parentRecords) {
      var treeGridData = [];
      var keys = Object.keys(data);
      for (var i = 0, len = keys.length; i < len; i++) {
        var currentData = extend({}, data[parseInt(i.toString(), 10)]);
        currentData.taskData = data[parseInt(i.toString(), 10)];
        var level = 0;
        this.storedIndex++;
        if (!Object.prototype.hasOwnProperty.call(currentData, "index")) {
          currentData.index = this.storedIndex;
        }
        var childMapping = currentData[this.parent.childMapping];
        var hasChildren = !isNullOrUndefined(childMapping) && childMapping.length > 0;
        var shouldCount = isCountRequired(this.parent);
        var hasChildMapping = currentData[this.parent.hasChildMapping];
        if (hasChildren && !shouldCount || hasChildMapping && shouldCount) {
          currentData.hasChildRecords = true;
        } else {
          currentData.hasChildRecords = false;
        }
        if (!isNullOrUndefined(childMapping) && !shouldCount || hasChildMapping && shouldCount) {
          if (this.parent.enableCollapseAll || !isNullOrUndefined(this.parent.dataStateChange) && isNullOrUndefined(childMapping)) {
            currentData.expanded = false;
          } else {
            currentData.expanded = !isNullOrUndefined(currentData[this.parent.expandStateMapping]) ? currentData[this.parent.expandStateMapping] : true;
          }
        }
        if (!Object.prototype.hasOwnProperty.call(currentData, "index")) {
          currentData.index = currentData.hasChildRecords ? this.storedIndex : this.storedIndex;
        }
        if (this.isSelfReference && isNullOrUndefined(currentData[this.parent.parentIdMapping])) {
          this.parent.parentData.push(currentData);
        }
        currentData.uniqueID = getUid(this.parent.element.id + "_data_");
        this.parent.uniqueIDCollection[currentData.uniqueID] = currentData;
        if (!isNullOrUndefined(parentRecords)) {
          var parentData = extend({}, parentRecords);
          delete parentData.childRecords;
          delete parentData[this.parent.childMapping];
          if (this.isSelfReference) {
            delete parentData.taskData[this.parent.childMapping];
          }
          currentData.parentItem = parentData;
          currentData.parentUniqueID = parentData.uniqueID;
          level = parentRecords.level + 1;
        }
        if (!Object.prototype.hasOwnProperty.call(currentData, "level")) {
          currentData.level = level;
        }
        currentData.checkboxState = "uncheck";
        var remoteCollapsedData = "remoteCollapsedData";
        if (this.parent.enableVirtualization && !this.parent.loadChildOnDemand && isRemoteData(this.parent) && !this.parent.initialRender) {
          if (!currentData.hasChildRecords && isNullOrUndefined(currentData["" + this.parent.parentIdMapping])) {
            currentData.hasChildRecords = true;
            for (var c = 0; c < this.parent["" + remoteCollapsedData].length; c++) {
              if (this.parent["" + remoteCollapsedData][parseInt(c.toString(), 10)]["" + this.parent.idMapping] === currentData["" + this.parent.idMapping]) {
                currentData.expanded = false;
              }
            }
          } else if (currentData.level === 0 && isNullOrUndefined(parentRecords) && !currentData.hasChildRecords) {
            currentData.level = currentData.level + 1;
          }
          if (currentData["" + this.parent.hasChildMapping] && !isNullOrUndefined(currentData["" + this.parent.expandStateMapping])) {
            currentData.expanded = currentData["" + this.parent.expandStateMapping];
            currentData.hasChildRecords = true;
          }
          this.parent.flatData.push(currentData);
        } else if (isNullOrUndefined(currentData["" + this.parent.parentIdMapping]) || currentData.parentItem) {
          if (!isNullOrUndefined(this.parent.rowDropSettings.targetID)) {
            if (!this.parent.rowDragAndDropModule["isDuplicateData"](currentData)) {
              this.parent.flatData.push(currentData);
            }
          } else {
            this.parent.flatData.push(currentData);
          }
          this.parent["infiniteScrollData"].push(currentData);
        }
        if (!this.isSelfReference && currentData.level === 0) {
          this.parent.parentData.push(currentData);
        }
        if (!isNullOrUndefined(currentData[this.parent.childMapping] && currentData[this.parent.childMapping].length)) {
          var record = this.createRecords(currentData[this.parent.childMapping], currentData);
          currentData.childRecords = record;
        }
        treeGridData.push(currentData);
      }
      return treeGridData;
    };
    DataManipulation2.prototype.dataProcessor = function(args) {
      var isExport = getObject("isExport", args);
      var expresults = getObject("expresults", args);
      var exportType = getObject("exportType", args);
      var isPrinting = getObject("isPrinting", args);
      var dataObj;
      var actionArgs = getObject("actionArgs", args);
      var requestType = getObject("requestType", args);
      var actionData = getObject("data", args);
      var action = getObject("action", args);
      var actionAddArgs = actionArgs;
      var primaryKeyColumnName = this.parent.getPrimaryKeyFieldNames()[0];
      var dataValue = getObject("data", actionAddArgs);
      if (!isNullOrUndefined(actionAddArgs) && !isNullOrUndefined(actionAddArgs.action) && actionAddArgs.action === "add" && !isNullOrUndefined(actionAddArgs.data) && isNullOrUndefined(actionAddArgs.data["" + primaryKeyColumnName])) {
        actionAddArgs.data["" + primaryKeyColumnName] = args.result[actionAddArgs.index]["" + primaryKeyColumnName];
        dataValue.taskData["" + primaryKeyColumnName] = args.result[actionAddArgs.index]["" + primaryKeyColumnName];
      }
      if (!isNullOrUndefined(actionArgs) && Object.keys(actionArgs).length || requestType === "save") {
        requestType = requestType ? requestType : actionArgs.requestType;
        actionData = actionData ? actionData : getObject("data", actionArgs);
        action = action ? action : getObject("action", actionArgs);
        if (this.parent.editSettings.mode === "Batch") {
          this.batchChanges = this.parent.grid.editModule.getBatchChanges();
        }
        if (this.parent.isLocalData) {
          this.updateAction(actionData, action, requestType);
        }
      }
      if (isExport && !isNullOrUndefined(expresults)) {
        dataObj = expresults;
      } else {
        dataObj = isCountRequired(this.parent) ? getValue("result", this.parent.grid.dataSource) : this.parent.grid.dataSource;
      }
      var results = dataObj instanceof DataManager ? dataObj.dataSource.json : dataObj;
      var count = isCountRequired(this.parent) ? getValue("count", this.parent.dataSource) : results.length;
      var gridQuery = getObject("query", args);
      var filterQuery;
      var searchQuery;
      if (!isNullOrUndefined(gridQuery)) {
        filterQuery = gridQuery.queries.filter(function(q) {
          return q.fn === "onWhere";
        });
        searchQuery = gridQuery.queries.filter(function(q) {
          return q.fn === "onSearch";
        });
      }
      if (this.parent.grid.allowFiltering && this.parent.grid.filterSettings.columns.length || this.parent.grid.searchSettings.key.length > 0 || !isNullOrUndefined(gridQuery) && (filterQuery.length || searchQuery.length) && this.parent.isLocalData) {
        if (isNullOrUndefined(gridQuery)) {
          gridQuery = new Query();
          gridQuery = getValue("grid.renderModule.data", this.parent).filterQuery(gridQuery);
          gridQuery = getValue("grid.renderModule.data", this.parent).searchQuery(gridQuery);
        }
        this.parent.getData({ query: gridQuery, isFilter: true });
        results = this.dataResults.result;
        this.dataResults.result = null;
        if (this.parent.grid.aggregates.length > 0) {
          var query = getObject("query", args);
          if (isNullOrUndefined(gridQuery)) {
            gridQuery = getValue("grid.renderModule.data", this.parent).aggregateQuery(new Query());
          }
          if (!isNullOrUndefined(query)) {
            var summaryQuery = query.queries.filter(function(q) {
              return q.fn === "onAggregates";
            });
            results = this.parent.summaryModule.calculateSummaryValue(summaryQuery, results, true);
          }
        }
      }
      if (this.parent.grid.aggregates.length && this.parent.grid.sortSettings.columns.length === 0 && this.parent.grid.filterSettings.columns.length === 0 && !this.parent.grid.searchSettings.key.length) {
        var gridQuery_1 = getObject("query", args);
        if (isNullOrUndefined(gridQuery_1)) {
          gridQuery_1 = getValue("grid.renderModule.data", this.parent).aggregateQuery(new Query());
        }
        var summaryQuery = gridQuery_1.queries.filter(function(q) {
          return q.fn === "onAggregates";
        });
        results = this.parent.summaryModule.calculateSummaryValue(summaryQuery, this.parent.flatData, true);
      }
      if (this.parent.grid.sortSettings.columns.length > 0 || this.isSortAction) {
        this.isSortAction = false;
        var query = getObject("query", args);
        results = this.parent.getData({ query, isSort: true });
        this.dataResults.result = null;
        this.sortedData = results;
        this.parent.notify("updateModel", {});
        if (this.parent.grid.aggregates.length > 0 && !isNullOrUndefined(query)) {
          var isSort = false;
          var query_1 = getObject("query", args);
          var summaryQuery = query_1.queries.filter(function(q) {
            return q.fn === "onAggregates";
          });
          results = this.parent.summaryModule.calculateSummaryValue(summaryQuery, this.sortedData, isSort);
        }
      }
      count = isCountRequired(this.parent) ? getValue("count", this.parent.dataSource) : results.length;
      var temp = this.paging(results, count, isExport, isPrinting, exportType, args);
      results = temp.result;
      count = temp.count;
      args.result = results;
      args.count = count;
      this.parent.notify("updateResults", args);
    };
    DataManipulation2.prototype.paging = function(results, count, isExport, isPrinting, exportType, args) {
      if (this.parent.allowPaging && (!isExport || exportType === "CurrentPage") && (!isPrinting || this.parent.printMode === "CurrentPage")) {
        this.parent.notify(pagingActions, { result: results, count, actionArgs: args });
        results = this.dataResults.result;
        count = isCountRequired(this.parent) ? getValue("count", this.parent.dataSource) : this.dataResults.count;
      } else if ((this.parent.enableVirtualization || this.parent.enableInfiniteScrolling) && (!isExport || exportType === "CurrentPage") && getValue("requestType", args) !== "save") {
        var actArgs = this.parent.enableInfiniteScrolling ? args : getValue("actionArgs", args);
        this.parent.notify(pagingActions, { result: results, count, actionArgs: actArgs });
        results = this.dataResults.result;
        count = this.dataResults.count;
      }
      var isPdfExport = "isPdfExport";
      var isCollapsedStatePersist = "isCollapsedStatePersist";
      if ((isPrinting === true || args["" + isPdfExport] && (isNullOrUndefined(args["" + isCollapsedStatePersist]) || args["" + isCollapsedStatePersist])) && this.parent.printMode === "AllPages") {
        var actualResults = [];
        for (var i = 0; i < results.length; i++) {
          var expandStatus = getExpandStatus(this.parent, results[parseInt(i.toString(), 10)], this.parent.parentData);
          if (expandStatus) {
            actualResults.push(results[parseInt(i.toString(), 10)]);
          }
        }
        results = actualResults;
        count = results.length;
      }
      var value = { result: results, count };
      return value;
    };
    DataManipulation2.prototype.updateData = function(dataResult) {
      this.dataResults = dataResult;
    };
    DataManipulation2.prototype.updateAction = function(actionData, action, requestType) {
      if (requestType === "delete" || requestType === "save") {
        this.parent.notify(crudAction, { value: actionData, action: action || requestType });
      }
      if (requestType === "batchsave" && this.parent.editSettings.mode === "Batch") {
        this.parent.notify(batchSave, {});
      }
    };
    return DataManipulation2;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/enum.js
var ToolbarItem;
(function(ToolbarItem2) {
  ToolbarItem2[ToolbarItem2["Add"] = 0] = "Add";
  ToolbarItem2[ToolbarItem2["Edit"] = 1] = "Edit";
  ToolbarItem2[ToolbarItem2["Update"] = 2] = "Update";
  ToolbarItem2[ToolbarItem2["Delete"] = 3] = "Delete";
  ToolbarItem2[ToolbarItem2["Cancel"] = 4] = "Cancel";
  ToolbarItem2[ToolbarItem2["Search"] = 5] = "Search";
  ToolbarItem2[ToolbarItem2["ExpandAll"] = 6] = "ExpandAll";
  ToolbarItem2[ToolbarItem2["CollapseAll"] = 7] = "CollapseAll";
  ToolbarItem2[ToolbarItem2["ExcelExport"] = 8] = "ExcelExport";
  ToolbarItem2[ToolbarItem2["PdfExport"] = 9] = "PdfExport";
  ToolbarItem2[ToolbarItem2["CsvExport"] = 10] = "CsvExport";
  ToolbarItem2[ToolbarItem2["Print"] = 11] = "Print";
  ToolbarItem2[ToolbarItem2["RowIndent"] = 12] = "RowIndent";
  ToolbarItem2[ToolbarItem2["RowOutdent"] = 13] = "RowOutdent";
})(ToolbarItem || (ToolbarItem = {}));
var ContextMenuItems;
(function(ContextMenuItems2) {
  ContextMenuItems2[ContextMenuItems2["AutoFit"] = 0] = "AutoFit";
  ContextMenuItems2[ContextMenuItems2["AutoFitAll"] = 1] = "AutoFitAll";
  ContextMenuItems2[ContextMenuItems2["SortAscending"] = 2] = "SortAscending";
  ContextMenuItems2[ContextMenuItems2["SortDescending"] = 3] = "SortDescending";
  ContextMenuItems2[ContextMenuItems2["Edit"] = 4] = "Edit";
  ContextMenuItems2[ContextMenuItems2["Delete"] = 5] = "Delete";
  ContextMenuItems2[ContextMenuItems2["Save"] = 6] = "Save";
  ContextMenuItems2[ContextMenuItems2["Cancel"] = 7] = "Cancel";
  ContextMenuItems2[ContextMenuItems2["PdfExport"] = 8] = "PdfExport";
  ContextMenuItems2[ContextMenuItems2["ExcelExport"] = 9] = "ExcelExport";
  ContextMenuItems2[ContextMenuItems2["CsvExport"] = 10] = "CsvExport";
  ContextMenuItems2[ContextMenuItems2["FirstPage"] = 11] = "FirstPage";
  ContextMenuItems2[ContextMenuItems2["PrevPage"] = 12] = "PrevPage";
  ContextMenuItems2[ContextMenuItems2["LastPage"] = 13] = "LastPage";
  ContextMenuItems2[ContextMenuItems2["NextPage"] = 14] = "NextPage";
  ContextMenuItems2[ContextMenuItems2["AddRow"] = 15] = "AddRow";
  ContextMenuItems2[ContextMenuItems2["RowIndent"] = 16] = "RowIndent";
  ContextMenuItems2[ContextMenuItems2["RowOutdent"] = 17] = "RowOutdent";
})(ContextMenuItems || (ContextMenuItems = {}));

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/page-settings.js
var __extends9 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PageSettings = (
  /** @class */
  (function(_super) {
    __extends9(PageSettings2, _super);
    function PageSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate8([
      Property(12)
    ], PageSettings2.prototype, "pageSize", void 0);
    __decorate8([
      Property(8)
    ], PageSettings2.prototype, "pageCount", void 0);
    __decorate8([
      Property(1)
    ], PageSettings2.prototype, "currentPage", void 0);
    __decorate8([
      Property()
    ], PageSettings2.prototype, "totalRecordsCount", void 0);
    __decorate8([
      Property(false)
    ], PageSettings2.prototype, "enableQueryString", void 0);
    __decorate8([
      Property(false)
    ], PageSettings2.prototype, "pageSizes", void 0);
    __decorate8([
      Property(null)
    ], PageSettings2.prototype, "template", void 0);
    __decorate8([
      Property("All")
    ], PageSettings2.prototype, "pageSizeMode", void 0);
    return PageSettings2;
  })(ChildProperty)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/summary.js
var __extends10 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AggregateColumn = (
  /** @class */
  (function(_super) {
    __extends10(AggregateColumn2, _super);
    function AggregateColumn2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.intl = new Internationalization();
      _this.templateFn = {};
      return _this;
    }
    AggregateColumn2.prototype.setFormatter = function(cultureName) {
      if (this.format && (this.format.skeleton || this.format.format)) {
        this.formatFn = this.getFormatFunction(this.format);
      }
    };
    AggregateColumn2.prototype.getFormatFunction = function(format) {
      if (format.type) {
        return this.intl.getDateFormat(format);
      } else {
        return this.intl.getNumberFormat(format);
      }
    };
    AggregateColumn2.prototype.getFormatter = function() {
      return this.formatFn;
    };
    AggregateColumn2.prototype.setTemplate = function(helper) {
      if (helper === void 0) {
        helper = {};
      }
      if (this.footerTemplate !== void 0) {
        this.templateFn[getEnumValue(CellType, CellType.Summary)] = {
          fn: compile(this.footerTemplate, helper),
          property: "footerTemplate"
        };
      }
    };
    AggregateColumn2.prototype.getTemplate = function(type) {
      return this.templateFn[getEnumValue(CellType, type)];
    };
    AggregateColumn2.prototype.setPropertiesSilent = function(prop) {
      this.setProperties(prop, true);
    };
    __decorate9([
      Property()
    ], AggregateColumn2.prototype, "type", void 0);
    __decorate9([
      Property()
    ], AggregateColumn2.prototype, "footerTemplate", void 0);
    __decorate9([
      Property()
    ], AggregateColumn2.prototype, "field", void 0);
    __decorate9([
      Property()
    ], AggregateColumn2.prototype, "format", void 0);
    __decorate9([
      Property()
    ], AggregateColumn2.prototype, "columnName", void 0);
    __decorate9([
      Property()
    ], AggregateColumn2.prototype, "customAggregate", void 0);
    return AggregateColumn2;
  })(ChildProperty)
);
var AggregateRow = (
  /** @class */
  (function(_super) {
    __extends10(AggregateRow2, _super);
    function AggregateRow2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate9([
      Collection([], AggregateColumn)
    ], AggregateRow2.prototype, "columns", void 0);
    __decorate9([
      Property(true)
    ], AggregateRow2.prototype, "showChildSummary", void 0);
    return AggregateRow2;
  })(ChildProperty)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/edit-settings.js
var __extends11 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate10 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EditSettings = (
  /** @class */
  (function(_super) {
    __extends11(EditSettings2, _super);
    function EditSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate10([
      Property(false)
    ], EditSettings2.prototype, "allowAdding", void 0);
    __decorate10([
      Property(false)
    ], EditSettings2.prototype, "allowEditing", void 0);
    __decorate10([
      Property(false)
    ], EditSettings2.prototype, "allowDeleting", void 0);
    __decorate10([
      Property("Cell")
    ], EditSettings2.prototype, "mode", void 0);
    __decorate10([
      Property("Top")
    ], EditSettings2.prototype, "newRowPosition", void 0);
    __decorate10([
      Property(true)
    ], EditSettings2.prototype, "allowEditOnDblClick", void 0);
    __decorate10([
      Property(true)
    ], EditSettings2.prototype, "showConfirmDialog", void 0);
    __decorate10([
      Property(false)
    ], EditSettings2.prototype, "showDeleteConfirmDialog", void 0);
    __decorate10([
      Property("")
    ], EditSettings2.prototype, "template", void 0);
    __decorate10([
      Property({})
    ], EditSettings2.prototype, "dialog", void 0);
    __decorate10([
      Property(false)
    ], EditSettings2.prototype, "allowNextRowEdit", void 0);
    return EditSettings2;
  })(ChildProperty)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/sort-settings.js
var __extends12 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate11 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SortDescriptor = (
  /** @class */
  (function(_super) {
    __extends12(SortDescriptor2, _super);
    function SortDescriptor2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate11([
      Property()
    ], SortDescriptor2.prototype, "field", void 0);
    __decorate11([
      Property()
    ], SortDescriptor2.prototype, "direction", void 0);
    return SortDescriptor2;
  })(ChildProperty)
);
var SortSettings = (
  /** @class */
  (function(_super) {
    __extends12(SortSettings2, _super);
    function SortSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate11([
      Collection([], SortDescriptor)
    ], SortSettings2.prototype, "columns", void 0);
    __decorate11([
      Property(true)
    ], SortSettings2.prototype, "allowUnsort", void 0);
    return SortSettings2;
  })(ChildProperty)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/crud-actions.js
function editAction(details, control, isSelfReference, addRowIndex, selectedIndex, columnName, addRowRecord) {
  var value = details.value;
  var action = details.action;
  var changedRecords = "changedRecords";
  var i;
  var j;
  var addedRecords = "addedRecords";
  var batchChanges;
  var key = control.grid.getPrimaryKeyFieldNames()[0];
  var treeData = control.dataSource instanceof DataManager ? control.dataSource.dataSource.json : control.dataSource;
  var gridData = control.grid.dataSource;
  var modifiedData = [];
  var originalData = value;
  var isSkip = false;
  if (control.editSettings.mode === "Batch") {
    batchChanges = control.grid.editModule.getBatchChanges();
  }
  if (action === "add" || action === "batchsave" && (control.editSettings.mode === "Batch" && batchChanges["" + addedRecords].length)) {
    var addAct = addAction(details, treeData, control, isSelfReference, addRowIndex, selectedIndex, addRowRecord);
    value = addAct.value;
    isSkip = addAct.isSkip;
  }
  if (value instanceof Array) {
    modifiedData = extendArray(value);
  } else {
    modifiedData.push(extend({}, value));
  }
  if (!isSkip && (action !== "add" || control.editSettings.newRowPosition !== "Top" && control.editSettings.newRowPosition !== "Bottom")) {
    for (var k = 0; k < modifiedData.length; k++) {
      if (typeof modifiedData[parseInt(k.toString(), 10)]["" + key] === "object") {
        modifiedData[parseInt(k.toString(), 10)] = modifiedData[parseInt(k.toString(), 10)]["" + key];
      }
      var keys = modifiedData[parseInt(k.toString(), 10)].taskData ? Object.keys(modifiedData[parseInt(k.toString(), 10)].taskData) : Object.keys(modifiedData[parseInt(k.toString(), 10)]);
      i = treeData.length === 0 && gridData.length === 1 ? gridData.length : treeData.length;
      var _loop_1 = function() {
        if (treeData.length === 0 && gridData.length === 1 && gridData[parseInt(i.toString(), 10)]["" + key] === modifiedData[parseInt(k.toString(), 10)]["" + key] || treeData[parseInt(i.toString(), 10)]["" + key] === modifiedData[parseInt(k.toString(), 10)]["" + key]) {
          if (action === "delete") {
            var currentData_1 = treeData[parseInt(i.toString(), 10)];
            treeData.splice(i, 1);
            if (isSelfReference) {
              if (!isNullOrUndefined(currentData_1["" + control.parentIdMapping])) {
                var parentData = control.flatData.filter(function(e) {
                  return e["" + control.idMapping] === currentData_1["" + control.parentIdMapping];
                })[0];
                var childRecords = parentData ? parentData["" + control.childMapping] : [];
                for (var p = childRecords.length - 1; p >= 0; p--) {
                  if (childRecords[parseInt(p.toString(), 10)]["" + control.idMapping] === currentData_1["" + control.idMapping]) {
                    if (!control.enableImmutableMode && parentData.childRecords.length === parentData["Children"].length) {
                      parentData["childRecords"].splice(p, 1);
                    }
                    childRecords.splice(p, 1);
                    if (!childRecords.length) {
                      parentData.hasChildRecords = false;
                      updateParentRow(key, parentData, action, control, isSelfReference);
                    }
                    break;
                  }
                }
              }
              return "break";
            }
          } else {
            if (action === "edit") {
              for (j = 0; j < keys.length; j++) {
                if (Object.prototype.hasOwnProperty.call(treeData[parseInt(i.toString(), 10)], keys[parseInt(j.toString(), 10)]) && (control.editSettings.mode !== "Cell" || !isNullOrUndefined(batchChanges) && batchChanges["" + changedRecords].length === 0 || keys[parseInt(j.toString(), 10)] === columnName)) {
                  var editedData = getParentData(control, modifiedData[parseInt(k.toString(), 10)].uniqueID);
                  treeData[parseInt(i.toString(), 10)][keys[parseInt(j.toString(), 10)]] = modifiedData[parseInt(k.toString(), 10)][keys[parseInt(j.toString(), 10)]];
                  if (editedData && editedData.taskData) {
                    editedData.taskData[keys[parseInt(j.toString(), 10)]] = editedData[keys[parseInt(j.toString(), 10)]] = treeData[parseInt(i.toString(), 10)][keys[parseInt(j.toString(), 10)]];
                  }
                }
              }
            } else if (action === "add" || action === "batchsave") {
              var index = void 0;
              if (control.editSettings.newRowPosition === "Child") {
                if (treeData.length === 0 && gridData.length === 1) {
                  treeData.push(originalData.taskData);
                } else if (isSelfReference) {
                  originalData.taskData["" + control.parentIdMapping] = treeData[parseInt(i.toString(), 10)]["" + control.idMapping];
                  treeData.splice(i + 1, 0, originalData.taskData);
                } else {
                  if (!Object.prototype.hasOwnProperty.call(treeData[parseInt(i.toString(), 10)], control.childMapping)) {
                    treeData[parseInt(i.toString(), 10)]["" + control.childMapping] = [];
                  }
                  treeData[parseInt(i.toString(), 10)]["" + control.childMapping].push(originalData.taskData);
                  updateParentRow(key, treeData[parseInt(i.toString(), 10)], action, control, isSelfReference, originalData);
                }
              } else if (control.editSettings.newRowPosition === "Below") {
                treeData.splice(i + 1, 0, originalData.taskData);
                if (!isNullOrUndefined(originalData.parentItem)) {
                  updateParentRow(key, treeData[i + 1], action, control, isSelfReference, originalData);
                }
              } else if (!addRowIndex) {
                index = 0;
                treeData.splice(index, 0, originalData.taskData);
              } else if (control.editSettings.newRowPosition === "Above") {
                treeData.splice(i, 0, originalData.taskData);
                if (!isNullOrUndefined(originalData.parentItem)) {
                  updateParentRow(key, treeData[parseInt(i.toString(), 10)], action, control, isSelfReference, originalData);
                }
              }
            }
            return "break";
          }
        } else if (!isNullOrUndefined(treeData[parseInt(i.toString(), 10)]["" + control.childMapping])) {
          if (removeChildRecords(treeData[parseInt(i.toString(), 10)]["" + control.childMapping], modifiedData[parseInt(k.toString(), 10)], action, key, control, isSelfReference, originalData, columnName)) {
            updateParentRow(key, treeData[parseInt(i.toString(), 10)], action, control, isSelfReference);
          }
        }
      };
      while (i-- && i >= 0) {
        var state_1 = _loop_1();
        if (state_1 === "break")
          break;
      }
    }
  }
}
function addAction(details, treeData, control, isSelfReference, addRowIndex, selectedIndex, addRowRecord) {
  var value;
  var isSkip = false;
  var currentViewRecords = control.grid.getCurrentViewRecords();
  value = extend({}, details.value);
  value = getPlainData(value);
  switch (control.editSettings.newRowPosition) {
    case "Top":
      treeData.unshift(value);
      isSkip = true;
      break;
    case "Bottom":
      treeData.push(value);
      isSkip = true;
      break;
    case "Above":
      if (!isNullOrUndefined(addRowRecord)) {
        value = extend({}, addRowRecord);
        value = getPlainData(value);
      } else if (currentViewRecords.length === 0) {
        value = getPlainData(value);
      } else {
        value = extend({}, currentViewRecords[addRowIndex + 1]);
        value = getPlainData(value);
      }
      break;
    case "Below":
    case "Child":
      if (!isNullOrUndefined(addRowRecord)) {
        value = extend({}, addRowRecord);
        value = getPlainData(value);
      } else {
        var primaryKeys = control.grid.getPrimaryKeyFieldNames()[0];
        var currentdata = currentViewRecords.length > 0 ? currentViewRecords[parseInt(addRowIndex.toString(), 10)] : [];
        if (!isNullOrUndefined(currentdata) && currentdata["" + primaryKeys] === details.value["" + primaryKeys] || selectedIndex !== -1 && treeData.length !== 0) {
          value = extend({}, currentdata);
        } else {
          value = extend({}, details.value);
        }
        value = getPlainData(value);
        var internalProperty = "internalProperties";
        control.editModule["" + internalProperty].taskData = value;
      }
      if (selectedIndex === -1) {
        treeData.unshift(value);
        isSkip = true;
      }
  }
  return { value, isSkip };
}
function removeChildRecords(childRecords, modifiedData, action, key, control, isSelfReference, originalData, columnName) {
  var isChildAll = false;
  var j = childRecords.length;
  while (j-- && j >= 0) {
    if (childRecords[parseInt(j.toString(), 10)]["" + key] === modifiedData["" + key] || isSelfReference && childRecords[parseInt(j.toString(), 10)][control.parentIdMapping] === modifiedData[control.idMapping]) {
      if (action === "edit") {
        var keys = Object.keys(modifiedData);
        var editedData = getParentData(control, modifiedData.uniqueID);
        for (var i = 0; i < keys.length; i++) {
          if (Object.prototype.hasOwnProperty.call(childRecords[parseInt(j.toString(), 10)], keys[parseInt(i.toString(), 10)]) && (control.editSettings.mode !== "Cell" || keys[parseInt(i.toString(), 10)] === columnName)) {
            editedData[keys[parseInt(i.toString(), 10)]] = editedData.taskData[keys[parseInt(i.toString(), 10)]] = childRecords[parseInt(j.toString(), 10)][keys[parseInt(i.toString(), 10)]] = modifiedData[keys[parseInt(i.toString(), 10)]];
            if (control.grid.editSettings.mode === "Normal" && control.editSettings.mode === "Cell" && !isNullOrUndefined(control.grid.editModule)) {
              var editModule = "editModule";
              control.grid.editModule["" + editModule].editRowIndex = modifiedData.index;
              control.grid.editModule["" + editModule].updateCurrentViewData(modifiedData);
            }
          }
        }
        break;
      } else if (action === "add" || action === "batchsave") {
        if (control.editSettings.newRowPosition === "Child") {
          if (isSelfReference) {
            originalData["" + control.parentIdMapping] = childRecords[parseInt(j.toString(), 10)][control.idMapping];
            childRecords.splice(j + 1, 0, originalData);
            updateParentRow(key, childRecords[parseInt(j.toString(), 10)], action, control, isSelfReference, originalData);
          } else {
            if (!Object.prototype.hasOwnProperty.call(childRecords[parseInt(j.toString(), 10)], control.childMapping)) {
              childRecords[parseInt(j.toString(), 10)][control.childMapping] = [];
            }
            childRecords[parseInt(j.toString(), 10)][control.childMapping].push(originalData.taskData);
            updateParentRow(key, childRecords[parseInt(j.toString(), 10)], action, control, isSelfReference, originalData);
          }
        } else if (control.editSettings.newRowPosition === "Above") {
          childRecords.splice(j, 0, originalData.taskData);
          if (!isNullOrUndefined(originalData.parentItem)) {
            updateParentRow(key, childRecords[parseInt(j.toString(), 10)], action, control, isSelfReference, originalData);
          }
        } else if (control.editSettings.newRowPosition === "Below") {
          childRecords.splice(j + 1, 0, originalData.taskData);
          if (!isNullOrUndefined(originalData.parentItem)) {
            updateParentRow(key, childRecords[parseInt(j.toString(), 10)], action, control, isSelfReference, originalData);
          }
        }
      } else {
        childRecords.splice(j, 1);
        if (!childRecords.length) {
          isChildAll = true;
        }
      }
    } else if (!isNullOrUndefined(childRecords[parseInt(j.toString(), 10)][control.childMapping])) {
      if (removeChildRecords(childRecords[parseInt(j.toString(), 10)][control.childMapping], modifiedData, action, key, control, isSelfReference, originalData, columnName)) {
        updateParentRow(key, childRecords[parseInt(j.toString(), 10)], action, control, isSelfReference);
      }
    }
  }
  return isChildAll;
}
function updateParentRow(key, record, action, control, isSelfReference, child) {
  if ((control.editSettings.newRowPosition === "Above" || control.editSettings.newRowPosition === "Below") && (action === "add" || action === "batchsave") && !isNullOrUndefined(child.parentItem)) {
    var parentData = getParentData(control, child.parentItem.uniqueID);
    parentData.childRecords.push(child);
  } else {
    var currentRecords = control.grid.getCurrentViewRecords();
    var index_1;
    currentRecords.map(function(e, i2) {
      if (e["" + key] === record["" + key]) {
        index_1 = i2;
        return;
      }
    });
    if (control.enableVirtualization && isNullOrUndefined(index_1)) {
      var updatedParent = getValue("uniqueIDCollection." + child.parentUniqueID, control);
      record = updatedParent;
    }
    if (!isNullOrUndefined(index_1)) {
      record = currentRecords[parseInt(index_1.toString(), 10)];
    }
    if (control.enableVirtualization && isNullOrUndefined(record) && !isNullOrUndefined(child)) {
      record = getValue("uniqueIDCollection." + child.parentUniqueID, control);
    }
    if (!isSelfReference && !isNullOrUndefined(record.childRecords) && record.childRecords.length) {
      record.hasChildRecords = true;
    } else {
      record.hasChildRecords = false;
    }
    if (action === "add" || action === "batchsave") {
      record.expanded = true;
      record.hasChildRecords = true;
      if (control.sortSettings.columns.length && isNullOrUndefined(child)) {
        child = currentRecords.filter(function(e) {
          if (e.parentUniqueID === record.uniqueID) {
            return e;
          } else {
            return null;
          }
        });
      }
      var childRecords = child ? child instanceof Array ? child[0] : child : currentRecords[index_1 + 1];
      if (control.editSettings.newRowPosition !== "Below") {
        if (!Object.prototype.hasOwnProperty.call(record, "childRecords")) {
          record.childRecords = [];
        } else {
          if (!isNullOrUndefined(child) && record["" + key] !== child["" + key]) {
            if (!record.childRecords.some(function(records) {
              return records.uniqueID === child.uniqueID;
            })) {
              record.childRecords.push(child);
            }
          }
        }
        if (record.childRecords.indexOf(childRecords) === -1 && record["" + key] !== child["" + key]) {
          record.childRecords.unshift(childRecords);
        }
        if (isSelfReference) {
          if (!Object.prototype.hasOwnProperty.call(record, control.childMapping)) {
            record[control.childMapping] = [];
          }
          if (record["" + control.childMapping].indexOf(childRecords) === -1 && record["" + key] !== child["" + key]) {
            record[control.childMapping].unshift(childRecords);
          }
        }
      }
    }
    var primaryKeys = control.grid.getPrimaryKeyFieldNames()[0];
    var data = control.grid.dataSource instanceof DataManager ? control.grid.dataSource.dataSource.json : control.grid.dataSource;
    for (var i = 0; i < data.length; i++) {
      if (data[parseInt(i.toString(), 10)]["" + primaryKeys] === record["" + primaryKeys]) {
        data[parseInt(i.toString(), 10)] = record;
        break;
      }
    }
    control.grid.setRowData(key, record);
    var row = control.getRowByIndex(index_1);
    if (control.editSettings.mode === "Batch") {
      if (action === "add") {
        row = control.getRows()[control.grid.getCurrentViewRecords().indexOf(record)];
      } else {
        row = control.getRows()[control.grid.getRowIndexByPrimaryKey(record["" + key])];
      }
    }
    var movableRow = void 0;
    if (control.frozenRows || control.getFrozenColumns()) {
      movableRow = control.getRowByIndex(index_1);
    }
    if (!control.enableVirtualization && !isNullOrUndefined(row) || !isNullOrUndefined(movableRow)) {
      var index_2 = control.treeColumnIndex;
      if (control.allowRowDragAndDrop && control.enableImmutableMode) {
        index_2 = index_2 + 1;
      }
      control.renderModule.cellRender({
        data: record,
        cell: row.cells[parseInt(index_2.toString(), 10)] ? row.cells[parseInt(index_2.toString(), 10)] : movableRow.cells[index_2 - control.getFrozenColumns()],
        column: control.grid.getColumns()[control.treeColumnIndex],
        requestType: action
      });
      if (control.enableImmutableMode && control["action"] === "indenting" || control["action"] === "outdenting") {
        control.renderModule.RowModifier({
          data: record,
          row
        });
      }
    }
  }
}

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/infinite-scroll-settings.js
var __extends13 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate12 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var InfiniteScrollSettings = (
  /** @class */
  (function(_super) {
    __extends13(InfiniteScrollSettings2, _super);
    function InfiniteScrollSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate12([
      Property(false)
    ], InfiniteScrollSettings2.prototype, "enableCache", void 0);
    __decorate12([
      Property(3)
    ], InfiniteScrollSettings2.prototype, "maxBlocks", void 0);
    __decorate12([
      Property(3)
    ], InfiniteScrollSettings2.prototype, "initialBlocks", void 0);
    return InfiniteScrollSettings2;
  })(ChildProperty)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/column-chooser-settings.js
var __extends14 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate13 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ColumnChooserSettings = (
  /** @class */
  (function(_super) {
    __extends14(ColumnChooserSettings2, _super);
    function ColumnChooserSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate13([
      Property("startsWith")
    ], ColumnChooserSettings2.prototype, "operator", void 0);
    __decorate13([
      Property(false)
    ], ColumnChooserSettings2.prototype, "ignoreAccent", void 0);
    __decorate13([
      Property(null)
    ], ColumnChooserSettings2.prototype, "headerTemplate", void 0);
    __decorate13([
      Property(null)
    ], ColumnChooserSettings2.prototype, "template", void 0);
    __decorate13([
      Property(null)
    ], ColumnChooserSettings2.prototype, "footerTemplate", void 0);
    __decorate13([
      Property(true)
    ], ColumnChooserSettings2.prototype, "enableSearching", void 0);
    __decorate13([
      Property(null)
    ], ColumnChooserSettings2.prototype, "renderCustomColumnChooser", void 0);
    return ColumnChooserSettings2;
  })(ChildProperty)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/base/treegrid.js
var __extends15 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate14 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TreeGrid = (
  /** @class */
  (function(_super) {
    __extends15(TreeGrid2, _super);
    function TreeGrid2(options, element) {
      var _this = _super.call(this, options, element) || this;
      _this.dataResults = {};
      _this.uniqueIDCollection = {};
      _this.uniqueIDFilterCollection = {};
      _this.changedRecords = "changedRecords";
      _this.deletedRecords = "deletedRecords";
      _this.addedRecords = "addedRecords";
      _this.indentOutdentAction = "indentOutdentAction";
      _this.isFromChartSide = false;
      _this.modifiedRecords = [];
      _this.stackedHeader = false;
      _this.freezeColumnRefresh = true;
      _this.componentRefresh = Component2.prototype.refresh;
      _this.isComponentRefresh = false;
      _this.isVirtualExpandCollapse = false;
      _this.isInfiniteCollapse = false;
      _this.enableSeamlessScrolling = false;
      _this.objectEqualityChecker = function(old, current) {
        if (old) {
          var keys = Object.keys(old);
          var isEqual = true;
          var excludeKeys = ["Children", "childRecords", "taskData", "uniqueID", "parentItem", "parentUniqueID", "index"];
          for (var i = 0; i < keys.length; i++) {
            if (old[keys[parseInt(i.toString(), 10)]] !== current[keys[parseInt(i.toString(), 10)]] && excludeKeys.indexOf(keys[parseInt(i.toString(), 10)]) === -1) {
              var isDate = old[keys[parseInt(i.toString(), 10)]] instanceof Date && current[keys[parseInt(i.toString(), 10)]] instanceof Date;
              if (!isDate || old[keys[parseInt(i.toString(), 10)]].getTime() !== current[keys[parseInt(i.toString(), 10)]].getTime()) {
                isEqual = false;
                break;
              }
            }
          }
          return isEqual;
        } else {
          return false;
        }
      };
      TreeGrid_1.Inject(Selection, Logger2);
      setValue("mergePersistData", _this.mergePersistTreeGridData, _this);
      var logger = "Logger";
      if (!isNullOrUndefined(_this.injectedModules["" + logger])) {
        Grid.Inject(Logger);
      }
      var freezeModulePresent = _this.injectedModules.filter(function(e) {
        if (e.prototype.getModuleName() === "freeze") {
          Grid.Inject(Freeze);
        }
      });
      _this.grid = new Grid();
      return _this;
    }
    TreeGrid_1 = TreeGrid2;
    TreeGrid2.prototype.excelExport = function(excelExportProperties, isMultipleExport, workbook, isBlob) {
      return this.allowExcelExport ? this.excelExportModule.Map(excelExportProperties, isMultipleExport, workbook, isBlob, false) : null;
    };
    TreeGrid2.prototype.csvExport = function(excelExportProperties, isMultipleExport, workbook, isBlob) {
      return this.allowExcelExport ? this.excelExportModule.Map(excelExportProperties, isMultipleExport, workbook, isBlob, true) : null;
    };
    TreeGrid2.prototype.pdfExport = function(pdfExportProperties, isMultipleExport, pdfDoc, isBlob) {
      return this.allowPdfExport ? this.pdfExportModule.Map(pdfExportProperties, isMultipleExport, pdfDoc, isBlob) : null;
    };
    TreeGrid2.prototype.serverExcelExport = function(url) {
      this.isExcel = true;
      this.exportTreeGrid(url);
    };
    TreeGrid2.prototype.serverPdfExport = function(url) {
      this.isExcel = false;
      this.exportTreeGrid(url);
    };
    TreeGrid2.prototype.serverCsvExport = function(url) {
      this.isExcel = true;
      this.exportTreeGrid(url);
    };
    TreeGrid2.prototype.exportTreeGrid = function(url) {
      var treegrid = this;
      var query = treegrid.grid.getDataModule().generateQuery(true);
      var state = new UrlAdaptor().processQuery(new DataManager({ url: "" }), query);
      var queries = JSON.parse(state.data);
      var treeGridModel = JSON.parse(this.addOnPersist([
        "allowPaging",
        "pageSettings",
        "sortSettings",
        "allowPdfExport",
        "allowExcelExport",
        "aggregates",
        "filterSettings",
        "columns",
        "locale",
        "searchSettings",
        "idMapping",
        "parentIdMapping",
        "childMapping",
        "treeColumnIndex"
      ]));
      var include = [
        "field",
        "headerText",
        "type",
        "format",
        "visible",
        "template",
        "index",
        "width",
        "textAlign",
        "headerTextAlign",
        "columns"
      ];
      treeGridModel.filterSettings.columns = queries.where;
      treeGridModel.searchSettings.fields = queries.search && queries.search[0]["fields"] || [];
      treeGridModel.sortSettings.columns = queries.sorted;
      treeGridModel.columns = this.setHeaderText(treeGridModel.columns, include);
      var form = this.createElement("form", { id: "ExportForm" });
      form.style.display = "none";
      var treeGridInput = this.createElement("input", { id: "treeGridInput", attrs: { name: "treeGridModel" } });
      treeGridInput.value = JSON.stringify(treeGridModel);
      form.method = "POST";
      form.action = url;
      form.appendChild(treeGridInput);
      document.body.appendChild(form);
      form.submit();
      form.remove();
    };
    TreeGrid2.prototype.setHeaderText = function(columns, include) {
      for (var i = 0; i < columns.length; i++) {
        var column = this.getColumnByUid(columns[parseInt(i.toString(), 10)].uid);
        if (this.stackedHeader && isNullOrUndefined(column)) {
          column = !isNullOrUndefined(columns[parseInt(i.toString(), 10)].field) ? this.getColumnByField(columns[parseInt(i.toString(), 10)].field) : columns[parseInt(i.toString(), 10)];
        }
        columns[parseInt(i.toString(), 10)].headerText = column.headerText;
        if (!isNullOrUndefined(column.template)) {
          columns[parseInt(i.toString(), 10)].template = "true";
        }
        if (columns[parseInt(i.toString(), 10)].format) {
          columns[parseInt(i.toString(), 10)].format = getNumberFormat(this.getFormat(column.format), column.type, false, this.currencyCode);
          if (!this.isExcel && (column.type === "datetime" || column.type === "date")) {
            columns[parseInt(i.toString(), 10)].format = columns[parseInt(i.toString(), 10)].format.toString().replace("AM/PM", "tt");
          }
          columns[parseInt(i.toString(), 10)].type = column.type;
        }
        if (columns[parseInt(i.toString(), 10)].columns) {
          this.setHeaderText(columns[parseInt(i.toString(), 10)].columns, include);
        }
        var keys = Object.keys(columns[parseInt(i.toString(), 10)]);
        for (var j = 0; j < keys.length; j++) {
          if (include.indexOf(keys[parseInt(j.toString(), 10)]) < 0) {
            delete columns[parseInt(i.toString(), 10)][keys[parseInt(j.toString(), 10)]];
          }
        }
      }
      return columns;
    };
    TreeGrid2.prototype.getFormat = function(format) {
      return typeof format === "object" ? !isNullOrUndefined(format.format) ? format.format : format.skeleton : format;
    };
    TreeGrid2.prototype.getModuleName = function() {
      return "treegrid";
    };
    TreeGrid2.prototype.refreshLayout = function() {
      this.componentRefresh();
    };
    TreeGrid2.prototype.setProperties = function(prop, muteOnChange) {
      _super.prototype.setProperties.call(this, prop, muteOnChange);
    };
    TreeGrid2.prototype.preRender = function() {
      if (this.isComponentRefresh) {
        this.grid = new Grid();
      }
      this.TreeGridLocale();
      this.initProperties();
      this.defaultLocale = {
        Above: "Above",
        Below: "Below",
        Child: "Child",
        AddRow: "Add Row",
        ExpandAll: "Expand All",
        CollapseAll: "Collapse All",
        RowIndent: "Indent",
        RowOutdent: "Outdent"
      };
      this.l10n = new L10n("treegrid", this.defaultLocale, this.locale);
      if (this.isSelfReference && isNullOrUndefined(this.childMapping)) {
        this.childMapping = "Children";
      }
    };
    TreeGrid2.prototype.sortByColumn = function(columnName, direction, isMultiSort) {
      if (this.sortModule) {
        this.sortModule.sortColumn(columnName, direction, isMultiSort);
      }
    };
    TreeGrid2.prototype.clearSorting = function() {
      if (this.sortModule) {
        this.sortModule.clearSorting();
      }
    };
    TreeGrid2.prototype.removeSortColumn = function(field) {
      if (this.sortModule) {
        this.sortModule.removeSortColumn(field);
      }
    };
    TreeGrid2.prototype.search = function(searchString) {
      this.grid.search(searchString);
    };
    TreeGrid2.prototype.autoFitColumns = function(fieldNames) {
      this.resizeModule.autoFitColumns(fieldNames);
      this.updateColumnModel();
    };
    TreeGrid2.prototype.reorderColumns = function(fromFName, toFName) {
      this.grid.reorderColumns(fromFName, toFName);
    };
    TreeGrid2.prototype.TreeGridLocale = function() {
      if (!isNullOrUndefined(this.locale)) {
        var locale = L10n.locale;
        var localeObject = {};
        setValue(this.locale, {}, localeObject);
        var gridLocale = void 0;
        gridLocale = {};
        gridLocale = getObject(this.locale, locale);
        var treeGridLocale = void 0;
        treeGridLocale = {};
        treeGridLocale = getObject(this.getModuleName(), gridLocale);
        setValue("grid", treeGridLocale, getObject(this.locale, localeObject));
        L10n.load(localeObject);
      }
    };
    TreeGrid2.prototype.print = function() {
      this.printModule.print();
    };
    TreeGrid2.prototype.treeGridkeyActionHandler = function(e) {
      if (this.allowKeyboard) {
        var target = void 0;
        var parentTarget = void 0;
        var column = void 0;
        var row = void 0;
        var summaryElement = void 0;
        switch (e.action) {
          case "ctrlDownArrow":
            this.expandAll();
            break;
          case "ctrlUpArrow":
            this.collapseAll();
            break;
          case "ctrlShiftUpArrow":
            target = e.target;
            column = target.closest(".e-rowcell");
            if (!isNullOrUndefined(column)) {
              row = column.closest("tr");
              if (!isNullOrUndefined(row) && !isNullOrUndefined(row.getElementsByClassName("e-treegridexpand")[0])) {
                this.expandCollapseRequest(row.querySelector(".e-treegridexpand"));
              }
            }
            break;
          case "ctrlShiftDownArrow":
            target = e.target;
            column = target.closest(".e-rowcell");
            if (!isNullOrUndefined(column)) {
              row = column.closest("tr");
              if (!isNullOrUndefined(row) && !isNullOrUndefined(row.getElementsByClassName("e-treegridcollapse")[0])) {
                this.expandCollapseRequest(row.querySelector(".e-treegridcollapse"));
              }
            }
            break;
          case "downArrow":
            if (!this.enableVirtualization && isNullOrUndefined(this.rowTemplate)) {
              target = e.target;
              if (!isNullOrUndefined(target.querySelectorAll(".e-rowcell"))) {
                target = parentsUntil(target, "e-rowcell");
              }
              if (!isNullOrUndefined(target)) {
                parentTarget = target.parentElement;
                if (!isNullOrUndefined(parentTarget)) {
                  var cellIndex = parentTarget.cellIndex;
                  if (cellIndex && this.grid.getColumnByIndex(cellIndex).editType === "dropdownedit" && isNullOrUndefined(this.grid.getColumnByIndex(cellIndex).edit["obj"])) {
                    parentTarget = target;
                  }
                  summaryElement = this.findnextRowElement(parentTarget);
                  if (summaryElement !== null) {
                    var cellIndex_1 = target.cellIndex;
                    var row_1 = summaryElement.children[parseInt(cellIndex_1.toString(), 10)];
                    if (!isNullOrUndefined(row_1) && !this.grid.isEdit) {
                      var focusedCells = this.grid.getContent().querySelectorAll(".e-rowcell.e-focused, .e-rowcell.e-focus");
                      focusedCells.forEach(function(cell) {
                        removeClass([cell], ["e-focused", "e-focus"]);
                      });
                      addClass([row_1], ["e-focused", "e-focus"]);
                    }
                  } else {
                    var contentTableBody = this.grid.getContent().querySelector(".e-table tbody");
                    if (parentTarget && contentTableBody && parentTarget !== contentTableBody.lastElementChild) {
                      this.clearSelection();
                    }
                  }
                }
              }
            }
            break;
          case "upArrow":
            if (!this.enableVirtualization && isNullOrUndefined(this.rowTemplate)) {
              target = e.target;
              if (!isNullOrUndefined(target.querySelectorAll(".e-rowcell"))) {
                target = parentsUntil(target, "e-rowcell");
              }
              if (!isNullOrUndefined(target)) {
                parentTarget = target.parentElement;
                if (!isNullOrUndefined(parentTarget)) {
                  var cellIndex = parentTarget.cellIndex;
                  if (cellIndex && this.grid.getColumnByIndex(cellIndex).editType === "dropdownedit" && isNullOrUndefined(this.grid.getColumnByIndex(cellIndex).edit["obj"])) {
                    parentTarget = target;
                  }
                  summaryElement = this.findPreviousRowElement(parentTarget);
                  if (summaryElement !== null) {
                    var cellIndex_2 = target.cellIndex;
                    if (!isNullOrUndefined(cellIndex_2)) {
                      var row_2 = summaryElement.children[parseInt(cellIndex_2.toString(), 10)];
                      if (!isNullOrUndefined(row_2) && !this.grid.isEdit) {
                        var focusedCells = this.grid.getContent().querySelectorAll(".e-rowcell.e-focused, .e-rowcell.e-focus");
                        focusedCells.forEach(function(cell) {
                          removeClass([cell], ["e-focused", "e-focus"]);
                        });
                        addClass([row_2], ["e-focused", "e-focus"]);
                      }
                    }
                  } else {
                    this.clearSelection();
                  }
                }
              }
            }
        }
      }
    };
    TreeGrid2.prototype.findnextRowElement = function(summaryRowElement) {
      var rowElement = summaryRowElement.nextElementSibling;
      if (rowElement !== null && (rowElement.className.indexOf("e-summaryrow") !== -1 || rowElement.classList.contains("e-childrow-hidden"))) {
        rowElement = this.findnextRowElement(rowElement);
      }
      return rowElement;
    };
    TreeGrid2.prototype.findPreviousRowElement = function(summaryRowElement) {
      var rowElement = summaryRowElement.previousElementSibling;
      if (rowElement !== null && (rowElement.className.indexOf("e-summaryrow") !== -1 || rowElement.classList.contains("e-childrow-hidden"))) {
        rowElement = this.findPreviousRowElement(rowElement);
      }
      return rowElement;
    };
    TreeGrid2.prototype.initProperties = function() {
      this.defaultLocale = {};
      this.flatData = [];
      this.infiniteScrollData = [];
      this.remoteCollapsedData = [];
      this.remoteExpandedData = [];
      this.parentData = [];
      this.columnModel = [];
      this.isExpandAll = false;
      this.isCollapseAll = false;
      this.freezeColumnRefresh = true;
      this.componentRefresh = Component2.prototype.refresh;
      this.isComponentRefresh = false;
      this.keyConfigs = {
        ctrlDownArrow: "ctrl+downarrow",
        ctrlUpArrow: "ctrl+uparrow",
        ctrlShiftUpArrow: "ctrl+shift+uparrow",
        ctrlShiftDownArrow: "ctrl+shift+downarrow",
        downArrow: "downArrow",
        upArrow: "upArrow"
      };
      this.isLocalData = !(this.dataSource instanceof DataManager) || this.dataSource.dataSource.offline || !isNullOrUndefined(this.dataSource.ready) || this.dataSource.adaptor instanceof RemoteSaveAdaptor;
      this.isSelfReference = !isNullOrUndefined(this.parentIdMapping);
    };
    TreeGrid2.prototype.wireEvents = function() {
      EventHandler.add(this.grid.element, "click", this.mouseClickHandler, this);
      EventHandler.add(this.element, "touchend", this.mouseClickHandler, this);
      this.keyboardModule = new KeyboardEvents(this.element, {
        keyAction: this.treeGridkeyActionHandler.bind(this),
        keyConfigs: this.keyConfigs,
        eventName: "keydown"
      });
      if (this.allowKeyboard) {
        this.element.tabIndex = this.element.tabIndex === -1 ? 0 : this.element.tabIndex;
      }
    };
    TreeGrid2.prototype.requiredModules = function() {
      var modules = [];
      var splitFrozenCount = "splitFrozenCount";
      var mergedColumns = "mergedColumns";
      if (this["" + mergedColumns]) {
        this.grid["" + mergedColumns] = this["" + mergedColumns];
      }
      if (isNullOrUndefined(this["changedProperties"].columns)) {
        this.grid["" + splitFrozenCount](this.getColumns());
      }
      if (this.isDestroyed) {
        return modules;
      }
      modules.push({
        member: "filter",
        args: [this, this.filterSettings],
        name: "Filter"
      });
      if (!isNullOrUndefined(this.toolbar)) {
        modules.push({
          member: "toolbar",
          args: [this],
          name: "Toolbar"
        });
      }
      if (this.contextMenuItems) {
        modules.push({
          member: "contextMenu",
          args: [this],
          name: "ContextMenu"
        });
      }
      if (this.allowPaging) {
        modules.push({
          member: "pager",
          args: [this, this.pageSettings],
          name: "Page"
        });
      }
      if (this.allowReordering) {
        modules.push({
          member: "reorder",
          args: [this],
          name: "Reorder"
        });
      }
      if (this.allowSorting) {
        modules.push({
          member: "sort",
          args: [this],
          name: "Sort"
        });
      }
      if (this.aggregates.length > 0) {
        modules.push({
          member: "summary",
          args: [this],
          name: "Aggregate"
        });
      }
      if (this.resizeCheck()) {
        modules.push({
          member: "resize",
          args: [this],
          name: "Resize"
        });
      }
      if (this.allowExcelExport) {
        modules.push({
          member: "ExcelExport",
          args: [this],
          name: "ExcelExport"
        });
      }
      var freezePresent = this.injectedModules.filter(function(e) {
        return e.prototype.getModuleName() === "freeze";
      });
      var hasFreezeProp = Array.isArray(this.columns) && this.columns.some(function(col) {
        return !!col.freeze;
      });
      if ((this.frozenColumns || this.frozenRows || this.getFrozenColumns() || hasFreezeProp) && freezePresent.length > 0) {
        modules.push({
          member: "freeze",
          args: [this],
          name: "Freeze"
        });
      }
      if (this.detailTemplate) {
        modules.push({
          member: "detailRow",
          args: [this],
          name: "DetailRow"
        });
      }
      if (this.allowPdfExport) {
        modules.push({
          member: "PdfExport",
          args: [this],
          name: "PdfExport"
        });
      }
      if (this.showColumnMenu) {
        modules.push({
          member: "columnMenu",
          args: [this],
          name: "ColumnMenu"
        });
      }
      if (this.showColumnChooser) {
        modules.push({
          member: "ColumnChooser",
          args: [this],
          name: "ColumnChooser"
        });
      }
      this.extendRequiredModules(modules);
      return modules;
    };
    TreeGrid2.prototype.resizeCheck = function() {
      var columnMenu = this.showColumnMenu && (!this.columnMenuItems || this.columnMenuItems.filter(function(c) {
        return c === "AutoFit" || c === "AutoFitAll";
      }).length) ? true : false;
      var contextMenu = this.contextMenuItems && this.contextMenuItems.filter(function(c) {
        return c === "AutoFit" || c === "AutoFitAll";
      }).length ? true : false;
      return this.allowResizing || columnMenu || contextMenu;
    };
    TreeGrid2.prototype.extendRequiredModules = function(modules) {
      var IsRowDDInjected = this.injectedModules.filter(function(e) {
        return e.prototype.getModuleName() === "rowDragAndDrop";
      });
      if (this.allowRowDragAndDrop || IsRowDDInjected.length) {
        if (!isNullOrUndefined(this.toolbar) && (this.toolbar["includes"]("Indent") || this.toolbar["includes"]("Outdent"))) {
          this.isIndentEnabled = true;
        }
        modules.push({
          member: "rowDragAndDrop",
          args: [this],
          name: "RowDD"
        });
      }
      if (this.editSettings.allowAdding || this.editSettings.allowDeleting || this.editSettings.allowEditing) {
        modules.push({
          member: "edit",
          args: [this],
          name: "Edit"
        });
      }
      if (!isNullOrUndefined(this.columns) && this.isCommandColumn(this.columns)) {
        modules.push({
          member: "commandColumn",
          args: [this],
          name: "CommandColumn"
        });
      }
      if (this.allowSelection) {
        modules.push({
          member: "selection",
          args: [this],
          name: "Selection"
        });
      }
      if (this.enableVirtualization) {
        modules.push({
          member: "virtualScroll",
          args: [this],
          name: "VirtualScroll"
        });
      }
      if (this.enableInfiniteScrolling) {
        modules.push({
          member: "infiniteScroll",
          args: [this],
          name: "InfiniteScroll"
        });
      }
      modules.push({
        member: "logger",
        args: [this.grid]
      });
    };
    TreeGrid2.prototype.isCommandColumn = function(columns) {
      var _this = this;
      return columns.some(function(col) {
        if (col.columns) {
          return _this.isCommandColumn(col.columns);
        }
        return !!(col.commands || col.commandsTemplate);
      });
    };
    TreeGrid2.prototype.unwireEvents = function() {
      if (this.grid && this.grid.element) {
        EventHandler.remove(this.grid.element, "click", this.mouseClickHandler);
      }
      if (this.element) {
        EventHandler.remove(this.element, "touchend", this.mouseClickHandler);
        if (this.keyboardModule) {
          this.keyboardModule.destroy();
          this.keyboardModule = null;
        }
        if (this.allowKeyboard) {
          this.element.removeAttribute("tabIndex");
        }
      }
    };
    TreeGrid2.prototype.log = function(types, args) {
      if (this.loggerModule) {
        this.loggerModule.treeLog(types, args, this);
      }
    };
    TreeGrid2.prototype.render = function() {
      var _this = this;
      if (this.isReact) {
        this.grid.isReact = true;
        this.grid.portals = [];
      }
      if (this.isVue) {
        this.grid.isVue = true;
        this.grid.vueInstance = this.vueInstance;
      }
      createSpinner({ target: this.element }, this.createElement);
      this.log(["mapping_fields_missing"]);
      this.renderModule = new Render(this);
      this.dataModule = new DataManipulation(this);
      this.printModule = new Print2(this);
      if (this.enableVirtualization || this.enableColumnVirtualization) {
        var args = { enableSeamlessScrolling: this.enableSeamlessScrolling };
        this.trigger(load, args);
        this.enableSeamlessScrolling = args.enableSeamlessScrolling;
        setEnableSeamlessScrolling(this.enableSeamlessScrolling);
      } else {
        this.trigger(load);
      }
      this.autoGenerateColumns();
      this.initialRender = true;
      if (!isNullOrUndefined(this.dataSource)) {
        this.convertTreeData(this.dataSource);
      }
      this.loadGrid();
      if (this.element.classList.contains("e-treegrid") && this.rowDropSettings.targetID) {
        this.grid.rowDropSettings.targetID += "_gridcontrol";
      }
      this.addListener();
      var gridContainer = createElement("div", { id: this.element.id + "_gridcontrol", className: "e-treelistgrid" });
      addClass([this.element], "e-treegrid");
      if (!isNullOrUndefined(this.height) && typeof this.height === "string" && this.height.indexOf("%") !== -1) {
        this.element.style.height = this.height;
      }
      if (!isNullOrUndefined(this.width) && typeof this.width === "string" && this.width.indexOf("%") !== -1) {
        this.element.style.width = this.width;
      }
      this.element.appendChild(gridContainer);
      var gridRequiredModules = this.grid.requiredModules;
      this.grid.requiredModules = function() {
        var modules = [];
        modules = gridRequiredModules.apply(this);
        for (var i = 0; i < modules.length; i++) {
          if (modules[parseInt(i.toString(), 10)].member === "virtualscroll") {
            modules[parseInt(i.toString(), 10)].member = "treeVirtualScroll";
          }
        }
        return modules;
      };
      var root = "root";
      this.grid["" + root] = this["" + root] ? this["" + root] : this;
      this.grid.appendTo(gridContainer);
      this.actionFailureHandler();
      var gridContent = this.element.getElementsByClassName("e-gridcontent")[0].childNodes[0];
      gridContent.setAttribute("tabindex", "0");
      var contentTable = this.element.getElementsByClassName("e-content")[0].querySelector(".e-table");
      if (!isNullOrUndefined(contentTable)) {
        contentTable.setAttribute("role", "treegrid");
      }
      if (this.isIndentEnabled) {
        this.refreshToolbarItems();
      }
      this.updateColumnModel();
      this.wireEvents();
      this.renderComplete();
      var destroyTemplate = "destroyTemplate";
      var destroyTemplateFn = this.grid["" + destroyTemplate];
      this.grid["" + destroyTemplate] = function(args2, index, callback) {
        destroyTemplateFn.apply(_this.grid);
        var portals = "portals";
        if (!(_this.isReact && isNullOrUndefined(_this["" + portals]))) {
          var isGantt = _this["isFromGantt"] && !isNullOrUndefined(_this["root"].clearTemplate) && (_this["root"].chartRowsModule["isGridRowRefreshed"] || _this["root"]["registeredTemplate"]);
          if (isGantt) {
            _this["root"].clearTemplate(args2, index, callback);
          } else {
            _this.clearTemplate(args2, index, callback);
          }
        } else if (!isNullOrUndefined(callback)) {
          callback();
        }
      };
    };
    TreeGrid2.prototype.actionFailureHandler = function() {
      var _this = this;
      var failureCases = [];
      var primaryKeyFieldNames = this.getPrimaryKeyFieldNames();
      var RecordsCount = this.flatData.length;
      if ((this.editSettings.allowAdding || this.editSettings.allowDeleting || this.editSettings.allowEditing) && primaryKeyFieldNames.length === 0 && RecordsCount !== 0) {
        failureCases.push("For the CRUD actions, it is necessary to enable Primary Key field for the unique data column.");
      }
      if (this.allowRowDragAndDrop && primaryKeyFieldNames.length === 0 && RecordsCount !== 0) {
        failureCases.push("For the Row Drag and Drop actions, it is necessary to enable Primary Key field for the unique data column.");
      }
      if (this.allowPaging && this.enableVirtualization) {
        failureCases.push("Paging is not allowed in virtualization case.");
      }
      if (RecordsCount === 0 && this.columns.length === 0) {
        failureCases.push("Either of the Data source or columns should be given.");
      }
      if (this.frozenColumns > 0 && this.columnModel.filter(function(col) {
        return col.isFrozen;
      }).length > 0) {
        failureCases.push("Use only one attribute for Frozen either IsFrozen or FrozenColumns.");
      }
      if (this.enableVirtualization && !isNullOrUndefined(this.detailTemplate)) {
        failureCases.push("Virtual scrolling is not compatible with the detail template");
      }
      if ((this.frozenColumns > 0 || this.frozenRows > 0 || this.columnModel.filter(function(col) {
        return col.isFrozen;
      })) && (!isNullOrUndefined(this.detailTemplate) || !isNullOrUndefined(this.rowTemplate))) {
        failureCases.push("Frozen rows and columns are not supported with the Detail template and row template.");
      }
      if ((this.frozenColumns > 0 || this.columnModel.filter(function(col) {
        return col.isFrozen;
      }).length > 0 || this.frozenRows > 0) && this.editSettings.allowEditing && this.editSettings.mode === "Cell") {
        failureCases.push("Frozen rows and columns are not supported with cell editing.");
      }
      if (this.allowSelection && !isNullOrUndefined(this.rowTemplate)) {
        failureCases.push("Selection is not supported in RowTemplate");
      }
      if (!this.allowExcelExport && this.action === "csvExport") {
        failureCases.push("CSV export is not allowed when allowExcelExport is disabled.");
      }
      if (!this.allowPdfExport && this.action === "pdfExport") {
        failureCases.push("PDF export is not allowed when allowPdfExport is disabled");
      }
      if (!this.allowExcelExport && this.action === "excelExport") {
        failureCases.push("Excel export is not allowed when allowExcelExport is disabled.");
      }
      if (this.treeColumnIndex >= this.columns.length) {
        failureCases.push("TreeColumnIndex value should not exceed the total column count.");
      }
      if (this.enableVirtualization && (this.columnModel.some(function(col) {
        return /%$/.test(col.width);
      }) || /%$/.test(this.height.toString()))) {
        failureCases.push("column width and height should be in pixels");
      }
      if (this.childMapping !== "Children" && !isNullOrUndefined(this.idMapping)) {
        failureCases.push("Both IdMapping and ChildMapping should not be used together for tree grid rendering.");
      }
      if (!isNullOrUndefined(this.idMapping) && isNullOrUndefined(this.parentIdMapping) || isNullOrUndefined(this.idMapping) && !isNullOrUndefined(this.parentIdMapping)) {
        failureCases.push("IdMapping and ParentIdMapping properties should be defined and vice versa.");
      }
      var checkboxColumn = this.columnModel.filter(function(col) {
        return col.showCheckbox;
      });
      var treeColumn = this.columns[this.treeColumnIndex];
      if (checkboxColumn.length !== 0) {
        if (checkboxColumn.length > 1) {
          failureCases.push("Only one column can have the ShowCheckbox option enabled.");
        } else if (checkboxColumn[0].field !== treeColumn.field) {
          failureCases.push("ShowCheckbox column should not be defined other than the tree column.");
        }
      }
      var alignColumn;
      if (this.treeColumnIndex !== null && this.treeColumnIndex !== -1 && this.treeColumnIndex < this.columns.length) {
        alignColumn = this.columnModel.filter(function(col) {
          return col.textAlign === "Right" && col.field === _this.columnModel[_this.treeColumnIndex].field;
        });
        if (alignColumn.length !== 0) {
          failureCases.push("TextAlign right for the tree column is not applicable.");
        }
      }
      if (failureCases.length > 0) {
        var failureEventArgs_1 = {
          error: {}
        };
        failureCases.forEach(function(failureCase, index) {
          failureEventArgs_1.error[parseInt(index.toString(), 10)] = failureCase;
        });
        this.trigger(actionFailure, failureEventArgs_1);
      }
    };
    TreeGrid2.prototype.refreshToolbarItems = function() {
      var toolbarElement = this.toolbarModule.getToolbar();
      var indentID = this.element.id + "_gridcontrol_indent";
      var outdentID = this.element.id + "_gridcontrol_outdent";
      var indentElement = toolbarElement.querySelector("#" + indentID).parentElement;
      var outdentElement = toolbarElement.querySelector("#" + outdentID).parentElement;
      indentElement.classList.add("e-hidden");
      outdentElement.classList.add("e-hidden");
    };
    TreeGrid2.prototype.afterGridRender = function() {
      if (!isNullOrUndefined(this.grid.clipboardModule)) {
        this.grid.clipboardModule.destroy();
      }
      this.clipboardModule = this.grid.clipboardModule = new TreeClipboard(this, this.grid.serviceLocator);
    };
    TreeGrid2.prototype.convertTreeData = function(data) {
      if (isCountRequired(this)) {
        data = getValue("result", data);
      }
      if (data instanceof Array && data.length > 0 && Object.prototype.hasOwnProperty.call(data[0], "level")) {
        this.flatData = data;
        var _loop_1 = function(i2, len2) {
          var rowData = this_1.flatData[parseInt(i2.toString(), 10)];
          setValue("uniqueIDCollection." + rowData["uniqueID"], rowData, this_1);
          if (rowData.level === 0 && !this_1.parentData.some(function(record) {
            return record.uniqueID === rowData.uniqueID;
          })) {
            this_1.parentData.push(rowData);
          }
        };
        var this_1 = this;
        for (var i = 0, len = this.flatData.length; i < len; i++) {
          _loop_1(i, len);
        }
      } else {
        if (isCountRequired(this)) {
          var griddata = getValue("result", this.dataSource);
          this.dataModule.convertToFlatData(griddata);
        } else {
          this.dataModule.convertToFlatData(data);
        }
      }
    };
    TreeGrid2.prototype.bindGridProperties = function() {
      this.bindedDataSource();
      this.grid.enableRtl = this.enableRtl;
      this.grid.allowKeyboard = this.allowKeyboard;
      this.grid.columns = this.getGridColumns(this.columns);
      this.grid.allowExcelExport = this.allowExcelExport;
      this.grid.allowPdfExport = this.allowPdfExport;
      this.grid.query = this.query;
      this.grid.columnQueryMode = this.columnQueryMode;
      this.grid.allowPaging = this.allowPaging;
      this.grid.pageSettings = getActualProperties(this.pageSettings);
      this.grid.pagerTemplate = this.pagerTemplate;
      this.grid.showColumnMenu = this.showColumnMenu;
      this.grid.allowSorting = this.allowSorting;
      this.grid.allowMultiSorting = this.allowMultiSorting;
      this.grid.allowFiltering = this.allowFiltering;
      this.grid.enableVirtualization = this.enableVirtualization;
      this.grid.enableColumnVirtualization = this.enableColumnVirtualization;
      this.grid.enableInfiniteScrolling = this.enableInfiniteScrolling;
      this.grid.infiniteScrollSettings = this.infiniteScrollSettings;
      this.grid.enableVirtualMaskRow = this.enableVirtualMaskRow;
      this.grid.loadingIndicator = this.loadingIndicator;
      this.grid.width = this.width;
      this.grid.height = this.height;
      this.grid.enableAltRow = this.enableAltRow;
      this.grid.allowReordering = this.allowReordering;
      this.grid.allowTextWrap = this.allowTextWrap;
      this.grid.allowResizing = this.allowResizing;
      this.grid.enableHover = this.enableHover;
      this.grid.enableAutoFill = this.enableAutoFill;
      this.grid.enableAdaptiveUI = this.enableAdaptiveUI;
      this.grid.enableImmutableMode = this.enableImmutableMode;
      this.grid.allowRowDragAndDrop = this.allowRowDragAndDrop;
      this.grid.rowDropSettings = getActualProperties(this.rowDropSettings);
      this.grid.rowHeight = this.rowHeight;
      this.grid.gridLines = this.gridLines;
      this.grid.allowSelection = this.allowSelection;
      this.grid.toolbar = getActualProperties(this.getGridToolbar());
      this.grid.toolbarTemplate = this.toolbarTemplate;
      this.grid.showColumnChooser = this.showColumnChooser;
      this.grid.columnChooserSettings = this.columnChooserSettings;
      this.grid.filterSettings = getActualProperties(this.filterSettings);
      this.grid.selectionSettings = getActualProperties(this.selectionSettings);
      this.grid.sortSettings = getActualProperties(this.sortSettings);
      this.grid.searchSettings = getActualProperties(this.searchSettings);
      this.grid.aggregates = getActualProperties(this.aggregates);
      this.grid.textWrapSettings = getActualProperties(this.textWrapSettings);
      this.grid.printMode = getActualProperties(this.printMode);
      this.grid.locale = getActualProperties(this.locale);
      this.grid.selectedRowIndex = this.selectedRowIndex;
      this.grid.contextMenuItems = getActualProperties(this.getContextMenu());
      this.grid.columnMenuItems = getActualProperties(this.columnMenuItems);
      this.grid.editSettings = this.getGridEditSettings();
      this.grid.rowTemplate = getActualProperties(this.rowTemplate);
      this.grid.detailTemplate = getActualProperties(this.detailTemplate);
      this.grid.frozenRows = this.frozenRows;
      this.grid.frozenColumns = this.frozenColumns;
      this.grid.clipMode = getActualProperties(this.clipMode);
      this.grid.enableColumnSpan = this.enableColumnSpan;
      this.grid.enableRowSpan = this.enableRowSpan;
      this.grid.enableSeamlessScrolling = this.enableSeamlessScrolling;
      var templateInstance = "templateDotnetInstance";
      this.grid["" + templateInstance] = this["" + templateInstance];
      var isJsComponent = "isJsComponent";
      this.grid["" + isJsComponent] = true;
      var enableHtmlSanitizer = "enableHtmlSanitizer";
      this.grid["" + enableHtmlSanitizer] = this.enableHtmlSanitizer;
      this.grid.enableStickyHeader = this.enableStickyHeader;
      this.grid.emptyRecordTemplate = this.emptyRecordTemplate;
      this.grid.isRowSelectable = this.isRowSelectable;
      var isTreeGrid = "isTreeGrid";
      this.grid["" + isTreeGrid] = true;
    };
    TreeGrid2.prototype.triggerEvents = function(args) {
      this.trigger(getObject("name", args), args);
    };
    TreeGrid2.prototype.IsExpandCollapseClicked = function(args) {
      if (!this.isFromChartSide && !isNullOrUndefined(args.target) && (args.target.classList.contains("e-treegridexpand") || args.target.classList.contains("e-treegridcollapse") || args.target.classList.contains("e-summarycell")) && !this.selectionSettings.checkboxOnly) {
        if (!isNullOrUndefined(args.data) && args.data["hasChildRecords"] || args.rowIndex !== -1 && isNullOrUndefined(args.data)) {
          args.cancel = true;
          return;
        }
      }
    };
    TreeGrid2.prototype.bindGridEvents = function() {
      var _this = this;
      this.grid.rowSelecting = function(args) {
        _this.IsExpandCollapseClicked(args);
        if (!isNullOrUndefined(args.data) && _this.selectionSettings.persistSelection && _this.columnModel.filter(function(col) {
          return col.type === "checkbox";
        }).length > 0 && isRemoteData(_this)) {
          if (!isNullOrUndefined(args.data.parentItem) || args.isHeaderCheckboxClicked) {
            _this.parentQuery = _this.query.queries.filter(function(q) {
              return q.e.field === _this.parentIdMapping;
            });
            _this.query.queries = _this.query.queries.slice(0, 0);
          }
        }
        if (_this.pageSettings.pageSizeMode === "Root") {
          _this.grid.selectionModule["totalRecordsCount"] = _this.grid.currentViewData.length;
        }
        if (!args.cancel) {
          _this.trigger(rowSelecting, args);
        }
      };
      this.grid.rowDeselecting = function(args) {
        _this.IsExpandCollapseClicked(args);
        if (!isNullOrUndefined(args.data) && _this.selectionSettings.persistSelection && _this.columnModel.filter(function(col) {
          return col.type === "checkbox";
        }).length > 0 && isRemoteData(_this)) {
          _this.parentQuery = _this.query.queries.filter(function(q) {
            return q.e.field === _this.parentIdMapping;
          });
          _this.query.queries = _this.query.queries.slice(0, 0);
        }
        _this.trigger(rowDeselecting, args);
      };
      this.grid.rowSelected = function(args) {
        if (_this.enableVirtualization) {
          _this.virtualScrollModule.updateSelection(args);
        }
        _this.selectedRowIndex = _this.grid.selectedRowIndex;
        _this.notify(rowSelected, args);
        _this.trigger(rowSelected, args);
      };
      this.grid.rowDeselected = function(args) {
        _this.selectedRowIndex = _this.grid.selectedRowIndex;
        if (!isNullOrUndefined(args.data)) {
          _this.notify(rowDeselected, args);
        }
        _this.trigger(rowDeselected, args);
      };
      this.grid.resizeStop = function(args) {
        _this.updateColumnModel();
        _this.trigger(resizeStop, args);
      };
      this.grid.excelQueryCellInfo = function(args) {
        _this.notify("excelCellInfo", args);
        args = _this.dataResults;
      };
      this.grid.excelAggregateQueryCellInfo = function(args) {
        _this.notify("excelAggregateCellInfo", args);
        args = _this.dataResults;
      };
      this.grid.pdfAggregateQueryCellInfo = function(args) {
        _this.notify("pdfAggregateCellInfo", args);
        args = _this.dataResults;
      };
      this.grid.pdfQueryCellInfo = function(args) {
        _this.notify("pdfCellInfo", args);
        args = _this.dataResults;
      };
      this.grid.checkBoxChange = function(args) {
        _this.trigger(checkboxChange, args);
      };
      this.grid.pdfExportComplete = this.triggerEvents.bind(this);
      this.grid.excelExportComplete = this.triggerEvents.bind(this);
      this.grid.excelHeaderQueryCellInfo = this.triggerEvents.bind(this);
      this.grid.pdfHeaderQueryCellInfo = this.triggerEvents.bind(this);
      this.grid.dataSourceChanged = this.triggerEvents.bind(this);
      this.grid.recordDoubleClick = this.triggerEvents.bind(this);
      this.grid.cellDeselected = this.triggerEvents.bind(this);
      this.grid.cellDeselecting = this.triggerEvents.bind(this);
      this.grid.columnMenuOpen = this.triggerEvents.bind(this);
      this.grid.columnMenuClick = this.triggerEvents.bind(this);
      this.grid.cellSelected = this.triggerEvents.bind(this);
      this.grid.headerCellInfo = this.triggerEvents.bind(this);
      this.grid.resizeStart = this.triggerEvents.bind(this);
      this.grid.resizing = this.triggerEvents.bind(this);
      this.grid.columnDrag = this.triggerEvents.bind(this);
      this.grid.columnDragStart = this.triggerEvents.bind(this);
      this.grid.columnDrop = this.triggerEvents.bind(this);
      this.grid.beforePrint = this.triggerEvents.bind(this);
      this.grid.beforeCopy = this.triggerEvents.bind(this);
      this.grid.beforePaste = function(args) {
        var rows = _this.getRows();
        var rowIndex = "rowIndex";
        while (rows[args["" + rowIndex]].classList.contains("e-summaryrow")) {
          args["" + rowIndex]++;
        }
        _this.trigger(beforePaste, args);
      };
      this.grid.load = function() {
        _this.grid.on("initial-end", _this.afterGridRender, _this);
        if (!isNullOrUndefined(_this.loggerModule)) {
          var loggerModule = "loggerModule";
          _this.loggerModule = _this.grid["" + loggerModule] = new Logger2(_this.grid);
        }
      };
      this.grid.printComplete = this.triggerEvents.bind(this);
      this.grid.actionFailure = function(args) {
        _this.trigger(actionFailure, args);
      };
      this.extendedGridDataBoundEvent();
      this.extendedGridEvents();
      this.extendedGridActionEvents();
      this.extendedGridEditEvents();
      this.bindGridDragEvents();
      this.bindCallBackEvents();
    };
    TreeGrid2.prototype.lastRowBorder = function(visiblerow, isAddBorder) {
      for (var j = 0; j < visiblerow.cells.length; j++) {
        if (isAddBorder) {
          addClass([visiblerow.cells[parseInt(j.toString(), 10)]], "e-lastrowcell");
        } else {
          removeClass([visiblerow.cells[parseInt(j.toString(), 10)]], "e-lastrowcell");
        }
      }
    };
    TreeGrid2.prototype.isPixelHeight = function() {
      if (this.height !== "auto" && this.height.toString().indexOf("%") === -1) {
        return true;
      } else {
        return false;
      }
    };
    TreeGrid2.prototype.extendedGridDataBoundEvent = function() {
      var _this = this;
      this.grid.dataBound = function(args) {
        _this.lastRowBorderEventListener();
        _this.updateRowTemplate();
        _this.updateColumnModel();
        _this.updateAltRow(_this.getRows());
        _this.notify("dataBoundArg", args);
        if (isRemoteData(_this) && !isOffline(_this) && !_this.hasChildMapping) {
          var req = void 0;
          if (_this.dataResults.result) {
            req = 0;
          } else {
            req = 1;
          }
          setValue("grid.contentModule.isLoaded", !(req > 0), _this);
        }
        if (_this.isPixelHeight() && _this.initialRender) {
          var rows = _this.getContentTable().rows;
          var totalRows = [].slice.call(rows);
          for (var i = totalRows.length - 1; i > 0; i--) {
            if (!isHidden(totalRows[parseInt(i.toString(), 10)])) {
              if (totalRows[parseInt(i.toString(), 10)].nextElementSibling) {
                _this.lastRowBorder(totalRows[parseInt(i.toString(), 10)], true);
              }
              break;
            }
          }
        }
        var action = "action";
        if (_this.enableVirtualization && _this.selectionSettings.persistSelection && (_this.dataResults["" + action] === "expand" || _this.dataResults["" + action] === "collapse")) {
          var refreshPersistSelection = "refreshPersistSelection";
          _this.grid.selectionModule["" + refreshPersistSelection]();
          if (_this.grid.selectionSettings.type === "Single") {
            var updateRowSelection = "updateRowSelection";
            var index = _this.getCurrentViewRecords().indexOf(_this.grid.selectionModule["data"]);
            _this.grid.selectionModule["" + updateRowSelection](_this.getRows()[parseInt(index.toString(), 10)], index);
          }
        }
        if (_this.enableVirtualization && _this.selectionSettings.persistSelection && !isNullOrUndefined(_this.virtualScrollModule.prevSelectedRecord)) {
          for (var i = 0; i < _this.virtualScrollModule.prevSelectedRecord.length; i++) {
            var updateRowSelection = "updateRowSelection";
            var index = (
              // eslint-disable-next-line max-len
              _this.getCurrentViewRecords().indexOf(_this.virtualScrollModule.prevSelectedRecord[parseInt(i.toString(), 10)])
            );
            _this.grid.selectionModule["" + updateRowSelection](_this.getRows()[parseInt(index.toString(), 10)], index);
          }
        }
        _this.trigger(dataBound, args);
        _this.initialRender = false;
      };
      var treeGrid = this;
      this.grid.beforeDataBound = function(args) {
        var dataSource = "dataSource";
        var requestType = getObject("action", args);
        if ((isRemoteData(treeGrid) && !isOffline(treeGrid) || isCountRequired(this)) && requestType !== "edit") {
          treeGrid.notify("updateRemoteLevel", args);
          args = treeGrid.dataResults;
        } else if (treeGrid.flatData.length === 0 && isOffline(treeGrid) && treeGrid.dataSource instanceof DataManager) {
          var dm = treeGrid.dataSource;
          treeGrid.dataModule.convertToFlatData(dm.dataSource.json);
          args.result = treeGrid.grid.dataSource["" + dataSource].json = treeGrid.flatData;
        }
        if (!isRemoteData(treeGrid) && !isCountRequired(this) && !isNullOrUndefined(treeGrid.dataSource)) {
          if (this.isPrinting) {
            setValue("isPrinting", true, args);
          }
          treeGrid.notify("dataProcessor", args);
        }
        extend(args, treeGrid.dataResults);
        if (treeGrid.enableImmutableMode) {
          args.result = args.result.slice();
        }
        if (treeGrid.initialRender) {
          this.contentModule.objectEqualityChecker = treeGrid.objectEqualityChecker;
        }
        if (!this.isPrinting) {
          var callBackPromise_1 = new Deferred();
          treeGrid.trigger(beforeDataBound, args, function(beforeDataBoundArgs) {
            callBackPromise_1.resolve(beforeDataBoundArgs);
          });
          return callBackPromise_1;
        }
      };
      this.grid.log = function(type, args) {
        if (_this.loggerModule) {
          _this.loggerModule.log(type, args);
        }
      };
    };
    TreeGrid2.prototype.lastRowBorderEventListener = function() {
      this.grid.on("last-rowcell-border-updated", this.lastRowCellBorderUpdated, this);
    };
    TreeGrid2.prototype.bindCallBackEvents = function() {
      var _this = this;
      this.grid.toolbarClick = function(args) {
        if (args.item.id === _this.grid.element.id + "_excelexport" && _this.allowExcelExport === false || args.item.id === _this.grid.element.id + "_pdfexport" && _this.allowPdfExport === false || args.item.id === _this.grid.element.id + "_csvexport" && _this.allowExcelExport === false) {
          return;
        }
        var callBackPromise = new Deferred();
        _this.trigger(toolbarClick, args, function(toolbarargs) {
          if (!toolbarargs.cancel) {
            _this.notify(toolbarClick, args);
          }
          callBackPromise.resolve(toolbarargs);
        });
        return callBackPromise;
      };
      this.grid.cellSelecting = function(args) {
        var actualTarget = "actualTarget";
        var target = _this.grid.selectionModule["" + actualTarget];
        if (!isNullOrUndefined(target) && (target.classList.contains("e-treegridexpand") || target.classList.contains("e-treegridcollapse"))) {
          args.cancel = true;
        }
        var callBackPromise = new Deferred();
        _this.trigger(getObject("name", args), args, function(cellselectingArgs) {
          callBackPromise.resolve(cellselectingArgs);
        });
        return callBackPromise;
      };
      this.grid.beginEdit = function(args) {
        if (!isNullOrUndefined(args.row) && args.row.classList.contains("e-summaryrow")) {
          args.cancel = true;
          return;
        }
        var callBackPromise = new Deferred();
        _this.trigger(beginEdit, args, function(begineditArgs) {
          callBackPromise.resolve(begineditArgs);
        });
        return callBackPromise;
      };
    };
    TreeGrid2.prototype.extendedGridEditEvents = function() {
      var _this = this;
      this.grid.dataStateChange = function(args) {
        if (_this.isExpandRefresh) {
          _this.isExpandRefresh = false;
          _this.grid.dataSource = { result: _this.flatData, count: getValue("count", _this.grid.dataSource) };
        } else {
          if (args.action.requestType !== "infiniteScroll") {
            _this.infiniteScrollData = [];
          }
          _this.trigger(dataStateChange, args);
        }
      };
      this.grid.cellSave = function(args) {
        if (_this.grid.isContextMenuOpen()) {
          var contextitems = _this.grid.contextMenuModule.contextMenu.element.getElementsByClassName("e-selected")[0];
          if (isNullOrUndefined(contextitems) || contextitems.id !== _this.element.id + "_gridcontrol_cmenu_Save") {
            args.cancel = true;
          }
        }
        var callBackPromise = new Deferred();
        _this.trigger(cellSave, args, function(cellsaveArgs) {
          if (!cellsaveArgs.cancel) {
            _this.notify(cellSave, cellsaveArgs);
          }
          callBackPromise.resolve(cellsaveArgs);
        });
        return callBackPromise;
      };
      this.grid.cellSaved = function(args) {
        _this.trigger(cellSaved, args);
        _this.notify(cellSaved, args);
      };
      this.grid.cellEdit = function(args) {
        var prom = "promise";
        var promise = new Deferred();
        args["" + prom] = promise;
        _this.notify(cellEdit, args);
        return promise;
      };
      this.grid.batchAdd = function(args) {
        _this.trigger(batchAdd, args);
        _this.notify(batchAdd, args);
      };
      this.grid.beforeBatchSave = function(args) {
        _this.trigger(beforeBatchSave, args);
        _this.notify(beforeBatchSave, args);
      };
      this.grid.beforeBatchAdd = function(args) {
        _this.trigger(beforeBatchAdd, args);
        _this.notify(beforeBatchAdd, args);
      };
      this.grid.batchDelete = function(args) {
        _this.trigger(batchDelete, args);
        _this.notify(batchDelete, args);
      };
      this.grid.beforeBatchDelete = function(args) {
        _this.trigger(beforeBatchDelete, args);
        _this.notify(beforeBatchDelete, args);
      };
      this.grid.batchCancel = function(args) {
        if (_this.editSettings.mode !== "Cell") {
          _this.trigger(batchCancel, args);
        }
        _this.notify(batchCancel, args);
      };
    };
    TreeGrid2.prototype.updateRowTemplate = function() {
      var _this = this;
      if (this.rowTemplate) {
        if (this.isReact && this.getContentTable().rows.length === 0) {
          setTimeout(function() {
            _this.treeColumnRowTemplate();
            if (_this.enableCollapseAll) {
              var currentData = _this.getCurrentViewRecords();
              var rows = _this.getContentTable().rows;
              for (var i = 0; i < rows.length; i++) {
                var args = {
                  data: currentData[parseInt(i.toString(), 10)],
                  row: rows[parseInt(i.toString(), 10)]
                };
                _this.renderModule.RowModifier(args);
              }
            }
          }, 0);
        } else {
          this.treeColumnRowTemplate();
        }
      }
    };
    TreeGrid2.prototype.bindedDataSource = function() {
      var dataSource = "dataSource";
      var isDataAvailable = "isDataAvailable";
      var adaptor = "adaptor";
      var ready = "ready";
      if (this.dataSource && isCountRequired(this)) {
        var data = this.flatData;
        var datacount = getValue("count", this.dataSource);
        this.grid.dataSource = { result: data, count: datacount };
      } else {
        this.grid.dataSource = !(this.dataSource instanceof DataManager) ? this.flatData : new DataManager(this.dataSource.dataSource, this.dataSource.defaultQuery, this.dataSource.adaptor, this.hasPreAndPostMiddleware(this.dataSource) ? this.dataSource : void 0);
      }
      if (this.dataSource instanceof DataManager && (this.dataSource.dataSource.offline || this.dataSource.ready)) {
        this.grid.dataSource["" + dataSource].json = extendArray(this.dataSource["" + dataSource].json);
        this.grid.dataSource["" + ready] = this.dataSource.ready;
        var proxy_1 = this;
        if (!isNullOrUndefined(this.grid.dataSource["" + ready])) {
          this.grid.dataSource["" + ready].then(function(e) {
            var dm = proxy_1.grid.dataSource;
            dm["" + dataSource].offline = true;
            dm["" + isDataAvailable] = true;
            dm["" + dataSource].json = e.result;
            dm["" + adaptor] = new JsonAdaptor();
          });
        }
      }
    };
    TreeGrid2.prototype.extendedGridActionEvents = function() {
      var _this = this;
      this.grid.actionBegin = function(args) {
        if (args.requestType === "sorting" && args.target && args.target.parentElement && args.target.parentElement.classList.contains("e-hierarchycheckbox")) {
          args.cancel = true;
          return;
        }
        var requestType = getObject("requestType", args);
        if (requestType === "reorder") {
          _this.notify("getColumnIndex", {});
        }
        if (isRemoteData(_this) && _this.enableVirtualization) {
          if (args.requestType === "virtualscroll") {
            _this.query.expand("VirtualScrollingAction");
            _this.showSpinner();
          } else if (args.requestType === "searching" && args.searchString === "") {
            _this.query.expand("ClearSearchingAction");
          } else if (args.action === "clearFilter") {
            _this.query.expand("ClearFilteringAction");
          }
        }
        _this.notify("actionBegin", { editAction: args });
        if (!isRemoteData(_this) && !isNullOrUndefined(_this.filterModule) && !isCountRequired(_this) && (_this.grid.filterSettings.columns.length === 0 && _this.grid.searchSettings.key.length === 0)) {
          _this.notify("clearFilters", { flatData: _this.grid.dataSource });
          _this.grid.setProperties({ dataSource: _this.dataResults.result }, true);
          if (isNullOrUndefined(_this.grid["changedProperties"].dataSource)) {
            _this.grid.renderModule.data.dataManager = _this.grid.dataSource instanceof DataManager ? _this.grid.dataSource : isNullOrUndefined(_this.grid.dataSource) ? new DataManager() : new DataManager(_this.grid.dataSource);
            _this.grid.renderModule.data.isQueryInvokedFromData = true;
            _this.grid.query = _this.grid.query instanceof Query ? _this.grid.query : new Query();
          }
        }
        if (_this.action !== "indenting" && _this.action !== "outdenting") {
          var callBackPromise_2 = new Deferred();
          _this.trigger(actionBegin, args, function(actionArgs) {
            if (!actionArgs.cancel) {
              _this.notify(beginEdit, actionArgs);
            }
            callBackPromise_2.resolve(actionArgs);
          });
          return callBackPromise_2;
        }
      };
      this.grid.actionComplete = function(args) {
        _this.notify("actioncomplete", args);
        _this.updateColumnModel();
        _this.updateTreeGridModel();
        if (args.requestType === "reorder") {
          _this.notify("setColumnIndex", {});
        }
        _this.notify("actionComplete", { editAction: args });
        if (args.requestType === "add" && (_this.editSettings.newRowPosition !== "Top" && _this.editSettings.newRowPosition !== "Bottom")) {
          _this.notify(beginAdd, args);
        }
        if (args.requestType === "batchsave") {
          _this.notify(batchSave, args);
        }
        _this.notify("updateGridActions", args);
        _this.isVirtualExpandCollapse = false;
        if (args.requestType === "save" && _this.aggregates.some(function(ag) {
          return ag.showChildSummary === true;
        })) {
          _this.grid.refresh();
        }
        if ((args.action === "clearFilter" || args.action === "clear-filter" || args.requestType === "sorting") && _this.enableInfiniteScrolling) {
          _this.expandAll();
        }
        if (_this.action === "indenting" || _this.action === "outdenting") {
          _this.action = _this.action === "indenting" ? "indented" : "outdented";
          var selectedItem_1 = [_this.selectedRecords];
          var actionArgs = {
            data: selectedItem_1,
            dropIndex: _this.dropIndex,
            dropPosition: _this.dropPosition,
            modifiedRecords: _this.modifiedRecords,
            requestType: _this.action,
            row: _this.selectedRows
          };
          _this.trigger(actionComplete, actionArgs);
          var currentPageItem = _this.getCurrentViewRecords().filter(function(e) {
            return e.uniqueID === selectedItem_1[0].uniqueID;
          });
          if (!currentPageItem.length) {
            _this.refreshToolbarItems();
          }
          _this.action = "";
          _this.selectedRecords = _this.selectedRows = _this.modifiedRecords = [];
        } else {
          if (_this.grid.isFrozenGrid() && _this.enableVirtualization && args["tableName"] === "movable") {
            var movableContent2 = _this.grid.element.querySelector("." + movableContent);
            var frozenContent2 = _this.grid.element.querySelector("." + frozenContent);
            movableContent2.style.height = frozenContent2.style.height = "auto";
          }
          _this.trigger(actionComplete, args);
        }
      };
    };
    TreeGrid2.prototype.extendedGridEvents = function() {
      var _this = this;
      var treeGrid = this;
      this.grid.recordDoubleClick = function(args) {
        _this.trigger(recordDoubleClick, args);
        _this.notify(recordDoubleClick, args);
      };
      this.grid.detailDataBound = function(args) {
        _this.notify("detaildataBound", args);
        _this.trigger(detailDataBound, args);
      };
      this.grid.rowDataBound = function(args) {
        if (isNullOrUndefined(this.isPrinting)) {
          setValue("isPrinting", false, args);
        } else {
          setValue("isPrinting", this.isPrinting, args);
        }
        treeGrid.renderModule.RowModifier(args);
      };
      this.grid.queryCellInfo = function(args) {
        if (isNullOrUndefined(this.isPrinting)) {
          setValue("isPrinting", false, args);
        } else {
          setValue("isPrinting", this.isPrinting, args);
        }
        treeGrid.renderModule.cellRender(args);
      };
      this.grid.contextMenuClick = function(args) {
        _this.notify(contextMenuClick, args);
        _this.trigger(contextMenuClick, args);
      };
      this.grid.contextMenuOpen = function(args) {
        _this.notify(contextMenuOpen, args);
        _this.trigger(contextMenuOpen, args);
      };
      this.grid.queryCellInfo = function(args) {
        _this.renderModule.cellRender(args);
      };
    };
    TreeGrid2.prototype.bindGridDragEvents = function() {
      var _this = this;
      this.grid.rowDragStartHelper = function(args) {
        _this.trigger(rowDragStartHelper, args);
      };
      this.grid.rowDragStart = function(args) {
        _this.trigger(rowDragStart, args);
      };
      this.grid.rowDrag = function(args) {
        if (_this.grid.isEdit) {
          args.cancel = true;
          return;
        }
        _this.notify(rowdraging, args);
        _this.trigger(rowDrag, args);
      };
      this.grid.rowDrop = function(args) {
        if (_this.grid.isEdit) {
          args.cancel = true;
          return;
        }
        _this.notify(rowDropped, args);
        args.cancel = true;
      };
    };
    TreeGrid2.prototype.loadGrid = function() {
      this.bindGridProperties();
      this.bindGridEvents();
      setValue("registeredTemplate", this.registeredTemplate, this.grid);
      var ref = "viewContainerRef";
      setValue("viewContainerRef", this["" + ref], this.grid);
    };
    TreeGrid2.prototype.autoGenerateColumns = function() {
      var _this = this;
      if (!this.columns.length && (!this.dataModule.isRemote() && Object.keys(this.dataSource).length)) {
        this.columns = [];
        var record = this.dataSource[0];
        var keys = Object.keys(record);
        this.columns = keys.filter(function(key) {
          return [_this.childMapping, _this.parentIdMapping].indexOf(key) === -1;
        });
      }
    };
    TreeGrid2.prototype.getGridEditSettings = function() {
      var edit = {};
      var guid = "guid";
      edit.allowAdding = this.editSettings.allowAdding;
      edit.allowEditing = this.editSettings.allowEditing;
      edit.allowDeleting = this.editSettings.allowDeleting;
      edit.newRowPosition = this.editSettings.newRowPosition === "Bottom" ? "Bottom" : "Top";
      edit.allowEditOnDblClick = this.editSettings.allowEditOnDblClick;
      edit.showConfirmDialog = this.editSettings.showConfirmDialog;
      edit.template = this.editSettings.template;
      edit.showDeleteConfirmDialog = this.editSettings.showDeleteConfirmDialog;
      edit.allowNextRowEdit = this.editSettings.allowNextRowEdit;
      edit["" + guid] = this.editSettings["" + guid];
      edit.dialog = this.editSettings.dialog;
      switch (this.editSettings.mode) {
        case "Dialog":
          edit.mode = this.editSettings.mode;
          break;
        case "Batch":
          edit.mode = this.editSettings.mode;
          break;
        case "Row":
          edit.mode = "Normal";
          break;
        case "Cell":
          edit.mode = "Normal";
          edit.showConfirmDialog = false;
          break;
      }
      return edit;
    };
    TreeGrid2.prototype.getContextMenu = function() {
      if (this.contextMenuItems) {
        var items = [];
        for (var i = 0; i < this.contextMenuItems.length; i++) {
          switch (this.contextMenuItems[parseInt(i.toString(), 10)]) {
            case "AddRow":
            case ContextMenuItems.AddRow:
              items.push({
                text: this.l10n.getConstant("AddRow"),
                target: ".e-content",
                id: this.element.id + "_gridcontrol_cmenu_AddRow",
                items: [{ text: this.l10n.getConstant("Above"), id: "Above" }, { text: this.l10n.getConstant("Below"), id: "Below" }, { text: this.l10n.getConstant("Child"), id: "Child" }]
              });
              break;
            case "Indent":
            case ContextMenuItems.RowIndent:
              items.push({
                text: this.l10n.getConstant("RowIndent"),
                target: ".e-content",
                iconCss: "e-indent e-icons",
                id: this.element.id + "_gridcontrol_cmenu_Indent"
              });
              break;
            case "Outdent":
            case ContextMenuItems.RowOutdent:
              items.push({
                text: this.l10n.getConstant("RowOutdent"),
                target: ".e-content",
                iconCss: "e-outdent e-icons",
                id: this.element.id + "_gridcontrol_cmenu_Outdent"
              });
              break;
            default:
              items.push(this.contextMenuItems[parseInt(i.toString(), 10)]);
          }
        }
        return items;
      } else {
        return null;
      }
    };
    TreeGrid2.prototype.getGridToolbar = function() {
      if (this.toolbar) {
        this.l10n = new L10n("treegrid", this.defaultLocale, this.locale);
        var items = [];
        var tooltipText = void 0;
        for (var i = 0; i < this.toolbar.length; i++) {
          switch (this.toolbar[parseInt(i.toString(), 10)]) {
            case "Search":
            case ToolbarItem.Search:
              items.push("Search");
              break;
            case "Print":
            case ToolbarItem.Print:
              items.push("Print");
              break;
            case "ExpandAll":
            case ToolbarItem.ExpandAll:
              tooltipText = this.l10n.getConstant("ExpandAll");
              items.push({
                text: tooltipText,
                tooltipText,
                prefixIcon: "e-expand",
                id: this.element.id + "_gridcontrol_expandall"
              });
              break;
            case "CollapseAll":
            case ToolbarItem.CollapseAll:
              tooltipText = this.l10n.getConstant("CollapseAll");
              items.push({
                text: tooltipText,
                tooltipText,
                prefixIcon: "e-collapse",
                id: this.element.id + "_gridcontrol_collapseall"
              });
              break;
            case "Indent":
            case ToolbarItem.RowIndent:
              tooltipText = this.l10n.getConstant("RowIndent");
              items.push({
                text: tooltipText,
                tooltipText,
                prefixIcon: "e-indent",
                id: this.element.id + "_gridcontrol_indent"
              });
              break;
            case "Outdent":
            case ToolbarItem.RowOutdent:
              tooltipText = this.l10n.getConstant("RowOutdent");
              items.push({
                text: tooltipText,
                tooltipText,
                prefixIcon: "e-outdent",
                id: this.element.id + "_gridcontrol_outdent"
              });
              break;
            default:
              items.push(this.toolbar[parseInt(i.toString(), 10)]);
          }
        }
        return items;
      } else {
        return null;
      }
    };
    TreeGrid2.prototype.getGridColumns = function(columns, isEmptyColumnModel, index) {
      if (isEmptyColumnModel === void 0) {
        isEmptyColumnModel = true;
      }
      if (index === void 0) {
        index = 0;
      }
      var column = columns;
      var stackedColumn = "columns";
      if (isEmptyColumnModel) {
        this.columnModel = [];
      }
      var treeGridColumn;
      var gridColumn;
      if (this.columnModel.length === 0) {
        index = index === 0 ? -1 : index;
      }
      var gridColumnCollection = [];
      for (var i = 0; i < column.length; i++) {
        index = index + 1;
        var treeColumn = this.grid.getColumnByUid(column[parseInt(i.toString(), 10)].uid);
        gridColumn = treeColumn ? treeColumn : {};
        treeGridColumn = {};
        if (typeof this.columns[parseInt(i.toString(), 10)] === "string") {
          gridColumn.field = treeGridColumn.field = this.columns[parseInt(i.toString(), 10)];
        } else {
          var columnProps = Object.keys(column[parseInt(i.toString(), 10)]);
          for (var j = 0; j < columnProps.length; j++) {
            var prop = columnProps[parseInt(j.toString(), 10)];
            if (index === this.treeColumnIndex && prop === "template") {
              treeGridColumn["" + prop] = column[parseInt(i.toString(), 10)]["" + prop];
            } else if (prop === "columns" && !isNullOrUndefined(column[parseInt(i.toString(), 10)]["" + prop])) {
              gridColumn["" + prop] = this.getGridColumns(column[parseInt(i.toString(), 10)]["" + prop], false, this.columnModel.length - 1);
              treeGridColumn["" + prop] = column[parseInt(i.toString(), 10)]["" + prop];
            } else if (this.initialRender && !isNullOrUndefined(treeColumn) && this.enablePersistence && prop === "edit") {
              gridColumn["" + prop] = treeGridColumn["" + prop] = treeColumn["" + prop];
            } else if (!treeColumn || prop !== "sortComparer") {
              gridColumn["" + prop] = treeGridColumn["" + prop] = column[parseInt(i.toString(), 10)]["" + prop];
            }
          }
        }
        if (!treeGridColumn["" + stackedColumn]) {
          this.columnModel.push(new Column(treeGridColumn));
        }
        gridColumnCollection.push(gridColumn);
        if (!isNullOrUndefined(this.columnModel[this.treeColumnIndex]) && this.enableRtl) {
          if (gridColumn.field === this.columnModel[this.treeColumnIndex].field) {
            if (isNullOrUndefined(this.treeColumnTextAlign)) {
              this.treeColumnTextAlign = this.columnModel[this.treeColumnIndex].textAlign;
              this.treeColumnField = this.columnModel[this.treeColumnIndex].field;
            }
            gridColumn.textAlign = "Right";
          }
        }
      }
      return gridColumnCollection;
    };
    TreeGrid2.prototype.lastRowCellBorderUpdated = function() {
      var rows = this.getContentTable().querySelectorAll("tr.e-row");
      var visibleRows = Array.from(rows).filter(function(row) {
        return !row.classList.contains("e-childrow-hidden");
      });
      if (visibleRows.length > 0) {
        var lastVisibleRow = visibleRows[visibleRows.length - 1];
        this.lastRowBorder(lastVisibleRow, true);
      }
    };
    TreeGrid2.prototype.onPropertyChanged = function(newProp) {
      var properties = Object.keys(newProp);
      var requireRefresh = false;
      for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var prop = properties_1[_i];
        switch (prop) {
          case "columns":
            if (!isNullOrUndefined(newProp.columns)) {
              this.refreshColumns();
            }
            requireRefresh = true;
            break;
          case "treeColumnIndex":
            this.grid.refreshColumns();
            break;
          case "allowPaging":
            this.grid.allowPaging = this.allowPaging;
            break;
          case "pageSettings":
            this.grid.pageSettings = getActualProperties(this.pageSettings);
            requireRefresh = true;
            break;
          case "enableVirtualization":
            this.grid.enableVirtualization = this.enableVirtualization;
            break;
          case "enableColumnVirtualization":
            this.grid.enableColumnVirtualization = this.enableColumnVirtualization;
            break;
          case "toolbar":
            this.grid.toolbar = this.getGridToolbar();
            break;
          case "allowSelection":
            this.grid.allowSelection = this.allowSelection;
            break;
          case "selectionSettings":
            this.grid.selectionSettings = getActualProperties(this.selectionSettings);
            break;
          case "allowSorting":
            this.grid.allowSorting = this.allowSorting;
            break;
          case "allowMultiSorting":
            this.grid.allowMultiSorting = this.allowMultiSorting;
            break;
          case "sortSettings":
            this.grid.sortSettings = getActualProperties(this.sortSettings);
            break;
          case "searchSettings":
            this.grid.searchSettings = getActualProperties(this.searchSettings);
            break;
          case "allowFiltering":
            this.grid.allowFiltering = this.allowFiltering;
            break;
          case "filterSettings":
            if (!this.initialRender) {
              this.grid.filterSettings = getActualProperties(this.filterSettings);
            }
            break;
          case "showColumnMenu":
            this.grid.showColumnMenu = this.showColumnMenu;
            break;
          case "allowRowDragAndDrop":
            this.grid.allowRowDragAndDrop = this.allowRowDragAndDrop;
            break;
          case "aggregates":
            this.grid.aggregates = getActualProperties(this.aggregates);
            break;
          case "enableInfiniteScrolling":
            this.grid.enableInfiniteScrolling = this.enableInfiniteScrolling;
            break;
          case "dataSource":
            this.isLocalData = !(this.dataSource instanceof DataManager) || !isNullOrUndefined(this.dataSource.ready) || this.dataSource.adaptor instanceof RemoteSaveAdaptor;
            this.convertTreeData(this.dataSource);
            if (this.isLocalData) {
              if (isCountRequired(this)) {
                var count = getValue("count", this.dataSource);
                this.grid.dataSource = { result: this.flatData, count };
              } else {
                var data = this.dataSource;
                this.grid.dataSource = !(data instanceof DataManager) ? this.flatData : new DataManager(data.dataSource, data.defaultQuery, data.adaptor);
              }
              if (this.enableVirtualization) {
                this.grid.contentModule.isDataSourceChanged = true;
              }
            } else {
              this.bindedDataSource();
              if (this.enableVirtualization) {
                this.grid.contentModule.removeEventListener();
                this.grid.contentModule.eventListener("on");
                this.grid.contentModule.renderTable();
              }
            }
            break;
          case "query":
            this.grid.query = this.query;
            break;
          case "enableCollapseAll":
            if (newProp["" + prop]) {
              this.collapseAll();
            } else {
              this.expandAll();
            }
            break;
          case "expandStateMapping":
            this.grid.refresh();
            break;
          case "gridLines":
            this.grid.gridLines = this.gridLines;
            break;
          case "rowTemplate":
            this.grid.rowTemplate = getActualProperties(this.rowTemplate);
            break;
          case "frozenRows":
            this.grid.frozenRows = this.frozenRows;
            break;
          case "frozenColumns":
            this.grid.frozenColumns = this.frozenColumns;
            break;
          case "rowHeight":
            this.grid.rowHeight = this.rowHeight;
            this.refresh();
            break;
          case "height":
            if (!isNullOrUndefined(this.height) && typeof this.height === "string" && this.height.indexOf("%") !== -1) {
              this.element.style.height = this.height;
            }
            this.grid.height = this.height;
            break;
          case "width":
            if (!isNullOrUndefined(this.width) && typeof this.width === "string" && this.width.indexOf("%") !== -1) {
              this.element.style.width = this.width;
            }
            this.grid.width = this.width;
            break;
          case "locale":
            this.grid.locale = this.locale;
            this.TreeGridLocale();
            this.grid.toolbar = this.getGridToolbar();
            this.grid.contextMenuItems = this.getContextMenu();
            break;
          case "selectedRowIndex":
            this.grid.selectedRowIndex = this.selectedRowIndex;
            break;
          case "enableAltRow":
            this.grid.enableAltRow = this.enableAltRow;
            break;
          case "enableHover":
            this.grid.enableHover = this.enableHover;
            break;
          case "enableAutoFill":
            this.grid.enableAutoFill = this.enableAutoFill;
            break;
          case "columnChooserSettings":
            this.grid.columnChooserSettings = getActualProperties(this.columnChooserSettings);
            break;
          case "enableAdaptiveUI":
            this.grid.enableAdaptiveUI = this.enableAdaptiveUI;
            break;
          case "enableImmutableMode":
            this.grid.enableImmutableMode = this.enableImmutableMode;
            break;
          case "allowExcelExport":
            this.grid.allowExcelExport = this.allowExcelExport;
            break;
          case "allowPdfExport":
            this.grid.allowPdfExport = this.allowPdfExport;
            break;
          case "enableRtl":
            if (!isNullOrUndefined(this.treeColumnField)) {
              this.updateTreeColumnTextAlign();
            }
            this.grid.enableRtl = this.enableRtl;
            break;
          case "allowReordering":
            this.grid.allowReordering = this.allowReordering;
            break;
          case "allowResizing":
            this.grid.allowResizing = this.allowResizing;
            break;
          case "textWrapSettings":
            this.grid.textWrapSettings = getActualProperties(this.textWrapSettings);
            break;
          case "allowTextWrap":
            this.grid.allowTextWrap = getActualProperties(this.allowTextWrap);
            this.grid.refresh();
            break;
          case "contextMenuItems":
            this.grid.contextMenuItems = this.getContextMenu();
            break;
          case "showColumnChooser":
            this.grid.showColumnChooser = this.showColumnChooser;
            break;
          case "detailTemplate":
            this.grid.detailTemplate = getActualProperties(this.detailTemplate);
            break;
          case "columnMenuItems":
            this.grid.columnMenuItems = getActualProperties(this.columnMenuItems);
            break;
          case "enableStickyHeader":
            this.grid.enableStickyHeader = this.enableStickyHeader;
            break;
          case "emptyRecordTemplate":
            this.grid.emptyRecordTemplate = this.emptyRecordTemplate;
            break;
          case "isRowSelectable":
            this.grid.isRowSelectable = this.isRowSelectable;
            break;
          case "editSettings":
            if (this.grid.isEdit && this.grid.editSettings.mode === "Normal" && newProp["" + prop].mode && (newProp["" + prop].mode === "Cell" || newProp["" + prop].mode === "Row")) {
              this.grid.closeEdit();
            }
            this.grid.editSettings = this.getGridEditSettings();
            break;
          case "enableRowSpan":
          case "enableColumnSpan":
            this.grid.enableRowSpan = this.enableRowSpan;
            this.grid.enableColumnSpan = this.enableColumnSpan;
            this.refreshColumns();
            break;
        }
      }
      if (requireRefresh) {
        if (this.isFrozenGrid()) {
          this.refreshLayout();
        } else {
          this.grid.refresh();
        }
      }
    };
    TreeGrid2.prototype.updateTreeColumnTextAlign = function() {
      var gridColumn = this.grid.getColumnByField(this.treeColumnField);
      gridColumn.textAlign = this.enableRtl ? "Right" : this.treeColumnTextAlign;
      this.grid.refreshColumns();
    };
    TreeGrid2.prototype.destroy = function() {
      this.isComponentRefresh = true;
      var treeGridElement = this.element;
      if (!treeGridElement) {
        return;
      }
      var hasTreeGridChild = treeGridElement.querySelector(".e-gridheader") && treeGridElement.querySelector(".e-gridcontent") ? true : false;
      if (hasTreeGridChild) {
        this.unwireEvents();
      }
      this.removeListener();
      if (this.dataModule) {
        this.dataModule.destroy();
      }
      if (this.grid) {
        this.grid.dataSource = null;
        this.grid.destroy();
      }
      if (hasTreeGridChild) {
        _super.prototype.destroy.call(this);
      }
      this.infiniteScrollData = null;
      this.remoteCollapsedData = null;
      this.remoteExpandedData = null;
      this.parentData = null;
      var modules = [
        "dataModule",
        "sortModule",
        "renderModule",
        "filterModule",
        "printModule",
        "clipboardModule",
        "excelExportModule",
        "pdfExportModule",
        "toolbarModule",
        "summaryModule",
        "reorderModule",
        "resizeModule",
        "pagerModule",
        "keyboardModule",
        "columnMenuModule",
        "contextMenuModule",
        "editModule",
        "virtualScrollModule",
        "selectionModule",
        "detailRow",
        "rowDragAndDropModule",
        "freezeModule"
      ];
      for (var i = 0; i < modules.length; i++) {
        if (this[modules[parseInt(i.toString(), 10)]]) {
          this[modules[parseInt(i.toString(), 10)]] = null;
        }
      }
      this.dataResults = null;
      this.uniqueIDCollection = {};
      this.uniqueIDFilterCollection = {};
      this.element.innerHTML = "";
      this.grid = null;
    };
    TreeGrid2.prototype.dataBind = function() {
      if (isNullOrUndefined(this.grid)) {
        return;
      }
      if (!isNullOrUndefined(this.rowDropSettings.targetID) && isNullOrUndefined(document.getElementById(this.grid.rowDropSettings.targetID))) {
        document.getElementById(this.rowDropSettings.targetID).id = this.grid.rowDropSettings.targetID;
        this.rowDropSettings.targetID = this.grid.rowDropSettings.targetID;
      }
      _super.prototype.dataBind.call(this);
      this.grid.dataBind();
    };
    TreeGrid2.prototype.getPersistData = function() {
      var keyEntity = [
        "pageSettings",
        "sortSettings",
        "filterSettings",
        "columns",
        "searchSettings",
        "selectedRowIndex",
        "treeColumnIndex",
        "scrollPosition"
      ];
      var ignoreOnPersist = {
        pageSettings: ["template", "pageSizes", "pageSizeMode", "enableQueryString", "totalRecordsCount", "pageCount"],
        filterSettings: ["type", "mode", "showFilterBarStatus", "immediateModeDelay", "ignoreAccent", "hierarchyMode"],
        searchSettings: ["fields", "operator", "ignoreCase"],
        sortSettings: [],
        columns: [],
        selectedRowIndex: [],
        scrollPosition: []
      };
      var ignoreOnColumn = [
        "filter",
        "edit",
        "filterBarTemplate",
        "headerTemplate",
        "template",
        "commandTemplate",
        "commands",
        "dataSource"
      ];
      for (var i = 0; i < keyEntity.length; i++) {
        var currentObject = this[keyEntity[parseInt(i.toString(), 10)]];
        for (var k = 0, val = ignoreOnPersist[keyEntity[parseInt(i.toString(), 10)]]; !isNullOrUndefined(val) && k < val.length; k++) {
          var objVal = val[parseInt(k.toString(), 10)];
          delete currentObject["" + objVal];
        }
      }
      this.ignoreInArrays(ignoreOnColumn, this.columns);
      return this.addOnPersist(keyEntity);
    };
    TreeGrid2.prototype.ignoreInArrays = function(ignoreOnColumn, columns) {
      for (var i = 0; i < columns.length; i++) {
        if (columns[parseInt(i.toString(), 10)].columns) {
          this.ignoreInColumn(ignoreOnColumn, columns[parseInt(i.toString(), 10)]);
          this.ignoreInArrays(ignoreOnColumn, columns[parseInt(i.toString(), 10)].columns);
        } else {
          this.ignoreInColumn(ignoreOnColumn, columns[parseInt(i.toString(), 10)]);
        }
      }
    };
    TreeGrid2.prototype.ignoreInColumn = function(ignoreOnColumn, column) {
      if (isNullOrUndefined(column.template)) {
        for (var i = 0; i < ignoreOnColumn.length; i++) {
          delete column[ignoreOnColumn[parseInt(i.toString(), 10)]];
          column.filter = {};
        }
      }
    };
    TreeGrid2.prototype.mouseClickHandler = function(e) {
      var _this = this;
      if (!isNullOrUndefined(e.touches)) {
        return;
      }
      var target = e.target;
      if ((target.classList.contains("e-treegridexpand") || target.classList.contains("e-treegridcollapse")) && (!this.isEditCollapse && !this.grid.isEdit)) {
        this.expandCollapseRequest(target);
      }
      var isEllipsisTooltip = "isEllipsisTooltip";
      if ((target.classList.contains("e-treegridexpand") || target.classList.contains("e-treegridcollapse")) && this.grid["" + isEllipsisTooltip]()) {
        this.grid["toolTipObj"].close();
      }
      this.isEditCollapse = false;
      this.notify("checkboxSelection", { target });
      if (this.grid.isCheckBoxSelection && !this.grid.isPersistSelection) {
        if (this.aggregates.map(function(ag) {
          return ag.showChildSummary === true;
        }).length) {
          var checkedTarget = this.grid.getHeaderContent().querySelector(".e-checkselectall");
          var checkedLen = this.grid.getSelectedRowIndexes().length;
          var totalRecords = this.getCurrentViewRecords().length;
          if (totalRecords > 0 && checkedLen === totalRecords) {
            var spanEle = checkedTarget.nextElementSibling;
            removeClass([spanEle], ["e-stop", "e-uncheck"]);
            addClass([spanEle], ["e-check"]);
          }
        }
      }
      if ((target.classList.contains("e-flmenu-cancelbtn") || target.classList.contains("e-flmenu-okbtn") || target.classList.contains("e-content") || target.classList.contains("e-rowcell")) && !isNullOrUndefined(this.grid.filterModule) && this.isReact) {
        if (!isNullOrUndefined(this.grid.filterModule["column"])) {
          if (this.grid.filterModule["column"].filterTemplate) {
            var elem = document.getElementById(this.grid.filterModule.filterModule["dlgObj"].element.id);
            this.grid.filterModule["fltrDlgDetails"].isOpen = false;
            if (this.grid.filterModule.filterModule["dlgObj"] && !this.grid.filterModule.filterModule["dlgObj"].isDestroyed && elem) {
              this.clearTemplate(["filterTemplate"], void 0, function() {
                _this.grid.filterModule.filterModule["dlgObj"].destroy();
              });
            }
          }
        }
      }
    };
    TreeGrid2.prototype.getData = function(args) {
      var dataObj = isCountRequired(this) ? getValue("result", this.grid.dataSource) : this.grid.dataSource;
      var results = dataObj instanceof DataManager ? dataObj.dataSource.json : dataObj;
      var gridQuery = !isNullOrUndefined(args) && args.query ? args.query : this.getDataModule().baseModule.generateQuery();
      var filterQuery;
      var searchQuery;
      if (!isNullOrUndefined(gridQuery)) {
        filterQuery = gridQuery.queries.filter(function(q) {
          return q.fn === "onWhere";
        });
        searchQuery = gridQuery.queries.filter(function(q) {
          return q.fn === "onSearch";
        });
      }
      var skipFilterSearch = !isNullOrUndefined(args) && args.isSort;
      if (!skipFilterSearch && (this.grid.allowFiltering && this.grid.filterSettings.columns.length) || this.grid.searchSettings.key.length > 0 && !isNullOrUndefined(gridQuery) || (filterQuery && filterQuery.length > 0 || searchQuery && searchQuery.length > 0)) {
        var filterQuery_1 = gridQuery.queries.filter(function(q) {
          return q.fn === "onWhere";
        });
        var searchQuery_1 = gridQuery.queries.filter(function(q) {
          return q.fn === "onSearch";
        });
        var query = new Query();
        query.queries = filterQuery_1.concat(searchQuery_1);
        var filteredData = new DataManager(results).executeLocal(query);
        this.notify("updateFilterRecs", { data: filteredData });
        results = isRemoteData(this) ? this.dataResults : this.filterModule.filteredResult;
        if (!isNullOrUndefined(args) && args.isFilter) {
          return isRemoteData(this) ? results.result.filter(function(item) {
            return !item.isSummaryRow;
          }) : results.filter(function(item) {
            return !item.isSummaryRow;
          });
        }
      }
      var sortQuery = gridQuery.queries.filter(function(q) {
        return q.fn === "onSortBy";
      });
      if (this.grid.sortSettings.columns.length > 0 || sortQuery.length) {
        var parentData = this.parentData;
        var query = new Query();
        query.queries = sortQuery;
        var modifiedData = new DataManager(parentData).executeLocal(query);
        if (this.allowRowDragAndDrop && !isNullOrUndefined(this.rowDragAndDropModule["draggedRecord"]) && this.rowDragAndDropModule["droppedRecord"].hasChildRecords && this.rowDragAndDropModule["dropPosition"] !== "middleSegment") {
          var dragdIndex = modifiedData.indexOf(this.rowDragAndDropModule["draggedRecord"]);
          modifiedData.splice(dragdIndex, 1);
          var dropdIndex = modifiedData.indexOf(this.rowDragAndDropModule["droppedRecord"]);
          if (this.rowDragAndDropModule["droppedRecord"].hasChildRecords && this.rowDragAndDropModule["dropPosition"] === "topSegment") {
            modifiedData.splice(dropdIndex, 0, this.rowDragAndDropModule["draggedRecord"]);
          } else if (this.rowDragAndDropModule["dropPosition"] === "bottomSegment") {
            modifiedData.splice(dropdIndex + 1, 0, this.rowDragAndDropModule["draggedRecord"]);
          }
        }
        var sortArgs = { modifiedData, filteredData: results, srtQry: query };
        this.notify("createSort", sortArgs);
        results = isRemoteData(this) ? this.dataResults : sortArgs.modifiedData;
      }
      return isRemoteData(this) ? this.dataResults.result.filter(function(item) {
        return !item.isSummaryRow;
      }) : results.filter(function(item) {
        return !item.isSummaryRow;
      });
    };
    TreeGrid2.prototype.getProcessedRecords = function(skipPage) {
      var _this = this;
      var result;
      if (skipPage !== true || isRemoteData(this)) {
        result = this.getData();
        var dm = new DataManager(result);
        var expanded2 = new Predicate("expanded", "notequal", null).or("expanded", "notequal", void 0);
        var parents_1 = dm.executeLocal(new Query().where(expanded2));
        var visualData = parents_1.filter(function(e) {
          return getExpandStatus(_this, e, parents_1);
        });
        var query = new Query();
        if (this.allowPaging || this.enableVirtualization || this.enableInfiniteScrolling) {
          var pageSize = this.grid.pageSettings.pageSize;
          var currentPage = this.grid.pageSettings.currentPage;
          if (visualData.length < currentPage * pageSize) {
            currentPage = Math.floor(visualData.length / pageSize) + (visualData.length % pageSize ? 1 : 0);
            currentPage = currentPage ? currentPage : 1;
            this.grid.setProperties({ pageSettings: { currentPage } }, true);
          }
          var skip = pageSize * (currentPage - 1);
          query = query.skip(skip).take(pageSize);
        }
        dm.dataSource.json = visualData;
        result = dm.executeLocal(query);
      } else {
        result = this.getData();
      }
      return result;
    };
    TreeGrid2.prototype.getRows = function() {
      return this.grid.getRows();
    };
    TreeGrid2.prototype.getPager = function() {
      return this.grid.getPager();
    };
    TreeGrid2.prototype.addRecord = function(data, index, position) {
      if (this.editModule) {
        var isAddedRowByMethod = "isAddedRowByMethod";
        this.editModule["" + isAddedRowByMethod] = true;
        this.editModule.addRecord(data, index, position);
      }
    };
    TreeGrid2.prototype.closeEdit = function() {
      if (this.grid.editModule) {
        this.editModule["closeEdit"]();
      }
    };
    TreeGrid2.prototype.saveCell = function() {
      if (this.grid.editModule) {
        this.grid.editModule.saveCell();
      }
    };
    TreeGrid2.prototype.updateCell = function(rowIndex, field, value) {
      if (this.grid.editModule) {
        this.grid.editModule.updateCell(rowIndex, field, value);
      }
    };
    TreeGrid2.prototype.updateRow = function(index, data) {
      if (this.grid.editModule) {
        if (!isNullOrUndefined(index)) {
          var griddata = this.grid.getCurrentViewRecords()[parseInt(index.toString(), 10)];
          extend(griddata, data);
          this.grid.editModule.updateRow(index, griddata);
        } else {
          this.grid.editModule.updateRow(index, data);
        }
      }
    };
    TreeGrid2.prototype.deleteRecord = function(fieldName, data) {
      if (isNullOrUndefined(fieldName) && isNullOrUndefined(data) || this.getSelectedRecords().length <= 0) {
        var error = "The provided value for the fieldName and data is undefined. Please ensure the fieldName and data contains number.";
        this.trigger(actionFailure, { error });
      }
      if (this.grid.editModule) {
        this.grid.editModule.deleteRecord(fieldName, data);
      }
    };
    TreeGrid2.prototype.startEdit = function(row) {
      if (this.grid.editModule) {
        this.grid.editModule.startEdit(row);
      }
    };
    TreeGrid2.prototype.editCell = function(rowIndex, field) {
      if (this.editModule) {
        this.editModule.editCell(rowIndex, field);
      }
    };
    TreeGrid2.prototype.enableToolbarItems = function(items, isEnable) {
      if (this.grid.toolbarModule) {
        this.grid.toolbarModule.enableItems(items, isEnable);
      }
    };
    TreeGrid2.prototype.endEdit = function() {
      if (this.grid.editModule) {
        this.grid.editModule.endEdit();
      }
    };
    TreeGrid2.prototype.openColumnChooser = function(x, y) {
      if (this.columnChooserModule) {
        this.columnChooserModule.openColumnChooser(x, y);
      }
    };
    TreeGrid2.prototype.deleteRow = function(tr) {
      if (this.grid.editModule) {
        this.grid.editModule.deleteRow(tr);
      }
    };
    TreeGrid2.prototype.getPrimaryKeyFieldNames = function() {
      return this.grid.getPrimaryKeyFieldNames();
    };
    TreeGrid2.prototype.setCellValue = function(key, field, value) {
      this.grid.setCellValue(key, field, value);
      var rowIndex = this.grid.getRowIndexByPrimaryKey(key);
      var record = this.getCurrentViewRecords()[parseInt(rowIndex.toString(), 10)];
      editAction({ value: record, action: "edit" }, this, this.isSelfReference, record.index, this.grid.selectedRowIndex, field);
    };
    TreeGrid2.prototype.setRowData = function(key, rowData) {
      var currentRecords = this.getCurrentViewRecords();
      var primaryKey = this.grid.getPrimaryKeyFieldNames()[0];
      var level = 0;
      var record = {};
      currentRecords.some(function(value) {
        if (value["" + primaryKey] === key) {
          record = value;
          return true;
        } else {
          return false;
        }
      });
      level = record.level;
      rowData.level = level;
      rowData.index = record.index;
      rowData.childRecords = record.childRecords;
      rowData.taskData = record.taskData;
      rowData.uniqueID = record.uniqueID;
      rowData.parentItem = record.parentItem;
      rowData.checkboxState = record.checkboxState;
      rowData.hasChildRecords = record.hasChildRecords;
      rowData.parentUniqueID = record.parentUniqueID;
      rowData.expanded = record.expanded;
      this.grid.setRowData(key, rowData);
      var visibleRecords = this.getVisibleRecords();
      if (visibleRecords.length > 0 && key === visibleRecords[visibleRecords.length - 1]["" + primaryKey]) {
        var table2 = this.getContentTable();
        var sHeight = table2.scrollHeight;
        var clientHeight = this.getContent().clientHeight;
        removeClass(table2.querySelectorAll("td.e-lastrowcell"), "e-lastrowcell");
        this.lastRowBorder(this.getRows()[currentRecords.indexOf(record)], sHeight <= clientHeight);
      }
    };
    TreeGrid2.prototype.goToPage = function(pageNo) {
      if (this.grid.pagerModule) {
        this.grid.pagerModule.goToPage(pageNo);
      }
    };
    TreeGrid2.prototype.updateExternalMessage = function(message) {
      if (this.pagerModule) {
        this.grid.pagerModule.updateExternalMessage(message);
      }
    };
    TreeGrid2.prototype.getCellFromIndex = function(rowIndex, columnIndex) {
      return this.grid.getCellFromIndex(rowIndex, columnIndex);
    };
    TreeGrid2.prototype.getColumnByField = function(field) {
      return iterateArrayOrObject(this.columnModel, function(item) {
        if (item.field === field) {
          return item;
        }
        return void 0;
      })[0];
    };
    TreeGrid2.prototype.getColumnByUid = function(uid) {
      var Columns = this.initialRender ? this.grid.columns : this.columns;
      var columnModel = "columnModel";
      if (this.grid.columns.length !== this.columnModel.length) {
        Columns = this.grid["" + columnModel];
      }
      return iterateArrayOrObject(Columns, function(item) {
        if (item.uid === uid) {
          return item;
        }
        return void 0;
      })[0];
    };
    TreeGrid2.prototype.getColumnFieldNames = function() {
      return this.grid.getColumnFieldNames();
    };
    TreeGrid2.prototype.getFooterContent = function() {
      return this.grid.getFooterContent();
    };
    TreeGrid2.prototype.getFooterContentTable = function() {
      return this.grid.getFooterContentTable();
    };
    TreeGrid2.prototype.showColumns = function(keys, showBy) {
      this.grid.showColumns(keys, showBy);
      this.updateColumnModel();
    };
    TreeGrid2.prototype.hideColumns = function(keys, hideBy) {
      this.grid.hideColumns(keys, hideBy);
      this.updateColumnModel();
    };
    TreeGrid2.prototype.getColumnHeaderByField = function(field) {
      return this.grid.getColumnHeaderByField(field);
    };
    TreeGrid2.prototype.getColumnHeaderByIndex = function(index) {
      return this.grid.getColumnHeaderByIndex(index);
    };
    TreeGrid2.prototype.getColumnHeaderByUid = function(uid) {
      return this.grid.getColumnHeaderByUid(uid);
    };
    TreeGrid2.prototype.getColumnIndexByField = function(field) {
      return this.grid.getColumnIndexByField(field);
    };
    TreeGrid2.prototype.getVirtualColIndexByUid = function(uid) {
      var columnModel = "columnModel";
      var index = iterateArrayOrObject(this.grid["" + columnModel], function(item, index2) {
        if (item.uid === uid) {
          return index2;
        }
        return void 0;
      })[0];
      return !isNullOrUndefined(index) ? index : -1;
    };
    TreeGrid2.prototype.getColumnIndexByUid = function(uid) {
      return this.grid.getColumnIndexByUid(uid);
    };
    TreeGrid2.prototype.getColumns = function(isRefresh) {
      this.updateColumnModel(this.grid.getColumns(isRefresh));
      return this.columnModel;
    };
    TreeGrid2.prototype.updateColumnModel = function(column) {
      var temp;
      var field;
      var gridColumns = isNullOrUndefined(column) ? this.grid.getColumns() : column;
      if (this.treeColumnIndex !== -1 && !isNullOrUndefined(this.columnModel) && this.columnModel[this.treeColumnIndex] && !isNullOrUndefined(this.columnModel[this.treeColumnIndex].template)) {
        temp = this.columnModel[this.treeColumnIndex].template;
        field = this.columnModel[this.treeColumnIndex].field;
      }
      var gridColumn;
      if (!this.enableColumnVirtualization || this.enableColumnVirtualization && this.columnModel.length === gridColumns.length) {
        this.columnModel = [];
        for (var i = 0; i < gridColumns.length; i++) {
          gridColumn = {};
          for (var _i = 0, _a = Object.keys(gridColumns[parseInt(i.toString(), 10)]); _i < _a.length; _i++) {
            var prop = _a[_i];
            gridColumn["" + prop] = gridColumns[parseInt(i.toString(), 10)]["" + prop];
          }
          this.columnModel.push(new Column(gridColumn));
          if (field === this.columnModel[parseInt(i.toString(), 10)].field && this.columnModel[parseInt(i.toString(), 10)].type !== "checkbox" && (!isNullOrUndefined(temp) && temp !== "")) {
            this.columnModel[parseInt(i.toString(), 10)].template = temp;
          }
        }
      }
      var deepMerge = "deepMerge";
      this["" + deepMerge] = ["columns"];
      if (this.grid.columns.length !== this.columnModel.length) {
        this.stackedHeader = true;
      }
      if (this.stackedHeader && !isNullOrUndefined(this.detailTemplate)) {
        var error = "Stacked header is not compatible with the detail template";
        this.trigger(actionFailure, { error });
      }
      if (this.stackedHeader && this.allowResizing && !isNullOrUndefined(this.columns)) {
        this.updateColumnsWidth(this.columns);
      }
      if (!this.stackedHeader && !isNullOrUndefined(this.columns)) {
        merge(this.columns, this.columnModel);
      }
      this["" + deepMerge] = void 0;
      return this.columnModel;
    };
    TreeGrid2.prototype.updateColumnsWidth = function(columns) {
      var _this = this;
      columns.forEach(function(column) {
        if (!isNullOrUndefined(column) && column.columns) {
          _this.updateColumnsWidth(column.columns);
        } else if (!isNullOrUndefined(column) && column.field) {
          var currentColumn = _this.grid.getColumnByField(column.field);
          if (!isNullOrUndefined(currentColumn)) {
            column.width = currentColumn.width;
          }
        }
      });
    };
    TreeGrid2.prototype.getContent = function() {
      return this.grid.getContent();
    };
    TreeGrid2.prototype.mergePersistTreeGridData = function() {
      var persist1 = "mergePersistGridData";
      this.grid["" + persist1].apply(this);
    };
    TreeGrid2.prototype.mergeColumns = function(storedColumn, columns) {
      var persist2 = "mergeColumns";
      this.grid["" + persist2].apply(this, [storedColumn, columns]);
    };
    TreeGrid2.prototype.setFrozenCount = function() {
      var persist3 = "setFrozenCount";
      this.grid["" + persist3].apply(this);
    };
    TreeGrid2.prototype.splitFrozenCount = function(columns) {
      var persist4 = "splitFrozenCount";
      var instance = this.frozenColumns > 0 ? this.grid : this;
      this.grid["" + persist4].apply(instance, [columns]);
    };
    TreeGrid2.prototype.removeBorder = function(columns) {
      var persist5 = "removeBorder";
      this.grid["" + persist5].apply(this.grid, [columns]);
    };
    TreeGrid2.prototype.frozenLeftBorderColumns = function(columns) {
      var persist6 = "frozenLeftBorderColumns";
      this.grid["" + persist6].apply(this.grid, [columns]);
    };
    TreeGrid2.prototype.frozenRightBorderColumns = function(columns) {
      var persist7 = "frozenRightBorderColumns";
      this.grid["" + persist7].apply(this.grid, [columns]);
    };
    TreeGrid2.prototype.isFrozenGrid = function() {
      var hasFreezeProp = Array.isArray(this.columns) && this.columns.some(function(col) {
        return !!col.freeze;
      });
      return this.frozenColumns > 0 || this.frozenRows > 0 || this.getFrozenColumns() > 0 || hasFreezeProp;
    };
    TreeGrid2.prototype.updateTreeGridModel = function() {
      this.setProperties({ filterSettings: getObject("properties", this.grid.filterSettings) }, true);
      this.setProperties({ pageSettings: getObject("properties", this.grid.pageSettings) }, true);
      this.setProperties({ searchSettings: getObject("properties", this.grid.searchSettings) }, true);
      this.setProperties({ sortSettings: getObject("properties", this.grid.sortSettings) }, true);
    };
    TreeGrid2.prototype.hasPreAndPostMiddleware = function(obj) {
      return obj && typeof obj.applyPreRequestMiddlewares === "function" && typeof obj.applyPostRequestMiddlewares === "function";
    };
    TreeGrid2.prototype.getContentTable = function() {
      return this.grid.getContentTable();
    };
    TreeGrid2.prototype.getDataRows = function() {
      var dRows = [];
      var rows = this.grid.getDataRows();
      for (var i = 0, len = rows.length; i < len; i++) {
        if (!rows[parseInt(i.toString(), 10)].classList.contains("e-summaryrow")) {
          dRows.push(rows[parseInt(i.toString(), 10)]);
        }
      }
      return dRows;
    };
    TreeGrid2.prototype.getCurrentViewRecords = function() {
      var isSummaryRow = "isSummaryRow";
      return this.grid.currentViewData.filter(function(e) {
        return isNullOrUndefined(e["" + isSummaryRow]);
      });
    };
    TreeGrid2.prototype.getBatchChanges = function() {
      return this.grid.editModule.getBatchChanges();
    };
    TreeGrid2.prototype.getHeaderContent = function() {
      return this.grid.getHeaderContent();
    };
    TreeGrid2.prototype.getHeaderTable = function() {
      return this.grid.getHeaderTable();
    };
    TreeGrid2.prototype.getRowByIndex = function(index) {
      return this.grid.getRowByIndex(index);
    };
    TreeGrid2.prototype.getRowInfo = function(target) {
      return this.grid.getRowInfo(target);
    };
    TreeGrid2.prototype.getUidByColumnField = function(field) {
      return this.grid.getUidByColumnField(field);
    };
    TreeGrid2.prototype.getVisibleColumns = function() {
      return this.columnModel.filter(function(col) {
        return col.visible;
      });
    };
    TreeGrid2.prototype.showSpinner = function() {
      showSpinner(this.element);
    };
    TreeGrid2.prototype.hideSpinner = function() {
      hideSpinner(this.element);
    };
    TreeGrid2.prototype.refresh = function() {
      this.uniqueIDCollection = {};
      this.convertTreeData(this.dataSource);
      if (!isCountRequired(this)) {
        if (!(this.dataSource instanceof DataManager)) {
          this.grid.dataSource = this.flatData;
        } else {
          this.grid.setProperties({
            dataSource: new DataManager(this.dataSource.dataSource, this.dataSource.defaultQuery, this.dataSource.adaptor, this.hasPreAndPostMiddleware(this.dataSource) ? this.dataSource : void 0)
          }, true);
        }
      }
      this.grid.refresh();
    };
    TreeGrid2.prototype.getCheckedRecords = function() {
      return this.selectionModule.getCheckedrecords();
    };
    TreeGrid2.prototype.getVisibleRecords = function() {
      var visibleRecords = [];
      var currentViewRecords = this.getCurrentViewRecords();
      if (!this.allowPaging) {
        for (var i = 0; i < currentViewRecords.length; i++) {
          visibleRecords.push(currentViewRecords[parseInt(i.toString(), 10)]);
          if (!currentViewRecords[parseInt(i.toString(), 10)].expanded) {
            i += findChildrenRecords(currentViewRecords[parseInt(i.toString(), 10)]).length;
          }
        }
      } else {
        visibleRecords = currentViewRecords;
      }
      return visibleRecords;
    };
    TreeGrid2.prototype.getCheckedRowIndexes = function() {
      return this.selectionModule.getCheckedRowIndexes();
    };
    TreeGrid2.prototype.selectCheckboxes = function(indexes) {
      this.selectionModule.selectCheckboxes(indexes);
    };
    TreeGrid2.prototype.refreshColumns = function(refreshUI) {
      if (isNullOrUndefined(refreshUI) || refreshUI) {
        this.grid.columns = this.getGridColumns(this.columns);
        this.getTreeColumn();
        if (!this.isFrozenGrid()) {
          this.grid.refreshColumns();
        }
      } else {
        this.grid.setProperties({ columns: this.getGridColumns(this.columns) }, true);
      }
    };
    TreeGrid2.prototype.getTreeColumn = function() {
      var columnModel = "columnModel";
      var treeColumn = this["" + columnModel][this.treeColumnIndex];
      var updatedCols = this.getColumns();
      var treeColumnField = getObject("field", treeColumn);
      var treeIndex = updatedCols.findIndex(function(col) {
        return getObject("field", col) === treeColumnField;
      });
      if (!isNullOrUndefined(treeIndex)) {
        this.setProperties({ treeColumnIndex: treeIndex }, true);
      }
    };
    TreeGrid2.prototype.refreshHeader = function() {
      this.grid.refreshHeader();
    };
    TreeGrid2.prototype.expandCollapseRequest = function(target) {
      if (this.editSettings.mode === "Batch") {
        var obj = "dialogObj";
        var showDialog = "showDialog";
        if ((this.getBatchChanges()[this.changedRecords].length || this.getBatchChanges()[this.deletedRecords].length || this.getBatchChanges()[this.addedRecords].length) && this.editSettings.showConfirmDialog) {
          var dialogObj = this.grid.editModule["" + obj];
          this.grid.editModule["" + showDialog]("CancelEdit", dialogObj);
          this.targetElement = target;
          return;
        }
      }
      if (this.rowTemplate) {
        var rowInfo = target.closest(".e-treerowcell").parentElement;
        var record = this.getCurrentViewRecords()[rowInfo.rowIndex];
        if (target.classList.contains("e-treegridexpand")) {
          this.collapseRow(rowInfo, record);
        } else {
          this.expandRow(rowInfo, record);
        }
      } else {
        var rowInfo_1 = this.grid.getRowInfo(target);
        var record = rowInfo_1.rowData;
        if (this.grid.isFrozenGrid() && this.enableVirtualization && !Object.keys(record).length) {
          var freezeRows = "freezeRows";
          record = this.grid.contentModule["" + freezeRows].filter(function(e) {
            return e.uid === rowInfo_1.row.getAttribute("data-uid");
          })[0].data;
        }
        if (this.enableImmutableMode) {
          record = this.getCurrentViewRecords()[rowInfo_1.rowIndex];
        }
        if (target.classList.contains("e-treegridexpand")) {
          this.collapseRow(rowInfo_1.row, record);
        } else {
          this.expandRow(rowInfo_1.row, record);
        }
      }
    };
    TreeGrid2.prototype.expandRow = function(row, record, key, level) {
      var _this = this;
      this.isCollapseAll = false;
      var parentRec = this.parentData;
      if (!this.enableVirtualization) {
        parentRec = this.flatData.filter(function(e) {
          return e.hasChildRecords;
        });
      }
      record = this.getCollapseExpandRecords(row, record);
      if (isNullOrUndefined(row) && isNullOrUndefined(record)) {
        return;
      }
      if (!isNullOrUndefined(row) && row.cells && row.cells[0].classList.contains("e-lastrowcell")) {
        this.lastRowBorder(row, false);
      }
      if (this.isExpandAll && !isRemoteData(this)) {
        var args = { data: parentRec, row, cancel: false };
        var pagerValuePresent = false;
        if (this.grid.pagerModule && !isNullOrUndefined(this.grid.pagerModule.pagerObj.pagerdropdownModule)) {
          pagerValuePresent = this.grid.pagerModule.pagerObj.pagerdropdownModule["dropDownListObject"].value ? true : false;
        }
        if (!this.isExpandingEventTriggered) {
          this.trigger(expanding, args, function(expandingArgs) {
            _this.expandAllPrevent = expandingArgs.cancel;
            if (!expandingArgs.cancel && !isNullOrUndefined(record)) {
              if (expandingArgs.expandAll) {
                _this.expandCollapseAllChildren(record, "expand", key, level);
              }
              _this.expandRows(row, record, parentRec);
            }
          });
        } else if ((!this.allowPaging || pagerValuePresent && this.grid.pagerModule.pagerObj.pagerdropdownModule["dropDownListObject"].value === "All") && !this.expandAllPrevent && this.isExpandingEventTriggered) {
          this.expandRows(row, record, parentRec);
        }
        this.isExpandingEventTriggered = true;
      } else if (!this.isExpandAll || this.isExpandAll && isRemoteData(this)) {
        var args = { data: record, row, cancel: false };
        this.trigger(expanding, args, function(expandingArgs) {
          if (!expandingArgs.cancel) {
            if (expandingArgs.expandAll) {
              _this.expandCollapseAllChildren(record, "expand", key, level);
            }
            _this.expandRows(row, record, parentRec);
          }
        });
      }
    };
    TreeGrid2.prototype.expandRows = function(row, record, parentRec) {
      this.expandCollapse("expand", row, record);
      var children = "Children";
      if (!(isRemoteData(this) && !isOffline(this)) && (!isCountRequired(this) || !isNullOrUndefined(record["" + children]))) {
        var expandArgs = { data: record, row };
        if (!isNullOrUndefined(this.expandStateMapping)) {
          this.updateExpandStateMapping(expandArgs.data, true);
        }
        if (this.isExpandAll && !this.isExpandedEventTriggered) {
          this.isExpandedEventTriggered = true;
          expandArgs = { data: parentRec, row };
          this.trigger(expanded, expandArgs);
        } else if (!this.isExpandAll && this.enableVirtualization && this.selectionSettings.persistSelection && !isNullOrUndefined(this.virtualScrollModule.prevSelectedRecord)) {
          this.virtualScrollModule.prevSelectedRecord = [];
        } else if (!this.isExpandAll) {
          this.trigger(expanded, expandArgs);
        }
      }
    };
    TreeGrid2.prototype.expandCollapseAllChildren = function(record, action, key, level) {
      if (!isNullOrUndefined(key) && record[this.getPrimaryKeyFieldNames()[0]] !== key || !isNullOrUndefined(level) && level !== record.level) {
        return;
      }
      var records = findChildrenRecords(record).filter(function(e) {
        return e.hasChildRecords;
      });
      records.unshift(record);
      for (var i = 0; i < records.length; i++) {
        this.expandCollapse(action, null, records[parseInt(i.toString(), 10)]);
      }
    };
    TreeGrid2.prototype.getCollapseExpandRecords = function(row, record) {
      if (this.allowPaging && this.pageSettings.pageSizeMode === "All" && this.isExpandAll && isNullOrUndefined(record) && !isRemoteData(this)) {
        record = this.flatData.filter(function(e) {
          return e.hasChildRecords;
        });
      } else if (isNullOrUndefined(record) && !isNullOrUndefined(row)) {
        if (this.detailTemplate) {
          record = this.grid.getCurrentViewRecords()[parseInt(row.getAttribute("aria-rowindex"), 10) - 1];
        } else {
          if (this.enableVirtualization && (this.isCollapseAll || this.isExpandAll)) {
            if (row.rowIndex === -1) {
              record = this.grid.getCurrentViewRecords()[parseInt(row.getAttribute("aria-rowindex"), 10) - 1];
            } else {
              record = this.grid.getCurrentViewRecords()[row.rowIndex];
            }
          } else if (this.rowTemplate) {
            record = this.grid.getCurrentViewRecords()[row.rowIndex];
          } else {
            record = this.grid.getCurrentViewRecords()[parseInt(row.getAttribute("aria-rowindex"), 10) - 1];
          }
        }
      }
      return record;
    };
    TreeGrid2.prototype.collapseRow = function(row, record, key) {
      var _this = this;
      this.isExpandAll = false;
      var parentRec = this.parentData;
      if (!this.enableVirtualization) {
        parentRec = this.flatData.filter(function(e) {
          return e.hasChildRecords;
        });
      }
      record = this.getCollapseExpandRecords(row, record);
      if (isNullOrUndefined(row) && isNullOrUndefined(record)) {
        return;
      }
      if (this.isCollapseAll && !isRemoteData(this)) {
        var args = { data: parentRec, row, cancel: false };
        if (!this.isCollapsingEventTriggered) {
          this.trigger(collapsing, args, function(collapsingArgs) {
            _this.collapseAllPrevent = collapsingArgs.cancel;
            if (!collapsingArgs.cancel) {
              if (collapsingArgs.collapseAll) {
                _this.expandCollapseAllChildren(record, "collapse", key);
              }
              _this.collapseRows(row, record, parentRec);
            }
          });
        } else if (!this.allowPaging && !this.collapseAllPrevent && this.isCollapsingEventTriggered) {
          this.collapseRows(row, record, parentRec);
        }
        this.isCollapsingEventTriggered = true;
      } else if (!this.isCollapseAll || this.isCollapseAll && isRemoteData(this)) {
        var args = { data: record, row, cancel: false };
        this.trigger(collapsing, args, function(collapsingArgs) {
          if (!collapsingArgs.cancel) {
            _this.collapseRows(row, record, parentRec);
          }
        });
      }
    };
    TreeGrid2.prototype.collapseRows = function(row, record, parentRec) {
      this.expandCollapse("collapse", row, record);
      var collapseArgs = { data: record, row };
      if (!isRemoteData(this)) {
        if (!isNullOrUndefined(this.expandStateMapping)) {
          this.updateExpandStateMapping(collapseArgs.data, false);
        }
        if (this.isCollapseAll && !this.isCollapsedEventTriggered) {
          this.isCollapsedEventTriggered = true;
          collapseArgs = { data: parentRec, row };
          this.trigger(collapsed, collapseArgs);
        } else if (!this.isCollapseAll) {
          this.trigger(collapsed, collapseArgs);
        }
      }
    };
    TreeGrid2.prototype.updateExpandStateMapping = function(record, state) {
      var totalRecords = record;
      if (totalRecords.length) {
        for (var i = 0; i < totalRecords.length; i++) {
          totalRecords[parseInt(i.toString(), 10)][this.expandStateMapping] = state;
          editAction({ value: totalRecords[parseInt(i.toString(), 10)], action: "edit" }, this, this.isSelfReference, totalRecords[parseInt(i.toString(), 10)].index, this.grid.selectedRowIndex, this.expandStateMapping);
        }
      } else {
        record["" + this.expandStateMapping] = state;
        editAction({ value: record, action: "edit" }, this, this.isSelfReference, record.index, this.grid.selectedRowIndex, this.expandStateMapping);
      }
    };
    TreeGrid2.prototype.expandAtLevel = function(level) {
      if ((this.allowPaging && this.pageSettings.pageSizeMode === "All" || this.enableVirtualization) && !isRemoteData(this)) {
        var rec = this.grid.dataSource.filter(function(e) {
          if (e.hasChildRecords && e.level === level) {
            e.expanded = true;
          }
          return e.hasChildRecords && e.level === level;
        });
        this.expandAction(rec, null, level, true);
      } else {
        var rec = this.getRecordDetails(level);
        var record = getObject("records", rec);
        this.expandAction(record, null, level);
      }
    };
    TreeGrid2.prototype.expandByKey = function(key) {
      this.expandCollapseActionByKey(key, "Expand");
    };
    TreeGrid2.prototype.expandAction = function(record, key, level, isPaging) {
      if (isPaging === void 0) {
        isPaging = false;
      }
      var _loop_2 = function(i2) {
        if (!isNullOrUndefined(record[parseInt(i2.toString(), 10)].parentItem)) {
          var puniqueID_1 = record[parseInt(i2.toString(), 10)].parentItem.uniqueID;
          var parentItem = this_2.flatData.filter(function(e) {
            return e.uniqueID === puniqueID_1;
          });
          if (isRemoteData(this_2)) {
            parentItem = this_2.getCurrentViewRecords().filter(function(e) {
              return e.uniqueID === puniqueID_1;
            });
          }
          if (parentItem[0].expanded === false) {
            record.push(parentItem[0]);
            parentItem[0].expanded = true;
          } else {
            if (!getExpandStatus(this_2, parentItem[0], this_2.parentData)) {
              if (parentItem[0].expanded && parentItem[0].parentItem !== void 0) {
                record.push(parentItem[0]);
              }
            }
          }
        }
        if (!isPaging) {
          this_2.expandRow(null, record[parseInt(i2.toString(), 10)], key, level);
        }
      };
      var this_2 = this;
      for (var i = 0; i < record.length; i++) {
        _loop_2(i);
      }
      if (isPaging) {
        this.expandRow(null, record, key, level);
      }
    };
    TreeGrid2.prototype.getRecordDetails = function(level) {
      var rows = this.getRows().filter(function(e) {
        return e.className.indexOf("level" + level) !== -1 && (e.querySelector(".e-treegridcollapse") || e.querySelector(".e-treegridexpand"));
      });
      var records = this.getCurrentViewRecords().filter(function(e) {
        return e.level === level && e.hasChildRecords;
      });
      var obj = { records, rows };
      return obj;
    };
    TreeGrid2.prototype.collapseAtLevel = function(level) {
      if ((this.allowPaging && this.pageSettings.pageSizeMode === "All" || this.enableVirtualization) && !isRemoteData(this)) {
        var record = this.grid.dataSource.filter(function(e) {
          if (e.hasChildRecords && e.level === level) {
            e.expanded = false;
          }
          return e.hasChildRecords && e.level === level;
        });
        this.collapseAction(record, null, true);
      } else {
        var rec = this.getRecordDetails(level);
        var records = getObject("records", rec);
        this.collapseAction(records);
      }
    };
    TreeGrid2.prototype.collapseByKey = function(key) {
      this.expandCollapseActionByKey(key, "Collapse");
    };
    TreeGrid2.prototype.expandCollapseActionByKey = function(key, action) {
      var primaryKeyField = this.getPrimaryKeyFieldNames()[0];
      var dataSource = isRemoteData(this) ? this.getCurrentViewRecords() : this.grid.dataSource;
      if (!isNullOrUndefined(primaryKeyField)) {
        var rec = dataSource.filter(function(e) {
          return e["" + primaryKeyField].toString() === key.toString();
        });
        if (action === "Expand") {
          this.expandAction(rec, key, null);
        } else {
          this.collapseAction(rec, key);
        }
      }
    };
    TreeGrid2.prototype.collapseAction = function(record, key, isPaging) {
      if (isPaging === void 0) {
        isPaging = false;
      }
      if (isPaging) {
        this.collapseRow(null, record);
      } else {
        for (var i = 0; i < record.length; i++) {
          this.collapseRow(null, record[parseInt(i.toString(), 10)], key);
        }
      }
      if (!this.grid.contentModule.isDataSourceChanged && this.enableVirtualization && this.getRows() && this.parentData.length === this.getRows().length) {
        var endIndex = "endIndex";
        this.grid.contentModule.startIndex = -1;
        this.grid.contentModule["" + endIndex] = -1;
      }
    };
    TreeGrid2.prototype.expandAll = function() {
      if (this.getCurrentViewRecords().length === 0) {
        var error = "The provided value for the datasource is undefined. Please ensure to add the dataSource.";
        this.trigger(actionFailure, { error });
      }
      this.isExpandedEventTriggered = false;
      this.isExpandingEventTriggered = false;
      if (this.editSettings.mode === "Batch") {
        var obj = "dialogObj";
        var showDialog = "showDialog";
        var changes = this.getBatchChanges ? this.getBatchChanges() : {};
        var changed = Array.isArray(changes.changedRecords) ? changes.changedRecords : [];
        var deleted = Array.isArray(changes.deletedRecords) ? changes.deletedRecords : [];
        var added = Array.isArray(changes.addedRecords) ? changes.addedRecords : [];
        var hasChanges = changed.length > 0 || deleted.length > 0 || added.length > 0;
        if (hasChanges && this.editSettings.showConfirmDialog) {
          var dialogObj = this.grid.editModule["" + obj];
          this.grid.editModule["" + showDialog]("CancelEdit", dialogObj);
          return;
        }
      }
      this.expandCollapseAll("expand");
    };
    TreeGrid2.prototype.collapseAll = function() {
      if (this.getCurrentViewRecords().length === 0) {
        var error = "The provided value for the datasource is undefined. Please ensure to add the dataSource.";
        this.trigger(actionFailure, { error });
      }
      this.isCollapsedEventTriggered = false;
      this.isCollapsingEventTriggered = false;
      if (this.editSettings.mode === "Batch") {
        var obj = "dialogObj";
        var showDialog = "showDialog";
        var changes = this.getBatchChanges ? this.getBatchChanges() : {};
        var changed = Array.isArray(changes.changedRecords) ? changes.changedRecords : [];
        var deleted = Array.isArray(changes.deletedRecords) ? changes.deletedRecords : [];
        var added = Array.isArray(changes.addedRecords) ? changes.addedRecords : [];
        var hasChanges = changed.length > 0 || deleted.length > 0 || added.length > 0;
        if (hasChanges && this.editSettings.showConfirmDialog) {
          var dialogObj = this.grid.editModule["" + obj];
          this.grid.editModule["" + showDialog]("CancelEdit", dialogObj);
          return;
        }
      }
      this.expandCollapseAll("collapse");
    };
    TreeGrid2.prototype.expandCollapseAll = function(action) {
      var rows;
      if (this.rowTemplate) {
        rows = [].slice.call(this.grid.getContentTable().querySelectorAll("tr")).filter(function(e) {
          return e.querySelector(".e-treegrid" + (action === "expand" ? "collapse" : "expand"));
        });
      } else {
        rows = this.getRows().filter(function(e) {
          return e.querySelector(".e-treegrid" + (action === "expand" ? "collapse" : "expand"));
        });
      }
      if (!rows.length && this.getRows().length) {
        rows.push(this.getRows()[0]);
      }
      this.isExpandAll = true;
      this.isCollapseAll = true;
      if ((this.allowPaging && (this.pageSettings.pageSizeMode === "All" || this.pageSettings.pageSizeMode === "Root") || this.enableVirtualization || this.enableInfiniteScrolling) && !isRemoteData(this)) {
        this.flatData.filter(function(e) {
          if (e.hasChildRecords) {
            e.expanded = action === "collapse" ? false : true;
          }
        });
        if (rows.length) {
          for (var i = 0; i < rows.length; i++) {
            if (action === "collapse") {
              var currentRecordIndx = this.frozenRows ? this.getCurrentViewRecords()[parseInt(rows[parseInt(i.toString(), 10)].getAttribute("aria-rowindex"), 10) - 1] : this.getCurrentViewRecords()[rows[parseInt(i.toString(), 10)].rowIndex];
              if (!isNullOrUndefined(currentRecordIndx)) {
                this.collapseRow(rows[parseInt(i.toString(), 10)]);
              }
            } else {
              if (!this.enableVirtualization) {
                this.expandRow(rows[parseInt(i.toString(), 10)]);
              } else if (rows[0].getAttribute("aria-expanded") !== "true") {
                this.expandRow(rows[0]);
              }
            }
          }
        } else if (this.allowPaging) {
          var isExpandCollapseall = this.enableCollapseAll;
          this.setProperties({ enableCollapseAll: true }, true);
          this.grid.pagerModule.goToPage(1);
          this.setProperties({ enableCollapseAll: isExpandCollapseall }, true);
        }
      } else {
        for (var i = 0; i < rows.length; i++) {
          if (action === "collapse") {
            this.collapseRow(rows[parseInt(i.toString(), 10)]);
          } else {
            this.expandRow(rows[parseInt(i.toString(), 10)]);
          }
        }
      }
      this.isExpandAll = false;
      this.isCollapseAll = false;
    };
    TreeGrid2.prototype.expandCollapse = function(action, row, record, isChild) {
      var _this = this;
      var expandingArgs = { row, data: record, childData: [], requestType: action };
      var childRecords = this.grid.currentViewData.filter(function(e) {
        return e.parentUniqueID === record.uniqueID;
      });
      var targetEle;
      if (!isRemoteData(this) && action === "expand" && this.isSelfReference && isCountRequired(this) && !childRecords.length || (action === "collapse" || this.isExpandAll && !this.loadChildOnDemand && !isRemoteData(this) && this.isSelfReference && isCountRequired(this))) {
        this.updateChildOnDemand(expandingArgs);
      }
      var gridRows = this.getRows();
      if (this.rowTemplate) {
        var rows = this.getContentTable().rows;
        gridRows = [].slice.call(rows);
      }
      var rowIndex;
      if (isNullOrUndefined(row)) {
        rowIndex = this.grid.currentViewData.indexOf(record);
        row = gridRows[parseInt(rowIndex.toString(), 10)];
      } else {
        rowIndex = +row.getAttribute("aria-rowindex") - 1;
      }
      if (!isNullOrUndefined(row)) {
        row.setAttribute("aria-expanded", action === "expand" ? "true" : "false");
      }
      if ((this.allowPaging && (this.pageSettings.pageSizeMode === "All" || this.pageSettings.pageSizeMode === "Root") || this.enableVirtualization) && !isRemoteData(this) && !isCountRequired(this)) {
        this.notify(localPagedExpandCollapse, { action, row, record });
      } else {
        var displayAction = void 0;
        if (action === "expand") {
          displayAction = "e-childrow-visible";
          if (!isChild) {
            record.expanded = true;
            this.flatData.forEach(function(e) {
              e.expanded = e.uniqueID === record.uniqueID && e.expanded !== record.expanded ? record.expanded : e.expanded;
            });
            this.uniqueIDCollection[record.uniqueID].expanded = record.expanded;
          }
          if (!isNullOrUndefined(row)) {
            targetEle = row.getElementsByClassName("e-treegridcollapse")[0];
          }
          if (isChild && !isNullOrUndefined(record[this.expandStateMapping]) && record[this.expandStateMapping] && isNullOrUndefined(targetEle)) {
            targetEle = row.getElementsByClassName("e-treegridexpand")[0];
          }
          if (isNullOrUndefined(targetEle)) {
            return;
          }
          if (!targetEle.classList.contains("e-treegridexpand")) {
            addClass([targetEle], "e-treegridexpand");
          }
          removeClass([targetEle], "e-treegridcollapse");
        } else {
          displayAction = "e-childrow-hidden";
          if (!isChild || isCountRequired(this)) {
            record.expanded = false;
            this.flatData.forEach(function(e) {
              e.expanded = e.uniqueID === record.uniqueID && e.expanded !== record.expanded ? record.expanded : e.expanded;
            });
            this.uniqueIDCollection[record.uniqueID].expanded = record.expanded;
          }
          if (!isNullOrUndefined(row)) {
            targetEle = row.getElementsByClassName("e-treegridexpand")[0];
          }
          if (isChild && !isNullOrUndefined(record[this.expandStateMapping]) && !record[this.expandStateMapping] && isNullOrUndefined(targetEle)) {
            targetEle = row.getElementsByClassName("e-treegridcollapse")[0];
          }
          if (isNullOrUndefined(targetEle)) {
            return;
          }
          if (!targetEle.classList.contains("e-treegridcollapse")) {
            addClass([targetEle], "e-treegridcollapse");
          }
          removeClass([targetEle], "e-treegridexpand");
        }
        row.querySelectorAll(".e-treerowcell")[0].setAttribute("aria-expanded", action === "expand" ? "true" : "false");
        var detailrows = gridRows.filter(function(r) {
          return r.classList.contains("e-griddetailrowindex" + record.index + "level" + (record.level + 1));
        });
        if (isRemoteData(this) && !isOffline(this)) {
          this.remoteExpand(action, row, record);
        } else {
          if (!isCountRequired(this) || childRecords.length || action === "collapse") {
            this.localExpand(action, row, record);
          }
          if (this.enableInfiniteScrolling && action === "collapse" && !this.isCollapseAll) {
            this.notify(collapseActionComplete, { isCollapse: true, data: record, row });
          }
          var lastrowIdx = this.getVisibleRecords()[this.getVisibleRecords().length - 1]["index"];
          var lastRow = this.getRowByIndex(lastrowIdx);
          var borderElement = lastRow ? lastRow.nextElementSibling ? lastRow.nextElementSibling.classList.contains("e-detailrow") ? lastRow.nextElementSibling : lastRow : lastRow : null;
          if (!this.isInfiniteCollapse && this.grid.getContentTable().clientHeight <= this.grid.getContent().clientHeight && !isNullOrUndefined(borderElement) && !borderElement.cells[0].classList.contains("e-lastrowcell")) {
            this.lastRowBorder(borderElement, true);
          }
        }
        if (isCountRequired(this) && action === "expand") {
          var currentData = this.getCurrentViewRecords();
          var visibleRecords = currentData.filter(function(e) {
            return getExpandStatus(_this, e, _this.parentData);
          });
          this.dataResults.result = visibleRecords;
        }
        if (!isNullOrUndefined(targetEle) && targetEle.closest(".e-treerowcell").classList.contains("e-cellselectionbackground")) {
          targetEle.closest(".e-treerowcell").classList.remove("e-cellselectionbackground");
          targetEle.closest(".e-treerowcell").removeAttribute("aria-selected");
        }
        if (this.isPixelHeight() && !row.cells[0].classList.contains("e-lastrowcell") && !this.isInfiniteCollapse) {
          var totalRows = this.getRows();
          var rows = this.getContentTable().rows;
          totalRows = [].slice.call(rows);
          for (var i = totalRows.length - 1; i >= 0; i--) {
            if (!isHidden(totalRows[parseInt(i.toString(), 10)])) {
              var table2 = this.getContentTable();
              var sHeight = table2.scrollHeight;
              var clientHeight = this.getContent().clientHeight;
              this.lastRowBorder(totalRows[parseInt(i.toString(), 10)], sHeight <= clientHeight);
              break;
            }
          }
        }
        this.notify("rowExpandCollapse", { detailrows, action: displayAction, record, row });
        this.updateAltRow(gridRows);
      }
      this.isInfiniteCollapse = false;
    };
    TreeGrid2.prototype.updateChildOnDemand = function(expandingArgs) {
      var _this = this;
      if (expandingArgs.requestType === "collapse" && isCountRequired(this)) {
        var flatDataRecords = this.flatData.slice();
        for (var i = 0; i < flatDataRecords.length; i++) {
          if (flatDataRecords[parseInt(i.toString(), 10)]["parentUniqueID"] === expandingArgs.data["uniqueID"]) {
            flatDataRecords.splice(i, 1);
            i = i - 1;
          }
        }
        this.dataResults.result = flatDataRecords;
        return;
      }
      var deff = new Deferred();
      var childDataBind = "childDataBind";
      var state;
      if (this.query) {
        state = this.grid.getDataModule().getStateEventArgument(this.query);
        state.action = expandingArgs;
      } else {
        state = expandingArgs;
      }
      expandingArgs["" + childDataBind] = deff.resolve;
      var record = expandingArgs.data;
      this.trigger(dataStateChange, state);
      deff.promise.then(function() {
        if (expandingArgs.childData.length) {
          if (isCountRequired(_this)) {
            _this.flatData = _this.dataResults.result;
          }
          if (_this.enableInfiniteScrolling && isCountRequired(_this)) {
            _this.flatData = _this.infiniteScrollData;
          }
          var currentData = _this.flatData;
          var index = 0;
          for (var i2 = 0; i2 < currentData.length; i2++) {
            if (currentData[parseInt(i2.toString(), 10)].taskData === record.taskData) {
              index = i2;
              break;
            }
          }
          var data_1 = getValue("result", _this.dataSource);
          var childData = extendArray(expandingArgs.childData);
          var length_1 = record[_this.childMapping] ? record[_this.childMapping].length > childData.length ? record[_this.childMapping].length : childData.length : childData.length;
          for (var i2 = 0; i2 < length_1; i2++) {
            if (record[_this.childMapping]) {
              data_1.filter(function(e, i3) {
                if (e[_this.parentIdMapping] === record[_this.idMapping]) {
                  data_1.splice(i3, 1);
                }
              });
            }
            if (childData[parseInt(i2.toString(), 10)]) {
              childData[parseInt(i2.toString(), 10)].level = record.level + 1;
              childData[parseInt(i2.toString(), 10)].index = Math.ceil(Math.random() * 1e3);
              childData[parseInt(i2.toString(), 10)].parentItem = extend({}, record);
              childData[parseInt(i2.toString(), 10)].taskData = extend({}, childData[parseInt(i2.toString(), 10)]);
              delete childData[parseInt(i2.toString(), 10)].parentItem.childRecords;
              delete childData[parseInt(i2.toString(), 10)].taskData.parentItem;
              childData[parseInt(i2.toString(), 10)].parentUniqueID = record.uniqueID;
              childData[parseInt(i2.toString(), 10)].uniqueID = getUid(_this.element.id + "_data_");
              setValue("uniqueIDCollection." + childData[parseInt(i2.toString(), 10)].uniqueID, childData[parseInt(i2.toString(), 10)], _this);
              if (!isNullOrUndefined(childData[parseInt(i2.toString(), 10)][_this.childMapping]) || childData[parseInt(i2.toString(), 10)][_this.hasChildMapping] && isCountRequired(_this)) {
                childData[parseInt(i2.toString(), 10)].hasChildRecords = true;
              }
              if (isCountRequired(_this) && record[_this.childMapping] && record[_this.childMapping][parseInt(i2.toString(), 10)]) {
                currentData.splice(index + 1 + i2, 0, childData[parseInt(i2.toString(), 10)]);
              } else {
                currentData.splice(index + 1 + i2, record[_this.childMapping] && record[_this.childMapping][parseInt(i2.toString(), 10)] ? 1 : 0, childData[parseInt(i2.toString(), 10)]);
              }
            } else {
              currentData.splice(index + 1 + i2, 1);
            }
          }
          currentData[parseInt(index.toString(), 10)]["" + _this.childMapping] = childData;
          currentData[parseInt(index.toString(), 10)].childRecords = childData;
          currentData[parseInt(index.toString(), 10)].expanded = true;
          setValue("uniqueIDCollection." + currentData[parseInt(index.toString(), 10)].uniqueID, currentData[parseInt(index.toString(), 10)], _this);
          for (var j = 0; j < expandingArgs.childData.length; j++) {
            data_1.push(expandingArgs.childData[parseInt(j.toString(), 10)]);
          }
        }
        if (isCountRequired(_this) && !_this.loadChildOnDemand && expandingArgs.requestType === "expand") {
          _this.dataResults["expandRecord"] = {};
          _this.dataResults["expandRecord"] = expandingArgs.data;
        }
        _this.isExpandRefresh = true;
        var scrollHeightBeforeRefresh = _this.getContentTable().parentElement.scrollTop;
        _this.grid.refresh();
        if (_this.enableInfiniteScrolling) {
          _this.getContentTable().parentElement.scrollTop = scrollHeightBeforeRefresh;
        }
        _this.trigger(expanded, expandingArgs);
      });
    };
    TreeGrid2.prototype.remoteExpand = function(action, row, record) {
      var gridRows = this.getRows();
      var fetchRemoteChildData = "fetchRemoteChildData";
      var requestType = getValue("isCollapseAll", this) ? "collapseAll" : "refresh";
      this.grid.contentModule.requestType = requestType;
      if (this.rowTemplate) {
        var rows_1 = this.getContentTable().rows;
        gridRows = [].slice.call(rows_1);
      }
      var args = { data: record, row };
      var rows = [];
      rows = gridRows.filter(function(r) {
        return r.querySelector(".e-gridrowindex" + record.index + "level" + (record.level + 1)) || r.querySelector(".e-gridrowindex" + record.index + "level0.e-summarycell");
      });
      if (action === "expand") {
        this.notify(remoteExpand, { record, rows, parentRow: row });
        var args_1 = { row, data: record };
        if (rows.length > 0) {
          this.trigger(expanded, args_1);
        }
      } else if (action === "collapse" && this.enableVirtualization) {
        this.dataModule["" + fetchRemoteChildData]({ action, record: args.data, rows: null, parentRow: args.row });
      } else {
        this.collapseRemoteChild({ record, rows });
        this.trigger(collapsed, args);
      }
    };
    TreeGrid2.prototype.localExpand = function(action, row, record) {
      var _this = this;
      var rows;
      var detailRow = row.nextElementSibling ? row.nextElementSibling.classList.contains("e-detailrow") ? row.nextElementSibling : null : null;
      var childRecords;
      if (this.enableInfiniteScrolling) {
        childRecords = this.grid.getRowsObject().filter(function(e) {
          return e.data.parentUniqueID === record.uniqueID;
        });
      } else {
        childRecords = this.grid.currentViewData.filter(function(e) {
          return e.parentUniqueID === record.uniqueID;
        });
      }
      if (this.isPixelHeight() && row.cells[0].classList.contains("e-lastrowcell")) {
        this.lastRowBorder(row, false);
      } else if (this.isPixelHeight() && detailRow && detailRow.cells[0].classList.contains("e-lastrowcell")) {
        this.lastRowBorder(row.nextElementSibling, false);
      }
      var movableRows;
      var freezeRightRows;
      var gridRows = this.getRows();
      if (this.rowTemplate) {
        var rows_2 = this.getContentTable().rows;
        gridRows = [].slice.call(rows_2);
      }
      var displayAction = action === "expand" ? "e-childrow-visible" : "e-childrow-hidden";
      var primaryKeyField = this.getPrimaryKeyFieldNames()[0];
      if (this.enableImmutableMode && !this.allowPaging) {
        rows = [];
        for (var i = 0; i < childRecords.length; i++) {
          var rowIndex = this.grid.getRowIndexByPrimaryKey(childRecords[parseInt(i.toString(), 10)]["" + primaryKeyField]);
          rows.push(this.getRows()[parseInt(rowIndex.toString(), 10)]);
        }
      } else {
        rows = gridRows.filter(function(r) {
          return r.querySelector(".e-gridrowindex" + record.index + "level" + (record.level + 1));
        });
      }
      var freeze = this.grid.getFrozenLeftColumnsCount() > 0 || this.grid.getFrozenRightColumnsCount() > 0 ? true : false;
      if (this.frozenRows || this.frozenColumns || this.getFrozenColumns() || freeze) {
        movableRows = this.getRows().filter(function(r) {
          return r.querySelector(".e-gridrowindex" + record.index + "level" + (record.level + 1));
        });
      }
      if (freeze) {
        freezeRightRows = this.getRows().filter(function(r) {
          return r.querySelector(".e-gridrowindex" + record.index + "level" + (record.level + 1));
        });
      }
      var gridRowsObject = this.grid.getRowsObject();
      var currentViewData = this.enableInfiniteScrolling ? this.grid.getRowsObject() : this.grid.currentViewData;
      var currentRecord = currentViewData.filter(function(e) {
        return _this.enableInfiniteScrolling ? e.data.uniqueID === record.uniqueID : e.uniqueID === record.uniqueID;
      });
      var currentIndex = currentViewData.indexOf(currentRecord[0]);
      if (!isNullOrUndefined(gridRowsObject[parseInt(currentIndex.toString(), 10)].visible) && gridRowsObject[parseInt(currentIndex.toString(), 10)].visible !== false) {
        gridRowsObject[parseInt(currentIndex.toString(), 10)].visible = true;
      }
      if (this.detailTemplate) {
        gridRows.forEach(function(row2) {
          if (row2.classList.contains("e-detailrow") && row2.style.display === "none") {
            row2.style.display = "";
          }
        });
      }
      var detailrows = gridRows.filter(function(r) {
        return r.classList.contains("e-griddetailrowindex" + record.index + "level" + (record.level + 1));
      });
      for (var i = 0; i < rows.length; i++) {
        if (!isNullOrUndefined(rows[parseInt(i.toString(), 10)])) {
          this.toggleRowVisibility(rows[parseInt(i.toString(), 10)], displayAction);
        }
        if (!isNullOrUndefined(rows[parseInt(i.toString(), 10)]) && !this.allowPaging && !(this.enableVirtualization || this.enableInfiniteScrolling || isRemoteData(this) || isCountRequired(this))) {
          if (!isNullOrUndefined(gridRowsObject[rows[parseInt(i.toString(), 10)].rowIndex])) {
            gridRowsObject[rows[parseInt(i.toString(), 10)].rowIndex].visible = displayAction !== "e-childrow-hidden" ? true : false;
          }
          var parentRecord = currentViewData.filter(function(e) {
            return e.uniqueID === currentRecord[0].parentUniqueID;
          });
          if (!isNullOrUndefined(parentRecord[0]) && gridRows[currentViewData.indexOf(parentRecord[0])].getElementsByClassName("e-treegridcollapse").length) {
            gridRowsObject[parseInt(currentIndex.toString(), 10)].visible = false;
          }
        }
        if (!isNullOrUndefined(movableRows)) {
          this.toggleRowVisibility(movableRows[parseInt(i.toString(), 10)], displayAction);
        }
        if (!isNullOrUndefined(freezeRightRows)) {
          this.toggleRowVisibility(freezeRightRows[parseInt(i.toString(), 10)], displayAction);
        }
        this.notify("childRowExpand", { row: rows[parseInt(i.toString(), 10)] });
        if (!isNullOrUndefined(childRecords) && (!isNullOrUndefined(childRecords[parseInt(i.toString(), 10)].childRecords) && childRecords[parseInt(i.toString(), 10)].childRecords.length > 0) && (action !== "expand" || isNullOrUndefined(childRecords[parseInt(i.toString(), 10)].expanded) || childRecords[parseInt(i.toString(), 10)].expanded)) {
          this.expandCollapse(action, rows[parseInt(i.toString(), 10)], childRecords[parseInt(i.toString(), 10)], true);
          if (this.frozenColumns <= this.treeColumnIndex && !isNullOrUndefined(movableRows)) {
            this.expandCollapse(action, movableRows[parseInt(i.toString(), 10)], childRecords[parseInt(i.toString(), 10)], true);
          }
        }
      }
      for (var i = 0; i < detailrows.length; i++) {
        if (!isNullOrUndefined(detailrows[parseInt(i.toString(), 10)]) && !this.allowPaging && !(this.enableVirtualization || this.enableInfiniteScrolling || isRemoteData(this) || isCountRequired(this))) {
          gridRowsObject[detailrows[parseInt(i.toString(), 10)].rowIndex].visible = displayAction !== "e-childrow-hidden" ? true : false;
          this.toggleRowVisibility(detailrows[parseInt(i.toString(), 10)], displayAction);
        }
      }
      if (!this.allowPaging && !(this.enableVirtualization || this.enableInfiniteScrolling || isRemoteData(this) || isCountRequired(this))) {
        this.grid.notify("refresh-Expand-and-Collapse", { rows: this.grid.getRowsObject() });
      }
    };
    TreeGrid2.prototype.toggleRowVisibility = function(row, displayAction) {
      if (row) {
        row.classList.remove("e-childrow-hidden", "e-childrow-visible", "e-hide");
        row.classList.add(displayAction);
      }
    };
    TreeGrid2.prototype.updateAltRow = function(rows) {
      if (this.enableAltRow && !this.rowTemplate) {
        var visibleRowCount = 0;
        for (var i = 0; rows && i < rows.length; i++) {
          var gridRow = rows[parseInt(i.toString(), 10)];
          if (!gridRow.classList.contains("e-childrow-hidden")) {
            if (gridRow.classList.contains("e-altrow")) {
              removeClass([gridRow], "e-altrow");
            }
            if (visibleRowCount % 2 !== 0 && !gridRow.classList.contains("e-summaryrow") && !gridRow.classList.contains("e-detailrow")) {
              addClass([gridRow], "e-altrow");
            }
            if (!gridRow.classList.contains("e-summaryrow") && !gridRow.classList.contains("e-detailrow")) {
              visibleRowCount++;
            }
          }
        }
      }
    };
    TreeGrid2.prototype.treeColumnRowTemplate = function() {
      var rows = this.getContentTable().rows;
      rows = [].slice.call(rows);
      var rowsObject = this.grid.getRowsObject();
      for (var i = 0; i < rows.length; i++) {
        var rcell = this.grid.getContentTable().rows[parseInt(i.toString(), 10)].cells[this.treeColumnIndex];
        var row = rows[parseInt(i.toString(), 10)];
        var rowData = rowsObject.length !== 0 ? rowsObject[parseInt(i.toString(), 10)].data : new Object();
        var arg = { data: rowData, row, cell: rcell, column: this.getColumns()[this.treeColumnIndex] };
        this.renderModule.cellRender(arg);
      }
    };
    TreeGrid2.prototype.collapseRemoteChild = function(rowDetails, isChild) {
      if (!isNullOrUndefined(isChild) && !isChild && this.loadChildOnDemand) {
        rowDetails.record.expanded = false;
      }
      var rows = rowDetails.rows;
      var row;
      var childRecord;
      var movablerows = [];
      var rightrows = [];
      var freeze = this.getFrozenLeftColumnsCount() > 0 || this.getFrozenRightColumnsCount() > 0 ? true : false;
      if (freeze) {
        movablerows = this.getRows().filter(function(r) {
          return r.querySelector(".e-gridrowindex" + rowDetails.record.index + "level" + (rowDetails.record.level + 1));
        });
        rightrows = this.getRows().filter(function(r) {
          return r.querySelector(".e-gridrowindex" + rowDetails.record.index + "level" + (rowDetails.record.level + 1));
        });
      }
      for (var i = 0; i < rows.length; i++) {
        this.toggleRowVisibility(rows[parseInt(i.toString(), 10)], "e-childrow-hidden");
        row = rows[parseInt(i.toString(), 10)];
        var collapsingTd = rows[parseInt(i.toString(), 10)].querySelector(".e-detailrowexpand");
        if (!isNullOrUndefined(collapsingTd)) {
          this.grid.detailRowModule.collapse(collapsingTd);
        }
        if (freeze) {
          this.toggleRowVisibility(movablerows[parseInt(i.toString(), 10)], "e-childrow-hidden");
          this.toggleRowVisibility(rightrows[parseInt(i.toString(), 10)], "e-childrow-hidden");
          if (!rows[parseInt(i.toString(), 10)].querySelector(".e-treecolumn-container .e-treegridexpand")) {
            if (movablerows[parseInt(i.toString(), 10)].querySelector(".e-treecolumn-container .e-treegridexpand")) {
              row = movablerows[parseInt(i.toString(), 10)];
            } else if (rightrows[parseInt(i.toString(), 10)].querySelector(".e-treecolumn-container .e-treegridexpand")) {
              row = rightrows[parseInt(i.toString(), 10)];
            }
          }
        }
        if (row.querySelector(".e-treecolumn-container .e-treegridexpand")) {
          var expandElement = row.querySelector(".e-treecolumn-container .e-treegridexpand");
          childRecord = this.rowTemplate ? this.grid.getCurrentViewRecords()[rows[parseInt(i.toString(), 10)].rowIndex] : this.grid.getRowObjectFromUID(rows[parseInt(i.toString(), 10)].getAttribute("data-Uid")).data;
          if (!isNullOrUndefined(expandElement) && childRecord.expanded) {
            removeClass([expandElement], "e-treegridexpand");
            addClass([expandElement], "e-treegridcollapse");
          }
          var cRow = [];
          var eRows = this.getRows();
          for (var i_1 = 0; i_1 < eRows.length; i_1++) {
            if (eRows[parseInt(i_1.toString(), 10)].querySelector(".e-gridrowindex" + childRecord.index + "level" + (childRecord.level + 1))) {
              cRow.push(eRows[parseInt(i_1.toString(), 10)]);
            }
          }
          if (cRow.length && childRecord.expanded) {
            this.collapseRemoteChild({ record: childRecord, rows: cRow }, false);
          }
        }
      }
      this.grid.pageSettings.totalRecordsCount -= rows.length;
    };
    TreeGrid2.prototype.sanitize = function(value) {
      if (this.enableHtmlSanitizer && typeof value === "string") {
        return SanitizeHtmlHelper.sanitize(value);
      }
      return value;
    };
    TreeGrid2.prototype.addListener = function() {
      this.on("updateResults", this.updateResultModel, this);
      this.grid.on("initial-end", this.afterGridRender, this);
      this.grid.on("partial-filter-update", this.partialFilterUpdate, this);
      this.grid.on("get-row-cells", this.getCellsByTableName, this);
      this.grid.on("save-complete", this.onSaveComplete, this);
    };
    TreeGrid2.prototype.updateResultModel = function(returnResult) {
      this.dataResults = returnResult;
    };
    TreeGrid2.prototype.onSaveComplete = function(args) {
      if (!this["isGantt"] && this.enableVirtualization && args.action === "add" && (!isNullOrUndefined(args.index) && args.index !== -1) && args.data) {
        var primaryKeyField = this.getPrimaryKeyFieldNames()[0];
        var dataRecord = args.data;
        var addedRecordValue = Object.prototype.hasOwnProperty.call(dataRecord, primaryKeyField) ? dataRecord["" + primaryKeyField] : void 0;
        if (!isNullOrUndefined(addedRecordValue)) {
          var index = this.grid.getRowIndexByPrimaryKey(addedRecordValue);
          args.index = index !== -1 ? index : args.index;
        }
      }
    };
    TreeGrid2.prototype.removeListener = function() {
      if (this.isDestroyed) {
        return;
      }
      this.off("updateResults", this.updateResultModel);
      this.grid.off("initial-end", this.afterGridRender);
      this.grid.off("last-rowcell-border-updated", this.lastRowCellBorderUpdated);
      this.grid.off("partial-filter-update", this.partialFilterUpdate);
      this.grid.off("get-row-cells", this.getCellsByTableName);
      this.grid.off("save-complete", this.onSaveComplete);
    };
    TreeGrid2.prototype.getCellsByTableName = function(args) {
      if (!Array.isArray(args.elements)) {
        args.elements = [];
      }
      if (args.rowIndex < this.grid.getDataRows().length) {
        var cells = [].slice.call(this.grid.getDataRows()[parseInt(args.rowIndex.toString(), 10)].getElementsByClassName("e-rowcell"));
        Array.prototype.push.apply(args.elements, cells);
      }
    };
    TreeGrid2.prototype.partialFilterUpdate = function(args) {
      var gridFiltered = args.gridFiltered;
      if (this.allowFiltering && this.filterModule && this.grid.filterSettings.columns.length || this.grid.searchSettings.key.length > 0) {
        this.notify("updateFilterRecs", { data: gridFiltered });
      }
    };
    TreeGrid2.prototype.filterByColumn = function(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator) {
      this.grid.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator);
    };
    TreeGrid2.prototype.clearFiltering = function() {
      this.grid.clearFiltering();
    };
    TreeGrid2.prototype.removeFilteredColsByField = function(field, isClearFilterBar) {
      this.grid.removeFilteredColsByField(field, isClearFilterBar);
    };
    TreeGrid2.prototype.selectRow = function(index, isToggle) {
      this.grid.selectRow(index, isToggle);
    };
    TreeGrid2.prototype.selectRows = function(rowIndexes) {
      this.grid.selectRows(rowIndexes);
    };
    TreeGrid2.prototype.clearSelection = function() {
      if (!isNullOrUndefined(this.grid.selectionModule)) {
        this.grid.selectionModule["actualTarget"] = null;
      }
      this.grid.clearSelection();
    };
    TreeGrid2.prototype.copy = function(withHeader) {
      this.clipboardModule.copy(withHeader);
    };
    TreeGrid2.prototype.paste = function(data, rowIndex, colIndex) {
      this.clipboardModule.paste(data, rowIndex, colIndex);
    };
    TreeGrid2.prototype.selectCell = function(cellIndex, isToggle) {
      this.grid.selectCell(cellIndex, isToggle);
    };
    TreeGrid2.prototype.getSelectedRows = function() {
      return this.grid.getSelectedRows();
    };
    TreeGrid2.prototype.getMovableCellFromIndex = function(rowIndex, columnIndex) {
      return this.grid.getCellFromIndex(rowIndex, columnIndex);
    };
    TreeGrid2.prototype.getMovableDataRows = function() {
      return this.grid.getDataRows();
    };
    TreeGrid2.prototype.getMovableRowByIndex = function(index) {
      return this.grid.getRowByIndex(index);
    };
    TreeGrid2.prototype.getMovableRows = function() {
      return this.grid.getRows();
    };
    TreeGrid2.prototype.getFrozenRightRowByIndex = function(index) {
      return this.grid.getRowByIndex(index);
    };
    TreeGrid2.prototype.getFrozenRightRows = function() {
      return this.grid.getRows();
    };
    TreeGrid2.prototype.getFrozenRightDataRows = function() {
      return this.grid.getDataRows();
    };
    TreeGrid2.prototype.getFrozenRightCellFromIndex = function(rowIndex, columnIndex) {
      return this.grid.getCellFromIndex(rowIndex, columnIndex);
    };
    TreeGrid2.prototype.getFrozenLeftColumnHeaderByIndex = function(index) {
      return this.grid.getColumnHeaderByIndex(index);
    };
    TreeGrid2.prototype.getFrozenRightColumnHeaderByIndex = function(index) {
      return this.grid.getColumnHeaderByIndex(index);
    };
    TreeGrid2.prototype.getMovableColumnHeaderByIndex = function(index) {
      return this.grid.getColumnHeaderByIndex(index);
    };
    TreeGrid2.prototype.getMovableColumnsCount = function() {
      return this.grid.getMovableColumnsCount();
    };
    TreeGrid2.prototype.getFrozenLeftColumnsCount = function() {
      return this.grid.getFrozenLeftColumnsCount();
    };
    TreeGrid2.prototype.getFrozenRightColumnsCount = function() {
      return this.grid.getFrozenRightColumnsCount();
    };
    TreeGrid2.prototype.getFrozenLeftColumns = function() {
      this.updateColumnModel(this.grid.getFrozenLeftColumns());
      return this.columnModel;
    };
    TreeGrid2.prototype.getFrozenRightColumns = function() {
      this.updateColumnModel(this.grid.getFrozenRightColumns());
      return this.columnModel;
    };
    TreeGrid2.prototype.getVisibleMovableCount = function() {
      return this.grid.getVisibleMovableCount();
    };
    TreeGrid2.prototype.getVisibleFrozenRightCount = function() {
      return this.grid.getVisibleFrozenRightCount();
    };
    TreeGrid2.prototype.getVisibleFrozenLeftCount = function() {
      return this.grid.getVisibleFrozenLeftCount();
    };
    TreeGrid2.prototype.getMovableColumns = function() {
      this.updateColumnModel(this.grid.getMovableColumns());
      return this.columnModel;
    };
    TreeGrid2.prototype.getFrozenColumns = function() {
      return this.getFrozenCount(!isNullOrUndefined(this.columns) && this.columns, 0) + this.frozenColumns;
    };
    TreeGrid2.prototype.getFrozenCount = function(cols, cnt) {
      for (var j = 0, len = cols.length; j < len; j++) {
        if (cols[parseInt(j.toString(), 10)].columns) {
          cnt = this.getFrozenCount(cols[parseInt(j.toString(), 10)].columns, cnt);
        } else {
          if (cols[parseInt(j.toString(), 10)].isFrozen) {
            cnt++;
          }
        }
      }
      return cnt;
    };
    TreeGrid2.prototype.getSelectedRowIndexes = function() {
      return this.grid.getSelectedRowIndexes();
    };
    TreeGrid2.prototype.getSelectedRowCellIndexes = function() {
      return this.grid.getSelectedRowCellIndexes();
    };
    TreeGrid2.prototype.getSelectedRecords = function() {
      return this.grid.getSelectedRecords();
    };
    TreeGrid2.prototype.getDataModule = function() {
      return { baseModule: this.grid.getDataModule(), treeModule: this.dataModule };
    };
    TreeGrid2.prototype.reorderRows = function(fromIndexes, toIndex, position) {
      if (!isNullOrUndefined(this.rowDragAndDropModule)) {
        this.rowDragAndDropModule.reorderRows(fromIndexes, toIndex, position);
      }
    };
    TreeGrid2.prototype.indent = function(record) {
      if (!isNullOrUndefined(this.rowDragAndDropModule)) {
        record = record;
        this.rowDragAndDropModule[this.indentOutdentAction](record, "indent");
      }
    };
    TreeGrid2.prototype.outdent = function(record) {
      if (!isNullOrUndefined(this.rowDragAndDropModule)) {
        record = record;
        this.rowDragAndDropModule[this.indentOutdentAction](record, "outdent");
      }
    };
    TreeGrid2.prototype.getPageSizeByHeight = function(containerHeight) {
      if (isNullOrUndefined(containerHeight)) {
        var treegridControlElement = document.getElementById(this.element.id);
        if (treegridControlElement) {
          containerHeight = treegridControlElement.clientHeight;
        } else {
          var root = this.element;
          containerHeight = root ? root.offsetHeight || root.clientHeight || 0 : 0;
        }
      }
      if (this.allowTextWrap && this.textWrapSettings.wrapMode === "Header" || !this.allowTextWrap) {
        var pagesize = 0;
        if (typeof containerHeight === "string" && containerHeight.indexOf("%") !== -1) {
          containerHeight = parseInt(containerHeight, 10) / 100 * this.element.clientHeight;
        }
        var nonContentHeight = this.grid["getNoncontentHeight"]() + this.grid.getRowHeight();
        if (containerHeight > nonContentHeight) {
          var contentHeight = 0;
          var calcNonContentHeight = this.grid["getNoncontentHeight"]();
          var pagerMsg = document.getElementsByClassName("e-pagerexternalmsg")[0];
          if (pagerMsg) {
            calcNonContentHeight += pagerMsg.clientHeight;
          }
          contentHeight = containerHeight - calcNonContentHeight;
          pagesize = contentHeight / this.grid.getRowHeight();
        }
        if (this.frozenRows > 0) {
          pagesize = pagesize + this.frozenRows;
        }
        if (pagesize > 0) {
          return Math.floor(pagesize);
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    };
    var TreeGrid_1;
    __decorate14([
      Property(0)
    ], TreeGrid2.prototype, "frozenRows", void 0);
    __decorate14([
      Property(0)
    ], TreeGrid2.prototype, "frozenColumns", void 0);
    __decorate14([
      Property("Ellipsis")
    ], TreeGrid2.prototype, "clipMode", void 0);
    __decorate14([
      Property([])
    ], TreeGrid2.prototype, "columns", void 0);
    __decorate14([
      Property(null)
    ], TreeGrid2.prototype, "childMapping", void 0);
    __decorate14([
      Property(null)
    ], TreeGrid2.prototype, "hasChildMapping", void 0);
    __decorate14([
      Property(0)
    ], TreeGrid2.prototype, "treeColumnIndex", void 0);
    __decorate14([
      Property(null)
    ], TreeGrid2.prototype, "idMapping", void 0);
    __decorate14([
      Property(null)
    ], TreeGrid2.prototype, "parentIdMapping", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "enableCollapseAll", void 0);
    __decorate14([
      Property(null)
    ], TreeGrid2.prototype, "expandStateMapping", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "allowRowDragAndDrop", void 0);
    __decorate14([
      Property([])
    ], TreeGrid2.prototype, "dataSource", void 0);
    __decorate14([
      Property()
    ], TreeGrid2.prototype, "query", void 0);
    __decorate14([
      Property()
    ], TreeGrid2.prototype, "cloneQuery", void 0);
    __decorate14([
      Property("AllPages")
    ], TreeGrid2.prototype, "printMode", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "allowPaging", void 0);
    __decorate14([
      Property(true)
    ], TreeGrid2.prototype, "loadChildOnDemand", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "allowTextWrap", void 0);
    __decorate14([
      Complex({}, TextWrapSettings)
    ], TreeGrid2.prototype, "textWrapSettings", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "allowReordering", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "allowResizing", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "autoCheckHierarchy", void 0);
    __decorate14([
      Complex({}, PageSettings)
    ], TreeGrid2.prototype, "pageSettings", void 0);
    __decorate14([
      Complex({}, RowDropSettings)
    ], TreeGrid2.prototype, "rowDropSettings", void 0);
    __decorate14([
      Property("USD")
    ], TreeGrid2.prototype, "currencyCode", void 0);
    __decorate14([
      Property()
    ], TreeGrid2.prototype, "pagerTemplate", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "showColumnMenu", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "showColumnChooser", void 0);
    __decorate14([
      Complex({}, ColumnChooserSettings)
    ], TreeGrid2.prototype, "columnChooserSettings", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "allowSorting", void 0);
    __decorate14([
      Property(true)
    ], TreeGrid2.prototype, "allowMultiSorting", void 0);
    __decorate14([
      Complex({}, SortSettings)
    ], TreeGrid2.prototype, "sortSettings", void 0);
    __decorate14([
      Collection([], AggregateRow)
    ], TreeGrid2.prototype, "aggregates", void 0);
    __decorate14([
      Complex({}, EditSettings)
    ], TreeGrid2.prototype, "editSettings", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "allowFiltering", void 0);
    __decorate14([
      Property()
    ], TreeGrid2.prototype, "detailTemplate", void 0);
    __decorate14([
      Complex({}, FilterSettings)
    ], TreeGrid2.prototype, "filterSettings", void 0);
    __decorate14([
      Complex({}, SearchSettings)
    ], TreeGrid2.prototype, "searchSettings", void 0);
    __decorate14([
      Property()
    ], TreeGrid2.prototype, "toolbar", void 0);
    __decorate14([
      Property()
    ], TreeGrid2.prototype, "toolbarTemplate", void 0);
    __decorate14([
      Property("Default")
    ], TreeGrid2.prototype, "gridLines", void 0);
    __decorate14([
      Property()
    ], TreeGrid2.prototype, "contextMenuItems", void 0);
    __decorate14([
      Property()
    ], TreeGrid2.prototype, "columnMenuItems", void 0);
    __decorate14([
      Property()
    ], TreeGrid2.prototype, "rowTemplate", void 0);
    __decorate14([
      Property("Parent")
    ], TreeGrid2.prototype, "copyHierarchyMode", void 0);
    __decorate14([
      Property(null)
    ], TreeGrid2.prototype, "rowHeight", void 0);
    __decorate14([
      Property(true)
    ], TreeGrid2.prototype, "enableAltRow", void 0);
    __decorate14([
      Property(true)
    ], TreeGrid2.prototype, "allowKeyboard", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "enableHover", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "enableAutoFill", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "enableAdaptiveUI", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "enableImmutableMode", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "enableStickyHeader", void 0);
    __decorate14([
      Property()
    ], TreeGrid2.prototype, "emptyRecordTemplate", void 0);
    __decorate14([
      Property("auto")
    ], TreeGrid2.prototype, "height", void 0);
    __decorate14([
      Property("auto")
    ], TreeGrid2.prototype, "width", void 0);
    __decorate14([
      Complex({}, LoadingIndicator)
    ], TreeGrid2.prototype, "loadingIndicator", void 0);
    __decorate14([
      Property(true)
    ], TreeGrid2.prototype, "enableVirtualMaskRow", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "enableVirtualization", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "enableColumnVirtualization", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "enableHtmlSanitizer", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "enableInfiniteScrolling", void 0);
    __decorate14([
      Complex({}, InfiniteScrollSettings)
    ], TreeGrid2.prototype, "infiniteScrollSettings", void 0);
    __decorate14([
      Property("All")
    ], TreeGrid2.prototype, "columnQueryMode", void 0);
    __decorate14([
      Property(true)
    ], TreeGrid2.prototype, "allowSelection", void 0);
    __decorate14([
      Property(-1)
    ], TreeGrid2.prototype, "selectedRowIndex", void 0);
    __decorate14([
      Property(null)
    ], TreeGrid2.prototype, "isRowSelectable", void 0);
    __decorate14([
      Complex({}, SelectionSettings)
    ], TreeGrid2.prototype, "selectionSettings", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "allowExcelExport", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "allowPdfExport", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "enableColumnSpan", void 0);
    __decorate14([
      Property(false)
    ], TreeGrid2.prototype, "enableRowSpan", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "created", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "load", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "expanding", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "expanded", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "collapsing", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "collapsed", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "cellSave", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "cellSaved", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "actionBegin", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "actionComplete", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "beginEdit", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "batchAdd", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "batchDelete", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "batchCancel", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "beforeBatchAdd", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "beforeBatchDelete", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "beforeBatchSave", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "cellEdit", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "actionFailure", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "dataBound", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "dataSourceChanged", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "dataStateChange", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "recordDoubleClick", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "rowDataBound", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "detailDataBound", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "queryCellInfo", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "rowSelecting", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "rowSelected", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "rowDeselecting", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "rowDeselected", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "headerCellInfo", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "cellSelecting", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "columnMenuOpen", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "columnMenuClick", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "cellSelected", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "cellDeselecting", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "cellDeselected", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "resizeStart", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "resizing", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "resizeStop", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "columnDragStart", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "columnDrag", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "columnDrop", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "checkboxChange", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "printComplete", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "beforePrint", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "toolbarClick", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "beforeDataBound", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "contextMenuOpen", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "contextMenuClick", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "beforeCopy", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "beforePaste", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "rowDrag", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "rowDragStart", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "rowDragStartHelper", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "rowDrop", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "pdfQueryCellInfo", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "pdfHeaderQueryCellInfo", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "excelQueryCellInfo", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "pdfAggregateQueryCellInfo", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "excelAggregateQueryCellInfo", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "excelHeaderQueryCellInfo", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "beforeExcelExport", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "excelExportComplete", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "beforePdfExport", void 0);
    __decorate14([
      Event()
    ], TreeGrid2.prototype, "pdfExportComplete", void 0);
    TreeGrid2 = TreeGrid_1 = __decorate14([
      NotifyPropertyChanges
    ], TreeGrid2);
    return TreeGrid2;
  })(Component2)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/reorder.js
var Reorder2 = (
  /** @class */
  (function() {
    function Reorder3(parent) {
      Grid.Inject(Reorder);
      this.parent = parent;
      this.addEventListener();
    }
    Reorder3.prototype.getModuleName = function() {
      return "reorder";
    };
    Reorder3.prototype.addEventListener = function() {
      this.parent.on("getColumnIndex", this.updateTreeColumn, this);
    };
    Reorder3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off("getColumnIndex", this.updateTreeColumn);
    };
    Reorder3.prototype.destroy = function() {
      this.removeEventListener();
    };
    Reorder3.prototype.updateTreeColumn = function() {
      this.parent["getTreeColumn"]();
    };
    return Reorder3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/resize.js
var Resize2 = (
  /** @class */
  (function() {
    function Resize3(parent) {
      Grid.Inject(Resize);
      this.parent = parent;
    }
    Resize3.prototype.autoFitColumns = function(fName) {
      this.parent.grid.autoFitColumns(fName);
    };
    Resize3.prototype.getModuleName = function() {
      return "resize";
    };
    Resize3.prototype.destroy = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.grid.resizeModule.destroy();
    };
    return Resize3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/rowdragdrop.js
var RowDD2 = (
  /** @class */
  (function() {
    function RowDD3(parent) {
      this.canDrop = true;
      this.isDraggedWithChild = false;
      this.modifiedRecords = "modifiedRecords";
      this.selectedRecords = "selectedRecords";
      this.selectedRows = "selectedRows";
      this.hasDropItem = true;
      this.isaddtoBottom = false;
      Grid.Inject(RowDD);
      this.parent = parent;
      this.addEventListener();
    }
    RowDD3.prototype.getChildrecordsByParentID = function(id) {
      var treeGridDataSource;
      if (this.parent.dataSource instanceof DataManager && isOffline(this.parent)) {
        treeGridDataSource = this.parent.grid.dataSource.dataSource.json;
      } else {
        treeGridDataSource = this.parent.grid.dataSource;
      }
      var record = treeGridDataSource.filter(function(e) {
        return e.uniqueID === id;
      });
      return record;
    };
    RowDD3.prototype.addEventListener = function() {
      this.parent.on(rowdraging, this.Rowdraging, this);
      this.parent.on(rowDropped, this.rowDropped, this);
      this.parent.on(rowsAdd, this.rowsAdded, this);
      this.parent.on(rowsRemove, this.rowsRemoved, this);
    };
    RowDD3.prototype.reorderRows = function(fromIndexes, toIndex, position) {
      var tObj = this.parent;
      if (fromIndexes[0] === toIndex || ["above", "below", "child"].indexOf(position) === -1) {
        return;
      }
      var action = "action";
      var dropPosition = "dropPosition";
      if (fromIndexes[0] !== toIndex && ["above", "below", "child"].indexOf(position) !== -1) {
        if (position === "above") {
          this.dropPosition = "topSegment";
        }
        if (position === "below") {
          this.dropPosition = "bottomSegment";
        }
        if (position === "child") {
          this.dropPosition = "middleSegment";
        }
        this.parent["" + dropPosition] = this.dropPosition;
        var data = [];
        for (var i = 0; i < fromIndexes.length; i++) {
          var index = this.parent.getRowByIndex(fromIndexes[parseInt(i.toString(), 10)]).rowIndex;
          data[parseInt(i.toString(), 10)] = this.parent.getCurrentViewRecords()[parseInt(index.toString(), 10)];
        }
        var isByMethod = true;
        var args = {
          data,
          dropIndex: toIndex
        };
        if (!isCountRequired(this.parent)) {
          this.dropRows(args, isByMethod);
        }
        if (tObj.isLocalData) {
          tObj.flatData = this.orderToIndex(tObj.flatData);
        }
        if (this.parent["" + action] === "outdenting") {
          if (!isNullOrUndefined(data[0].parentItem)) {
            data[0].level = data[0].parentItem.level + 1;
          }
        }
        this.parent.grid.refresh();
        if (this.parent.enableImmutableMode && this.dropPosition === "middleSegment") {
          var index = this.parent.allowRowDragAndDrop ? this.parent.treeColumnIndex + 1 : this.parent["" + action] === "indenting" ? this.parent.treeColumnIndex : void 0;
          var row = this.parent.getRows()[fromIndexes[0]];
          var dropData = args.data[0];
          var totalRecord = [];
          var rows = [];
          totalRecord.push(dropData);
          rows.push(row);
          var parentUniqueID = "parentUniqueID";
          var parentData = getParentData(this.parent, args.data[0]["" + parentUniqueID]);
          var parentrow = this.parent.getRows()[parseInt(toIndex.toString(), 10)];
          totalRecord.push(parentData);
          rows.push(parentrow);
          this.updateRowAndCellElements(totalRecord, rows, index);
        }
        if (this.parent.enableImmutableMode && this.parent["" + action] === "outdenting") {
          var index = this.parent.allowRowDragAndDrop ? this.parent.treeColumnIndex + 1 : this.parent["" + action] === "outdenting" ? this.parent.treeColumnIndex : void 0;
          var record = args.data[0];
          var row = this.parent.getRows()[fromIndexes[0]];
          var totalRecord = [];
          var rows = [];
          totalRecord.push(record);
          rows.push(row);
          this.updateRowAndCellElements(totalRecord, rows, index);
        }
      }
    };
    RowDD3.prototype.updateRowAndCellElements = function(records, rows, index) {
      for (var i = 0; i < records.length; i++) {
        this.parent.renderModule.cellRender({
          data: records[parseInt(i.toString(), 10)],
          cell: rows[parseInt(i.toString(), 10)].cells[parseInt(index.toString(), 10)],
          column: this.parent.grid.getColumns()[this.parent.treeColumnIndex],
          requestType: "rowDragAndDrop"
        });
        if (this.parent["action"] === "indenting" || this.parent["action"] === "outdenting") {
          this.parent.renderModule.RowModifier({
            data: records[parseInt(i.toString(), 10)],
            row: rows[parseInt(i.toString(), 10)]
          });
        }
      }
    };
    RowDD3.prototype.indentOutdentAction = function(record, request) {
      var tObj = this.parent;
      var action = "action";
      var droppedIndex = "dropIndex";
      var selectedItemIndex = -1;
      if (isNullOrUndefined(record) && this.parent.selectedRowIndex === -1) {
        return;
      } else {
        if (this.parent.enableVirtualization && this.parent.selectedRowIndex !== -1) {
          selectedItemIndex = this.parent.getSelectedRows()[0].rowIndex;
        } else if (this.parent.selectedRowIndex !== -1) {
          selectedItemIndex = this.parent.selectedRowIndex;
        }
        this.selectedItem = isNullOrUndefined(record) ? tObj.getCurrentViewRecords()[parseInt(selectedItemIndex.toString(), 10)] : record;
        var primaryKeyField = this.parent.getPrimaryKeyFieldNames()[0];
        if (!primaryKeyField) {
          return;
        }
        var rowIndex = this.parent.grid.getRowIndexByPrimaryKey(this.selectedItem["" + primaryKeyField]);
        this.selectedRow = this.parent[this.selectedRows] = selectedItemIndex !== -1 ? this.parent.getSelectedRows()[0] : this.parent.grid.getRowByIndex(rowIndex);
        this.selectedRecord = this.parent[this.selectedRecords] = selectedItemIndex !== -1 ? tObj.getCurrentViewRecords()[parseInt(selectedItemIndex.toString(), 10)] : this.selectedItem;
        if (request === "indent") {
          var record_1 = tObj.getCurrentViewRecords()[this.selectedRow.rowIndex - 1];
          var dropIndex = void 0;
          if (this.selectedRow.rowIndex === 0 || this.selectedRow.rowIndex === -1 || tObj.getCurrentViewRecords()[this.selectedRow.rowIndex].level - record_1.level === 1) {
            return;
          }
          if (record_1.level > this.selectedRecord.level) {
            for (var i = 0; i < tObj.getCurrentViewRecords().length; i++) {
              if (tObj.getCurrentViewRecords()[parseInt(i.toString(), 10)].taskData === record_1.parentItem.taskData) {
                dropIndex = i;
                if (tObj.enableVirtualization) {
                  dropIndex = parseInt(tObj.getRows()[parseInt(i.toString(), 10)].getAttribute("aria-rowindex"), 10) - 1;
                }
              }
            }
          } else {
            dropIndex = this.selectedRow.rowIndex - 1;
          }
          if (this.parent.enableVirtualization && this.selectedRecord && !(record_1.level > this.selectedRecord.level)) {
            dropIndex = parseInt(this.selectedRow.getAttribute("aria-rowindex"), 10) - 2;
          }
          tObj["" + action] = "indenting";
          tObj["" + droppedIndex] = dropIndex;
          this.eventTrigger("indenting", dropIndex);
        } else if (request === "outdent") {
          var isInvalidSelection = this.selectedRow.rowIndex === -1 || this.selectedRow.rowIndex === 0;
          var isRootLevel = tObj.getCurrentViewRecords()[this.selectedRow.rowIndex].level === 0;
          if (isInvalidSelection || isRootLevel) {
            return;
          }
          var parentItem_1 = this.selectedRecord.parentItem;
          var records = tObj.getCurrentViewRecords();
          var dropIndex = records.findIndex(function(record2) {
            return record2.uniqueID === parentItem_1.uniqueID;
          });
          if (dropIndex === -1) {
            return;
          }
          if (this.parent.enableVirtualization && this.selectedRecord) {
            var ariaRowIndex2 = this.parent.getRows()[parseInt(dropIndex.toString(), 10)].getAttribute("aria-rowindex");
            dropIndex = parseInt(ariaRowIndex2, 10) - 1;
          }
          tObj["" + action] = "outdenting";
          tObj["" + droppedIndex] = dropIndex;
          this.eventTrigger("outdenting", dropIndex);
        }
      }
    };
    RowDD3.prototype.eventTrigger = function(action, dropIndex) {
      var _this = this;
      var actionArgs = {
        action,
        cancel: false,
        data: [this.parent[this.selectedRecords]],
        row: this.parent[this.selectedRows]
      };
      this.parent.trigger(actionBegin, actionArgs, function(actionArgs2) {
        if (!actionArgs2.cancel) {
          if (actionArgs2.action === "indenting") {
            if (_this.parent.enableVirtualization) {
              _this.reorderRows([parseInt(_this.selectedRow.getAttribute("aria-rowindex"), 10) - 1], dropIndex, "child");
            } else {
              _this.reorderRows([_this.selectedRow.rowIndex], dropIndex, "child");
            }
          } else if (actionArgs2.action === "outdenting") {
            if (_this.parent.enableVirtualization) {
              _this.reorderRows([parseInt(_this.selectedRow.getAttribute("aria-rowindex"), 10) - 1], dropIndex, "below");
            } else {
              _this.reorderRows([_this.selectedRow.rowIndex], dropIndex, "below");
            }
          }
        }
      });
    };
    RowDD3.prototype.orderToIndex = function(currentData) {
      for (var i = 0; i < currentData.length; i++) {
        currentData[parseInt(i.toString(), 10)].index = i;
        if (!isNullOrUndefined(currentData[parseInt(i.toString(), 10)].parentItem)) {
          var updatedParent = getValue("uniqueIDCollection." + currentData[parseInt(i.toString(), 10)].parentUniqueID, this.parent);
          currentData[parseInt(i.toString(), 10)].parentItem.index = updatedParent.index;
        }
      }
      return currentData;
    };
    RowDD3.prototype.rowsAdded = function(e) {
      var draggedRecord;
      var dragRecords = e.records;
      for (var i = e.records.length - 1; i > -1; i--) {
        draggedRecord = dragRecords[parseInt(i.toString(), 10)];
        if (draggedRecord.parentUniqueID) {
          var record = dragRecords.filter(function(data) {
            return data.uniqueID === draggedRecord.parentUniqueID;
          });
          if (record.length) {
            var index = record[0].childRecords.indexOf(draggedRecord);
            var parentRecord = record[0];
            if (index !== -1) {
              if (isNullOrUndefined(this.parent.idMapping)) {
                parentRecord.childRecords.splice(index, 1);
                if (!parentRecord.childRecords.length) {
                  parentRecord.hasChildRecords = false;
                  parentRecord.hasFilteredChildRecords = false;
                }
              }
              this.isDraggedWithChild = true;
            }
          }
        }
      }
      if (isNullOrUndefined(this.parent.dataSource) || !this.parent.dataSource.length) {
        var tObj = this.parent;
        var draggedRecord_1;
        var dragRecords_1 = e.records;
        var dragLength = e.records.length;
        for (var i = dragLength - 1; i > -1; i--) {
          draggedRecord_1 = dragRecords_1[parseInt(i.toString(), 10)];
          if (!i && draggedRecord_1.hasChildRecords) {
            draggedRecord_1.taskData[this.parent.parentIdMapping] = null;
          }
          var recordIndex1 = 0;
          if (!isNullOrUndefined(tObj.parentIdMapping)) {
            tObj.childMapping = null;
          }
          if (!isNullOrUndefined(draggedRecord_1.taskData) && !isNullOrUndefined(tObj.childMapping) && !Object.prototype.hasOwnProperty.call(draggedRecord_1.taskData, tObj.childMapping)) {
            draggedRecord_1.taskData[tObj.childMapping] = [];
          }
          if (!isNullOrUndefined(draggedRecord_1[tObj.childMapping])) {
            if (Object.prototype.hasOwnProperty.call(draggedRecord_1, tObj.childMapping) && draggedRecord_1[tObj.childMapping].length && !this.isDraggedWithChild && !isNullOrUndefined(tObj.parentIdMapping)) {
              var childData = draggedRecord_1[tObj.childMapping];
              for (var j = 0; j < childData.length; j++) {
                if (dragRecords_1.indexOf(childData[parseInt(j.toString(), 10)]) === -1) {
                  dragRecords_1.splice(j, 0, childData[parseInt(j.toString(), 10)]);
                  childData[parseInt(j.toString(), 10)].taskData = extend({}, childData[parseInt(j.toString(), 10)]);
                  i += 1;
                }
              }
            }
          }
          if (Object.prototype.hasOwnProperty.call(draggedRecord_1, tObj.parentIdMapping) && draggedRecord_1[tObj.parentIdMapping] !== null && !this.isDraggedWithChild) {
            draggedRecord_1.taskData[tObj.parentIdMapping] = null;
            delete draggedRecord_1.parentItem;
            delete draggedRecord_1.parentUniqueID;
          }
          if (isNullOrUndefined(tObj.dataSource)) {
            tObj.dataSource = [];
          }
          tObj.dataSource.splice(recordIndex1, 0, draggedRecord_1.taskData);
        }
        tObj.setProperties({ dataSource: tObj.dataSource }, false);
      } else {
        for (var i = 0; i < dragRecords.length; i++) {
          setValue("uniqueIDCollection." + dragRecords[parseInt(i.toString(), 10)].uniqueID, dragRecords[parseInt(i.toString(), 10)], this.parent);
        }
        var args = { data: e.records, dropIndex: e.toIndex };
        if (this.parent.dataSource instanceof DataManager) {
          this.treeGridData = this.parent.dataSource.dataSource.json;
          this.treeData = this.parent.dataSource.dataSource.json;
        } else {
          this.treeGridData = this.parent.grid.dataSource;
          this.treeData = this.parent.dataSource;
        }
        if (isNullOrUndefined(this.dropPosition)) {
          this.dropPosition = "bottomSegment";
          args.dropIndex = this.parent.getCurrentViewRecords().length > 1 ? this.parent.getCurrentViewRecords().length - 1 : args.dropIndex;
          args.data = args.data.map(function(i2) {
            if (i2.hasChildRecords && isNullOrUndefined(i2.parentItem)) {
              i2.level = 0;
              return i2;
            } else {
              delete i2.parentItem;
              delete i2.parentUniqueID;
              i2.level = 0;
              return i2;
            }
          });
        }
        this.dropRows(args);
      }
    };
    RowDD3.prototype.rowsRemoved = function(e) {
      for (var i = 0; i < e.records.length; i++) {
        this.draggedRecord = e.records[parseInt(i.toString(), 10)];
        if (this.draggedRecord.hasChildRecords || this.draggedRecord.parentItem && this.parent.grid.dataSource.indexOf(this.getChildrecordsByParentID(this.draggedRecord.parentUniqueID)[0]) !== -1 || this.draggedRecord.level === 0) {
          this.deleteDragRow();
        }
      }
    };
    RowDD3.prototype.refreshGridDataSource = function() {
      var draggedRecord = this.draggedRecord;
      var droppedRecord = this.droppedRecord;
      var proxy = this.parent;
      var temporaryDataSource;
      var indexOfDroppedRecord;
      if (this.parent.dataSource instanceof DataManager && isOffline(this.parent)) {
        temporaryDataSource = proxy.dataSource.dataSource.json;
      } else {
        temporaryDataSource = proxy.dataSource;
      }
      if (temporaryDataSource && (!isNullOrUndefined(droppedRecord) && !droppedRecord.parentItem) && !isNullOrUndefined(droppedRecord.taskData)) {
        var keys = Object.keys(temporaryDataSource);
        for (var i = 0; i < keys.length; i++) {
          if (temporaryDataSource[parseInt(i.toString(), 10)][this.parent.childMapping]) {
            if (temporaryDataSource[parseInt(i.toString(), 10)][this.parent.childMapping] === droppedRecord.taskData[this.parent.childMapping]) {
              indexOfDroppedRecord = i;
            }
          } else {
            var primaryKeyField = this.parent.getPrimaryKeyFieldNames()[0];
            if (temporaryDataSource[parseInt(i.toString(), 10)]["" + primaryKeyField] === droppedRecord.taskData["" + primaryKeyField]) {
              indexOfDroppedRecord = i;
            }
          }
        }
        if (!this.parent.idMapping) {
          var positionAdjustment = this.dropPosition === "topSegment" ? 0 : 1;
          if (this.dropPosition === "topSegment" || this.dropPosition === "bottomSegment") {
            temporaryDataSource.splice(indexOfDroppedRecord + positionAdjustment, 0, draggedRecord.taskData);
          }
        }
      } else if (!this.parent.parentIdMapping && (!isNullOrUndefined(droppedRecord) && droppedRecord.parentItem)) {
        if (this.dropPosition === "topSegment" || this.dropPosition === "bottomSegment") {
          var record = this.getChildrecordsByParentID(droppedRecord.parentUniqueID)[0];
          var childRecords = record.childRecords;
          for (var i = 0; i < childRecords.length; i++) {
            if (!isNullOrUndefined(childRecords[parseInt(i.toString(), 10)].taskData)) {
              droppedRecord.parentItem.taskData[this.parent.childMapping][parseInt(i.toString(), 10)] = childRecords[parseInt(i.toString(), 10)].taskData;
            }
          }
        }
      }
      if (this.parent.parentIdMapping) {
        if (draggedRecord.parentItem) {
          if (this.dropPosition === "topSegment" || this.dropPosition === "bottomSegment") {
            draggedRecord[this.parent.parentIdMapping] = droppedRecord[this.parent.parentIdMapping];
            draggedRecord.taskData[this.parent.parentIdMapping] = droppedRecord[this.parent.parentIdMapping];
          } else {
            draggedRecord[this.parent.parentIdMapping] = droppedRecord[this.parent.idMapping];
            draggedRecord.taskData[this.parent.parentIdMapping] = droppedRecord[this.parent.idMapping];
          }
        } else {
          draggedRecord.taskData[this.parent.parentIdMapping] = null;
          draggedRecord[this.parent.parentIdMapping] = null;
        }
      }
    };
    RowDD3.prototype.removeFirstrowBorder = function(element) {
      var canremove = this.dropPosition === "bottomSegment";
      if (this.parent.element.getElementsByClassName("e-firstrow-border").length > 0 && element && (element.rowIndex !== 0 || canremove)) {
        this.parent.element.getElementsByClassName("e-firstrow-border")[0].remove();
      }
    };
    RowDD3.prototype.removeLastrowBorder = function(element) {
      if (!element) {
        return;
      }
      var isEmptyRow = element.classList.contains("e-emptyrow") || element.classList.contains("e-columnheader") || element.classList.contains("e-detailrow");
      if (isEmptyRow) {
        return;
      }
      var lastRow = this.parent.enableVirtualization ? this.parent.getRows()[this.parent.getCurrentViewRecords().length - 1] : this.parent.getRowByIndex(this.parent.getCurrentViewRecords().length - 1);
      var isNotLastRow = lastRow.getAttribute("data-uid") !== element.getAttribute("data-uid");
      var canRemove = isNotLastRow || this.dropPosition === "topSegment";
      var lastRowBorderElement = this.parent.element.getElementsByClassName("e-lastrow-border")[0];
      if (lastRowBorderElement && canRemove) {
        lastRowBorderElement.remove();
      }
    };
    RowDD3.prototype.updateIcon = function(row, index, args) {
      var rowEle = args.target ? closest(args.target, "tr") : null;
      this.dropPosition = void 0;
      var rowPositionHeight = 0;
      this.removeFirstrowBorder(rowEle);
      this.removeLastrowBorder(rowEle);
      for (var i = 0; i < args.rows.length; i++) {
        if (!isNullOrUndefined(rowEle) && rowEle.getAttribute("data-uid") === args.rows[parseInt(i.toString(), 10)].getAttribute("data-uid") || !parentsUntil(args.target, "e-gridcontent") || rowEle.classList.contains("e-summaryrow")) {
          this.dropPosition = "Invalid";
          this.addErrorElem();
          if (isNullOrUndefined(this.parent.rowDropSettings.targetID)) {
            this.removetopOrBottomBorder();
            this.removeChildBorder();
          }
        }
      }
      var tObj = this.parent;
      var rowTop = 0;
      var roundOff = 0;
      var toolHeight = tObj.toolbar && tObj.toolbar.length ? document.getElementById(tObj.element.id + "_gridcontrol_toolbarItems").offsetHeight : 0;
      var positionOffSet = this.getOffset(tObj.element);
      var contentHeight = tObj.getHeaderContent().offsetHeight + positionOffSet.top + toolHeight;
      var scrollTop = tObj.getContent().firstElementChild.scrollTop;
      if (!isNullOrUndefined(rowEle)) {
        rowPositionHeight = rowEle.offsetTop - scrollTop;
      }
      if (this.parent.enableVirtualization) {
        rowTop = rowEle.getBoundingClientRect().top;
      } else {
        rowTop = rowPositionHeight + contentHeight + roundOff;
      }
      var rowBottom = row[0].offsetHeight !== 0 && isNullOrUndefined(rowEle) ? rowTop + row[0].offsetHeight : rowTop + rowEle.offsetHeight;
      var difference = rowBottom - rowTop;
      var divide = difference / 3;
      var topRowSegment = rowTop + divide;
      var middleRowSegment = topRowSegment + divide;
      var bottomRowSegment = middleRowSegment + divide;
      var mouseEvent = getObject("originalEvent.event", args);
      var touchEvent = getObject("originalEvent.event", args);
      var posy = mouseEvent.type === "mousemove" ? mouseEvent.pageY : !isNullOrUndefined(touchEvent) && !isNullOrUndefined(touchEvent.changedTouches) ? touchEvent.changedTouches[0].pageY : null;
      if (this.parent.enableVirtualization) {
        posy = mouseEvent.type === "mousemove" ? mouseEvent.clientY : !isNullOrUndefined(touchEvent) && !isNullOrUndefined(touchEvent.changedTouches) ? touchEvent.changedTouches[0].clientY : null;
      }
      var isTopSegment = posy <= topRowSegment;
      var isMiddleRowSegment = posy > topRowSegment && posy <= middleRowSegment;
      var isBottomRowSegment = posy > middleRowSegment && posy <= bottomRowSegment;
      var isBorderNeed = true;
      if (isTopSegment || isMiddleRowSegment || isBottomRowSegment) {
        if (isTopSegment && this.dropPosition !== "Invalid") {
          this.removeChildBorder();
          this.dropPosition = "topSegment";
          this.removetopOrBottomBorder();
          this.addFirstrowBorder(rowEle);
          this.removeErrorElem();
          this.removeLastrowBorder(rowEle);
        }
        if (isMiddleRowSegment && this.dropPosition !== "Invalid") {
          this.removetopOrBottomBorder();
          this.dropPosition = "middleSegment";
          this.addLastRowborder(rowEle);
          this.addFirstrowBorder(rowEle);
        }
        if (isBottomRowSegment && this.dropPosition !== "Invalid") {
          this.removeErrorElem();
          this.removetopOrBottomBorder();
          this.removeChildBorder();
          this.dropPosition = "bottomSegment";
          this.addLastRowborder(rowEle);
          this.removeFirstrowBorder(rowEle);
        }
        if ((isTopSegment || isBottomRowSegment) && this.dropPosition !== "Invalid") {
          isBorderNeed = this.updateBorderStatus(row, index);
          this.topOrBottomBorder(args.target, isBorderNeed);
        } else if (isMiddleRowSegment && this.dropPosition !== "Invalid") {
          var rowElement = [];
          var element = closest(args.target, "tr");
          rowElement = [].slice.call(element.querySelectorAll(".e-rowcell,.e-rowdragdrop,.e-detailrowcollapse"));
          isBorderNeed = this.updateBorderStatus(row, index);
          if (rowElement.length > 0 && isBorderNeed) {
            this.addRemoveClasses(rowElement, true, "e-childborder");
          }
        }
      }
      return this.dropPosition;
    };
    RowDD3.prototype.updateBorderStatus = function(row, index) {
      var _this = this;
      var isBorderNeed = true;
      var rows = this.parent.grid.getRows();
      var childRows = [];
      var hasDetailTemplate = false;
      if (!isNullOrUndefined(this.parent.detailTemplate)) {
        rows = this.parent.getDataRows();
        hasDetailTemplate = true;
      }
      var treegridColumnIndex = this.parent.treeColumnIndex;
      var treeColIndex = this.parent.allowRowDragAndDrop ? hasDetailTemplate ? treegridColumnIndex + 2 : treegridColumnIndex + 1 : hasDetailTemplate ? treegridColumnIndex + 1 : treegridColumnIndex;
      if (!isNullOrUndefined(this.parent.rowDropSettings.targetID)) {
        treeColIndex = treegridColumnIndex;
      }
      var dragRows = row;
      var targetRow = [rows["" + index]];
      if (this.dropPosition === "topSegment") {
        row.filter(function(e) {
          if (isNullOrUndefined(e) || isNullOrUndefined(e.cells) || isNullOrUndefined(targetRow[0]) || isNullOrUndefined(targetRow[0].cells)) {
            return true;
          }
          var regex = /index(\d+)|level(\d+)/g;
          var parentIndexLevel = e === null || e === void 0 ? void 0 : e.cells["" + treeColIndex].className.match(regex);
          var dropIndexLevel = targetRow[0].cells["" + treeColIndex].className.match(regex);
          if (isNullOrUndefined(dropIndexLevel) || isNullOrUndefined(dropIndexLevel) || isNullOrUndefined(parentIndexLevel)) {
            return true;
          }
          var parentLevel = +parentIndexLevel[1].match(/\d+/)[0];
          var dropParentLevel = +dropIndexLevel[1].match(/\d+/)[0];
          var InDraggedRowIndex = false;
          if (parentLevel !== 0 && parentLevel !== dropParentLevel) {
            return true;
          }
          for (var i = 0; i < rows.length; i++) {
            if (rows[parseInt(i.toString(), 10)] === dragRows[0]) {
              InDraggedRowIndex = true;
            }
            if (InDraggedRowIndex && rows[parseInt(i.toString(), 10)] !== dragRows[0]) {
              var parentIndexLevelInRow = rows[parseInt(i.toString(), 10)].cells["" + treeColIndex].className.match(regex);
              var parentLevelInRow = +parentIndexLevelInRow[1].match(/\d+/)[0];
              if (parentLevelInRow !== parentLevel && parentLevelInRow > parentLevel) {
                childRows.push(rows[parseInt(i.toString(), 10)]);
              } else {
                break;
              }
            }
          }
          if (parentLevel === dropParentLevel && (childRows.length > 0 && parseInt(row[0].getAttribute("aria-rowindex"), 10) - 1 === index - (childRows.length + 1) || childRows.length === 0 && parseInt(row[0].getAttribute("aria-rowindex"), 10) - 1 === index - 1)) {
            isBorderNeed = false;
          }
          return true;
        });
        isBorderNeed = !isNullOrUndefined(row) && childRows.length === 0 && !isNullOrUndefined(row[0].getAttribute("aria-rowindex")) && parseInt(row[0].getAttribute("aria-rowindex"), 10) - 1 === index - 1 && isNullOrUndefined(row[0]) ? false : isBorderNeed;
      }
      if (this.dropPosition === "bottomSegment") {
        targetRow.filter(function(e) {
          if (isNullOrUndefined(e) || isNullOrUndefined(e.cells) || isNullOrUndefined(dragRows[0]) || isNullOrUndefined(dragRows[0].cells)) {
            return true;
          }
          var regex = /index(\d+)|level(\d+)/g;
          var parentIndexLevel = e === null || e === void 0 ? void 0 : e.cells["" + treeColIndex].className.match(regex);
          var dragIndexLevel = dragRows[0].cells["" + treeColIndex].className.match(regex);
          if (isNullOrUndefined(dragIndexLevel) || isNullOrUndefined(parentIndexLevel)) {
            return true;
          }
          var parentLevel = +parentIndexLevel[1].match(/\d+/)[0];
          var dragParentLevel = +dragIndexLevel[1].match(/\d+/)[0];
          var InDraggedRowIndex = false;
          if (parentLevel !== 0 && parentLevel !== dragParentLevel) {
            return true;
          }
          for (var i = 0; i < rows.length; i++) {
            if (rows[parseInt(i.toString(), 10)] === targetRow[0]) {
              InDraggedRowIndex = true;
            }
            if (InDraggedRowIndex && rows[parseInt(i.toString(), 10)] !== targetRow[0]) {
              var parentIndexLevelInRow = rows[parseInt(i.toString(), 10)].cells["" + treeColIndex].className.match(regex);
              var parentLevelInRow = +parentIndexLevelInRow[1].match(/\d+/)[0];
              if (parentLevelInRow !== parentLevel && parentLevelInRow > parentLevel) {
                childRows.push(rows[parseInt(i.toString(), 10)]);
              } else {
                break;
              }
            }
          }
          if (!isNullOrUndefined(row) && parentLevel === dragParentLevel && (childRows.length > 0 && !isNullOrUndefined(row[0].getAttribute("aria-rowindex")) && parseInt(row[0].getAttribute("aria-rowindex"), 10) - 1 === index + (childRows.length + 1) || childRows.length === 0 && !isNullOrUndefined(row[0].getAttribute("aria-rowindex")) && parseInt(row[0].getAttribute("aria-rowindex"), 10) - 1 === index + 1)) {
            isBorderNeed = false;
          }
          return true;
        });
        isBorderNeed = !isNullOrUndefined(row) && childRows.length === 0 && !isNullOrUndefined(row[0].getAttribute("aria-rowindex")) && parseInt(row[0].getAttribute("aria-rowindex"), 10) - 1 === index + 1 && isNullOrUndefined(row[0]) ? false : isBorderNeed;
      }
      if (this.dropPosition === "middleSegment") {
        targetRow.filter(function(e) {
          if (isNullOrUndefined(e) || isNullOrUndefined(e.cells) || isNullOrUndefined(dragRows[0]) || isNullOrUndefined(dragRows[0].cells)) {
            return true;
          }
          for (var i = 0; i < dragRows.length; i++) {
            var regex = /index(\d+)|level(\d+)/g;
            var dropActualIndex = targetRow[0].rowIndex;
            var dragIndexLevel = dragRows[parseInt(i.toString(), 10)].cells["" + treeColIndex].className.match(regex);
            if (!dragIndexLevel) {
              return true;
            }
            var dragIndex = parseInt(dragIndexLevel.find(function(item) {
              return item.includes("index");
            }).match(/\d+/)[0] || "0", 10);
            if (hasDetailTemplate) {
              dropActualIndex = dropActualIndex / 2;
            }
            if (dragIndex === dropActualIndex && !_this.parent.rowDropSettings.targetID) {
              isBorderNeed = false;
            } else {
              isBorderNeed = true;
              break;
            }
          }
          if (!isBorderNeed) {
            _this.dropPosition = "Invalid";
            _this.addErrorElem();
          }
          return isBorderNeed;
        });
      }
      this.canDrop = isBorderNeed;
      return isBorderNeed;
    };
    RowDD3.prototype.removeChildBorder = function() {
      var borderElem = [];
      borderElem = [].slice.call(this.parent.element.querySelectorAll(".e-childborder"));
      if (borderElem.length > 0) {
        this.addRemoveClasses(borderElem, false, "e-childborder");
      }
    };
    RowDD3.prototype.addFirstrowBorder = function(targetRow) {
      var node = this.parent.element;
      var tObj = this.parent;
      if (targetRow && targetRow.rowIndex === 0 && !targetRow.classList.contains("e-emptyrow")) {
        var div = this.parent.createElement("div", { className: "e-firstrow-border" });
        var gridheaderEle = this.parent.getHeaderContent();
        var toolbarHeight = 0;
        if (tObj.toolbar) {
          toolbarHeight = tObj.toolbarModule.getToolbar().offsetHeight;
        }
        var multiplegrid = !isNullOrUndefined(this.parent.rowDropSettings.targetID);
        if (multiplegrid) {
          div.style.top = this.parent.grid.element.getElementsByClassName("e-gridheader")[0].offsetHeight + toolbarHeight + "px";
        }
        div.style.width = multiplegrid ? node.offsetWidth + "px" : node.offsetWidth - this.getScrollWidth() + "px";
        if (!gridheaderEle.querySelectorAll(".e-firstrow-border").length) {
          gridheaderEle.appendChild(div);
        }
      }
    };
    RowDD3.prototype.addLastRowborder = function(trElement) {
      if (!trElement) {
        return;
      }
      var isEmptyRow = trElement && (trElement.classList.contains("e-emptyrow") || trElement.classList.contains("e-columnheader") || trElement.classList.contains("e-detailrow"));
      if (isEmptyRow) {
        return;
      }
      if (trElement && !isEmptyRow && this.parent.getRows()[this.parent.getCurrentViewRecords().length - 1].getAttribute("data-uid") === trElement.getAttribute("data-uid")) {
        var bottomborder = this.parent.createElement("div", { className: "e-lastrow-border" });
        var gridcontentEle = this.parent.getContent();
        bottomborder.style.width = this.parent.element.offsetWidth - this.getScrollWidth() + "px";
        if (!gridcontentEle.querySelectorAll(".e-lastrow-border").length) {
          gridcontentEle.classList.add("e-treegrid-relative");
          gridcontentEle.appendChild(bottomborder);
          bottomborder.style.bottom = this.getScrollWidth() + "px";
        }
      }
    };
    RowDD3.prototype.getScrollWidth = function() {
      var scrollElem = this.parent.getContent().firstElementChild;
      return scrollElem.scrollWidth > scrollElem.offsetWidth ? Scroll.getScrollBarWidth() : 0;
    };
    RowDD3.prototype.addErrorElem = function() {
      var dragelem = document.getElementsByClassName("e-cloneproperties")[0];
      var errorelemCount = dragelem.querySelectorAll(".e-errorelem").length;
      var sanitize = "sanitize";
      if (!errorelemCount && !this.parent.rowDropSettings.targetID) {
        var errorContainer = document.createElement("div");
        errorContainer.classList.add("e-errorcontainer", "e-icons", "e-errorelem");
        var rowCell = dragelem.querySelector(".e-rowcell");
        var errorVal = dragelem.querySelector(".errorValue");
        var content2 = rowCell.innerHTML;
        if (errorVal) {
          content2 = this.parent["" + sanitize](errorVal.innerHTML);
          errorVal.parentNode.removeChild(errorVal);
        }
        rowCell.innerHTML = "";
        var spanContent = document.createElement("span");
        spanContent.className = "errorValue";
        spanContent.style.paddingLeft = "16px";
        spanContent.innerHTML = this.parent["" + sanitize](content2);
        rowCell.appendChild(errorContainer);
        rowCell.appendChild(spanContent);
        var dropItemSpan = document.querySelector(".e-dropitemscount");
        if (this.hasDropItem && dropItemSpan) {
          var dropItemLeft = parseInt(dropItemSpan.style.left, 10) + errorContainer.offsetWidth + 16;
          var spanLeft = !this.parent.enableRtl ? dropItemLeft : 0;
          dropItemSpan.style.left = spanLeft + "px";
          this.hasDropItem = false;
        }
      }
    };
    RowDD3.prototype.removeErrorElem = function() {
      var errorelem = document.querySelector(".e-errorelem");
      var errorValue = document.querySelector(".errorValue");
      var dropItemSpan = document.querySelector(".e-dropitemscount");
      if (errorelem) {
        if (dropItemSpan) {
          var dropItemLeft = parseInt(dropItemSpan.style.left, 10) - errorelem.offsetWidth - 16;
          setStyleAttribute(errorValue, {
            paddingLeft: "0px"
          });
          if (!this.parent.enableRtl) {
            setStyleAttribute(dropItemSpan, {
              left: dropItemLeft + "px"
            });
          }
        }
        errorelem.remove();
      }
      this.hasDropItem = true;
    };
    RowDD3.prototype.topOrBottomBorder = function(target, isBorderNeed) {
      if (isBorderNeed === void 0) {
        isBorderNeed = true;
      }
      var element = closest(target, "tr");
      var rowElements = element ? Array.from(element.querySelectorAll(".e-rowcell, .e-rowdragdrop, .e-detailrowcollapse")) : [];
      if (!rowElements.length) {
        return;
      }
      var classAction = isBorderNeed ? this.addRemoveClasses.bind(this, rowElements, true) : this.addRemoveClasses.bind(this, rowElements, false, "e-dragborder");
      if (this.dropPosition === "topSegment") {
        classAction("e-droptop");
        var lastRowDragBorder = this.parent.element.querySelector(".e-lastrow-dragborder");
        if (lastRowDragBorder) {
          lastRowDragBorder.remove();
        }
      }
      if (this.dropPosition === "bottomSegment") {
        classAction("e-dropbottom");
      }
    };
    RowDD3.prototype.removetopOrBottomBorder = function() {
      var border = [];
      border = [].slice.call(this.parent.element.querySelectorAll(".e-dropbottom, .e-droptop"));
      if (this.parent.rowDropSettings.targetID) {
        border = [].slice.call(document.querySelectorAll(".e-dropbottom, .e-droptop"));
      }
      if (border.length) {
        this.addRemoveClasses(border, false, "e-dropbottom");
        this.addRemoveClasses(border, false, "e-droptop");
      }
    };
    RowDD3.prototype.addRemoveClasses = function(cells, add, className) {
      for (var i = 0, len = cells.length; i < len; i++) {
        if (add) {
          cells[parseInt(i.toString(), 10)].classList.add(className);
        } else {
          cells[parseInt(i.toString(), 10)].classList.remove(className);
        }
      }
    };
    RowDD3.prototype.getOffset = function(element) {
      var box = element.getBoundingClientRect();
      var body = document.body;
      var docElem = document.documentElement;
      var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
      var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
      var clientTop = docElem.clientTop || body.clientTop || 0;
      var clientLeft = docElem.clientLeft || body.clientLeft || 0;
      var top = box.top + scrollTop - clientTop;
      var left = box.left + scrollLeft - clientLeft;
      return { top: Math.round(top), left: Math.round(left) };
    };
    RowDD3.prototype.Rowdraging = function(args) {
      var tObj = this.parent;
      var cloneElement = this.parent.element.querySelector(".e-cloneproperties");
      if (!cloneElement) {
        return;
      }
      cloneElement.style.cursor = "";
      var rowEle = args.target ? closest(args.target, "tr") : null;
      var rowIdx = -1;
      if (!isNullOrUndefined(this.parent.detailTemplate)) {
        rowIdx = rowEle ? this.parent.getDataRows().indexOf(rowEle) : -1;
      } else {
        rowIdx = rowEle ? rowEle.rowIndex : -1;
      }
      if (rowIdx === -1) {
        this.canDrop = false;
        this.addErrorElem();
        this.removetopOrBottomBorder();
        this.removeChildBorder();
        return;
      }
      var dragRecords = Array.isArray(args.data) ? args.data : [args.data];
      var droppedRecord = tObj.getCurrentViewRecords()[parseInt(rowIdx.toString(), 10)];
      if (tObj.rowDropSettings.targetID) {
        var dropElement = parentsUntil(args.target, "e-treegrid");
        if (dropElement && dropElement.id === this.parent.rowDropSettings.targetID) {
          var srcControl = dropElement.ej2_instances[0];
          droppedRecord = srcControl.getCurrentViewRecords()[parseInt(rowIdx.toString(), 10)];
        }
      }
      this.removeErrorElem();
      this.canDrop = true;
      this.ensuredropPosition(dragRecords, droppedRecord);
      if (!tObj.rowDropSettings.targetID && this.canDrop && !isNullOrUndefined(args.rows[0])) {
        tObj.rowDragAndDropModule.updateIcon(args.rows, rowIdx, args);
      }
      if (tObj.rowDropSettings.targetID) {
        var dropElement = parentsUntil(args.target, "e-treegrid");
        if (dropElement && dropElement.id === this.parent.rowDropSettings.targetID) {
          var srcControl = dropElement.ej2_instances[0];
          srcControl.rowDragAndDropModule.updateIcon(args.rows, rowIdx, args);
          this.dropPosition = srcControl.rowDragAndDropModule.dropPosition;
        }
      }
      if (args.target && closest(args.target, "#" + tObj.rowDropSettings.targetID)) {
        var dropElement = parentsUntil(args.target, "e-treegrid");
        if (!dropElement) {
          cloneElement.style.cursor = "default";
        }
      }
    };
    RowDD3.prototype.rowDropped = function(args) {
      if (!isNullOrUndefined(this.parent.aggregates[0]) && this.parent.aggregates[0].showChildSummary) {
        var records = this.parent.grid.getCurrentViewRecords();
        if (!isNullOrUndefined(records[records[args.fromIndex].index]) && !isNullOrUndefined(records[records[args.dropIndex].index])) {
          args.fromIndex = records[args.fromIndex].index;
          args.dropIndex = records[args.dropIndex].index;
        }
      }
      var tObj = this.parent;
      var parentItem = "parentItem";
      if (!tObj.rowDropSettings.targetID) {
        if (parentsUntil(args.target, "e-content") || (this.dropPosition === "Invalid" || !this.canDrop)) {
          if (this.parent.element.querySelector(".e-errorelem") || !this.canDrop) {
            this.dropPosition = "Invalid";
          }
          setValue("dropPosition", this.dropPosition, args);
          tObj.trigger(rowDrop, args);
          if (!args.cancel) {
            if (!isCountRequired(this.parent) && (this.dropPosition === "Invalid" && !this.canDrop)) {
              return;
            }
            if (!isCountRequired(this.parent)) {
              this.dropRows(args);
            }
            if (tObj.isLocalData) {
              tObj.flatData = this.orderToIndex(tObj.flatData);
            }
            tObj.grid.refresh();
            this.removeRowBorders();
          }
        }
      } else {
        if (args.target && closest(args.target, "#" + tObj.rowDropSettings.targetID) || parentsUntil(args.target, "e-treegrid") && parentsUntil(args.target, "e-treegrid").id === tObj.rowDropSettings.targetID || args.target && document.getElementById(tObj.rowDropSettings.targetID)) {
          if (this.parent.element.querySelector(".e-errorelem") || !this.canDrop) {
            this.dropPosition = "Invalid";
          }
          setValue("dropPosition", this.dropPosition, args);
          tObj.trigger(rowDrop, args);
          if (!args.cancel && tObj.rowDropSettings.targetID) {
            if (this.dropPosition === "Invalid" && !this.canDrop) {
              return;
            }
            this.dragDropGrid(args);
            if (tObj.isLocalData) {
              tObj.flatData = this.orderToIndex(tObj.flatData);
            }
          }
        }
      }
      this.removetopOrBottomBorder();
      this.removeChildBorder();
      this.removeRowBorders();
      if (this.parent.enableImmutableMode && !this.parent.allowPaging && !isNullOrUndefined(args.data[0]["" + parentItem])) {
        var index = this.parent.treeColumnIndex;
        index = index + 1;
        var primaryKeyField = this.parent.getPrimaryKeyFieldNames()[0];
        var rowIndex = this.parent.grid.getRowIndexByPrimaryKey(args.data[0]["" + primaryKeyField]);
        var row = this.parent.getRows()[parseInt(rowIndex.toString(), 10)];
        var data = args.data[0];
        if (this.dropPosition === "middleSegment") {
          var record = [];
          var rows = [];
          record.push(data);
          rows.push(row);
          var parentUniqueID = "parentUniqueID";
          data = getParentData(this.parent, args.data[0]["" + parentUniqueID]);
          rowIndex = this.parent.grid.getRowIndexByPrimaryKey(data["" + primaryKeyField]);
          var parentrow = this.parent.getRows()[parseInt(rowIndex.toString(), 10)];
          record.push(data);
          rows.push(parentrow);
          for (var i = 0; i < record.length; i++) {
            this.parent.renderModule.cellRender({
              data: record[parseInt(i.toString(), 10)],
              cell: rows[parseInt(i.toString(), 10)].cells[parseInt(index.toString(), 10)],
              column: this.parent.grid.getColumns()[this.parent.treeColumnIndex],
              requestType: "rowDragAndDrop"
            });
          }
          var targetEle = parentrow.getElementsByClassName("e-treegridcollapse")[0];
          if (!isNullOrUndefined(targetEle)) {
            removeClass([targetEle], "e-treegridcollapse");
            addClass([targetEle], "e-treegridexpand");
          }
        } else {
          this.parent.renderModule.cellRender({
            data,
            cell: row.cells[parseInt(index.toString(), 10)],
            column: this.parent.grid.getColumns()[this.parent.treeColumnIndex],
            requestType: "rowDragAndDrop"
          });
        }
      }
    };
    RowDD3.prototype.removeRowBorders = function() {
      var _this = this;
      ["e-firstrow-border", "e-lastrow-border"].forEach(function(className) {
        var element = _this.parent.element.getElementsByClassName(className)[0];
        if (element) {
          element.remove();
        }
      });
    };
    RowDD3.prototype.dragDropGrid = function(args) {
      var tObj = this.parent;
      var targetRow = closest(args.target, "tr");
      var targetIndex = isNaN(this.getTargetIdx(targetRow)) ? 0 : this.getTargetIdx(targetRow);
      var dropElement = parentsUntil(args.target, "e-treegrid");
      var srcControl;
      if (dropElement && dropElement.id === this.parent.rowDropSettings.targetID && !isRemoteData(this.parent) && !isCountRequired(this.parent)) {
        srcControl = dropElement.ej2_instances[0];
        var records = tObj.getSelectedRecords();
        var indexes = [];
        for (var i = 0; i < records.length; i++) {
          indexes[parseInt(i.toString(), 10)] = records[parseInt(i.toString(), 10)].index;
        }
        var data = srcControl.dataSource;
        if (this.parent.idMapping !== null && (isNullOrUndefined(this.dropPosition) || this.dropPosition === "bottomSegment" || this.dropPosition === "Invalid") && !data.length) {
          var actualData = [];
          for (var i = 0; i < records.length; i++) {
            if (records[parseInt(i.toString(), 10)].hasChildRecords) {
              actualData.push(records[parseInt(i.toString(), 10)]);
              var child = findChildrenRecords(records[parseInt(i.toString(), 10)]);
              for (var i_1 = 0; i_1 < child.length; i_1++) {
                actualData.push(child[parseInt(i_1.toString(), 10)]);
              }
            }
          }
          if (actualData.length) {
            records = actualData;
          }
        }
        tObj.notify(rowsRemove, { indexes, records });
        srcControl.notify(rowsAdd, { toIndex: targetIndex, records });
        var srcControlFlatData = srcControl.rowDragAndDropModule.treeGridData;
        if (!isNullOrUndefined(srcControlFlatData)) {
          for (var i = 0; i < srcControlFlatData.length; i++) {
            srcControlFlatData[parseInt(i.toString(), 10)].index = i;
            if (!isNullOrUndefined(srcControlFlatData[parseInt(i.toString(), 10)].parentItem)) {
              var actualIndex = getValue("uniqueIDCollection." + srcControlFlatData[parseInt(i.toString(), 10)].parentUniqueID + ".index", srcControl);
              srcControlFlatData[parseInt(i.toString(), 10)].parentItem.index = actualIndex;
            }
          }
        }
        tObj.grid.refresh();
        srcControl.grid.refresh();
        if (srcControl.grid.dataSource.length > 1) {
          srcControl.grid.refresh();
          if (!isNullOrUndefined(srcControl.getHeaderContent().querySelector(".e-firstrow-border"))) {
            srcControl.getHeaderContent().querySelector(".e-firstrow-border").remove();
          }
          if (!isNullOrUndefined(srcControl.getContent().querySelector(".e-lastrow-border"))) {
            srcControl.getContent().querySelector(".e-lastrow-border").remove();
          }
        }
      }
      if (isCountRequired(this.parent)) {
        srcControl = dropElement.ej2_instances[0];
        tObj.grid.refresh();
        srcControl.grid.refresh();
      }
    };
    RowDD3.prototype.getTargetIdx = function(targetRow) {
      return targetRow ? parseInt(targetRow.getAttribute("aria-rowindex"), 10) - 1 : 0;
    };
    RowDD3.prototype.getParentData = function(record, data) {
      var parentItem = record.parentItem;
      var selectedItemIndex = -1;
      if (this.parent.enableVirtualization && this.parent.selectedRowIndex !== -1) {
        selectedItemIndex = this.parent.getSelectedRows()[0].rowIndex;
      } else if (this.parent.selectedRowIndex !== -1) {
        selectedItemIndex = this.parent.selectedRowIndex;
      }
      if (this.dropPosition === "bottomSegment") {
        var primaryKeyField = this.parent.getPrimaryKeyFieldNames()[0];
        var rowIndex = selectedItemIndex === -1 ? this.parent.grid.getRowIndexByPrimaryKey(data[0]["" + primaryKeyField]) : this.parent.getSelectedRowIndexes()[0];
        var selectedRecord = this.parent.getCurrentViewRecords()[parseInt(rowIndex.toString(), 10)];
        this.droppedRecord = getParentData(this.parent, selectedRecord.parentItem.uniqueID);
      }
      if (this.dropPosition === "middleSegment") {
        var level = this.parent.getCurrentViewRecords()[parseInt(selectedItemIndex.toString(), 10)].level;
        if (level === parentItem.level) {
          this.droppedRecord = getParentData(this.parent, parentItem.uniqueID);
        } else {
          this.getParentData(parentItem);
        }
      }
    };
    RowDD3.prototype.dropRows = function(args, isByMethod) {
      if (this.dropPosition !== "Invalid" && !isRemoteData(this.parent)) {
        var tObj = this.parent;
        var draggedRecord_2;
        var droppedRecord = void 0;
        if (isNullOrUndefined(args.dropIndex)) {
          var primaryKeyField = this.parent.getPrimaryKeyFieldNames()[0];
          var rowIndex_1 = tObj.selectedRowIndex === -1 ? this.parent.grid.getRowIndexByPrimaryKey(args.data[0]["" + primaryKeyField]) - 1 : tObj.getSelectedRowIndexes()[0] - 1;
          var record = void 0;
          if (this.parent.enableVirtualization) {
            record = tObj.getCurrentViewRecords().find(function(e) {
              return e.index === rowIndex_1;
            });
          } else {
            record = tObj.getCurrentViewRecords()[parseInt(rowIndex_1.toString(), 10)];
          }
          this.getParentData(record, args.data);
        } else {
          args.dropIndex = args.dropIndex === args.fromIndex ? this.getTargetIdx(args.target.parentElement) : args.dropIndex;
          if (this.parent.enableVirtualization) {
            var index = this.parent.getRowByIndex(args.dropIndex).rowIndex;
            this.droppedRecord = tObj.getCurrentViewRecords()[parseInt(index.toString(), 10)];
          } else {
            if (!isNullOrUndefined(this.parent.rowDropSettings.targetID)) {
              var rowsObject = this.parent.grid.getRowsObject();
              this.droppedRecord = rowsObject.length > 0 ? rowsObject[args.dropIndex].data : void 0;
            } else {
              this.droppedRecord = tObj.getCurrentViewRecords()[args.dropIndex];
            }
          }
        }
        var dragRecords = [];
        droppedRecord = this.droppedRecord;
        if (!args.data[0]) {
          dragRecords.push(args.data);
        } else {
          dragRecords = args.data;
        }
        this.parent[this.modifiedRecords].push(args.data[0], droppedRecord);
        var count = 0;
        var multiplegrid = this.parent.rowDropSettings.targetID;
        this.isMultipleGrid = multiplegrid;
        if (!multiplegrid) {
          this.ensuredropPosition(dragRecords, droppedRecord);
        } else {
          this.isaddtoBottom = multiplegrid && this.isDraggedWithChild;
        }
        var dragLength = dragRecords.length;
        if (!isNullOrUndefined(this.parent.idMapping) || this.dropPosition === "bottomSegment" && dragRecords.length > 1 && isNullOrUndefined(this.parent.idMapping)) {
          dragRecords.reverse();
        }
        var _loop_1 = function(i2) {
          draggedRecord_2 = dragRecords[parseInt(i2.toString(), 10)];
          this_1.draggedRecord = draggedRecord_2;
          if (!this_1.draggedRecord.hasChildRecords) {
            for (var _i = 0, dragRecords_2 = dragRecords; _i < dragRecords_2.length; _i++) {
              var dragRecord = dragRecords_2[_i];
              if (!isNullOrUndefined(dragRecord.childRecords) && dragRecord.childRecords.indexOf(this_1.draggedRecord) !== -1) {
                this_1.draggedRecord = void 0;
              }
            }
          }
          if (!isNullOrUndefined(this_1.draggedRecord)) {
            if (this_1.dropPosition !== "Invalid" && !isNullOrUndefined(this_1.droppedRecord)) {
              if (!tObj.rowDropSettings.targetID || isByMethod) {
                this_1.deleteDragRow();
              }
              if (this_1.draggedRecord === this_1.droppedRecord) {
                var correctIndex = this_1.getTargetIdx(args.target.offsetParent.parentElement);
                if (isNaN(correctIndex)) {
                  correctIndex = this_1.getTargetIdx(args.target.parentElement);
                }
                args.dropIndex = correctIndex;
                droppedRecord = this_1.droppedRecord = this_1.parent.getCurrentViewRecords()[args.dropIndex];
              }
              if (droppedRecord.parentItem || this_1.dropPosition === "middleSegment") {
                var parentRecords = tObj.parentData;
                var newParentIndex = parentRecords.indexOf(this_1.draggedRecord);
                if (newParentIndex !== -1) {
                  parentRecords.splice(newParentIndex, 1);
                }
              }
              var recordIndex1 = this_1.treeGridData.indexOf(droppedRecord);
              this_1.dropAtTop(recordIndex1);
              if (this_1.dropPosition === "bottomSegment") {
                if (!droppedRecord.hasChildRecords) {
                  if (this_1.parent.parentIdMapping) {
                    this_1.treeData.splice(recordIndex1 + 1, 0, this_1.draggedRecord.taskData);
                  }
                  this_1.treeGridData.splice(recordIndex1 + 1, 0, this_1.draggedRecord);
                } else {
                  count = this_1.getChildCount(droppedRecord, 0);
                  if (this_1.parent.parentIdMapping) {
                    this_1.treeData.splice(recordIndex1 + count + 1, 0, this_1.draggedRecord.taskData);
                  }
                  this_1.treeGridData.splice(recordIndex1 + count + 1, 0, this_1.draggedRecord);
                }
                if (isNullOrUndefined(droppedRecord.parentItem)) {
                  delete draggedRecord_2.parentItem;
                  delete draggedRecord_2.parentUniqueID;
                  draggedRecord_2.level = 0;
                  if (this_1.parent.parentIdMapping) {
                    draggedRecord_2[this_1.parent.parentIdMapping] = null;
                  }
                }
                if (droppedRecord.parentItem) {
                  var rec = this_1.getChildrecordsByParentID(droppedRecord.parentUniqueID);
                  var childRecords = rec[0].childRecords;
                  var droppedRecordIndex = childRecords.indexOf(droppedRecord) + 1;
                  childRecords.splice(droppedRecordIndex, 0, draggedRecord_2);
                  draggedRecord_2.parentItem = droppedRecord.parentItem;
                  draggedRecord_2.parentUniqueID = droppedRecord.parentUniqueID;
                  draggedRecord_2.level = droppedRecord.level;
                  if (this_1.parent.parentIdMapping) {
                    draggedRecord_2[this_1.parent.parentIdMapping] = droppedRecord[this_1.parent.parentIdMapping];
                    draggedRecord_2.parentItem = droppedRecord.parentItem;
                    draggedRecord_2.level = droppedRecord.level;
                  }
                }
                if (draggedRecord_2.hasChildRecords) {
                  var level = 1;
                  this_1.updateChildRecordLevel(draggedRecord_2, level);
                  this_1.updateChildRecord(draggedRecord_2, recordIndex1 + count + 1);
                }
              }
              this_1.dropMiddle(recordIndex1);
            }
            if (isNullOrUndefined(draggedRecord_2.parentItem)) {
              var parentRecords = tObj.parentData;
              var newParentIndex = parentRecords.indexOf(this_1.droppedRecord);
              var nonRepeat_1 = 0;
              parentRecords.filter(function(e) {
                if (draggedRecord_2.uniqueID === e.uniqueID) {
                  nonRepeat_1++;
                }
              });
              if (this_1.dropPosition === "bottomSegment" && nonRepeat_1 === 0) {
                parentRecords.splice(newParentIndex + 1, 0, draggedRecord_2);
              } else if (this_1.dropPosition === "topSegment" && nonRepeat_1 === 0) {
                parentRecords.splice(newParentIndex, 0, draggedRecord_2);
              }
            }
            tObj.rowDragAndDropModule.refreshGridDataSource();
          }
        };
        var this_1 = this;
        for (var i = 0; i < dragLength; i++) {
          _loop_1(i);
        }
      }
    };
    RowDD3.prototype.dropMiddle = function(recordIndex) {
      var tObj = this.parent;
      var childRecords = findChildrenRecords(this.droppedRecord);
      var childRecordsLength = isNullOrUndefined(childRecords) || childRecords.length === 0 ? recordIndex + 1 : childRecords.length + recordIndex + 1;
      if (this.dropPosition === "middleSegment") {
        if (tObj.parentIdMapping) {
          this.treeData.splice(childRecordsLength, 0, this.draggedRecord.taskData);
          this.treeGridData.splice(childRecordsLength, 0, this.draggedRecord);
        } else {
          this.treeGridData.splice(childRecordsLength, 0, this.draggedRecord);
        }
        this.recordLevel();
        if (this.draggedRecord.hasChildRecords) {
          this.updateChildRecord(this.draggedRecord, childRecordsLength);
        }
      }
    };
    RowDD3.prototype.dropAtTop = function(recordIndex1) {
      var tObj = this.parent;
      if (this.dropPosition === "topSegment") {
        if (tObj.parentIdMapping) {
          this.treeData.splice(recordIndex1, 0, this.draggedRecord.taskData);
        }
        var targetRecord = this.treeGridData[parseInt(recordIndex1.toString(), 10)];
        this.draggedRecord.parentItem = targetRecord.parentItem;
        this.draggedRecord.parentUniqueID = targetRecord.parentUniqueID;
        this.draggedRecord.level = targetRecord.level;
        this.treeGridData.splice(parseInt(recordIndex1.toString(), 10), 0, this.draggedRecord);
        if (this.draggedRecord.hasChildRecords) {
          var level = 1;
          this.updateChildRecord(this.draggedRecord, recordIndex1);
          this.updateChildRecordLevel(this.draggedRecord, level);
        }
        if (this.droppedRecord.parentItem) {
          var rec = this.getChildrecordsByParentID(this.droppedRecord.parentUniqueID);
          var childRecords = rec[0].childRecords;
          var droppedRecordIndex = childRecords.indexOf(this.droppedRecord);
          childRecords.splice(droppedRecordIndex, 0, this.draggedRecord);
        }
      }
    };
    RowDD3.prototype.recordLevel = function() {
      var tObj = this.parent;
      var draggedRecord = this.draggedRecord;
      var droppedRecord = this.droppedRecord;
      var childItem = tObj.childMapping;
      if (!droppedRecord.hasChildRecords) {
        droppedRecord.hasChildRecords = true;
        droppedRecord.hasFilteredChildRecords = true;
        if (isNullOrUndefined(droppedRecord.childRecords) || droppedRecord.childRecords.length === 0) {
          droppedRecord.childRecords = [];
          if (!tObj.parentIdMapping && isNullOrUndefined(droppedRecord.taskData["" + childItem])) {
            droppedRecord.taskData["" + childItem] = [];
          }
        }
      }
      if (this.dropPosition === "middleSegment") {
        var parentItem = extend({}, droppedRecord);
        delete parentItem.childRecords;
        draggedRecord.parentItem = parentItem;
        draggedRecord.parentUniqueID = droppedRecord.uniqueID;
        droppedRecord.childRecords.splice(droppedRecord.childRecords.length, 0, draggedRecord);
        setValue("uniqueIDCollection." + draggedRecord.uniqueID, draggedRecord, tObj);
        var isSelfReference = "isSelfReference";
        if (tObj["" + isSelfReference]) {
          droppedRecord[tObj.childMapping] = [];
          droppedRecord[tObj.childMapping].splice(droppedRecord[tObj.childMapping].length, 0, draggedRecord);
        }
        if (!isNullOrUndefined(draggedRecord) && !tObj.parentIdMapping && !isNullOrUndefined(droppedRecord.taskData["" + childItem])) {
          droppedRecord.taskData[tObj.childMapping].splice(droppedRecord.childRecords.length, 0, draggedRecord.taskData);
        }
        if (!draggedRecord.hasChildRecords) {
          draggedRecord.level = droppedRecord.level + 1;
        } else {
          var level = 1;
          draggedRecord.level = droppedRecord.level + 1;
          this.updateChildRecordLevel(draggedRecord, level);
        }
        droppedRecord.expanded = true;
      }
    };
    RowDD3.prototype.deleteDragRow = function() {
      if (this.parent.dataSource instanceof DataManager && isOffline(this.parent)) {
        this.treeGridData = this.parent.grid.dataSource.dataSource.json;
        this.treeData = this.parent.dataSource.dataSource.json;
      } else {
        this.treeGridData = this.parent.grid.dataSource;
        this.treeData = this.parent.dataSource;
      }
      var deletedRow = getParentData(this.parent, this.draggedRecord.uniqueID);
      if (!isNullOrUndefined(deletedRow.childRecords) && deletedRow.childRecords.length) {
        deletedRow.hasChildRecords = true;
      }
      this.removeRecords(deletedRow);
    };
    RowDD3.prototype.updateChildRecord = function(record, count) {
      var currentRecord;
      var tObj = this.parent;
      var length = 0;
      if (!record.hasChildRecords) {
        return 0;
      }
      length = record.childRecords.length;
      for (var i = 0; i < length; i++) {
        if (!this.isMultipleGrid) {
          currentRecord = getValue("uniqueIDCollection." + record.childRecords[parseInt(i.toString(), 10)].uniqueID, tObj);
        } else {
          currentRecord = record.childRecords[parseInt(i.toString(), 10)];
        }
        if (!isNullOrUndefined(currentRecord)) {
          count++;
          tObj.flatData.splice(count, 0, currentRecord);
          setValue("uniqueIDCollection." + currentRecord.uniqueID, currentRecord, this.parent);
          if (tObj.parentIdMapping) {
            this.treeData.splice(count, 0, currentRecord.taskData);
          }
          if (currentRecord.hasChildRecords) {
            count = this.updateChildRecord(currentRecord, count);
          }
        }
      }
      return count;
    };
    RowDD3.prototype.updateChildRecordLevel = function(record, level) {
      var length = 0;
      var currentRecord;
      level++;
      if (!record.hasChildRecords) {
        return 0;
      }
      length = record.childRecords.length;
      for (var i = 0; i < length; i++) {
        if (!this.isMultipleGrid) {
          currentRecord = getValue("uniqueIDCollection." + record.childRecords[parseInt(i.toString(), 10)].uniqueID, this.parent);
        } else {
          currentRecord = record.childRecords[parseInt(i.toString(), 10)];
        }
        if (!isNullOrUndefined(currentRecord)) {
          var parentData = void 0;
          if (record.parentItem) {
            parentData = getParentData(this.parent, record.parentItem.uniqueID);
          }
          if (isNullOrUndefined(parentData) && !isNullOrUndefined(record.parentItem)) {
            parentData = record.parentItem;
          }
          currentRecord.level = record.parentItem ? parentData.level + level : record.level + 1;
          if (currentRecord.hasChildRecords) {
            level--;
            level = this.updateChildRecordLevel(currentRecord, level);
          }
        }
      }
      return level;
    };
    RowDD3.prototype.removeRecords = function(record) {
      var _this = this;
      var tObj = this.parent;
      var dataSource;
      if (this.parent.dataSource instanceof DataManager && isOffline(this.parent)) {
        dataSource = this.parent.dataSource.dataSource.json;
      } else {
        dataSource = this.parent.dataSource;
      }
      var deletedRow = record;
      var isSelfReference = !isNullOrUndefined(tObj.parentIdMapping);
      var flatParentData = this.getChildrecordsByParentID(deletedRow.parentUniqueID)[0];
      if (deletedRow) {
        if (deletedRow.parentItem) {
          var childRecords = flatParentData ? flatParentData.childRecords : [];
          var childIndex = 0;
          if (childRecords && childRecords.length > 0) {
            childIndex = childRecords.indexOf(deletedRow);
            flatParentData.childRecords.splice(childIndex, 1);
            if (!this.parent.parentIdMapping || tObj.enableImmutableMode) {
              editAction({ value: deletedRow, action: "delete" }, this.parent, isSelfReference, deletedRow.index, deletedRow.index);
            }
          }
        }
        if (tObj.parentIdMapping) {
          if (deletedRow.hasChildRecords && deletedRow.childRecords.length > 0) {
            this.removeChildItem(deletedRow);
          }
          var treeGridData = dataSource;
          var idx = treeGridData.findIndex(function(data) {
            return data[_this.parent.idMapping] === deletedRow.taskData[_this.parent.idMapping];
          });
          var idz = this.treeGridData.findIndex(function(data) {
            return data[_this.parent.idMapping] === deletedRow.taskData[_this.parent.idMapping];
          });
          if (idx !== -1 && !isNullOrUndefined(idx)) {
            dataSource.splice(idx, 1);
          }
          if (idz !== -1 && !isNullOrUndefined(idz)) {
            this.treeGridData.splice(idz, 1);
          }
        }
        var recordIndex = this.treeGridData.indexOf(deletedRow);
        if (!tObj.parentIdMapping) {
          var parentIndex = this.parent.parentData.indexOf(deletedRow);
          if (parentIndex !== -1) {
            tObj.parentData.splice(parentIndex, 1);
            dataSource.splice(parentIndex, 1);
          }
        }
        if (recordIndex === -1 && !tObj.parentIdMapping) {
          var primaryKeyField = tObj.getPrimaryKeyFieldNames()[0];
          for (var j = 0; j < this.treeGridData.length; j++) {
            if (this.treeGridData[parseInt(j.toString(), 10)]["" + primaryKeyField] === deletedRow["" + primaryKeyField]) {
              recordIndex = j;
            }
          }
        }
        if (!tObj.parentIdMapping) {
          var deletedRecordCount = this.getChildCount(deletedRow, 0);
          this.treeGridData.splice(recordIndex, deletedRecordCount + 1);
        }
        if (deletedRow.parentItem && flatParentData && flatParentData.childRecords && !flatParentData.childRecords.length) {
          flatParentData.expanded = false;
          flatParentData.hasChildRecords = false;
          flatParentData.hasFilteredChildRecords = false;
        }
        if (this.parent[this.modifiedRecords].indexOf(flatParentData) === -1 && !isNullOrUndefined(flatParentData)) {
          this.parent[this.modifiedRecords].push(flatParentData);
        }
        if (!isNullOrUndefined(flatParentData)) {
          this.updateModifiedRecords(flatParentData);
        }
      }
    };
    RowDD3.prototype.updateModifiedRecords = function(record) {
      var parentData = getParentData(this.parent, record.parentUniqueID);
      if (!isNullOrUndefined(parentData)) {
        this.parent[this.modifiedRecords].push(parentData);
        this.updateModifiedRecords(parentData);
      }
    };
    RowDD3.prototype.removeChildItem = function(record) {
      var currentRecord;
      var idx;
      var idz;
      var dataSource;
      if (this.parent.dataSource instanceof DataManager && isOffline(this.parent)) {
        dataSource = this.parent.dataSource.dataSource.json;
      } else {
        dataSource = this.parent.dataSource;
      }
      for (var i = 0; i < record.childRecords.length; i++) {
        currentRecord = record.childRecords[parseInt(i.toString(), 10)];
        if (!isNullOrUndefined(currentRecord.childRecords) && currentRecord.childRecords.length) {
          currentRecord.hasChildRecords = true;
        }
        var treeGridData = void 0;
        if (this.parent.dataSource instanceof DataManager && isOffline(this.parent)) {
          treeGridData = this.parent.dataSource.dataSource.json;
        } else {
          treeGridData = this.parent.dataSource;
        }
        for (var i_2 = 0; i_2 < treeGridData.length; i_2++) {
          if (!isNullOrUndefined(currentRecord.taskData)) {
            if (treeGridData[parseInt(i_2.toString(), 10)][this.parent.idMapping] === currentRecord.taskData[this.parent.idMapping]) {
              idx = i_2;
              break;
            }
          }
        }
        for (var i_3 = 0; i_3 < this.treeGridData.length; i_3++) {
          if (!isNullOrUndefined(currentRecord.taskData)) {
            if (this.treeGridData[parseInt(i_3.toString(), 10)][this.parent.idMapping] === currentRecord.taskData[this.parent.idMapping]) {
              idz = i_3;
              break;
            }
          }
        }
        if (idx !== -1 && !isNullOrUndefined(idx)) {
          dataSource.splice(idx, 1);
          idx = -1;
        }
        if (idz !== -1 && !isNullOrUndefined(idz)) {
          this.treeGridData.splice(idz, 1);
          idz = -1;
        }
        if (currentRecord.hasChildRecords) {
          this.removeChildItem(currentRecord);
        }
      }
    };
    RowDD3.prototype.getChildCount = function(record, count) {
      var currentRecord;
      if (!record.hasChildRecords) {
        return 0;
      }
      for (var i = 0; i < record.childRecords.length; i++) {
        currentRecord = record.childRecords[parseInt(i.toString(), 10)];
        count = currentRecord.isSummaryRow ? count : count + 1;
        if (currentRecord.hasChildRecords) {
          count = this.getChildCount(currentRecord, count);
        }
      }
      return count;
    };
    RowDD3.prototype.ensuredropPosition = function(draggedRecords, currentRecord) {
      var _this = this;
      draggedRecords.filter(function(e) {
        if (e.hasChildRecords && !isNullOrUndefined(e.childRecords)) {
          var valid = e.childRecords.indexOf(currentRecord);
          if (valid === -1) {
            _this.ensuredropPosition(e.childRecords, currentRecord);
          } else {
            _this.dropPosition = "Invalid";
            _this.addErrorElem();
            _this.canDrop = false;
            if (isNullOrUndefined(_this.parent.rowDropSettings.targetID)) {
              _this.removetopOrBottomBorder();
              _this.removeChildBorder();
            }
            return;
          }
        }
      });
    };
    RowDD3.prototype.isDuplicateData = function(currentData) {
      var primaryKeys = this.parent.getPrimaryKeyFieldNames();
      if (primaryKeys.length === 0) {
        return false;
      }
      return this.parent.flatData.some(function(data) {
        return primaryKeys.every(function(key) {
          return data[key] === currentData[key];
        });
      });
    };
    RowDD3.prototype.destroy = function() {
      this.removeEventListener();
    };
    RowDD3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off(rowdraging, this.Rowdraging);
      this.parent.off(rowDropped, this.rowDropped);
      this.parent.off(rowsAdd, this.rowsAdded);
      this.parent.off(rowsRemove, this.rowsRemoved);
    };
    RowDD3.prototype.getModuleName = function() {
      return "rowDragAndDrop";
    };
    return RowDD3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/models/rowdrop-settings.js
var __extends16 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate15 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RowDropSettings2 = (
  /** @class */
  (function(_super) {
    __extends16(RowDropSettings3, _super);
    function RowDropSettings3() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate15([
      Property()
    ], RowDropSettings3.prototype, "targetID", void 0);
    return RowDropSettings3;
  })(ChildProperty)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/renderer/virtual-row-model-generator.js
var __extends17 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var TreeVirtualRowModelGenerator = (
  /** @class */
  (function(_super) {
    __extends17(TreeVirtualRowModelGenerator2, _super);
    function TreeVirtualRowModelGenerator2(parent) {
      var _this = _super.call(this, parent) || this;
      _this.addEventListener();
      return _this;
    }
    TreeVirtualRowModelGenerator2.prototype.addEventListener = function() {
      this.parent.on(dataListener, this.getDatas, this);
    };
    TreeVirtualRowModelGenerator2.prototype.getDatas = function(args) {
      this.visualData = args.data;
    };
    TreeVirtualRowModelGenerator2.prototype.getDataInfo = function() {
      return _super.prototype.getData.call(this);
    };
    TreeVirtualRowModelGenerator2.prototype.generateRows = function(data, notifyArgs) {
      var info = this.getDataInfo();
      if (notifyArgs.requestType === "refresh" && notifyArgs.isExpandCollapse) {
        notifyArgs.virtualInfo = this["prevInfo"];
      }
      if (!isNullOrUndefined(notifyArgs.virtualInfo) && !(this.parent.root.loadChildOnDemand && isRemoteData(this.parent.root))) {
        if (notifyArgs.virtualInfo.direction !== "right" && notifyArgs.virtualInfo.direction !== "left") {
          if (!isRemoteData(this.parent.root) || isCountRequired(this.parent) || notifyArgs.virtualInfo.blockIndexes.length === 1) {
            notifyArgs.virtualInfo.blockIndexes = info.blockIndexes;
          }
        } else {
          notifyArgs.virtualInfo.blockIndexes = this.getBlockIndexes(notifyArgs.virtualInfo.page);
        }
      }
      if (this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== void 0 && !this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== "" || isCountRequired(this.parent)) {
        return _super.prototype.generateRows.call(this, data, notifyArgs);
      } else {
        if (!isNullOrUndefined(notifyArgs.requestType) && notifyArgs.requestType.toString() === "collapseAll") {
          notifyArgs.requestType = "refresh";
        }
        var rows = _super.prototype.generateRows.call(this, data, notifyArgs);
        if (!isNullOrUndefined(this.visualData)) {
          for (var r = 0; r < rows.length; r++) {
            rows[parseInt(r.toString(), 10)].index = this.visualData.indexOf(rows[parseInt(r.toString(), 10)].data);
          }
        }
        return rows;
      }
    };
    TreeVirtualRowModelGenerator2.prototype.checkAndResetCache = function(action) {
      var clear = [
        "paging",
        "refresh",
        "sorting",
        "filtering",
        "searching",
        "reorder",
        "save",
        "delete"
      ].some(function(value) {
        return action === value;
      });
      if (this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== void 0 && !this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== "" || isCountRequired(this.parent)) {
        var model = "model";
        var currentPage = this["" + model].currentPage;
        if (clear) {
          this.cache = {};
          this.data = {};
          this.groups = {};
        } else if (action === "virtualscroll" && this.cache[parseInt(currentPage.toString(), 10)] && this.cache[parseInt(currentPage.toString(), 10)].length > this.parent.contentModule.getBlockSize()) {
          if (this.cache[parseInt(currentPage.toString(), 10)].length > this.parent.contentModule.getBlockSize()) {
            this.cache[parseInt(currentPage.toString(), 10)] = this.cache[parseInt(currentPage.toString(), 10)].slice(0, this.parent.contentModule.getBlockSize());
          }
        }
      } else {
        if (clear || action === "virtualscroll") {
          this.cache = {};
          this.data = {};
          this.groups = {};
        }
      }
      return clear;
    };
    return TreeVirtualRowModelGenerator2;
  })(VirtualRowModelGenerator)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/filter.js
var Filter2 = (
  /** @class */
  (function() {
    function Filter3(parent) {
      Grid.Inject(Filter);
      this.parent = parent;
      this.isHierarchyFilter = false;
      this.filteredResult = [];
      this.flatFilteredData = [];
      this.filteredParentRecs = [];
      this.addEventListener();
    }
    Filter3.prototype.getModuleName = function() {
      return "filter";
    };
    Filter3.prototype.destroy = function() {
      this.removeEventListener();
    };
    Filter3.prototype.addEventListener = function() {
      this.parent.on("updateFilterRecs", this.updatedFilteredRecord, this);
      this.parent.on("clearFilters", this.clearFilterLevel, this);
    };
    Filter3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off("updateFilterRecs", this.updatedFilteredRecord);
      this.parent.off("clearFilters", this.clearFilterLevel);
    };
    Filter3.prototype.updatedFilteredRecord = function(dataDetails) {
      setValue("uniqueIDFilterCollection", {}, this.parent);
      this.flatFilteredData = dataDetails.data;
      this.filteredParentRecs = [];
      this.filteredResult = [];
      this.isHierarchyFilter = false;
      var hierarchyMode = this.parent.grid.searchSettings.key === "" ? this.parent.filterSettings.hierarchyMode : this.parent.searchSettings.hierarchyMode;
      for (var f = 0; f < this.flatFilteredData.length; f++) {
        var rec = this.flatFilteredData[parseInt(f.toString(), 10)];
        this.addParentRecord(rec);
        if ((hierarchyMode === "Child" || hierarchyMode === "None") && (this.parent.grid.filterSettings.columns.length !== 0 || this.parent.grid.searchSettings.key !== "")) {
          this.isHierarchyFilter = true;
        }
        var ischild = getObject("childRecords", rec);
        if (!isNullOrUndefined(ischild) && ischild.length) {
          setValue("hasFilteredChildRecords", this.checkChildExsist(rec), rec);
        }
        var parent_1 = getObject("parentItem", rec);
        if (!isNullOrUndefined(parent_1)) {
          var parRecord = getParentData(this.parent, rec.parentItem.uniqueID, true);
          setValue("hasFilteredChildRecords", true, parRecord);
          if (parRecord && parRecord.parentItem) {
            this.updateParentFilteredRecord(parRecord);
          }
        }
      }
      if (this.flatFilteredData.length > 0 && this.isHierarchyFilter) {
        this.updateFilterLevel();
      }
      this.parent.notify("updateAction", { result: this.filteredResult });
    };
    Filter3.prototype.updateParentFilteredRecord = function(record) {
      var parRecord = getParentData(this.parent, record.parentItem.uniqueID, true);
      var uniqueIDValue = getValue("uniqueIDFilterCollection", this.parent);
      if (parRecord && Object.prototype.hasOwnProperty.call(uniqueIDValue, parRecord.uniqueID)) {
        setValue("hasFilteredChildRecords", true, parRecord);
      }
      if (parRecord && parRecord.parentItem) {
        this.updateParentFilteredRecord(parRecord);
      }
    };
    Filter3.prototype.addParentRecord = function(record) {
      var parent = getParentData(this.parent, record.parentUniqueID);
      var hierarchyMode = this.parent.grid.searchSettings.key === "" ? this.parent.filterSettings.hierarchyMode : this.parent.searchSettings.hierarchyMode;
      if (hierarchyMode === "None" && (this.parent.grid.filterSettings.columns.length !== 0 || this.parent.grid.searchSettings.key !== "")) {
        if (isNullOrUndefined(parent)) {
          if (this.flatFilteredData.indexOf(record) !== -1) {
            if (this.filteredResult.indexOf(record) === -1) {
              this.filteredResult.push(record);
              setValue("uniqueIDFilterCollection." + record.uniqueID, record, this.parent);
              record.hasFilteredChildRecords = true;
            }
            return;
          }
        } else {
          this.addParentRecord(parent);
          if (this.flatFilteredData.indexOf(parent) !== -1 || this.filteredResult.indexOf(parent) !== -1) {
            if (this.filteredResult.indexOf(record) === -1) {
              this.filteredResult.push(record);
              setValue("uniqueIDFilterCollection." + record.uniqueID, record, this.parent);
            }
          } else {
            if (this.filteredResult.indexOf(record) === -1 && this.flatFilteredData.indexOf(record) !== -1) {
              this.filteredResult.push(record);
              setValue("uniqueIDFilterCollection." + record.uniqueID, record, this.parent);
            }
          }
        }
      } else {
        if (!isNullOrUndefined(parent)) {
          var hierarchyMode_1 = this.parent.grid.searchSettings.key === "" ? this.parent.filterSettings.hierarchyMode : this.parent.searchSettings.hierarchyMode;
          if (hierarchyMode_1 === "Child" && (this.parent.grid.filterSettings.columns.length !== 0 || this.parent.grid.searchSettings.key !== "")) {
            if (this.flatFilteredData.indexOf(parent) !== -1) {
              this.addParentRecord(parent);
            }
          } else {
            this.addParentRecord(parent);
          }
        }
        if (this.filteredResult.indexOf(record) === -1) {
          this.filteredResult.push(record);
          setValue("uniqueIDFilterCollection." + record.uniqueID, record, this.parent);
        }
      }
    };
    Filter3.prototype.checkChildExsist = function(records) {
      var childRec = getObject("childRecords", records);
      var isExist = false;
      for (var count = 0; count < childRec.length; count++) {
        var ischild = childRec[parseInt(count.toString(), 10)].childRecords;
        var hierarchyMode = this.parent.grid.searchSettings.key === "" ? this.parent.filterSettings.hierarchyMode : this.parent.searchSettings.hierarchyMode;
        if ((hierarchyMode === "Child" || hierarchyMode === "Both") && (this.parent.grid.filterSettings.columns.length !== 0 || this.parent.grid.searchSettings.key !== "")) {
          var uniqueIDValue = getValue("uniqueIDFilterCollection", this.parent);
          if (!Object.prototype.hasOwnProperty.call(uniqueIDValue, childRec[parseInt(count.toString(), 10)].uniqueID)) {
            this.filteredResult.push(childRec[parseInt(count.toString(), 10)]);
            setValue("uniqueIDFilterCollection." + childRec[parseInt(count.toString(), 10)].uniqueID, childRec[parseInt(count.toString(), 10)], this.parent);
            isExist = true;
          }
        }
        if (hierarchyMode === "None" && (this.parent.grid.filterSettings.columns.length !== 0 || this.parent.grid.searchSettings.key !== "")) {
          if (this.flatFilteredData.indexOf(childRec[parseInt(count.toString(), 10)]) !== -1) {
            isExist = true;
            break;
          }
        }
        if (!isNullOrUndefined(ischild) && ischild.length) {
          isExist = this.checkChildExsist(childRec[parseInt(count.toString(), 10)]);
        }
        if ((hierarchyMode === "Child" || hierarchyMode === "Both") && childRec.length) {
          isExist = true;
        }
      }
      return isExist;
    };
    Filter3.prototype.updateFilterLevel = function() {
      var record = this.filteredResult;
      var len = this.filteredResult.length;
      for (var c = 0; c < len; c++) {
        var parent_2 = getParentData(this.parent, record[parseInt(c.toString(), 10)].parentUniqueID);
        var isPrst = record.indexOf(parent_2) !== -1;
        if (isPrst) {
          var parent_3 = getParentData(this.parent, record[parseInt(c.toString(), 10)].parentUniqueID, true);
          record[parseInt(c.toString(), 10)].filterLevel = parent_3.filterLevel + 1;
        } else {
          record[parseInt(c.toString(), 10)].filterLevel = 0;
          this.filteredParentRecs.push(record[parseInt(c.toString(), 10)]);
        }
      }
    };
    Filter3.prototype.clearFilterLevel = function(data) {
      var count = 0;
      var flatData = data.flatData;
      var len = flatData.length;
      var currentRecord;
      for (count; count < len; count++) {
        currentRecord = flatData[parseInt(count.toString(), 10)];
        var fLevel = currentRecord.filterLevel;
        if (fLevel || fLevel === 0 || !isNullOrUndefined(currentRecord.hasFilteredChildRecords)) {
          currentRecord.hasFilteredChildRecords = null;
          currentRecord.filterLevel = null;
        }
      }
      this.filteredResult = [];
      this.parent.notify("updateResults", { result: flatData, count: flatData.length });
    };
    return Filter3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/excel-export.js
var ExcelExport2 = (
  /** @class */
  (function() {
    function ExcelExport3(parent) {
      this.isCollapsedStatePersist = false;
      Grid.Inject(ExcelExport);
      this.parent = parent;
      this.dataResults = {};
      this.addEventListener();
    }
    ExcelExport3.prototype.getModuleName = function() {
      return "ExcelExport";
    };
    ExcelExport3.prototype.addEventListener = function() {
      this.parent.on("updateResults", this.updateExcelResultModel, this);
      this.parent.on("excelCellInfo", this.excelQueryCellInfo, this);
      this.parent.grid.on("export-RowDataBound", this.exportRowDataBound, this);
      this.parent.on("excelAggregateCellInfo", this.excelAggregateCellInfo, this);
      this.parent.grid.on("finalPageSetup", this.finalPageSetup, this);
    };
    ExcelExport3.prototype.destroy = function() {
      this.removeEventListener();
    };
    ExcelExport3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off("updateResults", this.updateExcelResultModel);
      this.parent.off("excelCellInfo", this.excelQueryCellInfo);
      this.parent.grid.off("export-RowDataBound", this.exportRowDataBound);
      this.parent.off("excelAggregateCellInfo", this.excelAggregateCellInfo);
      this.parent.grid.off("finalPageSetup", this.finalPageSetup);
    };
    ExcelExport3.prototype.updateExcelResultModel = function(returnResult) {
      this.dataResults = returnResult;
    };
    ExcelExport3.prototype.Map = function(excelExportProperties, isMultipleExport, workbook, isBlob, isCsv) {
      var _this = this;
      var dataSource = this.parent.dataSource;
      var data = new Data(this.parent.grid);
      var property = Object();
      setValue("isCsv", isCsv, property);
      setValue("cancel", false, property);
      if (!isNullOrUndefined(excelExportProperties)) {
        this.isCollapsedStatePersist = excelExportProperties.isCollapsedStatePersist;
      }
      if (!isNullOrUndefined(excelExportProperties)) {
        if (!this.isLocal() && !isNullOrUndefined(excelExportProperties.dataSource) && !excelExportProperties.dataSource["dataSource"]) {
          return this.parent.grid.excelExportModule.Map(this.parent.grid, excelExportProperties, isMultipleExport, workbook, isCsv, isBlob);
        }
        if (excelExportProperties.exportType === "CurrentPage") {
          excelExportProperties.dataSource = this.parent.getCurrentViewRecords();
          return this.parent.grid.excelExportModule.Map(this.parent.grid, excelExportProperties, isMultipleExport, workbook, isCsv, isBlob);
        }
      }
      return new Promise(function(resolve) {
        var dm = _this.isLocal() && !(dataSource instanceof DataManager) ? new DataManager(dataSource) : _this.parent.dataSource;
        var query = new Query();
        if (!_this.isLocal()) {
          query = _this.generateQuery(query);
          var hasFilter = _this.parent.grid.filterSettings && Array.isArray(_this.parent.grid.filterSettings.columns) && _this.parent.grid.filterSettings.columns.length > 0;
          var hasSearch = _this.parent.grid.searchSettings && typeof _this.parent.grid.searchSettings.key === "string" && _this.parent.grid.searchSettings.key.trim().length > 0;
          var hasSorting = _this.parent.grid.sortSettings && Array.isArray(_this.parent.grid.sortSettings.columns) && _this.parent.grid.sortSettings.columns.length > 0;
          if (hasFilter || hasSearch || hasSorting) {
            query.queries = _this.parent.grid.getDataModule().generateQuery().queries;
            query = ExportHelper.getQuery(_this.parent.grid, data);
            if (isNullOrUndefined(_this.parent.filterModule)) {
              query.queries = query.queries.slice(1, 2);
              query.params = query.params.slice(0, 0);
            }
          }
          setValue("query", query, property);
        }
        _this.parent.trigger(beforeExcelExport, extend(property, excelExportProperties));
        if (getObject("cancel", property)) {
          return null;
        }
        dm.executeQuery(query).then(function(e) {
          var customData = null;
          if (!isNullOrUndefined(excelExportProperties) && !isNullOrUndefined(excelExportProperties.dataSource)) {
            customData = excelExportProperties.dataSource;
          }
          excelExportProperties = _this.manipulateExportProperties(excelExportProperties, dataSource, e);
          return _this.parent.grid.excelExportModule.Map(_this.parent.grid, excelExportProperties, isMultipleExport, workbook, isCsv, isBlob).then(function(book) {
            if (customData != null) {
              excelExportProperties.dataSource = customData;
            } else {
              delete excelExportProperties.dataSource;
            }
            resolve(book);
          });
        });
      });
    };
    ExcelExport3.prototype.generateQuery = function(query, property) {
      if (!isNullOrUndefined(property) && property.exportType === "CurrentPage" && this.parent.allowPaging) {
        property.exportType = "AllPages";
        query.addParams("ExportType", "CurrentPage");
        query.where(this.parent.parentIdMapping, "equal", null);
        query = getObject("grid.renderModule.data.pageQuery", this.parent)(query);
      }
      return query;
    };
    ExcelExport3.prototype.manipulateExportProperties = function(property, dtSrc, queryResult) {
      var _this = this;
      var args = Object();
      if (!isNullOrUndefined(this.parent.grid.getDataModule())) {
        setValue("query", this.parent.grid.getDataModule().generateQuery(true), args);
      }
      if (!this.isLocal() && !isNullOrUndefined(property) && !isNullOrUndefined(property.isCollapsedStatePersist) && property.isCollapsedStatePersist === false) {
        if (args.query && args.query.queries && args.query.queries.length) {
          args.query.queries = args.query.queries.filter(function(q) {
            if (q.fn === "onWhere" && q.e) {
              var preds = q.e;
              if (preds && preds.field === _this.parent.parentIdMapping && (preds.value === null || preds.value === "null")) {
                return false;
              }
            }
            return true;
          });
        }
        if (args.query && args.query.params && args.query.params.length) {
          args.query.params = args.query.params.filter(function(param) {
            return param.key !== "IdMapping";
          });
        }
      }
      setValue("isExport", true, args);
      if (!isNullOrUndefined(property) && !isNullOrUndefined(property.exportType)) {
        setValue("exportType", property.exportType, args);
      }
      if (!this.isLocal()) {
        this.parent.parentData = [];
        this.parent.dataModule.convertToFlatData(getObject("result", queryResult));
        setValue("expresults", this.parent.flatData, args);
      }
      this.parent.notify("dataProcessor", args);
      args = this.dataResults;
      dtSrc = isNullOrUndefined(args.result) ? this.parent.flatData.slice(0) : args.result;
      if (!this.isLocal()) {
        this.parent.flatData = [];
      }
      if (property && property.dataSource) {
        var flatsData = this.parent.flatData;
        var dataSrc = property.dataSource instanceof DataManager ? property.dataSource.dataSource.json : property.dataSource;
        this.parent.dataModule.convertToFlatData(dataSrc);
        dtSrc = this.parent.flatData;
        this.parent.flatData = flatsData;
      }
      property = isNullOrUndefined(property) ? Object() : property;
      property.dataSource = new DataManager({ json: dtSrc });
      if (this.parent.aggregates.length > 0) {
        property.query = args["query"];
      }
      return property;
    };
    ExcelExport3.prototype.excelQueryCellInfo = function(args) {
      if (this.parent.grid.getColumnIndexByUid(args.column.uid) === this.parent.treeColumnIndex) {
        var style = {};
        var data = args.data;
        var ispadfilter = isNullOrUndefined(data.filterLevel);
        var pad = ispadfilter ? data.level : data.filterLevel;
        style.indent = pad;
        args.style = style;
      }
      this.parent.notify("updateResults", args);
      this.parent.trigger("excelQueryCellInfo", args);
    };
    ExcelExport3.prototype.excelAggregateCellInfo = function(args) {
      this.parent.trigger("excelAggregateQueryCellInfo", args);
    };
    ExcelExport3.prototype.exportRowDataBound = function(excelRow) {
      if (excelRow.type === "excel") {
        var excelrowobj = excelRow.rowObj.data;
        var filtercolumnlength = this.parent.grid.filterSettings.columns.length;
        var rowlength = excelRow.excelRows.length;
        var rowlevel = excelrowobj.level;
        if (excelrowobj.parentItem && getParentData(this.parent, excelrowobj.parentItem.uniqueID, Boolean(filtercolumnlength))) {
          var expandedStatus = false;
          var sublevelState = false;
          var state = getExpandStatus(this.parent, excelrowobj, this.parent.parentData);
          if (this.isCollapsedStatePersist && (!state || !this.parent.isLocalData)) {
            expandedStatus = true;
            sublevelState = excelrowobj.expanded ? false : true;
          }
          excelRow.excelRows[rowlength - 1].grouping = {
            outlineLevel: rowlevel,
            isCollapsed: sublevelState,
            isHidden: expandedStatus
          };
        } else if (excelrowobj.hasChildRecords && isNullOrUndefined(excelrowobj.parentItem)) {
          excelRow.excelRows[rowlength - 1].grouping = { outlineLevel: rowlevel };
        }
      }
    };
    ExcelExport3.prototype.finalPageSetup = function(workbook) {
      for (var i = 0; i < workbook.worksheets.length; i++) {
        if (workbook.worksheets[parseInt(i.toString(), 10)].rows) {
          workbook.worksheets[parseInt(i.toString(), 10)].pageSetup = { isSummaryRowBelow: false };
        }
      }
    };
    ExcelExport3.prototype.isLocal = function() {
      return !isRemoteData(this.parent) && isOffline(this.parent);
    };
    return ExcelExport3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/pdf-export.js
var PdfExport2 = (
  /** @class */
  (function() {
    function PdfExport3(parent) {
      this.isCollapsedStatePersist = false;
      Grid.Inject(PdfExport);
      this.parent = parent;
      this.dataResults = {};
      this.addEventListener();
    }
    PdfExport3.prototype.getModuleName = function() {
      return "PdfExport";
    };
    PdfExport3.prototype.addEventListener = function() {
      this.parent.on("pdfCellInfo", this.pdfQueryCellInfo, this);
      this.parent.on("updateResults", this.updatePdfResultModel, this);
      this.parent.on("pdfAggregateCellInfo", this.pdfAggregateCellInfo, this);
    };
    PdfExport3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off("pdfCellInfo", this.pdfQueryCellInfo);
      this.parent.off("updateResults", this.updatePdfResultModel);
      this.parent.off("pdfAggregateCellInfo", this.pdfAggregateCellInfo);
    };
    PdfExport3.prototype.destroy = function() {
      this.removeEventListener();
    };
    PdfExport3.prototype.updatePdfResultModel = function(returnResult) {
      this.dataResults = returnResult;
    };
    PdfExport3.prototype.Map = function(pdfExportProperties, isMultipleExport, pdfDoc, isBlob) {
      var _this = this;
      var dtSrc = this.parent.dataSource;
      var prop = Object();
      var isLocal = !isRemoteData(this.parent) && isOffline(this.parent);
      setValue("cancel", false, prop);
      if (!isNullOrUndefined(pdfExportProperties)) {
        this.isCollapsedStatePersist = pdfExportProperties.isCollapsedStatePersist;
      }
      if (!isNullOrUndefined(pdfExportProperties)) {
        if (!isLocal && !isNullOrUndefined(pdfExportProperties.dataSource) && !pdfExportProperties.dataSource["dataSource"]) {
          return this.parent.grid.pdfExportModule.Map(this.parent.grid, pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
        }
        if (pdfExportProperties.exportType === "CurrentPage") {
          pdfExportProperties.dataSource = this.parent.getCurrentViewRecords();
          return this.parent.grid.pdfExportModule.Map(this.parent.grid, pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
        }
      }
      return new Promise(function(resolve) {
        var dm = isLocal && !(dtSrc instanceof DataManager) ? new DataManager(dtSrc) : _this.parent.dataSource;
        var query = new Query();
        if (!isLocal) {
          query = _this.generateQuery(query);
          setValue("query", query, prop);
        }
        _this.parent.trigger(beforePdfExport, extend(prop, pdfExportProperties));
        if (getObject("cancel", prop)) {
          return null;
        }
        dm.executeQuery(query).then(function(e) {
          var customsData = null;
          if (!isNullOrUndefined(pdfExportProperties) && !isNullOrUndefined(pdfExportProperties.dataSource)) {
            customsData = pdfExportProperties.dataSource;
          }
          pdfExportProperties = _this.manipulatePdfProperties(pdfExportProperties, dtSrc, e);
          return _this.parent.grid.pdfExportModule.Map(_this.parent.grid, pdfExportProperties, isMultipleExport, pdfDoc, isBlob).then(function(document2) {
            if (customsData != null) {
              pdfExportProperties.dataSource = customsData;
            } else {
              delete pdfExportProperties.dataSource;
            }
            resolve(document2);
          });
        });
      });
    };
    PdfExport3.prototype.generateQuery = function(query, prop) {
      if (!isNullOrUndefined(prop) && prop.exportType === "CurrentPage" && this.parent.allowPaging) {
        prop.exportType = "AllPages";
        query.addParams("ExportType", "CurrentPage");
        query.where(this.parent.parentIdMapping, "equal", null);
        query = getObject("grid.renderModule.data.pageQuery", this.parent)(query);
      }
      return query;
    };
    PdfExport3.prototype.manipulatePdfProperties = function(prop, dtSrc, queryResult) {
      var _this = this;
      var args = Object();
      var isLocal = !isRemoteData(this.parent) && isOffline(this.parent);
      setValue("query", this.parent.grid.getDataModule().generateQuery(true), args);
      if (!isLocal && !isNullOrUndefined(prop) && !isNullOrUndefined(prop.isCollapsedStatePersist) && prop.isCollapsedStatePersist === false) {
        if (args.query && args.query.queries && args.query.queries.length) {
          args.query.queries = args.query.queries.filter(function(q) {
            if (q.fn === "onWhere" && q.e) {
              var preds = q.e;
              if (preds && preds.field === _this.parent.parentIdMapping && (preds.value === null || preds.value === "null")) {
                return false;
              }
            }
            return true;
          });
        }
        if (args.query && args.query.params && args.query.params.length) {
          args.query.params = args.query.params.filter(function(param) {
            return param.key !== "IdMapping";
          });
        }
      }
      setValue("isExport", true, args);
      setValue("isPdfExport", true, args);
      if (!isNullOrUndefined(prop) && !isNullOrUndefined(prop.isCollapsedStatePersist)) {
        setValue("isCollapsedStatePersist", prop.isCollapsedStatePersist, args);
      }
      if (!isNullOrUndefined(prop) && !isNullOrUndefined(prop.exportType)) {
        setValue("exportType", prop.exportType, args);
      }
      if (!isLocal) {
        this.parent.parentData = [];
        this.parent.dataModule.convertToFlatData(getValue("result", queryResult));
        setValue("expresults", this.parent.flatData, args);
      }
      this.parent.notify("dataProcessor", args);
      args = this.dataResults;
      dtSrc = isNullOrUndefined(args.result) ? this.parent.flatData.slice(0) : args.result;
      if (!isLocal) {
        this.parent.flatData = [];
      }
      if (prop && prop.dataSource && isLocal) {
        var flatDatas = this.parent.flatData;
        var dataSrc = prop.dataSource instanceof DataManager ? prop.dataSource.dataSource.json : prop.dataSource;
        this.parent.dataModule.convertToFlatData(dataSrc);
        dtSrc = this.parent.flatData;
        this.parent.flatData = flatDatas;
      }
      prop = isNullOrUndefined(prop) ? {} : prop;
      prop.dataSource = new DataManager({ json: dtSrc });
      prop.query = args["query"];
      return prop;
    };
    PdfExport3.prototype.pdfQueryCellInfo = function(args) {
      if (this.parent.grid.getColumnIndexByUid(args.column.uid) === this.parent.treeColumnIndex) {
        var style = {};
        var data = getObject("data", args);
        var ispadfilter = isNullOrUndefined(data.filterLevel);
        var pad = ispadfilter ? data.level : data.filterLevel;
        style.paragraphIndent = pad * 3;
        args.style = style;
      }
      this.parent.notify("updateResults", args);
      this.parent.trigger("pdfQueryCellInfo", args);
    };
    PdfExport3.prototype.pdfAggregateCellInfo = function(args) {
      this.parent.trigger("pdfAggregateQueryCellInfo", args);
    };
    return PdfExport3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/page.js
var Page2 = (
  /** @class */
  (function() {
    function Page3(parent) {
      Grid.Inject(Page);
      this.parent = parent;
      this.addEventListener();
    }
    Page3.prototype.addEventListener = function() {
      this.parent.on(localPagedExpandCollapse, this.collapseExpandPagedchilds, this);
      this.parent.on(pagingActions, this.pageAction, this);
    };
    Page3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off(localPagedExpandCollapse, this.collapseExpandPagedchilds);
      this.parent.off(pagingActions, this.pageAction);
    };
    Page3.prototype.getModuleName = function() {
      return "pager";
    };
    Page3.prototype.refresh = function() {
      this.parent.grid.pagerModule.refresh();
    };
    Page3.prototype.destroy = function() {
      this.removeEventListener();
    };
    Page3.prototype.goToPage = function(pageNo) {
      this.parent.grid.pagerModule.goToPage(pageNo);
    };
    Page3.prototype.updateExternalMessage = function(message) {
      if (isNullOrUndefined(message)) {
        var error = "The provided value for the message is undefined. Please ensure the message contains string.";
        this.parent.trigger(actionFailure, { error });
      }
      this.parent.grid.pagerModule.updateExternalMessage(message);
    };
    Page3.prototype.collapseExpandPagedchilds = function(rowDetails) {
      rowDetails.record.expanded = rowDetails.action === "collapse" ? false : true;
      this.parent.flatData.map(function(e) {
        return e.expanded = e.uniqueID === rowDetails.record.uniqueID && e.expanded !== rowDetails.record.expanded ? rowDetails.record.expanded : e.expanded;
      });
      if (this.parent.enableImmutableMode) {
        var primaryKeyField_1 = this.parent.getPrimaryKeyFieldNames()[0];
        var record = this.parent.flatData.filter(function(e) {
          return e["" + primaryKeyField_1] === rowDetails.record["" + primaryKeyField_1];
        });
        if (record.length) {
          record[0].expanded = rowDetails.record.expanded;
        }
      }
      var ret = {
        result: this.parent.flatData,
        row: rowDetails.row,
        action: rowDetails.action,
        record: rowDetails.record,
        count: this.parent.flatData.length
      };
      getValue("grid.renderModule", this.parent).dataManagerSuccess(ret);
      if (this.parent.enableImmutableMode) {
        var row = "row";
        var action = "action";
        var targetEle = void 0;
        if (ret["" + action] === "collapse") {
          targetEle = ret["" + row].getElementsByClassName("e-treegridexpand")[0];
          if (!isNullOrUndefined(targetEle)) {
            removeClass([targetEle], "e-treegridexpand");
            addClass([targetEle], "e-treegridcollapse");
          }
        } else if (ret["" + action] === "expand") {
          targetEle = ret["" + row].getElementsByClassName("e-treegridcollapse")[0];
          if (!isNullOrUndefined(targetEle)) {
            removeClass([targetEle], "e-treegridcollapse");
            addClass([targetEle], "e-treegridexpand");
          }
        }
      }
    };
    Page3.prototype.pageRoot = function(pagedResults, temp, result) {
      var newResults = isNullOrUndefined(result) ? [] : result;
      var _loop_1 = function(t2) {
        newResults.push(temp[parseInt(t2.toString(), 10)]);
        var res = [];
        if (temp[parseInt(t2.toString(), 10)].hasChildRecords) {
          res = pagedResults.filter(function(e) {
            return temp[parseInt(t2.toString(), 10)].uniqueID === e.parentUniqueID;
          });
          newResults = this_1.pageRoot(pagedResults, res, newResults);
        }
      };
      var this_1 = this;
      for (var t = 0; t < temp.length; t++) {
        _loop_1(t);
      }
      return newResults;
    };
    Page3.prototype.updatePageSize = function(pageingDetails) {
      var updateSize = pageingDetails.count;
      var gridPagerModule = this.parent.grid.pagerModule;
      if (this.parent.pageSettings.pageSizes === true) {
        if (gridPagerModule.pagerObj.pagerdropdownModule["dropDownListObject"].value === gridPagerModule.pagerObj.getLocalizedLabel("All")) {
          gridPagerModule["pagerObj"].totalRecordsCount = updateSize;
          this.parent.grid.pageSettings.pageSize = updateSize;
        }
      }
    };
    Page3.prototype.pageAction = function(pageingDetails) {
      var _this = this;
      var dm = new DataManager(pageingDetails.result);
      if (this.parent.pageSettings.pageSizeMode === "Root") {
        var temp = [];
        var propname = this.parent.grid.filterSettings.columns.length > 0 && (this.parent.filterSettings.hierarchyMode === "Child" || this.parent.filterSettings.hierarchyMode === "None") ? "filterLevel" : "level";
        var query = new Query().where(propname, "equal", 0);
        temp = dm.executeLocal(query);
        pageingDetails.count = temp.length;
        var size = this.parent.grid.pageSettings.pageSize;
        var current = this.parent.grid.pageSettings.currentPage;
        var skip = size * (current - 1);
        query = query.skip(skip).take(size);
        temp = dm.executeLocal(query);
        var newResults = this.pageRoot(pageingDetails.result, temp);
        pageingDetails.result = newResults;
      } else {
        var dm_1 = new DataManager(pageingDetails.result);
        var expanded2 = new Predicate("expanded", "notequal", null).or("expanded", "notequal", void 0);
        var parents_1 = dm_1.executeLocal(new Query().where(expanded2));
        var visualData = void 0;
        if (isFilterChildHierarchy(this.parent) && (pageingDetails.actionArgs.action !== "collapse" && pageingDetails.actionArgs.action !== "expand")) {
          visualData = parents_1;
        } else {
          visualData = parents_1.filter(function(e) {
            return getExpandStatus(_this.parent, e, parents_1);
          });
        }
        pageingDetails.count = visualData.length;
        var query = new Query();
        var size = this.parent.grid.pageSettings.pageSize;
        this.updatePageSize(pageingDetails);
        var current = this.parent.grid.pageSettings.currentPage;
        if (visualData.length < current * size) {
          current = Math.floor(visualData.length / size) + (visualData.length % size ? 1 : 0);
          current = current ? current : 1;
          this.parent.grid.setProperties({ pageSettings: { currentPage: current } }, true);
        }
        var skip = size * (current - 1);
        query = query.skip(skip).take(size);
        dm_1.dataSource.json = visualData;
        pageingDetails.result = dm_1.executeLocal(query);
      }
      this.parent.notify("updateAction", pageingDetails);
    };
    return Page3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/toolbar.js
var Toolbar2 = (
  /** @class */
  (function() {
    function Toolbar3(parent) {
      Grid.Inject(Toolbar);
      this.parent = parent;
      this.addEventListener();
    }
    Toolbar3.prototype.getModuleName = function() {
      return "toolbar";
    };
    Toolbar3.prototype.addEventListener = function() {
      this.parent.on(rowSelected, this.refreshToolbar, this);
      this.parent.on(rowDeselected, this.refreshToolbar, this);
      this.parent.on(toolbarClick, this.toolbarClickHandler, this);
    };
    Toolbar3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off(rowSelected, this.refreshToolbar);
      this.parent.off(rowDeselected, this.refreshToolbar);
      this.parent.off(toolbarClick, this.toolbarClickHandler);
    };
    Toolbar3.prototype.refreshToolbar = function(args) {
      var toolbarElement = this.parent.grid.toolbarModule.getToolbar();
      if (!isNullOrUndefined(toolbarElement)) {
        var tObj = this.parent;
        var indentElement = void 0;
        var outdentElement = void 0;
        var indentID = tObj.element.id + "_gridcontrol_indent";
        var outdentID = tObj.element.id + "_gridcontrol_outdent";
        var indentEle = toolbarElement.querySelector("#" + indentID);
        var outdentEle = toolbarElement.querySelector("#" + outdentID);
        var row = args.row;
        var selectedrow = tObj.getSelectedRows()[0];
        if (!isNullOrUndefined(row[0])) {
          row = row[0];
        }
        row = !isNullOrUndefined(selectedrow) && selectedrow.rowIndex !== row.rowIndex ? selectedrow : row;
        if (indentEle !== null && outdentEle !== null) {
          indentElement = indentEle.parentElement;
          outdentElement = outdentEle.parentElement;
          if (row.rowIndex === 0 || tObj.getSelectedRowIndexes().length > 1) {
            indentElement.classList.add("e-hidden");
            outdentElement.classList.add("e-hidden");
          } else if (args["name"] !== "rowDeselected" || !isNullOrUndefined(selectedrow) && tObj.grid.isCheckBoxSelection) {
            var selectedItem = tObj.getCurrentViewRecords()[row.rowIndex];
            if (!isNullOrUndefined(selectedItem)) {
              if (selectedItem.level > tObj.getCurrentViewRecords()[row.rowIndex - 1].level) {
                indentElement.classList.add("e-hidden");
              } else {
                indentElement.classList.remove("e-hidden");
              }
              if (selectedItem.level === tObj.getCurrentViewRecords()[row.rowIndex - 1].level) {
                indentElement.classList.remove("e-hidden");
              }
              if (selectedItem.level === 0) {
                outdentElement.classList.add("e-hidden");
              }
              if (selectedItem.level !== 0) {
                outdentElement.classList.remove("e-hidden");
              }
            }
          }
          if (args["name"] === "rowDeselected" && isNullOrUndefined(selectedrow) && !tObj.grid.isCheckBoxSelection) {
            if (this.parent.toolbar["includes"]("Indent")) {
              indentElement.classList.add("e-hidden");
            }
            if (this.parent.toolbar["includes"]("Outdent")) {
              outdentElement.classList.add("e-hidden");
            }
          }
        }
      }
    };
    Toolbar3.prototype.toolbarClickHandler = function(args) {
      var tObj = this.parent;
      var indentOutdentAction = "indentOutdentAction";
      if (this.parent.editSettings.mode === "Cell" && this.parent.grid.editSettings.mode === "Batch" && args.item.id === this.parent.grid.element.id + "_update") {
        args.cancel = true;
        this.parent.grid.editModule.saveCell();
      }
      if (args.item.id === this.parent.grid.element.id + "_expandall") {
        this.parent.expandAll();
      }
      if (args.item.id === this.parent.grid.element.id + "_collapseall") {
        this.parent.collapseAll();
      }
      if (args.item.id === tObj.grid.element.id + "_indent" && tObj.getSelectedRecords().length && !isNullOrUndefined(tObj.rowDragAndDropModule)) {
        this.parent.rowDragAndDropModule["" + indentOutdentAction](null, "indent");
      }
      if (args.item.id === tObj.grid.element.id + "_outdent" && tObj.getSelectedRecords().length && !isNullOrUndefined(tObj.rowDragAndDropModule)) {
        this.parent.rowDragAndDropModule["" + indentOutdentAction](null, "outdent");
      }
    };
    Toolbar3.prototype.getToolbar = function() {
      return this.parent.grid.toolbarModule.getToolbar();
    };
    Toolbar3.prototype.enableItems = function(items, isEnable) {
      this.parent.grid.toolbarModule.enableItems(items, isEnable);
    };
    Toolbar3.prototype.destroy = function() {
      this.removeEventListener();
    };
    return Toolbar3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/summary.js
var Aggregate2 = (
  /** @class */
  (function() {
    function Aggregate3(parent) {
      Grid.Inject(Aggregate);
      this.parent = parent;
      this.flatChildRecords = [];
      this.summaryQuery = [];
    }
    Aggregate3.prototype.getModuleName = function() {
      return "summary";
    };
    Aggregate3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
    };
    Aggregate3.prototype.calculateSummaryValue = function(summaryQuery, filteredData, isSort) {
      this.summaryQuery = summaryQuery;
      var parentRecord;
      var parentData = filteredData.filter(function(data) {
        return !getObject("isSummaryRow", data);
      });
      var parentRecords = findParentRecords(parentData);
      var flatRecords = parentData.slice();
      var summaryLength = Object.keys(this.parent.aggregates).length;
      var dataLength = Object.keys(parentRecords).length;
      var childRecordsLength;
      var columns = this.parent.getColumns();
      if (this.parent.aggregates.filter(function(x) {
        return x.showChildSummary;
      }).length) {
        for (var i = 0, len = dataLength; i < len; i++) {
          parentRecord = parentRecords[parseInt(i.toString(), 10)];
          childRecordsLength = this.getChildRecordsLength(parentRecord, flatRecords);
          if (childRecordsLength) {
            var _loop_1 = function(summaryRowIndex2, len_12) {
              var item = void 0;
              item = {};
              for (var i_1 = 0; i_1 < columns.length; i_1++) {
                var field = isNullOrUndefined(getObject("field", columns[parseInt(i_1.toString(), 10)])) ? columns[parseInt(i_1.toString(), 10)] : getObject("field", columns[parseInt(i_1.toString(), 10)]);
                item["" + field] = null;
              }
              item = this_1.createSummaryItem(item, this_1.parent.aggregates[summaryRowIndex2 - 1]);
              if (this_1.parent.aggregates[summaryRowIndex2 - 1].showChildSummary) {
                var idx_1;
                flatRecords.map(function(e, i2) {
                  if (e.uniqueID === parentRecord.uniqueID) {
                    idx_1 = i2;
                    return;
                  }
                });
                var currentIndex = idx_1 + childRecordsLength + summaryRowIndex2;
                var summaryParent = extend({}, parentRecord);
                delete summaryParent.childRecords;
                delete summaryParent[this_1.parent.childMapping];
                setValue("parentItem", summaryParent, item);
                var level = getObject("level", summaryParent);
                setValue("level", level + 1, item);
                setValue("isSummaryRow", true, item);
                setValue("parentUniqueID", summaryParent.uniqueID, item);
                if (isSort) {
                  var childRecords = getObject("childRecords", parentRecord);
                  if (childRecords.length) {
                    childRecords.push(item);
                  }
                }
                flatRecords.splice(currentIndex, 0, item);
              } else {
                return "continue";
              }
            };
            var this_1 = this;
            for (var summaryRowIndex = 1, len_1 = summaryLength; summaryRowIndex <= len_1; summaryRowIndex++) {
              _loop_1(summaryRowIndex, len_1);
            }
            this.flatChildRecords = [];
          }
        }
      } else {
        var items = {};
        for (var columnIndex = 0, length_1 = columns.length; columnIndex < length_1; columnIndex++) {
          var fields = isNullOrUndefined(getObject("field", columns[parseInt(columnIndex.toString(), 10)])) ? columns[parseInt(columnIndex.toString(), 10)] : getObject("field", columns[parseInt(columnIndex.toString(), 10)]);
          items["" + fields] = null;
        }
        for (var summaryRowIndex = 1, length_2 = summaryLength; summaryRowIndex <= length_2; summaryRowIndex++) {
          this.createSummaryItem(items, this.parent.aggregates[summaryRowIndex - 1]);
        }
      }
      return flatRecords;
    };
    Aggregate3.prototype.getChildRecordsLength = function(parentData, flatData) {
      var recordLength = Object.keys(flatData).length;
      var record;
      for (var i = 0, len = recordLength; i < len; i++) {
        record = flatData[parseInt(i.toString(), 10)];
        var parent_1 = isNullOrUndefined(record.parentItem) ? null : flatData.filter(function(e) {
          return e.uniqueID === record.parentItem.uniqueID;
        })[0];
        if (parentData === parent_1) {
          this.flatChildRecords.push(record);
          var hasChild = getObject("hasChildRecords", record);
          if (hasChild) {
            this.getChildRecordsLength(record, flatData);
          } else {
            continue;
          }
        }
      }
      return this.flatChildRecords.length;
    };
    Aggregate3.prototype.createSummaryItem = function(itemData, summary) {
      var summaryColumnLength = Object.keys(summary.columns).length;
      for (var i = 0, len = summaryColumnLength; i < len; i++) {
        var displayColumn = isNullOrUndefined(summary.columns[parseInt(i.toString(), 10)].columnName) ? summary.columns[parseInt(i.toString(), 10)].field : summary.columns[parseInt(i.toString(), 10)].columnName;
        var keys = Object.keys(itemData);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
          var key = keys_1[_i];
          if (key === displayColumn) {
            if (this.flatChildRecords.length) {
              itemData["" + key] = this.getSummaryValues(summary.columns[parseInt(i.toString(), 10)], this.flatChildRecords);
            } else if (this.parent.isLocalData) {
              var data = this.parent.dataSource instanceof DataManager ? this.parent.dataSource.dataSource.json : this.parent.flatData;
              itemData["" + key] = this.getSummaryValues(summary.columns[parseInt(i.toString(), 10)], data);
            }
          } else {
            continue;
          }
        }
      }
      return itemData;
    };
    Aggregate3.prototype.getSummaryValues = function(summaryColumn, summaryData) {
      var qry = new Query();
      var single = {};
      var helper = {};
      var type = !isNullOrUndefined(summaryColumn.field) ? this.parent.getColumnByField(summaryColumn.field).type : void 0;
      summaryColumn.setPropertiesSilent({ format: this.getFormatFromType(summaryColumn.format, type) });
      summaryColumn.setFormatter(this.parent.grid.locale);
      var formatFn = summaryColumn.getFormatter() || /* @__PURE__ */ (function() {
        return function(a) {
          return a;
        };
      })();
      summaryColumn.setTemplate(helper);
      var tempObj = summaryColumn.getTemplate(2);
      qry.queries = this.summaryQuery;
      qry.requiresCount();
      var sumData = new DataManager(summaryData).executeLocal(qry);
      var types = summaryColumn.type;
      var summaryKey;
      types = [summaryColumn.type];
      for (var i = 0; i < types.length; i++) {
        summaryKey = types[parseInt(i.toString(), 10)];
        var key = summaryColumn.field + " - " + types[parseInt(i.toString(), 10)].toLowerCase();
        var val = types[parseInt(i.toString(), 10)] !== "Custom" ? getObject("aggregates", sumData) : (
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
          calculateAggregate(types[parseInt(i.toString(), 10)], sumData, summaryColumn, this.parent)
        );
        var disp = summaryColumn.columnName;
        var value_1 = types[parseInt(i.toString(), 10)] !== "Custom" ? val["" + key] : val;
        single["" + disp] = single["" + disp] || {};
        single["" + disp]["" + key] = value_1;
        single["" + disp][types[parseInt(i.toString(), 10)]] = !isNullOrUndefined(val) && !isNullOrUndefined(value_1) ? formatFn(value_1) : " ";
      }
      helper.format = summaryColumn.getFormatter();
      var cellElement = createElement("td", {
        className: "e-summary"
      });
      if (this.parent.isReact && typeof summaryColumn.footerTemplate !== "string") {
        var renderReactTemplates = "renderReactTemplates";
        tempObj.fn(single[summaryColumn.columnName], this.parent, tempObj.property, "", null, null, cellElement);
        this.parent["" + renderReactTemplates]();
      } else {
        appendChildren(cellElement, tempObj.fn(single[summaryColumn.columnName], this.parent, tempObj.property));
      }
      var value = single["" + summaryColumn.columnName]["" + summaryKey];
      return cellElement.innerHTML.indexOf(value) === -1 ? cellElement.innerHTML + value : cellElement.innerHTML;
    };
    Aggregate3.prototype.getFormatFromType = function(summaryformat, type) {
      if (isNullOrUndefined(type) || typeof summaryformat !== "string") {
        return summaryformat;
      }
      var obj;
      switch (type) {
        case "number":
          obj = { format: summaryformat };
          break;
        case "datetime":
          obj = { type: "dateTime", skeleton: summaryformat };
          break;
        case "date":
          obj = { type, skeleton: summaryformat };
          break;
      }
      return obj;
    };
    Aggregate3.prototype.destroy = function() {
      this.removeEventListener();
    };
    return Aggregate3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/sort.js
var Sort2 = (
  /** @class */
  (function() {
    function Sort3(grid) {
      Grid.Inject(Sort);
      this.parent = grid;
      this.taskIds = [];
      this.flatSortedData = [];
      this.storedIndex = -1;
      this.isSelfReference = !isNullOrUndefined(this.parent.parentIdMapping);
      this.addEventListener();
    }
    Sort3.prototype.getModuleName = function() {
      return "sort";
    };
    Sort3.prototype.addEventListener = function() {
      this.parent.on("updateModel", this.updateModel, this);
      this.parent.on("createSort", this.createdSortedRecords, this);
    };
    Sort3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off("updateModel", this.updateModel);
      this.parent.off("createSort", this.createdSortedRecords);
    };
    Sort3.prototype.createdSortedRecords = function(sortParams) {
      var data = sortParams.modifiedData;
      var srtQry = sortParams.srtQry;
      this.iterateSort(data, srtQry);
      this.storedIndex = -1;
      sortParams.modifiedData = this.flatSortedData;
      if (srtQry.queries.filter(function(q) {
        return q.fn === "onSortBy";
      }).length > 0) {
        this.sortedResult = this.flatSortedData.filter(function(item) {
          return !item.isSummaryRow;
        });
      } else {
        this.sortedResult = [];
      }
      this.flatSortedData = [];
    };
    Sort3.prototype.iterateSort = function(data, srtQry) {
      var gridQuery = this.parent.query;
      var filterQuery = [];
      if (!isNullOrUndefined(gridQuery)) {
        filterQuery = gridQuery.queries.filter(function(q) {
          return q.fn === "onWhere";
        });
      }
      for (var d = 0; d < data.length; d++) {
        if (filterQuery.length > 0 || this.parent.grid.filterSettings.columns.length > 0 || this.parent.grid.searchSettings.key !== "") {
          if (!isNullOrUndefined(getParentData(this.parent, data[parseInt(d.toString(), 10)].uniqueID, true))) {
            this.storedIndex++;
            this.flatSortedData[this.storedIndex] = data[parseInt(d.toString(), 10)];
          }
        } else {
          this.storedIndex++;
          this.flatSortedData[this.storedIndex] = data[parseInt(d.toString(), 10)];
        }
        if (data[parseInt(d.toString(), 10)].hasChildRecords) {
          var childSort = new DataManager(data[parseInt(d.toString(), 10)].childRecords).executeLocal(srtQry);
          if (this.parent.allowRowDragAndDrop && data[parseInt(d.toString(), 10)].childRecords.indexOf(this.parent.rowDragAndDropModule["draggedRecord"]) !== -1 && this.parent.rowDragAndDropModule["dropPosition"] !== "middleSegment") {
            var dragdIndex = childSort.indexOf(this.parent.rowDragAndDropModule["draggedRecord"]);
            childSort.splice(dragdIndex, 1);
            var dropdIndex = childSort.indexOf(this.parent.rowDragAndDropModule["droppedRecord"]);
            if (this.parent.rowDragAndDropModule["dropPosition"] === "topSegment") {
              childSort.splice(dropdIndex, 0, this.parent.rowDragAndDropModule["draggedRecord"]);
            } else if (this.parent.rowDragAndDropModule["dropPosition"] === "bottomSegment") {
              childSort.splice(dropdIndex + 1, 0, this.parent.rowDragAndDropModule["draggedRecord"]);
            }
          }
          this.iterateSort(childSort, srtQry);
        }
      }
    };
    Sort3.prototype.sortColumn = function(columnName, direction, isMultiSort) {
      this.parent.grid.sortColumn(columnName, direction, isMultiSort);
    };
    Sort3.prototype.removeSortColumn = function(field) {
      this.parent.grid.removeSortColumn(field);
    };
    Sort3.prototype.updateModel = function() {
      this.parent.setProperties({ sortSettings: getActualProperties(this.parent.grid.sortSettings) }, true);
    };
    Sort3.prototype.clearSorting = function() {
      this.parent.grid.clearSorting();
      this.updateModel();
    };
    Sort3.prototype.destroy = function() {
      this.removeEventListener();
    };
    return Sort3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/column-menu.js
var ColumnMenu2 = (
  /** @class */
  (function() {
    function ColumnMenu3(parent) {
      Grid.Inject(ColumnMenu);
      this.parent = parent;
    }
    ColumnMenu3.prototype.getColumnMenu = function() {
      return this.parent.grid.columnMenuModule.getColumnMenu();
    };
    ColumnMenu3.prototype.destroy = function() {
    };
    ColumnMenu3.prototype.getModuleName = function() {
      return "columnMenu";
    };
    return ColumnMenu3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/context-menu.js
var ContextMenu2 = (
  /** @class */
  (function() {
    function ContextMenu3(parent) {
      Grid.Inject(ContextMenu);
      this.parent = parent;
      this.addEventListener();
    }
    ContextMenu3.prototype.addEventListener = function() {
      this.parent.on("contextMenuOpen", this.contextMenuOpen, this);
      this.parent.on("contextMenuClick", this.contextMenuClick, this);
      this.parent.on("contextMenuItemClick", this.contextMenuItemClick, this);
    };
    ContextMenu3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off("contextMenuOpen", this.contextMenuOpen);
      this.parent.off("contextMenuClick", this.contextMenuClick);
      this.parent.off("contextMenuItemClick", this.contextMenuItemClick);
    };
    ContextMenu3.prototype.contextMenuItemClick = function(args) {
      var id = args.item && args.item.id ? args.item.id : "";
      var delId = this.parent.element.id + "_gridcontrol_cmenu_Delete";
      if (id !== delId) {
        return;
      }
      if (this.parent.getSelectedRecords()[0].hasChildRecords || this.parent.getSelectedRecords().length > 1) {
        this.parent.deleteRecord();
      } else {
        this.parent.deleteRow(this.parent.getSelectedRows()[0]);
      }
      args.cancel = true;
    };
    ContextMenu3.prototype.contextMenuOpen = function(args) {
      var addRow = select("#" + this.parent.element.id + "_gridcontrol_cmenu_AddRow", args.element);
      var editRecord = select("#" + this.parent.element.id + "_gridcontrol_cmenu_Edit", args.element);
      var indent = select("#" + this.parent.element.id + "_gridcontrol_cmenu_Indent", args.element);
      var outdent = select("#" + this.parent.element.id + "_gridcontrol_cmenu_Outdent", args.element);
      if (addRow) {
        if (this.parent.grid.editSettings.allowAdding === false || this.parent.grid.isEdit) {
          addRow.style.display = "none";
        } else {
          addRow.style.display = "block";
        }
      }
      if ((this.parent.editSettings.mode === "Cell" || this.parent.editSettings.mode === "Batch") && !isNullOrUndefined(editRecord) && !editRecord.classList.contains("e-menu-hide")) {
        editRecord.style.display = "none";
      }
      var tObj = this.parent;
      var selectedrow = tObj.getSelectedRows()[0];
      if ((indent || outdent) && !isNullOrUndefined(selectedrow)) {
        var targetElement = args.event.target.closest("td");
        if (isNullOrUndefined(targetElement) || !isNullOrUndefined(targetElement) && (!targetElement.classList.contains("e-rowcell") || targetElement.querySelectorAll(".e-gridform").length !== 0)) {
          for (var _i = 0, _a = args.items; _i < _a.length; _i++) {
            var items = _a[_i];
            if (items.text === "Outdent" || items.text === "Indent") {
              tObj.grid.contextMenuModule["hiddenItems"].push(items.text);
            }
          }
          tObj.grid.contextMenuModule.contextMenu.hideItems(tObj.grid.contextMenuModule["hiddenItems"]);
          indent.style.display = outdent.style.display = "none";
        } else {
          if (selectedrow.rowIndex === 0 || tObj.getSelectedRowIndexes().length > 1) {
            indent.style.display = outdent.style.display = "none";
          } else if (args["name"] !== "rowDeselected" || !isNullOrUndefined(selectedrow) && tObj.grid.isCheckBoxSelection) {
            var selectedItem = tObj.getCurrentViewRecords()[selectedrow.rowIndex];
            if (!isNullOrUndefined(selectedItem)) {
              if (selectedItem.level > tObj.getCurrentViewRecords()[selectedrow.rowIndex - 1].level) {
                indent.style.display = "none";
              } else {
                indent.style.display = "block";
              }
              if (selectedItem.level === tObj.getCurrentViewRecords()[selectedrow.rowIndex - 1].level) {
                indent.style.display = "block";
              }
              if (selectedItem.level === 0) {
                outdent.style.display = "none";
              } else {
                outdent.style.display = "block";
              }
            }
          }
        }
      } else {
        if ((indent || outdent || tObj.grid.isEdit) && isNullOrUndefined(selectedrow)) {
          for (var _b = 0, _c = args.items; _b < _c.length; _b++) {
            var items = _c[_b];
            if (items.text === "Outdent" || items.text === "Indent") {
              if (!tObj.grid.contextMenuModule["hiddenItems"].includes(items.text)) {
                tObj.grid.contextMenuModule["hiddenItems"].push(items.text);
              }
            }
          }
          tObj.grid.contextMenuModule.contextMenu.hideItems(tObj.grid.contextMenuModule["hiddenItems"]);
          if (indent || outdent) {
            indent.style.display = outdent.style.display = "none";
          }
        }
      }
    };
    ContextMenu3.prototype.contextMenuClick = function(args) {
      if (args.item.id === "Above" || args.item.id === "Below" || args.item.id === "Child") {
        this.parent.notify("savePreviousRowPosition", args);
        this.parent.setProperties({ editSettings: { newRowPosition: args.item.id } }, true);
        this.parent.editModule["isAddedRowByContextMenu"] = true;
        this.parent.addRecord();
      }
      if (args.item.id === this.parent.element.id + "_gridcontrol_cmenu_Indent" || args.item.id === this.parent.element.id + "_gridcontrol_cmenu_Outdent") {
        if (!isNullOrUndefined(this.parent.rowDragAndDropModule)) {
          var indentOutdentAction = "indentOutdentAction";
          var action = args.item.id === this.parent.element.id + "_gridcontrol_cmenu_Indent" ? "indent" : "outdent";
          this.parent.rowDragAndDropModule["" + indentOutdentAction](null, action);
        }
      }
    };
    ContextMenu3.prototype.getModuleName = function() {
      return "contextMenu";
    };
    ContextMenu3.prototype.destroy = function() {
      this.removeEventListener();
    };
    ContextMenu3.prototype.getContextMenu = function() {
      return this.parent.grid.contextMenuModule.getContextMenu();
    };
    return ContextMenu3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/batch-edit.js
var BatchEdit = (
  /** @class */
  (function() {
    function BatchEdit2(parent) {
      this.batchChildCount = 0;
      this.addedRecords = "addedRecords";
      this.deletedRecords = "deletedRecords";
      this.batchAddedRecords = [];
      this.batchDeletedRecords = [];
      this.batchAddRowRecord = [];
      this.parent = parent;
      this.isSelfReference = !isNullOrUndefined(parent.parentIdMapping);
      this.batchRecords = [];
      this.currentViewRecords = [];
      this.isAdd = false;
      this.addEventListener();
    }
    BatchEdit2.prototype.addEventListener = function() {
      this.parent.on(cellSaved, this.cellSaved, this);
      this.parent.on(batchAdd, this.batchAdd, this);
      this.parent.on(beforeBatchAdd, this.beforeBatchAdd, this);
      this.parent.on(batchSave, this.batchSave, this);
      this.parent.on(beforeBatchDelete, this.beforeBatchDelete, this);
      this.parent.on(beforeBatchSave, this.beforeBatchSave, this);
      this.parent.on("batchPageAction", this.batchPageAction, this);
      this.parent.on("batchCancelAction", this.batchCancelAction, this);
      this.parent.grid.on("immutable-batch-cancel", this.immutableBatchAction, this);
      this.parent.grid.on("next-cell-index", this.nextCellIndex, this);
      this.parent.grid.on("cellfocused", this.onCellFocused, this);
    };
    BatchEdit2.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off(cellSaved, this.cellSaved);
      this.parent.off(batchAdd, this.batchAdd);
      this.parent.off(batchSave, this.batchSave);
      this.parent.off(beforeBatchAdd, this.beforeBatchAdd);
      this.parent.off(beforeBatchDelete, this.beforeBatchDelete);
      this.parent.off(beforeBatchSave, this.beforeBatchSave);
      this.parent.off("batchPageAction", this.batchPageAction);
      this.parent.off("batchCancelAction", this.batchCancelAction);
      this.parent.grid.off("immutable-batch-cancel", this.immutableBatchAction);
      this.parent.grid.off("next-cell-index", this.nextCellIndex);
      this.parent.grid.off("cellfocused", this.onCellFocused);
    };
    BatchEdit2.prototype.destroy = function() {
      this.removeEventListener();
    };
    BatchEdit2.prototype.getBatchRecords = function() {
      return this.batchRecords;
    };
    BatchEdit2.prototype.getAddRowIndex = function() {
      return this.addRowIndex;
    };
    BatchEdit2.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    };
    BatchEdit2.prototype.getBatchChildCount = function() {
      return this.batchChildCount;
    };
    BatchEdit2.prototype.batchPageAction = function() {
      var _this = this;
      var data = this.parent.grid.dataSource instanceof DataManager ? this.parent.grid.dataSource.dataSource.json : this.parent.grid.dataSource;
      var primaryKeyField = this.parent.grid.getPrimaryKeyFieldNames()[0];
      var index;
      if (!isNullOrUndefined(this.batchAddedRecords) && this.batchAddedRecords.length) {
        var _loop_1 = function(i2) {
          index = data.findIndex(function(e) {
            return e["" + primaryKeyField] === _this.batchAddedRecords[parseInt(i2.toString(), 10)]["" + primaryKeyField];
          });
          data.splice(index, 1);
        };
        for (var i = 0; i < this.batchAddedRecords.length; i++) {
          _loop_1(i);
        }
      }
      this.batchAddedRecords = this.batchRecords = this.batchAddRowRecord = this.batchDeletedRecords = this.currentViewRecords = [];
    };
    BatchEdit2.prototype.cellSaved = function(args) {
      var actualCellIndex = args.column.index;
      if (actualCellIndex === this.parent.treeColumnIndex) {
        this.parent.renderModule.cellRender({
          data: args.rowData,
          cell: args.cell,
          column: this.parent.grid.getColumnByIndex(args.column.index)
        });
      }
      if (this.isAdd && this.parent.editSettings.mode === "Batch" && this.parent.editSettings.newRowPosition !== "Bottom") {
        var data = this.parent.grid.dataSource instanceof DataManager ? this.parent.grid.dataSource.dataSource.json : this.parent.grid.dataSource;
        var added = void 0;
        var level = "level";
        var primaryKey_1 = this.parent.grid.getPrimaryKeyFieldNames()[0];
        var currentDataIndex = void 0;
        var indexvalue = void 0;
        var parentItem = "parentItem";
        var uniqueID = "uniqueID";
        var parentRecord = this.selectedIndex > -1 ? this.batchRecords[parseInt(this.addRowIndex.toString(), 10)]["" + parentItem] : null;
        var idMapping = void 0;
        var parentUniqueID = void 0;
        var parentIdMapping = void 0;
        var rowObjectIndex = this.parent.editSettings.newRowPosition === "Top" || this.selectedIndex === -1 ? 0 : this.parent.editSettings.newRowPosition === "Above" ? this.addRowIndex : this.addRowIndex + 1;
        rowObjectIndex = this.getActualRowObjectIndex(rowObjectIndex);
        if (this.newBatchRowAdded) {
          if (this.batchRecords.length) {
            idMapping = this.batchRecords[this.addRowIndex][this.parent.idMapping];
            parentIdMapping = this.batchRecords[this.addRowIndex][this.parent.parentIdMapping];
            if (this.batchRecords[parseInt(this.addRowIndex.toString(), 10)]["" + parentItem]) {
              parentUniqueID = this.batchRecords[parseInt(this.addRowIndex.toString(), 10)]["" + parentItem]["" + uniqueID];
            }
          }
          this.batchAddedRecords = extendArray(this.batchAddedRecords);
          this.batchAddRowRecord = extendArray(this.batchAddRowRecord);
          this.batchAddRowRecord.push(this.batchRecords[this.addRowIndex]);
          added = this.parent.grid.getRowsObject()[parseInt(rowObjectIndex.toString(), 10)].changes;
          if (!isNullOrUndefined(added)) {
            added.uniqueID = getUid(this.parent.element.id + "_data_");
            setValue("uniqueIDCollection." + added.uniqueID, added, this.parent);
            if (!Object.prototype.hasOwnProperty.call(added, "level")) {
              this.batchIndex = this.selectedIndex === -1 ? 0 : this.batchIndex;
              if (this.parent.editSettings.newRowPosition === "Child") {
                added.primaryParent = parentRecord;
                if (this.selectedIndex > -1) {
                  added.parentItem = extend({}, this.batchRecords[this.addRowIndex]);
                  added.parentUniqueID = added.parentItem.uniqueID;
                  delete added.parentItem.childRecords;
                  delete added.parentItem[this.parent.childMapping];
                  added.level = added.parentItem.level + 1;
                  added.index = this.batchIndex;
                  var childRecordCount = findChildrenRecords(this.batchRecords[this.addRowIndex]).length;
                  var record = findChildrenRecords(this.batchRecords[this.addRowIndex])[childRecordCount - 1];
                  record = isNullOrUndefined(record) ? this.batchRecords[this.addRowIndex] : record;
                  currentDataIndex = data.map(function(e) {
                    return e["" + primaryKey_1];
                  }).indexOf(record["" + primaryKey_1]);
                  if (this.isSelfReference) {
                    added[this.parent.parentIdMapping] = idMapping;
                  }
                  updateParentRow(primaryKey_1, added.parentItem, "add", this.parent, this.isSelfReference, added);
                }
              } else if ((this.parent.editSettings.newRowPosition === "Above" || this.parent.editSettings.newRowPosition === "Below") && !isNullOrUndefined(this.batchRecords[this.addRowIndex])) {
                added.level = this.batchRecords[parseInt(this.addRowIndex.toString(), 10)]["" + level];
                if (added.level && this.selectedIndex > -1) {
                  added.parentItem = parentRecord;
                  added.parentUniqueID = parentUniqueID;
                  delete added.parentItem.childRecords;
                  delete added.parentItem[this.parent.childMapping];
                }
                added.index = this.parent.editSettings.newRowPosition === "Below" ? this.batchIndex : this.batchIndex - 1;
                if (this.parent.editSettings.newRowPosition === "Below" && this.selectedIndex > -1) {
                  var childRecordCount = findChildrenRecords(this.batchRecords[this.addRowIndex]).length;
                  var record = findChildrenRecords(this.batchRecords[this.addRowIndex])[childRecordCount - 1];
                  record = isNullOrUndefined(record) ? this.batchRecords[this.addRowIndex] : record;
                  currentDataIndex = data.map(function(e) {
                    return e["" + primaryKey_1];
                  }).indexOf(record["" + primaryKey_1]);
                }
                if (this.parent.editSettings.newRowPosition === "Above" && this.selectedIndex > -1) {
                  var record = this.batchRecords[this.addRowIndex];
                  currentDataIndex = data.map(function(e) {
                    return e["" + primaryKey_1];
                  }).indexOf(record["" + primaryKey_1]);
                }
                if (this.isSelfReference) {
                  added[this.parent.parentIdMapping] = parentIdMapping;
                }
              }
              added.index = added.index === -1 ? 0 : added.index;
              added.hasChildRecords = false;
              added.childRecords = [];
              this.batchRecords.splice(added.index, 0, added);
              this.currentViewRecords.splice(added.index, 0, added);
              if (currentDataIndex > -1) {
                indexvalue = currentDataIndex;
              } else {
                indexvalue = added.index;
              }
              if (this.parent.editSettings.newRowPosition !== "Above") {
                indexvalue = added.index === 0 ? indexvalue : indexvalue + 1;
              }
              data.splice(indexvalue, 0, added);
              this.batchAddedRecords.push(added);
            }
          }
          this.parent.grid.getRowsObject()[parseInt(rowObjectIndex.toString(), 10)].data = added;
          this.newBatchRowAdded = false;
        }
      }
    };
    BatchEdit2.prototype.beforeBatchAdd = function(e) {
      var isTabLastRow = "isTabLastRow";
      if (this.parent.editSettings.mode === "Cell" && this.parent.editModule["" + isTabLastRow]) {
        e.cancel = true;
        this.parent.editModule["" + isTabLastRow] = false;
        return;
      }
      if (this.parent.editModule["isAddedRowByMethod"] && !isNullOrUndefined(this.parent.editModule["addRowIndex"]) && !this.parent.editModule["isAddedRowByContextMenu"] && (this.parent.editModule["selectedIndex"] >= 0 || this.parent.editModule["batchEditModule"].isAdd)) {
        this.selectedIndex = this.parent.editModule["selectedIndex"];
        this.addRowIndex = this.parent.editModule["addRowIndex"];
        this.addRowRecord = this.batchRecords.length ? this.batchRecords[this.selectedIndex] : this.parent.getCurrentViewRecords()[this.selectedIndex];
      } else {
        this.selectedIndex = this.parent.grid.selectedRowIndex;
        this.addRowIndex = this.parent.grid.selectedRowIndex > -1 ? this.parent.grid.selectedRowIndex : 0;
        this.parent.editModule["addRowIndex"] = this.parent.grid.selectedRowIndex > -1 ? this.parent.grid.selectedRowIndex : 0;
        this.addRowRecord = this.parent.getSelectedRecords()[0];
      }
    };
    BatchEdit2.prototype.batchAdd = function(e) {
      if (this.parent.editSettings.newRowPosition !== "Bottom") {
        this.isAdd = true;
        this.newBatchRowAdded = true;
        var actualIndex = 0;
        if (!this.batchRecords.length) {
          this.batchAddedRecords = [];
          this.batchRecords = extendArray(this.parent.grid.getCurrentViewRecords());
          this.currentViewRecords = extendArray(this.parent.grid.getCurrentViewRecords());
        }
        if (this.parent.editModule["isAddedRowByMethod"] && !isNullOrUndefined(this.parent.editModule["addRowIndex"])) {
          classList(this.parent.grid.getDataRows()[0], ["e-batchrow"], []);
        }
        if (this.parent.editSettings.newRowPosition !== "Top") {
          var records = this.parent.grid.getCurrentViewRecords();
          if (this.parent.editSettings.mode === "Batch" && (this.parent.getBatchChanges()[this.addedRecords].length > 1 || this.parent.getBatchChanges()[this.deletedRecords].length)) {
            records = this.batchRecords;
          }
          this.updateChildCount(records);
          this.parent.notify(beginAdd, {});
          this.batchChildCount = 0;
        }
        this.updateRowIndex();
        var focusModule = getValue("focusModule", this.parent.grid);
        var table2 = this.parent.getContentTable();
        if (this.parent.getBatchChanges()[this.deletedRecords].length && this.parent.editSettings.newRowPosition === "Above") {
          actualIndex = e.row.rowIndex;
          focusModule.getContent().matrix.matrix = this.matrix;
        } else {
          if (this.parent.frozenRows) {
            actualIndex = this.batchIndex;
          } else if (this.parent.editModule.isAddedMultipleRowsByMethod) {
            actualIndex = e.index;
          } else {
            actualIndex = table2.getElementsByClassName("e-batchrow")[0].rowIndex;
          }
        }
        focusModule.getContent().matrix.current = [actualIndex, focusModule.getContent().matrix.current[1]];
        if (this.parent.editModule["isAddedRowByMethod"] && !isNullOrUndefined(this.parent.editModule["addRowIndex"]) && !this.parent.editModule["isAddedRowByContextMenu"] && !this.parent.editModule.isAddedMultipleRowsByMethod) {
          var newlyAddedRecords = this.parent.getBatchChanges()["addedRecords"];
          var index = parseInt(this.parent.getContentTable().getElementsByClassName("e-insertedrow")[newlyAddedRecords.length - 1].getAttribute("aria-rowindex"), 10) - 1;
          this.batchRecords.splice(index, 0, newlyAddedRecords[newlyAddedRecords.length - 1]);
        }
      }
    };
    BatchEdit2.prototype.beforeBatchDelete = function(args) {
      if (!this.batchRecords.length) {
        this.batchRecords = extendArray(this.parent.grid.getCurrentViewRecords());
        this.currentViewRecords = extendArray(this.parent.grid.getCurrentViewRecords());
      }
      var focusModule = getValue("focusModule", this.parent.grid);
      this.matrix = focusModule.getContent().matrix.matrix;
      var row = [];
      var records = [];
      var primarykey = this.parent.grid.getPrimaryKeyFieldNames()[0];
      var data;
      var childs;
      var uid;
      var rowElement = Array.isArray(args.row) ? args.row[0] : args.row;
      if (!isNullOrUndefined(rowElement) && this.parent.getSelectedRows().indexOf(rowElement) === -1) {
        data = args.rowData;
        childs = findChildrenRecords(data);
        uid = rowElement.getAttribute("data-uid");
      } else {
        data = this.parent.grid.getSelectedRecords()[this.parent.grid.getSelectedRecords().length - 1];
        childs = findChildrenRecords(data);
        uid = this.parent.getSelectedRows()[0].getAttribute("data-uid");
      }
      var parentRowIndex = parseInt(this.parent.grid.getRowElementByUID(uid).getAttribute("aria-rowindex"), 10) - 1;
      if (childs.length) {
        var totalCount = parentRowIndex + childs.length;
        var firstChildIndex = parentRowIndex + 1;
        for (var i = firstChildIndex; i <= totalCount; i++) {
          row.push(this.parent.grid.getDataRows()[parseInt(i.toString(), 10)]);
          if (this.parent.frozenRows || this.parent.frozenColumns || this.parent.getFrozenColumns()) {
            row.push(this.parent.grid.getHeaderContent()[parseInt(i.toString(), 10)]);
          }
        }
      }
      if (!isNullOrUndefined(data.parentItem)) {
        var parentItem = getParentData(this.parent, data.parentItem.uniqueID);
        if (!isNullOrUndefined(parentItem) && parentItem.hasChildRecords) {
          var childIndex = parentItem.childRecords.indexOf(data);
          parentItem.childRecords.splice(childIndex, 1);
        }
        this.batchDeletedRecords = extendArray(this.batchDeletedRecords);
        this.batchDeletedRecords.push(data);
      }
      childs.push(data);
      records = childs;
      var _loop_2 = function(i2) {
        var indexvalue = this_1.batchRecords.findIndex(function(e) {
          return e["" + primarykey] === records[parseInt(i2.toString(), 10)]["" + primarykey];
        });
        if (indexvalue !== -1) {
          this_1.batchRecords.splice(indexvalue, 1);
        }
      };
      var this_1 = this;
      for (var i = 0; i < records.length; i++) {
        _loop_2(i);
      }
      for (var i = 0; i < row.length; i++) {
        if (!isNullOrUndefined(row[parseInt(i.toString(), 10)])) {
          this.parent.grid.selectionModule.selectedRecords.push(row[parseInt(i.toString(), 10)]);
        }
      }
    };
    BatchEdit2.prototype.updateRowIndex = function() {
      var rows = this.parent.grid.getDataRows();
      for (var i = 0; i < rows.length; i++) {
        rows[parseInt(i.toString(), 10)].setAttribute("aria-rowindex", (i + 1).toString());
      }
    };
    BatchEdit2.prototype.updateChildCount = function(records) {
      var primaryKey = this.parent.grid.getPrimaryKeyFieldNames()[0];
      var addedRecords = this.parent.getBatchChanges().addedRecords || [];
      var parentItem = this.parent.editSettings.newRowPosition === "Child" ? "primaryParent" : "parentItem";
      for (var i = 0; i < addedRecords.length; i++) {
        if (!isNullOrUndefined(addedRecords[parseInt(i.toString(), 10)]["" + parentItem])) {
          if (addedRecords[parseInt(i.toString(), 10)]["" + parentItem]["" + primaryKey] === records[parseInt(this.addRowIndex.toString(), 10)]["" + primaryKey]) {
            this.batchChildCount = this.batchChildCount + 1;
          }
        }
      }
    };
    BatchEdit2.prototype.beforeBatchSave = function(e) {
      var changeRecords = "changedRecords";
      var deleterecords = "deletedRecords";
      var changedRecords = e.batchChanges["" + changeRecords];
      if (e.batchChanges["" + changeRecords].length) {
        var columnName = void 0;
        for (var i = 0; i < changedRecords.length; i++) {
          editAction({ value: changedRecords[parseInt(i.toString(), 10)], action: "edit" }, this.parent, this.isSelfReference, this.addRowIndex, this.selectedIndex, columnName);
        }
      }
      if (e.batchChanges["" + deleterecords].length) {
        var deletedRecords = e.batchChanges["" + deleterecords];
        var record = deletedRecords;
        for (var i = 0; i < record.length; i++) {
          this.deleteUniqueID(record[parseInt(i.toString(), 10)].uniqueID);
          var childs = findChildrenRecords(record[parseInt(i.toString(), 10)]);
          for (var c = 0; c < childs.length; c++) {
            this.deleteUniqueID(childs[parseInt(c.toString(), 10)].uniqueID);
          }
          e.batchChanges["" + deleterecords] = e.batchChanges["" + deleterecords].concat(childs);
        }
      }
      this.isAdd = false;
    };
    BatchEdit2.prototype.deleteUniqueID = function(value) {
      var idFilter = "uniqueIDFilterCollection";
      delete this.parent["" + idFilter]["" + value];
      var id = "uniqueIDCollection";
      delete this.parent["" + id]["" + value];
    };
    BatchEdit2.prototype.batchCancelAction = function() {
      var _this = this;
      var targetElement = "targetElement";
      var index;
      var parentItem = "parentItem";
      var indexvalue = "index";
      var currentViewRecords = this.parent.grid.getCurrentViewRecords();
      var childRecords = "childRecords";
      var data = this.parent.grid.dataSource instanceof DataManager ? this.parent.grid.dataSource.dataSource.json : this.parent.grid.dataSource;
      var primaryKey = this.parent.grid.getPrimaryKeyFieldNames()[0];
      if (!isNullOrUndefined(this.batchAddedRecords)) {
        var _loop_3 = function(i2) {
          index = data.findIndex(function(e) {
            return e["" + primaryKey] === _this.batchAddedRecords[parseInt(i2.toString(), 10)]["" + primaryKey];
          });
          if (index !== -1) {
            data.splice(index, 1);
          }
          if (this_2.parent.editSettings.newRowPosition === "Child") {
            index = currentViewRecords.map(function(e) {
              return e["" + primaryKey];
            }).indexOf(this_2.batchAddedRecords[parseInt(i2.toString(), 10)]["" + parentItem] ? this_2.batchAddedRecords[parseInt(i2.toString(), 10)]["" + parentItem]["" + primaryKey] : this_2.batchAddedRecords[parseInt(i2.toString(), 10)]["" + primaryKey]);
            if (!isNullOrUndefined(currentViewRecords[parseInt(index.toString(), 10)])) {
              var children = currentViewRecords[parseInt(index.toString(), 10)]["" + childRecords];
              for (var j = 0; children && j < children.length; j++) {
                if (children[parseInt(j.toString(), 10)]["" + primaryKey] === this_2.batchAddedRecords[parseInt(i2.toString(), 10)]["" + primaryKey]) {
                  children.splice(j, 1);
                }
              }
            }
          }
        };
        var this_2 = this;
        for (var i = 0; i < this.batchAddedRecords.length; i++) {
          _loop_3(i);
        }
      }
      if (!isNullOrUndefined(this.parent["" + targetElement])) {
        var row = this.parent["" + targetElement].closest("tr");
        this.parent.collapseRow(row);
        this.parent["" + targetElement] = null;
      }
      if (!isNullOrUndefined(this.batchDeletedRecords)) {
        for (var i = 0; i < this.batchDeletedRecords.length; i++) {
          if (!isNullOrUndefined(this.batchDeletedRecords[parseInt(i.toString(), 10)]["" + parentItem])) {
            index = currentViewRecords.map(function(e) {
              return e["" + primaryKey];
            }).indexOf(this.batchDeletedRecords[parseInt(i.toString(), 10)]["" + parentItem]["" + primaryKey]);
            var positionIndex = this.batchDeletedRecords[parseInt(i.toString(), 10)]["" + indexvalue] === 0 ? this.batchDeletedRecords[parseInt(i.toString(), 10)]["" + indexvalue] : this.batchDeletedRecords[parseInt(i.toString(), 10)]["" + indexvalue] - 1;
            if (!isNullOrUndefined(currentViewRecords[parseInt(index.toString(), 10)])) {
              currentViewRecords[parseInt(index.toString(), 10)]["" + childRecords].splice(positionIndex, 0, this.batchDeletedRecords[parseInt(i.toString(), 10)]);
            }
          }
        }
      }
      this.batchAddedRecords = this.batchRecords = this.batchAddRowRecord = this.currentViewRecords = [];
      this.batchRecords = extendArray(this.parent.grid.getCurrentViewRecords());
      this.batchIndex = 0;
      this.currentViewRecords = extendArray(this.parent.grid.getCurrentViewRecords());
      this.batchDeletedRecords = [];
      this.parent.grid.renderModule.refresh();
    };
    BatchEdit2.prototype.batchSave = function(args) {
      if (this.parent.editSettings.mode === "Batch") {
        var i = void 0;
        var batchChanges = Object.hasOwnProperty.call(args, "updatedRecords") ? args.updatedRecords : this.parent.getBatchChanges();
        var deletedRecords = "deletedRecords";
        var addedRecords = "addedRecords";
        var index = "index";
        var uniqueID = "uniqueID";
        var data = this.parent.grid.dataSource instanceof DataManager ? this.parent.grid.dataSource.dataSource.json : this.parent.grid.dataSource;
        var currentViewRecords = this.parent.grid.getCurrentViewRecords();
        var primarykey_1 = this.parent.grid.getPrimaryKeyFieldNames()[0];
        var level = "level";
        var addRecords = batchChanges["" + addedRecords];
        var parentItem = "parentItem";
        var selectedIndex = void 0;
        var addRowIndex = void 0;
        var columnName = void 0;
        var addRowRecord_1;
        var childRecords = "childRecords";
        if (addRecords.length > 1 && this.parent.editSettings.newRowPosition !== "Bottom") {
          addRecords.reverse();
        }
        if (this.parent.editSettings.newRowPosition !== "Bottom" && !Object.hasOwnProperty.call(args, "updatedRecords")) {
          data.splice(data.length - addRecords.length, addRecords.length);
          if (this.parent.editModule["isAddedRowByMethod"] && addRecords.length && !isNullOrUndefined(this.parent.editModule["addRowIndex"]) && !this.parent.editModule["isAddedRowByContextMenu"]) {
            addRecords.reverse();
            for (var i_1 = 0; i_1 < addRecords.length; i_1++) {
              var index_1 = parseInt(this.parent.getContentTable().getElementsByClassName("e-insertedrow")[parseInt(i_1.toString(), 10)].getAttribute("aria-rowindex"), 10) - 1;
              data.splice(index_1, 0, addRecords[parseInt(i_1.toString(), 10)]);
            }
          }
          if (!this.parent.allowPaging && data.length !== currentViewRecords.length) {
            if (currentViewRecords.length > addRecords.length) {
              currentViewRecords.splice(currentViewRecords.length - addRecords.length, addRecords.length);
            }
          } else {
            var totalRecords = extendArray(data);
            if (totalRecords.length && currentViewRecords.length !== 0) {
              var startIndex = totalRecords.map(function(e) {
                return e["" + primarykey_1];
              }).indexOf(currentViewRecords[0]["" + primarykey_1]);
              var endIndex = startIndex + this.parent.grid.pageSettings.pageSize;
              currentViewRecords = totalRecords.splice(startIndex, endIndex);
            }
          }
        }
        if (this.batchAddRowRecord.length === 0) {
          this.batchAddRowRecord.push(this.parent.flatData[args.index]);
        }
        if (this.parent.editModule["isAddedRowByContextMenu"]) {
          addRecords.reverse();
        }
        for (i = 0; i < addRecords.length; i++) {
          var taskData = extend({}, addRecords[parseInt(i.toString(), 10)]);
          delete taskData.parentItem;
          delete taskData.uniqueID;
          delete taskData.index;
          delete taskData.level;
          delete taskData.hasChildRecords;
          delete taskData.childRecords;
          delete taskData.parentUniqueID;
          if (!isNullOrUndefined(taskData.primaryParent)) {
            delete taskData.primaryParent;
          }
          if (addRecords.length > 1 && this.parent.editModule["isAddedRowByContextMenu"]) {
            var rowPosition = this.parent.editSettings.newRowPosition;
            this.parent.editSettings.newRowPosition = this.parent.editModule["previousNewRowPosition"];
            this.parent.editModule["previousNewRowPosition"] = rowPosition;
          }
          addRecords[parseInt(i.toString(), 10)].taskData = taskData;
          if (this.batchAddRowRecord.length > 1) {
            addRowRecord_1 = this.batchAddRowRecord[parseInt(i.toString(), 10)];
          } else {
            addRowRecord_1 = this.batchAddRowRecord[0];
          }
          if (isNullOrUndefined(addRowRecord_1)) {
            addRowRecord_1 = this.batchAddRowRecord[i - 1];
          }
          if (this.isSelfReference) {
            if (!isNullOrUndefined(addRecords[parseInt(i.toString(), 10)].parentItem)) {
              updateParentRow(primarykey_1, addRecords[parseInt(i.toString(), 10)].parentItem, "add", this.parent, this.isSelfReference, addRecords[parseInt(i.toString(), 10)]);
            }
          }
          if (!isNullOrUndefined(addRowRecord_1)) {
            addRowIndex = addRowRecord_1.index;
          }
          if (isNullOrUndefined(addRecords[parseInt(i.toString(), 10)].index)) {
            addRowIndex = 0;
          }
          if (this.parent.editModule.isAddedMultipleRowsByMethod && this.isSelfReference && (this.parent.editSettings.newRowPosition === "Above" || this.parent.editSettings.newRowPosition === "Below")) {
            addRowIndex = args.index;
            addRowRecord_1 = this.parent.flatData[args.index];
          }
          if (this.parent.editSettings.newRowPosition !== "Top" && this.parent.editSettings.newRowPosition !== "Bottom") {
            if (isNullOrUndefined(addRecords[parseInt(i.toString(), 10)].parentItem) && this.selectedIndex === -1) {
              selectedIndex = -1;
              addRowRecord_1 = null;
            }
          }
          editAction({ value: addRecords[parseInt(i.toString(), 10)], action: "add" }, this.parent, this.isSelfReference, addRowIndex, selectedIndex, columnName, addRowRecord_1);
          selectedIndex = null;
          if (this.parent.editSettings.newRowPosition === "Child" && !isNullOrUndefined(addRecords[parseInt(i.toString(), 10)]["" + parentItem]) && (isNullOrUndefined(this.parent.editModule["addRowIndex"]) || this.isSelfReference)) {
            var indexValue = currentViewRecords.map(function(e) {
              return e["" + primarykey_1];
            }).indexOf(addRecords[parseInt(i.toString(), 10)]["" + parentItem]["" + primarykey_1]);
            var children = currentViewRecords[parseInt(indexValue.toString(), 10)]["" + childRecords];
            if (!isNullOrUndefined(addRowIndex) && children.some(function(records) {
              return records.uniqueID === addRowRecord_1.uniqueID;
            })) {
              for (var j = 0; j < children.length; j++) {
                if (children[parseInt(j.toString(), 10)]["" + primarykey_1] === addRecords[parseInt(i.toString(), 10)]["" + primarykey_1]) {
                  currentViewRecords[parseInt(indexValue.toString(), 10)]["" + childRecords].splice(j, 1);
                }
              }
            }
          }
        }
        if (batchChanges["" + deletedRecords].length) {
          for (i = 0; i < batchChanges["" + deletedRecords].length; i++) {
            editAction({ value: batchChanges["" + deletedRecords][parseInt(i.toString(), 10)], action: "delete" }, this.parent, this.isSelfReference, addRowIndex, selectedIndex, columnName, addRowRecord_1);
          }
        }
        this.parent.parentData = [];
        for (var i_2 = 0; i_2 < data.length; i_2++) {
          data[parseInt(i_2.toString(), 10)]["" + index] = i_2;
          setValue("uniqueIDCollection." + data[parseInt(i_2.toString(), 10)]["" + uniqueID] + ".index", i_2, this.parent);
          if (!data[parseInt(i_2.toString(), 10)]["" + level]) {
            this.parent.parentData.push(data[parseInt(i_2.toString(), 10)]);
          }
        }
      }
      this.batchAddRowRecord = this.batchAddedRecords = this.batchRecords = this.batchDeletedRecords = this.currentViewRecords = [];
      if (this.parent.editModule["isAddedRowByContextMenu"]) {
        this.parent.editModule["isAddedRowByContextMenu"] = false;
      }
      if (this.parent.editModule["isAddedRowByMethod"]) {
        this.parent.editModule["isAddedRowByMethod"] = false;
      }
    };
    BatchEdit2.prototype.getActualRowObjectIndex = function(index) {
      var rows = this.parent.grid.getDataRows();
      if ((this.parent.editSettings.newRowPosition === "Below" || this.parent.editSettings.newRowPosition === "Child") && this.selectedIndex > -1) {
        if (!isNullOrUndefined(this.batchRecords[this.addRowIndex]) && this.batchRecords[this.addRowIndex].expanded) {
          if (this.parent.getBatchChanges()[this.addedRecords].length > 1 || this.parent.getBatchChanges()[this.deletedRecords].length) {
            index += findChildrenRecords(this.batchRecords[this.addRowIndex]).length;
            if (this.parent.editSettings.newRowPosition !== "Child") {
              var batchChildCount = this.getBatchChildCount();
              index = index + batchChildCount;
            }
          } else {
            index += findChildrenRecords(this.batchRecords[this.addRowIndex]).length;
          }
        }
        if (index >= rows.length) {
          index = rows.length - 1;
        }
        this.updateChildCount(this.parent.grid.getCurrentViewRecords());
        if (this.batchChildCount) {
          index += this.batchChildCount;
        }
        this.batchChildCount = 0;
      }
      return index;
    };
    BatchEdit2.prototype.immutableBatchAction = function(e) {
      e.args.cancel = true;
      var changes = this.parent.grid.getBatchChanges();
      var addedRecords = [];
      var index = "index";
      if (Object.keys(changes).length) {
        addedRecords = changes.addedRecords;
      }
      for (var i = 0; i < addedRecords.length; i++) {
        e.rows.splice(addedRecords[parseInt(i.toString(), 10)]["" + index], 1);
      }
    };
    BatchEdit2.prototype.nextCellIndex = function(args) {
      var index = "index";
      var rowIndex = "rowIndex";
      var batchChanges = this.parent.getBatchChanges();
      var deletedRecords = batchChanges.deletedRecords;
      if (this.parent.getSelectedRows().length) {
        if (this.isAdd && deletedRecords.length > 0) {
          args["" + index] = this.parent.getSelectedRecords()[0]["" + index];
        } else {
          args["" + index] = this.parent.getSelectedRows()[0]["" + rowIndex];
        }
      } else {
        args["" + index] = this.batchIndex;
      }
    };
    BatchEdit2.prototype.onCellFocused = function(e) {
      if (this.parent.editSettings.mode === "Cell" && this.parent.grid.isEdit && e.keyArgs) {
        if (e.keyArgs.action === "shiftEnter") {
          e.keyArgs.preventDefault();
          this.parent.endEdit();
          return;
        }
      }
    };
    return BatchEdit2;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/edit.js
var Edit2 = (
  /** @class */
  (function() {
    function Edit3(parent) {
      this.addedRecords = "addedRecords";
      this.deletedRecords = "deletedRecords";
      this.prevAriaRowIndex = "-1";
      this.isAddedRowByMethod = false;
      this.isAddedRowByContextMenu = false;
      this.isIndexUndefined = false;
      this.isAddedMultipleRowsByMethod = false;
      Grid.Inject(Edit);
      this.parent = parent;
      this.isSelfReference = !isNullOrUndefined(parent.parentIdMapping);
      this.previousNewRowPosition = null;
      this.internalProperties = {};
      this.batchEditModule = new BatchEdit(this.parent);
      this.addEventListener();
    }
    Edit3.prototype.getModuleName = function() {
      return "edit";
    };
    Edit3.prototype.addEventListener = function() {
      this.parent.on(crudAction, this.crudAction, this);
      this.parent.on(beginEdit, this.beginEdit, this);
      this.parent.on(beginAdd, this.beginAdd, this);
      this.parent.on(recordDoubleClick, this.recordDoubleClick, this);
      this.parent.on(cellSave, this.cellSave, this);
      this.parent.on(batchCancel, this.batchCancel, this);
      this.parent.grid.on(keyPressed, this.keyPressed, this);
      this.parent.grid.on("batchedit-form", this.lastCellTab, this);
      this.parent.grid.on("content-ready", this.contentready, this);
      this.parent.on(cellEdit, this.cellEdit, this);
      this.parent.on("actionBegin", this.editActionEvents, this);
      this.parent.on("actionComplete", this.editActionEvents, this);
      this.parent.grid.on(doubleTap, this.recordDoubleClick, this);
      this.parent.grid.on("dblclick", this.gridDblClick, this);
      this.parent.grid.on("recordAdded", this.customCellSave, this);
      this.parent.on("savePreviousRowPosition", this.savePreviousRowPosition, this);
      this.parent.grid.on(beforeStartEdit, this.beforeStartEdit, this);
      this.parent.grid.on(beforeBatchCancel, this.beforeBatchCancel, this);
      this.parent.grid.on("reset-edit-props", this.resetIsOnBatch, this);
      this.parent.grid.on("get-row-position", this.getRowPosition, this);
    };
    Edit3.prototype.gridDblClick = function(e) {
      this.doubleClickTarget = e.target;
      if (e.target.classList.contains("e-frame") && this.parent.getCurrentViewRecords().length === 0) {
        this.doubleClickTarget = null;
      }
      if (e.target.classList.contains("e-treegridcollapse") || e.target.classList.contains("e-treegridexpand")) {
        var tr = parentsUntil(e.target, "e-row");
        var rowIndex = tr && parseInt(tr.getAttribute("aria-rowindex"), 10) - 1;
        if (!isNullOrUndefined(rowIndex) && rowIndex >= 0 && this.parent.allowPaging) {
          this.parent.grid.getDataRows()[rowIndex].dataset.uid = this.parent.grid.contentModule.getRows()[rowIndex].uid;
        }
      }
    };
    Edit3.prototype.getRowPosition = function(addArgs) {
      addArgs.newRowPosition = this.parent.editSettings.newRowPosition;
      addArgs.addRowIndex = this.addRowIndex;
      addArgs.dataRowIndex = +this.prevAriaRowIndex;
    };
    Edit3.prototype.beforeStartEdit = function(args) {
      if (this.parent.editSettings.mode === "Cell") {
        this.parent.trigger(actionBegin, args);
      }
    };
    Edit3.prototype.beforeBatchCancel = function(args) {
      if (this.parent.editSettings.mode === "Cell") {
        args["requestType"] = "cancel";
        this.parent.trigger(actionComplete, args);
      }
    };
    Edit3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off(crudAction, this.crudAction);
      this.parent.off(beginEdit, this.beginEdit);
      this.parent.off(beginAdd, this.beginAdd);
      this.parent.off(recordDoubleClick, this.recordDoubleClick);
      this.parent.off(batchCancel, this.batchCancel);
      this.parent.grid.off(keyPressed, this.keyPressed);
      this.parent.grid.off("batchedit-form", this.lastCellTab);
      this.parent.grid.off("content-ready", this.contentready);
      this.parent.off(cellEdit, this.cellEdit);
      this.parent.off("actionBegin", this.editActionEvents);
      this.parent.off("actionComplete", this.editActionEvents);
      this.parent.grid.off("recordAdded", this.customCellSave);
      this.parent.grid.off(doubleTap, this.recordDoubleClick);
      this.parent.off("savePreviousRowPosition", this.savePreviousRowPosition);
      this.parent.grid.off(beforeStartEdit, this.beforeStartEdit);
      this.parent.grid.off(beforeBatchCancel, this.beforeBatchCancel);
      this.parent.grid.off("dblclick", this.gridDblClick);
      this.parent.grid.off("reset-edit-props", this.resetIsOnBatch);
      this.parent.grid.off("get-row-position", this.getRowPosition);
    };
    Edit3.prototype.destroy = function() {
      this.removeEventListener();
    };
    Edit3.prototype.applyFormValidation = function(cols) {
      this.parent.grid.editModule.applyFormValidation(cols);
    };
    Edit3.prototype.editActionEvents = function(args) {
      var eventArgs = getObject("editAction", args);
      var eventName = getObject("name", eventArgs);
      var treeObj = this.parent;
      var adaptor = !isNullOrUndefined(treeObj.dataSource) && treeObj.dataSource.adaptor;
      if (!isNullOrUndefined(adaptor) && (isRemoteData(treeObj) || adaptor instanceof RemoteSaveAdaptor) && (eventArgs.requestType === "save" && eventArgs.action === "add") && (treeObj.editSettings.newRowPosition === "Child" || treeObj.editSettings.newRowPosition === "Below" || treeObj.editSettings.newRowPosition === "Above")) {
        if (eventName === "actionBegin") {
          var rowIndex = isNullOrUndefined(eventArgs.row) || !Object.keys(eventArgs.row).length ? this.selectedIndex : eventArgs.row.rowIndex - 1;
          var keyData = !isNullOrUndefined(rowIndex) && rowIndex !== -1 ? treeObj.getCurrentViewRecords()[parseInt(rowIndex.toString(), 10)][treeObj.getPrimaryKeyFieldNames()[0]] : -1;
          treeObj.grid.query.addParams("relationalKey", keyData);
        } else if (eventName === "actionComplete") {
          var paramsLength = treeObj.grid.query.params.length;
          for (var i = 0; i < paramsLength; i++) {
            if (treeObj.grid.query.params[parseInt(i.toString(), 10)].key === "relationalKey") {
              treeObj.grid.query.params.splice(i);
            }
          }
        }
      }
      if (eventName === "actionComplete" && eventArgs.requestType === "save") {
        this.addRowRecord = null;
      }
      if (this.parent.enableInfiniteScrolling && eventName === "actionComplete") {
        this.infiniteAddAction(eventArgs);
      }
      if (this.parent.editSettings.mode === "Batch" && eventArgs.requestType === "paging") {
        this.parent.notify("batchPageAction", {});
      }
    };
    Edit3.prototype.infiniteAddAction = function(args) {
      if (args.requestType === "save" && args.action === "add" || args.requestType === "delete") {
        if (this.parent.editSettings.newRowPosition !== "Top" && this.selectedIndex !== -1 && (args.requestType === "save" && args.action === "add")) {
          var rowObjects = this.parent.grid.getRowsObject();
          var newRowObject = rowObjects.splice(0, 1)[0];
          var newRowObjectIndex = this.addRowIndex;
          var currentData = this.parent.getCurrentViewRecords();
          if (this.parent.editSettings.newRowPosition === "Below" || this.parent.editSettings.newRowPosition === "Child") {
            newRowObjectIndex += findChildrenRecords(currentData[newRowObjectIndex + 1]).length;
          }
          newRowObjectIndex = this.parent.editSettings.newRowPosition === "Below" ? newRowObjectIndex + 1 : newRowObjectIndex;
          rowObjects.splice(newRowObjectIndex, 0, newRowObject);
          var newRecord = currentData.splice(0, 1)[0];
          currentData.splice(newRowObjectIndex, 0, newRecord);
          this.updateInfiniteCurrentViewData(newRecord, this.addRowIndex);
        }
        var movableRows = this.parent.grid.getRows();
        var movableRowsObject = this.parent.grid.getRowsObject();
        var isCache = this.parent.infiniteScrollSettings.enableCache;
        if (!isCache) {
          resetRowIndex(this.parent.grid, this.parent.grid.getRowsObject(), this.parent.grid.getRows(), 0);
          this.updateIndex(this.parent.grid.dataSource, this.parent.getRows(), this.parent.getCurrentViewRecords());
        }
        if (!isCache && this.parent.getFrozenColumns() > 0) {
          resetRowIndex(this.parent.grid, movableRowsObject, movableRows, 0);
          this.updateIndex(this.parent.grid.dataSource, movableRows, this.parent.getCurrentViewRecords());
        }
      }
    };
    Edit3.prototype.updateInfiniteCurrentViewData = function(newRecord, newRowIndex) {
      var _this = this;
      var infiniteData = "infiniteCurrentViewData";
      var updateCurrentViewData = "updateCurrentViewData";
      var size = Math.ceil(newRowIndex / this.parent.grid.pageSettings.pageSize);
      var page = size > 0 ? size : 1;
      var dataIndex = newRowIndex - (page - 1) * this.parent.pageSettings.pageSize;
      var infiniteCurrentViewData = this.parent.grid.infiniteScrollModule["" + infiniteData];
      infiniteCurrentViewData[1].splice(0, 1);
      var data = infiniteCurrentViewData[parseInt(page.toString(), 10)];
      if (!isNullOrUndefined(this.addRowRecord)) {
        data.filter(function(e, index) {
          if (e.uniqueID === _this.addRowRecord.uniqueID) {
            dataIndex = index;
          }
        });
        if (this.addRowRecord.hasChildRecords && this.addRowRecord.childRecords.length && this.parent.editSettings.newRowPosition === "Below" || this.parent.editSettings.newRowPosition === "Child") {
          dataIndex += findChildrenRecords(this.addRowRecord).length;
        }
      }
      if (dataIndex >= this.parent.pageSettings.pageSize) {
        page += 1;
        data = infiniteCurrentViewData[parseInt(page.toString(), 10)];
        dataIndex = dataIndex - this.parent.pageSettings.pageSize >= 0 ? dataIndex - this.parent.pageSettings.pageSize : 0;
      }
      dataIndex = this.parent.editSettings.newRowPosition === "Below" ? dataIndex + 1 : dataIndex;
      data.splice(dataIndex, 0, newRecord);
      this.parent.grid.infiniteScrollModule["" + updateCurrentViewData]();
    };
    Edit3.prototype.recordDoubleClick = function(args) {
      var target = args.target;
      if (isNullOrUndefined(target.closest("td.e-rowcell"))) {
        return;
      }
      if (!this.parent.grid.editSettings.allowEditing || this.parent.grid.isEdit) {
        return;
      }
      var column = this.parent.grid.getColumnByIndex(+target.closest("td.e-rowcell").getAttribute("aria-colindex") - 1);
      if (this.parent.editSettings.mode === "Cell" && !this.isOnBatch && column && !column.isPrimaryKey && this.parent.editSettings.allowEditing && column.allowEditing && !(target.classList.contains("e-treegridexpand") || target.classList.contains("e-treegridcollapse")) && this.parent.editSettings.allowEditOnDblClick) {
        this.isOnBatch = true;
        this.parent.grid.setProperties({ selectedRowIndex: args.rowIndex }, true);
        if (this.parent.enableVirtualization) {
          var tr = parentsUntil(args.target, "e-row");
          this.prevAriaRowIndex = tr.getAttribute("aria-rowindex");
          tr.setAttribute("aria-rowindex", tr.rowIndex + 1 + "");
        }
        this.updateGridEditMode("Batch");
      } else if (this.parent.editSettings.mode === "Cell" && (!column.allowEditing || column.isPrimaryKey)) {
        this.isOnBatch = true;
        this.updateGridEditMode("Batch");
      }
    };
    Edit3.prototype.updateGridEditMode = function(mode) {
      this.parent.grid.setProperties({ editSettings: { mode } }, true);
      var updateMethod = getObject("updateEditObj", this.parent.grid.editModule);
      updateMethod.apply(this.parent.grid.editModule);
      this.parent.grid.isEdit = false;
    };
    Edit3.prototype.resetIsOnBatch = function() {
      if (this.parent.enableVirtualization && this.parent.editSettings.mode === "Cell") {
        this.isOnBatch = false;
        this.updateGridEditMode("Normal");
      }
    };
    Edit3.prototype.keyPressed = function(args) {
      if (this.isOnBatch || args.action === "tab" || args.action === "shiftTab") {
        this.keyPress = args.action;
      }
      if (args.action === "f2") {
        this.recordDoubleClick(args);
      }
      if (args.action === "escape") {
        this.closeEdit();
      }
    };
    Edit3.prototype.deleteUniqueID = function(value) {
      var idFilter = "uniqueIDFilterCollection";
      delete this.parent["" + idFilter]["" + value];
      var id = "uniqueIDCollection";
      delete this.parent["" + id]["" + value];
    };
    Edit3.prototype.cellEdit = function(args) {
      var _this = this;
      var promise = "promise";
      var prom = args["" + promise];
      delete args["" + promise];
      if (this.parent.enableVirtualization && !isNullOrUndefined(this.prevAriaRowIndex) && this.prevAriaRowIndex !== "-1") {
        args.row.setAttribute("aria-rowindex", this.prevAriaRowIndex);
        this.prevAriaRowIndex = void 0;
      }
      if (this.keyPress !== "enter") {
        this.parent.trigger(cellEdit, args, function(celleditArgs) {
          if (!celleditArgs.cancel && _this.parent.editSettings.mode === "Cell") {
            _this.enableToolbarItems("edit");
          } else if (celleditArgs.cancel && _this.parent.editSettings.mode === "Cell") {
            _this.isOnBatch = false;
            _this.updateGridEditMode("Normal");
          }
          if (!isNullOrUndefined(prom)) {
            prom.resolve(celleditArgs);
          }
        });
      }
      if (this.doubleClickTarget && (this.doubleClickTarget.classList.contains("e-treegridexpand") || this.doubleClickTarget.classList.contains("e-treegridcollapse") || this.doubleClickTarget.classList.contains("e-summarycell"))) {
        args.cancel = true;
        this.doubleClickTarget = null;
        return;
      }
      if (this.parent.editSettings.mode === "Cell") {
        if (this.keyPress === "tab" || this.keyPress === "shiftTab") {
          this.keyPress = null;
        } else if (this.keyPress === "enter") {
          args.cancel = true;
          this.keyPress = null;
          setValue("isEditCollapse", false, this.parent);
        }
        if (!args.columnObject.allowEditing) {
          args.cancel = true;
        }
      }
      if (this.parent.enableVirtualization) {
        this.parent.grid.contentModule["editedRowIndex"] = this.parent.grid.editModule.editModule["index"];
      }
    };
    Edit3.prototype.enableToolbarItems = function(request) {
      if (!isNullOrUndefined(this.parent.grid.toolbarModule)) {
        var toolbarID = this.parent.element.id + "_gridcontrol_";
        this.parent.grid.toolbarModule.enableItems([toolbarID + "add", toolbarID + "edit", toolbarID + "delete"], request === "save");
        this.parent.grid.toolbarModule.enableItems([toolbarID + "update", toolbarID + "cancel"], request === "edit");
      }
    };
    Edit3.prototype.batchCancel = function() {
      if (this.parent.editSettings.mode === "Cell") {
        var cellDetails = getValue("editModule.cellDetails", this.parent.grid.editModule);
        if (!isNullOrUndefined(this.editedRowIndex)) {
          cellDetails.rowIndex = this.editedRowIndex;
        }
        var treeCell = this.parent.getCellFromIndex(cellDetails.rowIndex, this.parent.treeColumnIndex);
        this.parent.renderModule.cellRender({
          data: cellDetails.rowData,
          cell: treeCell,
          column: this.parent.grid.getColumns()[this.parent.treeColumnIndex]
        });
        this.updateGridEditMode("Normal");
        this.isOnBatch = false;
      }
      if (this.parent.editSettings.mode === "Batch") {
        this.parent.notify("batchCancelAction", {});
      }
    };
    Edit3.prototype.customCellSave = function(args) {
      if (isCountRequired(this.parent) && this.parent.editSettings.mode === "Cell" && args.action === "edit") {
        this.updateCell(args, args.rowIndex);
        this.afterCellSave(args, args.row);
      }
    };
    Edit3.prototype.cellSave = function(args) {
      var _this = this;
      if (this.parent.editSettings.mode === "Cell" && this.parent.element.querySelector("form")) {
        args.cancel = true;
        var editModule = "editModule";
        setValue("isEditCollapse", true, this.parent);
        args.rowData[args.columnName] = args.value;
        var row_1;
        if (isNullOrUndefined(args.cell)) {
          row_1 = this.parent.grid.editModule["" + editModule].form.parentElement.parentNode;
        } else {
          row_1 = args.cell.parentNode;
        }
        var rowIndex_1;
        var primaryKeys_1 = this.parent.getPrimaryKeyFieldNames();
        if (isNullOrUndefined(row_1)) {
          this.parent.grid.getCurrentViewRecords().filter(function(e, i) {
            if (e[primaryKeys_1[0]] === args.rowData[primaryKeys_1[0]]) {
              rowIndex_1 = i;
              return;
            }
          });
        } else {
          var freeze = this.parent.getFrozenLeftColumnsCount() > 0 || this.parent.getFrozenRightColumnsCount() > 0 ? true : false;
          if (freeze) {
            if (this.parent.getRows().indexOf(row_1) !== -1) {
              rowIndex_1 = this.parent.getRows().indexOf(row_1);
            } else {
              rowIndex_1 = this.parent.getRows().indexOf(row_1);
            }
          } else {
            rowIndex_1 = this.parent.getRows().indexOf(row_1) === -1 && this.parent.getFrozenColumns() > 0 ? this.parent.grid.getRows().indexOf(row_1) : this.parent.getRows().indexOf(row_1);
          }
        }
        var arg = {};
        extend(arg, args);
        arg.cancel = false;
        arg.type = "save";
        row_1 = this.parent.grid.getRows()[row_1.rowIndex];
        this.parent.trigger(actionBegin, arg);
        if (!arg.cancel) {
          if (row_1.rowIndex === this.parent.getCurrentViewRecords().length - 1 && this.keyPress === "tab") {
            this.isTabLastRow = true;
          }
          if (!isRemoteData(this.parent) && !(this.parent.dataSource instanceof DataManager && this.parent.dataSource.adaptor instanceof RemoteSaveAdaptor)) {
            if (isCountRequired(this.parent)) {
              var eventPromise = "eventPromise";
              var editArgs = {
                requestType: "save",
                data: args.rowData,
                action: "edit",
                row: row_1,
                rowIndex: rowIndex_1,
                rowData: args.rowData,
                columnName: args.columnName,
                filterChoiceCount: null,
                excelSearchOperator: null
              };
              this.parent.grid.getDataModule()["" + eventPromise](editArgs, this.parent.grid.query);
            } else {
              this.updateCell(args, rowIndex_1);
              setValue("isEdit", false, this.parent.grid);
              this.afterCellSave(args, row_1);
            }
          } else if (isRemoteData(this.parent) || this.parent.dataSource instanceof DataManager && this.parent.dataSource.adaptor instanceof RemoteSaveAdaptor) {
            var query = this.parent.grid.query;
            if (this.parent["isGantt"] && this.parent.loadChildOnDemand) {
              this.updateCell(args, rowIndex_1);
              setValue("isEdit", false, this.parent.grid);
              this.afterCellSave(args, row_1);
            } else {
              var crud = null;
              crud = this.parent.grid.dataSource.update(primaryKeys_1[0], args.rowData, query.fromTable, query, args.previousValue);
              crud.then(function(e) {
                if (!isNullOrUndefined(e)) {
                  args.rowData[args.columnName] = e[args.columnName];
                }
                _this.updateCell(args, rowIndex_1);
                setValue("isEdit", false, _this.parent.grid);
                _this.afterCellSave(args, row_1);
              });
            }
          }
        } else {
          this.parent.grid.isEdit = true;
        }
      }
      if (this.parent.enableVirtualization) {
        this.parent.grid.contentModule["virtualData"] = {};
      }
    };
    Edit3.prototype.afterCellSave = function(args, row) {
      if (this.parent.grid.aggregateModule) {
        this.parent.grid.aggregateModule.refresh(args.rowData);
      }
      this.parent.grid.editModule.destroyWidgets([this.parent.grid.getColumnByField(args.columnName)]);
      this.parent.grid.editModule.formObj.destroy();
      if (this.keyPress !== "tab" && this.keyPress !== "shiftTab") {
        this.updateGridEditMode("Normal");
        this.isOnBatch = false;
      }
      this.enableToolbarItems("save");
      removeClass([row], ["e-editedrow", "e-batchrow"]);
      removeClass(row.querySelectorAll(".e-rowcell"), ["e-editedbatchcell", "e-updatedtd"]);
      if (this.parent["isCellSaveFocus"] !== false) {
        this.parent.grid.focusModule.restoreFocus();
      }
      editAction({ value: args.rowData, action: "edit" }, this.parent, this.isSelfReference, this.addRowIndex, this.selectedIndex, args.columnName);
      if (row.rowIndex === this.parent.getCurrentViewRecords().length - 1 && this.keyPress === "enter") {
        this.keyPress = null;
      }
      var saveArgs = {
        type: "save",
        column: this.parent.getColumnByField(args.columnName),
        data: args.rowData,
        previousData: args.previousValue,
        row,
        target: args.cell
      };
      if (this.parent.aggregates.some(function(ag) {
        return ag.showChildSummary === true;
      })) {
        this.parent.grid.refresh();
      }
      this.parent.trigger(actionComplete, saveArgs);
    };
    Edit3.prototype.lastCellTab = function() {
      if (!this.parent.grid.isEdit && this.isOnBatch && this.keyPress === "tab" && this.parent.editSettings.mode === "Cell") {
        if (!this.parent.editSettings.allowNextRowEdit) {
          this.updateGridEditMode("Normal");
          this.isOnBatch = false;
          this.keyPress = null;
        } else {
          this.enableToolbarItems("edit");
        }
      }
    };
    Edit3.prototype.updateCell = function(args, rowIndex) {
      this.parent.grid.editModule.updateCell(rowIndex, args.columnName, args.rowData[args.columnName]);
      this.parent.grid.getRowsObject()[parseInt(rowIndex.toString(), 10)].data = args.rowData;
    };
    Edit3.prototype.crudAction = function(details, columnName) {
      editAction(details, this.parent, this.isSelfReference, this.addRowIndex, this.selectedIndex, columnName, this.addRowRecord);
      this.parent.parentData = [];
      var data = this.parent.grid.dataSource instanceof DataManager ? this.parent.grid.dataSource.dataSource.json : this.parent.grid.dataSource;
      for (var i = 0; i < data.length; i++) {
        data[parseInt(i.toString(), 10)].index = i;
        var key = this.parent.grid.getPrimaryKeyFieldNames()[0];
        if (details.value["" + key] === data[parseInt(i.toString(), 10)]["" + key]) {
          if (details.action === "add") {
            data[parseInt(i.toString(), 10)].level = this.internalProperties.level;
            data[parseInt(i.toString(), 10)].taskData = this.internalProperties.taskData;
            data[parseInt(i.toString(), 10)].uniqueID = this.internalProperties.uniqueID;
            if (!isNullOrUndefined(this.internalProperties.parentItem)) {
              data[parseInt(i.toString(), 10)].parentItem = this.internalProperties.parentItem;
              data[parseInt(i.toString(), 10)].parentUniqueID = this.internalProperties.parentUniqueID;
            }
            data[parseInt(i.toString(), 10)].childRecords = this.internalProperties.childRecords;
          }
        }
        setValue("uniqueIDCollection." + data[parseInt(i.toString(), 10)].uniqueID + ".index", i, this.parent);
        var adaptor = this.parent.dataSource.adaptor;
        if (isRemoteData(this.parent) || adaptor instanceof RemoteSaveAdaptor) {
          setValue("uniqueIDCollection." + data[parseInt(i.toString(), 10)].uniqueID, data[parseInt(i.toString(), 10)], this.parent);
        }
        if (!data[parseInt(i.toString(), 10)].level) {
          this.parent.parentData.push(data[parseInt(i.toString(), 10)]);
        }
      }
      if (!this.parent.enableInfiniteScrolling) {
        if (details.action === "add" && this.previousNewRowPosition != null) {
          this.parent.setProperties({ editSettings: { newRowPosition: this.previousNewRowPosition } }, true);
          this.previousNewRowPosition = null;
        }
      }
    };
    Edit3.prototype.updateIndex = function(data, rows, records) {
      for (var j = 0; j < this.parent.getDataRows().length; j++) {
        var data1 = records[parseInt(j.toString(), 10)];
        if (!isNullOrUndefined(data1)) {
          var index = getValue("uniqueIDCollection." + data1.uniqueID + ".index", this.parent);
          data1.index = index;
          if (!isNullOrUndefined(data1.parentItem)) {
            var parentIndex = getValue("uniqueIDCollection." + data1.parentItem.uniqueID + ".index", this.parent);
            data1.parentItem.index = parentIndex;
          }
        }
      }
      var count = -1;
      var treeColIndex = this.parent.treeColumnIndex;
      if (this.parent.getFrozenColumns() > 0) {
        var cells = rows[0].querySelectorAll(".e-rowcell");
        for (var l = 0; l < cells.length; l++) {
          if (cells[parseInt(l.toString(), 10)].classList.contains("e-gridrowindex0level0")) {
            treeColIndex = l;
            break;
          }
        }
      }
      for (var k = 0; k < this.parent.getRows().length; k++) {
        if (!rows[parseInt(k.toString(), 10)].classList.contains("e-detailrow")) {
          count++;
        }
        var data2 = records[parseInt(count.toString(), 10)];
        if (!isNullOrUndefined(data2)) {
          var index = data2.index;
          var level = data2.level;
          var row = rows[parseInt(k.toString(), 10)];
          if (!isNullOrUndefined(data2.parentItem)) {
            index = getValue("uniqueIDCollection." + data2.parentItem.uniqueID + ".index", this.parent);
          }
          var treecell = row.cells[parseInt(treeColIndex.toString(), 10)];
          if (!isNullOrUndefined(treecell)) {
            for (var l = 0; l < treecell.classList.length; l++) {
              var value = treecell.classList[parseInt(l.toString(), 10)];
              var remove2 = /e-gridrowindex/i;
              var removed = /e-griddetailrowindex/i;
              var result = value.match(remove2);
              var results = value.match(removed);
              if (result != null) {
                removeClass([treecell], value);
              }
              if (results != null) {
                removeClass([treecell], value);
              }
            }
            if (!rows[parseInt(k.toString(), 10)].classList.contains("e-detailrow")) {
              addClass([treecell], "e-gridrowindex" + index + "level" + level);
            } else {
              addClass([treecell], "e-griddetailrowindex" + index + "level" + level);
            }
          }
        }
      }
    };
    Edit3.prototype.beginAdd = function() {
      var position;
      var index = this.addRowIndex;
      var records = this.parent.grid.getCurrentViewRecords();
      if (this.parent.editSettings.mode === "Batch") {
        index = this.batchEditModule.getAddRowIndex();
        this.selectedIndex = this.batchEditModule.getSelectedIndex();
        if (this.parent.getBatchChanges()[this.addedRecords].length > 1 || this.parent.getBatchChanges()[this.deletedRecords].length) {
          records = this.batchEditModule.getBatchRecords();
        }
      }
      var rows = this.parent.grid.getDataRows();
      var firstAriaIndex = rows.length ? +rows[0].getAttribute("aria-rowindex") - 1 : 0;
      var lastAriaIndex = rows.length ? +rows[rows.length - 1].getAttribute("aria-rowindex") - 1 : 0;
      var withinRange = this.selectedIndex >= firstAriaIndex && this.selectedIndex <= lastAriaIndex;
      var isVirtualization = this.parent.enableVirtualization && this.addRowIndex > -1 && this.prevAriaRowIndex !== "-1";
      if (this.parent.editSettings.mode !== "Dialog") {
        if (this.parent.editSettings.newRowPosition === "Above") {
          position = "before";
        } else if ((this.parent.editSettings.newRowPosition === "Below" || this.parent.editSettings.newRowPosition === "Child") && (this.selectedIndex > -1 || isVirtualization) && withinRange) {
          position = "after";
          if (!isNullOrUndefined(records[parseInt(index.toString(), 10)]) && records[parseInt(index.toString(), 10)].expanded) {
            if (this.parent.editSettings.mode === "Batch" && (this.parent.getBatchChanges()[this.addedRecords].length > 1 || this.parent.getBatchChanges()[this.deletedRecords].length)) {
              index += findChildrenRecords(records[parseInt(index.toString(), 10)]).length;
              if (this.parent.editSettings.newRowPosition !== "Child") {
                var batchChildCount = this.batchEditModule.getBatchChildCount();
                index = index + batchChildCount;
              }
            } else if (!this.parent.enableVirtualization) {
              index += findChildrenRecords(records[parseInt(index.toString(), 10)]).length;
            }
          }
        }
        if ((this.selectedIndex > -1 || isVirtualization) && withinRange && (index || (this.parent.editSettings.newRowPosition === "Child" || this.parent.editSettings.newRowPosition === "Below"))) {
          if (index >= rows.length - 1) {
            index = rows.length - 2;
          }
          var r = "rows";
          var newRowObject = this.parent.grid.contentModule["" + r][0];
          var focussedElement = document.activeElement;
          rows[index + 1]["" + position](rows[0]);
          setValue("batchIndex", index + 1, this.batchEditModule);
          var rowObjectIndex = this.parent.editSettings.newRowPosition === "Above" ? index : index + 1;
          if (this.parent.editSettings.mode === "Batch") {
            this.parent.grid.contentModule["" + r].splice(0, 1);
            this.parent.grid.contentModule["" + r].splice(rowObjectIndex, 0, newRowObject);
          }
          if (this.parent.editSettings.mode === "Row" || this.parent.editSettings.mode === "Cell") {
            var errors = this.parent.grid.getContentTable().querySelectorAll(".e-griderror");
            for (var i = 0; i < errors.length; i++) {
              errors[parseInt(i.toString(), 10)].remove();
            }
            setValue("errorRules", [], this.parent.grid.editModule.formObj);
          }
          if (isVirtualization) {
            this.prevAriaRowIndex = "-1";
          }
          if (!this.parent.enableVirtualization || this.parent.enableVirtualization) {
            this.isScrollByFocus = true;
            focussedElement.focus();
          }
          if (this.parent.enableVirtualization && !Object.keys(this.parent.grid.contentModule["emptyRowData"]).length) {
            this.parent.grid.contentModule["createEmptyRowdata"]();
          }
        }
      }
      if (this.parent.editSettings.mode === "Batch" && !isNullOrUndefined(this.addRowIndex) && this.addRowIndex !== -1 && !this.isAddedMultipleRowsByMethod && this["isAddedRowByMethod"] && !this.isAddedRowByContextMenu) {
        index = this.batchEditModule.getAddRowIndex();
        this.selectedIndex = this.batchEditModule.getSelectedIndex();
        var batchAddedRecords = this.parent.getBatchChanges()["addedRecords"];
        var newlyAddedRecord = void 0;
        if (batchAddedRecords.length) {
          for (var i = 0; i < batchAddedRecords.length; i++) {
            if (isNullOrUndefined(batchAddedRecords[parseInt(i.toString(), 10)].uniqueID)) {
              newlyAddedRecord = batchAddedRecords[parseInt(i.toString(), 10)];
            }
          }
        }
        var args = {
          action: "add",
          data: newlyAddedRecord,
          index,
          seletedRow: 0
        };
        this.beginAddEdit(args);
        this.batchEditModule["batchAddRowRecord"].push(this.batchEditModule["addRowRecord"]);
        this.batchEditModule["batchAddedRecords"].push(args["data"]);
      } else if (this.parent.editSettings.mode === "Batch" && this.isAddedMultipleRowsByMethod && (this.parent.editSettings.newRowPosition === "Above" || this.parent.editSettings.newRowPosition === "Below")) {
        index = this.multipleRowIndex;
        this.selectedIndex = this.multipleRowIndex;
        var batchAddedRecords = this.updatedRecords.addedRecords;
        var newlyAddedRecord = void 0;
        if (batchAddedRecords.length) {
          for (var i = 0; i < batchAddedRecords.length; i++) {
            if (isNullOrUndefined(batchAddedRecords[parseInt(i.toString(), 10)].uniqueID)) {
              newlyAddedRecord = batchAddedRecords[parseInt(i.toString(), 10)];
            }
            var args = {
              action: "add",
              data: newlyAddedRecord,
              index,
              seletedRow: 0
            };
            this.beginAddEdit(args);
            this.batchEditModule["batchAddRowRecord"].push(this.batchEditModule["addRowRecord"]);
            this.batchEditModule["batchAddedRecords"].push(args["data"]);
          }
        }
      }
    };
    Edit3.prototype.beginEdit = function(args) {
      if (this.parent.flatData.length === 0 && !isNullOrUndefined(this.addRowRecord)) {
        this.addRowRecord = void 0;
      }
      if (args.requestType === "refresh" && this.isOnBatch) {
        args.cancel = true;
        return;
      }
      if (this.parent.editSettings.mode === "Cell" && args.requestType === "beginEdit") {
        args.cancel = true;
        return;
      }
      if (this.doubleClickTarget && args.requestType !== "delete" && (this.doubleClickTarget.classList.contains("e-treegridexpand") || this.doubleClickTarget.classList.contains("e-treegridcollapse") || this.doubleClickTarget.classList.contains("e-frame"))) {
        args.cancel = true;
        this.doubleClickTarget = null;
        return;
      }
      if (args.requestType === "delete") {
        var data_1 = args.data;
        if (isNullOrUndefined(args.data[0].uniqueID)) {
          var primaryKeys_2 = this.parent.getPrimaryKeyFieldNames();
          var _loop_1 = function(i2) {
            this_1.parent.flatData.filter(function(e) {
              if (e["" + primaryKeys_2[0]] === args.data[parseInt(i2.toString(), 10)][primaryKeys_2[0]]) {
                data_1[parseInt(i2.toString(), 10)] = e;
              }
            });
          };
          var this_1 = this;
          for (var i = 0; i < data_1.length; i++) {
            _loop_1(i);
          }
        }
        for (var i = 0; i < data_1.length; i++) {
          this.deleteUniqueID(data_1[parseInt(i.toString(), 10)].uniqueID);
          var childs = findChildrenRecords(data_1[parseInt(i.toString(), 10)]);
          for (var c = 0; c < childs.length; c++) {
            this.deleteUniqueID(childs[parseInt(c.toString(), 10)].uniqueID);
          }
          args.data = args.data.concat(childs);
        }
      }
      if (args.requestType === "add" || this.isAddedRowByMethod && (this.parent.enableVirtualization || this.parent.enableInfiniteScrolling)) {
        if (!(this.parent.grid.selectedRowIndex === -1 && this.isAddedRowByMethod) && args.index === this.parent.grid.selectedRowIndex || args.index === 0) {
          this.selectedIndex = this.parent.grid.selectedRowIndex;
        }
        if (this.parent.enableVirtualization) {
          var selector = '.e-row[aria-rowindex="' + (this.selectedIndex + 1) + '"]';
          var row = void 0;
          if (this.selectedIndex > -1 && this.parent.editSettings.newRowPosition !== "Top" && this.parent.editSettings.newRowPosition !== "Bottom") {
            this.prevAriaRowIndex = this.selectedIndex.toString();
            row = this.parent.getContent().querySelector(selector);
            this.addRowIndex = row ? row.rowIndex : 0;
          } else {
            if (this.prevAriaRowIndex && this.prevAriaRowIndex !== "-1") {
              selector = '.e-row[aria-rowindex="' + (this.prevAriaRowIndex + 1) + '"]';
              row = this.parent.getContent().querySelector(selector);
              this.addRowIndex = row ? row.rowIndex : 0;
            } else {
              this.addRowIndex = 0;
            }
          }
        } else {
          if (this.isAddedRowByMethod && (this.parent.enableVirtualization || this.parent.enableInfiniteScrolling)) {
            if (args.index !== 0) {
              this.addRowIndex = args.index;
            } else {
              this.addRowIndex = this.parent.grid.selectedRowIndex;
            }
          } else {
            this.addRowIndex = this.parent.grid.selectedRowIndex > -1 ? this.parent.grid.selectedRowIndex : 0;
          }
        }
        var selectedRecords = this.parent.getSelectedRecords()[0];
        if ((this.isAddedRowByMethod || this.isAddedRowByContextMenu && this.parent.grid.selectedRowIndex !== -1) && (this.parent.enableVirtualization || this.parent.enableInfiniteScrolling)) {
          this.addRowRecord = this.parent.flatData[this.parent.grid.selectedRowIndex];
          if (this.parent.enableVirtualization && this.isAddedRowByContextMenu) {
            this.addRowRecord = this.parent.getCurrentViewRecords()[this.addRowIndex];
          }
        } else if (!isNullOrUndefined(selectedRecords)) {
          this.addRowRecord = selectedRecords;
        }
      }
      if (this.isAddedRowByMethod && args.index !== 0) {
        this.addRowRecord = this.parent.flatData[args.index];
        this.addRowIndex = args.index;
      }
      if (this.parent.editSettings.newRowPosition === "Child" && (this.isIndexUndefined || this.isAddedRowByMethod) && !isNullOrUndefined(this.parent.getSelectedRecords()[0])) {
        this.addRowRecord = this.parent.getSelectedRecords()[0];
        this.isIndexUndefined = false;
      }
      if (isNullOrUndefined(this.addRowRecord) && this.parent.getCurrentViewRecords().length > this.addRowIndex && args.requestType === "save" && this.parent.getSelectedRecords().length !== 0) {
        this.addRowRecord = this.parent.getCurrentViewRecords()[this.addRowIndex];
      }
      this.isAddedRowByMethod = false;
      args = this.beginAddEdit(args);
    };
    Edit3.prototype.savePreviousRowPosition = function() {
      if (this.previousNewRowPosition === null) {
        this.previousNewRowPosition = this.parent.editSettings.newRowPosition;
      }
    };
    Edit3.prototype.beginAddEdit = function(args) {
      var value = args.data;
      if (args.action === "add") {
        var key = this.parent.grid.getPrimaryKeyFieldNames()[0];
        var position = null;
        value.taskData = isNullOrUndefined(value.taskData) ? extend({}, args.data) : value.taskData;
        var currentData = void 0;
        if (this.parent.enableVirtualization && args.index !== 0) {
          currentData = this.parent.flatData;
        } else if (this.parent.editSettings.mode === "Batch" && this["isAddedRowByMethod"] && !isNullOrUndefined(this.addRowIndex)) {
          currentData = this.batchEditModule["batchRecords"];
        } else {
          currentData = this.parent.grid.getCurrentViewRecords();
        }
        if (this.parent.enableVirtualization && args.index !== 0) {
          this.addRowIndex = this.parent.flatData.indexOf(this.addRowRecord);
          this.selectedIndex = this.addRowIndex;
        }
        var index = this.addRowIndex;
        value.uniqueID = getUid(this.parent.element.id + "_data_");
        setValue("uniqueIDCollection." + value.uniqueID, value, this.parent);
        var level = 0;
        var idMapping = void 0;
        var parentUniqueID = void 0;
        var parentItem = void 0;
        var parentIdMapping = void 0;
        var isVirtualization = this.parent.enableVirtualization && this.addRowIndex > -1 && this.prevAriaRowIndex !== "-1";
        var rows = this.parent.getRows();
        var firstAriaIndex = rows.length ? currentData.indexOf(currentData[0]) : 0;
        var lastAriaIndex = rows.length ? +rows[rows.length - 1].getAttribute("aria-rowindex") - 1 : 0;
        var withinRange = this.parent.enableVirtualization && args.index !== 0 ? true : this.selectedIndex >= firstAriaIndex && this.selectedIndex <= lastAriaIndex;
        if (currentData.length && !isNullOrUndefined(index)) {
          idMapping = currentData[this.addRowIndex][this.parent.idMapping];
          parentIdMapping = currentData[this.addRowIndex][this.parent.parentIdMapping];
          if (currentData[this.addRowIndex].parentItem) {
            parentUniqueID = currentData[this.addRowIndex].parentItem.uniqueID;
          }
          parentItem = currentData[this.addRowIndex].parentItem;
        }
        if (this.parent.editSettings.newRowPosition !== "Top" && currentData.length && !isNullOrUndefined(index)) {
          level = currentData[this.addRowIndex].level;
          if (this.parent.editSettings.newRowPosition === "Above") {
            position = "before";
            index = currentData[this.addRowIndex].index;
          } else if (this.parent.editSettings.newRowPosition === "Below") {
            position = "after";
            var childRecordCount = findChildrenRecords(currentData[this.addRowIndex]).length;
            var currentDataIndex = currentData[this.addRowIndex].index;
            index = childRecordCount > 0 ? currentDataIndex + childRecordCount : currentDataIndex;
          } else if (this.parent.editSettings.newRowPosition === "Child") {
            position = "after";
            if ((this.selectedIndex > -1 || isVirtualization) && withinRange) {
              value.parentItem = extend({}, currentData[this.addRowIndex]);
              value.parentUniqueID = value.parentItem.uniqueID;
              delete value.parentItem.childRecords;
              delete value.parentItem[this.parent.childMapping];
            }
            var childRecordCount1 = findChildrenRecords(currentData[this.addRowIndex]).length;
            var currentDataIndex1 = currentData[this.addRowIndex].index;
            if (this.selectedIndex >= 0) {
              value.level = level + 1;
            }
            index = childRecordCount1 > 0 ? currentDataIndex1 + childRecordCount1 : currentDataIndex1;
            if (this.isSelfReference) {
              if (!this.parent.isLocalData && this.parent.editModule.selectedIndex === -1) {
                value.taskData[this.parent.parentIdMapping] = value[this.parent.parentIdMapping] = null;
              } else {
                value.taskData[this.parent.parentIdMapping] = value[this.parent.parentIdMapping] = idMapping;
              }
              if (!isNullOrUndefined(value.parentItem)) {
                updateParentRow(key, value.parentItem, "add", this.parent, this.isSelfReference, value);
              }
            }
          }
          if (this.parent.editSettings.newRowPosition === "Above" || this.parent.editSettings.newRowPosition === "Below") {
            if ((this.selectedIndex > -1 || isVirtualization) && level && withinRange) {
              value.parentUniqueID = parentUniqueID;
              value.parentItem = extend({}, parentItem);
              delete value.parentItem.childRecords;
              delete value.parentItem[this.parent.childMapping];
            }
            value.level = level;
            if (this.isSelfReference) {
              value.taskData[this.parent.parentIdMapping] = value[this.parent.parentIdMapping] = parentIdMapping;
              if (!isNullOrUndefined(value.parentItem)) {
                updateParentRow(key, value.parentItem, "add", this.parent, this.isSelfReference, value);
              }
            }
          }
          if (position != null && (this.selectedIndex > -1 || isVirtualization) && withinRange) {
            args.index = position === "before" ? index : index + 1;
          }
          if (this.parent.editSettings.newRowPosition === "Bottom") {
            level = 0;
            var dataSource = this.parent.grid.dataSource instanceof DataManager ? this.parent.grid.dataSource.dataSource.json : this.parent.grid.dataSource;
            args.index = dataSource.length;
          }
        }
        if (isNullOrUndefined(value.level)) {
          value.level = level;
        }
        value.hasChildRecords = false;
        value.childRecords = [];
        value.index = 0;
      }
      if (args.action === "add") {
        this.internalProperties = {
          level: value.level,
          parentItem: value.parentItem,
          uniqueID: value.uniqueID,
          taskData: value.taskData,
          parentUniqueID: isNullOrUndefined(value.parentItem) ? void 0 : value.parentItem.uniqueID,
          childRecords: value.childRecords
        };
      }
      if (args.requestType === "delete") {
        var deletedValues_1 = args.data;
        var primaryKeyField_1 = this.parent.getPrimaryKeyFieldNames();
        if (!isNullOrUndefined(primaryKeyField_1) && primaryKeyField_1.length > 0) {
          var _loop_2 = function(i2) {
            var deletevalue = deletedValues_1[parseInt(i2.toString(), 10)].parentItem;
            if (deletevalue) {
              var parentItem2 = getParentData(this_2.parent, deletevalue.uniqueID);
              if (!isNullOrUndefined(parentItem2) && parentItem2.hasChildRecords) {
                var childIndex = parentItem2.childRecords.findIndex(function(child) {
                  return deletedValues_1[parseInt(i2.toString(), 10)][primaryKeyField_1[0]] === child[primaryKeyField_1[0]];
                });
                parentItem2.childRecords.splice(childIndex, 1);
              }
            }
          };
          var this_2 = this;
          for (var i = 0; i < deletedValues_1.length; i++) {
            _loop_2(i);
          }
        }
      }
      return args;
    };
    Edit3.prototype.addRecord = function(data, index, position) {
      if (this.parent.editSettings.newRowPosition === this.previousNewRowPosition || this.previousNewRowPosition === null) {
        this.previousNewRowPosition = this.parent.editSettings.newRowPosition;
      }
      if (isNullOrUndefined(index)) {
        this.isIndexUndefined = true;
      }
      if (!isNullOrUndefined(data) && Array.isArray(data)) {
        var addRecords = [];
        var previousEditMode = this.parent.editSettings.mode;
        var previousGridEditMode = this.parent.grid.editSettings.mode;
        if (!this.isSelfReference && !isNullOrUndefined(data) && Object.hasOwnProperty.call(data, this.parent.childMapping)) {
          addRecords.push(data);
        } else if (Array.isArray(data)) {
          addRecords = data;
        }
        this.parent.setProperties({ editSettings: { mode: "Batch" } }, true);
        this.parent.grid.setProperties({ editSettings: { mode: "Batch" } }, true);
        if (!isNullOrUndefined(position)) {
          this.parent.setProperties({ editSettings: { newRowPosition: position } }, true);
        }
        this.updatedRecords = { addedRecords: addRecords, changedRecords: [], deletedRecords: [] };
        if ((position === "Above" || position === "Below") && this.isSelfReference) {
          this.isAddedMultipleRowsByMethod = true;
          this.multipleRowIndex = index;
          this.addRowIndex = index;
          this.parent.notify(batchAdd, { updatedRecords: this.updatedRecords, index });
        }
        var updatedRecords = this.updatedRecords;
        this.parent.notify(batchSave, { updatedRecords, index });
        this.parent.setProperties({ editSettings: { mode: previousEditMode } }, true);
        this.parent.grid.setProperties({ editSettings: { mode: previousGridEditMode } }, true);
        this.parent.refresh();
      } else if (!this.isSelfReference && !isNullOrUndefined(data) && Object.hasOwnProperty.call(data, this.parent.childMapping)) {
        var addRecords = [];
        var previousEditMode = this.parent.editSettings.mode;
        var previousGridEditMode = this.parent.grid.editSettings.mode;
        addRecords.push(data);
        this.parent.setProperties({ editSettings: { mode: "Batch" } }, true);
        this.parent.grid.setProperties({ editSettings: { mode: "Batch" } }, true);
        if (!isNullOrUndefined(position)) {
          this.parent.setProperties({ editSettings: { newRowPosition: position } }, true);
        }
        this.updatedRecords = { addedRecords: addRecords, changedRecords: [], deletedRecords: [] };
        var updatedRecords = this.updatedRecords;
        this.parent.notify(batchSave, { updatedRecords, index });
        this.parent.setProperties({ editSettings: { mode: previousEditMode } }, true);
        this.parent.grid.setProperties({ editSettings: { mode: previousGridEditMode } }, true);
        this.parent.refresh();
      } else {
        if (data) {
          if (index > -1) {
            this.selectedIndex = index;
            this.addRowIndex = index;
          } else {
            this.selectedIndex = this.parent.selectedRowIndex;
            this.addRowIndex = this.parent.selectedRowIndex;
          }
          if (position) {
            this.parent.setProperties({ editSettings: { newRowPosition: position } }, true);
          }
          this.parent.grid.editModule.addRecord(data, index);
        } else {
          this.parent.grid.editModule.addRecord(data, index);
        }
      }
    };
    Edit3.prototype.editFormValidate = function() {
      return this.parent.grid.editModule.editFormValidate();
    };
    Edit3.prototype.destroyForm = function() {
      this.parent.grid.editModule.destroyForm();
    };
    Edit3.prototype.contentready = function(e) {
      if (!isNullOrUndefined(e.args.requestType) && (e.args.requestType.toString() === "delete" || e.args.requestType.toString() === "save" || this.parent.editSettings.mode === "Batch" && e.args.requestType.toString() === "batchsave")) {
        this.updateIndex(this.parent.grid.dataSource, this.parent.getRows(), this.parent.getCurrentViewRecords());
        if (this.parent.frozenRows || this.parent.getFrozenColumns() || this.parent.frozenColumns) {
          if (this.parent.grid.dataSource.length === this.parent.getDataRows().length) {
            this.updateIndex(this.parent.grid.dataSource, this.parent.getDataRows(), this.parent.getCurrentViewRecords());
          }
        }
      }
    };
    Edit3.prototype.editCell = function(rowIndex, field) {
      if (this.parent.editSettings.mode === "Cell" || this.parent.editSettings.mode === "Batch") {
        if (this.parent.editSettings.mode !== "Batch") {
          this.isOnBatch = true;
          this.updateGridEditMode("Batch");
        }
        this.parent.grid.editModule.editCell(rowIndex, field);
      }
    };
    Edit3.prototype.closeEdit = function() {
      if (this.parent.enableVirtualization && this.parent.grid.editSettings.mode === "Batch" && this.parent.grid.pageSettings.currentPage > 1) {
        this.editedRowIndex = this.parent.grid.editModule.editModule["cellDetails"].rowIndex;
        this.parent.grid.editModule.editModule["cellDetails"].rowIndex = parseInt(this.parent.getRows()[this.parent.grid.editModule.editModule["cellDetails"].rowIndex].getAttribute("aria-rowIndex"), 10) - 1;
      }
      this.parent.grid.editModule.closeEdit();
    };
    return Edit3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/command-column.js
var CommandColumn2 = (
  /** @class */
  (function() {
    function CommandColumn3(parent) {
      Grid.Inject(CommandColumn);
      this.parent = parent;
    }
    CommandColumn3.prototype.getModuleName = function() {
      return "commandColumn";
    };
    CommandColumn3.prototype.destroy = function() {
    };
    return CommandColumn3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/detail-row.js
var DetailRow2 = (
  /** @class */
  (function() {
    function DetailRow3(parent) {
      Grid.Inject(DetailRow);
      this.parent = parent;
      this.addEventListener();
    }
    DetailRow3.prototype.getModuleName = function() {
      return "detailRow";
    };
    DetailRow3.prototype.addEventListener = function() {
      this.parent.on("dataBoundArg", this.dataBoundArg, this);
      this.parent.on("detaildataBound", this.detaildataBound, this);
      this.parent.grid.on("detail-indentcell-info", this.setIndentVisibility, this);
      this.parent.on("childRowExpand", this.childRowExpand, this);
      this.parent.on("rowExpandCollapse", this.rowExpandCollapse, this);
      this.parent.on("actioncomplete", this.actioncomplete, this);
    };
    DetailRow3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off("dataBoundArg", this.dataBoundArg);
      this.parent.off("detaildataBound", this.detaildataBound);
      this.parent.off("childRowExpand", this.childRowExpand);
      this.parent.off("rowExpandCollapse", this.rowExpandCollapse);
      this.parent.off("actioncomplete", this.actioncomplete);
      this.parent.grid.off("detail-indentcell-info", this.setIndentVisibility);
    };
    DetailRow3.prototype.setIndentVisibility = function(args) {
      var visible = "visible";
      args["" + visible] = false;
    };
    DetailRow3.prototype.dataBoundArg = function() {
      var detailRows = this.parent.getRows().filter(function(e) {
        return !e.classList.contains("e-detailrow");
      });
      for (var i = 0; i < detailRows.length; i++) {
        var elements = detailRows[parseInt(i.toString(), 10)].getElementsByClassName("e-detailrowcollapse");
        var detailData = this.parent.grid.getRowObjectFromUID(detailRows[parseInt(i.toString(), 10)].getAttribute("data-Uid"));
        var parentItem = getObject("parentItem", this.parent.grid.getCurrentViewRecords()[parseInt(i.toString(), 10)]);
        if (isNullOrUndefined(parentItem) || !isNullOrUndefined(parentItem) && getExpandStatus(this.parent, detailData.data, this.parent.grid.getCurrentViewRecords())) {
          this.parent.grid.detailRowModule.expand(elements[0]);
        }
      }
    };
    DetailRow3.prototype.childRowExpand = function(args) {
      var detailRowElement = args.row.getElementsByClassName("e-detailrowcollapse");
      if (!isNullOrUndefined(detailRowElement[0])) {
        this.parent.grid.detailRowModule.expand(detailRowElement[0]);
      }
    };
    DetailRow3.prototype.rowExpandCollapse = function(args) {
      if (isRemoteData(this.parent)) {
        return;
      }
      for (var i = 0; i < args.detailrows.length; i++) {
        this.parent["toggleRowVisibility"](args.detailrows[parseInt(i.toString(), 10)], args.action);
      }
    };
    DetailRow3.prototype.detaildataBound = function(args) {
      var data = args.data;
      var row = args.detailElement.parentElement.previousSibling;
      var index = !isNullOrUndefined(data.parentItem) ? data.parentItem.index : data.index;
      var expandClass = "e-gridrowindex" + index + "level" + data.level;
      var classlist = row.querySelector("." + expandClass).classList;
      var gridClas = [].slice.call(classlist).filter(function(gridclass) {
        return gridclass === expandClass;
      });
      var newNo = gridClas[0].length;
      var slicedclas = gridClas.toString().slice(6, newNo);
      var detailClass = "e-griddetail" + slicedclas;
      addClass([args.detailElement.parentElement], detailClass);
    };
    DetailRow3.prototype.actioncomplete = function(args) {
      if (args.requestType === "beginEdit" || args.requestType === "add") {
        var colSpan = args.row.querySelectorAll(".e-editcell")[0].getAttribute("colSpan");
        var colum = parseInt(colSpan, 10) - 1;
        args.row.querySelectorAll(".e-editcell")[0].setAttribute("colSpan", colum.toString());
      }
      var focusElement = this.parent.grid.contentModule.getRows();
      for (var i = 0; i < focusElement.length; i++) {
        focusElement[parseInt(i.toString(), 10)].cells[0].visible = false;
      }
      var focusModule = getObject("focusModule", this.parent.grid);
      var matrix = "refreshMatrix";
      focusModule["" + matrix](true)({ rows: this.parent.grid.contentModule.getRows() });
    };
    DetailRow3.prototype.destroy = function() {
      this.removeEventListener();
    };
    return DetailRow3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/renderer/virtual-tree-content-render.js
var __extends18 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var VirtualTreeContentRenderer = (
  /** @class */
  (function(_super) {
    __extends18(VirtualTreeContentRenderer2, _super);
    function VirtualTreeContentRenderer2(parent, locator) {
      var _this = _super.call(this, parent, locator) || this;
      _this.isExpandCollapse = false;
      _this.translateY = 0;
      _this.maxiPage = 0;
      _this.recordAdded = false;
      _this.startIndex = -1;
      _this.endIndex = -1;
      _this.preTranslate = 0;
      _this.isRemoteExpand = false;
      _this.isDataSourceChanged = false;
      _this.addEventListener();
      return _this;
    }
    VirtualTreeContentRenderer2.prototype.getModelGenerator = function() {
      return new TreeVirtualRowModelGenerator(this.parent);
    };
    VirtualTreeContentRenderer2.prototype.getRowByIndex = function(index) {
      if (this.parent.enableVirtualization && this.parent.isFrozenGrid()) {
        return this.getRowCollection(index, true);
      }
      var dataRows = this.parent.getDataRows();
      var targetRow = dataRows.find(function(e) {
        return parseInt(e.getAttribute("aria-rowindex"), 10) - 1 === index;
      });
      if (!targetRow && this.parent.isEdit && this.parent.editSettings.mode === "Batch") {
        return index != null ? this.parent.getRows()[parseInt(index.toString(), 10)] : void 0;
      }
      return targetRow;
    };
    VirtualTreeContentRenderer2.prototype.getFrozenRightVirtualRowByIndex = function(index) {
      return this.getRowCollection(index, false, false, true);
    };
    VirtualTreeContentRenderer2.prototype.getRowCollection = function(index, isMovable, isRowObject, isFrozenRight) {
      var rows = this.parent.getRows();
      var startIdx = rows.length > 0 ? parseInt(rows[0].getAttribute(ariaRowIndex), 10) - 1 : 0;
      var rowCollection = this.parent.getDataRows();
      var collection = isRowObject ? this.parent.getCurrentViewRecords() : rowCollection;
      var selectedRow = collection[index - startIdx];
      if (this.parent.frozenRows && this.parent.pageSettings.currentPage > 1) {
        if (!isRowObject) {
          selectedRow = index <= this.parent.frozenRows ? rowCollection[parseInt(index.toString(), 10)] : rowCollection[index - startIdx + this.parent.frozenRows];
        } else {
          selectedRow = index <= this.parent.frozenRows ? this.parent.getRowsObject()[parseInt(index.toString(), 10)].data : selectedRow;
        }
      }
      if (selectedRow == null && index != null && this.parent.editSettings.mode === "Batch" && this.parent.isEdit && isMovable) {
        selectedRow = rowCollection[parseInt(index.toString(), 10)];
      }
      return selectedRow;
    };
    VirtualTreeContentRenderer2.prototype.addEventListener = function() {
      this.parent.on(virtualActionArgs, this.virtualOtherAction, this);
      this.parent.on(indexModifier, this.indexModifier, this);
    };
    VirtualTreeContentRenderer2.prototype.virtualOtherAction = function(args) {
      if (args.setTop) {
        this.translateY = 0;
        this.startIndex = 0;
        this.endIndex = this.parent.pageSettings.pageSize - 1;
      } else if (args.isExpandCollapse) {
        this.isExpandCollapse = true;
      }
    };
    VirtualTreeContentRenderer2.prototype.indexModifier = function(args) {
      var content2 = this.parent.getContent().querySelector(".e-content");
      var pageSize = this.parent.pageSettings.pageSize;
      if ((this.recordAdded || args.requestType === "delete" && this.endIndex > args.count - this.parent.pageSettings.pageSize) && this.startIndex > -1 && this.endIndex > -1) {
        if (this.endIndex > args.count - pageSize) {
          var nextSetResIndex = ~~(content2.scrollTop / this.parent.getRowHeight());
          var lastIndex = nextSetResIndex + this.parent.getRows().length;
          if (lastIndex > args.count) {
            lastIndex = nextSetResIndex + (args.count - nextSetResIndex);
          }
          this.startIndex = lastIndex - this.parent.getRows().length;
          this.endIndex = lastIndex;
        } else if (this.parent.root.editSettings.newRowPosition !== "Top" && this.parent.root.editModule.selectedIndex !== -1 || this.parent.root.editModule.selectedIndex !== -1) {
          this.startIndex += 1;
          this.endIndex += 1;
        }
        this.recordAdded = false;
      }
      if (this.isDataSourceChanged) {
        this.startIndex = 0;
        this.endIndex = pageSize - 1;
      }
      if (this.endIndex - this.startIndex !== pageSize && this.totalRecords > pageSize && this.endIndex === this.totalRecords) {
        args.startIndex = this.endIndex - pageSize;
        args.endIndex = this.endIndex;
      } else {
        args.startIndex = this.startIndex;
        args.endIndex = this.endIndex;
      }
    };
    VirtualTreeContentRenderer2.prototype.eventListener = function(action) {
      var _this = this;
      if (!(this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== void 0 && this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== "") || !isCountRequired(this.parent)) {
        this.parent["" + action]("data-ready", this.onDataReady, this);
        this.parent["" + action]("refresh-virtual-block", this.refreshContentRows, this);
        this.parent.on(destroy, this.destroy, this);
        this.fn = function() {
          if (_this.parent.root.enableSeamlessScrolling) {
            window.addEventListener("resize", _this.updateScrollbar.bind(_this));
          }
          _this.observers.observes(function(scrollArgs) {
            return _this.scrollListeners(scrollArgs);
          }, _this.onEnteredAction(), _this.parent);
          var gObj = _this.parent;
          if (gObj.root.enablePersistence && gObj.root.scrollPosition) {
            _this.content.scrollTop = gObj.root.scrollPosition.top;
            if (gObj.root.enableColumnVirtualization) {
              _this.content.scrollLeft = gObj.root.scrollPosition.left;
            }
            var scrollValues = {
              direction: "down",
              sentinel: _this.observer.sentinelInfo.down,
              offset: gObj.root.scrollPosition,
              focusElement: gObj.element
            };
            _this.scrollListeners(scrollValues);
          }
          _this.parent.off("content-ready", _this.fn);
        };
        this.parent.addEventListener("dataBound", this.dataBoundEvent.bind(this));
        this.parent.addEventListener("rowSelected", this.rowSelectedEvent.bind(this));
        this.parent["" + action]("select-virtual-Row", this.toSelectVirtualRow, this);
        this.parent.on("content-ready", this.fn, this);
        this.parent.addEventListener(actionBegin, this.handleActionBegin.bind(this));
        this.parent.addEventListener(actionComplete, this.onActionComplete.bind(this));
        this.parent["" + action]("virtual-scroll-edit-action-begin", this.beginEdit, this);
        this.parent["" + action]("virtual-scroll-add-action-begin", this.beginAdd, this);
        this.parent["" + action]("virtual-scroll-edit-success", this.virtualEditSuccess, this);
        this.parent["" + action]("edit-reset", this.resetIseditValue, this);
        this.parent["" + action]("get-virtual-data", this.getData, this);
        this.parent["" + action]("virtual-scroll-edit-cancel", this.cancelEdit, this);
        this.parent["" + action]("select-row-on-context-open", this.toSelectRowOnContextOpen, this);
        this.parent["" + action]("refresh-virtual-editform-cells", this.refreshCell, this);
        this.parent["" + action]("virtaul-cell-focus", this.cellFocus, this);
        this.parent["" + action]("virtual-scroll-edit", this.restoreEditState, this);
        this.parent["" + action]("set-virtual-page-query", this.SetVirtualPageQury, this);
      } else {
        _super.prototype.eventListener.call(this, "on");
      }
    };
    VirtualTreeContentRenderer2.prototype.cellFocus = function(e) {
      var virtualCellFocus = "virtualCellFocus";
      _super.prototype["" + virtualCellFocus].call(this, e);
    };
    VirtualTreeContentRenderer2.prototype.updateScrollbar = function() {
      var updateScrollbarOnResize = "updateScrollbarOnResize";
      _super.prototype["" + updateScrollbarOnResize].call(this);
    };
    VirtualTreeContentRenderer2.prototype.onDataReady = function(e) {
      _super.prototype.onDataReady.call(this, e);
      if (!(this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== void 0 && this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== "") || !isCountRequired(this.parent)) {
        if (!isNullOrUndefined(e.count)) {
          this.totalRecords = e.count;
          if (this.parent.isFrozenGrid() && e.count < Object.keys(this.parent.dataSource).length) {
            var width = this.parent.enableColumnVirtualization ? this.getColumnOffset(this.parent.columns.length - 1) + "px" : "100%";
            var height = this.parent.getRowHeight() * e.count - this.parent.getRowHeight() * this.parent.pageSettings.pageSize;
            getValue("virtualEle", this).setVirtualHeight(height, width);
          }
          if (!this.parent.enableColumnVirtualization && !this.parent.isFrozenGrid()) {
            getValue("virtualEle", this).setVirtualHeight(this.parent.getRowHeight() * e.count, "100%");
          }
        }
        if (!isNullOrUndefined(e.requestType) && e.requestType.toString() === "collapseAll" || this.isDataSourceChanged && (this.startIndex === -1 || this.startIndex === 0 && this["preStartIndex"] === 0)) {
          this.contents.scrollTop = 0;
          this.isDataSourceChanged = false;
        }
      }
    };
    VirtualTreeContentRenderer2.prototype.renderTable = function() {
      _super.prototype.renderTable.call(this);
      if (!(this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== void 0 && this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== "") || !isCountRequired(this.parent)) {
        getValue("observer", this).options.debounceEvent = false;
        this.observers = new TreeInterSectionObserver(getValue("observer", this).element, getValue("observer", this).options);
        this.contents = this.getPanel().firstChild;
      }
    };
    VirtualTreeContentRenderer2.prototype.getTranslateY = function(sTop, cHeight, info, isOnenter) {
      if (this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== void 0 && !this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== "" || isCountRequired(this.parent)) {
        if (this.isRemoteExpand) {
          this.isRemoteExpand = false;
          return this.preTranslate;
        }
        this.preTranslate = _super.prototype.getTranslateY.call(this, sTop, cHeight, info, isOnenter);
      }
      return _super.prototype.getTranslateY.call(this, sTop, cHeight, info, isOnenter);
    };
    VirtualTreeContentRenderer2.prototype.dataBoundEvent = function() {
      var dataBoundEve = "dataBound";
      var initialRowTop = "initialRowTop";
      if (!isNullOrUndefined(this.parent.getRows()) && this.parent.getRows().length && !isNullOrUndefined(this.parent.getRowByIndex(0)) && !this["" + initialRowTop]) {
        var rowTop = this.parent.getRowByIndex(0).getBoundingClientRect().top;
        var gridTop = this.parent.element.getBoundingClientRect().top;
        if (rowTop > 0) {
          this["" + initialRowTop] = this.parent.getRowByIndex(0).getBoundingClientRect().top - gridTop;
        } else if (this.parent.selectedRowIndex === -1) {
          this["" + initialRowTop] = this.content.getBoundingClientRect().top - this.parent.getRowByIndex(0).getBoundingClientRect().height;
        }
      }
      _super.prototype["" + dataBoundEve].call(this);
    };
    VirtualTreeContentRenderer2.prototype.rowSelectedEvent = function(args) {
      var rowSelected2 = "rowSelected";
      _super.prototype["" + rowSelected2].call(this, args);
      this.parent.notify("virtualTransform", { requestType: "transformChange" });
    };
    VirtualTreeContentRenderer2.prototype.toSelectVirtualRow = function(args) {
      if (this.parent.isEdit) {
        return;
      }
      var selectVirtualRow = "selectVirtualRow";
      var containerRect = "containerRect";
      if (isNullOrUndefined(this.observer["" + containerRect])) {
        this.observer["" + containerRect] = this.observers["" + containerRect];
      }
      var treeGridParent = this.parent.clipboardModule["treeGridParent"];
      if (isNullOrUndefined(treeGridParent.editModule) || isNullOrUndefined(treeGridParent.editModule["addRowIndex"]) || args.selectedIndex !== -1) {
        if (!isNullOrUndefined(treeGridParent.grid.sortModule) && treeGridParent.grid.sortModule["sortedColumns"].length > 0) {
          var sortedData = treeGridParent.dataModule["sortedData"];
          if (!isNullOrUndefined(sortedData) && sortedData.length > 0) {
            var targetIndex = sortedData.findIndex(function(record) {
              return record.index === args.selectedIndex;
            });
            args.selectedIndex = targetIndex;
          }
        }
        _super.prototype["" + selectVirtualRow].call(this, args);
      }
    };
    VirtualTreeContentRenderer2.prototype.refreshCell = function(rowObj) {
      rowObj.cells = this.generateCells();
    };
    VirtualTreeContentRenderer2.prototype.generateCells = function() {
      var cells = [];
      for (var i = 0; i < this.parent.columns.length; i++) {
        cells.push(this.generateCell(this.parent.columns[parseInt(i.toString(), 10)]));
      }
      return cells;
    };
    VirtualTreeContentRenderer2.prototype.getVirtualRowIndex = function(index) {
      if (isNullOrUndefined(this.prevInfo)) {
        return index;
      } else {
        var startIdx = this.parent.getRowsObject()[0].index;
        return startIdx + index;
      }
    };
    VirtualTreeContentRenderer2.prototype.generateCell = function(col, rowId, cellType, colSpan, oIndex, foreignKeyData) {
      var opt = {
        "visible": col.visible,
        "isDataCell": !isNullOrUndefined(col.field || col.template),
        "isTemplate": !isNullOrUndefined(col.template),
        "rowID": rowId,
        "column": col,
        "cellType": !isNullOrUndefined(cellType) ? cellType : CellType.Data,
        "colSpan": colSpan,
        "commands": col.commands,
        "isForeignKey": col.isForeignColumn && col.isForeignColumn(),
        "foreignKeyData": col.isForeignColumn && col.isForeignColumn() && getValue(col.field, foreignKeyData)
      };
      if (opt.isDataCell || opt.column.type === "checkbox" || opt.commands) {
        opt.index = oIndex;
      }
      return new Cell(opt);
    };
    VirtualTreeContentRenderer2.prototype.beginEdit = function(e) {
      this["editedRowIndex"] = e.index;
      var selector = '.e-row[aria-rowindex="' + (e.index + 1) + '"]';
      var index = this.parent.getContent().querySelector(selector).rowIndex;
      var rowData = this.parent.getCurrentViewRecords()[parseInt(index.toString(), 10)];
      e.data = rowData;
    };
    VirtualTreeContentRenderer2.prototype.beginAdd = function(args) {
      var addAction2 = "addActionBegin";
      var isAdd = "isAdd";
      var addArgs = { newRowPosition: this.rowPosition, addRowIndex: this.addRowIndex, dataRowIndex: this.dataRowIndex };
      this.parent.notify("get-row-position", addArgs);
      this.rowPosition = addArgs.newRowPosition;
      this.addRowIndex = addArgs.addRowIndex;
      this.dataRowIndex = addArgs.dataRowIndex;
      var rows = this.parent.getRows();
      var firstAriaIndex = rows.length ? +rows[0].getAttribute("aria-rowindex") - 1 : 0;
      var lastAriaIndex = rows.length ? +rows[rows.length - 1].getAttribute("aria-rowindex") - 1 : 0;
      var withInRange = this.parent.selectedRowIndex >= firstAriaIndex && this.parent.selectedRowIndex <= lastAriaIndex;
      if (!(this.rowPosition === "Top" || this.rowPosition === "Bottom")) {
        this["" + isAdd] = true;
      }
      if (this.rowPosition === "Top" || this.rowPosition === "Bottom" || (!this.addRowIndex || this.addRowIndex === -1) && (this.parent.selectedRowIndex === -1 || !withInRange)) {
        _super.prototype["" + addAction2].call(this, args);
      }
    };
    VirtualTreeContentRenderer2.prototype.restoreEditState = function() {
      var restoreEdit = "restoreEdit";
      _super.prototype["" + restoreEdit].call(this);
    };
    VirtualTreeContentRenderer2.prototype.SetVirtualPageQury = function(args) {
      var visiblePage = [];
      if (this.prevInfo && this.prevInfo.blockIndexes) {
        visiblePage = getVisiblePage(this.prevInfo.blockIndexes);
      }
      if (this.requestType === "refresh" && visiblePage.length) {
        args.query.skip(this.parent.pageSettings.pageSize * (visiblePage[0] - 1));
        args.query.take(this.parent.pageSettings.pageSize * visiblePage.length);
        args.skipPage = true;
        return;
      }
    };
    VirtualTreeContentRenderer2.prototype.resetIseditValue = function() {
      var resetIsEdit = "resetIsedit";
      var isAdd = "isAdd";
      this.parent.notify("reset-edit-props", {});
      if ((this.rowPosition === "Top" || this.rowPosition === "Bottom") && this["" + isAdd]) {
        _super.prototype["" + resetIsEdit].call(this);
      }
    };
    VirtualTreeContentRenderer2.prototype.virtualEditSuccess = function() {
      var isAdd = "isAdd";
      var content2 = this.parent.getContent().querySelector(".e-content");
      if (this["" + isAdd] && content2.querySelector(".e-addedrow")) {
        this.recordAdded = true;
      }
    };
    VirtualTreeContentRenderer2.prototype.cancelEdit = function(args) {
      var editCancel = "editCancel";
      _super.prototype["" + editCancel].call(this, args);
    };
    VirtualTreeContentRenderer2.prototype.toSelectRowOnContextOpen = function(args) {
      var selectRowOnContextOpen = "selectRowOnContextOpen";
      _super.prototype["" + selectRowOnContextOpen].call(this, args);
    };
    VirtualTreeContentRenderer2.prototype.restoreNewRow = function() {
      var isAdd = "isAdd";
      var content2 = this.parent.getContent().querySelector(".e-content");
      if (this["" + isAdd] && !content2.querySelector(".e-addedrow")) {
        this.parent.isEdit = false;
        this.parent.editModule.addRecord(null, this.parent.root.editModule.selectedIndex);
      }
    };
    VirtualTreeContentRenderer2.prototype.getData = function(data) {
      var getVirtualData = "getVirtualData";
      _super.prototype["" + getVirtualData].call(this, data);
    };
    VirtualTreeContentRenderer2.prototype.handleActionBegin = function(args) {
      var actionBegin2 = "actionBegin";
      _super.prototype["" + actionBegin2].call(this, args);
    };
    VirtualTreeContentRenderer2.prototype.onActionComplete = function(args) {
      if (args.requestType === "add") {
        var addArgs = { newRowPosition: this.rowPosition, addRowIndex: this.addRowIndex, dataRowIndex: this.dataRowIndex };
        this.parent.notify("get-row-position", addArgs);
        this.rowPosition = addArgs.newRowPosition;
        this.addRowIndex = addArgs.addRowIndex;
        this.dataRowIndex = this.parent.root.editModule.selectedIndex;
      }
      var actionComplete2 = "actionComplete";
      _super.prototype["" + actionComplete2].call(this, args);
    };
    VirtualTreeContentRenderer2.prototype.onEnteredAction = function() {
      var _this = this;
      return function(element, current, direction, e, isWheel, check) {
        var directVirtualRender = "directVirtualRender";
        if (!_this.parent["" + directVirtualRender]) {
          var preventEvent = "preventEvent";
          if (Browser.isIE && !isWheel && check && !_this["" + preventEvent] && !_this.parent.enableVirtualMaskRow) {
            _this.parent.showSpinner();
          }
          if (_this.parent.enableVirtualMaskRow && !_this["" + preventEvent]) {
            setTimeout(function() {
              _this.parent.showMaskRow(current.axis);
              _this.parent.notify("showGanttShimmer", { requestType: "showShimmer" });
            }, 0);
          }
          var height = _this.content.getBoundingClientRect().height;
          var top_1 = _this.prevInfo.offsets ? _this.prevInfo.offsets.top : null;
          var xAxis = current.axis === "X";
          var x = _this.getColumnOffset(xAxis ? _this.vgenerator.getColumnIndexes()[0] - 1 : _this.prevInfo.columnIndexes[0] - 1);
          if (_this.parent.isFrozenGrid() && _this.parent.enableColumnVirtualization && _this.currentInfo && _this.currentInfo.columnIndexes) {
            var cBlock = _this.currentInfo.columnIndexes[0] - 1;
            var frzLeftWidth_1 = 0;
            _this.parent.getColumns().filter(function(col) {
              if (col.visible && col.freeze === "Left") {
                frzLeftWidth_1 += parseInt(col.width.toString(), 10);
              }
            });
            if (cBlock > _this.parent.getVisibleFrozenLeftCount()) {
              x = x - frzLeftWidth_1;
            }
          }
          if (xAxis) {
            var idx = Object.keys(_this.vgenerator.cOffsets).length - _this.prevInfo.columnIndexes.length;
            var maxLeft = _this.vgenerator.cOffsets[idx - 1];
            x = x > maxLeft ? maxLeft : x;
          }
          var isRowScrollAction = _this.prevInfo && _this.prevInfo.page === 1 && (direction !== _this.prevInfo.direction || direction !== _this.prevInfo.direction);
          var translateY = _this.getTranslateY(e.top, height, xAxis && top_1 === e.top ? _this.prevInfo : void 0, isRowScrollAction ? false : true);
          if (!_this.parent.isFrozenGrid() || _this.parent.enableVirtualMaskRow) {
            if (_this.parent.enableVirtualMaskRow) {
              var upScroll = e.top - _this.translateY < 0;
              translateY = Math.round(_this.translateY) > translateY && !upScroll ? Math.round(_this.translateY) : translateY;
              _this.virtualEle.adjustTable(x, translateY);
            } else {
              _this.virtualEle.adjustTable(x, _this.translateY);
            }
            var wrapperBottom = _this.virtualEle.wrapper.getBoundingClientRect().bottom;
            var contentBottom = _this.virtualEle.content.getBoundingClientRect().bottom;
            if (direction === "up" && _this.prevInfo.page === Math.ceil(_this.getTotalBlocks() / 2) && Math.round(wrapperBottom) < Math.round(contentBottom)) {
              var bottomGap = Math.round(contentBottom) - Math.round(wrapperBottom);
              var adjustedTranslateY = Math.min(translateY + bottomGap, _this.offsets[_this["maxBlock"]]);
              if (adjustedTranslateY !== translateY) {
                _this.virtualEle.adjustTable(x, adjustedTranslateY);
              }
            }
            if (_this.parent.enableColumnVirtualization) {
              _this.header.virtualEle.adjustTable(x, 0);
              if (_this.parent.isFrozenGrid()) {
                _this.parent.contentModule["resetStickyLeftPos"](x);
              }
            }
          }
        }
      };
    };
    VirtualTreeContentRenderer2.prototype.scrollListeners = function(scrollArgs) {
      this["scrollAfterEdit"]();
      this.shouldPreventScrolling(scrollArgs);
      if (this.parent.root.enablePersistence) {
        this.parent.root.scrollPosition = scrollArgs.offset;
      }
      var info = scrollArgs.sentinel;
      var treeGridParent = null;
      if (this.parent.clipboardModule && this.parent.clipboardModule["treeGridParent"]) {
        treeGridParent = this.parent.clipboardModule["treeGridParent"];
      }
      var rowHeight = parseInt(this.parent.getRowHeight().toString(), 10);
      var outBuffer = this.parent.pageSettings.pageSize - Math.ceil(this.parent.pageSettings.pageSize / 2);
      var content2;
      if (!isNullOrUndefined(this.parent.contentModule)) {
        content2 = this.parent.getContent().querySelector(".e-content");
      }
      var scrollHeight = outBuffer * rowHeight;
      var upScroll = scrollArgs.offset.top - this.translateY < 0 && this.activeKey !== "downArrow";
      var downScroll = Math.ceil(scrollArgs.offset.top - this.translateY) + rowHeight >= scrollHeight;
      var selectedRowIndex = "selectedRowIndex";
      var currentViewData = this.parent.currentViewData;
      var indexValue = "index";
      if (upScroll && (scrollArgs.direction !== "right" && scrollArgs.direction !== "left") && !isNullOrUndefined(content2)) {
        var vHeight = +(this.parent.height.toString().indexOf("%") < 0 ? parseInt(this.parent.height.toString(), 10) : this.parent.element.getBoundingClientRect().height);
        var scrolledRows = Math.floor(content2.scrollTop / rowHeight);
        var visibleRows = Math.ceil(vHeight / rowHeight);
        var index = scrolledRows + visibleRows - this.parent.pageSettings.pageSize;
        index = index > 0 ? index : 0;
        if (!isNullOrUndefined(this["" + selectedRowIndex]) && this["" + selectedRowIndex] !== -1 && index !== this["" + selectedRowIndex] && (this.parent.rowHeight && this.parent.rowHeight * this.parent.pageSettings.pageSize < content2.scrollTop) && !this.parent.allowRowDragAndDrop) {
          index = this["" + selectedRowIndex];
        }
        this.startIndex = index;
        this.endIndex = index + this.parent.pageSettings.pageSize;
        if (this.endIndex > this.totalRecords) {
          var lastInx = this.totalRecords;
          var remains = this.endIndex % lastInx;
          this.endIndex = lastInx;
          this.startIndex = this.startIndex - remains < 0 ? 0 : this.startIndex - remains;
        }
        if (currentViewData.length && currentViewData[0]["" + indexValue] >= this.parent.pageSettings.pageSize / 2 && currentViewData[0]["" + indexValue] - this.startIndex < this.parent.pageSettings.pageSize / 2 && this.parent.selectionModule && this.parent.selectionModule.isRowSelected) {
          this.startIndex = currentViewData[0]["" + indexValue] - this.parent.pageSettings.pageSize / 2;
          this.endIndex = this.startIndex + this.parent.pageSettings.pageSize;
        }
        var rowPt = Math.ceil(scrollArgs.offset.top / rowHeight);
        rowPt = rowPt % this.parent.pageSettings.pageSize;
        var firsttdinx = 0;
        if (!isNullOrUndefined(this.parent.getRows()[parseInt(rowPt.toString(), 10)]) && !isNullOrUndefined(this.parent.getContent().querySelectorAll(".e-content tr")[parseInt(rowPt.toString(), 10)])) {
          var attr = this.parent.getContent().querySelectorAll(".e-content tr")[parseInt(rowPt.toString(), 10)].querySelector("td").getAttribute("index");
          firsttdinx = +attr;
        }
        if (firsttdinx === 0) {
          if (this.endIndex - this.startIndex < this.parent.pageSettings.pageSize) {
            this.translateY = !isNullOrUndefined(this.endIndex) ? (this.endIndex - this.parent.pageSettings.pageSize) * (this.parent.rowHeight ? this.parent.rowHeight : this.parent.getRowHeight()) : 0;
          } else if (this.startIndex === this["" + selectedRowIndex]) {
            this.translateY = scrollArgs.offset.top;
          } else {
            this.translateY = scrollArgs.offset.top - outBuffer * rowHeight > 0 ? scrollArgs.offset.top - outBuffer * rowHeight + rowHeight : 0;
          }
        } else if (this.parent.getFrozenColumns() > 0) {
          scrollArgs.offset.top = scrollArgs.offset.top + 80;
          this.translateY = scrollArgs.offset.top - outBuffer * rowHeight > 0 ? scrollArgs.offset.top - outBuffer * rowHeight + 10 : 0;
        } else {
          this.translateY = scrollArgs.offset.top - outBuffer * rowHeight > 0 ? scrollArgs.offset.top - outBuffer * rowHeight + 10 : 0;
        }
      } else if (downScroll && (scrollArgs.direction !== "right" && scrollArgs.direction !== "left") && !isNullOrUndefined(content2)) {
        var nextSetResIndex = ~~(content2.scrollTop / rowHeight);
        var isLastBlock = this["" + selectedRowIndex] + this.parent.pageSettings.pageSize < this.totalRecords ? false : true;
        if (treeGridParent !== null && treeGridParent.isGantt && !isNullOrUndefined(this["" + selectedRowIndex]) && this["" + selectedRowIndex] !== -1 && nextSetResIndex !== this["" + selectedRowIndex] && !isLastBlock && !this.parent.allowRowDragAndDrop) {
          nextSetResIndex = this["" + selectedRowIndex];
        }
        var lastIndex = nextSetResIndex + this.parent.pageSettings.pageSize;
        if (lastIndex > this.totalRecords) {
          lastIndex = nextSetResIndex + (this.totalRecords - nextSetResIndex);
        }
        this.startIndex = !isLastBlock || isNullOrUndefined(this["" + selectedRowIndex]) ? lastIndex - this.parent.pageSettings.pageSize : nextSetResIndex;
        this.endIndex = lastIndex;
        if (nextSetResIndex + this.parent.pageSettings.pageSize > this.totalRecords && this.endIndex - this.startIndex < this.parent.pageSettings.pageSize / 2 && this.endIndex - nextSetResIndex < this.parent.pageSettings.pageSize / 2) {
          this.startIndex = lastIndex - this.parent.pageSettings.pageSize / 2;
        }
        if (this.totalRecords < this.parent.pageSettings.pageSize) {
          this.startIndex = 0;
        }
        if (scrollArgs.offset.top > rowHeight * this.totalRecords) {
          this.translateY = this.getTranslateY(scrollArgs.offset.top, content2.getBoundingClientRect().height);
        } else {
          if (this.totalRecords === this.endIndex) {
            if (this.totalRecords === this.endIndex) {
              if (this.parent.isEdit) {
                this.translateY = this.totalRecords * rowHeight - this.parent.pageSettings.pageSize * rowHeight + rowHeight;
              } else {
                this.translateY = this.totalRecords * rowHeight - this.parent.pageSettings.pageSize * rowHeight;
              }
            }
          } else {
            if (this.parent.getFrozenColumns() > 0) {
              this.translateY = scrollArgs.offset.top - (rowHeight * 2 + this.parent.pageSettings.pageSize);
            } else {
              this.translateY = scrollArgs.offset.top;
            }
          }
        }
      }
      if (downScroll && scrollArgs.direction !== "up" && scrollArgs.offset.top < rowHeight * this.totalRecords || upScroll || (scrollArgs.direction === "right" || scrollArgs.direction === "left") || this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== void 0 && !this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== "") {
        var viewInfo = this.currentInfo = getValue("getInfoFromView", this).apply(this, [scrollArgs.direction, info, scrollArgs.offset]);
        this.previousInfo = viewInfo;
        if (this.prevInfo && (isRemoteData(this.parent.root) && viewInfo.event !== "model-changed") && (info.axis === "Y" && this.prevInfo.blockIndexes.toString() === viewInfo.blockIndexes.toString() || (info.axis === "X" && this.prevInfo.columnIndexes.toString() === viewInfo.columnIndexes.toString() || this.parent.isFrozenGrid() && this.parent.getVisibleFrozenLeftCount() >= viewInfo.columnIndexes[0] && this.prevInfo.columnIndexes.toString().includes(viewInfo.columnIndexes.toString())))) {
          this.parent.removeMaskRow();
          this.parent.notify("removeGanttShimmer", { requestType: "hideShimmer" });
          if (Browser.isIE) {
            this.parent.hideSpinner();
          }
          this.requestType = this.requestType === "virtualscroll" ? this["empty"] : this.requestType;
          if (info.axis === "Y") {
            this.restoreEditState();
          }
          return;
        }
        this.parent.setColumnIndexesInView(this.parent.enableColumnVirtualization ? viewInfo.columnIndexes : []);
        var page = viewInfo.loadNext && !viewInfo.loadSelf ? viewInfo.nextInfo.page : viewInfo.page;
        this.parent.setProperties({ pageSettings: { currentPage: page } }, true);
        this.requestType = "virtualscroll";
        if (scrollArgs.direction !== "right" && scrollArgs.direction !== "left" && !isRemoteData(this.parent.root)) {
          viewInfo.event = viewInfo.event === "refresh-virtual-block" ? "model-changed" : viewInfo.event;
        }
        if (this.parent.enableVirtualMaskRow) {
          this.parent.showMaskRow(info.axis);
          this.parent.addShimmerEffect();
          this.parent.notify("showGanttShimmer", { requestType: "showShimmer" });
        }
        this.parent.notify(viewInfo.event, { requestType: "virtualscroll", virtualInfo: viewInfo, focusElement: scrollArgs.focusElement });
      } else {
        if (this.parent.enableVirtualMaskRow) {
          this.parent.removeMaskRow();
          this.parent.notify("removeGanttShimmer", { requestType: "hideShimmer" });
        }
      }
    };
    VirtualTreeContentRenderer2.prototype.shouldPreventScrolling = function(scrollArgs) {
      var addedRow = this.parent.element.querySelector(".e-addedrow");
      if (addedRow && this.rowPosition !== "Top" && this.rowPosition !== "Bottom" && scrollArgs.offset.top !== 0) {
        this.parent.closeEdit();
        return;
      }
    };
    VirtualTreeContentRenderer2.prototype.appendContent = function(target, newChild, e) {
      var treeGridParent = null;
      if (this.parent.clipboardModule && this.parent.clipboardModule["treeGridParent"]) {
        treeGridParent = this.parent.clipboardModule["treeGridParent"];
      }
      var totalBlocks = this.getTotalBlocks();
      var lastPage = Math.ceil(totalBlocks / 2);
      var isBottom = this.parent.pageSettings.currentPage === lastPage && (treeGridParent && treeGridParent.flatData && treeGridParent.flatData.length === e.index + 1);
      if (this.parent.dataSource instanceof DataManager && this.parent.dataSource.dataSource.url !== void 0 && !this.parent.dataSource.dataSource.offline && this.parent.dataSource.dataSource.url !== "" || isCountRequired(this.parent) || this.parent.isFrozenGrid() && (e.requestType === void 0 || !isNullOrUndefined(e.virtualInfo) && (e.virtualInfo.direction === "right" || e.virtualInfo.direction === "left"))) {
        if (getValue("isExpandCollapse", e)) {
          this.isRemoteExpand = true;
        }
        _super.prototype.appendContent.call(this, target, newChild, e);
        if (getValue("requestTypes", this).indexOf("isFrozen") !== -1) {
          getValue("requestTypes", this).splice(getValue("requestTypes", this).indexOf("isFrozen"), 1);
          this.requestType = this.requestType === "isFrozen" ? void 0 : this.requestType;
        }
      } else {
        var info = e.virtualInfo.sentinelInfo && e.virtualInfo.sentinelInfo.axis === "Y" && getValue("currentInfo", this).page && getValue("currentInfo", this).page !== e.virtualInfo.page ? getValue("currentInfo", this) : e.virtualInfo;
        var cBlock = info.columnIndexes[0] - 1;
        var cOffset = this.getColumnOffset(cBlock);
        var width = void 0;
        if (this.parent.enableColumnVirtualization) {
          this.header.virtualEle.adjustTable(cOffset, 0);
          var cIndex = info.columnIndexes;
          width = this.getColumnOffset(cIndex[cIndex.length - 1]) - this.getColumnOffset(cIndex[0] - 1) + "";
          this.header.virtualEle.setWrapperWidth(width);
        }
        this.virtualEle.setWrapperWidth(width, Browser.isIE || Browser.info.name === "edge");
        target = this.parent.createElement("tbody");
        target.appendChild(newChild);
        var replace = "replaceWith";
        this.getTable().querySelector("tbody")["" + replace](target);
        if (e.requestType === "virtualscroll" && e.virtualInfo.sentinelInfo.axis === "Y") {
          this.isExpandCollapse = false;
        }
        var reduceWidth_1 = 0;
        if (this.parent.enableColumnVirtualization && this.parent.isFrozenGrid()) {
          var frzLeftWidth_2 = 0;
          this.parent.getColumns().filter(function(col) {
            if (col.visible) {
              reduceWidth_1 += parseInt(col.width.toString(), 10);
              if (col.freeze === "Left") {
                frzLeftWidth_2 += parseInt(col.width.toString(), 10);
              }
            }
          });
          var cIndex = info.columnIndexes;
          width = this.getColumnOffset(cIndex[cIndex.length - 1]) - this.getColumnOffset(cIndex[0] - 1) + "";
          if (cBlock > this.parent.getVisibleFrozenLeftCount()) {
            cOffset = cOffset - frzLeftWidth_2;
          }
          this.resetStickyLeftPos(cOffset, newChild);
        }
        if (!this.isExpandCollapse || this.translateY === 0) {
          this.translateY = this.translateY < 0 ? 0 : this.translateY;
          getValue("virtualEle", this).adjustTable(cOffset, this.translateY);
          if (this.parent.enableColumnVirtualization) {
            this.header.virtualEle.adjustTable(cOffset, 0);
            if (this.parent.isFrozenGrid()) {
              this.resetStickyLeftPos(cOffset);
            }
          }
        } else {
          this.isExpandCollapse = false;
        }
        setValue("prevInfo", this.previousInfo ? this.previousInfo : info, this);
        if (e.requestType === "virtualscroll" && e.virtualInfo.sentinelInfo.axis === "X") {
          this.parent.notify(autoCol, {});
        }
        var focusCell = "focusCell";
        var restoreAdd = "restoreAdd";
        var ensureSelectedRowPosition = "ensureSelectedRowPosition";
        _super.prototype["" + focusCell].call(this, e);
        var isAdd = "isAdd";
        if (this["" + isAdd] && !this.parent.getContent().querySelector(".e-content").querySelector(".e-addedrow")) {
          if (!(this.rowPosition === "Top" || this.rowPosition === "Bottom")) {
            if (this.dataRowIndex >= this.startIndex) {
              this.restoreNewRow();
            } else if (this.addRowIndex && this.addRowIndex > -1) {
              this["" + isAdd] = false;
              this.parent.isEdit = false;
            }
          }
        }
        if (treeGridParent !== null && !treeGridParent.isGantt && e.action === "add" && isBottom) {
          var rowHeight = this.parent.getRowHeight();
          var pageSize = this.parent.pageSettings.pageSize;
          var newTranslateY = this.totalRecords * rowHeight - pageSize * rowHeight;
          this.translateY = newTranslateY > 0 ? newTranslateY : this.translateY;
          this.virtualEle.adjustTable(cOffset, this.translateY);
          this.content.scrollTop = this.translateY;
        }
        this.restoreEditState();
        _super.prototype["" + restoreAdd].call(this);
        _super.prototype["" + ensureSelectedRowPosition].call(this);
      }
    };
    VirtualTreeContentRenderer2.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off("data-ready", this.onDataReady);
      this.parent.off("content-ready", this.fn);
      this.parent.off("select-virtual-Row", this.toSelectVirtualRow);
      this.parent.off("dataBound", this.dataBoundEvent);
      this.parent.off("rowSelected", this.rowSelectedEvent);
      this.parent.off(virtualActionArgs, this.virtualOtherAction);
      this.parent.off(indexModifier, this.indexModifier);
      this.parent.off("virtual-scroll-edit-action-begin", this.beginEdit);
      this.parent.off("virtual-scroll-add-action-begin", this.beginAdd);
      this.parent.off("virtual-scroll-edit-success", this.virtualEditSuccess);
      this.parent.off("edit-reset", this.resetIseditValue);
      this.parent.off("get-virtual-data", this.getData);
      this.parent.off("virtual-scroll-edit-cancel", this.cancelEdit);
      this.parent.off("select-row-on-context-open", this.toSelectRowOnContextOpen);
      this.parent.off("refresh-virtual-editform-cells", this.refreshCell);
      this.parent.off("virtaul-cell-focus", this.cellFocus);
      this.parent.off("virtual-scroll-edit", this.restoreEditState);
      this.parent.off(destroy, this.destroy);
      if (this.parent.root.enableSeamlessScrolling) {
        window.removeEventListener("resize", this.updateScrollbar);
      }
    };
    VirtualTreeContentRenderer2.prototype.destroy = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.removeEventListener();
    };
    return VirtualTreeContentRenderer2;
  })(VirtualContentRenderer)
);
var TreeInterSectionObserver = (
  /** @class */
  (function(_super) {
    __extends18(TreeInterSectionObserver2, _super);
    function TreeInterSectionObserver2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.isWheeling = false;
      _this.newPos = 0;
      _this.lastPos = 0;
      _this.timer = 0;
      return _this;
    }
    TreeInterSectionObserver2.prototype.onWheelEvent = function() {
      this.isWheeling = true;
    };
    TreeInterSectionObserver2.prototype.observes = function(callback, onEnterCallback, instance) {
      var containerRect = "containerRect";
      _super.prototype["" + containerRect] = getValue("options", this).container.getBoundingClientRect();
      var options = getValue("options", this);
      EventHandler.add(options.container, "wheel", this.onWheelEvent, this);
      if (!isNullOrUndefined(options.horizontalScrollbar)) {
        EventHandler.add(options.horizontalScrollbar, "wheel", this.onWheelEvent, this);
        EventHandler.add(options.horizontalScrollbar, "scroll", this.onVirtualContentScrolling(), this);
      }
      if (!isNullOrUndefined(options.verticalScrollbar)) {
        EventHandler.add(options.verticalScrollbar, "wheel", this.onWheelEvent, this);
        EventHandler.add(options.verticalScrollbar, "scroll", this.onVirtualContentScrolling(), this);
      }
      EventHandler.add(options.container, "scroll", this.virtualScrollHandlers(callback, onEnterCallback, instance), this);
    };
    TreeInterSectionObserver2.prototype.onVirtualContentScrolling = function() {
      var _this = this;
      return function(e) {
        if (e.target.classList.contains("e-virtual-vertical-scrollbar")) {
          getValue("options", _this).container.scrollTop = e.target.scrollTop;
        }
        if (e.target.classList.contains("e-virtual-horizontal-scrollbar")) {
          getValue("options", _this).container.scrollLeft = e.target.scrollLeft;
        }
      };
    };
    TreeInterSectionObserver2.prototype.clear = function() {
      this.lastPos = null;
    };
    TreeInterSectionObserver2.prototype.virtualScrollHandlers = function(callback, onEnterCallback, instance) {
      var _this = this;
      var delay = Browser.info.name === "chrome" ? 200 : 100;
      var options = "options";
      var movableEle = "movableEle";
      var element = "element";
      var fromWheel = "fromWheel";
      var debounced100 = debounce(callback, delay);
      var debounced50 = debounce(callback, 50);
      this["" + options].prevTop = this["" + options].prevLeft = 0;
      var isScrollByFocus = "isScrollByFocus";
      return function(e) {
        var keyPress = "keyPress";
        var keyaction;
        if (instance && instance.root && instance.root.editModule && instance.root.editModule["" + keyPress]) {
          keyaction = instance.root.editModule["" + keyPress];
        }
        if (instance.isEdit && instance.root.editModule["" + isScrollByFocus] || instance.isEdit && (keyaction === "tab" || keyaction === "shiftTab")) {
          instance.root.editModule["" + isScrollByFocus] = false;
          return;
        }
        var top = _this["" + options].movableContainer ? _this["" + options].container.scrollTop : e.target.scrollTop;
        var left = _this["" + options].movableContainer ? _this["" + options].scrollbar.scrollLeft : e.target.scrollLeft;
        var direction = _this["" + options].prevTop < top ? "down" : "up";
        direction = _this["" + options].prevLeft === left ? direction : _this["" + options].prevLeft < left ? "right" : "left";
        _this["" + options].prevTop = top;
        _this["" + options].prevLeft = left;
        if (!isNullOrUndefined(_this["" + options].verticalScrollbar)) {
          _this["" + options].verticalScrollbar.scrollTop = _this["" + options].container.scrollTop;
        }
        if (!isNullOrUndefined(_this["" + options].horizontalScrollbar)) {
          _this["" + options].horizontalScrollbar.scrollLeft = _this["" + options].container.scrollLeft;
        }
        var current = _this.sentinelInfo["" + direction];
        var delta = 0;
        _this.newPos = top;
        if (_this.lastPos != null) {
          delta = _this.newPos - _this.lastPos;
        }
        _this.lastPos = _this.newPos;
        if (_this.timer) {
          clearTimeout(_this.timer);
        }
        _this.timer = setTimeout(_this.clear, 0);
        if ((delta > 100 || delta < -100) && (e && e.preventDefault)) {
          e.returnValue = false;
          e.preventDefault();
        }
        if (_this["" + options].axes.indexOf(current.axis) === -1) {
          return;
        }
        var containerRect = "containerRect";
        _this["" + containerRect] = _this["" + options].container.getBoundingClientRect();
        var check = _this.check(direction);
        if (current.entered && (current.axis === "X" || instance.enableVirtualMaskRow)) {
          if (_this["" + movableEle] && (direction === "right" || direction === "left")) {
            onEnterCallback(_this["" + movableEle], current, direction, { top, left }, _this["" + fromWheel], check);
          } else {
            onEnterCallback(_this["" + element], current, direction, { top, left }, _this["" + fromWheel], check);
          }
        }
        if (check) {
          var fn = debounced50;
          if (current.axis === "X") {
            fn({
              direction,
              sentinel: current,
              offset: { top, left },
              focusElement: document.activeElement
            });
          } else {
            if (instance.dataSource instanceof DataManager && instance.dataSource.dataSource.url !== void 0 && !instance.dataSource.dataSource.offline && instance.dataSource.dataSource.url !== "" || isCountRequired(instance) || instance.enableVirtualMaskRow) {
              fn = instance.enableVirtualMaskRow ? debounced100 : fn;
              fn({
                direction,
                sentinel: current,
                offset: { top, left },
                focusElement: document.activeElement
              });
            } else {
              callback({
                direction,
                sentinel: current,
                offset: { top, left },
                focusElement: document.activeElement
              });
            }
          }
        }
        _this["" + fromWheel] = false;
      };
    };
    return TreeInterSectionObserver2;
  })(InterSectionObserver)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/virtual-scroll.js
var __extends19 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var VirtualScroll2 = (
  /** @class */
  (function() {
    function VirtualScroll3(parent) {
      this.prevstartIndex = -1;
      this.setEndIndexToGantt = true;
      this.prevendIndex = -1;
      this.prevSelectedRecord = [];
      this.parent = parent;
      Grid.Inject(TreeVirtual);
      this.addEventListener();
    }
    VirtualScroll3.prototype.getModuleName = function() {
      return "virtualScroll";
    };
    VirtualScroll3.prototype.addEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.on(localPagedExpandCollapse, this.collapseExpandVirtualchilds, this);
      this.parent.on(pagingActions, this.virtualPageAction, this);
      this.parent.on(destroy, this.destroy, this);
    };
    VirtualScroll3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off(localPagedExpandCollapse, this.collapseExpandVirtualchilds);
      this.parent.off(pagingActions, this.virtualPageAction);
      this.parent.off(destroy, this.destroy);
    };
    VirtualScroll3.prototype.collapseExpandVirtualchilds = function(row) {
      this.parent.grid.notify(virtualActionArgs, { isExpandCollapse: true });
      this.expandCollapseRec = row.record;
      row.record.expanded = row.action === "collapse" ? false : true;
      this.parent.flatData.map(function(e) {
        return e.expanded = e.uniqueID === row.record.uniqueID && e.expanded !== row.record.expanded ? row.record.expanded : e.expanded;
      });
      var actionDetails = {
        result: this.parent.flatData,
        row: row.row,
        action: row.action,
        record: row.record,
        count: this.parent.flatData.length
      };
      this.handleSelection();
      this.parent["isVirtualExpandCollapse"] = true;
      var requestType = getValue("isCollapseAll", this.parent) ? "collapseAll" : "refresh";
      getValue("grid.renderModule", this.parent).dataManagerSuccess(actionDetails, { requestType });
    };
    VirtualScroll3.prototype.handleSelection = function() {
      if (this.parent.selectionSettings.mode === "Cell" || this.parent.selectionSettings.mode === "Row" && !this.parent.selectionSettings.persistSelection) {
        this.parent.grid.clearSelection();
      }
      if (getValue("isCollapseAll", this.parent) && this.parent.selectionSettings.persistSelection && this.parent.getSelectedRecords().length > 0) {
        this.prevSelectedRecord = this.parent.getSelectedRecords();
        this.parent.grid.clearSelection();
      }
    };
    VirtualScroll3.prototype.virtualPageAction = function(pageingDetails) {
      var _this = this;
      var dm = new DataManager(pageingDetails.result);
      var expanded2 = new Predicate("expanded", "notequal", null).or("expanded", "notequal", void 0);
      var parents = dm.executeLocal(new Query().where(expanded2));
      var isFiltering = pageingDetails.actionArgs.requestType === "filtering" && (pageingDetails.actionArgs.action !== "clear-filter" && pageingDetails.actionArgs.action !== "clearFilter") || !isNullOrUndefined(this.parent["filterModule"]) && (this.parent["filterModule"].filteredResult && this.parent["filterModule"].filteredResult.length > 0);
      var isFlatHierarchy = this.parent.filterSettings.hierarchyMode === "Child" || this.parent.filterSettings.hierarchyMode === "None";
      var visualData = isFiltering && isFlatHierarchy ? parents.filter(function(e) {
        if (isNullOrUndefined(e.parentItem)) {
          return true;
        }
        var hasParentInFilteredList = parents.some(function(p) {
          return p.uniqueID === e.parentItem.uniqueID;
        });
        return hasParentInFilteredList ? getExpandStatus(_this.parent, e, parents) : true;
      }) : parents.filter(function(e) {
        return getExpandStatus(_this.parent, e, parents);
      });
      this.visualData = visualData;
      pageingDetails.count = visualData.length;
      this.parent.grid.notify(dataListener, { data: visualData });
      var counts = { startIndex: -1, endIndex: -1, count: pageingDetails.count, requestType: pageingDetails.actionArgs.requestType };
      this.parent.grid.notify(indexModifier, counts);
      var startIndex = counts.startIndex;
      var endIndex = counts.endIndex;
      pageingDetails.count = visualData.length;
      if (startIndex === -1 && endIndex === -1) {
        var query = new Query();
        var size = this.parent.grid.pageSettings.pageSize;
        var current = this.parent.grid.pageSettings.currentPage;
        var skip = size * (current - 1);
        query = query.skip(skip).take(size);
        dm.dataSource.json = visualData;
        pageingDetails.result = dm.executeLocal(query);
      } else {
        var requestType = pageingDetails.actionArgs.requestType;
        if (requestType === "filtering" || requestType === "collapseAll" || requestType === "searching" || requestType === "refresh" && getValue("isExpandAll", this.parent) || requestType === "refresh" && this.parent.enableCollapseAll && endIndex > visualData.length && isNullOrUndefined(this.expandCollapseRec)) {
          startIndex = 0;
          endIndex = this.parent.grid.pageSettings.pageSize;
          this.parent.grid.getContent().firstElementChild.scrollTop = 0;
          this.parent.grid.notify(virtualActionArgs, { setTop: true });
        }
        if (requestType === "save" && pageingDetails.actionArgs.index >= counts.count - this.parent.grid.pageSettings.pageSize || requestType === "refresh" && this.parent["isGantt"] && this.parent["isAddedFromGantt"]) {
          if (this.setEndIndexToGantt) {
            this.ganttEndIndex = counts.endIndex;
          }
          if (counts.endIndex + this.parent.pageSettings.pageSize >= counts.count && (this.parent.root && counts.count !== this.ganttEndIndex) && this.parent["isAddedFromGantt"] || !(this.parent["isGantt"] && this.parent["isAddedFromGantt"])) {
            startIndex = counts.startIndex + (counts.count - counts.endIndex);
            endIndex = counts.count;
            this.setEndIndexToGantt = false;
          }
          this.ganttEndIndex = endIndex;
          this.parent["isAddedFromGantt"] = false;
        }
        var virtualWrapperElement = this.parent.grid.contentModule.virtualEle.wrapper;
        var translateY = getTransformValues(virtualWrapperElement).height;
        if (!isNullOrUndefined(this.expandCollapseRec) && (pageingDetails.actionArgs.requestType === "virtualscroll" || pageingDetails.actionArgs.requestType === "refresh" && startIndex !== this.prevstartIndex) && (startIndex < this.parent.getRows().length && endIndex <= startIndex + this.parent.getRows().length) && translateY === 0) {
          startIndex = 0;
        }
        if (pageingDetails.actionArgs.requestType === "save" && startIndex !== this.prevstartIndex && (startIndex < this.parent.getRows().length && endIndex <= startIndex + this.parent.getRows().length) && translateY === 0) {
          startIndex = 0;
          endIndex = startIndex + this.parent.grid.pageSettings.pageSize;
        }
        if (!isNullOrUndefined(this.expandCollapseRec)) {
          var result = this.adjustRangeForExpandCollapse(startIndex, endIndex, visualData);
          startIndex = result.startIndex;
          endIndex = result.endIndex;
        }
        if (this.prevrequestType === "collapseAll" && pageingDetails.actionArgs.requestType === "virtualscroll" && !isNullOrUndefined(this.parent.idMapping) && startIndex === 0) {
          startIndex = 0;
          endIndex = this.parent.grid.pageSettings.pageSize - 1;
          this.parent.grid.notify(virtualActionArgs, { setTop: true });
        }
        if ((this.parent.enableCollapseAll || this.parent.expandStateMapping) && !isNullOrUndefined(this.expandCollapseRec)) {
          if (pageingDetails.count < this.parent.getRows()[0].getBoundingClientRect().height) {
            startIndex = 0;
          } else if (!this.parent["isExpandAll"] && this.parent.grid.contentModule["translateY"] === 0) {
            startIndex = this.prevstartIndex === -1 ? 0 : this.prevstartIndex;
          }
        }
        this.expandCollapseRec = null;
        startIndex = startIndex < 0 ? 0 : startIndex;
        if (endIndex === 0 && visualData.length > 0) {
          pageingDetails.result = visualData;
        } else {
          pageingDetails.result = visualData.slice(startIndex, endIndex);
        }
        this.prevstartIndex = startIndex;
        this.prevendIndex = endIndex;
        this.prevrequestType = pageingDetails.actionArgs.requestType;
      }
      this.parent.notify("updateAction", pageingDetails);
    };
    VirtualScroll3.prototype.adjustRangeForExpandCollapse = function(startIndex, endIndex, visualData) {
      var pageSize = this.parent.grid.pageSettings.pageSize;
      var expandedRecordIndex = visualData.indexOf(this.expandCollapseRec);
      var pageWindowRecords = visualData.slice(expandedRecordIndex, expandedRecordIndex + pageSize);
      if (pageWindowRecords.length < pageSize && expandedRecordIndex >= 0 && startIndex !== 0) {
        var startForLastPage = visualData.length - pageSize;
        startForLastPage = startForLastPage > 0 ? startForLastPage : 0;
        endIndex = visualData.length;
        if (endIndex - startIndex < pageSize) {
          startIndex = startForLastPage;
          if (expandedRecordIndex > visualData.length - pageSize / 2) {
            var viewportTranslateY = startIndex * this.parent.grid.getRowHeight();
            this.parent.grid.contentModule["translateY"] = viewportTranslateY;
            this.parent.grid.contentModule.virtualEle.adjustTable(0, viewportTranslateY);
          }
        }
      } else if (getValue("isCollapseAll", this.parent)) {
        startIndex = 0;
        endIndex = this.parent.grid.pageSettings.pageSize - 1;
        this.parent.grid.notify(virtualActionArgs, { setTop: true });
      }
      return { startIndex, endIndex };
    };
    VirtualScroll3.prototype.destroy = function() {
      this.removeEventListener();
    };
    VirtualScroll3.prototype.updateSelection = function(args) {
      if (args.isHeaderCheckboxClicked && this.parent.grid.currentViewData.length !== this.parent.grid.selectionModule.selectedRowIndexes.length && args.target.classList.contains("e-uncheck")) {
        var updateRowSelection = "updateRowSelection";
        for (var i = 0; i < this.parent.getRows().length; i++) {
          if (this.parent.getRows()[parseInt(i.toString(), 10)].getElementsByClassName("e-frame e-icons e-uncheck").length && !this.parent.getRows()[parseInt(i.toString(), 10)].querySelector(".e-checkbox-disabled")) {
            this.parent.grid.selectionModule["" + updateRowSelection](
              this.parent.getRows()[parseInt(i.toString(), 10)],
              // eslint-disable-next-line max-len
              this.parent.getCurrentViewRecords()[parseInt(i.toString(), 10)].index
            );
          }
        }
      }
    };
    return VirtualScroll3;
  })()
);
var TreeVirtual = (
  /** @class */
  (function(_super) {
    __extends19(TreeVirtual2, _super);
    function TreeVirtual2(parent, locator) {
      var _this = _super.call(this, parent, locator) || this;
      getValue("parent", _this).off("initial-load", getValue("instantiateRenderer", _this), _this);
      getValue("parent", _this).on("initial-load", _this.instantiateRenderers, _this);
      return _this;
    }
    TreeVirtual2.prototype.getModuleName = function() {
      return "treeVirtualScroll";
    };
    TreeVirtual2.prototype.instantiateRenderers = function() {
      var parentGrid = getValue("parent", this);
      getValue("parent", this).log(["limitation", "virtual_height"], "virtualization");
      var renderer = getValue("locator", this).getService("rendererFactory");
      if (parentGrid.enableColumnVirtualization) {
        getValue("addRenderer", renderer).apply(renderer, [RenderType.Header, new VirtualHeaderRenderer(getValue("parent", this), getValue("locator", this))]);
      }
      getValue("addRenderer", renderer).apply(renderer, [RenderType.Content, new VirtualTreeContentRenderer(getValue("parent", this), getValue("locator", this))]);
      this.ensurePageSize();
    };
    TreeVirtual2.prototype.ensurePageSize = function() {
      var parentGrid = getValue("parent", this);
      var rowHeight = parentGrid.getRowHeight();
      if (!isNullOrUndefined(parentGrid.height) && typeof parentGrid.height === "string" && parentGrid.height.indexOf("%") !== -1) {
        parentGrid.element.style.height = parentGrid.height;
      }
      var vHeight = parentGrid.height.toString().indexOf("%") < 0 ? parseInt(parentGrid.height.toString(), 10) : parentGrid.element.getBoundingClientRect().height;
      var blockSize = ~~(vHeight / rowHeight);
      var height = blockSize * 2;
      var size = parentGrid.pageSettings.pageSize;
      parentGrid.setProperties({ pageSettings: { pageSize: size < height ? height : size } }, true);
    };
    return TreeVirtual2;
  })(VirtualScroll)
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/freeze-column.js
var Freeze2 = (
  /** @class */
  (function() {
    function Freeze3(parent) {
      Grid.Inject(Freeze);
      this.parent = parent;
      this.addEventListener();
    }
    Freeze3.prototype.addEventListener = function() {
      this.parent.on("rowExpandCollapse", this.rowExpandCollapse, this);
      this.parent.on("dataBoundArg", this.dataBoundArg, this);
      this.parent.grid.on("dblclick", this.dblClickHandler, this);
    };
    Freeze3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off("rowExpandCollapse", this.rowExpandCollapse);
      this.parent.off("dataBoundArg", this.dataBoundArg);
      this.parent.grid.off("dblclick", this.dblClickHandler);
    };
    Freeze3.prototype.rowExpandCollapse = function(args) {
      var movableRows = this.parent.getDataRows();
      var frozenrows = this.parent.getRows();
      var rows;
      var frozenRightRows;
      var freeze = this.parent.getFrozenLeftColumnsCount() > 0 || this.parent.getFrozenRightColumnsCount() > 0 ? true : false;
      if (freeze) {
        frozenRightRows = this.parent.getRows().filter(function(e) {
          return e.querySelector(".e-gridrowindex" + args.record.index + "level" + (args.record.level + 1));
        });
      }
      if (!args.detailrows.length) {
        rows = movableRows.filter(function(e) {
          return e.querySelector(".e-gridrowindex" + args.record.index + "level" + (args.record.level + 1));
        });
      } else {
        rows = args.detailrows;
      }
      for (var i = 0; i < rows.length; i++) {
        var row = rows[parseInt(i.toString(), 10)];
        var rData = this.parent.grid.getRowObjectFromUID(row.getAttribute("data-uid")).data;
        if (!isNullOrUndefined(movableRows) && row.parentElement.firstElementChild.clientHeight > 0) {
          row.style.height = row.parentElement.firstElementChild.clientHeight + "px";
        }
        this.parent["toggleRowVisibility"](row, args.action);
        if (freeze && frozenRightRows.length) {
          this.parent["toggleRowVisibility"](frozenRightRows[parseInt(i.toString(), 10)], args.action);
        }
        var queryselector = args.action === "e-childrow-hidden" ? ".e-treecolumn-container .e-treegridcollapse" : ".e-treecolumn-container .e-treegridexpand";
        if (frozenrows[parseInt(row.getAttribute("aria-rowindex"), 10) - 1].querySelector(queryselector)) {
          var cRow = [];
          for (var i_1 = 0; i_1 < movableRows.length; i_1++) {
            if (movableRows[parseInt(i_1.toString(), 10)].querySelector(".e-gridrowindex" + rData.index + "level" + (rData.level + 1))) {
              cRow.push(movableRows[parseInt(i_1.toString(), 10)]);
            }
          }
          if (cRow.length) {
            var data = this.parent.getCurrentViewRecords()[cRow[0].rowIndex];
            this.rowExpandCollapse({ detailrows: cRow, action: args.action, record: data });
          }
        }
      }
    };
    Freeze3.prototype.dblClickHandler = function(e) {
      if (parentsUntil(e.target, "e-rowcell") && this.parent.grid.editSettings.allowEditOnDblClick && this.parent.editSettings.mode !== "Cell" && (!e.target["classList"].contains("e-treegridcollapse") && !e.target["classList"].contains("e-treegridexpand"))) {
        this.parent.startEdit(parentsUntil(e.target, "e-row"));
      }
    };
    Freeze3.prototype.dataBoundArg = function() {
      var checkboxColumn = this.parent.getColumns().filter(function(e) {
        return e.showCheckbox;
      });
      if (checkboxColumn.length && this.parent.freezeModule && this.parent.initialRender) {
        addClass([this.parent.element.getElementsByClassName("e-grid")[0]], "e-checkselection");
      }
    };
    Freeze3.prototype.destroy = function() {
      this.removeEventListener();
    };
    Freeze3.prototype.getModuleName = function() {
      return "freeze";
    };
    return Freeze3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/column-chooser.js
var ColumnChooser2 = (
  /** @class */
  (function() {
    function ColumnChooser3(parent) {
      Grid.Inject(ColumnChooser);
      this.parent = parent;
    }
    ColumnChooser3.prototype.openColumnChooser = function(X, Y) {
      return this.parent.grid.columnChooserModule.openColumnChooser(X, Y);
    };
    ColumnChooser3.prototype.destroy = function() {
    };
    ColumnChooser3.prototype.getModuleName = function() {
      return "ColumnChooser";
    };
    return ColumnChooser3;
  })()
);

// node_modules/@syncfusion/ej2-treegrid/src/treegrid/actions/infinite-scroll.js
var InfiniteScroll2 = (
  /** @class */
  (function() {
    function InfiniteScroll3(parent) {
      this.parent = parent;
      Grid.Inject(InfiniteScroll);
      this.addEventListener();
    }
    InfiniteScroll3.prototype.getModuleName = function() {
      return "infiniteScroll";
    };
    InfiniteScroll3.prototype.addEventListener = function() {
      this.parent.on(pagingActions, this.infinitePageAction, this);
      this.parent.on("infinite-remote-expand", this.infiniteRemoteExpand, this);
      this.parent.grid.on("delete-complete", this.infiniteDeleteHandler, this);
      this.parent.grid.on("infinite-edit-handler", this.infiniteEditHandler, this);
      this.parent.grid.on("infinite-crud-cancel", this.createRows, this);
      this.parent.grid.on("content-ready", this.contentready, this);
      this.parent.on(collapseActionComplete, this.collapseActionComplete, this);
      this.parent.grid.on("data-ready", this.onDataReady, this);
      this.dataBoundFunction = this.dataBound.bind(this);
      this.parent.addEventListener(dataBound, this.dataBoundFunction);
    };
    InfiniteScroll3.prototype.removeEventListener = function() {
      if (this.parent.isDestroyed) {
        return;
      }
      this.parent.off("infinite-remote-expand", this.infiniteRemoteExpand);
      this.parent.grid.off("delete-complete", this.infiniteDeleteHandler);
      this.parent.grid.off("infinite-edit-handler", this.infiniteEditHandler);
      this.parent.off(pagingActions, this.infinitePageAction);
      this.parent.grid.off("infinite-crud-cancel", this.createRows);
      this.parent.grid.off("content-ready", this.contentready);
      this.parent.off(collapseActionComplete, this.collapseActionComplete);
      this.parent.grid.off("data-ready", this.onDataReady);
      this.parent.removeEventListener(dataBound, this.dataBoundFunction);
    };
    InfiniteScroll3.prototype.dataBound = function() {
      if (this.treeAction === "collapse") {
        this.treeAction = "refresh";
        this.makeCollapseRequest();
      } else if (this.treeAction === "refresh") {
        this.treeAction = null;
      }
    };
    InfiniteScroll3.prototype.onDataReady = function(e) {
      if (!isNullOrUndefined(e.count) && e.requestType !== "infiniteScroll") {
        this.maxPage = Math.ceil(e.count / this.parent.pageSettings.pageSize);
      }
    };
    InfiniteScroll3.prototype.collapseActionComplete = function(args) {
      if (!this.parent.infiniteScrollSettings.enableCache && args.isCollapse) {
        var contentBounds = this.parent.getContent().firstElementChild.getBoundingClientRect();
        var tableBounds = this.parent.grid.contentModule.getTable().getBoundingClientRect();
        if (Math.round(tableBounds.bottom - this.parent.grid.getRowHeight()) <= Math.round(contentBounds.bottom)) {
          this.treeAction = "collapse";
          this.collapsedData = args.data;
          this.makeCollapseRequest(args);
        }
      }
    };
    InfiniteScroll3.prototype.makeCollapseRequest = function(args) {
      var rows = this.parent.getRows();
      var index = getRowIndexFromElement(rows[rows.length - 1]);
      var previousPage = this.parent.grid.pageSettings.currentPage;
      var nextPage = Math.ceil(index / this.parent.grid.pageSettings.pageSize) + 1;
      if (previousPage >= this.maxPage || nextPage > this.maxPage) {
        return;
      }
      this.parent.grid.pageSettings.currentPage = nextPage;
      this.parent["isInfiniteCollapse"] = true;
      var scrollArg = {
        requestType: "infiniteScroll",
        currentPage: this.parent.grid.pageSettings.currentPage,
        prevPage: previousPage,
        startIndex: index + 1,
        direction: "down"
      };
      this.parent.grid.notify("model-changed", scrollArg);
    };
    InfiniteScroll3.prototype.infiniteRemoteExpand = function(args) {
      var rowObjects = this.parent.grid.getRowsObject();
      var locator = "serviceLocator";
      var generateRows = "generateRows";
      var serviceLocator = this.parent.grid.infiniteScrollModule["" + locator];
      var rowRenderer = new RowRenderer(serviceLocator, null, this.parent.grid);
      var rows = this.parent.getRows();
      var position = args.index === rows.length - 1 ? "after" : "before";
      var cols = this.parent.grid.getColumns();
      var childRowObjects = this.parent.grid.infiniteScrollModule["" + generateRows](args.childData, args);
      var childRowElements = [];
      for (var i = 0; i < childRowObjects.length; i++) {
        childRowElements.push(rowRenderer.render(childRowObjects[parseInt(i.toString(), 10)], cols));
      }
      rowObjects.splice.apply(rowObjects, [args.index + 1, 0].concat(childRowObjects));
      for (var i = 0; i < childRowElements.length; i++) {
        if (position === "after") {
          rows[args.index + i]["" + position](childRowElements[parseInt(i.toString(), 10)]);
        } else {
          rows[args.index + i + 1]["" + position](childRowElements[parseInt(i.toString(), 10)]);
        }
        rows.splice(args.index + 1 + i, 0, childRowElements[parseInt(i.toString(), 10)]);
      }
      resetRowIndex(this.parent.grid, this.parent.grid.getRowsObject(), this.parent.grid.getRows(), 0);
    };
    InfiniteScroll3.prototype.contentready = function() {
      if (this.parent.infiniteScrollSettings.enableCache && !isNullOrUndefined(this.parent.editModule)) {
        var updateIndex = "updateIndex";
        this.parent.editModule["" + updateIndex](this.parent.grid.dataSource, this.parent.getRows(), this.parent.getCurrentViewRecords());
        if (this.parent.getFrozenColumns()) {
          this.parent.editModule["" + updateIndex](this.parent.grid.dataSource, this.parent.getDataRows(), this.parent.getCurrentViewRecords());
        }
      }
    };
    InfiniteScroll3.prototype.infinitePageAction = function(pageingDetails) {
      var _this = this;
      var dm = new DataManager(pageingDetails.result);
      var expanded2 = new Predicate("expanded", "notequal", null).or("expanded", "notequal", void 0);
      var visualData = dm.executeLocal(new Query().where(expanded2));
      var actionArgs = getValue("actionArgs", pageingDetails.actionArgs);
      var actions = getValue("actions", this.parent.grid.infiniteScrollModule);
      if (this.parent.grid.infiniteScrollModule["isInitialRender"] && !this.parent.initialRender) {
        this.parent.grid.pageSettings.currentPage = 1;
      }
      var initial = actions.some(function(value) {
        return value === actionArgs.requestType;
      });
      var initialRender = initial ? true : this.parent.initialRender ? true : false;
      this.visualData = visualData;
      pageingDetails.count = visualData.length;
      if (getValue("isPrinting", pageingDetails.actionArgs)) {
        pageingDetails.result = visualData;
      } else {
        var query = new Query();
        var isCache = this.parent.infiniteScrollSettings.enableCache;
        if (isCache && this.parent.infiniteScrollSettings.initialBlocks > this.parent.infiniteScrollSettings.maxBlocks) {
          this.parent.infiniteScrollSettings.initialBlocks = this.parent.infiniteScrollSettings.maxBlocks;
        }
        var size = initialRender ? this.parent.grid.pageSettings.pageSize * this.parent.infiniteScrollSettings.initialBlocks : this.parent.grid.pageSettings.pageSize;
        var current = this.parent.grid.pageSettings.currentPage;
        if (!isNullOrUndefined(actionArgs)) {
          var lastIndex = getValue("lastIndex", this.parent.grid.infiniteScrollModule);
          var firstIndex = getValue("firstIndex", this.parent.grid.infiniteScrollModule);
          if (!isCache && actionArgs.requestType === "delete") {
            var skip = lastIndex - actionArgs.data.length + 1;
            var take = actionArgs.data.length;
            if (skip < 0) {
              query = query.take(take);
            } else {
              query = query.skip(skip).take(take);
            }
          } else if (isCache && actionArgs.requestType === "delete" || actionArgs.requestType === "save" && actionArgs.action === "add") {
            query = query.skip(firstIndex);
            query = query.take(this.parent.infiniteScrollSettings.initialBlocks * this.parent.pageSettings.pageSize);
          } else {
            if (this.treeAction !== "collapse" && this.treeAction !== "refresh") {
              query = query.page(current, size);
            }
          }
        } else {
          query = query.page(current, size);
        }
        dm.dataSource.json = visualData;
        if (this.treeAction === "collapse") {
          var rows = this.parent.getRows();
          var skip = getRowIndexFromElement(rows[rows.length - 1]) + 1;
          query = query.skip(skip);
          var renderedChildDataCount = this.parent.grid.getRowsObject().filter(function(record) {
            return record.data.parentUniqueID === _this.collapsedData.uniqueID;
          }).length;
          var remainingChildDataCount = this.collapsedData.childRecords.length - renderedChildDataCount;
          if (remainingChildDataCount > 0) {
            query = query.take(Math.max(remainingChildDataCount, 0));
          } else {
            query = query.take(this.parent.pageSettings.pageSize);
          }
        } else if (this.treeAction === "refresh") {
          var rows = this.parent.getRows();
          var skip = getRowIndexFromElement(rows[rows.length - 1]) + 1;
          query = query.skip(skip);
          query = query.take(this.parent.infiniteScrollSettings.initialBlocks * this.parent.pageSettings.pageSize);
        }
        if (!isCache && !isNullOrUndefined(actionArgs) && actionArgs.requestType === "save" && actionArgs.action === "add") {
          pageingDetails.result = [actionArgs.data];
        } else {
          pageingDetails.result = dm.executeLocal(query);
        }
      }
      this.parent.notify("updateAction", pageingDetails);
    };
    InfiniteScroll3.prototype.infiniteEditHandler = function(args) {
      var infiniteData = "infiniteCurrentViewData";
      var infiniteCurrentViewData = this.parent.grid.infiniteScrollModule["" + infiniteData];
      var keys = Object.keys(infiniteCurrentViewData);
      if (args.e.requestType === "delete" && args.result.length > 1) {
        for (var i = 1; i < args.result.length; i++) {
          infiniteCurrentViewData[keys[keys.length - 1]].push(args.result[parseInt(i.toString(), 10)]);
        }
      }
    };
    InfiniteScroll3.prototype.infiniteDeleteHandler = function(args) {
      if (args.requestType === "delete") {
        var rows = this.parent.grid.getRowsObject();
        var rowElms = this.parent.getRows();
        var data = args.data instanceof Array ? args.data : [args.data];
        var keyField = this.parent.grid.getPrimaryKeyFieldNames()[0];
        this.removeRows(rowElms, rows, data, keyField, true);
        if (this.parent.getFrozenColumns() > 0) {
          var mRows = this.parent.grid.getRowsObject();
          var mRowElms = this.parent.grid.getRows();
          this.removeRows(mRowElms, mRows, data, keyField);
        }
      }
    };
    InfiniteScroll3.prototype.removeRows = function(rowElms, rows, data, keyField, isFrozen) {
      var _this = this;
      var resetInfiniteCurrentViewData = "resetInfiniteCurrentViewData";
      var _loop_1 = function(i2) {
        rows.filter(function(e, index) {
          if (e.data["" + keyField] === data[parseInt(i2.toString(), 10)]["" + keyField]) {
            if (isFrozen) {
              var page = Math.ceil((index + 1) / _this.parent.grid.pageSettings.pageSize);
              _this.parent.grid.infiniteScrollModule["" + resetInfiniteCurrentViewData](page, index);
            }
            rows.splice(index, 1);
            remove(rowElms[parseInt(index.toString(), 10)]);
            rowElms.splice(index, 1);
          }
        });
      };
      for (var i = 0; i < data.length; i++) {
        _loop_1(i);
      }
    };
    InfiniteScroll3.prototype.createRows = function(eventArgs) {
      var locator = "serviceLocator";
      var actionArgs = eventArgs.args.e;
      var row = eventArgs.row;
      var serviceLocator = this.parent.grid.infiniteScrollModule["" + locator];
      var rowRenderer = new RowRenderer(serviceLocator, null, this.parent.grid);
      var tbody;
      var currentData = this.parent.getCurrentViewRecords();
      var currentRows = eventArgs.isMovable ? this.parent.grid.getRows() : this.parent.grid.getDataRows();
      if (eventArgs.isFrozenRight) {
        tbody = this.parent.element.querySelector(".e-frozen-right-content").querySelector("tbody");
      } else {
        tbody = !this.parent.grid.isFrozenGrid() ? this.parent.getContent().querySelector("tbody") : eventArgs.isMovable ? this.parent.grid.getContent().querySelector("tbody") : this.parent.grid.getContent().querySelector("tbody");
      }
      if (this.parent.frozenRows) {
        tbody = eventArgs.isFrozenRows && this.parent.grid.infiniteScrollModule.requestType !== "add" || !eventArgs.isFrozenRows && this.parent.grid.infiniteScrollModule.requestType === "add" ? !this.parent.grid.isFrozenGrid() ? this.parent.getHeaderContent().querySelector("tbody") : eventArgs.isMovable ? this.parent.grid.getHeaderContent().querySelector("tbody") : eventArgs.isFrozenRight ? this.parent.element.querySelector(".e-frozen-right-header").querySelector("tbody") : this.parent.grid.getHeaderContent().querySelector("tbody") : tbody;
      }
      var position;
      var addRowIndex = "addRowIndex";
      var newRowIndex = this.parent.editModule["" + addRowIndex];
      for (var i = 0; i < row.length; i++) {
        var newRow = rowRenderer.render(row[parseInt(i.toString(), 10)], this.parent.grid.getColumns());
        if (actionArgs.requestType === "save" && actionArgs.action === "add") {
          if (getValue("selectedIndex", this.parent.editModule) !== -1 && this.parent.editSettings.newRowPosition !== "Top") {
            if (this.parent.editSettings.newRowPosition === "Below" || this.parent.editSettings.newRowPosition === "Child") {
              position = "after";
              newRowIndex += findChildrenRecords(currentData[parseInt(newRowIndex.toString(), 10)]).length;
              if (this.parent.editSettings.newRowPosition === "Child") {
                newRowIndex -= 1;
              }
              currentRows[parseInt(newRowIndex.toString(), 10)]["" + position](newRow);
            } else if (this.parent.editSettings.newRowPosition === "Above") {
              position = "before";
              currentRows[this.parent.editModule["" + addRowIndex]]["" + position](newRow);
            }
          } else if (this.parent.editSettings.newRowPosition === "Bottom") {
            tbody.appendChild(newRow);
          } else {
            tbody.insertBefore(newRow, tbody.firstElementChild);
          }
        } else if (actionArgs.requestType === "delete") {
          tbody.appendChild(newRow);
        }
      }
      eventArgs.cancel = true;
    };
    InfiniteScroll3.prototype.destroy = function() {
      this.removeEventListener();
    };
    return InfiniteScroll3;
  })()
);

// node_modules/@syncfusion/ej2-angular-treegrid/fesm2020/syncfusion-ej2-angular-treegrid.mjs
var _c0 = ["template"];
var _c1 = ["headerTemplate"];
var _c2 = ["filterItemTemplate"];
var _c3 = ["filterTemplate"];
var _c4 = ["commandsTemplate"];
var _c5 = ["editTemplate"];
var _c6 = ["footerTemplate"];
var _c7 = ["toolbarTemplate"];
var _c8 = ["pagerTemplate"];
var _c9 = ["rowTemplate"];
var _c10 = ["detailTemplate"];
var _c11 = ["editSettingsTemplate"];
var _c12 = ["emptyRecordTemplate"];
var _c13 = ["columnChooserSettingsHeaderTemplate"];
var _c14 = ["columnChooserSettingsTemplate"];
var _c15 = ["columnChooserSettingsFooterTemplate"];
var input$3 = ["allowEditing", "allowFiltering", "allowReordering", "allowResizing", "allowSorting", "clipMode", "columns", "commands", "customAttributes", "defaultValue", "disableHtmlEncode", "displayAsCheckBox", "edit", "editTemplate", "editType", "enableColumnSpan", "enableRowSpan", "field", "filter", "filterBarTemplate", "filterTemplate", "format", "formatter", "freeze", "headerTemplate", "headerText", "headerTextAlign", "hideAtMedia", "isFrozen", "isIdentity", "isPrimaryKey", "lockColumn", "maxWidth", "minWidth", "showCheckbox", "showColumnMenu", "showInColumnChooser", "sortComparer", "template", "textAlign", "type", "uid", "validationRules", "valueAccessor", "visible", "width"];
var outputs$4 = [];
var StackedColumnDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$4);
    this.directivePropList = input$3;
  }
};
StackedColumnDirective.ɵfac = function StackedColumnDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || StackedColumnDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
StackedColumnDirective.ɵdir = ɵɵdefineDirective({
  type: StackedColumnDirective,
  selectors: [["e-stacked-column"]],
  contentQueries: function StackedColumnDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c0, 5)(dirIndex, _c1, 5)(dirIndex, _c2, 5)(dirIndex, _c3, 5)(dirIndex, _c4, 5)(dirIndex, _c5, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filter_itemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.commandsTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editTemplate = _t.first);
    }
  },
  inputs: {
    allowEditing: "allowEditing",
    allowFiltering: "allowFiltering",
    allowReordering: "allowReordering",
    allowResizing: "allowResizing",
    allowSorting: "allowSorting",
    clipMode: "clipMode",
    columns: "columns",
    commands: "commands",
    customAttributes: "customAttributes",
    defaultValue: "defaultValue",
    disableHtmlEncode: "disableHtmlEncode",
    displayAsCheckBox: "displayAsCheckBox",
    edit: "edit",
    editTemplate: "editTemplate",
    editType: "editType",
    enableColumnSpan: "enableColumnSpan",
    enableRowSpan: "enableRowSpan",
    field: "field",
    filter: "filter",
    filterBarTemplate: "filterBarTemplate",
    filterTemplate: "filterTemplate",
    format: "format",
    formatter: "formatter",
    freeze: "freeze",
    headerTemplate: "headerTemplate",
    headerText: "headerText",
    headerTextAlign: "headerTextAlign",
    hideAtMedia: "hideAtMedia",
    isFrozen: "isFrozen",
    isIdentity: "isIdentity",
    isPrimaryKey: "isPrimaryKey",
    lockColumn: "lockColumn",
    maxWidth: "maxWidth",
    minWidth: "minWidth",
    showCheckbox: "showCheckbox",
    showColumnMenu: "showColumnMenu",
    showInColumnChooser: "showInColumnChooser",
    sortComparer: "sortComparer",
    template: "template",
    textAlign: "textAlign",
    type: "type",
    uid: "uid",
    validationRules: "validationRules",
    valueAccessor: "valueAccessor",
    visible: "visible",
    width: "width"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
__decorate([Template()], StackedColumnDirective.prototype, "template", void 0);
__decorate([Template()], StackedColumnDirective.prototype, "headerTemplate", void 0);
__decorate([Template()], StackedColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate([Template()], StackedColumnDirective.prototype, "filterTemplate", void 0);
__decorate([Template()], StackedColumnDirective.prototype, "commandsTemplate", void 0);
__decorate([Template()], StackedColumnDirective.prototype, "editTemplate", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StackedColumnDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-treegrid>e-columns>e-column>e-stacked-columns>e-stacked-column",
      inputs: input$3,
      outputs: outputs$4,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    template: [{
      type: ContentChild,
      args: ["template"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["headerTemplate"]
    }],
    filter_itemTemplate: [{
      type: ContentChild,
      args: ["filterItemTemplate"]
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filterTemplate"]
    }],
    commandsTemplate: [{
      type: ContentChild,
      args: ["commandsTemplate"]
    }],
    editTemplate: [{
      type: ContentChild,
      args: ["editTemplate"]
    }]
  });
})();
var StackedColumnsDirective = class extends ArrayBase {
  constructor() {
    super("columns");
  }
};
StackedColumnsDirective.ɵfac = function StackedColumnsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || StackedColumnsDirective)();
};
StackedColumnsDirective.ɵdir = ɵɵdefineDirective({
  type: StackedColumnsDirective,
  selectors: [["e-stacked-columns"]],
  contentQueries: function StackedColumnsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, StackedColumnDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StackedColumnsDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-treegrid>e-columns>e-column>e-stacked-columns",
      queries: {
        children: new ContentChildren(StackedColumnDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input$2 = ["allowEditing", "allowFiltering", "allowReordering", "allowResizing", "allowSorting", "clipMode", "columns", "commands", "customAttributes", "defaultValue", "disableHtmlEncode", "displayAsCheckBox", "edit", "editTemplate", "editType", "enableColumnSpan", "enableRowSpan", "field", "filter", "filterBarTemplate", "filterTemplate", "format", "formatter", "freeze", "headerTemplate", "headerText", "headerTextAlign", "hideAtMedia", "isFrozen", "isIdentity", "isPrimaryKey", "lockColumn", "maxWidth", "minWidth", "showCheckbox", "showColumnMenu", "showInColumnChooser", "sortComparer", "template", "textAlign", "type", "uid", "validationRules", "valueAccessor", "visible", "width"];
var outputs$3 = [];
var ColumnDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    this.tags = ["columns"];
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$3);
    this.directivePropList = input$2;
  }
};
ColumnDirective.ɵfac = function ColumnDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ColumnDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
ColumnDirective.ɵdir = ɵɵdefineDirective({
  type: ColumnDirective,
  selectors: [["e-column"]],
  contentQueries: function ColumnDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c0, 5)(dirIndex, _c1, 5)(dirIndex, _c2, 5)(dirIndex, _c3, 5)(dirIndex, _c4, 5)(dirIndex, _c5, 5)(dirIndex, StackedColumnsDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filter_itemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.commandsTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childColumns = _t.first);
    }
  },
  inputs: {
    allowEditing: "allowEditing",
    allowFiltering: "allowFiltering",
    allowReordering: "allowReordering",
    allowResizing: "allowResizing",
    allowSorting: "allowSorting",
    clipMode: "clipMode",
    columns: "columns",
    commands: "commands",
    customAttributes: "customAttributes",
    defaultValue: "defaultValue",
    disableHtmlEncode: "disableHtmlEncode",
    displayAsCheckBox: "displayAsCheckBox",
    edit: "edit",
    editTemplate: "editTemplate",
    editType: "editType",
    enableColumnSpan: "enableColumnSpan",
    enableRowSpan: "enableRowSpan",
    field: "field",
    filter: "filter",
    filterBarTemplate: "filterBarTemplate",
    filterTemplate: "filterTemplate",
    format: "format",
    formatter: "formatter",
    freeze: "freeze",
    headerTemplate: "headerTemplate",
    headerText: "headerText",
    headerTextAlign: "headerTextAlign",
    hideAtMedia: "hideAtMedia",
    isFrozen: "isFrozen",
    isIdentity: "isIdentity",
    isPrimaryKey: "isPrimaryKey",
    lockColumn: "lockColumn",
    maxWidth: "maxWidth",
    minWidth: "minWidth",
    showCheckbox: "showCheckbox",
    showColumnMenu: "showColumnMenu",
    showInColumnChooser: "showInColumnChooser",
    sortComparer: "sortComparer",
    template: "template",
    textAlign: "textAlign",
    type: "type",
    uid: "uid",
    validationRules: "validationRules",
    valueAccessor: "valueAccessor",
    visible: "visible",
    width: "width"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
__decorate([Template()], ColumnDirective.prototype, "template", void 0);
__decorate([Template()], ColumnDirective.prototype, "headerTemplate", void 0);
__decorate([Template()], ColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate([Template()], ColumnDirective.prototype, "filterTemplate", void 0);
__decorate([Template()], ColumnDirective.prototype, "commandsTemplate", void 0);
__decorate([Template()], ColumnDirective.prototype, "editTemplate", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-treegrid>e-columns>e-column",
      inputs: input$2,
      outputs: outputs$3,
      queries: {
        childColumns: new ContentChild(StackedColumnsDirective)
      }
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    template: [{
      type: ContentChild,
      args: ["template"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["headerTemplate"]
    }],
    filter_itemTemplate: [{
      type: ContentChild,
      args: ["filterItemTemplate"]
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filterTemplate"]
    }],
    commandsTemplate: [{
      type: ContentChild,
      args: ["commandsTemplate"]
    }],
    editTemplate: [{
      type: ContentChild,
      args: ["editTemplate"]
    }]
  });
})();
var ColumnsDirective = class extends ArrayBase {
  constructor() {
    super("columns");
  }
};
ColumnsDirective.ɵfac = function ColumnsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ColumnsDirective)();
};
ColumnsDirective.ɵdir = ɵɵdefineDirective({
  type: ColumnsDirective,
  selectors: [["e-columns"]],
  contentQueries: function ColumnsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ColumnDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnsDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-treegrid>e-columns",
      queries: {
        children: new ContentChildren(ColumnDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input$1 = ["columnName", "customAggregate", "field", "footerTemplate", "format", "type"];
var outputs$2 = [];
var AggregateColumnDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$2);
    this.directivePropList = input$1;
  }
};
AggregateColumnDirective.ɵfac = function AggregateColumnDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AggregateColumnDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
AggregateColumnDirective.ɵdir = ɵɵdefineDirective({
  type: AggregateColumnDirective,
  selectors: [["e-column"]],
  contentQueries: function AggregateColumnDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c6, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
    }
  },
  inputs: {
    columnName: "columnName",
    customAggregate: "customAggregate",
    field: "field",
    footerTemplate: "footerTemplate",
    format: "format",
    type: "type"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
__decorate([Template()], AggregateColumnDirective.prototype, "footerTemplate", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AggregateColumnDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-treegrid>e-aggregates>e-aggregate>e-columns>e-column",
      inputs: input$1,
      outputs: outputs$2,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    footerTemplate: [{
      type: ContentChild,
      args: ["footerTemplate"]
    }]
  });
})();
var AggregateColumnsDirective = class extends ArrayBase {
  constructor() {
    super("columns");
  }
};
AggregateColumnsDirective.ɵfac = function AggregateColumnsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AggregateColumnsDirective)();
};
AggregateColumnsDirective.ɵdir = ɵɵdefineDirective({
  type: AggregateColumnsDirective,
  selectors: [["e-columns"]],
  contentQueries: function AggregateColumnsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, AggregateColumnDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AggregateColumnsDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-treegrid>e-aggregates>e-aggregate>e-columns",
      queries: {
        children: new ContentChildren(AggregateColumnDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input = ["columns", "showChildSummary"];
var outputs$1 = [];
var AggregateDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    this.tags = ["columns"];
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$1);
    this.directivePropList = input;
  }
};
AggregateDirective.ɵfac = function AggregateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AggregateDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
AggregateDirective.ɵdir = ɵɵdefineDirective({
  type: AggregateDirective,
  selectors: [["e-aggregate"]],
  contentQueries: function AggregateDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, AggregateColumnsDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childColumns = _t.first);
    }
  },
  inputs: {
    columns: "columns",
    showChildSummary: "showChildSummary"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AggregateDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-treegrid>e-aggregates>e-aggregate",
      inputs: input,
      outputs: outputs$1,
      queries: {
        childColumns: new ContentChild(AggregateColumnsDirective)
      }
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var AggregatesDirective = class extends ArrayBase {
  constructor() {
    super("aggregates");
  }
};
AggregatesDirective.ɵfac = function AggregatesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AggregatesDirective)();
};
AggregatesDirective.ɵdir = ɵɵdefineDirective({
  type: AggregatesDirective,
  selectors: [["e-aggregates"]],
  contentQueries: function AggregatesDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, AggregateDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AggregatesDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-treegrid>e-aggregates",
      queries: {
        children: new ContentChildren(AggregateDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var inputs = ["aggregates", "allowExcelExport", "allowFiltering", "allowMultiSorting", "allowPaging", "allowPdfExport", "allowReordering", "allowResizing", "allowRowDragAndDrop", "allowSelection", "allowSorting", "allowTextWrap", "autoCheckHierarchy", "childMapping", "clipMode", "columnChooserSettings", "columnMenuItems", "columnQueryMode", "columns", "contextMenuItems", "copyHierarchyMode", "currencyCode", "dataSource", "detailTemplate", "editSettings", "emptyRecordTemplate", "enableAdaptiveUI", "enableAltRow", "enableAutoFill", "enableCollapseAll", "enableColumnSpan", "enableColumnVirtualization", "enableHover", "enableHtmlSanitizer", "enableImmutableMode", "enableInfiniteScrolling", "enablePersistence", "enableRowSpan", "enableRtl", "enableStickyHeader", "enableVirtualMaskRow", "enableVirtualization", "expandStateMapping", "filterSettings", "frozenColumns", "frozenRows", "gridLines", "hasChildMapping", "height", "idMapping", "infiniteScrollSettings", "isRowSelectable", "loadChildOnDemand", "loadingIndicator", "locale", "pageSettings", "pagerTemplate", "parentIdMapping", "printMode", "query", "rowDropSettings", "rowHeight", "rowTemplate", "searchSettings", "selectedRowIndex", "selectionSettings", "showColumnChooser", "showColumnMenu", "sortSettings", "textWrapSettings", "toolbar", "treeColumnIndex", "width"];
var outputs = ["actionBegin", "actionComplete", "actionFailure", "batchAdd", "batchCancel", "batchDelete", "beforeBatchAdd", "beforeBatchDelete", "beforeBatchSave", "beforeCopy", "beforeDataBound", "beforeExcelExport", "beforePaste", "beforePdfExport", "beforePrint", "beginEdit", "cellDeselected", "cellDeselecting", "cellEdit", "cellSave", "cellSaved", "cellSelected", "cellSelecting", "checkboxChange", "collapsed", "collapsing", "columnDrag", "columnDragStart", "columnDrop", "columnMenuClick", "columnMenuOpen", "contextMenuClick", "contextMenuOpen", "created", "dataBound", "dataSourceChanged", "dataStateChange", "detailDataBound", "excelAggregateQueryCellInfo", "excelExportComplete", "excelHeaderQueryCellInfo", "excelQueryCellInfo", "expanded", "expanding", "headerCellInfo", "load", "pdfAggregateQueryCellInfo", "pdfExportComplete", "pdfHeaderQueryCellInfo", "pdfQueryCellInfo", "printComplete", "queryCellInfo", "recordDoubleClick", "resizeStart", "resizeStop", "resizing", "rowDataBound", "rowDeselected", "rowDeselecting", "rowDrag", "rowDragStart", "rowDragStartHelper", "rowDrop", "rowSelected", "rowSelecting", "toolbarClick", "dataSourceChange"];
var twoWays = ["dataSource"];
var TreeGridComponent = class TreeGridComponent2 extends TreeGrid {
  constructor(ngEle, srenderer, viewContainerRef, injector) {
    super();
    this.ngEle = ngEle;
    this.srenderer = srenderer;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.tags = ["columns", "aggregates"];
    this.element = this.ngEle.nativeElement;
    this.injectedModules = this.injectedModules || [];
    try {
      let mod = this.injector.get("TreeGridFilter");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridPage");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridSort");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridReorder");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridToolbar");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridAggregate");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridResize");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridColumnMenu");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridExcelExport");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridPdfExport");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridCommandColumn");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridContextMenu");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridEdit");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridSelection");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridVirtualScroll");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridDetailRow");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridRowDD");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridFreeze");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridColumnChooser");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridLogger");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("TreeGridInfiniteScroll");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    this.registerEvents(outputs);
    this.addTwoWay.call(this, twoWays);
    setValue2("currentInstance", this, this.viewContainerRef);
    this.context = new ComponentBase();
  }
  ngOnInit() {
    this.context.ngOnInit(this);
  }
  ngAfterViewInit() {
    this.context.ngAfterViewInit(this);
  }
  ngOnDestroy() {
    this.context.ngOnDestroy(this);
  }
  ngAfterContentChecked() {
    this.tagObjects[0].instance = this.childColumns;
    if (this.childAggregates) {
      this.tagObjects[1].instance = this.childAggregates;
    }
    this.context.ngAfterContentChecked(this);
  }
};
TreeGridComponent.ɵfac = function TreeGridComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TreeGridComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector));
};
TreeGridComponent.ɵcmp = ɵɵdefineComponent({
  type: TreeGridComponent,
  selectors: [["ejs-treegrid"]],
  contentQueries: function TreeGridComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c7, 5)(dirIndex, _c8, 5)(dirIndex, _c9, 5)(dirIndex, _c10, 5)(dirIndex, _c11, 5)(dirIndex, _c12, 5)(dirIndex, _c13, 5)(dirIndex, _c14, 5)(dirIndex, _c15, 5)(dirIndex, ColumnsDirective, 5)(dirIndex, AggregatesDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pagerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rowTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.detailTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editSettings_template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.emptyRecordTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.columnChooserSettings_headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.columnChooserSettings_template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.columnChooserSettings_footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childColumns = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childAggregates = _t.first);
    }
  },
  inputs: {
    aggregates: "aggregates",
    allowExcelExport: "allowExcelExport",
    allowFiltering: "allowFiltering",
    allowMultiSorting: "allowMultiSorting",
    allowPaging: "allowPaging",
    allowPdfExport: "allowPdfExport",
    allowReordering: "allowReordering",
    allowResizing: "allowResizing",
    allowRowDragAndDrop: "allowRowDragAndDrop",
    allowSelection: "allowSelection",
    allowSorting: "allowSorting",
    allowTextWrap: "allowTextWrap",
    autoCheckHierarchy: "autoCheckHierarchy",
    childMapping: "childMapping",
    clipMode: "clipMode",
    columnChooserSettings: "columnChooserSettings",
    columnMenuItems: "columnMenuItems",
    columnQueryMode: "columnQueryMode",
    columns: "columns",
    contextMenuItems: "contextMenuItems",
    copyHierarchyMode: "copyHierarchyMode",
    currencyCode: "currencyCode",
    dataSource: "dataSource",
    detailTemplate: "detailTemplate",
    editSettings: "editSettings",
    emptyRecordTemplate: "emptyRecordTemplate",
    enableAdaptiveUI: "enableAdaptiveUI",
    enableAltRow: "enableAltRow",
    enableAutoFill: "enableAutoFill",
    enableCollapseAll: "enableCollapseAll",
    enableColumnSpan: "enableColumnSpan",
    enableColumnVirtualization: "enableColumnVirtualization",
    enableHover: "enableHover",
    enableHtmlSanitizer: "enableHtmlSanitizer",
    enableImmutableMode: "enableImmutableMode",
    enableInfiniteScrolling: "enableInfiniteScrolling",
    enablePersistence: "enablePersistence",
    enableRowSpan: "enableRowSpan",
    enableRtl: "enableRtl",
    enableStickyHeader: "enableStickyHeader",
    enableVirtualMaskRow: "enableVirtualMaskRow",
    enableVirtualization: "enableVirtualization",
    expandStateMapping: "expandStateMapping",
    filterSettings: "filterSettings",
    frozenColumns: "frozenColumns",
    frozenRows: "frozenRows",
    gridLines: "gridLines",
    hasChildMapping: "hasChildMapping",
    height: "height",
    idMapping: "idMapping",
    infiniteScrollSettings: "infiniteScrollSettings",
    isRowSelectable: "isRowSelectable",
    loadChildOnDemand: "loadChildOnDemand",
    loadingIndicator: "loadingIndicator",
    locale: "locale",
    pageSettings: "pageSettings",
    pagerTemplate: "pagerTemplate",
    parentIdMapping: "parentIdMapping",
    printMode: "printMode",
    query: "query",
    rowDropSettings: "rowDropSettings",
    rowHeight: "rowHeight",
    rowTemplate: "rowTemplate",
    searchSettings: "searchSettings",
    selectedRowIndex: "selectedRowIndex",
    selectionSettings: "selectionSettings",
    showColumnChooser: "showColumnChooser",
    showColumnMenu: "showColumnMenu",
    sortSettings: "sortSettings",
    textWrapSettings: "textWrapSettings",
    toolbar: "toolbar",
    treeColumnIndex: "treeColumnIndex",
    width: "width"
  },
  outputs: {
    actionBegin: "actionBegin",
    actionComplete: "actionComplete",
    actionFailure: "actionFailure",
    batchAdd: "batchAdd",
    batchCancel: "batchCancel",
    batchDelete: "batchDelete",
    beforeBatchAdd: "beforeBatchAdd",
    beforeBatchDelete: "beforeBatchDelete",
    beforeBatchSave: "beforeBatchSave",
    beforeCopy: "beforeCopy",
    beforeDataBound: "beforeDataBound",
    beforeExcelExport: "beforeExcelExport",
    beforePaste: "beforePaste",
    beforePdfExport: "beforePdfExport",
    beforePrint: "beforePrint",
    beginEdit: "beginEdit",
    cellDeselected: "cellDeselected",
    cellDeselecting: "cellDeselecting",
    cellEdit: "cellEdit",
    cellSave: "cellSave",
    cellSaved: "cellSaved",
    cellSelected: "cellSelected",
    cellSelecting: "cellSelecting",
    checkboxChange: "checkboxChange",
    collapsed: "collapsed",
    collapsing: "collapsing",
    columnDrag: "columnDrag",
    columnDragStart: "columnDragStart",
    columnDrop: "columnDrop",
    columnMenuClick: "columnMenuClick",
    columnMenuOpen: "columnMenuOpen",
    contextMenuClick: "contextMenuClick",
    contextMenuOpen: "contextMenuOpen",
    created: "created",
    dataBound: "dataBound",
    dataSourceChanged: "dataSourceChanged",
    dataStateChange: "dataStateChange",
    detailDataBound: "detailDataBound",
    excelAggregateQueryCellInfo: "excelAggregateQueryCellInfo",
    excelExportComplete: "excelExportComplete",
    excelHeaderQueryCellInfo: "excelHeaderQueryCellInfo",
    excelQueryCellInfo: "excelQueryCellInfo",
    expanded: "expanded",
    expanding: "expanding",
    headerCellInfo: "headerCellInfo",
    load: "load",
    pdfAggregateQueryCellInfo: "pdfAggregateQueryCellInfo",
    pdfExportComplete: "pdfExportComplete",
    pdfHeaderQueryCellInfo: "pdfHeaderQueryCellInfo",
    pdfQueryCellInfo: "pdfQueryCellInfo",
    printComplete: "printComplete",
    queryCellInfo: "queryCellInfo",
    recordDoubleClick: "recordDoubleClick",
    resizeStart: "resizeStart",
    resizeStop: "resizeStop",
    resizing: "resizing",
    rowDataBound: "rowDataBound",
    rowDeselected: "rowDeselected",
    rowDeselecting: "rowDeselecting",
    rowDrag: "rowDrag",
    rowDragStart: "rowDragStart",
    rowDragStartHelper: "rowDragStartHelper",
    rowDrop: "rowDrop",
    rowSelected: "rowSelected",
    rowSelecting: "rowSelecting",
    toolbarClick: "toolbarClick",
    dataSourceChange: "dataSourceChange"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function TreeGridComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
__decorate([Template()], TreeGridComponent.prototype, "toolbarTemplate", void 0);
__decorate([Template()], TreeGridComponent.prototype, "pagerTemplate", void 0);
__decorate([Template()], TreeGridComponent.prototype, "rowTemplate", void 0);
__decorate([Template()], TreeGridComponent.prototype, "detailTemplate", void 0);
__decorate([Template()], TreeGridComponent.prototype, "editSettings_template", void 0);
__decorate([Template()], TreeGridComponent.prototype, "emptyRecordTemplate", void 0);
__decorate([Template()], TreeGridComponent.prototype, "columnChooserSettings_headerTemplate", void 0);
__decorate([Template()], TreeGridComponent.prototype, "columnChooserSettings_template", void 0);
__decorate([Template()], TreeGridComponent.prototype, "columnChooserSettings_footerTemplate", void 0);
TreeGridComponent = __decorate([ComponentMixins([ComponentBase])], TreeGridComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeGridComponent, [{
    type: Component,
    args: [{
      selector: "ejs-treegrid",
      inputs,
      outputs,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {
        childColumns: new ContentChild(ColumnsDirective),
        childAggregates: new ContentChild(AggregatesDirective)
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ViewContainerRef
    }, {
      type: Injector
    }];
  }, {
    toolbarTemplate: [{
      type: ContentChild,
      args: ["toolbarTemplate"]
    }],
    pagerTemplate: [{
      type: ContentChild,
      args: ["pagerTemplate"]
    }],
    rowTemplate: [{
      type: ContentChild,
      args: ["rowTemplate"]
    }],
    detailTemplate: [{
      type: ContentChild,
      args: ["detailTemplate"]
    }],
    editSettings_template: [{
      type: ContentChild,
      args: ["editSettingsTemplate"]
    }],
    emptyRecordTemplate: [{
      type: ContentChild,
      args: ["emptyRecordTemplate"]
    }],
    columnChooserSettings_headerTemplate: [{
      type: ContentChild,
      args: ["columnChooserSettingsHeaderTemplate"]
    }],
    columnChooserSettings_template: [{
      type: ContentChild,
      args: ["columnChooserSettingsTemplate"]
    }],
    columnChooserSettings_footerTemplate: [{
      type: ContentChild,
      args: ["columnChooserSettingsFooterTemplate"]
    }]
  });
})();
var TreeGridModule = class {
};
TreeGridModule.ɵfac = function TreeGridModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TreeGridModule)();
};
TreeGridModule.ɵmod = ɵɵdefineNgModule({
  type: TreeGridModule,
  declarations: [TreeGridComponent, StackedColumnDirective, StackedColumnsDirective, ColumnDirective, ColumnsDirective, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective],
  imports: [CommonModule],
  exports: [TreeGridComponent, StackedColumnDirective, StackedColumnsDirective, ColumnDirective, ColumnsDirective, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective]
});
TreeGridModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeGridModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [TreeGridComponent, StackedColumnDirective, StackedColumnsDirective, ColumnDirective, ColumnsDirective, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective],
      exports: [TreeGridComponent, StackedColumnDirective, StackedColumnsDirective, ColumnDirective, ColumnsDirective, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective]
    }]
  }], null, null);
})();
var FilterService = {
  provide: "TreeGridFilter",
  useValue: Filter2
};
var PageService = {
  provide: "TreeGridPage",
  useValue: Page2
};
var SortService = {
  provide: "TreeGridSort",
  useValue: Sort2
};
var ReorderService = {
  provide: "TreeGridReorder",
  useValue: Reorder2
};
var ToolbarService = {
  provide: "TreeGridToolbar",
  useValue: Toolbar2
};
var AggregateService = {
  provide: "TreeGridAggregate",
  useValue: Aggregate2
};
var ResizeService = {
  provide: "TreeGridResize",
  useValue: Resize2
};
var ColumnMenuService = {
  provide: "TreeGridColumnMenu",
  useValue: ColumnMenu2
};
var ExcelExportService = {
  provide: "TreeGridExcelExport",
  useValue: ExcelExport2
};
var PdfExportService = {
  provide: "TreeGridPdfExport",
  useValue: PdfExport2
};
var CommandColumnService = {
  provide: "TreeGridCommandColumn",
  useValue: CommandColumn2
};
var ContextMenuService = {
  provide: "TreeGridContextMenu",
  useValue: ContextMenu2
};
var EditService = {
  provide: "TreeGridEdit",
  useValue: Edit2
};
var SelectionService = {
  provide: "TreeGridSelection",
  useValue: Selection
};
var VirtualScrollService = {
  provide: "TreeGridVirtualScroll",
  useValue: VirtualScroll2
};
var DetailRowService = {
  provide: "TreeGridDetailRow",
  useValue: DetailRow2
};
var RowDDService = {
  provide: "TreeGridRowDD",
  useValue: RowDD2
};
var FreezeService = {
  provide: "TreeGridFreeze",
  useValue: Freeze2
};
var ColumnChooserService = {
  provide: "TreeGridColumnChooser",
  useValue: ColumnChooser2
};
var LoggerService = {
  provide: "TreeGridLogger",
  useValue: Logger2
};
var InfiniteScrollService = {
  provide: "TreeGridInfiniteScroll",
  useValue: InfiniteScroll2
};
var TreeGridAllModule = class {
};
TreeGridAllModule.ɵfac = function TreeGridAllModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TreeGridAllModule)();
};
TreeGridAllModule.ɵmod = ɵɵdefineNgModule({
  type: TreeGridAllModule,
  imports: [CommonModule, TreeGridModule],
  exports: [TreeGridModule]
});
TreeGridAllModule.ɵinj = ɵɵdefineInjector({
  providers: [FilterService, PageService, SortService, ReorderService, ToolbarService, AggregateService, ResizeService, ColumnMenuService, ExcelExportService, PdfExportService, CommandColumnService, ContextMenuService, EditService, SelectionService, VirtualScrollService, DetailRowService, RowDDService, FreezeService, ColumnChooserService, LoggerService, InfiniteScrollService],
  imports: [[CommonModule, TreeGridModule], TreeGridModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeGridAllModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TreeGridModule],
      exports: [TreeGridModule],
      providers: [FilterService, PageService, SortService, ReorderService, ToolbarService, AggregateService, ResizeService, ColumnMenuService, ExcelExportService, PdfExportService, CommandColumnService, ContextMenuService, EditService, SelectionService, VirtualScrollService, DetailRowService, RowDDService, FreezeService, ColumnChooserService, LoggerService, InfiniteScrollService]
    }]
  }], null, null);
})();
export {
  Aggregate2 as Aggregate,
  AggregateColumn,
  AggregateColumnDirective,
  AggregateColumnsDirective,
  AggregateDirective,
  AggregateRow,
  AggregateService,
  AggregatesDirective,
  Column,
  ColumnChooser2 as ColumnChooser,
  ColumnChooserService,
  ColumnDirective,
  ColumnMenu2 as ColumnMenu,
  ColumnMenuService,
  ColumnsDirective,
  CommandColumn2 as CommandColumn,
  CommandColumnService,
  ContextMenu2 as ContextMenu,
  ContextMenuItems,
  ContextMenuService,
  DataManipulation,
  DetailRow2 as DetailRow,
  DetailRowService,
  Edit2 as Edit,
  EditService,
  EditSettings,
  ExcelExport2 as ExcelExport,
  ExcelExportService,
  Filter2 as Filter,
  FilterService,
  FilterSettings,
  Freeze2 as Freeze,
  FreezeService,
  InfiniteScroll2 as InfiniteScroll,
  InfiniteScrollService,
  InfiniteScrollSettings,
  LoadingIndicator,
  Logger2 as Logger,
  LoggerService,
  Page2 as Page,
  PageService,
  PageSettings,
  PdfExport2 as PdfExport,
  PdfExportService,
  Predicate2 as Predicate,
  Render,
  Reorder2 as Reorder,
  ReorderService,
  Resize2 as Resize,
  ResizeService,
  RowDD2 as RowDD,
  RowDDService,
  RowDropSettings2 as RowDropSettings,
  SearchSettings,
  Selection,
  SelectionService,
  SelectionSettings,
  Sort2 as Sort,
  SortDescriptor,
  SortService,
  SortSettings,
  StackedColumn,
  StackedColumnDirective,
  StackedColumnsDirective,
  Toolbar2 as Toolbar,
  ToolbarItem,
  ToolbarService,
  TreeClipboard,
  TreeGrid,
  TreeGridAllModule,
  TreeGridColumn,
  TreeGridComponent,
  TreeGridModule,
  TreeVirtual,
  TreeVirtualRowModelGenerator,
  VirtualScroll2 as VirtualScroll,
  VirtualScrollService,
  actionBegin,
  actionComplete,
  actionFailure,
  ariaColIndex,
  ariaRowIndex,
  autoCol,
  batchAdd,
  batchCancel,
  batchDelete,
  batchEditFormRendered,
  batchSave,
  beforeBatchAdd,
  beforeBatchCancel,
  beforeBatchDelete,
  beforeBatchSave,
  beforeCopy,
  beforeDataBound,
  beforeExcelExport,
  beforePaste,
  beforePdfExport,
  beforeStartEdit,
  beginAdd,
  beginEdit,
  cellEdit,
  cellSave,
  cellSaved,
  checkboxChange,
  collapseActionComplete,
  collapsed,
  collapsing,
  content,
  contextMenuClick,
  contextMenuOpen,
  crudAction,
  dataBound,
  dataListener,
  dataStateChange,
  destroy,
  detailDataBound,
  doubleTap,
  expanded,
  expanding,
  extendArray,
  findChildrenRecords,
  findParentRecords,
  frozenContent,
  frozenHeader,
  frozenLeft,
  frozenRight,
  getExpandStatus,
  getParentData,
  getPlainData,
  headerContent,
  indexModifier,
  isCheckboxcolumn,
  isCountRequired,
  isFilterChildHierarchy,
  isHidden,
  isOffline,
  isRemoteData,
  keyPressed,
  leftRight,
  load,
  localPagedExpandCollapse,
  movableContent,
  movableHeader,
  pagingActions,
  printGridInit,
  queryCellInfo,
  recordDoubleClick,
  remoteExpand,
  resizeStop,
  rowDataBound,
  rowDeselected,
  rowDeselecting,
  rowDrag,
  rowDragStart,
  rowDragStartHelper,
  rowDrop,
  rowDropped,
  rowSelected,
  rowSelecting,
  rowdraging,
  rowsAdd,
  rowsRemove,
  savePreviousRowPosition,
  table,
  toolbarClick,
  treeGridDetails,
  updateData,
  virtualActionArgs,
  virtualColumnIndex
};
//# sourceMappingURL=@syncfusion_ej2-angular-treegrid.js.map
