import {
  EagleInfoClientError,
  FrontendLogger,
  navByBus,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/defines/composition/view-one.ts
var ViewOneCompose = class {
  constructor(staticCaller, updateNavProps, router, route, eventbus) {
    this.staticCaller = staticCaller;
    this.updateNavProps = updateNavProps;
    this.router = router;
    this.route = route;
    this.eventbus = eventbus;
    this.navigateByBus = navByBus(this.eventbus, this.router).navigateByBus;
    this.id = this.route.snapshot?.params["id"];
    if (!this.updateNavProps?.eventName) {
      FrontendLogger.warn("must provide eventName");
    }
  }
  init() {
    return __async(this, null, function* () {
      const handlers = {
        oneItem: (data) => {
          if (data._id) {
            this.oneItem = data;
          }
          this.eventbus.generalEvent$.next({ type: "clear", data: true });
        }
      };
      const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
      this.cleanup = cleanup;
      this.id = this.route.snapshot?.params["id"];
      FrontendLogger.debug("_ID IS", this.id);
      if (!this.oneItem) {
        yield this.getOne();
      }
    });
  }
  getOne() {
    return __async(this, null, function* () {
      try {
        const one = yield this.staticCaller.getOne(this.id);
        this.oneItem = one;
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  update() {
    if (!this.updateNavProps?.route || !this.updateNavProps?.eventName) {
      throw new EagleInfoClientError("invalid update nav props");
    }
    this.navigateByBus(this.updateNavProps?.route, this.updateNavProps?.eventName, this.oneItem);
  }
  delete() {
    return __async(this, null, function* () {
      try {
        yield this.oneItem?.remove?.();
      } catch (error) {
        FrontendLogger.error(error);
      }
    });
  }
  printDocument() {
    window.print();
  }
  destroy() {
    this.cleanup?.();
  }
};

export {
  ViewOneCompose
};
//# sourceMappingURL=chunk-BMZBVPCI.js.map
