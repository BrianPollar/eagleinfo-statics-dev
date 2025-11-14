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
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import {
  TooltipComponent
} from "./chunk-4KKGHO4P.js";
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
  BizNestClientError,
  FrontendLogger,
  MailUser,
  controlNames,
  generateRandomPassword,
  getBizNestErrorResponseMessage,
  runSubscriptionsForSharedUse
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/base/flying-mail/add-update-mail/add-update-mail.base.ts
var AddUpdateMailBase = class _AddUpdateMailBase {
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
    this.countUsers = 0;
    this.posting = false;
    this.breadCrumbs = [
      {
        name: "Dashboard",
        icon: "space_dashboard",
        link: "/"
      },
      {
        name: "Mail Accounts",
        icon: "alternate_email",
        link: "/mail/list"
      },
      {
        name: "Edit",
        icon: "edit"
      }
    ];
    const editAction = this.route.snapshot?.params["editAction"];
    this.mainBarTitle.title = editAction === "add" ? "Add Mail Account" : "Update Mail Account";
    this.form = this.fb.group({
      email: [{ value: this.mailUser?.email, disabled: this.mailUser?.email }, Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(60),
        Validators.required
      ])],
      password: ["", Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])]
    });
  }
  get controlNames() {
    return controlNames(this.form.controls);
  }
  ngOnInit() {
    const handlers = {
      updateMail: (data) => {
        if (!data.id) {
          throw new BizNestClientError("Invalid Mail Account");
        }
        this.mainBarTitle.title = "Update Mail Mail Account - " + data.email;
        this.mailUser = data;
        this.form.patchValue(this.mailUser);
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily add or edit your company mail credentials for seamless communication management."
    });
  }
  checkControlInvalidOrDirty(controlName) {
    return !this.form.get(controlName)?.valid && this.form.get(controlName)?.dirty;
  }
  saveChanges() {
    return __async(this, null, function* () {
      const mailDetails = {
        email: this.form.get("email")?.value,
        password: this.form.get("password")?.value
      };
      try {
        this.posting = true;
        if (this.mailUser) {
          mailDetails.email = this.mailUser.email;
          yield this.mailUser.update(mailDetails);
        } else {
          yield MailUser.add(mailDetails);
        }
        this.location.back();
        this.toastr.success("Operation sucessfull...!", "Success");
      } catch (error) {
        FrontendLogger.error("AddExpensesComponent:saveChanges:: - err ", error);
        this.toastr.error(getBizNestErrorResponseMessage(error), "Failed", {
          disableTimeOut: true
        });
      } finally {
        this.posting = false;
      }
    });
  }
  generateRandomPassword() {
    const pw = generateRandomPassword();
    this.form.controls["password"].setValue(pw);
    this.form.controls["password"].markAsTouched();
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function AddUpdateMailBase_Factory(t) {
      return new (t || _AddUpdateMailBase)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AddUpdateMailBase });
  }
};

// projects/admin-panel/src/app/components/pane/admin-domain-related/admin-flying-mail/admin-add-update-mail/admin-add-update-mail.component.ts
var AdminAddUpdateMailComponent = class _AdminAddUpdateMailComponent extends AddUpdateMailBase {
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
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.\u0275fac = function AdminAddUpdateMailComponent_Factory(t) {
      return new (t || _AdminAddUpdateMailComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAddUpdateMailComponent, selectors: [["app-admin-add-update-mail"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 24, vars: 12, consts: [[3, "title", "breadCrumbs"], [1, "container", "mx-auto", "md:px-6", "md:pt-32", "pb-32", "pt-12", "!min-h-[100vh]", "!mb-[180px]"], [1, "text-center", "min-h-[100vh]", "mx-auto", "max-w-[700px]"], [1, "md:px-3", "h-full", "flex", "items-center", "justify-center"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "ngSubmit", "formGroup"], [1, "text-center", "mb-6"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "mt-2", "text-sm", "text-gray-500"], [3, "formControlName", "label"], [1, "grid", "grid-cols-2", "md:grid-cols-[1fr_auto]", "gap-4"], [1, "item-center"], [3, "popper"], [1, "w-full", "py-3.5", "mt-[22px]", "rounded-xl", "!bg-primary", "text-white", "font-bold", "uppercase", "tracking-wider", "hover:bg-primary-600", "focus:outline-none", "focus:ring-4", "focus:ring-primary/40", "transition-all", "duration-300", "ease-in-out", "transform", "hover:scale-[1.02]", "disabled:opacity-50", "disabled:cursor-not-allowed", "group", "shadow-lg", "shadow-primary/30", "hover:shadow-primary/40", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "transition-transform", "group-hover:translate-x-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 7l5 5m0 0l-5 5m5-5H6"], [3, "save", "tooltip", "btnText", "posting", "disabled"]], template: function AdminAddUpdateMailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-back-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "section", 2);
        \u0275\u0275element(4, "app-admin-form-instruction");
        \u0275\u0275elementStart(5, "div", 3)(6, "form", 4);
        \u0275\u0275listener("ngSubmit", function AdminAddUpdateMailComponent_Template_form_ngSubmit_6_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275elementStart(7, "div", 5)(8, "h2", 6);
        \u0275\u0275text(9, " Edit Mail Account ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275text(11, " Provide comprehensive information for your mail account ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(12, "app-admin-form-field", 8);
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275element(14, "app-admin-form-field", 8);
        \u0275\u0275elementStart(15, "div", 10)(16, "lib-tooltip", 11)(17, "button", 12);
        \u0275\u0275listener("click", function AdminAddUpdateMailComponent_Template_button_click_17_listener($event) {
          ctx.generateRandomPassword();
          return $event.preventDefault();
        });
        \u0275\u0275elementStart(18, "span", 13)(19, "span");
        \u0275\u0275text(20, "Generate");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 14);
        \u0275\u0275element(22, "path", 15);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "app-admin-form-button", 16);
        \u0275\u0275listener("save", function AdminAddUpdateMailComponent_Template_app_admin_form_button_save_23_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("formControlName", ctx.controlNames.email)("label", "Email");
        \u0275\u0275advance(2);
        \u0275\u0275property("formControlName", ctx.controlNames.password)("label", "Password");
        \u0275\u0275advance(2);
        \u0275\u0275property("popper", "Generates strong random password.");
        \u0275\u0275advance(7);
        \u0275\u0275property("tooltip", "Saves Mail Account Details.")("btnText", "Save Mail Account")("posting", ctx.posting)("disabled", ctx.posting || !ctx.form.valid);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      AdminBackBarComponent,
      TooltipComponent,
      AdminFormFieldComponent,
      AdminFormButtonComponent,
      AdminPageContentComponent,
      AdminFormInstructionComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAddUpdateMailComponent, { className: "AdminAddUpdateMailComponent" });
})();
export {
  AdminAddUpdateMailComponent
};
//# sourceMappingURL=chunk-L6YJO55Q.js.map
