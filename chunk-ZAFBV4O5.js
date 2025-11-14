import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/components/loaders/loader-spinner/loader-spinner.component.ts
var LoaderSpinnerComponent = class _LoaderSpinnerComponent {
  static {
    this.\u0275fac = function LoaderSpinnerComponent_Factory(t) {
      return new (t || _LoaderSpinnerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderSpinnerComponent, selectors: [["lib-loader-spinner"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, consts: [[1, "circle"]], template: function LoaderSpinnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
      }
    }, styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  border: 5px solid rgba(255, 255, 255, 0.2);\n  border-top-color: #FFF;\n  animation: _ngcontent-%COMP%_spin 1s infinite linear;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/loader-spinner.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderSpinnerComponent, { className: "LoaderSpinnerComponent" });
})();

export {
  LoaderSpinnerComponent
};
//# sourceMappingURL=chunk-ZAFBV4O5.js.map
