import {
  FormFieldBase
} from "./chunk-WJJSEUQ7.js";
import {
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgSelectOption,
  ReactiveFormsModule,
  ɵNgSelectMultipleOption
} from "./chunk-H6XV6YF3.js";
import {
  KeyValuePipe,
  forwardRef,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/components/input/form/base/select-field.base.ts
var SelectFieldBase = class _SelectFieldBase extends FormFieldBase {
  constructor() {
    super();
    this.options = [];
  }
  onChangeEvent(event) {
    const target = event.target;
    const selectedValue = target.value;
    this.updateValue(selectedValue);
  }
  onBlur() {
    this.handleBlur();
  }
  static {
    this.\u0275fac = function SelectFieldBase_Factory(t) {
      return new (t || _SelectFieldBase)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _SelectFieldBase, inputs: { options: "options", placeholderOption: "placeholderOption" }, features: [\u0275\u0275InheritDefinitionFeature] });
  }
};

// projects/admin-panel/src/app/components/pane/misc/form/admin-select-field/admin-select-field.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.key;
function AdminSelectFieldComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("selected", !ctx_r0._value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.placeholderOption, " ");
  }
}
function AdminSelectFieldComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", option_r2.value)("disabled", option_r2.disabled)("selected", ctx_r0._value === option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2.label, " ");
  }
}
function AdminSelectFieldComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AdminSelectFieldComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3, " Optional");
    \u0275\u0275elementEnd();
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " This field is required.");
    \u0275\u0275elementEnd();
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", error_r3.value, " ");
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", error_r3.value, "");
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Needs at least ", error_r3.value.requiredLength, " characters. ");
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Cannot exceed ", error_r3.value.requiredLength, " characters. ");
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Can not be less than ", error_r3.value.min, " ");
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Can not be greater than ", error_r3.value.max, " ");
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Invalid format");
    \u0275\u0275elementEnd();
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", error_r3.value, " ");
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage || "Invalid input");
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_9_Conditional_0_Template, 2, 1, "span")(1, AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_9_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const error_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(0, ctx_r0.isString(error_r3.value) ? 0 : 1);
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_1_Template, 2, 0, "span")(2, AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_2_Template, 2, 1)(3, AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_3_Template, 2, 1)(4, AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_4_Template, 2, 1)(5, AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_5_Template, 2, 1)(6, AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_6_Template, 2, 1)(7, AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_7_Template, 2, 1)(8, AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_8_Template, 2, 0)(9, AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Conditional_9_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(1, error_r3.key === "required" ? 1 : error_r3.key === "customPattern" ? 2 : error_r3.key === "nameLength" ? 3 : error_r3.key === "minlength" ? 4 : error_r3.key === "maxlength" ? 5 : error_r3.key === "min" ? 6 : error_r3.key === "max" ? 7 : error_r3.key === "pattern" ? 8 : 9);
  }
}
function AdminSelectFieldComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, AdminSelectFieldComponent_Conditional_9_Conditional_2_For_2_Template, 10, 1, "div", null, _forTrack1);
    \u0275\u0275pipe(3, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r0.control.errors));
  }
}
function AdminSelectFieldComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, AdminSelectFieldComponent_Conditional_9_Conditional_1_Template, 2, 1, "span")(2, AdminSelectFieldComponent_Conditional_9_Conditional_2_Template, 4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.errorMessage ? 1 : ctx_r0.control.errors ? 2 : -1);
  }
}
var AdminSelectFieldComponent = class _AdminSelectFieldComponent extends SelectFieldBase {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AdminSelectFieldComponent_BaseFactory;
      return function AdminSelectFieldComponent_Factory(t) {
        return (\u0275AdminSelectFieldComponent_BaseFactory || (\u0275AdminSelectFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AdminSelectFieldComponent)))(t || _AdminSelectFieldComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSelectFieldComponent, selectors: [["app-admin-select-field"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _AdminSelectFieldComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _AdminSelectFieldComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 10, vars: 19, consts: [[1, "relative", "mt-5", "mb-5"], [1, "peer", "w-full", "px-4", "py-3", "border-2", "border-gray-300", "rounded-xl", "focus:border-primary", "focus:ring-4", "focus:ring-primary/20", "transition-all", "duration-300", "!bg-default-white", "/50", "group-hover:shadow-sm", 3, "change", "blur", "value", "disabled"], ["value", "", "disabled", "", 3, "selected"], [3, "value", "disabled", "selected"], [1, "absolute", "left-4", "top-3", "text-gray-500", "transition-all", "duration-300", "pointer-events-none", "origin-left", "-translate-y-full", "scale-75", "peer-placeholder-shown:translate-y-0", "peer-placeholder-shown:scale-100", "peer-focus:-translate-y-full", "peer-focus:scale-75", "peer-focus:text-primary", "!bg-default-white", "px-1"], [1, "text-red-500"], [1, "text-red-500", "text-sm", "mt-1", "pl-2", "animate-fade-in"], [1, "text-green-500"]], template: function AdminSelectFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "select", 1);
        \u0275\u0275listener("change", function AdminSelectFieldComponent_Template_select_change_1_listener($event) {
          return ctx.onChangeEvent($event);
        })("blur", function AdminSelectFieldComponent_Template_select_blur_1_listener() {
          return ctx.onBlur();
        });
        \u0275\u0275template(2, AdminSelectFieldComponent_Conditional_2_Template, 2, 2, "option", 2);
        \u0275\u0275repeaterCreate(3, AdminSelectFieldComponent_For_4_Template, 2, 4, "option", 3, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "label", 4);
        \u0275\u0275text(6);
        \u0275\u0275template(7, AdminSelectFieldComponent_Conditional_7_Template, 2, 0, "span", 5)(8, AdminSelectFieldComponent_Conditional_8_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, AdminSelectFieldComponent_Conditional_9_Template, 3, 1, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx._value || "")("disabled", ctx.disabled);
        \u0275\u0275attribute("id", ctx.formControlName)("name", ctx.formControlName);
        \u0275\u0275advance();
        \u0275\u0275conditional(2, ctx.placeholderOption ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.options);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("top-[-0", ctx.control.value || ctx.control.touched || ctx.placeholderOption)("peer-focus:text-primary", true)("dark:peer-focus:text-primary", true)("text-red-500", ctx.checkControlInvalidOrDirty())("dark:text-red-400", ctx.checkControlInvalidOrDirty());
        \u0275\u0275attribute("for", ctx.formControlName);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.label, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.isFormControlRequired ? 7 : 8);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(9, ctx.checkControlInvalidOrDirty() ? 9 : -1);
      }
    }, dependencies: [
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      ReactiveFormsModule,
      KeyValuePipe
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSelectFieldComponent, { className: "AdminSelectFieldComponent" });
})();

export {
  AdminSelectFieldComponent
};
//# sourceMappingURL=chunk-LAO6JDWE.js.map
