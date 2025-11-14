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
import {
  TooltipComponent
} from "./chunk-4KKGHO4P.js";
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
import {
  NotificationApiKey
} from "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  navByBus
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
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/notification/notif-key/notif-key-list/notif-key-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Notification Key List", icon: "assessment" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "Name", value: "name" });
var _c4 = () => ({ label: "Enforcer", value: "enforcer" });
var _c5 = () => ({ header: "NotificationKey ID", field: "_id", isDefaultField: true, sortable: true });
var _c6 = () => ({ header: "Name", field: "name", sortable: true, removeWhen: "small" });
var _c7 = () => ({ header: "Date Added", field: "createdAt", sortable: true, removeWhen: "medium" });
var _c8 = () => ({ header: "Enforcer", field: "enforcer", sortable: true, removeWhen: "large" });
var _c9 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function NotifKeyListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "app-admin-date-filter-field", 13);
    \u0275\u0275listener("filter", function NotifKeyListComponent_Conditional_14_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function NotifKeyListComponent_Conditional_14_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function NotifKeyListComponent_Conditional_15_Template(rf, ctx) {
}
var NotifKeyListComponent = class _NotifKeyListComponent {
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
    this.listCompose = new ListComposeAdminPanel(NotificationApiKey, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.actions = [
      {
        label: "View",
        icon: "visibility",
        event: (notificationApiKey) => this.viewNotificationApiKey(notificationApiKey)
      },
      {
        label: "Update",
        icon: "edit",
        event: (notificationApiKey) => this.updateNotificationApiKey(notificationApiKey)
      },
      {
        label: "Delete",
        icon: "delete",
        event: (notificationApiKey) => this.listCompose.openDeleteOneModal(notificationApiKey._id, "Delete Notification Key", "Are You Sure You Want To Delete This Notification Key?")
      }
    ];
  }
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  ngOnInit() {
    this.listCompose.getDataArr();
    this.mainBarTitle.title = "Notification Keys";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Efficiently manage and comprehensively monitor your notification keys,
      empowering you to maintain financial clarity and make informed decisions
      regarding your fiscal responsibilities and opportunities for savings.`
    });
    scrollToTop(this.windowService);
  }
  addNotificationApiKey() {
    this.router.navigate(["/notif-key/add"]);
  }
  updateNotificationApiKey(notificationApiKey) {
    this.navigateByBus(["/notif-key/update"], "updateNotificationApiKey", notificationApiKey);
  }
  viewNotificationApiKey(notificationApiKey) {
    this.navigateByBus(["/notif-key/view/" + notificationApiKey._id], "viewNotificationApiKey", notificationApiKey);
  }
  ngOnDestroy() {
    this.listCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function NotifKeyListComponent_Factory(t) {
      return new (t || _NotifKeyListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotifKeyListComponent, selectors: [["app-notif-key-list"]], hostBindings: function NotifKeyListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NotifKeyListComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 45, consts: [["title", "Notification Key List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative"], [1, "col-span-12", "md:col-span-4", "w-[220px]"], [3, "popper"], ["type", "button", 1, "mb-6", "flex", "items-center", "justify-center", "!bg-primary", "text-white", "border-transparent", "btn", "hover:bg-gray-200", "hover:!text-dark", 3, "click"], [1, "material-icons-outlined", "mr-2"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "selections", "currentActivePopupId", "dataArr", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"]], template: function NotifKeyListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "lib-tooltip", 5)(7, "button", 6);
        \u0275\u0275listener("click", function NotifKeyListComponent_Template_button_click_7_listener() {
          return ctx.addNotificationApiKey();
        });
        \u0275\u0275elementStart(8, "i", 7);
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "Add Notification Key");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "app-admin-search-field", 9);
        \u0275\u0275listener("filter", function NotifKeyListComponent_Template_app_admin_search_field_filter_13_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, NotifKeyListComponent_Conditional_14_Template, 2, 0, "div", 10)(15, NotifKeyListComponent_Conditional_15_Template, 0, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "app-admin-table", 11);
        \u0275\u0275listener("paginateItems", function NotifKeyListComponent_Template_app_admin_table_paginateItems_16_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function NotifKeyListComponent_Template_app_admin_table_openExtras_16_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function NotifKeyListComponent_Template_app_admin_table_sortChange_16_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function NotifKeyListComponent_Template_app_admin_table_selectionToggle_16_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function NotifKeyListComponent_Template_app_admin_table_viewItem_16_listener($event) {
          return ctx.viewNotificationApiKey($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "app-admin-modal", 12);
        \u0275\u0275listener("closed", function NotifKeyListComponent_Template_app_admin_modal_closed_17_listener() {
          return ctx.listCompose.toggleModal();
        })("confirm", function NotifKeyListComponent_Template_app_admin_modal_confirm_17_listener($event) {
          return ctx.listCompose.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(28, _c2, \u0275\u0275pureFunction0(26, _c0), \u0275\u0275pureFunction0(27, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("popper", "Add new notification key. They are values enforced by regulatory authoriteies that are automatically applied to items.");
        \u0275\u0275advance(7);
        \u0275\u0275property("options", \u0275\u0275pureFunction2(33, _c2, \u0275\u0275pureFunction0(31, _c3), \u0275\u0275pureFunction0(32, _c4)));
        \u0275\u0275advance();
        \u0275\u0275conditional(14, ctx.listCompose.selections.length === 0 ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.listCompose.selections.length > 0 ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", false)("selections", ctx.listCompose.selections)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction4(40, _c9, \u0275\u0275pureFunction0(36, _c5), \u0275\u0275pureFunction0(37, _c6), \u0275\u0275pureFunction0(38, _c7), \u0275\u0275pureFunction0(39, _c8)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.listCompose.showModal)("title", ctx.listCompose.modalTitle)("message", ctx.listCompose.modalMsg)("cancelButton", ctx.listCompose.modalCancelButton)("cancelText", ctx.listCompose.modalCancelText)("confirmText", ctx.listCompose.modalConfirmText)("confirmButon", ctx.listCompose.modalConfirmButton);
      }
    }, dependencies: [
      RouterModule,
      AdminModalComponent,
      TooltipComponent,
      AdminTableComponent,
      AdminPageContentComponent,
      AdminSearchFieldComponent,
      AdminDateFilterFieldComponent,
      AdminTopBarComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotifKeyListComponent, { className: "NotifKeyListComponent" });
})();
export {
  NotifKeyListComponent
};
//# sourceMappingURL=chunk-ONUSTCFX.js.map
