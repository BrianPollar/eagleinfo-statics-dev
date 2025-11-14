import {
  SubscriptionDurationPipe,
  subscriptionDurations
} from "./chunk-VKAOE7S2.js";
import {
  SharedToggleFieldComponent
} from "./chunk-7OBDCAFX.js";
import {
  Validators
} from "./chunk-GKDEJT6Q.js";
import {
  generalAnime,
  scaleSmooth,
  slideInAnimation
} from "./chunk-6C27QOWO.js";
import {
  TooltipService
} from "./chunk-RMIF5JQ2.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-H6XV6YF3.js";
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import {
  CompanySubscription,
  EagleInfoClientError,
  FrontendLogger,
  customiseAdvancedAnalyticsQuota,
  customiseAnalyticsQuota,
  customiseDocumentQuota,
  customiseHelpTicketQuota,
  customiseItemQuota,
  customiseMailQuota,
  customiseUserQuota,
  subscriptionPackages
} from "./chunk-MC4HAW4O.js";
import {
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  CurrencyPipe,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  NgClass,
  SlicePipe,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-4EXDEK5V.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/profile/user-dash/on-boarding/steps/steps.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _c0 = (a0, a1) => ({ "active-step": a0, "passed-step": a1 });
var _c1 = (a0) => ({ "passed-step-connector": a0 });
function StepsComponent_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
  if (rf & 2) {
    const i_r1 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c1, ctx_r1.currentStep > i_r1 + 1));
  }
}
function StepsComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, StepsComponent_For_3_Conditional_5_Template, 1, 3, "div", 4);
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    const i_r1 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c0, ctx_r1.currentStep === i_r1 + 1, ctx_r1.currentStep > i_r1 + 1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r1 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", step_r3.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(5, i_r1 < ctx_r1.steps.length - 1 ? 5 : -1);
  }
}
var StepsComponent = class _StepsComponent {
  constructor() {
    this.currentStep = 1;
    this.steps = [];
  }
  static {
    this.\u0275fac = function StepsComponent_Factory(t) {
      return new (t || _StepsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepsComponent, selectors: [["lib-steps"]], inputs: { currentStep: "currentStep", steps: "steps" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [[1, "steps"], [1, "steps__step"], [1, "steps__step-number", 3, "ngClass"], [1, "steps__step-name"], [1, "steps__connector", 3, "ngClass"]], template: function StepsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form")(1, "div", 0);
        \u0275\u0275repeaterCreate(2, StepsComponent_For_3_Template, 6, 7, null, null, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.steps);
      }
    }, dependencies: [
      RouterModule,
      NgClass
    ], styles: ['\n\n*[_ngcontent-%COMP%] {\n  border: 0;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nform[_ngcontent-%COMP%] {\n  container: form/inline-size;\n  margin: auto;\n  padding: 1.5em;\n  width: 100%;\n  max-width: 36em;\n}\n.steps[_ngcontent-%COMP%] {\n  background-color: var(--app-color-white-shade) !important;\n  border-radius: 0.75em;\n  display: flex;\n  padding: 1.5em;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n}\n.steps__connector[_ngcontent-%COMP%], .steps__step[_ngcontent-%COMP%] {\n  position: relative;\n}\n.steps__connector[_ngcontent-%COMP%] {\n  background-color: var(--app-color-white);\n  margin-inline-start: 0.75em;\n  width: 0.125em;\n  height: 1.25em;\n  transform: translateX(-50%);\n  transition: background-color var(--trans-dur);\n}\n.steps__connector[_ngcontent-%COMP%]:before {\n  background-color: var(--app-color-secondary);\n  content: "";\n  display: block;\n  width: 100%;\n  height: 100%;\n  transform: scale(1, 0);\n  transform-origin: 50% 0;\n  transition: background-color var(--trans-dur), transform var(--trans-dur) var(--trans-timing);\n}\n.steps__step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1;\n}\n.steps__step-name[_ngcontent-%COMP%] {\n  color: var(--app-color-secondary);\n  font-size: 0.75em;\n  line-height: 2;\n  transition: color var(--trans-dur) var(--trans-timing), font-weight var(--trans-dur) var(--trans-timing);\n}\n.steps__step-number[_ngcontent-%COMP%] {\n  background-color: var(--app-color-white);\n  color: var(--app-color-secondary);\n  border-radius: 50%;\n  margin-inline-end: 0.5em;\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  padding-top: 0.5em;\n  transition: background-color var(--trans-dur) var(--trans-timing), box-shadow var(--trans-dur) var(--trans-timing);\n}\n@container form (min-width: 30em) {\n  .steps[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    padding: 1.5em 2.25em 2.25em 2.25em;\n  }\n  .steps__connector[_ngcontent-%COMP%] {\n    margin-inline-start: 0;\n    width: 100%;\n    height: 0.125em;\n    transform: translateY(-50%);\n  }\n  .steps__connector[_ngcontent-%COMP%]:before {\n    transform: scale(0, 1);\n    transform-origin: 0 50%;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .steps__connector[_ngcontent-%COMP%]:before {\n    transform-origin: 100% 50%;\n  }\n  .steps__step-name[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    text-align: center;\n    width: 9em;\n    transform: translateX(-50%);\n  }\n  .steps__step-number[_ngcontent-%COMP%] {\n    margin-inline-end: 0;\n  }\n}\n.passed-step[_ngcontent-%COMP%] {\n  background-color: var(--app-color-secondary) !important;\n  color: var(--app-color-white) !important;\n}\n.active-step[_ngcontent-%COMP%] {\n  background-color: var(--app-color-secondary) !important;\n  color: var(--app-color-white) !important;\n  height: 3.5em;\n  width: 3.5em;\n  padding-top: 1em;\n}\n.passed-step-connector[_ngcontent-%COMP%] {\n  background: var(--app-color-secondary) !important;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/steps.component.css.map */'], data: { animation: [slideInAnimation] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepsComponent, { className: "StepsComponent" });
})();

// projects/shared-lib/src/lib/components/subscription/make-subscription-core/make-subscription-core.component.ts
var _forTrack02 = ($index, $item) => $item.type;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.val;
var _c02 = (a0) => ({ "!rounded-tr-[0px] !rounded-br-[0px] !w-[70%]": a0 });
function MakeSubscriptionCoreComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8)(2, "defs")(3, "pattern", 9);
    \u0275\u0275element(4, "rect", 10)(5, "rect", 11)(6, "rect", 12)(7, "rect", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "rect", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(9, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16)(11, "div", 17)(12, "div", 18)(13, "h1", 19);
    \u0275\u0275text(14, " Transform Your Business with Our ");
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "span", 20);
    \u0275\u0275text(17, "All-in-One Solution");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 21);
    \u0275\u0275text(19, " Customisable, business friendly empathetic service plans. Select the plan that best fits your business needs. ");
    \u0275\u0275elementEnd()()()();
  }
}
function MakeSubscriptionCoreComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lib-steps", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("steps", ctx_r0.steps)("currentStep", ctx_r0.step);
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.description);
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_20_For_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const feature_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", feature_r3.limitSize, " days ", feature_r3.name, " ");
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_20_For_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const feature_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", feature_r3.limitSize, " ", feature_r3.name, " ");
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_20_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 49);
    \u0275\u0275template(1, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_20_For_17_Conditional_1_Template, 1, 2)(2, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_20_For_17_Conditional_2_Template, 1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(1, feature_r3.type === "dataRecoveryWindow" ? 1 : 2);
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 39);
    \u0275\u0275element(3, "path", 40)(4, "path", 41)(5, "path", 42)(6, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 44)(8, "span", 45);
    \u0275\u0275text(9, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "span", 46);
    \u0275\u0275text(12, "/ mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "h3", 47);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ul", 48);
    \u0275\u0275repeaterCreate(16, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_20_For_17_Template, 3, 1, "li", 49, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 50)(19, "button", 51);
    \u0275\u0275listener("click", function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_20_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.buyNonCustomSubscription(ctx_r0.subscriptionPackanges[0]));
    });
    \u0275\u0275text(20, " Buy ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r0.subscriptionPackanges[0].amount || 0, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.subscriptionPackanges[0].name || "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.subscriptionPackanges[0].features);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.subscribeEnabled || ctx_r0.makingSubscription);
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_21_For_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const feature_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", feature_r5.limitSize, " days ", feature_r5.name, " ");
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_21_For_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const feature_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", feature_r5.limitSize, " ", feature_r5.name, " ");
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_21_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 49);
    \u0275\u0275template(1, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_21_For_17_Conditional_1_Template, 1, 2)(2, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_21_For_17_Conditional_2_Template, 1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(1, feature_r5.type === "dataRecoveryWindow" ? 1 : 2);
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_21_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_21_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.customisePlan(ctx_r0.subscriptionPackanges[1]));
    });
    \u0275\u0275text(1, " Customise ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", !ctx_r0.subscribeEnabled || ctx_r0.makingSubscription);
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 39);
    \u0275\u0275element(3, "path", 40)(4, "path", 41)(5, "path", 42)(6, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 44)(8, "span", 45);
    \u0275\u0275text(9, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "span", 46);
    \u0275\u0275text(12, "/ mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "h3", 47);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ul", 48);
    \u0275\u0275repeaterCreate(16, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_21_For_17_Template, 3, 1, "li", 49, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 52)(19, "button", 53);
    \u0275\u0275listener("click", function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_21_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.buyNonCustomSubscription(ctx_r0.subscriptionPackanges[1]));
    });
    \u0275\u0275text(20, " Buy ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_21_Conditional_21_Template, 2, 1, "button", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r0.subscriptionPackanges[1].amount || 0, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.subscriptionPackanges[1].name || "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.subscriptionPackanges[1].features);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c02, ctx_r0.customizeEnabled))("disabled", !ctx_r0.subscribeEnabled || ctx_r0.makingSubscription);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(21, ctx_r0.customizeEnabled ? 21 : -1);
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_22_For_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const feature_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", feature_r8.limitSize, " days ", feature_r8.name, " ");
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_22_For_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const feature_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", feature_r8.limitSize, " ", feature_r8.name, " ");
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_22_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 49);
    \u0275\u0275template(1, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_22_For_17_Conditional_1_Template, 1, 2)(2, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_22_For_17_Conditional_2_Template, 1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(1, feature_r8.type === "dataRecoveryWindow" ? 1 : 2);
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_22_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_22_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.customisePlan(ctx_r0.subscriptionPackanges[2]));
    });
    \u0275\u0275text(1, " Customise ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", !ctx_r0.subscribeEnabled || ctx_r0.makingSubscription);
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 39);
    \u0275\u0275element(3, "path", 40)(4, "path", 41)(5, "path", 42)(6, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 44)(8, "span", 45);
    \u0275\u0275text(9, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "span", 46);
    \u0275\u0275text(12, "/ mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "h3", 47);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ul", 48);
    \u0275\u0275repeaterCreate(16, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_22_For_17_Template, 3, 1, "li", 49, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 52)(19, "button", 53);
    \u0275\u0275listener("click", function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_22_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.buyNonCustomSubscription(ctx_r0.subscriptionPackanges[2]));
    });
    \u0275\u0275text(20, " Buy ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_22_Conditional_21_Template, 2, 1, "button", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r0.subscriptionPackanges[2].amount || 0, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.subscriptionPackanges[2].name || "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.subscriptionPackanges[2].features);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c02, ctx_r0.customizeEnabled))("disabled", !ctx_r0.subscribeEnabled || ctx_r0.makingSubscription);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(21, ctx_r0.customizeEnabled ? 21 : -1);
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 4)(2, "form", 24)(3, "div", 25)(4, "div", 4);
    \u0275\u0275text(5, "Monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 26);
    \u0275\u0275element(7, "lib-shared-toggle-field", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275text(9, " Yearly ");
    \u0275\u0275elementStart(10, "span", 28)(11, "span", 29);
    \u0275\u0275element(12, "span", 30);
    \u0275\u0275elementStart(13, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 32);
    \u0275\u0275element(15, "path", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span", 34);
    \u0275\u0275text(17, " Save 10% ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(18, "section")(19, "div", 35);
    \u0275\u0275template(20, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_20_Template, 21, 3, "div", 36)(21, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_21_Template, 22, 7, "div", 37)(22, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Conditional_22_Template, 22, 7, "div", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("label", "")("formControlName", "duration")("showRequiredType", false);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(20, ctx_r0.subscriptionPackanges && ctx_r0.subscriptionPackanges.length > 0 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(21, ctx_r0.subscriptionPackanges && ctx_r0.subscriptionPackanges.length > 1 ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(22, ctx_r0.subscriptionPackanges && ctx_r0.subscriptionPackanges.length > 2 ? 22 : -1);
  }
}
function MakeSubscriptionCoreComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4);
    \u0275\u0275template(1, MakeSubscriptionCoreComponent_Conditional_5_Conditional_1_Template, 2, 1, "h2", 22)(2, MakeSubscriptionCoreComponent_Conditional_5_Conditional_2_Template, 2, 1, "p", 23)(3, MakeSubscriptionCoreComponent_Conditional_5_Conditional_3_Template, 23, 7, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.title ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ctx_r0.description ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ctx_r0.subscriptionPackanges && ctx_r0.subscriptionPackanges.length > 0 ? 3 : -1);
  }
}
function MakeSubscriptionCoreComponent_Conditional_7_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "subscriptionDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const duration_r11 = ctx.$implicit;
    \u0275\u0275property("value", duration_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, duration_r11.value), " ");
  }
}
function MakeSubscriptionCoreComponent_Conditional_7_For_25_Conditional_7_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r14 = ctx.$implicit;
    \u0275\u0275property("value", type_r14.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", type_r14.val, " ", "@", " ", \u0275\u0275pipeBind1(2, 4, type_r14.cost), " ");
  }
}
function MakeSubscriptionCoreComponent_Conditional_7_For_25_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 62);
    \u0275\u0275listener("change", function MakeSubscriptionCoreComponent_Conditional_7_For_25_Conditional_7_Conditional_0_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const feature_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectedModuleVal($event, feature_r13));
    });
    \u0275\u0275repeaterCreate(1, MakeSubscriptionCoreComponent_Conditional_7_For_25_Conditional_7_Conditional_0_For_2_Template, 3, 6, "option", 63, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", feature_r13.addonLimit);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getFeatureAddon(feature_r13.type));
  }
}
function MakeSubscriptionCoreComponent_Conditional_7_For_25_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MakeSubscriptionCoreComponent_Conditional_7_For_25_Conditional_7_Conditional_0_Template, 3, 1, "select", 75);
  }
  if (rf & 2) {
    const feature_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, ctx_r0.getFeatureAddon(feature_r13.type) ? 0 : -1);
  }
}
function MakeSubscriptionCoreComponent_Conditional_7_For_25_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " 0 ");
  }
}
function MakeSubscriptionCoreComponent_Conditional_7_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 69)(1, "div", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73)(4, "span");
    \u0275\u0275text(5, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 74);
    \u0275\u0275template(7, MakeSubscriptionCoreComponent_Conditional_7_For_25_Conditional_7_Template, 1, 1)(8, MakeSubscriptionCoreComponent_Conditional_7_For_25_Conditional_8_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feature_r13.limitSize, " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(7, !feature_r13.isUnlimited && feature_r13.type !== "dataRecoveryWindow" ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", feature_r13.name, " ");
  }
}
function MakeSubscriptionCoreComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 56)(2, "div")(3, "div", 57)(4, "div", 58)(5, "p", 59)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3", 60)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 61);
    \u0275\u0275text(13, "/ ");
    \u0275\u0275elementStart(14, "select", 62);
    \u0275\u0275listener("change", function MakeSubscriptionCoreComponent_Conditional_7_Template_select_change_14_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.durationChange($event));
    });
    \u0275\u0275repeaterCreate(15, MakeSubscriptionCoreComponent_Conditional_7_For_16_Template, 3, 4, "option", 63, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 64)(18, "button", 65);
    \u0275\u0275listener("click", function MakeSubscriptionCoreComponent_Conditional_7_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetCustomPlan());
    });
    \u0275\u0275text(19, " Reset ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 66);
    \u0275\u0275listener("click", function MakeSubscriptionCoreComponent_Conditional_7_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToStep(1));
    });
    \u0275\u0275text(21, " Discard ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 67)(23, "ol", 68);
    \u0275\u0275repeaterCreate(24, MakeSubscriptionCoreComponent_Conditional_7_For_25_Template, 11, 3, "li", 69, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 70)(27, "button", 71);
    \u0275\u0275listener("click", function MakeSubscriptionCoreComponent_Conditional_7_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.buyCustomPlan());
    });
    \u0275\u0275text(28, " Buy ");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(8, 6, ctx_r0.subscriptionPackangeCustom && ctx_r0.subscriptionPackangeCustom.name, 0, 20));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.subscriptionPackangeCustom && ctx_r0.subscriptionPackangeCustom.amount || 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r0.subscriptionPackangeCustom && ctx_r0.subscriptionPackangeCustom.duration);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.durations);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.subscribeEnabled || ctx_r0.makingSubscription);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.subscribeEnabled || ctx_r0.makingSubscription);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.subscriptionPackangeCustom == null ? null : ctx_r0.subscriptionPackangeCustom.features);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.subscribeEnabled || ctx_r0.makingSubscription);
  }
}
function MakeSubscriptionCoreComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275element(2, "div", 78)(3, "div", 79);
    \u0275\u0275elementStart(4, "div", 80)(5, "div", 81);
    \u0275\u0275element(6, "div", 82)(7, "div", 83)(8, "div", 84);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "h3", 85);
    \u0275\u0275text(10, " Preparing Your Subscription ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 86);
    \u0275\u0275text(12, " We're getting everything ready for you. This will just take a moment... ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 87);
    \u0275\u0275element(14, "div", 88);
    \u0275\u0275elementEnd()();
  }
}
function MakeSubscriptionCoreComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "iframe", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.frameUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function MakeSubscriptionCoreComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, MakeSubscriptionCoreComponent_Conditional_9_Conditional_1_Template, 15, 0, "div", 76)(2, MakeSubscriptionCoreComponent_Conditional_9_Conditional_2_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.makingSubscription ? 1 : 2);
  }
}
var MakeSubscriptionCoreComponent = class _MakeSubscriptionCoreComponent {
  constructor(fb, tooltipService, sanitizer, currencyService, elementRef) {
    this.fb = fb;
    this.tooltipService = tooltipService;
    this.sanitizer = sanitizer;
    this.currencyService = currencyService;
    this.elementRef = elementRef;
    this.header = true;
    this.isFromModal = false;
    this.customizeEnabled = true;
    this.subscribeEnabled = true;
    this.title = "";
    this.allowSteps = true;
    this.completed = new EventEmitter();
    this.animationState = "slideRight";
    this.display = "block";
    this.makingSubscription = false;
    this.subscriptionPackanges = subscriptionPackages.map((packange) => {
      return __spreadProps(__spreadValues({}, packange), {
        addonAmount: 0,
        originalAmount: packange.amount,
        features: packange.features.map((feature) => {
          return __spreadProps(__spreadValues({}, feature), {
            addonLimit: 0,
            originalLimit: feature.limitSize,
            prevAmount: 0
          });
        })
      });
    });
    this.durations = subscriptionDurations;
    this.step = 1;
    this.prevStep = 1;
    this.steps = [
      {
        title: "Select Plan",
        description: "Choose a plan that best fits your needs"
      },
      {
        title: "Customize Plan",
        description: "Customize your plan to fit your needs"
      },
      {
        title: "Payment",
        description: "Make a payment to complete your subscription"
      }
    ];
    this.currentDuration = "Monthly";
    this.form = this.fb.group({
      duration: [false, [Validators.required]]
    });
  }
  ngAfterViewInit() {
    const element = this.elementRef.nativeElement;
    element.addEventListener("@generalAnimation.start", this.onAnimationStart.bind(this));
    element.addEventListener("@generalAnimation.done", this.onAnimationEnd.bind(this));
    this.listenToDuractionChange();
  }
  onAnimationStart(event) {
    FrontendLogger.debug("Animation started", event);
  }
  onAnimationEnd(event) {
    FrontendLogger.debug("Animation ended", event);
  }
  // Update step with animation
  goToStep(step) {
    if (step === this.step) {
      return;
    }
    ;
    this.prevStep = this.step;
    this.animationState = step > this.step ? "slideLeft" : "slideRight";
    this.step = step;
  }
  // Navigation methods
  nextStep() {
    if (this.step < this.steps.length) {
      this.goToStep(this.step + 1);
    }
  }
  listenToDuractionChange() {
    this.form.get("duration")?.valueChanges.subscribe((duration) => {
      this.allDurationChange(duration);
    });
  }
  allDurationChange(duration) {
    this.subscriptionPackanges.forEach((packange) => {
      packange.duration = duration ? 12 : 1;
      packange.amount = duration ? packange.originalAmount * 0.9 : packange.originalAmount;
    });
    this.currentDuration = duration ? "Yearly" : "Monthly";
  }
  buyNonCustomSubscription(subscription) {
    if (!subscription) {
      throw new EagleInfoClientError("Subscription is required");
    }
    subscription.duration = this.form.get("duration")?.value ? 12 : 1;
    subscription.amount = (this.form.get("duration")?.value ? subscription.originalAmount * 0.9 : subscription.originalAmount) * subscription.duration;
    this.makeSubscription(subscription);
  }
  makeSubscription(subscription) {
    return __async(this, null, function* () {
      if (!subscription) {
        throw new EagleInfoClientError("Subscription is required");
      }
      const packageFeatures = subscription.features.map((feature) => {
        const data = {
          type: feature.type,
          name: feature.name,
          description: feature.description,
          limitSize: feature.originalLimit + feature.addonLimit,
          remainingSize: feature.originalLimit + feature.addonLimit,
          isUnlimited: feature.isUnlimited
        };
        return data;
      });
      try {
        this.goToStep(3);
        this.makingSubscription = true;
        this.subError = "";
        const res = yield CompanySubscription.subscribe({
          name: subscription.name,
          amount: subscription.amount,
          duration: subscription.duration,
          features: packageFeatures
        }, this.companyId);
        FrontendLogger.debug("ON PESAPAL RES ", res);
        if (res && res.paymentMeta) {
          this.createFrame(res.paymentMeta);
        }
      } catch (error) {
        FrontendLogger.error(error);
        this.subError = error;
        this.goToStep(this.prevStep);
      } finally {
        this.makingSubscription = false;
      }
    });
  }
  toggleScale(id) {
    if (id === this.currToggleId) {
      this.currToggleId = "";
      return;
    }
    this.currToggleId = id;
  }
  createFrame(data) {
    this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data?.redirect_url);
  }
  selectedModuleVal(ev, feature) {
    FrontendLogger.debug("selectedModuleVal event is ", ev.target.value);
    feature.addonLimit = Number(ev.target.value);
    const limitAmount = this.getFeatureAddon(feature.type).find((limit) => {
      return limit.val === feature.addonLimit;
    });
    const prevAmount = feature.prevAmount;
    feature.prevAmount = limitAmount?.cost || 0;
    if (!this.subscriptionPackangeCustom) {
      return;
    }
    this.subscriptionPackangeCustom.addonAmount += (limitAmount?.cost || 0) - prevAmount;
    this.calculateCustomCost();
  }
  durationChange(ev) {
    FrontendLogger.info("durationChange event is ", ev.target.value);
    if (!this.subscriptionPackangeCustom) {
      return;
    }
    this.subscriptionPackangeCustom.duration = Number(ev.target.value);
    this.calculateCustomCost();
  }
  customisePlan(plan) {
    this.nextStep();
    plan.duration = 1;
    plan.amount = plan.originalAmount;
    this.subscriptionPackangeCustom = Object.assign({}, plan);
  }
  calculateCustomCost() {
    if (!this.subscriptionPackangeCustom || !this.subscriptionPackangeCustom.duration || !this.subscriptionPackangeCustom.features) {
      return;
    }
    FrontendLogger.info("calculateCustomCost subscriptionPackangeCustom is ", this.subscriptionPackangeCustom);
    if (this.subscriptionPackangeCustom.duration !== 12) {
      this.subscriptionPackangeCustom.amount = (this.subscriptionPackangeCustom.originalAmount + this.subscriptionPackangeCustom.addonAmount) * this.subscriptionPackangeCustom.duration;
    } else {
      this.subscriptionPackangeCustom.amount = (this.subscriptionPackangeCustom.originalAmount + this.subscriptionPackangeCustom.addonAmount) * this.subscriptionPackangeCustom.duration * 0.9;
    }
  }
  resetCustomPlan() {
    if (!this.subscriptionPackangeCustom) {
      return;
    }
    this.subscriptionPackangeCustom = Object.assign({}, this.subscriptionPackanges.find((packange) => {
      return packange.name === this.subscriptionPackangeCustom?.name;
    }));
  }
  buyCustomPlan() {
    if (!this.subscriptionPackangeCustom) {
      return;
    }
    this.calculateCustomCost();
    this.makeSubscription(this.subscriptionPackangeCustom);
  }
  getFeatureAddon(name) {
    switch (name) {
      case "user":
        return customiseUserQuota;
      case "document":
        return customiseDocumentQuota;
      case "item":
        return customiseItemQuota;
      case "analytics":
        return customiseAnalyticsQuota;
      case "advancedAnalytics":
        return customiseAdvancedAnalyticsQuota;
      case "helpTicket":
        return customiseHelpTicketQuota;
      case "mail":
        return customiseMailQuota;
    }
    return [];
  }
  getSelecVal(feature) {
    return feature.limitSize.toString();
  }
  static {
    this.\u0275fac = function MakeSubscriptionCoreComponent_Factory(t) {
      return new (t || _MakeSubscriptionCoreComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MakeSubscriptionCoreComponent, selectors: [["lib-make-subscription-core"]], hostVars: 3, hostBindings: function MakeSubscriptionCoreComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275syntheticHostListener("@generalAnimation.start", function MakeSubscriptionCoreComponent_animation_generalAnimation_start_HostBindingHandler($event) {
          return ctx.onAnimationStart($event);
        })("@generalAnimation.done", function MakeSubscriptionCoreComponent_animation_generalAnimation_done_HostBindingHandler($event) {
          return ctx.onAnimationEnd($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275syntheticHostProperty("@generalAnimation", ctx.animationState);
        \u0275\u0275styleProp("display", ctx.display);
      }
    }, inputs: { header: "header", isFromModal: "isFromModal", customizeEnabled: "customizeEnabled", subscribeEnabled: "subscribeEnabled", title: "title", description: "description", companyId: "companyId", allowSteps: "allowSteps" }, outputs: { completed: "completed" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 8, consts: [[1, "col-xl-9", "col-md-8", "w-full"], [1, "mx-auto", "md:px-6"], [3, "steps", "currentStep"], [1, "step-container"], [1, ""], [1, "relative", "p-6", "flex-auto"], [1, "w-full", "h-full", "mx-auto"], [1, "relative", "rounded-3xl", "overflow-hidden", "h-[250px]", "bg-gray-900"], ["width", "100%", "height", "100%", "viewBox", "0 0 100 100", "preserveAspectRatio", "none", 1, "absolute", "inset-0", "w-full", "h-full"], ["id", "dark-pattern", "x", "0", "y", "0", "width", "20", "height", "20", "patternUnits", "userSpaceOnUse", "patternTransform", "rotate(45)"], ["x", "0", "y", "0", "width", "10", "height", "10", "fill", "#1a1a2e"], ["x", "10", "y", "10", "width", "10", "height", "10", "fill", "#1a1a2e"], ["x", "10", "y", "0", "width", "10", "height", "10", "fill", "#16213e"], ["x", "0", "y", "10", "width", "10", "height", "10", "fill", "#16213e"], ["width", "100%", "height", "100%", "fill", "url(#dark-pattern)"], [1, "absolute", "inset-0", "bg-gradient-to-br", "from-gray-900/80", "to-gray-900/90"], [1, "container", "mx-auto", "px-6", "md:px-12", "xl:px-32"], [1, "text-center"], [1, "mt-[-170px]", "block", "rounded-lg", "bg-[hsla(0,0%,100%,0.55)]", "bg-[hsla(0,0%,100%,0.7)]", "px-6", "py-12", "shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]", "backdrop-blur-[30px]", "md:py-16", "md:px-12"], [1, "mb-16", "text-xl", "font-bold", "tracking-tight", "md:text-xl", "xl:text-xl", "text-white"], [1, "text-danger", "text-[24px]"], [1, "text-white"], [1, "mb-12", "text-center", "text-3xl", "font-bold"], [1, "text-center", "text-lg"], [1, "login-form", 3, "formGroup"], [1, "pb-2", "flex", "items-center", "justify-center", "text-lg", "gap-3", "m-[40px]", "!bg-success", "w-[400px]", "mx-auto", "rounded-3xl", "h-[50px]", "duration-holder"], [1, "pt-[5px]"], ["labelPosition", "left", 1, "text-xs", 3, "label", "formControlName", "showRequiredType"], [1, "inline-flex", "items-center", "gap-1.5", "ml-2.5", "group"], [1, "relative", "flex", "h-5", "w-5"], [1, "animate-ping", "absolute", "inline-flex", "h-full", "w-full", "rounded-full", "bg-green-100", "opacity-75", "group-hover:opacity-100", "transition-opacity", "duration-300"], [1, "relative", "inline-flex", "items-center", "justify-center", "rounded-full", "h-5", "w-5", "bg-green-50", "border", "border-green-100", "group-hover:bg-green-100", "transition-colors", "duration-300"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-3", "h-3", "text-success"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "3", "d", "M5 13l4 4L19 7"], [1, "text-sm", "font-bold", "!text-white"], [1, "pricing", "pricing-palden"], [1, "pricing-item"], [1, "pricing-item", "pricing__item--featured"], [1, "pricing-deco"], ["enable-background", "new 0 0 300 100", "height", "100px", "id", "Layer_1", "preserveAspectRatio", "none", "version", "1.1", "viewBox", "0 0 300 100", "width", "300px", "x", "0px", 0, "xml", "space", "preserve", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "xmlns", "http://www.w3.org/2000/svg", "y", "0px", 1, "pricing-deco-img"], ["d", "M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729\n	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z", "fill", "currentColor", "opacity", "0.6", 1, "deco-layer", "deco-layer--1"], ["d", "M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729\n	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z", "fill", "currentColor", "opacity", "0.6", 1, "deco-layer", "deco-layer--2"], ["d", "M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716\n	H42.401L43.415,98.342z", "fill", "currentColor", "opacity", "0.7", 1, "deco-layer", "deco-layer--3"], ["d", "M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428\n	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z", "fill", "currentColor", 1, "deco-layer", "deco-layer--4"], [1, "pricing-price"], [1, "pricing-currency"], [1, "pricing-period"], [1, "pricing-title"], [1, "pricing-feature-list"], [1, "pricing-feature"], [1, "pricing-action-action-container"], [1, "pricing-action", 3, "click", "disabled"], [1, "flex", "flex-row", "items-center", "justify-center", "!gap-0", "pricing-action-action-container"], [1, "pricing-action", 3, "click", "ngClass", "disabled"], [1, "pricing-action", "!btn-primary", "!rounded-tl-[0px]", "!rounded-bl-[0px]", "!bg-primary", "!w-[50%]", "!text-start", 3, "disabled"], [1, "pricing-action", "!btn-primary", "!rounded-tl-[0px]", "!rounded-bl-[0px]", "!bg-primary", "!w-[50%]", "!text-start", 3, "click", "disabled"], [1, "mx-auto", "w-[400px]", "max-w-[1200px]", "md:px-3"], [1, "block", "h-full", "rounded-lg", "bg-white", "shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]", "!rounded-3xl", 2, "z-index", "1"], [1, "border-b-2", "border-neutral-100", "border-opacity-100", "p-6", "text-center"], [1, "mb-4", "text-sm", "uppercase"], [1, "mb-6", "text-3xl"], [1, "text-base", "text-neutral-500"], [1, "border", "border-primary", "text-sm", "rounded-lg", "focus:ring-primary", "focus:border-primary", "block", "w-full", "p-2.5", 3, "change", "value"], [3, "value"], [1, "flex", "flex-row", "justify-center", "gap-2"], [1, "pricing-action", "!w-[300px]", "mx-auto", "!bg-primary", 3, "click", "disabled"], [1, "pricing-action", "!w-[300px]", "mx-auto", "!bg-red", 3, "click", "disabled"], [1, "p-1"], [1, "list-inside"], [1, "mb-4", "flex", "flex-row", "gap-2"], [1, "flex", "flex-row", "justify-center", "pb-6"], [1, "pricing-action", "!w-[300px]", "mx-auto", 3, "click", "disabled"], [1, "!w-[100px]", "!min-w-[100px]"], [1, "!w-[100px]", "!min-w-[150px]", "!max-w-[150px]", "flex", "flex-row"], [1, "pr-10", "!w-[100%]"], [1, "border", "border-primary", "text-sm", "rounded-lg", "focus:ring-primary", "focus:border-primary", "block", "w-full", "p-2.5", 3, "value"], [1, "flex", "flex-col", "items-center", "justify-center", "min-h-[400px]", "p-8", "text-center"], [1, "relative", "w-32", "h-32", "mb-8"], [1, "absolute", "inset-0", "rounded-full", "border-4", "border-primary/20"], [1, "absolute", "inset-0", "rounded-full", "border-4", "border-t-primary", "border-r-transparent", "border-b-transparent", "border-l-transparent", "animate-spin-slow"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "flex", "space-x-1"], [1, "w-2", "h-2", "!bg-secondary", "rounded-full", "animate-bounce", 2, "animation-delay", "0s"], [1, "w-2", "h-2", "!bg-secondary", "rounded-full", "animate-bounce", 2, "animation-delay", "0.2s"], [1, "w-2", "h-2", "!bg-secondary", "rounded-full", "animate-bounce", 2, "animation-delay", "0.4s"], [1, "text-xl", "font-semibold", "text-foreground", "mb-2"], [1, "text-muted-foreground", "max-w-md"], [1, "w-full", "max-w-xs", "h-2", "bg-gray-200", "rounded-full", "overflow-hidden", "mt-6"], [1, "h-full", "!bg-secondary", "rounded-full", "animate-pulse"], [1, "relative", "w-full", "h-full", "min-h-[500px]", "bg-white", "rounded-xl", "shadow-lg", "overflow-hidden", "transition-all", "duration-300"], ["title", "Secure Payment Gateway", "allowpaymentrequest", "true", "sandbox", "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation", 1, "w-full", "h-full", "min-h-[500px]", "border-0", 3, "src"]], template: function MakeSubscriptionCoreComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, MakeSubscriptionCoreComponent_Conditional_2_Template, 20, 0)(3, MakeSubscriptionCoreComponent_Conditional_3_Template, 1, 2, "lib-steps", 2);
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275template(5, MakeSubscriptionCoreComponent_Conditional_5_Template, 4, 3, "section", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275template(7, MakeSubscriptionCoreComponent_Conditional_7_Template, 29, 10, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 3);
        \u0275\u0275template(9, MakeSubscriptionCoreComponent_Conditional_9_Template, 3, 1, "div", 6);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(2, ctx.header ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(3, ctx.allowSteps ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("@generalAnimation", ctx.step === 1 ? "slideLeft" : "slideRight");
        \u0275\u0275advance();
        \u0275\u0275conditional(5, ctx.step === 1 ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("@generalAnimation", ctx.step === 2 ? "slideLeft" : "slideRight");
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.step === 2 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("@generalAnimation", ctx.step === 3 ? "slideLeft" : "slideRight");
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.step === 3 ? 9 : -1);
      }
    }, dependencies: [
      RouterModule,
      SubscriptionDurationPipe,
      SlicePipe,
      StepsComponent,
      CurrencyPipe,
      NgClass,
      SharedToggleFieldComponent,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName
    ], styles: ['\n\nbody[_ngcontent-%COMP%] {\n  -webkit-font-smoothing: antialiased;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 5px 0 5px;\n  position: relative;\n  -webkit-font-smoothing: antialiased;\n}\n.pricing[_ngcontent-%COMP%] {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 100%;\n  margin: 0 auto 3em;\n}\n.pricing-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-align-items: stretch;\n  align-items: stretch;\n  text-align: center;\n  -webkit-flex: 0 1 330px;\n  flex: 0 1 330px;\n}\n.pricing-action[_ngcontent-%COMP%] {\n  color: inherit;\n  border: none;\n  background: none;\n}\n.pricing-action[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.pricing-feature-list[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing-item[_ngcontent-%COMP%] {\n  font-family: "Open Sans", sans-serif;\n  cursor: default;\n  color: var(--app-color-dark);\n  background: var(--app-color-white);\n  box-shadow: 0 0 10px rgba(46, 59, 125, 0.23);\n  border-radius: 20px 20px 10px 10px;\n  margin: 1em;\n}\n@media screen and (min-width: 66.25em) {\n  .pricing-palden[_ngcontent-%COMP%]   .pricing-item[_ngcontent-%COMP%] {\n    margin: 1em -0.5em;\n  }\n  .pricing-palden[_ngcontent-%COMP%]   .pricing__item--featured[_ngcontent-%COMP%] {\n    margin: 0;\n    z-index: 5;\n    box-shadow: 0 0 20px rgba(46, 59, 125, 0.23);\n  }\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing-deco[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n  background: var(--app-color-secondary);\n  padding: 4em 0 9em;\n  position: relative;\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing-deco-img[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 160px;\n  color: var(--app-color-white);\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing-title[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  color: #fff;\n}\n.pricing-palden[_ngcontent-%COMP%]   .deco-layer[_ngcontent-%COMP%] {\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing-item[_ngcontent-%COMP%]:hover   .deco-layer--1[_ngcontent-%COMP%] {\n  -webkit-transform: translate3d(15px, 0, 0);\n  transform: translate3d(15px, 0, 0);\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing-item[_ngcontent-%COMP%]:hover   .deco-layer--2[_ngcontent-%COMP%] {\n  -webkit-transform: translate3d(-15px, 0, 0);\n  transform: translate3d(-15px, 0, 0);\n}\n.pricing-palden[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing-price[_ngcontent-%COMP%] {\n  font-size: 5em;\n  font-weight: bold;\n  padding: 0;\n  color: #fff;\n  margin: 0 0 0.25em 0;\n  line-height: 0.75;\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing-currency[_ngcontent-%COMP%] {\n  font-size: 0.15em;\n  vertical-align: top;\n  color: #fff;\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing-period[_ngcontent-%COMP%] {\n  font-size: 0.15em;\n  padding: 0 0 0 0.5em;\n  font-style: italic;\n  color: #fff;\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing__sentence[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0 0 1em 0;\n  padding: 0 0 0.5em;\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing-feature-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 3px 0 3px;\n  list-style: none;\n  text-align: center;\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing-feature[_ngcontent-%COMP%] {\n  padding: 7px 0;\n}\n.pricing-action-action-container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto 2.7em 1.7em 2.7em;\n  margin-left: 10%;\n}\n.pricing-action[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: bold;\n  padding: 0.7em 1.7em;\n  color: #fff;\n  border-radius: 30px;\n  background: var(--app-color-secondary);\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n}\n.pricing-action[_ngcontent-%COMP%]:hover, .pricing-action[_ngcontent-%COMP%]:focus {\n  background-color: var(--app-color-secondary-shade);\n}\n.pricing-palden[_ngcontent-%COMP%]   .pricing-item--featured[_ngcontent-%COMP%]   .pricing-deco[_ngcontent-%COMP%] {\n  padding: 5em 0 8.885em 0;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/make-subscription-core.component.css.map */'], data: { animation: [
      scaleSmooth,
      generalAnime
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MakeSubscriptionCoreComponent, { className: "MakeSubscriptionCoreComponent" });
})();

export {
  MakeSubscriptionCoreComponent
};
//# sourceMappingURL=chunk-ACZAPK7E.js.map
