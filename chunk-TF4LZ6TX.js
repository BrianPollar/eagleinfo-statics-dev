import {
  MakeSubscriptionCoreComponent
} from "./chunk-ACZAPK7E.js";
import "./chunk-VKAOE7S2.js";
import "./chunk-7OBDCAFX.js";
import "./chunk-WJJSEUQ7.js";
import "./chunk-GKDEJT6Q.js";
import {
  scaleSmooth
} from "./chunk-6C27QOWO.js";
import "./chunk-AKDPFH6R.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import "./chunk-UIKF3Q7X.js";
import "./chunk-RMIF5JQ2.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import "./chunk-H6XV6YF3.js";
import "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  navByBus
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-SOKXHU4M.js";
import {
  Meta,
  Title,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/subscriptions/subscribe/subscribe.component.ts
var SubscribeComponent = class _SubscribeComponent {
  constructor(eventbus, route, router, apNme, mainBarTitle, metaTagService, titleService) {
    this.eventbus = eventbus;
    this.route = route;
    this.router = router;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.makingSubscription = false;
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.companyId = this.route.snapshot?.params["id"];
  }
  ngOnInit() {
    this.mainBarTitle.title = "Subscribe to Plans - Manage Subscription Plans";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily manage and subscribe to your plans for tailored service options."
    });
  }
  static {
    this.\u0275fac = function SubscribeComponent_Factory(t) {
      return new (t || _SubscribeComponent)(\u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscribeComponent, selectors: [["app-subscribe"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 4, consts: [[1, "relative", "bg-gradient-to-br", "!from-secondary/10", "!to-secondary/20", "min-h-screen", "overflow-hidden"], [1, "container", "relative", "mx-auto", "px-4", "py-16", "lg:px-8", "mt-[40px]"], [1, "max-w-4xl", "mx-auto", "text-center", "mb-16"], [1, "text-4xl", "font-extrabold", "mb-4", "tracking-tight", "relative"], [1, "relative"], [1, "absolute", "-bottom-2", "left-1/2", "transform", "-translate-x-1/2", "w-full", "h-2", "!bg-secondary/50", "rounded-full", "blur-sm"], [1, "text-xl", "leading-relaxed", "relative"], [3, "header", "isFromModal", "title", "companyId"]], template: function SubscribeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "Subscription Packages");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, " Choose the perfect plan that fits your business needs ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "lib-make-subscription-core", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("header", false)("isFromModal", true)("title", "")("companyId", ctx.companyId);
      }
    }, dependencies: [MakeSubscriptionCoreComponent], data: { animation: [scaleSmooth] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscribeComponent, { className: "SubscribeComponent" });
})();
export {
  SubscribeComponent
};
//# sourceMappingURL=chunk-TF4LZ6TX.js.map
