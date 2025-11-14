import {
  AdminInvitingManagerModalComponent
} from "./chunk-HZCUFPTO.js";
import {
  ManageUserProfileCoreComponent
} from "./chunk-WGMC7XF2.js";
import {
  ViewOneCompose
} from "./chunk-BMZBVPCI.js";
import "./chunk-4V6DDROJ.js";
import "./chunk-ABZXXWE3.js";
import "./chunk-WUIF36DZ.js";
import "./chunk-7OBDCAFX.js";
import "./chunk-WJJSEUQ7.js";
import {
  AdminBackBarComponent
} from "./chunk-RPZGEB5Y.js";
import "./chunk-IOIIXNZS.js";
import "./chunk-ANHFC4IG.js";
import {
  openClose
} from "./chunk-6C27QOWO.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
import "./chunk-AKDPFH6R.js";
import "./chunk-O454IXIK.js";
import {
  AdminPageContentComponent
} from "./chunk-LWX77LXW.js";
import "./chunk-G2DKIAK6.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import "./chunk-4KKGHO4P.js";
import "./chunk-UIKF3Q7X.js";
import "./chunk-RMIF5JQ2.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import "./chunk-LARJQE5I.js";
import "./chunk-H6XV6YF3.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  DeliveryManager,
  EagleInfoClientError,
  FrontendLogger,
  getBizNestErrorResponseMessage
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/manager-related/delivery-manager/view-delivery-manager/view-delivery-manager.component.ts
function ViewDeliveryManagerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-manage-user-profile-core", 4);
    \u0275\u0275listener("inviteUser", function ViewDeliveryManagerComponent_Conditional_3_Template_app_manage_user_profile_core_inviteUser_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.invite());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("user", ctx_r1.user)("authUser", ctx_r1.authUser)("inviting", ctx_r1.inviting)("canInvite", ctx_r1.canInvite);
  }
}
var ViewDeliveryManagerComponent = class _ViewDeliveryManagerComponent {
  constructor(router, route, eventbus, toastr, apNme, mainBarTitle, metaTagService, titleService) {
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.toastr = toastr;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.viewOneCompose = new ViewOneCompose(DeliveryManager, { route: ["/delivery-manager/update"], eventName: "updateDeliveryManager" }, this.router, this.route, this.eventbus);
    this.title = "View";
    this.breadCrumbs = [
      {
        name: "Dashboard",
        icon: "space_dashboard",
        link: "/"
      },
      {
        name: "Delivery Manager",
        icon: "supervisor_account",
        link: "/delivery-manager/list"
      },
      {
        name: "View Delivery Manager",
        icon: "visibility"
      }
    ];
    this.inviting = false;
    this.showModal = false;
  }
  get authUser() {
    return typeof this.viewOneCompose?.oneItem?.manager === "string" ? void 0 : this.viewOneCompose?.oneItem?.manager.authUser;
  }
  get user() {
    return typeof this.viewOneCompose?.oneItem?.manager === "string" ? void 0 : this.viewOneCompose?.oneItem?.manager;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        yield this.viewOneCompose.init();
        this.canInvite = !this.viewOneCompose.oneItem?.manager.canLogin;
        const names = typeof this.viewOneCompose.oneItem?.manager === "string" ? "" : this.viewOneCompose.oneItem?.manager.firstName + " " + this.viewOneCompose.oneItem?.manager.lastName;
        this.title = names || "View";
        this.mainBarTitle.title = "View Delivery Manager - " + this.title;
        this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
        this.metaTagService.updateTag({
          name: "description",
          content: `Easily manage and edit your deliverymanager details to
          ensure accurate information and effective business operations.`
        });
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  invite() {
    return __async(this, null, function* () {
      if (!this.viewOneCompose.oneItem) {
        throw new EagleInfoClientError("no item found");
      }
      try {
        this.inviting = true;
        this.showModal = true;
        const res = yield this.viewOneCompose.oneItem.invite({
          email: this.viewOneCompose.oneItem.manager.email,
          phone: this.viewOneCompose.oneItem.manager.phone,
          phoneCode: "",
          method: "email",
          managerId: this.viewOneCompose.oneItem._id
        });
        FrontendLogger.debug("INVITE res", res);
        this.toastr.success("Staff invited successfully", "Success");
      } catch (error) {
        FrontendLogger.error(error);
        this.toastr.error(getBizNestErrorResponseMessage(error), "Error");
      } finally {
        this.inviting = false;
        this.showModal = false;
      }
    });
  }
  ngOnDestroy() {
    this.viewOneCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function ViewDeliveryManagerComponent_Factory(t) {
      return new (t || _ViewDeliveryManagerComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewDeliveryManagerComponent, selectors: [["app-view-delivery-manager"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 4, consts: [[1, "grid", "grid-cols-1", "pb-6"], [3, "title", "breadCrumbs"], [3, "user", "authUser", "inviting", "canInvite"], [3, "showModal"], [3, "inviteUser", "user", "authUser", "inviting", "canInvite"]], template: function ViewDeliveryManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content")(1, "div", 0);
        \u0275\u0275element(2, "app-admin-back-bar", 1);
        \u0275\u0275template(3, ViewDeliveryManagerComponent_Conditional_3_Template, 1, 4, "app-manage-user-profile-core", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(4, "app-admin-inviting-manager-modal", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.mainBarTitle.title)("breadCrumbs", ctx.breadCrumbs);
        \u0275\u0275advance();
        \u0275\u0275conditional(3, ctx.viewOneCompose.oneItem ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("showModal", ctx.showModal);
      }
    }, dependencies: [
      RouterModule,
      AdminBackBarComponent,
      AdminPageContentComponent,
      ManageUserProfileCoreComponent,
      AdminInvitingManagerModalComponent
    ], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewDeliveryManagerComponent, { className: "ViewDeliveryManagerComponent" });
})();
export {
  ViewDeliveryManagerComponent
};
//# sourceMappingURL=chunk-27LQ7II7.js.map
