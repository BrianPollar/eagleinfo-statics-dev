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
  DeliveryManager,
  FrontendLogger,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/base/add-update-delivery-manager-base.ts
var AddUpdateDeliveryManagerBase = class _AddUpdateDeliveryManagerBase {
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
    this.url = "deliveryManagers";
    this.loading = false;
    this.posting = false;
    this.userFormValid = false;
    const editAction = this.route.snapshot?.params["editAction"];
    this.mainBarTitle.title = editAction === "add" ? "Add Delivery Manager" : "Update Delivery Manager";
    this.addDeliveryManagerForm = this.fb.group({
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
    return controlNames(this.addDeliveryManagerForm.controls);
  }
  ngOnInit() {
    const handlers = {
      updateDeliveryManager: (data) => {
        if (!data._id && !data.manager || typeof data.manager === "string") {
          throw new BizNestClientError("Invalid DeliveryManager");
        }
        this.mainBarTitle.title = "Update Delivery Manager - " + data.manager?.firstName + " " + data.manager?.lastName;
        this.deliveryManager = data;
        if (this.deliveryManager) {
          this.user = this.deliveryManager.manager;
          if (this.user) {
            this.userFormValid = true;
          }
        }
        this.addDeliveryManagerForm.patchValue(this.deliveryManager);
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Easily manage and edit delivery manager details to
        ensure effective logistics and operational efficiency.`
    });
  }
  checkControlInvalidOrDirty(controlName) {
    return !this.addDeliveryManagerForm.get(controlName)?.valid && this.addDeliveryManagerForm.get(controlName)?.dirty;
  }
  soloDateChange(ev) {
    this.addDeliveryManagerForm.controls["dateLeft"].setValue(ev);
  }
  soloDateEstChange(ev) {
    this.addDeliveryManagerForm.controls["dateOfEst"].setValue(ev);
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
  saveChanges() {
    return __async(this, null, function* () {
      if (this.addDeliveryManagerForm.invalid || !this.userFormValid) {
        markFormGroupTouched(this.addDeliveryManagerForm, this);
        scrollToTop(this.windowService);
        this.eventbus.generalEvent$.next({ type: "markAdduserForm", data: true });
        return;
      } else {
        const formValues = this.addDeliveryManagerForm.value;
        const localProps = {
          bio: formValues.bio,
          title: formValues.title
        };
        try {
          this.posting = true;
          if (this.deliveryManager) {
            const data = __spreadValues({
              manager: this.userData
            }, localProps);
            yield this.deliveryManager.update(data);
          } else {
            const data = __spreadValues({
              manager: __spreadProps(__spreadValues({}, this.userData), {
                firstName: this.userData?.firstName || "",
                lastName: this.userData?.lastName || "",
                email: this.userData?.email || "",
                phone: this.userData?.phone || "",
                defaultCurrency: "USD",
                managerType: "deliveryManager"
              })
            }, localProps);
            yield DeliveryManager.add(data);
          }
          this.toastr.success("Operation sucessfull...!", "Success");
          this.addDeliveryManagerForm.reset();
          this.eventbus.generalEvent$.next({ type: "resetUserForm", data: true });
          if (this.deliveryManager) {
            this.location.back();
          }
          scrollToTop(this.windowService);
        } catch (error) {
          FrontendLogger.error("AddDeliveryManagerComponent:addDeliveryManager:: - err", error);
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
    this.\u0275fac = function AddUpdateDeliveryManagerBase_Factory(t) {
      return new (t || _AddUpdateDeliveryManagerBase)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AddUpdateDeliveryManagerBase });
  }
};

// projects/admin-panel/src/app/components/pane/manager-related/delivery-manager/add-update-delivery-manager/add-update-delivery-manager.component.ts
function AddUpdateDeliveryManagerComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lib-super-permissions", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("manager", ctx_r0.deliveryManager.manager)("saveButton", false);
  }
}
var AddUpdateDeliveryManagerComponent = class _AddUpdateDeliveryManagerComponent extends AddUpdateDeliveryManagerBase {
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
        name: "Delivery Manager",
        icon: "supervisor_account",
        link: "/delivery-manager/list"
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
    this.\u0275fac = function AddUpdateDeliveryManagerComponent_Factory(t) {
      return new (t || _AddUpdateDeliveryManagerComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUpdateDeliveryManagerComponent, selectors: [["app-add-update-delivery-manager"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 25, vars: 16, consts: [[3, "title", "breadCrumbs"], [1, "container", "mx-auto", "md:px-6", "md:pt-32", "pb-32", "pt-12", "!min-h-[100vh]", "!mb-[180px]"], [1, "text-center", "min-h-[100vh]"], [1, "grid", "grid-cols-1", "md:grid-cols-1", "lg:grid-cols-2", "xl:grid-cols-2", "gap-6", "md:px-3", "h-full", "flex", "justify-center"], [1, "w-full", "md:col-span-1", "lg:col-span-1", "xl:col-span-1"], [3, "notify", "parentInstance", "user", "fromComp"], [1, "mx-auto", "max-w-[900px]", "md:px-3", "h-full", "items-center", "justify-center"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "formGroup"], [1, "text-3xl", "font-extrabold", "tracking-tight", "text-center", "mb-6"], [1, "err-msg", "text-red-500", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [3, "formControlName", "label"], [1, "pt-4"], [3, "manager", "saveButton"], [3, "save", "tooltip", "btnText", "disabled", "posting"]], template: function AddUpdateDeliveryManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-back-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "section", 2);
        \u0275\u0275element(4, "app-admin-form-instruction");
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
        \u0275\u0275element(7, "app-admin-form-instruction");
        \u0275\u0275elementStart(8, "app-admin-add-user", 5);
        \u0275\u0275listener("notify", function AddUpdateDeliveryManagerComponent_Template_app_admin_add_user_notify_8_listener($event) {
          return ctx.userFormChange($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div")(10, "div", 6)(11, "form", 7)(12, "h2", 8);
        \u0275\u0275text(13, " Extra Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "p");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275element(18, "app-admin-form-field", 11)(19, "app-admin-form-field", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12)(21, "h4");
        \u0275\u0275text(22, "Persmissions");
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, AddUpdateDeliveryManagerComponent_Conditional_23_Template, 1, 2, "lib-super-permissions", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "app-admin-form-button", 14);
        \u0275\u0275listener("save", function AddUpdateDeliveryManagerComponent_Template_app_admin_form_button_save_24_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance(7);
        \u0275\u0275property("parentInstance", ctx.deliveryManager)("user", ctx.user)("fromComp", "deliveryManager");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.addDeliveryManagerForm);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.errMsg, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("formControlName", ctx.controlNames.bio)("label", "Bio");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", ctx.controlNames.title)("label", "Title");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(23, ctx.deliveryManager ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("tooltip", "Saves Delivery Manager Details.")("btnText", "Save Delivery Manager")("disabled", ctx.posting)("posting", ctx.posting);
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
      SuperPermissionsComponent,
      AdminBackBarComponent,
      AdminFormFieldComponent,
      AdminFormButtonComponent,
      AdminPageContentComponent,
      AdminFormInstructionComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUpdateDeliveryManagerComponent, { className: "AddUpdateDeliveryManagerComponent" });
})();
export {
  AddUpdateDeliveryManagerComponent
};
//# sourceMappingURL=chunk-QJQKZJLA.js.map
