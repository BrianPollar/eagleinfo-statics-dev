import {
  TooltipComponent
} from "./chunk-4KKGHO4P.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-H6XV6YF3.js";
import {
  WebStorageService
} from "./chunk-GVZ7XU6B.js";
import {
  EagleInfoClientError,
  getSearchHistory
} from "./chunk-MC4HAW4O.js";
import {
  BehaviorSubject,
  EventEmitter,
  Subject,
  debounceTime,
  distinctUntilChanged,
  init_esm,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/services/search-suggestions.service.ts
init_esm();
var SearchSuggestionsService = class _SearchSuggestionsService {
  constructor(storage) {
    this.storage = storage;
    this.suggestions$$ = new BehaviorSubject([]);
    this.suggestions$ = this.suggestions$$.asObservable();
  }
  // Method to get a user's recent search terms from local storage
  getLocalSearchHistory(component) {
    const history = this.storage.get(`${component}_search`);
    return history?.split(",") || [];
  }
  fetchSuggestionsFromBackend(term) {
    return __async(this, null, function* () {
      const hist = yield getSearchHistory(term);
      return hist;
    });
  }
  saveSearchHistory(component, term) {
    const history = this.getLocalSearchHistory(component);
    history.push(term);
    this.storage.set(`${component}_search`, history.join(","));
  }
  onSearch(term, component) {
    this.cancel();
    this.debounceSubject$$ = new Subject();
    this.debounceSubject$$.pipe(debounceTime(700)).subscribe(({ term: term2, component: component2 }) => {
      this.makeSuggestions(term2, component2);
    });
    this.debounceSubject$$.next({ term, component });
  }
  cancel() {
    this.debounceSubject$$?.complete();
  }
  // Method called by a component's input event
  makeSuggestions(term, component) {
    return __async(this, null, function* () {
      const localSuggestions = this.getLocalSearchHistory(component).filter((t) => t.includes(term));
      this.suggestions$$.next(localSuggestions);
      const backendSuggestions = yield this.fetchSuggestionsFromBackend(term);
      const uniqueSuggestions = [.../* @__PURE__ */ new Set([...localSuggestions, ...backendSuggestions])];
      this.suggestions$$.next(uniqueSuggestions);
      this.saveSearchHistory(component, term);
    });
  }
  static {
    this.\u0275fac = function SearchSuggestionsService_Factory(t) {
      return new (t || _SearchSuggestionsService)(\u0275\u0275inject(WebStorageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchSuggestionsService, factory: _SearchSuggestionsService.\u0275fac, providedIn: "root" });
  }
};

// projects/admin-panel/src/app/components/pane/misc/admin-search-field/admin-search-field.component.ts
init_esm();
var _forTrack0 = ($index, $item) => $item.label;
function AdminSearchFieldComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r1.label, " ");
  }
}
function AdminSearchFieldComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function AdminSearchFieldComponent_For_13_Template_div_click_0_listener() {
      const suggestion_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.suggestionSelected(suggestion_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suggestion_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", suggestion_r3, " ");
  }
}
var AdminSearchFieldComponent = class _AdminSearchFieldComponent {
  constructor(searchSuggestionsService) {
    this.searchSuggestionsService = searchSuggestionsService;
    this.placeholder = "filter...";
    this.options = [];
    this.filter = new EventEmitter();
    this.suggestions = [];
    this.localControl = new FormControl();
    this.optionsControl = new FormControl();
  }
  ngOnInit() {
    if (!this.filter.observers.length) {
      throw new EagleInfoClientError('The "filter" event must be handled by the parent component.');
    }
    this.searchSuggestionsService.suggestions$.subscribe((suggestions) => {
      this.suggestions = suggestions;
    });
    this.optionsControl.setValue(this.options[0].value);
    this.localControl.valueChanges.pipe(debounceTime(700), distinctUntilChanged()).subscribe((val) => {
      const optionsControlVal = this.optionsControl.value;
      this.searchSuggestionsService.onSearch(val, optionsControlVal);
      this.filter.emit({ [optionsControlVal || "_id"]: val });
    });
    this.optionsControl.valueChanges.pipe(debounceTime(700), distinctUntilChanged()).subscribe((val) => {
      const localControlVal = this.localControl?.value?.trim();
      if (localControlVal) {
        this.filter.emit({ [val]: localControlVal });
      }
    });
  }
  suggestionSelected(suggestion) {
    this.localControl.setValue(suggestion, { emitEvent: false });
    this.filter.emit({ type: "enterPressed", value: suggestion });
  }
  ngOnDestroy() {
    this.searchSuggestionsService.cancel();
  }
  static {
    this.\u0275fac = function AdminSearchFieldComponent_Factory(t) {
      return new (t || _AdminSearchFieldComponent)(\u0275\u0275directiveInject(SearchSuggestionsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSearchFieldComponent, selectors: [["app-admin-search-field"]], inputs: { placeholder: "placeholder", options: "options" }, outputs: { filter: "filter" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 6, consts: [[1, "hidden", "app-search", "xl:block"], [1, "relative", "inline-block", "!rounded-lg", "flex"], [3, "popper"], ["type", "text", 1, "flex-1", "!rounded-tl-lg", "!rounded-bl-lg", "pl-4", "pr-[40px]", "border-1", "!border-r-0", "!border-default-dark-shade", "!bg-default-white", "focus:ring-0", "text-13", "placeholder:text-13", "max-w-[223px]", 3, "placeholder", "formControl"], [1, "ltr:ml-auto", "rtl:mr-auto", "flex-none"], [1, "w-[70px]", "py-0", "form-select", "form-select-sm", "ltr:pl-4", "rtl:pr-4", "!border-l-0", "!border-default-dark-shade", "!rounded-[0px]", "!rounded-tr-lg", "!rounded-br-lg", "!bg-default-white-shade", "h-full", 3, "formControl", "value"], ["value", "Filter By", "selected", ""], [3, "value"], [1, "suggestions"], [1, "suggestion"], [1, "suggestion", 3, "click"]], template: function AdminSearchFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "lib-tooltip", 2);
        \u0275\u0275element(3, "input", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "lib-tooltip", 2)(6, "select", 5)(7, "option", 6);
        \u0275\u0275text(8, "Filter By");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(9, AdminSearchFieldComponent_For_10_Template, 2, 2, "option", 7, _forTrack0);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275repeaterCreate(12, AdminSearchFieldComponent_For_13_Template, 2, 1, "div", 9, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("popper", "Search Here");
        \u0275\u0275advance();
        \u0275\u0275property("placeholder", ctx.placeholder)("formControl", ctx.localControl);
        \u0275\u0275advance(2);
        \u0275\u0275property("popper", "Select a field to perform your search.");
        \u0275\u0275advance();
        \u0275\u0275property("formControl", ctx.optionsControl)("value", "Filter By");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.options);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.suggestions);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgForm, ReactiveFormsModule, FormControlDirective, TooltipComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSearchFieldComponent, { className: "AdminSearchFieldComponent" });
})();

export {
  AdminSearchFieldComponent
};
//# sourceMappingURL=chunk-A3XL6Y7L.js.map
