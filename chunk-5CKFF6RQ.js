import {
  MetricsBase
} from "./chunk-2IL4YUES.js";
import {
  AuthService
} from "./chunk-D77A7TO4.js";
import {
  DataService
} from "./chunk-IOIIXNZS.js";
import {
  AdminBreadcrumbComponent
} from "./chunk-O454IXIK.js";
import {
  AdminPageContentComponent
} from "./chunk-LWX77LXW.js";
import {
  MainBarTitleService
} from "./chunk-XVGWAIMT.js";
import "./chunk-LARJQE5I.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-H6XV6YF3.js";
import "./chunk-D3TBKTNA.js";
import "./chunk-DEKWU2RH.js";
import "./chunk-H7TI67RE.js";
import "./chunk-GVZ7XU6B.js";
import {
  AppNameService,
  EagleInfoClientError,
  FrontendLogger
} from "./chunk-MC4HAW4O.js";
import "./chunk-SOKXHU4M.js";
import {
  Meta,
  Subject,
  Title,
  init_esm,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4EXDEK5V.js";
import "./chunk-GEHWEZZY.js";

// projects/admin-panel/src/app/components/pane/droplet-metrics/web-droplet/web-droplet.component.ts
init_esm();

// projects/admin-panel/src/app/services/web-metrics.service.ts
var WebMetricsService = class _WebMetricsService extends MetricsBase {
  constructor(authService, dataService) {
    super(authService, dataService);
    this.authService = authService;
    this.dataService = dataService;
  }
  ngOnDestroy() {
    this.disconnect();
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.\u0275fac = function WebMetricsService_Factory(t) {
      return new (t || _WebMetricsService)(\u0275\u0275inject(AuthService), \u0275\u0275inject(DataService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WebMetricsService, factory: _WebMetricsService.\u0275fac, providedIn: "root" });
  }
};

// projects/admin-panel/src/app/components/pane/droplet-metrics/web-droplet/web-droplet.component.ts
var _c0 = () => ({ name: "Dashboard", icon: "space_dashboard", link: "/" });
var _c1 = () => ({ name: "Web Droplet Metrics", icon: "public" });
var _c2 = (a0, a1) => [a0, a1];
var WebDropletComponent = class _WebDropletComponent {
  constructor(authService, webMetricsService, metaTagService, titleService, apNme, mainBarTitle) {
    this.authService = authService;
    this.webMetricsService = webMetricsService;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.apNme = apNme;
    this.mainBarTitle = mainBarTitle;
    this.destroy$ = new Subject();
    this.isLoading = true;
    this.lastUpdated = null;
    this.chartsReady = false;
    this.systemMetrics$ = this.webMetricsService.systemMetrics$;
    this.socketErrors$ = this.webMetricsService.socketError$;
  }
  ngOnInit() {
    this.mainBarTitle.title = "Web Droplet - Droplet Metrics";
    this.titleService.setTitle(this.mainBarTitle.title + " - " + this.apNme.name);
    this.metaTagService.updateTag({
      name: "description",
      content: "Monitor and analyze system metrics including CPU, memory, network, and load averages."
    });
    if (!this.authService.webMetricsServer) {
      throw new EagleInfoClientError("No web metrics server found");
    }
    this.subscribeToMetrics();
    this.webMetricsService.connect(this.authService.webMetricsServer);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeCharts();
      this.chartsReady = true;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.cpuChart) {
      this.cpuChart.destroy();
    }
    if (this.memoryChart) {
      this.memoryChart.destroy();
    }
    if (this.networkChart) {
      this.networkChart.destroy();
    }
    if (this.loadChart) {
      this.loadChart.destroy();
    }
  }
  subscribeToMetrics() {
    this.systemMetrics$.pipe(takeUntil(this.destroy$)).subscribe((metrics) => {
      if (metrics?.node) {
        this.lastUpdated = /* @__PURE__ */ new Date();
        this.updateCharts(metrics.node);
        this.isLoading = false;
      }
    });
    this.socketErrors$.pipe(takeUntil(this.destroy$)).subscribe((error) => {
      FrontendLogger.error("WebSocket error:", error);
    });
  }
  initializeCharts() {
    this.initializeCpuChart();
    this.initializeMemoryChart();
    this.initializeNetworkChart();
    this.initializeLoadChart();
  }
  initializeCpuChart() {
    const options = {
      series: [0],
      chart: {
        height: 350,
        type: "radialBar",
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: void 0,
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: void 0,
              formatter: function(val) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      },
      labels: ["CPU Usage"],
      colors: ["#088F8F", "#2196F3", "#FF9800"]
    };
    this.cpuChart = new ApexCharts(document.querySelector("#cpu-chart"), options);
    this.cpuChart?.render();
  }
  updateCharts(metrics) {
    this.updateCpuChart(metrics.cpuUsagePercent);
    this.updateMemoryChart(metrics.memoryUsagePercent, metrics.memoryTotalBytes);
    this.updateNetworkChart(metrics.networkBytesReceivedPerSecond, metrics.networkBytesTransmittedPerSecond);
    this.updateLoadChart(metrics.loadAverage1m, metrics.loadAverage5m, metrics.loadAverage15m);
  }
  updateCpuChart(usage) {
    FrontendLogger.debug("Updating CPU chart with usage:", usage);
    this.cpuChart?.updateSeries([usage ? Number(usage.toFixed(2)) : 0]);
  }
  initializeMemoryChart() {
    const options = {
      series: [0],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            margin: 0,
            size: "70%"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#333",
              fontSize: "13px"
            },
            value: {
              color: "#111",
              fontSize: "30px",
              show: true,
              formatter: function(val) {
                return val + "%";
              }
            }
          },
          track: {
            background: "#e0e0e0",
            strokeWidth: "97%",
            margin: 5
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Memory Usage"],
      colors: ["#0F52BA", "#2196F3", "#FF9800"]
    };
    this.memoryChart = new ApexCharts(document.querySelector("#memory-chart"), options);
    this.memoryChart?.render();
  }
  updateMemoryChart(usage, totalBytes) {
    const usedGB = totalBytes ? (totalBytes * (usage / 100) / 1024 ** 3).toFixed(2) : 0;
    const totalGB = totalBytes ? (totalBytes / 1024 ** 3).toFixed(2) : 0;
    this.memoryChart?.updateOptions({
      plotOptions: {
        radialBar: {
          dataLabels: {
            value: {
              formatter: function() {
                return usedGB + " / " + totalGB + " GB";
              }
            }
          }
        }
      }
    });
    this.memoryChart?.updateSeries([usage || 0]);
  }
  initializeNetworkChart() {
    const options = {
      series: [{
        name: "Received",
        data: [0]
      }, {
        name: "Transmitted",
        data: [0]
      }],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: ["Network"]
      },
      yaxis: {
        title: {
          text: "Bytes/s"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " bytes/s";
          }
        }
      },
      colors: ["#4CAF50", "#2196F3", "#FF9800"]
    };
    this.networkChart = new ApexCharts(document.querySelector("#network-chart"), options);
    this.networkChart?.render();
  }
  updateNetworkChart(received, transmitted) {
    this.networkChart?.updateSeries([{
      name: "Received",
      data: [received || 0]
    }, {
      name: "Transmitted",
      data: [transmitted || 0]
    }]);
  }
  initializeLoadChart() {
    const options = {
      series: [{
        name: "Load Average",
        data: [0, 0, 0]
      }],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ["1 min", "5 min", "15 min"],
        title: {
          text: "Load Average"
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val;
          }
        }
      },
      colors: ["#87CEEB", "#008080", "#FF9800"]
    };
    this.loadChart = new ApexCharts(document.querySelector("#load-chart"), options);
    this.loadChart?.render();
  }
  updateLoadChart(load1m, load5m, load15m) {
    this.loadChart?.updateSeries([{
      data: [
        load1m || 0,
        load5m || 0,
        load15m || 0
      ]
    }]);
  }
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  static {
    this.\u0275fac = function WebDropletComponent_Factory(t) {
      return new (t || _WebDropletComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(WebMetricsService), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(AppNameService), \u0275\u0275directiveInject(MainBarTitleService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebDropletComponent, selectors: [["app-web-droplet"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 7, consts: [[1, "grid", "grid-cols-1", "pb-6"], [1, "md:flex", "items-center", "justify-between", "px-[2px]"], [1, "text-[18px]", "font-medium", "mb-sm-0", "grow", "mb-2", "md:mb-0"], [3, "breadCrumbs"], [1, "grid", "grid-cols-1", "gap-6", "gap-y-0", "2xl:gap-6", "lg:grid-cols-12"], [1, "col-span-12", "2xl:col-span-8"], [1, "card", "!border", "!border-default-white-shaderounded-xl", "border", "!border-default-white-shade"], [1, "card-body"], [1, "card-title", "mb-4"], ["id", "cpu-chart", 1, "!text-default-dark"], [1, "col-span-12", "2xl:col-span-4"], [1, "card", "!border", "!border-default-white-shaderounded-xl", "m-h-full", "border", "!border-default-white-shade"], ["id", "memory-chart"], ["id", "network-chart"], ["id", "load-chart"]], template: function WebDropletComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-admin-page-content")(1, "div", 0)(2, "div", 1)(3, "h4", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "app-admin-breadcrumb", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "h4", 8);
        \u0275\u0275text(11, "CPU Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "div", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "div", 7)(16, "h4", 8);
        \u0275\u0275text(17, "Memory Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "div", 12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(19, "div", 4)(20, "div", 5)(21, "div", 6)(22, "div", 7)(23, "h4", 8);
        \u0275\u0275text(24, "Network I/O");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 10)(27, "div", 6)(28, "div", 7)(29, "h4", 8);
        \u0275\u0275text(30, "Load Averages");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "div", 14);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.mainBarTitle.title, " ");
        \u0275\u0275advance();
        \u0275\u0275property("breadCrumbs", \u0275\u0275pureFunction2(4, _c2, \u0275\u0275pureFunction0(2, _c0), \u0275\u0275pureFunction0(3, _c1)));
      }
    }, dependencies: [
      FormsModule,
      ReactiveFormsModule,
      AdminPageContentComponent,
      AdminBreadcrumbComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebDropletComponent, { className: "WebDropletComponent" });
})();
export {
  WebDropletComponent
};
//# sourceMappingURL=chunk-5CKFF6RQ.js.map
