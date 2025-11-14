import {
  LoaderSpinnerComponent
} from "./chunk-ZAFBV4O5.js";
import {
  environment
} from "./chunk-2ZGDQRTL.js";
import {
  AppEnvironmentService,
  AuthService
} from "./chunk-D77A7TO4.js";
import {
  DataService
} from "./chunk-IOIIXNZS.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
import "./chunk-AKDPFH6R.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import "./chunk-LARJQE5I.js";
import {
  DefaultValueAccessor,
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
import "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import {
  adminVerify
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  FrontendLogger,
  controlNames,
  getBizNestErrorResponseMessage
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  Meta,
  Title,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/auth/verify/verify.component.ts
function VerifyComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lib-loader-spinner");
  }
}
var VerifyComponent = class _VerifyComponent {
  constructor(fb, router, route, toastr, auth, dataService, apNme, mainBarTitle, metaTagService, titleService) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.toastr = toastr;
    this.auth = auth;
    this.dataService = dataService;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.toggleData = true;
    this.posting = false;
    this.date = /* @__PURE__ */ new Date();
    this.config = {
      format: '"DD-MM-YYYY"'
    };
    this.rememberMeDays = this.route.snapshot?.params["rememberMeDays"];
    this.form = this.fb.group({
      verificationToken: ["", Validators.compose([Validators.minLength(4), Validators.required])]
    });
  }
  get controlNames() {
    return controlNames(this.form.controls);
  }
  ngOnInit() {
    AppEnvironmentService.environment = {
      production: environment.production
    };
    FrontendLogger.error("after controller");
    this.mainBarTitle.title = "Verify";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Secure access to administrative features through the admin panel verification page."
    });
  }
  submit() {
    return __async(this, null, function* () {
      this.posting = true;
      try {
        const response = yield adminVerify({
          verificationToken: this.form.get("verificationToken")?.value,
          rememberMeDays: this.rememberMeDays || 1
        });
        FrontendLogger.debug("Verify success", response);
        this.dataService.isSuperAdmin = true;
        this.auth.isLoggedIn = true;
        this.form.reset();
        this.router.navigate(["/"]);
      } catch (error) {
        FrontendLogger.error("Verify error", error);
        this.toastr.error(getBizNestErrorResponseMessage(error), "Failed");
      } finally {
        this.posting = false;
      }
    });
  }
  static {
    this.\u0275fac = function VerifyComponent_Factory(t) {
      return new (t || _VerifyComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyComponent, selectors: [["app-verify"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 5, consts: [[1, "container-fluid", "min-h-screen", "flex", "items-center", "justify-center", "p-4", "text-default-dark"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "w-full", "max-w-5xl", "shadow-2xl", "rounded-2xl", "overflow-hidden", "!bg-default-white"], [1, "!bg-default-white", "p-6", "sm:p-8", "md:p-12", "flex", "flex-col", "justify-center"], [1, "mb-8", "text-center"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-center", "mb-6"], ["src", "assets/logo/logoblack.png", "alt", "Company Logo", "width", "50", "height", "50", 1, "mb-4", "sm:mb-0", "sm:mr-4", "w-12", "h-12", "object-contain", "transition-transform", "duration-300", "hover:scale-110", "company-img"], [1, "text-2xl", "sm:text-3xl", "font-bold"], [1, "text-xs", "sm:text-sm", "mb-4"], [1, "space-y-4", "sm:space-y-6", "mx-auto", "w-full", "max-w-md", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "sm:text-sm", "font-medium", "mb-2"], ["type", "text", "id", "verificationToken", "placeholder", "Enter 12-character verification code", 1, "w-full", "px-3", "py-2", "sm:px-4", "sm:py-3", "text-xs", "sm:text-sm", "border", "border-gray-300", "rounded-lg", "!bg-default-white", "placeholder-gray-500", "focus:outline-none", "focus:ring-2", "focus:ring-secondary", "transition-all", "duration-300", 3, "formControlName"], [1, "text-center", "text-xs", "mb-4"], [1, "text-blue-600", "hover:text-blue-800", 3, "routerLink"], ["type", "submit", 1, "w-full", "flex", "gap-2", "justify-center", "py-2", "sm:py-3", "px-4", "text-xs", "sm:text-sm", "border", "border-transparent", "rounded-lg", "shadow-sm", "font-medium", "text-white", "!bg-secondary", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "transition-all", "duration-300", "disabled:opacity-50", "flex", "items-center", "justify-center", 3, "disabled"], [1, "hidden", "md:block", "col-span-1", "bg-cover", "bg-center", "relative", "overflow-hidden", 2, "background-image", "url('assets/backgrounds/business-dashboard.jpg')"], [1, "bg-black", "bg-opacity-40", "absolute", "inset-0", "flex", "items-center", "justify-center", "text-center", "p-8"], [1, "text-white", "relative", "z-10"], [1, "text-2xl", "md:text-3xl", "lg:text-4xl", "font-bold", "mb-4"], [1, "text-sm", "md:text-base", "lg:text-lg", "mb-6"]], template: function VerifyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "h1", 6);
        \u0275\u0275text(7, "Verify Your Account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, " A verification code has been sent to your registered phone number or email address. Please enter the 12-character code below to complete your account verification. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "form", 8);
        \u0275\u0275listener("ngSubmit", function VerifyComponent_Template_form_ngSubmit_10_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(11, "div")(12, "label", 9);
        \u0275\u0275text(13, " Verification Token here ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11);
        \u0275\u0275text(16, " Didn't receive the code? ");
        \u0275\u0275elementStart(17, "a", 12);
        \u0275\u0275text(18, " Resend Code ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div")(20, "button", 13);
        \u0275\u0275template(21, VerifyComponent_Conditional_21_Template, 1, 0, "lib-loader-spinner");
        \u0275\u0275text(22, " Verify Token ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "h2", 17);
        \u0275\u0275text(27, " Secure Verification ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p", 18);
        \u0275\u0275text(29, " Protecting your account with identification authentication ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275property("formControlName", ctx.controlNames.verificationToken);
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", "/login");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.form.invalid);
        \u0275\u0275advance();
        \u0275\u0275conditional(21, ctx.posting ? 21 : -1);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule, RouterLink, LoaderSpinnerComponent], styles: ["\n\n.right-side-views[_ngcontent-%COMP%] {\n  display: none;\n}\n.right-column[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 20px;\n  border-top-left-radius: 16px;\n  border-bottom-left-radius: 16px;\n}\nform[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  padding: 20px;\n  background-color: var(--app-color-white);\n  border-radius: 16px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border: 3px solid #424242;\n  transition: transform 0.3s ease-in-out;\n  color: var(--app-color-dark) !important;\n}\nform[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  border-radius: 12px;\n  color: var(--app-color-dark);\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  border-radius: 12px;\n  color: var(--app-color-white);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.image-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translateX(-5px);\n  }\n  20%, 40%, 60%, 80% {\n    transform: translateX(5px);\n  }\n}\n.animate-shake[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_shake 0.5s ease-in-out;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/verify.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyComponent, { className: "VerifyComponent" });
})();
export {
  VerifyComponent
};
//# sourceMappingURL=chunk-B6Y6KX4K.js.map
