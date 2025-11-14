import {
  openClose
} from "./chunk-6C27QOWO.js";
import "./chunk-AKDPFH6R.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  static {
    this.\u0275fac = function NotFoundComponent_Factory(t) {
      return new (t || _NotFoundComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 0, consts: [[1, "not-found"], ["routerLink", "/"]], template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "404 - Page Not Found");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "The page you are looking for does not exist.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 1);
        \u0275\u0275text(6, "Return to Home");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterModule, RouterLink], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent" });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=chunk-XRC66KHO.js.map
