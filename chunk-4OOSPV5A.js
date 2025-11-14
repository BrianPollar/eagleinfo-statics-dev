import {
  ViewOneCompose
} from "./chunk-BMZBVPCI.js";
import {
  AdminBackBarComponent
} from "./chunk-RPZGEB5Y.js";
import {
  CompanyListBase
} from "./chunk-NEEP2B3Y.js";
import {
  AdminSearchFieldComponent
} from "./chunk-A3XL6Y7L.js";
import {
  AdminTableComponent
} from "./chunk-EWIFM267.js";
import "./chunk-TFHAZXT7.js";
import {
  ListComposeAdminPanel
} from "./chunk-ANHFC4IG.js";
import {
  openClose
} from "./chunk-6C27QOWO.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
import "./chunk-AKDPFH6R.js";
import "./chunk-O454IXIK.js";
import {
  AdminPageContentComponent
} from "./chunk-LWX77LXW.js";
import "./chunk-G2DKIAK6.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import {
  TooltipComponent
} from "./chunk-4KKGHO4P.js";
import "./chunk-UIKF3Q7X.js";
import "./chunk-RMIF5JQ2.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import "./chunk-H6XV6YF3.js";
import "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  AutomaticItemTax,
  Company,
  EagleInfoClientError,
  FrontendLogger,
  navByBus
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  DatePipe,
  EventEmitter,
  Meta,
  Title,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/auto-tax/select-companys/select-companys.component.ts
var _c0 = () => ({ label: "Name", value: "name" });
var _c1 = () => ({ label: "Display Name", value: "displayName" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ header: "Company ID", field: "_id", isDefaultField: true, sortable: true });
var _c4 = () => ({ header: "Name", field: "name", sortable: true, removeWhen: "small" });
var _c5 = () => ({ header: "Display Name", field: "displayName", sortable: true, removeWhen: "large" });
var _c6 = (a0, a1, a2) => [a0, a1, a2];
var _c7 = () => [];
var SelectCompanysComponent = class _SelectCompanysComponent extends CompanyListBase {
  constructor(router, eventbus, windowService, toastr, apNme, mainBarTitle, metaTagService, titleService) {
    super(router, eventbus, windowService, toastr, apNme, mainBarTitle, metaTagService, titleService);
    this.router = router;
    this.eventbus = eventbus;
    this.windowService = windowService;
    this.toastr = toastr;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.selectedCompanyIds = [];
    this.selectedCompanys = new EventEmitter();
    this.scrollForce = false;
  }
  ngOnInit() {
    this.listCompose.selections = this.selectedCompanyIds;
    super.ngOnInit();
  }
  selectionToggle(ev) {
    this.listCompose.toggleSelection(ev);
    FrontendLogger.debug("selections ", this.listCompose.selections);
    this.selectedCompanys.emit(this.listCompose.selections);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.\u0275fac = function SelectCompanysComponent_Factory(t) {
      return new (t || _SelectCompanysComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectCompanysComponent, selectors: [["app-select-companys"]], inputs: { selectedCompanyIds: "selectedCompanyIds" }, outputs: { selectedCompanys: "selectedCompanys" }, standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 12, vars: 28, consts: [[1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md", "!!bg-default-white"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "justify-between"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "popper"], ["type", "button", 1, "w-auto", "mb-6", "flex", "items-center", "justify-center", "!bg-primary", "text-white", "border-transparent", "btn", "hover:bg-gray-200", "hover:!text-dark", 3, "click"], [1, "material-icons-outlined", "mr-2"], [3, "filter", "options"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "currentActivePopupId", "dataArr", "selections", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"]], template: function SelectCompanysComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "lib-tooltip", 4)(5, "button", 5);
        \u0275\u0275listener("click", function SelectCompanysComponent_Template_button_click_5_listener() {
          return ctx.addCompany();
        });
        \u0275\u0275elementStart(6, "i", 6);
        \u0275\u0275text(7, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "span");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 3)(10, "app-admin-search-field", 7);
        \u0275\u0275listener("filter", function SelectCompanysComponent_Template_app_admin_search_field_filter_10_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "app-admin-table", 8);
        \u0275\u0275listener("paginateItems", function SelectCompanysComponent_Template_app_admin_table_paginateItems_11_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function SelectCompanysComponent_Template_app_admin_table_openExtras_11_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function SelectCompanysComponent_Template_app_admin_table_sortChange_11_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function SelectCompanysComponent_Template_app_admin_table_selectionToggle_11_listener($event) {
          return ctx.selectionToggle($event);
        })("viewItem", function SelectCompanysComponent_Template_app_admin_table_viewItem_11_listener($event) {
          return ctx.viewcompany($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("popper", "Add new company here. A company in this case is a vendor that makes monthly subscription, it is the first point of revenue");
        \u0275\u0275advance(6);
        \u0275\u0275property("options", \u0275\u0275pureFunction2(17, _c2, \u0275\u0275pureFunction0(15, _c0), \u0275\u0275pureFunction0(16, _c1)));
        \u0275\u0275advance();
        \u0275\u0275property("selectable", true)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("selections", ctx.listCompose.selections)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction3(23, _c6, \u0275\u0275pureFunction0(20, _c3), \u0275\u0275pureFunction0(21, _c4), \u0275\u0275pureFunction0(22, _c5)))("actions", \u0275\u0275pureFunction0(27, _c7));
      }
    }, dependencies: [
      RouterModule,
      TooltipComponent,
      AdminTableComponent,
      AdminSearchFieldComponent
    ], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectCompanysComponent, { className: "SelectCompanysComponent" });
})();

// projects/admin-panel/src/app/components/pane/auto-tax/view-auto-tax/view-auto-tax.component.ts
var _c02 = () => ({ header: "Company ID", field: "_id", isDefaultField: true, sortable: true });
var _c12 = () => ({ header: "Name", field: "name", sortable: true, removeWhen: "small" });
var _c22 = () => ({ header: "Display Name", field: "displayName", sortable: true, removeWhen: "large" });
var _c32 = (a0, a1, a2) => [a0, a1, a2];
function ViewAutoTaxComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 37)(2, "app-select-companys", 38);
    \u0275\u0275listener("selectedCompanys", function ViewAutoTaxComponent_Conditional_87_Template_app_select_companys_selectedCompanys_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedCompanysIncludes($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("selectedCompanyIds", ctx_r1.viewOneCompose.oneItem.includeOnlyIds);
  }
}
function ViewAutoTaxComponent_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 37)(2, "app-select-companys", 38);
    \u0275\u0275listener("selectedCompanys", function ViewAutoTaxComponent_Conditional_103_Template_app_select_companys_selectedCompanys_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedCompanysExcludes($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("selectedCompanyIds", ctx_r1.viewOneCompose.oneItem.excludeIds);
  }
}
var ViewAutoTaxComponent = class _ViewAutoTaxComponent {
  constructor(router, route, eventbus, apNme, mainBarTitle, windowService, toastr, metaTagService, titleService) {
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.windowService = windowService;
    this.toastr = toastr;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.viewOneCompose = new ViewOneCompose(AutomaticItemTax, { route: ["/auto-tax/update"], eventName: "updateAutomaticItemTax" }, this.router, this.route, this.eventbus);
    this.title = "View";
    this.breadCrumbs = [
      {
        name: "Dashboard",
        icon: "space_dashboard",
        link: "/"
      },
      {
        name: "Automatic Tax List",
        icon: "assessment",
        link: "/auto-tax/list"
      },
      {
        name: "View Auto Tax",
        icon: "visibility"
      }
    ];
    this.actionsIncludes = [
      {
        label: "View",
        icon: "visibility",
        event: (item) => this.viewcompany(item)
      },
      {
        type: "delete",
        label: "Delete",
        icon: "delete",
        event: () => {
          if (!this.viewOneCompose.oneItem) {
            return;
          }
          this.getAffectedCompaniesInclude();
          this.getAffectedCompaniesExclude();
          this.updateAutoTax();
        }
      }
    ];
    this.actionsExcludes = [
      {
        label: "View",
        icon: "visibility",
        event: (item) => this.viewcompany(item)
      },
      {
        type: "delete",
        label: "Delete",
        icon: "delete",
        event: () => {
          if (!this.viewOneCompose.oneItem) {
            return;
          }
          this.getAffectedCompaniesInclude();
          this.getAffectedCompaniesExclude();
          this.updateAutoTax();
        }
      }
    ];
    this.selectCompaniesModalOpenIncludes = false;
    this.selectCompaniesModalOpenExcludes = false;
    this.listComposeIncludes = new ListComposeAdminPanel(Company, this.eventbus, this.windowService, this.toastr);
    this.listComposeExcludes = new ListComposeAdminPanel(Company, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        yield this.viewOneCompose.init();
        this.getAffectedCompaniesInclude();
        this.getAffectedCompaniesExclude();
        this.title = this.viewOneCompose.oneItem?.name || "View";
        this.mainBarTitle.title = "View Auto Tax - " + this.title;
        this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
        this.metaTagService.updateTag({
          name: "description",
          content: `View and manage the details of
        an auto tax to ensure accurate
        information and effective business operations.`
        });
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getAffectedCompaniesInclude() {
    if (!this.viewOneCompose.oneItem) {
      throw new EagleInfoClientError("no auto tax");
    }
    try {
      if (this.viewOneCompose.oneItem.includeOnlyIds.length === 0) {
        return;
      }
      if (this.viewOneCompose.oneItem.includeOnlyIds.length > 1) {
        this.listComposeIncludes.resetPagination();
        const propFilter = {
          _id: this.viewOneCompose.oneItem.includeOnlyIds
        };
        this.listComposeIncludes.filterBy(propFilter);
      }
    } catch (error) {
      FrontendLogger.error(error);
    }
  }
  getAffectedCompaniesExclude() {
    if (!this.viewOneCompose.oneItem) {
      throw new EagleInfoClientError("no auto tax");
    }
    try {
      if (this.viewOneCompose.oneItem.excludeIds.length === 0) {
        return;
      }
      if (this.viewOneCompose.oneItem.excludeIds.length > 1) {
        this.listComposeExcludes.resetPagination();
        const propFilterExclude = {
          _id: this.viewOneCompose.oneItem.excludeIds
        };
        this.listComposeExcludes.filterBy(propFilterExclude);
      }
    } catch (error) {
      FrontendLogger.error(error);
    }
  }
  viewCompany(company) {
    this.viewOneCompose.navigateByBus(["/company/view/" + company.urId], "oneItem", company);
  }
  toogleSelectCompaniesIncludes() {
    this.selectCompaniesModalOpenIncludes = !this.selectCompaniesModalOpenIncludes;
  }
  toogleSelectCompaniesExcludes() {
    this.selectCompaniesModalOpenExcludes = !this.selectCompaniesModalOpenExcludes;
  }
  selectedCompanysIncludes(selections) {
    if (!this.viewOneCompose.oneItem) {
      return;
    }
    this.viewOneCompose.oneItem.includeOnlyIds.push(...selections);
    FrontendLogger.debug("includeOnlyIds ", this.viewOneCompose.oneItem.includeOnlyIds);
    this.selectCompaniesModalOpenIncludes = false;
    this.updateAutoTax();
  }
  selectedCompanysExcludes(selections) {
    if (!this.viewOneCompose.oneItem) {
      return;
    }
    this.viewOneCompose.oneItem.excludeIds.push(...selections);
    this.selectCompaniesModalOpenExcludes = false;
    this.updateAutoTax();
  }
  updateAutoTax() {
    return __async(this, null, function* () {
      if (!this.viewOneCompose.oneItem) {
        return;
      }
      yield this.viewOneCompose.oneItem.update({
        includeOnlyIds: this.viewOneCompose.oneItem.includeOnlyIds,
        excludeIds: this.viewOneCompose.oneItem.excludeIds
      });
      this.toastr.success("Auto Tax updated successfully");
      this.getAffectedCompaniesInclude();
      this.getAffectedCompaniesExclude();
    });
  }
  viewcompany(company) {
    this.navigateByBus(["/company/view/" + company.urId], "oneItem", company);
  }
  ngOnDestroy() {
    this.viewOneCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function ViewAutoTaxComponent_Factory(t) {
      return new (t || _ViewAutoTaxComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewAutoTaxComponent, selectors: [["app-view-auto-tax"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 106, vars: 52, consts: [[1, "grid", "grid-cols-1", "pb-6"], [3, "title", "breadCrumbs"], [1, "!min-h-[100vh]"], [1, "page-content"], [1, "container-fluid", "px-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md"], [1, "card-body"], [1, "flex", "flex-col", "gap-4"], [1, "text-lg", "font-semibold", "flex", "items-center", "gap-2"], [1, "material-icons-outlined", "text-blue-500"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "flex-row", "gap-4", "items-center"], [1, "material-icons-outlined", "text-gray-500"], [1, "text-gray-500", "font-medium"], [1, "font-medium"], [1, "bg-primary", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded", 3, "click"], [1, "bg-green-500", "hover:bg-green-700", "text-white", "font-bold", "py-2", "px-4", "rounded", 3, "click"], [1, "hidden", "md:flex", "justify-center", "items-center", "prevent-print"], ["width", "200", "height", "200", "viewBox", "0 0 200 200", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "20", "y", "20", "width", "160", "height", "160", "rx", "20", "fill", "#E8F0FE"], ["d", "M60 60H140V140H60V60Z", "fill", "#4285F4"], ["d", "M80 80H120V120H80V80Z", "fill", "white"], ["d", "M100 70V130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M70 100H130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L130 70", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L70 70", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L70 130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L130 130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], [1, "grid", "grid-cols-1"], [1, "w-[95%]", "mx-auto"], [1, "p-10"], [1, "btn", "btn-primary", "flex", "items-center", "gap-2", "mt-2", "mb-2", 3, "click"], [1, "material-icons-outlined"], [1, "relative", "!bg-[#fff]"], ["id", "table-content", 1, "mb-5", "overflow-auto", "table-responsive", "!min-h-[calc(100vh-400px)]", "w-[95%]", "mx-auto"], [3, "paginateItems", "openExtras", "sortChange", "viewItem", "selectable", "currentActivePopupId", "dataArr", "selections", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [1, "absolute", "top-1", "max-w-300px", "!bg-[#fff]", "max-h-[500px]"], [3, "selectedCompanys", "selectedCompanyIds"]], template: function ViewAutoTaxComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content")(1, "div", 0);
        \u0275\u0275element(2, "app-admin-back-bar", 1);
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 0)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "h4", 9)(12, "i", 10);
        \u0275\u0275text(13, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Auto Tax Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "i", 13);
        \u0275\u0275text(18, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 14);
        \u0275\u0275text(20, "Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 15);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 12)(24, "i", 13);
        \u0275\u0275text(25, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 14);
        \u0275\u0275text(27, "Person:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 15);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 12)(31, "i", 13);
        \u0275\u0275text(32, "attach_money");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 14);
        \u0275\u0275text(34, "enforcer:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 15);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 12)(38, "i", 13);
        \u0275\u0275text(39, "attach_money");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span", 14);
        \u0275\u0275text(41, "reason:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "span", 15);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 12)(45, "i", 13);
        \u0275\u0275text(46, "attach_money");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span", 14);
        \u0275\u0275text(48, "active:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 15);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 12)(52, "i", 13);
        \u0275\u0275text(53, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "span", 14);
        \u0275\u0275text(55, "Date Added:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span", 15);
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 12)(60, "button", 16);
        \u0275\u0275listener("click", function ViewAutoTaxComponent_Template_button_click_60_listener() {
          return ctx.viewOneCompose.update();
        });
        \u0275\u0275text(61, " Update ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "button", 17);
        \u0275\u0275listener("click", function ViewAutoTaxComponent_Template_button_click_62_listener() {
          return ctx.viewOneCompose.printDocument();
        });
        \u0275\u0275text(63, " Print ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(64, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(65, "svg", 19);
        \u0275\u0275element(66, "rect", 20)(67, "path", 21)(68, "path", 22)(69, "path", 23)(70, "path", 24)(71, "path", 25)(72, "path", 26)(73, "path", 27)(74, "path", 28);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(75, "div", 29)(76, "div", 6)(77, "div", 30)(78, "h4", 31);
        \u0275\u0275text(79, "Companies Associated with Tax");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "p");
        \u0275\u0275text(81, " Note if the list is empty, it means it applies to all items ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "button", 32);
        \u0275\u0275listener("click", function ViewAutoTaxComponent_Template_button_click_82_listener() {
          return ctx.toogleSelectCompaniesIncludes();
        });
        \u0275\u0275elementStart(83, "span");
        \u0275\u0275text(84, "Select Companies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "i", 33);
        \u0275\u0275text(86, "add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(87, ViewAutoTaxComponent_Conditional_87_Template, 3, 1, "div", 34);
        \u0275\u0275elementStart(88, "div", 35)(89, "app-admin-table", 36);
        \u0275\u0275listener("paginateItems", function ViewAutoTaxComponent_Template_app_admin_table_paginateItems_89_listener($event) {
          return ctx.listComposeIncludes.paginateItems($event);
        })("openExtras", function ViewAutoTaxComponent_Template_app_admin_table_openExtras_89_listener($event) {
          return ctx.listComposeIncludes.openExtras($event);
        })("sortChange", function ViewAutoTaxComponent_Template_app_admin_table_sortChange_89_listener($event) {
          return ctx.listComposeIncludes.sortBy($event.field, $event.direction);
        })("viewItem", function ViewAutoTaxComponent_Template_app_admin_table_viewItem_89_listener($event) {
          return ctx.viewcompany($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275text(90, " x ");
        \u0275\u0275elementStart(91, "div", 29)(92, "div", 6)(93, "div", 30)(94, "h4", 31);
        \u0275\u0275text(95, "Companies Excluded from Tax");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "p");
        \u0275\u0275text(97, " Note if the list is empty, it means it applies to all items ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "button", 32);
        \u0275\u0275listener("click", function ViewAutoTaxComponent_Template_button_click_98_listener() {
          return ctx.toogleSelectCompaniesExcludes();
        });
        \u0275\u0275elementStart(99, "span");
        \u0275\u0275text(100, "Select Companies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "i", 33);
        \u0275\u0275text(102, "add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(103, ViewAutoTaxComponent_Conditional_103_Template, 3, 1, "div", 34);
        \u0275\u0275elementStart(104, "div", 35)(105, "app-admin-table", 36);
        \u0275\u0275listener("paginateItems", function ViewAutoTaxComponent_Template_app_admin_table_paginateItems_105_listener($event) {
          return ctx.listComposeExcludes.paginateItems($event);
        })("openExtras", function ViewAutoTaxComponent_Template_app_admin_table_openExtras_105_listener($event) {
          return ctx.listComposeExcludes.openExtras($event);
        })("sortChange", function ViewAutoTaxComponent_Template_app_admin_table_sortChange_105_listener($event) {
          return ctx.listComposeExcludes.sortBy($event.field, $event.direction);
        })("viewItem", function ViewAutoTaxComponent_Template_app_admin_table_viewItem_105_listener($event) {
          return ctx.viewcompany($event);
        });
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance(20);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.name) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.percentage) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.enforcer) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.reason) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.active) ? "Yes" : "No", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 36, ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.createdAt), " ");
        \u0275\u0275advance(30);
        \u0275\u0275conditional(87, ctx.selectCompaniesModalOpenIncludes && ctx.viewOneCompose.oneItem ? 87 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("selectable", false)("currentActivePopupId", ctx.listComposeIncludes.currentActivePopupId)("dataArr", ctx.listComposeIncludes.dataArr)("selections", ctx.listComposeIncludes.selections)("limit", ctx.listComposeIncludes.limit)("offset", ctx.listComposeIncludes.offset)("count", ctx.listComposeIncludes.count)("showingUpper", ctx.listComposeIncludes.showingUpper)("showingLower", ctx.listComposeIncludes.showingLower)("currentIndex", ctx.listComposeIncludes.currentIndex)("loading", ctx.listComposeIncludes.loading)("columns", \u0275\u0275pureFunction3(41, _c32, \u0275\u0275pureFunction0(38, _c02), \u0275\u0275pureFunction0(39, _c12), \u0275\u0275pureFunction0(40, _c22)))("actions", ctx.actionsIncludes);
        \u0275\u0275advance(14);
        \u0275\u0275conditional(103, ctx.selectCompaniesModalOpenExcludes && ctx.viewOneCompose.oneItem ? 103 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("selectable", false)("currentActivePopupId", ctx.listComposeExcludes.currentActivePopupId)("dataArr", ctx.listComposeExcludes.dataArr)("selections", ctx.listComposeExcludes.selections)("limit", ctx.listComposeExcludes.limit)("offset", ctx.listComposeExcludes.offset)("count", ctx.listComposeExcludes.count)("showingUpper", ctx.listComposeExcludes.showingUpper)("showingLower", ctx.listComposeExcludes.showingLower)("currentIndex", ctx.listComposeExcludes.currentIndex)("loading", ctx.listComposeExcludes.loading)("columns", \u0275\u0275pureFunction3(48, _c32, \u0275\u0275pureFunction0(45, _c02), \u0275\u0275pureFunction0(46, _c12), \u0275\u0275pureFunction0(47, _c22)))("actions", ctx.actionsExcludes);
      }
    }, dependencies: [
      RouterModule,
      AdminBackBarComponent,
      DatePipe,
      AdminPageContentComponent,
      SelectCompanysComponent,
      AdminTableComponent
    ], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewAutoTaxComponent, { className: "ViewAutoTaxComponent" });
})();
export {
  ViewAutoTaxComponent
};
//# sourceMappingURL=chunk-4OOSPV5A.js.map
