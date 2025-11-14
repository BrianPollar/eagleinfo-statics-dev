import {
  AdminSetUpDnsComponent
} from "./chunk-Z55ATCMV.js";
import {
  AdminModalContainerComponent
} from "./chunk-KH3GICF4.js";
import "./chunk-QB4EFJNB.js";
import "./chunk-U3Y2ICWD.js";
import "./chunk-SC3J5HE4.js";
import "./chunk-WJJSEUQ7.js";
import "./chunk-ZAFBV4O5.js";
import {
  AdminTopBarComponent
} from "./chunk-RLWZ2B5Z.js";
import {
  AdminTableComponent
} from "./chunk-EWIFM267.js";
import "./chunk-TFHAZXT7.js";
import "./chunk-6C27QOWO.js";
import "./chunk-CIT33FWQ.js";
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
import "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  AutoDnsDomain,
  FrontendLogger,
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

// projects/shared-lib/src/lib/components/base/auto-dns/domain-list/domain-list.base.ts
var DomainListBase = class _DomainListBase {
  constructor(windowService, router, eventbus, apNme, mainBarTitle, metaTagService, titleService) {
    this.windowService = windowService;
    this.router = router;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.loading = false;
    this.domains = [];
    this.origDomains = [];
    this.posting = false;
    this.selections = [];
    this.isDeletingMany = false;
    this.showModal = false;
    this.filterProps = {};
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.currentActivePopupId = "";
    this.actions = [
      {
        label: "delete",
        icon: "delete",
        event: (item) => this.deleteDomainRel(item.id)
      }
    ];
  }
  onDocumentClick() {
    this.currentActivePopupId = "";
  }
  ngOnInit() {
    this.getDomains();
    this.mainBarTitle.title = "All Domains - Manage Domains";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily manage and view all company domains for effective communication tracking."
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
  getDomains() {
    return __async(this, null, function* () {
      try {
        this.loading = true;
        this.getErr = "";
        const domains = yield AutoDnsDomain.getAll();
        this.domains = domains;
        this.origDomains = domains;
      } catch (error) {
        FrontendLogger.error(error);
      } finally {
        this.loading = false;
      }
    });
  }
  deleteDomainRel(domain) {
    if (!domain) {
      FrontendLogger.error("DomainListComponent:deleteDomainRel:: - domain is undefined");
      return;
    }
    this.deleteDomain(domain);
  }
  deleteDomain(domain) {
    return __async(this, null, function* () {
      try {
        yield domain.remove();
        this.domains.length = 0;
        yield this.getDomains();
      } catch (error) {
        FrontendLogger.error("DomainListComponent:getDomains:: - err ", error);
      }
      this.showModal = false;
    });
  }
  setupDns() {
  }
  sortBy(val, direction) {
    this.domains = this.origDomains.sort((a, b) => {
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
    this.\u0275fac = function DomainListBase_Factory(t) {
      return new (t || _DomainListBase)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DomainListBase, hostBindings: function DomainListBase_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function DomainListBase_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { company: "company" } });
  }
};

// projects/admin-panel/src/app/components/pane/admin-domain-related/admin-auto-dns/admin-domain-list/admin-domain-list.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Domain List", icon: "dns" });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = () => ({ header: "Domain", field: "domain", sortable: true });
var _c4 = () => ({ header: "Web IP", field: "webIp", sortable: true });
var _c5 = () => ({ header: "Mail IP", field: "mailIp", sortable: true, removeWhen: "small" });
var _c6 = () => ({ header: "Zone ID", field: "zoneId", sortable: true, removeWhen: "small" });
var _c7 = () => ({ header: "Created At", field: "createdAt", sortable: true });
var _c8 = () => ({ header: "Updated At", field: "updatedAt", sortable: true });
var _c9 = () => ({ header: "Archived", field: "archived", sortable: true });
var _c10 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function AdminDomainListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "h3", 15);
    \u0275\u0275text(5, "Delete Domain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 16);
    \u0275\u0275listener("click", function AdminDomainListComponent_Conditional_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8, " \xD7 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, " Are you sure you want to Delete domain ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 20)(13, "button", 21);
    \u0275\u0275listener("click", function AdminDomainListComponent_Conditional_13_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(14, " Close ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(15, "div", 22);
  }
}
var AdminDomainListComponent = class _AdminDomainListComponent extends DomainListBase {
  constructor(windowService, router, eventbus, apNme, mainBarTitle, metaTagService, titleService) {
    super(windowService, router, eventbus, apNme, mainBarTitle, metaTagService, titleService);
    this.windowService = windowService;
    this.router = router;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.showSetupDnsModal = false;
  }
  setupDns() {
    this.showSetupDnsModal = true;
  }
  closeSetupDnsModal() {
    this.showSetupDnsModal = false;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.\u0275fac = function AdminDomainListComponent_Factory(t) {
      return new (t || _AdminDomainListComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDomainListComponent, selectors: [["app-admin-domain-list"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 16, vars: 37, consts: [["title", "Domain List", 3, "breadCrumbs"], [1, "card", "card", "!border", "!border-default-white-shade", "!border", "!border-default-white-shade", "rounded-2xl"], [1, "card-body"], [1, "grid", "grid-cols-12"], [1, "col-span-12", "md:col-span-4", "w-[170px]"], [3, "popper"], ["type", "button", 1, "mb-6", "flex", "items-center", "justify-center", "!bg-primary", "text-white", "border-transparent", "btn", "hover:bg-gray-200", "hover:!text-dark", 3, "click"], [1, "material-icons-outlined", "mr-2"], [3, "openExtras", "selectable", "currentActivePopupId", "dataArr", "selections", "columns", "actions"], [3, "closed", "showModal", "title", "message", "cancelButton", "cancelText", "confirmText", "confirmButon"], [3, "company"], [1, "overflow-x-hidden", "overflow-y-auto", "fixed", "inset-0", "z-50", "outline-none", "focus:outline-none", "justify-center", "items-center", "flex"], [1, "relative", "w-auto", "my-6", "mx-auto", "max-w-6xl"], [1, "border-0", "rounded-lg", "shadow-lg", "relative", "flex", "flex-col", "w-full", "!bg-default-white", "outline-none", "focus:outline-none"], [1, "flex", "items-start", "justify-between", "p-5", "border-b", "border-solid", "border-blueGray-200", "rounded-t"], [1, "text-3xl", "font-semibold"], [1, "p-1", "ml-auto", "bg-transparent", "border-0", "text-black", "opacity-5", "float-right", "text-3xl", "leading-none", "font-semibold", "outline-none", "focus:outline-none", 3, "click"], [1, "bg-transparent", "text-black", "opacity-5", "h-6", "w-6", "text-2xl", "block", "outline-none", "focus:outline-none"], [1, "relative", "p-6", "flex-auto"], [1, "my-4", "text-blueGray-500", "text-lg", "leading-relaxed"], [1, "flex", "items-center", "justify-end", "p-6", "border-t", "border-solid", "border-blueGray-200", "rounded-b"], ["type", "button", 1, "text-red-500", "background-transparent", "font-bold", "uppercase", "px-6", "py-2", "text-sm", "outline-none", "focus:outline-none", "mr-1", "mb-1", "ease-linear", "transition-all", "duration-150", 3, "click"], [1, "opacity-25", "fixed", "inset-0", "z-40", "bg-black"]], template: function AdminDomainListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "lib-tooltip", 5)(7, "button", 6);
        \u0275\u0275listener("click", function AdminDomainListComponent_Template_button_click_7_listener() {
          return ctx.setupDns();
        });
        \u0275\u0275elementStart(8, "i", 7);
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "Add Domain");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "app-admin-table", 8);
        \u0275\u0275listener("openExtras", function AdminDomainListComponent_Template_app_admin_table_openExtras_12_listener($event) {
          return ctx.openExtras($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(13, AdminDomainListComponent_Conditional_13_Template, 16, 0);
        \u0275\u0275elementStart(14, "app-admin-modal-container", 9);
        \u0275\u0275listener("closed", function AdminDomainListComponent_Template_app_admin_modal_container_closed_14_listener() {
          return ctx.closeSetupDnsModal();
        });
        \u0275\u0275element(15, "app-admin-set-up-dns", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(19, _c2, \u0275\u0275pureFunction0(17, _c0), \u0275\u0275pureFunction0(18, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("popper", "Add new domain here.");
        \u0275\u0275advance(6);
        \u0275\u0275property("selectable", true)("currentActivePopupId", ctx.currentActivePopupId)("dataArr", ctx.domains)("selections", ctx.selections)("columns", \u0275\u0275pureFunction7(29, _c10, \u0275\u0275pureFunction0(22, _c3), \u0275\u0275pureFunction0(23, _c4), \u0275\u0275pureFunction0(24, _c5), \u0275\u0275pureFunction0(25, _c6), \u0275\u0275pureFunction0(26, _c7), \u0275\u0275pureFunction0(27, _c8), \u0275\u0275pureFunction0(28, _c9)))("actions", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275conditional(13, ctx.showModal ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("showModal", ctx.showSetupDnsModal)("title", "Set Up Domain")("message", "Input domain name and we will set up dns for you")("cancelButton", true)("cancelText", "Close")("confirmText", "Set up Domain")("confirmButon", true);
        \u0275\u0275advance();
        \u0275\u0275property("company", ctx.company);
      }
    }, dependencies: [
      RouterModule,
      TooltipComponent,
      AdminTableComponent,
      AdminPageContentComponent,
      AdminTopBarComponent,
      AdminSetUpDnsComponent,
      AdminModalContainerComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDomainListComponent, { className: "AdminDomainListComponent" });
})();
export {
  AdminDomainListComponent
};
//# sourceMappingURL=chunk-Q5WBY5XW.js.map
