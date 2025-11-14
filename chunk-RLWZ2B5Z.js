import {
  AdminBreadcrumbComponent
} from "./chunk-O454IXIK.js";
import {
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  TitleCasePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";

// projects/admin-panel/src/app/components/pane/misc/admin-top-bar/admin-top-bar.component.ts
var AdminTopBarComponent = class _AdminTopBarComponent {
  constructor() {
    this.breadCrumbs = [];
  }
  static {
    this.\u0275fac = function AdminTopBarComponent_Factory(t) {
      return new (t || _AdminTopBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminTopBarComponent, selectors: [["app-admin-top-bar"]], inputs: { title: "title", breadCrumbs: "breadCrumbs" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 4, consts: [[1, "grid", "grid-cols-1", "pb-6"], [1, "xl:flex", "items-center", "justify-between", "px-4"], [1, "text-lg", "font-semibold", "mb-4"], [3, "breadCrumbs"]], template: function AdminTopBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "titlecase");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "app-admin-breadcrumb", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, ctx.title) || "", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("breadCrumbs", ctx.breadCrumbs);
      }
    }, dependencies: [
      TitleCasePipe,
      RouterModule,
      AdminBreadcrumbComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminTopBarComponent, { className: "AdminTopBarComponent" });
})();

export {
  AdminTopBarComponent
};
//# sourceMappingURL=chunk-RLWZ2B5Z.js.map
