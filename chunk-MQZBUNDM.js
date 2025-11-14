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
import "./chunk-H6XV6YF3.js";
import "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import {
  UserLoginAttempt
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  EagleInfoClientError,
  FrontendLogger,
  getBizNestErrorResponseMessage
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  EventEmitter,
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
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/user-related/user-login-attempts/view-user-login-attempts/view-user-login-attempts.component.ts
function ViewUserLoginAttemptsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
    \u0275\u0275text(5, "View User Login Attempt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function ViewUserLoginAttemptsComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal.emit());
    });
    \u0275\u0275elementStart(7, "span", 6);
    \u0275\u0275text(8, " \xD7 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "p", 8);
    \u0275\u0275text(11, "content");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(12, "div", 9);
  }
}
var ViewUserLoginAttemptsComponent = class _ViewUserLoginAttemptsComponent {
  constructor(eventbus, tooltipService, toastr, router) {
    this.eventbus = eventbus;
    this.tooltipService = tooltipService;
    this.toastr = toastr;
    this.router = router;
    this.closeModal = new EventEmitter();
  }
  deleteUserLoginAttempt() {
    return __async(this, null, function* () {
      try {
        yield this.userLoginAttempt.remove();
        this.closeModal.emit();
      } catch (error) {
        FrontendLogger.error(error);
        this.toastr.error(getBizNestErrorResponseMessage(error), "Error");
      }
    });
  }
  viewUser() {
    this.closeModal.emit();
    this.router.navigate(["/manage-user/" + this.userLoginAttempt.user._id]);
  }
  static {
    this.\u0275fac = function ViewUserLoginAttemptsComponent_Factory(t) {
      return new (t || _ViewUserLoginAttemptsComponent)(\u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewUserLoginAttemptsComponent, selectors: [["app-view-user-login-attempts"]], inputs: { userLoginAttempt: "userLoginAttempt", showModal: "showModal" }, outputs: { closeModal: "closeModal" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "overflow-x-hidden", "overflow-y-auto", "fixed", "inset-0", "z-50", "outline-none", "focus:outline-none", "justify-center", "items-center", "flex"], [1, "relative", "w-auto", "my-6", "mx-auto", "max-w-6xl"], [1, "border-0", "rounded-lg", "shadow-lg", "relative", "flex", "flex-col", "w-full", "!bg-default-white", "outline-none", "focus:outline-none"], [1, "flex", "items-start", "justify-between", "p-5", "border-b", "border-solid", "border-blueGray-200", "rounded-t"], [1, "text-3xl", "font-semibold"], [1, "p-1", "ml-auto", "bg-transparent", "border-0", "text-black", "opacity-5", "float-right", "text-3xl", "leading-none", "font-semibold", "outline-none", "focus:outline-none", 3, "click"], [1, "bg-transparent", "text-black", "opacity-5", "h-6", "w-6", "text-2xl", "block", "outline-none", "focus:outline-none"], [1, "relative", "p-6", "flex-auto"], [1, "my-4", "text-blueGray-500", "text-lg", "leading-relaxed"], [1, "opacity-25", "fixed", "inset-0", "z-40", "bg-black"]], template: function ViewUserLoginAttemptsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ViewUserLoginAttemptsComponent_Conditional_0_Template, 13, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.showModal ? 0 : -1);
      }
    }, dependencies: [RouterModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewUserLoginAttemptsComponent, { className: "ViewUserLoginAttemptsComponent" });
})();

// projects/admin-panel/src/app/components/pane/user-related/user-login-attempts/user-login-attempts-list/user-login-attempts-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "home", link: "/" });
var _c1 = () => ({ name: "User Login History", icon: "login" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "User First Name", value: "user.firstName" });
var _c4 = () => ({ label: "User Last Name", value: "user.lastName" });
var _c5 = () => ({ label: "Ip", value: "ip" });
var _c6 = () => ({ label: "Select", value: "successful" });
var _c7 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c8 = () => ({ header: "User First Name", field: "user.firstName", isDefaultField: true, sortable: true });
var _c9 = () => ({ header: "User Last Name", field: "user.lastName", sortable: true, removeWhen: "small" });
var _c10 = () => ({ header: "Ip", field: "ip", sortable: true, removeWhen: "small" });
var _c11 = () => ({ header: "Successful", field: "successful", sortable: true, isBooleanValue: true, removeWhen: "medium" });
var _c12 = () => ({ header: "Date Added", field: "createdAt", sortable: true, removeWhen: "large" });
var _c13 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function UserLoginAttemptsListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-admin-date-filter-field", 11);
    \u0275\u0275listener("filter", function UserLoginAttemptsListComponent_Conditional_7_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function UserLoginAttemptsListComponent_Conditional_7_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function UserLoginAttemptsListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 12);
    \u0275\u0275listener("click", function UserLoginAttemptsListComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.openDeleteManyModal("Delete Expenses", "Are You Sure You Want To Delete Selected Expenses?"));
    });
    \u0275\u0275elementStart(2, "i", 13);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Delete All");
    \u0275\u0275elementEnd()()();
  }
}
var UserLoginAttemptsListComponent = class _UserLoginAttemptsListComponent {
  constructor(tooltipService, eventbus, router, windowService, toastr, route, apNme, mainBarTitle, metaTagService, titleService) {
    this.tooltipService = tooltipService;
    this.eventbus = eventbus;
    this.router = router;
    this.windowService = windowService;
    this.toastr = toastr;
    this.route = route;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.listCompose = new ListComposeAdminPanel(UserLoginAttempt, this.eventbus, this.windowService, this.toastr);
    this.showViewModal = false;
    this.actions = [
      {
        label: "View",
        icon: "visibility",
        event: (userLoginAttempt) => {
          this.showViewModal = true;
          this.viewUserLoginAttempt = userLoginAttempt;
        }
      },
      {
        label: "View User",
        icon: "visibility",
        event: (userLoginAttempt) => {
          this.viewUser(userLoginAttempt.user._id);
        }
      },
      {
        label: "Delete",
        icon: "delete",
        event: (userLoginAttempt) => {
          this.listCompose.openDeleteOneModal(userLoginAttempt._id, "Delete Login History", "Are You Sure You Want To Delete This Login History Record?");
        }
      }
    ];
    this.id = this.route.snapshot?.params["id"];
  }
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  ngOnInit() {
    if (this.id !== "all") {
      this.listCompose.filterProps = {
        propFilter: {
          user: this.id
        }
      };
    }
    this.listCompose.getDataArr();
    this.mainBarTitle.title = "User Login History - Manage User Login History Records";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Easily manage and view user login attempts for
      your organization to ensure effective security monitoring.`
    });
    scrollToTop(this.windowService);
  }
  viewUser(id) {
    FrontendLogger.debug("viewUser", id);
    const found = this.listCompose.dataArr.find((val) => val.user.urId === id);
    if (!found) {
      throw new EagleInfoClientError("no user");
    }
    this.router.navigate(["/manage-user/" + found._id]);
  }
  ngOnDestroy() {
    this.cleanup?.();
    this.listCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function UserLoginAttemptsListComponent_Factory(t) {
      return new (t || _UserLoginAttemptsListComponent)(\u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserLoginAttemptsListComponent, selectors: [["app-user-login-attempts-list"]], hostBindings: function UserLoginAttemptsListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function UserLoginAttemptsListComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 52, consts: [["title", "User Login History", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "justify-between", "mb-4"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "h-[60px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [1, "absolute", "right-0", "top-0"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "currentActivePopupId", "dataArr", "selections", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], [3, "closeModal", "showModal", "userLoginAttempt"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"], [1, "mb-6", "btn", "btn-soft-danger", "flex", "items-center", "justify-center", 3, "click"], [1, "material-icons-outlined", "mr-2", "text-red"]], template: function UserLoginAttemptsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "app-admin-search-field", 5);
        \u0275\u0275listener("filter", function UserLoginAttemptsListComponent_Template_app_admin_search_field_filter_6_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, UserLoginAttemptsListComponent_Conditional_7_Template, 2, 0, "div", 6)(8, UserLoginAttemptsListComponent_Conditional_8_Template, 6, 0, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "app-admin-table", 8);
        \u0275\u0275listener("paginateItems", function UserLoginAttemptsListComponent_Template_app_admin_table_paginateItems_9_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function UserLoginAttemptsListComponent_Template_app_admin_table_openExtras_9_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function UserLoginAttemptsListComponent_Template_app_admin_table_sortChange_9_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function UserLoginAttemptsListComponent_Template_app_admin_table_selectionToggle_9_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function UserLoginAttemptsListComponent_Template_app_admin_table_viewItem_9_listener($event) {
          return ctx.viewUser($event._id);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "app-admin-modal", 9);
        \u0275\u0275listener("closed", function UserLoginAttemptsListComponent_Template_app_admin_modal_closed_10_listener() {
          return ctx.listCompose.toggleModal();
        })("confirm", function UserLoginAttemptsListComponent_Template_app_admin_modal_confirm_10_listener($event) {
          return ctx.listCompose.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "app-view-user-login-attempts", 10);
        \u0275\u0275listener("closeModal", function UserLoginAttemptsListComponent_Template_app_view_user_login_attempts_closeModal_11_listener() {
          return ctx.showViewModal = false;
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(29, _c2, \u0275\u0275pureFunction0(27, _c0), \u0275\u0275pureFunction0(28, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("options", \u0275\u0275pureFunction4(36, _c7, \u0275\u0275pureFunction0(32, _c3), \u0275\u0275pureFunction0(33, _c4), \u0275\u0275pureFunction0(34, _c5), \u0275\u0275pureFunction0(35, _c6)));
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.listCompose.selections.length === 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.listCompose.selections.length > 0 ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", true)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("selections", ctx.listCompose.selections)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction5(46, _c13, \u0275\u0275pureFunction0(41, _c8), \u0275\u0275pureFunction0(42, _c9), \u0275\u0275pureFunction0(43, _c10), \u0275\u0275pureFunction0(44, _c11), \u0275\u0275pureFunction0(45, _c12)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.listCompose.showModal)("title", ctx.listCompose.modalTitle)("message", ctx.listCompose.modalMsg)("cancelButton", ctx.listCompose.modalCancelButton)("cancelText", ctx.listCompose.modalCancelText)("confirmText", ctx.listCompose.modalConfirmText)("confirmButon", ctx.listCompose.modalConfirmButton);
        \u0275\u0275advance();
        \u0275\u0275property("showModal", ctx.showViewModal)("userLoginAttempt", ctx.viewUserLoginAttempt);
      }
    }, dependencies: [
      RouterModule,
      AdminModalComponent,
      AdminTableComponent,
      AdminPageContentComponent,
      AdminSearchFieldComponent,
      AdminDateFilterFieldComponent,
      AdminTopBarComponent,
      ViewUserLoginAttemptsComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserLoginAttemptsListComponent, { className: "UserLoginAttemptsListComponent" });
})();
export {
  UserLoginAttemptsListComponent
};
//# sourceMappingURL=chunk-MQZBUNDM.js.map
