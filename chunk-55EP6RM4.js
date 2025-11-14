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
  UserSuspiciousActivity
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  expenseCategory
} from "./chunk-MC4HAW4O.js";
import {
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
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
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/user-related/user-suspicious-activity/user-suspicious-activity.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "User Suspicious Activity List", icon: "dns" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "ID", value: "_id" });
var _c4 = () => ({ label: "User First Name", value: "user.firstName" });
var _c5 = () => ({ label: "User Last Name", value: "user.lastName" });
var _c6 = (a0, a1, a2) => [a0, a1, a2];
var _c7 = () => ({ header: "ID", field: "_id", isDefaultField: true, sortable: true });
var _c8 = () => ({ header: "User", field: "user._id", sortable: true, removeWhen: "small" });
var _c9 = () => ({ header: "Date", field: "createdAt", isDateValue: true, sortable: true, removeWhen: "medium" });
function UserSuspiciousAuditComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-admin-date-filter-field", 10);
    \u0275\u0275listener("filter", function UserSuspiciousAuditComponent_Conditional_7_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function UserSuspiciousAuditComponent_Conditional_7_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function UserSuspiciousAuditComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 11);
    \u0275\u0275listener("click", function UserSuspiciousAuditComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.openDeleteManyModal("Delete Expenses", "Are You Sure You Want To Delete Selected Expenses?"));
    });
    \u0275\u0275elementStart(2, "i", 12);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Delete All");
    \u0275\u0275elementEnd()()();
  }
}
var UserSuspiciousAuditComponent = class _UserSuspiciousAuditComponent {
  constructor(eventbus, router, windowService, toastr, tooltipService, apNme, mainBarTitle, metaTagService, titleService) {
    this.eventbus = eventbus;
    this.router = router;
    this.windowService = windowService;
    this.toastr = toastr;
    this.tooltipService = tooltipService;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.expenseCategory = expenseCategory;
    this.listCompose = new ListComposeAdminPanel(UserSuspiciousActivity, this.eventbus, this.windowService, this.toastr);
    this.actions = [
      {
        label: "View User",
        icon: "visibility",
        event: (userSuspiciousActivity) => {
          this.viewUser(userSuspiciousActivity.user._id);
        }
      },
      {
        label: "Delete",
        icon: "delete",
        event: (userSuspiciousActivity) => {
          this.listCompose.openDeleteOneModal(userSuspiciousActivity._id, "Delete User Suspicious Activity", "Are You Sure You Want To Delete This User Suspicious Activity?");
        }
      }
    ];
  }
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  ngOnInit() {
    this.listCompose.getDataArr();
    this.mainBarTitle.title = "User Suspicious Activity - Manage User Suspicious Activity";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Easily manage and view user IP addresses for your organization
      to ensure effective tracking and security.`
    });
    scrollToTop(this.windowService);
  }
  viewUser(id) {
    this.router.navigate(["/manage-user/" + id]);
  }
  ngOnDestroy() {
    this.cleanup?.();
    this.listCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function UserSuspiciousAuditComponent_Factory(t) {
      return new (t || _UserSuspiciousAuditComponent)(\u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSuspiciousAuditComponent, selectors: [["app-user-suspicious-activity"]], hostBindings: function UserSuspiciousAuditComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function UserSuspiciousAuditComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 44, consts: [["title", "User Suspicious Activity List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "justify-between", "mb-4"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "h-[60px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [1, "absolute", "right-0", "top-0"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "selectable", "currentActivePopupId", "dataArr", "selections", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"], [1, "mb-6", "btn", "btn-soft-danger", "flex", "items-center", "justify-center", 3, "click"], [1, "material-icons-outlined", "mr-2", "text-red"]], template: function UserSuspiciousAuditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "app-admin-search-field", 5);
        \u0275\u0275listener("filter", function UserSuspiciousAuditComponent_Template_app_admin_search_field_filter_6_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, UserSuspiciousAuditComponent_Conditional_7_Template, 2, 0, "div", 6)(8, UserSuspiciousAuditComponent_Conditional_8_Template, 6, 0, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "app-admin-table", 8);
        \u0275\u0275listener("paginateItems", function UserSuspiciousAuditComponent_Template_app_admin_table_paginateItems_9_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function UserSuspiciousAuditComponent_Template_app_admin_table_openExtras_9_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function UserSuspiciousAuditComponent_Template_app_admin_table_sortChange_9_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function UserSuspiciousAuditComponent_Template_app_admin_table_selectionToggle_9_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "app-admin-modal", 9);
        \u0275\u0275listener("closed", function UserSuspiciousAuditComponent_Template_app_admin_modal_closed_10_listener() {
          return ctx.listCompose.toggleModal();
        })("confirm", function UserSuspiciousAuditComponent_Template_app_admin_modal_confirm_10_listener($event) {
          return ctx.listCompose.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(27, _c2, \u0275\u0275pureFunction0(25, _c0), \u0275\u0275pureFunction0(26, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("options", \u0275\u0275pureFunction3(33, _c6, \u0275\u0275pureFunction0(30, _c3), \u0275\u0275pureFunction0(31, _c4), \u0275\u0275pureFunction0(32, _c5)));
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.listCompose.selections.length === 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.listCompose.selections.length > 0 ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", true)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("selections", ctx.listCompose.selections)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction3(40, _c6, \u0275\u0275pureFunction0(37, _c7), \u0275\u0275pureFunction0(38, _c8), \u0275\u0275pureFunction0(39, _c9)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.listCompose.showModal)("title", ctx.listCompose.modalTitle)("message", ctx.listCompose.modalMsg)("cancelButton", ctx.listCompose.modalCancelButton)("cancelText", ctx.listCompose.modalCancelText)("confirmText", ctx.listCompose.modalConfirmText)("confirmButon", ctx.listCompose.modalConfirmButton);
      }
    }, dependencies: [
      RouterModule,
      AdminModalComponent,
      AdminTableComponent,
      AdminSearchFieldComponent,
      AdminDateFilterFieldComponent,
      AdminTopBarComponent,
      AdminPageContentComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSuspiciousAuditComponent, { className: "UserSuspiciousAuditComponent" });
})();
export {
  UserSuspiciousAuditComponent
};
//# sourceMappingURL=chunk-55EP6RM4.js.map
