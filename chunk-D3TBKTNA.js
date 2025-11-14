import {
  NotificationClient
} from "./chunk-DEKWU2RH.js";
import {
  AuthClient
} from "./chunk-H7TI67RE.js";
import {
  WebStorageService
} from "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  CommerceClient,
  ManagerClient
} from "./chunk-MC4HAW4O.js";
import {
  PLATFORM_ID,
  isPlatformBrowser,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/services/currency.service.ts
var CurrencyService = class _CurrencyService {
  constructor(storage, apNme, platformId) {
    this.storage = storage;
    this.apNme = apNme;
    this.platformId = platformId;
    this.currency = "USD";
  }
  setCurrency(currency) {
    if (!currency) {
      return;
    }
    this.currency = currency;
    const headers = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-currency": currency
    };
    AuthClient.ehttp.appendToHeaders(headers);
    CommerceClient.ehttp.appendToHeaders(headers);
    NotificationClient.ehttp.appendToHeaders(headers);
    ManagerClient.ehttp.appendToHeaders(headers);
  }
  changeCurrency(newCurrency, forceReload = true) {
    if (!newCurrency) {
      return;
    }
    this.setCurrency(newCurrency);
    this.storage.set(this.apNme + "_currency", newCurrency);
    if (isPlatformBrowser(this.platformId) && forceReload) {
      window.location.reload();
    }
  }
  getStorageCurrency() {
    return this.storage.get(this.apNme + "_currency");
  }
  static {
    this.\u0275fac = function CurrencyService_Factory(t) {
      return new (t || _CurrencyService)(\u0275\u0275inject(WebStorageService), \u0275\u0275inject(AppNameService), \u0275\u0275inject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CurrencyService, factory: _CurrencyService.\u0275fac, providedIn: "root" });
  }
};

export {
  CurrencyService
};
//# sourceMappingURL=chunk-D3TBKTNA.js.map
