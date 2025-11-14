import {
  SoloDateComponent
} from "./chunk-V2FCV2CW.js";
import {
  TooltipComponent
} from "./chunk-4KKGHO4P.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-H6XV6YF3.js";
import {
  EventEmitter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-4EXDEK5V.js";

// projects/admin-panel/src/app/components/pane/misc/admin-date-filter-field/admin-date-filter-field.component.ts
var AdminDateFilterFieldComponent = class _AdminDateFilterFieldComponent {
  constructor(eventbus) {
    this.eventbus = eventbus;
    this.placeholder = "Date Filter...";
    this.filter = new EventEmitter();
    this.filterRange = new EventEmitter();
    this.selectMode = "range";
  }
  clearRange() {
    this.eventbus.generalEvent$.next({
      type: "clearRangeDate",
      data: true
    });
  }
  static {
    this.\u0275fac = function AdminDateFilterFieldComponent_Factory(t) {
      return new (t || _AdminDateFilterFieldComponent)(\u0275\u0275directiveInject(EventbusService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDateFilterFieldComponent, selectors: [["app-admin-date-filter-field"]], inputs: { placeholder: "placeholder", selectMode: "selectMode" }, outputs: { filter: "filter", filterRange: "filterRange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 4, consts: [[1, "flex"], [1, "flex-1"], [3, "popper"], ["placeholder", "Date Added", 3, "notify", "notifyRange", "selectMode", "cssClass"], [1, "flex-none"], ["type", "button", 1, "w-auto", "h-full", "flex", "items-center", "justify-center", "border-1", "!border-default-dark-shade", "border-l-0", "!rounded-[0px]", "!rounded-tr-lg", "!rounded-br-lg", "!bg-default-white-shade", "!text-default-dark", "btn", 3, "click"], [1, "material-icons-outlined", "mr-2"]], template: function AdminDateFilterFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "lib-tooltip", 2)(3, "lib-solo-date", 3);
        \u0275\u0275listener("notify", function AdminDateFilterFieldComponent_Template_lib_solo_date_notify_3_listener($event) {
          return ctx.filter.emit($event);
        })("notifyRange", function AdminDateFilterFieldComponent_Template_lib_solo_date_notifyRange_3_listener($event) {
          return ctx.filterRange.emit($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(4, "div", 4)(5, "lib-tooltip", 2)(6, "button", 5);
        \u0275\u0275listener("click", function AdminDateFilterFieldComponent_Template_button_click_6_listener() {
          ctx.clearRange();
          return ctx.filterRange.emit(void 0);
        });
        \u0275\u0275elementStart(7, "i", 6);
        \u0275\u0275text(8, "clear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "Clear");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("popper", "Select Date From Here");
        \u0275\u0275advance();
        \u0275\u0275property("selectMode", ctx.selectMode)("cssClass", "!rounded-[0px] !rounded-tl-lg !rounded-bl-lg !border-r-0 !border-default-dark-shade");
        \u0275\u0275advance(2);
        \u0275\u0275property("popper", "Clear Date Filter");
      }
    }, dependencies: [
      FormsModule,
      ReactiveFormsModule,
      SoloDateComponent,
      TooltipComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDateFilterFieldComponent, { className: "AdminDateFilterFieldComponent" });
})();

export {
  AdminDateFilterFieldComponent
};
//# sourceMappingURL=chunk-JXJWYDSB.js.map
