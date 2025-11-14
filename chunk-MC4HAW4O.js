import {
  BehaviorSubject,
  Subject,
  catchError,
  distinctUntilChanged,
  filter,
  firstValueFrom,
  init_esm,
  lastValueFrom,
  map,
  of,
  retry,
  switchMap,
  take,
  takeUntil,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-4EXDEK5V.js";
import {
  __async,
  __asyncGenerator,
  __await,
  __commonJS,
  __forAwait,
  __spreadProps,
  __spreadValues,
  __toESM,
  __yieldStar
} from "./chunk-GEHWEZZY.js";

// ../../biz-nest/node_modules/loglevel/lib/loglevel.js
var require_loglevel = __commonJS({
  "../../biz-nest/node_modules/loglevel/lib/loglevel.js"(exports, module) {
    (function(root, definition) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define(definition);
      } else if (typeof module === "object" && module.exports) {
        module.exports = definition();
      } else {
        root.log = definition();
      }
    })(exports, function() {
      "use strict";
      var noop = function() {
      };
      var undefinedType = "undefined";
      var isIE = typeof window !== undefinedType && typeof window.navigator !== undefinedType && /Trident\/|MSIE /.test(window.navigator.userAgent);
      var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
      ];
      var _loggersByName = {};
      var defaultLogger = null;
      function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === "function") {
          return method.bind(obj);
        } else {
          try {
            return Function.prototype.bind.call(method, obj);
          } catch (e) {
            return function() {
              return Function.prototype.apply.apply(method, [obj, arguments]);
            };
          }
        }
      }
      function traceForIE() {
        if (console.log) {
          if (console.log.apply) {
            console.log.apply(console, arguments);
          } else {
            Function.prototype.apply.apply(console.log, [console, arguments]);
          }
        }
        if (console.trace)
          console.trace();
      }
      function realMethod(methodName) {
        if (methodName === "debug") {
          methodName = "log";
        }
        if (typeof console === undefinedType) {
          return false;
        } else if (methodName === "trace" && isIE) {
          return traceForIE;
        } else if (console[methodName] !== void 0) {
          return bindMethod(console, methodName);
        } else if (console.log !== void 0) {
          return bindMethod(console, "log");
        } else {
          return noop;
        }
      }
      function replaceLoggingMethods() {
        var level = this.getLevel();
        for (var i = 0; i < logMethods.length; i++) {
          var methodName = logMethods[i];
          this[methodName] = i < level ? noop : this.methodFactory(methodName, level, this.name);
        }
        this.log = this.debug;
        if (typeof console === undefinedType && level < this.levels.SILENT) {
          return "No console available for logging";
        }
      }
      function enableLoggingWhenConsoleArrives(methodName) {
        return function() {
          if (typeof console !== undefinedType) {
            replaceLoggingMethods.call(this);
            this[methodName].apply(this, arguments);
          }
        };
      }
      function defaultMethodFactory(methodName, _level, _loggerName) {
        return realMethod(methodName) || enableLoggingWhenConsoleArrives.apply(this, arguments);
      }
      function Logger(name, factory) {
        var self2 = this;
        var inheritedLevel;
        var defaultLevel;
        var userLevel;
        var storageKey = "loglevel";
        if (typeof name === "string") {
          storageKey += ":" + name;
        } else if (typeof name === "symbol") {
          storageKey = void 0;
        }
        function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || "silent").toUpperCase();
          if (typeof window === undefinedType || !storageKey)
            return;
          try {
            window.localStorage[storageKey] = levelName;
            return;
          } catch (ignore) {
          }
          try {
            window.document.cookie = encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {
          }
        }
        function getPersistedLevel() {
          var storedLevel;
          if (typeof window === undefinedType || !storageKey)
            return;
          try {
            storedLevel = window.localStorage[storageKey];
          } catch (ignore) {
          }
          if (typeof storedLevel === undefinedType) {
            try {
              var cookie = window.document.cookie;
              var cookieName = encodeURIComponent(storageKey);
              var location = cookie.indexOf(cookieName + "=");
              if (location !== -1) {
                storedLevel = /^([^;]+)/.exec(
                  cookie.slice(location + cookieName.length + 1)
                )[1];
              }
            } catch (ignore) {
            }
          }
          if (self2.levels[storedLevel] === void 0) {
            storedLevel = void 0;
          }
          return storedLevel;
        }
        function clearPersistedLevel() {
          if (typeof window === undefinedType || !storageKey)
            return;
          try {
            window.localStorage.removeItem(storageKey);
          } catch (ignore) {
          }
          try {
            window.document.cookie = encodeURIComponent(storageKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch (ignore) {
          }
        }
        function normalizeLevel(input) {
          var level = input;
          if (typeof level === "string" && self2.levels[level.toUpperCase()] !== void 0) {
            level = self2.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self2.levels.SILENT) {
            return level;
          } else {
            throw new TypeError("log.setLevel() called with invalid level: " + input);
          }
        }
        self2.name = name;
        self2.levels = {
          "TRACE": 0,
          "DEBUG": 1,
          "INFO": 2,
          "WARN": 3,
          "ERROR": 4,
          "SILENT": 5
        };
        self2.methodFactory = factory || defaultMethodFactory;
        self2.getLevel = function() {
          if (userLevel != null) {
            return userLevel;
          } else if (defaultLevel != null) {
            return defaultLevel;
          } else {
            return inheritedLevel;
          }
        };
        self2.setLevel = function(level, persist) {
          userLevel = normalizeLevel(level);
          if (persist !== false) {
            persistLevelIfPossible(userLevel);
          }
          return replaceLoggingMethods.call(self2);
        };
        self2.setDefaultLevel = function(level) {
          defaultLevel = normalizeLevel(level);
          if (!getPersistedLevel()) {
            self2.setLevel(level, false);
          }
        };
        self2.resetLevel = function() {
          userLevel = null;
          clearPersistedLevel();
          replaceLoggingMethods.call(self2);
        };
        self2.enableAll = function(persist) {
          self2.setLevel(self2.levels.TRACE, persist);
        };
        self2.disableAll = function(persist) {
          self2.setLevel(self2.levels.SILENT, persist);
        };
        self2.rebuild = function() {
          if (defaultLogger !== self2) {
            inheritedLevel = normalizeLevel(defaultLogger.getLevel());
          }
          replaceLoggingMethods.call(self2);
          if (defaultLogger === self2) {
            for (var childName in _loggersByName) {
              _loggersByName[childName].rebuild();
            }
          }
        };
        inheritedLevel = normalizeLevel(
          defaultLogger ? defaultLogger.getLevel() : "WARN"
        );
        var initialLevel = getPersistedLevel();
        if (initialLevel != null) {
          userLevel = normalizeLevel(initialLevel);
        }
        replaceLoggingMethods.call(self2);
      }
      defaultLogger = new Logger();
      defaultLogger.getLogger = function getLogger(name) {
        if (typeof name !== "symbol" && typeof name !== "string" || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }
        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name,
            defaultLogger.methodFactory
          );
        }
        return logger;
      };
      var _log = typeof window !== undefinedType ? window.log : void 0;
      defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType && window.log === defaultLogger) {
          window.log = _log;
        }
        return defaultLogger;
      };
      defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
      };
      defaultLogger["default"] = defaultLogger;
      return defaultLogger;
    });
  }
});

// ../../biz-nest/node_modules/axios-observable/dist/axios-observable.interface.js
var require_axios_observable_interface = __commonJS({
  "../../biz-nest/node_modules/axios-observable/dist/axios-observable.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../biz-nest/node_modules/axios/dist/browser/axios.cjs
var require_axios = __commonJS({
  "../../biz-nest/node_modules/axios/dist/browser/axios.cjs"(exports, module) {
    "use strict";
    function bind(fn, thisArg) {
      return function wrap() {
        return fn.apply(thisArg, arguments);
      };
    }
    var { toString } = Object.prototype;
    var { getPrototypeOf } = Object;
    var { iterator, toStringTag } = Symbol;
    var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
      const str = toString.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(/* @__PURE__ */ Object.create(null));
    var kindOfTest = (type) => {
      type = type.toLowerCase();
      return (thing) => kindOf(thing) === type;
    };
    var typeOfTest = (type) => (thing) => typeof thing === type;
    var { isArray } = Array;
    var isUndefined = typeOfTest("undefined");
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
    }
    var isArrayBuffer = kindOfTest("ArrayBuffer");
    function isArrayBufferView(val) {
      let result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
      }
      return result;
    }
    var isString = typeOfTest("string");
    var isFunction$1 = typeOfTest("function");
    var isNumber = typeOfTest("number");
    var isObject = (thing) => thing !== null && typeof thing === "object";
    var isBoolean = (thing) => thing === true || thing === false;
    var isPlainObject = (val) => {
      if (kindOf(val) !== "object") {
        return false;
      }
      const prototype2 = getPrototypeOf(val);
      return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(toStringTag in val) && !(iterator in val);
    };
    var isEmptyObject = (val) => {
      if (!isObject(val) || isBuffer(val)) {
        return false;
      }
      try {
        return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
      } catch (e) {
        return false;
      }
    };
    var isDate = kindOfTest("Date");
    var isFile = kindOfTest("File");
    var isBlob = kindOfTest("Blob");
    var isFileList = kindOfTest("FileList");
    var isStream = (val) => isObject(val) && isFunction$1(val.pipe);
    var isFormData = (thing) => {
      let kind;
      return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
      kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]"));
    };
    var isURLSearchParams = kindOfTest("URLSearchParams");
    var [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
    var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    function forEach(obj, fn, { allOwnKeys = false } = {}) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      let i;
      let l;
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        if (isBuffer(obj)) {
          return;
        }
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for (i = 0; i < len; i++) {
          key = keys[i];
          fn.call(null, obj[key], key, obj);
        }
      }
    }
    function findKey(obj, key) {
      if (isBuffer(obj)) {
        return null;
      }
      key = key.toLowerCase();
      const keys = Object.keys(obj);
      let i = keys.length;
      let _key;
      while (i-- > 0) {
        _key = keys[i];
        if (key === _key.toLowerCase()) {
          return _key;
        }
      }
      return null;
    }
    var _global = (() => {
      if (typeof globalThis !== "undefined")
        return globalThis;
      return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
    })();
    var isContextDefined = (context) => !isUndefined(context) && context !== _global;
    function merge() {
      const { caseless, skipUndefined } = isContextDefined(this) && this || {};
      const result = {};
      const assignValue = (val, key) => {
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
          result[targetKey] = merge(result[targetKey], val);
        } else if (isPlainObject(val)) {
          result[targetKey] = merge({}, val);
        } else if (isArray(val)) {
          result[targetKey] = val.slice();
        } else if (!skipUndefined || !isUndefined(val)) {
          result[targetKey] = val;
        }
      };
      for (let i = 0, l = arguments.length; i < l; i++) {
        arguments[i] && forEach(arguments[i], assignValue);
      }
      return result;
    }
    var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
      forEach(b, (val, key) => {
        if (thisArg && isFunction$1(val)) {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      }, { allOwnKeys });
      return a;
    };
    var stripBOM = (content) => {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    };
    var inherits = (constructor, superConstructor, props, descriptors2) => {
      constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
      constructor.prototype.constructor = constructor;
      Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
      });
      props && Object.assign(constructor.prototype, props);
    };
    var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
      let props;
      let i;
      let prop;
      const merged = {};
      destObj = destObj || {};
      if (sourceObj == null)
        return destObj;
      do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while (i-- > 0) {
          prop = props[i];
          if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
            destObj[prop] = sourceObj[prop];
            merged[prop] = true;
          }
        }
        sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
      } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
      return destObj;
    };
    var endsWith = (str, searchString, position) => {
      str = String(str);
      if (position === void 0 || position > str.length) {
        position = str.length;
      }
      position -= searchString.length;
      const lastIndex = str.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    };
    var toArray = (thing) => {
      if (!thing)
        return null;
      if (isArray(thing))
        return thing;
      let i = thing.length;
      if (!isNumber(i))
        return null;
      const arr = new Array(i);
      while (i-- > 0) {
        arr[i] = thing[i];
      }
      return arr;
    };
    var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
      return (thing) => {
        return TypedArray && thing instanceof TypedArray;
      };
    })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
    var forEachEntry = (obj, fn) => {
      const generator = obj && obj[iterator];
      const _iterator = generator.call(obj);
      let result;
      while ((result = _iterator.next()) && !result.done) {
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
      }
    };
    var matchAll = (regExp, str) => {
      let matches;
      const arr = [];
      while ((matches = regExp.exec(str)) !== null) {
        arr.push(matches);
      }
      return arr;
    };
    var isHTMLForm = kindOfTest("HTMLFormElement");
    var toCamelCase = (str) => {
      return str.toLowerCase().replace(
        /[-_\s]([a-z\d])(\w*)/g,
        function replacer(m, p1, p2) {
          return p1.toUpperCase() + p2;
        }
      );
    };
    var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
    var isRegExp = kindOfTest("RegExp");
    var reduceDescriptors = (obj, reducer) => {
      const descriptors2 = Object.getOwnPropertyDescriptors(obj);
      const reducedDescriptors = {};
      forEach(descriptors2, (descriptor, name) => {
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) {
          reducedDescriptors[name] = ret || descriptor;
        }
      });
      Object.defineProperties(obj, reducedDescriptors);
    };
    var freezeMethods = (obj) => {
      reduceDescriptors(obj, (descriptor, name) => {
        if (isFunction$1(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
          return false;
        }
        const value = obj[name];
        if (!isFunction$1(value))
          return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
          descriptor.writable = false;
          return;
        }
        if (!descriptor.set) {
          descriptor.set = () => {
            throw Error("Can not rewrite read-only method '" + name + "'");
          };
        }
      });
    };
    var toObjectSet = (arrayOrString, delimiter) => {
      const obj = {};
      const define2 = (arr) => {
        arr.forEach((value) => {
          obj[value] = true;
        });
      };
      isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
      return obj;
    };
    var noop = () => {
    };
    var toFiniteNumber = (value, defaultValue) => {
      return value != null && Number.isFinite(value = +value) ? value : defaultValue;
    };
    function isSpecCompliantForm(thing) {
      return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
    }
    var toJSONObject = (obj) => {
      const stack = new Array(10);
      const visit = (source, i) => {
        if (isObject(source)) {
          if (stack.indexOf(source) >= 0) {
            return;
          }
          if (isBuffer(source)) {
            return source;
          }
          if (!("toJSON" in source)) {
            stack[i] = source;
            const target = isArray(source) ? [] : {};
            forEach(source, (value, key) => {
              const reducedValue = visit(value, i + 1);
              !isUndefined(reducedValue) && (target[key] = reducedValue);
            });
            stack[i] = void 0;
            return target;
          }
        }
        return source;
      };
      return visit(obj, 0);
    };
    var isAsyncFn = kindOfTest("AsyncFunction");
    var isThenable = (thing) => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
    var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
      if (setImmediateSupported) {
        return setImmediate;
      }
      return postMessageSupported ? ((token, callbacks) => {
        _global.addEventListener("message", ({ source, data }) => {
          if (source === _global && data === token) {
            callbacks.length && callbacks.shift()();
          }
        }, false);
        return (cb) => {
          callbacks.push(cb);
          _global.postMessage(token, "*");
        };
      })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
    })(
      typeof setImmediate === "function",
      isFunction$1(_global.postMessage)
    );
    var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
    var isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);
    var utils$1 = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isBoolean,
      isObject,
      isPlainObject,
      isEmptyObject,
      isReadableStream,
      isRequest,
      isResponse,
      isHeaders,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isRegExp,
      isFunction: isFunction$1,
      isStream,
      isURLSearchParams,
      isTypedArray,
      isFileList,
      forEach,
      merge,
      extend,
      trim,
      stripBOM,
      inherits,
      toFlatObject,
      kindOf,
      kindOfTest,
      endsWith,
      toArray,
      forEachEntry,
      matchAll,
      isHTMLForm,
      hasOwnProperty,
      hasOwnProp: hasOwnProperty,
      // an alias to avoid ESLint no-prototype-builtins detection
      reduceDescriptors,
      freezeMethods,
      toObjectSet,
      toCamelCase,
      noop,
      toFiniteNumber,
      findKey,
      global: _global,
      isContextDefined,
      isSpecCompliantForm,
      toJSONObject,
      isAsyncFn,
      isThenable,
      setImmediate: _setImmediate,
      asap,
      isIterable
    };
    function AxiosError(message, code, config, request, response) {
      Error.call(this);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = new Error().stack;
      }
      this.message = message;
      this.name = "AxiosError";
      code && (this.code = code);
      config && (this.config = config);
      request && (this.request = request);
      if (response) {
        this.response = response;
        this.status = response.status ? response.status : null;
      }
    }
    utils$1.inherits(AxiosError, Error, {
      toJSON: function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: utils$1.toJSONObject(this.config),
          code: this.code,
          status: this.status
        };
      }
    });
    var prototype$1 = AxiosError.prototype;
    var descriptors = {};
    [
      "ERR_BAD_OPTION_VALUE",
      "ERR_BAD_OPTION",
      "ECONNABORTED",
      "ETIMEDOUT",
      "ERR_NETWORK",
      "ERR_FR_TOO_MANY_REDIRECTS",
      "ERR_DEPRECATED",
      "ERR_BAD_RESPONSE",
      "ERR_BAD_REQUEST",
      "ERR_CANCELED",
      "ERR_NOT_SUPPORT",
      "ERR_INVALID_URL"
      // eslint-disable-next-line func-names
    ].forEach((code) => {
      descriptors[code] = { value: code };
    });
    Object.defineProperties(AxiosError, descriptors);
    Object.defineProperty(prototype$1, "isAxiosError", { value: true });
    AxiosError.from = (error, code, config, request, response, customProps) => {
      const axiosError = Object.create(prototype$1);
      utils$1.toFlatObject(error, axiosError, function filter2(obj) {
        return obj !== Error.prototype;
      }, (prop) => {
        return prop !== "isAxiosError";
      });
      const msg = error && error.message ? error.message : "Error";
      const errCode = code == null && error ? error.code : code;
      AxiosError.call(axiosError, msg, errCode, config, request, response);
      if (error && axiosError.cause == null) {
        Object.defineProperty(axiosError, "cause", { value: error, configurable: true });
      }
      axiosError.name = error && error.name || "Error";
      customProps && Object.assign(axiosError, customProps);
      return axiosError;
    };
    var httpAdapter = null;
    function isVisitable(thing) {
      return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
    }
    function removeBrackets(key) {
      return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
    }
    function renderKey(path, key, dots) {
      if (!path)
        return key;
      return path.concat(key).map(function each(token, i) {
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
      }).join(dots ? "." : "");
    }
    function isFlatArray(arr) {
      return utils$1.isArray(arr) && !arr.some(isVisitable);
    }
    var predicates = utils$1.toFlatObject(utils$1, {}, null, function filter2(prop) {
      return /^is[A-Z]/.test(prop);
    });
    function toFormData(obj, formData, options) {
      if (!utils$1.isObject(obj)) {
        throw new TypeError("target must be an object");
      }
      formData = formData || new FormData();
      options = utils$1.toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
      }, false, function defined(option, source) {
        return !utils$1.isUndefined(source[option]);
      });
      const metaTokens = options.metaTokens;
      const visitor = options.visitor || defaultVisitor;
      const dots = options.dots;
      const indexes = options.indexes;
      const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
      const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
      if (!utils$1.isFunction(visitor)) {
        throw new TypeError("visitor must be a function");
      }
      function convertValue(value) {
        if (value === null)
          return "";
        if (utils$1.isDate(value)) {
          return value.toISOString();
        }
        if (utils$1.isBoolean(value)) {
          return value.toString();
        }
        if (!useBlob && utils$1.isBlob(value)) {
          throw new AxiosError("Blob is not supported. Use a Buffer instead.");
        }
        if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
          return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
        }
        return value;
      }
      function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
          if (utils$1.endsWith(key, "{}")) {
            key = metaTokens ? key : key.slice(0, -2);
            value = JSON.stringify(value);
          } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
            key = removeBrackets(key);
            arr.forEach(function each(el, index) {
              !(utils$1.isUndefined(el) || el === null) && formData.append(
                // eslint-disable-next-line no-nested-ternary
                indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
                convertValue(el)
              );
            });
            return false;
          }
        }
        if (isVisitable(value)) {
          return true;
        }
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
      }
      const stack = [];
      const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
      });
      function build(value, path) {
        if (utils$1.isUndefined(value))
          return;
        if (stack.indexOf(value) !== -1) {
          throw Error("Circular reference detected in " + path.join("."));
        }
        stack.push(value);
        utils$1.forEach(value, function each(el, key) {
          const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
            formData,
            el,
            utils$1.isString(key) ? key.trim() : key,
            path,
            exposedHelpers
          );
          if (result === true) {
            build(el, path ? path.concat(key) : [key]);
          }
        });
        stack.pop();
      }
      if (!utils$1.isObject(obj)) {
        throw new TypeError("data must be an object");
      }
      build(obj);
      return formData;
    }
    function encode$1(str) {
      const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
      };
      return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
      });
    }
    function AxiosURLSearchParams(params, options) {
      this._pairs = [];
      params && toFormData(params, this, options);
    }
    var prototype = AxiosURLSearchParams.prototype;
    prototype.append = function append(name, value) {
      this._pairs.push([name, value]);
    };
    prototype.toString = function toString2(encoder) {
      const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode$1);
      } : encode$1;
      return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
      }, "").join("&");
    };
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
    }
    function buildURL(url, params, options) {
      if (!params) {
        return url;
      }
      const _encode = options && options.encode || encode;
      if (utils$1.isFunction(options)) {
        options = {
          serialize: options
        };
      }
      const serializeFn = options && options.serialize;
      let serializedParams;
      if (serializeFn) {
        serializedParams = serializeFn(params, options);
      } else {
        serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
      }
      if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    }
    var InterceptorManager = class {
      constructor() {
        this.handlers = [];
      }
      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */
      use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      }
      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       *
       * @returns {void}
       */
      eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      }
      /**
       * Clear all interceptors from the stack
       *
       * @returns {void}
       */
      clear() {
        if (this.handlers) {
          this.handlers = [];
        }
      }
      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       *
       * @returns {void}
       */
      forEach(fn) {
        utils$1.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      }
    };
    var InterceptorManager$1 = InterceptorManager;
    var transitionalDefaults = {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    };
    var URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
    var FormData$1 = typeof FormData !== "undefined" ? FormData : null;
    var Blob$1 = typeof Blob !== "undefined" ? Blob : null;
    var platform$1 = {
      isBrowser: true,
      classes: {
        URLSearchParams: URLSearchParams$1,
        FormData: FormData$1,
        Blob: Blob$1
      },
      protocols: ["http", "https", "file", "blob", "url", "data"]
    };
    var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
    var _navigator = typeof navigator === "object" && navigator || void 0;
    var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
    var hasStandardBrowserWebWorkerEnv = (() => {
      return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
      self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
    })();
    var origin = hasBrowserEnv && window.location.href || "http://localhost";
    var utils = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      hasBrowserEnv,
      hasStandardBrowserWebWorkerEnv,
      hasStandardBrowserEnv,
      navigator: _navigator,
      origin
    });
    var platform = __spreadValues(__spreadValues({}, utils), platform$1);
    function toURLEncodedForm(data, options) {
      return toFormData(data, new platform.classes.URLSearchParams(), __spreadValues({
        visitor: function(value, key, path, helpers) {
          if (platform.isNode && utils$1.isBuffer(value)) {
            this.append(key, value.toString("base64"));
            return false;
          }
          return helpers.defaultVisitor.apply(this, arguments);
        }
      }, options));
    }
    function parsePropPath(name) {
      return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
        return match[0] === "[]" ? "" : match[1] || match[0];
      });
    }
    function arrayToObject(arr) {
      const obj = {};
      const keys = Object.keys(arr);
      let i;
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        obj[key] = arr[key];
      }
      return obj;
    }
    function formDataToJSON(formData) {
      function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === "__proto__")
          return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && utils$1.isArray(target) ? target.length : name;
        if (isLast) {
          if (utils$1.hasOwnProp(target, name)) {
            target[name] = [target[name], value];
          } else {
            target[name] = value;
          }
          return !isNumericKey;
        }
        if (!target[name] || !utils$1.isObject(target[name])) {
          target[name] = [];
        }
        const result = buildPath(path, value, target[name], index);
        if (result && utils$1.isArray(target[name])) {
          target[name] = arrayToObject(target[name]);
        }
        return !isNumericKey;
      }
      if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
        const obj = {};
        utils$1.forEachEntry(formData, (name, value) => {
          buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
      }
      return null;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils$1.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils$1.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: transitionalDefaults,
      adapter: ["xhr", "http", "fetch"],
      transformRequest: [function transformRequest(data, headers) {
        const contentType = headers.getContentType() || "";
        const hasJSONContentType = contentType.indexOf("application/json") > -1;
        const isObjectPayload = utils$1.isObject(data);
        if (isObjectPayload && utils$1.isHTMLForm(data)) {
          data = new FormData(data);
        }
        const isFormData2 = utils$1.isFormData(data);
        if (isFormData2) {
          return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
        }
        if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
          return data;
        }
        if (utils$1.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils$1.isURLSearchParams(data)) {
          headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
          return data.toString();
        }
        let isFileList2;
        if (isObjectPayload) {
          if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
            return toURLEncodedForm(data, this.formSerializer).toString();
          }
          if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
            const _FormData = this.env && this.env.FormData;
            return toFormData(
              isFileList2 ? { "files[]": data } : data,
              _FormData && new _FormData(),
              this.formSerializer
            );
          }
        }
        if (isObjectPayload || hasJSONContentType) {
          headers.setContentType("application/json", false);
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        const transitional = this.transitional || defaults.transitional;
        const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        const JSONRequested = this.responseType === "json";
        if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
          return data;
        }
        if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
          const silentJSONParsing = transitional && transitional.silentJSONParsing;
          const strictJSONParsing = !silentJSONParsing && JSONRequested;
          try {
            return JSON.parse(data, this.parseReviver);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
              }
              throw e;
            }
          }
        }
        return data;
      }],
      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: platform.classes.FormData,
        Blob: platform.classes.Blob
      },
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },
      headers: {
        common: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": void 0
        }
      }
    };
    utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
      defaults.headers[method] = {};
    });
    var defaults$1 = defaults;
    var ignoreDuplicateOf = utils$1.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ]);
    var parseHeaders = (rawHeaders) => {
      const parsed = {};
      let key;
      let val;
      let i;
      rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) {
          return;
        }
        if (key === "set-cookie") {
          if (parsed[key]) {
            parsed[key].push(val);
          } else {
            parsed[key] = [val];
          }
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
      });
      return parsed;
    };
    var $internals = Symbol("internals");
    function normalizeHeader(header) {
      return header && String(header).trim().toLowerCase();
    }
    function normalizeValue(value) {
      if (value === false || value == null) {
        return value;
      }
      return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
    }
    function parseTokens(str) {
      const tokens = /* @__PURE__ */ Object.create(null);
      const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
      let match;
      while (match = tokensRE.exec(str)) {
        tokens[match[1]] = match[2];
      }
      return tokens;
    }
    var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
    function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
      if (utils$1.isFunction(filter2)) {
        return filter2.call(this, value, header);
      }
      if (isHeaderNameFilter) {
        value = header;
      }
      if (!utils$1.isString(value))
        return;
      if (utils$1.isString(filter2)) {
        return value.indexOf(filter2) !== -1;
      }
      if (utils$1.isRegExp(filter2)) {
        return filter2.test(value);
      }
    }
    function formatHeader(header) {
      return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
        return char.toUpperCase() + str;
      });
    }
    function buildAccessors(obj, header) {
      const accessorName = utils$1.toCamelCase(" " + header);
      ["get", "set", "has"].forEach((methodName) => {
        Object.defineProperty(obj, methodName + accessorName, {
          value: function(arg1, arg2, arg3) {
            return this[methodName].call(this, header, arg1, arg2, arg3);
          },
          configurable: true
        });
      });
    }
    var AxiosHeaders = class {
      constructor(headers) {
        headers && this.set(headers);
      }
      set(header, valueOrRewrite, rewrite) {
        const self2 = this;
        function setHeader(_value, _header, _rewrite) {
          const lHeader = normalizeHeader(_header);
          if (!lHeader) {
            throw new Error("header name must be a non-empty string");
          }
          const key = utils$1.findKey(self2, lHeader);
          if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
            self2[key || _header] = normalizeValue(_value);
          }
        }
        const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
        if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
          setHeaders(header, valueOrRewrite);
        } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
          setHeaders(parseHeaders(header), valueOrRewrite);
        } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
          let obj = {}, dest, key;
          for (const entry of header) {
            if (!utils$1.isArray(entry)) {
              throw TypeError("Object iterator must return a key-value pair");
            }
            obj[key = entry[0]] = (dest = obj[key]) ? utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
          }
          setHeaders(obj, valueOrRewrite);
        } else {
          header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
      }
      get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
          const key = utils$1.findKey(this, header);
          if (key) {
            const value = this[key];
            if (!parser) {
              return value;
            }
            if (parser === true) {
              return parseTokens(value);
            }
            if (utils$1.isFunction(parser)) {
              return parser.call(this, value, key);
            }
            if (utils$1.isRegExp(parser)) {
              return parser.exec(value);
            }
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
          const key = utils$1.findKey(this, header);
          return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
      }
      delete(header, matcher) {
        const self2 = this;
        let deleted = false;
        function deleteHeader(_header) {
          _header = normalizeHeader(_header);
          if (_header) {
            const key = utils$1.findKey(self2, _header);
            if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
              delete self2[key];
              deleted = true;
            }
          }
        }
        if (utils$1.isArray(header)) {
          header.forEach(deleteHeader);
        } else {
          deleteHeader(header);
        }
        return deleted;
      }
      clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while (i--) {
          const key = keys[i];
          if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
            delete this[key];
            deleted = true;
          }
        }
        return deleted;
      }
      normalize(format) {
        const self2 = this;
        const headers = {};
        utils$1.forEach(this, (value, header) => {
          const key = utils$1.findKey(headers, header);
          if (key) {
            self2[key] = normalizeValue(value);
            delete self2[header];
            return;
          }
          const normalized = format ? formatHeader(header) : String(header).trim();
          if (normalized !== header) {
            delete self2[header];
          }
          self2[normalized] = normalizeValue(value);
          headers[normalized] = true;
        });
        return this;
      }
      concat(...targets) {
        return this.constructor.concat(this, ...targets);
      }
      toJSON(asStrings) {
        const obj = /* @__PURE__ */ Object.create(null);
        utils$1.forEach(this, (value, header) => {
          value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
        });
        return obj;
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
      toString() {
        return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
      }
      getSetCookie() {
        return this.get("set-cookie") || [];
      }
      get [Symbol.toStringTag]() {
        return "AxiosHeaders";
      }
      static from(thing) {
        return thing instanceof this ? thing : new this(thing);
      }
      static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target) => computed.set(target));
        return computed;
      }
      static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
          accessors: {}
        };
        const accessors = internals.accessors;
        const prototype2 = this.prototype;
        function defineAccessor(_header) {
          const lHeader = normalizeHeader(_header);
          if (!accessors[lHeader]) {
            buildAccessors(prototype2, _header);
            accessors[lHeader] = true;
          }
        }
        utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
      }
    };
    AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
    utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
      let mapped = key[0].toUpperCase() + key.slice(1);
      return {
        get: () => value,
        set(headerValue) {
          this[mapped] = headerValue;
        }
      };
    });
    utils$1.freezeMethods(AxiosHeaders);
    var AxiosHeaders$1 = AxiosHeaders;
    function transformData(fns, response) {
      const config = this || defaults$1;
      const context = response || config;
      const headers = AxiosHeaders$1.from(context.headers);
      let data = context.data;
      utils$1.forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
      });
      headers.normalize();
      return data;
    }
    function isCancel(value) {
      return !!(value && value.__CANCEL__);
    }
    function CanceledError(message, config, request) {
      AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
      this.name = "CanceledError";
    }
    utils$1.inherits(CanceledError, AxiosError, {
      __CANCEL__: true
    });
    function settle(resolve, reject, response) {
      const validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(new AxiosError(
          "Request failed with status code " + response.status,
          [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
          response.config,
          response.request,
          response
        ));
      }
    }
    function parseProtocol(url) {
      const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
      return match && match[1] || "";
    }
    function speedometer(samplesCount, min) {
      samplesCount = samplesCount || 10;
      const bytes = new Array(samplesCount);
      const timestamps = new Array(samplesCount);
      let head = 0;
      let tail = 0;
      let firstSampleTS;
      min = min !== void 0 ? min : 1e3;
      return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) {
          firstSampleTS = now;
        }
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while (i !== head) {
          bytesCount += bytes[i++];
          i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) {
          tail = (tail + 1) % samplesCount;
        }
        if (now - firstSampleTS < min) {
          return;
        }
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
      };
    }
    function throttle(fn, freq) {
      let timestamp = 0;
      let threshold = 1e3 / freq;
      let lastArgs;
      let timer;
      const invoke = (args, now = Date.now()) => {
        timestamp = now;
        lastArgs = null;
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        fn(...args);
      };
      const throttled = (...args) => {
        const now = Date.now();
        const passed = now - timestamp;
        if (passed >= threshold) {
          invoke(args, now);
        } else {
          lastArgs = args;
          if (!timer) {
            timer = setTimeout(() => {
              timer = null;
              invoke(lastArgs);
            }, threshold - passed);
          }
        }
      };
      const flush = () => lastArgs && invoke(lastArgs);
      return [throttled, flush];
    }
    var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
      let bytesNotified = 0;
      const _speedometer = speedometer(50, 250);
      return throttle((e) => {
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : void 0;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
          loaded,
          total,
          progress: total ? loaded / total : void 0,
          bytes: progressBytes,
          rate: rate ? rate : void 0,
          estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
          event: e,
          lengthComputable: total != null,
          [isDownloadStream ? "download" : "upload"]: true
        };
        listener(data);
      }, freq);
    };
    var progressEventDecorator = (total, throttled) => {
      const lengthComputable = total != null;
      return [(loaded) => throttled[0]({
        lengthComputable,
        total,
        loaded
      }), throttled[1]];
    };
    var asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));
    var isURLSameOrigin = platform.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
      url = new URL(url, platform.origin);
      return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
    })(
      new URL(platform.origin),
      platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
    ) : () => true;
    var cookies = platform.hasStandardBrowserEnv ? (
      // Standard browser envs support document.cookie
      {
        write(name, value, expires, path, domain, secure, sameSite) {
          if (typeof document === "undefined")
            return;
          const cookie = [`${name}=${encodeURIComponent(value)}`];
          if (utils$1.isNumber(expires)) {
            cookie.push(`expires=${new Date(expires).toUTCString()}`);
          }
          if (utils$1.isString(path)) {
            cookie.push(`path=${path}`);
          }
          if (utils$1.isString(domain)) {
            cookie.push(`domain=${domain}`);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          if (utils$1.isString(sameSite)) {
            cookie.push(`SameSite=${sameSite}`);
          }
          document.cookie = cookie.join("; ");
        },
        read(name) {
          if (typeof document === "undefined")
            return null;
          const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
          return match ? decodeURIComponent(match[1]) : null;
        },
        remove(name) {
          this.write(name, "", Date.now() - 864e5, "/");
        }
      }
    ) : (
      // Non-standard browser env (web workers, react-native) lack needed support.
      {
        write() {
        },
        read() {
          return null;
        },
        remove() {
        }
      }
    );
    function isAbsoluteURL(url) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
    }
    function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    }
    function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
      let isRelativeUrl = !isAbsoluteURL(requestedURL);
      if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    }
    var headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? __spreadValues({}, thing) : thing;
    function mergeConfig(config1, config2) {
      config2 = config2 || {};
      const config = {};
      function getMergedValue(target, source, prop, caseless) {
        if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
          return utils$1.merge.call({ caseless }, target, source);
        } else if (utils$1.isPlainObject(source)) {
          return utils$1.merge({}, source);
        } else if (utils$1.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(a, b, prop, caseless) {
        if (!utils$1.isUndefined(b)) {
          return getMergedValue(a, b, prop, caseless);
        } else if (!utils$1.isUndefined(a)) {
          return getMergedValue(void 0, a, prop, caseless);
        }
      }
      function valueFromConfig2(a, b) {
        if (!utils$1.isUndefined(b)) {
          return getMergedValue(void 0, b);
        }
      }
      function defaultToConfig2(a, b) {
        if (!utils$1.isUndefined(b)) {
          return getMergedValue(void 0, b);
        } else if (!utils$1.isUndefined(a)) {
          return getMergedValue(void 0, a);
        }
      }
      function mergeDirectKeys(a, b, prop) {
        if (prop in config2) {
          return getMergedValue(a, b);
        } else if (prop in config1) {
          return getMergedValue(void 0, a);
        }
      }
      const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
      };
      utils$1.forEach(Object.keys(__spreadValues(__spreadValues({}, config1), config2)), function computeConfigValue(prop) {
        const merge2 = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge2(config1[prop], config2[prop], prop);
        utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
      });
      return config;
    }
    var resolveConfig = (config) => {
      const newConfig = mergeConfig({}, config);
      let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
      newConfig.headers = headers = AxiosHeaders$1.from(headers);
      newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
      if (auth) {
        headers.set(
          "Authorization",
          "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
        );
      }
      if (utils$1.isFormData(data)) {
        if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
          headers.setContentType(void 0);
        } else if (utils$1.isFunction(data.getHeaders)) {
          const formHeaders = data.getHeaders();
          const allowedHeaders = ["content-type", "content-length"];
          Object.entries(formHeaders).forEach(([key, val]) => {
            if (allowedHeaders.includes(key.toLowerCase())) {
              headers.set(key, val);
            }
          });
        }
      }
      if (platform.hasStandardBrowserEnv) {
        withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
        if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
          const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
          if (xsrfValue) {
            headers.set(xsrfHeaderName, xsrfValue);
          }
        }
      }
      return newConfig;
    };
    var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
    var xhrAdapter = isXHRAdapterSupported && function(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        const _config = resolveConfig(config);
        let requestData = _config.data;
        const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
          flushUpload && flushUpload();
          flushDownload && flushDownload();
          _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
          _config.signal && _config.signal.removeEventListener("abort", onCanceled);
        }
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        request.timeout = _config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          const responseHeaders = AxiosHeaders$1.from(
            "getAllResponseHeaders" in request && request.getAllResponseHeaders()
          );
          const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          const response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
          request = null;
        };
        request.onerror = function handleError(event) {
          const msg = event && event.message ? event.message : "Network Error";
          const err = new AxiosError(msg, AxiosError.ERR_NETWORK, config, request);
          err.event = event || null;
          reject(err);
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
          const transitional = _config.transitional || transitionalDefaults;
          if (_config.timeoutErrorMessage) {
            timeoutErrorMessage = _config.timeoutErrorMessage;
          }
          reject(new AxiosError(
            timeoutErrorMessage,
            transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
            config,
            request
          ));
          request = null;
        };
        requestData === void 0 && requestHeaders.setContentType(null);
        if ("setRequestHeader" in request) {
          utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
          });
        }
        if (!utils$1.isUndefined(_config.withCredentials)) {
          request.withCredentials = !!_config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = _config.responseType;
        }
        if (onDownloadProgress) {
          [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
          request.addEventListener("progress", downloadThrottled);
        }
        if (onUploadProgress && request.upload) {
          [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
          request.upload.addEventListener("progress", uploadThrottled);
          request.upload.addEventListener("loadend", flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
          onCanceled = (cancel) => {
            if (!request) {
              return;
            }
            reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
            request.abort();
            request = null;
          };
          _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
          if (_config.signal) {
            _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
          }
        }
        const protocol = parseProtocol(_config.url);
        if (protocol && platform.protocols.indexOf(protocol) === -1) {
          reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
          return;
        }
        request.send(requestData || null);
      });
    };
    var composeSignals = (signals, timeout) => {
      const { length } = signals = signals ? signals.filter(Boolean) : [];
      if (timeout || length) {
        let controller = new AbortController();
        let aborted;
        const onabort = function(reason) {
          if (!aborted) {
            aborted = true;
            unsubscribe();
            const err = reason instanceof Error ? reason : this.reason;
            controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
          }
        };
        let timer = timeout && setTimeout(() => {
          timer = null;
          onabort(new AxiosError(`timeout ${timeout} of ms exceeded`, AxiosError.ETIMEDOUT));
        }, timeout);
        const unsubscribe = () => {
          if (signals) {
            timer && clearTimeout(timer);
            timer = null;
            signals.forEach((signal2) => {
              signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
            });
            signals = null;
          }
        };
        signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
        const { signal } = controller;
        signal.unsubscribe = () => utils$1.asap(unsubscribe);
        return signal;
      }
    };
    var composeSignals$1 = composeSignals;
    var streamChunk = function* (chunk, chunkSize) {
      let len = chunk.byteLength;
      if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
      }
      let pos = 0;
      let end;
      while (pos < len) {
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
      }
    };
    var readBytes = function(iterable, chunkSize) {
      return __asyncGenerator(this, null, function* () {
        try {
          for (var iter = __forAwait(readStream(iterable)), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
            const chunk = temp.value;
            yield* __yieldStar(streamChunk(chunk, chunkSize));
          }
        } catch (temp) {
          error = [temp];
        } finally {
          try {
            more && (temp = iter.return) && (yield new __await(temp.call(iter)));
          } finally {
            if (error)
              throw error[0];
          }
        }
      });
    };
    var readStream = function(stream) {
      return __asyncGenerator(this, null, function* () {
        if (stream[Symbol.asyncIterator]) {
          yield* __yieldStar(stream);
          return;
        }
        const reader = stream.getReader();
        try {
          for (; ; ) {
            const { done, value } = yield new __await(reader.read());
            if (done) {
              break;
            }
            yield value;
          }
        } finally {
          yield new __await(reader.cancel());
        }
      });
    };
    var trackStream = (stream, chunkSize, onProgress, onFinish) => {
      const iterator2 = readBytes(stream, chunkSize);
      let bytes = 0;
      let done;
      let _onFinish = (e) => {
        if (!done) {
          done = true;
          onFinish && onFinish(e);
        }
      };
      return new ReadableStream({
        pull(controller) {
          return __async(this, null, function* () {
            try {
              const { done: done2, value } = yield iterator2.next();
              if (done2) {
                _onFinish();
                controller.close();
                return;
              }
              let len = value.byteLength;
              if (onProgress) {
                let loadedBytes = bytes += len;
                onProgress(loadedBytes);
              }
              controller.enqueue(new Uint8Array(value));
            } catch (err) {
              _onFinish(err);
              throw err;
            }
          });
        },
        cancel(reason) {
          _onFinish(reason);
          return iterator2.return();
        }
      }, {
        highWaterMark: 2
      });
    };
    var DEFAULT_CHUNK_SIZE = 64 * 1024;
    var { isFunction } = utils$1;
    var globalFetchAPI = (({ Request, Response }) => ({
      Request,
      Response
    }))(utils$1.global);
    var {
      ReadableStream: ReadableStream$1,
      TextEncoder
    } = utils$1.global;
    var test = (fn, ...args) => {
      try {
        return !!fn(...args);
      } catch (e) {
        return false;
      }
    };
    var factory = (env) => {
      env = utils$1.merge.call({
        skipUndefined: true
      }, globalFetchAPI, env);
      const { fetch: envFetch, Request, Response } = env;
      const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === "function";
      const isRequestSupported = isFunction(Request);
      const isResponseSupported = isFunction(Response);
      if (!isFetchSupported) {
        return false;
      }
      const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream$1);
      const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : (str) => __async(exports, null, function* () {
        return new Uint8Array(yield new Request(str).arrayBuffer());
      }));
      const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
        let duplexAccessed = false;
        const hasContentType = new Request(platform.origin, {
          body: new ReadableStream$1(),
          method: "POST",
          get duplex() {
            duplexAccessed = true;
            return "half";
          }
        }).headers.has("Content-Type");
        return duplexAccessed && !hasContentType;
      });
      const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response("").body));
      const resolvers = {
        stream: supportsResponseStream && ((res) => res.body)
      };
      isFetchSupported && (() => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
          !resolvers[type] && (resolvers[type] = (res, config) => {
            let method = res && res[type];
            if (method) {
              return method.call(res);
            }
            throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
          });
        });
      })();
      const getBodyLength = (body) => __async(exports, null, function* () {
        if (body == null) {
          return 0;
        }
        if (utils$1.isBlob(body)) {
          return body.size;
        }
        if (utils$1.isSpecCompliantForm(body)) {
          const _request = new Request(platform.origin, {
            method: "POST",
            body
          });
          return (yield _request.arrayBuffer()).byteLength;
        }
        if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
          return body.byteLength;
        }
        if (utils$1.isURLSearchParams(body)) {
          body = body + "";
        }
        if (utils$1.isString(body)) {
          return (yield encodeText(body)).byteLength;
        }
      });
      const resolveBodyLength = (headers, body) => __async(exports, null, function* () {
        const length = utils$1.toFiniteNumber(headers.getContentLength());
        return length == null ? getBodyLength(body) : length;
      });
      return (config) => __async(exports, null, function* () {
        let {
          url,
          method,
          data,
          signal,
          cancelToken,
          timeout,
          onDownloadProgress,
          onUploadProgress,
          responseType,
          headers,
          withCredentials = "same-origin",
          fetchOptions
        } = resolveConfig(config);
        let _fetch = envFetch || fetch;
        responseType = responseType ? (responseType + "").toLowerCase() : "text";
        let composedSignal = composeSignals$1([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
        let request = null;
        const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
          composedSignal.unsubscribe();
        });
        let requestContentLength;
        try {
          if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = yield resolveBodyLength(headers, data)) !== 0) {
            let _request = new Request(url, {
              method: "POST",
              body: data,
              duplex: "half"
            });
            let contentTypeHeader;
            if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
              headers.setContentType(contentTypeHeader);
            }
            if (_request.body) {
              const [onProgress, flush] = progressEventDecorator(
                requestContentLength,
                progressEventReducer(asyncDecorator(onUploadProgress))
              );
              data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
            }
          }
          if (!utils$1.isString(withCredentials)) {
            withCredentials = withCredentials ? "include" : "omit";
          }
          const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
          const resolvedOptions = __spreadProps(__spreadValues({}, fetchOptions), {
            signal: composedSignal,
            method: method.toUpperCase(),
            headers: headers.normalize().toJSON(),
            body: data,
            duplex: "half",
            credentials: isCredentialsSupported ? withCredentials : void 0
          });
          request = isRequestSupported && new Request(url, resolvedOptions);
          let response = yield isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions);
          const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
          if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
            const options = {};
            ["status", "statusText", "headers"].forEach((prop) => {
              options[prop] = response[prop];
            });
            const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
            const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
              responseContentLength,
              progressEventReducer(asyncDecorator(onDownloadProgress), true)
            ) || [];
            response = new Response(
              trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
                flush && flush();
                unsubscribe && unsubscribe();
              }),
              options
            );
          }
          responseType = responseType || "text";
          let responseData = yield resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config);
          !isStreamResponse && unsubscribe && unsubscribe();
          return yield new Promise((resolve, reject) => {
            settle(resolve, reject, {
              data: responseData,
              headers: AxiosHeaders$1.from(response.headers),
              status: response.status,
              statusText: response.statusText,
              config,
              request
            });
          });
        } catch (err) {
          unsubscribe && unsubscribe();
          if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
            throw Object.assign(
              new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request),
              {
                cause: err.cause || err
              }
            );
          }
          throw AxiosError.from(err, err && err.code, config, request);
        }
      });
    };
    var seedCache = /* @__PURE__ */ new Map();
    var getFetch = (config) => {
      let env = config && config.env || {};
      const { fetch: fetch2, Request, Response } = env;
      const seeds = [
        Request,
        Response,
        fetch2
      ];
      let len = seeds.length, i = len, seed, target, map2 = seedCache;
      while (i--) {
        seed = seeds[i];
        target = map2.get(seed);
        target === void 0 && map2.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
        map2 = target;
      }
      return target;
    };
    getFetch();
    var knownAdapters = {
      http: httpAdapter,
      xhr: xhrAdapter,
      fetch: {
        get: getFetch
      }
    };
    utils$1.forEach(knownAdapters, (fn, value) => {
      if (fn) {
        try {
          Object.defineProperty(fn, "name", { value });
        } catch (e) {
        }
        Object.defineProperty(fn, "adapterName", { value });
      }
    });
    var renderReason = (reason) => `- ${reason}`;
    var isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
    function getAdapter(adapters2, config) {
      adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
      const { length } = adapters2;
      let nameOrAdapter;
      let adapter;
      const rejectedReasons = {};
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters2[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === void 0) {
            throw new AxiosError(`Unknown adapter '${id}'`);
          }
        }
        if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) {
          break;
        }
        rejectedReasons[id || "#" + i] = adapter;
      }
      if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(
          ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
        );
        let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
        throw new AxiosError(
          `There is no suitable adapter to dispatch the request ` + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return adapter;
    }
    var adapters = {
      /**
       * Resolve an adapter from a list of adapter names or functions.
       * @type {Function}
       */
      getAdapter,
      /**
       * Exposes all known adapters
       * @type {Object<string, Function|Object>}
       */
      adapters: knownAdapters
    };
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
      if (config.signal && config.signal.aborted) {
        throw new CanceledError(null, config);
      }
    }
    function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = AxiosHeaders$1.from(config.headers);
      config.data = transformData.call(
        config,
        config.transformRequest
      );
      if (["post", "put", "patch"].indexOf(config.method) !== -1) {
        config.headers.setContentType("application/x-www-form-urlencoded", false);
      }
      const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter, config);
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(
          config,
          config.transformResponse,
          response
        );
        response.headers = AxiosHeaders$1.from(response.headers);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(
              config,
              config.transformResponse,
              reason.response
            );
            reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
          }
        }
        return Promise.reject(reason);
      });
    }
    var VERSION = "1.13.1";
    var validators$1 = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
      validators$1[type] = function validator2(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    validators$1.transitional = function transitional(validator2, version, message) {
      function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return (value, opt, opts) => {
        if (validator2 === false) {
          throw new AxiosError(
            formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
            AxiosError.ERR_DEPRECATED
          );
        }
        if (version && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(
            formatMessage(
              opt,
              " has been deprecated since v" + version + " and will be removed in the near future"
            )
          );
        }
        return validator2 ? validator2(value, opt, opts) : true;
      };
    };
    validators$1.spelling = function spelling(correctSpelling) {
      return (value, opt) => {
        console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
        return true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
      }
      const keys = Object.keys(options);
      let i = keys.length;
      while (i-- > 0) {
        const opt = keys[i];
        const validator2 = schema[opt];
        if (validator2) {
          const value = options[opt];
          const result = value === void 0 || validator2(value, opt, options);
          if (result !== true) {
            throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
        }
      }
    }
    var validator = {
      assertOptions,
      validators: validators$1
    };
    var validators = validator.validators;
    var Axios2 = class {
      constructor(instanceConfig) {
        this.defaults = instanceConfig || {};
        this.interceptors = {
          request: new InterceptorManager$1(),
          response: new InterceptorManager$1()
        };
      }
      /**
       * Dispatch a request
       *
       * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
       * @param {?Object} config
       *
       * @returns {Promise} The Promise to be fulfilled
       */
      request(configOrUrl, config) {
        return __async(this, null, function* () {
          try {
            return yield this._request(configOrUrl, config);
          } catch (err) {
            if (err instanceof Error) {
              let dummy = {};
              Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
              const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
              try {
                if (!err.stack) {
                  err.stack = stack;
                } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
                  err.stack += "\n" + stack;
                }
              } catch (e) {
              }
            }
            throw err;
          }
        });
      }
      _request(configOrUrl, config) {
        if (typeof configOrUrl === "string") {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }
        config = mergeConfig(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== void 0) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }
        if (paramsSerializer != null) {
          if (utils$1.isFunction(paramsSerializer)) {
            config.paramsSerializer = {
              serialize: paramsSerializer
            };
          } else {
            validator.assertOptions(paramsSerializer, {
              encode: validators.function,
              serialize: validators.function
            }, true);
          }
        }
        if (config.allowAbsoluteUrls !== void 0)
          ;
        else if (this.defaults.allowAbsoluteUrls !== void 0) {
          config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        } else {
          config.allowAbsoluteUrls = true;
        }
        validator.assertOptions(config, {
          baseUrl: validators.spelling("baseURL"),
          withXsrfToken: validators.spelling("withXSRFToken")
        }, true);
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        let contextHeaders = headers && utils$1.merge(
          headers.common,
          headers[config.method]
        );
        headers && utils$1.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (method) => {
            delete headers[method];
          }
        );
        config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
          const chain = [dispatchRequest.bind(this), void 0];
          chain.unshift(...requestInterceptorChain);
          chain.push(...responseInterceptorChain);
          len = chain.length;
          promise = Promise.resolve(config);
          while (i < len) {
            promise = promise.then(chain[i++], chain[i++]);
          }
          return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        while (i < len) {
          const onFulfilled = requestInterceptorChain[i++];
          const onRejected = requestInterceptorChain[i++];
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected.call(this, error);
            break;
          }
        }
        try {
          promise = dispatchRequest.call(this, newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while (i < len) {
          promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }
        return promise;
      }
      getUri(config) {
        config = mergeConfig(this.defaults, config);
        const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
        return buildURL(fullPath, config.params, config.paramsSerializer);
      }
    };
    utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios2.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            headers: isForm ? {
              "Content-Type": "multipart/form-data"
            } : {},
            url,
            data
          }));
        };
      }
      Axios2.prototype[method] = generateHTTPMethod();
      Axios2.prototype[method + "Form"] = generateHTTPMethod(true);
    });
    var Axios$1 = Axios2;
    var CancelToken = class _CancelToken {
      constructor(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });
        const token = this;
        this.promise.then((cancel) => {
          if (!token._listeners)
            return;
          let i = token._listeners.length;
          while (i-- > 0) {
            token._listeners[i](cancel);
          }
          token._listeners = null;
        });
        this.promise.then = (onfulfilled) => {
          let _resolve;
          const promise = new Promise((resolve) => {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);
          promise.cancel = function reject() {
            token.unsubscribe(_resolve);
          };
          return promise;
        };
        executor(function cancel(message, config, request) {
          if (token.reason) {
            return;
          }
          token.reason = new CanceledError(message, config, request);
          resolvePromise(token.reason);
        });
      }
      /**
       * Throws a `CanceledError` if cancellation has been requested.
       */
      throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      }
      /**
       * Subscribe to the cancel signal
       */
      subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      }
      /**
       * Unsubscribe from the cancel signal
       */
      unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        const index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      }
      toAbortSignal() {
        const controller = new AbortController();
        const abort = (err) => {
          controller.abort(err);
        };
        this.subscribe(abort);
        controller.signal.unsubscribe = () => this.unsubscribe(abort);
        return controller.signal;
      }
      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
      static source() {
        let cancel;
        const token = new _CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token,
          cancel
        };
      }
    };
    var CancelToken$1 = CancelToken;
    function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    }
    function isAxiosError(payload) {
      return utils$1.isObject(payload) && payload.isAxiosError === true;
    }
    var HttpStatusCode = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511,
      WebServerIsDown: 521,
      ConnectionTimedOut: 522,
      OriginIsUnreachable: 523,
      TimeoutOccurred: 524,
      SslHandshakeFailed: 525,
      InvalidSslCertificate: 526
    };
    Object.entries(HttpStatusCode).forEach(([key, value]) => {
      HttpStatusCode[value] = key;
    });
    var HttpStatusCode$1 = HttpStatusCode;
    function createInstance(defaultConfig) {
      const context = new Axios$1(defaultConfig);
      const instance = bind(Axios$1.prototype.request, context);
      utils$1.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
      utils$1.extend(instance, context, null, { allOwnKeys: true });
      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
      };
      return instance;
    }
    var axios = createInstance(defaults$1);
    axios.Axios = Axios$1;
    axios.CanceledError = CanceledError;
    axios.CancelToken = CancelToken$1;
    axios.isCancel = isCancel;
    axios.VERSION = VERSION;
    axios.toFormData = toFormData;
    axios.AxiosError = AxiosError;
    axios.Cancel = axios.CanceledError;
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
    axios.spread = spread;
    axios.isAxiosError = isAxiosError;
    axios.mergeConfig = mergeConfig;
    axios.AxiosHeaders = AxiosHeaders$1;
    axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
    axios.getAdapter = adapters.getAdapter;
    axios.HttpStatusCode = HttpStatusCode$1;
    axios.default = axios;
    module.exports = axios;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isFunction.js
var require_isFunction = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isFunction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isFunction = void 0;
    function isFunction(value) {
      return typeof value === "function";
    }
    exports.isFunction = isFunction;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js
var require_createErrorClass = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createErrorClass = void 0;
    function createErrorClass(createImpl) {
      var _super = function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
      };
      var ctorFunc = createImpl(_super);
      ctorFunc.prototype = Object.create(Error.prototype);
      ctorFunc.prototype.constructor = ctorFunc;
      return ctorFunc;
    }
    exports.createErrorClass = createErrorClass;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js
var require_UnsubscriptionError = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnsubscriptionError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.UnsubscriptionError = createErrorClass_1.createErrorClass(function(_super) {
      return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
          return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
      };
    });
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/arrRemove.js
var require_arrRemove = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/arrRemove.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.arrRemove = void 0;
    function arrRemove(arr, item) {
      if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
      }
    }
    exports.arrRemove = arrRemove;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/Subscription.js
var require_Subscription = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/Subscription.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSubscription = exports.EMPTY_SUBSCRIPTION = exports.Subscription = void 0;
    var isFunction_1 = require_isFunction();
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    var arrRemove_1 = require_arrRemove();
    var Subscription = function() {
      function Subscription2(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
      }
      Subscription2.prototype.unsubscribe = function() {
        var e_1, _a2, e_2, _b;
        var errors;
        if (!this.closed) {
          this.closed = true;
          var _parentage = this._parentage;
          if (_parentage) {
            this._parentage = null;
            if (Array.isArray(_parentage)) {
              try {
                for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                  var parent_1 = _parentage_1_1.value;
                  parent_1.remove(this);
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (_parentage_1_1 && !_parentage_1_1.done && (_a2 = _parentage_1.return))
                    _a2.call(_parentage_1);
                } finally {
                  if (e_1)
                    throw e_1.error;
                }
              }
            } else {
              _parentage.remove(this);
            }
          }
          var initialFinalizer = this.initialTeardown;
          if (isFunction_1.isFunction(initialFinalizer)) {
            try {
              initialFinalizer();
            } catch (e) {
              errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [e];
            }
          }
          var _finalizers = this._finalizers;
          if (_finalizers) {
            this._finalizers = null;
            try {
              for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                var finalizer = _finalizers_1_1.value;
                try {
                  execFinalizer(finalizer);
                } catch (err) {
                  errors = errors !== null && errors !== void 0 ? errors : [];
                  if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                    errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                  } else {
                    errors.push(err);
                  }
                }
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
                  _b.call(_finalizers_1);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
          }
          if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
          }
        }
      };
      Subscription2.prototype.add = function(teardown) {
        var _a2;
        if (teardown && teardown !== this) {
          if (this.closed) {
            execFinalizer(teardown);
          } else {
            if (teardown instanceof Subscription2) {
              if (teardown.closed || teardown._hasParent(this)) {
                return;
              }
              teardown._addParent(this);
            }
            (this._finalizers = (_a2 = this._finalizers) !== null && _a2 !== void 0 ? _a2 : []).push(teardown);
          }
        }
      };
      Subscription2.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
      };
      Subscription2.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
      };
      Subscription2.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
          this._parentage = null;
        } else if (Array.isArray(_parentage)) {
          arrRemove_1.arrRemove(_parentage, parent);
        }
      };
      Subscription2.prototype.remove = function(teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove_1.arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription2) {
          teardown._removeParent(this);
        }
      };
      Subscription2.EMPTY = function() {
        var empty = new Subscription2();
        empty.closed = true;
        return empty;
      }();
      return Subscription2;
    }();
    exports.Subscription = Subscription;
    exports.EMPTY_SUBSCRIPTION = Subscription.EMPTY;
    function isSubscription(value) {
      return value instanceof Subscription || value && "closed" in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe);
    }
    exports.isSubscription = isSubscription;
    function execFinalizer(finalizer) {
      if (isFunction_1.isFunction(finalizer)) {
        finalizer();
      } else {
        finalizer.unsubscribe();
      }
    }
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/config.js
var require_config = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.config = void 0;
    exports.config = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: false,
      useDeprecatedNextContext: false
    };
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js
var require_timeoutProvider = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timeoutProvider = void 0;
    exports.timeoutProvider = {
      setTimeout: function(handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var delegate = exports.timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
          return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
      },
      clearTimeout: function(handle) {
        var delegate = exports.timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
      },
      delegate: void 0
    };
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js
var require_reportUnhandledError = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reportUnhandledError = void 0;
    var config_1 = require_config();
    var timeoutProvider_1 = require_timeoutProvider();
    function reportUnhandledError(err) {
      timeoutProvider_1.timeoutProvider.setTimeout(function() {
        var onUnhandledError = config_1.config.onUnhandledError;
        if (onUnhandledError) {
          onUnhandledError(err);
        } else {
          throw err;
        }
      });
    }
    exports.reportUnhandledError = reportUnhandledError;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/noop.js
var require_noop = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/noop.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.noop = void 0;
    function noop() {
    }
    exports.noop = noop;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/NotificationFactories.js
var require_NotificationFactories = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/NotificationFactories.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = void 0;
    exports.COMPLETE_NOTIFICATION = function() {
      return createNotification("C", void 0, void 0);
    }();
    function errorNotification(error) {
      return createNotification("E", void 0, error);
    }
    exports.errorNotification = errorNotification;
    function nextNotification(value) {
      return createNotification("N", value, void 0);
    }
    exports.nextNotification = nextNotification;
    function createNotification(kind, value, error) {
      return {
        kind,
        value,
        error
      };
    }
    exports.createNotification = createNotification;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/errorContext.js
var require_errorContext = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/errorContext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.captureError = exports.errorContext = void 0;
    var config_1 = require_config();
    var context = null;
    function errorContext(cb) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
          context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
          var _a2 = context, errorThrown = _a2.errorThrown, error = _a2.error;
          context = null;
          if (errorThrown) {
            throw error;
          }
        }
      } else {
        cb();
      }
    }
    exports.errorContext = errorContext;
    function captureError(err) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
      }
    }
    exports.captureError = captureError;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/Subscriber.js
var require_Subscriber = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/Subscriber.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = void 0;
    var isFunction_1 = require_isFunction();
    var Subscription_1 = require_Subscription();
    var config_1 = require_config();
    var reportUnhandledError_1 = require_reportUnhandledError();
    var noop_1 = require_noop();
    var NotificationFactories_1 = require_NotificationFactories();
    var timeoutProvider_1 = require_timeoutProvider();
    var errorContext_1 = require_errorContext();
    var Subscriber = function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
          _this.destination = destination;
          if (Subscription_1.isSubscription(destination)) {
            destination.add(_this);
          }
        } else {
          _this.destination = exports.EMPTY_OBSERVER;
        }
        return _this;
      }
      Subscriber2.create = function(next, error, complete) {
        return new SafeSubscriber(next, error, complete);
      };
      Subscriber2.prototype.next = function(value) {
        if (this.isStopped) {
          handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
        } else {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (this.isStopped) {
          handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
        } else {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (this.isStopped) {
          handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
        } else {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (!this.closed) {
          this.isStopped = true;
          _super.prototype.unsubscribe.call(this);
          this.destination = null;
        }
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        try {
          this.destination.error(err);
        } finally {
          this.unsubscribe();
        }
      };
      Subscriber2.prototype._complete = function() {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      };
      return Subscriber2;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    var _bind = Function.prototype.bind;
    function bind(fn, thisArg) {
      return _bind.call(fn, thisArg);
    }
    var ConsumerObserver = function() {
      function ConsumerObserver2(partialObserver) {
        this.partialObserver = partialObserver;
      }
      ConsumerObserver2.prototype.next = function(value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
          try {
            partialObserver.next(value);
          } catch (error) {
            handleUnhandledError(error);
          }
        }
      };
      ConsumerObserver2.prototype.error = function(err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
          try {
            partialObserver.error(err);
          } catch (error) {
            handleUnhandledError(error);
          }
        } else {
          handleUnhandledError(err);
        }
      };
      ConsumerObserver2.prototype.complete = function() {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
          try {
            partialObserver.complete();
          } catch (error) {
            handleUnhandledError(error);
          }
        }
      };
      return ConsumerObserver2;
    }();
    var SafeSubscriber = function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction_1.isFunction(observerOrNext) || !observerOrNext) {
          partialObserver = {
            next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
            error: error !== null && error !== void 0 ? error : void 0,
            complete: complete !== null && complete !== void 0 ? complete : void 0
          };
        } else {
          var context_1;
          if (_this && config_1.config.useDeprecatedNextContext) {
            context_1 = Object.create(observerOrNext);
            context_1.unsubscribe = function() {
              return _this.unsubscribe();
            };
            partialObserver = {
              next: observerOrNext.next && bind(observerOrNext.next, context_1),
              error: observerOrNext.error && bind(observerOrNext.error, context_1),
              complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
            };
          } else {
            partialObserver = observerOrNext;
          }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
      }
      return SafeSubscriber2;
    }(Subscriber);
    exports.SafeSubscriber = SafeSubscriber;
    function handleUnhandledError(error) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        errorContext_1.captureError(error);
      } else {
        reportUnhandledError_1.reportUnhandledError(error);
      }
    }
    function defaultErrorHandler(err) {
      throw err;
    }
    function handleStoppedNotification(notification, subscriber) {
      var onStoppedNotification = config_1.config.onStoppedNotification;
      onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
      });
    }
    exports.EMPTY_OBSERVER = {
      closed: true,
      next: noop_1.noop,
      error: defaultErrorHandler,
      complete: noop_1.noop
    };
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/symbol/observable.js
var require_observable = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/symbol/observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.observable = void 0;
    exports.observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/identity.js
var require_identity = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/identity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.identity = void 0;
    function identity(x) {
      return x;
    }
    exports.identity = identity;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/pipe.js
var require_pipe = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/pipe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pipeFromArray = exports.pipe = void 0;
    var identity_1 = require_identity();
    function pipe() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
    }
    exports.pipe = pipe;
    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }
      if (fns.length === 1) {
        return fns[0];
      }
      return function piped(input) {
        return fns.reduce(function(prev, fn) {
          return fn(prev);
        }, input);
      };
    }
    exports.pipeFromArray = pipeFromArray;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/Observable.js
var require_Observable = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/Observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Observable = void 0;
    var Subscriber_1 = require_Subscriber();
    var Subscription_1 = require_Subscription();
    var observable_1 = require_observable();
    var pipe_1 = require_pipe();
    var config_1 = require_config();
    var isFunction_1 = require_isFunction();
    var errorContext_1 = require_errorContext();
    var Observable = function() {
      function Observable2(subscribe) {
        if (subscribe) {
          this._subscribe = subscribe;
        }
      }
      Observable2.prototype.lift = function(operator) {
        var observable = new Observable2();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };
      Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
        errorContext_1.errorContext(function() {
          var _a2 = _this, operator = _a2.operator, source = _a2.source;
          subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
      };
      Observable2.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          sink.error(err);
        }
      };
      Observable2.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var subscriber = new Subscriber_1.SafeSubscriber({
            next: function(value) {
              try {
                next(value);
              } catch (err) {
                reject(err);
                subscriber.unsubscribe();
              }
            },
            error: reject,
            complete: resolve
          });
          _this.subscribe(subscriber);
        });
      };
      Observable2.prototype._subscribe = function(subscriber) {
        var _a2;
        return (_a2 = this.source) === null || _a2 === void 0 ? void 0 : _a2.subscribe(subscriber);
      };
      Observable2.prototype[observable_1.observable] = function() {
        return this;
      };
      Observable2.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        return pipe_1.pipeFromArray(operations)(this);
      };
      Observable2.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var value;
          _this.subscribe(function(x) {
            return value = x;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve(value);
          });
        });
      };
      Observable2.create = function(subscribe) {
        return new Observable2(subscribe);
      };
      return Observable2;
    }();
    exports.Observable = Observable;
    function getPromiseCtor(promiseCtor) {
      var _a2;
      return (_a2 = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config_1.config.Promise) !== null && _a2 !== void 0 ? _a2 : Promise;
    }
    function isObserver(value) {
      return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
    }
    function isSubscriber(value) {
      return value && value instanceof Subscriber_1.Subscriber || isObserver(value) && Subscription_1.isSubscription(value);
    }
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/lift.js
var require_lift = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/lift.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.operate = exports.hasLift = void 0;
    var isFunction_1 = require_isFunction();
    function hasLift(source) {
      return isFunction_1.isFunction(source === null || source === void 0 ? void 0 : source.lift);
    }
    exports.hasLift = hasLift;
    function operate(init) {
      return function(source) {
        if (hasLift(source)) {
          return source.lift(function(liftedSource) {
            try {
              return init(liftedSource, this);
            } catch (err) {
              this.error(err);
            }
          });
        }
        throw new TypeError("Unable to lift unknown Observable type");
      };
    }
    exports.operate = operate;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js
var require_OperatorSubscriber = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OperatorSubscriber = exports.createOperatorSubscriber = void 0;
    var Subscriber_1 = require_Subscriber();
    function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
      return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
    }
    exports.createOperatorSubscriber = createOperatorSubscriber;
    var OperatorSubscriber = function(_super) {
      __extends(OperatorSubscriber2, _super);
      function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext ? function(value) {
          try {
            onNext(value);
          } catch (err) {
            destination.error(err);
          }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
          try {
            onError(err);
          } catch (err2) {
            destination.error(err2);
          } finally {
            this.unsubscribe();
          }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
          try {
            onComplete();
          } catch (err) {
            destination.error(err);
          } finally {
            this.unsubscribe();
          }
        } : _super.prototype._complete;
        return _this;
      }
      OperatorSubscriber2.prototype.unsubscribe = function() {
        var _a2;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var closed_1 = this.closed;
          _super.prototype.unsubscribe.call(this);
          !closed_1 && ((_a2 = this.onFinalize) === null || _a2 === void 0 ? void 0 : _a2.call(this));
        }
      };
      return OperatorSubscriber2;
    }(Subscriber_1.Subscriber);
    exports.OperatorSubscriber = OperatorSubscriber;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/refCount.js
var require_refCount = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/refCount.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.refCount = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function refCount() {
      return lift_1.operate(function(source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, void 0, function() {
          if (!source || source._refCount <= 0 || 0 < --source._refCount) {
            connection = null;
            return;
          }
          var sharedConnection = source._connection;
          var conn = connection;
          connection = null;
          if (sharedConnection && (!conn || sharedConnection === conn)) {
            sharedConnection.unsubscribe();
          }
          subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) {
          connection = source.connect();
        }
      });
    }
    exports.refCount = refCount;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js
var require_ConnectableObservable = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConnectableObservable = void 0;
    var Observable_1 = require_Observable();
    var Subscription_1 = require_Subscription();
    var refCount_1 = require_refCount();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var lift_1 = require_lift();
    var ConnectableObservable = function(_super) {
      __extends(ConnectableObservable2, _super);
      function ConnectableObservable2(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (lift_1.hasLift(source)) {
          _this.lift = source.lift;
        }
        return _this;
      }
      ConnectableObservable2.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
      };
      ConnectableObservable2.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
          this._subject = this.subjectFactory();
        }
        return this._subject;
      };
      ConnectableObservable2.prototype._teardown = function() {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
      };
      ConnectableObservable2.prototype.connect = function() {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
          connection = this._connection = new Subscription_1.Subscription();
          var subject_1 = this.getSubject();
          connection.add(this.source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subject_1, void 0, function() {
            _this._teardown();
            subject_1.complete();
          }, function(err) {
            _this._teardown();
            subject_1.error(err);
          }, function() {
            return _this._teardown();
          })));
          if (connection.closed) {
            this._connection = null;
            connection = Subscription_1.Subscription.EMPTY;
          }
        }
        return connection;
      };
      ConnectableObservable2.prototype.refCount = function() {
        return refCount_1.refCount()(this);
      };
      return ConnectableObservable2;
    }(Observable_1.Observable);
    exports.ConnectableObservable = ConnectableObservable;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js
var require_performanceTimestampProvider = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.performanceTimestampProvider = void 0;
    exports.performanceTimestampProvider = {
      now: function() {
        return (exports.performanceTimestampProvider.delegate || performance).now();
      },
      delegate: void 0
    };
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js
var require_animationFrameProvider = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.animationFrameProvider = void 0;
    var Subscription_1 = require_Subscription();
    exports.animationFrameProvider = {
      schedule: function(callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = exports.animationFrameProvider.delegate;
        if (delegate) {
          request = delegate.requestAnimationFrame;
          cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function(timestamp) {
          cancel = void 0;
          callback(timestamp);
        });
        return new Subscription_1.Subscription(function() {
          return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
        });
      },
      requestAnimationFrame: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
      },
      cancelAnimationFrame: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
      },
      delegate: void 0
    };
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js
var require_animationFrames = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.animationFrames = void 0;
    var Observable_1 = require_Observable();
    var performanceTimestampProvider_1 = require_performanceTimestampProvider();
    var animationFrameProvider_1 = require_animationFrameProvider();
    function animationFrames(timestampProvider) {
      return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
    }
    exports.animationFrames = animationFrames;
    function animationFramesFactory(timestampProvider) {
      return new Observable_1.Observable(function(subscriber) {
        var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
        var start = provider.now();
        var id = 0;
        var run = function() {
          if (!subscriber.closed) {
            id = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function(timestamp) {
              id = 0;
              var now = provider.now();
              subscriber.next({
                timestamp: timestampProvider ? now : timestamp,
                elapsed: now - start
              });
              run();
            });
          }
        };
        run();
        return function() {
          if (id) {
            animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
          }
        };
      });
    }
    var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js
var require_ObjectUnsubscribedError = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ObjectUnsubscribedError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.ObjectUnsubscribedError = createErrorClass_1.createErrorClass(function(_super) {
      return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = "ObjectUnsubscribedError";
        this.message = "object unsubscribed";
      };
    });
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/Subject.js
var require_Subject = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/Subject.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnonymousSubject = exports.Subject = void 0;
    var Observable_1 = require_Observable();
    var Subscription_1 = require_Subscription();
    var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
    var arrRemove_1 = require_arrRemove();
    var errorContext_1 = require_errorContext();
    var Subject2 = function(_super) {
      __extends(Subject3, _super);
      function Subject3() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
      }
      Subject3.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
      };
      Subject3.prototype._throwIfClosed = function() {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
      };
      Subject3.prototype.next = function(value) {
        var _this = this;
        errorContext_1.errorContext(function() {
          var e_1, _a2;
          _this._throwIfClosed();
          if (!_this.isStopped) {
            if (!_this.currentObservers) {
              _this.currentObservers = Array.from(_this.observers);
            }
            try {
              for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var observer = _c.value;
                observer.next(value);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_c && !_c.done && (_a2 = _b.return))
                  _a2.call(_b);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          }
        });
      };
      Subject3.prototype.error = function(err) {
        var _this = this;
        errorContext_1.errorContext(function() {
          _this._throwIfClosed();
          if (!_this.isStopped) {
            _this.hasError = _this.isStopped = true;
            _this.thrownError = err;
            var observers = _this.observers;
            while (observers.length) {
              observers.shift().error(err);
            }
          }
        });
      };
      Subject3.prototype.complete = function() {
        var _this = this;
        errorContext_1.errorContext(function() {
          _this._throwIfClosed();
          if (!_this.isStopped) {
            _this.isStopped = true;
            var observers = _this.observers;
            while (observers.length) {
              observers.shift().complete();
            }
          }
        });
      };
      Subject3.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
      };
      Object.defineProperty(Subject3.prototype, "observed", {
        get: function() {
          var _a2;
          return ((_a2 = this.observers) === null || _a2 === void 0 ? void 0 : _a2.length) > 0;
        },
        enumerable: false,
        configurable: true
      });
      Subject3.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
      };
      Subject3.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
      };
      Subject3.prototype._innerSubscribe = function(subscriber) {
        var _this = this;
        var _a2 = this, hasError = _a2.hasError, isStopped = _a2.isStopped, observers = _a2.observers;
        if (hasError || isStopped) {
          return Subscription_1.EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription_1.Subscription(function() {
          _this.currentObservers = null;
          arrRemove_1.arrRemove(observers, subscriber);
        });
      };
      Subject3.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a2 = this, hasError = _a2.hasError, thrownError = _a2.thrownError, isStopped = _a2.isStopped;
        if (hasError) {
          subscriber.error(thrownError);
        } else if (isStopped) {
          subscriber.complete();
        }
      };
      Subject3.prototype.asObservable = function() {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
      };
      Subject3.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
      };
      return Subject3;
    }(Observable_1.Observable);
    exports.Subject = Subject2;
    var AnonymousSubject = function(_super) {
      __extends(AnonymousSubject2, _super);
      function AnonymousSubject2(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
      }
      AnonymousSubject2.prototype.next = function(value) {
        var _a2, _b;
        (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.next) === null || _b === void 0 ? void 0 : _b.call(_a2, value);
      };
      AnonymousSubject2.prototype.error = function(err) {
        var _a2, _b;
        (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.error) === null || _b === void 0 ? void 0 : _b.call(_a2, err);
      };
      AnonymousSubject2.prototype.complete = function() {
        var _a2, _b;
        (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.complete) === null || _b === void 0 ? void 0 : _b.call(_a2);
      };
      AnonymousSubject2.prototype._subscribe = function(subscriber) {
        var _a2, _b;
        return (_b = (_a2 = this.source) === null || _a2 === void 0 ? void 0 : _a2.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
      };
      return AnonymousSubject2;
    }(Subject2);
    exports.AnonymousSubject = AnonymousSubject;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js
var require_BehaviorSubject = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BehaviorSubject = void 0;
    var Subject_1 = require_Subject();
    var BehaviorSubject2 = function(_super) {
      __extends(BehaviorSubject3, _super);
      function BehaviorSubject3(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
      }
      Object.defineProperty(BehaviorSubject3.prototype, "value", {
        get: function() {
          return this.getValue();
        },
        enumerable: false,
        configurable: true
      });
      BehaviorSubject3.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
      };
      BehaviorSubject3.prototype.getValue = function() {
        var _a2 = this, hasError = _a2.hasError, thrownError = _a2.thrownError, _value = _a2._value;
        if (hasError) {
          throw thrownError;
        }
        this._throwIfClosed();
        return _value;
      };
      BehaviorSubject3.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
      };
      return BehaviorSubject3;
    }(Subject_1.Subject);
    exports.BehaviorSubject = BehaviorSubject2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js
var require_dateTimestampProvider = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dateTimestampProvider = void 0;
    exports.dateTimestampProvider = {
      now: function() {
        return (exports.dateTimestampProvider.delegate || Date).now();
      },
      delegate: void 0
    };
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/ReplaySubject.js
var require_ReplaySubject = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/ReplaySubject.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReplaySubject = void 0;
    var Subject_1 = require_Subject();
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var ReplaySubject = function(_super) {
      __extends(ReplaySubject2, _super);
      function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) {
          _bufferSize = Infinity;
        }
        if (_windowTime === void 0) {
          _windowTime = Infinity;
        }
        if (_timestampProvider === void 0) {
          _timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
        }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
      }
      ReplaySubject2.prototype.next = function(value) {
        var _a2 = this, isStopped = _a2.isStopped, _buffer = _a2._buffer, _infiniteTimeWindow = _a2._infiniteTimeWindow, _timestampProvider = _a2._timestampProvider, _windowTime = _a2._windowTime;
        if (!isStopped) {
          _buffer.push(value);
          !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
      };
      ReplaySubject2.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a2 = this, _infiniteTimeWindow = _a2._infiniteTimeWindow, _buffer = _a2._buffer;
        var copy = _buffer.slice();
        for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
          subscriber.next(copy[i]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
      };
      ReplaySubject2.prototype._trimBuffer = function() {
        var _a2 = this, _bufferSize = _a2._bufferSize, _timestampProvider = _a2._timestampProvider, _buffer = _a2._buffer, _infiniteTimeWindow = _a2._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
          var now = _timestampProvider.now();
          var last = 0;
          for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
            last = i;
          }
          last && _buffer.splice(0, last + 1);
        }
      };
      return ReplaySubject2;
    }(Subject_1.Subject);
    exports.ReplaySubject = ReplaySubject;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/AsyncSubject.js
var require_AsyncSubject = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/AsyncSubject.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncSubject = void 0;
    var Subject_1 = require_Subject();
    var AsyncSubject = function(_super) {
      __extends(AsyncSubject2, _super);
      function AsyncSubject2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
      }
      AsyncSubject2.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a2 = this, hasError = _a2.hasError, _hasValue = _a2._hasValue, _value = _a2._value, thrownError = _a2.thrownError, isStopped = _a2.isStopped, _isComplete = _a2._isComplete;
        if (hasError) {
          subscriber.error(thrownError);
        } else if (isStopped || _isComplete) {
          _hasValue && subscriber.next(_value);
          subscriber.complete();
        }
      };
      AsyncSubject2.prototype.next = function(value) {
        if (!this.isStopped) {
          this._value = value;
          this._hasValue = true;
        }
      };
      AsyncSubject2.prototype.complete = function() {
        var _a2 = this, _hasValue = _a2._hasValue, _value = _a2._value, _isComplete = _a2._isComplete;
        if (!_isComplete) {
          this._isComplete = true;
          _hasValue && _super.prototype.next.call(this, _value);
          _super.prototype.complete.call(this);
        }
      };
      return AsyncSubject2;
    }(Subject_1.Subject);
    exports.AsyncSubject = AsyncSubject;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/Action.js
var require_Action = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/Action.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = void 0;
    var Subscription_1 = require_Subscription();
    var Action = function(_super) {
      __extends(Action2, _super);
      function Action2(scheduler, work) {
        return _super.call(this) || this;
      }
      Action2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return this;
      };
      return Action2;
    }(Subscription_1.Subscription);
    exports.Action = Action;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js
var require_intervalProvider = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.intervalProvider = void 0;
    exports.intervalProvider = {
      setInterval: function(handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var delegate = exports.intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
          return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
      },
      clearInterval: function(handle) {
        var delegate = exports.intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
      },
      delegate: void 0
    };
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js
var require_AsyncAction = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncAction = void 0;
    var Action_1 = require_Action();
    var intervalProvider_1 = require_intervalProvider();
    var arrRemove_1 = require_arrRemove();
    var AsyncAction = function(_super) {
      __extends(AsyncAction2, _super);
      function AsyncAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
      }
      AsyncAction2.prototype.schedule = function(state, delay) {
        var _a2;
        if (delay === void 0) {
          delay = 0;
        }
        if (this.closed) {
          return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a2 = this.id) !== null && _a2 !== void 0 ? _a2 : this.requestAsyncId(scheduler, this.id, delay);
        return this;
      };
      AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
      };
      AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null && this.delay === delay && this.pending === false) {
          return id;
        }
        if (id != null) {
          intervalProvider_1.intervalProvider.clearInterval(id);
        }
        return void 0;
      };
      AsyncAction2.prototype.execute = function(state, delay) {
        if (this.closed) {
          return new Error("executing a cancelled action");
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
          return error;
        } else if (this.pending === false && this.id != null) {
          this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
      };
      AsyncAction2.prototype._execute = function(state, _delay) {
        var errored = false;
        var errorValue;
        try {
          this.work(state);
        } catch (e) {
          errored = true;
          errorValue = e ? e : new Error("Scheduled action threw falsy error");
        }
        if (errored) {
          this.unsubscribe();
          return errorValue;
        }
      };
      AsyncAction2.prototype.unsubscribe = function() {
        if (!this.closed) {
          var _a2 = this, id = _a2.id, scheduler = _a2.scheduler;
          var actions = scheduler.actions;
          this.work = this.state = this.scheduler = null;
          this.pending = false;
          arrRemove_1.arrRemove(actions, this);
          if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
          }
          this.delay = null;
          _super.prototype.unsubscribe.call(this);
        }
      };
      return AsyncAction2;
    }(Action_1.Action);
    exports.AsyncAction = AsyncAction;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/Immediate.js
var require_Immediate = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/Immediate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TestTools = exports.Immediate = void 0;
    var nextHandle = 1;
    var resolved;
    var activeHandles = {};
    function findAndClearHandle(handle) {
      if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
      }
      return false;
    }
    exports.Immediate = {
      setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
          resolved = Promise.resolve();
        }
        resolved.then(function() {
          return findAndClearHandle(handle) && cb();
        });
        return handle;
      },
      clearImmediate: function(handle) {
        findAndClearHandle(handle);
      }
    };
    exports.TestTools = {
      pending: function() {
        return Object.keys(activeHandles).length;
      }
    };
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js
var require_immediateProvider = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.immediateProvider = void 0;
    var Immediate_1 = require_Immediate();
    var setImmediate2 = Immediate_1.Immediate.setImmediate;
    var clearImmediate = Immediate_1.Immediate.clearImmediate;
    exports.immediateProvider = {
      setImmediate: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate2).apply(void 0, __spreadArray([], __read(args)));
      },
      clearImmediate: function(handle) {
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
      },
      delegate: void 0
    };
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js
var require_AsapAction = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsapAction = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var immediateProvider_1 = require_immediateProvider();
    var AsapAction = function(_super) {
      __extends(AsapAction2, _super);
      function AsapAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
      };
      AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a2;
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
          return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a2 = actions[actions.length - 1]) === null || _a2 === void 0 ? void 0 : _a2.id) !== id) {
          immediateProvider_1.immediateProvider.clearImmediate(id);
          if (scheduler._scheduled === id) {
            scheduler._scheduled = void 0;
          }
        }
        return void 0;
      };
      return AsapAction2;
    }(AsyncAction_1.AsyncAction);
    exports.AsapAction = AsapAction;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/Scheduler.js
var require_Scheduler = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/Scheduler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scheduler = void 0;
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var Scheduler = function() {
      function Scheduler2(schedulerActionCtor, now) {
        if (now === void 0) {
          now = Scheduler2.now;
        }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
      }
      Scheduler2.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) {
          delay = 0;
        }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
      };
      Scheduler2.now = dateTimestampProvider_1.dateTimestampProvider.now;
      return Scheduler2;
    }();
    exports.Scheduler = Scheduler;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js
var require_AsyncScheduler = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncScheduler = void 0;
    var Scheduler_1 = require_Scheduler();
    var AsyncScheduler = function(_super) {
      __extends(AsyncScheduler2, _super);
      function AsyncScheduler2(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler_1.Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
      }
      AsyncScheduler2.prototype.flush = function(action) {
        var actions = this.actions;
        if (this._active) {
          actions.push(action);
          return;
        }
        var error;
        this._active = true;
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while (action = actions.shift());
        this._active = false;
        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AsyncScheduler2;
    }(Scheduler_1.Scheduler);
    exports.AsyncScheduler = AsyncScheduler;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js
var require_AsapScheduler = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsapScheduler = void 0;
    var AsyncScheduler_1 = require_AsyncScheduler();
    var AsapScheduler = function(_super) {
      __extends(AsapScheduler2, _super);
      function AsapScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AsapScheduler2.prototype.flush = function(action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = void 0;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
          while ((action = actions[0]) && action.id === flushId && actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AsapScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.AsapScheduler = AsapScheduler;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/asap.js
var require_asap = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/asap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.asap = exports.asapScheduler = void 0;
    var AsapAction_1 = require_AsapAction();
    var AsapScheduler_1 = require_AsapScheduler();
    exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
    exports.asap = exports.asapScheduler;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/async.js
var require_async = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.async = exports.asyncScheduler = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var AsyncScheduler_1 = require_AsyncScheduler();
    exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
    exports.async = exports.asyncScheduler;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js
var require_QueueAction = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QueueAction = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var QueueAction = function(_super) {
      __extends(QueueAction2, _super);
      function QueueAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      QueueAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay > 0) {
          return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
      };
      QueueAction2.prototype.execute = function(state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
      };
      QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null && delay > 0 || delay == null && this.delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.flush(this);
        return 0;
      };
      return QueueAction2;
    }(AsyncAction_1.AsyncAction);
    exports.QueueAction = QueueAction;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js
var require_QueueScheduler = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QueueScheduler = void 0;
    var AsyncScheduler_1 = require_AsyncScheduler();
    var QueueScheduler = function(_super) {
      __extends(QueueScheduler2, _super);
      function QueueScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      return QueueScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.QueueScheduler = QueueScheduler;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/queue.js
var require_queue = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/queue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.queue = exports.queueScheduler = void 0;
    var QueueAction_1 = require_QueueAction();
    var QueueScheduler_1 = require_QueueScheduler();
    exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
    exports.queue = exports.queueScheduler;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js
var require_AnimationFrameAction = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnimationFrameAction = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var animationFrameProvider_1 = require_animationFrameProvider();
    var AnimationFrameAction = function(_super) {
      __extends(AnimationFrameAction2, _super);
      function AnimationFrameAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function() {
          return scheduler.flush(void 0);
        }));
      };
      AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a2;
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
          return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && id === scheduler._scheduled && ((_a2 = actions[actions.length - 1]) === null || _a2 === void 0 ? void 0 : _a2.id) !== id) {
          animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
          scheduler._scheduled = void 0;
        }
        return void 0;
      };
      return AnimationFrameAction2;
    }(AsyncAction_1.AsyncAction);
    exports.AnimationFrameAction = AnimationFrameAction;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js
var require_AnimationFrameScheduler = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnimationFrameScheduler = void 0;
    var AsyncScheduler_1 = require_AsyncScheduler();
    var AnimationFrameScheduler = function(_super) {
      __extends(AnimationFrameScheduler2, _super);
      function AnimationFrameScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AnimationFrameScheduler2.prototype.flush = function(action) {
        this._active = true;
        var flushId;
        if (action) {
          flushId = action.id;
        } else {
          flushId = this._scheduled;
          this._scheduled = void 0;
        }
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
          while ((action = actions[0]) && action.id === flushId && actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AnimationFrameScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.AnimationFrameScheduler = AnimationFrameScheduler;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js
var require_animationFrame = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.animationFrame = exports.animationFrameScheduler = void 0;
    var AnimationFrameAction_1 = require_AnimationFrameAction();
    var AnimationFrameScheduler_1 = require_AnimationFrameScheduler();
    exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
    exports.animationFrame = exports.animationFrameScheduler;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js
var require_VirtualTimeScheduler = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var Subscription_1 = require_Subscription();
    var AsyncScheduler_1 = require_AsyncScheduler();
    var VirtualTimeScheduler = function(_super) {
      __extends(VirtualTimeScheduler2, _super);
      function VirtualTimeScheduler2(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) {
          schedulerActionCtor = VirtualAction;
        }
        if (maxFrames === void 0) {
          maxFrames = Infinity;
        }
        var _this = _super.call(this, schedulerActionCtor, function() {
          return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
      }
      VirtualTimeScheduler2.prototype.flush = function() {
        var _a2 = this, actions = _a2.actions, maxFrames = _a2.maxFrames;
        var error;
        var action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
          actions.shift();
          this.frame = action.delay;
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        }
        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      VirtualTimeScheduler2.frameTimeFactor = 10;
      return VirtualTimeScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.VirtualTimeScheduler = VirtualTimeScheduler;
    var VirtualAction = function(_super) {
      __extends(VirtualAction2, _super);
      function VirtualAction2(scheduler, work, index) {
        if (index === void 0) {
          index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
      }
      VirtualAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (Number.isFinite(delay)) {
          if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
          }
          this.active = false;
          var action = new VirtualAction2(this.scheduler, this.work);
          this.add(action);
          return action.schedule(state, delay);
        } else {
          return Subscription_1.Subscription.EMPTY;
        }
      };
      VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction2.sortActions);
        return 1;
      };
      VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return void 0;
      };
      VirtualAction2.prototype._execute = function(state, delay) {
        if (this.active === true) {
          return _super.prototype._execute.call(this, state, delay);
        }
      };
      VirtualAction2.sortActions = function(a, b) {
        if (a.delay === b.delay) {
          if (a.index === b.index) {
            return 0;
          } else if (a.index > b.index) {
            return 1;
          } else {
            return -1;
          }
        } else if (a.delay > b.delay) {
          return 1;
        } else {
          return -1;
        }
      };
      return VirtualAction2;
    }(AsyncAction_1.AsyncAction);
    exports.VirtualAction = VirtualAction;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/empty.js
var require_empty = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/empty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.empty = exports.EMPTY = void 0;
    var Observable_1 = require_Observable();
    exports.EMPTY = new Observable_1.Observable(function(subscriber) {
      return subscriber.complete();
    });
    function empty(scheduler) {
      return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
    }
    exports.empty = empty;
    function emptyScheduled(scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
          return subscriber.complete();
        });
      });
    }
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isScheduler.js
var require_isScheduler = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isScheduler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isScheduler = void 0;
    var isFunction_1 = require_isFunction();
    function isScheduler(value) {
      return value && isFunction_1.isFunction(value.schedule);
    }
    exports.isScheduler = isScheduler;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/args.js
var require_args = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/args.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
    var isFunction_1 = require_isFunction();
    var isScheduler_1 = require_isScheduler();
    function last(arr) {
      return arr[arr.length - 1];
    }
    function popResultSelector(args) {
      return isFunction_1.isFunction(last(args)) ? args.pop() : void 0;
    }
    exports.popResultSelector = popResultSelector;
    function popScheduler(args) {
      return isScheduler_1.isScheduler(last(args)) ? args.pop() : void 0;
    }
    exports.popScheduler = popScheduler;
    function popNumber(args, defaultValue) {
      return typeof last(args) === "number" ? args.pop() : defaultValue;
    }
    exports.popNumber = popNumber;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArrayLike = void 0;
    exports.isArrayLike = function(x) {
      return x && typeof x.length === "number" && typeof x !== "function";
    };
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isPromise.js
var require_isPromise = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isPromise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPromise = void 0;
    var isFunction_1 = require_isFunction();
    function isPromise(value) {
      return isFunction_1.isFunction(value === null || value === void 0 ? void 0 : value.then);
    }
    exports.isPromise = isPromise;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js
var require_isInteropObservable = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isInteropObservable = void 0;
    var observable_1 = require_observable();
    var isFunction_1 = require_isFunction();
    function isInteropObservable(input) {
      return isFunction_1.isFunction(input[observable_1.observable]);
    }
    exports.isInteropObservable = isInteropObservable;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js
var require_isAsyncIterable = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAsyncIterable = void 0;
    var isFunction_1 = require_isFunction();
    function isAsyncIterable(obj) {
      return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
    }
    exports.isAsyncIterable = isAsyncIterable;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js
var require_throwUnobservableError = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createInvalidObservableTypeError = void 0;
    function createInvalidObservableTypeError(input) {
      return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
    }
    exports.createInvalidObservableTypeError = createInvalidObservableTypeError;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/symbol/iterator.js
var require_iterator = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/symbol/iterator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.iterator = exports.getSymbolIterator = void 0;
    function getSymbolIterator() {
      if (typeof Symbol !== "function" || !Symbol.iterator) {
        return "@@iterator";
      }
      return Symbol.iterator;
    }
    exports.getSymbolIterator = getSymbolIterator;
    exports.iterator = getSymbolIterator();
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isIterable.js
var require_isIterable = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isIterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isIterable = void 0;
    var iterator_1 = require_iterator();
    var isFunction_1 = require_isFunction();
    function isIterable(input) {
      return isFunction_1.isFunction(input === null || input === void 0 ? void 0 : input[iterator_1.iterator]);
    }
    exports.isIterable = isIterable;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js
var require_isReadableStreamLike = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js"(exports) {
    "use strict";
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __await2 = exports && exports.__await || function(v) {
      return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
    };
    var __asyncGenerator2 = exports && exports.__asyncGenerator || function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        if (g[n])
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isReadableStreamLike = exports.readableStreamLikeToAsyncGenerator = void 0;
    var isFunction_1 = require_isFunction();
    function readableStreamLikeToAsyncGenerator(readableStream) {
      return __asyncGenerator2(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a2, value, done;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              reader = readableStream.getReader();
              _b.label = 1;
            case 1:
              _b.trys.push([1, , 9, 10]);
              _b.label = 2;
            case 2:
              if (false)
                return [3, 8];
              return [4, __await2(reader.read())];
            case 3:
              _a2 = _b.sent(), value = _a2.value, done = _a2.done;
              if (!done)
                return [3, 5];
              return [4, __await2(void 0)];
            case 4:
              return [2, _b.sent()];
            case 5:
              return [4, __await2(value)];
            case 6:
              return [4, _b.sent()];
            case 7:
              _b.sent();
              return [3, 2];
            case 8:
              return [3, 10];
            case 9:
              reader.releaseLock();
              return [7];
            case 10:
              return [2];
          }
        });
      });
    }
    exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
    function isReadableStreamLike(obj) {
      return isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
    }
    exports.isReadableStreamLike = isReadableStreamLike;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js
var require_innerFrom = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __asyncValues = exports && exports.__asyncValues || function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({ value: v2, done: d });
        }, reject);
      }
    };
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromReadableStreamLike = exports.fromAsyncIterable = exports.fromIterable = exports.fromPromise = exports.fromArrayLike = exports.fromInteropObservable = exports.innerFrom = void 0;
    var isArrayLike_1 = require_isArrayLike();
    var isPromise_1 = require_isPromise();
    var Observable_1 = require_Observable();
    var isInteropObservable_1 = require_isInteropObservable();
    var isAsyncIterable_1 = require_isAsyncIterable();
    var throwUnobservableError_1 = require_throwUnobservableError();
    var isIterable_1 = require_isIterable();
    var isReadableStreamLike_1 = require_isReadableStreamLike();
    var isFunction_1 = require_isFunction();
    var reportUnhandledError_1 = require_reportUnhandledError();
    var observable_1 = require_observable();
    function innerFrom(input) {
      if (input instanceof Observable_1.Observable) {
        return input;
      }
      if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
          return fromInteropObservable(input);
        }
        if (isArrayLike_1.isArrayLike(input)) {
          return fromArrayLike(input);
        }
        if (isPromise_1.isPromise(input)) {
          return fromPromise(input);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
          return fromAsyncIterable(input);
        }
        if (isIterable_1.isIterable(input)) {
          return fromIterable(input);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
          return fromReadableStreamLike(input);
        }
      }
      throw throwUnobservableError_1.createInvalidObservableTypeError(input);
    }
    exports.innerFrom = innerFrom;
    function fromInteropObservable(obj) {
      return new Observable_1.Observable(function(subscriber) {
        var obs = obj[observable_1.observable]();
        if (isFunction_1.isFunction(obs.subscribe)) {
          return obs.subscribe(subscriber);
        }
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
      });
    }
    exports.fromInteropObservable = fromInteropObservable;
    function fromArrayLike(array) {
      return new Observable_1.Observable(function(subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
          subscriber.next(array[i]);
        }
        subscriber.complete();
      });
    }
    exports.fromArrayLike = fromArrayLike;
    function fromPromise(promise) {
      return new Observable_1.Observable(function(subscriber) {
        promise.then(function(value) {
          if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
          }
        }, function(err) {
          return subscriber.error(err);
        }).then(null, reportUnhandledError_1.reportUnhandledError);
      });
    }
    exports.fromPromise = fromPromise;
    function fromIterable(iterable) {
      return new Observable_1.Observable(function(subscriber) {
        var e_1, _a2;
        try {
          for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
            var value = iterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return;
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (iterable_1_1 && !iterable_1_1.done && (_a2 = iterable_1.return))
              _a2.call(iterable_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        subscriber.complete();
      });
    }
    exports.fromIterable = fromIterable;
    function fromAsyncIterable(asyncIterable) {
      return new Observable_1.Observable(function(subscriber) {
        process2(asyncIterable, subscriber).catch(function(err) {
          return subscriber.error(err);
        });
      });
    }
    exports.fromAsyncIterable = fromAsyncIterable;
    function fromReadableStreamLike(readableStream) {
      return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
    }
    exports.fromReadableStreamLike = fromReadableStreamLike;
    function process2(asyncIterable, subscriber) {
      var asyncIterable_1, asyncIterable_1_1;
      var e_2, _a2;
      return __awaiter(this, void 0, void 0, function() {
        var value, e_2_1;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([0, 5, 6, 11]);
              asyncIterable_1 = __asyncValues(asyncIterable);
              _b.label = 1;
            case 1:
              return [4, asyncIterable_1.next()];
            case 2:
              if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
                return [3, 4];
              value = asyncIterable_1_1.value;
              subscriber.next(value);
              if (subscriber.closed) {
                return [2];
              }
              _b.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              e_2_1 = _b.sent();
              e_2 = { error: e_2_1 };
              return [3, 11];
            case 6:
              _b.trys.push([6, , 9, 10]);
              if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a2 = asyncIterable_1.return)))
                return [3, 8];
              return [4, _a2.call(asyncIterable_1)];
            case 7:
              _b.sent();
              _b.label = 8;
            case 8:
              return [3, 10];
            case 9:
              if (e_2)
                throw e_2.error;
              return [7];
            case 10:
              return [7];
            case 11:
              subscriber.complete();
              return [2];
          }
        });
      });
    }
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js
var require_executeSchedule = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.executeSchedule = void 0;
    function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
      if (delay === void 0) {
        delay = 0;
      }
      if (repeat === void 0) {
        repeat = false;
      }
      var scheduleSubscription = scheduler.schedule(function() {
        work();
        if (repeat) {
          parentSubscription.add(this.schedule(null, delay));
        } else {
          this.unsubscribe();
        }
      }, delay);
      parentSubscription.add(scheduleSubscription);
      if (!repeat) {
        return scheduleSubscription;
      }
    }
    exports.executeSchedule = executeSchedule;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/observeOn.js
var require_observeOn = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/observeOn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.observeOn = void 0;
    var executeSchedule_1 = require_executeSchedule();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function observeOn(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            return subscriber.next(value);
          }, delay);
        }, function() {
          return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            return subscriber.complete();
          }, delay);
        }, function(err) {
          return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            return subscriber.error(err);
          }, delay);
        }));
      });
    }
    exports.observeOn = observeOn;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js
var require_subscribeOn = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.subscribeOn = void 0;
    var lift_1 = require_lift();
    function subscribeOn(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return lift_1.operate(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
          return source.subscribe(subscriber);
        }, delay));
      });
    }
    exports.subscribeOn = subscribeOn;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js
var require_scheduleObservable = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduleObservable = void 0;
    var innerFrom_1 = require_innerFrom();
    var observeOn_1 = require_observeOn();
    var subscribeOn_1 = require_subscribeOn();
    function scheduleObservable(input, scheduler) {
      return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
    }
    exports.scheduleObservable = scheduleObservable;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js
var require_schedulePromise = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.schedulePromise = void 0;
    var innerFrom_1 = require_innerFrom();
    var observeOn_1 = require_observeOn();
    var subscribeOn_1 = require_subscribeOn();
    function schedulePromise(input, scheduler) {
      return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
    }
    exports.schedulePromise = schedulePromise;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js
var require_scheduleArray = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduleArray = void 0;
    var Observable_1 = require_Observable();
    function scheduleArray(input, scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        var i = 0;
        return scheduler.schedule(function() {
          if (i === input.length) {
            subscriber.complete();
          } else {
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
              this.schedule();
            }
          }
        });
      });
    }
    exports.scheduleArray = scheduleArray;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js
var require_scheduleIterable = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduleIterable = void 0;
    var Observable_1 = require_Observable();
    var iterator_1 = require_iterator();
    var isFunction_1 = require_isFunction();
    var executeSchedule_1 = require_executeSchedule();
    function scheduleIterable(input, scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        var iterator;
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          iterator = input[iterator_1.iterator]();
          executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            var _a2;
            var value;
            var done;
            try {
              _a2 = iterator.next(), value = _a2.value, done = _a2.done;
            } catch (err) {
              subscriber.error(err);
              return;
            }
            if (done) {
              subscriber.complete();
            } else {
              subscriber.next(value);
            }
          }, 0, true);
        });
        return function() {
          return isFunction_1.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
      });
    }
    exports.scheduleIterable = scheduleIterable;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js
var require_scheduleAsyncIterable = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduleAsyncIterable = void 0;
    var Observable_1 = require_Observable();
    var executeSchedule_1 = require_executeSchedule();
    function scheduleAsyncIterable(input, scheduler) {
      if (!input) {
        throw new Error("Iterable cannot be null");
      }
      return new Observable_1.Observable(function(subscriber) {
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          var iterator = input[Symbol.asyncIterator]();
          executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            iterator.next().then(function(result) {
              if (result.done) {
                subscriber.complete();
              } else {
                subscriber.next(result.value);
              }
            });
          }, 0, true);
        });
      });
    }
    exports.scheduleAsyncIterable = scheduleAsyncIterable;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js
var require_scheduleReadableStreamLike = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduleReadableStreamLike = void 0;
    var scheduleAsyncIterable_1 = require_scheduleAsyncIterable();
    var isReadableStreamLike_1 = require_isReadableStreamLike();
    function scheduleReadableStreamLike(input, scheduler) {
      return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
    }
    exports.scheduleReadableStreamLike = scheduleReadableStreamLike;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js
var require_scheduled = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduled = void 0;
    var scheduleObservable_1 = require_scheduleObservable();
    var schedulePromise_1 = require_schedulePromise();
    var scheduleArray_1 = require_scheduleArray();
    var scheduleIterable_1 = require_scheduleIterable();
    var scheduleAsyncIterable_1 = require_scheduleAsyncIterable();
    var isInteropObservable_1 = require_isInteropObservable();
    var isPromise_1 = require_isPromise();
    var isArrayLike_1 = require_isArrayLike();
    var isIterable_1 = require_isIterable();
    var isAsyncIterable_1 = require_isAsyncIterable();
    var throwUnobservableError_1 = require_throwUnobservableError();
    var isReadableStreamLike_1 = require_isReadableStreamLike();
    var scheduleReadableStreamLike_1 = require_scheduleReadableStreamLike();
    function scheduled(input, scheduler) {
      if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
          return scheduleObservable_1.scheduleObservable(input, scheduler);
        }
        if (isArrayLike_1.isArrayLike(input)) {
          return scheduleArray_1.scheduleArray(input, scheduler);
        }
        if (isPromise_1.isPromise(input)) {
          return schedulePromise_1.schedulePromise(input, scheduler);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
          return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable_1.isIterable(input)) {
          return scheduleIterable_1.scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
          return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
        }
      }
      throw throwUnobservableError_1.createInvalidObservableTypeError(input);
    }
    exports.scheduled = scheduled;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/from.js
var require_from = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/from.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.from = void 0;
    var scheduled_1 = require_scheduled();
    var innerFrom_1 = require_innerFrom();
    function from(input, scheduler) {
      return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom_1.innerFrom(input);
    }
    exports.from = from;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/of.js
var require_of = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/of.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.of = void 0;
    var args_1 = require_args();
    var from_1 = require_from();
    function of2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      return from_1.from(args, scheduler);
    }
    exports.of = of2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/throwError.js
var require_throwError = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/throwError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.throwError = void 0;
    var Observable_1 = require_Observable();
    var isFunction_1 = require_isFunction();
    function throwError2(errorOrErrorFactory, scheduler) {
      var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
        return errorOrErrorFactory;
      };
      var init = function(subscriber) {
        return subscriber.error(errorFactory());
      };
      return new Observable_1.Observable(scheduler ? function(subscriber) {
        return scheduler.schedule(init, 0, subscriber);
      } : init);
    }
    exports.throwError = throwError2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/Notification.js
var require_Notification = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/Notification.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.observeNotification = exports.Notification = exports.NotificationKind = void 0;
    var empty_1 = require_empty();
    var of_1 = require_of();
    var throwError_1 = require_throwError();
    var isFunction_1 = require_isFunction();
    var NotificationKind;
    (function(NotificationKind2) {
      NotificationKind2["NEXT"] = "N";
      NotificationKind2["ERROR"] = "E";
      NotificationKind2["COMPLETE"] = "C";
    })(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
    var Notification = function() {
      function Notification2(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
      }
      Notification2.prototype.observe = function(observer) {
        return observeNotification(this, observer);
      };
      Notification2.prototype.do = function(nextHandler, errorHandler, completeHandler) {
        var _a2 = this, kind = _a2.kind, value = _a2.value, error = _a2.error;
        return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
      };
      Notification2.prototype.accept = function(nextOrObserver, error, complete) {
        var _a2;
        return isFunction_1.isFunction((_a2 = nextOrObserver) === null || _a2 === void 0 ? void 0 : _a2.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
      };
      Notification2.prototype.toObservable = function() {
        var _a2 = this, kind = _a2.kind, value = _a2.value, error = _a2.error;
        var result = kind === "N" ? of_1.of(value) : kind === "E" ? throwError_1.throwError(function() {
          return error;
        }) : kind === "C" ? empty_1.EMPTY : 0;
        if (!result) {
          throw new TypeError("Unexpected notification kind " + kind);
        }
        return result;
      };
      Notification2.createNext = function(value) {
        return new Notification2("N", value);
      };
      Notification2.createError = function(err) {
        return new Notification2("E", void 0, err);
      };
      Notification2.createComplete = function() {
        return Notification2.completeNotification;
      };
      Notification2.completeNotification = new Notification2("C");
      return Notification2;
    }();
    exports.Notification = Notification;
    function observeNotification(notification, observer) {
      var _a2, _b, _c;
      var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
      if (typeof kind !== "string") {
        throw new TypeError('Invalid notification, missing "kind"');
      }
      kind === "N" ? (_a2 = observer.next) === null || _a2 === void 0 ? void 0 : _a2.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
    }
    exports.observeNotification = observeNotification;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isObservable.js
var require_isObservable = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isObservable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isObservable = void 0;
    var Observable_1 = require_Observable();
    var isFunction_1 = require_isFunction();
    function isObservable(obj) {
      return !!obj && (obj instanceof Observable_1.Observable || isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe));
    }
    exports.isObservable = isObservable;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/EmptyError.js
var require_EmptyError = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/EmptyError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmptyError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.EmptyError = createErrorClass_1.createErrorClass(function(_super) {
      return function EmptyErrorImpl() {
        _super(this);
        this.name = "EmptyError";
        this.message = "no elements in sequence";
      };
    });
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/lastValueFrom.js
var require_lastValueFrom = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/lastValueFrom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lastValueFrom = void 0;
    var EmptyError_1 = require_EmptyError();
    function lastValueFrom2(source, config) {
      var hasConfig = typeof config === "object";
      return new Promise(function(resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
          next: function(value) {
            _value = value;
            _hasValue = true;
          },
          error: reject,
          complete: function() {
            if (_hasValue) {
              resolve(_value);
            } else if (hasConfig) {
              resolve(config.defaultValue);
            } else {
              reject(new EmptyError_1.EmptyError());
            }
          }
        });
      });
    }
    exports.lastValueFrom = lastValueFrom2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/firstValueFrom.js
var require_firstValueFrom = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/firstValueFrom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.firstValueFrom = void 0;
    var EmptyError_1 = require_EmptyError();
    var Subscriber_1 = require_Subscriber();
    function firstValueFrom2(source, config) {
      var hasConfig = typeof config === "object";
      return new Promise(function(resolve, reject) {
        var subscriber = new Subscriber_1.SafeSubscriber({
          next: function(value) {
            resolve(value);
            subscriber.unsubscribe();
          },
          error: reject,
          complete: function() {
            if (hasConfig) {
              resolve(config.defaultValue);
            } else {
              reject(new EmptyError_1.EmptyError());
            }
          }
        });
        source.subscribe(subscriber);
      });
    }
    exports.firstValueFrom = firstValueFrom2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js
var require_ArgumentOutOfRangeError = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ArgumentOutOfRangeError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.ArgumentOutOfRangeError = createErrorClass_1.createErrorClass(function(_super) {
      return function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = "ArgumentOutOfRangeError";
        this.message = "argument out of range";
      };
    });
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js
var require_NotFoundError = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NotFoundError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.NotFoundError = createErrorClass_1.createErrorClass(function(_super) {
      return function NotFoundErrorImpl(message) {
        _super(this);
        this.name = "NotFoundError";
        this.message = message;
      };
    });
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/SequenceError.js
var require_SequenceError = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/SequenceError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SequenceError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.SequenceError = createErrorClass_1.createErrorClass(function(_super) {
      return function SequenceErrorImpl(message) {
        _super(this);
        this.name = "SequenceError";
        this.message = message;
      };
    });
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isDate.js
var require_isDate = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/isDate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isValidDate = void 0;
    function isValidDate(value) {
      return value instanceof Date && !isNaN(value);
    }
    exports.isValidDate = isValidDate;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/timeout.js
var require_timeout = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/timeout.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timeout = exports.TimeoutError = void 0;
    var async_1 = require_async();
    var isDate_1 = require_isDate();
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var createErrorClass_1 = require_createErrorClass();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var executeSchedule_1 = require_executeSchedule();
    exports.TimeoutError = createErrorClass_1.createErrorClass(function(_super) {
      return function TimeoutErrorImpl(info) {
        if (info === void 0) {
          info = null;
        }
        _super(this);
        this.message = "Timeout has occurred";
        this.name = "TimeoutError";
        this.info = info;
      };
    });
    function timeout(config, schedulerArg) {
      var _a2 = isDate_1.isValidDate(config) ? { first: config } : typeof config === "number" ? { each: config } : config, first = _a2.first, each = _a2.each, _b = _a2.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a2.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : async_1.asyncScheduler : _c, _d = _a2.meta, meta = _d === void 0 ? null : _d;
      if (first == null && each == null) {
        throw new TypeError("No timeout provided.");
      }
      return lift_1.operate(function(source, subscriber) {
        var originalSourceSubscription;
        var timerSubscription;
        var lastValue = null;
        var seen = 0;
        var startTimer = function(delay) {
          timerSubscription = executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            try {
              originalSourceSubscription.unsubscribe();
              innerFrom_1.innerFrom(_with({
                meta,
                lastValue,
                seen
              })).subscribe(subscriber);
            } catch (err) {
              subscriber.error(err);
            }
          }, delay);
        };
        originalSourceSubscription = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
          seen++;
          subscriber.next(lastValue = value);
          each > 0 && startTimer(each);
        }, void 0, void 0, function() {
          if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
            timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
          }
          lastValue = null;
        }));
        !seen && startTimer(first != null ? typeof first === "number" ? first : +first - scheduler.now() : each);
      });
    }
    exports.timeout = timeout;
    function timeoutErrorFactory(info) {
      throw new exports.TimeoutError(info);
    }
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/map.js
var require_map = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/map.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.map = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function map2(project, thisArg) {
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          subscriber.next(project.call(thisArg, value, index++));
        }));
      });
    }
    exports.map = map2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js
var require_mapOneOrManyArgs = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapOneOrManyArgs = void 0;
    var map_1 = require_map();
    var isArray = Array.isArray;
    function callOrApply(fn, args) {
      return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
    }
    function mapOneOrManyArgs(fn) {
      return map_1.map(function(args) {
        return callOrApply(fn, args);
      });
    }
    exports.mapOneOrManyArgs = mapOneOrManyArgs;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js
var require_bindCallbackInternals = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bindCallbackInternals = void 0;
    var isScheduler_1 = require_isScheduler();
    var Observable_1 = require_Observable();
    var subscribeOn_1 = require_subscribeOn();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var observeOn_1 = require_observeOn();
    var AsyncSubject_1 = require_AsyncSubject();
    function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
      if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
          scheduler = resultSelector;
        } else {
          return function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
          };
        }
      }
      if (scheduler) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
        };
      }
      return function() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var subject = new AsyncSubject_1.AsyncSubject();
        var uninitialized = true;
        return new Observable_1.Observable(function(subscriber) {
          var subs = subject.subscribe(subscriber);
          if (uninitialized) {
            uninitialized = false;
            var isAsync_1 = false;
            var isComplete_1 = false;
            callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [
              function() {
                var results = [];
                for (var _i2 = 0; _i2 < arguments.length; _i2++) {
                  results[_i2] = arguments[_i2];
                }
                if (isNodeStyle) {
                  var err = results.shift();
                  if (err != null) {
                    subject.error(err);
                    return;
                  }
                }
                subject.next(1 < results.length ? results : results[0]);
                isComplete_1 = true;
                if (isAsync_1) {
                  subject.complete();
                }
              }
            ]));
            if (isComplete_1) {
              subject.complete();
            }
            isAsync_1 = true;
          }
          return subs;
        });
      };
    }
    exports.bindCallbackInternals = bindCallbackInternals;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js
var require_bindCallback = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bindCallback = void 0;
    var bindCallbackInternals_1 = require_bindCallbackInternals();
    function bindCallback(callbackFunc, resultSelector, scheduler) {
      return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
    }
    exports.bindCallback = bindCallback;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js
var require_bindNodeCallback = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bindNodeCallback = void 0;
    var bindCallbackInternals_1 = require_bindCallbackInternals();
    function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
      return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
    }
    exports.bindNodeCallback = bindNodeCallback;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js
var require_argsArgArrayOrObject = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.argsArgArrayOrObject = void 0;
    var isArray = Array.isArray;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectProto = Object.prototype;
    var getKeys = Object.keys;
    function argsArgArrayOrObject(args) {
      if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) {
          return { args: first_1, keys: null };
        }
        if (isPOJO(first_1)) {
          var keys = getKeys(first_1);
          return {
            args: keys.map(function(key) {
              return first_1[key];
            }),
            keys
          };
        }
      }
      return { args, keys: null };
    }
    exports.argsArgArrayOrObject = argsArgArrayOrObject;
    function isPOJO(obj) {
      return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
    }
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/createObject.js
var require_createObject = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/createObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createObject = void 0;
    function createObject(keys, values) {
      return keys.reduce(function(result, key, i) {
        return result[key] = values[i], result;
      }, {});
    }
    exports.createObject = createObject;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js
var require_combineLatest = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.combineLatestInit = exports.combineLatest = void 0;
    var Observable_1 = require_Observable();
    var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
    var from_1 = require_from();
    var identity_1 = require_identity();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var args_1 = require_args();
    var createObject_1 = require_createObject();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var executeSchedule_1 = require_executeSchedule();
    function combineLatest() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      var resultSelector = args_1.popResultSelector(args);
      var _a2 = argsArgArrayOrObject_1.argsArgArrayOrObject(args), observables = _a2.args, keys = _a2.keys;
      if (observables.length === 0) {
        return from_1.from([], scheduler);
      }
      var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
        return createObject_1.createObject(keys, values);
      } : identity_1.identity));
      return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
    }
    exports.combineLatest = combineLatest;
    function combineLatestInit(observables, scheduler, valueTransform) {
      if (valueTransform === void 0) {
        valueTransform = identity_1.identity;
      }
      return function(subscriber) {
        maybeSchedule(scheduler, function() {
          var length = observables.length;
          var values = new Array(length);
          var active = length;
          var remainingFirstValues = length;
          var _loop_1 = function(i2) {
            maybeSchedule(scheduler, function() {
              var source = from_1.from(observables[i2], scheduler);
              var hasFirstValue = false;
              source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                values[i2] = value;
                if (!hasFirstValue) {
                  hasFirstValue = true;
                  remainingFirstValues--;
                }
                if (!remainingFirstValues) {
                  subscriber.next(valueTransform(values.slice()));
                }
              }, function() {
                if (!--active) {
                  subscriber.complete();
                }
              }));
            }, subscriber);
          };
          for (var i = 0; i < length; i++) {
            _loop_1(i);
          }
        }, subscriber);
      };
    }
    exports.combineLatestInit = combineLatestInit;
    function maybeSchedule(scheduler, execute, subscription) {
      if (scheduler) {
        executeSchedule_1.executeSchedule(subscription, scheduler, execute);
      } else {
        execute();
      }
    }
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js
var require_mergeInternals = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeInternals = void 0;
    var innerFrom_1 = require_innerFrom();
    var executeSchedule_1 = require_executeSchedule();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
      var buffer = [];
      var active = 0;
      var index = 0;
      var isComplete = false;
      var checkComplete = function() {
        if (isComplete && !buffer.length && !active) {
          subscriber.complete();
        }
      };
      var outerNext = function(value) {
        return active < concurrent ? doInnerSub(value) : buffer.push(value);
      };
      var doInnerSub = function(value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom_1.innerFrom(project(value, index++)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
          onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
          if (expand) {
            outerNext(innerValue);
          } else {
            subscriber.next(innerValue);
          }
        }, function() {
          innerComplete = true;
        }, void 0, function() {
          if (innerComplete) {
            try {
              active--;
              var _loop_1 = function() {
                var bufferedValue = buffer.shift();
                if (innerSubScheduler) {
                  executeSchedule_1.executeSchedule(subscriber, innerSubScheduler, function() {
                    return doInnerSub(bufferedValue);
                  });
                } else {
                  doInnerSub(bufferedValue);
                }
              };
              while (buffer.length && active < concurrent) {
                _loop_1();
              }
              checkComplete();
            } catch (err) {
              subscriber.error(err);
            }
          }
        }));
      };
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, outerNext, function() {
        isComplete = true;
        checkComplete();
      }));
      return function() {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
      };
    }
    exports.mergeInternals = mergeInternals;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js
var require_mergeMap = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeMap = void 0;
    var map_1 = require_map();
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var mergeInternals_1 = require_mergeInternals();
    var isFunction_1 = require_isFunction();
    function mergeMap(project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap(function(a, i) {
          return map_1.map(function(b, ii) {
            return resultSelector(a, b, i, ii);
          })(innerFrom_1.innerFrom(project(a, i)));
        }, concurrent);
      } else if (typeof resultSelector === "number") {
        concurrent = resultSelector;
      }
      return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent);
      });
    }
    exports.mergeMap = mergeMap;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js
var require_mergeAll = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeAll = void 0;
    var mergeMap_1 = require_mergeMap();
    var identity_1 = require_identity();
    function mergeAll(concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      return mergeMap_1.mergeMap(identity_1.identity, concurrent);
    }
    exports.mergeAll = mergeAll;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/concatAll.js
var require_concatAll = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/concatAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concatAll = void 0;
    var mergeAll_1 = require_mergeAll();
    function concatAll() {
      return mergeAll_1.mergeAll(1);
    }
    exports.concatAll = concatAll;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/concat.js
var require_concat = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/concat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concat = void 0;
    var concatAll_1 = require_concatAll();
    var args_1 = require_args();
    var from_1 = require_from();
    function concat() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return concatAll_1.concatAll()(from_1.from(args, args_1.popScheduler(args)));
    }
    exports.concat = concat;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/defer.js
var require_defer = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/defer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defer = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    function defer(observableFactory) {
      return new Observable_1.Observable(function(subscriber) {
        innerFrom_1.innerFrom(observableFactory()).subscribe(subscriber);
      });
    }
    exports.defer = defer;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/connectable.js
var require_connectable = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/connectable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.connectable = void 0;
    var Subject_1 = require_Subject();
    var Observable_1 = require_Observable();
    var defer_1 = require_defer();
    var DEFAULT_CONFIG = {
      connector: function() {
        return new Subject_1.Subject();
      },
      resetOnDisconnect: true
    };
    function connectable(source, config) {
      if (config === void 0) {
        config = DEFAULT_CONFIG;
      }
      var connection = null;
      var connector = config.connector, _a2 = config.resetOnDisconnect, resetOnDisconnect = _a2 === void 0 ? true : _a2;
      var subject = connector();
      var result = new Observable_1.Observable(function(subscriber) {
        return subject.subscribe(subscriber);
      });
      result.connect = function() {
        if (!connection || connection.closed) {
          connection = defer_1.defer(function() {
            return source;
          }).subscribe(subject);
          if (resetOnDisconnect) {
            connection.add(function() {
              return subject = connector();
            });
          }
        }
        return connection;
      };
      return result;
    }
    exports.connectable = connectable;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js
var require_forkJoin = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.forkJoin = void 0;
    var Observable_1 = require_Observable();
    var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
    var innerFrom_1 = require_innerFrom();
    var args_1 = require_args();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var createObject_1 = require_createObject();
    function forkJoin() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resultSelector = args_1.popResultSelector(args);
      var _a2 = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a2.args, keys = _a2.keys;
      var result = new Observable_1.Observable(function(subscriber) {
        var length = sources.length;
        if (!length) {
          subscriber.complete();
          return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function(sourceIndex2) {
          var hasValue = false;
          innerFrom_1.innerFrom(sources[sourceIndex2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (!hasValue) {
              hasValue = true;
              remainingEmissions--;
            }
            values[sourceIndex2] = value;
          }, function() {
            return remainingCompletions--;
          }, void 0, function() {
            if (!remainingCompletions || !hasValue) {
              if (!remainingEmissions) {
                subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
              }
              subscriber.complete();
            }
          }));
        };
        for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
          _loop_1(sourceIndex);
        }
      });
      return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
    }
    exports.forkJoin = forkJoin;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js
var require_fromEvent = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromEvent = void 0;
    var innerFrom_1 = require_innerFrom();
    var Observable_1 = require_Observable();
    var mergeMap_1 = require_mergeMap();
    var isArrayLike_1 = require_isArrayLike();
    var isFunction_1 = require_isFunction();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var nodeEventEmitterMethods = ["addListener", "removeListener"];
    var eventTargetMethods = ["addEventListener", "removeEventListener"];
    var jqueryMethods = ["on", "off"];
    function fromEvent(target, eventName, options, resultSelector) {
      if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = void 0;
      }
      if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
      }
      var _a2 = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
        return function(handler) {
          return target[methodName](eventName, handler, options);
        };
      }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a2[0], remove = _a2[1];
      if (!add) {
        if (isArrayLike_1.isArrayLike(target)) {
          return mergeMap_1.mergeMap(function(subTarget) {
            return fromEvent(subTarget, eventName, options);
          })(innerFrom_1.innerFrom(target));
        }
      }
      if (!add) {
        throw new TypeError("Invalid event target");
      }
      return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function() {
          return remove(handler);
        };
      });
    }
    exports.fromEvent = fromEvent;
    function toCommonHandlerRegistry(target, eventName) {
      return function(methodName) {
        return function(handler) {
          return target[methodName](eventName, handler);
        };
      };
    }
    function isNodeStyleEventEmitter(target) {
      return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
    }
    function isJQueryStyleEventEmitter(target) {
      return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
    }
    function isEventTarget(target) {
      return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
    }
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js
var require_fromEventPattern = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromEventPattern = void 0;
    var Observable_1 = require_Observable();
    var isFunction_1 = require_isFunction();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    function fromEventPattern(addHandler, removeHandler, resultSelector) {
      if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
      }
      return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
          var e = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
          }
          return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue = addHandler(handler);
        return isFunction_1.isFunction(removeHandler) ? function() {
          return removeHandler(handler, retValue);
        } : void 0;
      });
    }
    exports.fromEventPattern = fromEventPattern;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/generate.js
var require_generate = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/generate.js"(exports) {
    "use strict";
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generate = void 0;
    var identity_1 = require_identity();
    var isScheduler_1 = require_isScheduler();
    var defer_1 = require_defer();
    var scheduleIterable_1 = require_scheduleIterable();
    function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
      var _a2, _b;
      var resultSelector;
      var initialState;
      if (arguments.length === 1) {
        _a2 = initialStateOrOptions, initialState = _a2.initialState, condition = _a2.condition, iterate = _a2.iterate, _b = _a2.resultSelector, resultSelector = _b === void 0 ? identity_1.identity : _b, scheduler = _a2.scheduler;
      } else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
          resultSelector = identity_1.identity;
          scheduler = resultSelectorOrScheduler;
        } else {
          resultSelector = resultSelectorOrScheduler;
        }
      }
      function gen() {
        var state;
        return __generator(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              state = initialState;
              _a3.label = 1;
            case 1:
              if (!(!condition || condition(state)))
                return [3, 4];
              return [4, resultSelector(state)];
            case 2:
              _a3.sent();
              _a3.label = 3;
            case 3:
              state = iterate(state);
              return [3, 1];
            case 4:
              return [2];
          }
        });
      }
      return defer_1.defer(scheduler ? function() {
        return scheduleIterable_1.scheduleIterable(gen(), scheduler);
      } : gen);
    }
    exports.generate = generate;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/iif.js
var require_iif = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/iif.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.iif = void 0;
    var defer_1 = require_defer();
    function iif(condition, trueResult, falseResult) {
      return defer_1.defer(function() {
        return condition() ? trueResult : falseResult;
      });
    }
    exports.iif = iif;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/timer.js
var require_timer = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/timer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timer = void 0;
    var Observable_1 = require_Observable();
    var async_1 = require_async();
    var isScheduler_1 = require_isScheduler();
    var isDate_1 = require_isDate();
    function timer(dueTime, intervalOrScheduler, scheduler) {
      if (dueTime === void 0) {
        dueTime = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      var intervalDuration = -1;
      if (intervalOrScheduler != null) {
        if (isScheduler_1.isScheduler(intervalOrScheduler)) {
          scheduler = intervalOrScheduler;
        } else {
          intervalDuration = intervalOrScheduler;
        }
      }
      return new Observable_1.Observable(function(subscriber) {
        var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
          due = 0;
        }
        var n = 0;
        return scheduler.schedule(function() {
          if (!subscriber.closed) {
            subscriber.next(n++);
            if (0 <= intervalDuration) {
              this.schedule(void 0, intervalDuration);
            } else {
              subscriber.complete();
            }
          }
        }, due);
      });
    }
    exports.timer = timer;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/interval.js
var require_interval = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/interval.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.interval = void 0;
    var async_1 = require_async();
    var timer_1 = require_timer();
    function interval(period, scheduler) {
      if (period === void 0) {
        period = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      if (period < 0) {
        period = 0;
      }
      return timer_1.timer(period, period, scheduler);
    }
    exports.interval = interval;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/merge.js
var require_merge = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/merge.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = void 0;
    var mergeAll_1 = require_mergeAll();
    var innerFrom_1 = require_innerFrom();
    var empty_1 = require_empty();
    var args_1 = require_args();
    var from_1 = require_from();
    function merge() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      var concurrent = args_1.popNumber(args, Infinity);
      var sources = args;
      return !sources.length ? empty_1.EMPTY : sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : mergeAll_1.mergeAll(concurrent)(from_1.from(sources, scheduler));
    }
    exports.merge = merge;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/never.js
var require_never = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/never.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.never = exports.NEVER = void 0;
    var Observable_1 = require_Observable();
    var noop_1 = require_noop();
    exports.NEVER = new Observable_1.Observable(noop_1.noop);
    function never() {
      return exports.NEVER;
    }
    exports.never = never;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js
var require_argsOrArgArray = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.argsOrArgArray = void 0;
    var isArray = Array.isArray;
    function argsOrArgArray(args) {
      return args.length === 1 && isArray(args[0]) ? args[0] : args;
    }
    exports.argsOrArgArray = argsOrArgArray;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js
var require_onErrorResumeNext = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onErrorResumeNext = void 0;
    var Observable_1 = require_Observable();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var innerFrom_1 = require_innerFrom();
    function onErrorResumeNext() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
      return new Observable_1.Observable(function(subscriber) {
        var sourceIndex = 0;
        var subscribeNext = function() {
          if (sourceIndex < nextSources.length) {
            var nextSource = void 0;
            try {
              nextSource = innerFrom_1.innerFrom(nextSources[sourceIndex++]);
            } catch (err) {
              subscribeNext();
              return;
            }
            var innerSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, void 0, noop_1.noop, noop_1.noop);
            nextSource.subscribe(innerSubscriber);
            innerSubscriber.add(subscribeNext);
          } else {
            subscriber.complete();
          }
        };
        subscribeNext();
      });
    }
    exports.onErrorResumeNext = onErrorResumeNext;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/pairs.js
var require_pairs = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/pairs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pairs = void 0;
    var from_1 = require_from();
    function pairs(obj, scheduler) {
      return from_1.from(Object.entries(obj), scheduler);
    }
    exports.pairs = pairs;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/not.js
var require_not = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/util/not.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.not = void 0;
    function not(pred, thisArg) {
      return function(value, index) {
        return !pred.call(thisArg, value, index);
      };
    }
    exports.not = not;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/filter.js
var require_filter = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/filter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.filter = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function filter2(predicate, thisArg) {
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return predicate.call(thisArg, value, index++) && subscriber.next(value);
        }));
      });
    }
    exports.filter = filter2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/partition.js
var require_partition = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/partition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.partition = void 0;
    var not_1 = require_not();
    var filter_1 = require_filter();
    var innerFrom_1 = require_innerFrom();
    function partition(source, predicate, thisArg) {
      return [filter_1.filter(predicate, thisArg)(innerFrom_1.innerFrom(source)), filter_1.filter(not_1.not(predicate, thisArg))(innerFrom_1.innerFrom(source))];
    }
    exports.partition = partition;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/race.js
var require_race = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/race.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.raceInit = exports.race = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function race() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      sources = argsOrArgArray_1.argsOrArgArray(sources);
      return sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
    }
    exports.race = race;
    function raceInit(sources) {
      return function(subscriber) {
        var subscriptions = [];
        var _loop_1 = function(i2) {
          subscriptions.push(innerFrom_1.innerFrom(sources[i2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (subscriptions) {
              for (var s = 0; s < subscriptions.length; s++) {
                s !== i2 && subscriptions[s].unsubscribe();
              }
              subscriptions = null;
            }
            subscriber.next(value);
          })));
        };
        for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
          _loop_1(i);
        }
      };
    }
    exports.raceInit = raceInit;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/range.js
var require_range = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/range.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.range = void 0;
    var Observable_1 = require_Observable();
    var empty_1 = require_empty();
    function range(start, count, scheduler) {
      if (count == null) {
        count = start;
        start = 0;
      }
      if (count <= 0) {
        return empty_1.EMPTY;
      }
      var end = count + start;
      return new Observable_1.Observable(scheduler ? function(subscriber) {
        var n = start;
        return scheduler.schedule(function() {
          if (n < end) {
            subscriber.next(n++);
            this.schedule();
          } else {
            subscriber.complete();
          }
        });
      } : function(subscriber) {
        var n = start;
        while (n < end && !subscriber.closed) {
          subscriber.next(n++);
        }
        subscriber.complete();
      });
    }
    exports.range = range;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/using.js
var require_using = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/using.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.using = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var empty_1 = require_empty();
    function using(resourceFactory, observableFactory) {
      return new Observable_1.Observable(function(subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? innerFrom_1.innerFrom(result) : empty_1.EMPTY;
        source.subscribe(subscriber);
        return function() {
          if (resource) {
            resource.unsubscribe();
          }
        };
      });
    }
    exports.using = using;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/zip.js
var require_zip = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/zip.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.zip = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var empty_1 = require_empty();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var args_1 = require_args();
    function zip() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resultSelector = args_1.popResultSelector(args);
      var sources = argsOrArgArray_1.argsOrArgArray(args);
      return sources.length ? new Observable_1.Observable(function(subscriber) {
        var buffers = sources.map(function() {
          return [];
        });
        var completed = sources.map(function() {
          return false;
        });
        subscriber.add(function() {
          buffers = completed = null;
        });
        var _loop_1 = function(sourceIndex2) {
          innerFrom_1.innerFrom(sources[sourceIndex2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            buffers[sourceIndex2].push(value);
            if (buffers.every(function(buffer) {
              return buffer.length;
            })) {
              var result = buffers.map(function(buffer) {
                return buffer.shift();
              });
              subscriber.next(resultSelector ? resultSelector.apply(void 0, __spreadArray([], __read(result))) : result);
              if (buffers.some(function(buffer, i) {
                return !buffer.length && completed[i];
              })) {
                subscriber.complete();
              }
            }
          }, function() {
            completed[sourceIndex2] = true;
            !buffers[sourceIndex2].length && subscriber.complete();
          }));
        };
        for (var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
          _loop_1(sourceIndex);
        }
        return function() {
          buffers = completed = null;
        };
      }) : empty_1.EMPTY;
    }
    exports.zip = zip;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/types.js
var require_types = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/audit.js
var require_audit = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/audit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.audit = void 0;
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function audit(durationSelector) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = function() {
          durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
          durationSubscriber = null;
          if (hasValue) {
            hasValue = false;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
          isComplete && subscriber.complete();
        };
        var cleanupDuration = function() {
          durationSubscriber = null;
          isComplete && subscriber.complete();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          lastValue = value;
          if (!durationSubscriber) {
            innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, endDuration, cleanupDuration));
          }
        }, function() {
          isComplete = true;
          (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
      });
    }
    exports.audit = audit;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/auditTime.js
var require_auditTime = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/auditTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.auditTime = void 0;
    var async_1 = require_async();
    var audit_1 = require_audit();
    var timer_1 = require_timer();
    function auditTime(duration, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return audit_1.audit(function() {
        return timer_1.timer(duration, scheduler);
      });
    }
    exports.auditTime = auditTime;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/buffer.js
var require_buffer = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/buffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buffer = void 0;
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function buffer(closingNotifier) {
      return lift_1.operate(function(source, subscriber) {
        var currentBuffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return currentBuffer.push(value);
        }, function() {
          subscriber.next(currentBuffer);
          subscriber.complete();
        }));
        innerFrom_1.innerFrom(closingNotifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          var b = currentBuffer;
          currentBuffer = [];
          subscriber.next(b);
        }, noop_1.noop));
        return function() {
          currentBuffer = null;
        };
      });
    }
    exports.buffer = buffer;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js
var require_bufferCount = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bufferCount = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var arrRemove_1 = require_arrRemove();
    function bufferCount(bufferSize, startBufferEvery) {
      if (startBufferEvery === void 0) {
        startBufferEvery = null;
      }
      startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
      return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        var count = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a2, e_2, _b;
          var toEmit = null;
          if (count++ % startBufferEvery === 0) {
            buffers.push([]);
          }
          try {
            for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
              var buffer = buffers_1_1.value;
              buffer.push(value);
              if (bufferSize <= buffer.length) {
                toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                toEmit.push(buffer);
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (buffers_1_1 && !buffers_1_1.done && (_a2 = buffers_1.return))
                _a2.call(buffers_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          if (toEmit) {
            try {
              for (var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()) {
                var buffer = toEmit_1_1.value;
                arrRemove_1.arrRemove(buffers, buffer);
                subscriber.next(buffer);
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return))
                  _b.call(toEmit_1);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
          }
        }, function() {
          var e_3, _a2;
          try {
            for (var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()) {
              var buffer = buffers_2_1.value;
              subscriber.next(buffer);
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (buffers_2_1 && !buffers_2_1.done && (_a2 = buffers_2.return))
                _a2.call(buffers_2);
            } finally {
              if (e_3)
                throw e_3.error;
            }
          }
          subscriber.complete();
        }, void 0, function() {
          buffers = null;
        }));
      });
    }
    exports.bufferCount = bufferCount;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js
var require_bufferTime = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bufferTime = void 0;
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var arrRemove_1 = require_arrRemove();
    var async_1 = require_async();
    var args_1 = require_args();
    var executeSchedule_1 = require_executeSchedule();
    function bufferTime(bufferTimeSpan) {
      var _a2, _b;
      var otherArgs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
      }
      var scheduler = (_a2 = args_1.popScheduler(otherArgs)) !== null && _a2 !== void 0 ? _a2 : async_1.asyncScheduler;
      var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
      var maxBufferSize = otherArgs[1] || Infinity;
      return lift_1.operate(function(source, subscriber) {
        var bufferRecords = [];
        var restartOnEmit = false;
        var emit = function(record) {
          var buffer = record.buffer, subs = record.subs;
          subs.unsubscribe();
          arrRemove_1.arrRemove(bufferRecords, record);
          subscriber.next(buffer);
          restartOnEmit && startBuffer();
        };
        var startBuffer = function() {
          if (bufferRecords) {
            var subs = new Subscription_1.Subscription();
            subscriber.add(subs);
            var buffer = [];
            var record_1 = {
              buffer,
              subs
            };
            bufferRecords.push(record_1);
            executeSchedule_1.executeSchedule(subs, scheduler, function() {
              return emit(record_1);
            }, bufferTimeSpan);
          }
        };
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
          executeSchedule_1.executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
        } else {
          restartOnEmit = true;
        }
        startBuffer();
        var bufferTimeSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a3;
          var recordsCopy = bufferRecords.slice();
          try {
            for (var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
              var record = recordsCopy_1_1.value;
              var buffer = record.buffer;
              buffer.push(value);
              maxBufferSize <= buffer.length && emit(record);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a3 = recordsCopy_1.return))
                _a3.call(recordsCopy_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }, function() {
          while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) {
            subscriber.next(bufferRecords.shift().buffer);
          }
          bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
          subscriber.complete();
          subscriber.unsubscribe();
        }, void 0, function() {
          return bufferRecords = null;
        });
        source.subscribe(bufferTimeSubscriber);
      });
    }
    exports.bufferTime = bufferTime;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js
var require_bufferToggle = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bufferToggle = void 0;
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var arrRemove_1 = require_arrRemove();
    function bufferToggle(openings, closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
          var buffer = [];
          buffers.push(buffer);
          var closingSubscription = new Subscription_1.Subscription();
          var emitBuffer = function() {
            arrRemove_1.arrRemove(buffers, buffer);
            subscriber.next(buffer);
            closingSubscription.unsubscribe();
          };
          closingSubscription.add(innerFrom_1.innerFrom(closingSelector(openValue)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a2;
          try {
            for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
              var buffer = buffers_1_1.value;
              buffer.push(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (buffers_1_1 && !buffers_1_1.done && (_a2 = buffers_1.return))
                _a2.call(buffers_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }, function() {
          while (buffers.length > 0) {
            subscriber.next(buffers.shift());
          }
          subscriber.complete();
        }));
      });
    }
    exports.bufferToggle = bufferToggle;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js
var require_bufferWhen = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bufferWhen = void 0;
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function bufferWhen(closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var buffer = null;
        var closingSubscriber = null;
        var openBuffer = function() {
          closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
          var b = buffer;
          buffer = [];
          b && subscriber.next(b);
          innerFrom_1.innerFrom(closingSelector()).subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openBuffer, noop_1.noop));
        };
        openBuffer();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return buffer === null || buffer === void 0 ? void 0 : buffer.push(value);
        }, function() {
          buffer && subscriber.next(buffer);
          subscriber.complete();
        }, void 0, function() {
          return buffer = closingSubscriber = null;
        }));
      });
    }
    exports.bufferWhen = bufferWhen;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/catchError.js
var require_catchError = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/catchError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.catchError = void 0;
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var lift_1 = require_lift();
    function catchError2(selector) {
      return lift_1.operate(function(source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
          handledResult = innerFrom_1.innerFrom(selector(err, catchError2(selector)(source)));
          if (innerSub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
          } else {
            syncUnsub = true;
          }
        }));
        if (syncUnsub) {
          innerSub.unsubscribe();
          innerSub = null;
          handledResult.subscribe(subscriber);
        }
      });
    }
    exports.catchError = catchError2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js
var require_scanInternals = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scanInternals = void 0;
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
      return function(source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var i = index++;
          state = hasState ? accumulator(state, value, i) : (hasState = true, value);
          emitOnNext && subscriber.next(state);
        }, emitBeforeComplete && function() {
          hasState && subscriber.next(state);
          subscriber.complete();
        }));
      };
    }
    exports.scanInternals = scanInternals;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/reduce.js
var require_reduce = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/reduce.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reduce = void 0;
    var scanInternals_1 = require_scanInternals();
    var lift_1 = require_lift();
    function reduce(accumulator, seed) {
      return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
    }
    exports.reduce = reduce;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/toArray.js
var require_toArray = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/toArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toArray = void 0;
    var reduce_1 = require_reduce();
    var lift_1 = require_lift();
    var arrReducer = function(arr, value) {
      return arr.push(value), arr;
    };
    function toArray() {
      return lift_1.operate(function(source, subscriber) {
        reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
      });
    }
    exports.toArray = toArray;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js
var require_joinAllInternals = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinAllInternals = void 0;
    var identity_1 = require_identity();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var pipe_1 = require_pipe();
    var mergeMap_1 = require_mergeMap();
    var toArray_1 = require_toArray();
    function joinAllInternals(joinFn, project) {
      return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function(sources) {
        return joinFn(sources);
      }), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
    }
    exports.joinAllInternals = joinAllInternals;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js
var require_combineLatestAll = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.combineLatestAll = void 0;
    var combineLatest_1 = require_combineLatest();
    var joinAllInternals_1 = require_joinAllInternals();
    function combineLatestAll(project) {
      return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
    }
    exports.combineLatestAll = combineLatestAll;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/combineAll.js
var require_combineAll = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/combineAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.combineAll = void 0;
    var combineLatestAll_1 = require_combineLatestAll();
    exports.combineAll = combineLatestAll_1.combineLatestAll;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js
var require_combineLatest2 = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.combineLatest = void 0;
    var combineLatest_1 = require_combineLatest();
    var lift_1 = require_lift();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var pipe_1 = require_pipe();
    var args_1 = require_args();
    function combineLatest() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resultSelector = args_1.popResultSelector(args);
      return resultSelector ? pipe_1.pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : lift_1.operate(function(source, subscriber) {
        combineLatest_1.combineLatestInit(__spreadArray([source], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
      });
    }
    exports.combineLatest = combineLatest;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js
var require_combineLatestWith = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.combineLatestWith = void 0;
    var combineLatest_1 = require_combineLatest2();
    function combineLatestWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return combineLatest_1.combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
    }
    exports.combineLatestWith = combineLatestWith;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/concatMap.js
var require_concatMap = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/concatMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concatMap = void 0;
    var mergeMap_1 = require_mergeMap();
    var isFunction_1 = require_isFunction();
    function concatMap(project, resultSelector) {
      return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
    }
    exports.concatMap = concatMap;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js
var require_concatMapTo = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concatMapTo = void 0;
    var concatMap_1 = require_concatMap();
    var isFunction_1 = require_isFunction();
    function concatMapTo(innerObservable, resultSelector) {
      return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function() {
        return innerObservable;
      }, resultSelector) : concatMap_1.concatMap(function() {
        return innerObservable;
      });
    }
    exports.concatMapTo = concatMapTo;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/concat.js
var require_concat2 = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/concat.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concat = void 0;
    var lift_1 = require_lift();
    var concatAll_1 = require_concatAll();
    var args_1 = require_args();
    var from_1 = require_from();
    function concat() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      return lift_1.operate(function(source, subscriber) {
        concatAll_1.concatAll()(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
      });
    }
    exports.concat = concat;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/concatWith.js
var require_concatWith = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/concatWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concatWith = void 0;
    var concat_1 = require_concat2();
    function concatWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return concat_1.concat.apply(void 0, __spreadArray([], __read(otherSources)));
    }
    exports.concatWith = concatWith;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js
var require_fromSubscribable = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromSubscribable = void 0;
    var Observable_1 = require_Observable();
    function fromSubscribable(subscribable) {
      return new Observable_1.Observable(function(subscriber) {
        return subscribable.subscribe(subscriber);
      });
    }
    exports.fromSubscribable = fromSubscribable;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/connect.js
var require_connect = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/connect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.connect = void 0;
    var Subject_1 = require_Subject();
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var fromSubscribable_1 = require_fromSubscribable();
    var DEFAULT_CONFIG = {
      connector: function() {
        return new Subject_1.Subject();
      }
    };
    function connect(selector, config) {
      if (config === void 0) {
        config = DEFAULT_CONFIG;
      }
      var connector = config.connector;
      return lift_1.operate(function(source, subscriber) {
        var subject = connector();
        innerFrom_1.innerFrom(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
      });
    }
    exports.connect = connect;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/count.js
var require_count = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/count.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.count = void 0;
    var reduce_1 = require_reduce();
    function count(predicate) {
      return reduce_1.reduce(function(total, value, i) {
        return !predicate || predicate(value, i) ? total + 1 : total;
      }, 0);
    }
    exports.count = count;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/debounce.js
var require_debounce = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/debounce.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.debounce = void 0;
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function debounce(durationSelector) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = function() {
          durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
          durationSubscriber = null;
          if (hasValue) {
            hasValue = false;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
          hasValue = true;
          lastValue = value;
          durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, emit, noop_1.noop);
          innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
        }, function() {
          emit();
          subscriber.complete();
        }, void 0, function() {
          lastValue = durationSubscriber = null;
        }));
      });
    }
    exports.debounce = debounce;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js
var require_debounceTime = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.debounceTime = void 0;
    var async_1 = require_async();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function debounceTime(dueTime, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return lift_1.operate(function(source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function() {
          if (activeTask) {
            activeTask.unsubscribe();
            activeTask = null;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
        };
        function emitWhenIdle() {
          var targetTime = lastTime + dueTime;
          var now = scheduler.now();
          if (now < targetTime) {
            activeTask = this.schedule(void 0, targetTime - now);
            subscriber.add(activeTask);
            return;
          }
          emit();
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          lastValue = value;
          lastTime = scheduler.now();
          if (!activeTask) {
            activeTask = scheduler.schedule(emitWhenIdle, dueTime);
            subscriber.add(activeTask);
          }
        }, function() {
          emit();
          subscriber.complete();
        }, void 0, function() {
          lastValue = activeTask = null;
        }));
      });
    }
    exports.debounceTime = debounceTime;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js
var require_defaultIfEmpty = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultIfEmpty = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function defaultIfEmpty(defaultValue) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          subscriber.next(value);
        }, function() {
          if (!hasValue) {
            subscriber.next(defaultValue);
          }
          subscriber.complete();
        }));
      });
    }
    exports.defaultIfEmpty = defaultIfEmpty;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/take.js
var require_take = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/take.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.take = void 0;
    var empty_1 = require_empty();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function take2(count) {
      return count <= 0 ? function() {
        return empty_1.EMPTY;
      } : lift_1.operate(function(source, subscriber) {
        var seen = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (++seen <= count) {
            subscriber.next(value);
            if (count <= seen) {
              subscriber.complete();
            }
          }
        }));
      });
    }
    exports.take = take2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js
var require_ignoreElements = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ignoreElements = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    function ignoreElements() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, noop_1.noop));
      });
    }
    exports.ignoreElements = ignoreElements;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mapTo.js
var require_mapTo = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mapTo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapTo = void 0;
    var map_1 = require_map();
    function mapTo(value) {
      return map_1.map(function() {
        return value;
      });
    }
    exports.mapTo = mapTo;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js
var require_delayWhen = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delayWhen = void 0;
    var concat_1 = require_concat();
    var take_1 = require_take();
    var ignoreElements_1 = require_ignoreElements();
    var mapTo_1 = require_mapTo();
    var mergeMap_1 = require_mergeMap();
    var innerFrom_1 = require_innerFrom();
    function delayWhen(delayDurationSelector, subscriptionDelay) {
      if (subscriptionDelay) {
        return function(source) {
          return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
        };
      }
      return mergeMap_1.mergeMap(function(value, index) {
        return innerFrom_1.innerFrom(delayDurationSelector(value, index)).pipe(take_1.take(1), mapTo_1.mapTo(value));
      });
    }
    exports.delayWhen = delayWhen;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/delay.js
var require_delay = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/delay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delay = void 0;
    var async_1 = require_async();
    var delayWhen_1 = require_delayWhen();
    var timer_1 = require_timer();
    function delay(due, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      var duration = timer_1.timer(due, scheduler);
      return delayWhen_1.delayWhen(function() {
        return duration;
      });
    }
    exports.delay = delay;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js
var require_dematerialize = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dematerialize = void 0;
    var Notification_1 = require_Notification();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function dematerialize() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(notification) {
          return Notification_1.observeNotification(notification, subscriber);
        }));
      });
    }
    exports.dematerialize = dematerialize;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/distinct.js
var require_distinct = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/distinct.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.distinct = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var innerFrom_1 = require_innerFrom();
    function distinct(keySelector, flushes) {
      return lift_1.operate(function(source, subscriber) {
        var distinctKeys = /* @__PURE__ */ new Set();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var key = keySelector ? keySelector(value) : value;
          if (!distinctKeys.has(key)) {
            distinctKeys.add(key);
            subscriber.next(value);
          }
        }));
        flushes && innerFrom_1.innerFrom(flushes).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          return distinctKeys.clear();
        }, noop_1.noop));
      });
    }
    exports.distinct = distinct;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js
var require_distinctUntilChanged = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.distinctUntilChanged = void 0;
    var identity_1 = require_identity();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function distinctUntilChanged2(comparator, keySelector) {
      if (keySelector === void 0) {
        keySelector = identity_1.identity;
      }
      comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
      return lift_1.operate(function(source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var currentKey = keySelector(value);
          if (first || !comparator(previousKey, currentKey)) {
            first = false;
            previousKey = currentKey;
            subscriber.next(value);
          }
        }));
      });
    }
    exports.distinctUntilChanged = distinctUntilChanged2;
    function defaultCompare(a, b) {
      return a === b;
    }
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js
var require_distinctUntilKeyChanged = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.distinctUntilKeyChanged = void 0;
    var distinctUntilChanged_1 = require_distinctUntilChanged();
    function distinctUntilKeyChanged(key, compare) {
      return distinctUntilChanged_1.distinctUntilChanged(function(x, y) {
        return compare ? compare(x[key], y[key]) : x[key] === y[key];
      });
    }
    exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js
var require_throwIfEmpty = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.throwIfEmpty = void 0;
    var EmptyError_1 = require_EmptyError();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function throwIfEmpty(errorFactory) {
      if (errorFactory === void 0) {
        errorFactory = defaultErrorFactory;
      }
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          subscriber.next(value);
        }, function() {
          return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
        }));
      });
    }
    exports.throwIfEmpty = throwIfEmpty;
    function defaultErrorFactory() {
      return new EmptyError_1.EmptyError();
    }
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/elementAt.js
var require_elementAt = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/elementAt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.elementAt = void 0;
    var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
    var filter_1 = require_filter();
    var throwIfEmpty_1 = require_throwIfEmpty();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var take_1 = require_take();
    function elementAt(index, defaultValue) {
      if (index < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
      }
      var hasDefaultValue = arguments.length >= 2;
      return function(source) {
        return source.pipe(filter_1.filter(function(v, i) {
          return i === index;
        }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
          return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
        }));
      };
    }
    exports.elementAt = elementAt;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/endWith.js
var require_endWith = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/endWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.endWith = void 0;
    var concat_1 = require_concat();
    var of_1 = require_of();
    function endWith() {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      return function(source) {
        return concat_1.concat(source, of_1.of.apply(void 0, __spreadArray([], __read(values))));
      };
    }
    exports.endWith = endWith;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/every.js
var require_every = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/every.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.every = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function every(predicate, thisArg) {
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (!predicate.call(thisArg, value, index++, source)) {
            subscriber.next(false);
            subscriber.complete();
          }
        }, function() {
          subscriber.next(true);
          subscriber.complete();
        }));
      });
    }
    exports.every = every;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js
var require_exhaustMap = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exhaustMap = void 0;
    var map_1 = require_map();
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function exhaustMap(project, resultSelector) {
      if (resultSelector) {
        return function(source) {
          return source.pipe(exhaustMap(function(a, i) {
            return innerFrom_1.innerFrom(project(a, i)).pipe(map_1.map(function(b, ii) {
              return resultSelector(a, b, i, ii);
            }));
          }));
        };
      }
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        var innerSub = null;
        var isComplete = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(outerValue) {
          if (!innerSub) {
            innerSub = OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
              innerSub = null;
              isComplete && subscriber.complete();
            });
            innerFrom_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
          }
        }, function() {
          isComplete = true;
          !innerSub && subscriber.complete();
        }));
      });
    }
    exports.exhaustMap = exhaustMap;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js
var require_exhaustAll = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exhaustAll = void 0;
    var exhaustMap_1 = require_exhaustMap();
    var identity_1 = require_identity();
    function exhaustAll() {
      return exhaustMap_1.exhaustMap(identity_1.identity);
    }
    exports.exhaustAll = exhaustAll;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/exhaust.js
var require_exhaust = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/exhaust.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exhaust = void 0;
    var exhaustAll_1 = require_exhaustAll();
    exports.exhaust = exhaustAll_1.exhaustAll;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/expand.js
var require_expand = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/expand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.expand = void 0;
    var lift_1 = require_lift();
    var mergeInternals_1 = require_mergeInternals();
    function expand(project, concurrent, scheduler) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
      return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, void 0, true, scheduler);
      });
    }
    exports.expand = expand;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/finalize.js
var require_finalize = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/finalize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.finalize = void 0;
    var lift_1 = require_lift();
    function finalize(callback) {
      return lift_1.operate(function(source, subscriber) {
        try {
          source.subscribe(subscriber);
        } finally {
          subscriber.add(callback);
        }
      });
    }
    exports.finalize = finalize;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/find.js
var require_find = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/find.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFind = exports.find = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function find(predicate, thisArg) {
      return lift_1.operate(createFind(predicate, thisArg, "value"));
    }
    exports.find = find;
    function createFind(predicate, thisArg, emit) {
      var findIndex = emit === "index";
      return function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var i = index++;
          if (predicate.call(thisArg, value, i, source)) {
            subscriber.next(findIndex ? i : value);
            subscriber.complete();
          }
        }, function() {
          subscriber.next(findIndex ? -1 : void 0);
          subscriber.complete();
        }));
      };
    }
    exports.createFind = createFind;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/findIndex.js
var require_findIndex = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/findIndex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findIndex = void 0;
    var lift_1 = require_lift();
    var find_1 = require_find();
    function findIndex(predicate, thisArg) {
      return lift_1.operate(find_1.createFind(predicate, thisArg, "index"));
    }
    exports.findIndex = findIndex;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/first.js
var require_first = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/first.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.first = void 0;
    var EmptyError_1 = require_EmptyError();
    var filter_1 = require_filter();
    var take_1 = require_take();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var throwIfEmpty_1 = require_throwIfEmpty();
    var identity_1 = require_identity();
    function first(predicate, defaultValue) {
      var hasDefaultValue = arguments.length >= 2;
      return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
          return predicate(v, i, source);
        }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
          return new EmptyError_1.EmptyError();
        }));
      };
    }
    exports.first = first;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/groupBy.js
var require_groupBy = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/groupBy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.groupBy = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function groupBy(keySelector, elementOrOptions, duration, connector) {
      return lift_1.operate(function(source, subscriber) {
        var element;
        if (!elementOrOptions || typeof elementOrOptions === "function") {
          element = elementOrOptions;
        } else {
          duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
        }
        var groups = /* @__PURE__ */ new Map();
        var notify = function(cb) {
          groups.forEach(cb);
          cb(subscriber);
        };
        var handleError = function(err) {
          return notify(function(consumer) {
            return consumer.error(err);
          });
        };
        var activeGroups = 0;
        var teardownAttempted = false;
        var groupBySourceSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
          try {
            var key_1 = keySelector(value);
            var group_1 = groups.get(key_1);
            if (!group_1) {
              groups.set(key_1, group_1 = connector ? connector() : new Subject_1.Subject());
              var grouped = createGroupedObservable(key_1, group_1);
              subscriber.next(grouped);
              if (duration) {
                var durationSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(group_1, function() {
                  group_1.complete();
                  durationSubscriber_1 === null || durationSubscriber_1 === void 0 ? void 0 : durationSubscriber_1.unsubscribe();
                }, void 0, void 0, function() {
                  return groups.delete(key_1);
                });
                groupBySourceSubscriber.add(innerFrom_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
              }
            }
            group_1.next(element ? element(value) : value);
          } catch (err) {
            handleError(err);
          }
        }, function() {
          return notify(function(consumer) {
            return consumer.complete();
          });
        }, handleError, function() {
          return groups.clear();
        }, function() {
          teardownAttempted = true;
          return activeGroups === 0;
        });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
          var result = new Observable_1.Observable(function(groupSubscriber) {
            activeGroups++;
            var innerSub = groupSubject.subscribe(groupSubscriber);
            return function() {
              innerSub.unsubscribe();
              --activeGroups === 0 && teardownAttempted && groupBySourceSubscriber.unsubscribe();
            };
          });
          result.key = key;
          return result;
        }
      });
    }
    exports.groupBy = groupBy;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js
var require_isEmpty = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmpty = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function isEmpty() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          subscriber.next(false);
          subscriber.complete();
        }, function() {
          subscriber.next(true);
          subscriber.complete();
        }));
      });
    }
    exports.isEmpty = isEmpty;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/takeLast.js
var require_takeLast = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/takeLast.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.takeLast = void 0;
    var empty_1 = require_empty();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function takeLast(count) {
      return count <= 0 ? function() {
        return empty_1.EMPTY;
      } : lift_1.operate(function(source, subscriber) {
        var buffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          buffer.push(value);
          count < buffer.length && buffer.shift();
        }, function() {
          var e_1, _a2;
          try {
            for (var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
              var value = buffer_1_1.value;
              subscriber.next(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (buffer_1_1 && !buffer_1_1.done && (_a2 = buffer_1.return))
                _a2.call(buffer_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          subscriber.complete();
        }, void 0, function() {
          buffer = null;
        }));
      });
    }
    exports.takeLast = takeLast;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/last.js
var require_last = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/last.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.last = void 0;
    var EmptyError_1 = require_EmptyError();
    var filter_1 = require_filter();
    var takeLast_1 = require_takeLast();
    var throwIfEmpty_1 = require_throwIfEmpty();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var identity_1 = require_identity();
    function last(predicate, defaultValue) {
      var hasDefaultValue = arguments.length >= 2;
      return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
          return predicate(v, i, source);
        }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
          return new EmptyError_1.EmptyError();
        }));
      };
    }
    exports.last = last;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/materialize.js
var require_materialize = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/materialize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.materialize = void 0;
    var Notification_1 = require_Notification();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function materialize() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          subscriber.next(Notification_1.Notification.createNext(value));
        }, function() {
          subscriber.next(Notification_1.Notification.createComplete());
          subscriber.complete();
        }, function(err) {
          subscriber.next(Notification_1.Notification.createError(err));
          subscriber.complete();
        }));
      });
    }
    exports.materialize = materialize;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/max.js
var require_max = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/max.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.max = void 0;
    var reduce_1 = require_reduce();
    var isFunction_1 = require_isFunction();
    function max(comparer) {
      return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) > 0 ? x : y;
      } : function(x, y) {
        return x > y ? x : y;
      });
    }
    exports.max = max;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/flatMap.js
var require_flatMap = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/flatMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flatMap = void 0;
    var mergeMap_1 = require_mergeMap();
    exports.flatMap = mergeMap_1.mergeMap;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js
var require_mergeMapTo = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeMapTo = void 0;
    var mergeMap_1 = require_mergeMap();
    var isFunction_1 = require_isFunction();
    function mergeMapTo(innerObservable, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap_1.mergeMap(function() {
          return innerObservable;
        }, resultSelector, concurrent);
      }
      if (typeof resultSelector === "number") {
        concurrent = resultSelector;
      }
      return mergeMap_1.mergeMap(function() {
        return innerObservable;
      }, concurrent);
    }
    exports.mergeMapTo = mergeMapTo;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js
var require_mergeScan = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeScan = void 0;
    var lift_1 = require_lift();
    var mergeInternals_1 = require_mergeInternals();
    function mergeScan(accumulator, seed, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      return lift_1.operate(function(source, subscriber) {
        var state = seed;
        return mergeInternals_1.mergeInternals(source, subscriber, function(value, index) {
          return accumulator(state, value, index);
        }, concurrent, function(value) {
          state = value;
        }, false, void 0, function() {
          return state = null;
        });
      });
    }
    exports.mergeScan = mergeScan;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/merge.js
var require_merge2 = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/merge.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = void 0;
    var lift_1 = require_lift();
    var mergeAll_1 = require_mergeAll();
    var args_1 = require_args();
    var from_1 = require_from();
    function merge() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      var concurrent = args_1.popNumber(args, Infinity);
      return lift_1.operate(function(source, subscriber) {
        mergeAll_1.mergeAll(concurrent)(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
      });
    }
    exports.merge = merge;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js
var require_mergeWith = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeWith = void 0;
    var merge_1 = require_merge2();
    function mergeWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return merge_1.merge.apply(void 0, __spreadArray([], __read(otherSources)));
    }
    exports.mergeWith = mergeWith;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/min.js
var require_min = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/min.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.min = void 0;
    var reduce_1 = require_reduce();
    var isFunction_1 = require_isFunction();
    function min(comparer) {
      return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) < 0 ? x : y;
      } : function(x, y) {
        return x < y ? x : y;
      });
    }
    exports.min = min;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/multicast.js
var require_multicast = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/multicast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.multicast = void 0;
    var ConnectableObservable_1 = require_ConnectableObservable();
    var isFunction_1 = require_isFunction();
    var connect_1 = require_connect();
    function multicast(subjectOrSubjectFactory, selector) {
      var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function() {
        return subjectOrSubjectFactory;
      };
      if (isFunction_1.isFunction(selector)) {
        return connect_1.connect(selector, {
          connector: subjectFactory
        });
      }
      return function(source) {
        return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory);
      };
    }
    exports.multicast = multicast;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNextWith.js
var require_onErrorResumeNextWith = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNextWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onErrorResumeNext = exports.onErrorResumeNextWith = void 0;
    var argsOrArgArray_1 = require_argsOrArgArray();
    var onErrorResumeNext_1 = require_onErrorResumeNext();
    function onErrorResumeNextWith() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
      return function(source) {
        return onErrorResumeNext_1.onErrorResumeNext.apply(void 0, __spreadArray([source], __read(nextSources)));
      };
    }
    exports.onErrorResumeNextWith = onErrorResumeNextWith;
    exports.onErrorResumeNext = onErrorResumeNextWith;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/pairwise.js
var require_pairwise = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/pairwise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pairwise = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function pairwise() {
      return lift_1.operate(function(source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var p = prev;
          prev = value;
          hasPrev && subscriber.next([p, value]);
          hasPrev = true;
        }));
      });
    }
    exports.pairwise = pairwise;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/pluck.js
var require_pluck = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/pluck.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pluck = void 0;
    var map_1 = require_map();
    function pluck() {
      var properties = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
      }
      var length = properties.length;
      if (length === 0) {
        throw new Error("list of properties cannot be empty.");
      }
      return map_1.map(function(x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
          var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
          if (typeof p !== "undefined") {
            currentProp = p;
          } else {
            return void 0;
          }
        }
        return currentProp;
      });
    }
    exports.pluck = pluck;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/publish.js
var require_publish = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/publish.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.publish = void 0;
    var Subject_1 = require_Subject();
    var multicast_1 = require_multicast();
    var connect_1 = require_connect();
    function publish(selector) {
      return selector ? function(source) {
        return connect_1.connect(selector)(source);
      } : function(source) {
        return multicast_1.multicast(new Subject_1.Subject())(source);
      };
    }
    exports.publish = publish;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js
var require_publishBehavior = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.publishBehavior = void 0;
    var BehaviorSubject_1 = require_BehaviorSubject();
    var ConnectableObservable_1 = require_ConnectableObservable();
    function publishBehavior(initialValue) {
      return function(source) {
        var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
          return subject;
        });
      };
    }
    exports.publishBehavior = publishBehavior;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/publishLast.js
var require_publishLast = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/publishLast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.publishLast = void 0;
    var AsyncSubject_1 = require_AsyncSubject();
    var ConnectableObservable_1 = require_ConnectableObservable();
    function publishLast() {
      return function(source) {
        var subject = new AsyncSubject_1.AsyncSubject();
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
          return subject;
        });
      };
    }
    exports.publishLast = publishLast;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js
var require_publishReplay = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.publishReplay = void 0;
    var ReplaySubject_1 = require_ReplaySubject();
    var multicast_1 = require_multicast();
    var isFunction_1 = require_isFunction();
    function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
      if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) {
        timestampProvider = selectorOrScheduler;
      }
      var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : void 0;
      return function(source) {
        return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
      };
    }
    exports.publishReplay = publishReplay;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/raceWith.js
var require_raceWith = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/raceWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.raceWith = void 0;
    var race_1 = require_race();
    var lift_1 = require_lift();
    var identity_1 = require_identity();
    function raceWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return !otherSources.length ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        race_1.raceInit(__spreadArray([source], __read(otherSources)))(subscriber);
      });
    }
    exports.raceWith = raceWith;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/repeat.js
var require_repeat = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/repeat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.repeat = void 0;
    var empty_1 = require_empty();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var timer_1 = require_timer();
    function repeat(countOrConfig) {
      var _a2;
      var count = Infinity;
      var delay;
      if (countOrConfig != null) {
        if (typeof countOrConfig === "object") {
          _a2 = countOrConfig.count, count = _a2 === void 0 ? Infinity : _a2, delay = countOrConfig.delay;
        } else {
          count = countOrConfig;
        }
      }
      return count <= 0 ? function() {
        return empty_1.EMPTY;
      } : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var sourceSub;
        var resubscribe = function() {
          sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
          sourceSub = null;
          if (delay != null) {
            var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(soFar));
            var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
              notifierSubscriber_1.unsubscribe();
              subscribeToSource();
            });
            notifier.subscribe(notifierSubscriber_1);
          } else {
            subscribeToSource();
          }
        };
        var subscribeToSource = function() {
          var syncUnsub = false;
          sourceSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
            if (++soFar < count) {
              if (sourceSub) {
                resubscribe();
              } else {
                syncUnsub = true;
              }
            } else {
              subscriber.complete();
            }
          }));
          if (syncUnsub) {
            resubscribe();
          }
        };
        subscribeToSource();
      });
    }
    exports.repeat = repeat;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js
var require_repeatWhen = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.repeatWhen = void 0;
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function repeatWhen(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var completions$;
        var isNotifierComplete = false;
        var isMainComplete = false;
        var checkComplete = function() {
          return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
        };
        var getCompletionSubject = function() {
          if (!completions$) {
            completions$ = new Subject_1.Subject();
            innerFrom_1.innerFrom(notifier(completions$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
              if (innerSub) {
                subscribeForRepeatWhen();
              } else {
                syncResub = true;
              }
            }, function() {
              isNotifierComplete = true;
              checkComplete();
            }));
          }
          return completions$;
        };
        var subscribeForRepeatWhen = function() {
          isMainComplete = false;
          innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
            isMainComplete = true;
            !checkComplete() && getCompletionSubject().next();
          }));
          if (syncResub) {
            innerSub.unsubscribe();
            innerSub = null;
            syncResub = false;
            subscribeForRepeatWhen();
          }
        };
        subscribeForRepeatWhen();
      });
    }
    exports.repeatWhen = repeatWhen;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/retry.js
var require_retry = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/retry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.retry = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var identity_1 = require_identity();
    var timer_1 = require_timer();
    var innerFrom_1 = require_innerFrom();
    function retry2(configOrCount) {
      if (configOrCount === void 0) {
        configOrCount = Infinity;
      }
      var config;
      if (configOrCount && typeof configOrCount === "object") {
        config = configOrCount;
      } else {
        config = {
          count: configOrCount
        };
      }
      var _a2 = config.count, count = _a2 === void 0 ? Infinity : _a2, delay = config.delay, _b = config.resetOnSuccess, resetOnSuccess = _b === void 0 ? false : _b;
      return count <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var innerSub;
        var subscribeForRetry = function() {
          var syncUnsub = false;
          innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (resetOnSuccess) {
              soFar = 0;
            }
            subscriber.next(value);
          }, void 0, function(err) {
            if (soFar++ < count) {
              var resub_1 = function() {
                if (innerSub) {
                  innerSub.unsubscribe();
                  innerSub = null;
                  subscribeForRetry();
                } else {
                  syncUnsub = true;
                }
              };
              if (delay != null) {
                var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(err, soFar));
                var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                  notifierSubscriber_1.unsubscribe();
                  resub_1();
                }, function() {
                  subscriber.complete();
                });
                notifier.subscribe(notifierSubscriber_1);
              } else {
                resub_1();
              }
            } else {
              subscriber.error(err);
            }
          }));
          if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            subscribeForRetry();
          }
        };
        subscribeForRetry();
      });
    }
    exports.retry = retry2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js
var require_retryWhen = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.retryWhen = void 0;
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function retryWhen(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var errors$;
        var subscribeForRetryWhen = function() {
          innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
            if (!errors$) {
              errors$ = new Subject_1.Subject();
              innerFrom_1.innerFrom(notifier(errors$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                return innerSub ? subscribeForRetryWhen() : syncResub = true;
              }));
            }
            if (errors$) {
              errors$.next(err);
            }
          }));
          if (syncResub) {
            innerSub.unsubscribe();
            innerSub = null;
            syncResub = false;
            subscribeForRetryWhen();
          }
        };
        subscribeForRetryWhen();
      });
    }
    exports.retryWhen = retryWhen;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/sample.js
var require_sample = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/sample.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sample = void 0;
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function sample(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          lastValue = value;
        }));
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          if (hasValue) {
            hasValue = false;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
        }, noop_1.noop));
      });
    }
    exports.sample = sample;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js
var require_sampleTime = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sampleTime = void 0;
    var async_1 = require_async();
    var sample_1 = require_sample();
    var interval_1 = require_interval();
    function sampleTime(period, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return sample_1.sample(interval_1.interval(period, scheduler));
    }
    exports.sampleTime = sampleTime;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/scan.js
var require_scan = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/scan.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scan = void 0;
    var lift_1 = require_lift();
    var scanInternals_1 = require_scanInternals();
    function scan(accumulator, seed) {
      return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
    }
    exports.scan = scan;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js
var require_sequenceEqual = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sequenceEqual = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function sequenceEqual(compareTo, comparator) {
      if (comparator === void 0) {
        comparator = function(a, b) {
          return a === b;
        };
      }
      return lift_1.operate(function(source, subscriber) {
        var aState = createState();
        var bState = createState();
        var emit = function(isEqual) {
          subscriber.next(isEqual);
          subscriber.complete();
        };
        var createSubscriber = function(selfState, otherState) {
          var sequenceEqualSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(a) {
            var buffer = otherState.buffer, complete = otherState.complete;
            if (buffer.length === 0) {
              complete ? emit(false) : selfState.buffer.push(a);
            } else {
              !comparator(a, buffer.shift()) && emit(false);
            }
          }, function() {
            selfState.complete = true;
            var complete = otherState.complete, buffer = otherState.buffer;
            complete && emit(buffer.length === 0);
            sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 ? void 0 : sequenceEqualSubscriber.unsubscribe();
          });
          return sequenceEqualSubscriber;
        };
        source.subscribe(createSubscriber(aState, bState));
        innerFrom_1.innerFrom(compareTo).subscribe(createSubscriber(bState, aState));
      });
    }
    exports.sequenceEqual = sequenceEqual;
    function createState() {
      return {
        buffer: [],
        complete: false
      };
    }
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/share.js
var require_share = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/share.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.share = void 0;
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var Subscriber_1 = require_Subscriber();
    var lift_1 = require_lift();
    function share(options) {
      if (options === void 0) {
        options = {};
      }
      var _a2 = options.connector, connector = _a2 === void 0 ? function() {
        return new Subject_1.Subject();
      } : _a2, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
      return function(wrapperSource) {
        var connection;
        var resetConnection;
        var subject;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function() {
          resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
          resetConnection = void 0;
        };
        var reset = function() {
          cancelReset();
          connection = subject = void 0;
          hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function() {
          var conn = connection;
          reset();
          conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return lift_1.operate(function(source, subscriber) {
          refCount++;
          if (!hasErrored && !hasCompleted) {
            cancelReset();
          }
          var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
          subscriber.add(function() {
            refCount--;
            if (refCount === 0 && !hasErrored && !hasCompleted) {
              resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
            }
          });
          dest.subscribe(subscriber);
          if (!connection && refCount > 0) {
            connection = new Subscriber_1.SafeSubscriber({
              next: function(value) {
                return dest.next(value);
              },
              error: function(err) {
                hasErrored = true;
                cancelReset();
                resetConnection = handleReset(reset, resetOnError, err);
                dest.error(err);
              },
              complete: function() {
                hasCompleted = true;
                cancelReset();
                resetConnection = handleReset(reset, resetOnComplete);
                dest.complete();
              }
            });
            innerFrom_1.innerFrom(source).subscribe(connection);
          }
        })(wrapperSource);
      };
    }
    exports.share = share;
    function handleReset(reset, on) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      if (on === true) {
        reset();
        return;
      }
      if (on === false) {
        return;
      }
      var onSubscriber = new Subscriber_1.SafeSubscriber({
        next: function() {
          onSubscriber.unsubscribe();
          reset();
        }
      });
      return innerFrom_1.innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
    }
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js
var require_shareReplay = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shareReplay = void 0;
    var ReplaySubject_1 = require_ReplaySubject();
    var share_1 = require_share();
    function shareReplay(configOrBufferSize, windowTime, scheduler) {
      var _a2, _b, _c;
      var bufferSize;
      var refCount = false;
      if (configOrBufferSize && typeof configOrBufferSize === "object") {
        _a2 = configOrBufferSize.bufferSize, bufferSize = _a2 === void 0 ? Infinity : _a2, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
      } else {
        bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
      }
      return share_1.share({
        connector: function() {
          return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
        },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount
      });
    }
    exports.shareReplay = shareReplay;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/single.js
var require_single = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/single.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.single = void 0;
    var EmptyError_1 = require_EmptyError();
    var SequenceError_1 = require_SequenceError();
    var NotFoundError_1 = require_NotFoundError();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function single(predicate) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var singleValue;
        var seenValue = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          seenValue = true;
          if (!predicate || predicate(value, index++, source)) {
            hasValue && subscriber.error(new SequenceError_1.SequenceError("Too many matching values"));
            hasValue = true;
            singleValue = value;
          }
        }, function() {
          if (hasValue) {
            subscriber.next(singleValue);
            subscriber.complete();
          } else {
            subscriber.error(seenValue ? new NotFoundError_1.NotFoundError("No matching values") : new EmptyError_1.EmptyError());
          }
        }));
      });
    }
    exports.single = single;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/skip.js
var require_skip = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/skip.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.skip = void 0;
    var filter_1 = require_filter();
    function skip(count) {
      return filter_1.filter(function(_, index) {
        return count <= index;
      });
    }
    exports.skip = skip;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/skipLast.js
var require_skipLast = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/skipLast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.skipLast = void 0;
    var identity_1 = require_identity();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function skipLast(skipCount) {
      return skipCount <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var ring = new Array(skipCount);
        var seen = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var valueIndex = seen++;
          if (valueIndex < skipCount) {
            ring[valueIndex] = value;
          } else {
            var index = valueIndex % skipCount;
            var oldValue = ring[index];
            ring[index] = value;
            subscriber.next(oldValue);
          }
        }));
        return function() {
          ring = null;
        };
      });
    }
    exports.skipLast = skipLast;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js
var require_skipUntil = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.skipUntil = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var noop_1 = require_noop();
    function skipUntil(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var skipSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          skipSubscriber === null || skipSubscriber === void 0 ? void 0 : skipSubscriber.unsubscribe();
          taking = true;
        }, noop_1.noop);
        innerFrom_1.innerFrom(notifier).subscribe(skipSubscriber);
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return taking && subscriber.next(value);
        }));
      });
    }
    exports.skipUntil = skipUntil;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js
var require_skipWhile = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.skipWhile = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function skipWhile(predicate) {
      return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
        }));
      });
    }
    exports.skipWhile = skipWhile;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/startWith.js
var require_startWith = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/startWith.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.startWith = void 0;
    var concat_1 = require_concat();
    var args_1 = require_args();
    var lift_1 = require_lift();
    function startWith() {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(values);
      return lift_1.operate(function(source, subscriber) {
        (scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
      });
    }
    exports.startWith = startWith;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/switchMap.js
var require_switchMap = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/switchMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.switchMap = void 0;
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function switchMap2(project, resultSelector) {
      return lift_1.operate(function(source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function() {
          return isComplete && !innerSubscriber && subscriber.complete();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
          var innerIndex = 0;
          var outerIndex = index++;
          innerFrom_1.innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
            return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
          }, function() {
            innerSubscriber = null;
            checkComplete();
          }));
        }, function() {
          isComplete = true;
          checkComplete();
        }));
      });
    }
    exports.switchMap = switchMap2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/switchAll.js
var require_switchAll = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/switchAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.switchAll = void 0;
    var switchMap_1 = require_switchMap();
    var identity_1 = require_identity();
    function switchAll() {
      return switchMap_1.switchMap(identity_1.identity);
    }
    exports.switchAll = switchAll;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js
var require_switchMapTo = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.switchMapTo = void 0;
    var switchMap_1 = require_switchMap();
    var isFunction_1 = require_isFunction();
    function switchMapTo(innerObservable, resultSelector) {
      return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function() {
        return innerObservable;
      }, resultSelector) : switchMap_1.switchMap(function() {
        return innerObservable;
      });
    }
    exports.switchMapTo = switchMapTo;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/switchScan.js
var require_switchScan = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/switchScan.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.switchScan = void 0;
    var switchMap_1 = require_switchMap();
    var lift_1 = require_lift();
    function switchScan(accumulator, seed) {
      return lift_1.operate(function(source, subscriber) {
        var state = seed;
        switchMap_1.switchMap(function(value, index) {
          return accumulator(state, value, index);
        }, function(_, innerValue) {
          return state = innerValue, innerValue;
        })(source).subscribe(subscriber);
        return function() {
          state = null;
        };
      });
    }
    exports.switchScan = switchScan;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js
var require_takeUntil = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.takeUntil = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var noop_1 = require_noop();
    function takeUntil2(notifier) {
      return lift_1.operate(function(source, subscriber) {
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          return subscriber.complete();
        }, noop_1.noop));
        !subscriber.closed && source.subscribe(subscriber);
      });
    }
    exports.takeUntil = takeUntil2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js
var require_takeWhile = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.takeWhile = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function takeWhile(predicate, inclusive) {
      if (inclusive === void 0) {
        inclusive = false;
      }
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var result = predicate(value, index++);
          (result || inclusive) && subscriber.next(value);
          !result && subscriber.complete();
        }));
      });
    }
    exports.takeWhile = takeWhile;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/tap.js
var require_tap = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/tap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tap = void 0;
    var isFunction_1 = require_isFunction();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var identity_1 = require_identity();
    function tap(observerOrNext, error, complete) {
      var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete ? { next: observerOrNext, error, complete } : observerOrNext;
      return tapObserver ? lift_1.operate(function(source, subscriber) {
        var _a2;
        (_a2 = tapObserver.subscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
        var isUnsub = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var _a3;
          (_a3 = tapObserver.next) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver, value);
          subscriber.next(value);
        }, function() {
          var _a3;
          isUnsub = false;
          (_a3 = tapObserver.complete) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver);
          subscriber.complete();
        }, function(err) {
          var _a3;
          isUnsub = false;
          (_a3 = tapObserver.error) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver, err);
          subscriber.error(err);
        }, function() {
          var _a3, _b;
          if (isUnsub) {
            (_a3 = tapObserver.unsubscribe) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver);
          }
          (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
        }));
      }) : identity_1.identity;
    }
    exports.tap = tap;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/throttle.js
var require_throttle = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/throttle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.throttle = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function throttle(durationSelector, config) {
      return lift_1.operate(function(source, subscriber) {
        var _a2 = config !== null && config !== void 0 ? config : {}, _b = _a2.leading, leading = _b === void 0 ? true : _b, _c = _a2.trailing, trailing = _c === void 0 ? false : _c;
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function() {
          throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
          throttled = null;
          if (trailing) {
            send();
            isComplete && subscriber.complete();
          }
        };
        var cleanupThrottling = function() {
          throttled = null;
          isComplete && subscriber.complete();
        };
        var startThrottle = function(value) {
          return throttled = innerFrom_1.innerFrom(durationSelector(value)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
        };
        var send = function() {
          if (hasValue) {
            hasValue = false;
            var value = sendValue;
            sendValue = null;
            subscriber.next(value);
            !isComplete && startThrottle(value);
          }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          sendValue = value;
          !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function() {
          isComplete = true;
          !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
      });
    }
    exports.throttle = throttle;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js
var require_throttleTime = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.throttleTime = void 0;
    var async_1 = require_async();
    var throttle_1 = require_throttle();
    var timer_1 = require_timer();
    function throttleTime(duration, scheduler, config) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      var duration$ = timer_1.timer(duration, scheduler);
      return throttle_1.throttle(function() {
        return duration$;
      }, config);
    }
    exports.throttleTime = throttleTime;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js
var require_timeInterval = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TimeInterval = exports.timeInterval = void 0;
    var async_1 = require_async();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function timeInterval(scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return lift_1.operate(function(source, subscriber) {
        var last = scheduler.now();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var now = scheduler.now();
          var interval = now - last;
          last = now;
          subscriber.next(new TimeInterval(value, interval));
        }));
      });
    }
    exports.timeInterval = timeInterval;
    var TimeInterval = /* @__PURE__ */ function() {
      function TimeInterval2(value, interval) {
        this.value = value;
        this.interval = interval;
      }
      return TimeInterval2;
    }();
    exports.TimeInterval = TimeInterval;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js
var require_timeoutWith = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timeoutWith = void 0;
    var async_1 = require_async();
    var isDate_1 = require_isDate();
    var timeout_1 = require_timeout();
    function timeoutWith(due, withObservable, scheduler) {
      var first;
      var each;
      var _with;
      scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async_1.async;
      if (isDate_1.isValidDate(due)) {
        first = due;
      } else if (typeof due === "number") {
        each = due;
      }
      if (withObservable) {
        _with = function() {
          return withObservable;
        };
      } else {
        throw new TypeError("No observable provided to switch to");
      }
      if (first == null && each == null) {
        throw new TypeError("No timeout provided.");
      }
      return timeout_1.timeout({
        first,
        each,
        scheduler,
        with: _with
      });
    }
    exports.timeoutWith = timeoutWith;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/timestamp.js
var require_timestamp = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/timestamp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timestamp = void 0;
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var map_1 = require_map();
    function timestamp(timestampProvider) {
      if (timestampProvider === void 0) {
        timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
      }
      return map_1.map(function(value) {
        return { value, timestamp: timestampProvider.now() };
      });
    }
    exports.timestamp = timestamp;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/window.js
var require_window = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/window.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.window = void 0;
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var innerFrom_1 = require_innerFrom();
    function window2(windowBoundaries) {
      return lift_1.operate(function(source, subscriber) {
        var windowSubject = new Subject_1.Subject();
        subscriber.next(windowSubject.asObservable());
        var errorHandler = function(err) {
          windowSubject.error(err);
          subscriber.error(err);
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value);
        }, function() {
          windowSubject.complete();
          subscriber.complete();
        }, errorHandler));
        innerFrom_1.innerFrom(windowBoundaries).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          windowSubject.complete();
          subscriber.next(windowSubject = new Subject_1.Subject());
        }, noop_1.noop, errorHandler));
        return function() {
          windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.unsubscribe();
          windowSubject = null;
        };
      });
    }
    exports.window = window2;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/windowCount.js
var require_windowCount = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/windowCount.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.windowCount = void 0;
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function windowCount(windowSize, startWindowEvery) {
      if (startWindowEvery === void 0) {
        startWindowEvery = 0;
      }
      var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
      return lift_1.operate(function(source, subscriber) {
        var windows = [new Subject_1.Subject()];
        var starts = [];
        var count = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a2;
          try {
            for (var windows_1 = __values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()) {
              var window_1 = windows_1_1.value;
              window_1.next(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (windows_1_1 && !windows_1_1.done && (_a2 = windows_1.return))
                _a2.call(windows_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          var c = count - windowSize + 1;
          if (c >= 0 && c % startEvery === 0) {
            windows.shift().complete();
          }
          if (++count % startEvery === 0) {
            var window_2 = new Subject_1.Subject();
            windows.push(window_2);
            subscriber.next(window_2.asObservable());
          }
        }, function() {
          while (windows.length > 0) {
            windows.shift().complete();
          }
          subscriber.complete();
        }, function(err) {
          while (windows.length > 0) {
            windows.shift().error(err);
          }
          subscriber.error(err);
        }, function() {
          starts = null;
          windows = null;
        }));
      });
    }
    exports.windowCount = windowCount;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/windowTime.js
var require_windowTime = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/windowTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.windowTime = void 0;
    var Subject_1 = require_Subject();
    var async_1 = require_async();
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var arrRemove_1 = require_arrRemove();
    var args_1 = require_args();
    var executeSchedule_1 = require_executeSchedule();
    function windowTime(windowTimeSpan) {
      var _a2, _b;
      var otherArgs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
      }
      var scheduler = (_a2 = args_1.popScheduler(otherArgs)) !== null && _a2 !== void 0 ? _a2 : async_1.asyncScheduler;
      var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
      var maxWindowSize = otherArgs[1] || Infinity;
      return lift_1.operate(function(source, subscriber) {
        var windowRecords = [];
        var restartOnClose = false;
        var closeWindow = function(record) {
          var window2 = record.window, subs = record.subs;
          window2.complete();
          subs.unsubscribe();
          arrRemove_1.arrRemove(windowRecords, record);
          restartOnClose && startWindow();
        };
        var startWindow = function() {
          if (windowRecords) {
            var subs = new Subscription_1.Subscription();
            subscriber.add(subs);
            var window_1 = new Subject_1.Subject();
            var record_1 = {
              window: window_1,
              subs,
              seen: 0
            };
            windowRecords.push(record_1);
            subscriber.next(window_1.asObservable());
            executeSchedule_1.executeSchedule(subs, scheduler, function() {
              return closeWindow(record_1);
            }, windowTimeSpan);
          }
        };
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
          executeSchedule_1.executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
        } else {
          restartOnClose = true;
        }
        startWindow();
        var loop = function(cb) {
          return windowRecords.slice().forEach(cb);
        };
        var terminate = function(cb) {
          loop(function(_a3) {
            var window2 = _a3.window;
            return cb(window2);
          });
          cb(subscriber);
          subscriber.unsubscribe();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          loop(function(record) {
            record.window.next(value);
            maxWindowSize <= ++record.seen && closeWindow(record);
          });
        }, function() {
          return terminate(function(consumer) {
            return consumer.complete();
          });
        }, function(err) {
          return terminate(function(consumer) {
            return consumer.error(err);
          });
        }));
        return function() {
          windowRecords = null;
        };
      });
    }
    exports.windowTime = windowTime;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js
var require_windowToggle = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.windowToggle = void 0;
    var Subject_1 = require_Subject();
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var arrRemove_1 = require_arrRemove();
    function windowToggle(openings, closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var windows = [];
        var handleError = function(err) {
          while (0 < windows.length) {
            windows.shift().error(err);
          }
          subscriber.error(err);
        };
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
          var window2 = new Subject_1.Subject();
          windows.push(window2);
          var closingSubscription = new Subscription_1.Subscription();
          var closeWindow = function() {
            arrRemove_1.arrRemove(windows, window2);
            window2.complete();
            closingSubscription.unsubscribe();
          };
          var closingNotifier;
          try {
            closingNotifier = innerFrom_1.innerFrom(closingSelector(openValue));
          } catch (err) {
            handleError(err);
            return;
          }
          subscriber.next(window2.asObservable());
          closingSubscription.add(closingNotifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a2;
          var windowsCopy = windows.slice();
          try {
            for (var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()) {
              var window_1 = windowsCopy_1_1.value;
              window_1.next(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a2 = windowsCopy_1.return))
                _a2.call(windowsCopy_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }, function() {
          while (0 < windows.length) {
            windows.shift().complete();
          }
          subscriber.complete();
        }, handleError, function() {
          while (0 < windows.length) {
            windows.shift().unsubscribe();
          }
        }));
      });
    }
    exports.windowToggle = windowToggle;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js
var require_windowWhen = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.windowWhen = void 0;
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function windowWhen(closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var window2;
        var closingSubscriber;
        var handleError = function(err) {
          window2.error(err);
          subscriber.error(err);
        };
        var openWindow = function() {
          closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
          window2 === null || window2 === void 0 ? void 0 : window2.complete();
          window2 = new Subject_1.Subject();
          subscriber.next(window2.asObservable());
          var closingNotifier;
          try {
            closingNotifier = innerFrom_1.innerFrom(closingSelector());
          } catch (err) {
            handleError(err);
            return;
          }
          closingNotifier.subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openWindow, openWindow, handleError));
        };
        openWindow();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return window2.next(value);
        }, function() {
          window2.complete();
          subscriber.complete();
        }, handleError, function() {
          closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
          window2 = null;
        }));
      });
    }
    exports.windowWhen = windowWhen;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js
var require_withLatestFrom = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.withLatestFrom = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var identity_1 = require_identity();
    var noop_1 = require_noop();
    var args_1 = require_args();
    function withLatestFrom() {
      var inputs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
      }
      var project = args_1.popResultSelector(inputs);
      return lift_1.operate(function(source, subscriber) {
        var len = inputs.length;
        var otherValues = new Array(len);
        var hasValue = inputs.map(function() {
          return false;
        });
        var ready = false;
        var _loop_1 = function(i2) {
          innerFrom_1.innerFrom(inputs[i2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            otherValues[i2] = value;
            if (!ready && !hasValue[i2]) {
              hasValue[i2] = true;
              (ready = hasValue.every(identity_1.identity)) && (hasValue = null);
            }
          }, noop_1.noop));
        };
        for (var i = 0; i < len; i++) {
          _loop_1(i);
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (ready) {
            var values = __spreadArray([value], __read(otherValues));
            subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
          }
        }));
      });
    }
    exports.withLatestFrom = withLatestFrom;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/zipAll.js
var require_zipAll = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/zipAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.zipAll = void 0;
    var zip_1 = require_zip();
    var joinAllInternals_1 = require_joinAllInternals();
    function zipAll(project) {
      return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
    }
    exports.zipAll = zipAll;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/zip.js
var require_zip2 = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/zip.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.zip = void 0;
    var zip_1 = require_zip();
    var lift_1 = require_lift();
    function zip() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      return lift_1.operate(function(source, subscriber) {
        zip_1.zip.apply(void 0, __spreadArray([source], __read(sources))).subscribe(subscriber);
      });
    }
    exports.zip = zip;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/zipWith.js
var require_zipWith = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/internal/operators/zipWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.zipWith = void 0;
    var zip_1 = require_zip2();
    function zipWith() {
      var otherInputs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherInputs[_i] = arguments[_i];
      }
      return zip_1.zip.apply(void 0, __spreadArray([], __read(otherInputs)));
    }
    exports.zipWith = zipWith;
  }
});

// ../../biz-nest/node_modules/rxjs/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../biz-nest/node_modules/rxjs/dist/cjs/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = void 0;
    exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.combineLatestWith = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = void 0;
    exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.pairwise = exports.onErrorResumeNextWith = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = exports.mergeAll = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = void 0;
    exports.zipWith = exports.zipAll = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = void 0;
    var Observable_1 = require_Observable();
    Object.defineProperty(exports, "Observable", { enumerable: true, get: function() {
      return Observable_1.Observable;
    } });
    var ConnectableObservable_1 = require_ConnectableObservable();
    Object.defineProperty(exports, "ConnectableObservable", { enumerable: true, get: function() {
      return ConnectableObservable_1.ConnectableObservable;
    } });
    var observable_1 = require_observable();
    Object.defineProperty(exports, "observable", { enumerable: true, get: function() {
      return observable_1.observable;
    } });
    var animationFrames_1 = require_animationFrames();
    Object.defineProperty(exports, "animationFrames", { enumerable: true, get: function() {
      return animationFrames_1.animationFrames;
    } });
    var Subject_1 = require_Subject();
    Object.defineProperty(exports, "Subject", { enumerable: true, get: function() {
      return Subject_1.Subject;
    } });
    var BehaviorSubject_1 = require_BehaviorSubject();
    Object.defineProperty(exports, "BehaviorSubject", { enumerable: true, get: function() {
      return BehaviorSubject_1.BehaviorSubject;
    } });
    var ReplaySubject_1 = require_ReplaySubject();
    Object.defineProperty(exports, "ReplaySubject", { enumerable: true, get: function() {
      return ReplaySubject_1.ReplaySubject;
    } });
    var AsyncSubject_1 = require_AsyncSubject();
    Object.defineProperty(exports, "AsyncSubject", { enumerable: true, get: function() {
      return AsyncSubject_1.AsyncSubject;
    } });
    var asap_1 = require_asap();
    Object.defineProperty(exports, "asap", { enumerable: true, get: function() {
      return asap_1.asap;
    } });
    Object.defineProperty(exports, "asapScheduler", { enumerable: true, get: function() {
      return asap_1.asapScheduler;
    } });
    var async_1 = require_async();
    Object.defineProperty(exports, "async", { enumerable: true, get: function() {
      return async_1.async;
    } });
    Object.defineProperty(exports, "asyncScheduler", { enumerable: true, get: function() {
      return async_1.asyncScheduler;
    } });
    var queue_1 = require_queue();
    Object.defineProperty(exports, "queue", { enumerable: true, get: function() {
      return queue_1.queue;
    } });
    Object.defineProperty(exports, "queueScheduler", { enumerable: true, get: function() {
      return queue_1.queueScheduler;
    } });
    var animationFrame_1 = require_animationFrame();
    Object.defineProperty(exports, "animationFrame", { enumerable: true, get: function() {
      return animationFrame_1.animationFrame;
    } });
    Object.defineProperty(exports, "animationFrameScheduler", { enumerable: true, get: function() {
      return animationFrame_1.animationFrameScheduler;
    } });
    var VirtualTimeScheduler_1 = require_VirtualTimeScheduler();
    Object.defineProperty(exports, "VirtualTimeScheduler", { enumerable: true, get: function() {
      return VirtualTimeScheduler_1.VirtualTimeScheduler;
    } });
    Object.defineProperty(exports, "VirtualAction", { enumerable: true, get: function() {
      return VirtualTimeScheduler_1.VirtualAction;
    } });
    var Scheduler_1 = require_Scheduler();
    Object.defineProperty(exports, "Scheduler", { enumerable: true, get: function() {
      return Scheduler_1.Scheduler;
    } });
    var Subscription_1 = require_Subscription();
    Object.defineProperty(exports, "Subscription", { enumerable: true, get: function() {
      return Subscription_1.Subscription;
    } });
    var Subscriber_1 = require_Subscriber();
    Object.defineProperty(exports, "Subscriber", { enumerable: true, get: function() {
      return Subscriber_1.Subscriber;
    } });
    var Notification_1 = require_Notification();
    Object.defineProperty(exports, "Notification", { enumerable: true, get: function() {
      return Notification_1.Notification;
    } });
    Object.defineProperty(exports, "NotificationKind", { enumerable: true, get: function() {
      return Notification_1.NotificationKind;
    } });
    var pipe_1 = require_pipe();
    Object.defineProperty(exports, "pipe", { enumerable: true, get: function() {
      return pipe_1.pipe;
    } });
    var noop_1 = require_noop();
    Object.defineProperty(exports, "noop", { enumerable: true, get: function() {
      return noop_1.noop;
    } });
    var identity_1 = require_identity();
    Object.defineProperty(exports, "identity", { enumerable: true, get: function() {
      return identity_1.identity;
    } });
    var isObservable_1 = require_isObservable();
    Object.defineProperty(exports, "isObservable", { enumerable: true, get: function() {
      return isObservable_1.isObservable;
    } });
    var lastValueFrom_1 = require_lastValueFrom();
    Object.defineProperty(exports, "lastValueFrom", { enumerable: true, get: function() {
      return lastValueFrom_1.lastValueFrom;
    } });
    var firstValueFrom_1 = require_firstValueFrom();
    Object.defineProperty(exports, "firstValueFrom", { enumerable: true, get: function() {
      return firstValueFrom_1.firstValueFrom;
    } });
    var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
    Object.defineProperty(exports, "ArgumentOutOfRangeError", { enumerable: true, get: function() {
      return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
    } });
    var EmptyError_1 = require_EmptyError();
    Object.defineProperty(exports, "EmptyError", { enumerable: true, get: function() {
      return EmptyError_1.EmptyError;
    } });
    var NotFoundError_1 = require_NotFoundError();
    Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
      return NotFoundError_1.NotFoundError;
    } });
    var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
    Object.defineProperty(exports, "ObjectUnsubscribedError", { enumerable: true, get: function() {
      return ObjectUnsubscribedError_1.ObjectUnsubscribedError;
    } });
    var SequenceError_1 = require_SequenceError();
    Object.defineProperty(exports, "SequenceError", { enumerable: true, get: function() {
      return SequenceError_1.SequenceError;
    } });
    var timeout_1 = require_timeout();
    Object.defineProperty(exports, "TimeoutError", { enumerable: true, get: function() {
      return timeout_1.TimeoutError;
    } });
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    Object.defineProperty(exports, "UnsubscriptionError", { enumerable: true, get: function() {
      return UnsubscriptionError_1.UnsubscriptionError;
    } });
    var bindCallback_1 = require_bindCallback();
    Object.defineProperty(exports, "bindCallback", { enumerable: true, get: function() {
      return bindCallback_1.bindCallback;
    } });
    var bindNodeCallback_1 = require_bindNodeCallback();
    Object.defineProperty(exports, "bindNodeCallback", { enumerable: true, get: function() {
      return bindNodeCallback_1.bindNodeCallback;
    } });
    var combineLatest_1 = require_combineLatest();
    Object.defineProperty(exports, "combineLatest", { enumerable: true, get: function() {
      return combineLatest_1.combineLatest;
    } });
    var concat_1 = require_concat();
    Object.defineProperty(exports, "concat", { enumerable: true, get: function() {
      return concat_1.concat;
    } });
    var connectable_1 = require_connectable();
    Object.defineProperty(exports, "connectable", { enumerable: true, get: function() {
      return connectable_1.connectable;
    } });
    var defer_1 = require_defer();
    Object.defineProperty(exports, "defer", { enumerable: true, get: function() {
      return defer_1.defer;
    } });
    var empty_1 = require_empty();
    Object.defineProperty(exports, "empty", { enumerable: true, get: function() {
      return empty_1.empty;
    } });
    var forkJoin_1 = require_forkJoin();
    Object.defineProperty(exports, "forkJoin", { enumerable: true, get: function() {
      return forkJoin_1.forkJoin;
    } });
    var from_1 = require_from();
    Object.defineProperty(exports, "from", { enumerable: true, get: function() {
      return from_1.from;
    } });
    var fromEvent_1 = require_fromEvent();
    Object.defineProperty(exports, "fromEvent", { enumerable: true, get: function() {
      return fromEvent_1.fromEvent;
    } });
    var fromEventPattern_1 = require_fromEventPattern();
    Object.defineProperty(exports, "fromEventPattern", { enumerable: true, get: function() {
      return fromEventPattern_1.fromEventPattern;
    } });
    var generate_1 = require_generate();
    Object.defineProperty(exports, "generate", { enumerable: true, get: function() {
      return generate_1.generate;
    } });
    var iif_1 = require_iif();
    Object.defineProperty(exports, "iif", { enumerable: true, get: function() {
      return iif_1.iif;
    } });
    var interval_1 = require_interval();
    Object.defineProperty(exports, "interval", { enumerable: true, get: function() {
      return interval_1.interval;
    } });
    var merge_1 = require_merge();
    Object.defineProperty(exports, "merge", { enumerable: true, get: function() {
      return merge_1.merge;
    } });
    var never_1 = require_never();
    Object.defineProperty(exports, "never", { enumerable: true, get: function() {
      return never_1.never;
    } });
    var of_1 = require_of();
    Object.defineProperty(exports, "of", { enumerable: true, get: function() {
      return of_1.of;
    } });
    var onErrorResumeNext_1 = require_onErrorResumeNext();
    Object.defineProperty(exports, "onErrorResumeNext", { enumerable: true, get: function() {
      return onErrorResumeNext_1.onErrorResumeNext;
    } });
    var pairs_1 = require_pairs();
    Object.defineProperty(exports, "pairs", { enumerable: true, get: function() {
      return pairs_1.pairs;
    } });
    var partition_1 = require_partition();
    Object.defineProperty(exports, "partition", { enumerable: true, get: function() {
      return partition_1.partition;
    } });
    var race_1 = require_race();
    Object.defineProperty(exports, "race", { enumerable: true, get: function() {
      return race_1.race;
    } });
    var range_1 = require_range();
    Object.defineProperty(exports, "range", { enumerable: true, get: function() {
      return range_1.range;
    } });
    var throwError_1 = require_throwError();
    Object.defineProperty(exports, "throwError", { enumerable: true, get: function() {
      return throwError_1.throwError;
    } });
    var timer_1 = require_timer();
    Object.defineProperty(exports, "timer", { enumerable: true, get: function() {
      return timer_1.timer;
    } });
    var using_1 = require_using();
    Object.defineProperty(exports, "using", { enumerable: true, get: function() {
      return using_1.using;
    } });
    var zip_1 = require_zip();
    Object.defineProperty(exports, "zip", { enumerable: true, get: function() {
      return zip_1.zip;
    } });
    var scheduled_1 = require_scheduled();
    Object.defineProperty(exports, "scheduled", { enumerable: true, get: function() {
      return scheduled_1.scheduled;
    } });
    var empty_2 = require_empty();
    Object.defineProperty(exports, "EMPTY", { enumerable: true, get: function() {
      return empty_2.EMPTY;
    } });
    var never_2 = require_never();
    Object.defineProperty(exports, "NEVER", { enumerable: true, get: function() {
      return never_2.NEVER;
    } });
    __exportStar(require_types(), exports);
    var config_1 = require_config();
    Object.defineProperty(exports, "config", { enumerable: true, get: function() {
      return config_1.config;
    } });
    var audit_1 = require_audit();
    Object.defineProperty(exports, "audit", { enumerable: true, get: function() {
      return audit_1.audit;
    } });
    var auditTime_1 = require_auditTime();
    Object.defineProperty(exports, "auditTime", { enumerable: true, get: function() {
      return auditTime_1.auditTime;
    } });
    var buffer_1 = require_buffer();
    Object.defineProperty(exports, "buffer", { enumerable: true, get: function() {
      return buffer_1.buffer;
    } });
    var bufferCount_1 = require_bufferCount();
    Object.defineProperty(exports, "bufferCount", { enumerable: true, get: function() {
      return bufferCount_1.bufferCount;
    } });
    var bufferTime_1 = require_bufferTime();
    Object.defineProperty(exports, "bufferTime", { enumerable: true, get: function() {
      return bufferTime_1.bufferTime;
    } });
    var bufferToggle_1 = require_bufferToggle();
    Object.defineProperty(exports, "bufferToggle", { enumerable: true, get: function() {
      return bufferToggle_1.bufferToggle;
    } });
    var bufferWhen_1 = require_bufferWhen();
    Object.defineProperty(exports, "bufferWhen", { enumerable: true, get: function() {
      return bufferWhen_1.bufferWhen;
    } });
    var catchError_1 = require_catchError();
    Object.defineProperty(exports, "catchError", { enumerable: true, get: function() {
      return catchError_1.catchError;
    } });
    var combineAll_1 = require_combineAll();
    Object.defineProperty(exports, "combineAll", { enumerable: true, get: function() {
      return combineAll_1.combineAll;
    } });
    var combineLatestAll_1 = require_combineLatestAll();
    Object.defineProperty(exports, "combineLatestAll", { enumerable: true, get: function() {
      return combineLatestAll_1.combineLatestAll;
    } });
    var combineLatestWith_1 = require_combineLatestWith();
    Object.defineProperty(exports, "combineLatestWith", { enumerable: true, get: function() {
      return combineLatestWith_1.combineLatestWith;
    } });
    var concatAll_1 = require_concatAll();
    Object.defineProperty(exports, "concatAll", { enumerable: true, get: function() {
      return concatAll_1.concatAll;
    } });
    var concatMap_1 = require_concatMap();
    Object.defineProperty(exports, "concatMap", { enumerable: true, get: function() {
      return concatMap_1.concatMap;
    } });
    var concatMapTo_1 = require_concatMapTo();
    Object.defineProperty(exports, "concatMapTo", { enumerable: true, get: function() {
      return concatMapTo_1.concatMapTo;
    } });
    var concatWith_1 = require_concatWith();
    Object.defineProperty(exports, "concatWith", { enumerable: true, get: function() {
      return concatWith_1.concatWith;
    } });
    var connect_1 = require_connect();
    Object.defineProperty(exports, "connect", { enumerable: true, get: function() {
      return connect_1.connect;
    } });
    var count_1 = require_count();
    Object.defineProperty(exports, "count", { enumerable: true, get: function() {
      return count_1.count;
    } });
    var debounce_1 = require_debounce();
    Object.defineProperty(exports, "debounce", { enumerable: true, get: function() {
      return debounce_1.debounce;
    } });
    var debounceTime_1 = require_debounceTime();
    Object.defineProperty(exports, "debounceTime", { enumerable: true, get: function() {
      return debounceTime_1.debounceTime;
    } });
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    Object.defineProperty(exports, "defaultIfEmpty", { enumerable: true, get: function() {
      return defaultIfEmpty_1.defaultIfEmpty;
    } });
    var delay_1 = require_delay();
    Object.defineProperty(exports, "delay", { enumerable: true, get: function() {
      return delay_1.delay;
    } });
    var delayWhen_1 = require_delayWhen();
    Object.defineProperty(exports, "delayWhen", { enumerable: true, get: function() {
      return delayWhen_1.delayWhen;
    } });
    var dematerialize_1 = require_dematerialize();
    Object.defineProperty(exports, "dematerialize", { enumerable: true, get: function() {
      return dematerialize_1.dematerialize;
    } });
    var distinct_1 = require_distinct();
    Object.defineProperty(exports, "distinct", { enumerable: true, get: function() {
      return distinct_1.distinct;
    } });
    var distinctUntilChanged_1 = require_distinctUntilChanged();
    Object.defineProperty(exports, "distinctUntilChanged", { enumerable: true, get: function() {
      return distinctUntilChanged_1.distinctUntilChanged;
    } });
    var distinctUntilKeyChanged_1 = require_distinctUntilKeyChanged();
    Object.defineProperty(exports, "distinctUntilKeyChanged", { enumerable: true, get: function() {
      return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
    } });
    var elementAt_1 = require_elementAt();
    Object.defineProperty(exports, "elementAt", { enumerable: true, get: function() {
      return elementAt_1.elementAt;
    } });
    var endWith_1 = require_endWith();
    Object.defineProperty(exports, "endWith", { enumerable: true, get: function() {
      return endWith_1.endWith;
    } });
    var every_1 = require_every();
    Object.defineProperty(exports, "every", { enumerable: true, get: function() {
      return every_1.every;
    } });
    var exhaust_1 = require_exhaust();
    Object.defineProperty(exports, "exhaust", { enumerable: true, get: function() {
      return exhaust_1.exhaust;
    } });
    var exhaustAll_1 = require_exhaustAll();
    Object.defineProperty(exports, "exhaustAll", { enumerable: true, get: function() {
      return exhaustAll_1.exhaustAll;
    } });
    var exhaustMap_1 = require_exhaustMap();
    Object.defineProperty(exports, "exhaustMap", { enumerable: true, get: function() {
      return exhaustMap_1.exhaustMap;
    } });
    var expand_1 = require_expand();
    Object.defineProperty(exports, "expand", { enumerable: true, get: function() {
      return expand_1.expand;
    } });
    var filter_1 = require_filter();
    Object.defineProperty(exports, "filter", { enumerable: true, get: function() {
      return filter_1.filter;
    } });
    var finalize_1 = require_finalize();
    Object.defineProperty(exports, "finalize", { enumerable: true, get: function() {
      return finalize_1.finalize;
    } });
    var find_1 = require_find();
    Object.defineProperty(exports, "find", { enumerable: true, get: function() {
      return find_1.find;
    } });
    var findIndex_1 = require_findIndex();
    Object.defineProperty(exports, "findIndex", { enumerable: true, get: function() {
      return findIndex_1.findIndex;
    } });
    var first_1 = require_first();
    Object.defineProperty(exports, "first", { enumerable: true, get: function() {
      return first_1.first;
    } });
    var groupBy_1 = require_groupBy();
    Object.defineProperty(exports, "groupBy", { enumerable: true, get: function() {
      return groupBy_1.groupBy;
    } });
    var ignoreElements_1 = require_ignoreElements();
    Object.defineProperty(exports, "ignoreElements", { enumerable: true, get: function() {
      return ignoreElements_1.ignoreElements;
    } });
    var isEmpty_1 = require_isEmpty();
    Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function() {
      return isEmpty_1.isEmpty;
    } });
    var last_1 = require_last();
    Object.defineProperty(exports, "last", { enumerable: true, get: function() {
      return last_1.last;
    } });
    var map_1 = require_map();
    Object.defineProperty(exports, "map", { enumerable: true, get: function() {
      return map_1.map;
    } });
    var mapTo_1 = require_mapTo();
    Object.defineProperty(exports, "mapTo", { enumerable: true, get: function() {
      return mapTo_1.mapTo;
    } });
    var materialize_1 = require_materialize();
    Object.defineProperty(exports, "materialize", { enumerable: true, get: function() {
      return materialize_1.materialize;
    } });
    var max_1 = require_max();
    Object.defineProperty(exports, "max", { enumerable: true, get: function() {
      return max_1.max;
    } });
    var mergeAll_1 = require_mergeAll();
    Object.defineProperty(exports, "mergeAll", { enumerable: true, get: function() {
      return mergeAll_1.mergeAll;
    } });
    var flatMap_1 = require_flatMap();
    Object.defineProperty(exports, "flatMap", { enumerable: true, get: function() {
      return flatMap_1.flatMap;
    } });
    var mergeMap_1 = require_mergeMap();
    Object.defineProperty(exports, "mergeMap", { enumerable: true, get: function() {
      return mergeMap_1.mergeMap;
    } });
    var mergeMapTo_1 = require_mergeMapTo();
    Object.defineProperty(exports, "mergeMapTo", { enumerable: true, get: function() {
      return mergeMapTo_1.mergeMapTo;
    } });
    var mergeScan_1 = require_mergeScan();
    Object.defineProperty(exports, "mergeScan", { enumerable: true, get: function() {
      return mergeScan_1.mergeScan;
    } });
    var mergeWith_1 = require_mergeWith();
    Object.defineProperty(exports, "mergeWith", { enumerable: true, get: function() {
      return mergeWith_1.mergeWith;
    } });
    var min_1 = require_min();
    Object.defineProperty(exports, "min", { enumerable: true, get: function() {
      return min_1.min;
    } });
    var multicast_1 = require_multicast();
    Object.defineProperty(exports, "multicast", { enumerable: true, get: function() {
      return multicast_1.multicast;
    } });
    var observeOn_1 = require_observeOn();
    Object.defineProperty(exports, "observeOn", { enumerable: true, get: function() {
      return observeOn_1.observeOn;
    } });
    var onErrorResumeNextWith_1 = require_onErrorResumeNextWith();
    Object.defineProperty(exports, "onErrorResumeNextWith", { enumerable: true, get: function() {
      return onErrorResumeNextWith_1.onErrorResumeNextWith;
    } });
    var pairwise_1 = require_pairwise();
    Object.defineProperty(exports, "pairwise", { enumerable: true, get: function() {
      return pairwise_1.pairwise;
    } });
    var pluck_1 = require_pluck();
    Object.defineProperty(exports, "pluck", { enumerable: true, get: function() {
      return pluck_1.pluck;
    } });
    var publish_1 = require_publish();
    Object.defineProperty(exports, "publish", { enumerable: true, get: function() {
      return publish_1.publish;
    } });
    var publishBehavior_1 = require_publishBehavior();
    Object.defineProperty(exports, "publishBehavior", { enumerable: true, get: function() {
      return publishBehavior_1.publishBehavior;
    } });
    var publishLast_1 = require_publishLast();
    Object.defineProperty(exports, "publishLast", { enumerable: true, get: function() {
      return publishLast_1.publishLast;
    } });
    var publishReplay_1 = require_publishReplay();
    Object.defineProperty(exports, "publishReplay", { enumerable: true, get: function() {
      return publishReplay_1.publishReplay;
    } });
    var raceWith_1 = require_raceWith();
    Object.defineProperty(exports, "raceWith", { enumerable: true, get: function() {
      return raceWith_1.raceWith;
    } });
    var reduce_1 = require_reduce();
    Object.defineProperty(exports, "reduce", { enumerable: true, get: function() {
      return reduce_1.reduce;
    } });
    var repeat_1 = require_repeat();
    Object.defineProperty(exports, "repeat", { enumerable: true, get: function() {
      return repeat_1.repeat;
    } });
    var repeatWhen_1 = require_repeatWhen();
    Object.defineProperty(exports, "repeatWhen", { enumerable: true, get: function() {
      return repeatWhen_1.repeatWhen;
    } });
    var retry_1 = require_retry();
    Object.defineProperty(exports, "retry", { enumerable: true, get: function() {
      return retry_1.retry;
    } });
    var retryWhen_1 = require_retryWhen();
    Object.defineProperty(exports, "retryWhen", { enumerable: true, get: function() {
      return retryWhen_1.retryWhen;
    } });
    var refCount_1 = require_refCount();
    Object.defineProperty(exports, "refCount", { enumerable: true, get: function() {
      return refCount_1.refCount;
    } });
    var sample_1 = require_sample();
    Object.defineProperty(exports, "sample", { enumerable: true, get: function() {
      return sample_1.sample;
    } });
    var sampleTime_1 = require_sampleTime();
    Object.defineProperty(exports, "sampleTime", { enumerable: true, get: function() {
      return sampleTime_1.sampleTime;
    } });
    var scan_1 = require_scan();
    Object.defineProperty(exports, "scan", { enumerable: true, get: function() {
      return scan_1.scan;
    } });
    var sequenceEqual_1 = require_sequenceEqual();
    Object.defineProperty(exports, "sequenceEqual", { enumerable: true, get: function() {
      return sequenceEqual_1.sequenceEqual;
    } });
    var share_1 = require_share();
    Object.defineProperty(exports, "share", { enumerable: true, get: function() {
      return share_1.share;
    } });
    var shareReplay_1 = require_shareReplay();
    Object.defineProperty(exports, "shareReplay", { enumerable: true, get: function() {
      return shareReplay_1.shareReplay;
    } });
    var single_1 = require_single();
    Object.defineProperty(exports, "single", { enumerable: true, get: function() {
      return single_1.single;
    } });
    var skip_1 = require_skip();
    Object.defineProperty(exports, "skip", { enumerable: true, get: function() {
      return skip_1.skip;
    } });
    var skipLast_1 = require_skipLast();
    Object.defineProperty(exports, "skipLast", { enumerable: true, get: function() {
      return skipLast_1.skipLast;
    } });
    var skipUntil_1 = require_skipUntil();
    Object.defineProperty(exports, "skipUntil", { enumerable: true, get: function() {
      return skipUntil_1.skipUntil;
    } });
    var skipWhile_1 = require_skipWhile();
    Object.defineProperty(exports, "skipWhile", { enumerable: true, get: function() {
      return skipWhile_1.skipWhile;
    } });
    var startWith_1 = require_startWith();
    Object.defineProperty(exports, "startWith", { enumerable: true, get: function() {
      return startWith_1.startWith;
    } });
    var subscribeOn_1 = require_subscribeOn();
    Object.defineProperty(exports, "subscribeOn", { enumerable: true, get: function() {
      return subscribeOn_1.subscribeOn;
    } });
    var switchAll_1 = require_switchAll();
    Object.defineProperty(exports, "switchAll", { enumerable: true, get: function() {
      return switchAll_1.switchAll;
    } });
    var switchMap_1 = require_switchMap();
    Object.defineProperty(exports, "switchMap", { enumerable: true, get: function() {
      return switchMap_1.switchMap;
    } });
    var switchMapTo_1 = require_switchMapTo();
    Object.defineProperty(exports, "switchMapTo", { enumerable: true, get: function() {
      return switchMapTo_1.switchMapTo;
    } });
    var switchScan_1 = require_switchScan();
    Object.defineProperty(exports, "switchScan", { enumerable: true, get: function() {
      return switchScan_1.switchScan;
    } });
    var take_1 = require_take();
    Object.defineProperty(exports, "take", { enumerable: true, get: function() {
      return take_1.take;
    } });
    var takeLast_1 = require_takeLast();
    Object.defineProperty(exports, "takeLast", { enumerable: true, get: function() {
      return takeLast_1.takeLast;
    } });
    var takeUntil_1 = require_takeUntil();
    Object.defineProperty(exports, "takeUntil", { enumerable: true, get: function() {
      return takeUntil_1.takeUntil;
    } });
    var takeWhile_1 = require_takeWhile();
    Object.defineProperty(exports, "takeWhile", { enumerable: true, get: function() {
      return takeWhile_1.takeWhile;
    } });
    var tap_1 = require_tap();
    Object.defineProperty(exports, "tap", { enumerable: true, get: function() {
      return tap_1.tap;
    } });
    var throttle_1 = require_throttle();
    Object.defineProperty(exports, "throttle", { enumerable: true, get: function() {
      return throttle_1.throttle;
    } });
    var throttleTime_1 = require_throttleTime();
    Object.defineProperty(exports, "throttleTime", { enumerable: true, get: function() {
      return throttleTime_1.throttleTime;
    } });
    var throwIfEmpty_1 = require_throwIfEmpty();
    Object.defineProperty(exports, "throwIfEmpty", { enumerable: true, get: function() {
      return throwIfEmpty_1.throwIfEmpty;
    } });
    var timeInterval_1 = require_timeInterval();
    Object.defineProperty(exports, "timeInterval", { enumerable: true, get: function() {
      return timeInterval_1.timeInterval;
    } });
    var timeout_2 = require_timeout();
    Object.defineProperty(exports, "timeout", { enumerable: true, get: function() {
      return timeout_2.timeout;
    } });
    var timeoutWith_1 = require_timeoutWith();
    Object.defineProperty(exports, "timeoutWith", { enumerable: true, get: function() {
      return timeoutWith_1.timeoutWith;
    } });
    var timestamp_1 = require_timestamp();
    Object.defineProperty(exports, "timestamp", { enumerable: true, get: function() {
      return timestamp_1.timestamp;
    } });
    var toArray_1 = require_toArray();
    Object.defineProperty(exports, "toArray", { enumerable: true, get: function() {
      return toArray_1.toArray;
    } });
    var window_1 = require_window();
    Object.defineProperty(exports, "window", { enumerable: true, get: function() {
      return window_1.window;
    } });
    var windowCount_1 = require_windowCount();
    Object.defineProperty(exports, "windowCount", { enumerable: true, get: function() {
      return windowCount_1.windowCount;
    } });
    var windowTime_1 = require_windowTime();
    Object.defineProperty(exports, "windowTime", { enumerable: true, get: function() {
      return windowTime_1.windowTime;
    } });
    var windowToggle_1 = require_windowToggle();
    Object.defineProperty(exports, "windowToggle", { enumerable: true, get: function() {
      return windowToggle_1.windowToggle;
    } });
    var windowWhen_1 = require_windowWhen();
    Object.defineProperty(exports, "windowWhen", { enumerable: true, get: function() {
      return windowWhen_1.windowWhen;
    } });
    var withLatestFrom_1 = require_withLatestFrom();
    Object.defineProperty(exports, "withLatestFrom", { enumerable: true, get: function() {
      return withLatestFrom_1.withLatestFrom;
    } });
    var zipAll_1 = require_zipAll();
    Object.defineProperty(exports, "zipAll", { enumerable: true, get: function() {
      return zipAll_1.zipAll;
    } });
    var zipWith_1 = require_zipWith();
    Object.defineProperty(exports, "zipWith", { enumerable: true, get: function() {
      return zipWith_1.zipWith;
    } });
  }
});

// ../../biz-nest/node_modules/axios-observable/dist/create-observable.js
var require_create_observable = __commonJS({
  "../../biz-nest/node_modules/axios-observable/dist/create-observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createObservable = void 0;
    var rxjs_1 = require_cjs();
    function createObservable(promiseFactory, ...args) {
      let config = args[args.length - 1];
      config = config ? Object.assign({}, config) : {};
      args[args.length - 1] = config;
      let abortController;
      const hasCancelToken = !!config.cancelToken;
      const hasSignal = !!config.signal;
      if (hasCancelToken) {
        console.warn(`No need to use cancel token, just unsubscribe the subscription would cancel the http request automatically`);
      }
      if (hasSignal) {
        console.warn(`No need to use cancel token, just unsubscribe the subscription would cancel the http request automatically`);
      }
      const observable = new rxjs_1.Observable((subscriber) => {
        if (!hasSignal) {
          abortController = new AbortController();
          config.signal = abortController.signal;
        }
        promiseFactory(...args).then((response) => {
          subscriber.next(response);
          subscriber.complete();
        }).catch((error) => subscriber.error(error));
      });
      const _subscribe = observable.subscribe.bind(observable);
      observable.subscribe = (...args2) => {
        const subscription = _subscribe(...args2);
        const _unsubscribe = subscription.unsubscribe.bind(subscription);
        subscription.unsubscribe = () => {
          if (abortController) {
            abortController.abort();
          }
          _unsubscribe();
        };
        return subscription;
      };
      return observable;
    }
    exports.createObservable = createObservable;
  }
});

// ../../biz-nest/node_modules/axios-observable/dist/axios.js
var require_axios2 = __commonJS({
  "../../biz-nest/node_modules/axios-observable/dist/axios.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Axios = void 0;
    var axios_1 = __importDefault(require_axios());
    var create_observable_1 = require_create_observable();
    var Axios2 = class _Axios {
      constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
      }
      get defaults() {
        return this.axiosInstance.defaults;
      }
      get interceptors() {
        return this.axiosInstance.interceptors;
      }
      static request(config) {
        return (0, create_observable_1.createObservable)(axios_1.default.request, config);
      }
      static get(url, config) {
        return (0, create_observable_1.createObservable)(axios_1.default.get, url, config);
      }
      static post(url, data, config) {
        return (0, create_observable_1.createObservable)(axios_1.default.post, url, data, config);
      }
      static put(url, data, config) {
        return (0, create_observable_1.createObservable)(axios_1.default.put, url, data, config);
      }
      static patch(url, data, config) {
        return (0, create_observable_1.createObservable)(axios_1.default.patch, url, data, config);
      }
      static delete(url, config) {
        return (0, create_observable_1.createObservable)(axios_1.default.delete, url, config);
      }
      static head(url, config) {
        return (0, create_observable_1.createObservable)(axios_1.default.head, url, config);
      }
      static create(config) {
        return new _Axios(axios_1.default.create(config));
      }
      request(config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.request, config);
      }
      get(url, config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.get, url, config);
      }
      head(url, config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.head, url, config);
      }
      post(url, data, config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.post, url, data, config);
      }
      put(url, data, config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.put, url, data, config);
      }
      patch(url, data, config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.patch, url, data, config);
      }
      delete(url, config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.delete, url, config);
      }
    };
    exports.Axios = Axios2;
    Axios2.defaults = axios_1.default.defaults;
    Axios2.interceptors = axios_1.default.interceptors;
    exports.default = Axios2;
  }
});

// ../../biz-nest/node_modules/axios-observable/dist/index.js
var require_dist = __commonJS({
  "../../biz-nest/node_modules/axios-observable/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Axios = void 0;
    __exportStar(require_axios_observable_interface(), exports);
    var axios_1 = require_axios2();
    Object.defineProperty(exports, "Axios", { enumerable: true, get: function() {
      return axios_1.Axios;
    } });
    exports.default = axios_1.Axios;
  }
});

// ../../biz-nest/packages/core/client/lib/esm/utils/error-handlers.js
var BizNestClientError = class extends Error {
  /**
   * Creates a new BizNestClientError instance.
   * @param message - Error message
   */
  constructor(message) {
    super(message);
    this.name = "BizNestClientError";
    Error.captureStackTrace(this, this.constructor);
  }
};
var BizNestClientValidationError = class _BizNestClientValidationError extends BizNestClientError {
  /**
   * Creates a new BizNestClientValidationError instance.
   * @param message - Error message
   * @param field - The field that failed validation (optional)
   */
  constructor(message, field) {
    super(message);
    this.name = "BizNestClientValidationError";
    this.field = field;
    Error.captureStackTrace(this, this.constructor);
  }
  /**
   * Creates a validation error for a missing required field.
   * @param field - The name of the missing field
   * @returns A new validation error instance
   */
  static fromMissingField(field) {
    return new _BizNestClientValidationError(`Missing required field: ${field}`, field);
  }
  /**
   * Creates a validation error for an invalid field value.
   * @param field - The name of the field with invalid value
   * @param reason - Description of why the value is invalid
   * @returns A new validation error instance
   */
  static fromInvalidValue(field, reason) {
    return new _BizNestClientValidationError(`Invalid value for field ${field}: ${reason}`, field);
  }
};
function validateData(data, typeChecks) {
  for (const [field, rules] of Object.entries(typeChecks)) {
    const value = data[field];
    const { required = true, validate, message } = rules;
    if (required && (value === void 0 || value === null)) {
      throw BizNestClientValidationError.fromMissingField(field);
    }
    if (value === void 0 || value === null) {
      continue;
    }
    if (!validate(value)) {
      throw BizNestClientValidationError.fromInvalidValue(field, message || "failed type validation");
    }
  }
}

// ../../biz-nest/packages/core/client/lib/esm/utils/frontend-logger.js
var import_loglevel = __toESM(require_loglevel());
var DEFAULT_APP_NAME = "BIZ-NEST";
var DEFAULT_LOG_LEVEL = "debug";
var FrontendLogger = class _FrontendLogger {
  /**
   * Configures the logger's application name and/or desired log level.
   * This method can be called dynamically at any point in the application lifecycle
   * to change the logger's behavior.
   *
   * @param name Optional: The new name of the application to be displayed in logs.
   * @param logLevel Optional: The new log level (e.g., 'debug', 'info', 'warn').
   */
  static configure(name, logLevel) {
    let shouldReinitializeMethods = false;
    const currentLevel = _FrontendLogger.internalLogger.getLevel();
    if (name && _FrontendLogger.appName !== name) {
      _FrontendLogger.appName = name;
      shouldReinitializeMethods = true;
    }
    if (logLevel !== void 0 && logLevel !== currentLevel) {
      _FrontendLogger.internalLogger.setLevel(logLevel);
    } else if (shouldReinitializeMethods) {
      _FrontendLogger.internalLogger.setLevel(currentLevel);
    }
  }
  // --- Public Static Logging Methods ---
  // These methods are the public API for logging. They simply delegate to the
  // `internalLogger` instance, which is now configured with our custom formatting
  // via the `methodFactory` override.
  static trace(...args) {
    _FrontendLogger.internalLogger.trace(...args);
  }
  static debug(...args) {
    _FrontendLogger.internalLogger.debug(...args);
  }
  static info(...args) {
    _FrontendLogger.internalLogger.info(...args);
  }
  static warn(...args) {
    _FrontendLogger.internalLogger.warn(...args);
  }
  static error(...args) {
    _FrontendLogger.internalLogger.error(...args);
  }
  // --- Private Static Helper Methods ---
  // These methods are internal implementation details and are placed at the end
  // for better readability of the class's public interface.
  /**
   * Helper to get the CSS style string for a given log level.
   * This returns the style for the LEVEL PART ITSELF (e.g., DEBUG label)
   * within the log prefix. It includes text color, background color, padding, and border-radius.
   */
  static getLevelStyle(level) {
    const levelString = typeof level === "string" ? level.toLowerCase() : String(level);
    switch (levelString) {
      case "trace":
      case "0":
        return "color: white; background-color: #9C27B0; padding: 2px 4px; border-radius: 3px;";
      case "debug":
      case "1":
        return "color: white; background-color: #2196F3; padding: 2px 4px; border-radius: 3px;";
      case "info":
      case "2":
        return "color: white; background-color: #4CAF50; padding: 2px 4px; border-radius: 3px;";
      case "warn":
      case "3":
        return "color: black; background-color: #FFEB3B; padding: 2px 4px; border-radius: 3px;";
      case "error":
      case "4":
        return "color: white; background-color: #F44336; padding: 2px 4px; border-radius: 3px;";
      case "silent":
      case "5":
        return "";
      default:
        return "";
    }
  }
  /**
   * Helper to get a subtle background color for the *entire log line's content*
   * based on the log level. This helps visually distinguish different log types.
   */
  static getLineBackgroundColor(level) {
    const levelString = typeof level === "string" ? level.toLowerCase() : String(level);
    switch (levelString) {
      case "trace":
      case "0":
        return "background-color: #F3E5F5;";
      case "debug":
      case "1":
        return "background-color: #e3f2fd;";
      case "info":
      case "2":
        return "background-color: #e8f5e9;";
      case "warn":
      case "3":
        return "background-color: #fffde7;";
      case "error":
      case "4":
        return "background-color: #ffebee;";
      default:
        return "";
    }
  }
};
FrontendLogger.appName = DEFAULT_APP_NAME;
FrontendLogger.internalLogger = import_loglevel.default.getLogger("appLogger");
(() => {
  const originalMethodFactory = FrontendLogger.internalLogger.methodFactory;
  FrontendLogger.internalLogger.methodFactory = (methodName, logLevel, loggerName) => {
    const rawConsoleMethod = originalMethodFactory(methodName, logLevel, loggerName);
    return (...messageArgs) => {
      if (!rawConsoleMethod) {
        return;
      }
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const effectiveAppName = FrontendLogger.appName;
      const levelPart = typeof methodName === "string" ? methodName.toUpperCase() : String(methodName).toUpperCase();
      const formattedPrefixString = `%c[${timestamp}] %c${effectiveAppName}:%c${levelPart}%c `;
      const prefixStylesArray = [
        "color: gray;",
        // Style for the timestamp part `[${timestamp}]`
        "color:rgb(140, 199, 203); font-weight: bold;",
        // Style for the app name part `${effectiveAppName}:`
        FrontendLogger.getLevelStyle(logLevel),
        // Dynamic style for the log level part `${levelPart}`
        FrontendLogger.getLineBackgroundColor(logLevel)
        // Background style for the main message content
      ];
      rawConsoleMethod(formattedPrefixString, ...prefixStylesArray, ...messageArgs);
    };
  };
  FrontendLogger.internalLogger.setLevel(DEFAULT_LOG_LEVEL);
})();

// ../../biz-nest/packages/core/client/lib/esm/utils/ehttp.js
init_esm();
var import_axios_observable = __toESM(require_dist());
init_esm();
var getBizNestErrorResponseMessage = (error) => {
  const response = error.response?.data;
  if (response) {
    const errRes = response.err || response.message || "Unknown error";
    return errRes;
  }
  if (error.message) {
    return error.message;
  }
  return "Unknown error";
};
var EhttpController = class {
  /**
   * The constructor for the class.
   * @param axiosInstance - An instance of Axios.
   */
  constructor(config) {
    this.headers = {};
    this.isRefreshing = false;
    this.refreshTokenSubject = new BehaviorSubject(false);
    this.currentAccessToken = null;
    this.routesNotToRefresh = [
      "/auth/login",
      "/auth/signup",
      "/auth/password-resets/initiate",
      "/auth/password-resets/finalize",
      "/auth/verify-account",
      "/auth/resend-verification-code",
      "/auth/resend-verification-code/passwordless",
      "/auth/passwordless/signup",
      "/auth/passwordless/verify",
      "/auth/ws-login",
      "/auth/ws-signup",
      "/auth/logout",
      "/auth/ws-logout"
    ];
    this.refreshRetryState = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "/auth/refresh": { count: 0, timestamp: 0 },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "/auth/ws-refresh": { count: 0, timestamp: 0 }
    };
    this.REFRESH_RETRY_LIMIT = 5;
    this.REFRESH_RETRY_WINDOW_MS = 6e4;
    const mergedConfig = __spreadProps(__spreadValues({}, config), {
      withCredentials: true
      // Crucial for sending and receiving HttpOnly cookies
    });
    this.axiosInstance = import_axios_observable.default.create(mergedConfig);
    this.dontUserCookie = config.dontUserCookie === true;
    this.authServiceBaseUrl = config.authServiceBaseUrl || config.baseURL || "";
    if (!this.authServiceBaseUrl) {
      FrontendLogger.warn("EhttpController: authServiceBaseUrl or baseURL not provided. Token refresh may not work correctly.");
    }
    this.onRefreshFailure = config.onRefreshFailure || (() => {
      FrontendLogger.error("EhttpController: onRefreshFailure callback not provided. Defaulting to console log.");
    });
    this.getRefreshTokenForRefresh = config.getRefreshTokenForRefresh || (() => {
      if (this.dontUserCookie) {
        FrontendLogger.warn(`EhttpController: getRefreshTokenForRefresh callback 
            not provided in dontUserCookie mode. Token refresh might fail.`);
      }
      return Promise.reject(new BizNestClientError("getRefreshTokenForRefresh callback not provided."));
    });
    this.storeNewTokensAfterRefresh = config.storeNewTokensAfterRefresh || ((at, rt) => {
      if (this.dontUserCookie) {
        FrontendLogger.warn(`EhttpController: storeNewTokensAfterRefresh 
          callback not provided in dontUserCookie mode. New tokens will not be stored.`);
      }
      return Promise.reject(new BizNestClientError("storeNewTokensAfterRefresh callback not provided."));
    });
    this.interceptorAxios();
  }
  /**
   * A static method that creates a new instance of the class.
   * @param baseURL - The base URL for the Axios instance.
   * @param token - The authorization token for the Axios instance.
   * @returns A new instance of the EhttpController class.
   */
  /* static create = <T = never>(config: AxiosRequestConfig<T>) => {
      FrontendLogger.debug('create:: - config:', config);
      // Create a new Axios instance.
      const instance = Axios.create(config);
  
      // Return a new instance of the class.
      return new EhttpController(instance);
    }; */
  getAxiosInstance() {
    return this.axiosInstance;
  }
  /**
   * A method that appends a token to the headers of the Axios instance.
   * @param token - The authorization token to append to the headers.
   */
  appendToken(token) {
    if (!token) {
      throw new BizNestClientError("Token is required");
    }
    if (typeof token !== "string") {
      throw new BizNestClientError("Token must be of type string");
    }
    this.currentAccessToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
    if (!this.dontUserCookie) {
      FrontendLogger.warn(`appendToken:: - For web 
        (HttpOnly cookies), this method is generally not needed as the browser 
        handles Authorization automatically. Use it if you have specific 
        reasons to manually set the header.`);
    } else {
      FrontendLogger.debug("appendToken:: - currentAccessToken set for dontUserCookie use.");
    }
  }
  removeToken() {
    this.currentAccessToken = null;
    if (!this.dontUserCookie) {
      FrontendLogger.warn(`removeToken:: - For web (HttpOnly cookies), 
        clearing internal token does not log out the user. Consider calling your 
        backend logout endpoint instead.`);
    } else {
      FrontendLogger.debug("removeToken:: - internal currentAccessToken cleared for dontUserCookie use.");
    }
  }
  interceptorAxios() {
    this.axiosInstance.interceptors.request.use((config) => __async(this, null, function* () {
      FrontendLogger.debug("Request Interceptor: config headers BEFORE merge:", config.headers);
      if (!config.headers) {
        config.headers = {};
      }
      if (this.headers && typeof this.headers === "object") {
        Object.assign(config.headers, this.headers);
      }
      if (this.dontUserCookie && this.currentAccessToken && typeof this.currentAccessToken === "string") {
        config.headers["Authorization"] = this.currentAccessToken;
        FrontendLogger.debug("Request Interceptor: Added Authorization header for dontUserCookie.");
      } else if (!this.dontUserCookie) {
        FrontendLogger.debug("Request Interceptor: Relying on browser for HttpOnly cookie in web mode.");
      }
      FrontendLogger.debug("Request Interceptor: config headers AFTER merge:", config.headers);
      if (this.shouldAddRefreshToken(config) && config.method?.toLowerCase() === "post" && !this.dontUserCookie) {
        try {
          const refreshToken = yield this.getRefreshTokenForRefresh();
          if (refreshToken) {
            FrontendLogger.warn("Adding refresh token to request payload", refreshToken);
            config.data = __spreadProps(__spreadValues({}, config.data || {}), {
              refresh_token: refreshToken,
              refreshToken
              // Include both formats for compatibility
            });
            FrontendLogger.warn("Added refresh token to request payload", config.data);
          }
        } catch (error) {
          FrontendLogger.warn("Could not add refresh token to request", error);
        }
      }
      return config;
    }), (error) => {
      FrontendLogger.error(error, "Request Interceptor error:");
      return Promise.reject(error);
    });
    this.axiosInstance.interceptors.response.use((response) => {
      if (this.dontUserCookie && response.data) {
        const { access_token, refresh_token } = response.data;
        if (access_token && refresh_token) {
          this.storeNewTokensAfterRefresh(access_token, refresh_token).catch((error) => {
            FrontendLogger.error(error, "Failed to store tokens from response:");
          });
        }
      }
      return response;
    }, (error) => __async(this, null, function* () {
      const originalRequest = error.config;
      if (originalRequest?.url && this.isRefreshRetryLimitExceeded(originalRequest.url)) {
        this.onRefreshFailure();
        return Promise.reject(new BizNestClientError("Refresh retry limit exceeded"));
      }
      if (error.response?.status === 401 && originalRequest && !this.routesNotToRefresh.includes(originalRequest.url || "") && // eslint-disable-next-line @typescript-eslint/naming-convention
      !originalRequest._retry) {
        originalRequest._retry = true;
        FrontendLogger.warn("401 Unauthorized received. Attempting token refresh...");
        if (!this.isRefreshing) {
          this.isRefreshing = true;
          this.refreshTokenSubject.next(false);
          try {
            let refreshPayload = {};
            if (this.dontUserCookie) {
              const refreshToken = yield this.getRefreshTokenForRefresh();
              if (!refreshToken) {
                FrontendLogger.error("refresh failed: No refresh token found from getRefreshTokenForRefresh callback.");
                this.onRefreshFailure();
                return yield Promise.reject(new BizNestClientError("Refresh token not found for dontUserCookie mode."));
              }
              refreshPayload = {
                refreshToken,
                refresh_token: refreshToken
              };
            }
            FrontendLogger.debug(`Calling refresh token endpoint at: ${this.authServiceBaseUrl}/auth/refresh`);
            const refreshResponse = yield firstValueFrom(import_axios_observable.default.post(
              `${this.authServiceBaseUrl}auth/refresh`,
              refreshPayload,
              // Send refresh token in body for dontUserCookie mode, or empty for web (cookies)
              { withCredentials: true }
              // Always true for consistency, relies on browser for web cookies
            ));
            FrontendLogger.debug("Token refresh successful.");
            this.isRefreshing = false;
            this.refreshTokenSubject.next(true);
            if (this.dontUserCookie && refreshResponse?.data) {
              const newAccessToken = refreshResponse.data.access_token;
              const newRefreshToken = refreshResponse.data.refresh_token;
              if (newAccessToken && newRefreshToken) {
                yield this.storeNewTokensAfterRefresh(newAccessToken, newRefreshToken);
                this.appendToken(newAccessToken);
                FrontendLogger.debug("dontUserCookie mode: New tokens stored and internal state updated.");
              } else {
                FrontendLogger.warn(`dontUserCookie mode: Refresh response missing 
                      new access/refresh tokens. Cannot update local state.`);
                this.onRefreshFailure();
                return yield Promise.reject(new BizNestClientError("Invalid token refresh response."));
              }
            } else if (!this.dontUserCookie) {
              FrontendLogger.debug("Web: New cookies implicitly handled by browser after refresh.");
            }
            FrontendLogger.debug("Retrying original request...");
            const config = __spreadProps(__spreadValues({}, originalRequest), {
              headers: originalRequest.headers || {}
            });
            if (!config.headers) {
              config.headers = {};
            }
            config.headers["Authorization"] = this.currentAccessToken;
            return yield firstValueFrom(import_axios_observable.default.request(config));
          } catch (refreshError) {
            this.isRefreshing = false;
            this.refreshTokenSubject.error(refreshError);
            FrontendLogger.error(refreshError, "Token refresh failed. Executing onRefreshFailure callback.");
            this.onRefreshFailure();
            return yield Promise.reject(refreshError);
          } finally {
            this.isRefreshing = false;
          }
        } else {
          FrontendLogger.debug("Token refresh already in progress. Queueing request...");
          return firstValueFrom(this.refreshTokenSubject.pipe(
            // eslint-disable-next-line max-len
            filter((val) => val !== null),
            // Wait until refreshTokenSubject emits a non-null value (i.e., new token available)
            take(1),
            // Take only one value then complete
            switchMap(() => {
              FrontendLogger.debug("Queued request retrying after refresh...");
              return import_axios_observable.default.request(originalRequest);
            })
          ));
        }
      }
      return Promise.reject(error);
    }));
  }
  /**
   * Appends custom headers to all subsequent requests.
   * @param headers - Key-value pairs of headers to add
   * @throws {BizNestClientError} If headers are invalid
   */
  appendToHeaders(headers) {
    if (!headers) {
      throw new BizNestClientError("Headers are required");
    }
    if (typeof headers !== "object") {
      throw new BizNestClientError("Headers must be an object");
    }
    FrontendLogger.debug("appendToHeaders: Adding headers", headers);
    this.headers = __spreadValues(__spreadValues({}, this.headers), headers);
  }
  /**
   * Replaces all existing headers with the provided ones.
   * @param headers - New headers object
   * @throws {BizNestClientError} If headers are invalid
   */
  setHeaders(headers) {
    if (!headers) {
      throw new BizNestClientError("Headers are required");
    }
    if (typeof headers !== "object") {
      throw new BizNestClientError("Headers must be an object");
    }
    FrontendLogger.debug("setHeaders: Setting new headers", headers);
    this.headers = __spreadValues({}, headers);
  }
  /**
   * Removes all custom headers from subsequent requests.
   */
  clearHeaders() {
    this.headers = {};
    FrontendLogger.debug("clearHeaders: All custom headers cleared");
  }
  /**
   * Performs a GET request.
   * @template T - Expected response type
   * @param route - API endpoint path
   * @param retryTimes - Number of retry attempts (default: 5)
   * @returns Observable that emits the response data
   * @throws {BizNestClientError} If route is invalid
   */
  makeGet(route, retryTimes = 5) {
    if (!route) {
      throw new BizNestClientError("Route is required");
    }
    FrontendLogger.debug("makeGet: Sending request", { route });
    return this.axiosInstance.get(route).pipe(retry(retryTimes), map((res) => {
      FrontendLogger.debug("makeGet: Received response", { route, data: res.data });
      return res.data;
    }), catchError((error) => throwError(() => error)));
  }
  /**
   * Performs a PUT request.
   * @template T - Expected response type
   * @param route - API endpoint path
   * @param data - Request payload
   * @returns Observable that emits the response data
   * @throws {BizNestClientError} If route is invalid
   */
  makePut(route, data) {
    if (!route) {
      throw new BizNestClientError("Route is required");
    }
    FrontendLogger.debug("makePut: Sending request", { route, data });
    return this.axiosInstance.put(route, data).pipe(map((res) => {
      FrontendLogger.debug("makePut: Received response", { route, data: res.data });
      return res.data;
    }), catchError((error) => throwError(() => error)));
  }
  /**
   * Performs a POST request.
   * @template T - Expected response type
   * @param route - API endpoint path
   * @param data - Request payload
   * @returns Observable that emits the response data
   * @throws {BizNestClientError} If route is invalid
   */
  makePost(route, data) {
    if (!route) {
      throw new BizNestClientError("Route is required");
    }
    FrontendLogger.debug("makePost: Sending request", { route, data });
    return this.axiosInstance.post(route, data).pipe(map((res) => {
      FrontendLogger.debug("makePost: Received response", { route, data: res.data });
      return res.data;
    }), catchError((error) => throwError(() => error)));
  }
  /**
   * Performs a DELETE request.
   * @template T - Expected response type
   * @param route - API endpoint path
   * @returns Observable that emits the response data
   * @throws {BizNestClientError} If route is invalid
   */
  makeDelete(route) {
    if (!route) {
      throw new BizNestClientError("Route is required");
    }
    FrontendLogger.debug("makeDelete: Sending request", { route });
    return this.axiosInstance.delete(route).pipe(map((res) => {
      FrontendLogger.debug("makeDelete: Received response", { route, data: res.data });
      return res.data;
    }), catchError((error) => throwError(() => error)));
  }
  /**
     * A method that uploads files to the specified URL.
     * @param files - An array of files to upload.
  
     * @param url - The URL to upload the files to.
     * @param extras - Any extra data to include in the request.
     * @returns An Observable that emits the response data.
     */
  uploadFiles(files, url, extras) {
    if (!url) {
      throw new BizNestClientError("Route is required");
    }
    FrontendLogger.debug("uploadFiles: Sending request", { url, files, extras });
    const formData = new FormData();
    if (extras) {
      formData.append("data", JSON.stringify(extras));
    }
    for (const file of files) {
      formData.append(file.fieldname, file.blob);
    }
    FrontendLogger.debug("uploadFiles:: - url: %url , formData: %formData ", url, formData);
    const progressSubject = new Subject();
    const config = {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        const progress = {
          percent: percentCompleted,
          loaded: progressEvent.loaded,
          total: progressEvent.total
        };
        progressSubject.next(progress);
        FrontendLogger.debug("Upload progress: %d%", percentCompleted);
      }
    };
    const response$ = this.axiosInstance.post(url, formData, config).pipe(map((res) => {
      FrontendLogger.debug("uploadFiles", res.data);
      return {
        progress: progressSubject.asObservable(),
        response: of(res.data)
      };
    }), catchError((error) => throwError(() => error)));
    return response$;
  }
  /**
   * Determines if a refresh token should be added to the request.
   * @private
   */
  shouldAddRefreshToken(config) {
    const url = config.url || "";
    return this.dontUserCookie && (url.includes("/auth/logout") || url.includes("/auth/refresh")) || url.includes("/auth/ws-login") || url.includes("/auth/ws-refresh");
  }
  /**
   * Checks if refresh endpoint retry limit has been exceeded
   * @private
   */
  isRefreshRetryLimitExceeded(url) {
    const normalizedUrl = url.replace(this.authServiceBaseUrl, "");
    if (!["/auth/refresh", "/auth/ws-refresh"].includes(normalizedUrl)) {
      return false;
    }
    const now = Date.now();
    const retryState = this.refreshRetryState[normalizedUrl];
    if (now - retryState.timestamp > this.REFRESH_RETRY_WINDOW_MS) {
      retryState.count = 0;
      retryState.timestamp = now;
      return false;
    }
    if (retryState.count >= this.REFRESH_RETRY_LIMIT) {
      FrontendLogger.error(`Refresh retry limit exceeded for ${normalizedUrl}. Resetting state.`);
      retryState.count = 0;
      retryState.timestamp = now;
      return true;
    }
    retryState.count++;
    retryState.timestamp = now;
    return false;
  }
};

// ../../biz-nest/packages/core/client/lib/esm/utils/expensecategory.js
var expenseCategory = [
  // The category of expenses related to advertising.
  "advertising",
  // The category of expenses related to marketing.
  "marketing",
  // The category of expenses related to software.
  "software",
  // The category of expenses related to travel.
  "travel",
  // The category of expenses related to utilities.
  "utilities",
  // The category of expenses related to clothing.
  "clothing",
  // The category of expenses related to drinks.
  "drinks",
  // The category of expenses related to food.
  "food",
  // The category of expenses related to transport.
  "transport",
  // The category of expenses related to medical care.
  "medical",
  // The category of expenses related to insurance.
  "insurance",
  // The category of expenses related to repairs.
  "repairs",
  // The category of expenses related to rent.
  "rent",
  // The category of expenses related to electricity.
  "electricity",
  // The category of expenses related to internet access.
  "internet",
  // The category of expenses related to taxes.
  "taxes",
  // The category of expenses related to petrol.
  "petrol",
  // The category of expenses related to entertainment.
  "entertainment",
  // The category of expenses related to salaries.
  "salaries",
  // The category of expenses related to debt.
  "debt",
  // The category of expenses that do not fit into any other category.
  "others",
  // The category of expenses that are small and insignificant.
  "petty"
];

// ../../biz-nest/packages/core/client/lib/esm/defines/base/base.define.js
var DatabaseAuto = class {
  /**
   * Creates a new instance of DatabaseAuto.
   *
   * @constructor
   * @param {IdatabaseAuto} data - The data object containing document properties
   * @throws {Error} If validation of required fields fails
   *
   * @example
   * const data = {
   *   _id: '507f1f77bcf86cd799439011',
   *   createdAt: '2023-01-01T00:00:00.000Z',
   *   updatedAt: '2023-01-01T00:00:00.000Z'
   * };
   * const instance = new MyModel(data);
   */
  constructor(data) {
    validateData(data, {
      _id: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Database ID must be a non-empty string"
      },
      createdAt: {
        validate: (v) => {
          const createdAt = v instanceof Date ? v : new Date(v);
          return !isNaN(createdAt.getTime());
        },
        message: "Created at must be a valid date (Date object or ISO date string)"
      },
      updatedAt: {
        validate: (v) => {
          const updatedAt = v instanceof Date ? v : new Date(v);
          return !isNaN(updatedAt.getTime());
        },
        message: "Updated at must be a valid date (Date object or ISO date string)"
      }
    });
    this._id = data._id;
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = new Date(data.updatedAt);
  }
};

// ../../biz-nest/packages/core/client/lib/esm/types/error-types.js
var ERES_ERR;
(function(ERES_ERR2) {
  ERES_ERR2["UNAUTHENTICATED"] = "UNAUTHENTICATED";
  ERES_ERR2["UNAUTHORIZED"] = "UNAUTHORIZED";
  ERES_ERR2["UNPROCESSABLE"] = "UNPROCESSABLE";
  ERES_ERR2["NOT_FOUND"] = "NOT_FOUND";
  ERES_ERR2["SERVER_ERROR"] = "SERVER_ERROR";
  ERES_ERR2["BAD_REQUEST"] = "BAD_REQUEST";
  ERES_ERR2["FORBIDDEN"] = "FORBIDDEN";
  ERES_ERR2["CONFLICT"] = "CONFLICT";
  ERES_ERR2["UNAVAILABLE"] = "UNAVAILABLE";
  ERES_ERR2["SERVICE_UNAVAILABLE"] = "SERVICE_UNAVAILABLE";
  ERES_ERR2["BAD_GATEWAY"] = "BAD_GATEWAY";
  ERES_ERR2["GATEWAY_TIMEOUT"] = "GATEWAY_TIMEOUT";
  ERES_ERR2["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
  ERES_ERR2["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED";
  ERES_ERR2["BAD_REQUEST_PARAMS"] = "BAD_REQUEST_PARAMS";
  ERES_ERR2["BAD_REQUEST_BODY"] = "BAD_REQUEST_BODY";
  ERES_ERR2["BAD_REQUEST_QUERY"] = "BAD_REQUEST_QUERY";
  ERES_ERR2["BAD_REQUEST_HEADER"] = "BAD_REQUEST_HEADER";
  ERES_ERR2["BAD_REQUEST_COOKIE"] = "BAD_REQUEST_COOKIE";
  ERES_ERR2["BAD_REQUEST_FILE"] = "BAD_REQUEST_FILE";
  ERES_ERR2["BAD_REQUEST_FILE_COUNT"] = "BAD_REQUEST_FILE_COUNT";
  ERES_ERR2["BAD_REQUEST_FILE_SIZE"] = "BAD_REQUEST_FILE_SIZE";
  ERES_ERR2["BAD_REQUEST_FILE_TYPE"] = "BAD_REQUEST_FILE_TYPE";
  ERES_ERR2["BAD_REQUEST_FILE_NAME"] = "BAD_REQUEST_FILE_NAME";
  ERES_ERR2["BAD_REQUEST_FILE_TMP_PATH"] = "BAD_REQUEST_FILE_TMP_PATH";
  ERES_ERR2["BAD_REQUEST_FILE_MD5"] = "BAD_REQUEST_FILE_MD5";
  ERES_ERR2["BAD_REQUEST_FILE_SHA256"] = "BAD_REQUEST_FILE_SHA256";
  ERES_ERR2["BAD_REQUEST_FILE_SHA512"] = "BAD_REQUEST_FILE_SHA512";
  ERES_ERR2["BAD_REQUEST_FILE_SHA1"] = "BAD_REQUEST_FILE_SHA1";
  ERES_ERR2["BAD_REQUEST_FILE_SHA224"] = "BAD_REQUEST_FILE_SHA224";
  ERES_ERR2["BAD_REQUEST_FILE_SHA384"] = "BAD_REQUEST_FILE_SHA384";
  ERES_ERR2["BAD_REQUEST_FILE_SHA3_256"] = "BAD_REQUEST_FILE_SHA3_256";
  ERES_ERR2["BAD_REQUEST_FILE_SHA3_384"] = "BAD_REQUEST_FILE_SHA3_384";
  ERES_ERR2["BAD_REQUEST_FILE_SHA3_512"] = "BAD_REQUEST_FILE_SHA3_512";
  ERES_ERR2["LIMIT_FILE_SIZE"] = "LIMIT_FILE_SIZE";
  ERES_ERR2["FILE_TYPE_NOT_ALLOWED"] = "FILE_TYPE_NOT_ALLOWED";
  ERES_ERR2["TOO_MANY_ATTEMPTS"] = "TOO_MANY_ATTEMPTS";
  ERES_ERR2["INVALID_INPUT"] = "INVALID_INPUT";
})(ERES_ERR || (ERES_ERR = {}));
var ERES_ERR_LOCAL_401;
/* @__PURE__ */ (function(ERES_ERR_LOCAL_4012) {
})(ERES_ERR_LOCAL_401 || (ERES_ERR_LOCAL_401 = {}));
var ERES_ERR_LOCAL_403;
(function(ERES_ERR_LOCAL_4032) {
  ERES_ERR_LOCAL_4032["INVALID_ID"] = "LOCAL_403_INVALID_ID";
  ERES_ERR_LOCAL_4032["NO_IDS"] = "LOCAL_403_NO_IDS";
  ERES_ERR_LOCAL_4032["INVALID_IDS"] = "LOCAL_403_INVALID_IDS";
  ERES_ERR_LOCAL_4032["NO_ID"] = "LOCAL_403_NO_ID";
  ERES_ERR_LOCAL_4032["USER_LINKED"] = "LOCAL_403_USER_LINKED";
  ERES_ERR_LOCAL_4032["USERS_LINKED"] = "LOCAL_403_USERS_LINKED";
  ERES_ERR_LOCAL_4032["ACCOUNT_NOT_EXISTS"] = "LOCAL_403_ACCOUNT_NOT_EXISTS";
  ERES_ERR_LOCAL_4032["ACCOUNT_BLOCK"] = "LOCAL_403_ACCOUNT_BLOCK";
  ERES_ERR_LOCAL_4032["UNKNWON_IP"] = "LOCAL_403_UNKNOWN_IP";
  ERES_ERR_LOCAL_4032["PASSWORD_TOO_EASY"] = "LOCAL_403_PASSWORD_TOO_EASY";
  ERES_ERR_LOCAL_4032["PASSWORD_COMMON"] = "LOCAL_403_PASSWORD_COMMON";
  ERES_ERR_LOCAL_4032["PASSWORD_SHOULD_NOT_MATCH_PART_OF_EMAIL"] = "LOCAL_403_PASSWORD_NO_EMAIL_MATCH";
  ERES_ERR_LOCAL_4032["PASSWORD_SHOULD_NOT_MATCH_PART_OF_PHONE_NUMBER"] = "LOCAL_403_PASSWORD_NO_PHONE_MATCH";
  ERES_ERR_LOCAL_4032["PASSWORD_SHOULD_CONTAIN_AT_LEAST_ONE_SYMBOL_ONE_UPPERCASE_ONE_LOWERCASE_AND_ONE_NUMERIC_VALUE"] = "LOCAL_403_PASSWORD_COMPLEXITY_FAILED";
  ERES_ERR_LOCAL_4032["PASSWORD_TOO_SHORT"] = "LOCAL_403_PASSWORD_TOO_SHORT";
  ERES_ERR_LOCAL_4032["PASSWORD_TOO_LONG"] = "LOCAL_403_PASSWORD_TOO_LONG";
  ERES_ERR_LOCAL_4032["PASSWORD_TOO_WEAK"] = "LOCAL_403_PASSWORD_TOO_WEAK";
  ERES_ERR_LOCAL_4032["PASSWORD_TOO_STRONG"] = "LOCAL_403_PASSWORD_TOO_STRONG";
  ERES_ERR_LOCAL_4032["PASSWORD_TOO_WEIRD"] = "LOCAL_403_PASSWORD_TOO_WEIRD";
  ERES_ERR_LOCAL_4032["SPONSORED_MUST_HAVE_ITEMS"] = "LOCAL_403_SPONSORED_NO_ITEMS";
  ERES_ERR_LOCAL_4032["INVALID_TOKEN"] = "LOCAL_403_INVALID_TOKEN";
  ERES_ERR_LOCAL_4032["INVALID_CODE"] = "LOCAL_403_INVALID_CODE";
  ERES_ERR_LOCAL_4032["INVALID_VERIFICATION_LINK"] = "LOCAL_403_INVALID_VERIFICATION_LINK";
  ERES_ERR_LOCAL_4032["VERIFICATION_TIMEOUT"] = "LOCAL_403_VERIFICATION_TIMEOUT";
  ERES_ERR_LOCAL_4032["MAX_VERIFICATION_ATTEMPTS"] = "LOCAL_403_MAX_VERIFICATION_ATTEMPTS";
  ERES_ERR_LOCAL_4032["INVALID_VERIFICATION_CODE"] = "LOCAL_403_INVALID_VERIFICATION_CODE";
  ERES_ERR_LOCAL_4032["NO_COUNTRY_CODE"] = "LOCAL_403_NO_COUNTRY_CODE";
  ERES_ERR_LOCAL_4032["INVALID_REMEMBER_ME"] = "LOCAL_403_INVALID_REMEMBER_ME";
  ERES_ERR_LOCAL_4032["INVALID_REMEMBER_ME_DAYS_LESS"] = "LOCAL_403_REMEMBER_ME_DAYS_LESS";
  ERES_ERR_LOCAL_4032["INVALID_REMEMBER_ME_DAYS_GREATER"] = "LOCAL_403_REMEMBER_ME_DAYS_GREATER";
  ERES_ERR_LOCAL_4032["ACCOUNT_NOT_VERIFIED"] = "LOCAL_403_ACCOUNT_NOT_VERIFIED";
  ERES_ERR_LOCAL_4032["ACCOUNT_NOT_VERIFIED_EMAIL"] = "LOCAL_403_ACCOUNT_NOT_VERIFIED_EMAIL";
  ERES_ERR_LOCAL_4032["ACCOUNT_NOT_VERIFIED_PHONE"] = "LOCAL_403_ACCOUNT_NOT_VERIFIED_PHONE";
  ERES_ERR_LOCAL_4032["ACCOUNT_NOT_VERIFIED_PASSWORDLESS_EMAIL"] = "LOCAL_403_ACCOUNT_NOT_VERIFIED_PASSWORDLESS_EMAIL";
  ERES_ERR_LOCAL_4032["ACCOUNT_NOT_VERIFIED_PASSWORDLESS_PHONE"] = "LOCAL_403_ACCOUNT_NOT_VERIFIED_PASSWORDLESS_PHONE";
  ERES_ERR_LOCAL_4032["PENDING_FIRST_SUBSCRIPTION"] = "LOCAL_403_PENDING_FIRST_SUBSCRIPTION";
  ERES_ERR_LOCAL_4032["PENDING_SUBSCRIPTION"] = "LOCAL_403_PENDING_SUBSCRIPTION";
  ERES_ERR_LOCAL_4032["COMPANY_NOT_VERIFIED"] = "LOCAL_403_COMPANY_NOT_VERIFIED";
  ERES_ERR_LOCAL_4032["COMPANY_SUSPENDED_DUE_TO_SUBSCRIPTION"] = "LOCAL_403_COMPANY_SUSPENDED_DUE_TO_SUBSCRIPTION";
  ERES_ERR_LOCAL_4032["COMPANY_BLOCKED"] = "LOCAL_403_COMPANY_BLOCKED";
  ERES_ERR_LOCAL_4032["COMPANY_LEFT"] = "LOCAL_403_COMPANY_LEFT";
  ERES_ERR_LOCAL_4032["SUBSCRIPTION_INACTIVE_OR_EXPIRED"] = "LOCAL_401_SUBSCRIPTION_INACTIVE_OR_EXPIRED";
  ERES_ERR_LOCAL_4032["SUBSCRIPTION_FEATURE_LIMIT_EXCEEDED"] = "LOCAL_401_SUBSCRIPTION_FEATURE_LIMIT_EXCEEDED";
})(ERES_ERR_LOCAL_403 || (ERES_ERR_LOCAL_403 = {}));
var ERS_ERR_FILE;
/* @__PURE__ */ (function(ERS_ERR_FILE2) {
})(ERS_ERR_FILE || (ERS_ERR_FILE = {}));

// ../../biz-nest/packages/core/client/lib/esm/utils/makerandomstring.js
var makeRandomString = (length, how) => {
  let outString = "";
  let inOptions;
  switch (how) {
    case "numbers":
      inOptions = "0123456789";
      break;
    case "letters":
      inOptions = "abcdefghijklmnopqrstuvwxyz";
      break;
    case "combined":
      inOptions = "abcdefghijklmnopqrstuvwxyz0123456789";
      break;
  }
  for (let i = 0; i < length; i++) {
    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
  }
  return outString;
};

// ../../biz-nest/packages/commerce/client/lib/esm/defines/company/company.define.js
init_esm();

// ../../biz-nest/packages/commerce/client/lib/esm/commerce-client.js
var CommerceClient = class _CommerceClient {
  /**
   * Creates an instance of CommerceClient with comprehensive environment validation.
   *
   * @param {IehttpControllerConfig} config - Configuration object for the underlying HTTP client.
   * @throws {BizNestClientError} When the provided configuration is invalid or missing required properties.
   *
   * @example
   * ```typescript
   * const client = new CommerceClient({
   *   baseURL: 'https://api.example.com',
   *   headers: {
   *     'Authorization': 'Bearer token123'
   *   }
   * });
   * ```
   */
  constructor(config) {
    if (!config || typeof config !== "object") {
      throw new BizNestClientError("config must be a valid object");
    }
    FrontendLogger.debug("CommerceClient initialized");
    _CommerceClient.http = new EhttpController(config);
  }
  /**
   * Static getter to access the HTTP controller instance.
   *
   * @returns {EhttpController} The HTTP controller instance.
   * @throws {BizNestClientError} When the HTTP client has not been initialized.
   *
   * @example
   * ```typescript
   * // Get the HTTP client
   * const http = CommerceClient.ehttp;
   *
   * // Make a GET request
   * const response = await http.get('/api/products');
   * ```
   *
   * @static
   * @readonly
   */
  static get ehttp() {
    if (!_CommerceClient.http) {
      throw new BizNestClientError("HTTP client not initialized. Call new CommerceClient().");
    }
    return _CommerceClient.http;
  }
};

// ../../biz-nest/packages/commerce/client/lib/esm/defines/company/company.define.js
var Company = class _Company extends DatabaseAuto {
  /**
   * Creates a new Company instance with validated data.
   * @param {Icompany} data - The company data to initialize with
   * @throws {Error} When validation of the input data fails
   */
  constructor(data) {
    validateData(data, {
      urId: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string" && v.trim().length > 0,
        message: "urId must be a non-empty string"
      },
      name: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Company name must be a non-empty string "
      },
      displayName: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string" && v.trim().length > 0,
        message: "Display name must be a non-empty string"
      },
      dateOfEst: {
        required: false,
        validate: (v) => v === void 0 || !isNaN(v instanceof Date ? v.getTime() : new Date(v).getTime()),
        message: "Date of establishment must be a valid date (Date object or ISO date string)"
      },
      businessType: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string" && v.trim().length > 0,
        message: "Business type must be a non-empty string"
      },
      blocked: {
        validate: (v) => typeof v === "boolean",
        message: "Blocked must be a boolean"
      },
      verified: {
        required: false,
        validate: (v) => typeof v === "boolean",
        message: "Verified must be a boolean"
      },
      owner: {
        validate: (v) => typeof v === "string" || typeof v === "object" && v !== null,
        message: "Owner must be a string or a User object"
      }
    });
    super(data);
    this.urId = data.urId || "";
    this.name = data.name || "Unknown";
    this.displayName = data.displayName || "Unknown";
    if (data.dateOfEst) {
      this.dateOfEst = new Date(data.dateOfEst);
    }
    this.details = data.details || "";
    this.businessType = data.businessType || "General";
    this.websiteAddress = data.websiteAddress || "";
    if (data.blockedReasons && Object.keys(data.blockedReasons).length > 0) {
      this.blockedReasons = data.blockedReasons;
    }
    this.left = data.left || false;
    if (data.dateLeft) {
      this.dateLeft = new Date(data.dateLeft);
    }
    this.blocked = data.blocked || false;
    this.verified = data.verified || false;
    this.address = data.address || "";
    this.owner = data.owner;
    this.logo = data.logo;
    this.logoBackgroundPic = data.logoBackgroundPic;
    this.photos = data.photos;
    this.isPendingFirstSubscription = data.isPendingFirstSubscription || false;
  }
  /**
   * Retrieves all companies with pagination.
   * @param {number} [offset=0] - Number of records to skip
   * @param {number} [limit=20] - Maximum number of records to return
   * @returns {Promise<{count: number, dataArr: Company[]}>} Paginated list of companies
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_Company.baseUrl}?${query}`);
      const companys = yield lastValueFrom(observer$);
      return {
        count: companys.count,
        dataArr: companys.data.map((val) => new _Company(val))
      };
    });
  }
  /**
   * Filters companies based on provided criteria.
   * @param {IfilterProps} filter - Filter criteria for companies
   * @returns {Promise<{count: number, dataArr: Company[]}>} Filtered list of companies
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Company.baseUrl}/filter`, filter2);
      const companys = yield lastValueFrom(observer$);
      return {
        count: companys.count,
        dataArr: companys.data.map((val) => new _Company(val))
      };
    });
  }
  /**
   * Retrieves a single company by its ID.
   * @param {string} resourceId - The unique identifier of the company
   * @returns {Promise<Company>} The requested company
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_Company.baseUrl}/${resourceId}`);
      const company = yield lastValueFrom(observer$);
      return new _Company(company);
    });
  }
  /**
   * Retrieves all companies associated with the current user.
   * @returns {Promise<Company[]>} Array of user's companies
   */
  static myProfiles() {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Company.baseUrl}/my-profiles`, {});
      const company = yield lastValueFrom(observer$);
      return company.map((val) => new _Company(val));
    });
  }
  /**
   * Adds a new company to the database.
   * @param {TcompanyRequest<true>} payload - The company data to create
   * @returns {Promise<{success: boolean, company: Icompany, isFirstTime: boolean}>}
   * Result of the creation operation
   */
  static add(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Company.baseUrl}`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Removes multiple companies in bulk.
   * @param {IbulkDelete} payload - Criteria for bulk deletion
   * @returns {Promise<IbulkDeleteSuccessResponse>} Result of the bulk delete operation
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Company.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current company with new values.
   * @param {TcompanyRequest} payload - The data to update
   * @returns {Promise<Company>} The updated company
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_Company.baseUrl}/${this._id}`, payload);
      return new _Company(yield lastValueFrom(observer$));
    });
  }
  /**
   * Uploads owner-related images to the company.
   * @param {Ifile[]} files - Array of image files to upload
   * @returns {Observable<Icompany>} Observable with the updated company
   */
  uploadOwnerImages(files) {
    return CommerceClient.ehttp.uploadFiles(files, `${_Company.baseUrl}/upload-owner-images`, { _id: this._id });
  }
  /**
   * Uploads the owner's profile picture.
   * @param {Ifile} file - The image file to upload
   * @returns {Observable<Icompany>} Observable with the updated company
   */
  uploadProfilePicture(file) {
    return CommerceClient.ehttp.uploadFiles([file], `${_Company.baseUrl}/upload-owner-profile-picture`, { _id: this._id });
  }
  /**
   * Uploads the owner's profile cover picture.
   * @param {Ifile} file - The image file to upload
   * @returns {Observable<Icompany>} Observable with the updated company
   */
  uploadProfileCoverPicture(file) {
    return CommerceClient.ehttp.uploadFiles([file], `${_Company.baseUrl}/upload-owner-profile-cover-picture`, { _id: this._id });
  }
  /**
   * Sets an uploaded image as the specified owner image type.
   * @param {string} fileId - ID of the uploaded file
   * @param {'profilePicture' | 'profileCoverPicture'} field - Which image field to set
   * @returns {Promise<Company>} The updated company
   */
  setOwnerImageAs(fileId, field) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Company.baseUrl}/set-owner-picture-as`, { fileId, field });
      return new _Company(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes owner-related images from the company.
   * @param {string[]} fileIds - Array of file IDs to delete
   * @returns {Promise<Company>} The updated company
   */
  deleteOwnerImages(fileIds) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Company.baseUrl}/delete-owner-images`, { fileIds, _id: this._id });
      return new _Company(yield lastValueFrom(observer$));
    });
  }
  /**
   * Uploads general company images.
   * @param {Ifile[]} files - Array of image files to upload
   * @returns {Observable<Icompany>} Observable with the updated company
   */
  uploadImages(files) {
    return CommerceClient.ehttp.uploadFiles(files, `${_Company.baseUrl}/upload-images`, { _id: this._id });
  }
  /**
   * Uploads the company logo.
   * @param {Ifile} file - The logo image file
   * @returns {Observable<Icompany>} Observable with the updated company
   */
  uploadLogo(file) {
    return CommerceClient.ehttp.uploadFiles([file], `${_Company.baseUrl}/upload-logo`, { _id: this._id });
  }
  /**
   * Uploads the company's cover photo.
   * @param {Ifile} file - The cover image file
   * @returns {Observable<Icompany>} Observable with the updated company
   */
  uploadLogoCoverPicture(file) {
    return CommerceClient.ehttp.uploadFiles([file], `${_Company.baseUrl}/upload-logo-cover-picture`, { _id: this._id });
  }
  /**
   * Sets an uploaded image as the specified company image type.
   * @param {string} fileId - ID of the uploaded file
   * @param {'logo' | 'logoBackgroundPic'} field - Which image field to set
   * @returns {Promise<Company>} The updated company
   */
  setImageAs(fileId, field) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Company.baseUrl}/set-image-as`, { fileId, field });
      return new _Company(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes company images.
   * @param {string[]} fileIds - Array of file IDs to delete
   * @returns {Promise<Company>} The updated company
   */
  deleteImages(fileIds) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Company.baseUrl}/delete-images`, { fileIds, _id: this._id });
      return new _Company(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current company from the database.
   * @returns {Promise<IdeleteOneResponse | null>} Result of the delete operation
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_Company.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
  /**
   * Changes the currency preference for the company.
   * @param {string} currency - The new currency code (e.g., 'USD', 'EUR')
   * @returns {Promise<Isuccess>} Result of the currency change operation
   */
  changeUserCurrency(currency) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Company.baseUrl}/change-currency`, { currency });
    return lastValueFrom(observer$);
  }
};
Company.baseUrl = "/company";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/fund-and-order-related/ecommerce-order.define.js
init_esm();
var EcommerceOrder = class _EcommerceOrder extends DatabaseAuto {
  /**
   * Creates a new instance of EcommerceOrder.
   * @param {TecommerceOrder} data - The order data used to initialize the instance
   * @throws {Error} Throws an error if the data is invalid or missing required fields
   */
  constructor(data) {
    const validOrderStatuses = [
      "pending",
      "processing",
      "shipped",
      "delivered",
      "completed",
      "cancelled",
      "refunded"
    ];
    validateData(data, {
      deliveryDate: {
        validate: (v) => {
          const deliveryDate = v instanceof Date ? v : new Date(v);
          return !isNaN(deliveryDate.getTime()) && deliveryDate > /* @__PURE__ */ new Date();
        },
        message: "Delivery date must be a valid date (Date object or ISO date string) in the future"
      },
      ecommerceOrderStatus: {
        validate: (v) => typeof v === "string" && validOrderStatuses.includes(v),
        message: `EcommerceOrder status must be one of: ${validOrderStatuses.join(", ")}`
      },
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      },
      billingAddress: {
        validate: (v) => v !== null && typeof v === "object",
        message: "Billing address must be a valid object"
      },
      shippingAddress: {
        validate: (v) => v !== null && typeof v === "object",
        message: "Shipping address must be a valid object"
      },
      shippingCost: {
        validate: (v) => typeof v === "number" && v >= 0,
        message: "Shipping cost must be a non-negative number"
      },
      paymentMethod: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Payment method must be a non-empty string"
      }
    });
    super(data);
    this.deliveryDate = new Date(data.deliveryDate);
    if (data.inspectionDate) {
      this.inspectionDate = new Date(data.inspectionDate);
    }
    this.ecommerceOrderStatus = data.ecommerceOrderStatus;
    this.urId = data.urId;
    this.ecommerceVendors = data.ecommerceVendors;
    if (data.orderDate) {
      this.orderDate = new Date(data.orderDate);
    }
    this.billingAddress = data.billingAddress;
    this.shippingAddress = data.shippingAddress;
    this.isPromo = Boolean(data.isPromo);
    this.isOffer = Boolean(data.isOffer);
    this.shippingCost = data.shippingCost;
    this.paymentMethod = data.paymentMethod;
    this.orderDeliveryCode = data.orderDeliveryCode;
    this.paymentMeta = data.paymentMeta;
    this.transferDetails = data.transferDetails;
    this.retryDetails = data.retryDetails;
    this.invoice = data.invoice;
    this.ecommerceOrderNumber = data.ecommerceOrderNumber;
    this.buyer = data.buyer;
    this.orderMethod = data.orderMethod;
  }
  /**
   * Retrieves the current user's orders with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: EcommerceOrder[] }>}
   * An object containing the total count and an array of order records
   * @throws {Error} If there's an error fetching the orders
   */
  static getMyOrders(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_EcommerceOrder.baseUrl}/get-my-orders?${query}`);
      const orders = yield lastValueFrom(observer$);
      return {
        count: orders.count,
        dataArr: orders.data.map((val) => new _EcommerceOrder(val))
      };
    });
  }
  /**
   * Retrieves a specific order for the currently authenticated user.
   * @param {string} id - The order ID to retrieve
   * @returns {Promise<EcommerceOrder>} The retrieved order
   * @throws {Error} If the order is not found or an error occurs during retrieval
   */
  static getMyOrder(id) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_EcommerceOrder.baseUrl}/get-my-order/${id}`);
      const order = yield lastValueFrom(observer$);
      return new _EcommerceOrder(order);
    });
  }
  /**
   * Retrieves all e-commerce orders with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: EcommerceOrder[] }>}
   * An object containing the total count and an array of order records
   * @throws {Error} If there's an error fetching the orders
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_EcommerceOrder.baseUrl}?${query}`);
      const orders = yield lastValueFrom(observer$);
      return {
        count: orders.count,
        dataArr: orders.data.map((val) => new _EcommerceOrder(val))
      };
    });
  }
  /**
   * Filters e-commerce orders based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: EcommerceOrder[] }>}
   * An object containing the total count and an array of filtered order records
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_EcommerceOrder.baseUrl}/filter`, filter2);
      const orders = yield lastValueFrom(observer$);
      return {
        count: orders.count,
        dataArr: orders.data.map((val) => new _EcommerceOrder(val))
      };
    });
  }
  /**
   * Retrieves a single e-commerce order by its ID.
   * @param {string} resourceId - The unique identifier of the order to retrieve
   * @returns {Promise<EcommerceOrder>} The requested order record
   * @throws {Error} If the order is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_EcommerceOrder.baseUrl}/${resourceId}`);
      const order = yield lastValueFrom(observer$);
      return new _EcommerceOrder(order);
    });
  }
  /**
   * Creates a new e-commerce order.
   * @param {IcreateEcomerceOrder} payload - The order data to create
   * @returns {Promise<{ ecommerceOrder: EcommerceOrder; paymentMeta?: IpaymentMeta; receiptMeta?: { _id: string } }>}
   * An object containing the created order and optional payment/receipt metadata
   * @throws {Error} If the order creation fails
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_EcommerceOrder.baseUrl}`, payload);
      const res = yield lastValueFrom(observer$);
      return {
        ecommerceOrder: new _EcommerceOrder(res.ecommerceOrder),
        paymentMeta: res.paymentMeta,
        receiptMeta: res.receiptMeta
      };
    });
  }
  /**
   * Updates the current e-commerce order with new values.
   * @param {TupdateEcommerceOrder} payload - The data to update the order with
   * @returns {Promise<{ ecommerceOrder: EcommerceOrder; receiptMeta?: { _id: string } }>}
   * An object containing the updated order and optional receipt metadata
   * @throws {Error} If the update operation fails
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_EcommerceOrder.baseUrl}/${this._id}`, payload);
      const res = yield lastValueFrom(observer$);
      return {
        ecommerceOrder: new _EcommerceOrder(res.ecommerceOrder),
        receiptMeta: res.receiptMeta
      };
    });
  }
};
EcommerceOrder.baseUrl = "/ecommerce-order";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/fund-and-order-related/expense.define.js
init_esm();

// ../../biz-nest/packages/commerce/client/lib/esm/defines/item-related/item.define.js
init_esm();

// ../../biz-nest/packages/commerce/client/lib/esm/defines/item-related/item-decoy.define.js
init_esm();
var ItemDecoy = class _ItemDecoy extends DatabaseAuto {
  /**
   * Creates a new instance of ItemDecoy.
   * @param {TitemDecoyProps} data - The item decoy data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      },
      items: {
        validate: (v) => Array.isArray(v) && v.every((item) => item !== null && item !== void 0),
        message: "Items must be a non-null array"
      }
    });
    super(data);
    this.urId = data.urId;
    this.company = data.company;
    this.items = data.items.length > 0 ? data.items.map((val) => new Item(val)) : [];
  }
  /**
   * Retrieves all item decoys with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: ItemDecoy[] }>}
   * An object containing the total count and an array of item decoys
   * @throws {Error} If there's an error fetching the item decoys
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_ItemDecoy.baseUrl}?${query}`);
      const decoys = yield lastValueFrom(observer$);
      return {
        count: decoys.count,
        dataArr: decoys.data.map((val) => new _ItemDecoy(val))
      };
    });
  }
  /**
   * Filters item decoys based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: ItemDecoy[] }>}
   * An object containing the total count and an array of filtered item decoys
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_ItemDecoy.baseUrl}/filter`, filter2);
      const decoys = yield lastValueFrom(observer$);
      return {
        count: decoys.count,
        dataArr: decoys.data.map((val) => new _ItemDecoy(val))
      };
    });
  }
  /**
   * Retrieves a single item decoy by its ID.
   * @param {string} resourceId - The unique identifier of the item decoy to retrieve
   * @returns {Promise<ItemDecoy>} The requested item decoy
   * @throws {Error} If the item decoy is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_ItemDecoy.baseUrl}/${resourceId}`);
      const decoy = yield lastValueFrom(observer$);
      return new _ItemDecoy(decoy);
    });
  }
  /**
   * Creates a new item decoy with the specified items.
   * @param {string[]} items - The IDs of the items to include in the decoy
   * @returns {Promise<ItemDecoy>} The newly created item decoy
   * @throws {Error} If the creation fails due to invalid data or server error
   */
  static add(items) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_ItemDecoy.baseUrl}`, { items });
      return new _ItemDecoy(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple item decoys based on the specified criteria.
   * @param {IbulkDelete} payload - The criteria for bulk deletion
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk deletion operation
   * @throws {Error} If the bulk deletion fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_ItemDecoy.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Deletes the current item decoy.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the deletion operation
   * @throws {Error} If the deletion fails or the item decoy doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_ItemDecoy.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
ItemDecoy.baseUrl = "/item-decoy";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/item-related/item.define.js
var _a;
var Item = class extends DatabaseAuto {
  /**
   * Creates a new instance of Item.
   * @param {Iitem} data - The item data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    const validStates = ["new", "used", "refurbished"];
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      },
      company: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Company ID must be a non-empty string"
      },
      numbersInstock: {
        validate: (v) => typeof v === "number" && v >= 0,
        message: "Number in stock must be a non-negative number"
      },
      name: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Item name must be a non-empty string"
      },
      priceMeta: {
        validate: (v) => v !== null && typeof v === "object" && v !== null && "sellingPrice" in v && !isNaN(Number(v.sellingPrice)) && Number(v.sellingPrice) >= 0,
        message: "Price metadata must be a valid object with a non-negative selling price"
      },
      state: {
        required: false,
        validate: (v) => v === void 0 || validStates.includes(v),
        message: `Item state must be one of: ${validStates.join(", ")}`
      },
      category: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string" && v.trim().length > 0,
        message: "Category must be a non-empty string if provided"
      }
    });
    super(data);
    this.photos = [];
    this.urId = data.urId;
    this.company = data.company.toString();
    this.numbersInstock = data.numbersInstock;
    this.name = data.name;
    this.brand = data.brand || void 0;
    this.category = data.category || void 0;
    this.subCategory = data.subCategory || void 0;
    this.state = data.state || void 0;
    this.colors = data.colors || [];
    this.sizes = data.sizes || [];
    this.itemModel = data.itemModel || void 0;
    this.origin = data.origin || void 0;
    this.priceMeta = data.priceMeta;
    this.description = data.description || void 0;
    this.photos = data.photos || [];
    this.anyKnownProblems = data.anyKnownProblems || void 0;
    this.promoted = data.promoted || [];
    this.buyerGuarantee = data.buyerGuarantee || void 0;
    this.reviewedBy = data.reviewedBy || [];
    this.reviewCount = data.reviewCount || 0;
    this.reviewWeight = data.reviewWeight || 0;
    this.likes = data.likes || [];
    this.likesCount = data.likesCount || 0;
    this.timesViewed = data.timesViewed || 0;
    this.orderedQty = data.orderedQty || 1;
    this.reviewRatingsTotal = data.reviewRatingsTotal || 0;
    this.ecommerceCompat = Boolean(data.ecommerceCompat);
    this.soldCount = data.soldCount || 0;
  }
  /**
   * Retrieves items based on filter criteria with pagination support.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: Item[] }>}
   * An object containing the total count and an array of filtered items
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_a.baseUrl}/filter`, filter2);
      const items = yield lastValueFrom(observer$);
      return {
        count: items.count,
        dataArr: items.data.map((val) => new _a(val))
      };
    });
  }
  /**
   * Retrieves a single item by its ID.
   * @param {string} resourceId - The unique identifier of the item
   * @returns {Promise<Item>} The requested item
   * @throws {Error} If the item is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_a.baseUrl}/${resourceId}`);
      const item = yield lastValueFrom(observer$);
      return new _a(item);
    });
  }
  /**
   * Creates a new item with associated inventory.
   * @param {Object} payload - The item and inventory data
   * @param {TitemRequest<true>} payload.item - The item data to create
   * @param {TitemInventoryRequest<true>} payload.itemInventory - The inventory data to create
   * @returns {Promise<Item>} The newly created item
   * @throws {Error} If the creation fails due to invalid data or server error
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_a.baseUrl}`, payload);
      return new _a(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple items based on the specified criteria.
   * @param {IbulkDelete} payload - The criteria for bulk deletion
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk deletion operation
   * @throws {Error} If the bulk deletion fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_a.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Uploads images for the current item.
   * @param {Ifile[]} files - The image files to upload
   * @returns {Observable<Iitem>} Observable with the updated item
   * @throws {Error} If the upload fails or the item doesn't exist
   */
  uploadImages(files) {
    return CommerceClient.ehttp.uploadFiles(files, `${_a.baseUrl}/upload-images`, { _id: this._id });
  }
  /**
   * Updates the current item with new values.
   * @param {TitemRequest} payload - The updated item data
   * @returns {Promise<Item>} The updated item
   * @throws {Error} If the update operation fails or the item doesn't exist
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_a.baseUrl}/${this._id}`, payload);
      return new _a(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes the current item.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the deletion operation
   * @throws {Error} If the deletion fails or the item doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_a.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
  /**
   * Adds a like to the current item from the current user.
   * @returns {Promise<Item>} The updated item with new like count
   * @throws {Error} If the operation fails or the item doesn't exist
   */
  like() {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_a.baseUrl}/like`, { itemId: this._id });
      return new _a(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes a like from the current item for the current user.
   * @returns {Promise<Item>} The updated item with updated like count
   * @throws {Error} If the operation fails or the item doesn't exist
   */
  unLike() {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_a.baseUrl}/unlike`, { itemId: this._id });
      return new _a(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes images from the current item.
   * @param {string[]} fileIds - The IDs of the images to delete
   * @returns {Promise<Item>} The updated item with images removed
   * @throws {Error} If the deletion fails or the item doesn't exist
   */
  deleteImages(fileIds) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_a.baseUrl}/delete-images`, { fileIds, _id: this._id });
      return new _a(yield lastValueFrom(observer$));
    });
  }
};
_a = Item;
Item.baseUrl = "/item";
Item.getItemAnalytics = (startDate, endDate) => {
  const observer$ = CommerceClient.ehttp.makePost(`${_a.baseUrl}/analytics`, { startDate, endDate });
  return lastValueFrom(observer$);
};
Item.getTodaysSuggestions = (offset = 0, limit = 20) => __async(void 0, null, function* () {
  const observer$ = CommerceClient.ehttp.makePost(`${_a.baseUrl}/todays-suggestions`, { offset, limit });
  const items = yield lastValueFrom(observer$);
  return {
    count: items.count,
    dataArr: items.data.map((val) => new _a(val))
  };
});
Item.getBehaviourDecoy = (offset = 0, limit = 20) => __async(void 0, null, function* () {
  const observer$ = CommerceClient.ehttp.makePost(`${_a.baseUrl}/behaviour-decoy`, { offset, limit });
  const items = yield lastValueFrom(observer$);
  return {
    count: items.count,
    dataArr: items.data.map((val) => new ItemDecoy(val))
  };
});

// ../../biz-nest/packages/commerce/client/lib/esm/defines/fund-and-order-related/expense.define.js
var Expense = class _Expense extends DatabaseAuto {
  /**
   * Creates a new instance of Expense.
   * @param {TexpenseProps} data - The expense data used to initialize the instance
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      },
      name: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Expense name must be a non-empty string"
      },
      commerceUser: {
        validate: (v) => typeof v === "object" && v._id.trim().length > 0,
        message: "Added by name must be a valid user object"
      },
      cost: {
        validate: (v) => typeof v === "number" && v >= 0,
        message: "Cost must be a non-negative number"
      },
      company: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string" && v.trim().length > 0,
        message: "Company ID must be a non-empty string if provided"
      }
    });
    super(data);
    this.items = [];
    this.urId = data.urId;
    this.company = data.company;
    this.name = data.name;
    this.commerceUser = data.commerceUser;
    this.cost = data.cost;
    this.category = data.category;
    this.note = data.note || "";
    this.items = data.items ? data.items.map((val) => new Item(val)) : [];
    this.expenseType = data.expenseType;
  }
  /**
   * Retrieves expense analytics based on the provided filter criteria.
   * @param {IfilterProps} filter - The filter criteria for analytics
   * @returns {Promise<IAnalyticsResultExpense>} The analytics results
   * @throws {Error} If there's an error fetching the analytics
   */
  static getExpenseAnalytics(filter2) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Expense.baseUrl}/analytics`, filter2);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves all expenses with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: Expense[] }>}
   * An object containing the total count and an array of expense records
   * @throws {Error} If there's an error fetching the expenses
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_Expense.baseUrl}?${query}`);
      const expenses = yield lastValueFrom(observer$);
      return {
        count: expenses.count,
        dataArr: expenses.data.map((val) => new _Expense(val))
      };
    });
  }
  /**
   * Filters expenses based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: Expense[] }>}
   * An object containing the total count and an array of filtered expense records
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Expense.baseUrl}/filter`, filter2);
      const expenses = yield lastValueFrom(observer$);
      return {
        count: expenses.count,
        dataArr: expenses.data.map((val) => new _Expense(val))
      };
    });
  }
  /**
   * Retrieves a single expense by its ID.
   * @param {string} resourceId - The unique identifier of the expense to retrieve
   * @returns {Promise<Expense>} The requested expense record
   * @throws {Error} If the expense is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_Expense.baseUrl}/${resourceId}`);
      const expense = yield lastValueFrom(observer$);
      return new _Expense(expense);
    });
  }
  /**
   * Creates a new expense record.
   * @param {TexpenseRequest<true>} payload - The expense data to create
   * @returns {Promise<Expense>} The newly created expense record
   * @throws {Error} If the expense creation fails
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Expense.baseUrl}`, payload);
      return new _Expense(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple expenses based on the provided criteria.
   * @param {IbulkDelete} payload - The criteria for identifying which expenses to delete
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   * @throws {Error} If the bulk delete operation fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Expense.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current expense with new values.
   * @param {TexpenseRequest} payload - The data to update the expense with
   * @returns {Promise<Expense>} The updated expense record
   * @throws {Error} If the update operation fails
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_Expense.baseUrl}/${this._id}`, payload);
      return new _Expense(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current expense from the system.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} If the deletion fails or the expense doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_Expense.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
Expense.baseUrl = "/expense";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/fund-and-order-related/operational-location.define.js
init_esm();
var OperationalLocation = class _OperationalLocation extends DatabaseAuto {
  /**
   * Creates a new instance of OperationalLocation.
   * @param {IoperationalLocation} data - The operational location data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    validateData(data, {
      placeName: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Place name must be a non-empty string"
      },
      cityName: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "City name must be a non-empty string"
      },
      shippingCost: {
        validate: (v) => typeof v === "number" && v >= 0,
        message: "Shipping cost must be a non-negative number"
      },
      deliversInDays: {
        validate: (v) => typeof v === "number" && v >= 0 && v <= 30,
        message: "Delivery days must be a number between 0 and 30"
      }
    });
    super(data);
    this.placeName = data.placeName;
    this.cityName = data.cityName;
    this.address = data.address;
    this.coordinates = data.coordinates;
    this.shippingCost = data.shippingCost;
    this.deliversInDays = data.deliversInDays;
    this.contactEmail = data.contactEmail;
    this.contactPhone = data.contactPhone;
  }
  /**
   * Retrieves all operational locations with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: OperationalLocation[] }>}
   * An object containing the total count and an array of operational locations
   * @throws {Error} If there's an error fetching the locations
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_OperationalLocation.baseUrl}?${query}`);
      const locations = yield lastValueFrom(observer$);
      return {
        count: locations.count,
        dataArr: locations.data.map((val) => new _OperationalLocation(val))
      };
    });
  }
  /**
   * Filters operational locations based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: OperationalLocation[] }>}
   * An object containing the total count and an array of filtered locations
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_OperationalLocation.baseUrl}/filter`, filter2);
      const locations = yield lastValueFrom(observer$);
      return {
        count: locations.count,
        dataArr: locations.data.map((val) => new _OperationalLocation(val))
      };
    });
  }
  /**
   * Retrieves a single operational location by its ID.
   * @param {string} resourceId - The unique identifier of the location to retrieve
   * @returns {Promise<OperationalLocation>} The requested operational location
   * @throws {Error} If the location is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_OperationalLocation.baseUrl}/${resourceId}`);
      const location = yield lastValueFrom(observer$);
      return new _OperationalLocation(location);
    });
  }
  /**
   * Creates a new operational location record.
   * @param {ToperationalLocationRequest<true>} payload - The location data to create
   * @returns {Promise<OperationalLocation>} The newly created location record
   * @throws {Error} If the creation fails
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_OperationalLocation.baseUrl}`, payload);
      return new _OperationalLocation(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple operational locations based on the provided criteria.
   * @param {IbulkDelete} payload - The criteria for identifying which locations to delete
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   * @throws {Error} If the bulk delete operation fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_OperationalLocation.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current operational location with new values.
   * @param {ToperationalLocationRequest} payload - The data to update the location with
   * @returns {Promise<OperationalLocation>} The updated location record
   * @throws {Error} If the update operation fails
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_OperationalLocation.baseUrl}/${this._id}`, payload);
      return new _OperationalLocation(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current operational location from the system.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} If the deletion fails or the location doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_OperationalLocation.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
OperationalLocation.baseUrl = "/operational-location";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/fund-and-order-related/un-reliable-buyer/un-reliable-buyer.define.js
init_esm();
var UnreliableBuyer = class _UnreliableBuyer extends DatabaseAuto {
  /**
   * Constructs an instance of `unreliableBuyer`.
   *
   * @param {IunreliableBuyer} data - The unreliableBuyer data used to initialize the instance.
   * @throws {Error} Throws an error if no data is provided.
   */
  constructor(data) {
    super(data);
    this.flaggedBuyers = data.flaggedBuyers;
  }
  /**
   * Retrieves all unreliableBuyers with pagination.
   *
   * @param {number} offset - The starting point for the retrieval.
   * @param {number} limit - The number of records to retrieve.
   * @returns {Promise<{ count: number; dataArr: UnreliableBuyer[] }>}
   * A promise resolving to an object containing count and data array.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_UnreliableBuyer.baseUrl}?${query}`);
      const unreliableBuyers = yield lastValueFrom(observer$);
      return {
        count: unreliableBuyers.count,
        dataArr: unreliableBuyers.data.map((val) => new _UnreliableBuyer(val))
      };
    });
  }
  /**
   * Filters and retrieves unreliable buyers based on the provided criteria.
   *
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{count: number, dataArr: UnreliableBuyer[]}>} Object containing:
   * - count: Total number of matching unreliable buyers
   * - dataArr: Array of UnreliableBuyer instances
   * @throws {Error} When the API request fails or filter is invalid
   *
   * @example
   * const result = await UnreliableBuyer.filterAll({
   *   where: { 'flaggedBuyers.reason': 'Payment issues' },
   *   sort: { 'flaggedBuyers.flaggedAt': -1 }
   * });
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_UnreliableBuyer.baseUrl}/filter`, filter2);
      const unreliableBuyers = yield lastValueFrom(observer$);
      return {
        count: unreliableBuyers.count,
        dataArr: unreliableBuyers.data.map((val) => new _UnreliableBuyer(val))
      };
    });
  }
  /**
   * Retrieves a single unreliable buyer by their unique identifier.
   *
   * @param {string} resourceId - The unique identifier of the unreliable buyer to retrieve
   * @returns {Promise<UnreliableBuyer>} The requested UnreliableBuyer instance
   * @throws {Error} When the buyer is not found or API request fails
   *
   * @example
   * try {
   *   const buyer = await UnreliableBuyer.getOne('buyer123');
   *   console.log(buyer.flaggedBuyers);
   * } catch (error) {
   *   console.error('Failed to fetch unreliable buyer:', error);
   * }
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_UnreliableBuyer.baseUrl}/${resourceId}`);
      const unreliableBuyer = yield lastValueFrom(observer$);
      return new _UnreliableBuyer(unreliableBuyer);
    });
  }
  /**
   * Modifies an unreliable buyer's status by adding or removing them from watchlists.
   *
   * @param {string} buyerId - The ID of the buyer to modify
   * @param {'red' | 'warn'} listType - The type of list to modify:
   *   - 'red': For serious violations (immediate restrictions)
   *   - 'warn': For warning-level issues
   * @param {'add' | 'remove'} action - The action to perform
   * @param {number} [warnCount] - The number of warnings to add (only used when action is 'add' and listType is 'warn')
   * @returns {Promise<UnreliableBuyer>} The updated UnreliableBuyer instance
   * @throws {Error} When the modification fails or validation fails
   *
   * @example
   * // Add a warning to a buyer
   * const warnedBuyer = await UnreliableBuyer.modify('user123', 'warn', 'add', 1);
   *
   * // Remove a buyer from the red list
   * const updatedBuyer = await UnreliableBuyer.modify('user123', 'red', 'remove');
   */
  static modify(buyerId, listType, action, warnCount) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_UnreliableBuyer.baseUrl}`, { buyerId, listType, action, warnCount });
      return new _UnreliableBuyer(yield lastValueFrom(observer$));
    });
  }
};
UnreliableBuyer.baseUrl = "/un-reliable-buyer";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/fund-and-order-related/un-reliable-vendor/un-reliable-vendor.define.js
init_esm();
var UnreliableVendor = class _UnreliableVendor extends DatabaseAuto {
  /**
   * Creates a new instance of UnreliableVendor.
   * @param {IunreliableVendor} data - The data used to initialize the unreliable vendor record
   * @throws {Error} Throws an error if no data is provided
   */
  constructor(data) {
    super(data);
    this.flaggedCompanies = data.flaggedCompanies;
  }
  /**
   * Retrieves all unreliable vendor records with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: UnreliableVendor[] }>}
   * An object containing the total count and an array of vendor records
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_UnreliableVendor.baseUrl}?${query}`);
      const unreliableVendors = yield lastValueFrom(observer$);
      return {
        count: unreliableVendors.count,
        dataArr: unreliableVendors.data.map((val) => new _UnreliableVendor(val))
      };
    });
  }
  /**
   * Filters unreliable vendor records based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: UnreliableVendor[] }>}
   * An object containing the total count and an array of filtered vendor records
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_UnreliableVendor.baseUrl}/filter`, filter2);
      const unreliableVendors = yield lastValueFrom(observer$);
      return {
        count: unreliableVendors.count,
        dataArr: unreliableVendors.data.map((val) => new _UnreliableVendor(val))
      };
    });
  }
  /**
   * Retrieves a single unreliable vendor record by its ID.
   * @param {string} resourceId - The unique identifier of the vendor record to retrieve
   * @returns {Promise<UnreliableVendor>} The requested vendor record
   * @throws {Error} If the record is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_UnreliableVendor.baseUrl}/${resourceId}`);
      const unreliableVendor = yield lastValueFrom(observer$);
      return new _UnreliableVendor(unreliableVendor);
    });
  }
  /**
   * Modifies the unreliable vendor list by adding or removing a company.
   * @param {string} companyId - The ID of the company to modify in the list
   * @param {'red' | 'warn'} listType - The type of list to modify ('red' for red list, 'warn' for warning list)
   * @param {'add' | 'remove'} action - The action to perform (add or remove from the list)
   * @param {number} [warnCount] - Optional warning count when adding to the warning list
   * @returns {Promise<UnreliableVendor>} The updated unreliable vendor record
   * @throws {Error} If the operation fails or the company is not found
   */
  static modify(companyId, listType, action, warnCount) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_UnreliableVendor.baseUrl}`, { companyId, listType, action, warnCount });
      return new _UnreliableVendor(yield lastValueFrom(observer$));
    });
  }
};
UnreliableVendor.baseUrl = "/un-reliable-vendor";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/invoice-related/estimate.define.js
init_esm();
var Estimate = class _Estimate extends DatabaseAuto {
  /**
   * Creates a new instance of Estimate.
   * @param {TestimateProps} data - The estimate data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    super(data);
    this.estimateNumber = data.estimateNumber;
    this.urId = data.urId;
    this.estimateStatus = data.estimateStatus;
    this.invoiceRelated = data.invoiceRelated;
    this.company = data.company;
    if (data.expirationDate) {
      this.expirationDate = new Date(data.expirationDate);
    }
  }
  /**
   * Retrieves all estimates with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: Estimate[] }>}
   * An object containing the total count and an array of estimates
   * @throws {Error} If there's an error fetching the estimates
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_Estimate.baseUrl}?${query}`);
      const estimates = yield lastValueFrom(observer$);
      return {
        count: estimates.count,
        dataArr: estimates.data.map((val) => new _Estimate(val))
      };
    });
  }
  /**
   * Filters estimates based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: Estimate[] }>}
   * An object containing the total count and an array of filtered estimates
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Estimate.baseUrl}/filter`, filter2);
      const estimates = yield lastValueFrom(observer$);
      return {
        count: estimates.count,
        dataArr: estimates.data.map((val) => new _Estimate(val))
      };
    });
  }
  /**
   * Retrieves a single estimate by its ID.
   * @param {string} resourceId - The unique identifier of the estimate to retrieve
   * @returns {Promise<Estimate>} The requested estimate
   * @throws {Error} If the estimate is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_Estimate.baseUrl}/${resourceId}`);
      const estimate = yield lastValueFrom(observer$);
      return new _Estimate(estimate);
    });
  }
  /**
   * Creates a new estimate record.
   * @param {TestimateRequest<true>} payload - The estimate data to create
   * @returns {Promise<Estimate>} The newly created estimate
   * @throws {Error} If the creation fails
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Estimate.baseUrl}`, payload);
      return new _Estimate(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple estimates based on the provided criteria.
   * @param {IbulkDelete} payload - The criteria for identifying which estimates to delete
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   * @throws {Error} If the bulk delete operation fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Estimate.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current estimate with new values.
   * @param {TestimateRequest} payload - The data to update the estimate with
   * @returns {Promise<Estimate>} The updated estimate
   * @throws {Error} If the update operation fails
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_Estimate.baseUrl}/${this._id}`, payload);
      const res = yield lastValueFrom(observer$);
      return __spreadProps(__spreadValues({}, res), {
        estimate: new _Estimate(res.data.estimate)
      });
    });
  }
  /**
   * Removes the current estimate from the system.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} If the deletion fails or the estimate doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_Estimate.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
Estimate.baseUrl = "/estimate";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/invoice-related/invoice.define.js
init_esm();
var Invoice = class _Invoice extends DatabaseAuto {
  /**
   * Creates a new instance of Invoice.
   * @param {TinvoiceProps} data - The invoice data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    super(data);
    this.payments = [];
    this.creditNotes = [];
    this.urId = data.urId;
    this.dueDate = new Date(data.dueDate);
    this.invoiceStatus = data.invoiceStatus;
    this.payments = data.payments || [];
    this.creditNotes = data.creditNotes || [];
    this.invoiceNumber = data.invoiceNumber;
    this.invoiceRelated = data.invoiceRelated;
    this.balanceDue = data.balanceDue;
    this.totalPayments = data.totalPayments;
    this.totalCreditNotes = data.totalCreditNotes;
    this.ecommerceVendors = data.ecommerceVendors;
    this.company = data.company;
  }
  /**
   * Retrieves admin ecommerce sales analytics.
   * @param {IfilterProps} filter - The filter criteria for analytics
   * @returns {Promise<IadminEcommerceAnalytics>} Analytics data for admin ecommerce sales
   * @throws {Error} If the request fails
   */
  static getAdminEcommerceSalesAnalytics(filter2) {
    const observer$ = CommerceClient.ehttp.makePost(`/${_Invoice.baseUrl}/admin-ecommerce-sales-analytics`, filter2);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves sale event analytics.
   * @param {IfilterProps} filter - The filter criteria for analytics
   * @returns {Promise<IsaleEventAnalytics>} Sale event analytics data
   * @throws {Error} If the request fails
   */
  static getSaleEventAnalytics(filter2) {
    const observer$ = CommerceClient.ehttp.makePost(`/${_Invoice.baseUrl}/sale-event-analytics`, filter2);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves all invoices with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: Invoice[] }>}
   * An object containing the total count and an array of invoices
   * @throws {Error} If there's an error fetching the invoices
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_Invoice.baseUrl}?${query}`);
      const invoices = yield lastValueFrom(observer$);
      return {
        count: invoices.count,
        dataArr: invoices.data.map((val) => new _Invoice(val))
      };
    });
  }
  /**
   * Filters invoices based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: Invoice[] }>}
   * An object containing the total count and an array of filtered invoices
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Invoice.baseUrl}/filter`, filter2);
      const invoices = yield lastValueFrom(observer$);
      return {
        count: invoices.count,
        dataArr: invoices.data.map((val) => new _Invoice(val))
      };
    });
  }
  /**
   * Retrieves a single invoice by its ID.
   * @param {string} resourceId - The unique identifier of the invoice to retrieve
   * @returns {Promise<Invoice>} The requested invoice
   * @throws {Error} If the invoice is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_Invoice.baseUrl}/${resourceId}`);
      const invoice = yield lastValueFrom(observer$);
      return new _Invoice(invoice);
    });
  }
  /**
   * Creates a new invoice record.
   * @param {TinvoiceRequest<true>} payload - The invoice data to create
   * @returns {Promise<Invoice>} The newly created invoice
   * @throws {Error} If the creation fails
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Invoice.baseUrl}`, payload);
      return new _Invoice(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple invoices based on the provided criteria.
   * @param {IbulkDelete} payload - The criteria for identifying which invoices to delete
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   * @throws {Error} If the bulk delete operation fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Invoice.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current invoice with new values.
   * @param {TinvoiceRequest} payload - The data to update the invoice with
   * @returns {Promise<Invoice>} The updated invoice
   * @throws {Error} If the update operation fails
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_Invoice.baseUrl}/${this._id}`, payload);
      return new _Invoice(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current invoice from the system.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} If the deletion fails or the invoice doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_Invoice.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
Invoice.baseUrl = "/invoice";
Invoice.getCompanyInternalSalesAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${Invoice.baseUrl}/company-internal-sales-analytics`, filter2);
  return lastValueFrom(observer$);
};
Invoice.getEcommerceSalesAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${Invoice.baseUrl}/ecommerce-sales-analytics`, filter2);
  return lastValueFrom(observer$);
};
Invoice.getInvoiceAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${Invoice.baseUrl}/invoice-analytics`, filter2);
  return lastValueFrom(observer$);
};
Invoice.getSalesAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${Invoice.baseUrl}/sales-analytics`, filter2);
  return lastValueFrom(observer$);
};
Invoice.getVendorBillAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${Invoice.baseUrl}/vendor-bill-analytics`, filter2);
  return lastValueFrom(observer$);
};
Invoice.getTaxesAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${Invoice.baseUrl}/tax-analytics`, filter2);
  return lastValueFrom(observer$);
};
Invoice.getTaxesAnalyticsEcommerce = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${Invoice.baseUrl}/tax-analytics-ecommerce`, filter2);
  return lastValueFrom(observer$);
};
Invoice.getGrossProfitAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${Invoice.baseUrl}/gross-profit-analytics`, filter2);
  return lastValueFrom(observer$);
};
Invoice.getNetIncomeBeforeTaxesAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${Invoice.baseUrl}/net-income-before-taxes-analytics`, filter2);
  return lastValueFrom(observer$);
};
Invoice.getNetProfitOrLossAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${Invoice.baseUrl}/net-profit-or-loss-analytics`, filter2);
  return lastValueFrom(observer$);
};
Invoice.getNonOperatingRevenueAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${Invoice.baseUrl}/non-operating-revenue-analytics`, filter2);
  return lastValueFrom(observer$);
};
Invoice.getOperatingIncomeAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${Invoice.baseUrl}/operating-income-analytics`, filter2);
  return lastValueFrom(observer$);
};

// ../../biz-nest/packages/commerce/client/lib/esm/defines/invoice-related/receipt.define.js
init_esm();
var Receipt = class _Receipt extends DatabaseAuto {
  /**
   * Creates a new instance of Receipt.
   * @param {TreceiptProps} data - The receipt data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    super(data);
    this.urId = data.urId;
    this.ecommerceVendors = data.ecommerceVendors;
    this.paymentMode = data.paymentMode;
    this.receiptType = data.receiptType || "traditional";
    this.amount = data.amount;
    this.receiptStatus = data.receiptStatus;
    this.invoice = data.invoice;
    this.receiptNumber = data.receiptNumber;
    this.payType = data.payType;
    this.receiptDate = data.receiptDate;
    this.company = data.company;
  }
  /**
   * Retrieves receipt analytics based on the provided filter criteria.
   * @param {IfilterProps} filter - The filter criteria for analytics
   * @returns {Promise<IAnalyticsResultExpense>} The analytics result
   * @throws {Error} If the analytics request fails
   */
  static getReceiptAnalytics(filter2) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Receipt.baseUrl}/analytics`, filter2);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves all receipts with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: Receipt[] }>}
   * An object containing the total count and an array of receipts
   * @throws {Error} If there's an error fetching the receipts
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_Receipt.baseUrl}?${query}`);
      const receipts = yield lastValueFrom(observer$);
      return {
        count: receipts.count,
        dataArr: receipts.data.map((val) => new _Receipt(val))
      };
    });
  }
  /**
   * Filters receipts based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: Receipt[] }>}
   * An object containing the total count and an array of filtered receipts
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Receipt.baseUrl}/filter`, filter2);
      const receipts = yield lastValueFrom(observer$);
      return {
        count: receipts.count,
        dataArr: receipts.data.map((val) => new _Receipt(val))
      };
    });
  }
  /**
   * Retrieves a single receipt by its ID.
   * @param {string} resourceId - The unique identifier of the receipt to retrieve
   * @returns {Promise<Receipt>} The requested receipt
   * @throws {Error} If the receipt is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_Receipt.baseUrl}/${resourceId}`);
      const receipt = yield lastValueFrom(observer$);
      return new _Receipt(receipt);
    });
  }
  /**
   * Creates a new receipt record.
   * @param {TreceiptRequest<true>} payload - The receipt data to create
   * @returns {Promise<Receipt>} The newly created receipt
   * @throws {Error} If the creation fails
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Receipt.baseUrl}`, payload);
      return new _Receipt(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple receipts based on the provided criteria.
   * @param {IbulkDelete} payload - The criteria for identifying which receipts to delete
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   * @throws {Error} If the bulk delete operation fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Receipt.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current receipt with new values.
   * @param {TreceiptRequest} payload - The data to update the receipt with
   * @returns {Promise<Receipt>} The updated receipt
   * @throws {Error} If the update operation fails
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_Receipt.baseUrl}/${this._id}`, payload);
      return new _Receipt(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current receipt from the system.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} If the deletion fails or the receipt doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_Receipt.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
Receipt.baseUrl = "/receipt";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/item-related/admin-related/automatic-item-tax.define.js
init_esm();
var AutomaticItemTax = class _AutomaticItemTax extends DatabaseAuto {
  /**
   * Creates a new instance of AutomaticItemTax.
   * @param {IautomaticItemTax} data - The automatic item tax configuration data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    validateData(data, {
      percentage: {
        validate: (v) => {
          return typeof v === "number";
        },
        message: "percentage must be a number"
      },
      name: {
        validate: (v) => {
          return typeof v === "string";
        },
        message: "name must be a string"
      },
      enforcer: {
        validate: (v) => {
          return typeof v === "string";
        },
        message: "enforcer must be a string"
      },
      reason: {
        required: false,
        validate: (v) => {
          return typeof v === "string";
        },
        message: "reason must be a string"
      }
    });
    super(data);
    this.includeOnlyIds = [];
    this.excludeIds = [];
    this.percentage = data.percentage;
    this.name = data.name;
    this.enforcer = data.enforcer;
    this.reason = data.reason;
    this.active = data.active;
    this.includeOnlyIds = data.includeOnlyIds || [];
    this.excludeIds = data.excludeIds || [];
  }
  /**
   * Retrieves all automatic item tax configurations with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: AutomaticItemTax[] }>}
   * An object containing the total count and an array of automatic item tax configurations
   * @throws {Error} If there's an error fetching the tax configurations
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_AutomaticItemTax.baseUrl}?${query}`);
      const automaticItemTaxes = yield lastValueFrom(observer$);
      return {
        count: automaticItemTaxes.count,
        dataArr: automaticItemTaxes.data.map((val) => new _AutomaticItemTax(val))
      };
    });
  }
  /**
   * Filters automatic item tax configurations based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: AutomaticItemTax[] }>}
   * An object containing the total count and an array of filtered tax configurations
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_AutomaticItemTax.baseUrl}/filter`, filter2);
      const automaticItemTaxes = yield lastValueFrom(observer$);
      return {
        count: automaticItemTaxes.count,
        dataArr: automaticItemTaxes.data.map((val) => new _AutomaticItemTax(val))
      };
    });
  }
  /**
   * Retrieves a single automatic item tax configuration by its ID.
   * @param {string} resourceId - The unique identifier of the tax configuration to retrieve
   * @returns {Promise<AutomaticItemTax>} The requested automatic item tax configuration
   * @throws {Error} If the tax configuration is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_AutomaticItemTax.baseUrl}/${resourceId}`);
      const automaticItemTax = yield lastValueFrom(observer$);
      return new _AutomaticItemTax(automaticItemTax);
    });
  }
  /**
   * Creates a new automatic item tax configuration.
   * @param {TautomaticItemTaxRequest<true>} payload - The tax configuration data to create
   * @returns {Promise<AutomaticItemTax>} The newly created automatic item tax configuration
   * @throws {Error} If the creation fails due to invalid data or server error
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_AutomaticItemTax.baseUrl}`, payload);
      return new _AutomaticItemTax(yield lastValueFrom(observer$));
    });
  }
  /**
   * Updates the current automatic item tax configuration with new values.
   * @param {TautomaticItemTaxRequest} payload - The updated tax configuration data
   * @returns {Promise<AutomaticItemTax>} The updated automatic item tax configuration
   * @throws {Error} If the update operation fails or the tax configuration doesn't exist
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_AutomaticItemTax.baseUrl}/${this._id}`, payload);
      return new _AutomaticItemTax(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes the current automatic item tax configuration.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the deletion operation
   * @throws {Error} If the deletion fails or the tax configuration doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_AutomaticItemTax.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
AutomaticItemTax.baseUrl = "/auto-item-tax";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/item-related/admin-related/ecommerce-cut.define.js
init_esm();
var Ecommerccut = class _Ecommerccut extends DatabaseAuto {
  /**
   * Creates a new instance of Ecommerccut.
   * @param {IecommerceCut} data - The e-commerce cut configuration data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    const validateCut = (v) => {
      if (!v.amount || typeof v.amount !== "number" || v.amount < 0) {
        return false;
      }
      if (!v.percentage || typeof v.percentage !== "number" || v.percentage < 0) {
        return false;
      }
      return true;
    };
    const validateCustomCut = (v) => {
      if (!v.lowerAmount || typeof v.lowerAmount !== "number" || v.lowerAmount < 0) {
        return false;
      }
      if (!v.upperAmount || typeof v.upperAmount !== "number" || v.upperAmount < 0) {
        return false;
      }
      if (!v.percentage || typeof v.percentage !== "number" || v.percentage < 0) {
        return false;
      }
      return true;
    };
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "urId must be a non-empty string"
      },
      lowerCut: {
        validate: validateCut,
        message: "lowerCut must be a valid object with correct percentage cut see interface IpercCut"
      },
      middleCut: {
        validate: validateCut,
        message: "middleCut must be a valid object with correct percentage cut see interface IpercCut"
      },
      upperCut: {
        validate: validateCut,
        message: "upperCut must be a valid object with correct percentage cut see interface IpercCut"
      },
      customCut: {
        validate: (v) => {
          if (!Array.isArray(v)) {
            return false;
          }
          if (v.length === 0) {
            return true;
          }
          return v.every((el) => validateCustomCut(el));
        },
        message: "customCut must be a valid array with correct percentage cut see interface IpercCut[]"
      }
    });
    super(data);
    this.urId = data.urId;
    this.lowerCut = data.lowerCut;
    this.middleCut = data.middleCut;
    this.upperCut = data.upperCut;
    this.customCut = data.customCut;
  }
  /**
   * Retrieves all e-commerce cut configurations with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: Ecommerccut[] }>}
   * An object containing the total count and an array of e-commerce cut configurations
   * @throws {Error} If there's an error fetching the configurations
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_Ecommerccut.baseUrl}?${query}`);
      const ecommerceCuts = yield lastValueFrom(observer$);
      return {
        count: ecommerceCuts.count,
        dataArr: ecommerceCuts.data.map((val) => new _Ecommerccut(val))
      };
    });
  }
  /**
   * Filters e-commerce cut configurations based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: Ecommerccut[] }>}
   * An object containing the total count and an array of filtered e-commerce cut configurations
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Ecommerccut.baseUrl}/filter`, filter2);
      const ecommerceCuts = yield lastValueFrom(observer$);
      return {
        count: ecommerceCuts.count,
        dataArr: ecommerceCuts.data.map((val) => new _Ecommerccut(val))
      };
    });
  }
  /**
   * Retrieves a single e-commerce cut configuration by its ID.
   * @param {string} resourceId - The unique identifier of the configuration to retrieve
   * @returns {Promise<Ecommerccut>} The requested e-commerce cut configuration
   * @throws {Error} If the configuration is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_Ecommerccut.baseUrl}/${resourceId}`);
      const ecommerceCut = yield lastValueFrom(observer$);
      return new _Ecommerccut(ecommerceCut);
    });
  }
  /**
   * Creates a new e-commerce cut configuration.
   * @param {TecommerceCutRequest<true>} payload - The configuration data to create
   * @returns {Promise<Ecommerccut>} The newly created e-commerce cut configuration
   * @throws {Error} If the creation fails due to invalid data or server error
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Ecommerccut.baseUrl}`, payload);
      return new _Ecommerccut(yield lastValueFrom(observer$));
    });
  }
  /**
   * Updates the current e-commerce cut configuration with new values.
   * @param {TecommerceCutRequest} payload - The updated configuration data
   * @returns {Promise<Ecommerccut>} The updated e-commerce cut configuration
   * @throws {Error} If the update operation fails or the configuration doesn't exist
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_Ecommerccut.baseUrl}/${this._id}`, payload);
      return new _Ecommerccut(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes the current e-commerce cut configuration.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the deletion operation
   * @throws {Error} If the deletion fails or the configuration doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_Ecommerccut.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
Ecommerccut.baseUrl = "/ecommerce-cut";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/job-card.define.js
init_esm();
var JobCard = class _JobCard extends DatabaseAuto {
  /**
   * Creates a new JobCard instance with the provided data.
   *
   * @constructor
   * @param {IjobCard} data - The job card data used to initialize the instance.
   *
   * @example
   * const jobCard = new JobCard({
   *   urId: 'JC-12345',
   *   client: { name: 'John Doe', contact: 'john@example.com' },
   *   machine: { model: 'XYZ-2000', serial: 'SN12345' },
   *   problem: 'Routine maintenance required',
   *   cost: 199.99,
   *   company: { id: 'comp-123', name: 'ACME Corp' }
   * });
   */
  constructor(data) {
    super(data);
    this.urId = data.urId;
    this.client = data.client;
    this.machine = data.machine;
    this.problem = data.problem;
    this.cost = data.cost;
    this.company = data.company;
  }
  /**
   * Retrieves all job cards with pagination support.
   *
   * @static
   * @async
   * @param {number} [offset=0] - The starting point for pagination.
   * @param {number} [limit=20] - The number of items to retrieve per page.
   * @returns {Promise<{ count: number, dataArr: JobCard[] }>} Object
   * containing total count and array of job card instances.
   * @throws {Error} When the API request fails.
   *
   * @example
   * const { count, dataArr } = await JobCard.getAll(0, 10);
   * console.log(`Found ${count} job cards`);
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_JobCard.baseUrl}?${query}`);
      const jobCards = yield lastValueFrom(observer$);
      return {
        count: jobCards.count,
        dataArr: jobCards.data.map((val) => new _JobCard(val))
      };
    });
  }
  /**
   * Filters job cards based on the provided criteria.
   *
   * @static
   * @async
   * @param {IfilterProps} filter - The filter criteria for retrieving job cards.
   * @returns {Promise<{ count: number, dataArr: JobCard[] }>} Object
   * containing total count and filtered job card instances.
   * @throws {Error} When the filter operation fails.
   *
   * @example
   * const filter = { 'client.name': 'John Doe', 'status': 'in-progress' };
   * const { count, dataArr } = await JobCard.filterAll(filter);
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_JobCard.baseUrl}/filter`, filter2);
      const jobCards = yield lastValueFrom(observer$);
      return {
        count: jobCards.count,
        dataArr: jobCards.data.map((val) => new _JobCard(val))
      };
    });
  }
  /**
   * Retrieves a single job card by its resource ID.
   *
   * @static
   * @async
   * @param {string} resourceId - The unique identifier of the job card to retrieve.
   * @returns {Promise<JobCard>} The requested job card instance.
   * @throws {Error} When the job card is not found or request fails.
   *
   * @example
   * const jobCard = await JobCard.getOne('job-card-123');
   * console.log(jobCard.problem);
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_JobCard.baseUrl}/${resourceId}`);
      const jobCard = yield lastValueFrom(observer$);
      return new _JobCard(jobCard);
    });
  }
  /**
   * Creates a new job card entry in the system.
   *
   * @static
   * @async
   * @param {TjobCardRequest<true>} payload - The data for the new job card.
   * @returns {Promise<JobCard>} The newly created job card instance.
   * @throws {Error} When creation fails due to invalid data or server error.
   *
   * @example
   * const newJobCard = await JobCard.add({
   *   client: 'client-123',
   *   machine: 'machine-456',
   *   problem: 'Annual maintenance required',
   *   cost: 249.99,
   *   company: 'company-789'
   * });
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_JobCard.baseUrl}`, payload);
      return new _JobCard(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple job cards based on the provided criteria.
   *
   * @static
   * @async
   * @param {IbulkDelete} payload - The criteria for bulk deletion.
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk deletion.
   * @throws {Error} When the deletion operation fails.
   *
   * @example
   * const result = await JobCard.bulkDelete({ ids: ['jc-1', 'jc-2'] });
   * console.log(`Deleted ${result.deletedCount} job cards`);
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_JobCard.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current job card instance with new data.
   *
   * @async
   * @param {TjobCardRequest} payload - The updated job card data.
   * @returns {Promise<JobCard>} The updated job card instance.
   * @throws {Error} When the update operation fails.
   *
   * @example
   * await jobCard.update({
   *   problem: 'Updated problem description',
   *   cost: 299.99
   * });
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_JobCard.baseUrl}/${this._id}`, payload);
      return new _JobCard(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current job card instance from the system.
   *
   * @async
   * @returns {Promise<IdeleteOneResponse | null>} The result of the deletion.
   * @throws {Error} When the deletion operation fails.
   *
   * @example
   * const result = await jobCard.remove();
   * if (result?.deletedCount === 1) {
   *   console.log('Job card deleted successfully');
   * }
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_JobCard.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
JobCard.baseUrl = "/job-card";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/track/data-bin.define.js
init_esm();
var DataBin = class _DataBin {
  /**
   * Creates a new instance of DataBin.
   * @param {TdataBinProps} data - The data to initialize the instance with
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    data.createdAt = new Date(data.createdAt);
    data.updatedAt = new Date(data.updatedAt);
    validateData(data, {
      _id: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique identifier must be a non-empty string"
      },
      deletedAt: {
        required: false,
        validate: (v) => {
          if (v !== void 0) {
            const deletedAtDate = new Date(v);
            return !isNaN(deletedAtDate.getTime()) && deletedAtDate <= /* @__PURE__ */ new Date();
          }
          return true;
        },
        message: "Deleted at must be a valid date string not in the future"
      },
      createdAt: {
        validate: (v) => {
          const createdAt = v instanceof Date ? v : new Date(v);
          return !isNaN(createdAt.getTime());
        },
        message: "Created at must be a valid date (Date object or ISO date string)"
      },
      updatedAt: {
        validate: (v) => {
          const updatedAt = v instanceof Date ? v : new Date(v);
          return !isNaN(updatedAt.getTime());
        },
        message: "Updated at must be a valid date (Date object or ISO date string)"
      }
    });
    this._id = data._id;
    this.parent = data.parent;
    this.deletedAt = data.deletedAt;
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = new Date(data.updatedAt);
    this.info = data.info;
  }
  /**
   * Retrieves soft-deleted items based on filter criteria with pagination support.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: DataBin[] }>}
   * An object containing the total count and an array of soft-deleted items
   * @throws {Error} If there's an error applying the filter or fetching the items
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_DataBin.baseUrl}/filter`, filter2);
      const edits = yield lastValueFrom(observer$);
      return {
        count: edits.count,
        dataArr: edits.data.map((val) => new _DataBin(val))
      };
    });
  }
  /**
   * Permanently deletes multiple soft-deleted items.
   * @param {IbulkDelete} payload - The criteria for bulk deletion
   * @returns {Promise<IbulkDeleteSuccessResponse>}
   * The result of the bulk deletion operation
   * @throws {Error} If the bulk deletion fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_DataBin.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Restores multiple soft-deleted items to their original collections.
   * @param {Object} payload - The restore criteria
   * @param {string[]} payload._ids - Array of item IDs to restore
   * @returns {Promise<Isuccess>} The result of the restore operation
   * @throws {Error} If the restore operation fails
   */
  static restoreMany(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_DataBin.baseUrl}/restore-many`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Permanently deletes the current soft-deleted item.
   * @returns {Promise<IdeleteOneResponse | null>}
   * The result of the deletion operation
   * @throws {Error} If the deletion fails or the item doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_DataBin.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
  /**
   * Restores the current soft-deleted item to its original collection.
   * @returns {Promise<Isuccess>} The result of the restore operation
   * @throws {Error} If the restore operation fails or the item doesn't exist
   */
  restore() {
    const observer$ = CommerceClient.ehttp.makePut(`${_DataBin.baseUrl}/restore/${this._id}`, {});
    return lastValueFrom(observer$);
  }
};
DataBin.baseUrl = "/collections-bin";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/user-related/staff.define.js
init_esm();

// ../../biz-nest/packages/commerce/client/lib/esm/defines/user-related/commerce-user-base.define.js
init_esm();
var CommerceUserBase = class extends DatabaseAuto {
  /**
   * Creates a new instance of CommerceUserBase.
   *
   * @param {Object} data - The data used to initialize the instance.
   * @param {string} data._id - The unique identifier for the commerce user.
   * @param {Date} data.createdAt - The date when the user was created.
   * @param {Date} data.updatedAt - The date when the user was last updated.
   * @param {IcommerceUser} data.commerceUser - The commerce user's authentication and profile data.
   * @param {string} data.company - The unique identifier of the associated company.
   * @param {string} data.urId - The unique reference ID for the user.
   * @param {string} [data.startDate] - The start date in ISO string format (optional).
   * @param {string} [data.endDate] - The end date in ISO string format (optional).
   * @param {string} data.occupation - The occupation or role of the user.
   * @throws {Error} If required data is missing or invalid.
   * @throws {Error} If date validation fails for either startDate or endDate.
   *
   * @example
   * const userData = {
   *   _id: '123',
   *   createdAt: new Date(),
   *   updatedAt: new Date(),
   *   commerceUser: { /* ... *\/ },
   *   company: 'company-123',
   *   urId: 'user-ref-456',
   *   startDate: '2023-01-01T00:00:00.000Z',
   *   endDate: '2024-01-01T00:00:00.000Z',
   *   occupation: 'Manager'
   * };
   * const user = new ConcreteUser(userData);
   */
  constructor(data) {
    validateData(data, {
      startDate: {
        required: false,
        validate: (v) => v === void 0 || !isNaN(new Date(v).getTime()),
        message: "Start date must be a valid date"
      },
      endDate: {
        required: false,
        validate: (v) => v === void 0 || !isNaN(new Date(v).getTime()),
        message: "End date must be a valid date"
      }
    });
    super(data);
    this.baseUrl = "";
    if (data.startDate) {
      this.startDate = new Date(data.startDate);
    }
    if (data.endDate) {
      this.endDate = new Date(data.endDate);
    }
    this.occupation = data.occupation;
    this.commerceUser = data.commerceUser;
    this.company = data.company;
    this.urId = data.urId;
  }
  /**
   * Changes the default currency for the current user in the commerce system.
   * This operation updates the user's preferred currency setting and may affect
   * how prices and monetary values are displayed throughout the application.
   *
   * @param {string} currency - The ISO 4217 currency code to change to (e.g., 'USD', 'EUR', 'GBP').
   * @returns {Promise<Isuccess>} A promise that resolves to an object containing the operation status.
   * @throws {Error} If the currency change operation fails (e.g., invalid currency code, network error).
   * @throws {Error} If the user is not authenticated or lacks permission to change currency.
   *
   * @example
   * // Change the user's currency to US Dollars
   * await user.changeUserCurrency('USD')
   *   .then(result => console.log('Currency changed successfully:', result))
   *   .catch(error => console.error('Failed to change currency:', error));
   */
  changeUserCurrency(currency) {
    const observer$ = CommerceClient.ehttp.makePost(`${this.baseUrl}/change-currency`, { currency });
    return lastValueFrom(observer$);
  }
};

// ../../biz-nest/packages/commerce/client/lib/esm/defines/user-related/staff.define.js
var Staff = class _Staff extends CommerceUserBase {
  /**
   * Creates a new Staff instance.
   * @param {Istaff} data - Staff data for initialization
   * @throws {BizNestClientError} When no data is provided
   * @example
   * const staff = new Staff({
   *   _id: '123',
   *   employmentType: 'full-time',
   *   // ...other fields
   * });
   */
  constructor(data) {
    if (!data) {
      throw new BizNestClientError("No data provided");
    }
    super(data);
    this.baseUrl = "/staff";
    this.employmentType = data.employmentType || "";
    this.salary = data.salary;
  }
  /**
   * Retrieves staff analytics based on filter criteria.
   * @static
   * @param {IfilterProps} filter - Filter criteria for analytics
   * @returns {Promise<IstaffAnalytics>} Staff analytics data
   * @example
   * const analytics = await Staff.analytics({
   *   dateRange: { start: '2023-01-01', end: '2023-12-31' }
   * });
   */
  static analytics(filter2) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Staff.baseUrl}/analytics`, filter2);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves paginated list of staff members.
   * @static
   * @param {number} [offset=0] - Pagination offset
   * @param {number} [limit=20] - Items per page
   * @returns {Promise<{count: number, dataArr: Staff[]}>} Paginated staff list
   * @example
   * const { count, dataArr } = await Staff.getAll(0, 10);
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({ offset: offset.toString(), limit: limit.toString() });
      const observer$ = CommerceClient.ehttp.makeGet(`${_Staff.baseUrl}?${query}`);
      const { count, data } = yield lastValueFrom(observer$);
      return { count, dataArr: data.map((d) => new _Staff(d)) };
    });
  }
  /**
   * Filters staff members based on the provided filter properties.
   *
   * @param {IfilterProps} filter - The filter criteria for retrieving staff members.
   * @returns {Promise<{ count: number, dataArr: Staff[] }>} An object containing
   * the total count and an array of `Staff` instances.
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Staff.baseUrl}/filter`, filter2);
      const staffs = yield lastValueFrom(observer$);
      return {
        count: staffs.count,
        dataArr: staffs.data.map((val) => new _Staff(val))
      };
    });
  }
  /**
   * Fetches a single staff member based on the provided filter.
   *
   * @param {string} resourceId - The ID of the staff member to retrieve.
   * @returns {Promise<Staff>} The `Staff` instance corresponding to the provided filter.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_Staff.baseUrl}/${resourceId}`);
      const staff = yield lastValueFrom(observer$);
      return new _Staff(staff);
    });
  }
  /**
   * Retrieves the current staff member's profile.
   *
   * @returns {Promise<Staff>} The `Staff` instance corresponding to the current staff member.
   */
  static myProfiles() {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Staff.baseUrl}/my-profiles`, {});
      const staff = yield lastValueFrom(observer$);
      return staff.map((val) => ({
        staff: new _Staff(val.staff),
        company: new Company(val.company)
      }));
    });
  }
  /**
   * Adds a new staff member, optionally with associated files.
   *
   * @param {IStaffRequest<true>} payload - The staff data to add.
   * @returns {Promise<Staff>} The result of the addition operation.
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Staff.baseUrl}`, payload);
      return new _Staff(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes multiple staff members based on the provided criteria.
   *
   * @param {IbulkDelete} payload - The criteria for deleting multiple staff members.
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the deletion operation.
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Staff.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  static validateInvitation(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Staff.baseUrl}/validate-invitation`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Uploads multiple files to the staff member.
   *
   * @param {Ifile[]} files - The files to upload.
   * @returns {Promise<Istaff>} The result of the file upload operation.
   */
  uploadImages(files) {
    return CommerceClient.ehttp.uploadFiles(files, `${_Staff.baseUrl}/upload-images`, { _id: this._id });
  }
  /**
   * Uploads profilePicture associated with the current Staff instance.
   * @param file - The image to upload.
   * @returns An observable that emits a success object.
   */
  uploadProfilePicture(file) {
    return CommerceClient.ehttp.uploadFiles([file], `${_Staff.baseUrl}/upload-profile-picture`, { _id: this._id });
  }
  /**
   * Uploads cover pic associated with the current Staff instance.
   * @param file - The image to upload.
   * @returns An observable that emits a success object.
   */
  uploadProfileCoverPicture(file) {
    return CommerceClient.ehttp.uploadFiles([file], `${_Staff.baseUrl}/upload-profile-cover-picture`, { _id: this._id });
  }
  setImageAs(fileId, field) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Staff.baseUrl}/set-image-as`, { fileId, field });
      return new _Staff(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes images associated with the current user.
   *
   * @param {string[]} fileIds - The IDs of the files to delete.
   * @returns {Promise<Staff>} The result of the deletion operation.
   */
  deleteImages(fileIds) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(this.baseUrl + "/delete-images", { fileIds, _id: this._id });
      return new _Staff(yield lastValueFrom(observer$));
    });
  }
  /**
   * Updates the current staff instance, optionally with associated files.
   *
   * @param {IStaffRequest} payload - The updated staff data.
   * @returns {Promise<Staff>} The result of the update operation.
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_Staff.baseUrl}/${this._id}`, payload);
      return new _Staff(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current staff instance.
   *
   * @returns {Promise<IdeleteOneResponse | null>} The result of the removal operation.
   */
  remove() {
    return lastValueFrom(CommerceClient.ehttp.makeDelete(`${_Staff.baseUrl}/${this._id}`));
  }
  /**
   * Retrieves the current staff member's permission.
   *
   * @returns {Promise<Iuserperm>} The permission of the current staff member.
   */
  getPermission() {
    const observer$ = CommerceClient.ehttp.makeGet(`${_Staff.baseUrl}/${this._id}/get-permission`);
    return lastValueFrom(observer$);
  }
  /**
   * Invites a new staff member.
   *
   * @param {Object} payload - The invitation data.
   * @param {string} payload.email - The email address of the staff member to invite.
   * @param {string} payload.phone - The phone number of the staff member to invite.
   * @param {string} payload.phoneCode - The phone code of the staff member to invite.
   * @param {string} payload.method - The method of invitation (e.g., 'email', 'sms').
   * @param {string} payload.staffId - The ID of the staff member to invite.
   * @returns {Promise<{ qrCodeUrl?: string }>} The result of the invitation operation.
   */
  invite(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Staff.baseUrl}/invite`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the permissions of the current staff member.
   *
   * @param {Iuserperm} payload - The permission data to update.
   * @returns {Promise<Iuserperm>} The result of the update operation.
   */
  updatePermission(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Staff.baseUrl}/update-permission`, {
      _id: this._id,
      permissions: payload
    });
    return lastValueFrom(observer$);
  }
};
Staff.baseUrl = "/staff";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/company/company-subscription.define.js
init_esm();
var CompanySubscription = class _CompanySubscription extends DatabaseAuto {
  /**
   * Creates a new CompanySubscription instance with validated data.
   * @param {TcompanySubscriptionProps} data - The subscription data to initialize with
   * @throws {Error} When validation of the input data fails
   */
  constructor(data) {
    validateData(data, {
      name: {
        validate: (v) => typeof v === "string" && v.trim().length > 0 && v.length <= 100,
        message: "Subscription name must be a non-empty string (max 100 characters)"
      },
      amount: {
        validate: (v) => typeof v === "number" && v >= 0 && v < 11e7,
        message: `Subscription amount must be a non-negative number less than
         11,000,000 (can be 0 for trial subscriptions)`
      },
      duration: {
        validate: (v) => [1, 2, 3, 6, 12].includes(v),
        message: "Invalid subscription duration. Must be one of: 1, 2, 3, 6, or 12 months"
      },
      startDate: {
        validate: (v) => {
          const date = v instanceof Date ? v : new Date(v);
          return !isNaN(date.getTime());
        },
        message: "Start date must be a valid date (ISO date string or Date object)"
      },
      endDate: {
        validate: (v) => {
          const date = v instanceof Date ? v : new Date(v);
          const startDate = data.startDate instanceof Date ? data.startDate : new Date(data.startDate);
          return !isNaN(date.getTime()) && date > startDate;
        },
        message: "End date must be a valid date (ISO date string or Date object) and after start date"
      },
      features: {
        validate: (v) => Array.isArray(v) && v.length > 0 && v.every((feature) => feature && typeof feature === "object" && typeof feature.name === "string" && feature.name.trim().length > 0),
        message: "Features must be a non-empty array (max 10) of valid feature objects"
      }
    });
    super(data);
    this.name = data.name;
    this.amount = data.amount;
    this.duration = data.duration;
    this.startDate = new Date(data.startDate);
    this.endDate = new Date(data.endDate);
    this.active = data.active;
    this.features = data.features;
    this.company = data.company;
    this.paymentMeta = data.paymentMeta;
  }
  /**
   * Retrieves analytics data for company subscriptions.
   * @param {IfilterProps} filter - Filter criteria for analytics
   * @returns {Promise<IAnalyticsCompanySubscription>} Analytics data for subscriptions
   */
  static getCompanySubscriptionAnalytcis(filter2) {
    const observer$ = CommerceClient.ehttp.makePost(`${_CompanySubscription.baseUrl}/analytics`, filter2);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves all company subscriptions with pagination.
   * @param {number} [offset=0] - Number of records to skip
   * @param {number} [limit=20] - Maximum number of records to return
   * @returns {Promise<{count: number, dataArr: CompanySubscription[]}>} Paginated list of subscriptions
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_CompanySubscription.baseUrl}?${query}`);
      const companySubscriptions = yield lastValueFrom(observer$);
      return {
        count: companySubscriptions.count,
        dataArr: companySubscriptions.data.map((val) => new _CompanySubscription(val))
      };
    });
  }
  /**
   * Filters company subscriptions based on provided criteria.
   * @param {IfilterProps} filter - Filter criteria for subscriptions
   * @returns {Promise<{count: number, dataArr: CompanySubscription[]}>} Filtered list of subscriptions
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_CompanySubscription.baseUrl}/filter`, filter2);
      const companysubscriptions = yield lastValueFrom(observer$);
      return {
        count: companysubscriptions.count,
        dataArr: companysubscriptions.data.map((val) => new _CompanySubscription(val))
      };
    });
  }
  /**
   * Subscribes a company to a subscription package.
   * @param {Partial<IsubscriptionPackage>} subscriptionPackage - The subscription package details
   * @param {string} company - The ID of the company to subscribe
   * @returns {Promise<CompanySubscription>} The created subscription
   */
  static subscribe(subscriptionPackage, company) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_CompanySubscription.baseUrl}/subscribe`, { subscriptionPackage, company });
      return new _CompanySubscription(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes multiple company subscriptions in bulk.
   * @param {IbulkDelete} payload - Criteria for bulk deletion
   * @returns {Promise<IbulkDeleteSuccessResponse>} Result of the bulk delete operation
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_CompanySubscription.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Removes the current subscription from the database.
   * @returns {Promise<IdeleteOneResponse | null>} Result of the delete operation
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_CompanySubscription.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
CompanySubscription.baseUrl = "/company-subscription";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/company/fair-policy.define.js
init_esm();
var FairPolicy = class _FairPolicy extends DatabaseAuto {
  /**
   * Constructs an instance of `FairPolicy`.
   *
   * @param {TfairPolicyProps} data - The fairPolicy data used to initialize the instance.
   * @throws {Error} Throws an error if no data is provided.
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      }
    });
    super(data);
    this.urId = data.urId;
    this.company = data.company;
    this.featureExceeded = data.featureExceeded;
    this.subscription = data.subscription;
  }
  /**
   * Retrieves all fairPolicys with pagination support.
   *
   * @param {number} [offset=0] - The starting point for pagination.
   * @param {number} [limit=20] - The number of items to retrieve.
   * @returns {Promise<{ count: number, dataArr: FairPolicy[] }>} An object containing
   * the total count and an array of `FairPolicy` instances.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_FairPolicy.baseUrl}?${query}`);
      const fairPolicys = yield lastValueFrom(observer$);
      return {
        count: fairPolicys.count,
        dataArr: fairPolicys.data.map((val) => new _FairPolicy(val))
      };
    });
  }
  /**
   * Filters fairPolicys based on the provided filter properties.
   *
   * @param {IfilterProps} filter - The filter criteria for retrieving fairPolicys.
   * @returns {Promise<{ count: number, dataArr: FairPolicy[] }>} An object containing
   * the total count and an array of `FairPolicy` instances.
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_FairPolicy.baseUrl}/filter`, filter2);
      const fairPolicys = yield lastValueFrom(observer$);
      return {
        count: fairPolicys.count,
        dataArr: fairPolicys.data.map((val) => new _FairPolicy(val))
      };
    });
  }
  /**
   * Retrieves a single fairPolicy based on the provided resource ID.
   *
   * @param {string} resourceId - The unique identifier for the fairPolicy to retrieve.
   * @returns {Promise<FairPolicy>} The `FairPolicy` instance corresponding to the provided resource ID.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_FairPolicy.baseUrl}/${resourceId}`);
      const fairPolicy = yield lastValueFrom(observer$);
      return new _FairPolicy(fairPolicy);
    });
  }
  /**
   * Removes multiple fair policies based on the provided criteria.
   *
   * @param {IbulkDelete} payload - The criteria for bulk deletion
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk deletion operation
   * @throws {Error} When the deletion operation fails or payload is invalid
   *
   * @example
   * const result = await FairPolicy.bulkDelete({
   *   ids: ['policy1', 'policy2'],
   *   hardDelete: false
   * });
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_FairPolicy.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Removes the current fair policy from the database.
   *
   * @returns {Promise<IdeleteOneResponse | null>} The result of the deletion operation
   * @throws {Error} When the deletion operation fails or the policy doesn't exist
   *
   * @example
   * const policy = await FairPolicy.getOne('policy123');
   * const result = await policy.remove();
   * if (result?.success) {
   *   console.log('Policy removed successfully');
   * }
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_FairPolicy.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
FairPolicy.baseUrl = "/fair-policy";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/company/help-ticket.define.js
init_esm();
var HelpTicket = class _HelpTicket extends DatabaseAuto {
  constructor(data) {
    super(data);
    this.commerceUser = data.commerceUser;
    this.company = data.company;
    this.title = data.title;
    this.description = data.description;
    this.status = data.status;
    this.handler = data.handler;
  }
  /**
   * Retrieves a list of help tickets.
   *
   * @param {number} [offset=0] - The offset to start retrieving help tickets from.
   * @param {number} [limit=0] - The limit of help tickets to retrieve.
   *
   * @returns {Promise<{count: number, dataArr: HelpTicket[]}>} - A promise
   *  that resolves to an object containing the total count of help tickets
   * and an array of help ticket objects.
   */
  static getAll(offset = 0, limit = 0) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_HelpTicket.baseUrl}?${query}`);
      const helpTickets = yield lastValueFrom(observer$);
      return {
        count: helpTickets.count,
        dataArr: helpTickets.data.map((val) => new _HelpTicket(val))
      };
    });
  }
  /**
   * Retrieves a list of help tickets based on a filter.
   *
   * @param {IfilterProps} filter - The filter to apply to the help tickets.
   *
   * @returns {Promise<{count: number, dataArr: HelpTicket[]}>} - A promise
   *  that resolves to an object containing the total count of help tickets
   * and an array of help ticket objects.
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_HelpTicket.baseUrl}/filter`, filter2);
      const helpTickets = yield lastValueFrom(observer$);
      return {
        count: helpTickets.count,
        dataArr: helpTickets.data.map((val) => new _HelpTicket(val))
      };
    });
  }
  /**
   * Retrieves a help ticket by ID.
   *
   * @param {string} resourceId - The ID of the help ticket to retrieve.
   *
   * @returns {Promise<HelpTicket>} - A promise that resolves to a help ticket object.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_HelpTicket.baseUrl}/${resourceId}`);
      const helpTicket = yield lastValueFrom(observer$);
      return new _HelpTicket(helpTicket);
    });
  }
  /**
   * Retrieves the current user's profile.
   *
   * @returns {Promise<HelpTicket>} - A promise that resolves to a help ticket object.
   */
  static myProfile() {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_HelpTicket.baseUrl}/my-profile`, {});
      const helpTicket = yield lastValueFrom(observer$);
      return new _HelpTicket(helpTicket);
    });
  }
  /**
   * Deletes multiple help tickets based on the provided IDs.
   *
   * @param {IbulkDelete} vals - The IDs of the help tickets to delete.
   *
   * @returns {Promise<IbulkDeleteSuccessResponse>} - A promise that resolves to a success object.
   */
  static bulkDelete(vals) {
    const observer$ = CommerceClient.ehttp.makePost(`${_HelpTicket.baseUrl}/bulk-delete`, vals);
    return lastValueFrom(observer$);
  }
  /**
   * Validates a help ticket invitation token.
   * @param {Object} payload - The payload containing the token to validate.
   * @param {string} payload.token - The invitation token to validate.
   * @returns {Promise<Isuccess>} The result of the validation operation.
   */
  static validateInvitation(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_HelpTicket.baseUrl}/validate-invitation`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Adds a new help ticket.
   *
   * @param {ThelpTicketRequest<true>} payload - The payload containing the help ticket data.
   *
   * @returns {Promise<HelpTicket>} - A promise that resolves to a help ticket object.
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_HelpTicket.baseUrl}`, payload);
      return new _HelpTicket(yield lastValueFrom(observer$));
    });
  }
  /**
   * Uploads multiple files to the staff member.
   *
   * @param {Ifile[]} files - The files to upload.
   * @returns {Promise<Isuccess>} The result of the file upload operation.
   */
  uploadImages(files) {
    return CommerceClient.ehttp.uploadFiles(files, `${_HelpTicket.baseUrl}/upload-files`, { _id: this._id });
  }
  /**
   * Updates the help ticket.
   *
   * @param {ThelpTicketRequest} payload - The payload containing the help ticket data.
   *
   * @returns {Promise<HelpTicket>} - A promise that resolves to a help ticket object.
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_HelpTicket.baseUrl}`, payload);
      return new _HelpTicket(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the help ticket.
   *
   * @returns {Promise<IdeleteOneResponse | null>} - A promise that resolves to a delete one response object.
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_HelpTicket.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
HelpTicket.baseUrl = "/helpticket";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/company/settings/company-setting.define.js
init_esm();
var CompanySettings = class _CompanySettings extends DatabaseAuto {
  /**
   * Creates a new instance of CompanySettings with validated data.
   * @param {IcompanySetting} data - The company settings data to initialize the instance with
   * @throws {BizNestClientValidationError} When validation of the input data fails
   */
  constructor(data) {
    validateData(data, {
      taxSettings: {
        required: false,
        validate: (v) => {
          if (!v) {
            return true;
          }
          if (!Array.isArray(v.taxes)) {
            throw new BizNestClientValidationError("Taxes must be an array");
          }
          v.taxes.forEach((tax, index) => {
            if (!tax.id || typeof tax.id !== "string") {
              throw new BizNestClientValidationError(`Tax at index ${index} must have a valid ID`);
            }
            if (!tax.name || typeof tax.name !== "string") {
              throw new BizNestClientValidationError(`Tax at index ${index} must have a valid name`);
            }
            if (typeof tax.percentage !== "number" || tax.percentage < 0 || tax.percentage > 100) {
              throw new BizNestClientValidationError(`Tax percentage at 
                index ${index} must be a number between 0 and 100`);
            }
            if (!["active", "inactive"].includes(tax.status)) {
              throw new BizNestClientValidationError(`Tax status at index ${index} must be 'active' or 'inactive'`);
            }
          });
          return true;
        },
        message: "Invalid tax settings"
      }
    });
    super(data);
    this.documentSettings = data.documentSettings;
    this.taxSettings = data.taxSettings;
    this.bankSettings = data.bankSettings;
    this.printDetails = data.printDetails;
    this.notifications = data.notifications;
  }
  /**
   * Retrieves a paginated list of company settings.
   * @param {number} [offset=0] - The number of records to skip (for pagination)
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{count: number, dataArr: CompanySettings[]}>}
   * An object containing the total count and array of settings
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_CompanySettings.baseUrl}?${query}`);
      const { count, data } = yield lastValueFrom(observer$);
      return {
        count,
        dataArr: data.map((val) => new _CompanySettings(val))
      };
    });
  }
  /**
   * Filters company settings based on provided criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{count: number, dataArr: CompanySettings[]}>} Filtered results with count
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_CompanySettings.baseUrl}/filter`, filter2);
      const { count, data } = yield lastValueFrom(observer$);
      return {
        count,
        dataArr: data.map((val) => new _CompanySettings(val))
      };
    });
  }
  /**
   * Retrieves a single company setting by its ID.
   * @param {string} resourceId - The unique identifier of the setting to retrieve
   * @returns {Promise<CompanySettings>} The requested company settings
   * @throws {BizNestClientError} When the resource is not found
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_CompanySettings.baseUrl}/${resourceId}`);
      const companySetting = yield lastValueFrom(observer$);
      return new _CompanySettings(companySetting);
    });
  }
  /**
   * Creates or updates company settings.
   * @template T - Boolean flag indicating if files are included
   * @param {TcompanySettingRequest<T>} payload - The settings data to save
   * @returns {Promise<CompanySettings>} The saved company settings
   */
  static addUpdate(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_CompanySettings.baseUrl}`, payload);
      return new _CompanySettings(yield lastValueFrom(observer$));
    });
  }
  /**
   * Uploads a signature file for the company.
   * @param {Ifile} file - The signature file to upload
   * @returns {Promise<IcompanySetting>} The updated company settings with signature
   * @throws {BizNestClientError} When no file is provided
   */
  static uploadSignature(file) {
    if (!file || !file.blob) {
      throw new BizNestClientError("no file, please provide one");
    }
    return CommerceClient.ehttp.uploadFiles([file], `${_CompanySettings.baseUrl}/upload-signature`);
  }
  /**
   * Uploads a stamp file for the company.
   * @param {Ifile} file - The stamp file to upload
   * @returns {Promise<IcompanySetting>} The updated company settings with stamp
   * @throws {BizNestClientError} When no file is provided
   */
  static uploadStamp(file) {
    if (!file || !file.blob) {
      throw new BizNestClientError("no file, please provide one");
    }
    return CommerceClient.ehttp.uploadFiles([file], `${_CompanySettings.baseUrl}/upload-stamp`);
  }
  /**
   * Deletes multiple company settings in bulk.
   * @param {IbulkDelete} payload - The criteria for bulk deletion
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_CompanySettings.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Removes specific images (signature/stamp) associated with the company settings.
   * @param {string[]} fileIds - Array of file IDs to remove
   * @returns {Promise<CompanySettings>} The updated company settings
   */
  deleteImages(fileIds) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_CompanySettings.baseUrl}/delete-images`, { fileIds, _id: this._id });
      return new _CompanySettings(yield lastValueFrom(observer$));
    });
  }
};
CompanySettings.baseUrl = "/company-settings";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/cookies.define.js
init_esm();
var Cookies = class _Cookies {
  /**
   * Creates a new Cookies instance with all features enabled by default.
   * @constructor
   */
  constructor() {
    this.cartEnabled = true;
    this.recentEnabled = true;
    this.wishListEnabled = true;
    this.compareListEnabled = true;
  }
  /**
   * Retrieves and applies cookie settings for a specific user.
   *
   * @param {string} [userId] - Optional user ID to retrieve settings for.
   * @returns {Promise<void>} Resolves when settings are retrieved and applied.
   * @throws {Error} When the API request fails.
   *
   * @example
   * const cookies = new Cookies();
   * await cookies.getSettings('user-123');
   */
  getSettings(userId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Cookies.baseUrl}/getsettings`, { userId });
      const settings = yield lastValueFrom(observer$);
      this.cartEnabled = settings?.cartEnabled;
      this.recentEnabled = settings?.recentEnabled;
      this.wishListEnabled = settings?.wishListEnabled;
      this.compareListEnabled = settings?.compareListEnabled;
    });
  }
  /**
   * Updates cookie settings for a specific user.
   *
   * @param {Icookie} settings - New cookie settings to apply.
   * @param {string} [userId] - Optional user ID to update settings for.
   * @returns {Promise<Icookie>} The updated cookie settings.
   * @throws {Error} When the update operation fails.
   *
   * @example
   * await cookies.updateSettings({
   *   cartEnabled: true,
   *   recentEnabled: false,
   *   wishListEnabled: true,
   *   compareListEnabled: false
   }, 'user-123');
   */
  updateSettings(settings, userId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Cookies.baseUrl}/update-settings`, { userId, settings });
      const response = yield lastValueFrom(observer$);
      if (response.cartEnabled) {
        this.cartEnabled = settings.cartEnabled;
        this.recentEnabled = settings.recentEnabled;
        this.wishListEnabled = settings.wishListEnabled;
        this.compareListEnabled = settings.compareListEnabled;
      }
      return response;
    });
  }
  /**
   * Adds an item to the cart if cart functionality is enabled.
   *
   * @param {string} cartItemId - The ID of the item to add to cart.
   * @param {number} totalCostwithNoShipping - The item's total cost excluding shipping.
   * @param {string} [userId] - Optional user ID associated with the cart.
   * @returns {Promise<Isuccess>} Operation success status.
   * @throws {Error} When the operation fails.
   */
  addCartItem(cartItemId, totalCostwithNoShipping, userId) {
    if (!this.cartEnabled) {
      return Promise.resolve({ success: true });
    }
    const observer$ = CommerceClient.ehttp.makePost(`${_Cookies.baseUrl}/add-cart-item`, { userId, cartItemId, totalCostwithNoShipping });
    return lastValueFrom(observer$);
  }
  /**
   * Adds an item to the recent items list if the feature is enabled.
   *
   * @param {string} recentItemId - The ID of the item to mark as recently viewed.
   * @param {string} [userId] - Optional user ID.
   * @returns {Promise<Isuccess>} Operation success status.
   * @throws {Error} When the operation fails.
   */
  addRecent(recentItemId, userId) {
    if (!this.recentEnabled) {
      return Promise.resolve({ success: true });
    }
    const observer$ = CommerceClient.ehttp.makePost(`${_Cookies.baseUrl}/add-recent`, { userId, recentItemId });
    return lastValueFrom(observer$);
  }
  /**
   * Adds an item to the wishlist if the feature is enabled.
   *
   * @param {string} wishListItemId - The ID of the item to add to wishlist.
   * @param {string} [userId] - Optional user ID.
   * @returns {Promise<Isuccess>} Operation success status.
   * @throws {Error} When the operation fails.
   */
  addWishList(wishListItemId, userId) {
    if (!this.wishListEnabled) {
      return Promise.resolve({ success: true });
    }
    const observer$ = CommerceClient.ehttp.makePost(`${_Cookies.baseUrl}/add-wish-list`, { userId, wishListItemId });
    return lastValueFrom(observer$);
  }
  /**
   * Adds an item to the compare list if the feature is enabled.
   *
   * @param {string} compareListItemId - The ID of the item to add for comparison.
   * @param {string} [userId] - Optional user ID.
   * @returns {Promise<Isuccess>} Operation success status.
   * @throws {Error} When the operation fails.
   */
  addCompareList(compareListItemId, userId) {
    if (!this.compareListEnabled) {
      return Promise.resolve({ success: true });
    }
    const observer$ = CommerceClient.ehttp.makePost(`${_Cookies.baseUrl}/add-compare-list-items`, { userId, compareListItemId });
    return lastValueFrom(observer$);
  }
  /**
   * Removes an item from the cart if cart functionality is enabled.
   *
   * @param {string} cartItemId - The ID of the item to remove from cart.
   * @returns {Promise<Isuccess>} Operation success status.
   * @throws {Error} When the operation fails.
   */
  deleteCartItem(cartItemId) {
    if (!this.cartEnabled) {
      return Promise.resolve({ success: true });
    }
    const observer$ = CommerceClient.ehttp.makePost(`${_Cookies.baseUrl}/delete-cart-item`, { cartItemId });
    return lastValueFrom(observer$);
  }
  /**
   * Removes an item from the wishlist if the feature is enabled.
   *
   * @param {string} wishListItemId - The ID of the item to remove from wishlist.
   * @returns {Promise<Isuccess>} Operation success status.
   * @throws {Error} When the operation fails.
   */
  deleteWishListItem(wishListItemId) {
    if (!this.wishListEnabled) {
      return Promise.resolve({ success: true });
    }
    const observer$ = CommerceClient.ehttp.makePost(`${_Cookies.baseUrl}/delete-wishlist-item`, { wishListItemId });
    return lastValueFrom(observer$);
  }
  /**
   * Removes an item from the compare list if the feature is enabled.
   *
   * @param {string} compareListItemId - The ID of the item to remove from comparison.
   * @returns {Promise<Isuccess>} Operation success status.
   * @throws {Error} When the operation fails.
   */
  deleteCompareListItem(compareListItemId) {
    if (!this.compareListEnabled) {
      return Promise.resolve({ success: true });
    }
    const observer$ = CommerceClient.ehttp.makePost(`${_Cookies.baseUrl}/delete-compare-list-item`, { compareListItemId });
    return lastValueFrom(observer$);
  }
  /**
   * Clears all items from the cart if cart functionality is enabled.
   *
   * @returns {Promise<Isuccess>} Operation success status.
   * @throws {Error} When the operation fails.
   */
  clearCart() {
    if (!this.cartEnabled) {
      return Promise.resolve({ success: true });
    }
    const observer$ = CommerceClient.ehttp.makePost(`${_Cookies.baseUrl}/clear-cart`, {});
    return lastValueFrom(observer$);
  }
  /**
   * Clears all items from the wishlist if the feature is enabled.
   *
   * @returns {Promise<Isuccess>} Operation success status.
   * @throws {Error} When the operation fails.
   */
  clearWishList() {
    if (!this.wishListEnabled) {
      return Promise.resolve({ success: true });
    }
    const observer$ = CommerceClient.ehttp.makePost(`${_Cookies.baseUrl}/clear-wishlist`, {});
    return lastValueFrom(observer$);
  }
  /**
   * Clears all items from the compare list if the feature is enabled.
   *
   * @returns {Promise<Isuccess>} Operation success status.
   * @throws {Error} When the operation fails.
   */
  clearCompareList() {
    if (!this.compareListEnabled) {
      return Promise.resolve({ success: true });
    }
    const observer$ = CommerceClient.ehttp.makePost(`${_Cookies.baseUrl}/clear-compare-list`, {});
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves all items from the cart if cart functionality is enabled.
   *
   * @returns {Promise<IcartInterface[]>} Array of cart items.
   * @throws {Error} When the operation fails.
   */
  getFromCart() {
    if (!this.cartEnabled) {
      return Promise.resolve([]);
    }
    const observer$ = CommerceClient.ehttp.makeGet(`${_Cookies.baseUrl}/get-from-cart`);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves recently viewed items if the feature is enabled.
   *
   * @returns {Promise<Item[]>} Array of recently viewed items.
   * @throws {Error} When the operation fails.
   */
  getFromRecent() {
    if (!this.recentEnabled) {
      return Promise.resolve([]);
    }
    const observer$ = CommerceClient.ehttp.makeGet(`${_Cookies.baseUrl}/get-from-recent`);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves wishlist items if the feature is enabled.
   *
   * @returns {Promise<Item[]>} Array of wishlist items.
   * @throws {Error} When the operation fails.
   */
  getFromWishList() {
    if (!this.wishListEnabled) {
      return Promise.resolve([]);
    }
    const observer$ = CommerceClient.ehttp.makeGet(`${_Cookies.baseUrl}/get-from-wishlist`);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves items in the compare list if the feature is enabled.
   *
   * @returns {Promise<Item[]>} Array of items for comparison.
   * @throws {Error} When the operation fails.
   */
  getFromCompareList() {
    if (!this.compareListEnabled) {
      return Promise.resolve([]);
    }
    const observer$ = CommerceClient.ehttp.makeGet(`${_Cookies.baseUrl}/get-from-compare-list`);
    return lastValueFrom(observer$);
  }
};
Cookies.baseUrl = "/cookies";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/faq.define.js
init_esm();
var Faq = class _Faq extends DatabaseAuto {
  /**
   * Creates a new Faq instance with the provided data.
   *
   * @constructor
   * @param {Ifaq} data - The FAQ data used to initialize the instance.
   * @throws {Error} When required fields are missing or invalid.
   *
   * @example
   * const faqData = {
   *   urId: 'faq-123',
   *   qn: 'How to reset password?',
   *   answer: 'Click on forgot password link.',
   *   weight: 1,
   *   category: 'Account',
   *   tags: ['account', 'password']
   * };
   * const faq = new Faq(faqData);
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      },
      qn: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Question must be a non-empty string"
      }
    });
    super(data);
    this.user = data.user;
    this.urId = data.urId;
    this.qn = data.qn;
    this.answer = data.answer;
    this.weight = data.weight;
    this.category = data.category;
    this.tags = data.tags;
  }
  /**
   * Retrieves all FAQs with pagination support.
   *
   * @static
   * @async
   * @param {number} [offset=0] - The starting point for pagination.
   * @param {number} [limit=20] - The number of items to retrieve per page.
   * @returns {Promise<{ count: number, dataArr: Faq[] }>} Object containing total count and array of FAQ instances.
   * @throws {Error} When the API request fails.
   *
   * @example
   * const { count, dataArr } = await Faq.getAll(0, 10);
   * console.log(`Found ${count} FAQs`);
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_Faq.baseUrl}?${query}`);
      const faqs = yield lastValueFrom(observer$);
      return {
        count: faqs.count,
        dataArr: faqs.data.map((val) => new _Faq(val))
      };
    });
  }
  /**
   * Filters FAQs based on the provided criteria.
   *
   * @static
   * @async
   * @param {IfilterProps} filter - The filter criteria for retrieving FAQs.
   * @returns {Promise<{ count: number, dataArr: Faq[] }>} Object containing total count and filtered FAQ instances.
   * @throws {Error} When the filter operation fails.
   *
   * @example
   * const filter = { category: 'Account', tags: ['password'] };
   * const { count, dataArr } = await Faq.filterAll(filter);
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Faq.baseUrl}/filter`, filter2);
      const faqs = yield lastValueFrom(observer$);
      return {
        count: faqs.count,
        dataArr: faqs.data.map((val) => new _Faq(val))
      };
    });
  }
  /**
   * Retrieves a single FAQ by its resource ID.
   *
   * @static
   * @async
   * @param {string} resourceId - The unique identifier of the FAQ to retrieve.
   * @returns {Promise<Faq>} The requested FAQ instance.
   * @throws {Error} When the FAQ is not found or request fails.
   *
   * @example
   * const faq = await Faq.getOne('faq-123');
   * console.log(faq.qn);
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_Faq.baseUrl}/${resourceId}`);
      const faq = yield lastValueFrom(observer$);
      return new _Faq(faq);
    });
  }
  /**
   * Creates a new FAQ entry in the system.
   *
   * @static
   * @async
   * @param {TfaqRequset<true>} payload - The data for the new FAQ.
   * @returns {Promise<Faq>} The newly created FAQ instance.
   * @throws {Error} When creation fails due to invalid data or server error.
   *
   * @example
   * const newFaq = await Faq.add({
   *   qn: 'How to contact support?',
   *   answer: 'Email us at support@example.com',
   *   category: 'Support'
   * });
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Faq.baseUrl}`, payload);
      return new _Faq(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple FAQs based on the provided criteria.
   *
   * @static
   * @async
   * @param {IbulkDelete} payload - The criteria for bulk deletion.
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk deletion.
   * @throws {Error} When the deletion operation fails.
   *
   * @example
   * const result = await Faq.bulkDelete({ ids: ['faq-1', 'faq-2'] });
   * console.log(`Deleted ${result.deletedCount} FAQs`);
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Faq.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current FAQ instance with new data.
   *
   * @async
   * @param {TfaqRequset} payload - The updated FAQ data.
   * @returns {Promise<Faq>} The updated FAQ instance.
   * @throws {Error} When the update operation fails.
   *
   * @example
   * await faq.update({ answer: 'Updated answer text' });
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut("/faq/" + this._id, payload);
      return new _Faq(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current FAQ instance from the system.
   *
   * @async
   * @returns {Promise<IdeleteOneResponse | null>} The result of the deletion.
   * @throws {Error} When the deletion operation fails.
   *
   * @example
   * const result = await faq.remove();
   * if (result?.deletedCount === 1) {
   *   console.log('FAQ deleted successfully');
   * }
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_Faq.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
Faq.baseUrl = "/faq";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/fund-and-order-related/fund-related/ecommerce-order-refund.define.js
init_esm();
var EcommerceOrderRefund = class _EcommerceOrderRefund extends DatabaseAuto {
  /**
   * Constructs an instance of `EcommerceOrderRefund`.
   *
   * @param {TecommerceOrderRefundProps} data - The orderrefund data used to initialize the instance.
   * @throws {Error} Throws an error if no data is provided.
   */
  constructor(data) {
    validateData(data, {
      dateInitiated: {
        validate: (v) => {
          const dateInitiated = v instanceof Date ? v : new Date(v);
          return !isNaN(dateInitiated.getTime());
        },
        message: "dateInitiated at must be a valid date (Date object or ISO date string)"
      },
      dateCompleted: {
        validate: (v) => {
          if (!v) {
            return true;
          }
          const dateCompleted = v instanceof Date ? v : new Date(v);
          return !isNaN(dateCompleted.getTime());
        },
        message: "Created at must be a valid date (Date object or ISO date string)"
      }
    });
    super(data);
    this.ecommerceOrder = data.ecommerceOrder;
    this.ecommerceVendors = data.ecommerceVendors;
    this.dateInitiated = new Date(data.dateInitiated);
    if (data.dateCompleted) {
      this.dateCompleted = new Date(data.dateCompleted);
    }
    this.commerceUser = data.commerceUser;
    this.status = data.status;
    this.amount = data.amount;
    this.paymentMeta = data.paymentMeta;
  }
  /**
   * Retrieves all orderrefunds with pagination.
   *
   * @param {number} offset - The starting point for the retrieval.
   * @param {number} limit - The number of records to retrieve.
   * @returns {Promise<{ count: number; dataArr: EcommerceOrderRefund[] }>} A promise resolving
   * to an object containing count and data array.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_EcommerceOrderRefund.baseUrl}?${query}`);
      const orderrefunds = yield lastValueFrom(observer$);
      return {
        count: orderrefunds.count,
        dataArr: orderrefunds.data.map((val) => new _EcommerceOrderRefund(val))
      };
    });
  }
  /**
   * Filters orderrefunds based on the provided criteria.
   *
   * @param {IfilterProps} filter - The filter criteria.
   * @returns {Promise<{ count: number; dataArr: EcommerceOrderRefund[] }>} A promise resolving
   * to an object containing count and data array.
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_EcommerceOrderRefund.baseUrl}/filter`, filter2);
      const orderrefunds = yield lastValueFrom(observer$);
      return {
        count: orderrefunds.count,
        dataArr: orderrefunds.data.map((val) => new _EcommerceOrderRefund(val))
      };
    });
  }
  /**
   * Retrieves a single orderrefund by resource ID.
   *
   * @param {string} resourceId - The ID of the orderrefund to retrieve.
   * @returns {Promise<EcommerceOrderRefund>} The retrieved `EcommerceOrderRefund` instance.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_EcommerceOrderRefund.baseUrl}/${resourceId}`);
      const orderrefund = yield lastValueFrom(observer$);
      return new _EcommerceOrderRefund(orderrefund);
    });
  }
  /**
   * Creates a new order refund with the provided data.
   *
   * @param {TecommerceOrderRefundRequest<true>} payload - The order refund data to create
   * @returns {Promise<EcommerceOrderRefund>} The newly created EcommerceOrderRefund instance
   * @throws {Error} When the creation fails due to invalid data or API error
   *
   * @example
   * const refund = await EcommerceOrderRefund.add({
   *   orderId: 'order123',
   *   amount: 99.99,
   *   reason: 'Customer requested cancellation'
   * });
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_EcommerceOrderRefund.baseUrl}`, payload);
      return new _EcommerceOrderRefund(yield lastValueFrom(observer$));
    });
  }
  /**
   * Updates the current order refund with new data.
   *
   * @param {TecommerceOrderRefundRequest} payload - The updated refund data
   * @returns {Promise<EcommerceOrderRefund>} The updated EcommerceOrderRefund instance
   * @throws {Error} When the update fails or payload is invalid
   *
   * @example
   * const refund = await EcommerceOrderRefund.getOne('refund123');
   * const updated = await refund.update({
   *   status: 'processed',
   *   dateCompleted: new Date()
   * });
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_EcommerceOrderRefund.baseUrl}/${this._id}`, payload);
      return new _EcommerceOrderRefund(yield lastValueFrom(observer$));
    });
  }
};
EcommerceOrderRefund.baseUrl = "/order-refund";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/fund-and-order-related/non-operating-revenue.define.js
init_esm();
var NonOperatingRevenue = class _NonOperatingRevenue extends DatabaseAuto {
  /**
   * Creates a new instance of NonOperatingRevenue.
   * @param {TnonOperatingRevenueProps} data - The revenue data used to initialize the instance
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      },
      name: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "NonOperatingRevenue name must be a non-empty string"
      },
      commerceUser: {
        validate: (v) => typeof v === "object" && v._id.trim().length > 0,
        message: "Added by name must be a valid user object"
      },
      amount: {
        validate: (v) => typeof v === "number" && v >= 0,
        message: "Amount must be a non-negative number"
      },
      company: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string" && v.trim().length > 0,
        message: "Company ID must be a non-empty string if provided"
      }
    });
    super(data);
    this.urId = data.urId;
    this.company = data.company;
    this.name = data.name;
    this.commerceUser = data.commerceUser;
    this.amount = data.amount;
    this.note = data.note || "";
  }
  /**
   * Retrieves analytics for non-operating revenue based on the provided filter criteria.
   * @param {IfilterProps} filter - The filter criteria for analytics
   * @returns {Promise<InonOperatingRevenueAnalytics>} The analytics results
   * @throws {Error} If there's an error fetching the analytics
   */
  static getNonOperatingRevenueAnalytics(filter2) {
    const observer$ = CommerceClient.ehttp.makePost(`${_NonOperatingRevenue.baseUrl}/analytics`, filter2);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves all non-operating revenue records with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: NonOperatingRevenue[] }>}
   * An object containing the total count and an array of revenue records
   * @throws {Error} If there's an error fetching the records
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_NonOperatingRevenue.baseUrl}?${query}`);
      const nonOperatingRevenues = yield lastValueFrom(observer$);
      return {
        count: nonOperatingRevenues.count,
        dataArr: nonOperatingRevenues.data.map((val) => new _NonOperatingRevenue(val))
      };
    });
  }
  /**
   * Filters non-operating revenue records based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: NonOperatingRevenue[] }>}
   * An object containing the total count and an array of filtered revenue records
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_NonOperatingRevenue.baseUrl}/filter`, filter2);
      const nonOperatingRevenues = yield lastValueFrom(observer$);
      return {
        count: nonOperatingRevenues.count,
        dataArr: nonOperatingRevenues.data.map((val) => new _NonOperatingRevenue(val))
      };
    });
  }
  /**
   * Retrieves a single non-operating revenue record by its ID.
   * @param {string} resourceId - The unique identifier of the record to retrieve
   * @returns {Promise<NonOperatingRevenue>} The requested revenue record
   * @throws {Error} If the record is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_NonOperatingRevenue.baseUrl}/${resourceId}`);
      const nonOperatingRevenue = yield lastValueFrom(observer$);
      return new _NonOperatingRevenue(nonOperatingRevenue);
    });
  }
  /**
   * Creates a new non-operating revenue record.
   * @param {TnonOperatingRevenueRequest<true>} payload - The revenue data to create
   * @returns {Promise<NonOperatingRevenue>} The newly created revenue record
   * @throws {Error} If the creation fails
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_NonOperatingRevenue.baseUrl}`, payload);
      return new _NonOperatingRevenue(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple non-operating revenue records based on the provided criteria.
   * @param {IbulkDelete} payload - The criteria for identifying which records to delete
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   * @throws {Error} If the bulk delete operation fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_NonOperatingRevenue.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current non-operating revenue record with new values.
   * @param {TnonOperatingRevenueRequest} payload - The data to update the record with
   * @returns {Promise<NonOperatingRevenue>} The updated revenue record
   * @throws {Error} If the update operation fails
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_NonOperatingRevenue.baseUrl}/${this._id}`, payload);
      return new _NonOperatingRevenue(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current non-operating revenue record from the system.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} If the deletion fails or the record doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_NonOperatingRevenue.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
NonOperatingRevenue.baseUrl = "/non-operating-revenue";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/fund-and-order-related/retuns-complaints/item-complaint.define.js
init_esm();
var ItemComplaint = class _ItemComplaint extends DatabaseAuto {
  /**
   * Constructs an instance of `ItemComplaint`.
   *
   * @param {TitemComplaintProps} data - The itemComplaint data used to initialize the instance.
   * @throws {Error} Throws an error if no data is provided.
   */
  constructor(data) {
    super(data);
    this.item = data.item;
    this.reason = data.reason;
    this.commerceUser = data.commerceUser;
    this.status = data.status;
    this.handler = data.handler;
  }
  /**
   * Retrieves all itemcomplaints with pagination.
   *
   * @param {number} offset - The starting point for the retrieval.
   * @param {number} limit - The number of records to retrieve.
   * @returns {Promise<{ count: number; dataArr: ItemComplaint[] }>}
   * A promise resolving to an object containing count and data array.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_ItemComplaint.baseUrl}?${query}`);
      const itemComplaints = yield lastValueFrom(observer$);
      return {
        count: itemComplaints.count,
        dataArr: itemComplaints.data.map((val) => new _ItemComplaint(val))
      };
    });
  }
  /**
   * Filters itemcomplaints based on the provided criteria.
   *
   * @param {IfilterProps} filter - The filter criteria.
   * @returns {Promise<{ count: number; dataArr: ItemComplaint[] }>}
   * A promise resolving to an object containing count and data array.
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_ItemComplaint.baseUrl}/filter`, filter2);
      const itemComplaints = yield lastValueFrom(observer$);
      return {
        count: itemComplaints.count,
        dataArr: itemComplaints.data.map((val) => new _ItemComplaint(val))
      };
    });
  }
  /**
   * Retrieves a single itemcomplaint by resource ID.
   *
   * @param {string} resourceId - The ID of the itemcomplaint to retrieve.
   * @returns {Promise<ItemComplaint>} The retrieved `ItemComplaint` instance.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_ItemComplaint.baseUrl}/${resourceId}`);
      const itemComplaint = yield lastValueFrom(observer$);
      return new _ItemComplaint(itemComplaint);
    });
  }
  /**
   * Creates a new item complaint with the provided data.
   *
   * @param {TitemComplaintRequest<true>} payload - The complaint data to create
   * @returns {Promise<ItemComplaint>} The newly created ItemComplaint instance
   * @throws {Error} When the creation fails due to invalid data or API error
   *
   * @example
   * const complaint = await ItemComplaint.add({
   *   orderId: 'order123',
   *   reason: 'Item not as described',
   *   status: 'pending'
   * });
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_ItemComplaint.baseUrl}`, payload);
      return new _ItemComplaint(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes multiple item complaints based on the provided criteria.
   *
   * @param {IbulkDelete} payload - The criteria for bulk deletion
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   * @throws {Error} When the deletion fails or payload is invalid
   *
   * @example
   * const result = await ItemComplaint.bulkDelete({
   *   ids: ['complaint1', 'complaint2'],
   *   hardDelete: false
   * });
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_ItemComplaint.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current item complaint with new data.
   *
   * @param {TitemComplaintRequest} payload - The updated complaint data
   * @returns {Promise<ItemComplaint>} The updated ItemComplaint instance
   * @throws {Error} When the update fails or payload is invalid
   *
   * @example
   * const complaint = await ItemComplaint.getOne('complaint123');
   * const updated = await complaint.update({
   *   status: 'resolved',
   *   resolution: 'Refund issued'
   * });
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_ItemComplaint.baseUrl}/${this._id}`, payload);
      return new _ItemComplaint(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current item complaint from the system.
   *
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} When the deletion fails
   *
   * @example
   * const complaint = await ItemComplaint.getOne('complaint123');
   * const result = await complaint.remove();
   * if (result?.success) {
   *   console.log('Complaint deleted successfully');
   * }
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_ItemComplaint.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
ItemComplaint.baseUrl = "/item-complaint";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/fund-and-order-related/retuns-complaints/item-return.define.js
init_esm();
var ItemReturn = class _ItemReturn extends DatabaseAuto {
  /**
   * Constructs an instance of `ItemReturn`.
   *
   * @param {TitemReturnProps} data - The itemReturn data used to initialize the instance.
   * @throws {Error} Throws an error if no data is provided.
   */
  constructor(data) {
    super(data);
    this.commerceUser = data.commerceUser;
    this.ecommerceOrder = data.ecommerceOrder;
    this.items = data.items;
    this.returnReason = data.returnReason;
    this.status = data.status;
    this.ecommerceVendors = data.ecommerceVendors;
  }
  /**
   * Retrieves all itemreturns with pagination.
   *
   * @param {number} offset - The starting point for the retrieval.
   * @param {number} limit - The number of records to retrieve.
   * @returns {Promise<{ count: number; dataArr: ItemReturn[] }>}
   * A promise resolving to an object containing count and data array.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_ItemReturn.baseUrl}?${query}`);
      const itemReturns = yield lastValueFrom(observer$);
      return {
        count: itemReturns.count,
        dataArr: itemReturns.data.map((val) => new _ItemReturn(val))
      };
    });
  }
  /**
   * Filters itemreturns based on the provided criteria.
   *
   * @param {IfilterProps} filter - The filter criteria.
   * @returns {Promise<{ count: number; dataArr: ItemReturn[] }>} A promise resolving
   * to an object containing count and data array.
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_ItemReturn.baseUrl}/filter`, filter2);
      const itemReturns = yield lastValueFrom(observer$);
      return {
        count: itemReturns.count,
        dataArr: itemReturns.data.map((val) => new _ItemReturn(val))
      };
    });
  }
  /**
   * Retrieves a single itemreturn by resource ID.
   *
   * @param {string} resourceId - The ID of the itemreturn to retrieve.
   * @returns {Promise<ItemReturn>} The retrieved `ItemReturn` instance.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_ItemReturn.baseUrl}/${resourceId}`);
      const itemReturn = yield lastValueFrom(observer$);
      return new _ItemReturn(itemReturn);
    });
  }
  /**
   * Creates a new item return with the provided data.
   *
   * @param {TitemReturnRequest<true>} payload - The return data to create
   * @returns {Promise<ItemReturn>} The newly created ItemReturn instance
   * @throws {Error} When the creation fails due to invalid data or API error
   *
   * @example
   * const newReturn = await ItemReturn.add({
   *   orderId: 'order123',
   *   items: [{
   *     itemId: 'item456',
   *     quantity: 1,
   *     reason: 'Defective product'
   *   }],
   *   returnReason: 'Quality issues',
   *   status: 'pending'
   * });
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_ItemReturn.baseUrl}`, payload);
      return new _ItemReturn(yield lastValueFrom(observer$));
    });
  }
  /**
   * Updates the current item return with new data.
   *
   * @param {TitemReturnRequest} payload - The updated return data
   * @returns {Promise<ItemReturn>} The updated ItemReturn instance
   * @throws {Error} When the update fails or payload is invalid
   *
   * @example
   * const itemReturn = await ItemReturn.getOne('return123');
   * const updated = await itemReturn.update({
   *   status: 'processed',
   *   processedDate: new Date()
   * });
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_ItemReturn.baseUrl}/${this._id}`, payload);
      return new _ItemReturn(yield lastValueFrom(observer$));
    });
  }
};
ItemReturn.baseUrl = "/item-return";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/fund-and-order-related/un-reliable-buyer/un-reliable-buyer-history.define.js
init_esm();
var UnreliableBuyerHistory = class _UnreliableBuyerHistory extends DatabaseAuto {
  /**
   * Constructs an instance of `unreliableBuyerHistory`.
   *
   * @param {TunreliableBuyerHistoryProps} data - The unreliableBuyerHistory data used to initialize the instance.
   * @throws {Error} Throws an error if no data is provided.
   */
  constructor(data) {
    super(data);
    this.buyer = data.buyer;
    this.reason = data.reason;
    this.action = data.action;
    this.ecommerceOrder = data.ecommerceOrder;
  }
  /**
   * Retrieves all unreliableBuyerHistorys with pagination.
   *
   * @param {number} offset - The starting point for the retrieval.
   * @param {number} limit - The number of records to retrieve.
   * @returns {Promise<{ count: number; dataArr: UnreliableBuyerHistory[] }>}
   * A promise resolving to an object containing count and data array.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_UnreliableBuyerHistory.baseUrl}?${query}`);
      const unreliableBuyerHistorys = yield lastValueFrom(observer$);
      return {
        count: unreliableBuyerHistorys.count,
        dataArr: unreliableBuyerHistorys.data.map((val) => new _UnreliableBuyerHistory(val))
      };
    });
  }
  /**
   * Filters unreliableBuyerHistorys based on the provided criteria.
   *
   * @param {IfilterProps} filter - The filter criteria.
   * @returns {Promise<{ count: number; dataArr: UnreliableBuyerHistory[] }>}
   * A promise resolving to an object containing count and data array.
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_UnreliableBuyerHistory.baseUrl}/filter`, filter2);
      const unreliableBuyerHistorys = yield lastValueFrom(observer$);
      return {
        count: unreliableBuyerHistorys.count,
        dataArr: unreliableBuyerHistorys.data.map((val) => new _UnreliableBuyerHistory(val))
      };
    });
  }
  /**
   * Retrieves a single unreliableBuyerHistory by resource ID.
   *
   * @param {string} resourceId - The ID of the unreliableBuyerHistory to retrieve.
   * @returns {Promise<UnreliableBuyerHistory>} The retrieved `UnreliableBuyerHistory` instance.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_UnreliableBuyerHistory.baseUrl}/${resourceId}`);
      const unreliableBuyerHistory = yield lastValueFrom(observer$);
      return new _UnreliableBuyerHistory(unreliableBuyerHistory);
    });
  }
  /**
   * Removes multiple unreliable buyer history entries based on the provided criteria.
   *
   * @param {IbulkDelete} payload - The criteria for bulk deletion
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   * @throws {Error} When the deletion fails or payload is invalid
   *
   * @example
   * const result = await UnreliableBuyerHistory.bulkDelete({
   *   ids: ['history1', 'history2'],
   *   hardDelete: true
   * });
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_UnreliableBuyerHistory.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Removes the current unreliable buyer history entry from the system.
   *
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} When the deletion fails
   *
   * @example
   * const historyEntry = await UnreliableBuyerHistory.getOne('history123');
   * const result = await historyEntry.remove();
   * if (result?.success) {
   *   console.log('History entry deleted successfully');
   * }
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_UnreliableBuyerHistory.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
UnreliableBuyerHistory.baseUrl = "/un-reliable-buyer-history";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/fund-and-order-related/un-reliable-vendor/un-reliable-vendor-history.define.js
init_esm();
var UnreliableVendorHistory = class _UnreliableVendorHistory extends DatabaseAuto {
  /**
   * Creates a new instance of UnreliableVendorHistory.
   * @param {TunreliableVendorHistoryProps} data - The data used to initialize the history record
   * @throws {Error} Throws an error if no data is provided
   */
  constructor(data) {
    super(data);
    this.company = data.company;
    this.reason = data.reason;
    this.action = data.action;
    this.ecommerceOrder = data.ecommerceOrder;
  }
  /**
   * Retrieves all unreliable vendor history records with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: UnreliableVendorHistory[] }>}
   * An object containing the total count and an array of history records
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_UnreliableVendorHistory.baseUrl}?${query}`);
      const unreliableVendorHistorys = yield lastValueFrom(observer$);
      return {
        count: unreliableVendorHistorys.count,
        dataArr: unreliableVendorHistorys.data.map((val) => new _UnreliableVendorHistory(val))
      };
    });
  }
  /**
   * Filters unreliable vendor history records based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: UnreliableVendorHistory[] }>}
   * An object containing the total count and an array of filtered history records
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_UnreliableVendorHistory.baseUrl}/filter`, filter2);
      const unreliableVendorHistorys = yield lastValueFrom(observer$);
      return {
        count: unreliableVendorHistorys.count,
        dataArr: unreliableVendorHistorys.data.map((val) => new _UnreliableVendorHistory(val))
      };
    });
  }
  /**
   * Retrieves a single unreliable vendor history record by its ID.
   * @param {string} resourceId - The unique identifier of the history record to retrieve
   * @returns {Promise<UnreliableVendorHistory>} The requested history record
   * @throws {Error} If the record is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_UnreliableVendorHistory.baseUrl}/${resourceId}`);
      const unreliableVendorHistory = yield lastValueFrom(observer$);
      return new _UnreliableVendorHistory(unreliableVendorHistory);
    });
  }
  /**
   * Deletes multiple unreliable vendor history records based on the provided criteria.
   * @param {IbulkDelete} payload - The criteria for identifying which records to delete
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_UnreliableVendorHistory.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Removes the current unreliable vendor history record from the system.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} If the deletion fails or the record doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_UnreliableVendorHistory.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
UnreliableVendorHistory.baseUrl = "/un-reliable-vendor-history";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/invoice-related/credit-note.define.js
init_esm();
var CreditNote = class _CreditNote extends DatabaseAuto {
  /**
   * Creates a new instance of CreditNote.
   * @param {TcreditNoteProps} data - The credit note data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    super(data);
    this.urId = data.urId;
    this.ecommerceVendors = data.ecommerceVendors;
    this.creditNoteNumber = data.creditNoteNumber;
    this.creditNoteItems = data.creditNoteItems;
    this.amount = data.amount;
    this.creditNoteStatus = data.creditNoteStatus;
    this.invoice = data.invoice;
    this.company = data.company;
    this.date = data.date;
  }
  /**
   * Retrieves all credit notes with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: CreditNote[] }>}
   * An object containing the total count and an array of credit notes
   * @throws {Error} If there's an error fetching the credit notes
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_CreditNote.baseUrl}?${query}`);
      const creditNotes = yield lastValueFrom(observer$);
      return {
        count: creditNotes.count,
        dataArr: creditNotes.data.map((val) => new _CreditNote(val))
      };
    });
  }
  /**
   * Filters credit notes based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: CreditNote[] }>}
   * An object containing the total count and an array of filtered credit notes
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_CreditNote.baseUrl}/filter`, filter2);
      const creditNotes = yield lastValueFrom(observer$);
      return {
        count: creditNotes.count,
        dataArr: creditNotes.data.map((val) => new _CreditNote(val))
      };
    });
  }
  /**
   * Retrieves a single credit note by its ID.
   * @param {string} resourceId - The unique identifier of the credit note to retrieve
   * @returns {Promise<CreditNote>} The requested credit note
   * @throws {Error} If the credit note is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_CreditNote.baseUrl}/${resourceId}`);
      const creditNote = yield lastValueFrom(observer$);
      return new _CreditNote(creditNote);
    });
  }
  /**
   * Creates a new credit note record.
   * @param {TcreditNoteRequest<true>} payload - The credit note data to create
   * @returns {Promise<CreditNote>} The newly created credit note
   * @throws {Error} If the creation fails
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_CreditNote.baseUrl}`, payload);
      return new _CreditNote(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple credit notes based on the provided criteria.
   * @param {IbulkDelete} payload - The criteria for identifying which credit notes to delete
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   * @throws {Error} If the bulk delete operation fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_CreditNote.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current credit note with new values.
   * @param {TcreditNoteRequest} payload - The data to update the credit note with
   * @returns {Promise<CreditNote>} The updated credit note
   * @throws {Error} If the update operation fails
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_CreditNote.baseUrl}/${this._id}`, payload);
      return new _CreditNote(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current credit note from the system.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} If the deletion fails or the credit note doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_CreditNote.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
CreditNote.baseUrl = "/credit-note";
CreditNote.getCreditNoteAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${CreditNote.baseUrl}/analytics`, filter2);
  return lastValueFrom(observer$);
};

// ../../biz-nest/packages/commerce/client/lib/esm/defines/invoice-related/delivery-note.define.js
init_esm();
var DeliveryNote = class _DeliveryNote extends DatabaseAuto {
  /**
   * Creates a new instance of DeliveryNote.
   * @param {TdeliveryNoteProps} data - The delivery note data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    super(data);
    this.urId = data.urId;
    this.deliveryNoteStatus = data.deliveryNoteStatus;
    this.deliveryNoteNumber = data.deliveryNoteNumber;
    this.invoiceRelated = data.invoiceRelated;
    this.company = data.company;
  }
  /**
   * Retrieves all delivery notes with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: DeliveryNote[] }>}
   * An object containing the total count and an array of delivery notes
   * @throws {Error} If there's an error fetching the delivery notes
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_DeliveryNote.baseUrl}?${query}`);
      const deliveryNotes = yield lastValueFrom(observer$);
      return {
        count: deliveryNotes.count,
        dataArr: deliveryNotes.data.map((val) => new _DeliveryNote(val))
      };
    });
  }
  /**
   * Filters delivery notes based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: DeliveryNote[] }>}
   * An object containing the total count and an array of filtered delivery notes
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_DeliveryNote.baseUrl}/filter`, filter2);
      const deliveryNotes = yield lastValueFrom(observer$);
      return {
        count: deliveryNotes.count,
        dataArr: deliveryNotes.data.map((val) => new _DeliveryNote(val))
      };
    });
  }
  /**
   * Retrieves a single delivery note by its ID.
   * @param {string} resourceId - The unique identifier of the delivery note to retrieve
   * @returns {Promise<DeliveryNote>} The requested delivery note
   * @throws {Error} If the delivery note is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_DeliveryNote.baseUrl}/${resourceId}`);
      const deliveryNote = yield lastValueFrom(observer$);
      return new _DeliveryNote(deliveryNote);
    });
  }
  /**
   * Creates a new delivery note record.
   * @param {TdeliveryNoteRequest<true>} payload - The delivery note data to create
   * @returns {Promise<DeliveryNote>} The newly created delivery note
   * @throws {Error} If the creation fails
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_DeliveryNote.baseUrl}`, payload);
      const added = yield lastValueFrom(observer$);
      return new _DeliveryNote(added);
    });
  }
  /**
   * Deletes multiple delivery notes based on the provided criteria.
   * @param {IbulkDelete} payload - The criteria for identifying which delivery notes to delete
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   * @throws {Error} If the bulk delete operation fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_DeliveryNote.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current delivery note with new values.
   * @param {TdeliveryNoteRequest} payload - The data to update the delivery note with
   * @returns {Promise<DeliveryNote>} The updated delivery note
   * @throws {Error} If the update operation fails
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_DeliveryNote.baseUrl}/${this._id}`, payload);
      return new _DeliveryNote(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current delivery note from the system.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} If the deletion fails or the delivery note doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_DeliveryNote.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
DeliveryNote.baseUrl = "/delivery-note";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/invoice-related/order.define.js
init_esm();
var Order = class _Order extends DatabaseAuto {
  /**
   * Creates a new instance of Order.
   * @param {TorderProps} data - The order data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    super(data);
    this.urId = data.urId;
    this.orderStatus = data.orderStatus;
    this.orderNumber = data.orderNumber;
    this.invoiceRelated = data.invoiceRelated;
    this.company = data.company;
    if (data.deliveryDate) {
      this.deliveryDate = new Date(data.deliveryDate);
    }
  }
  /**
   * Retrieves all orders with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: Order[] }>}
   * An object containing the total count and an array of orders
   * @throws {Error} If there's an error fetching the orders
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_Order.baseUrl}?${query}`);
      const orders = yield lastValueFrom(observer$);
      return {
        count: orders.count,
        dataArr: orders.data.map((val) => new _Order(val))
      };
    });
  }
  /**
   * Filters orders based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: Order[] }>}
   * An object containing the total count and an array of filtered orders
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Order.baseUrl}/filter`, filter2);
      const orders = yield lastValueFrom(observer$);
      return {
        count: orders.count,
        dataArr: orders.data.map((val) => new _Order(val))
      };
    });
  }
  /**
   * Retrieves a single order by its ID.
   * @param {string} resourceId - The unique identifier of the order to retrieve
   * @returns {Promise<Order>} The requested order
   * @throws {Error} If the order is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_Order.baseUrl}/${resourceId}`);
      const order = yield lastValueFrom(observer$);
      return new _Order(order);
    });
  }
  /**
   * Creates a new order record.
   * @param {TorderRequest<true>} payload - The order data to create
   * @returns {Promise<Order>} The newly created order
   * @throws {Error} If the creation fails
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Order.baseUrl}`, payload);
      const added = yield lastValueFrom(observer$);
      return new _Order(added);
    });
  }
  /**
   * Deletes multiple orders based on the provided criteria.
   * @param {IbulkDelete} payload - The criteria for identifying which orders to delete
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation
   * @throws {Error} If the bulk delete operation fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Order.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current order with new values.
   * @param {TorderRequest} payload - The data to update the order with
   * @returns {Promise<IorderUpdateReturn & { order: Order }>}
   * An object containing the update result and the updated order
   * @throws {Error} If the update operation fails
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_Order.baseUrl}/${this._id}`, payload);
      const res = yield lastValueFrom(observer$);
      return __spreadProps(__spreadValues({}, res), {
        order: new _Order(res.data.order)
      });
    });
  }
  /**
   * Removes the current order from the system.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} If the deletion fails or the order doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_Order.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
Order.baseUrl = "/order";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/invoice-related/tax-payout.define.js
init_esm();
var TaxPayout = class _TaxPayout extends DatabaseAuto {
  /**
   * Creates a new instance of TaxPayout.
   * @param {ItaxPayout} data - The tax payout data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      }
    });
    super(data);
    this.urId = data.urId;
    this.total = data.total;
    this.dateInitiated = data.dateInitiated;
    this.dateCompleted = data.dateCompleted;
    this.status = data.status;
    this.company = data.company;
    this.paymentMeta = data.paymentMeta;
  }
  /**
   * Retrieves all tax payouts with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: TaxPayout[] }>}
   * An object containing the total count and an array of tax payouts
   * @throws {Error} If there's an error fetching the tax payouts
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_TaxPayout.baseUrl}?${query}`);
      const taxPayouts = yield lastValueFrom(observer$);
      return {
        count: taxPayouts.count,
        dataArr: taxPayouts.data.map((val) => new _TaxPayout(val))
      };
    });
  }
  /**
   * Filters tax payouts based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: TaxPayout[] }>}
   * An object containing the total count and an array of filtered tax payouts
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_TaxPayout.baseUrl}/filter`, filter2);
      const taxPayouts = yield lastValueFrom(observer$);
      return {
        count: taxPayouts.count,
        dataArr: taxPayouts.data.map((val) => new _TaxPayout(val))
      };
    });
  }
  /**
   * Retrieves a single tax payout by its ID.
   * @param {string} resourceId - The unique identifier of the tax payout to retrieve
   * @returns {Promise<TaxPayout>} The requested tax payout
   * @throws {Error} If the tax payout is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_TaxPayout.baseUrl}/${resourceId}`);
      const taxPayout = yield lastValueFrom(observer$);
      return new _TaxPayout(taxPayout);
    });
  }
  /**
   * Updates the status of the current tax payout.
   * @param {{ status: ItaxPayout['status'] }} payload - The new status for the tax payout
   * @returns {Promise<TaxPayout>} The updated tax payout
   * @throws {Error} If the update operation fails or the tax payout doesn't exist
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_TaxPayout.baseUrl}/${this._id}`, payload);
      return new _TaxPayout(yield lastValueFrom(observer$));
    });
  }
};
TaxPayout.baseUrl = "/tax-payout";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/invoice-related/vendor-bill-payout.define.js
init_esm();
var VendorBillPayout = class _VendorBillPayout extends DatabaseAuto {
  /**
   * Creates a new instance of VendorBillPayout.
   * @param {IvendorBillPayout} data - The vendor bill payout data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      }
    });
    super(data);
    this.urId = data.urId;
    this.vendorBill = data.vendorBill;
    this.total = data.total;
    this.subTotal = data.subTotal;
    this.dateInitiated = data.dateInitiated;
    this.dateCompleted = data.dateCompleted;
    this.status = data.status;
    this.company = data.company;
    this.paymentMeta = data.paymentMeta;
  }
  /**
   * Retrieves all vendor bill payouts with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: VendorBillPayout[] }>}
   * An object containing the total count and an array of vendor bill payouts
   * @throws {Error} If there's an error fetching the vendor bill payouts
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_VendorBillPayout.baseUrl}?${query}`);
      const vendorBillPayouts = yield lastValueFrom(observer$);
      return {
        count: vendorBillPayouts.count,
        dataArr: vendorBillPayouts.data.map((val) => new _VendorBillPayout(val))
      };
    });
  }
  /**
   * Filters vendor bill payouts based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: VendorBillPayout[] }>}
   * An object containing the total count and an array of filtered vendor bill payouts
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_VendorBillPayout.baseUrl}/filter`, filter2);
      const vendorBillPayouts = yield lastValueFrom(observer$);
      return {
        count: vendorBillPayouts.count,
        dataArr: vendorBillPayouts.data.map((val) => new _VendorBillPayout(val))
      };
    });
  }
  /**
   * Retrieves a single vendor bill payout by its ID.
   * @param {string} resourceId - The unique identifier of the vendor bill payout to retrieve
   * @returns {Promise<VendorBillPayout>} The requested vendor bill payout
   * @throws {Error} If the vendor bill payout is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_VendorBillPayout.baseUrl}/${resourceId}`);
      const vendorBillPayout = yield lastValueFrom(observer$);
      return new _VendorBillPayout(vendorBillPayout);
    });
  }
  /**
   * Updates the status of the current vendor bill payout.
   * @param {{ status: IvendorBillPayout['status'] }} payload - The new status for the vendor bill payout
   * @returns {Promise<VendorBillPayout>} The updated vendor bill payout
   * @throws {Error} If the update operation fails or the vendor bill payout doesn't exist
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_VendorBillPayout.baseUrl}/${this._id}`, payload);
      return new _VendorBillPayout(yield lastValueFrom(observer$));
    });
  }
};
VendorBillPayout.baseUrl = "/vendor-bill-payout";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/invoice-related/vendor-bill.define.js
init_esm();
var VendorBill = class _VendorBill extends DatabaseAuto {
  /**
   * Creates a new instance of VendorBill.
   * @param {TvendorBillProps} data - The vendor bill data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      }
    });
    super(data);
    this.urId = data.urId;
    this.vendorBillStatus = data.vendorBillStatus;
    this.vendorBillNumber = data.vendorBillNumber;
    this.invoice = data.invoice;
    this.items = data.items;
    this.subTotalAmount = data.subTotalAmount;
    this.ecommerceCutValue = data.ecommerceCutValue;
    this.payOutAmount = data.payOutAmount;
    this.company = data.company;
  }
  /**
   * Retrieves all vendor bills with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: VendorBill[] }>}
   * An object containing the total count and an array of vendor bills
   * @throws {Error} If there's an error fetching the vendor bills
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_VendorBill.baseUrl}?${query}`);
      const vendorBills = yield lastValueFrom(observer$);
      return {
        count: vendorBills.count,
        dataArr: vendorBills.data.map((val) => new _VendorBill(val))
      };
    });
  }
  /**
   * Filters vendor bills based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: VendorBill[] }>}
   * An object containing the total count and an array of filtered vendor bills
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_VendorBill.baseUrl}/filter`, filter2);
      const vendorBills = yield lastValueFrom(observer$);
      return {
        count: vendorBills.count,
        dataArr: vendorBills.data.map((val) => new _VendorBill(val))
      };
    });
  }
  /**
   * Retrieves a single vendor bill by its ID.
   * @param {string} resourceId - The unique identifier of the vendor bill to retrieve
   * @returns {Promise<VendorBill>} The requested vendor bill
   * @throws {Error} If the vendor bill is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_VendorBill.baseUrl}/${resourceId}`);
      const vendorBill = yield lastValueFrom(observer$);
      return new _VendorBill(vendorBill);
    });
  }
  /**
   * Updates the status of the current vendor bill.
   * @param {{ vendorBillStatus: TvendorBillProps['vendorBillStatus'] }} payload - The new status for the vendor bill
   * @returns {Promise<VendorBill>} The updated vendor bill
   * @throws {Error} If the update operation fails or the vendor bill doesn't exist
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_VendorBill.baseUrl}/${this._id}`, payload);
      return new _VendorBill(yield lastValueFrom(observer$));
    });
  }
};
VendorBill.baseUrl = "/vendor-bill";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/invoice-related/vendor-credit-memo.define.js
init_esm();
var VendorCreditMemo = class _VendorCreditMemo extends DatabaseAuto {
  /**
   * Creates a new instance of VendorCreditMemo.
   * @param {TvendorCreditMemoProps} data - The vendor credit memo data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      }
    });
    super(data);
    this.urId = data.urId;
    this.vendorCreditMemoStatus = data.vendorCreditMemoStatus;
    this.vendorCreditMemoNumber = data.vendorCreditMemoNumber;
    this.vendorBill = data.vendorBill;
    this.vendorCreditMemoItems = data.vendorCreditMemoItems;
    this.amount = data.amount;
    this.date = data.date;
    this.company = data.company;
    this.dateOfIssue = data.dateOfIssue;
    this.datePaymentInitiated = data.datePaymentInitiated;
    this.datePaymentCompleted = data.datePaymentCompleted;
    this.paymentMeta = data.paymentMeta;
  }
  /**
   * Retrieves analytics data for vendor credit memos.
   * @param {IfilterProps} filter - The filter criteria for the analytics query
   * @returns {Promise<IvendorMemoAnalytics>} The analytics result
   * @throws {Error} If the analytics request fails
   */
  static getVendorMemoAnalytics(filter2) {
    const observer$ = CommerceClient.ehttp.makePost(`${_VendorCreditMemo.baseUrl}/analytics`, filter2);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves all vendor credit memos with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: VendorCreditMemo[] }>}
   * An object containing the total count and an array of vendor credit memos
   * @throws {Error} If there's an error fetching the vendor credit memos
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_VendorCreditMemo.baseUrl}?${query}`);
      const vendorCreditMemos = yield lastValueFrom(observer$);
      return {
        count: vendorCreditMemos.count,
        dataArr: vendorCreditMemos.data.map((val) => new _VendorCreditMemo(val))
      };
    });
  }
  /**
   * Filters vendor credit memos based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: VendorCreditMemo[] }>}
   * An object containing the total count and an array of filtered vendor credit memos
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_VendorCreditMemo.baseUrl}/filter`, filter2);
      const vendorCreditMemos = yield lastValueFrom(observer$);
      return {
        count: vendorCreditMemos.count,
        dataArr: vendorCreditMemos.data.map((val) => new _VendorCreditMemo(val))
      };
    });
  }
  /**
   * Retrieves a single vendor credit memo by its ID.
   * @param {string} resourceId - The unique identifier of the vendor credit memo to retrieve
   * @returns {Promise<VendorCreditMemo>} The requested vendor credit memo
   * @throws {Error} If the vendor credit memo is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_VendorCreditMemo.baseUrl}/${resourceId}`);
      const vendorCreditMemo = yield lastValueFrom(observer$);
      return new _VendorCreditMemo(vendorCreditMemo);
    });
  }
  /**
   * Updates the status of the current vendor credit memo.
   * @param {{ vendorCreditMemoStatus: TvendorCreditMemoProps['vendorCreditMemoStatus'] }} payload - The new status
   * for the vendor credit memo
   * @returns {Promise<VendorCreditMemo>} The updated vendor credit memo
   * @throws {Error} If the update operation fails or the vendor credit memo doesn't exist
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_VendorCreditMemo.baseUrl}/${this._id}`, payload);
      return new _VendorCreditMemo(yield lastValueFrom(observer$));
    });
  }
};
VendorCreditMemo.baseUrl = "/vendor-credit-memo";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/item-related/item-inventory.define.js
init_esm();
var ItemInventory = class _ItemInventory extends DatabaseAuto {
  /**
   * Creates a new instance of ItemInventory.
   * @param {TitemInventoryProps} data - The inventory data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    validateData(data, {
      item: {
        validate: (v) => {
          if (typeof v === "object") {
            return Boolean(v._id);
          }
          return false;
        },
        message: "item must be a valid item object with an _id"
      },
      date: {
        validate: (v) => {
          const date = v instanceof Date ? v : new Date(v);
          return !isNaN(date.getTime());
        },
        message: "date must be a valid date"
      },
      unitCost: {
        validate: (v) => typeof v === "number",
        message: "unitCost must be a number"
      },
      totalCost: {
        validate: (v) => typeof v === "number",
        message: "totalCost must be a number"
      },
      source: {
        validate: (v) => typeof v === "string" && v.length > 0,
        message: "source must be a non-empty string"
      }
    });
    super(data);
    this.item = new Item(data.item);
    this.date = new Date(data.date);
    this.quantity = data.quantity;
    this.colors = data.colors || [];
    this.sizes = data.sizes || [];
    this.unitCost = data.unitCost;
    this.totalCost = data.totalCost;
    this.source = data.source;
    this.quantityRemaining = data.quantityRemaining;
  }
  /**
   * Retrieves all inventory records with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: ItemInventory[] }>}
   * An object containing the total count and an array of inventory records
   * @throws {Error} If there's an error fetching the records
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_ItemInventory.baseUrl}?${query}`);
      const itemInvs = yield lastValueFrom(observer$);
      return {
        count: itemInvs.count,
        dataArr: itemInvs.data.map((val) => new _ItemInventory(val))
      };
    });
  }
  /**
   * Filters inventory records based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: ItemInventory[] }>}
   * An object containing the total count and an array of filtered inventory records
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_ItemInventory.baseUrl}/filter`, filter2);
      const itemInvs = yield lastValueFrom(observer$);
      return {
        count: itemInvs.count,
        dataArr: itemInvs.data.map((val) => new _ItemInventory(val))
      };
    });
  }
  /**
   * Retrieves a single inventory record by its ID.
   * @param {string} resourceId - The unique identifier of the inventory record
   * @returns {Promise<ItemInventory>} The requested inventory record
   * @throws {Error} If the record is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_ItemInventory.baseUrl}/${resourceId}`);
      const itemInv = yield lastValueFrom(observer$);
      return new _ItemInventory(itemInv);
    });
  }
  /**
   * Creates a new inventory record.
   * @param {TitemInventoryRequest<true>} payload - The inventory data to create
   * @returns {Promise<ItemInventory>} The newly created inventory record
   * @throws {Error} If the creation fails due to invalid data or server error
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_ItemInventory.baseUrl}`, payload);
      return new _ItemInventory(yield lastValueFrom(observer$));
    });
  }
};
ItemInventory.baseUrl = "/item-inventory";
ItemInventory.getInventoryAnalytics = (filter2) => {
  const observer$ = CommerceClient.ehttp.makePost(`${ItemInventory.baseUrl}/analytics`, filter2);
  return lastValueFrom(observer$);
};

// ../../biz-nest/packages/commerce/client/lib/esm/defines/item-related/item-offer.define.js
init_esm();
var ItemOffer = class _ItemOffer extends DatabaseAuto {
  /**
   * Creates a new instance of ItemOffer.
   * @param {TitemOfferProps} data - The item offer data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      },
      company: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Company ID must be a non-empty string"
      },
      items: {
        validate: (v) => Array.isArray(v) && v.length > 0 && v.every((item) => item !== null && item !== void 0),
        message: "Items must be a non-empty array with valid items"
      },
      type: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Offer type must be a non-empty string"
      },
      header: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Offer header must be a non-empty string"
      },
      subHeader: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Offer sub-header must be a non-empty string"
      },
      amount: {
        validate: (v) => typeof v === "number" && v >= 0,
        message: "Amount must be a non-negative number"
      },
      expireAt: {
        validate: (v) => {
          const expireAt = v instanceof Date ? v : new Date(v);
          return !isNaN(expireAt.getTime()) && expireAt > /* @__PURE__ */ new Date();
        },
        message: "Expiration date must be a valid future date (Date object or ISO date string)"
      }
    });
    super(data);
    this.urId = data.urId;
    this.company = data.company;
    this.items = data.items.map((val) => new Item(val));
    this.type = data.type;
    this.header = data.header;
    this.subHeader = data.subHeader;
    this.amount = data.amount;
    this.expireAt = new Date(data.expireAt);
  }
  /**
   * Retrieves all item offers with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: ItemOffer[] }>}
   * An object containing the total count and an array of item offers
   * @throws {Error} If there's an error fetching the offers
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_ItemOffer.baseUrl}?${query}`);
      const offers = yield lastValueFrom(observer$);
      return {
        count: offers.count,
        dataArr: offers.data.map((val) => new _ItemOffer(val))
      };
    });
  }
  /**
   * Filters item offers based on specified criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: ItemOffer[] }>}
   * An object containing the total count and an array of filtered item offers
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_ItemOffer.baseUrl}/filter`, filter2);
      const offers = yield lastValueFrom(observer$);
      return {
        count: offers.count,
        dataArr: offers.data.map((val) => new _ItemOffer(val))
      };
    });
  }
  /**
   * Retrieves a single item offer by its ID.
   * @param {string} resourceId - The unique identifier of the item offer
   * @returns {Promise<ItemOffer>} The requested item offer
   * @throws {Error} If the offer is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_ItemOffer.baseUrl}/${resourceId}`);
      const offer = yield lastValueFrom(observer$);
      return new _ItemOffer(offer);
    });
  }
  /**
   * Creates a new item offer.
   * @param {TitemOfferRequest<true>} payload - The offer data to create
   * @returns {Promise<ItemOffer>} The newly created item offer
   * @throws {Error} If the creation fails due to invalid data or server error
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_ItemOffer.baseUrl}`, payload);
      return new _ItemOffer(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple item offers based on the specified criteria.
   * @param {IbulkDelete} payload - The criteria for bulk deletion
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk deletion operation
   * @throws {Error} If the bulk deletion fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_ItemOffer.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current item offer with new values.
   * @param {Partial<IitemOffer>} payload - The updated offer data
   * @returns {Promise<ItemOffer>} The updated item offer
   * @throws {Error} If the update operation fails or the offer doesn't exist
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_ItemOffer.baseUrl}/${this._id}`, payload);
      return new _ItemOffer(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes the current item offer.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the deletion operation
   * @throws {Error} If the deletion fails or the offer doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_ItemOffer.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
ItemOffer.baseUrl = "/item-offer";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/item-related/promo-code.define.js
init_esm();
var PromoCode = class _PromoCode extends DatabaseAuto {
  /**
   * Constructs an instance of `PromoCode`.
   *
   * @param {IpromoCode} data - The promo code data used to initialize the instance.
   * @throws {Error} Throws an error if no data is provided.
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      },
      company: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Company ID must be a non-empty string"
      },
      items: {
        validate: (v) => Array.isArray(v) && v.length > 0 && v.every((item) => item !== null && item !== void 0),
        message: "Items must be a non-empty array with valid items"
      },
      code: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Code must be a non-empty string"
      },
      timesToUse: {
        validate: (v) => typeof v === "number" && v >= 0,
        message: "Times to use must be a non-negative number"
      },
      timesUsed: {
        validate: (v) => typeof v === "number" && v >= 0,
        message: "Times used must be a non-negative number"
      },
      percentage: {
        validate: (v) => typeof v === "number" && v >= 0,
        message: "Percentage must be a non-negative number"
      }
    });
    super(data);
    this.urId = data.urId;
    this.company = data.company;
    this.items = data.items.map((item) => new Item(item));
    this.code = data.code;
    this.timesToUse = data.timesToUse;
    this.timesUsed = data.timesUsed;
    this.percentage = data.percentage;
    this.expireAt = data.expireAt;
  }
  /**
   * Retrieves all promo codes of a specific type with pagination support.
   *
   * @param {number} [offset=0] - The starting point for pagination.
   * @param {number} [limit=20] - The number of items to retrieve.
   * @returns {Promise<{ count: number, dataArr: PromoCode[] }>} An object containing
   * the total count and an array of `PromoCode` instances.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_PromoCode.baseUrl}/${offset}/${limit}`);
      const promoCodes = yield lastValueFrom(observer$);
      return {
        count: promoCodes.count,
        dataArr: promoCodes.data.map((val) => new _PromoCode(val))
      };
    });
  }
  /**
   * Filters promo codes based on the provided filter properties.
   *
   * @param {IfilterProps} filter - The filter criteria for retrieving promo codes.
   * @returns {Promise<{ count: number, dataArr: PromoCode[] }>} An object containing
   * the total count and an array of `PromoCode` instances.
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_PromoCode.baseUrl}/filter`, filter2);
      const promoCodes = yield lastValueFrom(observer$);
      return {
        count: promoCodes.count,
        dataArr: promoCodes.data.map((val) => new _PromoCode(val))
      };
    });
  }
  /**
   * Retrieves a single promo code by its resource ID.
   *
   * @param {string} resourceId - The ID of the promo code to retrieve.
   * @returns {Promise<PromoCode>} The retrieved `PromoCode` instance.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_PromoCode.baseUrl}/${resourceId}`);
      const promoCode = yield lastValueFrom(observer$);
      return new _PromoCode(promoCode);
    });
  }
  /**
   * Retrieves a single promo code by its code.
   *
   * @param {string} code - The code of the promo code to retrieve.
   * @returns {Promise<PromoCode>} The retrieved `PromoCode` instance.
   */
  static getOneByCode(code) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_PromoCode.baseUrl}/get-by-code`, { code });
      const promoCode = yield lastValueFrom(observer$);
      return new _PromoCode(promoCode);
    });
  }
  /**
   * Adds a new promo code.
   *
   * @param {Omit<IpromoCode, TbackEndGeneratedFields | 'company' | 'code' | 'timesUsed'>} payload -
   * The promo code data to add.
   * @returns {Promise<PromoCode>} The result of the addition operation.
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_PromoCode.baseUrl}`, payload);
      return new _PromoCode(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes multiple promo codes based on the provided criteria.
   *
   * @param {IbulkDelete} payload - The criteria for deleting multiple promo codes.
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the deletion operation.
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_PromoCode.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Removes the current promo code.
   *
   * @returns {Promise<IdeleteOneResponse | null>} The result of the removal operation.
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_PromoCode.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
PromoCode.baseUrl = "/promo-code";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/item-related/review.define.js
init_esm();
var Review = class _Review extends DatabaseAuto {
  /**
   * Creates a new instance of Review.
   * @param {TreviewProps} data - The review data
   * @throws {Error} If the data is invalid or missing required fields
   */
  constructor(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      },
      name: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Name must be a non-empty string"
      },
      email: {
        validate: (v) => typeof v === "string" && emailRegex.test(v),
        message: "Invalid email address"
      },
      comment: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Comment must be a non-empty string"
      },
      rating: {
        validate: (v) => typeof v === "number" && v >= 0 && v <= 10,
        message: "Rating must be a number between 0 and 10"
      },
      itemId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Item ID must be a non-empty string"
      },
      images: {
        required: false,
        validate: (v) => v === void 0 || Array.isArray(v) && v.every((img) => typeof img === "string"),
        message: "Images must be an array of strings if provided"
      },
      image: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string",
        message: "Image must be a string if provided"
      },
      buyer: {
        validate: (v) => v !== void 0 && typeof v === "object",
        message: "Buyer is required and must be a buyer object"
      }
    });
    super(data);
    this.urId = data.urId;
    this.image = data.image;
    this.name = data.name;
    this.email = data.email;
    this.comment = data.comment;
    this.rating = data.rating;
    this.images = data.images || [];
    this.buyer = data.buyer;
    this.itemId = data.itemId;
  }
  /**
   * Retrieves all reviews for a specific item with pagination support.
   * @param {string} itemId - The ID of the item to get reviews for
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: Review[] }>}
   * An object containing the total count and an array of reviews
   * @throws {Error} If there's an error fetching the reviews
   */
  static getAll(itemId, offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString(),
        itemId
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_Review.baseUrl}?${query}`);
      const reviews = yield lastValueFrom(observer$);
      return {
        count: reviews.count,
        dataArr: reviews.data.map((val) => new _Review(val))
      };
    });
  }
  /**
   * Retrieves reviews based on filter criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: Review[] }>}
   * An object containing the total count and an array of filtered reviews
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Review.baseUrl}/filter`, filter2);
      const reviews = yield lastValueFrom(observer$);
      return {
        count: reviews.count,
        dataArr: reviews.data.map((val) => new _Review(val))
      };
    });
  }
  /**
   * Retrieves the count of reviews with a specific rating for an item.
   * @param {string} _id - The ID of the item
   * @param {number} rating - The rating to count (0-10)
   * @returns {Promise<{ count: number }>} The count of reviews with the specified rating
   * @throws {Error} If there's an error fetching the rating count
   */
  static getRatingCount(_id, rating) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Review.baseUrl}/get-rating-count`, { _id, rating });
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves a single review by its ID.
   * @param {string} resourceId - The unique identifier of the review
   * @returns {Promise<Review>} The requested review
   * @throws {Error} If the review is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_Review.baseUrl}/${resourceId}`);
      const review = yield lastValueFrom(observer$);
      return new _Review(review);
    });
  }
  /**
   * Creates a new review.
   * @param {TreviewRequest<true>} payload - The review data to create
   * @returns {Promise<Review>} The newly created review
   * @throws {Error} If the creation fails due to invalid data or server error
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Review.baseUrl}`, payload);
      return new _Review(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes the current review.
   * @returns {Promise<IdeleteOneResponse | null>} The result of the deletion operation
   * @throws {Error} If the deletion fails or the review doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_Review.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
Review.baseUrl = "/review";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/track/audit-log.define.js
init_esm();
var AuditLog = class _AuditLog extends DatabaseAuto {
  /**
   * Creates a new instance of AuditLog.
   * @param {TauditLogProps} data - The audit log data
   */
  constructor(data) {
    super(data);
    this.parent = data.parent;
    this.action = data.action;
    this.authUser = data.authUser;
    this.commerceUser = data.commerceUser;
    this.ip = data.ip;
    this.deviceInfo = data.deviceInfo;
    this.info = data.info;
    this.company = data.company;
  }
  /**
   * Retrieves audit log entries filtered by parent ID with pagination support.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @param {string} parent - The parent ID to filter audit logs by
   * @returns {Promise<{ count: number; dataArr: AuditLog[] }>}
   * An object containing the total count and an array of audit log entries
   * @throws {Error} If there's an error applying the filter or fetching the logs
   */
  static filterActivityByParent(filter2, parent) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_AuditLog.baseUrl}/filter-activity-by-parent/${parent}`, filter2);
      const activitys = yield lastValueFrom(observer$);
      return {
        count: activitys.count,
        dataArr: activitys.data.map((val) => new _AuditLog(val))
      };
    });
  }
  /**
   * Retrieves audit log entries for a specific user with pagination support.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @param {string} userId - The ID of the user to filter audit logs by
   * @returns {Promise<{ count: number; dataArr: AuditLog[] }>}
   * An object containing the total count and an array of audit log entries
   * @throws {Error} If there's an error applying the filter or fetching the logs
   */
  static filterActivityByUser(filter2, userId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_AuditLog.baseUrl}/filter-activity-by-user/${userId}`, filter2);
      const activitys = yield lastValueFrom(observer$);
      return {
        count: activitys.count,
        dataArr: activitys.data.map((val) => new _AuditLog(val))
      };
    });
  }
  /**
   * Deletes multiple audit log entries based on the provided criteria.
   * @param {IbulkDelete} payload - The criteria for bulk deletion
   * @returns {Promise<IbulkDeleteSuccessResponse>}
   * The result of the bulk deletion operation
   * @throws {Error} If the bulk deletion fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_AuditLog.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Deletes the current audit log entry.
   * @returns {Promise<IdeleteOneResponse | null>}
   * The result of the deletion operation
   * @throws {Error} If the deletion fails or the log entry doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_AuditLog.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
AuditLog.baseUrl = "/audit-log";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/user-related/buyer.define.js
init_esm();
var Buyer = class _Buyer extends DatabaseAuto {
  /**
   * Creates a new instance of Buyer.
   * @param {IcommerceUser} data - The buyer data
   * @throws {BizNestClientError} If no data is provided
   */
  constructor(data) {
    if (!data) {
      throw new BizNestClientError("No data provided");
    }
    super(data);
    this.firstName = data.firstName || "";
    this.lastName = data.lastName || "";
    this.phone = data.phone || "";
    this.email = data.email || "";
    this.authUser = data.authUser || "";
    this.urId = data.urId || "";
    this.defaultCurrency = data.defaultCurrency || "";
    this.address = data.address || [];
    this.billing = data.billing || [];
    this.dateOfBirth = data.dateOfBirth || "";
    this.gender = data.gender || "";
    this.amountDue = data.amountDue || 0;
    this.online = data.online || false;
    this.salutation = data.salutation || "";
    this.userDispNameFormat = data.userDispNameFormat;
    this.userType = data.userType;
    this.photos = data.photos || [];
    this.profilePicture = data.profilePicture;
    this.profileCoverPicture = data.profileCoverPicture;
    this.recoveryPhoneNumbers = data.recoveryPhoneNumbers || [];
    this.recoveryEmails = data.recoveryEmails || [];
    this.authPhotos = data.authPhotos;
  }
  /**
   * Retrieves analytics data for buyers.
   * @param {IfilterProps} filter - The filter criteria for analytics
   * @returns {Promise<IbuyerAnalytics>} The analytics data
   * @throws {Error} If there's an error fetching the analytics
   */
  static analytics(filter2) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Buyer.baseUrl}/analytics`, filter2);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves all buyers with pagination support.
   * @param {number} [offset=0] - The starting index for pagination
   * @param {number} [limit=20] - The maximum number of records to return
   * @returns {Promise<{ count: number; dataArr: Buyer[] }>}
   * An object containing the total count and an array of buyers
   * @throws {Error} If there's an error fetching the buyers
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_Buyer.baseUrl}?${query}`);
      const buyers = yield lastValueFrom(observer$);
      return {
        count: buyers.count,
        dataArr: buyers.data.map((val) => new _Buyer(val))
      };
    });
  }
  /**
   * Retrieves buyers based on filter criteria.
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{ count: number; dataArr: Buyer[] }>}
   * An object containing the total count and an array of filtered buyers
   * @throws {Error} If there's an error applying the filter
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Buyer.baseUrl}/filter`, filter2);
      const buyers = yield lastValueFrom(observer$);
      return {
        count: buyers.count,
        dataArr: buyers.data.map((val) => new _Buyer(val))
      };
    });
  }
  /**
   * Retrieves a single buyer by ID.
   * @param {string} resourceId - The unique identifier of the buyer
   * @returns {Promise<Buyer>} The requested buyer
   * @throws {Error} If the buyer is not found or an error occurs during retrieval
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_Buyer.baseUrl}/${resourceId}`);
      const buyer = yield lastValueFrom(observer$);
      return new _Buyer(buyer);
    });
  }
  /**
   * Retrieves the current authenticated buyer's profile.
   * @returns {Promise<Buyer>} The current buyer's profile
   * @throws {Error} If the buyer is not authenticated or an error occurs
   */
  static myProfile() {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Buyer.baseUrl}/my-profile`, {});
      const buyer = yield lastValueFrom(observer$);
      return new _Buyer(buyer);
    });
  }
  /**
   * Creates a new buyer.
   * @param {Omit<IcommerceUser, 'userType' | '_id' | 'createdAt' | 'updatedAt' | 'authUser'>} payload - The buyer data
   * @returns {Promise<Buyer>} The newly created buyer
   * @throws {Error} If the creation fails due to invalid data or server error
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Buyer.baseUrl}`, payload);
      return new _Buyer(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple buyers based on the provided criteria.
   * @param {IbulkDelete} payload - The criteria for bulk deletion
   * @returns {Promise<IbulkDeleteSuccessResponse>}
   * The result of the bulk deletion operation
   * @throws {Error} If the bulk deletion fails
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Buyer.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Uploads multiple images for the current buyer.
   * @param {Ifile[]} files - The files to upload
   * @returns {Promise<IcommerceUser>} The updated buyer with new images
   * @throws {Error} If the upload fails or the buyer doesn't exist
   */
  uploadImages(files) {
    return CommerceClient.ehttp.uploadFiles(files, `${_Buyer.baseUrl}/upload-images`, { _id: this._id });
  }
  /**
   * Uploads a profile picture for the current buyer.
   * @param {Ifile} file - The image file to upload
   * @returns {Promise<IcommerceUser>} The updated buyer with new profile picture
   * @throws {Error} If the upload fails or the buyer doesn't exist
   */
  uploadProfilePicture(file) {
    return CommerceClient.ehttp.uploadFiles([file], `${_Buyer.baseUrl}/upload-profile-picture`, { _id: this._id });
  }
  /**
   * Uploads a profile cover picture for the current buyer.
   * @param {Ifile} file - The image file to upload
   * @returns {Promise<IcommerceUser>} The updated buyer with new cover picture
   * @throws {Error} If the upload fails or the buyer doesn't exist
   */
  uploadProfileCoverPicture(file) {
    return CommerceClient.ehttp.uploadFiles([file], `${_Buyer.baseUrl}/upload-profile-cover-picture`, { _id: this._id });
  }
  /**
   * Sets an existing image as profile or cover picture.
   * @param {string} fileId - The ID of the file to set
   * @param {'profilePicture' | 'profileCoverPicture'} field - The field to set the image for
   * @returns {Promise<Buyer>} The updated buyer
   * @throws {Error} If the operation fails or the buyer/image doesn't exist
   */
  setImageAs(fileId, field) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Buyer.baseUrl}/set-image-as`, { fileId, field });
      return new _Buyer(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes images from the current buyer's profile.
   * @param {string[]} fileIds - The IDs of the images to delete
   * @returns {Promise<Buyer>} The updated buyer with images removed
   * @throws {Error} If the deletion fails or the buyer doesn't exist
   */
  deleteImages(fileIds) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Buyer.baseUrl}/delete-images`, { fileIds, _id: this._id });
      return new _Buyer(yield lastValueFrom(observer$));
    });
  }
  /**
   * Updates the current buyer's information.
   * @param {Omit<Partial<IcommerceUser>, 'userType' | '_id' |
   * 'createdAt' | 'updatedAt'>} payload - The updated buyer data
   * @returns {Promise<Buyer>} The updated buyer
   * @throws {Error} If the update fails or the buyer doesn't exist
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${_Buyer.baseUrl}/${this._id}`, payload);
      return new _Buyer(yield lastValueFrom(observer$));
    });
  }
  /**
   * Permanently deletes the current buyer.
   * @returns {Promise<IdeleteOneResponse | null>}
   * The result of the deletion operation
   * @throws {Error} If the deletion fails or the buyer doesn't exist
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${_Buyer.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
  /**
   * Changes the default currency for the current buyer.
   * @param {string} currency - The new currency code
   * @returns {Promise<Isuccess>} The result of the currency change operation
   * @throws {Error} If the currency change fails or the buyer doesn't exist
   */
  changeUserCurrency(currency) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Buyer.baseUrl}/change-currency`, { currency });
    return lastValueFrom(observer$);
  }
};
Buyer.baseUrl = "/buyer";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/user-related/customer.define.js
init_esm();
var Customer = class _Customer extends CommerceUserBase {
  /**
   * Creates a new Customer instance.
   *
   * @param {Icustomer} data - The customer data used to initialize the instance.
   * @throws {BizNestClientError} When no data is provided.
   * @throws {Error} When parent class validation fails.
   *
   * @example
   * const customerData = {
   *   _id: '123',
   *   // ... other required fields from Icustomer
   * };
   * const customer = new Customer(customerData);
   */
  constructor(data) {
    if (!data) {
      throw new BizNestClientError("No data provided");
    }
    super(data);
    this.baseUrl = "/customer";
    this.otherAddresses = data.otherAddresses;
  }
  /**
   * Retrieves analytics data for customers based on the provided filter criteria.
   * This method provides insights and aggregated data about customers.
   *
   * @static
   * @param {IfilterProps} filter - The filter criteria for retrieving customer analytics.
   * @returns {Promise<IcustomerAnalytics>} A promise that resolves to the customer analytics data.
   * @throws {Error} When the API request fails or returns an error.
   *
   * @example
   * const filter = {
   *   dateRange: {
   *     start: '2023-01-01',
   *     end: '2023-12-31'
   *   }
   * };
   * const analytics = await Customer.analytics(filter);
   */
  static analytics(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Customer.baseUrl}/analytics`, filter2);
      const analytics = yield lastValueFrom(observer$);
      return analytics;
    });
  }
  /**
   * Retrieves a paginated list of all customers.
   *
   * @static
   * @param {number} [offset=0] - The number of records to skip (for pagination).
   * @param {number} [limit=20] - The maximum number of records to return.
   * @returns {Promise<{ count: number, dataArr: Customer[] }>}
   * An object containing the total count and an array of Customer instances.
   * @throws {Error} When the API request fails or returns an error.
   *
   * @example
   * // Get first page of 20 customers
   * const { count, dataArr } = await Customer.getAll(0, 20);
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${_Customer.baseUrl}?${query}`);
      const customers = yield lastValueFrom(observer$);
      return {
        count: customers.count,
        dataArr: customers.data.map((val) => new _Customer(val))
      };
    });
  }
  /**
   * Filters customers based on the provided criteria.
   *
   * @static
   * @param {IfilterProps} filter - The filter criteria for retrieving customers.
   * @returns {Promise<{ count: number, dataArr: Customer[] }>}
   * An object containing the total count and an array of filtered Customer instances.
   * @throws {Error} When the API request fails or returns an error.
   *
   * @example
   * const filter = {
   *   search: 'John',
   *   status: 'active'
   * };
   * const { count, dataArr } = await Customer.filterAll(filter);
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Customer.baseUrl}/filter`, filter2);
      const customers = yield lastValueFrom(observer$);
      return {
        count: customers.count,
        dataArr: customers.data.map((val) => new _Customer(val))
      };
    });
  }
  /**
   * Retrieves a single customer by their unique identifier.
   *
   * @static
   * @param {string} resourceId - The unique identifier of the customer to retrieve.
   * @returns {Promise<Customer>} A Customer instance for the requested customer.
   * @throws {Error} When the customer is not found or the API request fails.
   *
   * @example
   * const customer = await Customer.getOne('customer-123');
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${_Customer.baseUrl}/${resourceId}`);
      const customer = yield lastValueFrom(observer$);
      return new _Customer(customer);
    });
  }
  /**
   * Adds a new customer to the system.
   *
   * @static
   * @param {TcustomerRequest<true>} payload - The customer data to add.
   * @returns {Promise<Customer>} A new Customer instance for the created customer.
   * @throws {Error} When the customer creation fails or validation errors occur.
   *
   * @example
   * const newCustomer = await Customer.add({
   *   firstName: 'John',
   *   lastName: 'Doe',
   *   email: 'john.doe@example.com',
   *   // ... other required fields
   * });
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${_Customer.baseUrl}`, payload);
      return new _Customer(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes multiple customers based on the provided criteria.
   *
   * @static
   * @param {IbulkDelete} payload - The criteria for selecting customers to delete.
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation.
   * @throws {Error} When the deletion fails or validation errors occur.
   *
   * @example
   * const result = await Customer.bulkDelete({
   *   ids: ['customer-1', 'customer-2']
   * });
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${_Customer.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current customer's information.
   *
   * @param {TcustomerRequest} payload - The updated customer data.
   * @returns {Promise<Customer>} A new Customer instance with the updated data.
   * @throws {Error} When the update fails or validation errors occur.
   *
   * @example
   * const updatedCustomer = await customer.update({
   *   firstName: 'Updated Name',
   *   // ... other fields to update
   * });
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${this.baseUrl}/${this._id}`, payload);
      return new _Customer(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current customer from the system.
   *
   * @returns {Promise<IdeleteOneResponse | null>} The result of the deletion operation.
   * @throws {Error} When the deletion fails or the customer is not found.
   *
   * @example
   * const result = await customer.remove();
   * if (result?.success) {
   *   console.log('Customer removed successfully');
   * }
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${this.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
Customer.baseUrl = "/customer";

// ../../biz-nest/packages/commerce/client/lib/esm/defines/user-related/wallet.define.js
init_esm();
var UserWallet = class _UserWallet extends DatabaseAuto {
  /**
   * Creates a new UserWallet instance.
   *
   * @param {TuserWalletProps} wallet - The wallet data used to initialize the instance.
   * @throws {BizNestClientError} When wallet data is invalid or missing required fields.
   * @throws {Error} When validation of wallet data fails.
   *
   * @example
   * const walletData = {
   *   urId: 'user-123',
   *   commerceUser: { /* user data *\/ },
   *   accountBalance: 100.50
   * };
   * const wallet = new UserWallet(walletData);
   */
  constructor(wallet) {
    validateData(wallet, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "User ID must be a non-empty string"
      },
      accountBalance: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "number" && v >= 0,
        message: "Account balance must be a non-negative number"
      }
    });
    super(wallet);
    this.urId = wallet.urId;
    this.commerceUser = wallet.commerceUser;
    this.accountBalance = wallet.accountBalance || 0;
  }
  /**
   * Retrieves a paginated list of all user wallets.
   *
   * @static
   * @param {number} [offset=0] - The number of records to skip (for pagination).
   * @param {number} [limit=20] - The maximum number of records to return.
   * @returns {Promise<{ count: number, dataArr: UserWallet[] }>}
   * An object containing the total count and an array of UserWallet instances.
   * @throws {Error} When the API request fails or returns an error.
   *
   * @example
   * // Get first page of 10 wallets
   * const { count, dataArr } = await UserWallet.getAll(0, 10);
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${this.baseUrl}?${query}`);
      const result = yield lastValueFrom(observer$);
      return {
        count: result.count,
        dataArr: result.data.map((val) => new _UserWallet(val))
      };
    });
  }
  /**
   * Retrieves a filtered list of user wallets based on the provided criteria.
   *
   * @static
   * @param {IfilterProps} filter - The filter criteria for retrieving wallets.
   * @returns {Promise<{ count: number, dataArr: UserWallet[] }>}
   * An object containing the total count and an array of filtered UserWallet instances.
   * @throws {Error} When the API request fails or returns an error.
   *
   * @example
   * const filter = {
   *   search: 'john@example.com',
   *   minBalance: 100
   * };
   * const { count, dataArr } = await UserWallet.filterAll(filter);
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${this.baseUrl}/filter`, filter2);
      const result = yield lastValueFrom(observer$);
      return {
        count: result.count,
        dataArr: result.data.map((val) => new _UserWallet(val))
      };
    });
  }
  /**
   * Retrieves a single wallet by its unique identifier.
   *
   * @static
   * @param {string} resourceId - The unique identifier of the wallet to retrieve.
   * @returns {Promise<UserWallet>} A UserWallet instance for the requested wallet.
   * @throws {Error} When the wallet is not found or the API request fails.
   *
   * @example
   * const wallet = await UserWallet.getOne('wallet-123');
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${this.baseUrl}/${resourceId}`);
      return new _UserWallet(yield lastValueFrom(observer$));
    });
  }
  /**
   * Creates a new wallet in the system.
   *
   * @static
   * @param {TuserWalletRequest<true>} payload - The wallet data to create.
   * @returns {Promise<UserWallet>} A new UserWallet instance for the created wallet.
   * @throws {Error} When wallet creation fails or validation errors occur.
   *
   * @example
   * const newWallet = await UserWallet.add({
   *   userId: 'user-123',
   *   accountBalance: 0,
   *   // ... other required fields
   * });
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${this.baseUrl}`, payload);
      return new _UserWallet(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple wallets based on the provided criteria.
   *
   * @static
   * @param {IbulkDelete} payload - The criteria for selecting wallets to delete.
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation.
   * @throws {Error} When the deletion fails or validation errors occur.
   *
   * @example
   * const result = await UserWallet.bulkDelete({
   *   ids: ['wallet-1', 'wallet-2']
   * });
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${this.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current wallet's information.
   *
   * @param {TuserWalletRequest} payload - The updated wallet data.
   * @returns {Promise<UserWallet>} A new UserWallet instance with the updated data.
   * @throws {Error} When the update fails or validation errors occur.
   *
   * @example
   * const updatedWallet = await wallet.update({
   *   accountBalance: 150.75
   *   // ... other fields to update
   * });
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePut(`${this.constructor.baseUrl}/${this._id}`, payload);
      return new _UserWallet(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes the current wallet from the system.
   *
   * @returns {Promise<IdeleteOneResponse | null>} The result of the deletion operation.
   * @throws {Error} When the deletion fails or the wallet is not found.
   *
   * @example
   * const result = await wallet.remove();
   * if (result?.success) {
   *   console.log('Wallet removed successfully');
   * }
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${this.constructor.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
UserWallet.baseUrl = "/wallet";
var UserWalletHistory = class _UserWalletHistory extends DatabaseAuto {
  /**
   * Creates a new UserWalletHistory instance.
   *
   * @param {IwalletHistory} walletHist - The wallet history data.
   * @throws {BizNestClientError} When no wallet history data is provided.
   *
   * @example
   * const historyData = {
   *   urId: 'hist-123',
   *   wallet: 'wallet-123',
   *   amount: 50.00,
   *   type: 'deposit'
   * };
   * const history = new UserWalletHistory(historyData);
   */
  constructor(walletHist) {
    if (!walletHist) {
      throw new BizNestClientError("No data provided");
    }
    super(walletHist);
    this.urId = walletHist.urId;
    this.wallet = walletHist.wallet;
    this.amount = walletHist.amount;
    this.type = walletHist.type;
  }
  /**
   * Retrieves a paginated list of wallet history entries.
   *
   * @static
   * @param {number} [offset=0] - The number of records to skip (for pagination).
   * @param {number} [limit=20] - The maximum number of records to return.
   * @returns {Promise<{ count: number, dataArr: UserWalletHistory[] }>}
   * An object containing the total count and an array of UserWalletHistory instances.
   * @throws {Error} When the API request fails or returns an error.
   *
   * @example
   * // Get first page of 15 history entries
   * const { count, dataArr } = await UserWalletHistory.getAll(0, 15);
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = CommerceClient.ehttp.makeGet(`${this.baseUrl}?${query}`);
      const result = yield lastValueFrom(observer$);
      return {
        count: result.count,
        dataArr: result.data.map((val) => new _UserWalletHistory(val))
      };
    });
  }
  /**
   * Retrieves a filtered list of wallet history entries based on the provided criteria.
   *
   * @static
   * @param {IfilterProps} filter - The filter criteria for retrieving history entries.
   * @returns {Promise<{ count: number, dataArr: UserWalletHistory[] }>}
   * An object containing the total count and an array of filtered UserWalletHistory instances.
   * @throws {Error} When the API request fails or returns an error.
   *
   * @example
   * const filter = {
   *   walletId: 'wallet-123',
   *   startDate: '2023-01-01',
   *   endDate: '2023-12-31',
   *   type: 'deposit'
   * };
   * const { count, dataArr } = await UserWalletHistory.filterAll(filter);
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makePost(`${this.baseUrl}/filter`, filter2);
      const result = yield lastValueFrom(observer$);
      return {
        count: result.count,
        dataArr: result.data.map((val) => new _UserWalletHistory(val))
      };
    });
  }
  /**
   * Retrieves a single wallet history entry by its unique identifier.
   *
   * @static
   * @param {string} resourceId - The unique identifier of the history entry to retrieve.
   * @returns {Promise<UserWalletHistory>} A UserWalletHistory instance for the requested entry.
   * @throws {Error} When the history entry is not found or the API request fails.
   *
   * @example
   * const historyEntry = await UserWalletHistory.getOne('history-123');
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = CommerceClient.ehttp.makeGet(`${this.baseUrl}/${resourceId}`);
      return new _UserWalletHistory(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple wallet history entries based on the provided criteria.
   *
   * @static
   * @param {IbulkDelete} payload - The criteria for selecting history entries to delete.
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the bulk delete operation.
   * @throws {Error} When the deletion fails or validation errors occur.
   *
   * @example
   * const result = await UserWalletHistory.bulkDelete({
   *   ids: ['history-1', 'history-2']
   * });
   */
  static bulkDelete(payload) {
    const observer$ = CommerceClient.ehttp.makePost(`${this.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Deletes the current wallet history entry from the system.
   *
   * @returns {Promise<IdeleteOneResponse | null>} The result of the deletion operation.
   * @throws {Error} When the deletion fails or the history entry is not found.
   *
   * @example
   * const result = await historyEntry.remove();
   * if (result?.success) {
   *   console.log('History entry removed successfully');
   * }
   */
  remove() {
    const observer$ = CommerceClient.ehttp.makeDelete(`${this.constructor.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
UserWalletHistory.baseUrl = "/wallet-history";

// ../../biz-nest/packages/commerce/client/lib/esm/utils/misc.js
init_esm();
var getSearchHistory = (term) => {
  const observer$ = CommerceClient.ehttp.makeGet(`/user-profile/get-search-history/${encodeURIComponent(term)}`);
  return lastValueFrom(observer$);
};
var getGuestInfo = () => {
  const observer$ = CommerceClient.ehttp.makeGet("/guest-session/info");
  return lastValueFrom(observer$);
};

// ../main-front-shared-lib/src/packages.ts
var subscriptionPackages = [
  {
    name: "Starter",
    amount: 10,
    duration: 1,
    features: [
      {
        type: "user",
        name: "Users",
        description: "Contains Only 1 user account",
        limitSize: 1,
        remainingSize: 1
      },
      {
        type: "document",
        name: "Business Document",
        description: "Contains Only 1 user account",
        limitSize: 15,
        remainingSize: 15
      },
      {
        type: "item",
        name: "Item",
        description: "Unlimited items",
        limitSize: 1e7,
        remainingSize: 1e6,
        isUnlimited: true
      },
      {
        type: "customer",
        name: "Customers",
        description: "Contains Only 1 user account",
        limitSize: 50,
        remainingSize: 50
      },
      {
        type: "analytics",
        name: "Analytics",
        description: "Contains Only 1 user account",
        limitSize: 5e4,
        remainingSize: 5e4,
        isUnlimited: true
      },
      {
        type: "helpTicket",
        name: "2 Support Tickets",
        description: "Contains Only 1 user account",
        limitSize: 3,
        remainingSize: 3
      },
      {
        type: "dataRecoveryWindow",
        name: "Data Recovery Window",
        description: "Contains Only 1 user account",
        limitSize: 7,
        remainingSize: 7
      }
    ]
  },
  {
    name: "Standard",
    amount: 30,
    duration: 1,
    features: [
      {
        type: "user",
        name: "Users",
        description: "Contains Only 1 user account",
        limitSize: 5,
        remainingSize: 5
      },
      {
        type: "document",
        name: "Document Quota",
        description: "Contains Only 1 user account",
        limitSize: 100,
        remainingSize: 100
      },
      {
        type: "item",
        name: "Item",
        description: "Unlimited items",
        limitSize: 1e7,
        remainingSize: 1e6,
        isUnlimited: true
      },
      {
        type: "customer",
        name: "Unlimitted Customers",
        description: "Contains Only 1 user account",
        limitSize: 2e3,
        remainingSize: 2e3,
        isUnlimited: true
      },
      {
        type: "analytics",
        name: "Analytics",
        description: "Contains Only 1 user account",
        limitSize: 1e5,
        remainingSize: 1e5,
        isUnlimited: true
      },
      {
        type: "helpTicket",
        name: "Unlimmited Support",
        description: "Contains Only 1 user account",
        limitSize: 100,
        remainingSize: 100
      },
      {
        type: "dataRecoveryWindow",
        name: "Data Recovery Window",
        description: "Contains Only 1 user account",
        limitSize: 30,
        remainingSize: 30
      },
      {
        type: "mail",
        name: "Email Accounts",
        description: "Contains Only 1 user account",
        limitSize: 5,
        remainingSize: 5
      }
    ]
  },
  {
    name: "Advanced",
    amount: 80,
    duration: 1,
    features: [
      {
        type: "user",
        name: "Users",
        description: "Contains Only 1 user account",
        limitSize: 10,
        remainingSize: 10
      },
      {
        type: "document",
        name: "Document Quota",
        description: "Contains Only 1 user account",
        limitSize: 500,
        remainingSize: 500
      },
      {
        type: "item",
        name: "Item",
        description: "Unlimited items",
        limitSize: 1e7,
        remainingSize: 1e6,
        isUnlimited: true
      },
      {
        type: "customer",
        name: "Unlimitted Customers",
        description: "Contains Only 1 user account",
        limitSize: 1e4,
        remainingSize: 1e4,
        isUnlimited: true
      },
      {
        type: "analytics",
        name: "Analytics",
        description: "Contains Only 1 user account",
        limitSize: 5e3,
        remainingSize: 5e3,
        isUnlimited: true
      },
      /* {
        type: 'advancedAnalytics',
        name: 'Advanced Analytics',
        description: 'Contains Only 1 user account',
        limitSize: 5000,
        remainingSize: 5000,
        isUnlimited: true
      }, */
      {
        type: "helpTicket",
        name: "Unlimmited Support",
        description: "Contains Only 1 user account",
        limitSize: 100,
        remainingSize: 100
      },
      {
        type: "dataRecoveryWindow",
        name: "Data Recovery Window",
        description: "Contains Only 1 user account",
        limitSize: 90,
        remainingSize: 90
      },
      {
        type: "mail",
        name: "Email Accounts",
        description: "Contains Only 1 user account",
        limitSize: 10,
        remainingSize: 10
      }
    ]
  },
  {
    name: "Trial",
    amount: 0,
    duration: 1,
    features: [
      {
        type: "user",
        name: "Users",
        description: "Contains Only 1 user account",
        limitSize: 1,
        remainingSize: 1
      },
      {
        type: "document",
        name: "Document Quota",
        description: "Contains Only 1 user account",
        limitSize: 3,
        remainingSize: 3
      },
      {
        type: "item",
        name: "Item",
        description: "Unlimited items",
        limitSize: 10,
        remainingSize: 10
      },
      {
        type: "customer",
        name: "Customers",
        description: "Contains Only 1 user account",
        limitSize: 50,
        remainingSize: 50
      },
      {
        type: "analytics",
        name: "Analytics",
        description: "Contains Only 1 user account",
        limitSize: 1e3,
        remainingSize: 1e3,
        isUnlimited: true
      }
    ]
  }
];
var customiseUserQuota = [
  {
    val: 0,
    cost: 0
    // in dollars, full
  },
  {
    val: 10,
    cost: 10
    // in dollars, full
  },
  {
    val: 50,
    cost: 20
  },
  {
    val: 100,
    cost: 30
  }
];
var customiseDocumentQuota = [
  {
    val: 0,
    cost: 0
    // in dollars, full
  },
  {
    val: 100,
    cost: 5
    // in dollars, full
  },
  {
    val: 200,
    cost: 10
  },
  {
    val: 300,
    cost: 15
  },
  {
    val: 500,
    cost: 25
  },
  {
    val: 1e3,
    cost: 50
  },
  {
    val: 5e3,
    cost: 250
  },
  {
    val: 1e4,
    cost: 500
  }
];
var customiseItemQuota = [
  {
    val: 0,
    cost: 0
    // in dollars, full
  },
  {
    val: 100,
    cost: 5
    // in dollars, full
  },
  {
    val: 200,
    cost: 10
  },
  {
    val: 300,
    cost: 15
  },
  {
    val: 500,
    cost: 25
  },
  {
    val: 1e3,
    cost: 50
  },
  {
    val: 5e3,
    cost: 250
  },
  {
    val: 1e4,
    cost: 500
  }
];
var customiseAnalyticsQuota = [
  {
    val: 0,
    cost: 0
    // in dollars, full
  },
  {
    val: 100,
    cost: 5
    // in dollars, full
  },
  {
    val: 200,
    cost: 10
  },
  {
    val: 300,
    cost: 15
  },
  {
    val: 500,
    cost: 25
  },
  {
    val: 1e3,
    cost: 50
  },
  {
    val: 5e3,
    cost: 250
  },
  {
    val: 1e4,
    cost: 500
  }
];
var customiseAdvancedAnalyticsQuota = [
  {
    val: 0,
    cost: 0
    // in dollars, full
  },
  {
    val: 100,
    cost: 5
    // in dollars, full
  },
  {
    val: 200,
    cost: 10
  },
  {
    val: 300,
    cost: 15
  },
  {
    val: 500,
    cost: 25
  },
  {
    val: 1e3,
    cost: 50
  },
  {
    val: 5e3,
    cost: 250
  },
  {
    val: 1e4,
    cost: 500
  }
];
var customiseHelpTicketQuota = [
  {
    val: 0,
    cost: 0
    // in dollars, full
  },
  {
    val: 100,
    cost: 5
    // in dollars, full
  },
  {
    val: 200,
    cost: 10
  },
  {
    val: 300,
    cost: 15
  },
  {
    val: 500,
    cost: 25
  },
  {
    val: 1e3,
    cost: 50
  },
  {
    val: 5e3,
    cost: 250
  },
  {
    val: 1e4,
    cost: 500
  }
];
var customiseMailQuota = [
  {
    val: 0,
    cost: 0
    // in dollars, full
  },
  {
    val: 100,
    cost: 5
    // in dollars, full
  },
  {
    val: 200,
    cost: 10
  },
  {
    val: 300,
    cost: 15
  },
  {
    val: 500,
    cost: 25
  },
  {
    val: 1e3,
    cost: 50
  },
  {
    val: 5e3,
    cost: 250
  },
  {
    val: 1e4,
    cost: 500
  }
];

// ../main-front-shared-lib/src/shared-lib/utils/error-handlers.ts
var EagleInfoClientError = class extends Error {
  /**
   * Creates a new instance of EagleInfoClientError.
   * @param {string} message - The error message that should be shown to the user.
   */
  constructor(message) {
    super(message);
    this.name = "EagleInfoClientError";
    Error.captureStackTrace(this, this.constructor);
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/mgt/delivery-manager.define.ts
init_esm();

// ../main-front-shared-lib/src/shared-lib/utils/manager-client.ts
var ManagerClient = class _ManagerClient {
  /**
   * Creates a new instance of ManagerClient.
   * Initializes the HTTP client with the provided configuration.
   *
   * @param {IehttpControllerConfig} config - Configuration object for the HTTP client.
   * @throws {BizNestClientError} If the provided configuration is invalid.
   *
   * @example
   * const managerClient = new ManagerClient({
   *   baseURL: 'https://api.example.com/manager',
   *   timeout: 5000
   * });
   */
  constructor(config) {
    if (!config || typeof config !== "object") {
      throw new BizNestClientError("config must be a valid configuration object");
    }
    FrontendLogger.debug("ManagerClient initialized");
    _ManagerClient.http = new EhttpController(config);
  }
  /**
   * Gets the singleton instance of the HTTP client.
   * This provides access to the underlying HTTP methods for making requests.
   *
   * @static
   * @returns {EhttpController} The initialized HTTP client instance.
   * @throws {BizNestClientError} If the HTTP client has not been initialized.
   *
   * @example
   * // Using the HTTP client to make a GET request
   * const response = await ManagerClient.ehttp.get('/endpoint');
   */
  static get ehttp() {
    if (!_ManagerClient.http) {
      throw new BizNestClientError("HTTP client not initialized. Call new ManagerClient() first.");
    }
    return _ManagerClient.http;
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/mgt/delivery-manager.define.ts
var ManagerBase = class extends DatabaseAuto {
  constructor(data) {
    super(data);
    this.baseUrl = "";
    this.manager = data.manager;
    this.urId = data.urId;
    this.bio = data.bio;
    this.title = data.title;
  }
  /**
   * Changes the currency for the current user.
   * @param currency - The currency to change to.
   * @returns A promise resolving to a success object.
   */
  changeUserCurrency(currency) {
    const observer$ = ManagerClient.ehttp.makePost(this.baseUrl + "/change-currency", { currency });
    return lastValueFrom(observer$);
  }
  /**
   * Invites a new deliverymanager member.
   *
   * @param {Object} payload - The invitation data.
   * @param {string} payload.email - The email address of the deliverymanager member to invite.
   * @param {string} payload.phone - The phone number of the deliverymanager member to invite.
   * @param {string} payload.phoneCode - The phone code of the deliverymanager member to invite.
   * @param {string} payload.method - The method of invitation (e.g., 'email', 'sms').
   * @param {string} payload.deliverymanagerId - The ID of the deliverymanager member to invite.
   * @returns {Promise<{ qrCodeUrl?: string }>} The result of the invitation operation.
   */
  invite(payload) {
    const observer$ = ManagerClient.ehttp.makePost(`${this.baseUrl}/invite`, payload);
    return lastValueFrom(observer$);
  }
};
var DeliveryManager = class _DeliveryManager extends ManagerBase {
  static {
    this.baseUrl = "/deliverymanager";
  }
  constructor(data) {
    super(data);
    this.baseUrl = "/deliverymanager";
    this.ordersAssigned = data.ordersAssigned || [];
  }
  /**
   * Retrieves a list of delivery managers.
   * @param {number} [offset=0] - The offset to start retrieving delivery managers from.
   * @param {number} [limit=0] - The limit of delivery managers to retrieve.
   * @returns {Promise<{count: number, dataArr: DeliveryManager[]}>} - A promise that
   *  resolves to an object containing the total count of delivery managers
   * and an array of delivery manager objects.
   */
  static getAll(offset = 0, limit = 0) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makeGet(`${_DeliveryManager.baseUrl}/all/${offset}/${limit}`);
      const deliverymanagers = yield lastValueFrom(observer$);
      return {
        count: deliverymanagers.count,
        dataArr: deliverymanagers.data.map((val) => new _DeliveryManager(val))
      };
    });
  }
  /**
   * Retrieves a list of delivery managers based on a filter.
   * @param {IfilterProps} filter - The filter to apply to the delivery managers.
   * @returns {Promise<{count: number, dataArr: DeliveryManager[]}>} - A promise that
   *  resolves to an object containing the total count of delivery managers
   * and an array of delivery manager objects.
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(`${_DeliveryManager.baseUrl}/filter`, filter2);
      const deliverymanagers = yield lastValueFrom(observer$);
      return {
        count: deliverymanagers.count,
        dataArr: deliverymanagers.data.map((val) => new _DeliveryManager(val))
      };
    });
  }
  /**
   * Retrieves a delivery manager by ID.
   * @param {string} resourceId - The ID of the delivery manager to retrieve.
   * @returns {Promise<DeliveryManager>} - A promise that resolves to a delivery manager object.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makeGet(`${_DeliveryManager.baseUrl}/getone/${resourceId}`);
      const deliverymanager = yield lastValueFrom(observer$);
      return new _DeliveryManager(deliverymanager);
    });
  }
  /**
   * Retrieves the current user's profile.
   * @returns {Promise<DeliveryManager>} - A promise that resolves to a delivery manager object.
   */
  static myProfile() {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(`${_DeliveryManager.baseUrl}/my-profile`, {});
      const deliverymanager = yield lastValueFrom(observer$);
      return new _DeliveryManager(deliverymanager);
    });
  }
  /**
   * Adds a new delivery manager.
   * @param {TdeliverManagerRequest<true>} payload - The payload containing the delivery manager data.
   * @returns {Promise<DeliveryManager>} - A promise that resolves to a delivery manager object.
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(`${_DeliveryManager.baseUrl}`, payload);
      return new _DeliveryManager(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes multiple delivery managers based on the provided IDs.
   * @param {IbulkDelete} vals - The IDs of the delivery managers to delete.
   * @returns {Promise<IbulkDeleteSuccessResponse>} - A promise that resolves to a success object.
   */
  static bulkDelete(vals) {
    const observer$ = ManagerClient.ehttp.makePut(`${_DeliveryManager.baseUrl}/bulk-delete`, vals);
    return lastValueFrom(observer$);
  }
  /**
   * Validates a delivery manager invitation token.
   * @param {Object} payload - The payload containing the token to validate.
   * @param {string} payload.token - The invitation token to validate.
   * @returns {Promise<Isuccess>} The result of the validation operation.
   */
  static validateInvitation(payload) {
    const observer$ = ManagerClient.ehttp.makePost(`${_DeliveryManager.baseUrl}/validate-invitation`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Uploads multiple files to the deliverymanager member.
   *
   * @param {Ifile[]} files - The files to upload.
   * @returns {Promise<Isuccess>} The result of the file upload operation.
   */
  uploadImages(files) {
    return ManagerClient.ehttp.uploadFiles(files, `${_DeliveryManager.baseUrl}/upload-images`, { _id: this._id });
  }
  /**
   * Uploads profilePicture associated with the current DeliveryManager instance.
   * @param file - The image to upload.
   * @returns An observable that emits a success object.
   */
  uploadProfilePicture(file) {
    return ManagerClient.ehttp.uploadFiles([file], `${_DeliveryManager.baseUrl}/upload-profile-picture`, { _id: this._id });
  }
  /**
   * Uploads cover pic associated with the current DeliveryManager instance.
   * @param file - The image to upload.
   * @returns An observable that emits a success object.
   */
  uploadProfileCoverPicture(file) {
    return ManagerClient.ehttp.uploadFiles([file], `${_DeliveryManager.baseUrl}/upload-profile-cover-picture`, { _id: this._id });
  }
  setImageAs(fileId, field) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(`${_DeliveryManager.baseUrl}/set-image-as`, { fileId, field });
      return new _DeliveryManager(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes images associated with the current user.
   *
   * @param {string[]} fileIds - The IDs of the files to delete.
   * @returns {Promise<DeliveryManager>} The result of the deletion operation.
   */
  deleteImages(fileIds) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(this.baseUrl + "/delete-images", { fileIds, _id: this._id });
      return new _DeliveryManager(yield lastValueFrom(observer$));
    });
  }
  /**
   * Updates the delivery manager.
   * @param {TdeliverManagerRequest} payload - The payload containing the delivery manager data.
   * @returns {Promise<DeliveryManager>} - A promise that resolves to a delivery manager object.
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePut(`${_DeliveryManager.baseUrl}`, payload);
      return new _DeliveryManager(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes the delivery manager.
   * @returns {Promise<IdeleteOneResponse | null>} - A promise that resolves to a delete one response object.
   */
  remove() {
    const observer$ = ManagerClient.ehttp.makeDelete(`${_DeliveryManager.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/mgt/vendor-manager.define.ts
init_esm();
var VendorManager = class _VendorManager extends ManagerBase {
  static {
    this.baseUrl = "/vendormanager";
  }
  constructor(data) {
    super(data);
    this.baseUrl = "/vendormanager";
    this.companysAssigned = data.companysAssigned || [];
  }
  /**
   * Retrieves a list of vendor managers.
   *
   * @param {number} [offset=0] - The offset to start retrieving vendor managers from.
   * @param {number} [limit=0] - The limit of vendor managers to retrieve.
   *
   * @returns {Promise<{count: number, dataArr: VendorManager[]}>} - A promise
   *  that resolves to an object containing the total count of vendor managers
   * and an array of vendor manager objects.
   */
  static getAll(offset = 0, limit = 0) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = ManagerClient.ehttp.makeGet(`${_VendorManager.baseUrl}?${query}`);
      const vendormanagers = yield lastValueFrom(observer$);
      return {
        count: vendormanagers.count,
        dataArr: vendormanagers.data.map((val) => new _VendorManager(val))
      };
    });
  }
  /**
   * Retrieves a list of vendor managers based on a filter.
   *
   * @param {IfilterProps} filter - The filter to apply to the vendor managers.
   *
   * @returns {Promise<{count: number, dataArr: VendorManager[]}>} - A promise
   *  that resolves to an object containing the total count of vendor managers
   * and an array of vendor manager objects.
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(`${_VendorManager.baseUrl}/filter`, filter2);
      const vendormanagers = yield lastValueFrom(observer$);
      return {
        count: vendormanagers.count,
        dataArr: vendormanagers.data.map((val) => new _VendorManager(val))
      };
    });
  }
  /**
   * Retrieves a vendor manager by ID.
   *
   * @param {string} resourceId - The ID of the vendor manager to retrieve.
   *
   * @returns {Promise<VendorManager>} - A promise that resolves to a vendor manager object.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makeGet(`${_VendorManager.baseUrl}/${resourceId}`);
      const vendormanager = yield lastValueFrom(observer$);
      return new _VendorManager(vendormanager);
    });
  }
  /**
   * Retrieves the current user's profile.
   *
   * @returns {Promise<VendorManager>} - A promise that resolves to a vendor manager object.
   */
  static myProfile() {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(`${_VendorManager.baseUrl}/my-profile`, {});
      const vendormanager = yield lastValueFrom(observer$);
      return new _VendorManager(vendormanager);
    });
  }
  /**
   * Deletes multiple vendor managers based on the provided IDs.
   *
   * @param {IbulkDelete} vals - The IDs of the vendor managers to delete.
   *
   * @returns {Promise<IbulkDeleteSuccessResponse>} - A promise that resolves to a success object.
   */
  static bulkDelete(vals) {
    const observer$ = ManagerClient.ehttp.makePost(`${_VendorManager.baseUrl}/bulk-delete`, vals);
    return lastValueFrom(observer$);
  }
  /**
   * Validates a vendor manager invitation token.
   * @param {Object} payload - The payload containing the token to validate.
   * @param {string} payload.token - The invitation token to validate.
   * @returns {Promise<Isuccess>} The result of the validation operation.
   */
  static validateInvitation(payload) {
    const observer$ = ManagerClient.ehttp.makePost(`${_VendorManager.baseUrl}/validate-invitation`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Adds a new vendor manager.
   *
   * @param {TvendorManagerRequest<true>} payload - The payload containing the vendor manager data.
   *
   * @returns {Promise<VendorManager>} - A promise that resolves to a vendor manager object.
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(`${_VendorManager.baseUrl}`, payload);
      return new _VendorManager(yield lastValueFrom(observer$));
    });
  }
  /**
     * Uploads multiple files to the vendormanager member.
     *
     * @param {Ifile[]} files - The files to upload.
     * @returns {Promise<Isuccess>} The result of the file upload operation.
     */
  uploadImages(files) {
    return ManagerClient.ehttp.uploadFiles(files, `${_VendorManager.baseUrl}/upload-images`, { _id: this._id });
  }
  /**
     * Uploads profilePicture associated with the current VendorManager instance.
     * @param file - The image to upload.
     * @returns An observable that emits a success object.
     */
  uploadProfilePicture(file) {
    return ManagerClient.ehttp.uploadFiles([file], `${_VendorManager.baseUrl}/upload-profile-picture`, { _id: this._id });
  }
  /**
     * Uploads cover pic associated with the current VendorManager instance.
     * @param file - The image to upload.
     * @returns An observable that emits a success object.
     */
  uploadProfileCoverPicture(file) {
    return ManagerClient.ehttp.uploadFiles([file], `${_VendorManager.baseUrl}/upload-profile-cover-picture`, { _id: this._id });
  }
  /**
   * Sets an image as the profile picture or cover picture.
   *
   * @param {string} fileId - The ID of the file to set as the image.
   * @param {'profilePicture' | 'profileCoverPicture'} field - The field to set the image as.
   *
   * @returns {Promise<VendorManager>} The result of the image setting operation.
   */
  setImageAs(fileId, field) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(`${_VendorManager.baseUrl}/set-image-as`, { fileId, field });
      return new _VendorManager(yield lastValueFrom(observer$));
    });
  }
  /**
     * Deletes images associated with the current user.
     *
     * @param {string[]} fileIds - The IDs of the files to delete.
     * @returns {Promise<VendorManager>} The result of the deletion operation.
     */
  deleteImages(fileIds) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(this.baseUrl + "/delete-images", { fileIds, _id: this._id });
      return new _VendorManager(yield lastValueFrom(observer$));
    });
  }
  /**
   * Updates the vendor manager.
   *
   * @param {TvendorManagerRequest} payload - The payload containing the vendor manager data.
   *
   * @returns {Promise<VendorManager>} - A promise that resolves to a vendor manager object.
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePut(`${_VendorManager.baseUrl}`, payload);
      return new _VendorManager(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the vendor manager.
   *
   * @returns {Promise<IdeleteOneResponse | null>} - A promise that resolves to a delete one response object.
   */
  remove() {
    const observer$ = ManagerClient.ehttp.makeDelete(`${_VendorManager.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};

// ../main-front-shared-lib/src/shared-lib/types/general.ts
var controlNames = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = key;
    return acc;
  }, {});
};

// ../main-front-shared-lib/src/shared-lib/utils/nav-by-bus.ts
var navByBus = (eventbus, router) => {
  const navigateByBus = (route, type, data) => {
    eventbus.generalEvent$.next({
      type,
      data
    });
    router.navigate(route);
  };
  return {
    navigateByBus
  };
};

// ../main-front-shared-lib/src/shared-lib/utils/run-subscription.ts
init_esm();
var runSubscriptionsForSharedUse = (eventbus, handlers, byPassDistinct = false) => {
  const destroyed$ = new Subject();
  const runSubscriptions = () => {
    eventbus.generalEvent$.pipe(takeUntil(destroyed$), distinctUntilChanged((prev, curr) => {
      if (byPassDistinct) {
        return false;
      }
      const compared = prev?.type === curr?.type && JSON.stringify(prev?.data) === JSON.stringify(curr?.data);
      FrontendLogger.debug("runSubscriptionsForSharedUse", "distinctUntilChanged", compared);
      return compared;
    })).subscribe((event) => {
      if (event?.data !== void 0 || event && typeof event.data === "boolean") {
        const handler = handlers[event.type];
        if (typeof handler === "function") {
          handler(event.data);
        }
      }
    });
  };
  runSubscriptions();
  return {
    /**
     * Cleans up all subscriptions by completing the destroy subject
     */
    cleanup: () => {
      destroyed$.next(true);
      destroyed$.complete();
    }
  };
};

// ../main-front-shared-lib/src/business-manager/dashboard/dash-comps/dash-cards-bm/dash-cards-bm.use.ts
var dashCardsBmUse = (companyId) => {
  const getAmountDueCount = () => __async(void 0, null, function* () {
    try {
      const res = yield Customer.analytics({
        propFilter: {
          company: companyId
        },
        comparisonFilter: [{
          field: "amountDue.value",
          fieldValue: 0,
          operator: "gt"
        }],
        returnEmptyArray: true
      });
      FrontendLogger.debug("getAmountDueCount", res);
      return res.amountDue;
    } catch (err) {
      FrontendLogger.error(err);
      return 0;
    }
  });
  const getCustomers = () => __async(void 0, null, function* () {
    try {
      const { count } = yield Customer.filterAll({
        propFilter: {
          company: companyId
        },
        returnEmptyArray: true
      });
      return count;
    } catch (err) {
      FrontendLogger.error(err);
      return 0;
    }
  });
  const getAllInvoicesTotal = () => __async(void 0, null, function* () {
    const res = yield getAnalyticsRelegator({});
    return res.count;
  });
  const getAnalyticsRelegator = (filter2) => __async(void 0, null, function* () {
    if (!filter2) {
      filter2 = {};
    }
    filter2.propFilter = __spreadProps(__spreadValues({}, filter2.propFilter), {
      company: companyId
    });
    try {
      const { totalAmount, count } = yield Invoice.getInvoiceAnalytics(filter2);
      return { totalAmount, count };
    } catch (err) {
      FrontendLogger.error(err);
      return { totalAmount: 0, count: 0 };
    }
  });
  const getUnpaidInvoicesCount = () => __async(void 0, null, function* () {
    const res = yield getAnalyticsRelegator({ propFilter: { status: "unpaid" } });
    return res.count;
  });
  const getOverdueInvoicesCount = () => __async(void 0, null, function* () {
    const res = yield getAnalyticsRelegator({ propFilter: { status: "overdue" } });
    return res.count;
  });
  const getEstimatesCount = () => __async(void 0, null, function* () {
    try {
      const { count } = yield Estimate.filterAll({ returnEmptyArray: true });
      return count;
    } catch (err) {
      FrontendLogger.error("get Error, ", err);
      return 0;
    }
  });
  const monthlyEvaluationCustomers = () => __async(void 0, null, function* () {
    try {
      const now = /* @__PURE__ */ new Date();
      const last = new Date((/* @__PURE__ */ new Date()).setMonth(now.getMonth() - 1));
      const nowMonth = yield Customer.filterAll({
        propFilter: {
          company: companyId
        },
        returnEmptyArray: true,
        comparisonFilter: [
          {
            field: "createdAt",
            fieldValue: new Date(now.getFullYear(), now.getMonth() + 1, 0),
            operator: "lte"
          },
          {
            field: "createdAt",
            fieldValue: new Date(now.getFullYear(), now.getMonth(), 1),
            operator: "gte"
          }
        ]
      });
      const lastMonth = yield Customer.filterAll({
        propFilter: {
          company: companyId
        },
        returnEmptyArray: true,
        comparisonFilter: [{
          field: "createdAt",
          fieldValue: new Date(last.getFullYear(), last.getMonth() + 1, 0),
          operator: "lte"
        }, {
          field: "createdAt",
          fieldValue: new Date(last.getFullYear(), last.getMonth(), 1),
          operator: "gte"
        }]
      });
      const customerIncreDecre = Math.round((nowMonth.count - lastMonth.count) / 100 * (nowMonth.count + lastMonth.count) * 1e3) / 1e3;
      const customerIncreDecreStyle = `width: ${customerIncreDecre}%`;
      return {
        customerIncreDecre,
        customerIncreDecreStyle
      };
    } catch (error) {
      FrontendLogger.error("DashCardsBmForSharedUse:monthlyEvaluationCustomers:: - err ", error);
      return {
        customerIncreDecre: 0,
        customerIncreDecreStyle: "width: 0%"
      };
    }
  });
  const monthlyEvaluationInvoices = () => __async(void 0, null, function* () {
    try {
      const now = /* @__PURE__ */ new Date();
      const last = new Date((/* @__PURE__ */ new Date()).setMonth(now.getMonth() - 1));
      const nowMonth = yield Invoice.filterAll({
        propFilter: {
          company: companyId
        },
        returnEmptyArray: true,
        comparisonFilter: [
          {
            field: "createdAt",
            fieldValue: new Date(now.getFullYear(), now.getMonth() + 1, 0),
            operator: "lte"
          },
          {
            field: "createdAt",
            fieldValue: new Date(now.getFullYear(), now.getMonth(), 1),
            operator: "gte"
          }
        ]
      });
      const lastMonth = yield Invoice.filterAll({
        propFilter: {
          company: companyId
        },
        returnEmptyArray: true,
        comparisonFilter: [{
          field: "createdAt",
          fieldValue: new Date(last.getFullYear(), last.getMonth() + 1, 0),
          operator: "lte"
        }, {
          field: "createdAt",
          fieldValue: new Date(last.getFullYear(), last.getMonth(), 1),
          operator: "gte"
        }]
      });
      const invoiceIncreDecre = Math.round((nowMonth.count - lastMonth.count) / 100 * (nowMonth.count + lastMonth.count) * 1e3) / 1e3;
      const invoiceIncreDecreStyle = `width: ${invoiceIncreDecre}%`;
      return {
        invoiceIncreDecre,
        invoiceIncreDecreStyle
      };
    } catch (error) {
      FrontendLogger.error("DashCardsBmForSharedUse:monthlyEvaluationInvoices:: - err ", error);
      return {
        invoiceIncreDecre: 0,
        invoiceIncreDecreStyle: "width: 0%"
      };
    }
  });
  const monthlyEvaluationEstimates = () => __async(void 0, null, function* () {
    try {
      const now = /* @__PURE__ */ new Date();
      const last = new Date((/* @__PURE__ */ new Date()).setMonth(now.getMonth() - 1));
      const nowMonth = yield Invoice.filterAll({
        propFilter: {
          company: companyId
        },
        returnEmptyArray: true,
        comparisonFilter: [
          {
            field: "createdAt",
            fieldValue: new Date(now.getFullYear(), now.getMonth() + 1, 0),
            operator: "lte"
          },
          {
            field: "createdAt",
            fieldValue: new Date(now.getFullYear(), now.getMonth(), 1),
            operator: "gte"
          }
        ]
      });
      const lastMonth = yield Estimate.filterAll({
        propFilter: {
          company: companyId
        },
        returnEmptyArray: true,
        comparisonFilter: [{
          field: "createdAt",
          fieldValue: new Date(last.getFullYear(), last.getMonth() + 1, 0),
          operator: "lte"
        }, {
          field: "createdAt",
          fieldValue: new Date(last.getFullYear(), last.getMonth(), 1),
          operator: "gte"
        }]
      });
      const estimateIncreDecre = Math.round((nowMonth.count - lastMonth.count) / 100 * (nowMonth.count + lastMonth.count) * 1e3) / 1e3;
      const estimateIncreDecreStyle = `width: ${estimateIncreDecre}%`;
      return {
        estimateIncreDecre,
        estimateIncreDecreStyle
      };
    } catch (error) {
      FrontendLogger.error("DashCardsBmForSharedUse:monthlyEvaluationEstimates:: - err ", error);
      return {
        estimateIncreDecre: 0,
        estimateIncreDecreStyle: "width: 0%"
      };
    }
  });
  return {
    getAmountDueCount,
    getCustomers,
    getAllInvoicesTotal,
    getUnpaidInvoicesCount,
    getOverdueInvoicesCount,
    getEstimatesCount,
    monthlyEvaluationCustomers,
    monthlyEvaluationInvoices,
    monthlyEvaluationEstimates
  };
};

// ../main-front-shared-lib/src/shared-lib/utils/miscfns.ts
var transformDateWithoutTime = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
};
var generateRandomPassword = () => {
  let pw = "";
  const charset = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  for (let i = 0; i < 12; i++) {
    pw += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return pw;
};

// ../main-front-shared-lib/src/shared-lib/components/analytics/sales-analytics-ecommerce/sales-analytics-ecommerce.use.ts
var salesAnalyticsEcommerceForSharedUse = () => {
  const getSalesByYears = () => __async(void 0, null, function* () {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const promises = months.map((month, index) => {
      const startDate = new Date((/* @__PURE__ */ new Date()).getFullYear(), index, 1);
      const endDate = new Date((/* @__PURE__ */ new Date()).getFullYear(), index + 1, 0);
      const filter2 = {
        comparisonFilter: [
          {
            field: "createdAt",
            fieldValue: startDate,
            operator: "gte"
          },
          {
            field: "createdAt",
            fieldValue: endDate,
            operator: "lte"
          }
        ]
      };
      return Invoice.getEcommerceSalesAnalytics(filter2);
    });
    const all = yield Promise.all(promises);
    return all;
  });
  const getSalesMonth = (month) => __async(void 0, null, function* () {
    const daysInMonth = Array.from(Array(new Date((/* @__PURE__ */ new Date()).getFullYear(), month + 1, 0).getDate()).keys()).map((x) => x + 1);
    const promises = daysInMonth.map((day) => {
      const startDate = new Date((/* @__PURE__ */ new Date()).getFullYear(), month, day);
      const endDate = new Date((/* @__PURE__ */ new Date()).getFullYear(), month, day + 1);
      const filter2 = {
        comparisonFilter: [
          {
            field: "createdAt",
            fieldValue: startDate,
            operator: "gte"
          },
          {
            field: "createdAt",
            fieldValue: endDate,
            operator: "lte"
          }
        ]
      };
      return Invoice.getEcommerceSalesAnalytics(filter2);
    });
    const all = yield Promise.all(promises);
    return all;
  });
  const getDaysInCurrentWeek = () => {
    const now = /* @__PURE__ */ new Date();
    const currentDay = now.getDay();
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() - currentDay + i);
      days.push(day);
    }
    return days;
  };
  const getSalesForCurrentWeek = () => __async(void 0, null, function* () {
    const daysInWeek = getDaysInCurrentWeek();
    const promises = daysInWeek.map((day) => {
      const startDate = new Date(day.getFullYear(), day.getMonth(), day.getDate());
      const endDate = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
      const filter2 = {
        comparisonFilter: [
          {
            field: "createdAt",
            fieldValue: startDate,
            operator: "gte"
          },
          {
            field: "createdAt",
            fieldValue: endDate,
            operator: "lte"
          }
        ]
      };
      return Invoice.getEcommerceSalesAnalytics(filter2);
    });
    const weeklySalesAnalytics = yield Promise.all(promises);
    return weeklySalesAnalytics;
  });
  const getAllSales = (period = "yearly") => __async(void 0, null, function* () {
    try {
      let salesAnalytics = [];
      switch (period) {
        case "weekly":
          salesAnalytics = yield getSalesForCurrentWeek();
          break;
        case "monthly":
          salesAnalytics = yield getSalesByYears();
          break;
        case "yearly":
          salesAnalytics = yield getSalesByYears();
          break;
      }
      const totalSales = salesAnalytics.reduce((acc, val) => acc + (val.totalSales || 0), 0);
      const totalTax = salesAnalytics.reduce((acc, val) => acc + (val.totalSales || 0), 0);
      const totalCount = salesAnalytics.reduce((acc, val) => acc + (val.count || 0), 0);
      const salesData = {
        totalSales,
        tax: totalTax,
        count: totalCount,
        earnings: totalSales - totalTax
      };
      const baseTotal = totalSales || 1;
      const salesPercentage = salesData.totalSales / baseTotal * 100;
      const revenuePercentage = salesData.earnings / baseTotal * 100;
      FrontendLogger.debug("Sales Analytics:", salesData);
      return {
        salesData,
        salesPercentage,
        revenuePercentage,
        salesAnalytics
      };
    } catch (error) {
      FrontendLogger.error("Error fetching sales totals", error);
      return resetSalesData();
    }
  });
  const resetSalesData = () => {
    return {
      salesData: {
        totalSales: 0,
        tax: 0,
        count: 0,
        earnings: 0
      },
      salesPercentage: 0,
      revenuePercentage: 0,
      salesAnalytics: []
    };
  };
  return {
    getSalesByYears,
    getSalesMonth,
    getDaysInCurrentWeek,
    getSalesForCurrentWeek,
    getAllSales,
    resetSalesData
  };
};

// ../main-front-shared-lib/src/shared-lib/constants/front-environment/dev-env.ts
var serverAdressesDev = {
  authServer: "http://localhost:3201/api/",
  chatServer: "http://localhost:3202/",
  commerceServer: "http://localhost:3203/api/",
  managerServer: "http://localhost:3204/api/",
  notifServer: "http://localhost:3205/api/",
  webMetricsServer: "https://webmetricsserver.eagleinfosolutions.com/",
  mailMetricsServer: "https://mailmetricsserver.eagleinfosolutions.com/",
  dnsServer: "http://localhost:9002/api/",
  mailServer: "http://localhost:9000/api/"
};

// ../main-front-shared-lib/src/shared-lib/defines/auto-dns/dns-perms.define.ts
init_esm();

// ../main-front-shared-lib/src/shared-lib/utils/auto-cloud-dns-client.ts
var AutoCloudDnsClient = class _AutoCloudDnsClient {
  /**
   * Creates an instance of AutoCloudDnsClient.
   * @param config - Configuration object for the HTTP client
   * @throws {BizNestClientError} If the provided config is invalid
   */
  constructor(config) {
    if (!config || typeof config !== "object") {
      throw new BizNestClientError("Configuration must be a valid object");
    }
    FrontendLogger.debug("AutoCloudDnsClient initialized");
    _AutoCloudDnsClient.http = new EhttpController(config);
  }
  /**
   * Gets the HTTP client instance.
   * @returns {EhttpController} The HTTP client instance
   * @throws {BizNestClientError} If the client is not initialized
   */
  static get ehttp() {
    if (!_AutoCloudDnsClient.http) {
      throw new BizNestClientError("HTTP client not initialized. Call new AutoCloudDnsClient() first.");
    }
    return _AutoCloudDnsClient.http;
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/auto-dns/dns-perms.define.ts
var DnsPermission = class _DnsPermission {
  static {
    this.baseUrl = "/permissions";
  }
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.companyId = data.companyId;
    this.mainAccess = data.mainAccess;
    this.read = data.read;
    this.write = data.write;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.domainId = data.domainId;
  }
  /**
   * Retrieves DNS permissions for a specific user.
   *
   * @param userId - The ID of the user to retrieve permissions for.
   * @returns A Promise that resolves to a new DnsPermission instance.
   */
  static getByUser(userId) {
    return __async(this, null, function* () {
      const observer$ = AutoCloudDnsClient.ehttp.makeGet(`${_DnsPermission.baseUrl}/user/${userId}`);
      const data = yield lastValueFrom(observer$);
      return new _DnsPermission(data);
    });
  }
  /**
   * Adds or updates DNS permissions for a specific user.
   *
   * @param permissions - The permissions to add or update.
   * @returns A Promise that resolves to an Isuccess instance.
   */
  static addUpdate(permissions) {
    const observer$ = AutoCloudDnsClient.ehttp.makePut(`${_DnsPermission.baseUrl}/${permissions.userId}`, permissions);
    return lastValueFrom(observer$);
  }
  /**
   * Removes DNS permissions for a specific user.
   *
   * @returns A Promise that resolves to an Isuccess instance.
   */
  remove() {
    return AutoCloudDnsClient.ehttp.makeDelete(`${_DnsPermission.baseUrl}/${this.userId}`);
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/auto-dns/dns-super-perms.define.ts
init_esm();
var DnsSuperPermission = class _DnsSuperPermission {
  static {
    this.baseUrl = "/super-permissions";
  }
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.mainAccess = data.mainAccess;
    this.read = data.read;
    this.write = data.write;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
  /**
   * Retrieves super DNS permissions for a specific user.
   *
   * @param userId - The ID of the user to retrieve permissions for.
   * @returns A Promise that resolves to a new DnsSuperPermission instance.
   */
  static getByUser(userId) {
    return __async(this, null, function* () {
      const observer$ = AutoCloudDnsClient.ehttp.makeGet(`${_DnsSuperPermission.baseUrl}/user/${userId}`);
      const data = yield lastValueFrom(observer$);
      return new _DnsSuperPermission(data);
    });
  }
  /**
   * Adds or updates super DNS permissions for a specific user.
   *
   * @param permissions - The permissions to add or update.
   * @returns A Promise that resolves to an Isuccess instance.
   */
  static addUpdate(permissions) {
    const observer$ = AutoCloudDnsClient.ehttp.makePut(`${_DnsSuperPermission.baseUrl}/${permissions.userId}`, permissions);
    return lastValueFrom(observer$);
  }
  /**
   * Removes super DNS permissions for a specific user.
   *
   * @returns A Promise that resolves to an Isuccess instance.
   */
  remove() {
    return AutoCloudDnsClient.ehttp.makeDelete(`${_DnsSuperPermission.baseUrl}/${this.userId}`);
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/auto-dns/domain.define.ts
init_esm();
var AutoDnsDomain = class _AutoDnsDomain {
  static {
    this.baseUrl = "/domains";
  }
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.domain = data.domain;
    this.webIp = data.webIp;
    this.mailIp = data.mailIp;
    this.zoneId = data.zoneId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
  /**
   * Retrieves all domains.
   *
   * @returns A Promise that resolves to an array of AutoDnsDomain instances.
   */
  static getAll() {
    return __async(this, null, function* () {
      const observer$ = AutoCloudDnsClient.ehttp.makeGet(`${_AutoDnsDomain.baseUrl}`);
      const data = yield lastValueFrom(observer$);
      return data.map((val) => new _AutoDnsDomain(val));
    });
  }
  /**
   * Retrieves DNS records.
   *
   * @returns A Promise that resolves to an Isuccess instance.
   */
  static records() {
    const observer$ = AutoCloudDnsClient.ehttp.makeGet(`${_AutoDnsDomain.baseUrl}/dns-records`);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves analytics.
   *
   * @returns A Promise that resolves to an Isuccess instance.
   */
  static analytics() {
    const observer$ = AutoCloudDnsClient.ehttp.makeGet(`${_AutoDnsDomain.baseUrl}/analytics`);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves a specific domain.
   *
   * @param resourceId - The ID of the domain to retrieve.
   * @returns A Promise that resolves to a new AutoDnsDomain instance.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = AutoCloudDnsClient.ehttp.makeGet(`${_AutoDnsDomain.baseUrl}/${resourceId}`);
      const domain = yield lastValueFrom(observer$);
      return new _AutoDnsDomain(domain);
    });
  }
  /**
   * Adds a subdomain.
   *
   * @param payload - The payload containing the subdomain information.
   * @returns A Promise that resolves to an Isuccess instance.
   */
  static addSubDomain(payload) {
    const observer$ = AutoCloudDnsClient.ehttp.makePost(`${_AutoDnsDomain.baseUrl}/subdomain`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Removes a subdomain.
   *
   * @param subdomain - The subdomain to remove.
   * @returns A Promise that resolves to an Isuccess instance.
   */
  removeSubDomain(subdomain) {
    const observer$ = AutoCloudDnsClient.ehttp.makeDelete(`${_AutoDnsDomain.baseUrl}/subdomain/${subdomain}`);
    return lastValueFrom(observer$);
  }
  /**
   * Removes the domain.
   *
   * @returns A Promise that resolves to an Isuccess instance.
   */
  remove() {
    const observer$ = AutoCloudDnsClient.ehttp.makeDelete(`${_AutoDnsDomain.baseUrl}/${this.id}`);
    return lastValueFrom(observer$);
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/flying-mail/mail-perms.defines.ts
init_esm();

// ../main-front-shared-lib/src/shared-lib/utils/flying-mail-client.ts
var FlyingMailClient = class _FlyingMailClient {
  /**
   * Creates a new instance of FlyingMailClient.
   *
   * @param {IehttpControllerConfig} config - Configuration object for the HTTP client.
   * @throws {BizNestClientError} If the provided configuration is invalid or missing.
   *
   * @example
   * const mailClient = new FlyingMailClient({
   *   baseURL: 'https://api.example.com/email'
   * });
   */
  constructor(config) {
    if (!config || typeof config !== "object") {
      throw new BizNestClientError("config must be a valid configuration object");
    }
    FrontendLogger.debug("FlyingMailClient initialized");
    _FlyingMailClient.http = new EhttpController(config);
  }
  /**
   * Gets the underlying HTTP client instance.
   *
   * @static
   * @returns {EhttpController} The initialized HTTP client instance.
   * @throws {BizNestClientError} If the HTTP client has not been initialized.
   *
   * @example
   * const http = FlyingMailClient.ehttp;
   */
  static get ehttp() {
    if (!_FlyingMailClient.http) {
      throw new BizNestClientError("HTTP client not initialized. Call new FlyingMailClient() first.");
    }
    return _FlyingMailClient.http;
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/flying-mail/mail-perms.defines.ts
var MailPermission = class _MailPermission {
  static {
    this.baseUrl = "/permissions";
  }
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.companyId = data.companyId;
    this.mainAccess = data.mainAccess;
    this.read = data.read;
    this.write = data.write;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.domainId = data.domainId;
  }
  /**
   * Retrieves mail permissions for a specific user.
   *
   * @param userId - The ID of the user to retrieve permissions for.
   * @returns A Promise that resolves to a new MailPermission instance.
   */
  static getByUser(userId) {
    return __async(this, null, function* () {
      const observer$ = FlyingMailClient.ehttp.makeGet(`${_MailPermission.baseUrl}/user/${userId}`);
      const data = yield lastValueFrom(observer$);
      return new _MailPermission(data);
    });
  }
  /**
   * Adds or updates mail permissions for a specific user.
   *
   * @param permissions - The permissions to add or update.
   * @returns A Promise that resolves to an Isuccess instance.
   */
  static addUpdate(permissions) {
    const observer$ = FlyingMailClient.ehttp.makePut(`${_MailPermission.baseUrl}/${permissions.userId}`, permissions);
    return lastValueFrom(observer$);
  }
  /**
   * Removes the mail permission.
   *
   * @returns A Promise that resolves to an Isuccess instance.
   */
  remove() {
    return FlyingMailClient.ehttp.makeDelete(`${_MailPermission.baseUrl}/${this.userId}`);
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/flying-mail/mail-subscription.defines.ts
init_esm();
var MailSubscription = class _MailSubscription {
  static {
    this.baseUrl = "/subscription";
  }
  constructor(data) {
    this.id = data.id;
    this.company = data.company;
    this.defaultDomain = data.defaultDomain;
    this.name = data.name;
    this.amount = data.amount;
    this.duration = data.duration;
    this.active = data.active;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.status = data.status;
    this.features = data.features;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
  /**
   * Retrieves all mail subscriptions.
   *
   * @returns A Promise that resolves to an array of MailSubscription instances.
   */
  static getAll() {
    return __async(this, null, function* () {
      const observer$ = FlyingMailClient.ehttp.makeGet(`${_MailSubscription.baseUrl}`);
      const data = yield lastValueFrom(observer$);
      return data.map((val) => new _MailSubscription(val));
    });
  }
  /**
   * Retrieves a specific mail subscription.
   *
   * @param id - The ID of the subscription to retrieve.
   * @returns A Promise that resolves to a new MailSubscription instance.
   */
  static getOne(id) {
    return __async(this, null, function* () {
      const observer$ = FlyingMailClient.ehttp.makeGet(`${_MailSubscription.baseUrl}/${id}`);
      const data = yield lastValueFrom(observer$);
      return new _MailSubscription(data);
    });
  }
  /**
   * Updates a specific mail subscription.
   *
   * @param id - The ID of the subscription to update.
   * @param permissions - The permissions to update.
   * @returns A Promise that resolves to an Isuccess instance.
   */
  static update(id, permissions) {
    const observer$ = FlyingMailClient.ehttp.makePut(`${_MailSubscription.baseUrl}/${id}`, permissions);
    return lastValueFrom(observer$);
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/flying-mail/mail-super-perms.define.ts
init_esm();
var MailSuperPermission = class _MailSuperPermission {
  static {
    this.baseUrl = "/super-permissions";
  }
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.mainAccess = data.mainAccess;
    this.read = data.read;
    this.write = data.write;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
  /**
   * Retrieves mail super permissions for a specific user.
   *
   * @param userId - The ID of the user to retrieve permissions for.
   * @returns A Promise that resolves to a new MailSuperPermission instance.
   */
  static getByUser(userId) {
    return __async(this, null, function* () {
      const observer$ = FlyingMailClient.ehttp.makeGet(`${_MailSuperPermission.baseUrl}/user/${userId}`);
      const data = yield lastValueFrom(observer$);
      return new _MailSuperPermission(data);
    });
  }
  /**
   * Adds or updates mail super permissions for a specific user.
   *
   * @param permissions - The permissions to add or update.
   * @returns A Promise that resolves to an Isuccess instance.
   */
  static addUpdate(permissions) {
    const observer$ = FlyingMailClient.ehttp.makePut(`${_MailSuperPermission.baseUrl}/${permissions.userId}`, permissions);
    return lastValueFrom(observer$);
  }
  /**
   * Removes the mail super permission.
   *
   * @returns A Promise that resolves to an Isuccess instance.
   */
  remove() {
    return FlyingMailClient.ehttp.makeDelete(`${_MailSuperPermission.baseUrl}/${this.userId}`);
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/flying-mail/mail-user.define.ts
init_esm();
var MailUser = class _MailUser {
  static {
    this.baseUrl = "/users";
  }
  constructor(data) {
    this.id = data.id;
    this.email = data.email;
    this.quotaBytes = data.quotaBytes;
    this.messageLimit = data.messageLimit;
    this.createdAt = data.createdAt;
    this.expiresAt = data.expiresAt;
    this.isActive = data.isActive;
    this.updatedAt = data.updatedAt;
    this.companyId = data.companyId;
  }
  /**
   * Retrieves all mail users.
   *
   * @returns A Promise that resolves to an array of MailUser instances.
   */
  static getAll() {
    return __async(this, null, function* () {
      const observer$ = FlyingMailClient.ehttp.makeGet(`${_MailUser.baseUrl}`);
      const data = yield lastValueFrom(observer$);
      return data.map((val) => new _MailUser(val));
    });
  }
  /**
   * Retrieves a specific mail user by email.
   *
   * @param email - The email of the user to retrieve.
   * @returns A Promise that resolves to a new MailUser instance.
   */
  static getByEmail(email) {
    return __async(this, null, function* () {
      const observer$ = FlyingMailClient.ehttp.makeGet(`${_MailUser.baseUrl}/${email}`);
      const data = yield lastValueFrom(observer$);
      return new _MailUser(data);
    });
  }
  /**
   * Adds a new mail user.
   *
   * @param payload - The payload to add the user with.
   * @returns A Promise that resolves to an Isuccess instance.
   */
  static add(payload) {
    const observer$ = FlyingMailClient.ehttp.makePost(`${_MailUser.baseUrl}`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates a specific mail user.
   *
   * @param payload - The payload to update the user with.
   * @returns A Promise that resolves to an Isuccess instance.
   */
  update(payload) {
    const observer$ = FlyingMailClient.ehttp.makePut(`${_MailUser.baseUrl}/${this.email}`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Removes the mail user.
   *
   * @returns A Promise that resolves to an Isuccess instance.
   */
  remove() {
    const observer$ = FlyingMailClient.ehttp.makeDelete(`${_MailUser.baseUrl}/${this.email}`);
    return lastValueFrom(observer$);
  }
};

// ../main-front-shared-lib/src/shared-lib/utils/eventbus.ts
init_esm();
var Eventbus = class {
  /**
   * Creates an instance of Eventbus.
   * Initializes all BehaviorSubject instances.
   */
  constructor() {
    this.onphoto$ = new Subject();
    this.emojifeedback$ = new Subject();
    this.generalEvent$ = new BehaviorSubject(null);
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/mgt/manager-expense.define.ts
init_esm();
var ManagerExpense = class _ManagerExpense extends DatabaseAuto {
  static {
    this.baseUrl = "/expense";
  }
  /**
   * Constructs an instance of `ManagerExpense`.
   *
   * @param {TmanagerExpenseProps} data - The expense data used to initialize the instance.
   * @throws {Error} Throws an error if no data is provided.
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      },
      name: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "ManagerExpense name must be a non-empty string"
      },
      manager: {
        validate: (v) => typeof v === "object" && v._id.trim().length > 0,
        message: "Added by name must be a valid user object"
      },
      cost: {
        validate: (v) => typeof v === "number" && v >= 0,
        message: "Cost must be a non-negative number"
      }
    });
    super(data);
    this.urId = data.urId;
    this.name = data.name;
    this.manager = data.manager;
    this.cost = data.cost;
    this.category = data.category;
    this.note = data.note || "";
    this.expenseType = data.expenseType;
  }
  /**
   * Retrieves expense analytics based on the provided filter.
   *
   * @param {IfilterProps} filter - The filter criteria for retrieving expense analytics.
   * @returns {Promise<IAnalyticsResultExpense>} The result of the analytics operation.
   */
  static getExpenseAnalytics(filter2) {
    const observer$ = ManagerClient.ehttp.makePost(`${_ManagerExpense.baseUrl}/analytics`, filter2);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves all expenses with pagination support.
   *
   * @param {number} [offset=0] - The starting point for pagination.
   * @param {number} [limit=20] - The number of items to retrieve.
   * @returns {Promise<{ count: number, dataArr: ManagerExpense[] }>} An object containing
   * the total count and an array of `ManagerExpense` instances.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = ManagerClient.ehttp.makeGet(`${_ManagerExpense.baseUrl}?${query}`);
      const expenses = yield lastValueFrom(observer$);
      return {
        count: expenses.count,
        dataArr: expenses.data.map((val) => new _ManagerExpense(val))
      };
    });
  }
  /**
   * Filters expenses based on the provided filter properties.
   *
   * @param {IfilterProps} filter - The filter criteria for retrieving expenses.
   * @returns {Promise<{ count: number, dataArr: ManagerExpense[] }>} An object containing
   * the total count and an array of `ManagerExpense` instances.
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(`${_ManagerExpense.baseUrl}/filter`, filter2);
      const expenses = yield lastValueFrom(observer$);
      return {
        count: expenses.count,
        dataArr: expenses.data.map((val) => new _ManagerExpense(val))
      };
    });
  }
  /**
   * Retrieves a single expense based on the provided resource ID.
   *
   * @param {string} resourceId - The unique identifier for the expense to retrieve.
   * @returns {Promise<ManagerExpense>} The `ManagerExpense` instance corresponding to the provided resource ID.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makeGet(`${_ManagerExpense.baseUrl}/${resourceId}`);
      const expense = yield lastValueFrom(observer$);
      return new _ManagerExpense(expense);
    });
  }
  /**
   * Adds a new expense.
   *
   * @param {TmanagerExpenseRequest<true>} payload - The expense data to add.
   * @returns {Promise<ManagerExpense>} The result of the addition operation.
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(`${_ManagerExpense.baseUrl}`, payload);
      return new _ManagerExpense(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes multiple expenses based on the provided criteria.
   *
   * @param {IbulkDelete} payload - The criteria for deleting multiple expenses.
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the deletion operation.
   */
  static bulkDelete(payload) {
    const observer$ = ManagerClient.ehttp.makePost(`${_ManagerExpense.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current expense with the provided data.
   *
   * @param {TmanagerExpenseRequest} payload - The updated expense data.
   * @returns {Promise<ManagerExpense>} The result of the update operation.
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePut(`${_ManagerExpense.baseUrl}/${this._id}`, payload);
      return new _ManagerExpense(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current expense.
   *
   * @returns {Promise<IdeleteOneResponse | null>} The result of the removal operation.
   */
  remove() {
    const observer$ = ManagerClient.ehttp.makeDelete(`${_ManagerExpense.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};

// ../main-front-shared-lib/src/shared-lib/defines/mgt/manager-non-operating-revenue.define.ts
init_esm();
var ManagerNonOperatingRevenue = class _ManagerNonOperatingRevenue extends DatabaseAuto {
  static {
    this.baseUrl = "/manager-non-operating-revenue";
  }
  /**
   * Constructs an instance of `ManagerNonOperatingRevenue`.
   *
   * @param {TmanagerNonOperatingRevenueProps} data - The nonOperatingRevenue data used to initialize the instance.
   * @throws {Error} Throws an error if no data is provided.
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique reference ID must be a non-empty string"
      },
      name: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "ManagerNonOperatingRevenue name must be a non-empty string"
      },
      amount: {
        validate: (v) => typeof v === "number" && v >= 0,
        message: "Cost must be a non-negative number"
      },
      manager: {
        validate: (v) => typeof v === "object" && v._id.trim().length > 0,
        message: "Added by name must be a valid user object"
      }
    });
    super(data);
    this.urId = data.urId;
    this.name = data.name;
    this.manager = data.manager;
    this.amount = data.amount;
    this.note = data.note || "";
  }
  /**
   * Retrieves nonOperatingRevenue analytics based on the provided filter.
   *
   * @param {IfilterProps} filter - The filter criteria for retrieving nonOperatingRevenue analytics.
   * @returns {Promise<InonOperatingRevenueAnalytics>} The result of the analytics operation.
   */
  static getNonOperatingRevenueAnalytics(filter2) {
    const observer$ = ManagerClient.ehttp.makePost(`${_ManagerNonOperatingRevenue.baseUrl}/analytics`, filter2);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves all nonOperatingRevenues with pagination support.
   *
   * @param {number} [offset=0] - The starting point for pagination.
   * @param {number} [limit=20] - The number of items to retrieve.
   * @returns {Promise<{ count: number, dataArr: ManagerNonOperatingRevenue[] }>} An object containing
   * the total count and an array of `ManagerNonOperatingRevenue` instances.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = ManagerClient.ehttp.makeGet(`${_ManagerNonOperatingRevenue.baseUrl}?${query}`);
      const nonOperatingRevenues = yield lastValueFrom(observer$);
      return {
        count: nonOperatingRevenues.count,
        dataArr: nonOperatingRevenues.data.map((val) => new _ManagerNonOperatingRevenue(val))
      };
    });
  }
  /**
   * Filters nonOperatingRevenues based on the provided filter properties.
   *
   * @param {IfilterProps} filter - The filter criteria for retrieving nonOperatingRevenues.
   * @returns {Promise<{ count: number, dataArr: ManagerNonOperatingRevenue[] }>} An object containing
   * the total count and an array of `ManagerNonOperatingRevenue` instances.
   */
  static filterAll(filter2) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(`${_ManagerNonOperatingRevenue.baseUrl}/filter`, filter2);
      const nonOperatingRevenues = yield lastValueFrom(observer$);
      return {
        count: nonOperatingRevenues.count,
        dataArr: nonOperatingRevenues.data.map((val) => new _ManagerNonOperatingRevenue(val))
      };
    });
  }
  /**
   * Retrieves a single nonOperatingRevenue based on the provided resource ID.
   *
   * @param {string} resourceId - The unique identifier for the nonOperatingRevenue to retrieve.
   * @returns {Promise<ManagerNonOperatingRevenue>} The `ManagerNonOperatingRevenue`
   * instance corresponding to the provided resource ID.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makeGet(`${_ManagerNonOperatingRevenue.baseUrl}/${resourceId}`);
      const nonOperatingRevenue = yield lastValueFrom(observer$);
      return new _ManagerNonOperatingRevenue(nonOperatingRevenue);
    });
  }
  /**
   * Adds a new nonOperatingRevenue.
   *
   * @param {InonOperatingRevenue} payload - The nonOperatingRevenue data to add.
   * @returns {Promise<ManagerNonOperatingRevenue>} The result of the addition operation.
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePost(`${_ManagerNonOperatingRevenue.baseUrl}`, payload);
      return new _ManagerNonOperatingRevenue(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes multiple nonOperatingRevenues based on the provided criteria.
   *
   * @param {IbulkDelete} payload - The criteria for deleting multiple nonOperatingRevenues.
   * @returns {Promise<IbulkDeleteSuccessResponse>} The result of the deletion operation.
   */
  static bulkDelete(payload) {
    const observer$ = ManagerClient.ehttp.makePost(`${_ManagerNonOperatingRevenue.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current nonOperatingRevenue with the provided data.
   *
   * @param {InonOperatingRevenue} payload - The updated nonOperatingRevenue data.
   * @returns {Promise<ManagerNonOperatingRevenue>} The result of the update operation.
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = ManagerClient.ehttp.makePut(`${_ManagerNonOperatingRevenue.baseUrl}/${this._id}`, payload);
      return new _ManagerNonOperatingRevenue(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current nonOperatingRevenue.
   *
   * @returns {Promise<IdeleteOneResponse | null>} The result of the removal operation.
   */
  remove() {
    const observer$ = ManagerClient.ehttp.makeDelete(`${_ManagerNonOperatingRevenue.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};

// projects/shared-lib/src/lib/services/app-name.service.ts
var AppNameService = class _AppNameService {
  constructor() {
    this.name = "Eagle Info Solutions";
  }
  static {
    this.\u0275fac = function AppNameService_Factory(t) {
      return new (t || _AppNameService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppNameService, factory: _AppNameService.\u0275fac, providedIn: "root" });
  }
};

export {
  BizNestClientError,
  validateData,
  DatabaseAuto,
  FrontendLogger,
  getBizNestErrorResponseMessage,
  EhttpController,
  expenseCategory,
  makeRandomString,
  CommerceClient,
  CompanySubscription,
  Company,
  CompanySettings,
  EcommerceOrder,
  Item,
  Expense,
  EcommerceOrderRefund,
  OperationalLocation,
  ItemComplaint,
  ItemReturn,
  UnreliableBuyerHistory,
  UnreliableBuyer,
  UnreliableVendorHistory,
  UnreliableVendor,
  Estimate,
  Invoice,
  Receipt,
  AutomaticItemTax,
  Ecommerccut,
  JobCard,
  AuditLog,
  DataBin,
  Staff,
  UserWallet,
  UserWalletHistory,
  getSearchHistory,
  getGuestInfo,
  dashCardsBmUse,
  transformDateWithoutTime,
  generateRandomPassword,
  subscriptionPackages,
  customiseUserQuota,
  customiseDocumentQuota,
  customiseItemQuota,
  customiseAnalyticsQuota,
  customiseAdvancedAnalyticsQuota,
  customiseHelpTicketQuota,
  customiseMailQuota,
  salesAnalyticsEcommerceForSharedUse,
  EagleInfoClientError,
  serverAdressesDev,
  AutoCloudDnsClient,
  AutoDnsDomain,
  FlyingMailClient,
  MailUser,
  ManagerClient,
  DeliveryManager,
  VendorManager,
  controlNames,
  Eventbus,
  navByBus,
  runSubscriptionsForSharedUse,
  AppNameService
};
/*! Bundled license information:

axios/dist/browser/axios.cjs:
  (*! Axios v1.13.1 Copyright (c) 2025 Matt Zabriskie and contributors *)
*/
//# sourceMappingURL=chunk-MC4HAW4O.js.map
