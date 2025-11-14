import {
  AdminTopBarComponent
} from "./chunk-RLWZ2B5Z.js";
import {
  AdminDateFilterFieldComponent
} from "./chunk-JXJWYDSB.js";
import "./chunk-V2FCV2CW.js";
import {
  AdminModalComponent
} from "./chunk-X7WNMWNF.js";
import {
  AdminSearchFieldComponent
} from "./chunk-A3XL6Y7L.js";
import {
  AdminTableComponent
} from "./chunk-EWIFM267.js";
import "./chunk-TFHAZXT7.js";
import {
  ListComposeAdminPanel
} from "./chunk-ANHFC4IG.js";
import "./chunk-3B3O76HS.js";
import "./chunk-6C27QOWO.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
import "./chunk-AKDPFH6R.js";
import "./chunk-O454IXIK.js";
import {
  AdminPageContentComponent
} from "./chunk-LWX77LXW.js";
import {
  scrollToTop
} from "./chunk-G2DKIAK6.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import "./chunk-4KKGHO4P.js";
import "./chunk-UIKF3Q7X.js";
import {
  TooltipService
} from "./chunk-RMIF5JQ2.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import "./chunk-H6XV6YF3.js";
import "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import {
  UserIp
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  FrontendLogger,
  expenseCategory,
  getBizNestErrorResponseMessage
} from "./chunk-MC4HAW4O.js";
import {
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  EventEmitter,
  Meta,
  Title,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/user-related/user-ips/user-ips-cards/user-ips-cards.component.ts
var UserIpsCardsComponent = class _UserIpsCardsComponent {
  constructor(eventbus, tooltipService, router) {
    this.eventbus = eventbus;
    this.tooltipService = tooltipService;
    this.router = router;
    this.filterBy = new EventEmitter();
    this.total = 0;
    this.active = 0;
    this.blocked = 0;
  }
  ngOnInit() {
    this.getTotal();
    this.getActive();
    this.getBlocked();
  }
  getTotal() {
    return __async(this, null, function* () {
      try {
        const { count } = yield UserIp.filterAll({
          returnEmptyArray: true
        });
        this.total = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getActive() {
    return __async(this, null, function* () {
      try {
        const { count } = yield UserIp.filterAll({
          propFilter: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "blocked.status": false
          },
          returnEmptyArray: true
        });
        this.total = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getBlocked() {
    return __async(this, null, function* () {
      try {
        const { count } = yield UserIp.filterAll({
          propFilter: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "blocked.status": false
          },
          returnEmptyArray: true
        });
        this.total = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  goToAnalytics() {
    this.router.navigate(["/user-ips-analytics"]);
  }
  static {
    this.\u0275fac = function UserIpsCardsComponent_Factory(t) {
      return new (t || _UserIpsCardsComponent)(\u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserIpsCardsComponent, selectors: [["app-user-ips-cards"]], outputs: { filterBy: "filterBy" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 3, consts: [["aria-label", "User IPs Overview Cards", 1, "grid", "grid-cols-1", "gap-6", "gap-y-0", "2xl:gap-6", "md:grid-cols-2", "2xl:grid-cols-4"], ["role", "button", "aria-label", "View All User IPs", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], [1, "card-body", "relative", "z-10", "p-5"], [1, "flex", "justify-between", "items-center", "mb-3"], [1, "flex", "items-center", "space-x-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-green-500"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"], [1, "text-xs", "text-gray-500", "uppercase", "tracking-wider"], ["id", "user-ips-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], [1, "flex", "items-center", "justify-between"], [1, "font-bold", "text-2xl"], ["data-target", "1000", "aria-label", "Total number of user IPs", 1, "counter-value"], ["role", "button", "aria-label", "View Unique User IPs", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-red-500"], ["id", "unique-user-ips-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "750", "aria-label", "Number of unique user IPs", 1, "counter-value"], ["role", "button", "aria-label", "View Duplicated User IPs", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-blue-500"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"], ["id", "duplicated-user-ips-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "250", "aria-label", "Number of duplicated user IPs", 1, "counter-value"]], template: function UserIpsCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275listener("click", function UserIpsCardsComponent_Template_div_click_1_listener() {
          return ctx.filterBy.emit({});
        })("keydown.enter", function UserIpsCardsComponent_Template_div_keydown_enter_1_listener() {
          return ctx.filterBy.emit({});
        });
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(5, "svg", 5);
        \u0275\u0275element(6, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(7, "span", 7);
        \u0275\u0275text(8, "Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9)(11, "h4", 10)(12, "span", 11);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(14, "div", 12);
        \u0275\u0275listener("click", function UserIpsCardsComponent_Template_div_click_14_listener() {
          return ctx.filterBy.emit({ propFilter: { "blocked.status": false } });
        })("keydown.enter", function UserIpsCardsComponent_Template_div_keydown_enter_14_listener() {
          return ctx.filterBy.emit({ propFilter: { "blocked.status": false } });
        });
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3)(17, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(18, "svg", 13);
        \u0275\u0275element(19, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(20, "span", 7);
        \u0275\u0275text(21, "Active");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(22, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 9)(24, "h4", 10)(25, "span", 15);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(27, "div", 16);
        \u0275\u0275listener("click", function UserIpsCardsComponent_Template_div_click_27_listener() {
          return ctx.filterBy.emit({ propFilter: { "blocked.status": true } });
        })("keydown.enter", function UserIpsCardsComponent_Template_div_keydown_enter_27_listener() {
          return ctx.filterBy.emit({ propFilter: { "blocked.status": true } });
        });
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 3)(30, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 17);
        \u0275\u0275element(32, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(33, "span", 7);
        \u0275\u0275text(34, "Blocked");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(35, "div", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 9)(37, "h4", 10)(38, "span", 20);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(40, "div", 16);
        \u0275\u0275listener("click", function UserIpsCardsComponent_Template_div_click_40_listener() {
          return ctx.goToAnalytics();
        })("keydown.enter", function UserIpsCardsComponent_Template_div_keydown_enter_40_listener() {
          return ctx.goToAnalytics();
        });
        \u0275\u0275elementStart(41, "div", 2)(42, "div", 3)(43, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(44, "svg", 17);
        \u0275\u0275element(45, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(46, "span", 7);
        \u0275\u0275text(47, "All Analytics");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(48, "div", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 9)(50, "h4", 10);
        \u0275\u0275element(51, "span", 20);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.total, " ");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.active, " ");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.blocked, " ");
      }
    }, dependencies: [RouterModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserIpsCardsComponent, { className: "UserIpsCardsComponent" });
})();

// projects/admin-panel/src/app/components/pane/user-related/user-ips/view-user-ip/view-user-ip.component.ts
function ViewUserIpComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
    \u0275\u0275text(5, "View User IP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function ViewUserIpComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal.emit());
    });
    \u0275\u0275elementStart(7, "span", 6);
    \u0275\u0275text(8, " \xD7 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "p", 8);
    \u0275\u0275text(11, "content");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(12, "div", 9);
  }
}
var ViewUserIpComponent = class _ViewUserIpComponent {
  constructor(eventbus, tooltipService, toastr, router) {
    this.eventbus = eventbus;
    this.tooltipService = tooltipService;
    this.toastr = toastr;
    this.router = router;
    this.closeModal = new EventEmitter();
  }
  deleteUserIp() {
    return __async(this, null, function* () {
      try {
        yield this.userIp.remove();
        this.closeModal.emit();
      } catch (error) {
        FrontendLogger.error(error);
        this.toastr.error(getBizNestErrorResponseMessage(error), "Error");
      }
    });
  }
  blockUnblockUser() {
    return __async(this, null, function* () {
      try {
        yield this.userIp.update({ blocked: {
          status: !this.userIp.blocked.status,
          loginAttemptRef: "",
          timesBlocked: !this.userIp.blocked.status ? 1 : 0
        } });
        this.closeModal.emit();
      } catch (error) {
        FrontendLogger.error(error);
        this.toastr.error(getBizNestErrorResponseMessage(error), "Error");
      }
    });
  }
  viewUser() {
    this.closeModal.emit();
    this.router.navigate(["/manage-user/" + this.userIp.user._id]);
  }
  static {
    this.\u0275fac = function ViewUserIpComponent_Factory(t) {
      return new (t || _ViewUserIpComponent)(\u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewUserIpComponent, selectors: [["app-view-user-ip"]], inputs: { userIp: "userIp", showModal: "showModal" }, outputs: { closeModal: "closeModal" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "overflow-x-hidden", "overflow-y-auto", "fixed", "inset-0", "z-50", "outline-none", "focus:outline-none", "justify-center", "items-center", "flex"], [1, "relative", "w-auto", "my-6", "mx-auto", "max-w-6xl"], [1, "border-0", "rounded-lg", "shadow-lg", "relative", "flex", "flex-col", "w-full", "!bg-default-white", "outline-none", "focus:outline-none"], [1, "flex", "items-start", "justify-between", "p-5", "border-b", "border-solid", "border-blueGray-200", "rounded-t"], [1, "text-3xl", "font-semibold"], [1, "p-1", "ml-auto", "bg-transparent", "border-0", "text-black", "opacity-5", "float-right", "text-3xl", "leading-none", "font-semibold", "outline-none", "focus:outline-none", 3, "click"], [1, "bg-transparent", "text-black", "opacity-5", "h-6", "w-6", "text-2xl", "block", "outline-none", "focus:outline-none"], [1, "relative", "p-6", "flex-auto"], [1, "my-4", "text-blueGray-500", "text-lg", "leading-relaxed"], [1, "opacity-25", "fixed", "inset-0", "z-40", "bg-black"]], template: function ViewUserIpComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ViewUserIpComponent_Conditional_0_Template, 13, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.showModal ? 0 : -1);
      }
    }, dependencies: [RouterModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewUserIpComponent, { className: "ViewUserIpComponent" });
})();

// projects/admin-panel/src/app/components/pane/user-related/user-ips/user-ips-list/user-ips-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "User Ip List", icon: "dns" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "ID", value: "_id" });
var _c4 = () => ({ label: "User First Name", value: "user.firstName" });
var _c5 = () => ({ label: "User Last Name", value: "user.lastName" });
var _c6 = () => ({ label: "Blocked", value: "blocked.status" });
var _c7 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c8 = () => ({ header: "ID", field: "_id", isDefaultField: true, sortable: true });
var _c9 = () => ({ header: "User First Name", field: "user.firstName", sortable: true, removeWhen: "small" });
var _c10 = () => ({ header: "User Last Name", field: "user.lastName", sortable: true, removeWhen: "small" });
var _c11 = () => ({ header: "Date", field: "createdAt", isDateValue: true, sortable: true, removeWhen: "medium" });
var _c12 = () => ({ header: "Blocked", field: "blocked.status", sortable: true, removeWhen: "small" });
var _c13 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function UserIpsListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "app-admin-date-filter-field", 12);
    \u0275\u0275listener("filter", function UserIpsListComponent_Conditional_8_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function UserIpsListComponent_Conditional_8_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function UserIpsListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 13);
    \u0275\u0275listener("click", function UserIpsListComponent_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.openDeleteManyModal("Delete Expenses", "Are You Sure You Want To Delete Selected Expenses?"));
    });
    \u0275\u0275elementStart(2, "i", 14);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Delete All");
    \u0275\u0275elementEnd()()();
  }
}
var UserIpsListComponent = class _UserIpsListComponent {
  constructor(eventbus, router, windowService, toastr, tooltipService, apNme, mainBarTitle, metaTagService, titleService) {
    this.eventbus = eventbus;
    this.router = router;
    this.windowService = windowService;
    this.toastr = toastr;
    this.tooltipService = tooltipService;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.expenseCategory = expenseCategory;
    this.listCompose = new ListComposeAdminPanel(UserIp, this.eventbus, this.windowService, this.toastr);
    this.actions = [
      {
        label: "Update",
        icon: "edit",
        event: (userIp) => {
          this.viewUser(userIp._id);
        }
      },
      {
        label: "View",
        icon: "visibility",
        event: (userIp) => {
          this.showViewModal = true;
          this.userIp = userIp;
        }
      },
      {
        label: "View User",
        icon: "visibility",
        event: (userIp) => {
          this.viewUser(userIp._id);
        }
      },
      {
        label: "blockUnBlock",
        icon: "visibility",
        event: (userIp) => {
          this.blockUnblockUser(userIp, userIp.blocked.status);
        }
      },
      {
        label: "Delete",
        icon: "delete",
        event: (userIp) => {
          this.listCompose.openDeleteOneModal(userIp._id, "Delete User Ip", "Are You Sure You Want To Delete This User Ip Record?");
        }
      }
    ];
    this.showViewModal = false;
  }
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  ngOnInit() {
    this.listCompose.getDataArr();
    this.mainBarTitle.title = "User Ips - Manage User Ips Records";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Easily manage and view user IP addresses for your organization
      to ensure effective tracking and security.`
    });
    scrollToTop(this.windowService);
  }
  viewUser(id) {
    this.router.navigate(["/manage-user/" + id]);
  }
  resolveBlocked(blocked) {
    if (!blocked) {
      return "clean";
    }
    if (blocked.status) {
      return "blocked about " + blocked.timesBlocked;
    }
    return "clean";
  }
  blockUnblockUser(userIp, block) {
    return __async(this, null, function* () {
      try {
        const blocked = {
          status: block,
          loginAttemptRef: "",
          timesBlocked: block ? 1 : 0
        };
        yield userIp.update({ blocked });
      } catch (error) {
        FrontendLogger.error(error);
        this.toastr.error(getBizNestErrorResponseMessage(error), "Error");
      }
    });
  }
  ngOnDestroy() {
    this.cleanup?.();
    this.listCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function UserIpsListComponent_Factory(t) {
      return new (t || _UserIpsListComponent)(\u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserIpsListComponent, selectors: [["app-user-ips-list"]], hostBindings: function UserIpsListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function UserIpsListComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 52, consts: [["title", "User Ip List", 3, "breadCrumbs"], [3, "filterBy"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "justify-between", "mb-4"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "h-[60px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [1, "absolute", "right-0", "top-0"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "selectable", "currentActivePopupId", "dataArr", "selections", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], [3, "closeModal", "userIp", "showModal"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"], [1, "mb-6", "btn", "btn-soft-danger", "flex", "items-center", "justify-center", 3, "click"], [1, "material-icons-outlined", "mr-2", "text-red"]], template: function UserIpsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "app-user-ips-cards", 1);
        \u0275\u0275listener("filterBy", function UserIpsListComponent_Template_app_user_ips_cards_filterBy_2_listener($event) {
          return ctx.listCompose.onFilterProps($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "app-admin-search-field", 6);
        \u0275\u0275listener("filter", function UserIpsListComponent_Template_app_admin_search_field_filter_7_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, UserIpsListComponent_Conditional_8_Template, 2, 0, "div", 7)(9, UserIpsListComponent_Conditional_9_Template, 6, 0, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "app-admin-table", 9);
        \u0275\u0275listener("paginateItems", function UserIpsListComponent_Template_app_admin_table_paginateItems_10_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function UserIpsListComponent_Template_app_admin_table_openExtras_10_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function UserIpsListComponent_Template_app_admin_table_sortChange_10_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function UserIpsListComponent_Template_app_admin_table_selectionToggle_10_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "app-admin-modal", 10);
        \u0275\u0275listener("closed", function UserIpsListComponent_Template_app_admin_modal_closed_11_listener() {
          return ctx.listCompose.toggleModal();
        })("confirm", function UserIpsListComponent_Template_app_admin_modal_confirm_11_listener($event) {
          return ctx.listCompose.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "app-view-user-ip", 11);
        \u0275\u0275listener("closeModal", function UserIpsListComponent_Template_app_view_user_ip_closeModal_12_listener() {
          return ctx.showViewModal = false;
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(29, _c2, \u0275\u0275pureFunction0(27, _c0), \u0275\u0275pureFunction0(28, _c1)));
        \u0275\u0275advance(6);
        \u0275\u0275property("options", \u0275\u0275pureFunction4(36, _c7, \u0275\u0275pureFunction0(32, _c3), \u0275\u0275pureFunction0(33, _c4), \u0275\u0275pureFunction0(34, _c5), \u0275\u0275pureFunction0(35, _c6)));
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.listCompose.selections.length === 0 ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.listCompose.selections.length > 0 ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", true)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("selections", ctx.listCompose.selections)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction5(46, _c13, \u0275\u0275pureFunction0(41, _c8), \u0275\u0275pureFunction0(42, _c9), \u0275\u0275pureFunction0(43, _c10), \u0275\u0275pureFunction0(44, _c11), \u0275\u0275pureFunction0(45, _c12)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.listCompose.showModal)("title", ctx.listCompose.modalTitle)("message", ctx.listCompose.modalMsg)("cancelButton", ctx.listCompose.modalCancelButton)("cancelText", ctx.listCompose.modalCancelText)("confirmText", ctx.listCompose.modalConfirmText)("confirmButon", ctx.listCompose.modalConfirmButton);
        \u0275\u0275advance();
        \u0275\u0275property("userIp", ctx.userIp)("showModal", ctx.showViewModal);
      }
    }, dependencies: [
      RouterModule,
      AdminModalComponent,
      UserIpsCardsComponent,
      AdminTableComponent,
      AdminSearchFieldComponent,
      AdminDateFilterFieldComponent,
      AdminTopBarComponent,
      AdminPageContentComponent,
      ViewUserIpComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserIpsListComponent, { className: "UserIpsListComponent" });
})();
export {
  UserIpsListComponent
};
//# sourceMappingURL=chunk-HUKD22RB.js.map
