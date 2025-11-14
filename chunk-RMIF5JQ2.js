import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  WebStorageService
} from "./chunk-GVZ7XU6B.js";
import {
  AppNameService
} from "./chunk-MC4HAW4O.js";
import {
  Router
} from "./chunk-SOKXHU4M.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/services/tooltip.service.ts
var TooltipService = class _TooltipService {
  constructor(storage, router, appNme, eventbus) {
    this.storage = storage;
    this.router = router;
    this.appNme = appNme;
    this.eventbus = eventbus;
    this.globallyEnabled = true;
    this.popperShowOnStart = true;
    this.tour = false;
    this.list = {
      loginButt: "Login Here, fill all the above to continue",
      recoverButt: "Enter Your Eamail or phone number to recover your password",
      paginatorLimit: "Select how many items you want to see on a page",
      makeCode: "Allows you to make promo code for custoer based on your product",
      sendMsg: "Send Message to customer",
      closeCodeModal: "Close Code Modal",
      closeModal: "Close Modal",
      saveCustomerButt: "Saves the details about the customer",
      addCustomer: "Add Customer",
      filterCustomers: "Filter Customers",
      filterSalesBy: "Filter Sales By",
      filterInvoicesBy: "Filter Invoices By",
      viewAllInvoices: "View All Invoices",
      viewAllEstimates: "View All Estimates",
      viewAllOrders: "View All Orders",
      search: "Search",
      clearNotif: "Clear All Notifications",
      viewAllNotif: "View All Notifications",
      addDecoyPdct: "Add Decoy Product, requires 3 products",
      editDecoyPdct: "Edit Decoy Item",
      removeDecoyPdct: "Remove Decoy Item",
      saveDecoy: "Save Decoy",
      addDecoy: "Add Decoy",
      filterDecoys: "Filter Decoy",
      deleteAllSelected: "Delete All Selected",
      editDecoy: "Update Decoy",
      deleteDecoy: "Delete Decoy",
      savesRecord: "Saves Recor",
      yourStns: "Your Settings",
      addDelinote: "Add Delinote",
      filterDelinote: "Filter Delinote",
      filterByToday: "Filter By Today",
      filterByYesterday: "Filter By Yesterday",
      filterByThisWeek: "Filter By This Week",
      filterByMonth: "Filter By Month",
      filterByLastMonth: "Filter By Last Month",
      addEstimate: "Add Estimate",
      filterEstimates: "Filter Estimates",
      addExpense: "Add Expense",
      filterExpenses: "Filter Expenses",
      updateExpense: "Update Expense",
      viewExpense: "View Expense",
      deleteExpense: "Delete Expense",
      savePrintDetails: "Save Print Details",
      saveSettings: "Save Settings",
      makeRandomPassword: "Make Random Password",
      saveMailAddr: "Save Mail Address",
      addColor: "Adds selected color to the color list",
      saveInventory: "Save Inventory",
      addSponsoredPdct: "Add Sponsored Product",
      addSponsored: "Add Sponsored",
      addItem: "Add Item",
      filterItems: "Filter Items",
      saveSponsored: "Save Sponsored",
      updateJobCard: "Update Job Card",
      viewJobCard: "View Job Card",
      addOfferPdct: "Add Offer Product",
      updateOfferItem: "Update Offer Item",
      deleteOfferItem: "Delete Offer Item",
      updateOffer: "Update Offer",
      deleteOffer: "Delete Offer",
      makePdf: "Make PDF",
      editProfile: "Edit Profile",
      savePerms: "Save Permissions",
      addReceipt: "Add Receipt",
      filterReceipt: "Filter Receipt",
      customizePlan: "Customize Plan",
      addSubscription: "Add subscription",
      print: "Print",
      editPrintTable: "Edit Print Table",
      editPrintDetails: "Edit Print Details",
      addCompany: "Add Company",
      filterCompanys: "Filter Companys",
      saveCity: "Save City",
      editCity: "Edit City",
      deleteCity: "Delete City",
      addCity: "Add City",
      filterCitys: "Filter Citys",
      filterUsers: "Filter Users",
      filterOrdersBy: "Filter Orders By",
      editExpenseCat: "Edit Expense Category",
      deleteExpenseCat: "Delete Expense Category",
      addExpenseCat: "Add Expense Category",
      submit: "submit",
      saveExpenseCat: "Save  Expense Category",
      leaveAnswer: "Leave Answer"
    };
    const globallyEnabled = this.storage.get("tooltip" + this.appNme.appName);
    if (globallyEnabled) {
      this.globallyEnabled = globallyEnabled === "enabled";
    }
    const popperShowOnStart = this.storage.get("popperShowOnStart" + this.appNme.appName);
    if (popperShowOnStart) {
      this.popperShowOnStart = popperShowOnStart === "enabled";
    }
  }
  tooltipEnabled() {
    if (this.globallyEnabled) {
      return this.disableTooltip();
    } else {
      return this.enableTooltip();
    }
  }
  enableTooltip() {
    this.globallyEnabled = true;
    this.storage.set("tooltip" + this.appNme.appName, "enabled");
    this.router.navigateByUrl(this.router.url);
    this.eventbus.generalEvent$.next({ type: "popperDisabled", data: false });
  }
  disableTooltip() {
    this.globallyEnabled = false;
    this.storage.set("tooltip" + this.appNme.appName, "disabled");
    this.router.navigateByUrl(this.router.url);
    this.eventbus.generalEvent$.next({ type: "popperDisabled", data: true });
  }
  togglePoperShowOnStart() {
    this.popperShowOnStart = !this.popperShowOnStart;
    this.storage.set("popperShowOnStart" + this.appNme.appName, this.popperShowOnStart ? "enabled" : "disabled");
    this.eventbus.generalEvent$.next({ type: "popperShowOnStart", data: this.popperShowOnStart });
  }
  static {
    this.\u0275fac = function TooltipService_Factory(t) {
      return new (t || _TooltipService)(\u0275\u0275inject(WebStorageService), \u0275\u0275inject(Router), \u0275\u0275inject(AppNameService), \u0275\u0275inject(EventbusService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TooltipService, factory: _TooltipService.\u0275fac, providedIn: "root" });
  }
};

export {
  TooltipService
};
//# sourceMappingURL=chunk-RMIF5JQ2.js.map
