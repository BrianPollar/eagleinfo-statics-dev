import {
  ThemeService
} from "./chunk-466XHS7V.js";
import {
  AuthService
} from "./chunk-D77A7TO4.js";
import "./chunk-IOIIXNZS.js";
import {
  openClose,
  shakeBellIcon
} from "./chunk-6C27QOWO.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
import "./chunk-AKDPFH6R.js";
import {
  TooltipComponent
} from "./chunk-4KKGHO4P.js";
import "./chunk-UIKF3Q7X.js";
import "./chunk-RMIF5JQ2.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import "./chunk-LARJQE5I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-H6XV6YF3.js";
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import {
  User
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  Company,
  Expense,
  FrontendLogger,
  navByBus,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-SOKXHU4M.js";
import {
  DOCUMENT,
  NgClass,
  NgZone,
  Subject,
  init_esm,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/dashboard/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngOnInit() {
    this.updateFooterMessage();
    this.messageInterval = setInterval(() => {
      this.updateFooterMessage();
    }, 5e3);
  }
  ngOnDestroy() {
    if (this.messageInterval) {
      clearInterval(this.messageInterval);
    }
  }
  updateFooterMessage() {
    const messages = [
      "Empowering solutions, one click at a time!",
      "Innovation drives us forward.",
      "Transforming ideas into reality.",
      "Your success is our mission.",
      "Building tomorrow, today."
    ];
    this.footerMessage = messages[Math.floor(Math.random() * messages.length)];
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(t) {
      return new (t || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 2, consts: [["aria-label", "Page Footer", 1, "block", "py-4", "bg-default-white", "text-default-dark-tint", "rounded-xl", "shadow-sm", "prevent-print"], [1, "container", "mx-auto", "px-4", "prevent-print"], [1, "flex", "flex-wrap", "items-center", "md:justify-between", "justify-center"], [1, "w-full", "md:w-full", "px-4"], [1, "text-sm", "font-semibold", "py-1", "text-right", "flex", "items-center", "justify-end", "space-x-2", "rounded-lg", "px-4", "py-2", "prevent-print"], [1, "animate-pulse"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "rounded-full", "p-1", "bg-primary/20", "prevent-print"], ["fill-rule", "evenodd", "d", "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z", "clip-rule", "evenodd"], ["href", "https://eagleinfosolutions.com", "target", "_blank", "rel", "noopener noreferrer", 1, "hover:text-primary-dark", "transition-all", "duration-300", "transform", "hover:scale-105", "inline-block", "rounded-md", "px-1", "-mx-1", "prevent-print"], [1, "text-xs", "ml-2", "rounded-md", "px-2", "py-0.5", "xl:block", "hidden", "prevent-print"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 6);
        \u0275\u0275element(7, "path", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9);
        \u0275\u0275elementStart(10, "a", 8);
        \u0275\u0275text(11, " Eagle Info Solutions ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.footerMessage);
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent" });
})();

// projects/shared-lib/src/lib/components/side-menu-and-bar-related/ai-blob/ai-blob.component.ts
var _c0 = ["blobCanvas"];
var Point = class {
  constructor(azimuth, parent) {
    this.azimuth = azimuth;
    this.parent = parent;
    this._acceleration = 0;
    this._speed = 0;
    this._radialEffect = 0;
    this._elasticity = 1e-3;
    this._friction = 85e-4;
    this.azimuth = Math.PI - azimuth;
    this._components = {
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth)
    };
    this.acceleration = -0.3 + Math.random() * 0.6;
  }
  solveWith(leftPoint, rightPoint) {
    this.acceleration = (-0.3 * this.radialEffect + (leftPoint.radialEffect - this.radialEffect) + (rightPoint.radialEffect - this.radialEffect)) * this.elasticity - this.speed * this.friction;
  }
  set acceleration(value) {
    if (typeof value === "number") {
      this._acceleration = value;
      this.speed += this._acceleration * 2;
    }
  }
  get acceleration() {
    return this._acceleration;
  }
  set speed(value) {
    if (typeof value === "number") {
      this._speed = value;
      this.radialEffect += this._speed * 5;
    }
  }
  get speed() {
    return this._speed;
  }
  set radialEffect(value) {
    if (typeof value === "number") {
      this._radialEffect = value;
    }
  }
  get radialEffect() {
    return this._radialEffect;
  }
  get position() {
    return {
      x: this.parent.center.x + this.components.x * (this.parent.radius + this.radialEffect),
      y: this.parent.center.y + this.components.y * (this.parent.radius + this.radialEffect)
    };
  }
  get components() {
    return this._components;
  }
  get elasticity() {
    return this._elasticity;
  }
  get friction() {
    return this._friction;
  }
};
var Blob = class {
  constructor() {
    this.points = [];
    this._canvas = null;
    this.ctx = null;
    this._color = "#4caf50";
    this._points = 32;
    this._radius = 440;
    this._position = { x: 0.5, y: 0.5 };
    this._running = true;
    this.mousePos = null;
  }
  init() {
    for (let i = 0; i < this.numPoints; i++) {
      const point = new Point(this.divisional * (i + 1), this);
      this.points.push(point);
    }
  }
  render() {
    if (!this.canvas || !this.ctx) {
      return;
    }
    const ctx = this.ctx;
    const pointsArray = this.points;
    const points = this.numPoints;
    const center = this.center;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);
    const p0 = pointsArray[points - 1].position;
    let p1 = pointsArray[0].position;
    const _p2 = p1;
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);
    for (let i = 1; i < points; i++) {
      pointsArray[i].solveWith(pointsArray[i - 1], pointsArray[i + 1] || pointsArray[0]);
      const p2 = pointsArray[i].position;
      const xc2 = (p1.x + p2.x) / 2;
      const yc2 = (p1.y + p2.y) / 2;
      ctx.quadraticCurveTo(p1.x, p1.y, xc2, yc2);
      p1 = p2;
    }
    const xc = (p1.x + _p2.x) / 2;
    const yc = (p1.y + _p2.y) / 2;
    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
    const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
    gradient.addColorStop(0, "#4caf50");
    gradient.addColorStop(1, "#2196f3");
    this.color = gradient;
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = "#000000";
    if (this.running) {
      requestAnimationFrame(this.render.bind(this));
    }
  }
  set color(value) {
    this._color = value;
  }
  get color() {
    return this._color;
  }
  set canvas(value) {
    if (value instanceof HTMLCanvasElement) {
      this._canvas = value;
      this.ctx = this._canvas.getContext("2d");
    }
  }
  get canvas() {
    return this._canvas;
  }
  get numPoints() {
    return this._points;
  }
  get radius() {
    return this._radius;
  }
  set position(value) {
    if (value && typeof value.x === "number" && typeof value.y === "number") {
      this._position = value;
    }
  }
  get position() {
    return this._position;
  }
  get divisional() {
    return Math.PI * 2 / this.numPoints;
  }
  get center() {
    if (!this.canvas) {
      return { x: 0, y: 0 };
    }
    return {
      x: this.canvas.width * this.position.x,
      y: this.canvas.height * this.position.y
    };
  }
  set running(value) {
    this._running = value;
  }
  get running() {
    return this._running;
  }
};
var AiBlobComponent = class _AiBlobComponent {
  constructor(router) {
    this.router = router;
    this.oldMousePoint = { x: 0, y: 0 };
    this.hover = false;
    this.blob = new Blob();
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.blob.running = true;
        this.handleMouseMove({
          clientX: window.innerWidth / 2,
          clientY: window.innerHeight / 2,
          preventDefault: () => {
          },
          stopPropagation: () => {
          }
        });
      }
    });
  }
  ngAfterViewInit() {
    this.initializeBlob();
  }
  ngOnDestroy() {
    this.blob.running = false;
  }
  initializeBlob() {
    const canvas = this.canvasRef.nativeElement;
    canvas.setAttribute("touch-action", "none");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();
    this.blob.canvas = canvas;
    this.blob.init();
    this.blob.render();
    window.addEventListener("pointermove", this.handleMouseMove.bind(this));
  }
  handleMouseMove(e) {
    const pos = this.blob.center;
    const diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    const dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
    let angle = null;
    this.blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };
    if (dist < this.blob.radius && !this.hover) {
      angle = Math.atan2(diff.y, diff.x);
      this.hover = true;
    } else if (dist > this.blob.radius && this.hover) {
      angle = Math.atan2(diff.y, diff.x);
      this.hover = false;
      this.blob.color = "#000000";
    }
    if (typeof angle === "number") {
      let nearestPoint = null;
      let distanceFromPoint = 400;
      this.blob.points.forEach((point) => {
        if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
          nearestPoint = point;
          distanceFromPoint = Math.abs(angle - point.azimuth);
        }
      });
      if (nearestPoint) {
        const strength = {
          x: this.oldMousePoint.x - e.clientX,
          y: this.oldMousePoint.y - e.clientY
        };
        let strengthValue = Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
        if (strengthValue > 100) {
          strengthValue = 100;
          nearestPoint.acceleration = strengthValue / 100 * (this.hover ? -1 : 1);
        }
      }
    }
    this.oldMousePoint.x = e.clientX;
    this.oldMousePoint.y = e.clientY;
  }
  static {
    this.\u0275fac = function AiBlobComponent_Factory(t) {
      return new (t || _AiBlobComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiBlobComponent, selectors: [["lib-ai-blob"]], viewQuery: function AiBlobComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [["blobCanvas", ""], [1, "blob-container"]], template: function AiBlobComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "canvas", null, 0);
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterModule], styles: ["\n\n.blob-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 110px;\n  height: 30px;\n  pointer-events: none;\n  z-index: 1;\n  overflow: hidden;\n}\ncanvas[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100% !important;\n  z-index: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/ai-blob.component.css.map */"], data: { animation: [openClose, shakeBellIcon] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiBlobComponent, { className: "AiBlobComponent" });
})();

// projects/shared-lib/src/lib/components/side-menu-and-bar-related/main-header/main-header.base.ts
var MainHeaderBase = class {
  constructor(router, toastr) {
    this.router = router;
    this.toastr = toastr;
    this.searchQuery = "";
  }
  makeSearch(routeMap) {
    const query = this.searchQuery?.trim().toLowerCase();
    FrontendLogger.debug("searchQuery is ", query);
    FrontendLogger.debug("routeMap is ", routeMap);
    if (!query) {
      FrontendLogger.debug("Search query is empty, doing nothing.");
      return;
    }
    FrontendLogger.debug(`Searching for route starting with: "${query}"`);
    let foundRoute = null;
    let matchedKey = null;
    for (const key in routeMap) {
      if (Object.prototype.hasOwnProperty.call(routeMap, key)) {
        if (key.startsWith(query)) {
          foundRoute = routeMap[key];
          matchedKey = key;
          FrontendLogger.debug(`Found match: key="${matchedKey}", route="${foundRoute}"`);
          break;
        }
      }
    }
    if (foundRoute) {
      FrontendLogger.debug(`Navigating to route: ${foundRoute}`);
      this.router.navigate([foundRoute]);
      this.searchQuery = "";
    } else {
      FrontendLogger.warn(`No route found starting with search query: "${query}"`);
      this.toastr.info(`Could not find a page matching "${this.searchQuery}"`, "Navigation");
    }
  }
};

// projects/admin-panel/src/app/components/pane/dashboard/navbar/navbar.component.ts
init_esm();

// projects/admin-panel/src/app/components/pane/misc/admin-logout-spinner/admin-logout-spinner.component.ts
function AdminLogoutSpinnerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "h3", 6);
    \u0275\u0275text(7, "Logging Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275text(9, "Please wait while we securely log you out...");
    \u0275\u0275elementEnd()()()()();
  }
}
var AdminLogoutSpinnerComponent = class _AdminLogoutSpinnerComponent {
  constructor() {
    this.showModal = false;
  }
  static {
    this.\u0275fac = function AdminLogoutSpinnerComponent_Factory(t) {
      return new (t || _AdminLogoutSpinnerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLogoutSpinnerComponent, selectors: [["app-admin-logout-spinner"]], inputs: { showModal: "showModal" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-[1000]", "overflow-y-auto", "bg-black/50", "flex", "items-center", "justify-center", "p-4", "backdrop-blur-sm"], ["role", "dialog", 1, "w-full", "max-w-md", "!bg-default-white", "rounded-2xl", "shadow-2xl", "border", "border-gray-200", "transform", "transition-all", "duration-300", "ease-in-out", "scale-100", "opacity-100"], [1, "p-6"], [1, "flex", "items-center", "justify-center", "mb-6"], [1, "animate-spin", "rounded-full", "h-16", "w-16", "border-t-2", "border-b-2", "border-secondary"], [1, "text-center"], [1, "text-xl", "font-bold", "mb-2"], [1, "text-sm"]], template: function AdminLogoutSpinnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdminLogoutSpinnerComponent_Conditional_0_Template, 10, 0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.showModal ? 0 : -1);
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLogoutSpinnerComponent, { className: "AdminLogoutSpinnerComponent" });
})();

// projects/admin-panel/src/app/components/pane/dashboard/navbar/navbar.component.ts
var _c02 = () => ({ standalone: true });
var NavbarComponent = class _NavbarComponent extends MainHeaderBase {
  constructor(eventbus, router, currencyService, toastr, auth, themeService, document) {
    super(router, toastr);
    this.eventbus = eventbus;
    this.router = router;
    this.currencyService = currencyService;
    this.toastr = toastr;
    this.auth = auth;
    this.themeService = themeService;
    this.document = document;
    this.showModal = false;
    this.$destroyed = new Subject();
    this.menuClosed = false;
    this.menuClosedState = false;
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.currentActivePopupId = "";
    this.routeMap = {
      dashboard: "/dashboard",
      home: "/dashboard",
      company: "/company/list",
      companies: "/company/list",
      "vendor manager": "/vendor-manager/list",
      "vendor managers": "/vendor-manager/list",
      "delivery manager": "/delivery-manager/list",
      "delivery managers": "/delivery-manager/list",
      order: "/order/list",
      orders: "/order/list",
      expense: "/expense/list",
      expenses: "/expense/list",
      "auto tax": "/auto-tax/list",
      "auto taxes": "/auto-tax/list",
      "ecommerce cut": "/ecommerce-cut/view",
      "ecommerce cuts": "/ecommerce-cut/view",
      "operational location": "/operational-location/list",
      "operational locations": "/operational-location/list",
      mail: "/mail/list",
      mails: "/mail/list",
      setting: "/settings",
      settings: "/settings",
      user: "/users",
      users: "/users",
      "user ip": "/user-ips",
      "user ips": "/user-ips",
      "login history": "/login-history/all",
      // Assuming 'all' is a valid param
      notification: "/notifications",
      notifications: "/notifications",
      subscription: "/subscription/list",
      subscriptions: "/subscription/list",
      "subscription package": "/subscription/packages",
      "subscription packages": "/subscription/packages",
      "data bin": "/data-bin",
      activity: "/audit-log/user/all"
      // Assuming 'all' is a valid param for user activity
    };
    const getWidth = () => window.innerWidth || this.document.documentElement.clientWidth || document.body.clientWidth;
    const width = getWidth();
    if (width < 768) {
      this.menuClosed = true;
      this.eventbus.generalEvent$.next({ type: "removeSide", data: "true" });
      this.eventbus.generalEvent$.next({ type: "menuClosed", data: "true" });
    }
  }
  onResize() {
    if (window.innerWidth < 768) {
      this.menuClosed = true;
      this.eventbus.generalEvent$.next({ type: "removeSide", data: "true" });
      this.eventbus.generalEvent$.next({ type: "toggleMenu", data: "true" });
    } else {
      this.menuClosed = this.menuClosedState;
      this.eventbus.generalEvent$.next({ type: "removeSide", data: "false" });
      this.eventbus.generalEvent$.next({ type: "toggleMenu", data: this.menuClosedState ? "true" : "false" });
    }
  }
  onDocumentClick() {
    this.currentActivePopupId = "";
    const width = window.innerWidth;
    if (width < 768) {
      this.menuClosed = true;
      this.eventbus.generalEvent$.next({ type: "toggleMenu", data: "true" });
    }
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  toggleMenu() {
    this.menuClosed = !this.menuClosed;
    this.menuClosedState = this.menuClosed;
    this.eventbus.generalEvent$.next({ type: "toggleMenu", data: this.menuClosed ? "true" : "false" });
  }
  logOut() {
    return __async(this, null, function* () {
      this.showModal = true;
      yield this.auth.logOut();
      this.showModal = false;
    });
  }
  changeCurrency(curr) {
    this.currencyService.changeCurrency(curr);
  }
  openExtras(id) {
    if (this.currentActivePopupId === id) {
      this.currentActivePopupId = "";
      return;
    }
    this.currentActivePopupId = id;
  }
  toggleTheme(mode, icon) {
    this.themeService.toggleTheme(mode, icon);
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(t) {
      return new (t || _NavbarComponent)(\u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function NavbarComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, \u0275\u0275resolveWindow)("click", function NavbarComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 69, vars: 8, consts: [[1, "fixed", "top-0", "left-0", "right-0", "z-10", "flex", "items-center", "!bg-default-white", "!text-default-dark", "print:hidden", "ltr:pr-6", "rtl:pl-6", "prevent-print"], [1, "flex", "justify-between", "w-full", "rounded-b-3xl"], [1, "flex", "items-center", "topbar-brand"], [1, "hidden", "lg:flex", "navbar-brand", "items-center", "justify-between", "shrink", "px-6", "h-[70px]", "shadow-none"], ["routerLink", "/", 1, "flex", "items-center", "text-lg", "flex-shrink-0", "font-bold", "leading-[69px]", "mb-[6px]"], [1, "hidden", "font-bold", "align-middle", "xl:block", "leading-[69px]"], ["type", "button", 1, "group-data-[sidebar-size=sm]:border-b", "border-b", "lg:border-transparent", "group-data-[sidebar-size=sm]:", "h-[70px]", "px-4", "ltr:-ml-[52px]", "rtl:-mr-14", "py-1", "vertical-menu-btn", "text-16", "mt-[10px]", 3, "click"], [1, "material-icons-outlined"], [1, "flex", "justify-between", "w-full", "items-center", "border-b", "border-default-white-shade", "ltr:pl-6", "rtl:pr-6"], [1, "hidden", "app-search", "xl:block"], [1, "relative", "inline-block", "!rounded-2xl", "flex", "items-center"], ["type", "text", "placeholder", "Search nav bar...", 1, "!rounded-tl-lg", "!rounded-bl-lg", "pl-4", "pr-[40px]", "border-0", "focus:ring-0", "text-13", "placeholder:text-13", "max-w-[223px]", "max-h-[34px]", "mt-[5px]", "!bg-default-white-shade", "!text-default-dark", 3, "ngModelChange", "keyup.enter", "ngModelOptions", "ngModel"], [3, "popper"], ["type", "button", 1, "py-1.7", "px-2.5", "w-[32px]", "h-[34px]", "text-white", "inline-block", "absolute", "top-[5px]", "!rounded-tr-lg", "!rounded-br-lg", "!bg-primary", "flex", "items-center", "justify-center", 3, "click"], [1, "align-middle", "material-icons-outlined", "!mx-auto"], [1, "font-bold", "align-middle", "lg:hidden", "leading-[69px]"], [1, "flex-1", "ml-[30px]"], [1, "-mt-[12px]", "ml-[60px]", "lg:ml-[20px]", "absolute"], [1, "flex"], [1, "relative", "dropdown", "absolute"], ["type", "button", "id", "page-header-user-dropdown", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "true", 1, "flex", "items-center", "px-3", "py-2", "h-[70px]", "dropdown-toggle", 3, "click"], [1, "hidden", "font-medium", "xl:block", "pl-2", "material-icons-outlined"], ["id", "theme", 1, "absolute", "z-50", "min-w-[160px]", "max-w-[650px]", "!bg-default-white", "rounded-lg", "shadow-lg", "overflow-hidden"], ["aria-labelledby", "navNotifications", 1, "border", "border-default-white-shade"], [1, "dropdown-item"], ["href", "javascript:void(0);", 1, "block", "px-3", "py-2", "hover:bg-gray-50/50", 3, "click"], [1, "material-icons-outlined", "text-[17px]", "mr-1", "align-middle"], [1, "border-default-white-shade"], ["href", "javascript:void(0);", 1, "block", "p-3", "hover:bg-gray-50/50", 3, "click"], ["src", "assets/logo/logoblack.png", "width", "400", "height", "200", "alt", "Header Avatar", 1, "border-[3px]", "border-default-white-shade", "rounded-full", "w-9", "h-9", "ltr:xl:mr-2", "rtl:xl:ml-2", "company-img"], [1, "hidden", "font-medium", "xl:block", "pl-2"], ["id", "main-cow", 1, "absolute", "z-50", "min-w-[160px]", "max-w-[650px]", "!bg-default-white", "rounded-lg", "shadow-lg", "overflow-hidden"], ["routerLink", "/settings", 1, "block", "px-3", "py-2", "hover:bg-gray-50/50"], [3, "showModal"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
        \u0275\u0275text(6, "Eagle Info Super");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "button", 6);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_7_listener($event) {
          ctx.toggleMenu();
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(8, "i", 7);
        \u0275\u0275text(9, "menu");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 8)(11, "div")(12, "form", 9)(13, "div", 10)(14, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function NavbarComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function NavbarComponent_Template_input_keyup_enter_14_listener() {
          return ctx.makeSearch(ctx.routeMap);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "lib-tooltip", 12)(16, "button", 13);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_16_listener() {
          return ctx.makeSearch(ctx.routeMap);
        });
        \u0275\u0275elementStart(17, "i", 14);
        \u0275\u0275text(18, "search");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(19, "span", 15);
        \u0275\u0275text(20, "Eagle Info Super");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 16)(22, "a", 17);
        \u0275\u0275element(23, "lib-ai-blob");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(24, "div", 18);
        \u0275\u0275elementStart(25, "div")(26, "div", 19)(27, "button", 20);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_27_listener($event) {
          ctx.openExtras("theme");
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(28, "span", 21);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 22)(31, "div", 23)(32, "div", 24)(33, "a", 25);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_33_listener() {
          return ctx.toggleTheme("dark", "dark_mode");
        });
        \u0275\u0275elementStart(34, "i", 26);
        \u0275\u0275text(35, "dark_mode");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " Dark ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(37, "hr", 27);
        \u0275\u0275elementStart(38, "div", 24)(39, "a", 25);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_39_listener() {
          return ctx.toggleTheme("light", "light_mode");
        });
        \u0275\u0275elementStart(40, "i", 26);
        \u0275\u0275text(41, "light_mode");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " Light ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(43, "hr", 27);
        \u0275\u0275elementStart(44, "div", 24)(45, "a", 28);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_45_listener() {
          return ctx.toggleTheme("system", "computer");
        });
        \u0275\u0275elementStart(46, "i", 26);
        \u0275\u0275text(47, "computer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " System ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(49, "div")(50, "div", 19)(51, "button", 20);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_51_listener($event) {
          ctx.openExtras("main-cow");
          return $event.stopPropagation();
        });
        \u0275\u0275element(52, "img", 29);
        \u0275\u0275elementStart(53, "span", 30);
        \u0275\u0275text(54, "Super Cow.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 31)(56, "div", 23)(57, "div", 24)(58, "a", 32)(59, "i", 26);
        \u0275\u0275text(60, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(61, " Settings ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(62, "hr", 27);
        \u0275\u0275elementStart(63, "div", 24)(64, "a", 28);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_64_listener() {
          return ctx.logOut();
        });
        \u0275\u0275elementStart(65, "i", 26);
        \u0275\u0275text(66, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " Logout ");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275element(68, "app-admin-logout-spinner", 33);
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c02));
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance();
        \u0275\u0275property("popper", "This button directs you to the search field for quick navigation.");
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1(" ", ctx.themeService.currentIcon, " ");
        \u0275\u0275advance();
        \u0275\u0275property("@openClose", ctx.currentActivePopupId === "theme" ? "open" : "closed");
        \u0275\u0275advance(25);
        \u0275\u0275property("@openClose", ctx.currentActivePopupId === "main-cow" ? "open" : "closed");
        \u0275\u0275advance(13);
        \u0275\u0275property("showModal", ctx.showModal);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      ReactiveFormsModule,
      RouterModule,
      RouterLink,
      TooltipComponent,
      AiBlobComponent,
      AdminLogoutSpinnerComponent
    ], data: { animation: [
      openClose
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent" });
})();

// projects/admin-panel/src/app/components/pane/dashboard/side-menu/side-menu.component.ts
var _c03 = (a0, a1, a2) => ({ "!max-w-[60px] hover:!w-[250px] hover:!max-w-[250px] transition-all duration-300 ease-in-out": a0, "!max-w-[0px]": a1, "!max-w-[250px] !w-[250px]": a2 });
var _c1 = (a0) => ({ "transition-all duration-300 ease-in-out": a0 });
var _c2 = (a0) => ({ "!bg-secondary text-white": a0 });
var _c3 = (a0) => ({ "!bg-red text-white": a0 });
var SideMenuComponent = class _SideMenuComponent {
  constructor(auth, router, eventbus, zone, document) {
    this.auth = auth;
    this.router = router;
    this.eventbus = eventbus;
    this.zone = zone;
    this.document = document;
    this.showModal = false;
    this.showDropdown = true;
    this.bellCollapsed = true;
    this.userCollapsed = true;
    this.langCollapsed = true;
    this.base = "";
    this.page = "";
    this.notifications = [];
    this.loading = false;
    this.collapseShow = "hidden";
    this.menuClosed = false;
    this.removeSide = false;
    this.router.events?.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.splitVal = event.url.split("/");
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
      }
    });
    const getWidth = () => window.innerWidth || this.document.documentElement.clientWidth || this.document.body.clientWidth;
    const width = getWidth();
    if (width < 768) {
      this.menuClosed = true;
      this.removeSide = true;
      this.eventbus.generalEvent$.next({ type: "removeSide", data: "true" });
      this.eventbus.generalEvent$.next({ type: "menuClosed", data: "true" });
    }
  }
  ngOnInit() {
    const handlers = {
      toggleMenu: (data) => {
        this.zone.run(() => {
          this.menuClosed = data === "true";
        });
      },
      removeSide: (data) => {
        this.zone.run(() => {
          this.removeSide = data === "true";
        });
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
  }
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
  logOut() {
    return __async(this, null, function* () {
      this.showModal = true;
      yield this.auth.logOut();
      this.showModal = false;
    });
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function SideMenuComponent_Factory(t) {
      return new (t || _SideMenuComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideMenuComponent, selectors: [["app-side-menu"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 155, vars: 84, consts: [[1, "mt-6", "rounded-r-3xl", "fixed", "bottom-0", "z-10", "h-screen", "ltr:border-r", "rtl:border-l", "w-[240px]", "rtl:right-0", "ltr:left-0", "top-[70px]", "bg-default-white", "text-default-dark", "border-gray-50", "print:hidden", "prevent-print", 3, "ngClass"], [1, "h-full", "rounded-r-3xl", "overflow-y-auto", "bg-default-white-shade", "scrool-bar-side", 2, "max-height", "calc(100vh - 70px)", 3, "ngClass"], ["id", "sidebar-menu", 1, "metismenu", "pb-10", "pt-2.5"], ["id", "side-menu", 1, "space-y-2", "mt-4"], [1, "group"], ["routerLink", "/", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], [1, "material-icons-outlined", "text-[30px]", "group-active:animate-spin"], [1, "ml-[15px]"], ["routerLink", "/droplet-metrics/web", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/droplet-metrics/mail", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/company", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/auto-tax", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/refresh-token", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/users", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/login-history/all", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/user-ips", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/user-suspicious-activity", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/subscription/packages", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/subscription/list", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/mail", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/operational-location", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/vendor-manager", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/delivery-manager", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/ecommerce-order-refund/all", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/un-reliable-user", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/un-reliable-vendor", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/item-return", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/item-complaint", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/user-wallet", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/data-bin", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["routerLink", "/settings", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-secondary", "hover:text-white", "active:scale-95", 3, "ngClass"], ["href", "javascript:void(0)", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", "duration-200", "transform", "rounded-md", "hover:bg-red", "hover:text-white", "mb-5", "active:scale-95", 3, "click", "ngClass"], [3, "showModal"]], template: function SideMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3)(4, "li", 4)(5, "a", 5)(6, "span", 6);
        \u0275\u0275text(7, "space_dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 7);
        \u0275\u0275text(9, "Dashboard");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "li", 4)(11, "a", 8)(12, "span", 6);
        \u0275\u0275text(13, "bar_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 7);
        \u0275\u0275text(15, "Web Droplet Metrics");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "li", 4)(17, "a", 9)(18, "span", 6);
        \u0275\u0275text(19, "bar_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 7);
        \u0275\u0275text(21, "Mail Droplet Metrics");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "li", 4)(23, "a", 10)(24, "span", 6);
        \u0275\u0275text(25, "account_balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 7);
        \u0275\u0275text(27, "Companys");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "li", 4)(29, "a", 11)(30, "span", 6);
        \u0275\u0275text(31, "assessment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 7);
        \u0275\u0275text(33, "Auto Taxes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "li", 4)(35, "a", 12)(36, "span", 6);
        \u0275\u0275text(37, "security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 7);
        \u0275\u0275text(39, "Refresh Tokens");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "li", 4)(41, "a", 13)(42, "span", 6);
        \u0275\u0275text(43, "group");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 7);
        \u0275\u0275text(45, "Users");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "li", 4)(47, "a", 14)(48, "span", 6);
        \u0275\u0275text(49, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span", 7);
        \u0275\u0275text(51, "Login History");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "li", 4)(53, "a", 15)(54, "span", 6);
        \u0275\u0275text(55, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span", 7);
        \u0275\u0275text(57, "User Ip History ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "li", 4)(59, "a", 16)(60, "span", 6);
        \u0275\u0275text(61, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span", 7);
        \u0275\u0275text(63, "User Suspicious Activity ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "li", 4)(65, "a", 17)(66, "span", 6);
        \u0275\u0275text(67, "subscriptions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "span", 7);
        \u0275\u0275text(69, "Subscriptions Packages");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "li", 4)(71, "a", 18)(72, "span", 6);
        \u0275\u0275text(73, "loyalty");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "span", 7);
        \u0275\u0275text(75, "Company Subscriptions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "li", 4)(77, "a", 19)(78, "span", 6);
        \u0275\u0275text(79, "alternate_email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "span", 7);
        \u0275\u0275text(81, "Mail List");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(82, "li", 4)(83, "a", 20)(84, "span", 6);
        \u0275\u0275text(85, "location_city");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "span", 7);
        \u0275\u0275text(87, "Operational Locations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "li", 4)(89, "a", 21)(90, "span", 6);
        \u0275\u0275text(91, "supervisor_account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "span", 7);
        \u0275\u0275text(93, "Vendor Managers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "li", 4)(95, "a", 22)(96, "span", 6);
        \u0275\u0275text(97, "supervisor_account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "span", 7);
        \u0275\u0275text(99, "Delivery Managers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(100, "li", 4)(101, "a", 23)(102, "span", 6);
        \u0275\u0275text(103, "alternate_email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "span", 7);
        \u0275\u0275text(105, "EcommerceOrder Refund");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(106, "li", 4)(107, "a", 24)(108, "span", 6);
        \u0275\u0275text(109, "alternate_email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "span", 7);
        \u0275\u0275text(111, "Unreliable Users");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(112, "li", 4)(113, "a", 25)(114, "span", 6);
        \u0275\u0275text(115, "alternate_email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "span", 7);
        \u0275\u0275text(117, "Unreliable Vendors");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(118, "li", 4)(119, "a", 26)(120, "span", 6);
        \u0275\u0275text(121, "report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "span", 7);
        \u0275\u0275text(123, "Item Return");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(124, "li", 4)(125, "a", 27)(126, "span", 6);
        \u0275\u0275text(127, "report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "span", 7);
        \u0275\u0275text(129, "Item Complaint");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(130, "li", 4)(131, "a", 28)(132, "span", 6);
        \u0275\u0275text(133, "account_balance_wallet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "span", 7);
        \u0275\u0275text(135, "User Wallet");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(136, "li", 4)(137, "a", 29)(138, "span", 6);
        \u0275\u0275text(139, "delete");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "span", 7);
        \u0275\u0275text(141, "Bin");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(142, "li", 4)(143, "a", 30)(144, "span", 6);
        \u0275\u0275text(145, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "span", 7);
        \u0275\u0275text(147, "Settings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(148, "li", 4)(149, "a", 31);
        \u0275\u0275listener("click", function SideMenuComponent_Template_a_click_149_listener() {
          return ctx.logOut();
        });
        \u0275\u0275elementStart(150, "span", 6);
        \u0275\u0275text(151, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "span", 7);
        \u0275\u0275text(153, "Log Out");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275element(154, "app-admin-logout-spinner", 32);
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(28, _c03, ctx.menuClosed && !ctx.removeSide, ctx.removeSide, !ctx.menuClosed && ctx.removeSide));
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(32, _c1, ctx.menuClosed));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(34, _c2, ctx.base === ""));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(36, _c2, ctx.base === "droplet-metrics" && ctx.page === "web"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(38, _c2, ctx.base === "droplet-metrics" && ctx.page === "mail"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(40, _c2, ctx.base === "company"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(42, _c2, ctx.base === "auto-tax"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(44, _c2, ctx.base === "refresh-token"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(46, _c2, ctx.base === "users"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(48, _c2, ctx.base === "login-history"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(50, _c2, ctx.base === "user-ips"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(52, _c2, ctx.base === "user-suspicious-activity"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(54, _c2, ctx.page === "packages" && ctx.base === "subscription"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(56, _c2, ctx.page === "list" && ctx.base === "subscription"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(58, _c2, ctx.base === "mail"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(60, _c2, ctx.base === "operational-location"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(62, _c2, ctx.base === "vendor-manager"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(64, _c2, ctx.base === "delivery-manager"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(66, _c2, ctx.base === "ecommerce-order-refund"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(68, _c2, ctx.base === "un-reliable-user"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(70, _c2, ctx.base === "un-reliable-vendor"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(72, _c2, ctx.base === "item-return"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(74, _c2, ctx.base === "item-complaint"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(76, _c2, ctx.base === "user-wallet"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(78, _c2, ctx.base === "data-bin"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(80, _c2, ctx.base === "settings"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(82, _c3, ctx.base === "tracked-view"));
        \u0275\u0275advance(5);
        \u0275\u0275property("showModal", ctx.showModal);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      NgClass,
      AdminLogoutSpinnerComponent
    ], styles: ['\n\n#collapseExample1[_ngcontent-%COMP%] {\n  position: absolute;\n  will-change: transform;\n  left: 0px;\n  transform: translate3d(-233px, 5px, 0px);\n}\n#collapseExample2[_ngcontent-%COMP%] {\n  position: absolute;\n  will-change: transform;\n  top: 0px;\n  left: 0px;\n  transform: translate3d(-127px, 60px, 0px);\n}\n.sidebar-menu[_ngcontent-%COMP%]   .menu-arrow[_ngcontent-%COMP%] {\n  -webkit-transition: -webkit-transform 0.15s;\n  -o-transition: -o-transform 0.15s;\n  transition: transform 0.15s;\n  position: absolute;\n  right: 15px;\n  display: inline-block;\n  font-family: "Font Awesome 5 Free";\n  font-weight: 900;\n  text-rendering: auto;\n  line-height: 40px;\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n  -transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n  line-height: 18px;\n  top: 11px;\n}\n.sidebar-menu[_ngcontent-%COMP%]   .menu-arrow[_ngcontent-%COMP%]:before {\n  content: "\\f105";\n}\n.sidebar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.subdrop[_ngcontent-%COMP%]   .menu-arrow[_ngcontent-%COMP%] {\n  -ms-transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .menu-arrow[_ngcontent-%COMP%] {\n  top: 10px;\n}\n@media print {\n  .header[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.sidebar-inner[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.tappable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  max-width: 50px;\n  max-height: 50px;\n}\n/*# sourceMappingURL=https://eagleinfo-statics-dev.pages.dev/side-menu.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideMenuComponent, { className: "SideMenuComponent" });
})();

// projects/admin-panel/src/app/components/pane/dashboard/dashboard/dashboard.component.ts
var _c04 = (a0, a1) => ({ "w-[calc(100vw-70px)] ml-[70px]": a0, "!w-[100vw] !ml-[0px]": a1 });
var DashboardComponent = class _DashboardComponent {
  constructor(router, eventbus, zone, document) {
    this.router = router;
    this.eventbus = eventbus;
    this.zone = zone;
    this.document = document;
    this.adminShow = true;
    this.isSidebarChecked = false;
    this.count = 0;
    this.companys = [];
    this.countUsers = 0;
    this.countExpenses = 0;
    this.users = [];
    this.expenses = [];
    this.menuClosed = false;
    this.removeSide = false;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === "/forgot-pass" || event.url === "/lock-screen" || event.url === "/login-form" || event.url === "/register" || event.url === "/error-first" || event.url === "/error-second") {
          this.adminShow = false;
        } else {
          this.adminShow = true;
        }
      }
    });
    const getWidth = () => window.innerWidth || this.document.documentElement.clientWidth || document.body.clientWidth;
    const width = getWidth();
    if (width < 768) {
      this.menuClosed = true;
      this.removeSide = true;
      this.eventbus.generalEvent$.next({ type: "removeSide", data: "true" });
      this.eventbus.generalEvent$.next({ type: "menuClosed", data: "true" });
    }
  }
  ngOnInit() {
    this.getUsers();
    this.getExpenses();
    this.getCompanys();
    const handlers = {
      toggleMenu: (data) => {
        this.zone.run(() => {
          this.menuClosed = data === "true";
        });
      },
      removeSide: (data) => {
        this.zone.run(() => {
          this.removeSide = data === "true";
        });
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
  }
  getCompanys() {
    return __async(this, null, function* () {
      try {
        const { count, dataArr } = yield Company.getAll();
        FrontendLogger.debug("get Companys, ", dataArr);
        this.count = count;
        this.companys = dataArr;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getUsers() {
    return __async(this, null, function* () {
      try {
        const { count, dataArr } = yield User.getAll();
        this.countUsers = count;
        this.users = dataArr;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  getExpenses() {
    return __async(this, null, function* () {
      const { count, dataArr } = yield Expense.getAll();
      this.countExpenses = count;
      this.expenses = dataArr;
    });
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 5, consts: [[1, "bg-default-white", "text-default-dark"], [3, "hidden"], [1, "ml-[240px]", "w-[calc(100vw-240px)]", "!h-[calc(100vh-70px)]", "flex", "flex-col", "respect-print", 3, "ngClass"], [1, "flex-grow"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-side-menu", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "app-navbar");
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275element(5, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "app-footer");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("hidden", !ctx.adminShow);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c04, ctx.menuClosed, ctx.removeSide));
      }
    }, dependencies: [
      SideMenuComponent,
      RouterModule,
      RouterOutlet,
      NavbarComponent,
      FooterComponent,
      NgClass
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-2JKNYDQC.js.map
