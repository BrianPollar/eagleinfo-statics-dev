import {
  DOCUMENT,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/services/window.service.ts
var WindowService = class _WindowService {
  constructor(doc) {
    this.doc = doc;
  }
  getWindow() {
    return this.doc.defaultView;
  }
  getLocation() {
    return this.doc.location;
  }
  createElement(tag) {
    return this.doc.createElement(tag);
  }
  static {
    this.\u0275fac = function WindowService_Factory(t) {
      return new (t || _WindowService)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WindowService, factory: _WindowService.\u0275fac, providedIn: "root" });
  }
};

export {
  WindowService
};
//# sourceMappingURL=chunk-LARJQE5I.js.map
