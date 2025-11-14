import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";

// projects/admin-panel/src/app/components/pane/misc/admin-inviting-manager-modal/admin-inviting-manager-modal.component.ts
function AdminInvitingManagerModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
    \u0275\u0275text(5, "Inviting manager");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
    \u0275\u0275text(8, "Please wait while we invite the manager...");
    \u0275\u0275elementEnd()()()()();
  }
}
var AdminInvitingManagerModalComponent = class _AdminInvitingManagerModalComponent {
  constructor(eventbus) {
    this.eventbus = eventbus;
    this.showModal = false;
    this.showLoading = true;
  }
  ngOnInit() {
    const handlers = {
      closeAdminModal: () => {
        this.showModal = false;
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function AdminInvitingManagerModalComponent_Factory(t) {
      return new (t || _AdminInvitingManagerModalComponent)(\u0275\u0275directiveInject(EventbusService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminInvitingManagerModalComponent, selectors: [["app-admin-inviting-manager-modal"]], inputs: { showModal: "showModal", showLoading: "showLoading" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-[1000]", "overflow-y-auto", "bg-black/50", "flex", "items-center", "justify-center", "p-4", "backdrop-blur-sm"], ["role", "dialog", 1, "w-full", "max-w-md", "!bg-default-white", "rounded-2xl", "shadow-2xl", "border", "border-gray-200", "transform", "transition-all", "duration-300", "ease-in-out", "scale-100", "opacity-100"], [1, "p-6"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-xl", "font-bold"], [1, "mb-6"], [1, "text-sm"]], template: function AdminInvitingManagerModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdminInvitingManagerModalComponent_Conditional_0_Template, 9, 0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.showModal ? 0 : -1);
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminInvitingManagerModalComponent, { className: "AdminInvitingManagerModalComponent" });
})();

export {
  AdminInvitingManagerModalComponent
};
//# sourceMappingURL=chunk-HZCUFPTO.js.map
