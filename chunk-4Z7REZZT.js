import {
  AdminSelectFieldComponent
} from "./chunk-LAO6JDWE.js";
import {
  patternWithMessage
} from "./chunk-4JFZSO6M.js";
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
  SoloDateComponent
} from "./chunk-V2FCV2CW.js";
import "./chunk-3B3O76HS.js";
import "./chunk-6C27QOWO.js";
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
  Validators,
  ɵNgNoValidate
} from "./chunk-H6XV6YF3.js";
import {
  NotificationApiKey
} from "./chunk-DEKWU2RH.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  BizNestClientError,
  Company,
  FrontendLogger,
  controlNames,
  getBizNestErrorResponseMessage,
  navByBus,
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
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
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

// projects/admin-panel/src/app/components/pane/notification/notif-key/add-update-notif-key/add-update-notif-key.component.ts
var AddUpdateNotifKeyComponent = class _AddUpdateNotifKeyComponent {
  constructor(fb, router, location, route, toastr, eventbus, apNme, windowService, mainBarTitle, metaTagService, titleService) {
    this.fb = fb;
    this.router = router;
    this.location = location;
    this.route = route;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.windowService = windowService;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.posting = false;
    this.countUsers = 0;
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.breadCrumbs = [
      {
        name: "Dashboard",
        icon: "space_dashboard",
        link: "/"
      },
      {
        name: "Notification Key",
        icon: "assessment",
        link: "/auto-tax/list"
      },
      {
        name: "Edit Notification Key",
        icon: "edit"
      }
    ];
    this.enabledOptionsArray = [
      { value: true, label: "Enabled" },
      { value: false, label: "Disabled" }
    ];
    this.companiesArray = [];
    this.companies = [];
    const editAction = this.route.snapshot?.params["editAction"];
    this.mainBarTitle.title = editAction === "add" ? "Add  Notification Key" : "Update  Notification Key";
    this.form = this.fb.group({
      maxEmails: ["", Validators.compose([
        Validators.min(0),
        Validators.max(100),
        patternWithMessage(/^[0-9]+(\.[0-9]+)?$/, "Must be a valid number."),
        Validators.required
      ])],
      maxSms: ["", Validators.compose([
        Validators.min(0),
        Validators.max(100),
        patternWithMessage(/^[0-9]+(\.[0-9]+)?$/, "Must be a valid number."),
        Validators.required
      ])],
      enabled: ["", Validators.required],
      expiresAt: ["", Validators.required],
      owner: ["", Validators.required]
    });
  }
  get controlNames() {
    return controlNames(this.form.controls);
  }
  ngOnInit() {
    const handlers = {
      updateNotificationApiKey: (data) => {
        if (!data._id || !data.apiKey || !data.enabled || !data.expiresAt || !data.owner) {
          throw new BizNestClientError(`Invalid NotificationApiKey: missing
            required fields (_id, apiKey, enabled, expiresAt, or owner`);
        }
        this.notifKey = data;
        this.form.patchValue(this.notifKey);
        this.mainBarTitle.title = "Update Notification Key - " + data.apiKey;
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
    this.getCompanies();
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Efficiently manage automatic tax settings for items,
      including compliance with revenue authority regulations.`
    });
  }
  checkControlInvalidOrDirty(controlName) {
    return !this.form.get(controlName)?.valid && this.form.get(controlName)?.dirty;
  }
  notifyDate(date) {
    this.form.get("expiresAt")?.setValue(date);
  }
  getCompanies() {
    return __async(this, null, function* () {
      try {
        const { dataArr } = yield Company.filterAll({});
        this.companies = dataArr;
        this.companiesArray = dataArr.map((company) => ({
          value: company._id,
          label: company.name
        }));
      } catch (err) {
        FrontendLogger.error("AddUpdateNotifKeyComponent:Companies:: - err ", err);
      }
    });
  }
  saveChanges() {
    return __async(this, null, function* () {
      if (this.form.invalid) {
        markFormGroupTouched(this.form, this);
        scrollToTop(this.windowService);
        return;
      }
      this.posting = true;
      const formValues = this.form.value;
      const details = {
        apiKey: formValues.apiKey,
        owner: formValues.owner,
        enabled: formValues.enabled === "true",
        expiresAt: formValues.expiresAt ? new Date(formValues.expiresAt) : void 0,
        maxEmails: parseInt(formValues.maxEmails, 10),
        maxSms: parseInt(formValues.maxSms, 10)
      };
      try {
        if (this.notifKey) {
          yield this.notifKey.update(details);
        } else {
          yield NotificationApiKey.add(details);
        }
        this.toastr.success("Operation sucessfull...!", "Success");
        this.form.reset();
        if (this.notifKey) {
          this.location.back();
        }
        scrollToTop(this.windowService);
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
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function AddUpdateNotifKeyComponent_Factory(t) {
      return new (t || _AddUpdateNotifKeyComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUpdateNotifKeyComponent, selectors: [["app-add-update-notif-key"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 15, consts: [[3, "title", "breadCrumbs"], [1, "container", "mx-auto", "md:px-6", "md:pt-32", "pb-32", "pt-12", "!mn-h-[100vh]", "!mb-[180px]"], [1, "text-center", "min-h-[100vh]", "mx-auto", "max-w-[700px]"], [1, "md:px-3", "h-full", "flex", "items-center", "justify-center"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "ngSubmit", "formGroup"], [1, "text-center", "mb-6"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [3, "formControlName", "label"], ["label", "Enabled", "placeholderOption", "Select a status", 3, "formControlName", "options"], ["label", "Owner", "placeholderOption", "Select a status", 3, "formControlName", "options"], ["placeholder", "Date Added", 3, "notify"], [3, "save", "btnText", "tooltip", "disabled", "posting"]], template: function AddUpdateNotifKeyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-back-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "section", 2);
        \u0275\u0275element(4, "app-admin-form-instruction");
        \u0275\u0275elementStart(5, "div", 3)(6, "form", 4);
        \u0275\u0275listener("ngSubmit", function AddUpdateNotifKeyComponent_Template_form_ngSubmit_6_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275elementStart(7, "div", 5)(8, "h2", 6);
        \u0275\u0275text(9, " Notification Key Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275text(11, " Provide comprehensive information about the notification key ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275element(13, "app-admin-form-field", 9)(14, "app-admin-form-field", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 8);
        \u0275\u0275element(16, "app-admin-select-field", 10)(17, "app-admin-select-field", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div")(19, "lib-solo-date", 12);
        \u0275\u0275listener("notify", function AddUpdateNotifKeyComponent_Template_lib_solo_date_notify_19_listener($event) {
          return ctx.notifyDate($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "app-admin-form-button", 13);
        \u0275\u0275listener("save", function AddUpdateNotifKeyComponent_Template_app_admin_form_button_save_20_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275property("formControlName", ctx.controlNames.maxEmails)("label", "Max Emails");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", ctx.controlNames.maxSms)("label", "Max SMS");
        \u0275\u0275advance(2);
        \u0275\u0275property("formControlName", ctx.controlNames.enabled)("options", ctx.enabledOptionsArray);
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", ctx.controlNames.owner)("options", ctx.companiesArray);
        \u0275\u0275advance(3);
        \u0275\u0275property("btnText", "Save")("tooltip", "Saves Notification Key.")("disabled", ctx.posting)("posting", ctx.posting);
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
      AdminFormFieldComponent,
      AdminSelectFieldComponent,
      AdminFormButtonComponent,
      AdminPageContentComponent,
      AdminFormInstructionComponent,
      SoloDateComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUpdateNotifKeyComponent, { className: "AddUpdateNotifKeyComponent" });
})();
export {
  AddUpdateNotifKeyComponent
};
//# sourceMappingURL=chunk-4Z7REZZT.js.map
