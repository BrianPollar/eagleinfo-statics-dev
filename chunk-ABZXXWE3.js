import {
  ListComposeAdminPanel
} from "./chunk-ANHFC4IG.js";
import {
  ToastrService
} from "./chunk-CIT33FWQ.js";
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
  AuditLog
} from "./chunk-MC4HAW4O.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-SOKXHU4M.js";
import {
  Subject,
  init_esm,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵlistener,
  ɵɵresolveDocument
} from "./chunk-4EXDEK5V.js";

// projects/admin-panel/src/app/components/pane/track/audit-log/audit-log.base.ts
init_esm();
var AuditLogBase = class _AuditLogBase {
  constructor(windowService, router, eventbus, toastr, route, mainBarTitle) {
    this.windowService = windowService;
    this.router = router;
    this.eventbus = eventbus;
    this.toastr = toastr;
    this.route = route;
    this.mainBarTitle = mainBarTitle;
    this.customCaller = {
      method: "filterAll",
      extrasFilters: []
    };
    this.dest$ = new Subject();
    this.listCompose = new ListComposeAdminPanel(AuditLog, this.eventbus, this.windowService, this.toastr, this.customCaller);
    this.actions = [
      {
        label: "View",
        icon: "edit",
        event: (auditLog) => {
          this.viewAuditLogDetails(auditLog._id);
        }
      },
      {
        label: "Delete",
        icon: "delete",
        event: (auditLog) => {
          this.listCompose.openDeleteOneModal(auditLog._id, "Delete Audit Log", "Are You Sure You Want To Delete This Audit Log?");
        }
      }
    ];
    if (!this.id) {
      this.id = this.route.snapshot?.params["id"];
    }
    if (!this.type) {
      this.type = this.route.snapshot?.params["type"];
    }
  }
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  init() {
    if (this.type === "parent") {
      this.customCaller = {
        method: "filterActivityOnParent",
        extrasFilters: [this.id]
      };
    } else {
      this.customCaller = {
        method: "filterActivityOnParent",
        extrasFilters: [this.id]
      };
    }
    this.mainBarTitle.title = "Activity";
    this.listCompose.getDataArr();
  }
  viewAuditLogDetails(_id) {
    this.router.navigate(["/tracked-details/edited/" + _id]);
  }
  ngOnDestroy() {
    this.cleanup?.();
    this.listCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function AuditLogBase_Factory(t) {
      return new (t || _AuditLogBase)(\u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MainBarTitleService));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AuditLogBase, hostBindings: function AuditLogBase_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AuditLogBase_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { id: "id", type: "type" } });
  }
};

export {
  AuditLogBase
};
//# sourceMappingURL=chunk-ABZXXWE3.js.map
