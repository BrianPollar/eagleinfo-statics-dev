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
  User
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  EagleInfoClientError,
  EcommerceOrder,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/company-related/ecommerce-order/view-ecommerce-order/view-ecommerce-order.component.ts
var _forTrack0 = ($index, $item) => $item._id;
function ViewEcommerceOrderComponent_For_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ViewEcommerceOrderComponent_For_91_Template_button_click_0_listener() {
      const payment_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewReceipt(payment_r2));
    });
    \u0275\u0275text(1, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 10)(3, "i", 11);
    \u0275\u0275text(4, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6, "Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 10)(10, "i", 11);
    \u0275\u0275text(11, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 12);
    \u0275\u0275text(13, "Payment Mode:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10)(17, "i", 11);
    \u0275\u0275text(18, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 12);
    \u0275\u0275text(20, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 13);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 10)(24, "i", 11);
    \u0275\u0275text(25, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 12);
    \u0275\u0275text(27, "Date Added:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 13);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const payment_r2 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", payment_r2.amount || "N/A", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", payment_r2.paymentMode || "N/A", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", payment_r2.receiptType || "N/A", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 4, payment_r2 == null ? null : payment_r2.createdAt), " ");
  }
}
var ViewEcommerceOrderComponent = class _ViewEcommerceOrderComponent {
  constructor(router, route, eventbus, apNme, mainBarTitle, metaTagService, titleService) {
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.viewOneCompose = new ViewOneCompose(EcommerceOrder, { route: ["/ecommerce-order/update"], eventName: "updateEcommerceOrder" }, this.router, this.route, this.eventbus);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.title = "View";
    this.breadCrumbs = [
      {
        name: "Dashboard",
        icon: "",
        link: "/"
      },
      {
        name: "EcommerceOrder",
        icon: "",
        link: "/ecommerce-order/list"
      },
      {
        name: "View EcommerceOrder",
        icon: "visibility"
      }
    ];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        yield this.viewOneCompose.init();
        this.getBillingUser();
        this.title = this.viewOneCompose.oneItem?.urId || "View";
        this.mainBarTitle.title = "View EcommerceOrder - " + this.title;
        this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
        this.metaTagService.updateTag({
          name: "description",
          content: `Easily manage and edit order details to
          ensure accurate information and effective business operations.`
        });
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getBillingUser() {
    return __async(this, null, function* () {
      if (!this.viewOneCompose.oneItem) {
        throw new EagleInfoClientError("EcommerceOrder not found");
      }
      if (typeof this.viewOneCompose.oneItem.invoice.invoiceRelated?.billingUser === "object") {
        return;
      }
      ;
      const id = typeof this.viewOneCompose.oneItem.invoice.invoiceRelated?.billingUser === "string" ? this.viewOneCompose.oneItem.invoice.invoiceRelated?.billingUser : this.viewOneCompose.oneItem?.invoice.invoiceRelated.billingUser?._id;
      try {
        const one = yield User.getOne(id);
        return one;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getBillingUserInfo() {
    return this.viewOneCompose.oneItem?.invoice.invoiceRelated.billingUser;
  }
  getBillingUserInfoNames() {
    if (!this.viewOneCompose.oneItem?.invoice.invoiceRelated.billingUser || typeof this.viewOneCompose.oneItem?.invoice.invoiceRelated.billingUser === "string") {
      return "";
    }
    return this.viewOneCompose.oneItem?.invoice.invoiceRelated.billingUser?.firstName + " " + this.viewOneCompose.oneItem?.invoice.invoiceRelated.billingUser?.lastName;
  }
  viewReceipt(receipt) {
    this.navigateByBus(["/ecommerce-order/receipt/view/" + receipt?.urId], "oneItem", receipt);
  }
  ngOnDestroy() {
    this.viewOneCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function ViewEcommerceOrderComponent_Factory(t) {
      return new (t || _ViewEcommerceOrderComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewEcommerceOrderComponent, selectors: [["app-ecommerce-view-order"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 92, vars: 16, consts: [[1, "grid", "grid-cols-1", "pb-6"], [3, "title", "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md", "!mt-10", "min-h-[100vh]"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "md:col-span-6"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md"], [1, "card-body"], [1, "flex", "flex-col", "gap-3"], [1, "text-lg", "font-semibold", "flex", "items-center", "gap-2"], [1, "material-icons-outlined", "text-blue-500"], [1, "flex", "flex-row", "gap-2", "items-center"], [1, "material-icons-outlined", "text-gray-500"], [1, "text-gray-500", "font-medium"], [1, "font-medium"], [1, ""], [1, "", 3, "click"]], template: function ViewEcommerceOrderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content")(1, "div", 0);
        \u0275\u0275element(2, "app-admin-back-bar", 1);
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "h4", 8)(10, "i", 9);
        \u0275\u0275text(11, "business");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " EcommerceOrder Info ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "i", 11);
        \u0275\u0275text(15, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 12);
        \u0275\u0275text(17, "Id:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 13);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 10)(21, "i", 11);
        \u0275\u0275text(22, "toggle_on");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 12);
        \u0275\u0275text(24, "Status :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 13);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 10)(28, "i", 11);
        \u0275\u0275text(29, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 12);
        \u0275\u0275text(31, "Date Added:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 13);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 10)(36, "i", 11);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 12);
        \u0275\u0275text(39, "Total Price:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span", 13);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(42, "div", 4)(43, "div", 5)(44, "div", 6)(45, "div", 7)(46, "h4", 8)(47, "i", 9);
        \u0275\u0275text(48, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, " Customer Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 10)(51, "i", 11);
        \u0275\u0275text(52, "account_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "span", 12);
        \u0275\u0275text(54, "Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span", 13);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 10)(58, "i", 11);
        \u0275\u0275text(59, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "span", 12);
        \u0275\u0275text(61, "Email:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span", 13);
        \u0275\u0275text(63);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 10)(65, "i", 11);
        \u0275\u0275text(66, "phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "span", 12);
        \u0275\u0275text(68, "Phone:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "span", 13);
        \u0275\u0275text(70);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 10)(72, "i", 11);
        \u0275\u0275text(73, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "span", 12);
        \u0275\u0275text(75, "Date Added:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "span", 13);
        \u0275\u0275text(77);
        \u0275\u0275pipe(78, "date");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(79, "div", 4)(80, "div", 5)(81, "div", 6)(82, "div", 7)(83, "div", 10)(84, "h4", 8)(85, "i", 9);
        \u0275\u0275text(86, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275text(87, " Receipt Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "h5", 14);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(90, ViewEcommerceOrderComponent_For_91_Template, 31, 6, null, null, _forTrack0);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate(ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.urId);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.ecommerceOrderStatus, " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 12, ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.createdAt), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.ecommerceOrderStatus);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.invoice == null ? null : ctx.viewOneCompose.oneItem.invoice.totalPayments, " ");
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate1(" ", ctx.getBillingUserInfoNames() || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.getBillingUserInfo().email || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.getBillingUserInfo().phone || "N/A", " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 14, ctx.getBillingUserInfo().createdAt), " ");
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1(" Total: ", ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.invoice == null ? null : ctx.viewOneCompose.oneItem.invoice.invoiceRelated == null ? null : ctx.viewOneCompose.oneItem.invoice.invoiceRelated.totalCost, " ");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.viewOneCompose.oneItem == null ? null : ctx.viewOneCompose.oneItem.invoice == null ? null : ctx.viewOneCompose.oneItem.invoice.payments);
      }
    }, dependencies: [
      RouterModule,
      DatePipe,
      AdminBackBarComponent,
      AdminPageContentComponent
    ], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewEcommerceOrderComponent, { className: "ViewEcommerceOrderComponent" });
})();
export {
  ViewEcommerceOrderComponent
};
//# sourceMappingURL=chunk-QZRPDU4M.js.map
