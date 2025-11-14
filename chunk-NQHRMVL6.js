import {
  AdminModalContainerComponent
} from "./chunk-KH3GICF4.js";
import {
  ViewOneCompose
} from "./chunk-BMZBVPCI.js";
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
import "./chunk-H6XV6YF3.js";
import "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  FrontendLogger,
  UserWalletHistory,
  navByBus
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

// projects/shared-lib/src/lib/components/base/wallet/user-wallet-history-list-base.ts
var UserWalletHistoryListBase = class {
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
    this.listCompose = new ListComposeAdminPanel(UserWalletHistory, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.actions = [
      {
        label: "View",
        icon: "visibility",
        event: (userWalletHistory) => this.view(userWalletHistory)
      },
      {
        label: "Delete",
        icon: "delete",
        event: (userWalletHistory) => this.remove(userWalletHistory)
      }
    ];
  }
  init() {
    this.listCompose.getDataArr();
    this.mainBarTitle.title = "User Wallet History";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Efficiently manage and comprehensively monitor your automatic item taxes,
      empowering you to maintain financial clarity and make informed decisions
      regarding your fiscal responsibilities and opportunities for savings.`
    });
    scrollToTop(this.windowService);
  }
  destroy() {
    this.listCompose.cleanup?.();
  }
};

// projects/shared-lib/src/lib/components/base/wallet/view-user-wallet-history-base.ts
var ViewUserWalletHistoryBase = class {
  constructor(router, route, eventbus) {
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.viewOneCompose = new ViewOneCompose(UserWalletHistory, { route: ["/user-wallet-history/update"], eventName: "updateUserWalletHistory" }, this.router, this.route, this.eventbus);
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
  closeModal() {
    this.eventbus.generalEvent$.next({
      type: "closeViewUserWalletHistoryModal"
    });
  }
  destroy() {
    this.viewOneCompose.cleanup?.();
  }
};

// projects/admin-panel/src/app/components/pane/user-related/wallet/user-wallet-history/view-user-wallet-history/view-user-wallet-history.component.ts
var ViewUserWalletHistoryComponent = class _ViewUserWalletHistoryComponent extends ViewUserWalletHistoryBase {
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
  static {
    this.\u0275fac = function ViewUserWalletHistoryComponent_Factory(t) {
      return new (t || _ViewUserWalletHistoryComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EventbusService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewUserWalletHistoryComponent, selectors: [["app-view-user-wallet-history"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 20, vars: 1, consts: [[1, "!min-h-[100vh]"], [1, "page-content"], [1, "container-fluid", "px-4"], [1, "grid", "grid-cols-1", "pb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md"], [1, "card-body"], [1, "flex", "flex-col", "gap-4"], [1, "text-lg", "font-semibold", "flex", "items-center", "gap-2"], [1, "material-icons-outlined", "text-blue-500"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "flex-row", "gap-4", "items-center"], [1, "material-icons-outlined", "text-gray-500"], [1, "text-gray-500", "font-medium"], [1, "font-medium"]], template: function ViewUserWalletHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8)(9, "i", 9);
        \u0275\u0275text(10, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " User Wallet History Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "i", 12);
        \u0275\u0275text(15, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 13);
        \u0275\u0275text(17, "Wallet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 14);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.wallet) || "N/A", " ");
      }
    }, dependencies: [RouterModule], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewUserWalletHistoryComponent, { className: "ViewUserWalletHistoryComponent" });
})();

// projects/admin-panel/src/app/components/pane/user-related/wallet/user-wallet-history/user-wallet-history-list/user-wallet-history-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "User Wallet History", icon: "assessment" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "Name", value: "name" });
var _c4 = () => ({ label: "Enforcer", value: "enforcer" });
var _c5 = () => ({ header: "UserWalletHistory ID", field: "_id", isDefaultField: true, sortable: true });
var _c6 = () => ({ header: "Name", field: "name", sortable: true, removeWhen: "small" });
var _c7 = () => ({ header: "Date Added", field: "createdAt", sortable: true, removeWhen: "medium" });
var _c8 = () => ({ header: "Enforcer", field: "enforcer", sortable: true, removeWhen: "large" });
var _c9 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function UserWalletHistoryListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "app-admin-date-filter-field", 11);
    \u0275\u0275listener("filter", function UserWalletHistoryListComponent_Conditional_8_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function UserWalletHistoryListComponent_Conditional_8_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
var UserWalletHistoryListComponent = class _UserWalletHistoryListComponent extends UserWalletHistoryListBase {
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
      modalTitle: "Delete User Wallet History",
      modalMsg: "Are you sure you want to delete this user wallet history?",
      modalCancelButton: true,
      modalCancelText: "Cancel",
      modalConfirmText: "Delete",
      modalConfirmButton: true
    };
    this.viewModalOptions = {
      showModal: false,
      modalTitle: "View User Wallet History",
      modalMsg: "Are you sure you want to view this user wallet history?",
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
  view(userWalletHistory) {
    this.userWalletHistory = userWalletHistory;
    this.viewModalOptions.showModal = true;
  }
  remove(userWalletHistory) {
    this.userWalletHistory = userWalletHistory;
    this.deleteModalOptions.showModal = true;
  }
  toggleModalDelete() {
    this.deleteModalOptions.showModal = !this.deleteModalOptions.showModal;
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
        yield this.userWalletHistory?.remove();
        this.toastr.success("User wallet history deleted successfully");
        this.deleteModalOptions.showModal = false;
        this.listCompose.getDataArr();
      } catch (error) {
        FrontendLogger.error(error);
        this.toastr.error("Failed to delete user wallet history");
      }
    });
  }
  static {
    this.\u0275fac = function UserWalletHistoryListComponent_Factory(t) {
      return new (t || _UserWalletHistoryListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserWalletHistoryListComponent, selectors: [["app-user-wallet-history-list"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 13, vars: 50, consts: [["title", "User Wallet History List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative"], [1, "col-span-12", "md:col-span-4", "w-[220px]"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "selections", "currentActivePopupId", "dataArr", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], [3, "closed", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"]], template: function UserWalletHistoryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3);
        \u0275\u0275element(5, "div", 4);
        \u0275\u0275elementStart(6, "div", 5)(7, "app-admin-search-field", 6);
        \u0275\u0275listener("filter", function UserWalletHistoryListComponent_Template_app_admin_search_field_filter_7_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, UserWalletHistoryListComponent_Conditional_8_Template, 2, 0, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "app-admin-table", 8);
        \u0275\u0275listener("paginateItems", function UserWalletHistoryListComponent_Template_app_admin_table_paginateItems_9_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function UserWalletHistoryListComponent_Template_app_admin_table_openExtras_9_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function UserWalletHistoryListComponent_Template_app_admin_table_sortChange_9_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function UserWalletHistoryListComponent_Template_app_admin_table_selectionToggle_9_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function UserWalletHistoryListComponent_Template_app_admin_table_viewItem_9_listener($event) {
          return ctx.view($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "app-admin-modal", 9);
        \u0275\u0275listener("closed", function UserWalletHistoryListComponent_Template_app_admin_modal_closed_10_listener() {
          return ctx.toggleModalDelete();
        })("confirm", function UserWalletHistoryListComponent_Template_app_admin_modal_confirm_10_listener($event) {
          return ctx.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "app-admin-modal-container", 10);
        \u0275\u0275listener("closed", function UserWalletHistoryListComponent_Template_app_admin_modal_container_closed_11_listener() {
          return ctx.toggleModalView();
        });
        \u0275\u0275element(12, "app-view-user-wallet-history");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(33, _c2, \u0275\u0275pureFunction0(31, _c0), \u0275\u0275pureFunction0(32, _c1)));
        \u0275\u0275advance(6);
        \u0275\u0275property("options", \u0275\u0275pureFunction2(38, _c2, \u0275\u0275pureFunction0(36, _c3), \u0275\u0275pureFunction0(37, _c4)));
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.listCompose.selections.length === 0 ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", false)("selections", ctx.listCompose.selections)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction4(45, _c9, \u0275\u0275pureFunction0(41, _c5), \u0275\u0275pureFunction0(42, _c6), \u0275\u0275pureFunction0(43, _c7), \u0275\u0275pureFunction0(44, _c8)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.deleteModalOptions.showModal)("title", ctx.deleteModalOptions.modalTitle)("message", ctx.deleteModalOptions.modalMsg)("cancelButton", ctx.deleteModalOptions.modalCancelButton)("cancelText", ctx.deleteModalOptions.modalCancelText)("confirmText", ctx.deleteModalOptions.modalConfirmText)("confirmButon", ctx.deleteModalOptions.modalConfirmButton);
        \u0275\u0275advance();
        \u0275\u0275property("showModal", ctx.viewModalOptions.showModal)("title", ctx.viewModalOptions.modalTitle)("message", ctx.viewModalOptions.modalMsg)("cancelButton", ctx.viewModalOptions.modalCancelButton)("cancelText", ctx.viewModalOptions.modalCancelText)("confirmText", ctx.viewModalOptions.modalConfirmText)("confirmButon", ctx.viewModalOptions.modalConfirmButton);
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
      ViewUserWalletHistoryComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserWalletHistoryListComponent, { className: "UserWalletHistoryListComponent" });
})();
export {
  UserWalletHistoryListComponent
};
//# sourceMappingURL=chunk-NQHRMVL6.js.map
