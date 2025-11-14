import {
  AdminBreadcrumbComponent
} from "./chunk-O454IXIK.js";
import {
  TooltipComponent
} from "./chunk-4KKGHO4P.js";
import {
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  Location,
  TitleCasePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";

// projects/admin-panel/src/app/components/pane/misc/admin-back-button/admin-back-button.component.ts
var AdminBackButtonComponent = class _AdminBackButtonComponent {
  constructor(router, locaton) {
    this.router = router;
    this.locaton = locaton;
  }
  goBack() {
    if (this.backRoute) {
      this.router.navigate([this.backRoute]);
    } else {
      this.locaton.back();
    }
  }
  static {
    this.\u0275fac = function AdminBackButtonComponent_Factory(t) {
      return new (t || _AdminBackButtonComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Location));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminBackButtonComponent, selectors: [["app-admin-back-button"]], inputs: { backRoute: "backRoute" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "prevent-print", 3, "popper"], ["type", "button", 1, "flex", "items-center", "justify-center", "!bg-default-white-shade", "border-transparent", "btn", "hover:bg-default-white", "prevent-print", 3, "click"], [1, "material-icons-outlined", "mr-2", "prevent-print"], [1, "prevent-print"]], template: function AdminBackButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "lib-tooltip", 0)(1, "button", 1);
        \u0275\u0275listener("click", function AdminBackButtonComponent_Template_button_click_1_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(2, "i", 2);
        \u0275\u0275text(3, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "Go Back");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("popper", "Returns to the previous page.");
      }
    }, dependencies: [TooltipComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminBackButtonComponent, { className: "AdminBackButtonComponent" });
})();

// projects/admin-panel/src/app/components/pane/misc/admin-back-bar/admin-back-bar.component.ts
var AdminBackBarComponent = class _AdminBackBarComponent {
  constructor() {
    this.breadCrumbs = [];
  }
  static {
    this.\u0275fac = function AdminBackBarComponent_Factory(t) {
      return new (t || _AdminBackBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminBackBarComponent, selectors: [["app-admin-back-bar"]], inputs: { title: "title", breadCrumbs: "breadCrumbs", backRoute: "backRoute" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 6, consts: [[1, "grid", "grid-cols-1", "pb-6"], [1, "xl:flex", "items-center", "justify-between", "px-4"], [1, "flex", "mt-3", "!bg-blue-red", "mb-4", "xl:mb-0"], [1, "prevent-print", 3, "backRoute"], [1, "h-[40px]", "rounded-r-2xl", "bg-secondary"], [1, "text-lg", "font-semibold", "mb-4", "pl-5", "pr-5", "text-white", "pt-[7px]"], [3, "title", "breadCrumbs"]], template: function AdminBackBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "app-admin-back-button", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "h4", 5);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "titlecase");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(8, "app-admin-breadcrumb", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("backRoute", ctx.backRoute);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, ctx.title) || "View", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.title)("breadCrumbs", ctx.breadCrumbs);
      }
    }, dependencies: [
      TitleCasePipe,
      AdminBackButtonComponent,
      RouterModule,
      AdminBreadcrumbComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminBackBarComponent, { className: "AdminBackBarComponent" });
})();

export {
  AdminBackBarComponent
};
//# sourceMappingURL=chunk-RPZGEB5Y.js.map
