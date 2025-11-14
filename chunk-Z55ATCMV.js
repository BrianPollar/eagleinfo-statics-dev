import {
  AdminFormFieldComponent
} from "./chunk-QB4EFJNB.js";
import {
  AdminFormInstructionComponent
} from "./chunk-U3Y2ICWD.js";
import {
  AdminFormButtonComponent
} from "./chunk-SC3J5HE4.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-H6XV6YF3.js";
import {
  ManagerClient,
  controlNames
} from "./chunk-MC4HAW4O.js";
import {
  init_esm,
  lastValueFrom,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/base/auto-dns/set-up-dns/set-up-dns.base.ts
init_esm();
var SetUpDnsBase = class _SetUpDnsBase {
  constructor(fb, toastr) {
    this.fb = fb;
    this.toastr = toastr;
    this.posting = false;
    this.form = this.fb.group({
      domain: [{ value: this.mail?.email, disabled: this.mail?.email }, Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }
  get controlNames() {
    return controlNames(this.form.controls);
  }
  checkControlInvalidOrDirty(controlName) {
    return !this.form.get(controlName)?.valid && this.form.get(controlName)?.dirty;
  }
  setUp() {
    return __async(this, null, function* () {
      const companyId = this.company._id;
      const userId = typeof this.company.owner === "string" ? this.company.owner : this.company.owner._id;
      this.posting = true;
      const domainDetails = {
        domain: this.form.value.domain,
        companyId,
        userId
      };
      const observer$ = ManagerClient.ehttp.makePost("/misc/setup-domain", domainDetails);
      const response = yield lastValueFrom(observer$);
      this.posting = false;
      if (response.success) {
        this.toastr.success("Operation sucessfull...!", "Success");
      } else {
        const err = response.err || "An Error Occured, Try again Later";
        this.toastr.error(err, "Failed", {
          disableTimeOut: true
        });
      }
    });
  }
  static {
    this.\u0275fac = function SetUpDnsBase_Factory(t) {
      return new (t || _SetUpDnsBase)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _SetUpDnsBase, inputs: { company: "company" } });
  }
};

// projects/admin-panel/src/app/components/pane/admin-domain-related/admin-auto-dns/admin-set-up-dns/admin-set-up-dns.component.ts
var AdminSetUpDnsComponent = class _AdminSetUpDnsComponent extends SetUpDnsBase {
  constructor(fb, toastr) {
    super(fb, toastr);
    this.fb = fb;
    this.toastr = toastr;
  }
  static {
    this.\u0275fac = function AdminSetUpDnsComponent_Factory(t) {
      return new (t || _AdminSetUpDnsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSetUpDnsComponent, selectors: [["app-admin-set-up-dns"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 12, vars: 7, consts: [[1, "container", "mx-auto", "md:px-6", "md:pt-32", "pb-32", "pt-12", "!min-h-[100vh]", "!mb-[180px]"], [1, "text-center", "min-h-[100vh]", "mx-auto", "max-w-[700px]"], [1, "md:px-3", "h-full", "flex", "items-center", "justify-center"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "formGroup"], [1, "text-center", "mb-6"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "mt-2", "text-sm", "text-gray-500"], [3, "formControlName", "label"], [3, "save", "tooltip", "btnText", "posting", "disabled"]], template: function AdminSetUpDnsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
        \u0275\u0275element(2, "app-admin-form-instruction");
        \u0275\u0275elementStart(3, "div", 2)(4, "form", 3)(5, "div", 4)(6, "h2", 5);
        \u0275\u0275text(7, "Set Up Domain");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, " Input domain name and we will set up dns for you ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "app-admin-form-field", 7);
        \u0275\u0275elementStart(11, "app-admin-form-button", 8);
        \u0275\u0275listener("save", function AdminSetUpDnsComponent_Template_app_admin_form_button_save_11_listener() {
          return ctx.setUp();
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("formControlName", ctx.controlNames.domain)("label", "Domain");
        \u0275\u0275advance();
        \u0275\u0275property("tooltip", "Sets up Domain.")("btnText", "Set up Domain")("posting", ctx.posting)("disabled", ctx.posting || !ctx.form.valid);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      AdminFormFieldComponent,
      AdminFormButtonComponent,
      AdminFormInstructionComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSetUpDnsComponent, { className: "AdminSetUpDnsComponent" });
})();

export {
  AdminSetUpDnsComponent
};
//# sourceMappingURL=chunk-Z55ATCMV.js.map
