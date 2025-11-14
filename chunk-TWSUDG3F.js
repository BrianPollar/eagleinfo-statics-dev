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
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  navByBus,
  subscriptionPackages
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
  ɵɵproperty
} from "./chunk-4EXDEK5V.js";
import "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/subscriptions/subscription-packages/subscription-packages.component.ts
var SubscriptionPackagesComponent = class _SubscriptionPackagesComponent {
  constructor(eventbus, route, router, currencyService, apNme, mainBarTitle, metaTagService, titleService) {
    this.eventbus = eventbus;
    this.route = route;
    this.router = router;
    this.currencyService = currencyService;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.subscriptionPackanges = subscriptionPackages;
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.id = this.route.snapshot?.params["id"];
  }
  ngOnInit() {
    this.mainBarTitle.title = "Subscriptions Packages - Manage Subscription Packages";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily manage and view your subscription packages for tailored service options."
    });
  }
  editSubscription(sub) {
    this.navigateByBus(["/subscription/update"], "updateSubscription", sub);
  }
  static {
    this.\u0275fac = function SubscriptionPackagesComponent_Factory(t) {
      return new (t || _SubscriptionPackagesComponent)(\u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionPackagesComponent, selectors: [["app-subscription-packages"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 5, consts: [[1, "relative", "min-h-screen", "overflow-hidden", "pt-[60px]"], [3, "header", "isFromModal", "customizeEnabled", "subscribeEnabled", "companyId"]], template: function SubscriptionPackagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "lib-make-subscription-core", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("header", false)("isFromModal", false)("customizeEnabled", false)("subscribeEnabled", false)("companyId", ctx.id);
      }
    }, dependencies: [MakeSubscriptionCoreComponent], data: { animation: [scaleSmooth] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionPackagesComponent, { className: "SubscriptionPackagesComponent" });
})();
export {
  SubscriptionPackagesComponent
};
//# sourceMappingURL=chunk-TWSUDG3F.js.map
