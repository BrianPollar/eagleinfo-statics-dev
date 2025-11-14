import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";

// projects/admin-panel/src/app/components/pane/misc/admin-breadcrumb/admin-breadcrumb.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function AdminBreadcrumbComponent_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 2)(1, "a", 3)(2, "i", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "i", 4);
    \u0275\u0275text(6, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const crumb_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", crumb_r1.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(crumb_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", crumb_r1.name, " ");
  }
}
function AdminBreadcrumbComponent_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 5)(2, "i", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.breadCrumbs[ctx_r1.breadCrumbs.length - 1].icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.title || ctx_r1.mainBarTitle.title, " ");
  }
}
function AdminBreadcrumbComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminBreadcrumbComponent_For_3_Conditional_0_Template, 7, 3, "li", 2)(1, AdminBreadcrumbComponent_For_3_Conditional_1_Template, 6, 2);
  }
  if (rf & 2) {
    const index_r3 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, index_r3 !== ctx_r1.breadCrumbs.length - 1 ? 0 : 1);
  }
}
var AdminBreadcrumbComponent = class _AdminBreadcrumbComponent {
  constructor(mainBarTitle) {
    this.mainBarTitle = mainBarTitle;
    this.breadCrumbs = [];
  }
  static {
    this.\u0275fac = function AdminBreadcrumbComponent_Factory(t) {
      return new (t || _AdminBreadcrumbComponent)(\u0275\u0275directiveInject(MainBarTitleService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminBreadcrumbComponent, selectors: [["app-admin-breadcrumb"]], inputs: { title: "title", breadCrumbs: "breadCrumbs" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [["aria-label", "Breadcrumb", 1, "flex", "xl:items-center", "bg-default-white-shade", "text-default-dark", "p-3", "rounded-md", "shadow-sm", "flex-col", "xl:flex-row", "flex-nowrap", "prevent-print"], [1, "xl:inline-flex", "xl:items-center", "space-x-1", "md:space-x-3", "prevent-print"], [1, "xl:inline-flex", "xl:items-center"], [1, "inline-flex", "items-center", "text-sm", "font-medium", "!text-default-dark", "hover:text-default-dark-tint", 3, "routerLink"], [1, "material-icons-outlined", "mr-2"], [1, "flex", "items-center"], ["href", "javascript:void(0);", 1, "text-sm", "font-medium", "!text-default-dark", "hover:text-default-dark-tint"]], template: function AdminBreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "ol", 1);
        \u0275\u0275repeaterCreate(2, AdminBreadcrumbComponent_For_3_Template, 2, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.breadCrumbs);
      }
    }, dependencies: [RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminBreadcrumbComponent, { className: "AdminBreadcrumbComponent" });
})();

export {
  AdminBreadcrumbComponent
};
//# sourceMappingURL=chunk-O454IXIK.js.map
