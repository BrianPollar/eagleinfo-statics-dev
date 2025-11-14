import {
  AuthService
} from "./chunk-D77A7TO4.js";
import {
  DataService
} from "./chunk-IOIIXNZS.js";
import {
  scrollToTop
} from "./chunk-G2DKIAK6.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import {
  User
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  EcommerceOrder,
  Estimate,
  Expense,
  FrontendLogger,
  Invoice,
  JobCard,
  OperationalLocation,
  Receipt,
  Staff,
  navByBus
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-SOKXHU4M.js";
import {
  Meta,
  Title,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/profile/profile.component.ts
var ProfileComponent = class _ProfileComponent {
  constructor(dataService, windowService, router, route, eventbus, auth, apNme, mainBarTitle, metaTagService, titleService) {
    this.dataService = dataService;
    this.windowService = windowService;
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.auth = auth;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.changePass = false;
    this.personalDetails = true;
    this.percentageDone = 100;
    this.updatingPerms = false;
    this.last5Estmates = [];
    this.last5Invoices = [];
    this.last5DeliveryNotes = [];
    this.last5JobCards = [];
    this.last5OperationalLocations = [];
    this.last5Receipts = [];
    this.last5Expenses = [];
    this.countInvoices = 0;
    this.countEstimates = 0;
    this.countExpenses = 0;
    this.countUsers = 0;
    this.countOrders = 0;
    this.countJobCards = 0;
    this.countOperationalLocations = 0;
    this.countReceipts = 0;
    this.orders = [];
    this.invoices = [];
    this.estimates = [];
    this.expenses = [];
    this.jobCards = [];
    this.operationalLocations = [];
    this.receipts = [];
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.id = this.route.snapshot?.params["urId"];
  }
  ngOnInit() {
    this.mainBarTitle.title = "Profile";
    this.setTitle();
    switch (this.dataService.profileType) {
      case "staff":
        this.user = this.dataService.staffProfile;
        break;
      case "vendorManager":
        this.user = this.dataService.vendorManagerProfile;
        break;
      case "deliveryManager":
        this.user = this.dataService.deliveryManagerProfile;
        break;
    }
    scrollToTop(this.windowService);
    this.relegateProfileActivity();
  }
  setTitle() {
    this.mainBarTitle.title = "Profile For" + this.userName;
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily view and manage your profile settings for personalized account management."
    });
  }
  get userName() {
    if (this.user instanceof Staff) {
      return this.user?.commerceUser?.firstName + " " + this.user?.commerceUser?.lastName;
    }
    return this.user?.manager?.firstName + " " + this.user?.manager?.lastName;
  }
  relegateProfileActivity() {
    this.getInvoices();
    this.getEstimates();
    this.getExpenses();
    this.getJobCards();
    this.getOperationalLocations();
    this.getReceipts();
    this.getUsers();
    this.getOrders();
  }
  getUsers() {
    return __async(this, null, function* () {
      try {
        const { count, dataArr } = yield User.getAll();
        this.countUsers = count;
        this.dataService.users = dataArr;
      } catch (error) {
        FrontendLogger.error("getUsers err ", error);
      }
    });
  }
  getOrders() {
    return __async(this, null, function* () {
      try {
        const { count, dataArr } = yield EcommerceOrder.getAll();
        this.countOrders = count;
        this.orders = dataArr;
      } catch (error) {
        FrontendLogger.error("getOrders err ", error);
      }
    });
  }
  getInvoices() {
    return __async(this, null, function* () {
      const { count, dataArr } = yield Invoice.getAll();
      this.countInvoices = count;
      this.invoices = dataArr;
      this.last5Invoices = this.getLast5Things(this.invoices);
    });
  }
  getEstimates() {
    return __async(this, null, function* () {
      const { count, dataArr } = yield Estimate.getAll();
      this.countEstimates = count;
      this.estimates = dataArr;
      this.last5Estmates = this.getLast5Things(this.estimates);
    });
  }
  getExpenses() {
    return __async(this, null, function* () {
      const { count, dataArr } = yield Expense.getAll();
      this.countExpenses = count;
      this.expenses = dataArr;
      this.last5Expenses = this.getLast5Things(this.expenses);
    });
  }
  getJobCards() {
    return __async(this, null, function* () {
      const { count, dataArr } = yield JobCard.getAll();
      this.countJobCards = count;
      this.jobCards = dataArr;
      this.last5JobCards = this.getLast5Things(this.jobCards);
    });
  }
  getOperationalLocations() {
    return __async(this, null, function* () {
      const { count, dataArr } = yield OperationalLocation.getAll();
      this.countOperationalLocations = count;
      this.operationalLocations = dataArr;
      this.last5OperationalLocations = this.getLast5Things(this.operationalLocations);
    });
  }
  getReceipts() {
    return __async(this, null, function* () {
      const { count, dataArr } = yield Receipt.getAll();
      this.countReceipts = count;
      this.receipts = dataArr;
      this.last5Receipts = this.getLast5Things(this.receipts);
    });
  }
  about() {
    this.changePass = false;
    this.personalDetails = true;
  }
  pass() {
    this.changePass = true;
    this.personalDetails = false;
  }
  getLast5Things(data) {
    let limit = 0;
    if (data.length > 5) {
      limit = data.length - 5;
    }
    return data.filter((val, index) => index >= limit);
  }
  navigate(url) {
    this.router.navigate([url]);
  }
  logOut() {
    this.auth.isLoggedIn = true;
    this.auth.logOut();
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(t) {
      return new (t || _ProfileComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 4, consts: [[1, "relative", "h-[100vh]"], [1, "profile-page"], [1, "relative", "block", 2, "height", "500px"], [1, "absolute", "top-0", "w-full", "h-full", "bg-center", "bg-cover", 2, "background-image", "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"], ["id", "blackOverlay", 1, "w-full", "h-full", "absolute", "opacity-50", "bg-black"], [1, "top-auto", "bottom-0", "left-0", "right-0", "w-full", "absolute", "pointer-events-none", "overflow-hidden", 2, "height", "70px"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "none", "version", "1.1", "viewBox", "0 0 2560 100", "x", "0", "y", "0", 1, "absolute", "bottom-0", "overflow-hidden"], ["points", "2560 0 2560 100 0 100", 1, "text-gray-300", "fill-current"], [1, "relative", "py-16", "bg-dark"], [1, "container", "mx-auto", "px-4"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-primary", "w-full", "mb-6", "shadow-xl", "rounded-lg", "-mt-64"], [1, "px-6"], [1, "flex", "flex-wrap", "justify-center"], [1, "w-full", "lg:w-3/12", "px-4", "lg:order-2", "flex", "justify-center"], [1, "relative"], ["width", "400", "height", "200", "alt", "Logo", "src", "assets/logo/logo.png", 1, "shadow-xl", "rounded-full", "h-auto", "align-middle", "border-none", "absolute", "-m-16", "-ml-20", "lg:-ml-16", 2, "max-width", "150px"], [1, "w-full", "lg:w-4/12", "px-4", "lg:order-3", "lg:text-right", "lg:self-center"], [1, "py-6", "px-3", "mt-32", "sm:mt-0"], ["type", "button", 1, "bg-pink-500", "active:bg-pink-600", "uppercase", "text-white", "font-bold", "hover:shadow-md", "shadow", "text-xs", "px-4", "py-2", "rounded", "outline-none", "focus:outline-none", "sm:mr-2", "mb-1", 2, "transition", "all 0.15s ease 0s", 3, "click"], [1, "w-full", "lg:w-4/12", "px-4", "lg:order-1"], [1, "flex", "justify-center", "py-4", "lg:pt-4", "pt-8"], [1, "mr-4", "p-3", "text-center", "cursor-pointer", 3, "click"], [1, "text-xl", "font-bold", "block", "uppercase", "tracking-wide", "text-white"], [1, "text-sm", "text-white"], [1, "lg:mr-4", "p-3", "text-center", "cursor-pointer", 3, "click"], [1, "text-center", "mt-12"], [1, "text-4xl", "font-semibold", "leading-normal", "mb-2", "text-white", "mb-2"], [1, "text-sm", "leading-normal", "mt-0", "mb-2", "text-white", "font-bold", "uppercase"], [1, "fas", "fa-map-marker-alt", "mr-2", "text-lg", "text-white"], [1, "mt-10", "py-10", "border-t", "border-gray-300", "text-center"], [1, "w-full", "lg:w-9/12", "px-4"], [1, "mb-4", "text-lg", "leading-relaxed", "text-white"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "section", 2)(3, "div", 3);
        \u0275\u0275element(4, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 6);
        \u0275\u0275element(7, "polygon", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "section", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "div", 14);
        \u0275\u0275element(15, "img", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 16)(17, "div", 17)(18, "button", 18);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_18_listener() {
          return ctx.logOut();
        });
        \u0275\u0275text(19, " LogOut ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 19)(21, "div", 20)(22, "div", 21);
        \u0275\u0275listener("click", function ProfileComponent_Template_div_click_22_listener() {
          return ctx.navigate("/users");
        });
        \u0275\u0275elementStart(23, "span", 22);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 23);
        \u0275\u0275text(26, "Users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 21);
        \u0275\u0275listener("click", function ProfileComponent_Template_div_click_27_listener() {
          return ctx.navigate("/orders");
        });
        \u0275\u0275elementStart(28, "span", 22);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 23);
        \u0275\u0275text(31, "Orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 24);
        \u0275\u0275listener("click", function ProfileComponent_Template_div_click_32_listener() {
          return ctx.navigate("/expenses");
        });
        \u0275\u0275elementStart(33, "span", 22);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 23);
        \u0275\u0275text(36, "Expense");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(37, "div", 25)(38, "h3", 26);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 27);
        \u0275\u0275element(41, "i", 28);
        \u0275\u0275text(42, " Kampala, Uganda ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 29)(44, "div", 12)(45, "div", 30)(46, "p", 31);
        \u0275\u0275text(47, " Warning! What ever you do here is as aroot user to all eagle info solutions, Give A second thought before doing the operations ");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(24);
        \u0275\u0275textInterpolate(ctx.countUsers);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.countOrders);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.countExpenses);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", "info@eagleInfosolutions.com", " ");
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent" });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-R6MY27XH.js.map
