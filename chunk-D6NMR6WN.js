import {
  SubscriptionListSharableComponent
} from "./chunk-BKILUOLD.js";
import {
  ViewOneCompose
} from "./chunk-BMZBVPCI.js";
import {
  AdminBackBarComponent
} from "./chunk-RPZGEB5Y.js";
import "./chunk-JXJWYDSB.js";
import "./chunk-V2FCV2CW.js";
import "./chunk-X7WNMWNF.js";
import "./chunk-A3XL6Y7L.js";
import "./chunk-EWIFM267.js";
import "./chunk-TFHAZXT7.js";
import "./chunk-ANHFC4IG.js";
import "./chunk-3B3O76HS.js";
import {
  openClose
} from "./chunk-6C27QOWO.js";
import "./chunk-CIT33FWQ.js";
import "./chunk-AKDPFH6R.js";
import "./chunk-O454IXIK.js";
import {
  AdminPageContentComponent
} from "./chunk-LWX77LXW.js";
import "./chunk-G2DKIAK6.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import "./chunk-4KKGHO4P.js";
import "./chunk-UIKF3Q7X.js";
import {
  TooltipService
} from "./chunk-RMIF5JQ2.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import "./chunk-LARJQE5I.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-H6XV6YF3.js";
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  Company,
  EcommerceOrder,
  FrontendLogger,
  Invoice,
  dashCardsBmUse,
  salesAnalyticsEcommerceForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  DatePipe,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/company-related/company/one-company-cards/one-company-cards.component.ts
var _c0 = (a0, a1) => ({ "text-green-700 bg-green-500/20": a0, "text-red-700 bg-red-500/20": a1 });
var OneCompanyCardsComponent = class _OneCompanyCardsComponent {
  constructor(router) {
    this.router = router;
    this.customerCount = 0;
    this.customerIncreDecre = 0;
    this.invoiceIncreDecre = 0;
    this.countInvoices = 0;
    this.estimateCount = 0;
    this.salesData = {
      totalSales: 0,
      tax: 0,
      count: 0,
      earnings: 0
    };
    this.salesPercentage = 0;
    this.revenuePercentage = 0;
    this.pendingOrders = 0;
  }
  ngOnInit() {
    this.getEcomSalesTotal();
    this.fetchData();
  }
  getEcomSalesTotal(period) {
    return __async(this, null, function* () {
      try {
        const { getAllSales } = salesAnalyticsEcommerceForSharedUse();
        const { salesData, salesPercentage, revenuePercentage } = yield getAllSales(period);
        this.salesData = salesData;
        this.salesPercentage = salesPercentage;
        this.revenuePercentage = revenuePercentage;
      } catch (error) {
        FrontendLogger.error("Error fetching", error);
      }
    });
  }
  fetchData() {
    return __async(this, null, function* () {
      const { getCustomers, getAllInvoicesTotal, getEstimatesCount, monthlyEvaluationCustomers, monthlyEvaluationInvoices } = dashCardsBmUse(this.companyId);
      try {
        const [customerCount, countInvoices, estimateCount, { customerIncreDecre, customerIncreDecreStyle }, { invoiceIncreDecre, invoiceIncreDecreStyle }] = yield Promise.all([
          getCustomers(),
          getAllInvoicesTotal(),
          getEstimatesCount(),
          monthlyEvaluationCustomers(),
          monthlyEvaluationInvoices()
        ]);
        this.customerCount = customerCount;
        this.countInvoices = countInvoices;
        this.estimateCount = estimateCount;
        this.customerIncreDecre = customerIncreDecre;
        this.customerIncreDecreStyle = customerIncreDecreStyle;
        this.invoiceIncreDecre = invoiceIncreDecre;
        this.invoiceIncreDecreStyle = invoiceIncreDecreStyle;
      } catch (error) {
        FrontendLogger.error("Error fetching data:", error);
      }
    });
  }
  getCompanyOrdersCount() {
    return __async(this, null, function* () {
      try {
        const { count } = yield EcommerceOrder.filterAll({
          propFilter: {
            company: this.companyId,
            status: "pending"
          },
          returnEmptyArray: true
        });
        this.pendingOrders = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  navigate(route) {
    this.router.navigate([route]);
  }
  static {
    this.\u0275fac = function OneCompanyCardsComponent_Factory(t) {
      return new (t || _OneCompanyCardsComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OneCompanyCardsComponent, selectors: [["app-one-company-cards"]], inputs: { companyId: "companyId" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 57, vars: 14, consts: [["aria-label", "Companies Overview Cards", 1, "grid", "grid-cols-1", "gap-6", "gap-y-0", "2xl:gap-6", "md:grid-cols-2", "2xl:grid-cols-3"], ["role", "button", "aria-label", "View Companies", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl"], [1, "card-body", "relative", "z-10", "p-5"], [1, "flex", "justify-between", "items-center", "mb-3"], [1, "flex", "items-center", "space-x-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-green-500"], ["d", "M12 4a4 4 0 100 8 4 4 0 000-8zM6 14c0-1.33 2.67-2 4-2s4 .67 4 2v2H6v-2zm12 0c0-1.33-2.67-2-4-2s-4 .67-4 2v2h8v-2zM12 18c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"], [1, "text-xs", "text-gray-500", "uppercase", "tracking-wider"], ["id", "company-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], [1, "flex", "items-center", "justify-between"], [1, "font-bold", "text-2xl"], ["data-target", "150", "aria-label", "Total number of companies", 1, "counter-value"], [1, "text-[10px]", "py-[1px]", "px-2", "rounded-full", "font-medium", 3, "ngClass"], ["role", "button", "aria-label", "View Active Companies", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl"], ["d", "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"], ["id", "active-company-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "120", "aria-label", "Number of active companies", 1, "counter-value"], ["role", "button", "aria-label", "View Inactive Companies", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-blue-500"], ["d", "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6zM12 18v-2H8v-4h4V8l5 5-5 5z"], ["id", "inactive-company-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "30", "aria-label", "Number of inactive companies", 1, "counter-value"]], template: function OneCompanyCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(5, "svg", 5);
        \u0275\u0275element(6, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(7, "span", 7);
        \u0275\u0275text(8, "Customers");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9)(11, "h4", 10)(12, "span", 11);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "span", 12);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(16, "div", 13)(17, "div", 2)(18, "div", 3)(19, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(20, "svg", 5);
        \u0275\u0275element(21, "path", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(22, "span", 7);
        \u0275\u0275text(23, "Invoices");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(24, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 9)(26, "h4", 10)(27, "span", 16);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "span", 12);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "div", 17)(32, "div", 2)(33, "div", 3)(34, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(35, "svg", 18);
        \u0275\u0275element(36, "path", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(37, "span", 7);
        \u0275\u0275text(38, "Total Sales");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(39, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 9)(41, "h4", 10)(42, "span", 21);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(44, "div", 17)(45, "div", 2)(46, "div", 3)(47, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(48, "svg", 18);
        \u0275\u0275element(49, "path", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(50, "span", 7);
        \u0275\u0275text(51, "Pending Orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(52, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 9)(54, "h4", 10)(55, "span", 21);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.customerCount, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c0, ctx.customerIncreDecre > 0, ctx.customerIncreDecre < 0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.customerIncreDecre, " ");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.countInvoices, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c0, ctx.invoiceIncreDecre > 0, ctx.invoiceIncreDecre < 0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.invoiceIncreDecre, " ");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.salesData.totalSales, " ");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.pendingOrders, " ");
      }
    }, dependencies: [
      RouterModule,
      NgClass
    ], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OneCompanyCardsComponent, { className: "OneCompanyCardsComponent" });
})();

// projects/admin-panel/src/app/components/pane/company-related/company/one-company-sales-analytics-ecommerce/one-company-sales-analytics-ecommerce.component.ts
var _c02 = (a0) => ({ "bg-violet-500 text-white": a0 });
var _c1 = (a0) => ({ "bg-gray-500 text-white": a0 });
var OneCompanySalesAnalyticsEcommerceComponent = class _OneCompanySalesAnalyticsEcommerceComponent {
  constructor(tooltipService, currencyService) {
    this.tooltipService = tooltipService;
    this.currencyService = currencyService;
    this.thisMonthNumber = (/* @__PURE__ */ new Date()).getMonth();
    this.currentActivePeriod = "thisYear";
  }
  ngOnInit() {
    this.getYearlyEcomerceSalesAnalytics();
  }
  getEcomerceSalesAnalyticsSolo(startDate, endDate) {
    const filter = {
      propFilter: {
        company: this.companyId
      },
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
      const totalTaxData = [];
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
      const totalTaxData = [];
      const countData = all.map((val) => val.count);
      this.currentActivePeriod = "thisYear";
      this.renderEcomerceChat(totalAmountData, totalTaxData, countData, months);
    });
  }
  renderEcomerceChat(salesData, taxData, countData, categories) {
    FrontendLogger.debug("renderEcomerceChat", salesData, taxData, countData, categories);
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
    const chart = new ApexCharts(document.querySelector("#e-sale-analytics"), options);
    chart.render();
  }
  static {
    this.\u0275fac = function OneCompanySalesAnalyticsEcommerceComponent_Factory(t) {
      return new (t || _OneCompanySalesAnalyticsEcommerceComponent)(\u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(CurrencyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OneCompanySalesAnalyticsEcommerceComponent, selectors: [["app-one-company-sales-analytics-ecommerce"]], inputs: { companyId: "companyId" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 9, consts: [[1, "col-span-12", "lg:col-span-8"], [1, "card", "!border", "!border-default-white-shade", "card-h-100", "rounded-2xl", "!min-h-[340px]"], [1, "card-body"], [1, "flex", "flex-wrap", "items-center", "mb-6"], [1, "mr-2", "text-15"], [1, "flex", "gap-1", "ltr:ml-auto", "rtl:mr-auto"], ["type", "button", 1, "px-2", "py-1", "border-transparent", "btn", "text-13", "bg-violet-50/50", "text-violet-500", "hover:bg-violet-500", "hover:text-white", "focus:bg-violet-500", "focus:text-white", 3, "click", "ngClass"], ["type", "button", 1, "px-2", "py-1", "text-gray-500", "border-transparent", "btn", "text-13", "bg-gray-50/50", "hover:bg-gray-500", "hover:text-white", "focus:bg-gray-500", "focus:text-white", 3, "click", "ngClass"], [1, "grid", "grid-cols-12", "2xl:gap-6"], [1, "col-span-12", "lg:col-span-12"], ["id", "e-sale-analytics", "data-colors", '["#5156be", "#34c38f"]', 1, "apex-charts"]], template: function OneCompanySalesAnalyticsEcommerceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "h5", 4);
        \u0275\u0275text(6, "Company Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
        \u0275\u0275listener("click", function OneCompanySalesAnalyticsEcommerceComponent_Template_button_click_8_listener() {
          return ctx.getYearlyEcomerceSalesAnalytics();
        });
        \u0275\u0275text(9, " THIS YEAR ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 7);
        \u0275\u0275listener("click", function OneCompanySalesAnalyticsEcommerceComponent_Template_button_click_10_listener() {
          return ctx.getMonthlyEcomerceSalesAnalytics(ctx.thisMonthNumber);
        });
        \u0275\u0275text(11, " THIS MONTH ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 7);
        \u0275\u0275listener("click", function OneCompanySalesAnalyticsEcommerceComponent_Template_button_click_12_listener() {
          return ctx.getMonthlyEcomerceSalesAnalytics(ctx.thisMonthNumber - 1);
        });
        \u0275\u0275text(13, " LAST MONTH ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
        \u0275\u0275element(16, "div", 10);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c02, ctx.currentActivePeriod === "thisYear"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c1, ctx.currentActivePeriod === "thisMonth"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c1, ctx.currentActivePeriod === "lastMonth"));
      }
    }, dependencies: [
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      NgClass
    ], encapsulation: 2, data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OneCompanySalesAnalyticsEcommerceComponent, { className: "OneCompanySalesAnalyticsEcommerceComponent" });
})();

// projects/admin-panel/src/app/components/pane/company-related/company/view-company/view-company.component.ts
var _forTrack0 = ($index, $item) => $item._id;
function ViewCompanyComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-one-company-cards", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("companyId", ctx_r0.viewOneCompose.oneItem._id);
  }
}
function ViewCompanyComponent_For_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const photo_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", photo_r2.url, \u0275\u0275sanitizeUrl);
  }
}
function ViewCompanyComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-one-company-sales-analytics-ecommerce", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("companyId", ctx_r0.viewOneCompose.oneItem._id);
  }
}
function ViewCompanyComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementStart(2, "div", 25)(3, "h2", 26);
    \u0275\u0275text(4, "Subscriptions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27)(6, "button", 28);
    \u0275\u0275listener("click", function ViewCompanyComponent_Conditional_101_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.subscribeToPkg(ctx_r0.viewOneCompose.oneItem._id));
    });
    \u0275\u0275elementStart(7, "i", 29);
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Add New");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(11, "app-subscription-list-sharable", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("companyId", ctx_r0.viewOneCompose.oneItem._id);
  }
}
var ViewCompanyComponent = class _ViewCompanyComponent {
  constructor(router, route, eventbus, apNme, mainBarTitle, metaTagService, titleService) {
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.viewOneCompose = new ViewOneCompose(Company, { route: ["/company/update"], eventName: "updateCompany" }, this.router, this.route, this.eventbus);
    this.title = "View";
    this.breadCrumbs = [
      {
        name: "Dashboard",
        icon: "space_dashboard",
        link: "/"
      },
      {
        name: "Company",
        icon: "account_balance",
        link: "/company/list"
      },
      {
        name: "View Company",
        icon: "visibility"
      }
    ];
  }
  get photos() {
    return typeof this.viewOneCompose.oneItem?.owner === "string" ? [] : this.viewOneCompose.oneItem?.owner.photos || [];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        yield this.viewOneCompose.init();
        FrontendLogger.debug("ONE ITEM ", this.viewOneCompose.oneItem);
        this.title = this.viewOneCompose.oneItem?.displayName || "View";
        this.mainBarTitle.title = "View Company - " + this.title;
        this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
        this.metaTagService.updateTag({
          name: "description",
          content: `View and manage the details of
        a company to ensure accurate
        information and effective business operations.`
        });
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getCompanyOwner() {
    return this.viewOneCompose.oneItem?.owner;
  }
  subscribeToPkg(id) {
    this.router.navigate(["subscribe/" + id]);
  }
  ngOnDestroy() {
    this.viewOneCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function ViewCompanyComponent_Factory(t) {
      return new (t || _ViewCompanyComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewCompanyComponent, selectors: [["app-view-company"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 102, vars: 15, consts: [[1, "grid", "grid-cols-1", "pb-6"], [3, "title", "breadCrumbs"], [1, "mt-10", "min-h-[100vh]"], [3, "companyId"], [1, "!mt-10"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "md:col-span-6"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md"], [1, "card-body"], [1, "flex", "flex-col", "gap-3"], [1, "text-lg", "font-semibold", "flex", "items-center", "gap-2"], [1, "material-icons-outlined", "text-blue-500"], [1, "flex", "flex-row", "gap-2", "items-center"], [1, "material-icons-outlined", "text-gray-500"], [1, "text-gray-500", "font-medium"], [1, "font-medium"], [1, "material-icons-outlined", "text-green-500"], [1, "flex", "flex-row", "gap-2", "items-center", "mt-4"], [1, "btn", "btn-primary", "transition-all", "duration-300", "hover:scale-105", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-opacity-50", "active:scale-95", 3, "click"], [1, "material-icons-outlined", "transition-all", "duration-300", "text-secondary"], [1, "btn", "btn-secondary", "transition-all", "duration-300", "hover:scale-105", "focus:outline-none", "focus:ring-2", "focus:ring-gray-500", "focus:ring-opacity-50", "active:scale-95", 3, "click"], [1, "material-icons-outlined", "text-green"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "gap-4"], ["alt", "", 1, "h-auto", "max-w-full", "rounded-lg", 3, "src"], [1, "!bg-primary", "w-full", "h-[10px]"], [1, "p-4", "flex"], [1, "flex-1"], [1, "flex-none"], [1, "mb-6", "btn", "btn-primary", "flex", "items-center", "justify-center", 3, "click"], [1, "material-icons-outlined", "mr-2", "text-primary"]], template: function ViewCompanyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content")(1, "div", 0);
        \u0275\u0275element(2, "app-admin-back-bar", 1);
        \u0275\u0275elementStart(3, "div", 2);
        \u0275\u0275template(4, ViewCompanyComponent_Conditional_4_Template, 1, 1, "app-one-company-cards", 3);
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "h4", 10)(12, "i", 11);
        \u0275\u0275text(13, "business");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Company Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 12)(16, "i", 13);
        \u0275\u0275text(17, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 14);
        \u0275\u0275text(19, "Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 15);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 12)(23, "i", 13);
        \u0275\u0275text(24, "badge");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 14);
        \u0275\u0275text(26, "Display Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 15);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 12)(30, "i", 16);
        \u0275\u0275text(31, "toggle_on");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 14);
        \u0275\u0275text(33, "Status :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span", 15);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 17)(37, "button", 18);
        \u0275\u0275listener("click", function ViewCompanyComponent_Template_button_click_37_listener() {
          return ctx.viewOneCompose.update();
        });
        \u0275\u0275elementStart(38, "i", 19);
        \u0275\u0275text(39, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " Update ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 20);
        \u0275\u0275listener("click", function ViewCompanyComponent_Template_button_click_41_listener() {
          return ctx.viewOneCompose.printDocument();
        });
        \u0275\u0275elementStart(42, "i", 21);
        \u0275\u0275text(43, "print");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, " Print ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(45, "div", 6)(46, "div", 7)(47, "div", 8)(48, "div", 9)(49, "h4", 10)(50, "i", 11);
        \u0275\u0275text(51, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275text(52, " Owner Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 12)(54, "i", 13);
        \u0275\u0275text(55, "account_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span", 14);
        \u0275\u0275text(57, "First Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span", 15);
        \u0275\u0275text(59);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 12)(61, "i", 13);
        \u0275\u0275text(62, "account_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "span", 14);
        \u0275\u0275text(64, "Last Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "span", 15);
        \u0275\u0275text(66);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 12)(68, "i", 13);
        \u0275\u0275text(69, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "span", 14);
        \u0275\u0275text(71, "Email:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "span", 15);
        \u0275\u0275text(73);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 12)(75, "i", 13);
        \u0275\u0275text(76, "phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "span", 14);
        \u0275\u0275text(78, "Phone:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "span", 15);
        \u0275\u0275text(80);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 12)(82, "i", 13);
        \u0275\u0275text(83, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "span", 14);
        \u0275\u0275text(85, "Date Added:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "span", 15);
        \u0275\u0275text(87);
        \u0275\u0275pipe(88, "date");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(89, "div", 6)(90, "div", 7)(91, "div", 8)(92, "div", 9)(93, "h4", 10)(94, "i", 11);
        \u0275\u0275text(95, "image");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, " Gallery ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 22);
        \u0275\u0275repeaterCreate(98, ViewCompanyComponent_For_99_Template, 2, 1, "div", null, _forTrack0);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(100, ViewCompanyComponent_Conditional_100_Template, 1, 1, "app-one-company-sales-analytics-ecommerce", 3)(101, ViewCompanyComponent_Conditional_101_Template, 12, 1, "div");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(4, ctx.viewOneCompose.oneItem ? 4 : -1);
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate(ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.name);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.displayName);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.left) ? "Inactive" : "Active", " ");
        \u0275\u0275advance(24);
        \u0275\u0275textInterpolate1(" ", ctx.getCompanyOwner().firstName || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.getCompanyOwner().lastName || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.getCompanyOwner().email || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.getCompanyOwner().phone || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(88, 13, ctx.getCompanyOwner().createdAt), " ");
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.photos);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(100, ctx.viewOneCompose.oneItem ? 100 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(101, ctx.viewOneCompose.oneItem ? 101 : -1);
      }
    }, dependencies: [
      RouterModule,
      DatePipe,
      OneCompanyCardsComponent,
      OneCompanySalesAnalyticsEcommerceComponent,
      AdminBackBarComponent,
      AdminPageContentComponent,
      SubscriptionListSharableComponent
    ], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewCompanyComponent, { className: "ViewCompanyComponent" });
})();
export {
  ViewCompanyComponent
};
//# sourceMappingURL=chunk-D6NMR6WN.js.map
