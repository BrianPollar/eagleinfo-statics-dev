import {
  TooltipService
} from "./chunk-RMIF5JQ2.js";
import {
  EventbusService
} from "./chunk-YESK3NVV.js";
import {
  UserIp
} from "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  FrontendLogger
} from "./chunk-MC4HAW4O.js";
import {
  RouterModule
} from "./chunk-SOKXHU4M.js";
import {
  EventEmitter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/user-related/user-ips/user-ips-analytics/user-ips-analytics.component.ts
var UserIpsAnalyticsComponent = class _UserIpsAnalyticsComponent {
  constructor(eventbus, tooltipService) {
    this.eventbus = eventbus;
    this.tooltipService = tooltipService;
    this.filterBy = new EventEmitter();
    this.total = 0;
  }
  ngOnInit() {
    this.getUserIpAnalytics();
  }
  getUserIpAnalytics() {
    return __async(this, arguments, function* (month = (/* @__PURE__ */ new Date()).getMonth() + 1, year = (/* @__PURE__ */ new Date()).getFullYear()) {
      try {
        const beginDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);
        const filterProps = {
          comparisonFilter: [{
            field: "createdAt",
            fieldValue: beginDate,
            operator: "gte"
          }, {
            field: "createdAt",
            fieldValue: endDate,
            operator: "lte"
          }]
        };
        this.analyticsResult = yield UserIp.getUserIpAnalytics(filterProps);
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  static {
    this.\u0275fac = function UserIpsAnalyticsComponent_Factory(t) {
      return new (t || _UserIpsAnalyticsComponent)(\u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(TooltipService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserIpsAnalyticsComponent, selectors: [["app-user-ips-analytics"]], outputs: { filterBy: "filterBy" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 0, vars: 0, template: function UserIpsAnalyticsComponent_Template(rf, ctx) {
    }, dependencies: [RouterModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserIpsAnalyticsComponent, { className: "UserIpsAnalyticsComponent" });
})();
export {
  UserIpsAnalyticsComponent
};
//# sourceMappingURL=chunk-REVK34DG.js.map
