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
  ɵɵelement,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/components/input/form/base/toggle-field.base.ts
var ToggleFieldBase = class _ToggleFieldBase extends FormFieldBase {
  constructor() {
    super();
    this.showRequiredType = true;
    this.labelPosition = "left";
    this.activeColor = "var(--app-color-primary)";
    this.inactiveColor = "#ccc";
    this.thumbColor = "white";
    this.focusColor = "var(--app-color-primary)";
    this.borderColor = "#aaa";
  }
  // Add this method
  onCheckboxChange(event) {
    const target = event.target;
    this.control.setValue(target.checked, { emitEvent: true });
  }
  // --- Template Interaction ---
  // Need methods to bind to input events in the template
  onInput(event) {
    const target = event.target;
    this.updateValue(target.value);
  }
  onBlur() {
    this.handleBlur();
  }
  dispVals(vals) {
    return JSON.stringify(vals);
  }
  static {
    this.\u0275fac = function ToggleFieldBase_Factory(t) {
      return new (t || _ToggleFieldBase)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ToggleFieldBase, inputs: { showRequiredType: "showRequiredType", labelPosition: "labelPosition", activeColor: "activeColor", inactiveColor: "inactiveColor", thumbColor: "thumbColor", focusColor: "focusColor", borderColor: "borderColor" }, features: [\u0275\u0275InheritDefinitionFeature] });
  }
};

// projects/shared-lib/src/lib/components/input/form/shared-toggle-field/shared-toggle-field.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function SharedToggleFieldComponent_Conditional_3_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SharedToggleFieldComponent_Conditional_3_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " - ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3, "Optional");
    \u0275\u0275elementEnd();
  }
}
function SharedToggleFieldComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SharedToggleFieldComponent_Conditional_3_Conditional_2_Conditional_0_Template, 2, 0, "span", 9)(1, SharedToggleFieldComponent_Conditional_3_Conditional_2_Conditional_1_Template, 4, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, ctx_r0.isFormControlRequired ? 0 : 1);
  }
}
function SharedToggleFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275template(2, SharedToggleFieldComponent_Conditional_3_Conditional_2_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("peer-focus:text-primary", true)("dark:peer-focus:text-primary", true)("text-danger", ctx_r0.checkControlInvalidOrDirty())("dark:text-danger", ctx_r0.checkControlInvalidOrDirty());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ctx_r0.showRequiredType ? 2 : -1);
  }
}
function SharedToggleFieldComponent_Conditional_7_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SharedToggleFieldComponent_Conditional_7_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " - ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3, "Optional");
    \u0275\u0275elementEnd();
  }
}
function SharedToggleFieldComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SharedToggleFieldComponent_Conditional_7_Conditional_2_Conditional_0_Template, 2, 0, "span", 9)(1, SharedToggleFieldComponent_Conditional_7_Conditional_2_Conditional_1_Template, 4, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, ctx_r0.isFormControlRequired ? 0 : 1);
  }
}
function SharedToggleFieldComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275template(2, SharedToggleFieldComponent_Conditional_7_Conditional_2_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("peer-focus:text-primary", true)("dark:peer-focus:text-primary", true)("text-danger", ctx_r0.checkControlInvalidOrDirty())("dark:text-danger", ctx_r0.checkControlInvalidOrDirty());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ctx_r0.showRequiredType ? 2 : -1);
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " This field is required.");
    \u0275\u0275elementEnd();
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", error_r2.value, " ");
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", error_r2.value, "");
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Needs at least ", error_r2.value.requiredLength, " characters. ");
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Cannot exceed ", error_r2.value.requiredLength, " characters. ");
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Can not be less than ", error_r2.value.min, " ");
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Can not be greater than ", error_r2.value.max, " ");
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Invalid format");
    \u0275\u0275elementEnd();
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", error_r2.value, " ");
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage || "Invalid input");
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_9_Conditional_0_Template, 2, 1, "small")(1, SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_9_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const error_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(0, ctx_r0.isString(error_r2.value) ? 0 : 1);
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_1_Template, 2, 0, "small")(2, SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_2_Template, 2, 1)(3, SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_3_Template, 2, 1)(4, SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_4_Template, 2, 1)(5, SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_5_Template, 2, 1)(6, SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_6_Template, 2, 1)(7, SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_7_Template, 2, 1)(8, SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_8_Template, 2, 0)(9, SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Conditional_9_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(1, error_r2.key === "required" ? 1 : error_r2.key === "customPattern" ? 2 : error_r2.key === "nameLength" ? 3 : error_r2.key === "minlength" ? 4 : error_r2.key === "maxlength" ? 5 : error_r2.key === "min" ? 6 : error_r2.key === "max" ? 7 : error_r2.key === "pattern" ? 8 : 9);
  }
}
function SharedToggleFieldComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, SharedToggleFieldComponent_Conditional_8_Conditional_2_For_2_Template, 10, 1, "div", null, _forTrack0);
    \u0275\u0275pipe(3, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r0.control.errors));
  }
}
function SharedToggleFieldComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, SharedToggleFieldComponent_Conditional_8_Conditional_1_Template, 2, 1, "small")(2, SharedToggleFieldComponent_Conditional_8_Conditional_2_Template, 4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.errorMessage ? 1 : ctx_r0.control.errors ? 2 : -1);
  }
}
var SharedToggleFieldComponent = class _SharedToggleFieldComponent extends ToggleFieldBase {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SharedToggleFieldComponent_BaseFactory;
      return function SharedToggleFieldComponent_Factory(t) {
        return (\u0275SharedToggleFieldComponent_BaseFactory || (\u0275SharedToggleFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SharedToggleFieldComponent)))(t || _SharedToggleFieldComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SharedToggleFieldComponent, selectors: [["lib-shared-toggle-field"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _SharedToggleFieldComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _SharedToggleFieldComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 9, vars: 17, consts: [[1, "form-group"], [1, "flex", "items-center", "gap-2"], [1, "toggle-switch", "flex", "items-center", "gap-2"], [1, "text-sm", "pb-[2px]", 3, "peer-focus:text-primary", "dark:peer-focus:text-primary", "text-danger", "dark:text-danger"], [1, "switch"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "slider", "round"], [1, "text-danger"], [1, "text-sm", "pb-[2px]"], [1, "mandatory", "text-danger"], [1, "optional"]], template: function SharedToggleFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275template(3, SharedToggleFieldComponent_Conditional_3_Template, 3, 10, "span", 3);
        \u0275\u0275elementStart(4, "label", 4)(5, "input", 5);
        \u0275\u0275listener("change", function SharedToggleFieldComponent_Template_input_change_5_listener($event) {
          return ctx.onCheckboxChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, SharedToggleFieldComponent_Conditional_7_Template, 3, 10, "span", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, SharedToggleFieldComponent_Conditional_8_Template, 3, 1, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.labelPosition === "left" ? 3 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.control.value)("disabled", ctx.disabled);
        \u0275\u0275attribute("id", ctx.formControlName)("name", ctx.formControlName);
        \u0275\u0275advance();
        \u0275\u0275styleProp("--active-color", ctx.activeColor)("--inactive-color", ctx.inactiveColor)("--thumb-color", ctx.thumbColor)("--focus-color", ctx.focusColor)("--border-color", ctx.borderColor);
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.labelPosition === "right" ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.checkControlInvalidOrDirty() ? 8 : -1);
      }
    }, dependencies: [
      FormsModule,
      ReactiveFormsModule,
      KeyValuePipe
    ], styles: ['\n\n.optional[_ngcontent-%COMP%] {\n  color: green;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: 36px;\n  height: 20px;\n  margin: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  margin: 0;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--inactive-color, #ccc);\n  border: 1px solid var(--border-color, #aaa);\n  transition: 0.4s;\n  margin: 0;\n}\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 0px;\n  top: 0px;\n  background-color: var(--thumb-color, white);\n  transition: 0.4s;\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: var(--active-color, var(--app-color-primary));\n  border-color: var(--active-color, var(--app-color-primary));\n}\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 2px var(--focus-color, var(--app-color-primary));\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(16px);\n}\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\ninput[_ngcontent-%COMP%]:disabled    + .slider[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.toggle-switch.error[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-color-red);\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/shared-toggle-field.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SharedToggleFieldComponent, { className: "SharedToggleFieldComponent" });
})();

export {
  SharedToggleFieldComponent
};
//# sourceMappingURL=chunk-7OBDCAFX.js.map
