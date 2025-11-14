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
import {
  SuperPermissionsComponent
} from "./chunk-WUIF36DZ.js";
import "./chunk-7OBDCAFX.js";
import "./chunk-WJJSEUQ7.js";
import {
  AdminBackBarComponent
} from "./chunk-RPZGEB5Y.js";
import "./chunk-ZAFBV4O5.js";
import "./chunk-IOIIXNZS.js";
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
import {
  TooltipService
} from "./chunk-RMIF5JQ2.js";
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
  Validators,
  ɵNgNoValidate
} from "./chunk-H6XV6YF3.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  BizNestClientError,
  FrontendLogger,
  VendorManager,
  controlNames,
  getBizNestErrorResponseMessage,
  runSubscriptionsForSharedUse
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
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async,
  __spreadValues
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/base/add-update-vendor-manager.base.ts
var AddUpdateVendorManagerBase = class _AddUpdateVendorManagerBase {
  constructor(fb, toastr, eventbus, tooltipService, router, route, apNme, mainBarTitle, location, windowService, metaTagService, titleService) {
    this.fb = fb;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.tooltipService = tooltipService;
    this.router = router;
    this.route = route;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.location = location;
    this.windowService = windowService;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.url = "vendorManagers";
    this.loading = false;
    this.posting = false;
    this.userFormValid = false;
    const editAction = this.route.snapshot?.params["editAction"];
    this.mainBarTitle.title = editAction === "add" ? "Add Vendor Manager" : "Update  Vendor Manager";
    this.addVendorManagerForm = this.fb.group({
      bio: ["", Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])],
      title: ["", Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])]
    });
  }
  get controlNames() {
    return controlNames(this.addVendorManagerForm.controls);
  }
  ngOnInit() {
    const handlers = {
      updateVendorManager: (data) => {
        if (!data._id && !data.manager || typeof data.manager === "string") {
          throw new BizNestClientError("Invalid VendorManager");
        }
        this.mainBarTitle.title = "Update Vendor Manager - " + data.manager.firstName + " " + data.manager.lastName;
        this.vendorManager = data;
        this.user = this.vendorManager?.manager;
        if (this.user) {
          this.userFormValid = true;
        }
        this.addVendorManagerForm.patchValue(this.vendorManager);
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Easily manage and edit vendor manager details to ensure effective supplier
      relationships and operational efficiency.`
    });
  }
  checkControlInvalidOrDirty(controlName) {
    return !this.addVendorManagerForm.get(controlName)?.valid && this.addVendorManagerForm.get(controlName)?.dirty;
  }
  soloDateChange(ev) {
    this.addVendorManagerForm.controls["dateLeft"].setValue(ev);
  }
  soloDateEstChange(ev) {
    this.addVendorManagerForm.controls["dateOfEst"].setValue(ev);
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
  onPermissionsChange(ev) {
    this.permissions = ev;
  }
  saveChanges() {
    return __async(this, null, function* () {
      if (this.addVendorManagerForm.invalid || !this.userFormValid) {
        markFormGroupTouched(this.addVendorManagerForm, this);
        scrollToTop(this.windowService);
        this.eventbus.generalEvent$.next({ type: "markAdduserForm", data: true });
        return;
      } else {
        const formValues = this.addVendorManagerForm.value;
        try {
          const localProp = {
            bio: formValues.bio,
            title: formValues.title
          };
          this.posting = true;
          if (this.vendorManager) {
            const data = __spreadValues({
              manager: __spreadValues({}, this.userData)
            }, localProp);
            yield this.vendorManager.update(data);
          } else {
            const data = __spreadValues({
              manager: {
                // ...this.userData,
                firstName: this.userData?.firstName || "",
                lastName: this.userData?.lastName || "",
                email: this.userData?.email || "",
                phone: this.userData?.phone || "",
                managerType: "vendorManager"
              }
            }, localProp);
            yield VendorManager.add(data);
          }
          this.toastr.success("Operation sucessfull...!", "Success");
          this.addVendorManagerForm.reset();
          this.eventbus.generalEvent$.next({ type: "resetUserForm", data: true });
          if (this.vendorManager) {
            this.location.back();
          }
          scrollToTop(this.windowService);
        } catch (error) {
          FrontendLogger.error("AddVendorManagerComponent:addVendorManager:: - err", error);
          this.toastr.error(getBizNestErrorResponseMessage(error), "Failed", {
            disableTimeOut: true
          });
        } finally {
          this.posting = false;
        }
      }
    });
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function AddUpdateVendorManagerBase_Factory(t) {
      return new (t || _AddUpdateVendorManagerBase)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AddUpdateVendorManagerBase });
  }
};

// projects/admin-panel/src/app/components/pane/manager-related/vendor-manager/add-update-vendor-manager/add-update-vendor-manager.component.ts
function AddUpdateVendorManagerComponent_Conditional_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "Persmissions");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "lib-super-permissions", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("manager", ctx_r1.vendorManager.manager)("saveButton", false);
  }
}
function AddUpdateVendorManagerComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7)(1, "h2", 8);
    \u0275\u0275text(2, " Extra Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10);
    \u0275\u0275element(7, "app-admin-form-field", 11)(8, "app-admin-form-field", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12);
    \u0275\u0275template(10, AddUpdateVendorManagerComponent_Conditional_10_Conditional_10_Template, 3, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-admin-form-button", 13);
    \u0275\u0275listener("save", function AddUpdateVendorManagerComponent_Conditional_10_Template_app_admin_form_button_save_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveChanges());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.addVendorManagerForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errMsg, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", ctx_r1.controlNames.bio)("label", "Bio");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.controlNames.title)("label", "Title");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(10, ctx_r1.vendorManager ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("tooltip", "Saves Vendor Manager Details.")("btnText", "Save Vendor Manager")("disabled", ctx_r1.posting)("posting", ctx_r1.posting);
  }
}
var AddUpdateVendorManagerComponent = class _AddUpdateVendorManagerComponent extends AddUpdateVendorManagerBase {
  constructor(fb, toastr, eventbus, tooltipService, router, route, apNme, mainBarTitle, location, windowService, metaTagService, titleService) {
    super(fb, toastr, eventbus, tooltipService, router, route, apNme, mainBarTitle, location, windowService, metaTagService, titleService);
    this.fb = fb;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.tooltipService = tooltipService;
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
        name: "Vendor Manager",
        icon: "supervisor_account",
        link: "/vendor-manager/list"
      },
      {
        name: "Edit Vendor Manager",
        icon: "edit"
      }
    ];
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.\u0275fac = function AddUpdateVendorManagerComponent_Factory(t) {
      return new (t || _AddUpdateVendorManagerComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUpdateVendorManagerComponent, selectors: [["app-add-update-vendor-manager"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 11, vars: 5, consts: [[3, "title", "breadCrumbs"], [1, "container", "mx-auto", "md:px-6", "md:pt-32", "pb-32", "pt-12", "!min-h-[100vh]", "!mb-[180px]"], [1, "text-center", "min-h-[100vh]"], [1, "mx-auto", "max-w-[900px]", "grid", "grid-cols-1", "md:grid-cols-1", "lg:grid-cols-2", "xl:grid-cols-2", "gap-6", "md:px-3", "h-full", "flex", "justify-center"], [1, "w-full", "md:col-span-1", "lg:col-span-1", "xl:col-span-1"], [3, "notify", "user", "fromComp"], [1, "mx-auto", "max-w-[900px]", "md:px-3", "h-full", "items-center", "justify-center"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "formGroup"], [1, "text-3xl", "font-extrabold", "tracking-tight", "text-center", "mb-6"], [1, "err-msg", "text-red-500", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [3, "formControlName", "label"], [1, "pt-4"], [3, "save", "tooltip", "btnText", "disabled", "posting"], [3, "manager", "saveButton"]], template: function AddUpdateVendorManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-back-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "section", 2)(4, "div", 3)(5, "div", 4);
        \u0275\u0275element(6, "app-admin-form-instruction");
        \u0275\u0275elementStart(7, "app-admin-add-user", 5);
        \u0275\u0275listener("notify", function AddUpdateVendorManagerComponent_Template_app_admin_add_user_notify_7_listener($event) {
          return ctx.userFormChange($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div")(9, "div", 6);
        \u0275\u0275template(10, AddUpdateVendorManagerComponent_Conditional_10_Template, 12, 11, "form", 7);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance(6);
        \u0275\u0275property("user", ctx.user)("fromComp", "vendorManager");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(10, ctx.addVendorManagerForm ? 10 : -1);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      AdminAddUserComponent,
      AdminBackBarComponent,
      AdminFormFieldComponent,
      AdminFormButtonComponent,
      AdminPageContentComponent,
      AdminFormInstructionComponent,
      SuperPermissionsComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUpdateVendorManagerComponent, { className: "AddUpdateVendorManagerComponent" });
})();
export {
  AddUpdateVendorManagerComponent
};
//# sourceMappingURL=chunk-3IIYMAWC.js.map
