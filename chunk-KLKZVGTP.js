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
import {
  User
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  FrontendLogger,
  UnreliableBuyer,
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
  ɵɵpureFunction6,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/base/un-reliable/un-reliable-buyer/un-reliable-buyer-list-base.ts
var UnReliableUserListBase = class {
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
    this.listCompose = new ListComposeAdminPanel(User, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.actions = [
      {
        label: "View",
        icon: "visibility",
        event: (user) => this.viewUser(user)
      },
      {
        label: "Delete",
        icon: "delete",
        event: (user) => this.removeFromList(user)
      }
    ];
  }
  init() {
    return __async(this, null, function* () {
      yield this.getUnreliableBuyers();
      if (this.unreliableUsers?.flaggedBuyers && this.unreliableUsers?.flaggedBuyers?.length > 0) {
        this.listCompose.filterProps = {
          propFilter: {
            _id: this.unreliableUsers?.flaggedBuyers.map((val) => val.buyer) || []
          }
        };
        this.listCompose.getDataArr();
      }
      this.mainBarTitle.title = "Unreliable Users";
      this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
      this.metaTagService.updateTag({
        name: "description",
        content: `Efficiently manage and comprehensively monitor your unreliable users,
      empowering you to maintain financial clarity and make informed decisions
      regarding your fiscal responsibilities and opportunities for savings.`
      });
      scrollToTop(this.windowService);
    });
  }
  getUnreliableBuyers() {
    return __async(this, null, function* () {
      try {
        const { dataArr } = yield UnreliableBuyer.getAll();
        this.unreliableUsers = dataArr[0];
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  viewUser(user) {
    this.router.navigate([`/manage-user/${user._id}`]);
  }
  destroy() {
    this.listCompose.cleanup?.();
  }
};

// projects/admin-panel/src/app/components/pane/un-reliable/un-reliable-user/un-reliable-user/un-reliable-user-list/un-reliable-user-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Unreliable User List", icon: "assessment" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "ID", value: "urId" });
var _c4 = () => ({ label: "Name", value: "names" });
var _c5 = () => ({ label: "Email", value: "email" });
var _c6 = () => ({ label: "Phone", value: "phone" });
var _c7 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c8 = () => ({ header: "ID", field: "urId", isDefaultField: true, sortable: true });
var _c9 = () => ({ header: "Name", field: "names", sortable: true, removeWhen: "small" });
var _c10 = () => ({ header: "Email", field: "email", sortable: true, removeWhen: "medium" });
var _c11 = () => ({ header: "Phone", field: "phone", sortable: true, removeWhen: "large" });
var _c12 = () => ({ header: "Date Added", field: "createdAt", sortable: true, removeWhen: "medium" });
var _c13 = () => ({ header: "Title", field: "title", sortable: true, removeWhen: "extra-large" });
var _c14 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function UnReliableUserListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-admin-date-filter-field", 9);
    \u0275\u0275listener("filter", function UnReliableUserListComponent_Conditional_7_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function UnReliableUserListComponent_Conditional_7_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
var UnReliableUserListComponent = class _UnReliableUserListComponent extends UnReliableUserListBase {
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
      modalTitle: "Remove User From Red List",
      modalMsg: "Are you sure you want to remove this user from the red list?",
      modalCancelButton: true,
      modalCancelText: "Cancel",
      modalConfirmText: "Remove",
      modalConfirmButton: true
    };
  }
  ngOnInit() {
    this.init();
  }
  removeFromList(user) {
    this.toggleModalDelete();
    this.user = user;
  }
  onModalDeleteConfirm(event) {
    return __async(this, null, function* () {
      if (!event) {
        return;
      }
      try {
        yield UnreliableBuyer.modify(this.user._id, "red", "remove");
        this.listCompose.getDataArr();
        this.toastr.success("User removed from red list successfully");
      } catch (error) {
        FrontendLogger.error(error);
        this.toastr.error("Failed to remove user from red list");
      }
    });
  }
  toggleModalDelete() {
    this.deleteModalOptions.showModal = !this.deleteModalOptions.showModal;
  }
  ngOnDestroy() {
    this.destroy();
  }
  static {
    this.\u0275fac = function UnReliableUserListComponent_Factory(t) {
      return new (t || _UnReliableUserListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnReliableUserListComponent, selectors: [["app-un-reliable-user-list"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 10, vars: 51, consts: [["title", "Unreliable User List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "mb-4"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "selections", "currentActivePopupId", "dataArr", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"]], template: function UnReliableUserListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "app-admin-search-field", 5);
        \u0275\u0275listener("filter", function UnReliableUserListComponent_Template_app_admin_search_field_filter_6_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, UnReliableUserListComponent_Conditional_7_Template, 2, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "app-admin-table", 7);
        \u0275\u0275listener("paginateItems", function UnReliableUserListComponent_Template_app_admin_table_paginateItems_8_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function UnReliableUserListComponent_Template_app_admin_table_openExtras_8_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function UnReliableUserListComponent_Template_app_admin_table_sortChange_8_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function UnReliableUserListComponent_Template_app_admin_table_selectionToggle_8_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function UnReliableUserListComponent_Template_app_admin_table_viewItem_8_listener($event) {
          return ctx.viewUser($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "app-admin-modal", 8);
        \u0275\u0275listener("closed", function UnReliableUserListComponent_Template_app_admin_modal_closed_9_listener() {
          return ctx.toggleModalDelete();
        })("confirm", function UnReliableUserListComponent_Template_app_admin_modal_confirm_9_listener($event) {
          return ctx.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(26, _c2, \u0275\u0275pureFunction0(24, _c0), \u0275\u0275pureFunction0(25, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("options", \u0275\u0275pureFunction4(33, _c7, \u0275\u0275pureFunction0(29, _c3), \u0275\u0275pureFunction0(30, _c4), \u0275\u0275pureFunction0(31, _c5), \u0275\u0275pureFunction0(32, _c6)));
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.listCompose.selections.length === 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", false)("selections", ctx.listCompose.selections)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction6(44, _c14, \u0275\u0275pureFunction0(38, _c8), \u0275\u0275pureFunction0(39, _c9), \u0275\u0275pureFunction0(40, _c10), \u0275\u0275pureFunction0(41, _c11), \u0275\u0275pureFunction0(42, _c12), \u0275\u0275pureFunction0(43, _c13)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.deleteModalOptions.showModal)("title", ctx.deleteModalOptions.modalTitle)("message", ctx.deleteModalOptions.modalMsg)("cancelButton", ctx.deleteModalOptions.modalCancelButton)("cancelText", ctx.deleteModalOptions.modalCancelText)("confirmText", ctx.deleteModalOptions.modalConfirmText)("confirmButon", ctx.deleteModalOptions.modalConfirmButton);
      }
    }, dependencies: [
      RouterModule,
      AdminModalComponent,
      AdminTableComponent,
      AdminPageContentComponent,
      AdminSearchFieldComponent,
      AdminDateFilterFieldComponent,
      AdminTopBarComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnReliableUserListComponent, { className: "UnReliableUserListComponent" });
})();
export {
  UnReliableUserListComponent
};
//# sourceMappingURL=chunk-KLKZVGTP.js.map
