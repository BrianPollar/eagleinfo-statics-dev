import {
  FormFieldBase
} from "./chunk-WJJSEUQ7.js";
import {
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
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

// projects/shared-lib/src/lib/components/input/form/base/textarea-field.base.ts
var TextareaFieldBase = class _TextareaFieldBase extends FormFieldBase {
  constructor() {
    super();
    this.rows = 4;
    this.spellCheck = false;
    this.autocomplete = "off";
    this.autocorrect = "off";
    this.autocapitalize = "off";
    this.enterkeyhint = "enter";
  }
  // Optional: Override validate if textarea needs specific validation
  validate(control) {
    const specificErrors = {};
    return Object.keys(specificErrors).length ? specificErrors : null;
  }
  // --- Template Interaction ---
  onInput(event) {
    const target = event.target;
    this.updateValue(target.value);
  }
  onBlur() {
    this.handleBlur();
  }
  static {
    this.\u0275fac = function TextareaFieldBase_Factory(t) {
      return new (t || _TextareaFieldBase)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TextareaFieldBase, inputs: { rows: "rows", spellCheck: "spellCheck", autocomplete: "autocomplete", autocorrect: "autocorrect", autocapitalize: "autocapitalize", enterkeyhint: "enterkeyhint" }, features: [\u0275\u0275InheritDefinitionFeature] });
  }
};

// projects/admin-panel/src/app/components/pane/misc/form/admin-textarea-field/admin-textarea-field.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function AdminTextareaFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AdminTextareaFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, " Optional");
    \u0275\u0275elementEnd();
  }
}
function AdminTextareaFieldComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
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
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " is required.");
  }
}
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", error_r2.value, " ");
  }
}
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", error_r2.value, "");
  }
}
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Needs at least ", error_r2.value.requiredLength, " characters. ");
  }
}
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Cannot exceed ", error_r2.value.requiredLength, " characters. ");
  }
}
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Can not be less than ", error_r2.value.min, " ");
  }
}
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Can not be greater than ", error_r2.value.max, " ");
  }
}
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Invalid format");
    \u0275\u0275elementEnd();
  }
}
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", error_r2.value, " ");
  }
}
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_9_Conditional_1_Template(rf, ctx) {
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
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_9_Conditional_0_Template, 2, 1, "span")(1, AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_9_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(0, ctx_r0.isString(error_r2.value) ? 0 : 1);
  }
}
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_1_Template, 2, 1, "span")(2, AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_2_Template, 2, 1)(3, AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_3_Template, 2, 1)(4, AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_4_Template, 2, 1)(5, AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_5_Template, 2, 1)(6, AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_6_Template, 2, 1)(7, AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_7_Template, 2, 1)(8, AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_8_Template, 2, 0)(9, AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Conditional_9_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(1, error_r2.key === "required" ? 1 : error_r2.key === "customPattern" ? 2 : error_r2.key === "nameLength" ? 3 : error_r2.key === "minlength" ? 4 : error_r2.key === "maxlength" ? 5 : error_r2.key === "min" ? 6 : error_r2.key === "max" ? 7 : error_r2.key === "pattern" ? 8 : 9);
  }
}
function AdminTextareaFieldComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, AdminTextareaFieldComponent_Conditional_6_Conditional_2_For_2_Template, 10, 1, "div", null, _forTrack0);
    \u0275\u0275pipe(3, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r0.control.errors));
  }
}
function AdminTextareaFieldComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, AdminTextareaFieldComponent_Conditional_6_Conditional_1_Template, 2, 1, "span")(2, AdminTextareaFieldComponent_Conditional_6_Conditional_2_Template, 4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.errorMessage ? 1 : ctx_r0.control.errors ? 2 : -1);
  }
}
var AdminTextareaFieldComponent = class _AdminTextareaFieldComponent extends TextareaFieldBase {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AdminTextareaFieldComponent_BaseFactory;
      return function AdminTextareaFieldComponent_Factory(t) {
        return (\u0275AdminTextareaFieldComponent_BaseFactory || (\u0275AdminTextareaFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AdminTextareaFieldComponent)))(t || _AdminTextareaFieldComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminTextareaFieldComponent, selectors: [["app-admin-textarea-field"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _AdminTextareaFieldComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _AdminTextareaFieldComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 7, vars: 19, consts: [[1, "relative", "mt-5", "mb-5"], ["placeholder", " ", 1, "peer", "w-full", "px-4", "py-3", "border-2", "rounded-xl", "focus:!border-secondary", "focus:ring-4", "focus:ring-secondary/20", "transition-all", "duration-300", "!bg-default-white", "/50", "group-hover:shadow-sm", 3, "input", "blur", "rows", "value", "disabled"], [1, "absolute", "left-4", "top-3", "text-gray-500", "transition-all", "duration-300", "pointer-events-none", "origin-left", "-translate-y-full", "scale-75", "peer-placeholder-shown:translate-y-0", "peer-placeholder-shown:scale-100", "peer-focus:-translate-y-full", "peer-focus:scale-75", "peer-focus:text-primary", "!bg-default-white", "px-1"], [1, "text-red-500"], [1, "text-red-500", "text-sm", "mt-1", "pl-2", "animate-fade-in"], [1, "text-green-500"]], template: function AdminTextareaFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "textarea", 1);
        \u0275\u0275listener("input", function AdminTextareaFieldComponent_Template_textarea_input_1_listener($event) {
          return ctx.onInput($event);
        })("blur", function AdminTextareaFieldComponent_Template_textarea_blur_1_listener() {
          return ctx.onBlur();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label", 2);
        \u0275\u0275text(3);
        \u0275\u0275template(4, AdminTextareaFieldComponent_Conditional_4_Template, 2, 0, "span", 3)(5, AdminTextareaFieldComponent_Conditional_5_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, AdminTextareaFieldComponent_Conditional_6_Template, 3, 1, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("rows", ctx.rows)("value", ctx._value || "")("disabled", ctx.disabled);
        \u0275\u0275attribute("id", ctx.formControlName)("name", ctx.formControlName);
        \u0275\u0275advance();
        \u0275\u0275classProp("top-[-0", ctx.control.value || ctx.control.touched)("peer-focus:text-primary", true)("dark:peer-focus:text-primary", true)("text-red-500", ctx.checkControlInvalidOrDirty())("dark:text-red-400", ctx.checkControlInvalidOrDirty());
        \u0275\u0275attribute("for", ctx.formControlName);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.label, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(4, ctx.isFormControlRequired ? 4 : 5);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(6, ctx.checkControlInvalidOrDirty() ? 6 : -1);
      }
    }, dependencies: [
      FormsModule,
      ReactiveFormsModule,
      KeyValuePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminTextareaFieldComponent, { className: "AdminTextareaFieldComponent" });
})();

export {
  AdminTextareaFieldComponent
};
//# sourceMappingURL=chunk-R7DA72NE.js.map
