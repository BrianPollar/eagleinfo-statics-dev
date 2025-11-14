import {
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

// projects/admin-panel/src/app/components/pane/misc/admin-form-instruction/admin-form-instruction.component.ts
var AdminFormInstructionComponent = class _AdminFormInstructionComponent {
  static {
    this.\u0275fac = function AdminFormInstructionComponent_Factory(t) {
      return new (t || _AdminFormInstructionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminFormInstructionComponent, selectors: [["app-admin-form-instruction"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 0, consts: [[1, "space-y-8", "!bg-default-white", "text-default-dark", "p-2", "rounded-2xl", "shadow-2xl", "border", "!border-default-white-shade", "backdrop-blur-sm", "w-full", "mb-6", "text-center"], [1, "text-red-500"], [1, "text-green-500"]], template: function AdminFormInstructionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3");
        \u0275\u0275text(2, "Note");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, " The ");
        \u0275\u0275elementStart(5, "span", 1);
        \u0275\u0275text(6, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " fields are required ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, " The ");
        \u0275\u0275elementStart(10, "span", 2);
        \u0275\u0275text(11, "Optional");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " fields are optional ");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminFormInstructionComponent, { className: "AdminFormInstructionComponent" });
})();

export {
  AdminFormInstructionComponent
};
//# sourceMappingURL=chunk-U3Y2ICWD.js.map
