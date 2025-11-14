import {
  AdminListDropdownComponent,
  AdminPaginatorComponent
} from "./chunk-TFHAZXT7.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import {
  TooltipComponent
} from "./chunk-4KKGHO4P.js";
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import {
  FrontendLogger
} from "./chunk-MC4HAW4O.js";
import {
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  CurrencyPipe,
  DatePipe,
  EventEmitter,
  NgClass,
  ɵsetClassDebugInfo,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/pipes/truncate-dot.pipe.ts
var TruncateDotPipe = class _TruncateDotPipe {
  /**
   * Truncates a given string to a given length, and appends a trailing ellipsis if
   * the string was longer than the given length.
   *
   * @param text The string to truncate.
   * @param length Defaults to 50. The length to which the string should be
   *   truncated.
   * @returns The truncated string.
   */
  transform(text, length = 50) {
    FrontendLogger.debug("TruncateDotPipe");
    if (!text) {
      return "";
    }
    return text.length > length ? text.substring(0, length) + "..." : text;
  }
  static {
    this.\u0275fac = function TruncateDotPipe_Factory(t) {
      return new (t || _TruncateDotPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "truncateDot", type: _TruncateDotPipe, pure: true, standalone: true });
  }
};

// projects/admin-panel/src/app/components/pane/misc/admin-table-field/admin-table-field.component.ts
function AdminTableFieldComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1("\n", ctx_r0.getNestedProperty(ctx_r0.item, ctx_r0.field) ? "Yes" : "No", "\n");
  }
}
function AdminTableFieldComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.getNestedProperty(ctx_r0.item, ctx_r0.field), "dd MMM yyyy"), " ");
  }
}
function AdminTableFieldComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1("\n", \u0275\u0275pipeBind2(1, 1, ctx_r0.getNestedProperty(ctx_r0.item, ctx_r0.field), ctx_r0.currencyService.currency), "\n");
  }
}
function AdminTableFieldComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1("\n", \u0275\u0275pipeBind2(1, 1, ctx_r0.getNestedProperty(ctx_r0.item, ctx_r0.field), ctx_r0.currencyService.currency), "\n");
  }
}
function AdminTableFieldComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminTableFieldComponent_Conditional_2_Conditional_0_Template, 2, 4)(1, AdminTableFieldComponent_Conditional_2_Conditional_1_Template, 2, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r0.field === "totalCost" || ctx_r0.column.removeEcommerceSalePercentage ? 0 : 1);
  }
}
function AdminTableFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1("\n", ctx_r0.getNestedProperty(ctx_r0.item, ctx_r0.field), "\n");
  }
}
function AdminTableFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1("\n", ctx_r0.getNestedProperty(ctx_r0.item, ctx_r0.field), "\n");
  }
}
function AdminTableFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "truncateDot");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1("\n", \u0275\u0275pipeBind2(1, 1, ctx_r0.getNestedProperty(ctx_r0.item, ctx_r0.field), 70), "\n");
  }
}
var AdminTableFieldComponent = class _AdminTableFieldComponent {
  constructor(currencyService) {
    this.currencyService = currencyService;
  }
  getNestedProperty(obj, path) {
    return path.split(".").reduce((o, key) => (o || {})[key], obj);
  }
  static {
    this.\u0275fac = function AdminTableFieldComponent_Factory(t) {
      return new (t || _AdminTableFieldComponent)(\u0275\u0275directiveInject(CurrencyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminTableFieldComponent, selectors: [["app-admin-table-field"]], inputs: { field: "field", column: "column", item: "item" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, template: function AdminTableFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdminTableFieldComponent_Conditional_0_Template, 1, 1)(1, AdminTableFieldComponent_Conditional_1_Template, 2, 4)(2, AdminTableFieldComponent_Conditional_2_Template, 2, 1)(3, AdminTableFieldComponent_Conditional_3_Template, 1, 1)(4, AdminTableFieldComponent_Conditional_4_Template, 1, 1)(5, AdminTableFieldComponent_Conditional_5_Template, 2, 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.column.isBooleanValue ? 0 : ctx.field === "createdAt" || ctx.column.isDateValue ? 1 : ctx.column.isMoneyValue ? 2 : ctx.column.field === "invoiceNumber" ? 3 : ctx.column.field === "estimateNumber" ? 4 : 5);
      }
    }, dependencies: [
      DatePipe,
      CurrencyPipe,
      TruncateDotPipe
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminTableFieldComponent, { className: "AdminTableFieldComponent" });
})();

// projects/admin-panel/src/app/components/pane/misc/admin-table/admin-table.component.ts
var _forTrack0 = ($index, $item) => $item.field;
var _forTrack1 = ($index, $item) => $item._id;
var _c0 = (a0, a1, a2, a3) => ({ "remove-when-small": a0, "remove-when-medium": a1, "remove-when-large": a2, "remove-when-extra-large": a3 });
var _c1 = (a0, a1, a2) => ({ "custom-checkbox": a0, "custom-checkbox-checked-full": a1, "custom-checkbox-checked-half": a2 });
var _c2 = (a0, a1) => ({ block: a0, hidden: a1 });
function AdminTableComponent_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 8)(1, "label", 11);
    \u0275\u0275listener("change", function AdminTableComponent_For_6_Conditional_2_Template_label_change_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleSelectAll());
    });
    \u0275\u0275element(2, "input", 12)(3, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "label", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(1, _c1, ctx_r2.selections.length <= 0, ctx_r2.dataArr.length > 0 && ctx_r2.selections.length === ctx_r2.dataArr.length, ctx_r2.selections.length > 0 && ctx_r2.selections.length < ctx_r2.dataArr.length));
  }
}
function AdminTableComponent_For_6_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "arrow_upward");
    \u0275\u0275elementEnd();
  }
}
function AdminTableComponent_For_6_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "arrow_downward");
    \u0275\u0275elementEnd();
  }
}
function AdminTableComponent_For_6_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "swap_vert");
    \u0275\u0275elementEnd();
  }
}
function AdminTableComponent_For_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("mouseenter", function AdminTableComponent_For_6_Conditional_5_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const column_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHover(column_r4.field));
    })("mouseleave", function AdminTableComponent_For_6_Conditional_5_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLeave());
    });
    \u0275\u0275elementStart(1, "i", 16);
    \u0275\u0275listener("click", function AdminTableComponent_For_6_Conditional_5_Template_i_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const column_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSort(column_r4.field));
    });
    \u0275\u0275template(2, AdminTableComponent_For_6_Conditional_5_Conditional_2_Template, 2, 0, "span")(3, AdminTableComponent_For_6_Conditional_5_Conditional_3_Template, 2, 0, "span")(4, AdminTableComponent_For_6_Conditional_5_Conditional_4_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c2, ctx_r2.activeHoverField === column_r4.field, ctx_r2.activeHoverField !== column_r4.field));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, ctx_r2.sortStates[column_r4.field] === "asc" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ctx_r2.sortStates[column_r4.field] === "desc" ? 3 : 4);
  }
}
function AdminTableComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 4)(1, "div", 7);
    \u0275\u0275template(2, AdminTableComponent_For_6_Conditional_2_Template, 5, 5, "span", 8);
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275listener("mouseenter", function AdminTableComponent_For_6_Template_div_mouseenter_3_listener() {
      const column_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHover(column_r4.field));
    })("mouseleave", function AdminTableComponent_For_6_Template_div_mouseleave_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLeave());
    })("click", function AdminTableComponent_For_6_Template_div_click_3_listener() {
      const column_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSort(column_r4.field));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminTableComponent_For_6_Conditional_5_Template, 5, 6, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const i_r6 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(4, _c0, column_r4.removeWhen === "small", column_r4.removeWhen === "medium", column_r4.removeWhen === "large", column_r4.removeWhen === "extra-large"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, ctx_r2.selectable && i_r6 === 0 ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", column_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(5, column_r4.sortable ? 5 : -1);
  }
}
function AdminTableComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 5)(1, "lib-tooltip", 17);
    \u0275\u0275text(2, " Action ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("popper", "Find Actions Here");
  }
}
function AdminTableComponent_Conditional_8_For_2_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 21)(1, "input", 23);
    \u0275\u0275listener("change", function AdminTableComponent_Conditional_8_For_2_For_2_Conditional_1_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectionToggle.emit([item_r8._id]));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "label", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("id", "ordercheck_", item_r8._id, "");
    \u0275\u0275property("checked", ctx_r2.selections.includes(item_r8._id));
  }
}
function AdminTableComponent_Conditional_8_For_2_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275listener("click", function AdminTableComponent_Conditional_8_For_2_For_2_Conditional_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewItem.emit(item_r8));
    });
    \u0275\u0275text(1, " # ");
    \u0275\u0275element(2, "app-admin-table-field", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r10 = \u0275\u0275nextContext().$implicit;
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("field", column_r10.field)("column", column_r10)("item", item_r8);
  }
}
function AdminTableComponent_Conditional_8_For_2_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-admin-table-field", 26);
  }
  if (rf & 2) {
    const column_r10 = \u0275\u0275nextContext().$implicit;
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("field", column_r10.field)("column", column_r10)("item", item_r8);
  }
}
function AdminTableComponent_Conditional_8_For_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19);
    \u0275\u0275template(1, AdminTableComponent_Conditional_8_For_2_For_2_Conditional_1_Template, 3, 3, "span", 21)(2, AdminTableComponent_Conditional_8_For_2_For_2_Conditional_2_Template, 3, 3, "a", 22)(3, AdminTableComponent_Conditional_8_For_2_For_2_Conditional_3_Template, 1, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r10 = ctx.$implicit;
    const i_r11 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(3, _c0, column_r10.removeWhen === "small", column_r10.removeWhen === "medium", column_r10.removeWhen === "large", column_r10.removeWhen === "extra-large"));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r2.selectable && i_r11 === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, column_r10.isDefaultField ? 2 : 3);
  }
}
function AdminTableComponent_Conditional_8_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 20)(1, "app-admin-list-dropdown", 27);
    \u0275\u0275listener("toggleDropdown", function AdminTableComponent_Conditional_8_For_2_Conditional_3_Template_app_admin_list_dropdown_toggleDropdown_1_listener() {
      \u0275\u0275restoreView(_r12);
      const item_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openExtras.emit(item_r8._id));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("currentActivePopupId", ctx_r2.currentActivePopupId)("item", item_r8)("actions", ctx_r2.actions);
  }
}
function AdminTableComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 18);
    \u0275\u0275repeaterCreate(1, AdminTableComponent_Conditional_8_For_2_For_2_Template, 4, 8, "td", 19, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275template(3, AdminTableComponent_Conditional_8_For_2_Conditional_3_Template, 2, 3, "td", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.columns);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, ctx_r2.actions.length > 0 ? 3 : -1);
  }
}
function AdminTableComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody");
    \u0275\u0275repeaterCreate(1, AdminTableComponent_Conditional_8_For_2_Template, 4, 1, "tr", 18, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.dataArr);
  }
}
function AdminTableComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 28);
    \u0275\u0275element(1, "td");
    \u0275\u0275elementEnd();
  }
}
function AdminTableComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody");
    \u0275\u0275repeaterCreate(1, AdminTableComponent_Conditional_9_For_2_Template, 2, 0, "tr", 28, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.loaderArray);
  }
}
function AdminTableComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-admin-paginator", 29);
    \u0275\u0275listener("pageChange", function AdminTableComponent_Conditional_10_Template_app_admin_paginator_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.paginateItems.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("limit", ctx_r2.limit)("offset", ctx_r2.offset)("total", ctx_r2.count)("showingUpper", ctx_r2.showingUpper)("showingLower", ctx_r2.showingLower)("currentIndex", ctx_r2.currentIndex);
  }
}
var AdminTableComponent = class _AdminTableComponent {
  constructor(mainBarTitle) {
    this.mainBarTitle = mainBarTitle;
    this.selectable = true;
    this.offset = 0;
    this.count = 0;
    this.currentIndex = 1;
    this.dataArr = [];
    this.selections = [];
    this.columns = [];
    this.actions = [];
    this.paginateItems = new EventEmitter();
    this.sortChange = new EventEmitter();
    this.selectionToggle = new EventEmitter();
    this.openExtras = new EventEmitter();
    this.viewItem = new EventEmitter();
    this.sortStates = {};
    this.activeHoverField = "";
  }
  get loaderArray() {
    return Array.from({ length: this.limit || 10 });
  }
  onSort(column) {
    const currentDirection = this.sortStates[column] || "asc";
    const newDirection = currentDirection === "asc" ? "desc" : "asc";
    this.sortStates[column] = newDirection;
    this.sortChange.emit({ field: column, direction: newDirection });
  }
  toggleSelectAll() {
    if (!this.limit) {
      return;
    }
    if (this.selections && this.selections.length <= 0) {
      const startPos = this.limit * (this.currentIndex - 1);
      const endPos = startPos + this.limit;
      const selectedIds = this.dataArr.slice(startPos, endPos).map((item) => item._id);
      this.selectionToggle.emit(selectedIds);
    } else {
      this.selectionToggle.emit([]);
    }
  }
  onHover(field) {
    if (this.dataArr.length === 0) {
      return;
    }
    this.activeHoverField = field;
  }
  onLeave() {
    this.activeHoverField = "";
  }
  static {
    this.\u0275fac = function AdminTableComponent_Factory(t) {
      return new (t || _AdminTableComponent)(\u0275\u0275directiveInject(MainBarTitleService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminTableComponent, selectors: [["app-admin-table"]], inputs: { currentActivePopupId: "currentActivePopupId", selectable: "selectable", loading: "loading", limit: "limit", offset: "offset", count: "count", showingUpper: "showingUpper", showingLower: "showingLower", currentIndex: "currentIndex", dataArr: "dataArr", selections: "selections", columns: "columns", actions: "actions" }, outputs: { paginateItems: "paginateItems", sortChange: "sortChange", selectionToggle: "selectionToggle", openExtras: "openExtras", viewItem: "viewItem" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 3, consts: [[1, "grid", "grid-cols-1"], [1, "mb-5", "overflow-auto", "table-responsive", "!min-h-[calc(100vh-400px)]"], [1, "table", "w-full", "table-striped", "table-hover", "rtl:text-left"], [1, "text-left", "bg-default-white-shade", "rtl:text-right"], [1, "whitespace-nowrap", "p-3", "border-b", "border-gray-300", "rtl:text-right", "!pr-4", 3, "ngClass"], [1, "whitespace-nowrap", "p-3", "border-b", "border-gray-300", "rtl:text-right", 2, "width", "120px"], [3, "limit", "offset", "total", "showingUpper", "showingLower", "currentIndex"], [1, "flex", "flex-nowrap", "flex-row", "gap-1", "items-center"], [1, "mx-3", "lg:mx-0", "form-check", "text-16", "!w-[20px]"], [1, "cursor-pointer", "py-1", 3, "mouseenter", "mouseleave", "click"], [1, "hidden", "cursor-pointer", 3, "ngClass"], [1, "custom-checkbox", 3, "change", "ngClass"], ["type", "checkbox"], [1, "label"], ["for", "ordercheck", 1, "form-check-label"], [1, "hidden", "cursor-pointer", 3, "mouseenter", "mouseleave", "ngClass"], [1, "material-icons-outlined", "flex-1", "cursor-pointer", "text-[16px]", "mt-1", 3, "click"], [3, "popper"], [1, "hover:bg-default-white-shade", "!h-[5vh]"], [1, "pl-3", 3, "ngClass"], [1, ""], [1, "mx-3", "text-center", "lg:mx-0", "form-check", "text-16", "lg:text-left", "pr-4"], ["href", "javascript: void(0);", 1, "font-bold", "hover:text-secondary"], ["type", "checkbox", 1, "admin-table-checkbox", 3, "change", "id", "checked"], ["for", "ordercheck1", 1, "form-check-label"], ["href", "javascript: void(0);", 1, "font-bold", "hover:text-secondary", 3, "click"], [3, "field", "column", "item"], [3, "toggleDropdown", "currentActivePopupId", "item", "actions"], [1, "test-placeholder"], [3, "pageChange", "limit", "offset", "total", "showingUpper", "showingLower", "currentIndex"]], template: function AdminTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "table", 2)(3, "thead")(4, "tr", 3);
        \u0275\u0275repeaterCreate(5, AdminTableComponent_For_6_Template, 6, 9, "th", 4, _forTrack0);
        \u0275\u0275template(7, AdminTableComponent_Conditional_7_Template, 3, 1, "th", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, AdminTableComponent_Conditional_8_Template, 3, 0, "tbody")(9, AdminTableComponent_Conditional_9_Template, 3, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(10, AdminTableComponent_Conditional_10_Template, 1, 6, "app-admin-paginator", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.columns);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(7, ctx.actions.length > 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.dataArr && ctx.dataArr.length > 0 && !ctx.loading ? 8 : ctx.loading ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(10, ctx.limit ? 10 : -1);
      }
    }, dependencies: [
      RouterModule,
      AdminPaginatorComponent,
      AdminListDropdownComponent,
      AdminTableFieldComponent,
      NgClass,
      TooltipComponent
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
@media screen and (max-width: 1280px) {
  .remove-when-extra-large[_ngcontent-%COMP%] {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  .remove-when-large[_ngcontent-%COMP%] {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .remove-when-medium[_ngcontent-%COMP%] {
    display: none;
  }
}
@media screen and (max-width: 640px) {
  .remove-when-small[_ngcontent-%COMP%] {
    display: none;
  }
}
tr.test-placeholder[_ngcontent-%COMP%] {
  margin: 5px;
}
tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 5px;
  width: 10vw;
  height: 5vh !important;
}
tr.test-placeholder[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {
  position: absolute;
  width: 95%;
  height: 95%;
  background: #d6d6d6;
  content: "";
  top: 2.5%;
  left: 2.5%;
  border-radius: 10px;
  z-index: 2;
  opacity: 0.4;
}
tr.test-placeholder[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  position: relative;
  opacity: 0;
}
tr.test-placeholder[_ngcontent-%COMP%] {
  overflow: hidden !important;
  position: relative;
}
tr.test-placeholder[_ngcontent-%COMP%]:after {
  width: calc(100% - 20px);
  height: 90%;
  background: #c7c7c7;
  position: absolute;
  top: 50%;
  content: "";
  z-index: 2;
  opacity: 1;
  filter: blur(1.5px);
  left: 50%;
  transform: translate(-50%, -50%);
  background:
    linear-gradient(
      90deg,
      rgba(227, 227, 227, 0.6) 0%,
      rgba(200, 200, 200, 0.8) 50%,
      rgba(227, 227, 227, 0.6) 100%);
  background-position: 150vw 0;
  animation: _ngcontent-%COMP%_placeholderblur 3s linear infinite;
}
@keyframes _ngcontent-%COMP%_placeholderblur {
  0% {
    background-position: -150vw 0;
    opacity: 0.9;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    background-position: 200vw 0;
    opacity: 0.9;
  }
}
/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/admin-table.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminTableComponent, { className: "AdminTableComponent" });
})();

export {
  AdminTableComponent
};
//# sourceMappingURL=chunk-EWIFM267.js.map
