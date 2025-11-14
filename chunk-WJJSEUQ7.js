import {
  ControlContainer,
  FormControl
} from "./chunk-H6XV6YF3.js";
import {
  EagleInfoClientError
} from "./chunk-MC4HAW4O.js";
import {
  inject,
  ɵɵdefineDirective
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/components/input/form/base/form-base.ts
var FormFieldBase = class _FormFieldBase {
  constructor() {
    this.controlContainer = inject(ControlContainer);
    this.errorMessage = "";
    this.disabled = false;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.onValidatorChange = () => {
    };
  }
  ngOnInit() {
    if (!this.controlContainer?.control) {
      throw new EagleInfoClientError(`BaseFormFieldComponent
        must be used within a FormGroup or FormGroupName directive.`);
    }
    this.parentFormGroup = this.controlContainer.control;
    if (!this.parentFormGroup) {
      throw new EagleInfoClientError("Could not find parent FormGroup.");
    }
    const control = this.parentFormGroup.get(this.formControlName);
    if (!control) {
      throw new EagleInfoClientError(`FormControl with name
        '${this.formControlName}' not found in the parent FormGroup.`);
    }
    this.control = control;
  }
  // --- Methods ---
  checkControlInvalidOrDirty() {
    return Boolean(this.control) && this.control.invalid && (this.control.dirty || this.control.touched);
  }
  checkControlValidOrDirty() {
    return Boolean(this.control) && this.control.valid && (this.control.dirty || this.control.touched);
  }
  // --- Common Methods ---
  /* checkControlInvalidOrDirty(): boolean {
    // Use touched instead of dirty for better UX (show error on blur even if unchanged)
    return Boolean(this.control) && this.control.invalid && (this.control.dirty || this.control.touched);
  } */
  /** Checks if the underlying FormControl has the required validator */
  get isFormControlRequired() {
    const control = this.control;
    if (!control) {
      return false;
    }
    if (control.validator) {
      const tempControl = new FormControl();
      const errors = control.validator(tempControl);
      return errors ? errors.hasOwnProperty("required") : false;
    }
    return false;
  }
  // --- ControlValueAccessor Implementation ---
  writeValue(value) {
    this._value = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // --- Validator Implementation ---
  validate(control) {
    return null;
  }
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  // Helper to update value and notify Angular Forms
  updateValue(newValue) {
    if (newValue !== this._value) {
      this._value = newValue;
      this.onChange(newValue);
      this.onTouched();
      this.onValidatorChange();
    }
  }
  // Helper for blur event
  handleBlur() {
    this.onTouched();
    this.onValidatorChange();
  }
  isString(val) {
    return typeof val === "string";
  }
  static {
    this.\u0275fac = function FormFieldBase_Factory(t) {
      return new (t || _FormFieldBase)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FormFieldBase, inputs: { formControlName: "formControlName", label: "label", errorMessage: "errorMessage" } });
  }
};

export {
  FormFieldBase
};
//# sourceMappingURL=chunk-WJJSEUQ7.js.map
