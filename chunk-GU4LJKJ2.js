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
  AdminListDropdownComponent,
  AdminPaginatorComponent
} from "./chunk-TFHAZXT7.js";
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
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  DataBin,
  navByBus
} from "./chunk-MC4HAW4O.js";
import {
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  DatePipe,
  Meta,
  NgClass,
  Subject,
  Title,
  init_esm,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/track/data-bin-list/data-bin-list.component.ts
init_esm();
var _forTrack0 = ($index, $item) => $item._id;
var _c0 = () => ({ name: "Dashboard", icon: "home", link: "/" });
var _c1 = () => ({ name: "Deleted Data List", icon: "delete" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "ID", value: "urId" });
var _c4 = (a0) => [a0];
var _c5 = (a0, a1, a2) => ({ "custom-checkbox": a0, "custom-checkbox-checked-full": a1, "custom-checkbox-checked-half": a2 });
function DataBinListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-admin-date-filter-field", 27);
    \u0275\u0275listener("filter", function DataBinListComponent_Conditional_7_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function DataBinListComponent_Conditional_7_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function DataBinListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 28);
    \u0275\u0275listener("click", function DataBinListComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.openDeleteManyModal("Delete Selected", "Are you sure to delete selected items? This will delete them permanently"));
    });
    \u0275\u0275elementStart(2, "i", 29);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Delete All");
    \u0275\u0275elementEnd()()();
  }
}
function DataBinListComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275listener("click", function DataBinListComponent_Conditional_26_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.listCompose.sortBy("urId", "asc");
      return \u0275\u0275resetView(ctx_r1.sortStates.id = "asc");
    });
    \u0275\u0275text(1, " arrow_downward ");
    \u0275\u0275elementEnd();
  }
}
function DataBinListComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275listener("click", function DataBinListComponent_Conditional_27_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.listCompose.sortBy("urId", "desc");
      return \u0275\u0275resetView(ctx_r1.sortStates.id = "desc");
    });
    \u0275\u0275text(1, " arrow_upward ");
    \u0275\u0275elementEnd();
  }
}
function DataBinListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275listener("click", function DataBinListComponent_Conditional_34_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.listCompose.sortBy("info", "asc");
      return \u0275\u0275resetView(ctx_r1.sortStates.info = "asc");
    });
    \u0275\u0275text(1, " arrow_downward ");
    \u0275\u0275elementEnd();
  }
}
function DataBinListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275listener("click", function DataBinListComponent_Conditional_35_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.listCompose.sortBy("names", "desc");
      return \u0275\u0275resetView(ctx_r1.sortStates.info = "desc");
    });
    \u0275\u0275text(1, " arrow_upward ");
    \u0275\u0275elementEnd();
  }
}
function DataBinListComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275listener("click", function DataBinListComponent_Conditional_42_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.listCompose.sortBy("createdAt", "asc");
      return \u0275\u0275resetView(ctx_r1.sortStates.date = "asc");
    });
    \u0275\u0275text(1, " arrow_downward ");
    \u0275\u0275elementEnd();
  }
}
function DataBinListComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275listener("click", function DataBinListComponent_Conditional_43_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.listCompose.sortBy("createdAt", "desc");
      return \u0275\u0275resetView(ctx_r1.sortStates.date = "desc");
    });
    \u0275\u0275text(1, " arrow_upward ");
    \u0275\u0275elementEnd();
  }
}
function DataBinListComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 24)(1, "td", 31)(2, "div", 32)(3, "input", 33);
    \u0275\u0275listener("change", function DataBinListComponent_For_48_Template_input_change_3_listener() {
      const dleted_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.toggleSelection([dleted_r11._id]));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "label", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 31)(6, "a", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 31);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 31)(14, "app-admin-list-dropdown", 36);
    \u0275\u0275listener("toggleDropdown", function DataBinListComponent_For_48_Template_app_admin_list_dropdown_toggleDropdown_14_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.openExtras($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dleted_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.listCompose.selections.includes(dleted_r11._id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", dleted_r11._id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (dleted_r11.info == null ? null : dleted_r11.info.desc) || "NA", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, dleted_r11.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275property("currentActivePopupId", ctx_r1.listCompose.currentActivePopupId)("item", dleted_r11)("actions", ctx_r1.actions);
  }
}
var DataBinListComponent = class _DataBinListComponent {
  constructor(windowService, router, eventbus, apNme, mainBarTitle, toastr, metaTagService, titleService) {
    this.windowService = windowService;
    this.router = router;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.toastr = toastr;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.isRestoreMany = false;
    this.dest$ = new Subject();
    this.sortStates = {
      id: "asc",
      info: "asc",
      date: "asc"
    };
    this.listCompose = new ListComposeAdminPanel(DataBin, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.actions = [
      {
        label: "Restore",
        icon: "edit",
        event: (dataBin) => this.restore(dataBin)
      },
      {
        label: "Delete",
        icon: "delete",
        event: (dataBin) => this.listCompose.openDeleteOneModal(dataBin._id, "Delete Data Bin", "Are You Sure You Want To Delete This Data Bin?")
      }
    ];
  }
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  ngOnInit() {
    this.mainBarTitle.title = "Track Deletes";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily manage and view user accounts for your organization to ensure effective tracking and oversight."
    });
    this.listCompose.getDataArr();
    scrollToTop(this.windowService);
  }
  restore(dataBin) {
    return __async(this, null, function* () {
      yield dataBin.restore();
      this.listCompose.selections = [];
      this.listCompose.offset -= this.listCompose.limit;
      this.listCompose.getDataArr();
    });
  }
  restoreMany() {
    return __async(this, null, function* () {
      if (this.isRestoreMany) {
        this.toastr.error("Wait for the current restore process to complete");
        return;
      }
      this.isRestoreMany = true;
      const response = yield DataBin.restoreMany({ _ids: this.listCompose.selections });
      this.isRestoreMany = false;
      if (response.success) {
        this.listCompose.selections = [];
        this.listCompose.offset -= this.listCompose.limit;
        this.listCompose.getDataArr();
      }
    });
  }
  viewActivity(parent, header) {
    this.navigateByBus(["/activity/"], "viewActivity", {
      parent,
      header
    });
  }
  toggleSelectAll() {
    if (!this.listCompose.limit) {
      return;
    }
    if (this.listCompose.selections && this.listCompose.selections.length <= 0) {
      const startPos = this.listCompose.limit * (this.listCompose.currentIndex - 1);
      const endPos = startPos + this.listCompose.limit;
      const selectedIds = this.listCompose.dataArr.slice(startPos, endPos).map((item) => item._id);
      this.listCompose.selections = selectedIds;
    } else {
      this.listCompose.selections = [];
    }
  }
  ngOnDestroy() {
    this.cleanup?.();
    this.listCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function DataBinListComponent_Factory(t) {
      return new (t || _DataBinListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DataBinListComponent, selectors: [["app-data-bin-list"]], hostBindings: function DataBinListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function DataBinListComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 51, vars: 37, consts: [["title", "Deleted Data List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "mb-4"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "h-[60px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [1, "absolute", "right-0", "top-0"], [1, "grid", "grid-cols-1"], [1, "overflow-auto", "!min-h-[calc(100vh-400px)]"], [1, "table", "w-full", "table-striped", "table-hover", "rtl:text-left"], [1, "text-left", "bg-default-white-shade", "rtl:text-right"], [1, "whitespace-nowrap", "w-[20px]", "p-3"], [1, "mx-3", "text-center", "lg:mx-0", "form-check", "text-16"], [1, "custom-checkbox", 3, "change", "ngClass"], ["type", "checkbox"], [1, "label"], ["for", "ordercheck", 1, "form-check-label"], [1, "whitespace-nowrap", "p-3", "border-b-0", "rtl:text-right"], [1, "flex", "flex-nowrap", "flex-row", "gap-1"], [1, "pt-2"], [1, ""], [1, "material-icons-outlined", "flex-1", "p-1", "pt-2", "cursor-pointer"], [1, "whitespace-nowrap", "p-3", "border-b-0", "rtl:text-right", 2, "width", "120px"], [1, "hover:bg-default-white-shade"], [3, "pageChange", "limit", "offset", "total", "showingUpper", "showingLower", "currentIndex"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"], [1, "mb-6", "btn", "btn-soft-danger", "flex", "items-center", "justify-center", 3, "click"], [1, "material-icons-outlined", "mr-2", "text-red"], [3, "click"], [1, "p-3"], [1, "mx-3", "text-center", "lg:mx-0", "form-check", "text-16", "lg:text-left"], ["type", "checkbox", "id", "ordercheck1", 1, "admin-table-checkbox", 3, "change", "checked"], ["for", "ordercheck1", 1, "form-check-label"], ["href", "javascript: void(0);", 1, "font-bold"], [3, "toggleDropdown", "currentActivePopupId", "item", "actions"]], template: function DataBinListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "app-admin-search-field", 5);
        \u0275\u0275listener("filter", function DataBinListComponent_Template_app_admin_search_field_filter_6_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, DataBinListComponent_Conditional_7_Template, 2, 0, "div", 6)(8, DataBinListComponent_Conditional_8_Template, 6, 0, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "table", 10)(12, "thead")(13, "tr", 11)(14, "th", 12)(15, "div", 13)(16, "label", 14);
        \u0275\u0275listener("change", function DataBinListComponent_Template_label_change_16_listener() {
          return ctx.toggleSelectAll();
        });
        \u0275\u0275element(17, "input", 15)(18, "span", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "label", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "th", 18)(21, "div", 19)(22, "div", 20);
        \u0275\u0275text(23, "Reference ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 21)(25, "i", 22);
        \u0275\u0275template(26, DataBinListComponent_Conditional_26_Template, 2, 0, "span")(27, DataBinListComponent_Conditional_27_Template, 2, 0, "span");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "th", 18)(29, "div", 19)(30, "div", 20);
        \u0275\u0275text(31, "Info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 21)(33, "i", 22);
        \u0275\u0275template(34, DataBinListComponent_Conditional_34_Template, 2, 0, "span")(35, DataBinListComponent_Conditional_35_Template, 2, 0, "span");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "th", 18)(37, "div", 19)(38, "div", 20);
        \u0275\u0275text(39, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 21)(41, "i", 22);
        \u0275\u0275template(42, DataBinListComponent_Conditional_42_Template, 2, 0, "span")(43, DataBinListComponent_Conditional_43_Template, 2, 0, "span");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(44, "th", 23);
        \u0275\u0275text(45, " Action ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "tbody");
        \u0275\u0275repeaterCreate(47, DataBinListComponent_For_48_Template, 15, 9, "tr", 24, _forTrack0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "app-admin-paginator", 25);
        \u0275\u0275listener("pageChange", function DataBinListComponent_Template_app_admin_paginator_pageChange_49_listener($event) {
          return ctx.listCompose.paginateItems($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(50, "app-admin-modal", 26);
        \u0275\u0275listener("closed", function DataBinListComponent_Template_app_admin_modal_closed_50_listener() {
          return ctx.listCompose.toggleModal();
        })("confirm", function DataBinListComponent_Template_app_admin_modal_confirm_50_listener($event) {
          return ctx.listCompose.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(27, _c2, \u0275\u0275pureFunction0(25, _c0), \u0275\u0275pureFunction0(26, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("options", \u0275\u0275pureFunction1(31, _c4, \u0275\u0275pureFunction0(30, _c3)));
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.listCompose.selections.length === 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.listCompose.selections.length > 0 ? 8 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(33, _c5, ctx.listCompose.selections.length <= 0, ctx.listCompose.dataArr.length > 0 && ctx.listCompose.selections.length === ctx.listCompose.dataArr.length, ctx.listCompose.selections.length > 0 && ctx.listCompose.selections.length < ctx.listCompose.dataArr.length));
        \u0275\u0275advance(10);
        \u0275\u0275conditional(26, ctx.sortStates.id === "desc" ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(27, ctx.sortStates.id === "asc" ? 27 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(34, ctx.sortStates.info === "desc" ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(35, ctx.sortStates.info === "asc" ? 35 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(42, ctx.sortStates.date === "desc" ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(43, ctx.sortStates.date === "asc" ? 43 : -1);
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
      AdminModalComponent,
      AdminPaginatorComponent,
      AdminListDropdownComponent,
      AdminPageContentComponent,
      NgClass,
      AdminSearchFieldComponent,
      AdminDateFilterFieldComponent,
      AdminTopBarComponent
    ], styles: [`

.inactive-link[_ngcontent-%COMP%] {
  pointer-events: none;
  color: gray;
  text-decoration: none;
}
.label[_ngcontent-%COMP%] {
  border: 1px solid #000;
  display: inline-block;
  padding: 3px;
  width: 17px;
  height: 17px;
  border-radius: 3px;
}
.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {
  display: none;
}
.custom-checkbox[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {
  border: 1px solid #000;
  display: inline-block;
}
.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .label[_ngcontent-%COMP%] {
}
.custom-checkbox-checked-half[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {
  display: none;
}
.custom-checkbox-checked-half[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {
  border: 1px solid #000;
  display: inline-block;
  padding: 3px;
  background-color: var(--app-color-primary) !important;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 16 16'%3E%3Crect width='16' height='4' x='0' y='6' fill='white'/%3E%3C/svg%3E") no-repeat center center;
}
.custom-checkbox-checked-half[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .label[_ngcontent-%COMP%] {
}
.custom-checkbox-checked-full[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {
  display: none;
}
.custom-checkbox-checked-full[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {
  border: 1px solid #000;
  display: inline-block;
  padding: 3px;
  background-color: var(--app-color-primary) !important;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='white' stroke-width='2' d='M2 8 L6 12 L14 4'/%3E%3C/svg%3E") no-repeat left center;
}
.custom-checkbox-checked-full[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .label[_ngcontent-%COMP%] {
}
.admin-table-checkbox[_ngcontent-%COMP%] {
  appearance: none;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border: 1px solid var(--app-color-primary);
  border-radius: 0.25rem;
  background-color: var(--app-color-light);
  vertical-align: middle;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  accent-color: var(--app-color-primary);
  outline: none;
  box-shadow: none;
  transition:
    box-shadow 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
.admin-table-checkbox[_ngcontent-%COMP%]:focus {
  box-shadow: 0 0 0 1px var(--app-color-primary);
}
.admin-table-checkbox[_ngcontent-%COMP%]:checked {
  background-color: var(--app-color-primary);
  border-color: var(--app-color-primary);
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.dark[_ngcontent-%COMP%]   .admin-table-checkbox[_ngcontent-%COMP%] {
  border-color: var(--admin-zinc-600);
  background-color: var(--admin-zinc-700);
}
.dark[_ngcontent-%COMP%]   .admin-table-checkbox[_ngcontent-%COMP%]:checked {
  background-color: var(--app-color-primary);
  border-color: var(--app-color-primary);
}
/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/data-bin-list.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataBinListComponent, { className: "DataBinListComponent" });
})();
export {
  DataBinListComponent
};
//# sourceMappingURL=chunk-GU4LJKJ2.js.map
