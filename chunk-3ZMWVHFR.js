import {
  AdminTopBarComponent
} from "./chunk-RLWZ2B5Z.js";
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
import {
  FormControl
} from "./chunk-H6XV6YF3.js";
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  EcommerceOrder,
  navByBus
} from "./chunk-MC4HAW4O.js";
import {
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  Meta,
  Title,
  debounceTime,
  init_esm,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵresolveDocument
} from "./chunk-4EXDEK5V.js";
import "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/company-related/ecommerce-order/ecommerce-order-list/ecommerce-order-list.component.ts
init_esm();
var _c0 = () => ({ name: "Dashboard", icon: "home", link: "/" });
var _c1 = () => ({ name: "Orders List", icon: "" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "EcommerceOrder ID", value: "urId" });
var _c4 = () => ({ label: "Billing Name", value: "billingName" });
var _c5 = () => ({ label: "Status", value: "status" });
var _c6 = (a0, a1, a2) => [a0, a1, a2];
var _c7 = () => ({ header: "Order Number", field: "ecommerceOrderNumber", sortable: true });
var _c8 = () => ({ header: "Date", field: "createdAt", sortable: true });
var _c9 = () => ({ header: "Billing User", field: "invoice.invoiceRelated.billingUserName", sortable: true });
var _c10 = () => ({ header: "Amount", field: "invoice.invoiceRelated.totalCost", isMoneyValue: true, sortable: true });
var _c11 = () => ({ header: "Status", field: "status", sortable: true });
var _c12 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var EcommerceOrderListComponent = class _EcommerceOrderListComponent {
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
    this.listCompose = new ListComposeAdminPanel(EcommerceOrder, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.actions = [
      {
        label: "View",
        icon: "visibility",
        event: (item) => this.viewEcommerceOrder(item)
      },
      {
        label: "Update",
        icon: "edit",
        event: (item) => this.updateOrder(item)
      },
      {
        label: "Delete",
        icon: "delete",
        event: (item) => this.listCompose.openDeleteOneModal(item._id, "Delete EcommerceOrder", "Are You Sure You Want To Delete This EcommerceOrder?")
      }
    ];
    this.priceControl = new FormControl();
  }
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  ngOnInit() {
    this.mainBarTitle.title = "Ecommerce Orders - Manage Orders";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Efficiently manage and view your orders for streamlined tracking and organization."
    });
    this.listCompose.getDataArr();
    this.priceControl.valueChanges.pipe(debounceTime(700)).subscribe((val) => {
      this.listCompose.filterBy({ amount: val });
    });
    scrollToTop(this.windowService);
  }
  updateOrder(order) {
    this.navigateByBus(["/ecommerce-order/update"], "updateOrder", order);
  }
  determineUrl(order) {
    if (order.invoice.invoiceRelated.billingUserPhoto) {
      return order.invoice.invoiceRelated.billingUserPhoto;
    } else {
      return "assets/imgs/person.png";
    }
  }
  viewEcommerceOrder(order) {
    this.navigateByBus(["/ecommerce-order/view/" + order.ecommerceOrderNumber], "oneItem", order);
  }
  ngOnDestroy() {
    this.cleanup?.();
    this.listCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function EcommerceOrderListComponent_Factory(t) {
      return new (t || _EcommerceOrderListComponent)(\u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EcommerceOrderListComponent, selectors: [["app-ecommerce-order-list"]], hostBindings: function EcommerceOrderListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function EcommerceOrderListComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 46, consts: [["title", "Orders List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "justify-between"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "h-[60px]"], [3, "filter", "options"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "currentActivePopupId", "dataArr", "selections", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"]], template: function EcommerceOrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "app-admin-search-field", 5);
        \u0275\u0275listener("filter", function EcommerceOrderListComponent_Template_app_admin_search_field_filter_6_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "app-admin-table", 6);
        \u0275\u0275listener("paginateItems", function EcommerceOrderListComponent_Template_app_admin_table_paginateItems_7_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function EcommerceOrderListComponent_Template_app_admin_table_openExtras_7_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function EcommerceOrderListComponent_Template_app_admin_table_sortChange_7_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function EcommerceOrderListComponent_Template_app_admin_table_selectionToggle_7_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function EcommerceOrderListComponent_Template_app_admin_table_viewItem_7_listener($event) {
          return ctx.viewEcommerceOrder($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(8, "app-admin-modal", 7);
        \u0275\u0275listener("closed", function EcommerceOrderListComponent_Template_app_admin_modal_closed_8_listener() {
          return ctx.listCompose.toggleModal();
        })("confirm", function EcommerceOrderListComponent_Template_app_admin_modal_confirm_8_listener($event) {
          return ctx.listCompose.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(25, _c2, \u0275\u0275pureFunction0(23, _c0), \u0275\u0275pureFunction0(24, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("options", \u0275\u0275pureFunction3(31, _c6, \u0275\u0275pureFunction0(28, _c3), \u0275\u0275pureFunction0(29, _c4), \u0275\u0275pureFunction0(30, _c5)));
        \u0275\u0275advance();
        \u0275\u0275property("selectable", true)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("selections", ctx.listCompose.selections)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction5(40, _c12, \u0275\u0275pureFunction0(35, _c7), \u0275\u0275pureFunction0(36, _c8), \u0275\u0275pureFunction0(37, _c9), \u0275\u0275pureFunction0(38, _c10), \u0275\u0275pureFunction0(39, _c11)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.listCompose.showModal)("title", ctx.listCompose.modalTitle)("message", ctx.listCompose.modalMsg)("cancelButton", ctx.listCompose.modalCancelButton)("cancelText", ctx.listCompose.modalCancelText)("confirmText", ctx.listCompose.modalConfirmText)("confirmButon", ctx.listCompose.modalConfirmButton);
      }
    }, dependencies: [
      RouterModule,
      AdminModalComponent,
      AdminTableComponent,
      AdminPageContentComponent,
      AdminSearchFieldComponent,
      AdminTopBarComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EcommerceOrderListComponent, { className: "EcommerceOrderListComponent" });
})();
export {
  EcommerceOrderListComponent
};
//# sourceMappingURL=chunk-3ZMWVHFR.js.map
