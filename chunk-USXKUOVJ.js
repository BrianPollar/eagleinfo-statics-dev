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
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  FrontendLogger,
  OperationalLocation
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  CurrencyPipe,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/operational-location/view-operational-location/view-operational-location.component.ts
var ViewOperationalLocationComponent = class _ViewOperationalLocationComponent {
  constructor(router, route, eventbus, apNme, mainBarTitle, currencyService, metaTagService, titleService) {
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.currencyService = currencyService;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.viewOneCompose = new ViewOneCompose(OperationalLocation, { route: ["/operational-location/update"], eventName: "updateOperationalLocation" }, this.router, this.route, this.eventbus);
    this.title = "View";
    this.breadCrumbs = [
      {
        name: "Dashboard",
        icon: "space_dashboard",
        link: "/"
      },
      {
        name: "Operational Location",
        icon: "location_city",
        link: "/operational-location/list"
      },
      {
        name: "View Operational Location",
        icon: "visibility"
      }
    ];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        yield this.viewOneCompose.init();
        this.title = this.viewOneCompose.oneItem?.placeName || "View";
        this.mainBarTitle.title = "View Operational Location - " + this.title;
        this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
        this.metaTagService.updateTag({
          name: "description",
          content: `Easily manage and edit your company details to
          ensure accurate information and effective business operations.`
        });
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  ngOnDestroy() {
    this.viewOneCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function ViewOperationalLocationComponent_Factory(t) {
      return new (t || _ViewOperationalLocationComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewOperationalLocationComponent, selectors: [["app-view-operational-location"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 97, vars: 17, consts: [[1, "grid", "grid-cols-1", "pb-6"], [3, "title", "breadCrumbs"], [1, "grid", "grid-cols-12", "gap-4", "mt-10", "items-center", "justify-center"], [1, "col-span-12", "md:col-span-6"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md"], [1, "card-body"], [1, "flex", "flex-col", "gap-3"], [1, "text-lg", "font-semibold", "flex", "items-center", "gap-2"], [1, "material-icons-outlined", "text-blue-500"], [1, "flex", "flex-row", "gap-2", "items-center"], [1, "material-icons-outlined", "text-gray-500"], [1, "text-gray-500", "font-medium"], [1, "font-medium"], [1, "flex", "flex-row", "gap-4", "items-center"], [1, "bg-primary", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded"], [1, "bg-green-500", "hover:bg-green-700", "text-white", "font-bold", "py-2", "px-4", "rounded", 3, "click"]], template: function ViewOperationalLocationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content")(1, "div", 0);
        \u0275\u0275element(2, "app-admin-back-bar", 1);
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h4", 7)(9, "i", 8);
        \u0275\u0275text(10, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " Receipt Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9)(13, "i", 10);
        \u0275\u0275text(14, "account_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275text(16, "Place Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 12);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 9)(20, "i", 10);
        \u0275\u0275text(21, "account_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 11);
        \u0275\u0275text(23, "City Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 12);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 9)(27, "i", 10);
        \u0275\u0275text(28, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 11);
        \u0275\u0275text(30, "Address:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 12);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 9)(34, "i", 10);
        \u0275\u0275text(35, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 11);
        \u0275\u0275text(37, "DeliversInDays:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 12);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 9)(41, "i", 10);
        \u0275\u0275text(42, "attach_money");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 11);
        \u0275\u0275text(44, "shippingCost:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 12);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 9)(49, "i", 10);
        \u0275\u0275text(50, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span", 11);
        \u0275\u0275text(52, "contactEmail:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "span", 12);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 9)(56, "i", 10);
        \u0275\u0275text(57, "phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span", 11);
        \u0275\u0275text(59, "contactPhone:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "span", 12);
        \u0275\u0275text(61);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 9)(63, "i", 10);
        \u0275\u0275text(64, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "span", 11);
        \u0275\u0275text(66, "Date Added:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "span", 12);
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "date");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(70, "div", 3)(71, "div", 4)(72, "div", 5)(73, "div", 6)(74, "h4", 7)(75, "i", 8);
        \u0275\u0275text(76, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " Co - Ordinates ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 9)(79, "i", 10);
        \u0275\u0275text(80, "account_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "span", 11);
        \u0275\u0275text(82, "Lat:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "span", 12);
        \u0275\u0275text(84);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 9)(86, "i", 10);
        \u0275\u0275text(87, "account_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "span", 11);
        \u0275\u0275text(89, "Long:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "span", 12);
        \u0275\u0275text(91);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 13)(93, "button", 14);
        \u0275\u0275text(94, " Update ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "button", 15);
        \u0275\u0275listener("click", function ViewOperationalLocationComponent_Template_button_click_95_listener() {
          return ctx.viewOneCompose.printDocument();
        });
        \u0275\u0275text(96, " Print ");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.placeName) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.cityName) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.address) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.deliversInDays) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 12, ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.shippingCost, ctx.currencyService.currency) || "N/A", " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.contactEmail) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.contactPhone) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(69, 15, ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.createdAt), " ");
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.coordinates == null ? null : ctx.viewOneCompose.oneItem.coordinates.latitude) || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", (ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.coordinates == null ? null : ctx.viewOneCompose.oneItem.coordinates.longitude) || "N/A", " ");
      }
    }, dependencies: [
      RouterModule,
      DatePipe,
      AdminBackBarComponent,
      CurrencyPipe,
      AdminPageContentComponent
    ], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewOperationalLocationComponent, { className: "ViewOperationalLocationComponent" });
})();
export {
  ViewOperationalLocationComponent
};
//# sourceMappingURL=chunk-USXKUOVJ.js.map
