import {
  AdminDateFilterFieldComponent
} from "./chunk-JXJWYDSB.js";
import {
  AdminModalComponent
} from "./chunk-X7WNMWNF.js";
import {
  AdminSearchFieldComponent
} from "./chunk-A3XL6Y7L.js";
import {
  AdminTableComponent
} from "./chunk-EWIFM267.js";
import {
  ListComposeAdminPanel
} from "./chunk-ANHFC4IG.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
import {
  scrollToTop
} from "./chunk-G2DKIAK6.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import {
  CompanySubscription,
  navByBus,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  NgClass,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/subscriptions/subscription-list-sharable/subscription-list-sharable.component.ts
var _c0 = (a0) => ({ "h-[60px]": a0 });
var _c1 = () => ({ label: "Name", value: "name" });
var _c2 = () => ({ label: "Amount", value: "amount" });
var _c3 = () => ({ label: "status", value: "status" });
var _c4 = (a0, a1, a2) => [a0, a1, a2];
var _c5 = () => ({ header: "Name", field: "name", isDefaultField: true, sortable: true });
var _c6 = () => ({ header: "Amount", field: "amount", isMoneyValue: true, sortable: true });
var _c7 = () => ({ header: "Start Date", field: "startDate", isDateValue: true, sortable: true });
var _c8 = () => ({ header: "End Date", field: "endDate", isDateValue: true, sortable: true });
var _c9 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function SubscriptionListSharableComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "app-admin-date-filter-field", 9);
    \u0275\u0275listener("filter", function SubscriptionListSharableComponent_Conditional_5_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function SubscriptionListSharableComponent_Conditional_5_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function SubscriptionListSharableComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 10);
    \u0275\u0275listener("click", function SubscriptionListSharableComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.openDeleteManyModal("Delete Subscriptions", "Are You Sure You Want To Delete Selected Subscriptions?"));
    });
    \u0275\u0275elementStart(2, "i", 11);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Delete All");
    \u0275\u0275elementEnd()()();
  }
}
var SubscriptionListSharableComponent = class _SubscriptionListSharableComponent {
  constructor(router, eventbus, windowService, toastr) {
    this.router = router;
    this.eventbus = eventbus;
    this.windowService = windowService;
    this.toastr = toastr;
    this.listCompose = new ListComposeAdminPanel(CompanySubscription, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.actions = [
      {
        label: "View",
        icon: "edit",
        event: (companySub) => {
          this.viewSubscription(companySub);
        }
      },
      {
        label: "Delete",
        icon: "delete",
        event: (companySub) => {
          this.listCompose.openDeleteOneModal(companySub._id, "Delete Subscription", "Are You Sure You Want To Delete This Subscription?");
        }
      }
    ];
  }
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  ngOnInit() {
    this.listCompose.resetPagination();
    if (this.companyId) {
      this.listCompose.filterProps = {
        propFilter: {
          company: this.companyId
        }
      };
    }
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, {
      filterBy: (filter) => {
        if (this.companyId) {
          filter.propFilter = __spreadProps(__spreadValues({}, filter.propFilter), {
            company: this.companyId
          });
        }
        this.listCompose.filterBy(filter.propFilter);
      }
    });
    this.cleanup = cleanup;
    this.listCompose.getDataArr();
    scrollToTop(this.windowService);
  }
  viewSubscription(companySub) {
    this.navigateByBus(["/subscription/package-detail"], "oneCompanySubscription", companySub);
  }
  ngOnDestroy() {
    this.listCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function SubscriptionListSharableComponent_Factory(t) {
      return new (t || _SubscriptionListSharableComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionListSharableComponent, selectors: [["app-subscription-list-sharable"]], hostBindings: function SubscriptionListSharableComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function SubscriptionListSharableComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { companyId: "companyId" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 43, consts: [[1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "justify-between", "h-[60px]", 3, "ngClass"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "mb-6"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [1, "absolute", "right-0", "top-0"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "currentActivePopupId", "dataArr", "selections", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"], [1, "mb-6", "btn", "btn-soft-danger", "flex", "items-center", "justify-center", 3, "click"], [1, "material-icons-outlined", "mr-2", "text-red"]], template: function SubscriptionListSharableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "app-admin-search-field", 4);
        \u0275\u0275listener("filter", function SubscriptionListSharableComponent_Template_app_admin_search_field_filter_4_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, SubscriptionListSharableComponent_Conditional_5_Template, 2, 0, "div", 5)(6, SubscriptionListSharableComponent_Conditional_6_Template, 6, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "app-admin-table", 7);
        \u0275\u0275listener("paginateItems", function SubscriptionListSharableComponent_Template_app_admin_table_paginateItems_7_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function SubscriptionListSharableComponent_Template_app_admin_table_openExtras_7_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function SubscriptionListSharableComponent_Template_app_admin_table_sortChange_7_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function SubscriptionListSharableComponent_Template_app_admin_table_selectionToggle_7_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function SubscriptionListSharableComponent_Template_app_admin_table_viewItem_7_listener($event) {
          return ctx.viewSubscription($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "app-admin-modal", 8);
        \u0275\u0275listener("closed", function SubscriptionListSharableComponent_Template_app_admin_modal_closed_8_listener() {
          return ctx.listCompose.toggleModal();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c0, ctx.listCompose.selections.length));
        \u0275\u0275advance(2);
        \u0275\u0275property("options", \u0275\u0275pureFunction3(30, _c4, \u0275\u0275pureFunction0(27, _c1), \u0275\u0275pureFunction0(28, _c2), \u0275\u0275pureFunction0(29, _c3)));
        \u0275\u0275advance();
        \u0275\u0275conditional(5, ctx.listCompose.selections.length === 0 ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(6, ctx.listCompose.selections.length > 0 ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", true)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("selections", ctx.listCompose.selections)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction4(38, _c9, \u0275\u0275pureFunction0(34, _c5), \u0275\u0275pureFunction0(35, _c6), \u0275\u0275pureFunction0(36, _c7), \u0275\u0275pureFunction0(37, _c8)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.listCompose.showModal)("title", ctx.listCompose.modalTitle)("message", ctx.listCompose.modalMsg)("cancelButton", ctx.listCompose.modalCancelButton)("cancelText", ctx.listCompose.modalCancelText)("confirmText", ctx.listCompose.modalConfirmText)("confirmButon", ctx.listCompose.modalConfirmButton);
      }
    }, dependencies: [
      RouterModule,
      AdminModalComponent,
      AdminTableComponent,
      NgClass,
      AdminSearchFieldComponent,
      AdminDateFilterFieldComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionListSharableComponent, { className: "SubscriptionListSharableComponent" });
})();

export {
  SubscriptionListSharableComponent
};
//# sourceMappingURL=chunk-BKILUOLD.js.map
