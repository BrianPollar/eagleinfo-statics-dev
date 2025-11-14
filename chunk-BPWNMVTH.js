import {
  AdminModalContainerComponent
} from "./chunk-KH3GICF4.js";
import {
  AdminSelectFieldComponent
} from "./chunk-LAO6JDWE.js";
import {
  AdminFormInstructionComponent
} from "./chunk-U3Y2ICWD.js";
import {
  AdminFormButtonComponent
} from "./chunk-SC3J5HE4.js";
import {
  ViewOneCompose
} from "./chunk-BMZBVPCI.js";
import "./chunk-WJJSEUQ7.js";
import "./chunk-ZAFBV4O5.js";
import {
  AdminTopBarComponent
} from "./chunk-RLWZ2B5Z.js";
import {
  AdminDateFilterFieldComponent
} from "./chunk-JXJWYDSB.js";
import {
  SoloDateComponent
} from "./chunk-V2FCV2CW.js";
import {
  AdminSearchFieldComponent
} from "./chunk-A3XL6Y7L.js";
import {
  AdminTableComponent
} from "./chunk-EWIFM267.js";
import "./chunk-TFHAZXT7.js";
import {
  ListComposeAdminPanel
} from "./chunk-ANHFC4IG.js";
import "./chunk-3B3O76HS.js";
import {
  openClose
} from "./chunk-6C27QOWO.js";
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
  ɵNgNoValidate
} from "./chunk-H6XV6YF3.js";
import "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  EcommerceOrderRefund,
  FrontendLogger,
  controlNames,
  getBizNestErrorResponseMessage,
  navByBus,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  Meta,
  Title,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/base/fund-transfer/add-update-ecommerce-order-refund-base.ts
var AddUpdateEcommerceOrderRefundBase = class {
  constructor(fb, router, toastr, mainBarTitle, eventbus, windowService) {
    this.fb = fb;
    this.router = router;
    this.toastr = toastr;
    this.mainBarTitle = mainBarTitle;
    this.eventbus = eventbus;
    this.windowService = windowService;
    this.posting = false;
    this.statusOptions = [
      { label: "initiated", value: "initiated" },
      { label: "completed", value: "completed" },
      { label: "cancelled", value: "cancelled" }
    ];
    this.mainBarTitle.title = this.ecommerceOrderRefund ? "Add  EcommerceOrder Refund" : "Update  EcommerceOrder Refund";
    this.form = this.fb.group({
      status: [this.status],
      dateInitiated: [/* @__PURE__ */ new Date()],
      dateCompleted: [],
      amount: []
    });
  }
  get controlNames() {
    return controlNames(this.form.controls);
  }
  init() {
    const handlers = {
      addUpdateEcommerceOrderRefund: (data) => {
        this.ecommerceOrderId = data.ecommerceOrderId;
        this.ecommerceUserId = data.ecommerceUserId;
        this.ecommerceOrderRefund = data.ecommerceOrderRefund;
        this.status = data.status || "initiated";
        this.dateInitiated = data.ecommerceOrderRefund?.dateInitiated?.toString();
        this.dateCompleted = data.ecommerceOrderRefund?.dateCompleted?.toString();
        this.mainBarTitle.title = this.ecommerceOrderRefund ? "Add  EcommerceOrder Refund" : "Update  EcommerceOrder Refund";
        this.form.patchValue(data);
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
  }
  checkControlInvalidOrDirty(controlName) {
    return !this.form.get(controlName)?.valid && this.form.get(controlName)?.dirty;
  }
  saveChanges() {
    return __async(this, null, function* () {
      if (this.form.invalid) {
        markFormGroupTouched(this.form, this);
        scrollToTop(this.windowService);
        return;
      }
      const formValues = this.form.value;
      const details = {
        ecommerceOrder: this.ecommerceOrderId,
        commerceUser: this.ecommerceUserId,
        dateInitiated: new Date(formValues.dateInitiated),
        dateCompleted: new Date(formValues.dateCompleted),
        status: formValues.status,
        amount: formValues.amount
      };
      try {
        this.posting = true;
        if (this.ecommerceOrderRefund) {
          yield this.ecommerceOrderRefund.update(details);
        } else {
          yield EcommerceOrderRefund.add(details);
        }
        this.toastr.success("Operation sucessfull...!", "Success");
        this.form.reset();
        this.closeModal();
        scrollToTop(this.windowService);
      } catch (error) {
        FrontendLogger.error("AddUpdateEcommerceOrderRefundBaseComponent:saveChanges:: - error ", error);
        this.toastr.error(getBizNestErrorResponseMessage(error), "Failed", {
          disableTimeOut: true
        });
      } finally {
        this.posting = false;
      }
    });
  }
  closeModal() {
    this.eventbus.generalEvent$.next({
      type: "closeAddUpdateEcommerceOrderRefundModal"
    });
  }
  destroy() {
    this.cleanup?.();
  }
};

// projects/shared-lib/src/lib/components/base/fund-transfer/ecommerce-order-refund-list-base.ts
var EcommerceOrderRefundListBase = class {
  constructor(windowService, toastr, eventbus, apNme, mainBarTitle, metaTagService, titleService) {
    this.windowService = windowService;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.posting = false;
    this.listCompose = new ListComposeAdminPanel(EcommerceOrderRefund, this.eventbus, this.windowService, this.toastr);
    this.actions = [
      {
        label: "View",
        icon: "visibility",
        event: (ecommerceOrderRefund) => this.viewEcommerceEcommerceOrderRefund(ecommerceOrderRefund)
      },
      {
        label: "Update",
        icon: "edit",
        event: (ecommerceOrderRefund) => this.updateEcommerceOrderRefund(ecommerceOrderRefund)
      }
    ];
  }
  init() {
    this.listCompose.getDataArr();
    this.mainBarTitle.title = "EcommerceOrder Refund List";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Efficiently manage and comprehensively monitor your order refund,
      empowering you to maintain financial clarity and make informed decisions
      regarding your fiscal responsibilities and opportunities for savings.`
    });
    scrollToTop(this.windowService);
  }
  destroy() {
    this.listCompose.cleanup?.();
  }
};

// projects/shared-lib/src/lib/components/base/fund-transfer/view-ecommerce-order-refund-base.ts
var ViewEcommerceOrderRefundBase = class {
  constructor(router, route, eventbus, mainBarTitle) {
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.mainBarTitle = mainBarTitle;
    this.viewOneCompose = new ViewOneCompose(EcommerceOrderRefund, { route: ["/"], eventName: "addUpdateEcommerceOrderRefund" }, this.router, this.route, this.eventbus);
    this.title = "View";
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
  }
  init() {
    return __async(this, null, function* () {
      try {
        yield this.viewOneCompose.init();
        this.title = typeof this.viewOneCompose.oneItem?.ecommerceOrder === "string" ? this.viewOneCompose.oneItem?.ecommerceOrder : "View";
        this.mainBarTitle.title = "View EcommerceOrder Refund - " + this.title;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  destroy() {
    this.viewOneCompose.cleanup?.();
  }
};

// projects/admin-panel/src/app/components/pane/user-related/fund-transfer/ecommerce-order-refund/add-update-ecommerce-order-refund/add-update-ecommerce-order-refund.component.ts
var AddUpdateEcommerceOrderRefundComponent = class _AddUpdateEcommerceOrderRefundComponent extends AddUpdateEcommerceOrderRefundBase {
  constructor(fb, router, toastr, mainBarTitle, eventbus, windowService) {
    super(fb, router, toastr, mainBarTitle, eventbus, windowService);
    this.fb = fb;
    this.router = router;
    this.toastr = toastr;
    this.mainBarTitle = mainBarTitle;
    this.eventbus = eventbus;
    this.windowService = windowService;
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  static {
    this.\u0275fac = function AddUpdateEcommerceOrderRefundComponent_Factory(t) {
      return new (t || _AddUpdateEcommerceOrderRefundComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(WindowService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUpdateEcommerceOrderRefundComponent, selectors: [["app-add-update-ecommerce-order-refund"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 15, vars: 13, consts: [[1, "container", "mx-auto", "md:px-6", "md:pt-32", "pb-32", "pt-12", "!mn-h-[100vh]", "!mb-[180px]"], [1, "text-center", "min-h-[100vh]", "mx-auto", "max-w-[700px]"], [1, "md:px-3", "h-full", "flex", "items-center", "justify-center"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "ngSubmit", "formGroup"], [1, "text-center", "mb-6"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [3, "formControlName", "label", "placeholderOption", "options"], [3, "notify", "name", "soleDate"], [3, "save", "btnText", "tooltip", "disabled", "posting"]], template: function AddUpdateEcommerceOrderRefundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
        \u0275\u0275element(2, "app-admin-form-instruction");
        \u0275\u0275elementStart(3, "div", 2)(4, "form", 3);
        \u0275\u0275listener("ngSubmit", function AddUpdateEcommerceOrderRefundComponent_Template_form_ngSubmit_4_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275elementStart(5, "div", 4)(6, "h2", 5);
        \u0275\u0275text(7, " EcommerceOrder Refund Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, " Provide comprehensive information about the order refund ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275element(11, "app-admin-select-field", 8);
        \u0275\u0275elementStart(12, "lib-solo-date", 9);
        \u0275\u0275listener("notify", function AddUpdateEcommerceOrderRefundComponent_Template_lib_solo_date_notify_12_listener($event) {
          let tmp_0_0;
          return (tmp_0_0 = ctx.form.get(ctx.controlNames.dateInitiated)) == null ? null : tmp_0_0.setValue($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "lib-solo-date", 9);
        \u0275\u0275listener("notify", function AddUpdateEcommerceOrderRefundComponent_Template_lib_solo_date_notify_13_listener($event) {
          let tmp_0_0;
          return (tmp_0_0 = ctx.form.get(ctx.controlNames.dateCompleted)) == null ? null : tmp_0_0.setValue($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "app-admin-form-button", 10);
        \u0275\u0275listener("save", function AddUpdateEcommerceOrderRefundComponent_Template_app_admin_form_button_save_14_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275property("formControlName", ctx.controlNames.status)("label", "Status")("placeholderOption", "Select status")("options", ctx.statusOptions);
        \u0275\u0275advance();
        \u0275\u0275property("name", "Date Initiated")("soleDate", ctx.dateInitiated);
        \u0275\u0275advance();
        \u0275\u0275property("name", "Date Initiated")("soleDate", ctx.dateCompleted);
        \u0275\u0275advance();
        \u0275\u0275property("btnText", "Save")("tooltip", "Saves EcommerceOrder Refund.")("disabled", ctx.posting)("posting", ctx.posting);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      AdminFormButtonComponent,
      AdminFormInstructionComponent,
      SoloDateComponent,
      AdminSelectFieldComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUpdateEcommerceOrderRefundComponent, { className: "AddUpdateEcommerceOrderRefundComponent" });
})();

// projects/admin-panel/src/app/components/pane/user-related/fund-transfer/ecommerce-order-refund/view-ecommerce-order-refund/view-ecommerce-order-refund.component.ts
var ViewEcommerceOrderRefundComponent = class _ViewEcommerceOrderRefundComponent extends ViewEcommerceOrderRefundBase {
  constructor(router, route, eventbus, mainBarTitle) {
    super(router, route, eventbus, mainBarTitle);
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.mainBarTitle = mainBarTitle;
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  closeModal() {
    this.eventbus.generalEvent$.next({
      type: "closeViewEcommerceOrderRefundModal"
    });
  }
  static {
    this.\u0275fac = function ViewEcommerceOrderRefundComponent_Factory(t) {
      return new (t || _ViewEcommerceOrderRefundComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(MainBarTitleService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewEcommerceOrderRefundComponent, selectors: [["app-view-ecommerce-order-refund"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 27, vars: 2, consts: [[1, "!min-h-[100vh]"], [1, "page-content"], [1, "container-fluid", "px-4"], [1, "grid", "grid-cols-1", "pb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md"], [1, "card-body"], [1, "flex", "flex-col", "gap-4"], [1, "text-lg", "font-semibold", "flex", "items-center", "gap-2"], [1, "material-icons-outlined", "text-blue-500"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "flex-row", "gap-4", "items-center"], [1, "material-icons-outlined", "text-gray-500"], [1, "text-gray-500", "font-medium"], [1, "font-medium"]], template: function ViewEcommerceOrderRefundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8)(9, "i", 9);
        \u0275\u0275text(10, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " EcommerceOrder Refund Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "i", 12);
        \u0275\u0275text(15, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 13);
        \u0275\u0275text(17, "EcommerceOrder Refund ID:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 14);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 11)(21, "i", 12);
        \u0275\u0275text(22, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 13);
        \u0275\u0275text(24, "EcommerceOrder:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 14);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem._id) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.ecommerceOrder) || "N/A", " ");
      }
    }, dependencies: [RouterModule], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewEcommerceOrderRefundComponent, { className: "ViewEcommerceOrderRefundComponent" });
})();

// projects/admin-panel/src/app/components/pane/user-related/fund-transfer/ecommerce-order-refund/ecommerce-order-refund-list/ecommerce-order-refund-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "EcommerceOrder Refund List", icon: "assessment" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "order", value: "order" });
var _c4 = (a0) => [a0];
var _c5 = () => ({ header: "EcommerceOrder Refund ID", field: "_id", isDefaultField: true, sortable: true });
var _c6 = () => ({ header: "EcommerceOrder", field: "order", sortable: true, removeWhen: "small" });
var _c7 = () => ({ header: "Date Initiated", field: "dateInitiated", sortable: true, isDateValue: true, removeWhen: "medium" });
var _c8 = () => ({ header: "Date Added", field: "createdAt", sortable: true, removeWhen: "medium" });
var _c9 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function EcommerceOrderRefundListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-admin-date-filter-field", 9);
    \u0275\u0275listener("filter", function EcommerceOrderRefundListComponent_Conditional_7_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function EcommerceOrderRefundListComponent_Conditional_7_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
var EcommerceOrderRefundListComponent = class _EcommerceOrderRefundListComponent extends EcommerceOrderRefundListBase {
  constructor(windowService, toastr, eventbus, apNme, mainBarTitle, metaTagService, titleService) {
    super(windowService, toastr, eventbus, apNme, mainBarTitle, metaTagService, titleService);
    this.windowService = windowService;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.viewModalOptions = {
      showModal: false,
      modalTitle: "View EcommerceOrder Refund",
      modalMsg: "Are you sure you want to view this item?",
      modalCancelButton: true,
      modalCancelText: "Cancel",
      modalConfirmText: "View",
      modalConfirmButton: true
    };
    this.updateModalOptions = {
      showModal: false,
      modalTitle: "Update EcommerceOrder Refund",
      modalMsg: "Are you sure you want to update this item?",
      modalCancelButton: true,
      modalCancelText: "Cancel",
      modalConfirmText: "Update",
      modalConfirmButton: true
    };
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  viewEcommerceEcommerceOrderRefund(ecommerceOrderRefund) {
    this.eventbus.generalEvent$.next({
      type: "oneItem",
      data: ecommerceOrderRefund
    });
    this.viewModalOptions.showModal = true;
    this.ecommerceOrderRefund = ecommerceOrderRefund;
  }
  updateEcommerceOrderRefund(ecommerceOrderRefund) {
    this.eventbus.generalEvent$.next({
      type: "addUpdateEcommerceOrderRefund",
      data: {
        ecommerceOrderId: ecommerceOrderRefund.ecommerceOrder,
        ecommerceUserId: ecommerceOrderRefund.commerceUser,
        ecommerceOrderRefund,
        status: ecommerceOrderRefund.status
      }
    });
    this.updateModalOptions.showModal = true;
    this.ecommerceOrderRefund = ecommerceOrderRefund;
  }
  toggleModalView() {
    this.viewModalOptions.showModal = !this.viewModalOptions.showModal;
  }
  toggleModalUpdate() {
    this.updateModalOptions.showModal = !this.updateModalOptions.showModal;
  }
  static {
    this.\u0275fac = function EcommerceOrderRefundListComponent_Factory(t) {
      return new (t || _EcommerceOrderRefundListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EcommerceOrderRefundListComponent, selectors: [["app-ecommerce-order-refund-list"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 13, vars: 47, consts: [["title", "EcommerceOrder Refund List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "mb-4"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "selections", "currentActivePopupId", "dataArr", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"]], template: function EcommerceOrderRefundListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "app-admin-search-field", 5);
        \u0275\u0275listener("filter", function EcommerceOrderRefundListComponent_Template_app_admin_search_field_filter_6_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, EcommerceOrderRefundListComponent_Conditional_7_Template, 2, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "app-admin-table", 7);
        \u0275\u0275listener("paginateItems", function EcommerceOrderRefundListComponent_Template_app_admin_table_paginateItems_8_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function EcommerceOrderRefundListComponent_Template_app_admin_table_openExtras_8_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function EcommerceOrderRefundListComponent_Template_app_admin_table_sortChange_8_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function EcommerceOrderRefundListComponent_Template_app_admin_table_selectionToggle_8_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function EcommerceOrderRefundListComponent_Template_app_admin_table_viewItem_8_listener($event) {
          return ctx.viewEcommerceEcommerceOrderRefund($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "app-admin-modal-container", 8);
        \u0275\u0275listener("closed", function EcommerceOrderRefundListComponent_Template_app_admin_modal_container_closed_9_listener() {
          return ctx.toggleModalView();
        });
        \u0275\u0275element(10, "app-view-ecommerce-order-refund");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "app-admin-modal-container", 8);
        \u0275\u0275listener("closed", function EcommerceOrderRefundListComponent_Template_app_admin_modal_container_closed_11_listener() {
          return ctx.toggleModalUpdate();
        });
        \u0275\u0275element(12, "app-add-update-ecommerce-order-refund");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(32, _c2, \u0275\u0275pureFunction0(30, _c0), \u0275\u0275pureFunction0(31, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("options", \u0275\u0275pureFunction1(36, _c4, \u0275\u0275pureFunction0(35, _c3)));
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.listCompose.selections.length === 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", false)("selections", ctx.listCompose.selections)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction4(42, _c9, \u0275\u0275pureFunction0(38, _c5), \u0275\u0275pureFunction0(39, _c6), \u0275\u0275pureFunction0(40, _c7), \u0275\u0275pureFunction0(41, _c8)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("showModal", ctx.viewModalOptions.showModal)("title", ctx.viewModalOptions.modalTitle)("message", ctx.viewModalOptions.modalMsg)("cancelButton", ctx.viewModalOptions.modalCancelButton)("cancelText", ctx.viewModalOptions.modalCancelText)("confirmText", ctx.viewModalOptions.modalConfirmText)("confirmButon", ctx.viewModalOptions.modalConfirmButton);
        \u0275\u0275advance(2);
        \u0275\u0275property("showModal", ctx.updateModalOptions.showModal)("title", ctx.updateModalOptions.modalTitle)("message", ctx.updateModalOptions.modalMsg)("cancelButton", ctx.updateModalOptions.modalCancelButton)("cancelText", ctx.updateModalOptions.modalCancelText)("confirmText", ctx.updateModalOptions.modalConfirmText)("confirmButon", ctx.updateModalOptions.modalConfirmButton);
      }
    }, dependencies: [
      RouterModule,
      AdminTableComponent,
      AdminPageContentComponent,
      AdminSearchFieldComponent,
      AdminDateFilterFieldComponent,
      AdminTopBarComponent,
      AdminModalContainerComponent,
      ViewEcommerceOrderRefundComponent,
      AddUpdateEcommerceOrderRefundComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EcommerceOrderRefundListComponent, { className: "EcommerceOrderRefundListComponent" });
})();
export {
  EcommerceOrderRefundListComponent
};
//# sourceMappingURL=chunk-BPWNMVTH.js.map
