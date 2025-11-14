import {
  LoaderSpinnerComponent
} from "./chunk-ZAFBV4O5.js";
import {
  TooltipComponent
} from "./chunk-4KKGHO4P.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-H6XV6YF3.js";
import {
  EagleInfoClientError
} from "./chunk-MC4HAW4O.js";
import {
  EventEmitter,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/components/input/form/buttons/base/form-button.base.ts
var FormButtonBase = class _FormButtonBase {
  constructor() {
    this.btnText = "Save";
    this.save = new EventEmitter();
  }
  ngOnInit() {
    if (!this.save.observers.length) {
      throw new EagleInfoClientError('The "submit" event must be handled by the parent component.');
    }
  }
  static {
    this.\u0275fac = function FormButtonBase_Factory(t) {
      return new (t || _FormButtonBase)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FormButtonBase, inputs: { posting: "posting", disabled: "disabled", tooltip: "tooltip", btnText: "btnText" }, outputs: { save: "save" } });
  }
};

// projects/admin-panel/src/app/components/pane/misc/form/button/admin-form-button/admin-form-button.component.ts
function AdminFormButtonComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lib-loader-spinner");
  }
}
var AdminFormButtonComponent = class _AdminFormButtonComponent extends FormButtonBase {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AdminFormButtonComponent_BaseFactory;
      return function AdminFormButtonComponent_Factory(t) {
        return (\u0275AdminFormButtonComponent_BaseFactory || (\u0275AdminFormButtonComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AdminFormButtonComponent)))(t || _AdminFormButtonComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminFormButtonComponent, selectors: [["app-admin-form-button"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 7, vars: 4, consts: [[1, "mt-10"], [3, "popper"], [1, "w-full", "py-3.5", "rounded-xl", "!bg-primary", "text-white", "font-bold", "uppercase", "tracking-wider", "hover:bg-primary-600", "focus:outline-none", "focus:ring-4", "focus:ring-primary/40", "transition-all", "duration-300", "ease-in-out", "transform", "hover:scale-[1.02]", "disabled:opacity-50", "disabled:cursor-not-allowed", "group", "shadow-lg", "shadow-primary/30", "hover:shadow-primary/40", "flex", "items-center", "justify-center", 3, "click", "disabled"], [1, "flex", "gap-2", "items-center", "justify-center", "space-x-2", "px-2"]], template: function AdminFormButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "lib-tooltip", 1)(2, "button", 2);
        \u0275\u0275listener("click", function AdminFormButtonComponent_Template_button_click_2_listener() {
          return ctx.save.emit();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275template(4, AdminFormButtonComponent_Conditional_4_Template, 1, 0, "lib-loader-spinner");
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("popper", ctx.tooltip);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.disabled || ctx.posting);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(4, ctx.posting ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.btnText);
      }
    }, dependencies: [
      FormsModule,
      ReactiveFormsModule,
      TooltipComponent,
      LoaderSpinnerComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminFormButtonComponent, { className: "AdminFormButtonComponent" });
})();

export {
  AdminFormButtonComponent
};
//# sourceMappingURL=chunk-SC3J5HE4.js.map
