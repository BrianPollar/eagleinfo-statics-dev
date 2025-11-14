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
import {
  TooltipComponent
} from "./chunk-4KKGHO4P.js";
import "./chunk-UIKF3Q7X.js";
import "./chunk-RMIF5JQ2.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import "./chunk-H6XV6YF3.js";
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import {
  User
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  FrontendLogger,
  navByBus
} from "./chunk-MC4HAW4O.js";
import {
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  EventEmitter,
  Meta,
  NgClass,
  Subject,
  Title,
  init_esm,
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
  ɵɵpureFunction6,
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

// projects/admin-panel/src/app/components/pane/user-related/user-list/user-list.component.ts
init_esm();

// projects/admin-panel/src/app/components/pane/user-related/user-cards/user-cards.component.ts
var _c0 = (a0, a1) => ({ "text-green-700 bg-green-500/20": a0, "text-red-700 bg-red-500/20": a1 });
var UserCardsComponent = class _UserCardsComponent {
  constructor(currencyService) {
    this.currencyService = currencyService;
    this.filterBy = new EventEmitter();
    this.totalUsers = 0;
    this.dueUsers = 0;
    this.unverfiedUsersCount = 0;
    this.recent = 0;
    this.totalUsersGrowth = 0;
  }
  ngOnInit() {
    this.getTotalUsers();
    this.getRecent();
    this.getUnverifiedUsersCount();
    this.getTotalUsersGrowthDiff();
  }
  getTotalUsers() {
    return __async(this, null, function* () {
      try {
        const { count } = yield User.filterAll({
          returnEmptyArray: true
        });
        this.totalUsers = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getRecent() {
    return __async(this, null, function* () {
      try {
        const { count } = yield User.filterAll({
          comparisonFilter: [{
            field: "createdAt",
            fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1),
            operator: "gte"
          }],
          returnEmptyArray: true
        });
        this.recent = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getUnverifiedUsersCount() {
    return __async(this, null, function* () {
      try {
        const { count } = yield User.filterAll({
          propFilter: {
            verified: false
          },
          returnEmptyArray: true
        });
        this.unverfiedUsersCount = count;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getTotalUsersGrowthDiff() {
    return __async(this, null, function* () {
      try {
        const lastMonth = yield User.filterAll({
          comparisonFilter: [
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth() - 1, 1),
              operator: "gte"
            },
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 0),
              operator: "lte"
            }
          ]
        });
        const thisMonth = yield User.filterAll({
          comparisonFilter: [
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1),
              operator: "gte"
            },
            {
              field: "createdAt",
              fieldValue: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth() + 1, 0),
              operator: "lte"
            }
          ]
        });
        this.totalUsersGrowth = (thisMonth.count - lastMonth.count) / (lastMonth.count || 1) * 100 || 0;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  static {
    this.\u0275fac = function UserCardsComponent_Factory(t) {
      return new (t || _UserCardsComponent)(\u0275\u0275directiveInject(CurrencyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserCardsComponent, selectors: [["app-user-cards"]], outputs: { filterBy: "filterBy" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 11, consts: [["aria-label", "Users Overview Cards", 1, "grid", "grid-cols-1", "gap-6", "gap-y-0", "2xl:gap-6", "md:grid-cols-2", "2xl:grid-cols-3"], [3, "popper"], ["role", "button", "aria-label", "View All Users", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], [1, "card-body", "relative", "z-10", "p-5"], [1, "flex", "justify-between", "items-center", "mb-3"], [1, "flex", "items-center", "space-x-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-green-500"], ["d", "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"], [1, "text-xs", "text-gray-500", "uppercase", "tracking-wider"], ["id", "users-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], [1, "flex", "items-center", "justify-between"], [1, "font-bold", "text-2xl"], ["data-target", "500", "aria-label", "Total number of users", 1, "counter-value"], [1, "text-[10px]", "py-[1px]", "px-2", "rounded-full", "font-medium", 3, "ngClass"], ["role", "button", "aria-label", "View Active Users", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-red-500"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"], ["id", "active-users-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "350", "aria-label", "Number of active users", 1, "counter-value"], ["role", "button", "aria-label", "View Recently Added Users", "tabindex", "0", 1, "card", "!border", "!border-default-white-shade", "relative", "overflow-hidden", "cursor-pointer", "rounded-2xl", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl", 3, "click", "keydown.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", "text-purple-500"], ["d", "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L8 12H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"], ["id", "recent-users-chart", "data-colors", '["#5156be"]', "aria-hidden", "true", 1, "w-12", "h-12", "apex-charts", "opacity-50"], ["data-target", "25", "aria-label", "Number of recently added users", 1, "counter-value"]], template: function UserCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "lib-tooltip", 1)(2, "div", 2);
        \u0275\u0275listener("click", function UserCardsComponent_Template_div_click_2_listener() {
          return ctx.filterBy.emit({});
        })("keydown.enter", function UserCardsComponent_Template_div_keydown_enter_2_listener() {
          return ctx.filterBy.emit({});
        });
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 6);
        \u0275\u0275element(7, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "span", 8);
        \u0275\u0275text(9, "Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 10)(12, "h4", 11)(13, "span", 12);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "span", 13);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(17, "lib-tooltip", 1)(18, "div", 14);
        \u0275\u0275listener("click", function UserCardsComponent_Template_div_click_18_listener() {
          return ctx.filterBy.emit({ propFilter: { verified: false } });
        })("keydown.enter", function UserCardsComponent_Template_div_keydown_enter_18_listener() {
          return ctx.filterBy.emit({ propFilter: { verified: false } });
        });
        \u0275\u0275elementStart(19, "div", 3)(20, "div", 4)(21, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(22, "svg", 15);
        \u0275\u0275element(23, "path", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "span", 8);
        \u0275\u0275text(25, "Unverified Count");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(26, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 10)(28, "h4", 11)(29, "span", 18);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(31, "lib-tooltip", 1)(32, "div", 19);
        \u0275\u0275listener("click", function UserCardsComponent_Template_div_click_32_listener() {
          return ctx.filterBy.emit({ propSort: { createdAt: "desc" } });
        })("keydown.enter", function UserCardsComponent_Template_div_keydown_enter_32_listener() {
          return ctx.filterBy.emit({ propSort: { createdAt: "desc" } });
        });
        \u0275\u0275elementStart(33, "div", 3)(34, "div", 4)(35, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 20);
        \u0275\u0275element(37, "path", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(38, "span", 8);
        \u0275\u0275text(39, "Recently Added");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(40, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 10)(42, "h4", 11)(43, "span", 23);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("popper", "Click to get all users");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.totalUsers, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c0, ctx.totalUsersGrowth > 0, ctx.totalUsersGrowth < 0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.totalUsersGrowth, " ");
        \u0275\u0275advance();
        \u0275\u0275property("popper", "Click to get all active users");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.unverfiedUsersCount, " ");
        \u0275\u0275advance();
        \u0275\u0275property("popper", "Click to get recently signed up users");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", ctx.recent, " ");
      }
    }, dependencies: [
      RouterModule,
      NgClass,
      TooltipComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserCardsComponent, { className: "UserCardsComponent" });
})();

// projects/admin-panel/src/app/components/pane/user-related/user-list/user-list.component.ts
var _c02 = () => ({ name: "Dashboard", icon: "home", link: "/" });
var _c1 = () => ({ name: "Users List", icon: "groups" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ label: "ID", value: "urId" });
var _c4 = () => ({ label: "Name", value: "names" });
var _c5 = () => ({ label: "Email", value: "email" });
var _c6 = () => ({ label: "Phone", value: "phone" });
var _c7 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c8 = () => ({ header: "ID", field: "urId", isDefaultField: true, sortable: true });
var _c9 = () => ({ header: "Name", field: "names", sortable: true, removeWhen: "small" });
var _c10 = () => ({ header: "Email", field: "email", sortable: true, removeWhen: "medium" });
var _c11 = () => ({ header: "Phone", field: "phone", sortable: true, removeWhen: "large" });
var _c12 = () => ({ header: "Date Added", field: "createdAt", sortable: true, removeWhen: "medium" });
var _c13 = () => ({ header: "Title", field: "title", sortable: true, removeWhen: "extra-large" });
var _c14 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function UserListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "app-admin-date-filter-field", 10);
    \u0275\u0275listener("filter", function UserListComponent_Conditional_8_Template_app_admin_date_filter_field_filter_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotif($event));
    })("filterRange", function UserListComponent_Conditional_8_Template_app_admin_date_filter_field_filterRange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listCompose.createdAtNotifRange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
var UserListComponent = class _UserListComponent {
  constructor(windowService, toastr, router, eventbus, apNme, mainBarTitle, metaTagService, titleService) {
    this.windowService = windowService;
    this.toastr = toastr;
    this.router = router;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.dest$ = new Subject();
    this.listCompose = new ListComposeAdminPanel(User, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.actions = [
      {
        label: "View",
        icon: "visibility",
        event: (user) => {
          this.manageUser(user._id);
        }
      },
      {
        label: "Delete",
        icon: "delete",
        event: (user) => {
          this.listCompose.openDeleteOneModal(user._id, "Delete User", "Are You Sure You Want To Delete This User?");
        }
      }
    ];
  }
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  ngOnInit() {
    this.mainBarTitle.title = "Users - Manage Users";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Easily manage and view user accounts for your
      organization to ensure effective oversight and engagement.`
    });
    this.listCompose.getDataArr();
    scrollToTop(this.windowService);
  }
  editUser(user) {
    this.navigateByBus(["/profile/" + user.urId], "viewUser", user);
  }
  sendMessage(user) {
    this.navigateByBus(["application/chat"], "initChat", {
      reqRoom: true,
      userId: user._id
    });
  }
  manageUser(id) {
    this.router.navigate(["/manage-user/" + id]);
  }
  determineUrl(user) {
    if (user.profilePicture) {
      return user.profilePicture.url;
    }
    return "assets/imgs/person.png";
  }
  ngOnDestroy() {
    this.listCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function UserListComponent_Factory(t) {
      return new (t || _UserListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListComponent, selectors: [["app-user-list"]], hostBindings: function UserListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function UserListComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 51, consts: [["title", "Users List", 3, "breadCrumbs"], [3, "filterBy"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12", "relative", "justify-between", "mb-4"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "h-[60px]"], [3, "filter", "options"], [1, "col-span-12", "md:col-span-4", "w-[170px]", "xl:block", "hidden"], [3, "paginateItems", "openExtras", "sortChange", "selectionToggle", "viewItem", "selectable", "currentActivePopupId", "dataArr", "selections", "limit", "offset", "count", "showingUpper", "showingLower", "currentIndex", "loading", "columns", "actions"], [3, "closed", "confirm", "multipleDelete", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], ["placeholder", "Filter By Date Added", 3, "filter", "filterRange"]], template: function UserListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "app-user-cards", 1);
        \u0275\u0275listener("filterBy", function UserListComponent_Template_app_user_cards_filterBy_2_listener($event) {
          return ctx.listCompose.onFilterProps($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "app-admin-search-field", 6);
        \u0275\u0275listener("filter", function UserListComponent_Template_app_admin_search_field_filter_7_listener($event) {
          return ctx.listCompose.searchBy($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, UserListComponent_Conditional_8_Template, 2, 0, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "app-admin-table", 8);
        \u0275\u0275listener("paginateItems", function UserListComponent_Template_app_admin_table_paginateItems_9_listener($event) {
          return ctx.listCompose.paginateItems($event);
        })("openExtras", function UserListComponent_Template_app_admin_table_openExtras_9_listener($event) {
          return ctx.listCompose.openExtras($event);
        })("sortChange", function UserListComponent_Template_app_admin_table_sortChange_9_listener($event) {
          return ctx.listCompose.sortBy($event.field, $event.direction);
        })("selectionToggle", function UserListComponent_Template_app_admin_table_selectionToggle_9_listener($event) {
          return ctx.listCompose.toggleSelection($event);
        })("viewItem", function UserListComponent_Template_app_admin_table_viewItem_9_listener($event) {
          return ctx.manageUser($event._id);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "app-admin-modal", 9);
        \u0275\u0275listener("closed", function UserListComponent_Template_app_admin_modal_closed_10_listener() {
          return ctx.listCompose.toggleModal();
        })("confirm", function UserListComponent_Template_app_admin_modal_confirm_10_listener($event) {
          return ctx.listCompose.onModalDeleteConfirm($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(26, _c2, \u0275\u0275pureFunction0(24, _c02), \u0275\u0275pureFunction0(25, _c1)));
        \u0275\u0275advance(6);
        \u0275\u0275property("options", \u0275\u0275pureFunction4(33, _c7, \u0275\u0275pureFunction0(29, _c3), \u0275\u0275pureFunction0(30, _c4), \u0275\u0275pureFunction0(31, _c5), \u0275\u0275pureFunction0(32, _c6)));
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.listCompose.selections.length === 0 ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("selectable", false)("currentActivePopupId", ctx.listCompose.currentActivePopupId)("dataArr", ctx.listCompose.dataArr)("selections", ctx.listCompose.selections)("limit", ctx.listCompose.limit)("offset", ctx.listCompose.offset)("count", ctx.listCompose.count)("showingUpper", ctx.listCompose.showingUpper)("showingLower", ctx.listCompose.showingLower)("currentIndex", ctx.listCompose.currentIndex)("loading", ctx.listCompose.loading)("columns", \u0275\u0275pureFunction6(44, _c14, \u0275\u0275pureFunction0(38, _c8), \u0275\u0275pureFunction0(39, _c9), \u0275\u0275pureFunction0(40, _c10), \u0275\u0275pureFunction0(41, _c11), \u0275\u0275pureFunction0(42, _c12), \u0275\u0275pureFunction0(43, _c13)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("multipleDelete", ctx.listCompose.multipleDelete)("showModal", ctx.listCompose.showModal)("title", ctx.listCompose.modalTitle)("message", ctx.listCompose.modalMsg)("cancelButton", ctx.listCompose.modalCancelButton)("cancelText", ctx.listCompose.modalCancelText)("confirmText", ctx.listCompose.modalConfirmText)("confirmButon", ctx.listCompose.modalConfirmButton);
      }
    }, dependencies: [
      RouterModule,
      AdminModalComponent,
      UserCardsComponent,
      AdminPageContentComponent,
      AdminTableComponent,
      AdminSearchFieldComponent,
      AdminDateFilterFieldComponent,
      AdminTopBarComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent" });
})();
export {
  UserListComponent
};
//# sourceMappingURL=chunk-FRY2V372.js.map
