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
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  BizNestClientError,
  FrontendLogger,
  OperationalLocation,
  controlNames,
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
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/operational-location/add-update-operational-location/add-update-operational-location.component.ts
function AddUpdateOperationalLocationComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 4)(1, "div", 5)(2, "h2", 6);
    \u0275\u0275text(3, " Edit Operational Location ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 7);
    \u0275\u0275text(5, " Provide comprehensive Operational Location details ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275element(7, "app-admin-form-field", 9)(8, "app-admin-form-field", 9)(9, "app-admin-form-field", 9)(10, "app-admin-form-field", 9)(11, "app-admin-form-field", 9)(12, "app-admin-form-field", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "app-admin-form-field", 9);
    \u0275\u0275elementStart(14, "app-admin-form-button", 10);
    \u0275\u0275listener("save", function AddUpdateOperationalLocationComponent_Conditional_6_Template_app_admin_form_button_save_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveChanges());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.addOperationalLocationForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("formControlName", ctx_r1.controlNames.placeName)("label", "Place Name");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.controlNames.cityName)("label", "City Name");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.controlNames.address)("label", "Place Address");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.controlNames.contactEmail)("label", "Email Address");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.controlNames.contactPhone)("label", "Phone Number");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.controlNames.shippingCost)("label", "Shipping Cost");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.controlNames.deliversInDays)("label", "Delivers In Days");
    \u0275\u0275advance();
    \u0275\u0275property("tooltip", "Saves Operational Location Details.")("btnText", "Save Operational Location")("disabled", ctx_r1.posting)("posting", ctx_r1.posting);
  }
}
var AddUpdateOperationalLocationComponent = class _AddUpdateOperationalLocationComponent {
  constructor(fb, toastr, eventbus, route, apNme, mainBarTitle, location, windowService, metaTagService, titleService) {
    this.fb = fb;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.route = route;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.location = location;
    this.windowService = windowService;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.url = "citys";
    this.loading = false;
    this.files = [];
    this.posting = false;
    this.breadCrumbs = [
      {
        name: "Dashboard",
        icon: "space_dashboard",
        link: "/"
      },
      {
        name: "Operational Location",
        icon: "location_city",
        link: "/operational-location/list"
      },
      {
        name: "Edit Operational Location",
        icon: "edit"
      }
    ];
    const editAction = this.route.snapshot?.params["editAction"];
    this.mainBarTitle.title = editAction === "add" ? "Add Operations Location" : "Update Operations Location";
    this.addOperationalLocationForm = this.fb.group({
      placeName: [
        "",
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.required
        ])
      ],
      cityName: [
        "",
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.required
        ])
      ],
      address: [
        "",
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(180)
        ])
      ],
      contactEmail: [
        "",
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(180)
        ])
      ],
      contactPhone: [
        "",
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(180)
        ])
      ],
      shippingCost: [
        "",
        Validators.compose([
          Validators.minLength(0),
          Validators.maxLength(8),
          patternWithMessage(/^[0-9]+(\.[0-9]+)?$/, "Only numbers are allowed"),
          Validators.required
        ])
      ],
      deliversInDays: [
        "",
        Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(2),
          patternWithMessage(/^[0-9]+$/, "Only numbers(integers) are allowed"),
          Validators.required
        ])
      ]
    });
  }
  get controlNames() {
    return controlNames(this.addOperationalLocationForm.controls);
  }
  ngOnInit() {
    const handlers = {
      updateOperationalLocation: (data) => {
        if (!data._id || !data.placeName) {
          throw new BizNestClientError("Invalid OperationalLocation");
        }
        this.mainBarTitle.title = "Update Operations Location - " + data.placeName;
        this.operationalLocation = data;
        this.addOperationalLocationForm.patchValue(this.operationalLocation);
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily manage and edit operational location details for effective city management."
    });
  }
  checkControlInvalidOrDirty(controlName) {
    return !this.addOperationalLocationForm.get(controlName)?.valid && this.addOperationalLocationForm.get(controlName)?.dirty;
  }
  saveChanges() {
    return __async(this, null, function* () {
      if (this.addOperationalLocationForm.invalid) {
        markFormGroupTouched(this.addOperationalLocationForm, this);
        scrollToTop(this.windowService);
        return;
      } else {
        const formValues = this.addOperationalLocationForm.value;
        const data = {
          placeName: formValues.placeName,
          cityName: formValues.cityName,
          address: formValues.address,
          shippingCost: formValues.shippingCost,
          deliversInDays: formValues.deliversInDays,
          contactEmail: formValues.contactEmail,
          contactPhone: formValues.contactEmail
        };
        try {
          this.posting = true;
          if (this.operationalLocation) {
            yield this.operationalLocation.update(data);
          } else {
            yield OperationalLocation.add(data);
          }
          this.addOperationalLocationForm.reset();
          this.toastr.success("Operation sucessfull...!", "Success");
          if (this.operationalLocation) {
            this.location.back();
          }
          scrollToTop(this.windowService);
        } catch (error) {
          FrontendLogger.error("AddOperationalLocationComponent:addOperationalLocation:: - err ", error);
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
    this.\u0275fac = function AddUpdateOperationalLocationComponent_Factory(t) {
      return new (t || _AddUpdateOperationalLocationComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUpdateOperationalLocationComponent, selectors: [["app-add-update-operational-location"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 3, consts: [[3, "title", "breadCrumbs"], [1, "container", "mx-auto", "md:px-6", "md:pt-32", "pb-32", "pt-12", "!min-h-[100vh]", "!mb-[180px]"], [1, "text-center", "min-h-[100vh]", "mx-auto", "max-w-[700px]"], [1, "md:px-3", "h-full", "flex", "items-center", "justify-center"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "formGroup"], [1, "text-center", "mb-6"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [3, "formControlName", "label"], [3, "save", "tooltip", "btnText", "disabled", "posting"]], template: function AddUpdateOperationalLocationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-back-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "section", 2);
        \u0275\u0275element(4, "app-admin-form-instruction");
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275template(6, AddUpdateOperationalLocationComponent_Conditional_6_Template, 15, 19, "form", 4);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(6, ctx.addOperationalLocationForm ? 6 : -1);
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
      AdminFormButtonComponent,
      AdminPageContentComponent,
      AdminFormInstructionComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUpdateOperationalLocationComponent, { className: "AddUpdateOperationalLocationComponent" });
})();
export {
  AddUpdateOperationalLocationComponent
};
//# sourceMappingURL=chunk-5ROUXFL6.js.map
