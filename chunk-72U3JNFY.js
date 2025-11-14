import {
  patternWithMessage
} from "./chunk-4JFZSO6M.js";
import {
  AdminFormFieldComponent
} from "./chunk-QB4EFJNB.js";
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
  markFormGroupTouched
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
  EagleInfoClientError,
  Ecommerccut,
  FrontendLogger,
  controlNames,
  getBizNestErrorResponseMessage,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  EventEmitter,
  Location,
  Meta,
  Title,
  debounceTime,
  init_esm,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/misc/form-instruction/form-instruction.component.ts
var FormInstructionComponent = class _FormInstructionComponent {
  static {
    this.\u0275fac = function FormInstructionComponent_Factory(t) {
      return new (t || _FormInstructionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormInstructionComponent, selectors: [["lib-form-instruction"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 0, consts: [[1, "p-2", "mb-6"], [1, "required"], [1, "optional"]], template: function FormInstructionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3");
        \u0275\u0275text(2, "Note");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, " The ");
        \u0275\u0275elementStart(5, "span", 1);
        \u0275\u0275text(6, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " fields are required ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, " The ");
        \u0275\u0275elementStart(10, "span", 2);
        \u0275\u0275text(11, "Optional");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " fields are optional ");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterModule], styles: ["\n\n.required[_ngcontent-%COMP%] {\n  color: red;\n}\n.optional[_ngcontent-%COMP%] {\n  color: green;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/form-instruction.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormInstructionComponent, { className: "FormInstructionComponent" });
})();

// projects/admin-panel/src/app/components/pane/ecommerce-cut/ecommerce-form-custom/ecommerce-cut-form-custom.component.ts
function EcommercCutFormCustomComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
    \u0275\u0275text(5, "Add Custom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function EcommercCutFormCustomComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleModal());
    });
    \u0275\u0275elementStart(7, "i", 6);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "p", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "section", 9)(13, "div", 10)(14, "form", 11);
    \u0275\u0275listener("ngSubmit", function EcommercCutFormCustomComponent_Conditional_0_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275elementStart(15, "div", 12)(16, "h2", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275element(19, "app-admin-form-field", 15)(20, "app-admin-form-field", 15)(21, "app-admin-form-field", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 16)(23, "button", 17);
    \u0275\u0275listener("click", function EcommercCutFormCustomComponent_Conditional_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleModal());
    });
    \u0275\u0275text(24, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 18);
    \u0275\u0275text(26, " Add ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", "This is for a price range", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", "Add Details", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", ctx_r1.controlNames.lowerAmount)("label", "Lower Amount");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.controlNames.upperAmount)("label", "Upper Amount");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.controlNames.percentage)("label", "Percentage");
  }
}
var EcommercCutFormCustomComponent = class _EcommercCutFormCustomComponent {
  constructor(fb) {
    this.fb = fb;
    this.showModal = false;
    this.confirm = new EventEmitter();
    this.closed = new EventEmitter();
    this.form = this.fb.group({
      lowerAmount: ["", Validators.compose([
        Validators.min(0.1),
        patternWithMessage(/^[0-9]+(\.[0-9]+)?$/, "Only numbers are allowed"),
        Validators.required
      ])],
      upperAmount: ["", Validators.compose([
        Validators.min(0.1),
        patternWithMessage(/^[0-9]+(\.[0-9]+)?$/, "Only numbers are allowed"),
        Validators.required
      ])],
      percentage: ["", Validators.compose([
        Validators.minLength(0.1),
        Validators.max(99.9),
        patternWithMessage(/^[0-9]+(\.[0-9]+)?$/, "Only numbers are allowed"),
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
  onConfirm() {
    if (!this.form.valid) {
      markFormGroupTouched(this.form, this);
      return;
    }
    const formValues = this.form.value;
    const data = {
      lowerAmount: Number(formValues.lowerAmount),
      upperAmount: Number(formValues.upperAmount),
      percentage: Number(formValues.percentage || 0)
    };
    this.showModal = !this.showModal;
    this.confirm.emit(data);
  }
  toggleModal() {
    this.showModal = !this.showModal;
    this.closed.emit(this.showModal);
  }
  static {
    this.\u0275fac = function EcommercCutFormCustomComponent_Factory(t) {
      return new (t || _EcommercCutFormCustomComponent)(\u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EcommercCutFormCustomComponent, selectors: [["app-ecommerce-cut-form-custom"]], inputs: { showModal: "showModal" }, outputs: { confirm: "confirm", closed: "closed" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-[1000]", "overflow-y-auto", "bg-black/50", "flex", "items-center", "justify-center", "p-4", "backdrop-blur-sm"], ["role", "dialog", 1, "w-full", "max-w-md", "!bg-default-white", "rounded-2xl", "shadow-2xl", "border", "border-gray-200", "transform", "transition-all", "duration-300", "ease-in-out", "scale-100", "opacity-100"], [1, "p-6"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-xl", "font-bold"], [1, "text-gray-400", "transition-colors", 3, "click"], [1, "material-icons-outlined"], [1, "mb-6"], [1, "text-sm"], [1, "text-center"], [1, "mx-auto", "max-w-[700px]", "md:px-3", "flex", "items-center", "justify-center"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "ngSubmit", "formGroup"], [1, "text-center", "mb-6"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [3, "formControlName", "label"], [1, "flex", "space-x-3"], ["type", "button", 1, "flex-1", "py-2", "px-4", "bg-gray-100", "rounded-lg", "hover:bg-gray-200", "transition-colors", "text-sm", "font-medium", 3, "click"], ["type", "button", "type", "submit", 1, "flex-1", "py-2", "px-4", "bg-blue-600", "text-white", "rounded-lg", "hover:bg-blue-600", "transition-colors", "text-sm", "font-medium", "shadow-md", "hover:shadow-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-opacity-50"]], template: function EcommercCutFormCustomComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EcommercCutFormCustomComponent_Conditional_0_Template, 27, 9, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.showModal ? 0 : -1);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, AdminFormFieldComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EcommercCutFormCustomComponent, { className: "EcommercCutFormCustomComponent" });
})();

// projects/admin-panel/src/app/components/pane/ecommerce-cut/ecommerce-form/ecommerce-cut-form.component.ts
init_esm();
var EcommercCutFormComponent = class _EcommercCutFormComponent {
  constructor(fb, eventbus) {
    this.fb = fb;
    this.eventbus = eventbus;
    this.title = "";
    this.id = "";
    this.notify = new EventEmitter();
    this.form = this.fb.group({
      amount: ["", Validators.compose([
        Validators.min(0.1),
        patternWithMessage(/^[0-9]+(\.[0-9]+)?$/, "Only numbers are allowed"),
        Validators.required
      ])],
      percentage: ["", Validators.compose([
        Validators.min(0.1),
        Validators.max(99.9),
        patternWithMessage(/^[0-9]+(\.[0-9]+)?$/, "Only numbers are allowed"),
        Validators.required
      ])]
    });
  }
  get controlNames() {
    return controlNames(this.form.controls);
  }
  ngOnInit() {
    this.listenToFormChanges();
    if (this.ecommCut) {
      this.form.patchValue(this.ecommCut);
    }
    const handlers = {
      validatecUT: (data) => {
        if (this.form && this.id === data) {
          this.checkForm();
        }
      },
      clearCutForm: () => {
        if (this.form) {
          this.clearForm();
        }
      },
      markCutFormGroupTouched: (data) => {
        if (this.form && this.id === data) {
          FrontendLogger.debug("that one", this.form.valid);
          markFormGroupTouched(this.form, this);
        }
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
  }
  checkControlInvalidOrDirty(controlName) {
    return !this.form.get(controlName)?.valid && this.form.get(controlName)?.dirty;
  }
  listenToFormChanges() {
    this.form?.valueChanges.pipe(debounceTime(2e3)).subscribe(() => {
      this.applyChanges();
    });
  }
  applyChanges() {
    const formValues = this.form.value;
    const data = {
      amount: Number(formValues.amount),
      percentage: Number(formValues.percentage || 0)
    };
    this.notify.emit({
      valid: this.form.valid,
      data
    });
  }
  checkForm() {
    this.form.get("amount")?.markAsDirty();
    this.form.get("percentage")?.markAsDirty();
  }
  clearForm() {
    this.form.reset();
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function EcommercCutFormComponent_Factory(t) {
      return new (t || _EcommercCutFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EventbusService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EcommercCutFormComponent, selectors: [["app-ecommerce-cut-form"]], inputs: { title: "title", id: "id", ecommCut: "ecommCut" }, outputs: { notify: "notify" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 6, consts: [[1, "text-center", "mt-4", "mb-4"], [1, "mx-auto", "max-w-[700px]", "md:px-3", "flex", "items-center", "justify-center"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "formGroup"], [1, "text-center", "mb-6"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [3, "formControlName", "label"]], template: function EcommercCutFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "h2", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275element(7, "app-admin-form-field", 6)(8, "app-admin-form-field", 6);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.title || "Add Cut Details", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("formControlName", ctx.controlNames.amount)("label", "Amount");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", ctx.controlNames.percentage)("label", "Percentage");
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, AdminFormFieldComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EcommercCutFormComponent, { className: "EcommercCutFormComponent" });
})();

// projects/admin-panel/src/app/components/pane/ecommerce-cut/add-update-ecommerce-cut/add-update-ecommerce-cut.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AddUpdateEcommercCutComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-ecommerce-cut-form", 24);
    \u0275\u0275listener("notify", function AddUpdateEcommercCutComponent_For_8_Template_app_ecommerce_cut_form_notify_0_listener($event) {
      const val_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2[val_r2.notifyAccessor]($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const val_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", val_r2.id)("title", val_r2.title)("ecommCut", ctx_r2[val_r2.dataAccessor]);
  }
}
function AddUpdateEcommercCutComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 18)(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 26)(8, "button", 27);
    \u0275\u0275listener("click", function AddUpdateEcommercCutComponent_For_31_Template_button_click_8_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.customCut.splice(i_r5, 1));
    });
    \u0275\u0275elementStart(9, "i", 28);
    \u0275\u0275text(10, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r6.lowerAmount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r6.upperAmount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r6.percentage, "% ");
  }
}
var AddUpdateEcommercCutComponent = class _AddUpdateEcommercCutComponent {
  constructor(router, route, toastr, eventbus, tooltipService, apNme, mainBarTitle, location, metaTagService, titleService) {
    this.router = router;
    this.route = route;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.tooltipService = tooltipService;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.location = location;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.lowerCutFormValid = false;
    this.lowerCut = {
      amount: 0,
      percentage: 0
    };
    this.middleCutFormValid = false;
    this.middleCut = {
      amount: 0,
      percentage: 0
    };
    this.upperCutFormValid = false;
    this.upperCut = {
      amount: 0,
      percentage: 0
    };
    this.customCutFormValid = false;
    this.customCut = [];
    this.countUsers = 0;
    this.posting = false;
    this.formIds = [
      {
        id: "lowerCutForm",
        title: "Lower Value",
        validAccessor: "lowerCutFormValid",
        dataAccessor: "lowerCut",
        notifyAccessor: "editedLowerCut"
      },
      {
        id: "middleCutForm",
        title: "Middle Value",
        validAccessor: "middleCutFormValid",
        dataAccessor: "middleCut",
        notifyAccessor: "editedmiddleCut"
      },
      {
        id: "upperCutForm",
        title: "Upper Value",
        validAccessor: "upperCutFormValid",
        dataAccessor: "upperCut",
        notifyAccessor: "editedUpperCut"
      }
    ];
    this.breadCrumbs = [
      {
        name: "Dashboard",
        icon: "space_dashboard",
        link: "/"
      },
      {
        name: "Ecommerce Cut",
        icon: "receipt_long",
        link: "/ecommerce-cut/list"
      },
      {
        name: "Edit Ecommerce Cut",
        icon: "edit"
      }
    ];
    this.showModal = false;
    const editAction = this.route.snapshot?.params["editAction"];
    this.mainBarTitle.title = editAction === "add" ? "Add Ecommerce Cut" : "Update Ecommerce Cut";
  }
  ngOnInit() {
    const handlers = {
      updateEcommerccut: (data) => {
        if (!data._id) {
          throw new EagleInfoClientError("Invalid Ecommerccut");
        }
        this.ecommerceCut = data;
        this.lowerCut = this.ecommerceCut?.lowerCut || this.lowerCut;
        this.middleCut = this.ecommerceCut?.middleCut || this.middleCut;
        this.upperCut = this.ecommerceCut?.upperCut || this.upperCut;
        this.customCut = this.ecommerceCut?.customCut || this.customCut;
        this.lowerCutFormValid = true;
        this.middleCutFormValid = true;
        this.upperCutFormValid = true;
        this.customCutFormValid = true;
        this.mainBarTitle.title = "Update Ecommerce Cut";
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily manage and edit your eCommerce cuts for better financial tracking and analysis."
    });
  }
  editedLowerCut(event) {
    this.lowerCutFormValid = event.valid;
    this.lowerCut = event.data;
  }
  editedmiddleCut(event) {
    this.middleCutFormValid = event.valid;
    this.middleCut = event.data;
  }
  editedUpperCut(event) {
    this.upperCutFormValid = event.valid;
    this.upperCut = event.data;
  }
  saveChanges() {
    return __async(this, null, function* () {
      FrontendLogger.debug("saveChanges");
      for (const val of this.formIds) {
        FrontendLogger.debug("saveChanges 0000");
        if (!this[val.validAccessor]) {
          FrontendLogger.debug("saveChanges 11111");
          this.eventbus.generalEvent$.next({
            type: "markCutFormGroupTouched",
            data: val.id
          });
          return;
        }
      }
      this.posting = true;
      const details = {
        lowerCut: this.lowerCut,
        middleCut: this.middleCut,
        upperCut: this.upperCut,
        customCut: this.customCut
      };
      FrontendLogger.debug("details ared ", details);
      try {
        if (this.ecommerceCut) {
          yield this.ecommerceCut.update(details);
        } else {
          yield Ecommerccut.add(details);
        }
        this.toastr.success("Operation sucessfull...!", "Success");
        this.eventbus.generalEvent$.next({
          type: "clearCutForm",
          data: true
        });
        this.location.back();
      } catch (error) {
        FrontendLogger.error("AddExpensesComponent:saveChanges:: - error ", error);
        this.toastr.error(getBizNestErrorResponseMessage(error), "Failed", {
          disableTimeOut: true
        });
      } finally {
        this.posting = false;
      }
    });
  }
  onClose(ev) {
    this.showModal = ev;
  }
  openCustomCutModal() {
    this.showModal = true;
  }
  onCustomCut(ev) {
    this.customCut.push(ev);
    this.showModal = false;
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function AddUpdateEcommercCutComponent_Factory(t) {
      return new (t || _AddUpdateEcommercCutComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUpdateEcommercCutComponent, selectors: [["app-add-update-ecommerce-cut"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 8, consts: [[3, "title", "breadCrumbs"], [1, "container", "mx-auto", "md:px-6", "md:pt-32", "pb-32", "pt-12", "!mn-h-[100vh]", "!mb-[180px]"], [1, "text-center", "min-h-[100vh]"], [1, "col-span-2", "max-w-[900px]", "mx-auto"], [1, "grid", "grid-cols-1", "gap-6", "gap-y-0", "2xl:gap-6", "md:grid-cols-2", "2xl:grid-cols-2", "w-full", "!mb-[12px]"], [3, "id", "title", "ecommCut"], [1, "mt-10", "p-6", "!bg-default-white", "rounded-lg", "shadow-md"], [1, "grid", "grid-cols-2", "gap-6", "gap-y-0", "2xl:gap-6", "md:grid-cols-2", "2xl:grid-cols-2", "w-full"], [1, "text-left", "text-2xl", "font-bold"], [1, "text-center"], ["type", "button", "aria-live", "polite", 1, "btn", "!btn-primary", "bg-blue-600", "text-white", "py-3", "px-6", "rounded-lg", "hover:bg-blue-700", "transition", "duration-300", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", 3, "click", "disabled"], [1, "mt-6", "overflow-x-auto"], [1, "card"], [1, "min-w-full", "divide-y", "divide-gray-200"], [1, "bg-gray-50"], [1, "px-6", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "px-6", "py-3", "text-right", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "!bg-default-white", "divide-y", "divide-gray-200"], [1, "hover:bg-gray-50", "transition", "duration-150", "ease-in-out"], [1, "text-center", "flex"], [1, "flex-1"], [1, "flex-none"], ["q", "", 3, "save", "tooltip", "btnText", "posting", "disabled"], [3, "confirm", "closed", "showModal"], [3, "notify", "id", "title", "ecommCut"], [1, "px-6", "py-4", "text-left", "text-sm"], [1, "px-6", "py-4", "text-right", "text-sm"], ["type", "button", 1, "btn", "btn-circle", "btn-sm", "!bg-red-600", "!text-red", "hover:bg-red-600", "focus:ring-2", "focus:ring-red-500", "focus:ring-offset-2", "transition", "duration-300", 3, "click"], [1, "material-icons-outlined"]], template: function AddUpdateEcommercCutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-back-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "section", 2)(4, "div", 3);
        \u0275\u0275element(5, "lib-form-instruction");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275repeaterCreate(7, AddUpdateEcommercCutComponent_For_8_Template, 1, 3, "app-ecommerce-cut-form", 5, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "h2", 8);
        \u0275\u0275text(12, "Custom Ecommerce Cut");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
        \u0275\u0275listener("click", function AddUpdateEcommercCutComponent_Template_button_click_14_listener() {
          return ctx.openCustomCutModal();
        });
        \u0275\u0275text(15, " Add Custom ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "table", 13)(19, "thead", 14)(20, "tr")(21, "th", 15);
        \u0275\u0275text(22, " Lower Amount ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "th", 15);
        \u0275\u0275text(24, " Upper Amount ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th", 15);
        \u0275\u0275text(26, " Percentage ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th", 16);
        \u0275\u0275text(28, " Actions ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "tbody", 17);
        \u0275\u0275repeaterCreate(30, AddUpdateEcommercCutComponent_For_31_Template, 11, 3, "tr", 18, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "div", 19);
        \u0275\u0275element(33, "div", 20);
        \u0275\u0275elementStart(34, "div", 21)(35, "app-admin-form-button", 22);
        \u0275\u0275listener("save", function AddUpdateEcommercCutComponent_Template_app_admin_form_button_save_35_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(36, "app-ecommerce-cut-form-custom", 23);
        \u0275\u0275listener("confirm", function AddUpdateEcommercCutComponent_Template_app_ecommerce_cut_form_custom_confirm_36_listener($event) {
          return ctx.onCustomCut($event);
        })("closed", function AddUpdateEcommercCutComponent_Template_app_ecommerce_cut_form_custom_closed_36_listener($event) {
          return ctx.onClose($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.formIds);
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.posting);
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.customCut);
        \u0275\u0275advance(5);
        \u0275\u0275property("tooltip", "Edit Ecommerce Cut")("btnText", "Save Ecommerce Cut")("posting", ctx.posting)("disabled", ctx.posting);
        \u0275\u0275advance();
        \u0275\u0275property("showModal", ctx.showModal);
      }
    }, dependencies: [
      FormsModule,
      ReactiveFormsModule,
      EcommercCutFormComponent,
      EcommercCutFormCustomComponent,
      AdminBackBarComponent,
      AdminFormButtonComponent,
      AdminPageContentComponent,
      FormInstructionComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUpdateEcommercCutComponent, { className: "AddUpdateEcommercCutComponent" });
})();
export {
  AddUpdateEcommercCutComponent
};
//# sourceMappingURL=chunk-72U3JNFY.js.map
