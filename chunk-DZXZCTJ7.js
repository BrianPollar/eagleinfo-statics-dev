import {
  AdminTopBarComponent
} from "./chunk-RLWZ2B5Z.js";
import {
  AdminTableComponent
} from "./chunk-EWIFM267.js";
import "./chunk-TFHAZXT7.js";
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
import "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  FrontendLogger,
  MailUser,
  getBizNestErrorResponseMessage,
  navByBus,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  Meta,
  Title,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction7,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/base/flying-mail/mail-list/mail-list.base.ts
var MailListBase = class _MailListBase {
  constructor(windowService, router, eventbus, toastr, apNme, mainBarTitle, metaTagService, titleService) {
    this.windowService = windowService;
    this.router = router;
    this.eventbus = eventbus;
    this.toastr = toastr;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.loading = false;
    this.mails = [];
    this.origMails = [];
    this.posting = false;
    this.selections = [];
    this.isDeletingMany = false;
    this.showModal = false;
    this.filterProps = {};
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.currentActivePopupId = "";
    this.actions = [
      {
        label: "Update",
        icon: "edit",
        event: (item) => this.editMail(item)
      }
    ];
  }
  onDocumentClick() {
    this.currentActivePopupId = "";
  }
  ngOnInit() {
    this.getMails();
    this.mainBarTitle.title = "All Mail Accounts - Manage Mail Accounts";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily manage and view all company mails for effective communication tracking."
    });
    const handlers = {};
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
    scrollToTop(this.windowService);
  }
  openExtras(id) {
    if (this.currentActivePopupId === id) {
      this.currentActivePopupId = "";
      return;
    }
    this.currentActivePopupId = id;
  }
  getMails() {
    return __async(this, null, function* () {
      try {
        this.loading = true;
        this.getErr = "";
        const mails = yield MailUser.getAll();
        this.mails = mails;
        this.origMails = mails;
      } catch (error) {
        FrontendLogger.error(error);
      } finally {
        this.loading = false;
      }
    });
  }
  deleteMailRel(mail) {
    if (!mail) {
      FrontendLogger.debug("MailListBase:deleteMailRel:: - mail is undefined");
      return;
    }
    this.deleteMail(mail);
  }
  deleteMail(mail) {
    return __async(this, null, function* () {
      this.showModal = false;
      try {
        yield mail.remove();
        this.mails.length = 0;
        yield this.getMails();
      } catch (error) {
        FrontendLogger.error("MailsListComponent:getMails:: - err ", error);
        this.toastr.error(getBizNestErrorResponseMessage(error), "Failed", {
          disableTimeOut: true
        });
      }
    });
  }
  editMail(mail) {
    this.navigateByBus(["/mail/update"], "updateMail", mail);
  }
  addMail() {
    this.router.navigate(["/mail/add"]);
  }
  sortBy(val, direction) {
    this.mails = this.origMails.sort((a, b) => {
      if (direction === "asc") {
        if (a[val] > b[val]) {
          return -1;
        } else if (a[val] < b[val]) {
          return 1;
        } else {
          return 0;
        }
      } else if (a[val] > b[val]) {
        return 1;
      } else if (a[val] < b[val]) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function MailListBase_Factory(t) {
      return new (t || _MailListBase)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _MailListBase, hostBindings: function MailListBase_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MailListBase_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    } });
  }
};

// projects/admin-panel/src/app/components/pane/admin-domain-related/admin-flying-mail/admin-mail-list/admin-mail-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Mail List", icon: "alternate_email" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ header: "Email", field: "email", sortable: true });
var _c4 = () => ({ header: "quotaBytes", field: "quotaBytes", sortable: true, removeWhen: "medium" });
var _c5 = () => ({ header: "messageLimit", field: "messageLimit", sortable: true, removeWhen: "medium" });
var _c6 = () => ({ header: "expiresAt", field: "expiresAt", sortable: true, removeWhen: "medium" });
var _c7 = () => ({ header: "isActive", field: "isActive", sortable: true, removeWhen: "medium" });
var _c8 = () => ({ header: "updatedAt", field: "updatedAt", sortable: true, removeWhen: "medium" });
var _c9 = () => ({ header: "Added On", field: "createdAt", sortable: true, removeWhen: "extra-large" });
var _c10 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function AdminMailListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "h3", 13);
    \u0275\u0275text(5, "Delete Email Accoutnt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 14);
    \u0275\u0275listener("click", function AdminMailListComponent_Conditional_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8, " \xD7 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 16)(10, "p", 17);
    \u0275\u0275text(11, " Are you sure you want to Delete Email Accoutnt ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 18)(13, "button", 19);
    \u0275\u0275listener("click", function AdminMailListComponent_Conditional_13_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(14, " Close ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(15, "div", 20);
  }
}
var AdminMailListComponent = class _AdminMailListComponent extends MailListBase {
  constructor(windowService, router, eventbus, toastr, apNme, mainBarTitle, metaTagService, titleService) {
    super(windowService, router, eventbus, toastr, apNme, mainBarTitle, metaTagService, titleService);
    this.windowService = windowService;
    this.router = router;
    this.eventbus = eventbus;
    this.toastr = toastr;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.\u0275fac = function AdminMailListComponent_Factory(t) {
      return new (t || _AdminMailListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminMailListComponent, selectors: [["app-admin-mail-list"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 14, vars: 29, consts: [["title", "Mail List", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "popper"], ["type", "button", 1, "mb-6", "flex", "items-center", "justify-center", "!bg-primary", "text-white", "border-transparent", "btn", "hover:bg-gray-200", "hover:!text-dark", 3, "click"], [1, "material-icons-outlined", "mr-2"], [3, "openExtras", "selectable", "currentActivePopupId", "dataArr", "selections", "columns", "actions"], [1, "overflow-x-hidden", "overflow-y-auto", "fixed", "inset-0", "z-50", "outline-none", "focus:outline-none", "justify-center", "items-center", "flex"], [1, "relative", "w-auto", "my-6", "mx-auto", "max-w-6xl"], [1, "border-0", "rounded-lg", "shadow-lg", "relative", "flex", "flex-col", "w-full", "!bg-default-white", "outline-none", "focus:outline-none"], [1, "flex", "items-start", "justify-between", "p-5", "border-b", "border-solid", "border-blueGray-200", "rounded-t"], [1, "text-3xl", "font-semibold"], [1, "p-1", "ml-auto", "bg-transparent", "border-0", "text-black", "opacity-5", "float-right", "text-3xl", "leading-none", "font-semibold", "outline-none", "focus:outline-none", 3, "click"], [1, "bg-transparent", "text-black", "opacity-5", "h-6", "w-6", "text-2xl", "block", "outline-none", "focus:outline-none"], [1, "relative", "p-6", "flex-auto"], [1, "my-4", "text-blueGray-500", "text-lg", "leading-relaxed"], [1, "flex", "items-center", "justify-end", "p-6", "border-t", "border-solid", "border-blueGray-200", "rounded-b"], ["type", "button", 1, "text-red-500", "background-transparent", "font-bold", "uppercase", "px-6", "py-2", "text-sm", "outline-none", "focus:outline-none", "mr-1", "mb-1", "ease-linear", "transition-all", "duration-150", 3, "click"], [1, "opacity-25", "fixed", "inset-0", "z-40", "bg-black"]], template: function AdminMailListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "lib-tooltip", 5)(7, "button", 6);
        \u0275\u0275listener("click", function AdminMailListComponent_Template_button_click_7_listener() {
          return ctx.addMail();
        });
        \u0275\u0275elementStart(8, "i", 7);
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "Add Mail");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "app-admin-table", 8);
        \u0275\u0275listener("openExtras", function AdminMailListComponent_Template_app_admin_table_openExtras_12_listener($event) {
          return ctx.openExtras($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(13, AdminMailListComponent_Conditional_13_Template, 16, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(11, _c2, \u0275\u0275pureFunction0(9, _c0), \u0275\u0275pureFunction0(10, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("popper", "Add new mail account here.");
        \u0275\u0275advance(6);
        \u0275\u0275property("selectable", true)("currentActivePopupId", ctx.currentActivePopupId)("dataArr", ctx.mails)("selections", ctx.selections)("columns", \u0275\u0275pureFunction7(21, _c10, \u0275\u0275pureFunction0(14, _c3), \u0275\u0275pureFunction0(15, _c4), \u0275\u0275pureFunction0(16, _c5), \u0275\u0275pureFunction0(17, _c6), \u0275\u0275pureFunction0(18, _c7), \u0275\u0275pureFunction0(19, _c8), \u0275\u0275pureFunction0(20, _c9)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275conditional(13, ctx.showModal ? 13 : -1);
      }
    }, dependencies: [
      RouterModule,
      TooltipComponent,
      AdminTableComponent,
      AdminPageContentComponent,
      AdminTopBarComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminMailListComponent, { className: "AdminMailListComponent" });
})();
export {
  AdminMailListComponent
};
//# sourceMappingURL=chunk-DZXZCTJ7.js.map
