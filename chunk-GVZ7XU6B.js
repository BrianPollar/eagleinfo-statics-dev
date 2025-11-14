import {
  PLATFORM_ID,
  isPlatformBrowser,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/services/web-storage.service.ts
var WebStorageService = class _WebStorageService {
  constructor(platformId) {
    this.platformId = platformId;
  }
  get(item) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(item);
    }
    return null;
  }
  set(item, value) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(item, value);
    }
  }
  remove(item) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(item);
    }
  }
  static {
    this.\u0275fac = function WebStorageService_Factory(t) {
      return new (t || _WebStorageService)(\u0275\u0275inject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WebStorageService, factory: _WebStorageService.\u0275fac, providedIn: "root" });
  }
};

export {
  WebStorageService
};
//# sourceMappingURL=chunk-GVZ7XU6B.js.map
