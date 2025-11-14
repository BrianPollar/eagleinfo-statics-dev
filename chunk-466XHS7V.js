import {
  WindowService
} from "./chunk-LARJQE5I.js";
import {
  WebStorageService
} from "./chunk-GVZ7XU6B.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4EXDEK5V.js";

// projects/shared-lib/src/lib/services/theme.service.ts
var ThemeService = class _ThemeService {
  constructor(storage, windowService) {
    this.storage = storage;
    this.windowService = windowService;
    this.themeMode = "system";
    this.currentIcon = "computer";
    this.toggle = false;
  }
  toggleTheme(themeMode, currentIcon) {
    this.themeMode = themeMode;
    this.storage.set("theme", themeMode);
    this.currentIcon = currentIcon;
    switch (themeMode) {
      case "dark":
        this.setTheme(true);
        break;
      case "light":
        this.setTheme(false);
        break;
      case "system": {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
        this.setTheme(prefersDark.matches);
        break;
      }
    }
  }
  setTheme(isDark) {
    if (isDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }
  initTheme() {
    let theme = this.storage.get("theme");
    console.log("store theme,", theme);
    let currentIcon;
    switch (theme) {
      case "dark":
        currentIcon = "dark_mode";
        break;
      case "light":
        currentIcon = "light_mode";
        break;
      default: {
        currentIcon = "computer";
        theme = "system";
        break;
      }
    }
    this.toggleTheme(theme, currentIcon);
    this.watchMedia();
  }
  watchMedia() {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches }) => {
      if (this.themeMode === "system") {
        this.setTheme(matches);
      }
    });
  }
  loadApp() {
    if (this.windowService.getWindow()) {
      this.prefersDark = this.windowService.getWindow()?.matchMedia("(prefers-color-scheme: dark)");
      this.prefersDark.addListener((e) => this.checkToggle(e.matches));
      this.checkToggle(this.prefersDark.matches);
    }
  }
  checkToggle(val) {
    this.toggle = val;
    if (this.windowService.getWindow()) {
      this.windowService.doc.body.classList.toggle("dark", val);
    }
  }
  static {
    this.\u0275fac = function ThemeService_Factory(t) {
      return new (t || _ThemeService)(\u0275\u0275inject(WebStorageService), \u0275\u0275inject(WindowService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};

export {
  ThemeService
};
//# sourceMappingURL=chunk-466XHS7V.js.map
