import {
  arrow,
  autoPlacement,
  autoUpdate,
  computePosition,
  flip,
  limitShift,
  offset,
  shift
} from "./chunk-UIKF3Q7X.js";
import {
  TooltipService
} from "./chunk-RMIF5JQ2.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  FrontendLogger,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  InjectionToken,
  Input,
  InputFlags,
  NgClass,
  NgIf,
  NgModule,
  NgStyle,
  Output,
  Subject,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  fromEvent,
  init_esm,
  setClassMetadata,
  takeUntil,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-4EXDEK5V.js";
import {
  __spreadValues
} from "./chunk-GEHWEZZY.js";

// node_modules/ngx-popperjs/fesm2022/ngx-popperjs.mjs
init_esm();
var _c0 = ["popperViewRef"];
var _c1 = ["*", "*"];
function NgxPopperjsContentComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r0.text, \u0275\u0275sanitizeHtml);
  }
}
function NgxPopperjsContentComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
var NgxPopperjsTriggers;
(function(NgxPopperjsTriggers2) {
  NgxPopperjsTriggers2["click"] = "click";
  NgxPopperjsTriggers2["hover"] = "hover";
  NgxPopperjsTriggers2["mousedown"] = "mousedown";
  NgxPopperjsTriggers2["none"] = "none";
})(NgxPopperjsTriggers || (NgxPopperjsTriggers = {}));
var NgxPopperjsContentComponent = class _NgxPopperjsContentComponent {
  elRef;
  _viewRef;
  _changeDetectorRef;
  static nextId = 0;
  ariaHidden;
  arrowColor = null;
  displayType;
  id = `ngx_poppperjs_${++_NgxPopperjsContentComponent.nextId}`;
  isMouseOver = false;
  onHidden = new EventEmitter();
  onUpdate;
  opacity;
  popperInstance;
  popperOptions = {
    disableAnimation: false,
    disableDefaultStyling: false,
    boundariesElement: "",
    trigger: NgxPopperjsTriggers.hover,
    positionFixed: false,
    appendToBody: false,
    popperModifiers: []
  };
  popperViewRef;
  referenceObject;
  state;
  text;
  _destroy$ = new Subject();
  _resizeCtrl$ = new Subject();
  _styleId = `${this.id}_style`;
  constructor(elRef, _viewRef, _changeDetectorRef) {
    this.elRef = elRef;
    this._viewRef = _viewRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._toggleVisibility(false);
  }
  clean() {
    this.toggleVisibility(false);
    if (!this.popperInstance) {
      return;
    }
    this.popperInstance();
  }
  extractAppliedClassListExpr(classList = []) {
    const klassList = Array.isArray(classList) ? classList : typeof classList === "string" ? classList.replace(/ /, "").split(",") : [];
    return klassList.reduce((acc, klass) => {
      acc[klass] = true;
      return acc;
    }, {});
  }
  hide() {
    if (this.popperInstance) {
      this.popperInstance();
    }
    this.toggleVisibility(false);
    this.onHidden.emit();
  }
  ngOnDestroy() {
    this._destroy$.next();
    this.clean();
    if (this.popperOptions.appendTo && this.elRef && this.elRef.nativeElement && this.elRef.nativeElement.parentNode) {
      this._viewRef.detach();
      this.elRef.nativeElement.parentNode.removeChild(this.elRef.nativeElement);
    }
  }
  onDocumentResize() {
    this.update();
  }
  onMouseOver() {
    this.isMouseOver = true;
  }
  show() {
    if (!this.referenceObject) {
      return;
    }
    this._resizeCtrl$.next();
    this._determineArrowColor();
    this.popperInstance = autoUpdate(this.referenceObject, this.popperViewRef.nativeElement, () => {
      this._computePosition();
    });
    fromEvent(document, "resize").pipe(takeUntil(this._resizeCtrl$), takeUntil(this._destroy$)).subscribe({
      next: () => this.onDocumentResize()
    });
  }
  showOnLeave() {
    this.isMouseOver = false;
    if (this.popperOptions.trigger !== NgxPopperjsTriggers.hover && !this.popperOptions.hideOnMouseLeave) {
      return;
    }
    this.hide();
  }
  // Toggle visibility and detect changes - Run only after ngOnInit!
  toggleVisibility(state) {
    this._toggleVisibility(state);
    if (!this._changeDetectorRef["destroyed"]) {
      this._changeDetectorRef.detectChanges();
    }
  }
  update() {
    this._computePosition();
  }
  _computePosition() {
    const appendToParent = this.popperOptions.appendTo && document.querySelector(this.popperOptions.appendTo);
    if (appendToParent && this.elRef.nativeElement.parentNode !== appendToParent) {
      this.elRef.nativeElement.parentNode && this.elRef.nativeElement.parentNode.removeChild(this.elRef.nativeElement);
      appendToParent.appendChild(this.elRef.nativeElement);
    }
    const arrowElement = this.elRef.nativeElement.querySelector(".ngxp__arrow");
    const arrowLen = arrowElement.offsetWidth;
    const floatingOffset = Math.sqrt(2 * arrowLen ** 2) / 2;
    const boundaryMiddleware = [];
    if (this.popperOptions.flip) {
      boundaryMiddleware.push(flip());
    }
    if (this.popperOptions.preventOverflow) {
      boundaryMiddleware.push(shift({
        limiter: limitShift()
      }));
    }
    const popperOptions = {
      placement: this.popperOptions.placement,
      strategy: this.popperOptions.positionFixed ? "fixed" : "absolute",
      middleware: [offset(floatingOffset), ...boundaryMiddleware, arrow({
        element: arrowElement,
        padding: 4
      })]
    };
    if (!this.popperOptions.preventOverflow && !popperOptions.placement) {
      const boundariesElement = this.popperOptions.boundariesElement && document.querySelector(this.popperOptions.boundariesElement);
      popperOptions.middleware.push(autoPlacement({
        boundary: boundariesElement
      }));
    }
    computePosition(this.referenceObject, this.popperViewRef.nativeElement, popperOptions).then(({
      middlewareData,
      x,
      y,
      placement
    }) => {
      const side = placement.split("-")[0];
      this.popperViewRef.nativeElement.setAttribute("data-popper-placement", side);
      if (middlewareData.arrow) {
        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[side];
        Object.assign(arrowElement.style, {
          left: middlewareData.arrow.x != null ? `${middlewareData.arrow.x}px` : "",
          top: middlewareData.arrow.y != null ? `${middlewareData.arrow.y}px` : "",
          [staticSide]: `${-arrowLen / 2}px`
        });
      }
      Object.assign(this.popperViewRef.nativeElement.style, {
        left: `${x}px`,
        top: `${y}px`
      });
      this.toggleVisibility(true);
      this.onUpdate?.();
    });
  }
  _createArrowSelector() {
    return `div#${this.id}.ngxp__container > .ngxp__arrow.ngxp__force-arrow`;
  }
  _determineArrowColor() {
    if (!this.popperOptions.styles || this.arrowColor) {
      return false;
    }
    const ruleValue = this.popperOptions.styles["background-color"] || this.popperOptions.styles.backgroundColor;
    if (this.arrowColor === ruleValue) {
      return false;
    }
    this.arrowColor = ruleValue;
    let $style = document.querySelector(`#${this._styleId}`);
    const styleContent = this.arrowColor ? `${this._createArrowSelector()}:before { background-color: ${this.arrowColor}; }` : "";
    if (!$style) {
      $style = document.createElement("style");
      $style.id = this._styleId;
      $style.setAttribute("type", "text/css");
      document.head.appendChild($style);
    }
    if ($style["styleSheet"]) {
      $style["styleSheet"].cssText = styleContent;
    } else {
      $style.innerHTML = styleContent;
    }
  }
  _toggleVisibility(state) {
    this.displayType = ["none", "block"][+state];
    this.opacity = +state;
    this.ariaHidden = `${!state}`;
    this.state = state;
  }
  /** @nocollapse */
  static \u0275fac = function NgxPopperjsContentComponent_Factory(t) {
    return new (t || _NgxPopperjsContentComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NgxPopperjsContentComponent,
    selectors: [["popper-content"]],
    viewQuery: function NgxPopperjsContentComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.popperViewRef = _t.first);
      }
    },
    hostBindings: function NgxPopperjsContentComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseover", function NgxPopperjsContentComponent_mouseover_HostBindingHandler() {
          return ctx.onMouseOver();
        })("mouseleave", function NgxPopperjsContentComponent_mouseleave_HostBindingHandler() {
          return ctx.showOnLeave();
        });
      }
    },
    exportAs: ["ngxPopperjsContent"],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 19,
    consts: [["popperViewRef", ""], [3, "ngStyle", "ngClass"], ["class", "ngxp__inner", 3, "innerHTML", 4, "ngIf"], ["class", "ngxp__inner", 4, "ngIf"], [1, "ngxp__arrow", 3, "ngClass"], [1, "ngxp__inner", 3, "innerHTML"], [1, "ngxp__inner"]],
    template: function NgxPopperjsContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c1);
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275template(2, NgxPopperjsContentComponent_div_2_Template, 2, 1, "div", 2)(3, NgxPopperjsContentComponent_div_3_Template, 2, 0, "div", 3);
        \u0275\u0275element(4, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("display", ctx.displayType)("opacity", ctx.opacity);
        \u0275\u0275classProp("ngxp__container", !ctx.popperOptions.disableDefaultStyling)("ngxp__animation", !ctx.popperOptions.disableAnimation);
        \u0275\u0275property("ngStyle", ctx.popperOptions.styles)("ngClass", ctx.extractAppliedClassListExpr(ctx.popperOptions.applyClass));
        \u0275\u0275attribute("id", ctx.id)("aria-hidden", ctx.ariaHidden)("aria-describedby", ctx.popperOptions.ariaDescribe || null)("role", ctx.popperOptions.ariaRole);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.text);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.text);
        \u0275\u0275advance();
        \u0275\u0275classProp("ngxp__force-arrow", ctx.arrowColor);
        \u0275\u0275property("ngClass", ctx.extractAppliedClassListExpr(ctx.popperOptions.applyArrowClass));
      }
    },
    dependencies: [NgStyle, NgClass, NgIf],
    styles: ["popper-content{position:relative;display:block}.ngxp__container{display:none;position:absolute;border-radius:3px;border:1px solid grey;box-shadow:0 0 2px #00000080;padding:10px}.ngxp__container.ngxp__animation{animation:ngxp-fadeIn .15s ease-out}.ngxp__container>.ngxp__arrow{position:absolute;width:10px;height:10px;z-index:-1;transform:rotate(45deg);background-color:red}.ngxp__container[data-popper-placement^=top]>.ngxp__arrow{bottom:-5px}.ngxp__container[data-popper-placement^=bottom]>.ngxp__arrow{top:-5px}.ngxp__container[data-popper-placement^=left]>.ngxp__arrow{right:-5px}.ngxp__container[data-popper-placement^=right]>.ngxp__arrow{left:-5px}@keyframes ngxp-fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{display:block;opacity:1}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPopperjsContentComponent, [{
    type: Component,
    args: [{
      selector: "popper-content",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "ngxPopperjsContent",
      standalone: true,
      imports: [NgStyle, NgClass, NgIf],
      template: '<div #popperViewRef\r\n     [attr.id]="id"\r\n     [class.ngxp__container]="!popperOptions.disableDefaultStyling"\r\n     [class.ngxp__animation]="!popperOptions.disableAnimation"\r\n     [style.display]="displayType"\r\n     [style.opacity]="opacity"\r\n     [ngStyle]="popperOptions.styles"\r\n     [ngClass]="extractAppliedClassListExpr(popperOptions.applyClass)"\r\n     attr.aria-hidden="{{ariaHidden}}"\r\n     [attr.aria-describedby]="popperOptions.ariaDescribe || null"\r\n     attr.role="{{popperOptions.ariaRole}}">\r\n    <div *ngIf="text"\r\n         class="ngxp__inner"\r\n         [innerHTML]="text">\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <div *ngIf="!text"\r\n         class="ngxp__inner">\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <div class="ngxp__arrow"\r\n         [class.ngxp__force-arrow]="arrowColor"\r\n         [ngClass]="extractAppliedClassListExpr(popperOptions.applyArrowClass)"></div>\r\n\r\n</div>\r\n',
      styles: ["popper-content{position:relative;display:block}.ngxp__container{display:none;position:absolute;border-radius:3px;border:1px solid grey;box-shadow:0 0 2px #00000080;padding:10px}.ngxp__container.ngxp__animation{animation:ngxp-fadeIn .15s ease-out}.ngxp__container>.ngxp__arrow{position:absolute;width:10px;height:10px;z-index:-1;transform:rotate(45deg);background-color:red}.ngxp__container[data-popper-placement^=top]>.ngxp__arrow{bottom:-5px}.ngxp__container[data-popper-placement^=bottom]>.ngxp__arrow{top:-5px}.ngxp__container[data-popper-placement^=left]>.ngxp__arrow{right:-5px}.ngxp__container[data-popper-placement^=right]>.ngxp__arrow{left:-5px}@keyframes ngxp-fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{display:block;opacity:1}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: ChangeDetectorRef
  }], {
    popperViewRef: [{
      type: ViewChild,
      args: ["popperViewRef", {
        static: true
      }]
    }],
    onMouseOver: [{
      type: HostListener,
      args: ["mouseover"]
    }],
    showOnLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var NGX_POPPERJS_DEFAULTS = new InjectionToken("NGX_POPPERJS_DEFAULTS");
var NgxPopperjsUtils = class {
  /** Coerces a data-bound value (typically a string) to a boolean. */
  static coerceBooleanProperty(value) {
    return value != null && `${value}` !== "false";
  }
};
var NgxPopperjsDirective = class _NgxPopperjsDirective {
  _changeDetectorRef;
  _elementRef;
  _vcr;
  _popperDefaults;
  static baseOptions = {
    showDelay: 0,
    hideOnClickOutside: true,
    hideOnMouseLeave: false,
    hideOnScroll: false,
    appendTo: void 0,
    ariaRole: "popper",
    ariaDescribe: "",
    styles: {},
    trigger: NgxPopperjsTriggers.click
  };
  set applyClass(newValue) {
    if (newValue === this._applyClass) {
      return;
    }
    this._applyClass = newValue;
    this._checkExisting("applyClass", newValue);
  }
  get applyClass() {
    return this._applyClass;
  }
  set hideOnClickOutside(newValue) {
    this._hideOnClickOutside = NgxPopperjsUtils.coerceBooleanProperty(newValue);
  }
  get hideOnClickOutside() {
    return this._hideOnClickOutside;
  }
  set content(newValue) {
    if (newValue === this._content) {
      return;
    }
    this._content = newValue;
    if (this._popperContent) {
      if (typeof newValue === "string") {
        this._popperContent.text = newValue;
      } else {
        this._popperContent = newValue;
      }
    }
  }
  get content() {
    return this._content;
  }
  set flip(newValue) {
    this._flip = NgxPopperjsUtils.coerceBooleanProperty(newValue);
    this._checkExisting("preventOverflow", this._preventOverflow);
  }
  get flip() {
    return this._flip;
  }
  set placement(newValue) {
    this._placement = newValue;
    this._checkExisting("placement", newValue);
  }
  get placement() {
    return this._placement;
  }
  set preventOverflow(newValue) {
    this._preventOverflow = NgxPopperjsUtils.coerceBooleanProperty(newValue);
    this._checkExisting("preventOverflow", this._preventOverflow);
  }
  get preventOverflow() {
    return this._preventOverflow;
  }
  set popperApplyArrowClass(newValue) {
    if (newValue === this._applyArrowClass) {
      return;
    }
    this._applyArrowClass = newValue;
    if (this._popperContent) {
      this._popperContent.popperOptions.applyArrowClass = newValue;
      if (!this._shown) {
        return;
      }
      this._popperContent.update();
    }
  }
  get popperApplyArrowClass() {
    return this._applyArrowClass;
  }
  set disabled(newValue) {
    if (newValue === this._disabled) {
      return;
    }
    this._disabled = !!newValue;
    if (this._shown) {
      this.hide();
    }
  }
  get disabled() {
    return this._disabled;
  }
  ariaDescribe;
  ariaRole;
  boundariesElement;
  disableAnimation;
  disableStyle;
  hideOnMouseLeave;
  hideOnScroll;
  hideTimeout = 0;
  popperAppendTo;
  popperOnHidden = new EventEmitter();
  popperOnShown = new EventEmitter();
  popperOnUpdate = new EventEmitter();
  positionFixed;
  showDelay;
  showOnStart;
  showTrigger;
  styles;
  targetElement;
  timeoutAfterShow = 0;
  _applyArrowClass;
  _applyClass;
  _content;
  _destroy$ = new Subject();
  _disabled;
  _flip = true;
  _globalEventListenersCtrl$ = new Subject();
  _hideOnClickOutside = true;
  _placement;
  _popperContent;
  _popperContentClass = NgxPopperjsContentComponent;
  _popperContentRef;
  _preventOverflow = true;
  _scheduledHideTimeoutCtrl$ = new Subject();
  _scheduledShowTimeoutCtrl$ = new Subject();
  _shown = false;
  constructor(_changeDetectorRef, _elementRef, _vcr, _popperDefaults = {}) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._vcr = _vcr;
    this._popperDefaults = _popperDefaults;
    _NgxPopperjsDirective.baseOptions = __spreadValues(__spreadValues({}, _NgxPopperjsDirective.baseOptions), this._popperDefaults);
  }
  static assignDefined(target, ...sources) {
    for (const source of sources) {
      for (const key of Object.keys(source)) {
        const val = source[key];
        if (val !== void 0) {
          target[key] = val;
        }
      }
    }
    return target;
  }
  applyTriggerListeners() {
    switch (this.showTrigger) {
      case NgxPopperjsTriggers.click:
        this._addListener("click", this.toggle.bind(this));
        break;
      case NgxPopperjsTriggers.mousedown:
        this._addListener("mousedown", this.toggle.bind(this));
        break;
      case NgxPopperjsTriggers.hover:
        this._addListener("mouseenter", this.scheduledShow.bind(this, this.showDelay));
        ["touchend", "touchcancel", "mouseleave"].forEach((eventName) => {
          this._addListener(eventName, this.scheduledHide.bind(this, null, this.hideTimeout));
        });
        break;
    }
    if (this.showTrigger !== NgxPopperjsTriggers.hover && this.hideOnMouseLeave) {
      ["touchend", "touchcancel", "mouseleave"].forEach((eventName) => {
        this._addListener(eventName, this.scheduledHide.bind(this, null, this.hideTimeout));
      });
    }
  }
  getRefElement() {
    return this.targetElement || this._elementRef.nativeElement;
  }
  hide() {
    if (this.disabled) {
      return;
    }
    if (!this._shown) {
      this._scheduledShowTimeoutCtrl$.next();
      return;
    }
    this._shown = false;
    if (this._popperContentRef) {
      this._popperContentRef.instance.hide();
    } else {
      this._popperContent.hide();
    }
    this.popperOnHidden.emit(this);
    this._globalEventListenersCtrl$.next();
  }
  hideOnClickOutsideHandler($event) {
    if (this.disabled || !this.hideOnClickOutside || $event.target === this._popperContent.elRef.nativeElement || this._popperContent.elRef.nativeElement.contains($event.target)) {
      return;
    }
    this.scheduledHide($event, this.hideTimeout);
  }
  hideOnScrollHandler($event) {
    if (this.disabled || !this.hideOnScroll) {
      return;
    }
    this.scheduledHide($event, this.hideTimeout);
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this._popperContent && this._popperContent.clean();
  }
  ngOnInit() {
    if (typeof this.content === "string") {
      this._popperContent = this._constructContent();
      this._popperContent.text = this.content;
    } else if (typeof this.content === "undefined") {
      this._popperContent = this._constructContent();
      this._popperContent.text = "";
    } else {
      this._popperContent = this.content;
    }
    const popperRef = this._popperContent;
    popperRef.referenceObject = this.getRefElement();
    this._setContentProperties(popperRef);
    this._setDefaults();
    this.applyTriggerListeners();
    if (this.showOnStart) {
      this.scheduledShow();
    }
  }
  scheduledHide($event = null, delay = this.hideTimeout) {
    if (this.disabled) {
      return;
    }
    this._scheduledShowTimeoutCtrl$.next();
    timer(delay).pipe(takeUntil(this._scheduledHideTimeoutCtrl$), takeUntil(this._destroy$)).subscribe({
      next: () => {
        const toElement = $event ? $event.toElement : null;
        const popperContentView = this._popperContent.popperViewRef ? this._popperContent.popperViewRef.nativeElement : false;
        if (!popperContentView || popperContentView === toElement || popperContentView.contains(toElement) || this.content && this.content.isMouseOver) {
          return;
        }
        this.hide();
        this._applyChanges();
      }
    });
  }
  scheduledShow(delay = this.showDelay) {
    if (this.disabled) {
      return;
    }
    this._scheduledHideTimeoutCtrl$.next();
    timer(delay).pipe(takeUntil(this._scheduledShowTimeoutCtrl$), takeUntil(this._destroy$)).subscribe({
      next: () => {
        this.show();
        this._applyChanges();
      }
    });
  }
  show() {
    if (this._shown) {
      this._scheduledHideTimeoutCtrl$.next();
      return;
    }
    this._shown = true;
    const popperRef = this._popperContent;
    const element = this.getRefElement();
    if (popperRef.referenceObject !== element) {
      popperRef.referenceObject = element;
    }
    this._setContentProperties(popperRef);
    popperRef.show();
    this.popperOnShown.emit(this);
    if (this.timeoutAfterShow > 0) {
      this.scheduledHide(null, this.timeoutAfterShow);
    }
    fromEvent(document, "click").pipe(takeUntil(this._globalEventListenersCtrl$), takeUntil(this._destroy$)).subscribe({
      next: (e) => this.hideOnClickOutsideHandler(e)
    });
    fromEvent(this._getScrollParent(this.getRefElement()), "scroll").pipe(takeUntil(this._globalEventListenersCtrl$), takeUntil(this._destroy$)).subscribe({
      next: (e) => {
        this.hideOnScrollHandler(e);
      }
    });
  }
  toggle() {
    if (this.disabled) {
      return;
    }
    this._shown ? this.scheduledHide(null, this.hideTimeout) : this.scheduledShow();
  }
  _addListener(eventName, cb) {
    fromEvent(this._elementRef.nativeElement, eventName).pipe(takeUntil(this._destroy$)).subscribe({
      next: cb
    });
  }
  _applyChanges() {
    this._changeDetectorRef.markForCheck();
    this._changeDetectorRef.detectChanges();
  }
  _checkExisting(key, newValue) {
    if (this._popperContent) {
      this._popperContent.popperOptions[key] = newValue;
      if (!this._shown) {
        return;
      }
      this._popperContent.update();
    }
  }
  _constructContent() {
    this._popperContentRef = this._vcr.createComponent(this._popperContentClass);
    return this._popperContentRef.instance;
  }
  _getScrollParent(node) {
    const isElement = node instanceof HTMLElement;
    const overflowY = isElement && window.getComputedStyle(node).overflowY;
    const isScrollable = overflowY !== "visible" && overflowY !== "hidden";
    if (!node) {
      return null;
    } else if (isScrollable && node.scrollHeight > node.clientHeight) {
      return node;
    }
    return this._getScrollParent(node.parentNode) || document;
  }
  _onPopperUpdate(event) {
    this.popperOnUpdate.emit(event);
  }
  _setContentProperties(popperRef) {
    popperRef.popperOptions = _NgxPopperjsDirective.assignDefined(popperRef.popperOptions, _NgxPopperjsDirective.baseOptions, {
      showDelay: this.showDelay,
      disableAnimation: this.disableAnimation,
      disableDefaultStyling: this.disableStyle,
      placement: this.placement,
      boundariesElement: this.boundariesElement,
      trigger: this.showTrigger,
      positionFixed: this.positionFixed,
      ariaDescribe: this.ariaDescribe,
      ariaRole: this.ariaRole,
      applyClass: this.applyClass,
      applyArrowClass: this.popperApplyArrowClass,
      hideOnMouseLeave: this.hideOnMouseLeave,
      styles: this.styles,
      appendTo: this.popperAppendTo,
      preventOverflow: this.preventOverflow
    });
    popperRef.onUpdate = this._onPopperUpdate.bind(this);
    popperRef.onHidden.pipe(takeUntil(this._destroy$)).subscribe(this.hide.bind(this));
  }
  _setDefaults() {
    ["showDelay", "hideOnScroll", "hideOnMouseLeave", "hideOnClickOutside", "ariaRole", "ariaDescribe"].forEach((key) => {
      this[key] = this[key] === void 0 ? _NgxPopperjsDirective.baseOptions[key] : this[key];
    });
    this.showTrigger = this.showTrigger || _NgxPopperjsDirective.baseOptions.trigger;
    this.styles = this.styles === void 0 ? __spreadValues({}, _NgxPopperjsDirective.baseOptions.styles) : this.styles;
  }
  /** @nocollapse */
  static \u0275fac = function NgxPopperjsDirective_Factory(t) {
    return new (t || _NgxPopperjsDirective)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(NGX_POPPERJS_DEFAULTS));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgxPopperjsDirective,
    selectors: [["", "popper", ""]],
    inputs: {
      applyClass: [InputFlags.None, "popperApplyClass", "applyClass"],
      hideOnClickOutside: [InputFlags.None, "popperHideOnClickOutside", "hideOnClickOutside"],
      content: [InputFlags.None, "popper", "content"],
      flip: [InputFlags.None, "popperFlip", "flip"],
      placement: [InputFlags.None, "popperPlacement", "placement"],
      preventOverflow: [InputFlags.None, "popperPreventOverflow", "preventOverflow"],
      popperApplyArrowClass: "popperApplyArrowClass",
      disabled: [InputFlags.None, "popperDisabled", "disabled"],
      ariaDescribe: [InputFlags.None, "popperAriaDescribeBy", "ariaDescribe"],
      ariaRole: [InputFlags.None, "popperAriaRole", "ariaRole"],
      boundariesElement: [InputFlags.None, "popperBoundaries", "boundariesElement"],
      disableAnimation: [InputFlags.None, "popperDisableAnimation", "disableAnimation"],
      disableStyle: [InputFlags.None, "popperDisableStyle", "disableStyle"],
      hideOnMouseLeave: [InputFlags.None, "popperHideOnMouseLeave", "hideOnMouseLeave"],
      hideOnScroll: [InputFlags.None, "popperHideOnScroll", "hideOnScroll"],
      hideTimeout: [InputFlags.None, "popperTimeout", "hideTimeout"],
      popperAppendTo: "popperAppendTo",
      positionFixed: [InputFlags.None, "popperPositionFixed", "positionFixed"],
      showDelay: [InputFlags.None, "popperDelay", "showDelay"],
      showOnStart: [InputFlags.None, "popperShowOnStart", "showOnStart"],
      showTrigger: [InputFlags.None, "popperTrigger", "showTrigger"],
      styles: [InputFlags.None, "popperStyles", "styles"],
      targetElement: [InputFlags.None, "popperTarget", "targetElement"],
      timeoutAfterShow: [InputFlags.None, "popperTimeoutAfterShow", "timeoutAfterShow"]
    },
    outputs: {
      popperOnHidden: "popperOnHidden",
      popperOnShown: "popperOnShown",
      popperOnUpdate: "popperOnUpdate"
    },
    exportAs: ["popper"],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPopperjsDirective, [{
    type: Directive,
    args: [{
      // tslint:disable-next-line:directive-selector
      selector: "[popper]",
      exportAs: "popper",
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_POPPERJS_DEFAULTS]
    }]
  }], {
    applyClass: [{
      type: Input,
      args: ["popperApplyClass"]
    }],
    hideOnClickOutside: [{
      type: Input,
      args: ["popperHideOnClickOutside"]
    }],
    content: [{
      type: Input,
      args: ["popper"]
    }],
    flip: [{
      type: Input,
      args: ["popperFlip"]
    }],
    placement: [{
      type: Input,
      args: ["popperPlacement"]
    }],
    preventOverflow: [{
      type: Input,
      args: ["popperPreventOverflow"]
    }],
    popperApplyArrowClass: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: ["popperDisabled"]
    }],
    ariaDescribe: [{
      type: Input,
      args: ["popperAriaDescribeBy"]
    }],
    ariaRole: [{
      type: Input,
      args: ["popperAriaRole"]
    }],
    boundariesElement: [{
      type: Input,
      args: ["popperBoundaries"]
    }],
    disableAnimation: [{
      type: Input,
      args: ["popperDisableAnimation"]
    }],
    disableStyle: [{
      type: Input,
      args: ["popperDisableStyle"]
    }],
    hideOnMouseLeave: [{
      type: Input,
      args: ["popperHideOnMouseLeave"]
    }],
    hideOnScroll: [{
      type: Input,
      args: ["popperHideOnScroll"]
    }],
    hideTimeout: [{
      type: Input,
      args: ["popperTimeout"]
    }],
    popperAppendTo: [{
      type: Input
    }],
    popperOnHidden: [{
      type: Output
    }],
    popperOnShown: [{
      type: Output
    }],
    popperOnUpdate: [{
      type: Output
    }],
    positionFixed: [{
      type: Input,
      args: ["popperPositionFixed"]
    }],
    showDelay: [{
      type: Input,
      args: ["popperDelay"]
    }],
    showOnStart: [{
      type: Input,
      args: ["popperShowOnStart"]
    }],
    showTrigger: [{
      type: Input,
      args: ["popperTrigger"]
    }],
    styles: [{
      type: Input,
      args: ["popperStyles"]
    }],
    targetElement: [{
      type: Input,
      args: ["popperTarget"]
    }],
    timeoutAfterShow: [{
      type: Input,
      args: ["popperTimeoutAfterShow"]
    }]
  });
})();
var NgxPopperjsLooseDirective = class _NgxPopperjsLooseDirective extends NgxPopperjsDirective {
  set popperLoose(newValue) {
    this.content = newValue;
  }
  set popperLoosePlacement(newValue) {
    this.placement = newValue;
  }
  set popperLooseTrigger(newValue) {
    this.showTrigger = newValue;
  }
  constructor(changeDetectorRef, elementRef, vcr, popperDefaults = {}) {
    super(changeDetectorRef, elementRef, vcr, popperDefaults);
  }
  /** @nocollapse */
  static \u0275fac = function NgxPopperjsLooseDirective_Factory(t) {
    return new (t || _NgxPopperjsLooseDirective)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(NGX_POPPERJS_DEFAULTS));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgxPopperjsLooseDirective,
    selectors: [["", "popperLoose", ""]],
    inputs: {
      popperLoose: "popperLoose",
      popperLoosePlacement: "popperLoosePlacement",
      popperLooseTrigger: "popperLooseTrigger"
    },
    exportAs: ["popperLoose"],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPopperjsLooseDirective, [{
    type: Directive,
    args: [{
      selector: "[popperLoose]",
      exportAs: "popperLoose",
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_POPPERJS_DEFAULTS]
    }]
  }], {
    popperLoose: [{
      type: Input
    }],
    popperLoosePlacement: [{
      type: Input
    }],
    popperLooseTrigger: [{
      type: Input
    }]
  });
})();
var NgxPopperjsPlacements;
(function(NgxPopperjsPlacements2) {
  NgxPopperjsPlacements2["TOP"] = "top";
  NgxPopperjsPlacements2["BOTTOM"] = "bottom";
  NgxPopperjsPlacements2["LEFT"] = "left";
  NgxPopperjsPlacements2["RIGHT"] = "right";
  NgxPopperjsPlacements2["TOPSTART"] = "top-start";
  NgxPopperjsPlacements2["BOTTOMSTART"] = "bottom-start";
  NgxPopperjsPlacements2["LEFTSTART"] = "left-start";
  NgxPopperjsPlacements2["RIGHTSTART"] = "right-start";
  NgxPopperjsPlacements2["TOPEND"] = "top-end";
  NgxPopperjsPlacements2["BOTTOMEND"] = "bottom-end";
  NgxPopperjsPlacements2["LEFTEND"] = "left-end";
  NgxPopperjsPlacements2["RIGHTEND"] = "right-end";
})(NgxPopperjsPlacements || (NgxPopperjsPlacements = {}));
function provideNgxPopperjsOptions(config = {}) {
  return [{
    provide: NGX_POPPERJS_DEFAULTS,
    useValue: config
  }];
}
var NgxPopperjsModule = class _NgxPopperjsModule {
  static forRoot(popperBaseOptions) {
    return {
      ngModule: _NgxPopperjsModule,
      providers: [provideNgxPopperjsOptions(popperBaseOptions)]
    };
  }
  /** @nocollapse */
  static \u0275fac = function NgxPopperjsModule_Factory(t) {
    return new (t || _NgxPopperjsModule)();
  };
  /** @nocollapse */
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NgxPopperjsModule
  });
  /** @nocollapse */
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [provideNgxPopperjsOptions()],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPopperjsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, NgxPopperjsContentComponent, NgxPopperjsDirective, NgxPopperjsLooseDirective],
      exports: [NgxPopperjsContentComponent, NgxPopperjsDirective, NgxPopperjsLooseDirective],
      providers: [provideNgxPopperjsOptions()]
    }]
  }], null, null);
})();

// projects/shared-lib/src/lib/components/tooltip/tooltip.component.ts
var _c02 = ["*"];
var TooltipComponent = class _TooltipComponent {
  constructor(tooltipService, eventbus) {
    this.tooltipService = tooltipService;
    this.eventbus = eventbus;
    this.popper = "";
    this.popperContent = "";
    this.popperTrigger = "hover";
    this.popperPlacement = NgxPopperjsPlacements.BOTTOM;
    this.popperApplyClass = "poper-secondary";
    this.popperDisabled = false;
    this.popperOnShown = new EventEmitter();
  }
  ngOnInit() {
    if (!this.popperDisabled) {
      this.popperDisabled = !this.tooltipService.globallyEnabled;
    }
    if (this.popperShowOnStart === void 0) {
      this.popperShowOnStart = this.tooltipService.popperShowOnStart || false;
    }
    FrontendLogger.debug("SHOW POPER ON START", this.popperShowOnStart);
    const handlers = {
      popperDisabled: (data) => {
        this.popperDisabled = data;
      },
      popperShowOnStart: (data) => {
        this.popperShowOnStart = data;
        FrontendLogger.debug("popperShowOnStart", this.popperShowOnStart);
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
  }
  onShown(ev) {
    this.popperOnShown.emit(ev);
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function TooltipComponent_Factory(t) {
      return new (t || _TooltipComponent)(\u0275\u0275directiveInject(TooltipService), \u0275\u0275directiveInject(EventbusService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TooltipComponent, selectors: [["lib-tooltip"]], inputs: { popper: "popper", popperContent: "popperContent", popperTrigger: "popperTrigger", popperPlacement: "popperPlacement", popperApplyClass: "popperApplyClass", navProp: "navProp", popperDisabled: "popperDisabled", popperShowOnStart: "popperShowOnStart" }, outputs: { popperOnShown: "popperOnShown" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c02, decls: 5, vars: 7, consts: [["popper1Content", ""], [1, "", 3, "innerHTML"], [1, "inherit", "prevent-print", 3, "popperOnShown", "popper", "popperTrigger", "popperPlacement", "popperApplyClass", "popperDisabled", "popperShowOnStart"]], template: function TooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "popper-content", null, 0);
        \u0275\u0275element(2, "div", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2);
        \u0275\u0275listener("popperOnShown", function TooltipComponent_Template_div_popperOnShown_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onShown($event));
        });
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const popper1Content_r2 = \u0275\u0275reference(1);
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", ctx.popper, \u0275\u0275sanitizeHtml);
        \u0275\u0275advance();
        \u0275\u0275property("popper", popper1Content_r2)("popperTrigger", ctx.popperTrigger)("popperPlacement", ctx.popperPlacement)("popperApplyClass", "poper-secondary")("popperDisabled", ctx.popperDisabled)("popperShowOnStart", ctx.popperShowOnStart);
      }
    }, dependencies: [NgxPopperjsModule, NgxPopperjsContentComponent, NgxPopperjsDirective], styles: ['\n\n.tooltip[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: black;\n  border-radius: 4px;\n  color: #ffffff;\n  font-family: Arial;\n  padding: 3px 6px;\n  font-size: 13px;\n  margin-top: 5px;\n  transform: translateX(-50%);\n}\n.tooltip[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid black;\n  position: absolute;\n  left: calc(50% - 5px);\n  top: -5px;\n}\n.inherit[_ngcontent-%COMP%] {\n  all: inherit;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/tooltip.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TooltipComponent, { className: "TooltipComponent" });
})();

export {
  TooltipComponent
};
//# sourceMappingURL=chunk-4KKGHO4P.js.map
