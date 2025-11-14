import {
  Company,
  EagleInfoClientError,
  FrontendLogger,
  getGuestInfo
} from "./chunk-MC4HAW4O.js";
import {
  ɵɵdefineInjectable
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/services/data.service.ts
var DataService = class _DataService {
  constructor() {
    this.isSuperAdmin = false;
    this.profileType = "buyer";
    this.customers = [];
    this.users = [];
    this.reviews = [];
    this.subscriptions = [];
    this.stateDataUserSelect = {};
  }
  setChatServerUrl(chatServerUrl) {
    this.chatServerUrl = chatServerUrl;
  }
  getCurrentCompany() {
    return __async(this, null, function* () {
      try {
        FrontendLogger.debug("getCurrentCompany");
        FrontendLogger.debug("getCurrentCompany companyId", this.companyId);
        if (!this.companyId) {
          FrontendLogger.error("getCurrentCompany companyId is undefined");
          return;
        }
        const company = yield Company.getOne(this.companyId);
        if (company) {
          FrontendLogger.debug("SETN COMPANY");
          this.currentCompany = company;
        }
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getActiveSubscriptions() {
    return __async(this, null, function* () {
    });
  }
  getUserNames() {
    switch (this.profileType) {
      case "staff":
        if (!this.staffProfile) {
          return "";
        }
        return this.staffProfile.commerceUser?.firstName + " " + this.staffProfile.commerceUser?.lastName;
      case "vendorManager":
        if (!this.vendorManagerProfile) {
          return "";
        }
        return this.vendorManagerProfile.manager?.firstName + " " + this.vendorManagerProfile.manager?.lastName;
      case "deliveryManager":
        if (!this.deliveryManagerProfile) {
          return "";
        }
        return this.deliveryManagerProfile.manager?.firstName + " " + this.deliveryManagerProfile.manager?.lastName;
      case "company":
        if (!this.companyProfile) {
          return "";
        }
        return typeof this.companyProfile.owner === "object" ? this.companyProfile.owner?.firstName + " " + this.companyProfile.owner?.lastName : "";
      case "buyer":
        if (!this.buyerProfile) {
          return "";
        }
        return this.buyerProfile?.firstName + " " + this.buyerProfile?.lastName;
      default:
        return "";
    }
  }
  getUserPhoto() {
    switch (this.profileType) {
      case "staff":
        if (!this.staffProfile) {
          return "";
        }
        return this.extraxtPhoto(this.staffProfile.commerceUser);
      case "vendorManager":
        if (!this.vendorManagerProfile) {
          return "";
        }
        return this.extraxtPhoto(this.vendorManagerProfile.manager);
      case "deliveryManager":
        if (!this.deliveryManagerProfile) {
          return "";
        }
        return this.extraxtPhoto(this.deliveryManagerProfile.manager);
      case "company":
        if (!this.companyProfile) {
          return "";
        }
        if (typeof this.companyProfile.owner === "string") {
          return "";
        }
        return this.extraxtPhoto(this.companyProfile.owner);
      case "buyer":
        if (!this.buyerProfile) {
          return "";
        }
        return this.extraxtPhoto(this.buyerProfile);
      default:
        return "";
    }
  }
  extraxtPhoto(user) {
    if (typeof user.photos === "string") {
      return user.photos;
    }
    return user.profilePicture?.url || "";
  }
  getUrId() {
    switch (this.profileType) {
      case "staff":
        if (!this.staffProfile) {
          return "";
        }
        return this.staffProfile.commerceUser?.urId;
      case "vendorManager":
        if (!this.vendorManagerProfile) {
          return "";
        }
        return this.vendorManagerProfile.manager?.urId;
      case "deliveryManager":
        if (!this.deliveryManagerProfile) {
          return "";
        }
        return this.deliveryManagerProfile.manager?.urId;
      case "company":
        if (!this.companyProfile) {
          return "";
        }
        if (typeof this.companyProfile.owner === "string") {
          return "";
        }
        return this.companyProfile.owner?.urId;
      case "buyer":
        if (!this.buyerProfile) {
          return "";
        }
        return this.buyerProfile?.urId;
      default:
        return "";
    }
  }
  getUser() {
    switch (this.profileType) {
      case "staff":
        if (!this.staffProfile) {
          return null;
        }
        return this.staffProfile.commerceUser;
      case "vendorManager":
        if (!this.vendorManagerProfile) {
          return null;
        }
        return this.vendorManagerProfile.manager;
      case "deliveryManager":
        if (!this.deliveryManagerProfile) {
          return null;
        }
        return this.deliveryManagerProfile.manager;
      case "company":
        if (!this.companyProfile) {
          return null;
        }
        if (typeof this.companyProfile.owner === "string") {
          return null;
        }
        return this.companyProfile.owner;
      case "buyer":
        if (!this.buyerProfile) {
          return null;
        }
        return this.buyerProfile;
      default:
        return null;
    }
  }
  setCompanyId(companyId) {
    this.companyId = companyId;
  }
  getChatInfo() {
    const user = this.getUser();
    if (!user) {
      throw new EagleInfoClientError("user is undefined");
    }
    return {
      _id: user._id,
      names: this.getUserNames(),
      photo: this.getUserPhoto(),
      chatServerUrl: this.chatServerUrl
    };
  }
  getGuest() {
    return __async(this, null, function* () {
      try {
        const guest = yield getGuestInfo();
        this.guestProfile = guest;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  static {
    this.\u0275fac = function DataService_Factory(t) {
      return new (t || _DataService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
  }
};

export {
  DataService
};
//# sourceMappingURL=chunk-IOIIXNZS.js.map
