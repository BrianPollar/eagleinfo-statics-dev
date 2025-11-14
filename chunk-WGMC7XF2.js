import {
  AuditLogGroupComponent
} from "./chunk-4V6DDROJ.js";
import {
  SuperPermissionsComponent
} from "./chunk-WUIF36DZ.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
import {
  scrollToTop
} from "./chunk-G2DKIAK6.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import {
  User,
  UserIp,
  UserLoginAttempt,
  updateUserPermissions
} from "./chunk-H7TI67RE.js";
import {
  EagleInfoClientError,
  FrontendLogger,
  getBizNestErrorResponseMessage
} from "./chunk-MC4HAW4O.js";
import {
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  DatePipe,
  EventEmitter,
  NgClass,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/user-related/manage-user-profile-core/manage-user-profile-core.component.ts
var _c0 = (a0, a1) => ({ active: a0, inactive: a1 });
var _c1 = (a0, a1) => ({ verified: a0, unverified: a1 });
function ManageUserProfileCoreComponent_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h3");
    \u0275\u0275text(2, "Invite User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "button", 22);
    \u0275\u0275listener("click", function ManageUserProfileCoreComponent_Conditional_2_Conditional_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.emitInvite());
    });
    \u0275\u0275text(5, " Invite Now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.inviting);
  }
}
function ManageUserProfileCoreComponent_Conditional_2_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 23);
    \u0275\u0275text(2, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275element(4, "lib-super-permissions", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("manager", ctx_r2.user)("saveButton", true);
  }
}
function ManageUserProfileCoreComponent_Conditional_2_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3", 23);
    \u0275\u0275text(2, "User Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "div", 26);
    \u0275\u0275element(5, "app-audit-log-group", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("id", ctx_r2.user._id);
  }
}
function ManageUserProfileCoreComponent_Conditional_2_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 28);
    \u0275\u0275listener("click", function ManageUserProfileCoreComponent_Conditional_2_Conditional_57_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewUserLogingHist());
    });
    \u0275\u0275text(2, " View Login History ");
    \u0275\u0275elementEnd()();
  }
}
function ManageUserProfileCoreComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275element(4, "img", 6);
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "h1");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 9)(13, "div", 10);
    \u0275\u0275template(14, ManageUserProfileCoreComponent_Conditional_2_Conditional_14_Template, 6, 1, "div", 11);
    \u0275\u0275elementStart(15, "div", 12)(16, "h3");
    \u0275\u0275text(17, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 13);
    \u0275\u0275listener("click", function ManageUserProfileCoreComponent_Conditional_2_Template_span_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editUser());
    });
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 14)(21, "span");
    \u0275\u0275text(22, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 15)(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 14)(29, "span");
    \u0275\u0275text(30, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 12)(34, "h3");
    \u0275\u0275text(35, "Account Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 14)(37, "span");
    \u0275\u0275text(38, "Registration Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 14)(43, "span");
    \u0275\u0275text(44, "Last Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 14)(49, "span");
    \u0275\u0275text(50, "Account Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 16);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(53, "div", 17)(54, "div", 10);
    \u0275\u0275template(55, ManageUserProfileCoreComponent_Conditional_2_Conditional_55_Template, 5, 2, "div", 18)(56, ManageUserProfileCoreComponent_Conditional_2_Conditional_56_Template, 6, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, ManageUserProfileCoreComponent_Conditional_2_Conditional_57_Template, 3, 0, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate1("alt", "", ctx_r2.user.firstName + " " + ctx_r2.user.lastName, "'s avatar");
    \u0275\u0275property("src", ctx_r2.determineUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(24, _c0, !(ctx_r2.userIp == null ? null : ctx_r2.userIp.blocked == null ? null : ctx_r2.userIp.blocked.status), ctx_r2.userIp == null ? null : ctx_r2.userIp.blocked == null ? null : ctx_r2.userIp.blocked.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r2.userIp == null ? null : ctx_r2.userIp.blocked == null ? null : ctx_r2.userIp.blocked.status) ? "Inactive" : "Active", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.user.firstName + " " + ctx_r2.user.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.user.email);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(14, ctx_r2.canInvite ? 14 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.user.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.user.lastName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.user.phone || "Not Provided");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 18, ctx_r2.user.createdAt, "medium"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 21, ctx_r2.userLoginAttempt == null ? null : ctx_r2.userLoginAttempt.createdAt, "medium"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(27, _c1, ctx_r2.isVerified(), !ctx_r2.isVerified()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isVerified() ? "Verified" : "Unverified", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(55, ctx_r2.authUser ? 55 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(56, ctx_r2.authUser ? 56 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(57, ctx_r2.authUser ? 57 : -1);
  }
}
function ManageUserProfileCoreComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "div", 31);
    \u0275\u0275elementStart(3, "p", 32);
    \u0275\u0275text(4, "Loading user profile...");
    \u0275\u0275elementEnd()()();
  }
}
var ManageUserProfileCoreComponent = class _ManageUserProfileCoreComponent {
  constructor(windowService, toastrService, mainBarTitle, router) {
    this.windowService = windowService;
    this.toastrService = toastrService;
    this.mainBarTitle = mainBarTitle;
    this.router = router;
    this.inviteUser = new EventEmitter();
    this.loading = false;
  }
  ngOnInit() {
    scrollToTop(this.windowService);
    if (!this.authUser) {
      this.getUser();
    }
  }
  getUser() {
    return __async(this, null, function* () {
      if (!this.authUser) {
        return;
      }
      try {
        this.loading = true;
        const user = yield User.getOne(this.authUser?.toString() || "");
        if (user) {
          this.user = user;
          this.getLastLogin();
          this.getUserIpRecored();
        }
      } catch (error) {
        FrontendLogger.error(error);
        this.toastrService.error(getBizNestErrorResponseMessage(error), "Error");
      } finally {
        this.loading = false;
      }
    });
  }
  onPermissionsChange(ev) {
    const permissions = ev;
    if (!permissions) {
      return;
    }
    this.updatePermissions(permissions);
  }
  updatePermissions(permissions) {
    return __async(this, null, function* () {
      if (!this.authUser) {
        throw new EagleInfoClientError("no user found");
      }
      try {
        const userId = this.authUser?.toString() || "";
        yield updateUserPermissions(userId, permissions);
      } catch (error) {
        FrontendLogger.error(error);
        this.toastrService.error(getBizNestErrorResponseMessage(error), "Error");
      }
    });
  }
  updateUser(data) {
    return __async(this, null, function* () {
      if (!this.authUser) {
        throw new EagleInfoClientError("no user found");
      }
      try {
        const update = yield User.updateOne(this.authUser?.toString() || "", data);
        if (update) {
          this.getUser();
        }
      } catch (error) {
        FrontendLogger.error(error);
        this.toastrService.error(getBizNestErrorResponseMessage(error), "Error");
      }
    });
  }
  verifyUnverifyUser(val) {
    this.updateUser({ verified: val });
  }
  determineUrl() {
    if (!this.user) {
      return "assets/imgs/person.png";
    }
    if (this.user.profilePicture) {
      return this.user.profilePicture.url;
    }
  }
  getLastLogin() {
    return __async(this, null, function* () {
      if (!this.authUser) {
        return;
      }
      try {
        const { dataArr } = yield UserLoginAttempt.filterAll({
          propFilter: {
            user: this.authUser
          },
          propSort: {
            createdAt: "desc"
          }
        });
        if (dataArr?.length > 0) {
          this.userLoginAttempt = dataArr[0];
        }
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getUserIpRecored() {
    return __async(this, null, function* () {
      if (!this.authUser) {
        return;
      }
      try {
        const { dataArr } = yield UserIp.filterAll({
          propFilter: {
            user: this.authUser
          }
        });
        if (dataArr?.length > 0) {
          this.userIp = dataArr[0];
        }
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  blockUnblockUser(userIp, block) {
    return __async(this, null, function* () {
      if (!this.userIp) {
        throw new EagleInfoClientError("NO USER IP");
      }
      try {
        const blocked = {
          status: block,
          loginAttemptRef: "",
          timesBlocked: block ? 1 : 0
        };
        yield userIp.update({ blocked });
      } catch (error) {
        FrontendLogger.error(error);
        this.toastrService.error(getBizNestErrorResponseMessage(error), "Error");
      }
    });
  }
  viewUserLogingHist() {
    if (!this.authUser) {
      throw new EagleInfoClientError("NO USER");
    }
    this.router.navigate(["/login-history/" + this.authUser]);
  }
  editUser() {
  }
  isVerified() {
    return this.user?.verified;
  }
  emitInvite() {
    this.inviteUser.emit();
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function ManageUserProfileCoreComponent_Factory(t) {
      return new (t || _ManageUserProfileCoreComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageUserProfileCoreComponent, selectors: [["app-manage-user-profile-core"]], inputs: { user: "user", authUser: "authUser", canInvite: "canInvite", inviting: "inviting" }, outputs: { inviteUser: "inviteUser" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "page-content"], [1, "container"], [1, "profile-card"], [1, "header"], [1, "flex", "items-center", "space-x-6"], [1, "relative"], [1, "avatar", "object-cover", "w-20", "h-20", "rounded-full", 3, "src", "alt"], [1, "status-indicator", 3, "ngClass"], [1, "text-white"], [1, "content"], [1, "grid", "md:grid-cols-2", "gap-8"], [1, "card"], [1, "card", "!border", "!border-default-white-shade"], [1, "material-icons-outlined", "cursor-pointer", 3, "click"], [1, "info-row"], [1, "flex", "space-x-2"], [1, "status-pill", 3, "ngClass"], [1, "bottom-section"], [1, "card", "permissions-card", "!border", "!border-default-white-shade", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl"], [1, "card", "activity-card", "!border", "!border-default-white-shade", "transition-all", "duration-300", "ease-in-out", "transform", "hover:-translate-y-1", "hover:shadow-2xl"], [1, "mt-6", "flex", "justify-end"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "mb-4", "mt-4", "ml-10"], [1, "card-body"], [3, "manager", "saveButton"], [1, "activity-details"], [3, "id"], [1, "view-history-button", 3, "click"], [1, "loading-state"], [1, "text-center"], ["role", "status", "aria-label", "Loading", 1, "animate-spin", "rounded-full", "h-12", "w-12", "border-t-2", "border-b-2", "spinner", "mb-4"], [1, ""]], template: function ManageUserProfileCoreComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ManageUserProfileCoreComponent_Conditional_2_Template, 58, 30, "div", 2)(3, ManageUserProfileCoreComponent_Conditional_3_Template, 5, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(2, ctx.user ? 2 : 3);
      }
    }, dependencies: [
      RouterModule,
      DatePipe,
      SuperPermissionsComponent,
      AuditLogGroupComponent,
      NgClass
    ], styles: ['@charset "UTF-8";\n\n\n\n.page-content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 2rem;\n}\n.page-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%] {\n  background-color: var(--app-color-white);\n  border-radius: 1rem;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to right,\n      #3f51b5,\n      #673ab7);\n  color: var(--app-color-white);\n  padding: 2rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n  border: 4px solid var(--app-color-white);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: white;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .status-indicator.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .status-indicator.inactive[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #e0e0e0;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--app-color-white);\n  border-radius: 0.75rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  border-bottom: 1px solid var(--app-color-white-shade);\n  padding-bottom: 0.75rem;\n  margin-bottom: 1rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--app-color-dark-shade);\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 600;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .status-pill.verified[_ngcontent-%COMP%] {\n  background-color: #b5dfb7;\n  color: #1e441f;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .status-pill.unverified[_ngcontent-%COMP%] {\n  background-color: #fccbc7;\n  color: #891008;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%] {\n  background-color: var(--app-color-white);\n  border-top: 1px solid var(--app-color-white-shade);\n  padding: 2rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .permissions-card[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .permissions-card[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .permissions-card[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid var(--app-color-white-shade);\n  border-radius: 0.25rem;\n  cursor: pointer;\n  position: relative;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .permissions-card[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked {\n  border-color: #3f51b5;\n  background-color: #3f51b5;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .permissions-card[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked::before {\n  content: "\\2713";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--app-color-white);\n  font-size: 0.8rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .activity-card[_ngcontent-%COMP%]   .activity-details[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .view-history-button[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: var(--app-color-white);\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  transition: background-color 0.3s ease;\n}\n.page-content[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .view-history-button[_ngcontent-%COMP%]:hover {\n  background-color: #32408f;\n}\n.page-content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20rem;\n}\n.page-content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  border-color: #3f51b5;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/manage-user-profile-core.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageUserProfileCoreComponent, { className: "ManageUserProfileCoreComponent" });
})();

export {
  ManageUserProfileCoreComponent
};
//# sourceMappingURL=chunk-WGMC7XF2.js.map
