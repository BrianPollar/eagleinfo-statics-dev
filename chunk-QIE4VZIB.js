import {
  SubscriptionDurationPipe
} from "./chunk-VKAOE7S2.js";
import {
  AdminBackBarComponent
} from "./chunk-RPZGEB5Y.js";
import {
  scaleSmooth
} from "./chunk-6C27QOWO.js";
import "./chunk-AKDPFH6R.js";
import "./chunk-O454IXIK.js";
import {
  AdminPageContentComponent
} from "./chunk-LWX77LXW.js";
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
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  FrontendLogger,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  Router
} from "./chunk-SOKXHU4M.js";
import {
  EventEmitter,
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
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4EXDEK5V.js";
import "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/subscriptions/one-package/one-package.component.ts
var _forTrack0 = ($index, $item) => $item.type;
var _c0 = (a0, a1, a2) => ({ "scale-105 on-hover": a0, "md:row-span-1": a1, "md:row-span-2 md:h-[700px] -mt-[15px]": a2 });
function OnePackageComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, " Most Popular ");
    \u0275\u0275elementEnd();
  }
}
function OnePackageComponent_Conditional_0_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.subscriptionPackange.name.toLowerCase() === "standard" ? "text-sm" : "text-sm");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", feature_r3.limitSize, " ", feature_r3.name, " ");
  }
}
function OnePackageComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function OnePackageComponent_Conditional_0_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.makeSubscription.emit(ctx_r1.subscriptionPackange));
    });
    \u0275\u0275text(1, " Choose Plan ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 20);
    \u0275\u0275element(3, "path", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.subscriptionPackange.name.toLowerCase() === "standard" ? "py-3.5 text-base" : "");
  }
}
function OnePackageComponent_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function OnePackageComponent_Conditional_0_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.customisePlan.emit(ctx_r1.subscriptionPackange));
    });
    \u0275\u0275text(1, " Customize Plan ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 20);
    \u0275\u0275element(3, "path", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.subscriptionPackange.name.toLowerCase() === "standard" ? "py-3.5 text-base" : "");
  }
}
function OnePackageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("mouseenter", function OnePackageComponent_Conditional_0_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleScale(ctx_r1.subscriptionPackange.name));
    })("mouseleave", function OnePackageComponent_Conditional_0_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleScale(ctx_r1.subscriptionPackange.name));
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "h3", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, OnePackageComponent_Conditional_0_Conditional_7_Template, 2, 0, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8)(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "subscriptionDuration");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 11)(15, "ul", 12);
    \u0275\u0275repeaterCreate(16, OnePackageComponent_Conditional_0_For_17_Template, 5, 3, "li", 13, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 11);
    \u0275\u0275template(19, OnePackageComponent_Conditional_0_Conditional_19_Template, 4, 1, "button", 14)(20, OnePackageComponent_Conditional_0_Conditional_20_Template, 4, 1, "button", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(15, _c0, ctx_r1.currToggleId === ctx_r1.subscriptionPackange.name, ctx_r1.subscriptionPackange.name.toLowerCase() !== "standard", ctx_r1.subscriptionPackange.name.toLowerCase() === "standard"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.subscriptionPackange.name.toLowerCase() === "standard" ? "!bg-secondary/10" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.subscriptionPackange.name.toLowerCase() === "standard" ? "text-2xl font-extrabold" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.subscriptionPackange.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r1.subscriptionPackange.name.toLowerCase() === "standard" ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.subscriptionPackange.name.toLowerCase() === "standard" ? "text-4xl" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.subscriptionPackange.amount, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.subscriptionPackange.name.toLowerCase() === "standard" ? "text-base font-medium" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" /", \u0275\u0275pipeBind1(13, 13, ctx_r1.subscriptionPackange.duration), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.subscriptionPackange.name.toLowerCase() === "standard" ? "p-7" : "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.subscriptionPackange.features);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.subscriptionPackange.name.toLowerCase() === "standard" ? "p-7" : "");
    \u0275\u0275advance();
    \u0275\u0275conditional(19, ctx_r1.showBuyButton ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(20, ctx_r1.showCustomizeButton ? 20 : -1);
  }
}
var OnePackageComponent = class _OnePackageComponent {
  constructor(currencyService) {
    this.currencyService = currencyService;
    this.showCustomizeButton = false;
    this.showBuyButton = false;
    this.makeSubscription = new EventEmitter();
    this.customisePlan = new EventEmitter();
  }
  toggleScale(id) {
    if (id === this.currToggleId) {
      this.currToggleId = "";
      return;
    }
    this.currToggleId = id;
  }
  static {
    this.\u0275fac = function OnePackageComponent_Factory(t) {
      return new (t || _OnePackageComponent)(\u0275\u0275directiveInject(CurrencyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OnePackageComponent, selectors: [["app-one-package"]], inputs: { subscriptionPackange: "subscriptionPackange", showCustomizeButton: "showCustomizeButton", showBuyButton: "showBuyButton" }, outputs: { makeSubscription: "makeSubscription", customisePlan: "customisePlan" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "p-5", "m-3", "relative", "!bg-default-white", "border", "border-gray-200", "rounded-2xl", "shadow-lg", "overflow-hidden", "transition-all", "duration-500", "ease-in-out", "transform", "hover:-translate-y-2", "hover:shadow-2xl", "group", 3, "ngClass"], [1, "p-5", "m-3", "relative", "!bg-default-white", "border", "border-gray-200", "rounded-2xl", "shadow-lg", "overflow-hidden", "transition-all", "duration-500", "ease-in-out", "transform", "hover:-translate-y-2", "hover:shadow-2xl", "group", 3, "mouseenter", "mouseleave", "ngClass"], [1, "absolute", "inset-0", "opacity-10", "group-hover:opacity-20", "transition-opacity", "duration-500", "pointer-events-none"], [1, "absolute", "inset-0", "bg-gradient-to-br", "!from-secondary/20", "!to-secondary/30", "animate-pulse"], [1, "p-6", "border-b", "border-gray-100", "relative", "!rounded-xl", 3, "ngClass"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-2xl", "font-bold", 3, "ngClass"], [1, "!bg-secondary/20", "text-secondary", "text-xs", "font-bold", "px-3", "py-1", "rounded-full", "animate-pulse"], [1, "flex", "items-baseline"], [1, "text-4xl", "font-extrabold", 3, "ngClass"], [1, "ml-2", "text-base", "text-gray-500", 3, "ngClass"], [1, "p-6", "relative", 3, "ngClass"], [1, "space-y-4"], [1, "flex", "items-center", 3, "ngClass"], [1, "w-full", "py-3", "px-4", "inline-flex", "justify-center", "items-center", "gap-2", "rounded-lg", "border", "border-transparent", "font-bold", "!bg-secondary", "text-white", "hover:!bg-secondary/90", "focus:outline-none", "focus:ring-2", "focus:ring-secondary", "focus:ring-offset-2", "transition-all", "text-base", "group/button", 3, "ngClass"], [1, "w-full", "py-3", "px-4", "inline-flex", "justify-center", "items-center", "gap-2", "rounded-lg", "border", "border-transparent", "font-bold", "!bg-secondary", "text-white", "hover:!bg-secondary/90", "focus:outline-none", "focus:ring-2", "focus:ring-secondary", "focus:ring-offset-2", "transition-all", "text-base", "group/button", "mt-4", 3, "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-6", "h-6", "mr-3", "text-secondary", "flex-shrink-0", "animate-bounce-slow"], ["fill-rule", "evenodd", "d", "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z", "clip-rule", "evenodd"], [1, ""], [1, "w-full", "py-3", "px-4", "inline-flex", "justify-center", "items-center", "gap-2", "rounded-lg", "border", "border-transparent", "font-bold", "!bg-secondary", "text-white", "hover:!bg-secondary/90", "focus:outline-none", "focus:ring-2", "focus:ring-secondary", "focus:ring-offset-2", "transition-all", "text-base", "group/button", 3, "click", "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "ml-2", "transition-transform", "group-hover/button:translate-x-1"], ["fill-rule", "evenodd", "d", "M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z", "clip-rule", "evenodd"], [1, "w-full", "py-3", "px-4", "inline-flex", "justify-center", "items-center", "gap-2", "rounded-lg", "border", "border-transparent", "font-bold", "!bg-secondary", "text-white", "hover:!bg-secondary/90", "focus:outline-none", "focus:ring-2", "focus:ring-secondary", "focus:ring-offset-2", "transition-all", "text-base", "group/button", "mt-4", 3, "click", "ngClass"]], template: function OnePackageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, OnePackageComponent_Conditional_0_Template, 21, 19, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.subscriptionPackange ? 0 : -1);
      }
    }, dependencies: [
      SubscriptionDurationPipe,
      NgClass
    ], styles: ["\n\n.on-hover[_ngcontent-%COMP%] {\n  border-color: var(--app-color-secondary) !important;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/one-package.component.css.map */"], data: { animation: [scaleSmooth] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OnePackageComponent, { className: "OnePackageComponent" });
})();

// projects/admin-panel/src/app/components/pane/subscriptions/subscription-view/subscription-view.component.ts
function SubscriptionViewComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "app-one-package", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("subscriptionPackange", ctx_r0.subscriptionPackange);
  }
}
function SubscriptionViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SubscriptionViewComponent_Conditional_2_Conditional_0_Template, 2, 1, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r0.subscriptionPackange ? 0 : -1);
  }
}
var SubscriptionViewComponent = class _SubscriptionViewComponent {
  constructor(eventbus, router, currencyService, apNme, mainBarTitle, metaTagService, titleService) {
    this.eventbus = eventbus;
    this.router = router;
    this.currencyService = currencyService;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.breadCrumbs = [
      {
        name: "Dashboard",
        icon: "space_dashboard",
        link: "/"
      },
      {
        name: "Subscriptions List",
        icon: "subscriptions",
        link: "subscription/list"
      },
      {
        name: "View",
        icon: "visibility"
      }
    ];
    this.mainBarTitle.title = "Subscriptions Details";
  }
  ngOnInit() {
    const handlers = {
      oneCompanySubscription: (data) => {
        FrontendLogger.debug("oneCompanySubscription ", data);
        this.companySub = data;
        if (!this.companySub) {
          this.router.navigate([".."]);
          return;
        }
        this.subscriptionPackange = {
          name: this.companySub.name,
          amount: this.companySub.amount,
          duration: this.companySub.duration,
          active: this.companySub.active,
          features: this.companySub.features
        };
        this.mainBarTitle.title = "Subscription Details - " + this.companySub.name;
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily manage and view your subscription packages for tailored service options."
    });
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function SubscriptionViewComponent_Factory(t) {
      return new (t || _SubscriptionViewComponent)(\u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionViewComponent, selectors: [["app-subscription-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [[3, "title", "breadCrumbs"], [1, "max-w-[590px]", "mx-auto", "mt-[100px]"], [3, "subscriptionPackange"]], template: function SubscriptionViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-back-bar", 0);
        \u0275\u0275template(2, SubscriptionViewComponent_Conditional_2_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance();
        \u0275\u0275conditional(2, ctx.companySub ? 2 : -1);
      }
    }, dependencies: [
      OnePackageComponent,
      AdminBackBarComponent,
      AdminPageContentComponent
    ], data: { animation: [scaleSmooth] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionViewComponent, { className: "SubscriptionViewComponent" });
})();
export {
  SubscriptionViewComponent
};
//# sourceMappingURL=chunk-QIE4VZIB.js.map
