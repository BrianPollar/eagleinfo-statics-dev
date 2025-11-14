import {
  openClose
} from "./chunk-6C27QOWO.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  FrontendLogger,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  EventEmitter,
  NgClass,
  NgZone,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/components/base-paginator.ts
var BasePaginatorComponent = class _BasePaginatorComponent {
  constructor(eventbus, zone) {
    this.eventbus = eventbus;
    this.zone = zone;
    this.offset = 0;
    this.limit = 10;
    this.currentIndex = 1;
    this.total = 0;
    this.position = "top";
    this.pageChange = new EventEmitter();
    this.pages = [];
    this.lowerDots = false;
    this.upperDots = false;
  }
  ngOnInit() {
    const handlers = {
      makeList: () => {
        FrontendLogger.debug("makeList ", this.currentIndex);
        this.makeList();
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers, true);
    this.cleanup = cleanup;
  }
  makeList() {
    FrontendLogger.debug("DEBUG IT");
    this.offset = this.offset || 0;
    this.limit = this.limit || 10;
    this.currentIndex = this.currentIndex || 1;
    this.total = this.total || 0;
    const totalPages = Math.ceil(this.total / this.limit);
    this.currentIndex = Math.min(Math.max(1, this.currentIndex), totalPages);
    FrontendLogger.debug("DEBUG IT", 111111);
    this.lowerDots = false;
    this.upperDots = false;
    if (totalPages <= 5) {
      this.pages = Array.from({ length: totalPages }, (item, i) => i + 1);
      return;
    }
    FrontendLogger.debug("DEBUG IT", 2222222);
    const maxVisiblePages = 5;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);
    let startPage;
    let endPage;
    FrontendLogger.debug("DEBUG IT", 3333333);
    if (this.currentIndex <= halfVisiblePages + 1) {
      startPage = 1;
      endPage = maxVisiblePages;
      this.upperDots = totalPages > maxVisiblePages;
    } else if (this.currentIndex >= totalPages - halfVisiblePages) {
      startPage = totalPages - maxVisiblePages + 1;
      endPage = totalPages;
      this.lowerDots = totalPages > maxVisiblePages;
    } else {
      startPage = this.currentIndex - halfVisiblePages;
      endPage = this.currentIndex + halfVisiblePages;
      this.lowerDots = true;
      this.upperDots = true;
    }
    FrontendLogger.debug("DEBUG IT", 444444444);
    this.pages = [];
    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }
    if (!this.pages.includes(1)) {
      this.pages.unshift(1);
    }
    if (!this.pages.includes(totalPages)) {
      this.pages.push(totalPages);
    }
    FrontendLogger.debug("Total Pages", totalPages);
    FrontendLogger.debug("Current Pages", this.pages);
  }
  changePage(index) {
    const totalPages = Math.ceil(this.total / this.limit);
    if (index > 0 && index <= totalPages) {
      this.currentIndex = index;
      this.offset = (index - 1) * this.limit;
      this.makeList();
      this.pageChange.emit({
        offset: this.offset,
        limit: this.limit,
        currentIndex: this.currentIndex
      });
    }
  }
  next() {
    const totalPages = Math.ceil(this.total / this.limit);
    FrontendLogger.debug("LAST", totalPages);
    if (this.currentIndex < totalPages) {
      FrontendLogger.debug("RUN ZONE", 2222);
      this.zone.run(() => {
        this.currentIndex++;
        this.offset = (this.currentIndex - 1) * this.limit;
      });
      FrontendLogger.debug("RUN ZONE", this.offset);
      this.pageChange.emit({
        offset: this.offset,
        limit: this.limit,
        currentIndex: this.currentIndex
      });
    }
  }
  prev() {
    if (this.currentIndex > 1) {
      this.zone.run(() => {
        this.currentIndex--;
        this.offset = (this.currentIndex - 1) * this.limit;
      });
      this.pageChange.emit({
        offset: this.offset,
        limit: this.limit,
        currentIndex: this.currentIndex
      });
    }
  }
  first() {
    if (!this.offset || !this.total || !this.limit) {
      return;
    }
    this.currentIndex = 1;
    this.offset = 0;
    this.pageChange.emit({ offset: this.offset, limit: this.limit, currentIndex: this.currentIndex });
    this.pages = Array.from({ length: this.limit }, (val, i) => i + 1);
  }
  last() {
    if (!this.offset || !this.total || !this.limit) {
      return;
    }
    this.currentIndex = this.total;
    this.offset = (this.total - 1) * this.limit;
    this.pageChange.emit({ offset: this.offset, limit: this.limit, currentIndex: this.currentIndex });
    this.pages = Array.from({ length: this.limit }, (val, i) => (this.total || 1) - (this.limit || 1) - 1 + i);
  }
  limitChanged(ev) {
    this.limit = Number(ev);
    this.currentIndex = 0;
    this.offset = 0;
    this.pageChange.emit({ offset: 0, limit: Number(ev), currentIndex: this.currentIndex });
    this.makeList();
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function BasePaginatorComponent_Factory(t) {
      return new (t || _BasePaginatorComponent)(\u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _BasePaginatorComponent, inputs: { offset: "offset", limit: "limit", currentIndex: "currentIndex", total: "total", showingUpper: "showingUpper", showingLower: "showingLower", position: "position", triggerMakeList: "triggerMakeList" }, outputs: { pageChange: "pageChange" }, standalone: true });
  }
};

// projects/admin-panel/src/app/components/pane/misc/admin-dropdown/admin-list-dropdown.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function AdminListDropdownComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 4)(1, "a", 5);
    \u0275\u0275listener("click", function AdminListDropdownComponent_For_6_Template_a_click_1_listener($event) {
      const action_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      action_r2.event(ctx_r2.item);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 6)(3, "i");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275classMap("material-icons-outlined mr-2 hover:animate-shake transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl !text-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(action_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r2.label, " ");
  }
}
var AdminListDropdownComponent = class _AdminListDropdownComponent {
  constructor() {
    this.toggleDropdown = new EventEmitter();
  }
  static {
    this.\u0275fac = function AdminListDropdownComponent_Factory(t) {
      return new (t || _AdminListDropdownComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminListDropdownComponent, selectors: [["app-admin-list-dropdown"]], inputs: { currentActivePopupId: "currentActivePopupId", item: "item", actions: "actions" }, outputs: { toggleDropdown: "toggleDropdown" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "dropdown", "mt-1"], ["type", "button", 1, "p-1", "text-gray-400", "border-0", "btn", "ltr:mr-2", "rtl:ml-2", "dropdown-toggle", 3, "click"], [1, "material-icons-outlined", "mr-2"], [1, "dropdown-menu", "dropdown-menu-end", "absolute", "z-50", "min-w-[160px]", "max-w-[650px]", "!bg-default-white", "border", "border-gray-200", "rounded-lg", "shadow-lg", "overflow-hidden"], [1, "border-b", "border-gray-200", "last:border-b-0", "max-w-[240px]", "ml-[1px]"], [1, "dropdown-item", "block", "px-4", "py-2", "hover:bg-default-white-shade", "cursor-pointer", "transition-colors", "duration-200", 3, "click"], [1, "flex", "items-center"]], template: function AdminListDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function AdminListDropdownComponent_Template_button_click_1_listener($event) {
          ctx.toggleDropdown.emit();
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(2, "i", 2);
        \u0275\u0275text(3, "more_vert");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "ul", 3);
        \u0275\u0275repeaterCreate(5, AdminListDropdownComponent_For_6_Template, 6, 4, "li", 4, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("@openClose", ctx.currentActivePopupId === (ctx.item == null ? null : ctx.item._id == null ? null : ctx.item._id.toString()) ? "open" : "closed");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.actions);
      }
    }, encapsulation: 2, data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminListDropdownComponent, { className: "AdminListDropdownComponent" });
})();

// projects/admin-panel/src/app/components/pane/misc/admin-paginator/admin-paginator.component.ts
var _c0 = (a0) => ({ "": a0 });
var _c1 = (a0) => ({ "text-secondary": a0 });
function AdminPaginatorComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 5)(1, "a", 8);
    \u0275\u0275listener("click", function AdminPaginatorComponent_Conditional_7_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prev());
    });
    \u0275\u0275elementStart(2, "span", 9);
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()()();
  }
}
function AdminPaginatorComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6)(1, "a", 10);
    \u0275\u0275listener("click", function AdminPaginatorComponent_For_9_Template_a_click_1_listener() {
      const page_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePage(page_r4));
    });
    \u0275\u0275elementStart(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const index_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c0, index_r5 === ctx_r1.currentIndex));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c1, index_r5 + 1 === ctx_r1.currentIndex));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r4, " ");
  }
}
function AdminPaginatorComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 7)(1, "a", 8);
    \u0275\u0275listener("click", function AdminPaginatorComponent_Conditional_10_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275elementStart(2, "span", 9);
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
}
var AdminPaginatorComponent = class _AdminPaginatorComponent extends BasePaginatorComponent {
  constructor(eventbus, zone) {
    super(eventbus, zone);
    this.eventbus = eventbus;
    this.zone = zone;
  }
  static {
    this.\u0275fac = function AdminPaginatorComponent_Factory(t) {
      return new (t || _AdminPaginatorComponent)(\u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminPaginatorComponent, selectors: [["app-admin-paginator"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 11, vars: 5, consts: [[1, "md:flex", "items-center", "place-content-between"], [1, ""], [1, "flex", "mt-2.5", "md:mt-0"], ["aria-label", "Page navigation example border"], [1, "flex", "list-style-none", "items-center"], [1, "border", "!border-default-white-shade", "ltr:rounded-l", "rtl:rounded-r", "transition-all", "duration-300", "hover:bg-gray-50", "rounded-full", "m-0.5"], [1, "border", "border-l-0", "border-r-0", "border-gray-100", "transition-all", "duration-300", "hover:bg-gray-50", "rounded-md", "mx-0.5", 3, "ngClass"], [1, "border", "!border-default-white-shade", "ltr:rounded-r", "rtl:rounded-l", "transition-all", "duration-300", "hover:bg-gray-50", "rounded-full", "m-0.5"], ["href", "javascript:void(0);", 1, "relative", "block", "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-full", "text-gray-500", "transition-all", "duration-300", "bg-transparent", "border-0", "outline-none", "page-link", "hover:text-violet-500", "hover:bg-gray-50/50", "focus:shadow-none", 3, "click"], [1, "material-icons", "text-base"], ["href", "javascript:void(0);", 1, "relative", "block", "px-3", "py-2", "text-gray-500", "transition-all", "duration-300", "bg-transparent", "border-0", "outline-none", "page-link", "hover:text-violet-500", "hover:bg-gray-50/50", "focus:shadow-none", 3, "click"], [3, "ngClass"]], template: function AdminPaginatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ul", 4);
        \u0275\u0275template(7, AdminPaginatorComponent_Conditional_7_Template, 4, 0, "li", 5);
        \u0275\u0275repeaterCreate(8, AdminPaginatorComponent_For_9_Template, 4, 7, "li", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275template(10, AdminPaginatorComponent_Conditional_10_Template, 4, 0, "li", 7);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.showingUpper ? ctx.showingLower : "", " - ", ctx.showingUpper ? ctx.showingUpper : "", " of ", ctx.total, " results ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(7, ctx.offset && ctx.limit && ctx.offset > ctx.limit ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.pages);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(10, ctx.offset && ctx.total && ctx.offset < ctx.total ? 10 : -1);
      }
    }, dependencies: [NgClass] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminPaginatorComponent, { className: "AdminPaginatorComponent" });
})();

export {
  AdminListDropdownComponent,
  AdminPaginatorComponent
};
//# sourceMappingURL=chunk-TFHAZXT7.js.map
