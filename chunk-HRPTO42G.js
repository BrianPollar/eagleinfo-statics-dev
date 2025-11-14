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
import "./chunk-V2FCV2CW.js";
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
  FrontendLogger,
  ItemReturn,
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
  DatePipe,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/base/item-return/item-return-list.base.ts
var ItemReturnListBase = class {
  constructor(windowService, toastr, router, eventbus, apNme, mainBarTitle, metaTagService, titleService) {
    this.windowService = windowService;
    this.toastr = toastr;
    this.router = router;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.posting = false;
    this.listCompose = new ListComposeAdminPanel(ItemReturn, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.action = [
      {
        label: "View",
        icon: "visibility",
        event: (itemReturn) => this.viewItemReturn(itemReturn)
      },
      {
        label: "Update",
        icon: "edit",
        event: (itemReturn) => this.updateItemReturn(itemReturn)
      }
    ];
  }
  init() {
    this.listCompose.getDataArr();
    this.mainBarTitle.title = "Item Returns";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Efficiently manage and comprehensively monitor your item returns,
      empowering you to maintain financial clarity and make informed decisions
      regarding your fiscal responsibilities and opportunities for savings.`
    });
    scrollToTop(this.windowService);
  }
  destroy() {
    this.listCompose.cleanup?.();
  }
};

// projects/shared-lib/src/lib/components/base/item-return/view-item-return.base.ts
var ViewItemReturnBase = class {
  constructor(router, route, eventbus, mainBarTitle) {
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.mainBarTitle = mainBarTitle;
    this.viewOneCompose = new ViewOneCompose(ItemReturn, { route: [""], eventName: "" }, this.router, this.route, this.eventbus);
    this.title = "View";
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
  }
  init() {
    return __async(this, null, function* () {
      try {
        yield this.viewOneCompose.init();
        this.title = typeof this.viewOneCompose.oneItem?.ecommerceOrder === "string" ? this.viewOneCompose.oneItem?.ecommerceOrder : "View";
        this.mainBarTitle.title = "View Item Return - " + this.title;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  closeModal() {
    this.eventbus.generalEvent$.next({
      type: "closeViewItemReturnModal"
    });
  }
  destroy() {
    this.viewOneCompose.cleanup?.();
  }
};

// projects/shared-lib/src/lib/components/base/item-return/update-item-return-base.ts
var UpdateItemReturnBase = class {
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
    this.mainBarTitle.title = this.itemReturn ? "Add  Item Return" : "Update  Item Return";
    this.form = this.fb.group({
      status: [this.itemReturn?.status]
    });
  }
  get controlNames() {
    return controlNames(this.form.controls);
  }
  init() {
    const handlers = {
      updateItemReturn: (data) => {
        this.itemReturn = data;
        this.mainBarTitle.title = this.itemReturn ? "Add  Item Return" : "Update  Item Return";
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
      this.posting = true;
      const details = {
        status: this.form.value.status
      };
      try {
        yield this.itemReturn?.update(details);
        this.toastr.success("Operation sucessfull...!", "Success");
        this.form.reset();
        this.closeModal();
        scrollToTop(this.windowService);
      } catch (error) {
        FrontendLogger.error("AddUpdateItemComplaintBaseComponent:saveChanges:: - error ", error);
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
      type: "closeUpdateItemComplaintModal"
    });
  }
  destroy() {
    this.cleanup?.();
  }
};

// projects/admin-panel/src/app/components/pane/item-related/item-return/update-item-return/update-item-return.component.ts
var UpdateItemReturnComponent = class _UpdateItemReturnComponent extends UpdateItemReturnBase {
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
    this.\u0275fac = function UpdateItemReturnComponent_Factory(t) {
      return new (t || _UpdateItemReturnComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(WindowService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateItemReturnComponent, selectors: [["app-update-item-return"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 13, vars: 9, consts: [[1, "container", "mx-auto", "md:px-6", "md:pt-32", "pb-32", "pt-12", "!mn-h-[100vh]", "!mb-[180px]"], [1, "text-center", "min-h-[100vh]", "mx-auto", "max-w-[700px]"], [1, "md:px-3", "h-full", "flex", "items-center", "justify-center"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "ngSubmit", "formGroup"], [1, "text-center", "mb-6"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [3, "formControlName", "label", "placeholderOption", "options"], [3, "save", "btnText", "tooltip", "disabled", "posting"]], template: function UpdateItemReturnComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
        \u0275\u0275element(2, "app-admin-form-instruction");
        \u0275\u0275elementStart(3, "div", 2)(4, "form", 3);
        \u0275\u0275listener("ngSubmit", function UpdateItemReturnComponent_Template_form_ngSubmit_4_listener() {
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
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "app-admin-form-button", 9);
        \u0275\u0275listener("save", function UpdateItemReturnComponent_Template_app_admin_form_button_save_12_listener() {
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
      AdminSelectFieldComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateItemReturnComponent, { className: "UpdateItemReturnComponent" });
})();

// projects/admin-panel/src/app/components/pane/item-related/item-return/view-item-return/view-item-return.component.ts
var ViewItemReturnComponent = class _ViewItemReturnComponent extends ViewItemReturnBase {
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
  static {
    this.\u0275fac = function ViewItemReturnComponent_Factory(t) {
      return new (t || _ViewItemReturnComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(MainBarTitleService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewItemReturnComponent, selectors: [["app-view-item-return"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 56, vars: 6, consts: [[1, "!min-h-[100vh]"], [1, "page-content"], [1, "container-fluid", "px-4"], [1, "grid", "grid-cols-1", "pb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md"], [1, "card-body"], [1, "flex", "flex-col", "gap-4"], [1, "text-lg", "font-semibold", "flex", "items-center", "gap-2"], [1, "material-icons-outlined", "text-blue-500"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "flex-row", "gap-4", "items-center"], [1, "material-icons-outlined", "text-gray-500"], [1, "text-gray-500", "font-medium"], [1, "font-medium"], [1, "bg-green-500", "hover:bg-green-700", "text-white", "font-bold", "py-2", "px-4", "rounded", 3, "click"], [1, "hidden", "md:flex", "justify-center", "items-center", "prevent-print"], ["width", "200", "height", "200", "viewBox", "0 0 200 200", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "20", "y", "20", "width", "160", "height", "160", "rx", "20", "fill", "#E8F0FE"], ["d", "M60 60H140V140H60V60Z", "fill", "#4285F4"], ["d", "M80 80H120V120H80V80Z", "fill", "white"], ["d", "M100 70V130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M70 100H130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L130 70", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L70 70", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L70 130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L130 130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"]], template: function ViewItemReturnComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8)(9, "i", 9);
        \u0275\u0275text(10, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " Item Return Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "i", 12);
        \u0275\u0275text(15, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 13);
        \u0275\u0275text(17, "EcommerceOrder ID:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 14);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 11)(21, "i", 12);
        \u0275\u0275text(22, "attach_money");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 13);
        \u0275\u0275text(24, "returnReason:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 14);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 11)(28, "i", 12);
        \u0275\u0275text(29, "attach_money");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 13);
        \u0275\u0275text(31, "Status:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 14);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 11)(35, "i", 12);
        \u0275\u0275text(36, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 13);
        \u0275\u0275text(38, "Date Added:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 14);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 11)(43, "button", 15);
        \u0275\u0275listener("click", function ViewItemReturnComponent_Template_button_click_43_listener() {
          return ctx.viewOneCompose.printDocument();
        });
        \u0275\u0275text(44, " Print ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(45, "div", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(46, "svg", 17);
        \u0275\u0275element(47, "rect", 18)(48, "path", 19)(49, "path", 20)(50, "path", 21)(51, "path", 22)(52, "path", 23)(53, "path", 24)(54, "path", 25)(55, "path", 26);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.ecommerceOrder) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.returnReason) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.status) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 4, ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.createdAt), " ");
      }
    }, dependencies: [
      RouterModule,
      DatePipe
    ], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewItemReturnComponent, { className: "ViewItemReturnComponent" });
})();

// projects/admin-panel/src/app/components/pane/item-related/item-return/item-return-list/item-return-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Item Return List", icon: "assessment" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "Name", value: "name" });
var _c4 = () => ({ label: "Enforcer", value: "enforcer" });
var _c5 = () => ({ header: "Item Return ID", field: "_id", isDefaultField: true, sortable: true });
var _c6 = () => ({ header: "order ID", field: "order", sortable: true, removeWhen: "small" });
var _c7 = () => ({ header: "Description", field: "productComplaint", sortable: true, removeWhen: "medium" });
var _c8 = () => ({ header: "returnReason", field: "returnReason", sortable: true, removeWhen: "large" });
var _c9 = () => ({ header: "status", field: "status", sortable: true, removeWhen: "large" });
var _c10 = () => ({ header: "Date Added", field: "createdAt", sortable: true, removeWhen: "large" });
var _c11 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ItemReturnListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-admin-date-filter-field", 9);
    \u0275\u0275listener("filter", function ItemReturnListComponent_Conditional_7_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function ItemReturnListComponent_Conditional_7_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
var ItemReturnListComponent = class _ItemReturnListComponent extends ItemReturnListBase {
  constructor(windowService, toastr, router, eventbus, apNme, mainBarTitle, metaTagService, titleService) {
    super(windowService, toastr, router, eventbus, apNme, mainBarTitle, metaTagService, titleService);
    this.windowService = windowService;
    this.toastr = toastr;
    this.router = router;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.viewModalOptions = {
      showModal: false,
      modalTitle: "View Item Return",
      modalMsg: "Are you sure you want to view this item?",
      modalCancelButton: true,
      modalCancelText: "Cancel",
      modalConfirmText: "View",
      modalConfirmButton: true
    };
    this.updateModalOptions = {
      showModal: false,
      modalTitle: "Update Item Return",
      modalMsg: "Are you sure you want to update this item?",
      modalCancelButton: true,
      modalCancelText: "Cancel",
      modalConfirmText: "Update",
      modalConfirmButton: true
    };
  }
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  viewItemReturn(itemReturn) {
    this.eventbus.generalEvent$.next({
      type: "oneItem",
      data: itemReturn
    });
    this.viewModalOptions.showModal = true;
    this.itemReturn = itemReturn;
  }
  updateItemReturn(itemReturn) {
    this.eventbus.generalEvent$.next({
      type: "updateItemReturn",
      data: itemReturn
    });
    this.updateModalOptions.showModal = true;
    this.itemReturn = itemReturn;
  }
  toggleModalView() {
    this.viewModalOptions.showModal = !this.viewModalOptions.showModal;
  }
  toggleModalUpdate() {
    this.updateModalOptions.showModal = !this.updateModalOptions.showModal;
  }
  static {
    this.\u0275fac = function ItemReturnListComponent_Factory(t) {
      return new (t || _ItemReturnListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemReturnListComponent, selectors: [["app-item-return-list"]], hostBindings: function ItemReturnListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ItemReturnListComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 13, vars: 53, consts: [["title", "Automatic Item Tax List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "mb-4"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "selections", "currentActivePopupId", "dataArr", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"]], template: function ItemReturnListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "app-admin-search-field", 5);
        \u0275\u0275listener("filter", function ItemReturnListComponent_Template_app_admin_search_field_filter_6_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ItemReturnListComponent_Conditional_7_Template, 2, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "app-admin-table", 7);
        \u0275\u0275listener("paginateItems", function ItemReturnListComponent_Template_app_admin_table_paginateItems_8_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function ItemReturnListComponent_Template_app_admin_table_openExtras_8_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function ItemReturnListComponent_Template_app_admin_table_sortChange_8_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function ItemReturnListComponent_Template_app_admin_table_selectionToggle_8_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function ItemReturnListComponent_Template_app_admin_table_viewItem_8_listener($event) {
          return ctx.viewItemReturn($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "app-admin-modal-container", 8);
        \u0275\u0275listener("closed", function ItemReturnListComponent_Template_app_admin_modal_container_closed_9_listener() {
          return ctx.toggleModalView();
        });
        \u0275\u0275element(10, "app-view-item-return");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "app-admin-modal-container", 8);
        \u0275\u0275listener("closed", function ItemReturnListComponent_Template_app_admin_modal_container_closed_11_listener() {
          return ctx.toggleModalUpdate();
        });
        \u0275\u0275element(12, "app-update-item-return");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(32, _c2, \u0275\u0275pureFunction0(30, _c0), \u0275\u0275pureFunction0(31, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("options", \u0275\u0275pureFunction2(37, _c2, \u0275\u0275pureFunction0(35, _c3), \u0275\u0275pureFunction0(36, _c4)));
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.listCompose.selections.length === 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", false)("selections", ctx.listCompose.selections)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction6(46, _c11, \u0275\u0275pureFunction0(40, _c5), \u0275\u0275pureFunction0(41, _c6), \u0275\u0275pureFunction0(42, _c7), \u0275\u0275pureFunction0(43, _c8), \u0275\u0275pureFunction0(44, _c9), \u0275\u0275pureFunction0(45, _c10)))("actions", ctx.action);
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
      ViewItemReturnComponent,
      AdminModalContainerComponent,
      UpdateItemReturnComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemReturnListComponent, { className: "ItemReturnListComponent" });
})();
export {
  ItemReturnListComponent
};
//# sourceMappingURL=chunk-HRPTO42G.js.map
