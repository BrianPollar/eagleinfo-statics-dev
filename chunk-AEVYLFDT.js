import {
  AdminFormFieldComponent
} from "./chunk-QB4EFJNB.js";
import {
  markFormGroupTouched
} from "./chunk-G2DKIAK6.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-H6XV6YF3.js";
import {
  FrontendLogger,
  controlNames,
  makeRandomString,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  EventEmitter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/validators/email.ts
var EmailValidator = class {
  static isValid(control) {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
    if (re) {
      return null;
    }
    return {
      // eslint-disable-next-line quote-props
      "invalidEmail": true
    };
  }
};

// projects/shared-lib/src/lib/validators/phone.ts
var PhoneValidator = class {
  static isValid(control) {
    if (isNaN(control.value)) {
      return {
        "not a number": true
      };
    }
    if (control.value % 1 !== 0) {
      return {
        "not a whole number": true
      };
    }
    if (control.value?.length < 7) {
      return {
        "less than 9": true
      };
    }
    if (control.value?.length > 15) {
      return {
        "more than 15": true
      };
    }
    return null;
  }
};

// projects/shared-lib/src/lib/components/input/add-update-user/add-update-user.base.ts
var AddUpdateUserBase = class {
  constructor(fb, eventbus) {
    this.fb = fb;
    this.eventbus = eventbus;
    this.posting = false;
    this.hasCompany = false;
    this.addressRequired = true;
    this.form = this.fb.group({
      firstName: [this.user?.firstName, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(120),
        Validators.required
      ])]],
      lastName: [this.user?.lastName, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(120),
        Validators.required
      ])]],
      companyName: [this.user?.companyName, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(610)
      ])]],
      salutation: [this.user?.salutation],
      extraCompanyDetails: [this.user?.extraCompanyDetails, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(610)
      ])]],
      userDispNameFormat: [this.user?.userDispNameFormat],
      email: [this.user?.email || "", [
        Validators.compose([
          EmailValidator.isValid
        ])
      ]],
      phone: [this.user?.phone || "", [
        Validators.compose([
          PhoneValidator.isValid
        ])
      ]],
      // address
      addrFname: [this.user?.addrFname, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(120)
      ])]],
      addrLname: [this.user?.addrLname, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(120)
      ])]],
      addrAddressLine1: [this.user?.addrAddressLine1, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(130)
      ])]],
      addrAddressLine2: [this.user?.addrAddressLine2, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(130)
      ])]],
      addrCountry: [this.user?.addrCountry],
      addrState: [this.user?.addrState],
      addrCity: [this.user?.addrCity, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(120)
      ])]],
      addrZipcode: [this.user?.addrZipcode],
      addrPhoneNumber: [this.user?.addrPhoneNumber, [Validators.compose([
        Validators.minLength(7),
        Validators.maxLength(20)
      ])]],
      // billing
      postalCode: [this.user?.postalCode],
      autofill: [false]
    });
  }
  get controlNames() {
    return controlNames(this.form.controls);
  }
  init() {
    const handlers = {
      markAdduserForm: () => {
        markFormGroupTouched(this.form, this);
      },
      resetUserForm: () => {
        if (this.form) {
          this.form.reset();
        }
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
    if (this.user && this.user?.companyName && this.user?.companyName?.length >= 3) {
      this.hasCompany = true;
    }
    this.form = this.fb.group({
      firstName: [this.user?.firstName, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(120),
        Validators.required
      ])]],
      lastName: [this.user?.lastName, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(120),
        Validators.required
      ])]],
      companyName: [this.user?.companyName, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(610)
      ])]],
      salutation: [this.user?.salutation],
      extraCompanyDetails: [this.user?.extraCompanyDetails, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(610)
      ])]],
      userDispNameFormat: [this.user?.userDispNameFormat],
      email: [this.fromComp !== "profile" ? this.user?.email || "" : "", [
        Validators.compose([
          this.fromComp !== "profile" ? EmailValidator.isValid : Validators.nullValidator,
          this.fromComp !== "profile" ? Validators.required : Validators.nullValidator
        ])
      ]],
      phone: [this.fromComp !== "profile" ? this.user?.phone || "" : "", [
        Validators.compose([
          this.fromComp !== "profile" ? PhoneValidator.isValid : Validators.nullValidator,
          this.fromComp !== "profile" ? Validators.required : Validators.nullValidator
        ])
      ]],
      // address
      addrFname: [this.user?.addrFname, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(120)
      ])]],
      addrLname: [this.user?.addrLname, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(120)
      ])]],
      addrAddressLine1: [this.user?.addrAddressLine1, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(130)
      ])]],
      addrAddressLine2: [this.user?.addrAddressLine2, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(130)
      ])]],
      addrCountry: [this.user?.addrCountry],
      addrState: [this.user?.addrState],
      addrCity: [this.user?.addrCity, [Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(120)
      ])]],
      addrZipcode: [this.user?.addrZipcode],
      addrPhoneNumber: [this.user?.addrPhoneNumber, [Validators.compose([
        Validators.minLength(7),
        Validators.maxLength(20)
      ])]],
      // billing
      addrPostalCode: [this.user?.postalCode],
      autofill: [false]
    });
    this.runChanges();
    this.autoFillChange();
  }
  checkControlInvalidOrDirty(controlName) {
    return !this.form.get(controlName)?.valid && this.form.get(controlName)?.dirty;
  }
  runChanges() {
    this.form.valueChanges.subscribe(() => {
      this.emitChanges();
    });
    this.form.controls["companyName"].valueChanges.subscribe((val) => {
      if (val && val.length >= 3) {
        this.hasCompany = true;
      } else if (val && val.length < 3) {
        this.hasCompany = false;
      }
    });
  }
  emitChanges() {
    const formValues = this.form.value;
    const userData = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      companyName: formValues.companyName,
      salutation: formValues.salutation,
      extraCompanyDetails: formValues.extraCompanyDetails,
      email: formValues.email,
      phone: formValues.phone,
      address: [
        {
          id: makeRandomString(11, "combined"),
          firstName: formValues.addrFname,
          lastName: formValues.addrLname,
          addressLine1: formValues.addrAddressLine1,
          addressLine2: formValues.addrAddressLine2,
          state: formValues.addrState,
          city: formValues.addrCity,
          zipcode: formValues.addrZipcode,
          phoneNumber: formValues.addrPhoneNumber,
          country: formValues.addrCountry,
          phoneCode: "",
          email: ""
        }
      ],
      billing: [
        {
          id: makeRandomString(11, "combined"),
          cardNumber: "",
          expiryDate: "",
          cvv: "",
          postalCode: formValues.addrPostalCode
        }
      ],
      permissions: {
        orders: false,
        payments: false,
        users: false,
        products: false,
        faqs: false,
        videos: false,
        printables: false,
        buyer: false
      }
    };
    if (this.fromComp === "profile") {
      delete userData.email;
      delete userData.phone;
    }
    this.notify?.emit({
      type: "formChange",
      valid: this.form.valid,
      userData,
      error: ""
    });
  }
  autoFillChange() {
    this.form.controls["autofill"].valueChanges.subscribe((value) => {
      if (value) {
        this.setAutoFillVals();
      } else {
        this.clearAutoFillVals();
      }
    });
  }
  setAutoFillVals() {
    this.form.controls["addrFname"].setValue(this.form.get("firstName")?.value);
    this.form.controls["addrLname"].setValue(this.form.get("lastName")?.value);
    this.form.controls["addrPhoneNumber"].setValue(this.form.get("phone")?.value);
  }
  clearAutoFillVals() {
    this.form.controls["addrFname"].setValue("");
    this.form.controls["addrLname"].setValue("");
    this.form.controls["addrPhoneNumber"].setValue("");
  }
  resetForm() {
    this.form.setValue({
      firstName: "",
      lastName: "",
      companyName: "",
      salutation: "",
      extraCompanyDetails: "",
      userDispNameFormat: "",
      email: "",
      phone: "",
      // address
      addrFname: "",
      addrLname: "",
      addrAddressLine1: "",
      addrAddressLine2: "",
      addrCountry: "",
      addrState: "",
      addrCity: "",
      addrZipcode: "",
      addrPhoneNumber: "",
      // billing
      addrPostalCode: "",
      autofill: false
    });
  }
  destroy() {
    this.cleanup?.();
  }
  clearForm() {
    this.form.reset();
  }
};

// projects/admin-panel/src/app/components/pane/admin-add-user/admin-add-user.component.ts
var _c0 = ["filesInput"];
var AdminAddUserComponent = class _AdminAddUserComponent {
  constructor(fb, eventbus) {
    this.fb = fb;
    this.eventbus = eventbus;
    this.addUserBase = new AddUpdateUserBase(this.fb, this.eventbus);
    this.notify = new EventEmitter();
    this.allowImageUpload = true;
  }
  ngOnInit() {
    this.initAddUserBase();
    this.addUserBase.init();
  }
  initAddUserBase() {
    this.addUserBase.notify = this.notify;
    this.addUserBase.fromComp = this.fromComp;
    this.addUserBase.addressRequired = false;
    if (!this.user) {
      FrontendLogger.debug("user is undefined");
    }
    this.addUserBase.user = this.constructUserDetails();
  }
  constructUserDetails() {
    const user = this.user;
    const details = {
      _id: this.parentInstance?._id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      salutation: user?.salutation,
      extraCompanyDetails: user?.extraCompanyDetails,
      userDispNameFormat: user?.userDispNameFormat,
      email: user?.email,
      phone: user?.phone
    };
    if (user?.address && user?.address.length > 0) {
      details.addrFname = user?.address[0]?.firstName ? user?.address[0]?.firstName : "";
      details.addrLname = user?.address[0]?.lastName ? user?.address[0]?.lastName : "";
      details.addrAddressLine1 = user?.address[0]?.addressLine1 ? user?.address[0]?.addressLine1 : "";
      details.addrAddressLine2 = user?.address[0]?.addressLine2 ? user?.address[0]?.addressLine2 : "";
      details.addrCountry = user?.address[0]?.country ? user?.address[0]?.country : "";
      details.addrState = user?.address[0]?.state ? user?.address[0]?.state : "";
      details.addrCity = user?.address[0]?.city ? user?.address[0]?.city : "";
      details.addrPhoneNumber = user?.address[0]?.phoneNumber ? user?.address[0]?.phoneNumber : "";
    }
    if (user?.billing && user?.billing.length > 0) {
      details.postalCode = user?.billing[0].postalCode;
    }
    return details;
  }
  ngOnDestroy() {
    this.addUserBase.destroy();
  }
  static {
    this.\u0275fac = function AdminAddUserComponent_Factory(t) {
      return new (t || _AdminAddUserComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EventbusService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAddUserComponent, selectors: [["app-admin-add-user"]], viewQuery: function AdminAddUserComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filesInput = _t.first);
      }
    }, inputs: { user: "user", parentInstance: "parentInstance", fromComp: "fromComp", allowImageUpload: "allowImageUpload" }, outputs: { notify: "notify" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 13, consts: [[1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full"], [1, "text-3xl", "font-extrabold", "tracking-tight", "text-center", "mb-6"], [1, ""], [1, "font-semibold"], [1, "space-y-6", 3, "formGroup"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "form-group"], [1, "block", "text-sm", "font-medium", "mb-2"], [1, "flex", "space-x-4"], [1, "flex", "items-center", "space-x-2", "group", "cursor-pointer"], ["type", "radio", "value", "Mr.", 1, "w-5", "h-5", "text-primary", "bg-gray-100", "border-gray-300", "rounded", "focus:ring-primary", "focus:ring-2", "transition-all", "duration-300", "group-hover:scale-105", 3, "formControlName"], [1, "text-sm", "font-medium", "group-hover:text-primary", "transition-colors", "duration-300"], ["type", "radio", "value", "Ms.", 1, "w-5", "h-5", "text-primary", "bg-gray-100", "border-gray-300", "rounded", "focus:ring-primary", "focus:ring-2", "transition-all", "duration-300", "group-hover:scale-105", 3, "formControlName"], ["type", "radio", "value", "Miss.", 1, "w-5", "h-5", "text-primary", "bg-gray-100", "border-gray-300", "rounded", "focus:ring-primary", "focus:ring-2", "transition-all", "duration-300", "group-hover:scale-105", 3, "formControlName"], ["type", "radio", "value", "Dr.", 1, "w-5", "h-5", "text-primary", "bg-gray-100", "border-gray-300", "rounded", "focus:ring-primary", "focus:ring-2", "transition-all", "duration-300", "group-hover:scale-105", 3, "formControlName"], [3, "formControlName", "label"]], template: function AdminAddUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, " Basic Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2)(4, "span", 3);
        \u0275\u0275text(5, "Providing User Information:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " This section is dedicated to collecting the core information about the new user. Please ensure you fill in all the required fields accurately, including the user's name, email, phone number, and salutation. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "form", 4)(8, "div", 5)(9, "div", 6)(10, "label", 7);
        \u0275\u0275text(11, "Salutation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
        \u0275\u0275element(14, "input", 10);
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275text(16, "Mr");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "label", 9);
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275elementStart(19, "span", 11);
        \u0275\u0275text(20, "Ms");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "label", 9);
        \u0275\u0275element(22, "input", 13);
        \u0275\u0275elementStart(23, "span", 11);
        \u0275\u0275text(24, "Miss");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "label", 9);
        \u0275\u0275element(26, "input", 14);
        \u0275\u0275elementStart(27, "span", 11);
        \u0275\u0275text(28, "Dr");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(29, "app-admin-form-field", 15)(30, "app-admin-form-field", 15)(31, "app-admin-form-field", 15)(32, "app-admin-form-field", 15);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.addUserBase.form);
        \u0275\u0275advance(7);
        \u0275\u0275property("formControlName", ctx.addUserBase.controlNames.salutation);
        \u0275\u0275advance(4);
        \u0275\u0275property("formControlName", ctx.addUserBase.controlNames.salutation);
        \u0275\u0275advance(4);
        \u0275\u0275property("formControlName", ctx.addUserBase.controlNames.salutation);
        \u0275\u0275advance(4);
        \u0275\u0275property("formControlName", ctx.addUserBase.controlNames.salutation);
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", ctx.addUserBase.controlNames.firstName)("label", "First Name");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", ctx.addUserBase.controlNames.lastName)("label", "Last Name");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", ctx.addUserBase.controlNames.email)("label", "Email");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", ctx.addUserBase.controlNames.phone)("label", "Phone Number");
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, AdminFormFieldComponent], styles: ["\n\n.photo-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n}\n.radio-butt[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.radio-butt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 7px;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/admin-add-user.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAddUserComponent, { className: "AdminAddUserComponent" });
})();

export {
  AdminAddUserComponent
};
//# sourceMappingURL=chunk-AEVYLFDT.js.map
