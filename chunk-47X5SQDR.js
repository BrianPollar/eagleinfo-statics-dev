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
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  Company,
  FrontendLogger,
  UnreliableVendor,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/base/un-reliable/un-reliable-vendor/un-reliable-vendor-list-base.ts
var UnReliableVendorListBase = class {
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
    this.listCompose = new ListComposeAdminPanel(Company, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.actions = [
      {
        label: "View",
        icon: "visibility",
        event: (unreliableVendor) => this.viewVendor(unreliableVendor)
      },
      {
        label: "Delete",
        icon: "delete",
        event: (unreliableVendor) => this.removeFromList(unreliableVendor)
      }
    ];
  }
  init() {
    return __async(this, null, function* () {
      yield this.getUnreliableVendors();
      if (this.unreliableVendors?.flaggedCompanies && this.unreliableVendors?.flaggedCompanies?.length > 0) {
        this.listCompose.filterProps = {
          propFilter: {
            _id: this.unreliableVendors?.flaggedCompanies.map((val) => val.company) || []
          }
        };
        this.listCompose.getDataArr();
      }
      this.mainBarTitle.title = "Unreliable Companies";
      this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
      this.metaTagService.updateTag({
        name: "description",
        content: `Efficiently manage and comprehensively monitor your unreliable companies,
      empowering you to maintain financial clarity and make informed decisions
      regarding your fiscal responsibilities and opportunities for savings.`
      });
      scrollToTop(this.windowService);
    });
  }
  getUnreliableVendors() {
    return __async(this, null, function* () {
      try {
        const { dataArr } = yield UnreliableVendor.getAll();
        this.unreliableVendors = dataArr[0];
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  viewVendor(company) {
    this.router.navigate(["/view-company" + company._id]);
  }
  destroy() {
    this.listCompose.cleanup?.();
  }
};

// projects/admin-panel/src/app/components/pane/un-reliable/un-reliable-vendor/un-reliable-vendor/un-reliable-vendor-list/un-reliable-vendor-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Unreliable Company List", icon: "assessment" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "Name", value: "name" });
var _c4 = () => ({ label: "Enforcer", value: "enforcer" });
var _c5 = () => ({ header: "AutomaticItemTax ID", field: "_id", isDefaultField: true, sortable: true });
var _c6 = () => ({ header: "Name", field: "name", sortable: true, removeWhen: "small" });
var _c7 = () => ({ header: "Date Added", field: "createdAt", sortable: true, removeWhen: "medium" });
var _c8 = () => ({ header: "Enforcer", field: "enforcer", sortable: true, removeWhen: "large" });
var _c9 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function UnReliableVendorListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-admin-date-filter-field", 9);
    \u0275\u0275listener("filter", function UnReliableVendorListComponent_Conditional_7_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function UnReliableVendorListComponent_Conditional_7_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
var UnReliableVendorListComponent = class _UnReliableVendorListComponent extends UnReliableVendorListBase {
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
      modalTitle: "Remove Vendor From List",
      modalMsg: "Are you sure you want to remove this item?",
      modalCancelButton: true,
      modalCancelText: "Cancel",
      modalConfirmText: "Remove",
      modalConfirmButton: true
    };
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  removeFromList(company) {
    this.company = company;
    this.toggleModalDelete();
  }
  toggleModalDelete() {
    this.deleteModalOptions.showModal = !this.deleteModalOptions.showModal;
  }
  onModalDeleteConfirm(event) {
    return __async(this, null, function* () {
      if (!event) {
        return;
      }
      try {
        yield UnreliableVendor.modify(this.company._id, "red", "remove");
        this.toastr.success("Vendor removed from red list successfully");
        this.listCompose.getDataArr();
      } catch (error) {
        FrontendLogger.error(error);
        this.toastr.error("Failed to remove vendor from red list");
      }
    });
  }
  static {
    this.\u0275fac = function UnReliableVendorListComponent_Factory(t) {
      return new (t || _UnReliableVendorListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnReliableVendorListComponent, selectors: [["app-un-reliable-vendor-list"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 10, vars: 43, consts: [["title", "Unreliable Company List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "mb-4"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "selections", "currentActivePopupId", "dataArr", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"]], template: function UnReliableVendorListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "app-admin-search-field", 5);
        \u0275\u0275listener("filter", function UnReliableVendorListComponent_Template_app_admin_search_field_filter_6_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, UnReliableVendorListComponent_Conditional_7_Template, 2, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "app-admin-table", 7);
        \u0275\u0275listener("paginateItems", function UnReliableVendorListComponent_Template_app_admin_table_paginateItems_8_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function UnReliableVendorListComponent_Template_app_admin_table_openExtras_8_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function UnReliableVendorListComponent_Template_app_admin_table_sortChange_8_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function UnReliableVendorListComponent_Template_app_admin_table_selectionToggle_8_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function UnReliableVendorListComponent_Template_app_admin_table_viewItem_8_listener($event) {
          return ctx.viewVendor($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "app-admin-modal", 8);
        \u0275\u0275listener("closed", function UnReliableVendorListComponent_Template_app_admin_modal_closed_9_listener() {
          return ctx.toggleModalDelete();
        })("confirm", function UnReliableVendorListComponent_Template_app_admin_modal_confirm_9_listener($event) {
          return ctx.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(26, _c2, \u0275\u0275pureFunction0(24, _c0), \u0275\u0275pureFunction0(25, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("options", \u0275\u0275pureFunction2(31, _c2, \u0275\u0275pureFunction0(29, _c3), \u0275\u0275pureFunction0(30, _c4)));
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.listCompose.selections.length === 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", false)("selections", ctx.listCompose.selections)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction4(38, _c9, \u0275\u0275pureFunction0(34, _c5), \u0275\u0275pureFunction0(35, _c6), \u0275\u0275pureFunction0(36, _c7), \u0275\u0275pureFunction0(37, _c8)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.listCompose.showModal)("title", ctx.listCompose.modalTitle)("message", ctx.listCompose.modalMsg)("cancelButton", ctx.listCompose.modalCancelButton)("cancelText", ctx.listCompose.modalCancelText)("confirmText", ctx.listCompose.modalConfirmText)("confirmButon", ctx.listCompose.modalConfirmButton);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnReliableVendorListComponent, { className: "UnReliableVendorListComponent" });
})();
export {
  UnReliableVendorListComponent
};
//# sourceMappingURL=chunk-47X5SQDR.js.map
