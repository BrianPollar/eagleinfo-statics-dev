import {
  DataService
} from "./chunk-IOIIXNZS.js";
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
import {
  TooltipService
} from "./chunk-RMIF5JQ2.js";
import "./chunk-YESK3NVV.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-H6XV6YF3.js";
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService
} from "./chunk-MC4HAW4O.js";
import "./chunk-SOKXHU4M.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4EXDEK5V.js";
import "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/user-related/settings/settings.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Settings", icon: "settings" });
var _c2 = (a0, a1) => [a0, a1];
function SettingsComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r1 = ctx.$implicit;
    \u0275\u0275property("value", currency_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", currency_r1, " ");
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor(dataService, windowService, apNme, mainBarTitle, currencyService, tooltipService, metaTagService, titleService) {
    this.dataService = dataService;
    this.windowService = windowService;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.currencyService = currencyService;
    this.tooltipService = tooltipService;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.globallyEnabled = this.tooltipService.globallyEnabled;
    this.popperShowOnStart = this.tooltipService.popperShowOnStart;
    this.currencies = ["USD", "UGX"];
  }
  ngOnInit() {
    this.mainBarTitle.title = "Settings";
    this.setTitle();
    scrollToTop(this.windowService);
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Easily view and manage your profile settings for personalized account management."
    });
  }
  setTitle() {
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(t) {
      return new (t || _SettingsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 11, consts: [["title", "Settings", 3, "breadCrumbs"], [1, "card", "!border", "!border-default-white-shade", "rounded-2xl", "shadow-md", "max-w-[400px]", "mx-auto"], [1, "p-4", "text-center", "font-semibold"], [1, "card-body"], [1, "pt-4"], [3, "popper"], [1, "flex", "items-center", "space-x-4", "group"], ["type", "checkbox", 1, "admin-checkbox", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-medium", "cursor-pointer", "group-hover:text-primary", "transition-colors", "duration-300"], [1, "flex", "flex-wrap", "items-center", "mb-6"], [1, "text-md", "font-semibold", "mr-2", "text-15"], [1, "ltr:ml-auto", "rtl:mr-auto"], [1, "py-0", "form-select", "form-select-sm", "ltr:pl-4", "rtl:pr-4", "border-gray-50", "bg-gray-50/20", 3, "ngModelChange", "ngModel"], [3, "value"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content");
        \u0275\u0275element(1, "app-admin-top-bar", 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "h4");
        \u0275\u0275text(5, "Tooltip");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Set Tooltips to yours Preferances");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3)(9, "div", 4)(10, "lib-tooltip", 5)(11, "div", 6)(12, "input", 7);
        \u0275\u0275listener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_12_listener() {
          return ctx.tooltipService.tooltipEnabled();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "label", 8);
        \u0275\u0275text(14, " Tooltip Enabled ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 4)(16, "lib-tooltip", 5)(17, "div", 6)(18, "input", 7);
        \u0275\u0275listener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_18_listener() {
          return ctx.tooltipService.togglePoperShowOnStart();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "label", 8);
        \u0275\u0275text(20, " Elaborate Mode ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(21, "div", 1)(22, "div", 2)(23, "h4");
        \u0275\u0275text(24, "Currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, "Sets Currency to your Preferences");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 3)(28, "div", 9)(29, "h5", 10);
        \u0275\u0275text(30, "Change Currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 11)(32, "select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_select_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.currencyService.currency, $event) || (ctx.currencyService.currency = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SettingsComponent_Template_select_ngModelChange_32_listener($event) {
          return ctx.currencyService.changeCurrency($event);
        });
        \u0275\u0275repeaterCreate(33, SettingsComponent_For_34_Template, 2, 2, "option", 13, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(8, _c2, \u0275\u0275pureFunction0(6, _c0), \u0275\u0275pureFunction0(7, _c1)));
        \u0275\u0275advance(9);
        \u0275\u0275property("popper", "Enables and Disables Tooltip");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.globallyEnabled);
        \u0275\u0275advance(4);
        \u0275\u0275property("popper", "Determines when tootip are displayed.");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.popperShowOnStart);
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.currencyService.currency);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.currencies);
      }
    }, dependencies: [
      TooltipComponent,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      CheckboxControlValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      AdminPageContentComponent,
      AdminTopBarComponent
    ], styles: [`

.admin-checkbox[_ngcontent-%COMP%] {
  appearance: none;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 1px solid var(--app-color-primary);
  border-radius: 0.25rem;
  background-color: var(--app-color-light);
  vertical-align: middle;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  accent-color: var(--app-color-primary);
  outline: none;
  box-shadow: none;
  transition:
    box-shadow 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
.admin-checkbox[_ngcontent-%COMP%]:focus {
  box-shadow: 0 0 0 1px var(--app-color-primary);
}
.admin-checkbox[_ngcontent-%COMP%]:checked {
  background-color: var(--app-color-primary);
  border-color: var(--app-color-primary);
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.dark[_ngcontent-%COMP%]   .admin-checkbox[_ngcontent-%COMP%] {
  border-color: var(--admin-zinc-600);
  background-color: var(--admin-zinc-700);
}
.dark[_ngcontent-%COMP%]   .admin-checkbox[_ngcontent-%COMP%]:checked {
  background-color: var(--app-color-primary);
  border-color: var(--app-color-primary);
}
/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/settings.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent" });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-3I2XMOBB.js.map
