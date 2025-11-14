import {
  subscriptionDurations
} from "./chunk-VKAOE7S2.js";
import {
  patternWithMessage
} from "./chunk-4JFZSO6M.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "./chunk-H6XV6YF3.js";
import {
  AppNameService,
  controlNames,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  Meta,
  Title,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/subscriptions/add-subscription/add-update-subscription.component.ts
var AddUpdateSubscriptionComponent = class _AddUpdateSubscriptionComponent {
  constructor(fb, eventbus, apNme, mainBarTitle, metaTagService, titleService) {
    this.fb = fb;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.url = "subscription";
    this.loading = false;
    this.files = [];
    this.posting = false;
    this.features = [];
    this.showModal = false;
    this.durations = subscriptionDurations;
    this.addSubscriptionForm = this.fb.group({
      name: ["", Validators.compose([
        patternWithMessage(/[a-zA-Z ]*/, "Only letters are allowed"),
        Validators.minLength(5),
        Validators.maxLength(40),
        Validators.required
      ])],
      amount: ["", Validators.compose([
        patternWithMessage(/^[0-9]+$/, "Only numbers are allowed"),
        Validators.minLength(3),
        Validators.maxLength(11),
        Validators.required
      ])],
      duration: ["", Validators.compose([
        Validators.required
      ])],
      active: [""]
    });
  }
  get controlNames() {
    return controlNames(this.addSubscriptionForm.controls);
  }
  ngOnInit() {
    const handlers = {
      updateSubscription: (data) => {
        this.subscription = data;
        this.addSubscriptionForm.patchValue(this.subscription);
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.mainBarTitle.title = "Edit Subscription - " + (this.subscription?.name || "");
    this.cleanup = cleanup;
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily manage and edit your subscription plans for optimal service customization."
    });
    if (this.subscription) {
      this.features = this.subscription.features;
    }
  }
  checkControlInvalidOrDirty(controlName) {
    return !this.addSubscriptionForm.get(controlName)?.valid && this.addSubscriptionForm.get(controlName)?.dirty;
  }
  fromDateNotif(ev) {
    this.addSubscriptionForm.controls["startDate"].setValue(ev);
  }
  toDateNotif(ev) {
    this.addSubscriptionForm.controls["endDate"].setValue(ev);
  }
  addSubscription() {
    return __async(this, null, function* () {
    });
  }
  constructFeatureForm(feature) {
    this.addFeatureForm = this.fb.group({
      type: [feature?.type || "", Validators.compose([
        Validators.required
      ])],
      name: [feature?.name || "", Validators.compose([
        patternWithMessage(/[a-zA-Z ]*/, "Only letters are allowed"),
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required
      ])],
      limitSize: [feature?.limitSize || "", Validators.compose([
        patternWithMessage(/^[0-9]+$/, "Only numbers(integers) are allowed"),
        Validators.minLength(3),
        Validators.maxLength(3e3),
        Validators.required
      ])]
    });
  }
  addFeature() {
    this.currFeature = void 0;
    this.modalTitle = "Add Feature";
    this.showModal = true;
    this.constructFeatureForm();
  }
  relegateFeatureAdd() {
    const data = {
      type: this.addFeatureForm?.value.type,
      name: this.addFeatureForm?.value.name,
      description: "",
      limitSize: Number(this.addFeatureForm?.value.limitSize),
      remainingSize: Number(this.currFeature?.remainingSize || this.addFeatureForm?.value.limitSize)
    };
    if (this.currFeature) {
      this.onUpdateFeature(data);
    } else {
      this.onAddFeature(data);
    }
  }
  onAddFeature(ev) {
    this.addFeatureForm?.reset();
    const found = this.features.find((feature) => feature.type === ev.type);
    if (found) {
      return;
    }
    this.features.push(ev);
  }
  updateFeature(feature) {
    this.showModal = true;
    this.currFeature = feature;
    this.constructFeatureForm(feature);
  }
  onUpdateFeature(feature) {
    const foundIndex = this.features.findIndex((val) => val.name === this.currFeature?.name);
    if (typeof foundIndex === "number") {
      this.features[foundIndex] = feature;
    }
    this.currFeature = void 0;
  }
  removeFeature(name) {
    const foundIndex = this.features.findIndex((val) => val.name === name);
    this.features.splice(foundIndex, 1);
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function AddUpdateSubscriptionComponent_Factory(t) {
      return new (t || _AddUpdateSubscriptionComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUpdateSubscriptionComponent, selectors: [["app-add-update-subscription"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 0, vars: 0, template: function AddUpdateSubscriptionComponent_Template(rf, ctx) {
    }, dependencies: [
      FormsModule,
      ReactiveFormsModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUpdateSubscriptionComponent, { className: "AddUpdateSubscriptionComponent" });
})();
export {
  AddUpdateSubscriptionComponent
};
//# sourceMappingURL=chunk-DGWWG5RH.js.map
