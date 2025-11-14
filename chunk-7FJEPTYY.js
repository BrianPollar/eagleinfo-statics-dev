import {
  AdminSelectFieldComponent
} from "./chunk-LAO6JDWE.js";
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
import "./chunk-ZAFBV4O5.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
import "./chunk-AKDPFH6R.js";
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
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  AutoDnsDomain,
  FrontendLogger,
  controlNames
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute
} from "./chunk-SOKXHU4M.js";
import {
  Location,
  Meta,
  Title,
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

// projects/shared-lib/src/lib/components/base/auto-dns/add-sub-domain/add-sub-domain.base.ts
var AddSubDomainBase = class _AddSubDomainBase {
  constructor(fb, route, toastr, eventbus, apNme, mainBarTitle, location, metaTagService, titleService) {
    this.fb = fb;
    this.route = route;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.location = location;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.posting = false;
    this.proxiedOptions = [
      { value: "true", label: "Yes" },
      { value: "false", label: "No" }
    ];
    const editAction = this.route.snapshot?.params["editAction"];
    this.mainBarTitle.title = editAction === "add" ? "Add Sub Domain" : "Update Sub Domain";
    this.form = this.fb.group({
      subdomain: ["", Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(60),
        Validators.required
      ])],
      ipAddress: ["", Validators.compose([
        Validators.required
      ])],
      proxied: ["", Validators.compose([
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
  saveChanges() {
    return __async(this, null, function* () {
      const formValues = this.form.value;
      const subdomainDetails = {
        subdomain: formValues.subdomain,
        ipAddress: formValues.ipAddress,
        proxied: formValues.proxied
      };
      try {
        this.posting = true;
        yield AutoDnsDomain.addSubDomain(subdomainDetails);
        this.location.back();
        this.toastr.success("Operation sucessfull...!", "Success");
      } catch (error) {
        FrontendLogger.error("AddExpensesComponent:saveChanges:: - err ", error);
        this.toastr.error(error, "Failed", {
          disableTimeOut: true
        });
      } finally {
        this.posting = false;
      }
    });
  }
  closeModal() {
    this.eventbus.generalEvent$.next({
      type: "closeAddSubDomainModal"
    });
  }
  static {
    this.\u0275fac = function AddSubDomainBase_Factory(t) {
      return new (t || _AddSubDomainBase)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AddSubDomainBase });
  }
};

// projects/admin-panel/src/app/components/pane/admin-domain-related/admin-auto-dns/admin-add-sub-domain/admin-add-sub-domain.component.ts
var AdminAddSubDomainComponent = class _AdminAddSubDomainComponent extends AddSubDomainBase {
  constructor(fb, route, toastr, eventbus, apNme, mainBarTitle, location, metaTagService, titleService) {
    super(fb, route, toastr, eventbus, apNme, mainBarTitle, location, metaTagService, titleService);
    this.fb = fb;
    this.route = route;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.location = location;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
  }
  static {
    this.\u0275fac = function AdminAddSubDomainComponent_Factory(t) {
      return new (t || _AdminAddSubDomainComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAddSubDomainComponent, selectors: [["app-admin-add-sub-domain"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 15, vars: 13, consts: [[1, "container", "mx-auto", "md:px-6", "md:pt-32", "pb-32", "pt-12", "!min-h-[100vh]", "!mb-[180px]"], [1, "text-center", "min-h-[100vh]", "mx-auto", "max-w-[700px]"], [1, "md:px-3", "h-full", "flex", "items-center", "justify-center"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "ngSubmit", "formGroup"], [1, "text-center", "mb-6"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "mt-2", "text-sm", "text-gray-500"], [3, "formControlName", "label"], [1, "grid", "grid-cols-2", "md:grid-cols-[1fr_auto]", "gap-4"], [3, "formControlName", "label", "placeholderOption", "options"], [3, "save", "tooltip", "btnText", "posting", "disabled"]], template: function AdminAddSubDomainComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
        \u0275\u0275element(2, "app-admin-form-instruction");
        \u0275\u0275elementStart(3, "div", 2)(4, "form", 3);
        \u0275\u0275listener("ngSubmit", function AdminAddSubDomainComponent_Template_form_ngSubmit_4_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275elementStart(5, "div", 4)(6, "h2", 5);
        \u0275\u0275text(7, " Edit Sub Domain ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, " Provide comprehensive information for your sub domain ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "app-admin-form-field", 7);
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275element(12, "app-admin-form-field", 7)(13, "app-admin-select-field", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "app-admin-form-button", 10);
        \u0275\u0275listener("save", function AdminAddSubDomainComponent_Template_app_admin_form_button_save_14_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("formControlName", ctx.controlNames.subdomain)("label", "Sub Domain");
        \u0275\u0275advance(2);
        \u0275\u0275property("formControlName", ctx.controlNames.ipAddress)("label", "IP Address");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", ctx.controlNames.proxied)("label", "Proxied")("placeholderOption", "Select Proxied")("options", ctx.proxiedOptions);
        \u0275\u0275advance();
        \u0275\u0275property("tooltip", "Saves Sub Domain Details.")("btnText", "Save Sub Domain")("posting", ctx.posting)("disabled", ctx.posting || !ctx.form.valid);
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
      AdminFormInstructionComponent,
      AdminSelectFieldComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAddSubDomainComponent, { className: "AdminAddSubDomainComponent" });
})();
export {
  AdminAddSubDomainComponent
};
//# sourceMappingURL=chunk-7FJEPTYY.js.map
