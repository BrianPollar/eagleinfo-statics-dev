import {
  ListComposeAdminPanel
} from "./chunk-ANHFC4IG.js";
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
  AppNameService,
  Company,
  navByBus
} from "./chunk-MC4HAW4O.js";
import {
  Router
} from "./chunk-SOKXHU4M.js";
import {
  Meta,
  Title,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵlistener,
  ɵɵresolveDocument
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/components/base/company-list-base.ts
var CompanyListBase = class _CompanyListBase {
  constructor(router, eventbus, windowService, toastr, apNme, mainBarTitle, metaTagService, titleService) {
    this.router = router;
    this.eventbus = eventbus;
    this.windowService = windowService;
    this.toastr = toastr;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.scrollForce = true;
    this.listCompose = new ListComposeAdminPanel(Company, this.eventbus, this.windowService, this.toastr);
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.actions = [
      {
        label: "View",
        icon: "visibility",
        event: (company) => this.viewcompany(company)
      },
      {
        label: "Update",
        icon: "edit",
        event: (company) => this.updateCompany(company)
      },
      {
        label: "Make Subscription",
        icon: "add",
        event: (company) => this.subscribeToPkg(company._id)
      },
      {
        label: "Delete",
        icon: "delete",
        event: (company) => this.listCompose.openDeleteOneModal(company._id, "Delete Company", "Are You Sure You Want To Delete This Company?")
      }
    ];
  }
  onDocumentClick() {
    this.listCompose.currentActivePopupId = "";
  }
  ngOnInit() {
    this.mainBarTitle.title = "Companys - List of Vendor Companies";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: `This page provides an overview of companies, allowing users
      to manage and view company details effectively.`
    });
    this.listCompose.getDataArr();
    if (this.scrollForce) {
      scrollToTop(this.windowService);
    }
  }
  nameControlNotif(event) {
    this.listCompose.searchBy({ name: event.value });
  }
  updateCompany(company) {
    this.navigateByBus(["/company/update"], "updateCompany", company);
  }
  outEvent(ev) {
    switch (ev.type) {
      case "make sunscription":
        this.subscribeToPkg(ev.val._id);
        break;
      case "update":
        this.updateCompany(ev.val);
        break;
    }
  }
  viewcompany(company) {
    this.navigateByBus(["/company/view/" + company.urId], "oneItem", company);
  }
  subscribeToPkg(id) {
    this.router.navigate(["subscribe/" + id]);
  }
  addCompany() {
    this.router.navigate(["/company/add"]);
  }
  ngOnDestroy() {
    this.listCompose.cleanup?.();
  }
  static {
    this.\u0275fac = function CompanyListBase_Factory(t) {
      return new (t || _CompanyListBase)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventbusService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _CompanyListBase, hostBindings: function CompanyListBase_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CompanyListBase_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    } });
  }
};

export {
  CompanyListBase
};
//# sourceMappingURL=chunk-NEEP2B3Y.js.map
