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
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  VendorManager,
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
  ɵɵdefineDirective,
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
  ɵɵpureFunction6,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/base/vendor-manager-list.base.ts
var VendorManagerListBase = class _VendorManagerListBase {
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  constructor(router, eventbus, windowService, toastr, apNme, mainBarTitle, metaTagService, titleService) {
    this.router = router;
    this.eventbus = eventbus;
    this.windowService = windowService;
    this.toastr = toastr;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.listCompose = new ListComposeAdminPanel(VendorManager, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.actions = [
      {
        label: "View",
        icon: "visibility",
        event: (vendorManager) => this.viewVendorManager(vendorManager)
      },
      {
        label: "Update",
        icon: "edit",
        event: (vendorManager) => this.updateVendorManager(vendorManager)
      },
      {
        label: "Delete",
        icon: "delete",
        event: (vendorManager) => this.listCompose.openDeleteOneModal(vendorManager._id, "Delete Vendor Manager", "Are You Sure You Want To Delete This Vendor Manager?")
      }
    ];
  }
  ngOnInit() {
    this.mainBarTitle.title = "Vendor Managers - List of Vendor Managers";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `This page provides an overview of vendor managers,
      allowing users to manage and view vendor manager details effectively.`
    });
    this.listCompose.getDataArr();
    scrollToTop(this.windowService);
  }
  viewVendorManager(vendorManager) {
    this.navigateByBus(["/vendor-manager/view/" + vendorManager.urId], "oneItem", vendorManager);
  }
  updateVendorManager(vendorManager) {
    this.navigateByBus(["/vendor-manager/update"], "updateVendorManager", vendorManager);
  }
  subscribeToPkg(id) {
    this.router.navigate(["subscribe/" + id]);
  }
  addVendorManager() {
    this.router.navigate(["/vendor-manager/add"]);
  }
  getUser(vm) {
    return vm.manager;
  }
  ngOnDestroy() {
    this.listCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function VendorManagerListBase_Factory(t) {
      return new (t || _VendorManagerListBase)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _VendorManagerListBase, hostBindings: function VendorManagerListBase_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function VendorManagerListBase_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    } });
  }
};

// projects/admin-panel/src/app/components/pane/manager-related/vendor-manager/vendor-manager-list/vendor-manager-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Vendor Manager List", icon: "supervisor_account" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "ID", value: "urId" });
var _c4 = () => ({ label: "First Name", value: "manager.firstName" });
var _c5 = () => ({ label: "Last Name", value: "manager.lastName" });
var _c6 = () => ({ label: "Email", value: "manager.email" });
var _c7 = () => ({ label: "Phone", value: "manager.phone" });
var _c8 = () => ({ label: "Title", value: "title" });
var _c9 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c10 = () => ({ header: "ID", field: "urId", isDefaultField: true, sortable: true });
var _c11 = () => ({ header: "Name", field: "manager.names", sortable: true, removeWhen: "small" });
var _c12 = () => ({ header: "Email", field: "manager.email", sortable: true, removeWhen: "medium" });
var _c13 = () => ({ header: "Phone", field: "manager.phone", sortable: true, removeWhen: "large" });
var _c14 = () => ({ header: "Date Added", field: "createdAt", sortable: true, removeWhen: "medium" });
var _c15 = () => ({ header: "Title", field: "title", sortable: true, removeWhen: "large" });
function VendorManagerListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "app-admin-date-filter-field", 14);
    \u0275\u0275listener("filter", function VendorManagerListComponent_Conditional_14_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function VendorManagerListComponent_Conditional_14_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function VendorManagerListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 15);
    \u0275\u0275listener("click", function VendorManagerListComponent_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.openDeleteManyModal("Delete Vendor Managers", "Are You Sure You Want To Delete Selected Vendor Managers?"));
    });
    \u0275\u0275elementStart(2, "i", 16);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Delete All");
    \u0275\u0275elementEnd()()();
  }
}
var VendorManagerListComponent = class _VendorManagerListComponent extends VendorManagerListBase {
  constructor(router, eventbus, windowService, toastr, apNme, mainBarTitle, metaTagService, titleService) {
    super(router, eventbus, windowService, toastr, apNme, mainBarTitle, metaTagService, titleService);
    this.router = router;
    this.eventbus = eventbus;
    this.windowService = windowService;
    this.toastr = toastr;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.\u0275fac = function VendorManagerListComponent_Factory(t) {
      return new (t || _VendorManagerListComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorManagerListComponent, selectors: [["app-vendor-manager-list"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 18, vars: 57, consts: [["title", "Vendor Manager List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative"], [1, "col-span-12", "md:col-span-4", "w-[220px]"], [3, "popper"], ["type", "button", 1, "mb-6", "flex", "items-center", "justify-center", "!bg-primary", "text-white", "border-transparent", "btn", "hover:bg-gray-200", "hover:!text-dark", 3, "click"], [1, "material-icons-outlined", "mr-2"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [1, "absolute", "right-0", "top-0"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "currentActivePopupId", "dataArr", "selections", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"], [1, "mb-6", "btn", "btn-soft-danger", "flex", "items-center", "justify-center", 3, "click"], [1, "material-icons-outlined", "mr-2", "text-red"]], template: function VendorManagerListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "lib-tooltip", 5)(7, "button", 6);
        \u0275\u0275listener("click", function VendorManagerListComponent_Template_button_click_7_listener() {
          return ctx.addVendorManager();
        });
        \u0275\u0275elementStart(8, "i", 7);
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "Add VendorManager");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "app-admin-search-field", 9);
        \u0275\u0275listener("filter", function VendorManagerListComponent_Template_app_admin_search_field_filter_13_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, VendorManagerListComponent_Conditional_14_Template, 2, 0, "div", 10)(15, VendorManagerListComponent_Conditional_15_Template, 6, 0, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "app-admin-table", 12);
        \u0275\u0275listener("paginateItems", function VendorManagerListComponent_Template_app_admin_table_paginateItems_16_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function VendorManagerListComponent_Template_app_admin_table_openExtras_16_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function VendorManagerListComponent_Template_app_admin_table_sortChange_16_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function VendorManagerListComponent_Template_app_admin_table_selectionToggle_16_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function VendorManagerListComponent_Template_app_admin_table_viewItem_16_listener($event) {
          return ctx.viewVendorManager($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "app-admin-modal", 13);
        \u0275\u0275listener("closed", function VendorManagerListComponent_Template_app_admin_modal_closed_17_listener() {
          return ctx.listCompose.toggleModal();
        })("confirm", function VendorManagerListComponent_Template_app_admin_modal_confirm_17_listener($event) {
          return ctx.listCompose.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(28, _c2, \u0275\u0275pureFunction0(26, _c0), \u0275\u0275pureFunction0(27, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("popper", "Add new vendor manager here. Vendor Managers are used to manage companies, this invloves product request, inspection and approval");
        \u0275\u0275advance(7);
        \u0275\u0275property("options", \u0275\u0275pureFunction6(37, _c9, \u0275\u0275pureFunction0(31, _c3), \u0275\u0275pureFunction0(32, _c4), \u0275\u0275pureFunction0(33, _c5), \u0275\u0275pureFunction0(34, _c6), \u0275\u0275pureFunction0(35, _c7), \u0275\u0275pureFunction0(36, _c8)));
        \u0275\u0275advance();
        \u0275\u0275conditional(14, ctx.listCompose.selections.length === 0 ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.listCompose.selections.length > 0 ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", true)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("selections", ctx.listCompose.selections)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction6(50, _c9, \u0275\u0275pureFunction0(44, _c10), \u0275\u0275pureFunction0(45, _c11), \u0275\u0275pureFunction0(46, _c12), \u0275\u0275pureFunction0(47, _c13), \u0275\u0275pureFunction0(48, _c14), \u0275\u0275pureFunction0(49, _c15)))("actions", ctx.actions);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorManagerListComponent, { className: "VendorManagerListComponent" });
})();
export {
  VendorManagerListComponent
};
//# sourceMappingURL=chunk-TG5AX7II.js.map
