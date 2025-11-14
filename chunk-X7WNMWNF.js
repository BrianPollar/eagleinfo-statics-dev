import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  EventEmitter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";

// projects/admin-panel/src/app/components/pane/misc/admin-modal/admin-modal.component.ts
function AdminModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function AdminModalComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleModal());
    });
    \u0275\u0275elementStart(7, "i", 6);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "p", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "button", 10);
    \u0275\u0275listener("click", function AdminModalComponent_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleModal());
    });
    \u0275\u0275text(14, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 11);
    \u0275\u0275listener("click", function AdminModalComponent_Conditional_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(16, " Confirm ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.title, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.message, " ");
  }
}
var AdminModalComponent = class _AdminModalComponent {
  constructor(eventbus) {
    this.eventbus = eventbus;
    this.showModal = false;
    this.message = "";
    this.cancelButton = true;
    this.cancelText = "Cancel";
    this.confirmText = "Confirm";
    this.confirmButon = false;
    this.showLoading = true;
    this.confirm = new EventEmitter();
    this.closed = new EventEmitter();
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
  toggleModal() {
    this.showModal = !this.showModal;
    this.closed.emit(this.showModal);
  }
  onConfirm() {
    this.confirm.emit(true);
    this.toggleModal();
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function AdminModalComponent_Factory(t) {
      return new (t || _AdminModalComponent)(\u0275\u0275directiveInject(EventbusService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminModalComponent, selectors: [["app-admin-modal"]], inputs: { multipleDelete: "multipleDelete", showModal: "showModal", title: "title", message: "message", cancelButton: "cancelButton", cancelText: "cancelText", confirmText: "confirmText", confirmButon: "confirmButon", showLoading: "showLoading" }, outputs: { confirm: "confirm", closed: "closed" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-[1000]", "overflow-y-auto", "bg-black/50", "flex", "items-center", "justify-center", "p-4", "backdrop-blur-sm"], ["role", "dialog", 1, "w-full", "max-w-md", "!bg-default-white", "rounded-2xl", "shadow-2xl", "border", "border-gray-200", "transform", "transition-all", "duration-300", "ease-in-out", "scale-100", "opacity-100"], [1, "p-6"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-xl", "font-bold"], [1, "text-gray-400", "transition-colors", 3, "click"], [1, "material-icons-outlined"], [1, "mb-6"], [1, "text-sm"], [1, "flex", "space-x-3"], ["type", "button", 1, "flex-1", "py-2", "px-4", "bg-gray-100", "rounded-lg", "hover:bg-gray-200", "transition-colors", "text-sm", "font-medium", 3, "click"], ["type", "button", 1, "flex-1", "py-2", "px-4", "bg-red-500", "text-white", "rounded-lg", "hover:bg-red-600", "transition-colors", "text-sm", "font-medium", "shadow-md", "hover:shadow-lg", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "focus:ring-opacity-50", 3, "click"]], template: function AdminModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdminModalComponent_Conditional_0_Template, 17, 2, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.showModal ? 0 : -1);
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminModalComponent, { className: "AdminModalComponent" });
})();

export {
  AdminModalComponent
};
//# sourceMappingURL=chunk-X7WNMWNF.js.map
