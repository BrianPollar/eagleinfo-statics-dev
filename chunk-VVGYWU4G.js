import {
  AuditLogBase
} from "./chunk-ABZXXWE3.js";
import {
  AdminTopBarComponent
} from "./chunk-RLWZ2B5Z.js";
import {
  AdminModalComponent
} from "./chunk-X7WNMWNF.js";
import {
  AdminListDropdownComponent,
  AdminPaginatorComponent
} from "./chunk-TFHAZXT7.js";
import "./chunk-ANHFC4IG.js";
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
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import {
  AppNameService,
  FrontendLogger
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  DatePipe,
  Meta,
  Title,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/pipes/nested-data.pipe.ts
var NestedDataPipe = class _NestedDataPipe {
  transform(data, key) {
    FrontendLogger.debug("NestedDataPipe:transform:: - data: %data, key: %key", data, key);
    if (!data || !key) {
      return "";
    }
    return data[key] || "";
  }
  static {
    this.\u0275fac = function NestedDataPipe_Factory(t) {
      return new (t || _NestedDataPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "nestedData", type: _NestedDataPipe, pure: true, standalone: true });
  }
};

// projects/admin-panel/src/app/components/pane/track/audit-log/audit-log-list/audit-log-list.component.ts
var _forTrack0 = ($index, $item) => $item._id;
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Tracked Modify Operations List", icon: "list" });
var _c2 = (a0, a1) => [a0, a1];
function AuditLogListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 22);
    \u0275\u0275listener("click", function AuditLogListComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.openDeleteManyModal("Delete Selected", "Are you sure to delete selected items?"));
    });
    \u0275\u0275elementStart(2, "i", 23);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Delete Selected ");
    \u0275\u0275elementEnd()();
  }
}
function AuditLogListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275listener("click", function AuditLogListComponent_Conditional_22_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.listCompose.sortBy("urId", "asc");
      return \u0275\u0275resetView(ctx_r1.sortStates.id = "asc");
    });
    \u0275\u0275text(1, " arrow_downward ");
    \u0275\u0275elementEnd();
  }
}
function AuditLogListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275listener("click", function AuditLogListComponent_Conditional_23_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.listCompose.sortBy("urId", "desc");
      return \u0275\u0275resetView(ctx_r1.sortStates.id = "desc");
    });
    \u0275\u0275text(1, " arrow_upward ");
    \u0275\u0275elementEnd();
  }
}
function AuditLogListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275listener("click", function AuditLogListComponent_Conditional_30_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.listCompose.sortBy("info", "asc");
      return \u0275\u0275resetView(ctx_r1.sortStates.info = "asc");
    });
    \u0275\u0275text(1, " arrow_downward ");
    \u0275\u0275elementEnd();
  }
}
function AuditLogListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275listener("click", function AuditLogListComponent_Conditional_31_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.listCompose.sortBy("info", "desc");
      return \u0275\u0275resetView(ctx_r1.sortStates.info = "desc");
    });
    \u0275\u0275text(1, " arrow_upward ");
    \u0275\u0275elementEnd();
  }
}
function AuditLogListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275listener("click", function AuditLogListComponent_Conditional_38_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.listCompose.sortBy("createdAt", "asc");
      return \u0275\u0275resetView(ctx_r1.sortStates.date = "asc");
    });
    \u0275\u0275text(1, " arrow_downward ");
    \u0275\u0275elementEnd();
  }
}
function AuditLogListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275listener("click", function AuditLogListComponent_Conditional_39_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.listCompose.sortBy("createdAt", "desc");
      return \u0275\u0275resetView(ctx_r1.sortStates.date = "desc");
    });
    \u0275\u0275text(1, " arrow_upward ");
    \u0275\u0275elementEnd();
  }
}
function AuditLogListComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 19)(1, "td", 25)(2, "div", 26)(3, "input", 27);
    \u0275\u0275listener("change", function AuditLogListComponent_For_44_Template_input_change_3_listener() {
      const edited_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.toggleSelection([edited_r10._id]));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "label", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 25)(6, "a", 29);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "nestedData");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 25);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "nestedData");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 25);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 25)(16, "app-admin-list-dropdown", 30);
    \u0275\u0275listener("toggleDropdown", function AuditLogListComponent_For_44_Template_app_admin_list_dropdown_toggleDropdown_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.openExtras($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const edited_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.listCompose.selections.includes(edited_r10._id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 7, edited_r10.parent, "urId"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 10, edited_r10.parent, "info"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, edited_r10.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275property("currentActivePopupId", ctx_r1.listCompose.currentActivePopupId)("item", edited_r10)("actions", ctx_r1.actions);
  }
}
var AuditLogListComponent = class _AuditLogListComponent extends AuditLogBase {
  constructor(windowService, router, eventbus, toastr, route, apNme, mainBarTitle, metaTagService, titleService) {
    super(windowService, router, eventbus, toastr, route, mainBarTitle);
    this.windowService = windowService;
    this.router = router;
    this.eventbus = eventbus;
    this.toastr = toastr;
    this.route = route;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.sortStates = {
      id: "asc",
      info: "asc",
      date: "asc"
    };
  }
  ngOnInit() {
    this.init();
    this.mainBarTitle.title = "User Activity";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily manage and view user activity for your organization to ensure effective tracking and engagement."
    });
    scrollToTop(this.windowService);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.\u0275fac = function AuditLogListComponent_Factory(t) {
      return new (t || _AuditLogListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditLogListComponent, selectors: [["app-audit-log-list"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 47, vars: 28, consts: [["title", "Tracked Modify Operations List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12"], [1, "col-span-12", "md:col-span-4"], [1, "grid", "grid-cols-1"], [1, "overflow-auto", "!min-h-[calc(100vh-400px)]"], [1, "table", "w-full", "table-striped", "table-hover", "rtl:text-left"], [1, "text-left", "bg-gray-100", "rtl:text-right"], [1, "whitespace-nowrap", "w-[20px]", "p-3"], [1, "mx-3", "text-center", "lg:mx-0", "form-check", "text-16"], ["type", "checkbox", "id", "ordercheck", 1, "rounded", "cursor-pointer", "border-gray-50", "border-z", "form-check-input", "ring-0", "focus:ring-1", "focus:ring-blue-100", "ring-offset-0", 3, "click", "checked"], ["for", "ordercheck", 1, "form-check-label"], [1, "whitespace-nowrap", "p-3", "border-b-0", "rtl:text-right"], [1, "flex", "flex-nowrap", "flex-row", "gap-1"], [1, "pt-2"], [1, ""], [1, "material-icons-outlined", "flex-1", "p-1", "pt-2", "cursor-pointer"], [1, "whitespace-nowrap", "p-3", "border-b-0", "rtl:text-right", 2, "width", "120px"], [1, "hover:bg-gray-50"], [3, "pageChange", "limit", "offset", "total", "showingUpper", "showingLower", "currentIndex"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["type", "button", 1, "mb-6", "bg-gray-50", "border-transparent", "btn", "hover:bg-gray-200", 3, "click"], [1, "mr-1", "material-icons-outlined"], [3, "click"], [1, "p-3"], [1, "mx-3", "text-center", "lg:mx-0", "form-check", "text-16", "lg:text-left"], ["type", "checkbox", "id", "ordercheck1", 1, "rounded", "cursor-pointer", "border-gray-50", "border-z", "form-check-input", "ring-0", "focus:ring-1", "focus:ring-blue-100", "ring-offset-0", 3, "change", "checked"], ["for", "ordercheck1", 1, "form-check-label"], ["href", "javascript: void(0);", 1, "font-bold"], [3, "toggleDropdown", "currentActivePopupId", "item", "actions"]], template: function AuditLogListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
        \u0275\u0275template(6, AuditLogListComponent_Conditional_6_Template, 5, 0, "div");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "table", 7)(10, "thead")(11, "tr", 8)(12, "th", 9)(13, "div", 10)(14, "input", 11);
        \u0275\u0275listener("click", function AuditLogListComponent_Template_input_click_14_listener() {
          return ctx.listCompose.ckeckUncheckAllLists();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "label", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "th", 13)(17, "div", 14)(18, "div", 15);
        \u0275\u0275text(19, "Reference ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 16)(21, "i", 17);
        \u0275\u0275template(22, AuditLogListComponent_Conditional_22_Template, 2, 0, "span")(23, AuditLogListComponent_Conditional_23_Template, 2, 0, "span");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "th", 13)(25, "div", 14)(26, "div", 15);
        \u0275\u0275text(27, "Info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 16)(29, "i", 17);
        \u0275\u0275template(30, AuditLogListComponent_Conditional_30_Template, 2, 0, "span")(31, AuditLogListComponent_Conditional_31_Template, 2, 0, "span");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "th", 13)(33, "div", 14)(34, "div", 15);
        \u0275\u0275text(35, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 16)(37, "i", 17);
        \u0275\u0275template(38, AuditLogListComponent_Conditional_38_Template, 2, 0, "span")(39, AuditLogListComponent_Conditional_39_Template, 2, 0, "span");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "th", 18);
        \u0275\u0275text(41, " Action ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "tbody");
        \u0275\u0275repeaterCreate(43, AuditLogListComponent_For_44_Template, 17, 15, "tr", 19, _forTrack0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "app-admin-paginator", 20);
        \u0275\u0275listener("pageChange", function AuditLogListComponent_Template_app_admin_paginator_pageChange_45_listener($event) {
          return ctx.listCompose.paginateItems($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(46, "app-admin-modal", 21);
        \u0275\u0275listener("closed", function AuditLogListComponent_Template_app_admin_modal_closed_46_listener() {
          return ctx.listCompose.toggleModal();
        })("confirm", function AuditLogListComponent_Template_app_admin_modal_confirm_46_listener($event) {
          return ctx.listCompose.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(25, _c2, \u0275\u0275pureFunction0(23, _c0), \u0275\u0275pureFunction0(24, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(6, ctx.listCompose.selections.length > 0 ? 6 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275property("checked", ctx.listCompose.selections && ctx.listCompose.dataArr && ctx.listCompose.selections.length > 0 && ctx.listCompose.selections.length === ctx.listCompose.dataArr.length);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(22, ctx.sortStates.id === "desc" ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(23, ctx.sortStates.id === "asc" ? 23 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(30, ctx.sortStates.info === "desc" ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(31, ctx.sortStates.info === "asc" ? 31 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(38, ctx.sortStates.date === "desc" ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(39, ctx.sortStates.date === "asc" ? 39 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.listCompose.dataArr);
        \u0275\u0275advance(2);
        \u0275\u0275property("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("total", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.listCompose.showModal)("title", ctx.listCompose.modalTitle)("message", ctx.listCompose.modalMsg)("cancelButton", ctx.listCompose.modalCancelButton)("cancelText", ctx.listCompose.modalCancelText)("confirmText", ctx.listCompose.modalConfirmText)("confirmButon", ctx.listCompose.modalConfirmButton);
      }
    }, dependencies: [
      RouterModule,
      DatePipe,
      NestedDataPipe,
      AdminModalComponent,
      AdminPaginatorComponent,
      AdminListDropdownComponent,
      AdminPageContentComponent,
      AdminTopBarComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditLogListComponent, { className: "AuditLogListComponent" });
})();
export {
  AuditLogListComponent
};
//# sourceMappingURL=chunk-VVGYWU4G.js.map
