import {
  AdminModalContainerComponent
} from "./chunk-KH3GICF4.js";
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
  AdminModalComponent
} from "./chunk-X7WNMWNF.js";
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
  Validators,
  ɵNgNoValidate
} from "./chunk-H6XV6YF3.js";
import "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  FrontendLogger,
  UserWallet,
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

// projects/shared-lib/src/lib/components/base/wallet/add-update-user-wallet-base.ts
var AddUpdateUserWalletBase = class {
  constructor(fb, router, toastr, eventbus, mainBarTitle, windowService) {
    this.fb = fb;
    this.router = router;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.mainBarTitle = mainBarTitle;
    this.windowService = windowService;
    this.posting = false;
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.mainBarTitle.title = "Add To User Wallet";
    this.form = this.fb.group({
      accountBalance: ["", Validators.compose([
        Validators.min(0),
        Validators.max(100),
        patternWithMessage(/^[0-9]+(\.[0-9]+)?$/, "Must be a valid number."),
        Validators.required
      ])]
    });
  }
  get controlNames() {
    return controlNames(this.form.controls);
  }
  init() {
    const handlers = {
      addToUserWallet: (data) => {
        this.userId = data.userId;
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
        commerceUser: String(this.userId),
        // TODO userId
        accountBalance: Number(this.form.value.accountBalance)
      };
      try {
        this.posting = true;
        yield UserWallet.add(details);
        this.toastr.success("Operation sucessfull...!", "Success");
        this.form.reset();
        this.closeModal();
        scrollToTop(this.windowService);
      } catch (error) {
        FrontendLogger.error("AddExpenses:saveChanges:: - error ", error);
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
      type: "closeAddUpdateUserWalletModal"
    });
  }
  destroy() {
    this.cleanup?.();
  }
};

// projects/shared-lib/src/lib/components/base/wallet/user-wallet-list-base.ts
var UserWalletListBase = class {
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
    this.listCompose = new ListComposeAdminPanel(UserWallet, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.actions = [
      {
        label: "View",
        icon: "visibility",
        event: (userWallet) => this.viewUserWallet(userWallet)
      },
      {
        label: "Update",
        icon: "edit",
        event: (userWallet) => this.updateUserWallet(userWallet)
      },
      {
        label: "Delete",
        icon: "delete",
        event: (userWallet) => this.deleteUserWallet(userWallet)
      }
    ];
  }
  init() {
    this.listCompose.getDataArr();
    this.mainBarTitle.title = "User Wallets";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Efficiently manage and comprehensively monitor your user wallets,
      empowering you to maintain financial clarity and make informed decisions
      regarding your fiscal responsibilities and opportunities for savings.`
    });
    scrollToTop(this.windowService);
  }
  destroy() {
    this.listCompose.cleanup?.();
  }
};

// projects/shared-lib/src/lib/components/base/wallet/view-user-wallet-base.ts
var ViewUserWalletBase = class {
  constructor(router, route, eventbus) {
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.viewOneCompose = new ViewOneCompose(UserWallet, { route: ["/user-wallet/update"], eventName: "updateUserWallet" }, this.router, this.route, this.eventbus);
    this.title = "View";
    this.actions = [
      {
        label: "View",
        icon: "visibility"
      },
      {
        label: "Delete",
        icon: "delete"
      }
    ];
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
  }
  init() {
    return __async(this, null, function* () {
      try {
        yield this.viewOneCompose.init();
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  destroy() {
    this.viewOneCompose.cleanup?.();
  }
};

// projects/admin-panel/src/app/components/pane/user-related/wallet/user-wallet/add-update-user-wallet/add-update-user-wallet.component.ts
var AddUpdateUserWalletComponent = class _AddUpdateUserWalletComponent extends AddUpdateUserWalletBase {
  constructor(fb, router, toastr, eventbus, mainBarTitle, windowService) {
    super(fb, router, toastr, eventbus, mainBarTitle, windowService);
    this.fb = fb;
    this.router = router;
    this.toastr = toastr;
    this.eventbus = eventbus;
    this.mainBarTitle = mainBarTitle;
    this.windowService = windowService;
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  static {
    this.\u0275fac = function AddUpdateUserWalletComponent_Factory(t) {
      return new (t || _AddUpdateUserWalletComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(WindowService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUpdateUserWalletComponent, selectors: [["app-add-update-user-wallet"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 13, vars: 7, consts: [[1, "container", "mx-auto", "md:px-6", "md:pt-32", "pb-32", "pt-12", "!mn-h-[100vh]", "!mb-[180px]"], [1, "text-center", "min-h-[100vh]", "mx-auto", "max-w-[700px]"], [1, "md:px-3", "h-full", "flex", "items-center", "justify-center"], [1, "space-y-8", "!bg-default-white", "p-10", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", 3, "ngSubmit", "formGroup"], [1, "text-center", "mb-6"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [3, "formControlName", "label"], [3, "save", "btnText", "tooltip", "disabled", "posting"]], template: function AddUpdateUserWalletComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
        \u0275\u0275element(2, "app-admin-form-instruction");
        \u0275\u0275elementStart(3, "div", 2)(4, "form", 3);
        \u0275\u0275listener("ngSubmit", function AddUpdateUserWalletComponent_Template_form_ngSubmit_4_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275elementStart(5, "div", 4)(6, "h2", 5);
        \u0275\u0275text(7, " User Wallet Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, " Provide comprehensive information about the user wallet ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275element(11, "app-admin-form-field", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "app-admin-form-button", 9);
        \u0275\u0275listener("save", function AddUpdateUserWalletComponent_Template_app_admin_form_button_save_12_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275property("formControlName", ctx.controlNames.accountBalance)("label", "Name");
        \u0275\u0275advance();
        \u0275\u0275property("btnText", "Save")("tooltip", "Saves Automatic Tax.")("disabled", ctx.posting)("posting", ctx.posting);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      AdminFormFieldComponent,
      AdminFormButtonComponent,
      AdminFormInstructionComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUpdateUserWalletComponent, { className: "AddUpdateUserWalletComponent" });
})();

// projects/admin-panel/src/app/components/pane/user-related/wallet/user-wallet/view-user-wallet/view-user-wallet.component.ts
var ViewUserWalletComponent = class _ViewUserWalletComponent extends ViewUserWalletBase {
  constructor(router, route, eventbus) {
    super(router, route, eventbus);
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  closeModal() {
    this.eventbus.generalEvent$.next({
      type: "closeViewUserWalletModal"
    });
  }
  static {
    this.\u0275fac = function ViewUserWalletComponent_Factory(t) {
      return new (t || _ViewUserWalletComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EventbusService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewUserWalletComponent, selectors: [["app-view-user-wallet"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 20, vars: 1, consts: [[1, "!min-h-[100vh]"], [1, "page-content"], [1, "container-fluid", "px-4"], [1, "grid", "grid-cols-1", "pb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md"], [1, "card-body"], [1, "flex", "flex-col", "gap-4"], [1, "text-lg", "font-semibold", "flex", "items-center", "gap-2"], [1, "material-icons-outlined", "text-blue-500"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "flex-row", "gap-4", "items-center"], [1, "material-icons-outlined", "text-gray-500"], [1, "text-gray-500", "font-medium"], [1, "font-medium"]], template: function ViewUserWalletComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8)(9, "i", 9);
        \u0275\u0275text(10, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " User Wallet Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "i", 12);
        \u0275\u0275text(15, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 13);
        \u0275\u0275text(17, "User:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 14);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.commerceUser) || "N/A", " ");
      }
    }, dependencies: [RouterModule], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewUserWalletComponent, { className: "ViewUserWalletComponent" });
})();

// projects/admin-panel/src/app/components/pane/user-related/wallet/user-wallet/user-wallet-list/user-wallet-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "User Wallet List", icon: "assessment" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "Name", value: "name" });
var _c4 = () => ({ label: "Enforcer", value: "enforcer" });
var _c5 = () => ({ header: "UserWallet ID", field: "_id", isDefaultField: true, sortable: true });
var _c6 = () => ({ header: "Name", field: "name", sortable: true, removeWhen: "small" });
var _c7 = () => ({ header: "Date Added", field: "createdAt", sortable: true, removeWhen: "medium" });
var _c8 = () => ({ header: "Enforcer", field: "enforcer", sortable: true, removeWhen: "large" });
var _c9 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function UserWalletListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-admin-date-filter-field", 10);
    \u0275\u0275listener("filter", function UserWalletListComponent_Conditional_7_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function UserWalletListComponent_Conditional_7_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
var UserWalletListComponent = class _UserWalletListComponent extends UserWalletListBase {
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
    this.deleteModalOptions = {
      showModal: false,
      modalTitle: "Remove User Wallet",
      modalMsg: "Are you sure you want to remove this item?",
      modalCancelButton: true,
      modalCancelText: "Cancel",
      modalConfirmText: "Remove",
      modalConfirmButton: true
    };
    this.updateModalOptions = {
      showModal: false,
      modalTitle: "Update User Wallet",
      modalMsg: "Are you sure you want to update this item?",
      modalCancelButton: true,
      modalCancelText: "Cancel",
      modalConfirmText: "Update",
      modalConfirmButton: true
    };
    this.viewModalOptions = {
      showModal: false,
      modalTitle: "View User Wallet",
      modalMsg: "Are you sure you want to view this item?",
      modalCancelButton: true,
      modalCancelText: "Cancel",
      modalConfirmText: "View",
      modalConfirmButton: true
    };
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  viewUserWallet(userWallet) {
    this.eventbus.generalEvent$.next({
      type: "viewUserWallet",
      data: userWallet
    });
    this.userWallet = userWallet;
    this.viewModalOptions.showModal = true;
  }
  updateUserWallet(userWallet) {
    this.eventbus.generalEvent$.next({
      type: "updateUserWallet",
      data: userWallet
    });
    this.userWallet = userWallet;
    this.updateModalOptions.showModal = true;
  }
  deleteUserWallet(userWallet) {
    this.userWallet = userWallet;
    this.deleteModalOptions.showModal = true;
  }
  toggleModalDelete() {
    this.deleteModalOptions.showModal = !this.deleteModalOptions.showModal;
  }
  toggleModalUpdate() {
    this.updateModalOptions.showModal = !this.updateModalOptions.showModal;
  }
  toggleModalView() {
    this.viewModalOptions.showModal = !this.viewModalOptions.showModal;
  }
  onModalDeleteConfirm(event) {
    return __async(this, null, function* () {
      if (!event) {
        return;
      }
      try {
        yield this.userWallet?.remove();
        this.toastr.success("User Wallet deleted successfully");
        this.deleteModalOptions.showModal = false;
        this.listCompose.getDataArr();
      } catch (error) {
        FrontendLogger.error(error);
        this.toastr.error("Failed to remove user wallet");
      }
    });
  }
  static {
    this.\u0275fac = function UserWalletListComponent_Factory(t) {
      return new (t || _UserWalletListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserWalletListComponent, selectors: [["app-user-wallet-list"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 14, vars: 57, consts: [["title", "User Wallet List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "mb-4"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "selections", "currentActivePopupId", "dataArr", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], [3, "closed", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"]], template: function UserWalletListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "app-admin-search-field", 5);
        \u0275\u0275listener("filter", function UserWalletListComponent_Template_app_admin_search_field_filter_6_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, UserWalletListComponent_Conditional_7_Template, 2, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "app-admin-table", 7);
        \u0275\u0275listener("paginateItems", function UserWalletListComponent_Template_app_admin_table_paginateItems_8_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function UserWalletListComponent_Template_app_admin_table_openExtras_8_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function UserWalletListComponent_Template_app_admin_table_sortChange_8_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function UserWalletListComponent_Template_app_admin_table_selectionToggle_8_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function UserWalletListComponent_Template_app_admin_table_viewItem_8_listener($event) {
          return ctx.viewUserWallet($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "app-admin-modal", 8);
        \u0275\u0275listener("closed", function UserWalletListComponent_Template_app_admin_modal_closed_9_listener() {
          return ctx.toggleModalDelete();
        })("confirm", function UserWalletListComponent_Template_app_admin_modal_confirm_9_listener($event) {
          return ctx.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "app-admin-modal-container", 9);
        \u0275\u0275listener("closed", function UserWalletListComponent_Template_app_admin_modal_container_closed_10_listener() {
          return ctx.toggleModalView();
        });
        \u0275\u0275element(11, "app-view-user-wallet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "app-admin-modal-container", 9);
        \u0275\u0275listener("closed", function UserWalletListComponent_Template_app_admin_modal_container_closed_12_listener() {
          return ctx.toggleModalUpdate();
        });
        \u0275\u0275element(13, "app-add-update-user-wallet");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(40, _c2, \u0275\u0275pureFunction0(38, _c0), \u0275\u0275pureFunction0(39, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("options", \u0275\u0275pureFunction2(45, _c2, \u0275\u0275pureFunction0(43, _c3), \u0275\u0275pureFunction0(44, _c4)));
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.listCompose.selections.length === 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", false)("selections", ctx.listCompose.selections)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction4(52, _c9, \u0275\u0275pureFunction0(48, _c5), \u0275\u0275pureFunction0(49, _c6), \u0275\u0275pureFunction0(50, _c7), \u0275\u0275pureFunction0(51, _c8)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.deleteModalOptions.showModal)("title", ctx.deleteModalOptions.modalTitle)("message", ctx.deleteModalOptions.modalMsg)("cancelButton", ctx.deleteModalOptions.modalCancelButton)("cancelText", ctx.deleteModalOptions.modalCancelText)("confirmText", ctx.deleteModalOptions.modalConfirmText)("confirmButon", ctx.deleteModalOptions.modalConfirmButton);
        \u0275\u0275advance();
        \u0275\u0275property("showModal", ctx.viewModalOptions.showModal)("title", ctx.viewModalOptions.modalTitle)("message", ctx.viewModalOptions.modalMsg)("cancelButton", ctx.viewModalOptions.modalCancelButton)("cancelText", ctx.viewModalOptions.modalCancelText)("confirmText", ctx.viewModalOptions.modalConfirmText)("confirmButon", ctx.viewModalOptions.modalConfirmButton);
        \u0275\u0275advance(2);
        \u0275\u0275property("showModal", ctx.updateModalOptions.showModal)("title", ctx.updateModalOptions.modalTitle)("message", ctx.updateModalOptions.modalMsg)("cancelButton", ctx.updateModalOptions.modalCancelButton)("cancelText", ctx.updateModalOptions.modalCancelText)("confirmText", ctx.updateModalOptions.modalConfirmText)("confirmButon", ctx.updateModalOptions.modalConfirmButton);
      }
    }, dependencies: [
      RouterModule,
      AdminModalComponent,
      AdminTableComponent,
      AdminPageContentComponent,
      AdminSearchFieldComponent,
      AdminDateFilterFieldComponent,
      AdminTopBarComponent,
      AdminModalContainerComponent,
      ViewUserWalletComponent,
      AddUpdateUserWalletComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserWalletListComponent, { className: "UserWalletListComponent" });
})();
export {
  UserWalletListComponent
};
//# sourceMappingURL=chunk-3OKEOPWM.js.map
