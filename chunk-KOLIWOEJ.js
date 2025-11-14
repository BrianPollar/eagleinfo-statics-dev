import {
  ViewOneCompose
} from "./chunk-BMZBVPCI.js";
import {
  AdminBackBarComponent
} from "./chunk-RPZGEB5Y.js";
import {
  openClose
} from "./chunk-6C27QOWO.js";
import "./chunk-AKDPFH6R.js";
import "./chunk-O454IXIK.js";
import {
  AdminPageContentComponent
} from "./chunk-LWX77LXW.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import "./chunk-4KKGHO4P.js";
import "./chunk-UIKF3Q7X.js";
import "./chunk-RMIF5JQ2.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  NotificationApiKey
} from "./chunk-DEKWU2RH.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  FrontendLogger,
  navByBus
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  DatePipe,
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
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/notification/notif-key/view-notif-key/view-notif-key.component.ts
var ViewNotifKeyComponent = class _ViewNotifKeyComponent {
  constructor(router, route, eventbus, apNme, mainBarTitle, metaTagService, titleService) {
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.viewOneCompose = new ViewOneCompose(NotificationApiKey, { route: ["/notif-key/update"], eventName: "updateNotificationApiKey" }, this.router, this.route, this.eventbus);
    this.title = "View";
    this.breadCrumbs = [
      {
        name: "Dashboard",
        icon: "space_dashboard",
        link: "/"
      },
      {
        name: "Notification Key List",
        icon: "assessment",
        link: "/notif-key/list"
      },
      {
        name: "View Notification Key",
        icon: "visibility"
      }
    ];
    this.actions = [
      {
        label: "View",
        icon: "visibility"
      },
      {
        label: "Delete",
        icon: "delete"
      }
    ];
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        yield this.viewOneCompose.init();
        this.title = this.viewOneCompose.oneItem?.owner || "View";
        this.mainBarTitle.title = "View Notification Key - " + this.title;
        this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
        this.metaTagService.updateTag({
          name: "description",
          content: `View and manage the details of
        an notification key to ensure accurate
        information and effective business operations.`
        });
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  viewCompany(company) {
    this.viewOneCompose.navigateByBus(["/company/view/" + company.urId], "oneItem", company);
  }
  viewcompany(company) {
    this.navigateByBus(["/company/view/" + company.urId], "oneItem", company);
  }
  ngOnDestroy() {
    this.viewOneCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function ViewNotifKeyComponent_Factory(t) {
      return new (t || _ViewNotifKeyComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewNotifKeyComponent, selectors: [["app-view-notif-key"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 89, vars: 12, consts: [[1, "grid", "grid-cols-1", "pb-6"], [3, "title", "breadCrumbs"], [1, "!min-h-[100vh]"], [1, "page-content"], [1, "container-fluid", "px-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md"], [1, "card-body"], [1, "flex", "flex-col", "gap-4"], [1, "text-lg", "font-semibold", "flex", "items-center", "gap-2"], [1, "material-icons-outlined", "text-blue-500"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "flex-row", "gap-4", "items-center"], [1, "material-icons-outlined", "text-gray-500"], [1, "text-gray-500", "font-medium"], [1, "font-medium"], [1, "bg-primary", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded", 3, "click"], [1, "bg-green-500", "hover:bg-green-700", "text-white", "font-bold", "py-2", "px-4", "rounded", 3, "click"], [1, "hidden", "md:flex", "justify-center", "items-center", "prevent-print"], ["width", "200", "height", "200", "viewBox", "0 0 200 200", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "20", "y", "20", "width", "160", "height", "160", "rx", "20", "fill", "#E8F0FE"], ["d", "M60 60H140V140H60V60Z", "fill", "#4285F4"], ["d", "M80 80H120V120H80V80Z", "fill", "white"], ["d", "M100 70V130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M70 100H130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L130 70", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L70 70", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L70 130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L130 130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"]], template: function ViewNotifKeyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content")(1, "div", 0);
        \u0275\u0275element(2, "app-admin-back-bar", 1);
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 0)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "h4", 9)(12, "i", 10);
        \u0275\u0275text(13, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Notification Key Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "i", 13);
        \u0275\u0275text(18, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 14);
        \u0275\u0275text(20, "API Key:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 15);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 12)(24, "i", 13);
        \u0275\u0275text(25, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 14);
        \u0275\u0275text(27, "Enabled:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 15);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 12)(31, "i", 13);
        \u0275\u0275text(32, "attach_money");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 14);
        \u0275\u0275text(34, "expiresAt:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 15);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 12)(38, "i", 13);
        \u0275\u0275text(39, "attach_money");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span", 14);
        \u0275\u0275text(41, "maxEmails:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "span", 15);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 12)(45, "i", 13);
        \u0275\u0275text(46, "attach_money");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span", 14);
        \u0275\u0275text(48, "maxSms:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 15);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 12)(52, "i", 13);
        \u0275\u0275text(53, "attach_money");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "span", 14);
        \u0275\u0275text(55, "usedEmails:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span", 15);
        \u0275\u0275text(57);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 12)(59, "i", 13);
        \u0275\u0275text(60, "attach_money");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "span", 14);
        \u0275\u0275text(62, "usedSms:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "span", 15);
        \u0275\u0275text(64);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 12)(66, "i", 13);
        \u0275\u0275text(67, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "span", 14);
        \u0275\u0275text(69, "Date Added:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "span", 15);
        \u0275\u0275text(71);
        \u0275\u0275pipe(72, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 12)(74, "button", 16);
        \u0275\u0275listener("click", function ViewNotifKeyComponent_Template_button_click_74_listener() {
          return ctx.viewOneCompose.update();
        });
        \u0275\u0275text(75, " Update ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "button", 17);
        \u0275\u0275listener("click", function ViewNotifKeyComponent_Template_button_click_76_listener() {
          return ctx.viewOneCompose.printDocument();
        });
        \u0275\u0275text(77, " Print ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(78, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(79, "svg", 19);
        \u0275\u0275element(80, "rect", 20)(81, "path", 21)(82, "path", 22)(83, "path", 23)(84, "path", 24)(85, "path", 25)(86, "path", 26)(87, "path", 27)(88, "path", 28);
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance(20);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.apiKey) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.enabled) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.expiresAt) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.maxEmails) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.maxSms) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.usedEmails) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.usedSms) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(72, 10, ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.createdAt), " ");
      }
    }, dependencies: [
      RouterModule,
      AdminBackBarComponent,
      DatePipe,
      AdminPageContentComponent
    ], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewNotifKeyComponent, { className: "ViewNotifKeyComponent" });
})();
export {
  ViewNotifKeyComponent
};
//# sourceMappingURL=chunk-KOLIWOEJ.js.map
