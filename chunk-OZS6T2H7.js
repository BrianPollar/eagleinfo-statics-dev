import {
  AdminTextareaFieldComponent
} from "./chunk-R7DA72NE.js";
import {
  patternWithMessage
} from "./chunk-4JFZSO6M.js";
import {
  AdminAddUserComponent
} from "./chunk-AEVYLFDT.js";
import {
  AdminFormFieldComponent
} from "./chunk-QB4EFJNB.js";
import {
  AdminFormInstructionComponent
} from "./chunk-U3Y2ICWD.js";
import {
  AdminFormButtonComponent
} from "./chunk-SC3J5HE4.js";
import "./chunk-WJJSEUQ7.js";
import {
  AdminBackBarComponent
} from "./chunk-RPZGEB5Y.js";
import "./chunk-ZAFBV4O5.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
import "./chunk-AKDPFH6R.js";
import "./chunk-O454IXIK.js";
import {
  AdminPageContentComponent
} from "./chunk-LWX77LXW.js";
import {
  markFormGroupTouched,
  scrollToTop
} from "./chunk-G2DKIAK6.js";
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
  WindowService
} from "./chunk-LARJQE5I.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-H6XV6YF3.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  BizNestClientError,
  FrontendLogger,
  controlNames,
  getBizNestErrorResponseMessage,
  runSubscriptionsForSharedUse,
  transformDateWithoutTime
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-SOKXHU4M.js";
import {
  Location,
  Meta,
  Title,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/validators/url.ts
var UrlValidator = class {
  static isValid(control) {
    if (!control.value) {
      return null;
    }
    const re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(control.value);
    if (re) {
      return null;
    }
    return {
      // eslint-disable-next-line quote-props
      "invalidUrl": "In valid Url",
      invalidUrlAddr: "Url must be of the form http(s)://(www.)website.com"
    };
  }
};

// projects/shared-lib/src/lib/components/base/add-update-company-base.ts
var AddUpdateCompanyBase = class _AddUpdateCompanyBase {
  constructor(fb, toastr, eventbus, router, route, apNme, mainBarTitle, location, windowService, metaTagService, titleService) {
    this.fb = fb;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.router = router;
    this.route = route;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.location = location;
    this.windowService = windowService;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.url = "companys";
    this.loading = false;
    this.posting = false;
    this.dateOfEst = (/* @__PURE__ */ new Date()).toDateString();
    this.userFormValid = false;
    this.passwordFormValid = false;
    this.password = "";
    const editAction = this.route.snapshot?.params["editAction"];
    this.mainBarTitle.title = editAction === "add" ? "Add Company" : "Update Company";
    this.addCompanyForm = this.fb.group({
      name: ["", Validators.compose([
        patternWithMessage(/[a-zA-Z ]*/, "Only letters are allowed"),
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])],
      displayName: ["", Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])],
      details: ["", Validators.compose([
        Validators.minLength(23),
        Validators.maxLength(1e3),
        Validators.required
      ])],
      websiteAddress: ["", Validators.compose([
        UrlValidator.isValid
      ])],
      left: [false]
    });
  }
  get controlNames() {
    return controlNames(this.addCompanyForm.controls);
  }
  ngOnInit() {
    const handlers = {
      updateCompany: (data) => {
        if (!data._id && !data.displayName) {
          throw new BizNestClientError("Invalid Company");
        }
        this.company = data;
        this.mainBarTitle.title = "Update Company - " + data.displayName;
        this.dateLeft = this.company?.dateLeft ? transformDateWithoutTime(this.company?.dateLeft) : "";
        this.dateOfEst = this.company?.dateOfEst ? transformDateWithoutTime(this.company?.dateOfEst) : "";
        this.user = this.company?.owner;
        if (this.user) {
          this.userFormValid = true;
        }
        this.addCompanyForm.patchValue(this.company);
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Easily manage and edit your company details to
      ensure accurate information and effective business operations.`
    });
  }
  checkControlInvalidOrDirty(controlName) {
    return !this.addCompanyForm.get(controlName)?.valid && this.addCompanyForm.get(controlName)?.dirty;
  }
  checkControlValidOrDirty(controlName) {
    return this.addCompanyForm.get(controlName)?.valid;
  }
  soloDateChange(ev) {
    this.addCompanyForm.controls["dateLeft"].setValue(ev);
  }
  soloDateEstChange(ev) {
    this.addCompanyForm.controls["dateOfEst"].setValue(ev);
  }
  userFormChange(ev) {
    this.userFormValid = ev.valid;
    this.userData = ev.userData;
    this.files = ev.files;
    if (ev.error) {
      this.errMsg = ev.error;
    } else {
      this.errMsg = "";
    }
  }
  onFocus(controlName) {
    this.addCompanyForm.get(controlName)?.markAsTouched();
  }
  onBlur(controlName) {
    this.addCompanyForm.get(controlName)?.markAsUntouched();
  }
  saveChanges() {
    return __async(this, null, function* () {
      if (this.addCompanyForm.invalid) {
        markFormGroupTouched(this.addCompanyForm, this);
        scrollToTop(this.windowService);
        if (!this.company) {
          this.eventbus.generalEvent$.next({ type: "markAdduserForm", data: true });
          this.eventbus.generalEvent$.next({ type: "markPasswordForm", data: true });
        }
        return;
      } else {
        if (!this.passwordFormValid && !this.company) {
          this.eventbus.generalEvent$.next({ type: "markPasswordForm", data: true });
          return;
        }
        const formValues = this.addCompanyForm.value;
        const company = {
          name: formValues.name,
          displayName: formValues.displayName,
          dateOfEst: formValues.dateOfEst,
          details: formValues.details,
          businessType: formValues.businessType,
          websiteAddress: formValues.websiteAddress,
          expireAt: formValues.expireAt,
          left: Boolean(formValues.left),
          dateLeft: formValues.dateLeft,
          // TODO
          owner: __spreadProps(__spreadValues({
            firstName: this.userData?.firstName || "",
            lastName: this.userData?.lastName || "",
            email: this.userData?.email || "",
            phone: this.userData?.phone || ""
          }, this.userData), {
            // verified: Boolean(formValues.verified),
            password: this.password.trim(),
            userType: "company"
          })
        };
        FrontendLogger.debug("files ", this.files);
        if (!this.company) {
          throw new BizNestClientError("can not manually add Company");
        }
        try {
          this.posting = true;
          yield this.company.update(company);
          this.toastr.success("Operation sucessfull...!", "Success");
          this.addCompanyForm.reset();
          this.eventbus.generalEvent$.next({ type: "resetUserForm", data: true });
          this.eventbus.generalEvent$.next({ type: "resetPasswordForm", data: true });
          if (this.company) {
            this.location.back();
          }
          scrollToTop(this.windowService);
        } catch (error) {
          FrontendLogger.error("AddCompany:addCompany:: - err", error);
          this.toastr.error(getBizNestErrorResponseMessage(error), "Failed", {
            disableTimeOut: true
          });
        } finally {
          this.posting = false;
        }
        this.posting = false;
      }
    });
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function AddUpdateCompanyBase_Factory(t) {
      return new (t || _AddUpdateCompanyBase)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AddUpdateCompanyBase });
  }
};

// projects/admin-panel/src/app/components/pane/company-related/company/add-update-company/add-update-company.component.ts
function AddUpdateCompanyComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6)(1, "div", 7)(2, "h2", 8);
    \u0275\u0275text(3, " Company Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275text(5, " Provide comprehensive information about the company ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10);
    \u0275\u0275element(7, "app-admin-form-field", 11)(8, "app-admin-form-field", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "app-admin-textarea-field", 11)(10, "app-admin-form-field", 12);
    \u0275\u0275elementStart(11, "app-admin-form-button", 13);
    \u0275\u0275listener("save", function AddUpdateCompanyComponent_Conditional_10_Template_app_admin_form_button_save_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveChanges());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.addCompanyForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("formControlName", ctx_r1.controlNames.name)("label", "Company Name");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.controlNames.displayName)("label", "Display Name");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.controlNames.details)("label", "Company Details");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.controlNames.websiteAddress)("required", false)("label", "Website Address");
    \u0275\u0275advance();
    \u0275\u0275property("btnText", "Save")("tooltip", "Saves the company information.")("disabled", ctx_r1.posting)("posting", ctx_r1.posting);
  }
}
var AddUpdateCompanyComponent = class _AddUpdateCompanyComponent extends AddUpdateCompanyBase {
  constructor(fb, toastr, eventbus, router, route, apNme, mainBarTitle, location, windowService, metaTagService, titleService) {
    super(fb, toastr, eventbus, router, route, apNme, mainBarTitle, location, windowService, metaTagService, titleService);
    this.fb = fb;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.router = router;
    this.route = route;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.location = location;
    this.windowService = windowService;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.breadCrumbs = [
      {
        name: "Dashboard",
        icon: "space_dashboard",
        link: "/"
      },
      {
        name: "Company",
        icon: "account_balance",
        link: "/company/list"
      },
      {
        name: "Edit Company",
        icon: "edit"
      }
    ];
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.\u0275fac = function AddUpdateCompanyComponent_Factory(t) {
      return new (t || _AddUpdateCompanyComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUpdateCompanyComponent, selectors: [["app-add-update-company"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 11, vars: 6, consts: [[3, "title", "breadCrumbs"], [1, "container", "mx-auto", "md:px-6", "md:pt-32", "pb-32", "pt-12", "!min-h-[100vh]", "!mb-[180px]"], [1, "text-center", "min-h-[100vh]"], [1, "mx-auto", "max-w-[900px]", "grid", "grid-cols-1", "md:grid-cols-1", "lg:grid-cols-2", "xl:grid-cols-2", "gap-6", "md:px-3", "h-full", "flex", "justify-center"], [1, "w-full", "md:col-span-1", "lg:col-span-1", "xl:col-span-1"], [3, "notify", "user", "allowImageUpload", "fromComp"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "formGroup"], [1, "text-center"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-2", "xl:grid-cols-2", "gap-6"], [3, "formControlName", "label"], [3, "formControlName", "required", "label"], [3, "save", "btnText", "tooltip", "disabled", "posting"]], template: function AddUpdateCompanyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-back-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "section", 2)(4, "div", 3)(5, "div", 4);
        \u0275\u0275element(6, "app-admin-form-instruction");
        \u0275\u0275elementStart(7, "app-admin-add-user", 5);
        \u0275\u0275listener("notify", function AddUpdateCompanyComponent_Template_app_admin_add_user_notify_7_listener($event) {
          return ctx.userFormChange($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div")(9, "div", 4);
        \u0275\u0275template(10, AddUpdateCompanyComponent_Conditional_10_Template, 12, 14, "form", 6);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance(6);
        \u0275\u0275property("user", ctx.user)("allowImageUpload", false)("fromComp", "company");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(10, ctx.addCompanyForm ? 10 : -1);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      AdminAddUserComponent,
      AdminBackBarComponent,
      AdminFormFieldComponent,
      AdminTextareaFieldComponent,
      AdminFormButtonComponent,
      AdminPageContentComponent,
      AdminFormInstructionComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUpdateCompanyComponent, { className: "AddUpdateCompanyComponent" });
})();
export {
  AddUpdateCompanyComponent
};
//# sourceMappingURL=chunk-OZS6T2H7.js.map
