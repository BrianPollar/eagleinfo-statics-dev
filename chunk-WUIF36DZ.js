import {
  SharedToggleFieldComponent
} from "./chunk-7OBDCAFX.js";
import {
  DataService
} from "./chunk-IOIIXNZS.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
import {
  TooltipComponent
} from "./chunk-4KKGHO4P.js";
import {
  TooltipService
} from "./chunk-RMIF5JQ2.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-H6XV6YF3.js";
import {
  getUserPermissions,
  updateUserPermissions
} from "./chunk-H7TI67RE.js";
import {
  EagleInfoClientError,
  FrontendLogger,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  debounceTime,
  distinctUntilChanged,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/components/profile/super-permissions/super-permissions.component.ts
init_esm();
function SuperPermissionsComponent_Conditional_33_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
}
function SuperPermissionsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "lib-tooltip", 16)(3, "button", 17);
    \u0275\u0275listener("click", function SuperPermissionsComponent_Conditional_33_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePerms());
    });
    \u0275\u0275template(4, SuperPermissionsComponent_Conditional_33_Conditional_4_Template, 1, 0, "span", 18);
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6, "Save");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("popper", ctx_r1.tooltipService.list.savePerms);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, ctx_r1.updatingPerms ? 4 : -1);
  }
}
var SuperPermissionsComponent = class _SuperPermissionsComponent {
  constructor(fb, dataService, tooltipService, eventbus, toastr) {
    this.fb = fb;
    this.dataService = dataService;
    this.tooltipService = tooltipService;
    this.eventbus = eventbus;
    this.toastr = toastr;
    this.saveButton = true;
    this.updatingPerms = false;
    this.tooltip = [
      {
        accessor: "orders",
        content: "This permission allows the user to view and manage orders."
      },
      {
        accessor: "items",
        content: "This permission allows the user to view and manage items."
      },
      {
        accessor: "companies",
        content: "This permission allows the user to view and manage companies."
      },
      {
        accessor: "faqs",
        content: "This permission allows the user to view and manage faqs."
      },
      {
        accessor: "users",
        content: "This permission allows the user to view and manage users."
      }
    ];
    this.permissions = {
      order: false,
      item: false,
      company: false,
      faq: false
    };
    this.form = this.fb.group({
      order: [false],
      item: [false],
      company: [false],
      faq: [false]
    });
  }
  getTooltipContent(accessor) {
    return this.tooltip.find((t) => t.accessor === accessor)?.content || "";
  }
  ngOnInit() {
    this.getPermissions();
    const handlers = {
      resetPerms: () => {
        this.permissions = {};
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
    this.listToFormChanges();
  }
  listToFormChanges() {
    this.form.valueChanges.pipe(distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)), debounceTime(3e3)).subscribe(() => {
      this.savePerms();
    });
  }
  getPermissions() {
    return __async(this, null, function* () {
      if (!this.manager) {
        throw new EagleInfoClientError("no user");
      }
      let userId = "";
      if (this.manager.authUser) {
        userId = this.manager.authUser.toString();
      } else {
        userId = this.manager._id;
      }
      if (typeof userId !== "string") {
        throw new EagleInfoClientError("no user id");
      }
      try {
        const userPerm = yield getUserPermissions(userId);
        this.permissions = userPerm.superAdminPermissions;
        this.form.patchValue(this.permissions);
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  savePerms() {
    return __async(this, null, function* () {
      if (this.updatingPerms || !this.manager) {
        return;
      }
      let userId = "";
      if (this.manager.authUser) {
        userId = this.manager.authUser.toString();
      } else {
        userId = this.manager._id;
      }
      if (typeof userId !== "string") {
        throw new EagleInfoClientError("no user id");
      }
      try {
        this.updatingPerms = true;
        yield updateUserPermissions(userId, { superAdminPermissions: this.form.value });
        this.toastr.success("Permissions updated successfully");
      } catch (error) {
        FrontendLogger.error(error);
        this.toastr.error("Failed to update permissions");
        this.form.patchValue(this.permissions, { emitEvent: false });
      } finally {
        this.updatingPerms = false;
      }
    });
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function SuperPermissionsComponent_Factory(t) {
      return new (t || _SuperPermissionsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperPermissionsComponent, selectors: [["lib-super-permissions"]], inputs: { manager: "manager", saveButton: "saveButton" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 12, consts: [[1, ""], [1, "text-left"], [1, "checkBoxes"], [3, "formGroup"], [1, "pt-2", "flex", "flex-row", "flex-nowrap"], [3, "popper", "popperShowOnStart"], ["formControlName", "orders", "label", "Orders"], [1, "text-secondary"], ["formControlName", "items", "label", "Items"], ["formControlName", "companies", "label", "Companies"], [1, "pt-2", "pb-2", "flex", "flex-row", "flex-nowrap"], ["formControlName", "faqs", "label", "Faqs"], ["formControlName", "users", "label", "Users"], [1, "checkmark"], [1, "flex"], [1, "flex-1"], [1, "flex-none", 3, "popper"], ["type", "submit", 1, "btn", "w-100", "btn-primary", 3, "click"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1", "p-2"], [1, "text-white", "p-2"]], template: function SuperPermissionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div")(5, "div", 4)(6, "lib-tooltip", 5);
        \u0275\u0275element(7, "lib-shared-toggle-field", 6);
        \u0275\u0275elementStart(8, "span", 7);
        \u0275\u0275text(9, "*(Allows EcommerceOrder Access)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " > ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "lib-tooltip", 5);
        \u0275\u0275element(13, "lib-shared-toggle-field", 8);
        \u0275\u0275elementStart(14, "span", 7);
        \u0275\u0275text(15, "*(Allows Item Access)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 4);
        \u0275\u0275element(17, "lib-shared-toggle-field", 9);
        \u0275\u0275elementStart(18, "lib-tooltip", 5);
        \u0275\u0275element(19, "lib-shared-toggle-field", 9);
        \u0275\u0275elementStart(20, "span", 7);
        \u0275\u0275text(21, "*(Allows Company Access)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 10)(23, "lib-tooltip", 5);
        \u0275\u0275element(24, "lib-shared-toggle-field", 11);
        \u0275\u0275elementStart(25, "span", 7);
        \u0275\u0275text(26, "*(Allows Faq Management)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 10)(28, "lib-tooltip", 5);
        \u0275\u0275element(29, "lib-shared-toggle-field", 12);
        \u0275\u0275elementStart(30, "span", 7);
        \u0275\u0275text(31, "*(Allows User Management)");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(32, "span", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(33, SuperPermissionsComponent_Conditional_33_Template, 7, 2, "div", 14);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275property("popper", ctx.getTooltipContent("orders"))("popperShowOnStart", false);
        \u0275\u0275advance(6);
        \u0275\u0275property("popper", ctx.getTooltipContent("items"))("popperShowOnStart", false);
        \u0275\u0275advance(6);
        \u0275\u0275property("popper", ctx.getTooltipContent("companies"))("popperShowOnStart", false);
        \u0275\u0275advance(5);
        \u0275\u0275property("popper", ctx.getTooltipContent("faqs"))("popperShowOnStart", false);
        \u0275\u0275advance(5);
        \u0275\u0275property("popper", ctx.getTooltipContent("users"))("popperShowOnStart", false);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(33, ctx.saveButton ? 33 : -1);
      }
    }, dependencies: [
      RouterModule,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      TooltipComponent,
      SharedToggleFieldComponent
    ], styles: ["\n\n.primary-color[_ngcontent-%COMP%] {\n  background: var(--app-primary-color);\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/super-permissions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperPermissionsComponent, { className: "SuperPermissionsComponent" });
})();

export {
  SuperPermissionsComponent
};
//# sourceMappingURL=chunk-WUIF36DZ.js.map
