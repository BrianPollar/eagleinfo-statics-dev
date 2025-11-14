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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-H6XV6YF3.js";
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import {
  adminLogin,
  meAdmin
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  FrontendLogger,
  controlNames,
  getBizNestErrorResponseMessage
} from "./chunk-MC4HAW4O.js";
import {
  Router
} from "./chunk-SOKXHU4M.js";
import {
  Meta,
  PLATFORM_ID,
  Title,
  isPlatformBrowser,
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
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/auth/login/login.component.ts
var _c0 = () => ({ standalone: true });
function LoginComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lib-loader-spinner");
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, router, dataService, toastr, auth, metaTagService, titleService, apNme, mainBarTitle, currencyService, platformId) {
    this.fb = fb;
    this.router = router;
    this.dataService = dataService;
    this.toastr = toastr;
    this.auth = auth;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.currencyService = currencyService;
    this.platformId = platformId;
    this.toggleData = true;
    this.posting = false;
    this.date = /* @__PURE__ */ new Date();
    this.config = {
      format: '"DD-MM-YYYY"'
    };
    this.isChecked = false;
    this.form = this.fb.group({
      emailOrPhoneNumber: ["", Validators.compose([Validators.minLength(4), Validators.required])]
    });
  }
  get controlNames() {
    return controlNames(this.form.controls);
  }
  ngOnInit() {
    const storeCurrency = this.currencyService.getStorageCurrency();
    this.currencyService.setCurrency(storeCurrency && (storeCurrency?.length > 0 && storeCurrency?.length < 4) ? storeCurrency : "USD");
    AppEnvironmentService.environment = {
      production: environment.production
    };
    FrontendLogger.error("after controller");
    this.mainBarTitle.title = "Login";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Admin panel login page for secure access to administrative features."
    });
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.getRememberMe();
    }
  }
  submit() {
    return __async(this, null, function* () {
      this.posting = true;
      try {
        const emailOrPhoneNumber = String(this.form.get("emailOrPhoneNumber")?.value);
        const isPhone = emailOrPhoneNumber.match(/^[0-9]{10}$/);
        let body = {};
        const rememberMeDays = this.isChecked ? 7 : 1;
        if (isPhone) {
          body = {
            phone: emailOrPhoneNumber
          };
        } else {
          body = {
            email: emailOrPhoneNumber
          };
        }
        const response = yield adminLogin(body);
        FrontendLogger.debug("Login success", response);
        this.router.navigate(["/verify/" + rememberMeDays]);
      } catch (error) {
        FrontendLogger.error("Login error", error);
        this.toastr.error(getBizNestErrorResponseMessage(error), "Failed");
      } finally {
        this.posting = false;
      }
    });
  }
  getRememberMe() {
    this.isChecked = this.auth.getRememberMe() === "true";
    if (this.isChecked) {
      return this.authExprAdmin();
    }
  }
  rememberMe(ev) {
    this.auth.remeberMe(ev);
  }
  authExprAdmin() {
    return __async(this, null, function* () {
      this.posting = true;
      try {
        const response = yield meAdmin();
        FrontendLogger.debug("authExprAdmin success", response);
        this.dataService.isSuperAdmin = true;
        this.auth.isLoggedIn = true;
        this.form.reset();
        const storeCurrency = this.currencyService.getStorageCurrency();
        this.currencyService.setCurrency(storeCurrency && (storeCurrency?.length > 0 && storeCurrency?.length < 4) ? storeCurrency : response.defaultCurrency || "UGX");
        this.router.navigate(["/"]);
      } catch (error) {
        FrontendLogger.error("authExprAdmin error", error);
      } finally {
        this.posting = false;
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 7, consts: [[1, "container-fluid", "min-h-screen", "flex", "items-center", "justify-center", "p-4", "text-default-dark"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "w-full", "max-w-5xl", "shadow-2xl", "rounded-2xl", "overflow-hidden", "!bg-default-white"], [1, "!bg-default-white", "p-6", "sm:p-8", "md:p-12", "flex", "flex-col", "justify-center"], [1, "mb-8", "text-center"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-center", "mb-6"], ["src", "assets/logo/logoblack.png", "alt", "Company Logo", "width", "50", "height", "50", 1, "mb-4", "sm:mb-0", "sm:mr-4", "w-12", "h-12", "object-contain", "transition-transform", "duration-300", "hover:scale-110", "company-img"], [1, "text-2xl", "sm:text-3xl", "font-bold"], [1, "text-xs", "sm:text-sm"], [1, "space-y-4", "sm:space-y-6", "mx-auto", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "sm:text-sm", "font-medium", "mb-2"], ["type", "text", "id", "emailOrPhoneNumber", "placeholder", "Enter your email or phone number", 1, "w-full", "px-3", "py-2", "sm:px-4", "sm:py-3", "text-xs", "sm:text-sm", "border", "border-gray-300", "rounded-lg", "!bg-default-white", "placeholder-gray-500", "focus:outline-none", "focus:ring-2", "focus:ring-secondary", "transition-all", "duration-300", 3, "formControlName"], [1, "flex", "items-center", "justify-between", "text-xs", "sm:text-sm"], [1, "flex", "items-center"], ["type", "checkbox", "id", "remember-me", 1, "h-3", "w-3", "sm:h-4", "sm:w-4", "!text-secondary", "focus:ring-secondary", "border-gray-300", "rounded", 3, "ngModelChange", "change", "ngModel", "ngModelOptions"], ["for", "remember-me", 1, "ml-2"], ["type", "submit", 1, "w-full", "flex", "gap-2", "justify-center", "py-2", "sm:py-3", "px-4", "text-xs", "sm:text-sm", "border", "border-transparent", "rounded-lg", "shadow-sm", "font-medium", "text-white", "!bg-secondary", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "transition-all", "duration-300", "disabled:opacity-50", "flex", "items-center", "justify-center", 3, "disabled"], [1, "hidden", "md:block", "col-span-1", "bg-cover", "bg-center", "relative", "overflow-hidden", 2, "background-image", "url('assets/backgrounds/business-dashboard.jpg')"], [1, "bg-black", "bg-opacity-40", "absolute", "inset-0", "flex", "items-center", "justify-center", "text-center", "p-8"], [1, "text-white", "relative", "z-10"], [1, "text-2xl", "md:text-3xl", "lg:text-4xl", "font-bold", "mb-4"], [1, "text-sm", "md:text-base", "lg:text-lg", "mb-6"], [1, "absolute", "bottom-0", "left-0", "w-full", "h-1/2", "overflow-hidden", "pointer-events-none"], [1, "absolute", "bottom-0", "left-0", "transform", "-translate-x-1/4", "translate-y-1/4", "rotate-[-15deg]"], ["xmlns", "http://www.w3.org/2000/svg", "width", "300", "height", "200", "viewBox", "0 0 300 200", 1, "opacity-80", "shadow-xl"], ["transform", "translate(20, 100)"], ["x", "0", "y", "0", "width", "220", "height", "40", "fill", "#8B4513"], ["transform", "translate(40, 70)"], ["x", "0", "y", "0", "width", "200", "height", "40", "fill", "#2C3E50"], ["transform", "translate(60, 40)"], ["x", "0", "y", "0", "width", "180", "height", "40", "fill", "#A0522D"], ["x", "220", "y", "-10", "width", "20", "height", "50", "fill", "#6B4423"], ["x1", "225", "y1", "0", "x2", "225", "y2", "40", "stroke", "#D2B48C", "stroke-width", "2"], ["x", "200", "y", "-10", "width", "20", "height", "50", "fill", "#1A2633"], ["x1", "205", "y1", "0", "x2", "205", "y2", "40", "stroke", "#ECF0F1", "stroke-width", "2"], ["x", "180", "y", "-10", "width", "20", "height", "50", "fill", "#6B3E23"], ["x1", "185", "y1", "0", "x2", "185", "y2", "40", "stroke", "#E6C229", "stroke-width", "2"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "h1", 6);
        \u0275\u0275text(7, "Admin Portal wow");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, " Secure Access to Business Management Panel ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "form", 8);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(11, "div")(12, "label", 9);
        \u0275\u0275text(13, " Email or Phone ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isChecked, $event) || (ctx.isChecked = $event);
          return $event;
        });
        \u0275\u0275listener("change", function LoginComponent_Template_input_change_17_listener() {
          return ctx.rememberMe(ctx.isChecked);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "label", 14);
        \u0275\u0275text(19, " Remember me for 7 days ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div")(21, "button", 15);
        \u0275\u0275template(22, LoginComponent_Conditional_22_Template, 1, 0, "lib-loader-spinner");
        \u0275\u0275text(23, " Sign In ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div", 16)(25, "div", 17)(26, "div", 18)(27, "h2", 19);
        \u0275\u0275text(28, " We strive to provide the best experience ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p", 20);
        \u0275\u0275text(30, " Powerful management tools at your fingertips ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 21)(32, "div", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(33, "svg", 23)(34, "g", 24);
        \u0275\u0275element(35, "rect", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "g", 26);
        \u0275\u0275element(37, "rect", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "g", 28);
        \u0275\u0275element(39, "rect", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "g", 24);
        \u0275\u0275element(41, "rect", 30)(42, "line", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "g", 26);
        \u0275\u0275element(44, "rect", 32)(45, "line", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "g", 28);
        \u0275\u0275element(47, "rect", 34)(48, "line", 35);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275property("formControlName", ctx.controlNames.emailOrPhoneNumber);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.isChecked);
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.posting);
        \u0275\u0275advance();
        \u0275\u0275conditional(22, ctx.posting ? 22 : -1);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, LoaderSpinnerComponent], styles: ["\n\n.right-side-views[_ngcontent-%COMP%] {\n  display: none;\n}\n.right-column[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 20px;\n  border-top-left-radius: 16px;\n  border-bottom-left-radius: 16px;\n}\nform[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  padding: 20px;\n  background-color: var(--app-color-white);\n  border-radius: 16px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border: 3px solid #424242;\n  transition: transform 0.3s ease-in-out;\n  color: var(--app-color-dark) !important;\n}\nform[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  border-radius: 12px;\n  color: var(--app-color-dark);\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  border-radius: 12px;\n  color: var(--app-color-white);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.image-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translateX(-5px);\n  }\n  20%, 40%, 60%, 80% {\n    transform: translateX(5px);\n  }\n}\n.animate-shake[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_shake 0.5s ease-in-out;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent" });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-2DFI3WC7.js.map
