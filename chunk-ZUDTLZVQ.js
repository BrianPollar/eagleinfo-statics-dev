import {
  SubscriptionListSharableComponent
} from "./chunk-BKILUOLD.js";
import {
  AdminTopBarComponent
} from "./chunk-RLWZ2B5Z.js";
import "./chunk-JXJWYDSB.js";
import "./chunk-V2FCV2CW.js";
import "./chunk-X7WNMWNF.js";
import "./chunk-A3XL6Y7L.js";
import "./chunk-EWIFM267.js";
import "./chunk-TFHAZXT7.js";
import "./chunk-ANHFC4IG.js";
import "./chunk-3B3O76HS.js";
import "./chunk-6C27QOWO.js";
import "./chunk-CIT33FWQ.js";
import "./chunk-AKDPFH6R.js";
import "./chunk-O454IXIK.js";
import {
  AdminPageContentComponent
} from "./chunk-LWX77LXW.js";
import {
  scrollToTop
} from "./chunk-G2DKIAK6.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import "./chunk-4KKGHO4P.js";
import "./chunk-UIKF3Q7X.js";
import "./chunk-RMIF5JQ2.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import "./chunk-H6XV6YF3.js";
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  CompanySubscription,
  FrontendLogger
} from "./chunk-MC4HAW4O.js";
import {
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/subscriptions/subscription-cards/subscription-cards.component.ts
var _c0 = (a0, a1) => ({ "text-green-700 bg-green-500/20": a0, "text-red-700 bg-red-500/20": a1 });
var SubscriptionCardsComponent = class _SubscriptionCardsComponent {
  constructor(currencyService, eventbus) {
    this.currencyService = currencyService;
    this.eventbus = eventbus;
    this.totalSubscriptionsAmount = 0;
    this.active = 0;
    this.expired = 0;
    this.totalSubscriGrowth = 0;
    this.recent = 0;
  }
  ngOnInit() {
    this.getTotal();
    this.getActive();
    this.getExpired();
    this.getRecent();
    this.getTotalCompanyGrowthDiff();
  }
  getTotal() {
    return __async(this, null, function* () {
      try {
        const analytics = yield CompanySubscription.getCompanySubscriptionAnalytcis({});
        if (!analytics) {
          return;
        }
        this.totalSubscriptionsAmount = analytics.totalAmount;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getActive() {
    return __async(this, null, function* () {
      try {
        const { count } = yield CompanySubscription.filterAll({
          propFilter: {
            active: true
          },
          returnEmptyArray: true
        });
        this.active = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getExpired() {
    return __async(this, null, function* () {
      try {
        const { count } = yield CompanySubscription.filterAll({
          propFilter: {
            active: false
          },
          returnEmptyArray: true
        });
        this.expired = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getRecent() {
    return __async(this, null, function* () {
      try {
        const { count } = yield CompanySubscription.filterAll({
          comparisonFilter: [
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 0),
              operator: "gte"
            }
          ],
          returnEmptyArray: true
        });
        this.recent = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getTotalCompanyGrowthDiff() {
    return __async(this, null, function* () {
      try {
        const lastMonth = yield CompanySubscription.filterAll({
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
        const thisMonth = yield CompanySubscription.filterAll({
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
        this.totalSubscriGrowth = (thisMonth.count - lastMonth.count) / (lastMonth.count || 1) * 100 || 0;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  filterBy(filter) {
    this.eventbus.generalEvent$.next({
      type: "filterBy",
      data: {
        propFilter: filter
      }
    });
  }
  static {
    this.\u0275fac = function SubscriptionCardsComponent_Factory(t) {
      return new (t || _SubscriptionCardsComponent)(\u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(EventbusService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionCardsComponent, selectors: [["app-subscription-cards"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 56, vars: 12, consts: [["aria-label", "Subscriptions Overview Cards", 1, "grid", "grid-cols-1", "gap-6", "gap-y-0", "2xl:gap-6", "md:grid-cols-2", "2xl:grid-cols-4"], ["role", "button", "aria-label", "View All Subscriptions", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], [1, "card-body", "relative", "z-10", "p-5"], [1, "flex", "justify-between", "items-center", "mb-3"], [1, "flex", "items-center", "space-x-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-green-500"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"], [1, "text-xs", "text-gray-500", "uppercase", "tracking-wider"], ["id", "subscriptions-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], [1, "flex", "items-center", "justify-between"], [1, "font-bold", "text-2xl"], ["data-target", "250", "aria-label", "Total number of subscriptions", 1, "counter-value"], [1, "text-[10px]", "py-[1px]", "px-2", "rounded-full", "font-medium", 3, "ngClass"], ["role", "button", "aria-label", "View Active Subscriptions", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-red-500"], ["id", "active-subscriptions-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "200", "aria-label", "Number of active subscriptions", 1, "counter-value"], ["role", "button", "aria-label", "View Expired Subscriptions", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-blue-500"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"], ["id", "expired-subscriptions-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "50", "aria-label", "Number of expired subscriptions", 1, "counter-value"], ["role", "button", "aria-label", "View Recently Added Subscriptions", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-purple-500"], ["d", "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L8 12H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"], ["id", "recent-subscriptions-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "10", "aria-label", "Number of recently added subscriptions", 1, "counter-value"]], template: function SubscriptionCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275listener("click", function SubscriptionCardsComponent_Template_div_click_1_listener() {
          return ctx.filterBy({});
        })("keydown.enter", function SubscriptionCardsComponent_Template_div_keydown_enter_1_listener() {
          return ctx.filterBy({});
        });
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(5, "svg", 5);
        \u0275\u0275element(6, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(7, "span", 7);
        \u0275\u0275text(8, "Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9)(11, "h4", 10)(12, "span", 11);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "span", 12);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "div", 13);
        \u0275\u0275listener("click", function SubscriptionCardsComponent_Template_div_click_17_listener() {
          return ctx.filterBy({ propFilter: { active: true } });
        })("keydown.enter", function SubscriptionCardsComponent_Template_div_keydown_enter_17_listener() {
          return ctx.filterBy({ propFilter: { active: true } });
        });
        \u0275\u0275elementStart(18, "div", 2)(19, "div", 3)(20, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 14);
        \u0275\u0275element(22, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "span", 7);
        \u0275\u0275text(24, "Active");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(25, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 9)(27, "h4", 10)(28, "span", 16);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(30, "div", 17);
        \u0275\u0275listener("click", function SubscriptionCardsComponent_Template_div_click_30_listener() {
          return ctx.filterBy({ propFilter: { active: false } });
        })("keydown.enter", function SubscriptionCardsComponent_Template_div_keydown_enter_30_listener() {
          return ctx.filterBy({ propFilter: { active: false } });
        });
        \u0275\u0275elementStart(31, "div", 2)(32, "div", 3)(33, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(34, "svg", 18);
        \u0275\u0275element(35, "path", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(36, "span", 7);
        \u0275\u0275text(37, "Expired Subscriptions");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(38, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 9)(40, "h4", 10)(41, "span", 21);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(43, "div", 22);
        \u0275\u0275listener("click", function SubscriptionCardsComponent_Template_div_click_43_listener() {
          return ctx.filterBy({ propSort: { createdAt: "desc" } });
        })("keydown.enter", function SubscriptionCardsComponent_Template_div_keydown_enter_43_listener() {
          return ctx.filterBy({ propSort: { createdAt: "desc" } });
        });
        \u0275\u0275elementStart(44, "div", 2)(45, "div", 3)(46, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(47, "svg", 23);
        \u0275\u0275element(48, "path", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(49, "span", 7);
        \u0275\u0275text(50, "Recent");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(51, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 9)(53, "h4", 10)(54, "span", 26);
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 6, ctx.totalSubscriptionsAmount, ctx.currencyService.currency), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c0, ctx.totalSubscriGrowth > 0, ctx.totalSubscriGrowth < 0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.totalSubscriGrowth, " ");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.active, " ");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.expired, " ");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.recent, " ");
      }
    }, dependencies: [
      RouterModule,
      CurrencyPipe,
      NgClass
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionCardsComponent, { className: "SubscriptionCardsComponent" });
})();

// projects/admin-panel/src/app/components/pane/subscriptions/subscription-list/subscription-list.component.ts
var _c02 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Subscriptions List", icon: "subscriptions" });
var _c2 = (a0, a1) => [a0, a1];
var SubscriptionListComponent = class _SubscriptionListComponent {
  constructor(windowService, apNme, mainBarTitle, metaTagService, titleService) {
    this.windowService = windowService;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
  }
  ngOnInit() {
    this.mainBarTitle.title = "Subscriptions - Manage Subscription Plans";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily manage and view your subscriptions for effective service tracking and organization."
    });
    scrollToTop(this.windowService);
  }
  static {
    this.\u0275fac = function SubscriptionListComponent_Factory(t) {
      return new (t || _SubscriptionListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionListComponent, selectors: [["app-subscription-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 6, consts: [["title", "Subscriptions List", 3, "breadCrumbs"]], template: function SubscriptionListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0)(2, "app-subscription-cards")(3, "app-subscription-list-sharable");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(3, _c2, \u0275\u0275pureFunction0(1, _c02), \u0275\u0275pureFunction0(2, _c1)));
      }
    }, dependencies: [
      RouterModule,
      SubscriptionCardsComponent,
      AdminPageContentComponent,
      AdminTopBarComponent,
      SubscriptionListSharableComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionListComponent, { className: "SubscriptionListComponent" });
})();
export {
  SubscriptionListComponent
};
//# sourceMappingURL=chunk-ZUDTLZVQ.js.map
