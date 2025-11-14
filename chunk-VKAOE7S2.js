import {
  ɵɵdefinePipe
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/pipes/subscription-duration.pipe.ts
var subscriptionDurations = [
  {
    name: "month",
    value: 1
  },
  {
    name: "2 months",
    value: 2
  },
  {
    name: "3 months",
    value: 3
  },
  {
    name: "6 months",
    value: 6
  },
  {
    name: "1 year",
    value: 12
  }
];
var SubscriptionDurationPipe = class _SubscriptionDurationPipe {
  /**
   * Given a subscription duration value (e.g. 1, 2, 3, 6, 12), returns the
   * corresponding string name (e.g. "month", "2 months", "3 months", etc.)
   * @param value The value of the subscription duration
   * @returns The string name of the subscription duration
   */
  transform(value) {
    return subscriptionDurations.find((s) => s.value === value)?.name || "";
  }
  static {
    this.\u0275fac = function SubscriptionDurationPipe_Factory(t) {
      return new (t || _SubscriptionDurationPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "subscriptionDuration", type: _SubscriptionDurationPipe, pure: true, standalone: true });
  }
};

export {
  subscriptionDurations,
  SubscriptionDurationPipe
};
//# sourceMappingURL=chunk-VKAOE7S2.js.map
