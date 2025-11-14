import {
  ManageUserProfileCoreComponent
} from "./chunk-WGMC7XF2.js";
import "./chunk-4V6DDROJ.js";
import "./chunk-ABZXXWE3.js";
import "./chunk-WUIF36DZ.js";
import "./chunk-7OBDCAFX.js";
import "./chunk-WJJSEUQ7.js";
import "./chunk-IOIIXNZS.js";
import "./chunk-ANHFC4IG.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
import "./chunk-AKDPFH6R.js";
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
import "./chunk-RMIF5JQ2.js";
import "./chunk-YESK3NVV.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import "./chunk-H6XV6YF3.js";
import {
  User
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  EagleInfoClientError,
  FrontendLogger,
  getBizNestErrorResponseMessage
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  RouterModule
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
  ɵɵproperty
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/user-related/manage-user-profile/manage-user-profile.component.ts
var ManageUserProfileComponent = class _ManageUserProfileComponent {
  constructor(windowService, route, apNme, toastrService, mainBarTitle, metaTagService, titleService) {
    this.windowService = windowService;
    this.route = route;
    this.apNme = apNme;
    this.toastrService = toastrService;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.loading = false;
    this.id = this.route.snapshot?.params["id"];
  }
  ngOnInit() {
    this.setTitle();
    scrollToTop(this.windowService);
    if (!this.user) {
      this.getUser();
    }
  }
  setTitle() {
    if (this.user) {
      this.mainBarTitle.title = "Manage User Profile " + this.user.firstName + " " + this.user?.lastName;
      this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
      this.metaTagService.updateTag({
        name: "description",
        content: `Easily manage and view user profiles for your
      organization to ensure effective oversight and engagement.`
      });
    }
  }
  getUser() {
    return __async(this, null, function* () {
      if (!this.id) {
        throw new EagleInfoClientError("no user id");
      }
      try {
        this.loading = true;
        const user = yield User.getOne(this.id);
        if (user) {
          this.user = user;
          this.setTitle();
        }
      } catch (error) {
        FrontendLogger.error(error);
        this.toastrService.error(getBizNestErrorResponseMessage(error), "Error");
      } finally {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function ManageUserProfileComponent_Factory(t) {
      return new (t || _ManageUserProfileComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageUserProfileComponent, selectors: [["app-manage-user-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [[3, "user", "authUser"]], template: function ManageUserProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-manage-user-profile-core", 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("user", ctx.user)("authUser", ctx.id);
      }
    }, dependencies: [
      RouterModule,
      AdminPageContentComponent,
      ManageUserProfileCoreComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.page-content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 2rem;\n}\n.page-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 1rem;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to right,\n      #3f51b5,\n      #673ab7);\n  color: white;\n  padding: 2rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n  border: 4px solid white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: white;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .status-indicator.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .status-indicator.inactive[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #e0e0e0;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  border-bottom: 1px solid #e0e0e0;\n  padding-bottom: 0.75rem;\n  margin-bottom: 1rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #424242;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 600;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .status-pill.verified[_ngcontent-%COMP%] {\n  background-color: #b5dfb7;\n  color: #1e441f;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .status-pill.unverified[_ngcontent-%COMP%] {\n  background-color: #fccbc7;\n  color: #891008;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  border-top: 1px solid #e0e0e0;\n  padding: 2rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .permissions-card[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .permissions-card[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .permissions-card[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  position: relative;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .permissions-card[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked {\n  border-color: #3f51b5;\n  background-color: #3f51b5;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .permissions-card[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked::before {\n  content: "\\2713";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 0.8rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .activity-card[_ngcontent-%COMP%]   .activity-details[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .view-history-button[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  transition: background-color 0.3s ease;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .view-history-button[_ngcontent-%COMP%]:hover {\n  background-color: #32408f;\n}\n.page-content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20rem;\n}\n.page-content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  border-color: #3f51b5;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/manage-user-profile.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageUserProfileComponent, { className: "ManageUserProfileComponent" });
})();
export {
  ManageUserProfileComponent
};
//# sourceMappingURL=chunk-SRI33ENS.js.map
