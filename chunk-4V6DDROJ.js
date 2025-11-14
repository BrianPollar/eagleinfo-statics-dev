import {
  AuditLogBase
} from "./chunk-ABZXXWE3.js";
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
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import {
  AppNameService
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  Meta,
  Title,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject
} from "./chunk-4EXDEK5V.js";

// projects/admin-panel/src/app/components/pane/track/audit-log/audit-log-group/audit-log-group.component.ts
var AuditLogGroupComponent = class _AuditLogGroupComponent extends AuditLogBase {
  constructor(windowService, router, eventbus, toastr, route, apNme, mainBarTitle, metaTagService, titleService) {
    super(windowService, router, eventbus, toastr, route, mainBarTitle);
    this.windowService = windowService;
    this.router = router;
    this.eventbus = eventbus;
    this.toastr = toastr;
    this.route = route;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
  }
  ngOnInit() {
    this.init();
    this.mainBarTitle.title = "User Activity";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `Easily manage and view user activity for your organization
      to ensure effective oversight and engagement.`
    });
    scrollToTop(this.windowService);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.\u0275fac = function AuditLogGroupComponent_Factory(t) {
      return new (t || _AuditLogGroupComponent)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditLogGroupComponent, selectors: [["app-audit-log-group"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 0, vars: 0, template: function AuditLogGroupComponent_Template(rf, ctx) {
    }, dependencies: [RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditLogGroupComponent, { className: "AuditLogGroupComponent" });
})();

export {
  AuditLogGroupComponent
};
//# sourceMappingURL=chunk-4V6DDROJ.js.map
