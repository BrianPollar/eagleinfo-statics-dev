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
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  OperationalLocation,
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
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/operational-location/operational-location-list/operational-location-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Operational Locations", icon: "location_city" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "ID", value: "_id" });
var _c4 = () => ({ label: "Place Name", value: "placeName" });
var _c5 = () => ({ label: "Delivers In Days", value: "deliversInDays" });
var _c6 = (a0, a1, a2) => [a0, a1, a2];
var _c7 = () => ({ header: "ID", field: "_id", isDefaultField: true, sortable: true });
var _c8 = () => ({ header: "Place Name", field: "placeName", sortable: true, removeWhen: "small" });
var _c9 = () => ({ header: "Shipping Cost", field: "shippingCost", isMoneyValue: true, sortable: true, removeWhen: "medium" });
var _c10 = () => ({ header: "Delivers In Days", field: "deliversInDays", sortable: true, removeWhen: "medium" });
var _c11 = () => ({ header: "Date Added", field: "createdAt", sortable: true, removeWhen: "large" });
var _c12 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function OperationalLocationListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "app-admin-date-filter-field", 14);
    \u0275\u0275listener("filter", function OperationalLocationListComponent_Conditional_14_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function OperationalLocationListComponent_Conditional_14_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function OperationalLocationListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 15);
    \u0275\u0275listener("click", function OperationalLocationListComponent_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.openDeleteManyModal("Delete Operational Locations", "Are You Sure You Want To Delete Selected Operational Locations?"));
    });
    \u0275\u0275elementStart(2, "i", 16);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Delete All");
    \u0275\u0275elementEnd()()();
  }
}
var OperationalLocationListComponent = class _OperationalLocationListComponent {
  constructor(currencyService, router, eventbus, windowService, toastr, apNme, mainBarTitle, metaTagService, titleService) {
    this.currencyService = currencyService;
    this.router = router;
    this.eventbus = eventbus;
    this.windowService = windowService;
    this.toastr = toastr;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.listCompose = new ListComposeAdminPanel(OperationalLocation, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.actions = [
      {
        label: "View",
        icon: "visibility",
        event: (opLoc) => this.viewOperationalLocation(opLoc)
      },
      {
        label: "Update",
        icon: "edit",
        event: (opLoc) => this.updateOperationalLocation(opLoc)
      },
      {
        label: "Delete",
        icon: "delete",
        event: (opLoc) => this.listCompose.openDeleteOneModal(opLoc._id, "Delete Operational Location", "Are You Sure You Want To Delete This Operational Location?")
      }
    ];
  }
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  ngOnInit() {
    this.mainBarTitle.title = "Operational Locations - Manage Operational Locations";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Overview of operational locations for effective management and tracking."
    });
    this.listCompose.getDataArr();
    scrollToTop(this.windowService);
  }
  viewOperationalLocation(opLoc) {
    this.navigateByBus(["/operational-location/view/" + opLoc._id], "oneItem", opLoc);
  }
  updateOperationalLocation(opLoc) {
    this.navigateByBus(["/operational-location/update"], "updateOperationalLocation", opLoc);
  }
  addOperationalLocation() {
    this.router.navigate(["/operational-location/add"]);
  }
  ngOnDestroy() {
    this.cleanup?.();
    this.listCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function OperationalLocationListComponent_Factory(t) {
      return new (t || _OperationalLocationListComponent)(\u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OperationalLocationListComponent, selectors: [["app-operational-location-list"]], hostBindings: function OperationalLocationListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function OperationalLocationListComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 49, consts: [["title", "Operational Locations", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative"], [1, "col-span-12", "md:col-span-4", "w-[220px]"], [3, "popper"], ["type", "button", 1, "mb-6", "flex", "items-center", "justify-center", "!bg-primary", "text-white", "border-transparent", "btn", "hover:bg-gray-200", "hover:!text-dark", 3, "click"], [1, "material-icons-outlined", "mr-2"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [1, "absolute", "right-0", "top-0"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "currentActivePopupId", "dataArr", "selections", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"], [1, "mb-6", "btn", "btn-soft-danger", "flex", "items-center", "justify-center", 3, "click"], [1, "material-icons-outlined", "mr-2", "text-red"]], template: function OperationalLocationListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "lib-tooltip", 5)(7, "button", 6);
        \u0275\u0275listener("click", function OperationalLocationListComponent_Template_button_click_7_listener() {
          return ctx.addOperationalLocation();
        });
        \u0275\u0275elementStart(8, "i", 7);
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "Add Operational Location");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "app-admin-search-field", 9);
        \u0275\u0275listener("filter", function OperationalLocationListComponent_Template_app_admin_search_field_filter_13_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, OperationalLocationListComponent_Conditional_14_Template, 2, 0, "div", 10)(15, OperationalLocationListComponent_Conditional_15_Template, 6, 0, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "app-admin-table", 12);
        \u0275\u0275listener("paginateItems", function OperationalLocationListComponent_Template_app_admin_table_paginateItems_16_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function OperationalLocationListComponent_Template_app_admin_table_openExtras_16_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function OperationalLocationListComponent_Template_app_admin_table_sortChange_16_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function OperationalLocationListComponent_Template_app_admin_table_selectionToggle_16_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function OperationalLocationListComponent_Template_app_admin_table_viewItem_16_listener($event) {
          return ctx.viewOperationalLocation($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "app-admin-modal", 13);
        \u0275\u0275listener("closed", function OperationalLocationListComponent_Template_app_admin_modal_closed_17_listener() {
          return ctx.listCompose.toggleModal();
        })("confirm", function OperationalLocationListComponent_Template_app_admin_modal_confirm_17_listener($event) {
          return ctx.listCompose.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(28, _c2, \u0275\u0275pureFunction0(26, _c0), \u0275\u0275pureFunction0(27, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("popper", "Add new operational location here. Operational locations are used for pickups, deliveries, returns and other complaint related issues");
        \u0275\u0275advance(7);
        \u0275\u0275property("options", \u0275\u0275pureFunction3(34, _c6, \u0275\u0275pureFunction0(31, _c3), \u0275\u0275pureFunction0(32, _c4), \u0275\u0275pureFunction0(33, _c5)));
        \u0275\u0275advance();
        \u0275\u0275conditional(14, ctx.listCompose.selections.length === 0 ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.listCompose.selections.length > 0 ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", true)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("selections", ctx.listCompose.selections)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction5(43, _c12, \u0275\u0275pureFunction0(38, _c7), \u0275\u0275pureFunction0(39, _c8), \u0275\u0275pureFunction0(40, _c9), \u0275\u0275pureFunction0(41, _c10), \u0275\u0275pureFunction0(42, _c11)))("actions", ctx.actions);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OperationalLocationListComponent, { className: "OperationalLocationListComponent" });
})();
export {
  OperationalLocationListComponent
};
//# sourceMappingURL=chunk-M5XLSLDA.js.map
