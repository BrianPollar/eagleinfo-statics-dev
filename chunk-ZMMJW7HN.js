import {
  AdminBreadcrumbComponent
} from "./chunk-O454IXIK.js";
import {
  AdminPageContentComponent
} from "./chunk-LWX77LXW.js";
import {
  scrollToTop
} from "./chunk-G2DKIAK6.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import {
  TooltipComponent
} from "./chunk-4KKGHO4P.js";
import "./chunk-UIKF3Q7X.js";
import "./chunk-RMIF5JQ2.js";
import "./chunk-YESK3NVV.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-H6XV6YF3.js";
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import {
  User
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  Company,
  CompanySubscription,
  EagleInfoClientError,
  FrontendLogger,
  Invoice,
  Item,
  MailUser
} from "./chunk-MC4HAW4O.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  CurrencyPipe,
  Meta,
  NgClass,
  Title,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/dashboard/home-comps/company-analytics/company-analytics.component.ts
var CompanyAnalyticsComponent = class _CompanyAnalyticsComponent {
  constructor(currencyService) {
    this.currencyService = currencyService;
    this.totalCompanies = 0;
  }
  ngOnInit() {
    this.getTotalCompanys();
    this.getHigehestSellingItem();
  }
  getTotalCompanys() {
    return __async(this, null, function* () {
      try {
        const { count } = yield Company.filterAll({
          returnEmptyArray: true
        });
        this.totalCompanies = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getHigehestSellingItem() {
    return __async(this, null, function* () {
      try {
        const { dataArr } = yield Item.filterAll({
          offset: 0,
          limit: 1,
          propSort: {
            soldCount: "desc"
          }
        });
        if (dataArr[0]) {
          this.highestSellingItem = dataArr[0];
          this.getHigehestSellingCompany();
        }
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getHigehestSellingCompany() {
    return __async(this, null, function* () {
      if (!this.highestSellingItem?.company) {
        throw new EagleInfoClientError("highestSellingItem does not have a company");
      }
      try {
        const company = yield Company.getOne(this.highestSellingItem?.company);
        if (company) {
          this.highestSellingCompany = company;
        }
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  static {
    this.\u0275fac = function CompanyAnalyticsComponent_Factory(t) {
      return new (t || _CompanyAnalyticsComponent)(\u0275\u0275directiveInject(CurrencyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyAnalyticsComponent, selectors: [["app-company-analytics"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 7, consts: [[1, "!min-w-full", "card", "!border", "!border-default-white-shadecard-h-100", "rounded-2xl", "!min-h-[500px]", "border", "!border-default-white-shade"], [1, "card-body"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-15", "font-semibold"], [1, "flex", "items-center", "space-x-2"], ["type", "button", 1, "btn", "btn-soft-primary", "btn-sm"], ["type", "button", 1, "btn", "btn-soft-secondary", "btn-sm"], [1, "grid", "grid-rows-3", "md:grid-rows-1", "md:grid-cols-3", "gap-4", "pt-10"], [1, "!bg-secondary", "p-4", "rounded-lg", "text-center"], [1, "text-white", "mb-2"], [1, "text-xl", "font-bold", "text-white"], [1, "text-sm", "text-white"], [1, "bg-gray-100", "p-4", "rounded-lg", "text-center"], [1, "mb-2", "text-gray-500"], [1, "text-xl", "font-bold", "text-primary"], [1, "text-sm", "text-gray-500"], [1, "bg-secondary", "p-4", "rounded-lg", "text-center"]], template: function CompanyAnalyticsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        \u0275\u0275text(4, "Company Performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
        \u0275\u0275text(7, " This Month ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 6);
        \u0275\u0275text(9, " This Year ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9);
        \u0275\u0275text(13, "Top Selling Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 12)(19, "div", 13);
        \u0275\u0275text(20, "Total Companies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 14);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 15);
        \u0275\u0275text(24, "Active this month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 16)(26, "div", 9);
        \u0275\u0275text(27, "Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 10);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 11);
        \u0275\u0275text(32, "From top companies");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate1(" ", (ctx.highestSellingCompany == null ? null : ctx.highestSellingCompany.name) || "N/A", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", (ctx.highestSellingItem == null ? null : ctx.highestSellingItem.soldCount) || 0, " items sold ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.totalCompanies || 0, " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 4, 0, ctx.currencyService.currency), " ");
      }
    }, dependencies: [
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      CurrencyPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyAnalyticsComponent, { className: "CompanyAnalyticsComponent" });
})();

// projects/admin-panel/src/app/components/pane/dashboard/home-comps/dash-cards/dash-cards.component.ts
var _c0 = (a0, a1) => ({ "text-green-700 bg-green-500/20": a0, "text-red-700 bg-red-500/20": a1 });
var DashCardsComponent = class _DashCardsComponent {
  constructor(currencyService, router) {
    this.currencyService = currencyService;
    this.router = router;
    this.countCompanys = 0;
    this.usersCount = 0;
    this.companys = [];
    this.loadingCompanys = false;
    this.companysNums = [];
    this.labelsChaart2 = [];
    this.loadingUsers = false;
    this.mailAccountCount = 0;
    this.companysGrowth = 0;
    this.usersGrowth = 0;
    this.userGrowth = "";
  }
  ngOnInit() {
    this.getCompanys();
    this.initCompanyChat();
    this.getCompanyGrowthDiff();
    this.getUsers();
    this.initUserChat();
    this.getMails();
    this.getUserGrowthDiff();
  }
  navigate(route) {
    this.router.navigate([route]);
  }
  getCompanys() {
    return __async(this, null, function* () {
      try {
        this.loadingCompanys = true;
        this.getCompanyErr = "";
        const { count, dataArr } = yield Company.filterAll({ returnEmptyArray: true });
        this.loadingCompanys = false;
        if (this.getCompanyErr) {
          return;
        }
        this.countCompanys = count;
        this.companys = dataArr;
        this.companysNums = this.companys.map((val, index) => index);
        this.labelsChaart2 = this.companys.map((val, index) => index.toString());
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getUsers() {
    return __async(this, null, function* () {
      try {
        this.loadingUsers = true;
        this.getUsersErr = "";
        const { count } = yield User.filterAll({
          returnEmptyArray: true
        });
        this.loadingUsers = false;
        if (this.getUsersErr) {
          return;
        }
        this.usersCount = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getMails() {
    return __async(this, null, function* () {
      try {
        const mails = yield MailUser.getAll();
        this.mailAccountCount = mails.length;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getCompanyGrowthDiff() {
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
        this.companysGrowth = (thisMonth.count - lastMonth.count) / (lastMonth.count || 1) * 100 || 0;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getUserGrowthDiff() {
    return __async(this, null, function* () {
      try {
        const lastMonth = yield User.filterAll({
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
        const thisMonth = yield User.filterAll({
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
        this.usersGrowth = (thisMonth.count - lastMonth.count) / (lastMonth.count || 1) * 100 || 0;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  initCompanyChat() {
    return __async(this, null, function* () {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const promises = months.map((month, index) => Company.filterAll({
        comparisonFilter: [
          {
            field: "createdAt",
            fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), index, 1),
            operator: "gte"
          },
          {
            field: "createdAt",
            fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), index + 1, 0),
            operator: "lte"
          }
        ]
      }));
      const all = yield Promise.all(promises);
      const data = all.map((val) => val.dataArr.length);
      const options = {
        series: [{
          data
        }],
        chart: {
          type: "line",
          height: 50,
          sparkline: {
            enabled: true
          }
        },
        colors: ["#5156be"],
        stroke: {
          curve: "smooth",
          width: 2
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function() {
                return "";
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      const chart = new ApexCharts(document.querySelector("#company-chart"), options);
      chart.render();
    });
  }
  initUserChat() {
    return __async(this, null, function* () {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const promises = months.map((month, index) => User.filterAll({
        comparisonFilter: [
          {
            field: "createdAt",
            fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), index, 1),
            operator: "gte"
          },
          {
            field: "createdAt",
            fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), index + 1, 0),
            operator: "lte"
          }
        ]
      }));
      const all = yield Promise.all(promises);
      const data = all.map((val) => val.dataArr.length);
      const options = {
        series: [{
          data
        }],
        chart: {
          type: "line",
          height: 50,
          sparkline: {
            enabled: true
          }
        },
        colors: ["#4CAF50", "#2196F3", "#FF9800"],
        stroke: {
          curve: "smooth",
          width: 2
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function() {
                return "";
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      const chart = new ApexCharts(document.querySelector("#user-chart"), options);
      chart.render();
    });
  }
  static {
    this.\u0275fac = function DashCardsComponent_Factory(t) {
      return new (t || _DashCardsComponent)(\u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashCardsComponent, selectors: [["app-dash-cards"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 13, consts: [["aria-label", "Dashboard Overview Cards", 1, "grid", "grid-cols-1", "gap-6", "gap-y-0", "2xl:gap-6", "md:grid-cols-2", "2xl:grid-cols-3", "mx-auto", "justify-center", "align-center"], ["role", "button", "aria-label", "View Companies", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", "border", "!border-default-white-shade", 3, "click", "keydown.enter"], [1, "card-body", "relative", "z-10", "p-5"], [1, "flex", "justify-between", "items-center", "mb-3"], [1, "flex", "items-center", "space-x-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-green-500"], ["d", "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"], [1, "text-xs", "text-gray-500", "uppercase", "tracking-wider"], ["id", "company-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], [1, "flex", "items-center", "justify-between"], [1, "font-bold", "text-2xl"], ["data-target", "865.2", "aria-label", "Total number of companies", 1, "counter-value"], [1, "text-[10px]", "py-[1px]", "px-2", "rounded-full", "font-medium", 3, "ngClass"], ["role", "button", "aria-label", "View Users", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", "border", "!border-default-white-shade", 3, "click", "keydown.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-red-500"], ["d", "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"], ["id", "user-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "865.2", "aria-label", "Total number of users", 1, "counter-value"], ["role", "button", "aria-label", "View Mail Accounts", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", "border", "!border-default-white-shade", 3, "click", "keydown.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-purple-500"], ["d", "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"], [1, "w-12", "h-12", "opacity-50"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "text-green-500"], ["fill", "currentColor", "d", "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"], ["data-target", "865.2", "aria-label", "Total number of mail accounts", 1, "counter-value"]], template: function DashCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275listener("click", function DashCardsComponent_Template_div_click_1_listener() {
          return ctx.navigate("/company");
        })("keydown.enter", function DashCardsComponent_Template_div_keydown_enter_1_listener() {
          return ctx.navigate("/company");
        });
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(5, "svg", 5);
        \u0275\u0275element(6, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(7, "span", 7);
        \u0275\u0275text(8, "Companies");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9)(11, "h4", 10)(12, "span", 11);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "span", 12);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(16, "div", 13);
        \u0275\u0275listener("click", function DashCardsComponent_Template_div_click_16_listener() {
          return ctx.navigate("/users");
        })("keydown.enter", function DashCardsComponent_Template_div_keydown_enter_16_listener() {
          return ctx.navigate("/users");
        });
        \u0275\u0275elementStart(17, "div", 2)(18, "div", 3)(19, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(20, "svg", 14);
        \u0275\u0275element(21, "path", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(22, "span", 7);
        \u0275\u0275text(23, "Total Users");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(24, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 9)(26, "h4", 10)(27, "span", 17);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "span", 12);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "div", 18);
        \u0275\u0275listener("click", function DashCardsComponent_Template_div_click_31_listener() {
          return ctx.navigate("/mail");
        })("keydown.enter", function DashCardsComponent_Template_div_keydown_enter_31_listener() {
          return ctx.navigate("/mail");
        });
        \u0275\u0275elementStart(32, "div", 2)(33, "div", 3)(34, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(35, "svg", 19);
        \u0275\u0275element(36, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(37, "span", 7);
        \u0275\u0275text(38, "Mail Accounts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 21);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(40, "svg", 22);
        \u0275\u0275element(41, "path", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(42, "div", 9)(43, "h4", 10)(44, "span", 24);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.countCompanys, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c0, ctx.companysGrowth > 0, ctx.companysGrowth < 0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.companysGrowth, " ");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.usersCount, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c0, ctx.usersGrowth > 0, ctx.usersGrowth < 0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.usersGrowth, " ");
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate1(" ", ctx.mailAccountCount, " accounts ");
      }
    }, dependencies: [
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      NgClass
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashCardsComponent, { className: "DashCardsComponent" });
})();

// projects/admin-panel/src/app/components/pane/dashboard/home-comps/ecommerce-revenue-analytics/ecommerce-revenue-analytics.component.ts
var _c02 = (a0) => ({ "bg-violet-500 text-white hover:!bg-violet-600 focus:!bg-violet-600": a0 });
var EcommerceRevenueAnalyticsComponent = class _EcommerceRevenueAnalyticsComponent {
  constructor() {
    this.lastUpdated = /* @__PURE__ */ new Date();
    this.thisMonthNumber = (/* @__PURE__ */ new Date()).getMonth();
    this.currentActivePeriod = "thisYear";
  }
  ngOnInit() {
    this.getYearlyEcomerceSalesAnalytics();
  }
  getEcomerceSalesAnalyticsSolo(startDate, endDate) {
    const filter = {
      comparisonFilter: [
        {
          field: "createdAt",
          fieldValue: startDate,
          operator: "gte"
        },
        {
          field: "createdAt",
          fieldValue: endDate,
          operator: "lte"
        }
      ]
    };
    return Invoice.getEcommerceSalesAnalytics(filter);
  }
  getMonthlyEcomerceSalesAnalytics(month) {
    return __async(this, null, function* () {
      const daysInMonth = Array.from(Array(new Date((/* @__PURE__ */ new Date()).getFullYear(), month + 1, 0).getDate()).keys()).map((x) => x + 1);
      const promises = daysInMonth.map((day) => this.getEcomerceSalesAnalyticsSolo(new Date((/* @__PURE__ */ new Date()).getFullYear(), month, day), new Date((/* @__PURE__ */ new Date()).getFullYear(), month, day + 1)));
      const all = yield Promise.all(promises);
      const totalAmountData = all.map((val) => val.totalSales);
      const totalTaxData = all.map(() => 0);
      const countData = all.map((val) => val.count);
      const days = daysInMonth.map((day) => day.toString());
      this.currentActivePeriod = this.thisMonthNumber === month ? "thisMonth" : "lastMonth";
      this.renderEcomerceChat(totalAmountData, totalTaxData, countData, days);
    });
  }
  getYearlyEcomerceSalesAnalytics() {
    return __async(this, null, function* () {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const promises = months.map((month, index) => this.getEcomerceSalesAnalyticsSolo(new Date((/* @__PURE__ */ new Date()).getFullYear(), index, 1), new Date((/* @__PURE__ */ new Date()).getFullYear(), index + 1, 1)));
      const all = yield Promise.all(promises);
      const totalAmountData = all.map((val) => val.totalSales);
      const totalTaxData = all.map(() => 0);
      const countData = all.map((val) => val.count);
      this.currentActivePeriod = "thisYear";
      this.renderEcomerceChat(totalAmountData, totalTaxData, countData, months);
    });
  }
  renderEcomerceChat(salesData, taxData, countData, categories) {
    const options = {
      series: [
        {
          name: "Sales",
          data: salesData
        },
        {
          name: "Tax",
          data: taxData
        },
        {
          name: "Count",
          data: countData
        }
      ],
      chart: {
        type: "bar",
        height: 400,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: "20%"
        }
      },
      colors: ["#4CAF50", "#2196F3", "#FF9800"],
      fill: {
        opacity: 1
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      yaxis: {
        labels: {
          formatter: function(y) {
            return y.toFixed(0) + "%";
          }
        }
      },
      xaxis: {
        categories,
        labels: {
          rotate: -90
        }
      }
    };
    if (this.chart) {
      this.chart.updateOptions(options);
      return;
    }
    this.chart = new ApexCharts(document.querySelector("#e-sale-analytics"), options);
    this.chart.render();
  }
  static {
    this.\u0275fac = function EcommerceRevenueAnalyticsComponent_Factory(t) {
      return new (t || _EcommerceRevenueAnalyticsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EcommerceRevenueAnalyticsComponent, selectors: [["app-ecommerce-revenue-analytics"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 9, consts: [[1, "col-span-12", "lg:col-span-8"], [1, "card", "!border", "!border-default-white-shadecard-h-100", "rounded-2xl", "!min-h-[500px]", "border", "!border-default-white-shade"], [1, "card-body"], [1, "flex", "flex-wrap", "items-center", "mb-6"], [1, "mr-2", "text-15"], [1, "flex", "gap-1", "ltr:ml-auto", "rtl:mr-auto"], ["type", "button", 1, "px-2", "py-1", "border-transparent", "btn", "text-13", "bg-gray-50/50", "hover:bg-gray-500", "hover:text-white", "focus:bg-gray-500", "focus:text-white", 3, "click", "ngClass"], [1, "grid", "grid-cols-12", "2xl:gap-6"], [1, "col-span-12", "lg:col-span-12"], ["id", "e-sale-analytics", "data-colors", '["#5156be", "#34c38f"]', 1, "apex-charts"]], template: function EcommerceRevenueAnalyticsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "h5", 4);
        \u0275\u0275text(6, "Ecommerce Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
        \u0275\u0275listener("click", function EcommerceRevenueAnalyticsComponent_Template_button_click_8_listener() {
          return ctx.getYearlyEcomerceSalesAnalytics();
        });
        \u0275\u0275text(9, " THIS YEAR ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 6);
        \u0275\u0275listener("click", function EcommerceRevenueAnalyticsComponent_Template_button_click_10_listener() {
          return ctx.getMonthlyEcomerceSalesAnalytics(ctx.thisMonthNumber);
        });
        \u0275\u0275text(11, " THIS MONTH ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function EcommerceRevenueAnalyticsComponent_Template_button_click_12_listener() {
          return ctx.getMonthlyEcomerceSalesAnalytics(ctx.thisMonthNumber - 1);
        });
        \u0275\u0275text(13, " LAST MONTH ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 7)(15, "div", 8);
        \u0275\u0275element(16, "div", 9);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c02, ctx.currentActivePeriod === "thisYear"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c02, ctx.currentActivePeriod === "thisMonth"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c02, ctx.currentActivePeriod === "lastMonth"));
      }
    }, dependencies: [
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      NgClass
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EcommerceRevenueAnalyticsComponent, { className: "EcommerceRevenueAnalyticsComponent" });
})();

// projects/admin-panel/src/app/components/pane/dashboard/home-comps/subscription-overview/subscription-overview.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function SubscriptionOverviewComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r1 = ctx.$implicit;
    \u0275\u0275property("value", month_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", month_r1.name, " ");
  }
}
function SubscriptionOverviewComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.subscriptionTotal, ctx_r1.currencyService.currency), " ");
  }
}
function SubscriptionOverviewComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "p", 25);
    \u0275\u0275text(2, " Paid ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, ctx_r1.subscriptionPaidTotal, ctx_r1.currencyService.currency), " ");
  }
}
function SubscriptionOverviewComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p", 27);
    \u0275\u0275text(2, " Free ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, ctx_r1.subscriptionFreeTotal, ctx_r1.currencyService.currency), " ");
  }
}
function SubscriptionOverviewComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275text(1, " View More Details ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 29);
    \u0275\u0275element(3, "path", 30);
    \u0275\u0275elementEnd()();
  }
}
var SubscriptionOverviewComponent = class _SubscriptionOverviewComponent {
  constructor(currencyService, router) {
    this.currencyService = currencyService;
    this.router = router;
    this.subscriptionTotal = 0;
    this.subscriptionFreeTotal = 0;
    this.subscriptionPaidTotal = 0;
    this.monthsOfYear = [
      {
        name: "Jan",
        value: 0
      },
      {
        name: "Feb",
        value: 1
      },
      {
        name: "Mar",
        value: 2
      },
      {
        name: "Apr",
        value: 3
      },
      {
        name: "May",
        value: 4
      },
      {
        name: "Jun",
        value: 5
      },
      {
        name: "Jul",
        value: 6
      },
      {
        name: "Aug",
        value: 7
      },
      {
        name: "Sep",
        value: 8
      },
      {
        name: "Oct",
        value: 9
      },
      {
        name: "Nov",
        value: 10
      },
      {
        name: "Dec",
        value: 11
      }
    ];
    this.todayMonth = (/* @__PURE__ */ new Date()).getMonth();
  }
  ngOnInit() {
    this.getSubscriptions();
    this.getCompanyByCreationMonth(this.todayMonth);
  }
  getSubscriptions() {
    return __async(this, null, function* () {
      try {
        const { dataArr } = yield CompanySubscription.filterAll({});
        FrontendLogger.debug("getSubscriptions, ", dataArr);
        this.subscriptionTotal = dataArr.reduce((acc, val) => val.amount + acc, 0);
        this.subscriptionFreeTotal = dataArr.filter((val) => val.name === "Free").reduce((acc, val) => val.amount + acc, 0);
        this.subscriptionPaidTotal = dataArr.filter((val) => val.name !== "Free").reduce((acc, val) => val.amount + acc, 0);
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getCompanyByCreationYears() {
    return __async(this, null, function* () {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const promises = months.map((month, index) => CompanySubscription.filterAll({
        comparisonFilter: [
          {
            field: "createdAt",
            fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), index, 1),
            operator: "gte"
          },
          {
            field: "createdAt",
            fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), index + 1, 0),
            operator: "lte"
          }
        ]
      }));
      const all = yield Promise.all(promises);
      const data = all.map((val) => val.dataArr.length);
      this.renderCompanyAnalytics(data, months);
    });
  }
  getCompanyByCreationMonth(month) {
    return __async(this, null, function* () {
      FrontendLogger.debug("getCompanyByCreationMonth, ", month);
      const daysInMonth = Array.from(Array(new Date((/* @__PURE__ */ new Date()).getFullYear(), month + 1, 0).getDate()).keys()).map((x) => x + 1);
      const promises = daysInMonth.map((day) => {
        return CompanySubscription.filterAll({
          comparisonFilter: [
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), month, day),
              operator: "gte"
            },
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), month, day + 1),
              operator: "lte"
            }
          ]
        });
      });
      const all = yield Promise.all(promises);
      const data = all.map((val) => val.dataArr.length);
      const days = daysInMonth.map((day) => day.toString());
      this.renderCompanyAnalytics(data, days);
    });
  }
  renderCompanyAnalytics(data, categories) {
    FrontendLogger.debug("rendering data, ", data);
    const options = {
      series: [{
        name: "Subscriptions",
        data: [
          ...data
        ]
      }],
      chart: {
        type: "area",
        height: "100%",
        width: "100%",
        parentHeightOffset: 0,
        sparkline: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: "20%"
        }
      },
      colors: ["#4CAF50", "#2196F3", "#FF9800"],
      fill: {
        opacity: 1
      },
      stroke: {
        curve: "smooth",
        width: 2
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function() {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      },
      yaxis: {
        labels: {
          formatter: function(y) {
            return y.toFixed(0) + "%";
          }
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        }
      },
      xaxis: {
        categories,
        labels: {
          rotate: -90
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        }
      },
      grid: {
        show: true,
        borderColor: "#e0e0e0",
        strokeDashArray: 2,
        position: "back",
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      }
    };
    if (this.chart) {
      this.chart.updateOptions(options);
      return;
    }
    this.chart = new ApexCharts(document.querySelector("#subscription-chart"), options);
    this.chart.render();
  }
  navigate(route) {
    this.router.navigate([route]);
  }
  static {
    this.\u0275fac = function SubscriptionOverviewComponent_Factory(t) {
      return new (t || _SubscriptionOverviewComponent)(\u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionOverviewComponent, selectors: [["app-subscription-overview"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 6, consts: [[1, "col-span-12", "2xl:col-span-8"], [1, "card", "!border", "!border-default-white-shadecard-h-100", "rounded-2xl", "!min-h-[340px]", "border", "!border-default-white-shade"], [1, "card-body"], [1, "flex", "flex-wrap", "items-center", "mb-6"], [1, "text-md", "font-semibold", "mr-2", "text-15"], [1, "ltr:ml-auto", "rtl:mr-auto"], [3, "popper"], [1, "py-0", "form-select", "form-select-sm", "ltr:pl-4", "rtl:pr-4", "border-gray-50", "bg-gray-50/20", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "grid", "grid-cols-12", "2xl:gap-6", "!min-h-[300px]"], [1, "col-span-12", "mr-3", "md:col-span-8", "2xl:mr-0", "justify-self-center", "!min-h-[300px]", "!w-full"], ["id", "subscription-chart", "data-colors", '["#5156be", "#34c38f"]', 1, "apex-charts", "h-full", "rounded-2xl"], [1, "col-span-12", "md:col-span-4", "hidden", "md:block"], [1, "min-h-[300px]", "rounded-2xl", "shadow-lg", "p-6", "transform", "transition-all", "duration-300", "hover:scale-105", "hover:shadow-xl"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-sm", "font-medium", "uppercase", "tracking-wide"], [1, "text-3xl", "font-extrabold", "mt-2"], [1, "bg-violet-200", "rounded-full", "p-3", "shadow-md"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-7", "w-7", "text-violet-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "grid", "grid-cols-2", "gap-4", "mb-4", "bg-green-50", "rounded-lg"], [1, "bg-green-50", "rounded-lg", "p-4", "flex", "flex-col", "items-start", "justify-center", "shadow-sm", "hover:shadow-md", "transition-shadow", "duration-300"], [1, "bg-blue-50", "rounded-lg", "p-4", "flex", "flex-col", "items-start", "justify-center", "shadow-sm", "hover:shadow-md", "transition-shadow", "duration-300"], [1, "mt-4"], ["routerLink", "/subscription", 1, "w-full", "flex", "items-center", "justify-center", "py-2.5", "px-4", "bg-secondary", "from-violet-500", "to-purple-600", "text-white", "rounded-lg", "hover:from-violet-600", "hover:to-purple-700", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:scale-105", "shadow-md", "hover:shadow-lg"], [1, "text-xs", "font-medium", "text-green-600", "uppercase", "tracking-wide", "mb-1"], [1, "text-lg", "font-bold", "text-green-800"], [1, "text-xs", "font-medium", "text-blue-600", "uppercase", "tracking-wide", "mb-1"], [1, "text-lg", "font-bold", "text-blue-800"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "ml-2"], ["fill-rule", "evenodd", "d", "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z", "clip-rule", "evenodd"]], template: function SubscriptionOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
        \u0275\u0275text(5, " Subscription Overview ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "lib-tooltip", 6)(8, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function SubscriptionOverviewComponent_Template_select_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.todayMonth, $event) || (ctx.todayMonth = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SubscriptionOverviewComponent_Template_select_ngModelChange_8_listener() {
          return ctx.getSubscriptions();
        });
        \u0275\u0275repeaterCreate(9, SubscriptionOverviewComponent_For_10_Template, 2, 2, "option", 8, _forTrack0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10);
        \u0275\u0275element(13, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "div")(18, "p", 15);
        \u0275\u0275text(19, " Subscription Overview ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, SubscriptionOverviewComponent_Conditional_20_Template, 3, 4, "h3", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(22, "svg", 18);
        \u0275\u0275element(23, "path", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "div", 20);
        \u0275\u0275template(25, SubscriptionOverviewComponent_Conditional_25_Template, 6, 4, "div", 21)(26, SubscriptionOverviewComponent_Conditional_26_Template, 6, 4, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 23);
        \u0275\u0275template(28, SubscriptionOverviewComponent_Conditional_28_Template, 4, 0, "a", 24);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("popper", "This will filter the subscriptions by month, Return days for each day");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.todayMonth);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.monthsOfYear);
        \u0275\u0275advance(11);
        \u0275\u0275conditional(20, ctx.subscriptionTotal ? 20 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(25, ctx.subscriptionPaidTotal ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(26, ctx.subscriptionFreeTotal ? 26 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(28, ctx.subscriptionTotal ? 28 : -1);
      }
    }, dependencies: [
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      ReactiveFormsModule,
      CurrencyPipe,
      RouterModule,
      RouterLink,
      TooltipComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionOverviewComponent, { className: "SubscriptionOverviewComponent" });
})();

// projects/admin-panel/src/app/components/pane/dashboard/home/home.component.ts
var _c03 = () => ({ name: "Dashboard", icon: "home", link: "/" });
var _c1 = (a0) => [a0];
var HomeComponent = class _HomeComponent {
  constructor(windowService, apNme, mainBarTitle, metaTagService, titleService) {
    this.windowService = windowService;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
  }
  ngOnInit() {
    this.mainBarTitle.title = "Dashboard - Manage Vendors, users, Managers, and more";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Overview of your dashboard for quick access to key metrics and insights."
    });
  }
  ngAfterViewInit() {
    scrollToTop(this.windowService);
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 4, consts: [[1, "grid", "grid-cols-1", "pb-6"], [1, "md:flex", "items-center", "justify-between", "px-[2px]"], [1, "text-[18px]", "font-medium", "mb-sm-0", "grow", "bg-default-white", "mb-2", "md:mb-0"], [3, "breadCrumbs"], [1, "grid", "grid-cols-1", "gap-6", "gap-y-0", "2xl:gap-6", "lg:grid-cols-12"], [1, "col-span-12", "2xl:col-span-7"], [1, "col-span-12", "2xl:col-span-5"], [1, "grid", "grid-cols-1", "gap-6", "gap-y-0", "2xl:gap-6", "lg:grid-cols-12", "mt-6"], [1, "col-span-12", "2xl:col-span-12"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content")(1, "div", 0)(2, "div", 1)(3, "h4", 2);
        \u0275\u0275text(4, " Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "app-admin-breadcrumb", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(6, "app-dash-cards");
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5);
        \u0275\u0275element(9, "app-ecommerce-revenue-analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275element(11, "app-company-analytics");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 7)(13, "div", 8);
        \u0275\u0275element(14, "app-subscription-overview");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction1(2, _c1, \u0275\u0275pureFunction0(1, _c03)));
      }
    }, dependencies: [
      RouterModule,
      CompanyAnalyticsComponent,
      DashCardsComponent,
      EcommerceRevenueAnalyticsComponent,
      SubscriptionOverviewComponent,
      AdminPageContentComponent,
      AdminBreadcrumbComponent
    ], styles: ["\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nodata-divi[_ngcontent-%COMP%] {\n  width: 100% !important;\n  min-height: 330px !important;\n}\n.tappable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.main-panel[_ngcontent-%COMP%] {\n  width: 100vw !important;\n}\n.main-panel[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  width: 85% !important;\n  background: rgb(52, 47, 48) !important;\n  margin-left: 1% !important;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-ZMMJW7HN.js.map
