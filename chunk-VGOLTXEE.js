import {
  CompanyListBase
} from "./chunk-NEEP2B3Y.js";
import {
  AdminTopBarComponent
} from "./chunk-RLWZ2B5Z.js";
import {
  AdminDateFilterFieldComponent
} from "./chunk-JXJWYDSB.js";
import "./chunk-V2FCV2CW.js";
import {
  AdminModalComponent
} from "./chunk-X7WNMWNF.js";
import {
  AdminSearchFieldComponent
} from "./chunk-A3XL6Y7L.js";
import {
  AdminTableComponent
} from "./chunk-EWIFM267.js";
import "./chunk-TFHAZXT7.js";
import "./chunk-ANHFC4IG.js";
import "./chunk-3B3O76HS.js";
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
  Company,
  FrontendLogger
} from "./chunk-MC4HAW4O.js";
import {
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  EventEmitter,
  Meta,
  NgClass,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/company-related/company/company-cards/company-cards.component.ts
var _c0 = (a0, a1) => ({ "text-green-700 bg-green-500/20": a0, "text-red-700 bg-red-500/20": a1 });
var CompanyCardsComponent = class _CompanyCardsComponent {
  constructor() {
    this.filterBy = new EventEmitter();
    this.companysTotal = 0;
    this.activCompanysTotal = 0;
    this.inActivCompanysTotal = 0;
    this.recentlyAdded = 0;
    this.totalCompanysGrowth = 0;
    this.activeCompanysGrowth = 0;
    this.inActiveCompanysGrowth = 0;
    this.thisMonthDate = new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 0);
  }
  ngOnInit() {
    this.getAllCompaniesTotal();
    this.getActiveCompaniesTotal();
    this.getInActiveCompaniesTotal();
    this.getLatestCompaniesTotal();
    this.getTotalCompanyGrowthDiff();
  }
  getAllCompaniesTotal() {
    return __async(this, null, function* () {
      try {
        const { count } = yield Company.filterAll({
          returnEmptyArray: true
        });
        this.companysTotal = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getActiveCompaniesTotal() {
    return __async(this, null, function* () {
      try {
        const { count } = yield Company.filterAll({
          propFilter: {
            xibi: true
          },
          returnEmptyArray: true
        });
        this.activCompanysTotal = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getInActiveCompaniesTotal() {
    return __async(this, null, function* () {
      try {
        const { count } = yield Company.filterAll({
          propFilter: {
            blocked: true
          },
          returnEmptyArray: true
        });
        this.inActivCompanysTotal = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getLatestCompaniesTotal() {
    return __async(this, null, function* () {
      try {
        const { count } = yield Company.filterAll({
          propFilter: {
            blocked: false
          },
          propSort: {
            createdAt: "desc"
          },
          comparisonFilter: [
            {
              field: "createdAt",
              fieldValue: this.thisMonthDate,
              operator: "gte"
            }
          ],
          returnEmptyArray: true
        });
        this.recentlyAdded = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getTotalCompanyGrowthDiff() {
    return __async(this, null, function* () {
      try {
        const lastMonth = yield Company.filterAll({
          comparisonFilter: [
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth() - 1, 1),
              operator: "gte"
            },
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 0),
              operator: "lte"
            }
          ]
        });
        const thisMonth = yield Company.filterAll({
          comparisonFilter: [
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1),
              operator: "gte"
            },
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth() + 1, 0),
              operator: "lte"
            }
          ]
        });
        this.totalCompanysGrowth = (thisMonth.count - lastMonth.count) / (lastMonth.count || 1) * 100 || 0;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getActiveCompanyGrowthDiff() {
    return __async(this, null, function* () {
      try {
        const lastMonth = yield Company.filterAll({
          propFilter: {
            blocked: false
          },
          comparisonFilter: [
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth() - 1, 1),
              operator: "gte"
            },
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 0),
              operator: "lte"
            }
          ]
        });
        const thisMonth = yield Company.filterAll({
          propFilter: {
            blocked: false
          },
          comparisonFilter: [
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1),
              operator: "gte"
            },
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth() + 1, 0),
              operator: "lte"
            }
          ]
        });
        this.activeCompanysGrowth = (thisMonth.count - lastMonth.count) / (lastMonth.count || 1) * 100 || 0;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getInActiveCompanyGrowthDiff() {
    return __async(this, null, function* () {
      try {
        const lastMonth = yield Company.filterAll({
          propFilter: {
            blocked: true
          },
          comparisonFilter: [
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth() - 1, 1),
              operator: "gte"
            },
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 0),
              operator: "lte"
            }
          ]
        });
        const thisMonth = yield Company.filterAll({
          propFilter: {
            blocked: true
          },
          comparisonFilter: [
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1),
              operator: "gte"
            },
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth() + 1, 0),
              operator: "lte"
            }
          ]
        });
        this.inActiveCompanysGrowth = (thisMonth.count - lastMonth.count) / (lastMonth.count || 1) * 100 || 0;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  static {
    this.\u0275fac = function CompanyCardsComponent_Factory(t) {
      return new (t || _CompanyCardsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyCardsComponent, selectors: [["app-company-cards"]], outputs: { filterBy: "filterBy" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 64, vars: 23, consts: [["aria-label", "Companies Overview Cards", 1, "grid", "grid-cols-1", "gap-6", "gap-y-0", "2xl:gap-6", "md:grid-cols-2", "2xl:grid-cols-4"], [3, "popper"], ["role", "button", "aria-label", "View Companies", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], [1, "card-body", "relative", "z-10", "p-5"], [1, "flex", "justify-between", "items-center", "mb-3"], [1, "flex", "items-center", "space-x-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-green-500"], ["d", "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"], [1, "text-xs", "text-gray-500", "uppercase", "tracking-wider"], ["id", "company-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], [1, "flex", "items-center", "justify-between"], [1, "font-bold", "text-2xl"], ["data-target", "150", "aria-label", "Total number of companies", 1, "counter-value"], [1, "text-[10px]", "py-[1px]", "px-2", "rounded-full", "font-medium", 3, "ngClass"], ["role", "button", "aria-label", "View Active Companies", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-blue-500"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.48.42-2.86 1.15-4.04l11.89 11.89C14.86 21.58 13.48 22 12 22zm6.85-5.96L6.96 5.15C8.14 4.42 9.52 4 11 4c4.41 0 8 3.59 8 8 0 1.48-.42 2.86-1.15 4.04z"], ["id", "active-company-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "120", "aria-label", "Number of active companies", 1, "counter-value"], ["role", "button", "aria-label", "View Inactive Companies", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-red-500"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"], ["d", "M11 7h2v2h-2zm0 4h2v6h-2z", "fill-opacity", "0.7"], ["id", "inactive-company-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "30", "aria-label", "Number of inactive companies", 1, "counter-value"], ["role", "button", "aria-label", "View Recently Added Companies", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-purple-500"], ["d", "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L8 12H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"], ["id", "recent-company-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "5", "aria-label", "Number of recently added companies", 1, "counter-value"]], template: function CompanyCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "lib-tooltip", 1)(2, "div", 2);
        \u0275\u0275listener("click", function CompanyCardsComponent_Template_div_click_2_listener() {
          return ctx.filterBy.emit({});
        })("keydown.enter", function CompanyCardsComponent_Template_div_keydown_enter_2_listener() {
          return ctx.filterBy.emit({});
        });
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 6);
        \u0275\u0275element(7, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "span", 8);
        \u0275\u0275text(9, "All");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 10)(12, "h4", 11)(13, "span", 12);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "span", 13);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(17, "lib-tooltip", 1)(18, "div", 14);
        \u0275\u0275listener("click", function CompanyCardsComponent_Template_div_click_18_listener() {
          return ctx.filterBy.emit({ propFilter: { blocked: false } });
        })("keydown.enter", function CompanyCardsComponent_Template_div_keydown_enter_18_listener() {
          return ctx.filterBy.emit({ propFilter: { blocked: false } });
        });
        \u0275\u0275elementStart(19, "div", 3)(20, "div", 4)(21, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(22, "svg", 15);
        \u0275\u0275element(23, "path", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "span", 8);
        \u0275\u0275text(25, "Active");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(26, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 10)(28, "h4", 11)(29, "span", 18);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "span", 13);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(33, "lib-tooltip", 1)(34, "div", 19);
        \u0275\u0275listener("click", function CompanyCardsComponent_Template_div_click_34_listener() {
          return ctx.filterBy.emit({ propFilter: { blocked: true } });
        })("keydown.enter", function CompanyCardsComponent_Template_div_keydown_enter_34_listener() {
          return ctx.filterBy.emit({ propFilter: { blocked: true } });
        });
        \u0275\u0275elementStart(35, "div", 3)(36, "div", 4)(37, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(38, "svg", 20);
        \u0275\u0275element(39, "path", 21)(40, "path", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(41, "span", 8);
        \u0275\u0275text(42, "Inactive");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(43, "div", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 10)(45, "h4", 11)(46, "span", 24);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "span", 13);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(50, "lib-tooltip", 1)(51, "div", 25);
        \u0275\u0275listener("click", function CompanyCardsComponent_Template_div_click_51_listener() {
          return ctx.filterBy.emit({ propSort: { createdAt: "desc" }, comparisonFilter: [{ field: "createdAt", fieldValue: ctx.thisMonthDate, operator: "gte" }] });
        })("keydown.enter", function CompanyCardsComponent_Template_div_keydown_enter_51_listener() {
          return ctx.filterBy.emit({ propSort: { createdAt: "desc" }, comparisonFilter: [{ field: "createdAt", fieldValue: ctx.thisMonthDate, operator: "gte" }] });
        });
        \u0275\u0275elementStart(52, "div", 3)(53, "div", 4)(54, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(55, "svg", 26);
        \u0275\u0275element(56, "path", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(57, "span", 8);
        \u0275\u0275text(58, "Recent Additions");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(59, "div", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 10)(61, "h4", 11)(62, "span", 29);
        \u0275\u0275text(63);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("popper", "Click to get all companies");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.companysTotal, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(14, _c0, ctx.totalCompanysGrowth > 0, ctx.totalCompanysGrowth < 0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.totalCompanysGrowth, " ");
        \u0275\u0275advance();
        \u0275\u0275property("popper", "Click to get all active companies");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.activCompanysTotal, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(17, _c0, ctx.activeCompanysGrowth > 0, ctx.activeCompanysGrowth < 0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.activeCompanysGrowth, " ");
        \u0275\u0275advance();
        \u0275\u0275property("popper", "Click to get all inactive companies");
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1(" ", ctx.inActivCompanysTotal, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(20, _c0, ctx.inActiveCompanysGrowth > 0, ctx.inActiveCompanysGrowth < 0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.inActiveCompanysGrowth, " ");
        \u0275\u0275advance();
        \u0275\u0275property("popper", "Click to get companies add this month");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.recentlyAdded, " ");
      }
    }, dependencies: [
      RouterModule,
      NgClass,
      TooltipComponent
    ], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyCardsComponent, { className: "CompanyCardsComponent" });
})();

// projects/admin-panel/src/app/components/pane/company-related/company/company-list/company-list.component.ts
var _c02 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Company List", icon: "account_balance" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "Name", value: "name" });
var _c4 = () => ({ label: "Display Name", value: "displayName" });
var _c5 = () => ({ header: "Company ID", field: "_id", isDefaultField: true, sortable: true });
var _c6 = () => ({ header: "Name", field: "name", sortable: true, removeWhen: "small" });
var _c7 = () => ({ header: "Date Added", field: "createdAt", sortable: true, removeWhen: "medium" });
var _c8 = () => ({ header: "Display Name", field: "displayName", sortable: true, removeWhen: "large" });
var _c9 = () => ({ header: "Removed", field: "left", isBooleanValue: true, sortable: true, removeWhen: "extra-large" });
var _c10 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function CompanyListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "app-admin-date-filter-field", 11);
    \u0275\u0275listener("filter", function CompanyListComponent_Conditional_8_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function CompanyListComponent_Conditional_8_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function CompanyListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "lib-tooltip", 12)(2, "button", 13);
    \u0275\u0275listener("click", function CompanyListComponent_Conditional_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.openDeleteManyModal("Delete Companies", "Are You Sure You Want To Selected Companies ?"));
    });
    \u0275\u0275elementStart(3, "i", 14);
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Delete All");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("popper", "Add new company here.");
  }
}
var CompanyListComponent = class _CompanyListComponent extends CompanyListBase {
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
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.\u0275fac = function CompanyListComponent_Factory(t) {
      return new (t || _CompanyListComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyListComponent, selectors: [["app-company-list"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 12, vars: 46, consts: [["title", "Company List", 3, "breadCrumbs"], [3, "filterBy"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "justify-between", "mb-4"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [1, "absolute", "right-0", "top-0"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "currentActivePopupId", "dataArr", "selections", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"], [3, "popper"], [1, "mb-6", "btn", "btn-soft-danger", "flex", "items-center", "justify-center", 3, "click"], [1, "material-icons-outlined", "mr-2", "text-red"]], template: function CompanyListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "app-company-cards", 1);
        \u0275\u0275listener("filterBy", function CompanyListComponent_Template_app_company_cards_filterBy_2_listener($event) {
          return ctx.listCompose.onFilterProps($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "app-admin-search-field", 6);
        \u0275\u0275listener("filter", function CompanyListComponent_Template_app_admin_search_field_filter_7_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, CompanyListComponent_Conditional_8_Template, 2, 0, "div", 7)(9, CompanyListComponent_Conditional_9_Template, 7, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "app-admin-table", 9);
        \u0275\u0275listener("paginateItems", function CompanyListComponent_Template_app_admin_table_paginateItems_10_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function CompanyListComponent_Template_app_admin_table_openExtras_10_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function CompanyListComponent_Template_app_admin_table_sortChange_10_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function CompanyListComponent_Template_app_admin_table_selectionToggle_10_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function CompanyListComponent_Template_app_admin_table_viewItem_10_listener($event) {
          return ctx.viewcompany($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "app-admin-modal", 10);
        \u0275\u0275listener("closed", function CompanyListComponent_Template_app_admin_modal_closed_11_listener() {
          return ctx.listCompose.toggleModal();
        })("confirm", function CompanyListComponent_Template_app_admin_modal_confirm_11_listener($event) {
          return ctx.listCompose.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(27, _c2, \u0275\u0275pureFunction0(25, _c02), \u0275\u0275pureFunction0(26, _c1)));
        \u0275\u0275advance(6);
        \u0275\u0275property("options", \u0275\u0275pureFunction2(32, _c2, \u0275\u0275pureFunction0(30, _c3), \u0275\u0275pureFunction0(31, _c4)));
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.listCompose.selections.length === 0 ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.listCompose.selections.length > 0 ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", true)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("selections", ctx.listCompose.selections)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction5(40, _c10, \u0275\u0275pureFunction0(35, _c5), \u0275\u0275pureFunction0(36, _c6), \u0275\u0275pureFunction0(37, _c7), \u0275\u0275pureFunction0(38, _c8), \u0275\u0275pureFunction0(39, _c9)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.listCompose.showModal)("title", ctx.listCompose.modalTitle)("message", ctx.listCompose.modalMsg)("cancelButton", ctx.listCompose.modalCancelButton)("cancelText", ctx.listCompose.modalCancelText)("confirmText", ctx.listCompose.modalConfirmText)("confirmButon", ctx.listCompose.modalConfirmButton);
      }
    }, dependencies: [
      RouterModule,
      AdminModalComponent,
      CompanyCardsComponent,
      TooltipComponent,
      AdminTableComponent,
      AdminPageContentComponent,
      AdminSearchFieldComponent,
      AdminDateFilterFieldComponent,
      AdminTopBarComponent
    ], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyListComponent, { className: "CompanyListComponent" });
})();
export {
  CompanyListComponent
};
//# sourceMappingURL=chunk-VGOLTXEE.js.map
