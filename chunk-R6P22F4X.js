import {
  AdminTopBarComponent
} from "./chunk-RLWZ2B5Z.js";
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
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  Ecommerccut,
  FrontendLogger,
  navByBus
} from "./chunk-MC4HAW4O.js";
import {
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  CurrencyPipe,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresolveDocument,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/ecommerce-cut/ecommerce-cut-view/ecommerce-cut-view.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "home", link: "/" });
var _c1 = () => ({ name: "Ecommerce cut", icon: "receipt_long", link: "/ecommerce-cut" });
var _c2 = (a0, a1) => [a0, a1];
function EcommercCutListComponent_For_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 41)(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 42);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const customCut_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, customCut_r1.lowerAmount, ctx_r1.currencyService.currency), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, customCut_r1.upperAmount, ctx_r1.currencyService.currency), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", customCut_r1.percentage + "%", " ");
  }
}
var EcommercCutListComponent = class _EcommercCutListComponent {
  constructor(currencyService, windowService, router, eventbus, apNme, mainBarTitle, metaTagService, titleService) {
    this.currencyService = currencyService;
    this.windowService = windowService;
    this.router = router;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.posting = false;
    this.addButtText = "Add Ecommerce cut";
    this.addButtIcon = "add";
    this.loading = false;
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.currentActivePopupId = "";
  }
  onDocumentClick() {
    this.currentActivePopupId = "";
  }
  ngOnInit() {
    this.getEcomCut();
    this.mainBarTitle.title = "Ecommerce Cuts";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily manage and track your eCommerce cuts for effective financial oversight."
    });
    scrollToTop(this.windowService);
  }
  updateEcommerccut(ecommerceCut) {
    this.navigateByBus(["/ecommerce-cut/update"], "updateEcommerccut", ecommerceCut);
  }
  addEcommerccut() {
    this.router.navigate(["/ecommerce-cut/add"]);
  }
  getEcomCut() {
    return __async(this, null, function* () {
      try {
        this.loading = true;
        const found = yield Ecommerccut.getAll();
        FrontendLogger.debug("FOUND FOUND", found);
        if (found) {
          this.loading = false;
        }
        if (found && found.dataArr && found.dataArr[0]) {
          FrontendLogger.debug("FOUND FOUND", found.dataArr[0]);
          this.ecommerceCut = found.dataArr[0];
          this.addButtText = "Update Ecommerce Cut";
          this.addButtIcon = "visibility";
        }
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  static {
    this.\u0275fac = function EcommercCutListComponent_Factory(t) {
      return new (t || _EcommercCutListComponent)(\u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EcommercCutListComponent, selectors: [["app-ecommerce-cut-view"]], hostBindings: function EcommercCutListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function EcommercCutListComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 139, vars: 25, consts: [["title", "Ecommerce cut Details", 3, "breadCrumbs"], [1, "!min-h-[100vh]"], [1, "container-fluid", "px-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md"], [1, "card-body"], [1, "flex", "justify-center", "md:hidden"], ["src", "assets/images/expense.svg", "alt", "Expense", 1, "w-48", "h-48"], [1, "flex", "flex-col", "gap-4"], [1, "text-lg", "font-semibold", "flex", "items-center", "gap-2"], [1, "material-icons-outlined", "text-blue-500"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "flex-row", "gap-4", "items-center"], [1, "material-icons-outlined", "text-gray-500"], [1, "text-gray-500", "font-medium"], [1, "font-medium"], [1, "hidden", "md:flex", "justify-center", "items-center"], [1, "grid", "grid-cols-12", "relative", "justify-center", "items-center"], [1, "col-span-12", "md:col-span-4", "w-[200px]justify-center", "items-center", "mx-auto"], [3, "popper"], ["type", "button", 1, "mb-6", "w-[200px]", "flex", "items-center", "justify-center", "!bg-primary", "text-white", "border-transparent", "btn", "hover:bg-gray-200", "hover:!text-dark", 3, "click", "disabled"], [1, "material-icons-outlined", "mr-2"], ["width", "200", "height", "200", "viewBox", "0 0 200 200", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "20", "y", "20", "width", "160", "height", "160", "rx", "20", "fill", "#E8F0FE"], ["d", "M60 60H140V140H60V60Z", "fill", "#4285F4"], ["d", "M80 80H120V120H80V80Z", "fill", "white"], ["d", "M100 70V130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M70 100H130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L130 70", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L70 70", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L70 130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M100 100L130 130", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], [1, "grid", "grid-cols-1"], [1, "max-w-[700px]", "p-10"], ["id", "table-content", 1, "mb-5", "overflow-auto", "table-responsive", "!min-h-[calc(100vh-400px)]", "w-[100%]", "md:w-[95%]", "mx-auto"], [1, "table", "w-full", "table-striped", "table-hover", "rtl:text-left"], [1, "text-left", "bg-gray-100", "rtl:text-right"], [1, "whitespace-nowrap", "p-3", "border-b", "border-gray-300", "rtl:text-right"], [1, "flex", "flex-nowrap", "flex-row", "gap-1"], [1, "pt-2"], [1, ""], [1, "hover:bg-gray-50"], [1, "p-3"]], template: function EcommercCutListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
        \u0275\u0275element(8, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8)(10, "h4", 9)(11, "i", 10);
        \u0275\u0275text(12, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Ecommerce Cut lower Cut Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p");
        \u0275\u0275text(15, " This section provides details about the lower cut of the ecommerce cut. It includes the amount and percentage associated with the lower cut. The percantage is applied to an item with total cost equal to or less than the amount. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "i", 13);
        \u0275\u0275text(19, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 14);
        \u0275\u0275text(21, "Amount:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 15);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 12)(26, "i", 13);
        \u0275\u0275text(27, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 14);
        \u0275\u0275text(29, "Percentage:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 15);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(32, "div", 4)(33, "div", 5)(34, "div", 6);
        \u0275\u0275element(35, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 8)(37, "h4", 9)(38, "i", 10);
        \u0275\u0275text(39, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " Ecommerce Cut middle cut Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p");
        \u0275\u0275text(42, " This section provides details about the middle cut of the ecommerce cut. It includes the amount and percentage associated with the middle cut. The percantage is applied to an item with total cost greater than the lower cut amount and less than or equal to the upper cut amount. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 11)(44, "div", 12)(45, "i", 13);
        \u0275\u0275text(46, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span", 14);
        \u0275\u0275text(48, "Amount:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 15);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 12)(53, "i", 13);
        \u0275\u0275text(54, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span", 14);
        \u0275\u0275text(56, "Percentage:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span", 15);
        \u0275\u0275text(58);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(59, "div", 4)(60, "div", 5)(61, "div", 6);
        \u0275\u0275element(62, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 8)(64, "h4", 9)(65, "i", 10);
        \u0275\u0275text(66, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " Ecommerce Cut upper Cut Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "p");
        \u0275\u0275text(69, " This section provides details about the upper cut of the ecommerce cut. It includes the amount and percentage associated with the upper cut. The percantage is applied to an item with total cost greater than the amount. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 11)(71, "div", 12)(72, "i", 13);
        \u0275\u0275text(73, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "span", 14);
        \u0275\u0275text(75, "Amount:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "span", 15);
        \u0275\u0275text(77);
        \u0275\u0275pipe(78, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 12)(80, "i", 13);
        \u0275\u0275text(81, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "span", 14);
        \u0275\u0275text(83, "Percentage:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "span", 15);
        \u0275\u0275text(85);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(86, "div", 16)(87, "div", 17)(88, "div", 18)(89, "lib-tooltip", 19)(90, "button", 20);
        \u0275\u0275listener("click", function EcommercCutListComponent_Template_button_click_90_listener() {
          return ctx.ecommerceCut ? ctx.updateEcommerccut(ctx.ecommerceCut) : ctx.addEcommerccut();
        });
        \u0275\u0275elementStart(91, "i", 21);
        \u0275\u0275text(92);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "span");
        \u0275\u0275text(94);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(95, "div");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(96, "svg", 22);
        \u0275\u0275element(97, "rect", 23)(98, "path", 24)(99, "path", 25)(100, "path", 26)(101, "path", 27)(102, "path", 28)(103, "path", 29)(104, "path", 30)(105, "path", 31);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(106, "div", 32)(107, "div", 4)(108, "div", 33)(109, "h4");
        \u0275\u0275text(110, "Custom Cut");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "p");
        \u0275\u0275text(112, " This section provides details about the custom cut of the ecommerce cut. It includes the lower and upper amount and percentage associated with the custom cut. The percentage is applied to an item with total cost greater than the lower cut amount and less than or equal to the upper cut amount. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "p")(114, "strong");
        \u0275\u0275text(115, "NOTE: ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(116, " This is prioritized first");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(117, "div", 34)(118, "table", 35)(119, "thead")(120, "tr", 36)(121, "th", 37)(122, "div", 38)(123, "div", 39);
        \u0275\u0275text(124, "lower Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275element(125, "div", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "th", 37)(127, "div", 38)(128, "div", 39);
        \u0275\u0275text(129, "upper Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275element(130, "div", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "th", 37)(132, "div", 38)(133, "div", 39);
        \u0275\u0275text(134, "percentage");
        \u0275\u0275elementEnd();
        \u0275\u0275element(135, "div", 40);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(136, "tbody");
        \u0275\u0275repeaterCreate(137, EcommercCutListComponent_For_138_Template, 9, 9, "tr", 41, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(22, _c2, \u0275\u0275pureFunction0(20, _c0), \u0275\u0275pureFunction0(21, _c1)));
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 11, ctx.ecommerceCut == null ? null : ctx.ecommerceCut.lowerCut == null ? null : ctx.ecommerceCut.lowerCut.amount, ctx.currencyService.currency) || "N/A", " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", (ctx.ecommerceCut == null ? null : ctx.ecommerceCut.lowerCut == null ? null : ctx.ecommerceCut.lowerCut.percentage) + "%" || "N/A", " ");
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(51, 14, ctx.ecommerceCut == null ? null : ctx.ecommerceCut.middleCut == null ? null : ctx.ecommerceCut.middleCut.amount, ctx.currencyService.currency) || "N/A", " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", (ctx.ecommerceCut == null ? null : ctx.ecommerceCut.middleCut == null ? null : ctx.ecommerceCut.middleCut.percentage) + "%" || "N/A", " ");
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(78, 17, ctx.ecommerceCut == null ? null : ctx.ecommerceCut.upperCut == null ? null : ctx.ecommerceCut.upperCut.amount, ctx.currencyService.currency) || "N/A", " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", (ctx.ecommerceCut == null ? null : ctx.ecommerceCut.upperCut == null ? null : ctx.ecommerceCut.upperCut.percentage) + "%" || "N/A", " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("popper", "Edit Ecommerce cut Details.");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.addButtIcon);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.addButtText);
        \u0275\u0275advance(43);
        \u0275\u0275repeater(ctx.ecommerceCut == null ? null : ctx.ecommerceCut.customCut);
      }
    }, dependencies: [
      RouterModule,
      CurrencyPipe,
      TooltipComponent,
      AdminPageContentComponent,
      AdminTopBarComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EcommercCutListComponent, { className: "EcommercCutListComponent" });
})();
export {
  EcommercCutListComponent
};
//# sourceMappingURL=chunk-R6P22F4X.js.map
