import {
  DataService
} from "./chunk-IOIIXNZS.js";
import {
  WindowService
} from "./chunk-LARJQE5I.js";
import {
  CurrencyService
} from "./chunk-D3TBKTNA.js";
import {
  NotificationClient
} from "./chunk-DEKWU2RH.js";
import {
  AuthClient,
  logout,
  wsLogin,
  wsRefresh
} from "./chunk-H7TI67RE.js";
import {
  WebStorageService
} from "./chunk-GVZ7XU6B.js";
import {
  AutoCloudDnsClient,
  CommerceClient,
  EagleInfoClientError,
  FlyingMailClient,
  FrontendLogger,
  ManagerClient
} from "./chunk-MC4HAW4O.js";
import {
  Subject,
  esm_exports,
  init_esm,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4EXDEK5V.js";
import {
  __async,
  __commonJS,
  __esm,
  __export,
  __spreadValues,
  __toCommonJS,
  __toESM
} from "./chunk-GEHWEZZY.js";

// ../../wire-talk/node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
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
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
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
    while (g && (g = 0, op[0] && (_ = 0)), _)
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
}
function __exportStar(m, o) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
      __createBinding(o, m, p);
}
function __values(o) {
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
}
function __read(o, n) {
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
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f)
        i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
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
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0; i < k.length; i++)
      if (k[i] !== "default")
        __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async)
        inner = dispose;
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    if (inner)
      dispose = function() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1)
          return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async)
            return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } else
          s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1)
      return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError)
      throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "../../wire-talk/node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
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
    };
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2)
          if (Object.prototype.hasOwnProperty.call(o2, k))
            ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// ../../wire-talk/packages/client/lib/shared/core-types/chat.js
var require_chat = __commonJS({
  "../../wire-talk/packages/client/lib/shared/core-types/chat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../wire-talk/packages/client/lib/shared/core-types/chat.enum.js
var require_chat_enum = __commonJS({
  "../../wire-talk/packages/client/lib/shared/core-types/chat.enum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ECHATMETHOD = void 0;
    var ECHATMETHOD;
    (function(ECHATMETHOD2) {
      ECHATMETHOD2["NEW_PEER"] = "newPeer";
      ECHATMETHOD2["NEW_MAIN_PEER"] = "newMainPeer";
      ECHATMETHOD2["PEER_OFFLINE"] = "peerOffline";
      ECHATMETHOD2["PEER_ONLINE"] = "peerOnline";
      ECHATMETHOD2["PEER_CLOSE"] = "peerClosed";
      ECHATMETHOD2["MAIN_PEER_CLOSE"] = "mainPeerClosed";
      ECHATMETHOD2["JOIN"] = "join";
      ECHATMETHOD2["CLOSE_PEER"] = "closePeer";
      ECHATMETHOD2["GET_MESSAGES"] = "getMessages";
      ECHATMETHOD2["CHAT_MESSAGE"] = "chatMessage";
      ECHATMETHOD2["DELETE_MESSAGE"] = "deleteMessage";
      ECHATMETHOD2["UPDATE_ROOM"] = "updateRoom";
      ECHATMETHOD2["DELETE_ROOM"] = "deleteRoom";
      ECHATMETHOD2["UPDATE_STATUS"] = "updateStatus";
      ECHATMETHOD2["PEER_UPDATE"] = "updatePeer";
      ECHATMETHOD2["SOCKET_CONNECTED"] = "socketConnected";
      ECHATMETHOD2["SOCKET_DISCONNECTED"] = "socketDisconnected";
      ECHATMETHOD2["NEW_ROOM"] = "newRoom";
      ECHATMETHOD2["ROOM_CREATED"] = "roomCreated";
      ECHATMETHOD2["MISC_MAIN"] = "miscMain";
      ECHATMETHOD2["MISC"] = "misc";
      ECHATMETHOD2["GET_UNVIEWED_MSGS_LENGTH"] = "getUnviewedMsgsLength";
      ECHATMETHOD2["IS_ONLINE"] = "isOnline";
      ECHATMETHOD2["UPDATE_VIEW_COUNT"] = "updateViewCount";
    })(ECHATMETHOD = exports.ECHATMETHOD || (exports.ECHATMETHOD = {}));
  }
});

// ../../wire-talk/packages/client/lib/shared/core-types/union.types.js
var require_union_types = __commonJS({
  "../../wire-talk/packages/client/lib/shared/core-types/union.types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../wire-talk/packages/client/lib/client/src/constants/makerandomstring.constant.js
var require_makerandomstring_constant = __commonJS({
  "../../wire-talk/packages/client/lib/client/src/constants/makerandomstring.constant.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeRandomString = void 0;
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
    exports.makeRandomString = makeRandomString;
  }
});

// ../../wire-talk/packages/client/lib/shared/utils/wire-talk-error.js
var require_wire_talk_error = __commonJS({
  "../../wire-talk/packages/client/lib/shared/utils/wire-talk-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WireTalkErrorHandler = exports.WireTalkError = exports.EWIRE_TALK_ERROR_TYPE = void 0;
    var EWIRE_TALK_ERROR_TYPE;
    (function(EWIRE_TALK_ERROR_TYPE2) {
      EWIRE_TALK_ERROR_TYPE2["UNAUTHORIZED"] = "UNAUTHORIZED";
      EWIRE_TALK_ERROR_TYPE2["INVALID_CREDENTIALS"] = "INVALID_CREDENTIALS";
      EWIRE_TALK_ERROR_TYPE2["CONNECTION_FAILED"] = "CONNECTION_FAILED";
      EWIRE_TALK_ERROR_TYPE2["SOCKET_DISCONNECTED"] = "SOCKET_DISCONNECTED";
      EWIRE_TALK_ERROR_TYPE2["ROOM_NOT_FOUND"] = "ROOM_NOT_FOUND";
      EWIRE_TALK_ERROR_TYPE2["ROOM_FULL"] = "ROOM_FULL";
      EWIRE_TALK_ERROR_TYPE2["PEER_ALREADY_EXISTS"] = "PEER_ALREADY_EXISTS";
      EWIRE_TALK_ERROR_TYPE2["PEER_CONNECTION_ERROR"] = "PEER_CONNECTION_ERROR";
      EWIRE_TALK_ERROR_TYPE2["MESSAGE_SEND_FAILED"] = "MESSAGE_SEND_FAILED";
      EWIRE_TALK_ERROR_TYPE2["MESSAGE_TOO_LONG"] = "MESSAGE_TOO_LONG";
      EWIRE_TALK_ERROR_TYPE2["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
      EWIRE_TALK_ERROR_TYPE2["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    })(EWIRE_TALK_ERROR_TYPE = exports.EWIRE_TALK_ERROR_TYPE || (exports.EWIRE_TALK_ERROR_TYPE = {}));
    var WireTalkError = class _WireTalkError extends Error {
      /**
       * Creates a new error instance.
       * @param message Descriptive error message
       * @param type Error classification
       * @param context Optional error metadata
       */
      constructor(message, type = EWIRE_TALK_ERROR_TYPE.UNKNOWN_ERROR, context) {
        super(message);
        this.name = "WireTalkError";
        this.type = type;
        this.context = context;
        Object.setPrototypeOf(this, _WireTalkError.prototype);
      }
      /**
       * Converts error to a serializable object.
       * @returns Structured error representation
       */
      // eslint-disable-next-line @typescript-eslint/naming-convention
      toJSON() {
        return {
          name: this.name,
          message: this.message,
          type: this.type,
          context: this.context,
          stack: this.stack
        };
      }
      /**
       * Adds context to the existing error.
       * @param context Additional error metadata
       * @returns New error instance with combined context
       */
      withContext(context) {
        return new _WireTalkError(this.message, this.type, __spreadValues(__spreadValues({}, this.context), context));
      }
      /**
       * Checks if error matches a specific type.
       * @param type Error type to compare
       * @returns Whether error matches the type
       */
      isType(type) {
        return this.type === type;
      }
    };
    exports.WireTalkError = WireTalkError;
    var WireTalkErrorHandler = class {
      /**
       * Logs an error with optional additional context.
       * @param error Error to log
       * @param additionalContext Optional logging metadata
       */
      static log(error, additionalContext) {
        const wireTalkError = error instanceof WireTalkError ? error : new WireTalkError(error.message);
        console.error("WireTalk Error:", {
          message: wireTalkError.message,
          type: wireTalkError.type,
          context: __spreadValues(__spreadValues({}, wireTalkError.context), additionalContext),
          stack: wireTalkError.stack
        });
      }
      /**
       * Creates a new error instance.
       * @param message Error message
       * @param type Error classification
       * @param context Optional error metadata
       * @returns New WireTalkError instance
       */
      static create(message, type = EWIRE_TALK_ERROR_TYPE.UNKNOWN_ERROR, context) {
        return new WireTalkError(message, type, context);
      }
    };
    exports.WireTalkErrorHandler = WireTalkErrorHandler;
  }
});

// ../../wire-talk/packages/client/lib/client/src/utils/chat-room.js
var require_chat_room = __commonJS({
  "../../wire-talk/packages/client/lib/client/src/utils/chat-room.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChatMsg = exports.ChatRoom = exports.ChatRoomBase = void 0;
    var wire_talk_error_1 = require_wire_talk_error();
    var ChatRoomBase = class {
      /**
       * Initializes a new chat entity.
       * @param data Base data for the chat entity
       * @throws Validation error if ID is missing
       */
      constructor(data) {
        if (!data.id) {
          throw wire_talk_error_1.WireTalkErrorHandler.create("Chat entity must have an ID", wire_talk_error_1.EWIRE_TALK_ERROR_TYPE.VALIDATION_ERROR);
        }
        this.id = data.id;
        this.createTime = data.createTime || /* @__PURE__ */ new Date();
      }
      /**
       * Validates if the provided data is complete.
       * @param data Data to validate
       * @returns Whether the data is valid
       */
      static validateData(data) {
        return Object.keys(data).length > 0;
      }
    };
    exports.ChatRoomBase = ChatRoomBase;
    var ChatRoom = class extends ChatRoomBase {
      /**
       * Creates a new chat room instance.
       * @param room Room configuration data
       * @throws Validation error for invalid data
       */
      constructor(room) {
        super(room);
        this.unviewedMsgsLength = 0;
        this.closed = false;
        if (!ChatRoomBase.validateData(room)) {
          throw wire_talk_error_1.WireTalkErrorHandler.create("Invalid room data provided", wire_talk_error_1.EWIRE_TALK_ERROR_TYPE.VALIDATION_ERROR, { roomData: room });
        }
        this.lastActive = room.lastActive || /* @__PURE__ */ new Date();
        this.peers = room.peers || [];
        this.blocked = room.blocked || [];
        this.unviewedMsgsLength = room.unviewedMsgsLength || 0;
        this.type = room.type || "default";
        this.extras = room.extras;
        this.closed = room.closed || false;
      }
      updateUnviewedMsgsLength(val) {
        this.unviewedMsgsLength += val;
      }
      /**
       * Updates room state with new information.
       * @param val New room values
       * @param add Whether to append or replace existing data
       * @returns Updated room instance
       */
      update(val, add = false) {
        if (val.unviewedMsgsLength) {
          delete val.unviewedMsgsLength;
        }
        this.lastActive = val.lastActive || this.lastActive;
        if (val.peers?.length) {
          const peers = this.peers || [];
          if (add) {
            this.peers = [...peers, ...val.peers];
          } else {
            this.peers = peers.filter((p) => val.peers && !val.peers.map((value) => value.id).includes(p.id));
          }
        }
        if (val.blocked?.length) {
          const blocked = this.blocked || [];
          if (add) {
            this.blocked = [...blocked, ...val.blocked];
          } else {
            this.blocked = blocked.filter((b) => val.blocked && !val.blocked.includes(b));
          }
        }
        return this;
      }
      /**
       * Retrieves room participants.
       * @returns List of peer information
       */
      getParticipants() {
        return this.peers;
      }
      /**
       * Finds a specific peer by ID.
       * @param id Peer identifier
       * @returns Peer information or undefined
       */
      getPeerById(id) {
        return this.peers.find((p) => p.id === id);
      }
    };
    exports.ChatRoom = ChatRoom;
    var ChatMsg = class extends ChatRoomBase {
      /**
       * Creates a new chat message instance.
       * @param myId Current user's ID
       * @param msg Message configuration data
       * @throws Validation error for invalid data
       */
      constructor(myId, msg) {
        super(msg);
        this.myId = myId;
        if (!ChatRoomBase.validateData(msg)) {
          throw wire_talk_error_1.WireTalkErrorHandler.create("Invalid message data provided", wire_talk_error_1.EWIRE_TALK_ERROR_TYPE.VALIDATION_ERROR, { messageData: msg });
        }
        this.peerInfo = msg.peerInfo;
        this.roomId = msg.roomId || "";
        this.msg = msg.msg || "";
        this.who = this.myId === this.peerInfo?.id ? "me" : "partner";
        this.status = msg.status || "pending";
        this.deleted = msg.deleted || false;
      }
    };
    exports.ChatMsg = ChatMsg;
  }
});

// ../../wire-talk/node_modules/engine.io-parser/build/cjs/commons.js
var require_commons = __commonJS({
  "../../wire-talk/node_modules/engine.io-parser/build/cjs/commons.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERROR_PACKET = exports.PACKET_TYPES_REVERSE = exports.PACKET_TYPES = void 0;
    var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
    exports.PACKET_TYPES = PACKET_TYPES;
    PACKET_TYPES["open"] = "0";
    PACKET_TYPES["close"] = "1";
    PACKET_TYPES["ping"] = "2";
    PACKET_TYPES["pong"] = "3";
    PACKET_TYPES["message"] = "4";
    PACKET_TYPES["upgrade"] = "5";
    PACKET_TYPES["noop"] = "6";
    var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
    exports.PACKET_TYPES_REVERSE = PACKET_TYPES_REVERSE;
    Object.keys(PACKET_TYPES).forEach((key) => {
      PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
    });
    var ERROR_PACKET = { type: "error", data: "parser error" };
    exports.ERROR_PACKET = ERROR_PACKET;
  }
});

// ../../wire-talk/node_modules/engine.io-parser/build/cjs/encodePacket.browser.js
var require_encodePacket_browser = __commonJS({
  "../../wire-talk/node_modules/engine.io-parser/build/cjs/encodePacket.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.encodePacket = void 0;
    exports.encodePacketToBinary = encodePacketToBinary;
    var commons_js_1 = require_commons();
    var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";
    var isView = (obj) => {
      return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
    };
    var encodePacket = ({ type, data }, supportsBinary, callback) => {
      if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) {
          return callback(data);
        } else {
          return encodeBlobAsBase64(data, callback);
        }
      } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) {
          return callback(data);
        } else {
          return encodeBlobAsBase64(new Blob([data]), callback);
        }
      }
      return callback(commons_js_1.PACKET_TYPES[type] + (data || ""));
    };
    exports.encodePacket = encodePacket;
    var encodeBlobAsBase64 = (data, callback) => {
      const fileReader = new FileReader();
      fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
      };
      return fileReader.readAsDataURL(data);
    };
    function toArray(data) {
      if (data instanceof Uint8Array) {
        return data;
      } else if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
      } else {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
      }
    }
    var TEXT_ENCODER;
    function encodePacketToBinary(packet, callback) {
      if (withNativeBlob && packet.data instanceof Blob) {
        return packet.data.arrayBuffer().then(toArray).then(callback);
      } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
        return callback(toArray(packet.data));
      }
      encodePacket(packet, false, (encoded) => {
        if (!TEXT_ENCODER) {
          TEXT_ENCODER = new TextEncoder();
        }
        callback(TEXT_ENCODER.encode(encoded));
      });
    }
  }
});

// ../../wire-talk/node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js
var require_base64_arraybuffer = __commonJS({
  "../../wire-talk/node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decode = exports.encode = void 0;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
    for (let i = 0; i < chars.length; i++) {
      lookup[chars.charCodeAt(i)] = i;
    }
    var encode = (arraybuffer) => {
      let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";
      for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64 += chars[bytes[i + 2] & 63];
      }
      if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + "=";
      } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + "==";
      }
      return base64;
    };
    exports.encode = encode;
    var decode = (base64) => {
      let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
      if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") {
          bufferLength--;
        }
      }
      const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
      for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
      }
      return arraybuffer;
    };
    exports.decode = decode;
  }
});

// ../../wire-talk/node_modules/engine.io-parser/build/cjs/decodePacket.browser.js
var require_decodePacket_browser = __commonJS({
  "../../wire-talk/node_modules/engine.io-parser/build/cjs/decodePacket.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodePacket = void 0;
    var commons_js_1 = require_commons();
    var base64_arraybuffer_js_1 = require_base64_arraybuffer();
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";
    var decodePacket = (encodedPacket, binaryType) => {
      if (typeof encodedPacket !== "string") {
        return {
          type: "message",
          data: mapBinary(encodedPacket, binaryType)
        };
      }
      const type = encodedPacket.charAt(0);
      if (type === "b") {
        return {
          type: "message",
          data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
        };
      }
      const packetType = commons_js_1.PACKET_TYPES_REVERSE[type];
      if (!packetType) {
        return commons_js_1.ERROR_PACKET;
      }
      return encodedPacket.length > 1 ? {
        type: commons_js_1.PACKET_TYPES_REVERSE[type],
        data: encodedPacket.substring(1)
      } : {
        type: commons_js_1.PACKET_TYPES_REVERSE[type]
      };
    };
    exports.decodePacket = decodePacket;
    var decodeBase64Packet = (data, binaryType) => {
      if (withNativeArrayBuffer) {
        const decoded = (0, base64_arraybuffer_js_1.decode)(data);
        return mapBinary(decoded, binaryType);
      } else {
        return { base64: true, data };
      }
    };
    var mapBinary = (data, binaryType) => {
      switch (binaryType) {
        case "blob":
          if (data instanceof Blob) {
            return data;
          } else {
            return new Blob([data]);
          }
        case "arraybuffer":
        default:
          if (data instanceof ArrayBuffer) {
            return data;
          } else {
            return data.buffer;
          }
      }
    };
  }
});

// ../../wire-talk/node_modules/engine.io-parser/build/cjs/index.js
var require_cjs = __commonJS({
  "../../wire-talk/node_modules/engine.io-parser/build/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodePayload = exports.decodePacket = exports.encodePayload = exports.encodePacket = exports.protocol = void 0;
    exports.createPacketEncoderStream = createPacketEncoderStream;
    exports.createPacketDecoderStream = createPacketDecoderStream;
    var encodePacket_js_1 = require_encodePacket_browser();
    Object.defineProperty(exports, "encodePacket", { enumerable: true, get: function() {
      return encodePacket_js_1.encodePacket;
    } });
    var decodePacket_js_1 = require_decodePacket_browser();
    Object.defineProperty(exports, "decodePacket", { enumerable: true, get: function() {
      return decodePacket_js_1.decodePacket;
    } });
    var commons_js_1 = require_commons();
    var SEPARATOR = String.fromCharCode(30);
    var encodePayload = (packets, callback) => {
      const length = packets.length;
      const encodedPackets = new Array(length);
      let count = 0;
      packets.forEach((packet, i) => {
        (0, encodePacket_js_1.encodePacket)(packet, false, (encodedPacket) => {
          encodedPackets[i] = encodedPacket;
          if (++count === length) {
            callback(encodedPackets.join(SEPARATOR));
          }
        });
      });
    };
    exports.encodePayload = encodePayload;
    var decodePayload = (encodedPayload, binaryType) => {
      const encodedPackets = encodedPayload.split(SEPARATOR);
      const packets = [];
      for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = (0, decodePacket_js_1.decodePacket)(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
          break;
        }
      }
      return packets;
    };
    exports.decodePayload = decodePayload;
    function createPacketEncoderStream() {
      return new TransformStream({
        transform(packet, controller) {
          (0, encodePacket_js_1.encodePacketToBinary)(packet, (encodedPacket) => {
            const payloadLength = encodedPacket.length;
            let header;
            if (payloadLength < 126) {
              header = new Uint8Array(1);
              new DataView(header.buffer).setUint8(0, payloadLength);
            } else if (payloadLength < 65536) {
              header = new Uint8Array(3);
              const view = new DataView(header.buffer);
              view.setUint8(0, 126);
              view.setUint16(1, payloadLength);
            } else {
              header = new Uint8Array(9);
              const view = new DataView(header.buffer);
              view.setUint8(0, 127);
              view.setBigUint64(1, BigInt(payloadLength));
            }
            if (packet.data && typeof packet.data !== "string") {
              header[0] |= 128;
            }
            controller.enqueue(header);
            controller.enqueue(encodedPacket);
          });
        }
      });
    }
    var TEXT_DECODER;
    function totalLength(chunks) {
      return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
    }
    function concatChunks(chunks, size) {
      if (chunks[0].length === size) {
        return chunks.shift();
      }
      const buffer = new Uint8Array(size);
      let j = 0;
      for (let i = 0; i < size; i++) {
        buffer[i] = chunks[0][j++];
        if (j === chunks[0].length) {
          chunks.shift();
          j = 0;
        }
      }
      if (chunks.length && j < chunks[0].length) {
        chunks[0] = chunks[0].slice(j);
      }
      return buffer;
    }
    function createPacketDecoderStream(maxPayload, binaryType) {
      if (!TEXT_DECODER) {
        TEXT_DECODER = new TextDecoder();
      }
      const chunks = [];
      let state = 0;
      let expectedLength = -1;
      let isBinary = false;
      return new TransformStream({
        transform(chunk, controller) {
          chunks.push(chunk);
          while (true) {
            if (state === 0) {
              if (totalLength(chunks) < 1) {
                break;
              }
              const header = concatChunks(chunks, 1);
              isBinary = (header[0] & 128) === 128;
              expectedLength = header[0] & 127;
              if (expectedLength < 126) {
                state = 3;
              } else if (expectedLength === 126) {
                state = 1;
              } else {
                state = 2;
              }
            } else if (state === 1) {
              if (totalLength(chunks) < 2) {
                break;
              }
              const headerArray = concatChunks(chunks, 2);
              expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
              state = 3;
            } else if (state === 2) {
              if (totalLength(chunks) < 8) {
                break;
              }
              const headerArray = concatChunks(chunks, 8);
              const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
              const n = view.getUint32(0);
              if (n > Math.pow(2, 53 - 32) - 1) {
                controller.enqueue(commons_js_1.ERROR_PACKET);
                break;
              }
              expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
              state = 3;
            } else {
              if (totalLength(chunks) < expectedLength) {
                break;
              }
              const data = concatChunks(chunks, expectedLength);
              controller.enqueue((0, decodePacket_js_1.decodePacket)(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
              state = 0;
            }
            if (expectedLength === 0 || expectedLength > maxPayload) {
              controller.enqueue(commons_js_1.ERROR_PACKET);
              break;
            }
          }
        }
      });
    }
    exports.protocol = 4;
  }
});

// ../../wire-talk/node_modules/@socket.io/component-emitter/lib/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  Emitter: () => Emitter
});
function Emitter(obj) {
  if (obj)
    return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
var init_esm2 = __esm({
  "../../wire-talk/node_modules/@socket.io/component-emitter/lib/esm/index.js"() {
    Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
      return this;
    };
    Emitter.prototype.once = function(event, fn) {
      function on() {
        this.off(event, on);
        fn.apply(this, arguments);
      }
      on.fn = fn;
      this.on(event, on);
      return this;
    };
    Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (0 == arguments.length) {
        this._callbacks = {};
        return this;
      }
      var callbacks = this._callbacks["$" + event];
      if (!callbacks)
        return this;
      if (1 == arguments.length) {
        delete this._callbacks["$" + event];
        return this;
      }
      var cb;
      for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      if (callbacks.length === 0) {
        delete this._callbacks["$" + event];
      }
      return this;
    };
    Emitter.prototype.emit = function(event) {
      this._callbacks = this._callbacks || {};
      var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
      if (callbacks) {
        callbacks = callbacks.slice(0);
        for (var i = 0, len = callbacks.length; i < len; ++i) {
          callbacks[i].apply(this, args);
        }
      }
      return this;
    };
    Emitter.prototype.emitReserved = Emitter.prototype.emit;
    Emitter.prototype.listeners = function(event) {
      this._callbacks = this._callbacks || {};
      return this._callbacks["$" + event] || [];
    };
    Emitter.prototype.hasListeners = function(event) {
      return !!this.listeners(event).length;
    };
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/globals.js
var require_globals = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/globals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultBinaryType = exports.globalThisShim = exports.nextTick = void 0;
    exports.createCookieJar = createCookieJar;
    exports.nextTick = (() => {
      const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
      if (isPromiseAvailable) {
        return (cb) => Promise.resolve().then(cb);
      } else {
        return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
      }
    })();
    exports.globalThisShim = (() => {
      if (typeof self !== "undefined") {
        return self;
      } else if (typeof window !== "undefined") {
        return window;
      } else {
        return Function("return this")();
      }
    })();
    exports.defaultBinaryType = "arraybuffer";
    function createCookieJar() {
    }
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/util.js
var require_util = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pick = pick;
    exports.installTimerFunctions = installTimerFunctions;
    exports.byteLength = byteLength;
    exports.randomString = randomString;
    var globals_node_js_1 = require_globals();
    function pick(obj, ...attr) {
      return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
          acc[k] = obj[k];
        }
        return acc;
      }, {});
    }
    var NATIVE_SET_TIMEOUT = globals_node_js_1.globalThisShim.setTimeout;
    var NATIVE_CLEAR_TIMEOUT = globals_node_js_1.globalThisShim.clearTimeout;
    function installTimerFunctions(obj, opts) {
      if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globals_node_js_1.globalThisShim);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globals_node_js_1.globalThisShim);
      } else {
        obj.setTimeoutFn = globals_node_js_1.globalThisShim.setTimeout.bind(globals_node_js_1.globalThisShim);
        obj.clearTimeoutFn = globals_node_js_1.globalThisShim.clearTimeout.bind(globals_node_js_1.globalThisShim);
      }
    }
    var BASE64_OVERHEAD = 1.33;
    function byteLength(obj) {
      if (typeof obj === "string") {
        return utf8Length(obj);
      }
      return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
    }
    function utf8Length(str) {
      let c = 0, length = 0;
      for (let i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 128) {
          length += 1;
        } else if (c < 2048) {
          length += 2;
        } else if (c < 55296 || c >= 57344) {
          length += 3;
        } else {
          i++;
          length += 4;
        }
      }
      return length;
    }
    function randomString() {
      return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
    }
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/contrib/parseqs.js
var require_parseqs = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/contrib/parseqs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.encode = encode;
    exports.decode = decode;
    function encode(obj) {
      let str = "";
      for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (str.length)
            str += "&";
          str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
        }
      }
      return str;
    }
    function decode(qs) {
      let qry = {};
      let pairs = qs.split("&");
      for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split("=");
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }
      return qry;
    }
  }
});

// ../../wire-talk/node_modules/ms/index.js
var require_ms = __commonJS({
  "../../wire-talk/node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// ../../wire-talk/node_modules/engine.io-client/node_modules/debug/src/common.js
var require_common = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/node_modules/debug/src/common.js"(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// ../../wire-talk/node_modules/engine.io-client/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/node_modules/debug/src/browser.js"(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/transport.js
var require_transport = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/transport.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transport = exports.TransportError = void 0;
    var engine_io_parser_1 = require_cjs();
    var component_emitter_1 = (init_esm2(), __toCommonJS(esm_exports2));
    var util_js_1 = require_util();
    var parseqs_js_1 = require_parseqs();
    var debug_1 = __importDefault2(require_browser());
    var debug = (0, debug_1.default)("engine.io-client:transport");
    var TransportError = class extends Error {
      constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
      }
    };
    exports.TransportError = TransportError;
    var Transport = class extends component_emitter_1.Emitter {
      /**
       * Transport abstract constructor.
       *
       * @param {Object} opts - options
       * @protected
       */
      constructor(opts) {
        super();
        this.writable = false;
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
        this.supportsBinary = !opts.forceBase64;
      }
      /**
       * Emits an error.
       *
       * @param {String} reason
       * @param description
       * @param context - the error context
       * @return {Transport} for chaining
       * @protected
       */
      onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
      }
      /**
       * Opens the transport.
       */
      open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
      }
      /**
       * Closes the transport.
       */
      close() {
        if (this.readyState === "opening" || this.readyState === "open") {
          this.doClose();
          this.onClose();
        }
        return this;
      }
      /**
       * Sends multiple packets.
       *
       * @param {Array} packets
       */
      send(packets) {
        if (this.readyState === "open") {
          this.write(packets);
        } else {
          debug("transport is not open, discarding packets");
        }
      }
      /**
       * Called upon open
       *
       * @protected
       */
      onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
      }
      /**
       * Called with data.
       *
       * @param {String} data
       * @protected
       */
      onData(data) {
        const packet = (0, engine_io_parser_1.decodePacket)(data, this.socket.binaryType);
        this.onPacket(packet);
      }
      /**
       * Called with a decoded packet.
       *
       * @protected
       */
      onPacket(packet) {
        super.emitReserved("packet", packet);
      }
      /**
       * Called upon close.
       *
       * @protected
       */
      onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
      }
      /**
       * Pauses the transport, in order not to lose packets during an upgrade.
       *
       * @param onPause
       */
      pause(onPause) {
      }
      createUri(schema, query = {}) {
        return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
      }
      _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
      }
      _port() {
        if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
          return ":" + this.opts.port;
        } else {
          return "";
        }
      }
      _query(query) {
        const encodedQuery = (0, parseqs_js_1.encode)(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
      }
    };
    exports.Transport = Transport;
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/transports/polling.js
var require_polling = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/transports/polling.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Polling = void 0;
    var transport_js_1 = require_transport();
    var util_js_1 = require_util();
    var engine_io_parser_1 = require_cjs();
    var debug_1 = __importDefault2(require_browser());
    var debug = (0, debug_1.default)("engine.io-client:polling");
    var Polling = class extends transport_js_1.Transport {
      constructor() {
        super(...arguments);
        this._polling = false;
      }
      get name() {
        return "polling";
      }
      /**
       * Opens the socket (triggers polling). We write a PING message to determine
       * when the transport is open.
       *
       * @protected
       */
      doOpen() {
        this._poll();
      }
      /**
       * Pauses polling.
       *
       * @param {Function} onPause - callback upon buffers are flushed and transport is paused
       * @package
       */
      pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
          debug("paused");
          this.readyState = "paused";
          onPause();
        };
        if (this._polling || !this.writable) {
          let total = 0;
          if (this._polling) {
            debug("we are currently polling - waiting to pause");
            total++;
            this.once("pollComplete", function() {
              debug("pre-pause polling complete");
              --total || pause();
            });
          }
          if (!this.writable) {
            debug("we are currently writing - waiting to pause");
            total++;
            this.once("drain", function() {
              debug("pre-pause writing complete");
              --total || pause();
            });
          }
        } else {
          pause();
        }
      }
      /**
       * Starts polling cycle.
       *
       * @private
       */
      _poll() {
        debug("polling");
        this._polling = true;
        this.doPoll();
        this.emitReserved("poll");
      }
      /**
       * Overloads onData to detect payloads.
       *
       * @protected
       */
      onData(data) {
        debug("polling got data %s", data);
        const callback = (packet) => {
          if ("opening" === this.readyState && packet.type === "open") {
            this.onOpen();
          }
          if ("close" === packet.type) {
            this.onClose({ description: "transport closed by the server" });
            return false;
          }
          this.onPacket(packet);
        };
        (0, engine_io_parser_1.decodePayload)(data, this.socket.binaryType).forEach(callback);
        if ("closed" !== this.readyState) {
          this._polling = false;
          this.emitReserved("pollComplete");
          if ("open" === this.readyState) {
            this._poll();
          } else {
            debug('ignoring poll - transport state "%s"', this.readyState);
          }
        }
      }
      /**
       * For polling, send a close packet.
       *
       * @protected
       */
      doClose() {
        const close = () => {
          debug("writing close packet");
          this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
          debug("transport open - closing");
          close();
        } else {
          debug("transport not open - deferring close");
          this.once("open", close);
        }
      }
      /**
       * Writes a packets payload.
       *
       * @param {Array} packets - data packets
       * @protected
       */
      write(packets) {
        this.writable = false;
        (0, engine_io_parser_1.encodePayload)(packets, (data) => {
          this.doWrite(data, () => {
            this.writable = true;
            this.emitReserved("drain");
          });
        });
      }
      /**
       * Generates uri for connection.
       *
       * @private
       */
      uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        if (false !== this.opts.timestampRequests) {
          query[this.opts.timestampParam] = (0, util_js_1.randomString)();
        }
        if (!this.supportsBinary && !query.sid) {
          query.b64 = 1;
        }
        return this.createUri(schema, query);
      }
    };
    exports.Polling = Polling;
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/contrib/has-cors.js
var require_has_cors = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/contrib/has-cors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hasCORS = void 0;
    var value = false;
    try {
      value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
    } catch (err) {
    }
    exports.hasCORS = value;
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/transports/polling-xhr.js
var require_polling_xhr = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/transports/polling-xhr.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XHR = exports.Request = exports.BaseXHR = void 0;
    var polling_js_1 = require_polling();
    var component_emitter_1 = (init_esm2(), __toCommonJS(esm_exports2));
    var util_js_1 = require_util();
    var globals_node_js_1 = require_globals();
    var has_cors_js_1 = require_has_cors();
    var debug_1 = __importDefault2(require_browser());
    var debug = (0, debug_1.default)("engine.io-client:polling");
    function empty() {
    }
    var BaseXHR = class extends polling_js_1.Polling {
      /**
       * XHR Polling constructor.
       *
       * @param {Object} opts
       * @package
       */
      constructor(opts) {
        super(opts);
        if (typeof location !== "undefined") {
          const isSSL = "https:" === location.protocol;
          let port = location.port;
          if (!port) {
            port = isSSL ? "443" : "80";
          }
          this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
        }
      }
      /**
       * Sends data.
       *
       * @param {String} data to send.
       * @param {Function} called upon flush.
       * @private
       */
      doWrite(data, fn) {
        const req = this.request({
          method: "POST",
          data
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
          this.onError("xhr post error", xhrStatus, context);
        });
      }
      /**
       * Starts a poll cycle.
       *
       * @private
       */
      doPoll() {
        debug("xhr poll");
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
          this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
      }
    };
    exports.BaseXHR = BaseXHR;
    var Request = class _Request extends component_emitter_1.Emitter {
      /**
       * Request constructor
       *
       * @param {Object} options
       * @package
       */
      constructor(createRequest, uri, opts) {
        super();
        this.createRequest = createRequest;
        (0, util_js_1.installTimerFunctions)(this, opts);
        this._opts = opts;
        this._method = opts.method || "GET";
        this._uri = uri;
        this._data = void 0 !== opts.data ? opts.data : null;
        this._create();
      }
      /**
       * Creates the XHR object and sends the request.
       *
       * @private
       */
      _create() {
        var _a;
        const opts = (0, util_js_1.pick)(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this._opts.xd;
        const xhr = this._xhr = this.createRequest(opts);
        try {
          debug("xhr open %s: %s", this._method, this._uri);
          xhr.open(this._method, this._uri, true);
          try {
            if (this._opts.extraHeaders) {
              xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
              for (let i in this._opts.extraHeaders) {
                if (this._opts.extraHeaders.hasOwnProperty(i)) {
                  xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
                }
              }
            }
          } catch (e) {
          }
          if ("POST" === this._method) {
            try {
              xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (e) {
            }
          }
          try {
            xhr.setRequestHeader("Accept", "*/*");
          } catch (e) {
          }
          (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
          if ("withCredentials" in xhr) {
            xhr.withCredentials = this._opts.withCredentials;
          }
          if (this._opts.requestTimeout) {
            xhr.timeout = this._opts.requestTimeout;
          }
          xhr.onreadystatechange = () => {
            var _a2;
            if (xhr.readyState === 3) {
              (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(
                // @ts-ignore
                xhr.getResponseHeader("set-cookie")
              );
            }
            if (4 !== xhr.readyState)
              return;
            if (200 === xhr.status || 1223 === xhr.status) {
              this._onLoad();
            } else {
              this.setTimeoutFn(() => {
                this._onError(typeof xhr.status === "number" ? xhr.status : 0);
              }, 0);
            }
          };
          debug("xhr data %s", this._data);
          xhr.send(this._data);
        } catch (e) {
          this.setTimeoutFn(() => {
            this._onError(e);
          }, 0);
          return;
        }
        if (typeof document !== "undefined") {
          this._index = _Request.requestsCount++;
          _Request.requests[this._index] = this;
        }
      }
      /**
       * Called upon error.
       *
       * @private
       */
      _onError(err) {
        this.emitReserved("error", err, this._xhr);
        this._cleanup(true);
      }
      /**
       * Cleans up house.
       *
       * @private
       */
      _cleanup(fromError) {
        if ("undefined" === typeof this._xhr || null === this._xhr) {
          return;
        }
        this._xhr.onreadystatechange = empty;
        if (fromError) {
          try {
            this._xhr.abort();
          } catch (e) {
          }
        }
        if (typeof document !== "undefined") {
          delete _Request.requests[this._index];
        }
        this._xhr = null;
      }
      /**
       * Called upon load.
       *
       * @private
       */
      _onLoad() {
        const data = this._xhr.responseText;
        if (data !== null) {
          this.emitReserved("data", data);
          this.emitReserved("success");
          this._cleanup();
        }
      }
      /**
       * Aborts the request.
       *
       * @package
       */
      abort() {
        this._cleanup();
      }
    };
    exports.Request = Request;
    Request.requestsCount = 0;
    Request.requests = {};
    if (typeof document !== "undefined") {
      if (typeof attachEvent === "function") {
        attachEvent("onunload", unloadHandler);
      } else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in globals_node_js_1.globalThisShim ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
      }
    }
    function unloadHandler() {
      for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
          Request.requests[i].abort();
        }
      }
    }
    var hasXHR2 = function() {
      const xhr = newRequest({
        xdomain: false
      });
      return xhr && xhr.responseType !== null;
    }();
    var XHR = class extends BaseXHR {
      constructor(opts) {
        super(opts);
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
      }
      request(opts = {}) {
        Object.assign(opts, { xd: this.xd }, this.opts);
        return new Request(newRequest, this.uri(), opts);
      }
    };
    exports.XHR = XHR;
    function newRequest(opts) {
      const xdomain = opts.xdomain;
      try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || has_cors_js_1.hasCORS)) {
          return new XMLHttpRequest();
        }
      } catch (e) {
      }
      if (!xdomain) {
        try {
          return new globals_node_js_1.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (e) {
        }
      }
    }
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/transports/websocket.js
var require_websocket = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/transports/websocket.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WS = exports.BaseWS = void 0;
    var transport_js_1 = require_transport();
    var util_js_1 = require_util();
    var engine_io_parser_1 = require_cjs();
    var globals_node_js_1 = require_globals();
    var debug_1 = __importDefault2(require_browser());
    var debug = (0, debug_1.default)("engine.io-client:websocket");
    var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
    var BaseWS = class extends transport_js_1.Transport {
      get name() {
        return "websocket";
      }
      doOpen() {
        const uri = this.uri();
        const protocols = this.opts.protocols;
        const opts = isReactNative ? {} : (0, util_js_1.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
          opts.headers = this.opts.extraHeaders;
        }
        try {
          this.ws = this.createSocket(uri, protocols, opts);
        } catch (err) {
          return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
      }
      /**
       * Adds event listeners to the socket
       *
       * @private
       */
      addEventListeners() {
        this.ws.onopen = () => {
          if (this.opts.autoUnref) {
            this.ws._socket.unref();
          }
          this.onOpen();
        };
        this.ws.onclose = (closeEvent) => this.onClose({
          description: "websocket connection closed",
          context: closeEvent
        });
        this.ws.onmessage = (ev) => this.onData(ev.data);
        this.ws.onerror = (e) => this.onError("websocket error", e);
      }
      write(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
          const packet = packets[i];
          const lastPacket = i === packets.length - 1;
          (0, engine_io_parser_1.encodePacket)(packet, this.supportsBinary, (data) => {
            try {
              this.doWrite(packet, data);
            } catch (e) {
              debug("websocket closed before onclose event");
            }
            if (lastPacket) {
              (0, globals_node_js_1.nextTick)(() => {
                this.writable = true;
                this.emitReserved("drain");
              }, this.setTimeoutFn);
            }
          });
        }
      }
      doClose() {
        if (typeof this.ws !== "undefined") {
          this.ws.onerror = () => {
          };
          this.ws.close();
          this.ws = null;
        }
      }
      /**
       * Generates uri for connection.
       *
       * @private
       */
      uri() {
        const schema = this.opts.secure ? "wss" : "ws";
        const query = this.query || {};
        if (this.opts.timestampRequests) {
          query[this.opts.timestampParam] = (0, util_js_1.randomString)();
        }
        if (!this.supportsBinary) {
          query.b64 = 1;
        }
        return this.createUri(schema, query);
      }
    };
    exports.BaseWS = BaseWS;
    var WebSocketCtor = globals_node_js_1.globalThisShim.WebSocket || globals_node_js_1.globalThisShim.MozWebSocket;
    var WS = class extends BaseWS {
      createSocket(uri, protocols, opts) {
        return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
      }
      doWrite(_packet, data) {
        this.ws.send(data);
      }
    };
    exports.WS = WS;
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/transports/webtransport.js
var require_webtransport = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/transports/webtransport.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WT = void 0;
    var transport_js_1 = require_transport();
    var globals_node_js_1 = require_globals();
    var engine_io_parser_1 = require_cjs();
    var debug_1 = __importDefault2(require_browser());
    var debug = (0, debug_1.default)("engine.io-client:webtransport");
    var WT = class extends transport_js_1.Transport {
      get name() {
        return "webtransport";
      }
      doOpen() {
        try {
          this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        } catch (err) {
          return this.emitReserved("error", err);
        }
        this._transport.closed.then(() => {
          debug("transport closed gracefully");
          this.onClose();
        }).catch((err) => {
          debug("transport closed due to %s", err);
          this.onError("webtransport error", err);
        });
        this._transport.ready.then(() => {
          this._transport.createBidirectionalStream().then((stream) => {
            const decoderStream = (0, engine_io_parser_1.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
            const reader = stream.readable.pipeThrough(decoderStream).getReader();
            const encoderStream = (0, engine_io_parser_1.createPacketEncoderStream)();
            encoderStream.readable.pipeTo(stream.writable);
            this._writer = encoderStream.writable.getWriter();
            const read = () => {
              reader.read().then(({ done, value }) => {
                if (done) {
                  debug("session is closed");
                  return;
                }
                debug("received chunk: %o", value);
                this.onPacket(value);
                read();
              }).catch((err) => {
                debug("an error occurred while reading: %s", err);
              });
            };
            read();
            const packet = { type: "open" };
            if (this.query.sid) {
              packet.data = `{"sid":"${this.query.sid}"}`;
            }
            this._writer.write(packet).then(() => this.onOpen());
          });
        });
      }
      write(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
          const packet = packets[i];
          const lastPacket = i === packets.length - 1;
          this._writer.write(packet).then(() => {
            if (lastPacket) {
              (0, globals_node_js_1.nextTick)(() => {
                this.writable = true;
                this.emitReserved("drain");
              }, this.setTimeoutFn);
            }
          });
        }
      }
      doClose() {
        var _a;
        (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
      }
    };
    exports.WT = WT;
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/transports/index.js
var require_transports = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/transports/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transports = void 0;
    var polling_xhr_node_js_1 = require_polling_xhr();
    var websocket_node_js_1 = require_websocket();
    var webtransport_js_1 = require_webtransport();
    exports.transports = {
      websocket: websocket_node_js_1.WS,
      webtransport: webtransport_js_1.WT,
      polling: polling_xhr_node_js_1.XHR
    };
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/contrib/parseuri.js
var require_parseuri = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/contrib/parseuri.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = parse;
    var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var parts = [
      "source",
      "protocol",
      "authority",
      "userInfo",
      "user",
      "password",
      "host",
      "port",
      "relative",
      "path",
      "directory",
      "file",
      "query",
      "anchor"
    ];
    function parse(str) {
      if (str.length > 8e3) {
        throw "URI too long";
      }
      const src = str, b = str.indexOf("["), e = str.indexOf("]");
      if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
      }
      let m = re.exec(str || ""), uri = {}, i = 14;
      while (i--) {
        uri[parts[i]] = m[i] || "";
      }
      if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
        uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
        uri.ipv6uri = true;
      }
      uri.pathNames = pathNames(uri, uri["path"]);
      uri.queryKey = queryKey(uri, uri["query"]);
      return uri;
    }
    function pathNames(obj, path) {
      const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
      if (path.slice(0, 1) == "/" || path.length === 0) {
        names.splice(0, 1);
      }
      if (path.slice(-1) == "/") {
        names.splice(names.length - 1, 1);
      }
      return names;
    }
    function queryKey(uri, query) {
      const data = {};
      query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) {
          data[$1] = $2;
        }
      });
      return data;
    }
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/socket.js
var require_socket = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/socket.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Socket = exports.SocketWithUpgrade = exports.SocketWithoutUpgrade = void 0;
    var index_js_1 = require_transports();
    var util_js_1 = require_util();
    var parseqs_js_1 = require_parseqs();
    var parseuri_js_1 = require_parseuri();
    var component_emitter_1 = (init_esm2(), __toCommonJS(esm_exports2));
    var engine_io_parser_1 = require_cjs();
    var globals_node_js_1 = require_globals();
    var debug_1 = __importDefault2(require_browser());
    var debug = (0, debug_1.default)("engine.io-client:socket");
    var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
    var OFFLINE_EVENT_LISTENERS = [];
    if (withEventListeners) {
      addEventListener("offline", () => {
        debug("closing %d connection(s) because the network was lost", OFFLINE_EVENT_LISTENERS.length);
        OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
      }, false);
    }
    var SocketWithoutUpgrade = class _SocketWithoutUpgrade extends component_emitter_1.Emitter {
      /**
       * Socket constructor.
       *
       * @param {String|Object} uri - uri or options
       * @param {Object} opts - options
       */
      constructor(uri, opts) {
        super();
        this.binaryType = globals_node_js_1.defaultBinaryType;
        this.writeBuffer = [];
        this._prevBufferLen = 0;
        this._pingInterval = -1;
        this._pingTimeout = -1;
        this._maxPayload = -1;
        this._pingTimeoutTime = Infinity;
        if (uri && "object" === typeof uri) {
          opts = uri;
          uri = null;
        }
        if (uri) {
          const parsedUri = (0, parseuri_js_1.parse)(uri);
          opts.hostname = parsedUri.host;
          opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
          opts.port = parsedUri.port;
          if (parsedUri.query)
            opts.query = parsedUri.query;
        } else if (opts.host) {
          opts.hostname = (0, parseuri_js_1.parse)(opts.host).host;
        }
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
          opts.port = this.secure ? "443" : "80";
        }
        this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
        this.transports = [];
        this._transportsByName = {};
        opts.transports.forEach((t) => {
          const transportName = t.prototype.name;
          this.transports.push(transportName);
          this._transportsByName[transportName] = t;
        });
        this.opts = Object.assign({
          path: "/engine.io",
          agent: false,
          withCredentials: false,
          upgrade: true,
          timestampParam: "t",
          rememberUpgrade: false,
          addTrailingSlash: true,
          rejectUnauthorized: true,
          perMessageDeflate: {
            threshold: 1024
          },
          transportOptions: {},
          closeOnBeforeunload: false
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") {
          this.opts.query = (0, parseqs_js_1.decode)(this.opts.query);
        }
        if (withEventListeners) {
          if (this.opts.closeOnBeforeunload) {
            this._beforeunloadEventListener = () => {
              if (this.transport) {
                this.transport.removeAllListeners();
                this.transport.close();
              }
            };
            addEventListener("beforeunload", this._beforeunloadEventListener, false);
          }
          if (this.hostname !== "localhost") {
            debug("adding listener for the 'offline' event");
            this._offlineEventListener = () => {
              this._onClose("transport close", {
                description: "network connection lost"
              });
            };
            OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
          }
        }
        if (this.opts.withCredentials) {
          this._cookieJar = (0, globals_node_js_1.createCookieJar)();
        }
        this._open();
      }
      /**
       * Creates transport of the given type.
       *
       * @param {String} name - transport name
       * @return {Transport}
       * @private
       */
      createTransport(name) {
        debug('creating transport "%s"', name);
        const query = Object.assign({}, this.opts.query);
        query.EIO = engine_io_parser_1.protocol;
        query.transport = name;
        if (this.id)
          query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
          query,
          socket: this,
          hostname: this.hostname,
          secure: this.secure,
          port: this.port
        }, this.opts.transportOptions[name]);
        debug("options: %j", opts);
        return new this._transportsByName[name](opts);
      }
      /**
       * Initializes transport to use and starts probe.
       *
       * @private
       */
      _open() {
        if (this.transports.length === 0) {
          this.setTimeoutFn(() => {
            this.emitReserved("error", "No transports available");
          }, 0);
          return;
        }
        const transportName = this.opts.rememberUpgrade && _SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const transport = this.createTransport(transportName);
        transport.open();
        this.setTransport(transport);
      }
      /**
       * Sets the current transport. Disables the existing one (if any).
       *
       * @private
       */
      setTransport(transport) {
        debug("setting transport %s", transport.name);
        if (this.transport) {
          debug("clearing existing transport %s", this.transport.name);
          this.transport.removeAllListeners();
        }
        this.transport = transport;
        transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason) => this._onClose("transport close", reason));
      }
      /**
       * Called when connection is deemed open.
       *
       * @private
       */
      onOpen() {
        debug("socket open");
        this.readyState = "open";
        _SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
      }
      /**
       * Handles a packet.
       *
       * @private
       */
      _onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
          this.emitReserved("packet", packet);
          this.emitReserved("heartbeat");
          switch (packet.type) {
            case "open":
              this.onHandshake(JSON.parse(packet.data));
              break;
            case "ping":
              this._sendPacket("pong");
              this.emitReserved("ping");
              this.emitReserved("pong");
              this._resetPingTimeout();
              break;
            case "error":
              const err = new Error("server error");
              err.code = packet.data;
              this._onError(err);
              break;
            case "message":
              this.emitReserved("data", packet.data);
              this.emitReserved("message", packet.data);
              break;
          }
        } else {
          debug('packet received with socket readyState "%s"', this.readyState);
        }
      }
      /**
       * Called upon handshake completion.
       *
       * @param {Object} data - handshake obj
       * @private
       */
      onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this._pingInterval = data.pingInterval;
        this._pingTimeout = data.pingTimeout;
        this._maxPayload = data.maxPayload;
        this.onOpen();
        if ("closed" === this.readyState)
          return;
        this._resetPingTimeout();
      }
      /**
       * Sets and resets ping timeout timer based on server pings.
       *
       * @private
       */
      _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const delay = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + delay;
        this._pingTimeoutTimer = this.setTimeoutFn(() => {
          this._onClose("ping timeout");
        }, delay);
        if (this.opts.autoUnref) {
          this._pingTimeoutTimer.unref();
        }
      }
      /**
       * Called on `drain` event
       *
       * @private
       */
      _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen);
        this._prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
          this.emitReserved("drain");
        } else {
          this.flush();
        }
      }
      /**
       * Flush write buffers.
       *
       * @private
       */
      flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
          const packets = this._getWritablePackets();
          debug("flushing %d packets in socket", packets.length);
          this.transport.send(packets);
          this._prevBufferLen = packets.length;
          this.emitReserved("flush");
        }
      }
      /**
       * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
       * long-polling)
       *
       * @private
       */
      _getWritablePackets() {
        const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
          return this.writeBuffer;
        }
        let payloadSize = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
          const data = this.writeBuffer[i].data;
          if (data) {
            payloadSize += (0, util_js_1.byteLength)(data);
          }
          if (i > 0 && payloadSize > this._maxPayload) {
            debug("only send %d out of %d packets", i, this.writeBuffer.length);
            return this.writeBuffer.slice(0, i);
          }
          payloadSize += 2;
        }
        debug("payload size is %d (max: %d)", payloadSize, this._maxPayload);
        return this.writeBuffer;
      }
      /**
       * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
       *
       * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
       * `write()` method then the message would not be buffered by the Socket.IO client.
       *
       * @return {boolean}
       * @private
       */
      /* private */
      _hasPingExpired() {
        if (!this._pingTimeoutTime)
          return true;
        const hasExpired = Date.now() > this._pingTimeoutTime;
        if (hasExpired) {
          debug("throttled timer detected, scheduling connection close");
          this._pingTimeoutTime = 0;
          (0, globals_node_js_1.nextTick)(() => {
            this._onClose("ping timeout");
          }, this.setTimeoutFn);
        }
        return hasExpired;
      }
      /**
       * Sends a message.
       *
       * @param {String} msg - message.
       * @param {Object} options.
       * @param {Function} fn - callback function.
       * @return {Socket} for chaining.
       */
      write(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
      }
      /**
       * Sends a message. Alias of {@link Socket#write}.
       *
       * @param {String} msg - message.
       * @param {Object} options.
       * @param {Function} fn - callback function.
       * @return {Socket} for chaining.
       */
      send(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
      }
      /**
       * Sends a packet.
       *
       * @param {String} type: packet type.
       * @param {String} data.
       * @param {Object} options.
       * @param {Function} fn - callback function.
       * @private
       */
      _sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
          fn = data;
          data = void 0;
        }
        if ("function" === typeof options) {
          fn = options;
          options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
          return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
          type,
          data,
          options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
          this.once("flush", fn);
        this.flush();
      }
      /**
       * Closes the connection.
       */
      close() {
        const close = () => {
          this._onClose("forced close");
          debug("socket closing - telling transport to close");
          this.transport.close();
        };
        const cleanupAndClose = () => {
          this.off("upgrade", cleanupAndClose);
          this.off("upgradeError", cleanupAndClose);
          close();
        };
        const waitForUpgrade = () => {
          this.once("upgrade", cleanupAndClose);
          this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
          this.readyState = "closing";
          if (this.writeBuffer.length) {
            this.once("drain", () => {
              if (this.upgrading) {
                waitForUpgrade();
              } else {
                close();
              }
            });
          } else if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        }
        return this;
      }
      /**
       * Called upon transport error
       *
       * @private
       */
      _onError(err) {
        debug("socket error %j", err);
        _SocketWithoutUpgrade.priorWebsocketSuccess = false;
        if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
          debug("trying next transport");
          this.transports.shift();
          return this._open();
        }
        this.emitReserved("error", err);
        this._onClose("transport error", err);
      }
      /**
       * Called upon transport close.
       *
       * @private
       */
      _onClose(reason, description) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          debug('socket close with reason: "%s"', reason);
          this.clearTimeoutFn(this._pingTimeoutTimer);
          this.transport.removeAllListeners("close");
          this.transport.close();
          this.transport.removeAllListeners();
          if (withEventListeners) {
            if (this._beforeunloadEventListener) {
              removeEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this._offlineEventListener) {
              const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
              if (i !== -1) {
                debug("removing listener for the 'offline' event");
                OFFLINE_EVENT_LISTENERS.splice(i, 1);
              }
            }
          }
          this.readyState = "closed";
          this.id = null;
          this.emitReserved("close", reason, description);
          this.writeBuffer = [];
          this._prevBufferLen = 0;
        }
      }
    };
    exports.SocketWithoutUpgrade = SocketWithoutUpgrade;
    SocketWithoutUpgrade.protocol = engine_io_parser_1.protocol;
    var SocketWithUpgrade = class extends SocketWithoutUpgrade {
      constructor() {
        super(...arguments);
        this._upgrades = [];
      }
      onOpen() {
        super.onOpen();
        if ("open" === this.readyState && this.opts.upgrade) {
          debug("starting upgrade probes");
          for (let i = 0; i < this._upgrades.length; i++) {
            this._probe(this._upgrades[i]);
          }
        }
      }
      /**
       * Probes a transport.
       *
       * @param {String} name - transport name
       * @private
       */
      _probe(name) {
        debug('probing transport "%s"', name);
        let transport = this.createTransport(name);
        let failed = false;
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
          if (failed)
            return;
          debug('probe transport "%s" opened', name);
          transport.send([{ type: "ping", data: "probe" }]);
          transport.once("packet", (msg) => {
            if (failed)
              return;
            if ("pong" === msg.type && "probe" === msg.data) {
              debug('probe transport "%s" pong', name);
              this.upgrading = true;
              this.emitReserved("upgrading", transport);
              if (!transport)
                return;
              SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
              debug('pausing current transport "%s"', this.transport.name);
              this.transport.pause(() => {
                if (failed)
                  return;
                if ("closed" === this.readyState)
                  return;
                debug("changing transport and sending upgrade packet");
                cleanup();
                this.setTransport(transport);
                transport.send([{ type: "upgrade" }]);
                this.emitReserved("upgrade", transport);
                transport = null;
                this.upgrading = false;
                this.flush();
              });
            } else {
              debug('probe transport "%s" failed', name);
              const err = new Error("probe error");
              err.transport = transport.name;
              this.emitReserved("upgradeError", err);
            }
          });
        };
        function freezeTransport() {
          if (failed)
            return;
          failed = true;
          cleanup();
          transport.close();
          transport = null;
        }
        const onerror = (err) => {
          const error = new Error("probe error: " + err);
          error.transport = transport.name;
          freezeTransport();
          debug('probe transport "%s" failed because of error: %s', name, err);
          this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
          onerror("transport closed");
        }
        function onclose() {
          onerror("socket closed");
        }
        function onupgrade(to) {
          if (transport && to.name !== transport.name) {
            debug('"%s" works - aborting "%s"', to.name, transport.name);
            freezeTransport();
          }
        }
        const cleanup = () => {
          transport.removeListener("open", onTransportOpen);
          transport.removeListener("error", onerror);
          transport.removeListener("close", onTransportClose);
          this.off("close", onclose);
          this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
          this.setTimeoutFn(() => {
            if (!failed) {
              transport.open();
            }
          }, 200);
        } else {
          transport.open();
        }
      }
      onHandshake(data) {
        this._upgrades = this._filterUpgrades(data.upgrades);
        super.onHandshake(data);
      }
      /**
       * Filters upgrades, returning only those matching client transports.
       *
       * @param {Array} upgrades - server upgrades
       * @private
       */
      _filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        for (let i = 0; i < upgrades.length; i++) {
          if (~this.transports.indexOf(upgrades[i]))
            filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
      }
    };
    exports.SocketWithUpgrade = SocketWithUpgrade;
    var Socket = class extends SocketWithUpgrade {
      constructor(uri, opts = {}) {
        const o = typeof uri === "object" ? uri : opts;
        if (!o.transports || o.transports && typeof o.transports[0] === "string") {
          o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map((transportName) => index_js_1.transports[transportName]).filter((t) => !!t);
        }
        super(uri, o);
      }
    };
    exports.Socket = Socket;
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/transports/polling-fetch.js
var require_polling_fetch = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/transports/polling-fetch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Fetch = void 0;
    var polling_js_1 = require_polling();
    var Fetch = class extends polling_js_1.Polling {
      doPoll() {
        this._fetch().then((res) => {
          if (!res.ok) {
            return this.onError("fetch read error", res.status, res);
          }
          res.text().then((data) => this.onData(data));
        }).catch((err) => {
          this.onError("fetch read error", err);
        });
      }
      doWrite(data, callback) {
        this._fetch(data).then((res) => {
          if (!res.ok) {
            return this.onError("fetch write error", res.status, res);
          }
          callback();
        }).catch((err) => {
          this.onError("fetch write error", err);
        });
      }
      _fetch(data) {
        var _a;
        const isPost = data !== void 0;
        const headers = new Headers(this.opts.extraHeaders);
        if (isPost) {
          headers.set("content-type", "text/plain;charset=UTF-8");
        }
        (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.appendCookies(headers);
        return fetch(this.uri(), {
          method: isPost ? "POST" : "GET",
          body: isPost ? data : null,
          headers,
          credentials: this.opts.withCredentials ? "include" : "omit"
        }).then((res) => {
          var _a2;
          (_a2 = this.socket._cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(res.headers.getSetCookie());
          return res;
        });
      }
    };
    exports.Fetch = Fetch;
  }
});

// ../../wire-talk/node_modules/engine.io-client/build/cjs/index.js
var require_cjs2 = __commonJS({
  "../../wire-talk/node_modules/engine.io-client/build/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebTransport = exports.WebSocket = exports.NodeWebSocket = exports.XHR = exports.NodeXHR = exports.Fetch = exports.nextTick = exports.parse = exports.installTimerFunctions = exports.transports = exports.TransportError = exports.Transport = exports.protocol = exports.SocketWithUpgrade = exports.SocketWithoutUpgrade = exports.Socket = void 0;
    var socket_js_1 = require_socket();
    Object.defineProperty(exports, "Socket", { enumerable: true, get: function() {
      return socket_js_1.Socket;
    } });
    var socket_js_2 = require_socket();
    Object.defineProperty(exports, "SocketWithoutUpgrade", { enumerable: true, get: function() {
      return socket_js_2.SocketWithoutUpgrade;
    } });
    Object.defineProperty(exports, "SocketWithUpgrade", { enumerable: true, get: function() {
      return socket_js_2.SocketWithUpgrade;
    } });
    exports.protocol = socket_js_1.Socket.protocol;
    var transport_js_1 = require_transport();
    Object.defineProperty(exports, "Transport", { enumerable: true, get: function() {
      return transport_js_1.Transport;
    } });
    Object.defineProperty(exports, "TransportError", { enumerable: true, get: function() {
      return transport_js_1.TransportError;
    } });
    var index_js_1 = require_transports();
    Object.defineProperty(exports, "transports", { enumerable: true, get: function() {
      return index_js_1.transports;
    } });
    var util_js_1 = require_util();
    Object.defineProperty(exports, "installTimerFunctions", { enumerable: true, get: function() {
      return util_js_1.installTimerFunctions;
    } });
    var parseuri_js_1 = require_parseuri();
    Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
      return parseuri_js_1.parse;
    } });
    var globals_node_js_1 = require_globals();
    Object.defineProperty(exports, "nextTick", { enumerable: true, get: function() {
      return globals_node_js_1.nextTick;
    } });
    var polling_fetch_js_1 = require_polling_fetch();
    Object.defineProperty(exports, "Fetch", { enumerable: true, get: function() {
      return polling_fetch_js_1.Fetch;
    } });
    var polling_xhr_node_js_1 = require_polling_xhr();
    Object.defineProperty(exports, "NodeXHR", { enumerable: true, get: function() {
      return polling_xhr_node_js_1.XHR;
    } });
    var polling_xhr_js_1 = require_polling_xhr();
    Object.defineProperty(exports, "XHR", { enumerable: true, get: function() {
      return polling_xhr_js_1.XHR;
    } });
    var websocket_node_js_1 = require_websocket();
    Object.defineProperty(exports, "NodeWebSocket", { enumerable: true, get: function() {
      return websocket_node_js_1.WS;
    } });
    var websocket_js_1 = require_websocket();
    Object.defineProperty(exports, "WebSocket", { enumerable: true, get: function() {
      return websocket_js_1.WS;
    } });
    var webtransport_js_1 = require_webtransport();
    Object.defineProperty(exports, "WebTransport", { enumerable: true, get: function() {
      return webtransport_js_1.WT;
    } });
  }
});

// ../../wire-talk/node_modules/socket.io-client/node_modules/debug/src/common.js
var require_common2 = __commonJS({
  "../../wire-talk/node_modules/socket.io-client/node_modules/debug/src/common.js"(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// ../../wire-talk/node_modules/socket.io-client/node_modules/debug/src/browser.js
var require_browser2 = __commonJS({
  "../../wire-talk/node_modules/socket.io-client/node_modules/debug/src/browser.js"(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common2()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// ../../wire-talk/node_modules/socket.io-client/build/cjs/url.js
var require_url = __commonJS({
  "../../wire-talk/node_modules/socket.io-client/build/cjs/url.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.url = url;
    var engine_io_client_1 = require_cjs2();
    var debug_1 = __importDefault2(require_browser2());
    var debug = (0, debug_1.default)("socket.io-client:url");
    function url(uri, path = "", loc) {
      let obj = uri;
      loc = loc || typeof location !== "undefined" && location;
      if (null == uri)
        uri = loc.protocol + "//" + loc.host;
      if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
          if ("/" === uri.charAt(1)) {
            uri = loc.protocol + uri;
          } else {
            uri = loc.host + uri;
          }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
          debug("protocol-less url %s", uri);
          if ("undefined" !== typeof loc) {
            uri = loc.protocol + "//" + uri;
          } else {
            uri = "https://" + uri;
          }
        }
        debug("parse %s", uri);
        obj = (0, engine_io_client_1.parse)(uri);
      }
      if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
          obj.port = "80";
        } else if (/^(http|ws)s$/.test(obj.protocol)) {
          obj.port = "443";
        }
      }
      obj.path = obj.path || "/";
      const ipv6 = obj.host.indexOf(":") !== -1;
      const host = ipv6 ? "[" + obj.host + "]" : obj.host;
      obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
      obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
      return obj;
    }
  }
});

// ../../wire-talk/node_modules/socket.io-parser/build/cjs/is-binary.js
var require_is_binary = __commonJS({
  "../../wire-talk/node_modules/socket.io-parser/build/cjs/is-binary.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hasBinary = exports.isBinary = void 0;
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";
    var isView = (obj) => {
      return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
    };
    var toString = Object.prototype.toString;
    var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
    var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
    function isBinary(obj) {
      return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
    }
    exports.isBinary = isBinary;
    function hasBinary(obj, toJSON) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
          if (hasBinary(obj[i])) {
            return true;
          }
        }
        return false;
      }
      if (isBinary(obj)) {
        return true;
      }
      if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
      }
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
          return true;
        }
      }
      return false;
    }
    exports.hasBinary = hasBinary;
  }
});

// ../../wire-talk/node_modules/socket.io-parser/build/cjs/binary.js
var require_binary = __commonJS({
  "../../wire-talk/node_modules/socket.io-parser/build/cjs/binary.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reconstructPacket = exports.deconstructPacket = void 0;
    var is_binary_js_1 = require_is_binary();
    function deconstructPacket(packet) {
      const buffers = [];
      const packetData = packet.data;
      const pack = packet;
      pack.data = _deconstructPacket(packetData, buffers);
      pack.attachments = buffers.length;
      return { packet: pack, buffers };
    }
    exports.deconstructPacket = deconstructPacket;
    function _deconstructPacket(data, buffers) {
      if (!data)
        return data;
      if ((0, is_binary_js_1.isBinary)(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
      } else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
          newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
      } else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            newData[key] = _deconstructPacket(data[key], buffers);
          }
        }
        return newData;
      }
      return data;
    }
    function reconstructPacket(packet, buffers) {
      packet.data = _reconstructPacket(packet.data, buffers);
      delete packet.attachments;
      return packet;
    }
    exports.reconstructPacket = reconstructPacket;
    function _reconstructPacket(data, buffers) {
      if (!data)
        return data;
      if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
        if (isIndexValid) {
          return buffers[data.num];
        } else {
          throw new Error("illegal attachments");
        }
      } else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          data[i] = _reconstructPacket(data[i], buffers);
        }
      } else if (typeof data === "object") {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            data[key] = _reconstructPacket(data[key], buffers);
          }
        }
      }
      return data;
    }
  }
});

// ../../wire-talk/node_modules/socket.io-parser/node_modules/debug/src/common.js
var require_common3 = __commonJS({
  "../../wire-talk/node_modules/socket.io-parser/node_modules/debug/src/common.js"(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// ../../wire-talk/node_modules/socket.io-parser/node_modules/debug/src/browser.js
var require_browser3 = __commonJS({
  "../../wire-talk/node_modules/socket.io-parser/node_modules/debug/src/browser.js"(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common3()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// ../../wire-talk/node_modules/socket.io-parser/build/cjs/index.js
var require_cjs3 = __commonJS({
  "../../wire-talk/node_modules/socket.io-parser/build/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
    var component_emitter_1 = (init_esm2(), __toCommonJS(esm_exports2));
    var binary_js_1 = require_binary();
    var is_binary_js_1 = require_is_binary();
    var debug_1 = require_browser3();
    var debug = (0, debug_1.default)("socket.io-parser");
    var RESERVED_EVENTS = [
      "connect",
      "connect_error",
      "disconnect",
      "disconnecting",
      "newListener",
      "removeListener"
      // used by the Node.js EventEmitter
    ];
    exports.protocol = 5;
    var PacketType;
    (function(PacketType2) {
      PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
      PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
      PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
      PacketType2[PacketType2["ACK"] = 3] = "ACK";
      PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
      PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
      PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
    })(PacketType = exports.PacketType || (exports.PacketType = {}));
    var Encoder = class {
      /**
       * Encoder constructor
       *
       * @param {function} replacer - custom replacer to pass down to JSON.parse
       */
      constructor(replacer) {
        this.replacer = replacer;
      }
      /**
       * Encode a packet as a single string if non-binary, or as a
       * buffer sequence, depending on packet type.
       *
       * @param {Object} obj - packet object
       */
      encode(obj) {
        debug("encoding packet %j", obj);
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
          if ((0, is_binary_js_1.hasBinary)(obj)) {
            return this.encodeAsBinary({
              type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
              nsp: obj.nsp,
              data: obj.data,
              id: obj.id
            });
          }
        }
        return [this.encodeAsString(obj)];
      }
      /**
       * Encode packet as string.
       */
      encodeAsString(obj) {
        let str = "" + obj.type;
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
          str += obj.attachments + "-";
        }
        if (obj.nsp && "/" !== obj.nsp) {
          str += obj.nsp + ",";
        }
        if (null != obj.id) {
          str += obj.id;
        }
        if (null != obj.data) {
          str += JSON.stringify(obj.data, this.replacer);
        }
        debug("encoded %j as %s", obj, str);
        return str;
      }
      /**
       * Encode packet as 'buffer sequence' by removing blobs, and
       * deconstructing packet into object with placeholders and
       * a list of buffers.
       */
      encodeAsBinary(obj) {
        const deconstruction = (0, binary_js_1.deconstructPacket)(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack);
        return buffers;
      }
    };
    exports.Encoder = Encoder;
    function isObject(value) {
      return Object.prototype.toString.call(value) === "[object Object]";
    }
    var Decoder = class _Decoder extends component_emitter_1.Emitter {
      /**
       * Decoder constructor
       *
       * @param {function} reviver - custom reviver to pass down to JSON.stringify
       */
      constructor(reviver) {
        super();
        this.reviver = reviver;
      }
      /**
       * Decodes an encoded packet string into packet JSON.
       *
       * @param {String} obj - encoded packet
       */
      add(obj) {
        let packet;
        if (typeof obj === "string") {
          if (this.reconstructor) {
            throw new Error("got plaintext data when reconstructing a packet");
          }
          packet = this.decodeString(obj);
          const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
          if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
            packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
            this.reconstructor = new BinaryReconstructor(packet);
            if (packet.attachments === 0) {
              super.emitReserved("decoded", packet);
            }
          } else {
            super.emitReserved("decoded", packet);
          }
        } else if ((0, is_binary_js_1.isBinary)(obj) || obj.base64) {
          if (!this.reconstructor) {
            throw new Error("got binary data when not reconstructing a packet");
          } else {
            packet = this.reconstructor.takeBinaryData(obj);
            if (packet) {
              this.reconstructor = null;
              super.emitReserved("decoded", packet);
            }
          }
        } else {
          throw new Error("Unknown type: " + obj);
        }
      }
      /**
       * Decode a packet String (JSON data)
       *
       * @param {String} str
       * @return {Object} packet
       */
      decodeString(str) {
        let i = 0;
        const p = {
          type: Number(str.charAt(0))
        };
        if (PacketType[p.type] === void 0) {
          throw new Error("unknown packet type " + p.type);
        }
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
          const start = i + 1;
          while (str.charAt(++i) !== "-" && i != str.length) {
          }
          const buf = str.substring(start, i);
          if (buf != Number(buf) || str.charAt(i) !== "-") {
            throw new Error("Illegal attachments");
          }
          p.attachments = Number(buf);
        }
        if ("/" === str.charAt(i + 1)) {
          const start = i + 1;
          while (++i) {
            const c = str.charAt(i);
            if ("," === c)
              break;
            if (i === str.length)
              break;
          }
          p.nsp = str.substring(start, i);
        } else {
          p.nsp = "/";
        }
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
          const start = i + 1;
          while (++i) {
            const c = str.charAt(i);
            if (null == c || Number(c) != c) {
              --i;
              break;
            }
            if (i === str.length)
              break;
          }
          p.id = Number(str.substring(start, i + 1));
        }
        if (str.charAt(++i)) {
          const payload = this.tryParse(str.substr(i));
          if (_Decoder.isPayloadValid(p.type, payload)) {
            p.data = payload;
          } else {
            throw new Error("invalid payload");
          }
        }
        debug("decoded %s as %j", str, p);
        return p;
      }
      tryParse(str) {
        try {
          return JSON.parse(str, this.reviver);
        } catch (e) {
          return false;
        }
      }
      static isPayloadValid(type, payload) {
        switch (type) {
          case PacketType.CONNECT:
            return isObject(payload);
          case PacketType.DISCONNECT:
            return payload === void 0;
          case PacketType.CONNECT_ERROR:
            return typeof payload === "string" || isObject(payload);
          case PacketType.EVENT:
          case PacketType.BINARY_EVENT:
            return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
          case PacketType.ACK:
          case PacketType.BINARY_ACK:
            return Array.isArray(payload);
        }
      }
      /**
       * Deallocates a parser's resources
       */
      destroy() {
        if (this.reconstructor) {
          this.reconstructor.finishedReconstruction();
          this.reconstructor = null;
        }
      }
    };
    exports.Decoder = Decoder;
    var BinaryReconstructor = class {
      constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
      }
      /**
       * Method to be called when binary data received from connection
       * after a BINARY_EVENT packet.
       *
       * @param {Buffer | ArrayBuffer} binData - the raw binary data received
       * @return {null | Object} returns null if more binary data is expected or
       *   a reconstructed packet object if all buffers have been received.
       */
      takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
          const packet = (0, binary_js_1.reconstructPacket)(this.reconPack, this.buffers);
          this.finishedReconstruction();
          return packet;
        }
        return null;
      }
      /**
       * Cleans up binary packet reconstruction variables.
       */
      finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
      }
    };
  }
});

// ../../wire-talk/node_modules/socket.io-client/build/cjs/on.js
var require_on = __commonJS({
  "../../wire-talk/node_modules/socket.io-client/build/cjs/on.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.on = on;
    function on(obj, ev, fn) {
      obj.on(ev, fn);
      return function subDestroy() {
        obj.off(ev, fn);
      };
    }
  }
});

// ../../wire-talk/node_modules/socket.io-client/build/cjs/socket.js
var require_socket2 = __commonJS({
  "../../wire-talk/node_modules/socket.io-client/build/cjs/socket.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Socket = void 0;
    var socket_io_parser_1 = require_cjs3();
    var on_js_1 = require_on();
    var component_emitter_1 = (init_esm2(), __toCommonJS(esm_exports2));
    var debug_1 = __importDefault2(require_browser2());
    var debug = (0, debug_1.default)("socket.io-client:socket");
    var RESERVED_EVENTS = Object.freeze({
      connect: 1,
      connect_error: 1,
      disconnect: 1,
      disconnecting: 1,
      // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
      newListener: 1,
      removeListener: 1
    });
    var Socket = class extends component_emitter_1.Emitter {
      /**
       * `Socket` constructor.
       */
      constructor(io, nsp, opts) {
        super();
        this.connected = false;
        this.recovered = false;
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this._queue = [];
        this._queueSeq = 0;
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
          this.auth = opts.auth;
        }
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect)
          this.open();
      }
      /**
       * Whether the socket is currently disconnected
       *
       * @example
       * const socket = io();
       *
       * socket.on("connect", () => {
       *   console.log(socket.disconnected); // false
       * });
       *
       * socket.on("disconnect", () => {
       *   console.log(socket.disconnected); // true
       * });
       */
      get disconnected() {
        return !this.connected;
      }
      /**
       * Subscribe to open, close and packet events
       *
       * @private
       */
      subEvents() {
        if (this.subs)
          return;
        const io = this.io;
        this.subs = [
          (0, on_js_1.on)(io, "open", this.onopen.bind(this)),
          (0, on_js_1.on)(io, "packet", this.onpacket.bind(this)),
          (0, on_js_1.on)(io, "error", this.onerror.bind(this)),
          (0, on_js_1.on)(io, "close", this.onclose.bind(this))
        ];
      }
      /**
       * Whether the Socket will try to reconnect when its Manager connects or reconnects.
       *
       * @example
       * const socket = io();
       *
       * console.log(socket.active); // true
       *
       * socket.on("disconnect", (reason) => {
       *   if (reason === "io server disconnect") {
       *     // the disconnection was initiated by the server, you need to manually reconnect
       *     console.log(socket.active); // false
       *   }
       *   // else the socket will automatically try to reconnect
       *   console.log(socket.active); // true
       * });
       */
      get active() {
        return !!this.subs;
      }
      /**
       * "Opens" the socket.
       *
       * @example
       * const socket = io({
       *   autoConnect: false
       * });
       *
       * socket.connect();
       */
      connect() {
        if (this.connected)
          return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
          this.io.open();
        if ("open" === this.io._readyState)
          this.onopen();
        return this;
      }
      /**
       * Alias for {@link connect()}.
       */
      open() {
        return this.connect();
      }
      /**
       * Sends a `message` event.
       *
       * This method mimics the WebSocket.send() method.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
       *
       * @example
       * socket.send("hello");
       *
       * // this is equivalent to
       * socket.emit("message", "hello");
       *
       * @return self
       */
      send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
      }
      /**
       * Override `emit`.
       * If the event is in `events`, it's emitted normally.
       *
       * @example
       * socket.emit("hello", "world");
       *
       * // all serializable datastructures are supported (no need to call JSON.stringify)
       * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
       *
       * // with an acknowledgement from the server
       * socket.emit("hello", "world", (val) => {
       *   // ...
       * });
       *
       * @return self
       */
      emit(ev, ...args) {
        var _a, _b, _c;
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
          throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
          this._addToQueue(args);
          return this;
        }
        const packet = {
          type: socket_io_parser_1.PacketType.EVENT,
          data: args
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        if ("function" === typeof args[args.length - 1]) {
          const id = this.ids++;
          debug("emitting packet with ack id %d", id);
          const ack = args.pop();
          this._registerAckCallback(id, ack);
          packet.id = id;
        }
        const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
        const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
        const discardPacket = this.flags.volatile && !isTransportWritable;
        if (discardPacket) {
          debug("discard packet as the transport is not currently writable");
        } else if (isConnected) {
          this.notifyOutgoingListeners(packet);
          this.packet(packet);
        } else {
          this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
      }
      /**
       * @private
       */
      _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === void 0) {
          this.acks[id] = ack;
          return;
        }
        const timer = this.io.setTimeoutFn(() => {
          delete this.acks[id];
          for (let i = 0; i < this.sendBuffer.length; i++) {
            if (this.sendBuffer[i].id === id) {
              debug("removing packet with ack id %d from the buffer", id);
              this.sendBuffer.splice(i, 1);
            }
          }
          debug("event with ack id %d has timed out after %d ms", id, timeout);
          ack.call(this, new Error("operation has timed out"));
        }, timeout);
        const fn = (...args) => {
          this.io.clearTimeoutFn(timer);
          ack.apply(this, args);
        };
        fn.withError = true;
        this.acks[id] = fn;
      }
      /**
       * Emits an event and waits for an acknowledgement
       *
       * @example
       * // without timeout
       * const response = await socket.emitWithAck("hello", "world");
       *
       * // with a specific timeout
       * try {
       *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
       * } catch (err) {
       *   // the server did not acknowledge the event in the given delay
       * }
       *
       * @return a Promise that will be fulfilled when the server acknowledges the event
       */
      emitWithAck(ev, ...args) {
        return new Promise((resolve, reject) => {
          const fn = (arg1, arg2) => {
            return arg1 ? reject(arg1) : resolve(arg2);
          };
          fn.withError = true;
          args.push(fn);
          this.emit(ev, ...args);
        });
      }
      /**
       * Add the packet to the queue.
       * @param args
       * @private
       */
      _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") {
          ack = args.pop();
        }
        const packet = {
          id: this._queueSeq++,
          tryCount: 0,
          pending: false,
          args,
          flags: Object.assign({ fromQueue: true }, this.flags)
        };
        args.push((err, ...responseArgs) => {
          if (packet !== this._queue[0]) {
            return;
          }
          const hasError = err !== null;
          if (hasError) {
            if (packet.tryCount > this._opts.retries) {
              debug("packet [%d] is discarded after %d tries", packet.id, packet.tryCount);
              this._queue.shift();
              if (ack) {
                ack(err);
              }
            }
          } else {
            debug("packet [%d] was successfully sent", packet.id);
            this._queue.shift();
            if (ack) {
              ack(null, ...responseArgs);
            }
          }
          packet.pending = false;
          return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
      }
      /**
       * Send the first packet of the queue, and wait for an acknowledgement from the server.
       * @param force - whether to resend a packet that has not been acknowledged yet
       *
       * @private
       */
      _drainQueue(force = false) {
        debug("draining queue");
        if (!this.connected || this._queue.length === 0) {
          return;
        }
        const packet = this._queue[0];
        if (packet.pending && !force) {
          debug("packet [%d] has already been sent and is waiting for an ack", packet.id);
          return;
        }
        packet.pending = true;
        packet.tryCount++;
        debug("sending packet [%d] (try n\xB0%d)", packet.id, packet.tryCount);
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
      }
      /**
       * Sends a packet.
       *
       * @param packet
       * @private
       */
      packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
      }
      /**
       * Called upon engine `open`.
       *
       * @private
       */
      onopen() {
        debug("transport is open - connecting");
        if (typeof this.auth == "function") {
          this.auth((data) => {
            this._sendConnectPacket(data);
          });
        } else {
          this._sendConnectPacket(this.auth);
        }
      }
      /**
       * Sends a CONNECT packet to initiate the Socket.IO session.
       *
       * @param data
       * @private
       */
      _sendConnectPacket(data) {
        this.packet({
          type: socket_io_parser_1.PacketType.CONNECT,
          data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
        });
      }
      /**
       * Called upon engine or manager `error`.
       *
       * @param err
       * @private
       */
      onerror(err) {
        if (!this.connected) {
          this.emitReserved("connect_error", err);
        }
      }
      /**
       * Called upon engine `close`.
       *
       * @param reason
       * @param description
       * @private
       */
      onclose(reason, description) {
        debug("close (%s)", reason);
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
        this._clearAcks();
      }
      /**
       * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
       * the server.
       *
       * @private
       */
      _clearAcks() {
        Object.keys(this.acks).forEach((id) => {
          const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
          if (!isBuffered) {
            const ack = this.acks[id];
            delete this.acks[id];
            if (ack.withError) {
              ack.call(this, new Error("socket has been disconnected"));
            }
          }
        });
      }
      /**
       * Called with socket packet.
       *
       * @param packet
       * @private
       */
      onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
          return;
        switch (packet.type) {
          case socket_io_parser_1.PacketType.CONNECT:
            if (packet.data && packet.data.sid) {
              this.onconnect(packet.data.sid, packet.data.pid);
            } else {
              this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
            }
            break;
          case socket_io_parser_1.PacketType.EVENT:
          case socket_io_parser_1.PacketType.BINARY_EVENT:
            this.onevent(packet);
            break;
          case socket_io_parser_1.PacketType.ACK:
          case socket_io_parser_1.PacketType.BINARY_ACK:
            this.onack(packet);
            break;
          case socket_io_parser_1.PacketType.DISCONNECT:
            this.ondisconnect();
            break;
          case socket_io_parser_1.PacketType.CONNECT_ERROR:
            this.destroy();
            const err = new Error(packet.data.message);
            err.data = packet.data.data;
            this.emitReserved("connect_error", err);
            break;
        }
      }
      /**
       * Called upon a server event.
       *
       * @param packet
       * @private
       */
      onevent(packet) {
        const args = packet.data || [];
        debug("emitting event %j", args);
        if (null != packet.id) {
          debug("attaching ack callback to event");
          args.push(this.ack(packet.id));
        }
        if (this.connected) {
          this.emitEvent(args);
        } else {
          this.receiveBuffer.push(Object.freeze(args));
        }
      }
      emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
          const listeners = this._anyListeners.slice();
          for (const listener of listeners) {
            listener.apply(this, args);
          }
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
          this._lastOffset = args[args.length - 1];
        }
      }
      /**
       * Produces an ack callback to emit with an event.
       *
       * @private
       */
      ack(id) {
        const self2 = this;
        let sent = false;
        return function(...args) {
          if (sent)
            return;
          sent = true;
          debug("sending ack %j", args);
          self2.packet({
            type: socket_io_parser_1.PacketType.ACK,
            id,
            data: args
          });
        };
      }
      /**
       * Called upon a server acknowledgement.
       *
       * @param packet
       * @private
       */
      onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack !== "function") {
          debug("bad ack %s", packet.id);
          return;
        }
        delete this.acks[packet.id];
        debug("calling ack %s with %j", packet.id, packet.data);
        if (ack.withError) {
          packet.data.unshift(null);
        }
        ack.apply(this, packet.data);
      }
      /**
       * Called upon server connect.
       *
       * @private
       */
      onconnect(id, pid) {
        debug("socket connected with id %s", id);
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid;
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
        this._drainQueue(true);
      }
      /**
       * Emit buffered events (received and emitted).
       *
       * @private
       */
      emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
          this.notifyOutgoingListeners(packet);
          this.packet(packet);
        });
        this.sendBuffer = [];
      }
      /**
       * Called upon server disconnect.
       *
       * @private
       */
      ondisconnect() {
        debug("server disconnect (%s)", this.nsp);
        this.destroy();
        this.onclose("io server disconnect");
      }
      /**
       * Called upon forced client/server side disconnections,
       * this method ensures the manager stops tracking us and
       * that reconnections don't get triggered for this.
       *
       * @private
       */
      destroy() {
        if (this.subs) {
          this.subs.forEach((subDestroy) => subDestroy());
          this.subs = void 0;
        }
        this.io["_destroy"](this);
      }
      /**
       * Disconnects the socket manually. In that case, the socket will not try to reconnect.
       *
       * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
       *
       * @example
       * const socket = io();
       *
       * socket.on("disconnect", (reason) => {
       *   // console.log(reason); prints "io client disconnect"
       * });
       *
       * socket.disconnect();
       *
       * @return self
       */
      disconnect() {
        if (this.connected) {
          debug("performing disconnect (%s)", this.nsp);
          this.packet({ type: socket_io_parser_1.PacketType.DISCONNECT });
        }
        this.destroy();
        if (this.connected) {
          this.onclose("io client disconnect");
        }
        return this;
      }
      /**
       * Alias for {@link disconnect()}.
       *
       * @return self
       */
      close() {
        return this.disconnect();
      }
      /**
       * Sets the compress flag.
       *
       * @example
       * socket.compress(false).emit("hello");
       *
       * @param compress - if `true`, compresses the sending data
       * @return self
       */
      compress(compress) {
        this.flags.compress = compress;
        return this;
      }
      /**
       * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
       * ready to send messages.
       *
       * @example
       * socket.volatile.emit("hello"); // the server may or may not receive it
       *
       * @returns self
       */
      get volatile() {
        this.flags.volatile = true;
        return this;
      }
      /**
       * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
       * given number of milliseconds have elapsed without an acknowledgement from the server:
       *
       * @example
       * socket.timeout(5000).emit("my-event", (err) => {
       *   if (err) {
       *     // the server did not acknowledge the event in the given delay
       *   }
       * });
       *
       * @returns self
       */
      timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback.
       *
       * @example
       * socket.onAny((event, ...args) => {
       *   console.log(`got ${event}`);
       * });
       *
       * @param listener
       */
      onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback. The listener is added to the beginning of the listeners array.
       *
       * @example
       * socket.prependAny((event, ...args) => {
       *   console.log(`got event ${event}`);
       * });
       *
       * @param listener
       */
      prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
      }
      /**
       * Removes the listener that will be fired when any event is emitted.
       *
       * @example
       * const catchAllListener = (event, ...args) => {
       *   console.log(`got event ${event}`);
       * }
       *
       * socket.onAny(catchAllListener);
       *
       * // remove a specific listener
       * socket.offAny(catchAllListener);
       *
       * // or remove all listeners
       * socket.offAny();
       *
       * @param listener
       */
      offAny(listener) {
        if (!this._anyListeners) {
          return this;
        }
        if (listener) {
          const listeners = this._anyListeners;
          for (let i = 0; i < listeners.length; i++) {
            if (listener === listeners[i]) {
              listeners.splice(i, 1);
              return this;
            }
          }
        } else {
          this._anyListeners = [];
        }
        return this;
      }
      /**
       * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
       * e.g. to remove listeners.
       */
      listenersAny() {
        return this._anyListeners || [];
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback.
       *
       * Note: acknowledgements sent to the server are not included.
       *
       * @example
       * socket.onAnyOutgoing((event, ...args) => {
       *   console.log(`sent event ${event}`);
       * });
       *
       * @param listener
       */
      onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback. The listener is added to the beginning of the listeners array.
       *
       * Note: acknowledgements sent to the server are not included.
       *
       * @example
       * socket.prependAnyOutgoing((event, ...args) => {
       *   console.log(`sent event ${event}`);
       * });
       *
       * @param listener
       */
      prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
      }
      /**
       * Removes the listener that will be fired when any event is emitted.
       *
       * @example
       * const catchAllListener = (event, ...args) => {
       *   console.log(`sent event ${event}`);
       * }
       *
       * socket.onAnyOutgoing(catchAllListener);
       *
       * // remove a specific listener
       * socket.offAnyOutgoing(catchAllListener);
       *
       * // or remove all listeners
       * socket.offAnyOutgoing();
       *
       * @param [listener] - the catch-all listener (optional)
       */
      offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
          return this;
        }
        if (listener) {
          const listeners = this._anyOutgoingListeners;
          for (let i = 0; i < listeners.length; i++) {
            if (listener === listeners[i]) {
              listeners.splice(i, 1);
              return this;
            }
          }
        } else {
          this._anyOutgoingListeners = [];
        }
        return this;
      }
      /**
       * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
       * e.g. to remove listeners.
       */
      listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
      }
      /**
       * Notify the listeners for each packet sent
       *
       * @param packet
       *
       * @private
       */
      notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
          const listeners = this._anyOutgoingListeners.slice();
          for (const listener of listeners) {
            listener.apply(this, packet.data);
          }
        }
      }
    };
    exports.Socket = Socket;
  }
});

// ../../wire-talk/node_modules/socket.io-client/build/cjs/contrib/backo2.js
var require_backo2 = __commonJS({
  "../../wire-talk/node_modules/socket.io-client/build/cjs/contrib/backo2.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Backoff = Backoff;
    function Backoff(opts) {
      opts = opts || {};
      this.ms = opts.min || 100;
      this.max = opts.max || 1e4;
      this.factor = opts.factor || 2;
      this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
      this.attempts = 0;
    }
    Backoff.prototype.duration = function() {
      var ms = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
      }
      return Math.min(ms, this.max) | 0;
    };
    Backoff.prototype.reset = function() {
      this.attempts = 0;
    };
    Backoff.prototype.setMin = function(min) {
      this.ms = min;
    };
    Backoff.prototype.setMax = function(max) {
      this.max = max;
    };
    Backoff.prototype.setJitter = function(jitter) {
      this.jitter = jitter;
    };
  }
});

// ../../wire-talk/node_modules/socket.io-client/build/cjs/manager.js
var require_manager = __commonJS({
  "../../wire-talk/node_modules/socket.io-client/build/cjs/manager.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
    var __setModuleDefault2 = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault2(result, mod);
      return result;
    };
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Manager = void 0;
    var engine_io_client_1 = require_cjs2();
    var socket_js_1 = require_socket2();
    var parser = __importStar2(require_cjs3());
    var on_js_1 = require_on();
    var backo2_js_1 = require_backo2();
    var component_emitter_1 = (init_esm2(), __toCommonJS(esm_exports2));
    var debug_1 = __importDefault2(require_browser2());
    var debug = (0, debug_1.default)("socket.io-client:manager");
    var Manager = class extends component_emitter_1.Emitter {
      constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
          opts = uri;
          uri = void 0;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        (0, engine_io_client_1.installTimerFunctions)(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1e3);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new backo2_js_1.Backoff({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
          this.open();
      }
      reconnection(v) {
        if (!arguments.length)
          return this._reconnection;
        this._reconnection = !!v;
        if (!v) {
          this.skipReconnect = true;
        }
        return this;
      }
      reconnectionAttempts(v) {
        if (v === void 0)
          return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
      }
      reconnectionDelay(v) {
        var _a;
        if (v === void 0)
          return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
      }
      randomizationFactor(v) {
        var _a;
        if (v === void 0)
          return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
      }
      reconnectionDelayMax(v) {
        var _a;
        if (v === void 0)
          return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
      }
      timeout(v) {
        if (!arguments.length)
          return this._timeout;
        this._timeout = v;
        return this;
      }
      /**
       * Starts trying to reconnect if reconnection is enabled and we have not
       * started reconnecting yet
       *
       * @private
       */
      maybeReconnectOnOpen() {
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
          this.reconnect();
        }
      }
      /**
       * Sets the current transport `socket`.
       *
       * @param {Function} fn - optional, callback
       * @return self
       * @public
       */
      open(fn) {
        debug("readyState %s", this._readyState);
        if (~this._readyState.indexOf("open"))
          return this;
        debug("opening %s", this.uri);
        this.engine = new engine_io_client_1.Socket(this.uri, this.opts);
        const socket = this.engine;
        const self2 = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        const openSubDestroy = (0, on_js_1.on)(socket, "open", function() {
          self2.onopen();
          fn && fn();
        });
        const onError = (err) => {
          debug("error");
          this.cleanup();
          this._readyState = "closed";
          this.emitReserved("error", err);
          if (fn) {
            fn(err);
          } else {
            this.maybeReconnectOnOpen();
          }
        };
        const errorSub = (0, on_js_1.on)(socket, "error", onError);
        if (false !== this._timeout) {
          const timeout = this._timeout;
          debug("connect attempt will timeout after %d", timeout);
          const timer = this.setTimeoutFn(() => {
            debug("connect attempt timed out after %d", timeout);
            openSubDestroy();
            onError(new Error("timeout"));
            socket.close();
          }, timeout);
          if (this.opts.autoUnref) {
            timer.unref();
          }
          this.subs.push(() => {
            this.clearTimeoutFn(timer);
          });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
      }
      /**
       * Alias for open()
       *
       * @return self
       * @public
       */
      connect(fn) {
        return this.open(fn);
      }
      /**
       * Called upon transport open.
       *
       * @private
       */
      onopen() {
        debug("open");
        this.cleanup();
        this._readyState = "open";
        this.emitReserved("open");
        const socket = this.engine;
        this.subs.push(
          (0, on_js_1.on)(socket, "ping", this.onping.bind(this)),
          (0, on_js_1.on)(socket, "data", this.ondata.bind(this)),
          (0, on_js_1.on)(socket, "error", this.onerror.bind(this)),
          (0, on_js_1.on)(socket, "close", this.onclose.bind(this)),
          // @ts-ignore
          (0, on_js_1.on)(this.decoder, "decoded", this.ondecoded.bind(this))
        );
      }
      /**
       * Called upon a ping.
       *
       * @private
       */
      onping() {
        this.emitReserved("ping");
      }
      /**
       * Called with data.
       *
       * @private
       */
      ondata(data) {
        try {
          this.decoder.add(data);
        } catch (e) {
          this.onclose("parse error", e);
        }
      }
      /**
       * Called when parser fully decodes a packet.
       *
       * @private
       */
      ondecoded(packet) {
        (0, engine_io_client_1.nextTick)(() => {
          this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
      }
      /**
       * Called upon socket error.
       *
       * @private
       */
      onerror(err) {
        debug("error", err);
        this.emitReserved("error", err);
      }
      /**
       * Creates a new socket for the given `nsp`.
       *
       * @return {Socket}
       * @public
       */
      socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
          socket = new socket_js_1.Socket(this, nsp, opts);
          this.nsps[nsp] = socket;
        } else if (this._autoConnect && !socket.active) {
          socket.connect();
        }
        return socket;
      }
      /**
       * Called upon a socket close.
       *
       * @param socket
       * @private
       */
      _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
          const socket2 = this.nsps[nsp];
          if (socket2.active) {
            debug("socket %s is still active, skipping close", nsp);
            return;
          }
        }
        this._close();
      }
      /**
       * Writes a packet.
       *
       * @param packet
       * @private
       */
      _packet(packet) {
        debug("writing packet %j", packet);
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
          this.engine.write(encodedPackets[i], packet.options);
        }
      }
      /**
       * Clean up transport subscriptions and packet buffer.
       *
       * @private
       */
      cleanup() {
        debug("cleanup");
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
      }
      /**
       * Close the current socket.
       *
       * @private
       */
      _close() {
        debug("disconnect");
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
      }
      /**
       * Alias for close()
       *
       * @private
       */
      disconnect() {
        return this._close();
      }
      /**
       * Called when:
       *
       * - the low-level engine is closed
       * - the parser encountered a badly formatted packet
       * - all sockets are disconnected
       *
       * @private
       */
      onclose(reason, description) {
        var _a;
        debug("closed due to %s", reason);
        this.cleanup();
        (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
          this.reconnect();
        }
      }
      /**
       * Attempt a reconnection.
       *
       * @private
       */
      reconnect() {
        if (this._reconnecting || this.skipReconnect)
          return this;
        const self2 = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
          debug("reconnect failed");
          this.backoff.reset();
          this.emitReserved("reconnect_failed");
          this._reconnecting = false;
        } else {
          const delay = this.backoff.duration();
          debug("will wait %dms before reconnect attempt", delay);
          this._reconnecting = true;
          const timer = this.setTimeoutFn(() => {
            if (self2.skipReconnect)
              return;
            debug("attempting reconnect");
            this.emitReserved("reconnect_attempt", self2.backoff.attempts);
            if (self2.skipReconnect)
              return;
            self2.open((err) => {
              if (err) {
                debug("reconnect attempt error");
                self2._reconnecting = false;
                self2.reconnect();
                this.emitReserved("reconnect_error", err);
              } else {
                debug("reconnect success");
                self2.onreconnect();
              }
            });
          }, delay);
          if (this.opts.autoUnref) {
            timer.unref();
          }
          this.subs.push(() => {
            this.clearTimeoutFn(timer);
          });
        }
      }
      /**
       * Called upon successful reconnect.
       *
       * @private
       */
      onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
      }
    };
    exports.Manager = Manager;
  }
});

// ../../wire-talk/node_modules/socket.io-client/build/cjs/index.js
var require_cjs4 = __commonJS({
  "../../wire-talk/node_modules/socket.io-client/build/cjs/index.js"(exports, module) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebTransport = exports.WebSocket = exports.NodeWebSocket = exports.XHR = exports.NodeXHR = exports.Fetch = exports.Socket = exports.Manager = exports.protocol = void 0;
    exports.io = lookup;
    exports.connect = lookup;
    exports.default = lookup;
    var url_js_1 = require_url();
    var manager_js_1 = require_manager();
    Object.defineProperty(exports, "Manager", { enumerable: true, get: function() {
      return manager_js_1.Manager;
    } });
    var socket_js_1 = require_socket2();
    Object.defineProperty(exports, "Socket", { enumerable: true, get: function() {
      return socket_js_1.Socket;
    } });
    var debug_1 = __importDefault2(require_browser2());
    var debug = (0, debug_1.default)("socket.io-client");
    var cache = {};
    function lookup(uri, opts) {
      if (typeof uri === "object") {
        opts = uri;
        uri = void 0;
      }
      opts = opts || {};
      const parsed = (0, url_js_1.url)(uri, opts.path || "/socket.io");
      const source = parsed.source;
      const id = parsed.id;
      const path = parsed.path;
      const sameNamespace = cache[id] && path in cache[id]["nsps"];
      const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
      let io;
      if (newConnection) {
        debug("ignoring socket cache for %s", source);
        io = new manager_js_1.Manager(source, opts);
      } else {
        if (!cache[id]) {
          debug("new io instance for %s", source);
          cache[id] = new manager_js_1.Manager(source, opts);
        }
        io = cache[id];
      }
      if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
      }
      return io.socket(parsed.path, opts);
    }
    Object.assign(lookup, {
      Manager: manager_js_1.Manager,
      Socket: socket_js_1.Socket,
      io: lookup,
      connect: lookup
    });
    var socket_io_parser_1 = require_cjs3();
    Object.defineProperty(exports, "protocol", { enumerable: true, get: function() {
      return socket_io_parser_1.protocol;
    } });
    var engine_io_client_1 = require_cjs2();
    Object.defineProperty(exports, "Fetch", { enumerable: true, get: function() {
      return engine_io_client_1.Fetch;
    } });
    Object.defineProperty(exports, "NodeXHR", { enumerable: true, get: function() {
      return engine_io_client_1.NodeXHR;
    } });
    Object.defineProperty(exports, "XHR", { enumerable: true, get: function() {
      return engine_io_client_1.XHR;
    } });
    Object.defineProperty(exports, "NodeWebSocket", { enumerable: true, get: function() {
      return engine_io_client_1.NodeWebSocket;
    } });
    Object.defineProperty(exports, "WebSocket", { enumerable: true, get: function() {
      return engine_io_client_1.WebSocket;
    } });
    Object.defineProperty(exports, "WebTransport", { enumerable: true, get: function() {
      return engine_io_client_1.WebTransport;
    } });
    module.exports = lookup;
  }
});

// ../../wire-talk/packages/client/lib/client/src/utils/eventbus.js
var require_eventbus = __commonJS({
  "../../wire-talk/packages/client/lib/client/src/utils/eventbus.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Eventbus = void 0;
    var rxjs_1 = (init_esm(), __toCommonJS(esm_exports));
    var Eventbus = class {
      constructor() {
        this.chat$ = new rxjs_1.BehaviorSubject(null);
        this.outEvent$ = new rxjs_1.BehaviorSubject(null);
      }
    };
    exports.Eventbus = Eventbus;
  }
});

// ../../wire-talk/packages/client/lib/client/src/utils/logger.js
var require_logger = __commonJS({
  "../../wire-talk/packages/client/lib/client/src/utils/logger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Logger = void 0;
    var Logger = class {
      constructor() {
        this.pDebug = console.info.bind(console);
        this.pWarn = console.warn.bind(console);
        this.pError = console.error.bind(console);
        this.pTrace = console.trace.bind(console);
      }
      /**
       * Get the debug console method.
       * @returns The debug console method.
       */
      get debug() {
        return this.pDebug;
      }
      /**
       * Get the warn console method.
       * @returns The warn console method.
       */
      get warn() {
        return this.pWarn;
      }
      /**
       * Get the error console method.
       * @returns The error console method.
       */
      get error() {
        return this.pError;
      }
      /**
       * Get the trace console method.
       * @returns The trace console method.
       */
      get trace() {
        return this.pTrace;
      }
    };
    exports.Logger = Logger;
  }
});

// ../../wire-talk/packages/client/lib/client/src/utils/chat-socket.js
var require_chat_socket = __commonJS({
  "../../wire-talk/packages/client/lib/client/src/utils/chat-socket.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChatSocket = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var socket_io_client_1 = require_cjs4();
    var chat_enum_1 = require_chat_enum();
    var eventbus_1 = require_eventbus();
    var logger_1 = require_logger();
    var requestTimeout = 1e4;
    var chatNotificationMap = /* @__PURE__ */ new Map();
    var chatNotification = (ref = "") => (target, propertyKey, descriptor) => {
      try {
        if (ref) {
          chatNotificationMap.set(ref, propertyKey);
        } else {
          chatNotificationMap.set(propertyKey, propertyKey);
        }
        return descriptor;
      } catch (error) {
        console.error("Error in chat notification registration:", error);
        return descriptor;
      }
    };
    var ChatSocket = class {
      /**
       * Initializes a new chat socket connection.
       * @param url WebSocket server URL
       * @param id Unique connection identifier
       */
      constructor(url, id, getAuthToken) {
        this.url = url;
        this.id = id;
        this.getAuthToken = getAuthToken;
        this.eventbus = new eventbus_1.Eventbus();
        this.logger = new logger_1.Logger();
        this.connect();
      }
      /**
       * Retrieves the current active socket.
       */
      get currSocket() {
        return this.socket;
      }
      /**
       * Handles the event when a room is created.
       * @param data - The data associated with the event.
       */
      roomCreated(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.ROOM_CREATED,
          data
        });
      }
      chatMessage(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.CHAT_MESSAGE,
          data
        });
      }
      deleteMessage(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.DELETE_MESSAGE,
          data
        });
      }
      newPeer(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.NEW_PEER,
          data
        });
      }
      newMainPeer(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.NEW_MAIN_PEER,
          data
        });
      }
      peerClosed(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.PEER_CLOSE,
          data
        });
      }
      mainPeerClosed(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.MAIN_PEER_CLOSE,
          data
        });
      }
      updateStatus(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.UPDATE_STATUS,
          data
        });
      }
      updatePeer(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.PEER_UPDATE,
          data
        });
      }
      updateRoom(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.UPDATE_ROOM,
          data
        });
      }
      peerOffline(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.PEER_OFFLINE,
          data
        });
      }
      peerOnline(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.PEER_ONLINE,
          data
        });
      }
      updateViewCount(data) {
        this.eventbus.chat$.next({
          type: chat_enum_1.ECHATMETHOD.UPDATE_VIEW_COUNT,
          data
        });
      }
      /**
       * Checks if the socket is connected.
       * @returns {boolean} True if the socket is connected, false otherwise.
       */
      isSocketConnected() {
        return Boolean(this.socket?.connected);
      }
      /**
       * Disconnects the socket connection.
       */
      disconnectSocket() {
        this.socket?.disconnect();
      }
      /**
       * Connects to the WebSocket server.
       * @param id - The user ID.
       * @param url - The URL of the WebSocket server.
       */
      connect() {
        return __async(this, arguments, function* (id = this.id, url = this.url) {
          const authToken = yield this.getAuthToken();
          const socketUrl = `${url}/?authToken=${authToken}&userId=${id}`;
          this.logger.debug("Socket:connect:: - socketUrl :", socketUrl);
          this.socket = (0, socket_io_client_1.io)(socketUrl, {
            timeout: 3e3,
            reconnection: true,
            reconnectionAttempts: Infinity,
            reconnectionDelayMax: 2e3,
            transports: ["websocket"]
          });
          this.setupEventHandler(this.socket);
          this.setupNotificationHandler();
        });
      }
      /**
       * Sends a request to the server using the WebSocket connection.
       * @param method The method name of the request.
       * @param data The data to be sent with the request (optional).
       * @param timeOut The timeout duration for the request in milliseconds (default: 10000).
       * @returns A Promise that resolves with the response from the server.
       * @throws If there is no socket connection or if the request times out.
       */
      sendRequest(roomId, method, data, timeOut = 1e4) {
        return new Promise((resolve, reject) => {
          if (!this.socket || !this.socket.connected) {
            this.logger.error("Socket:connect:: -", "No socket connection");
            reject("No socket connection");
          } else {
            this.socket.emit("mainrequest" + roomId, { method, data }, this.timeoutCallback((err, response) => {
              if (err) {
                this.logger.error("sendRequest %s timeout! socket: %o", method, this.socket);
                reject(err);
              } else {
                this.logger.debug("sendRequest response: %s", response);
                resolve(response);
              }
            }, timeOut));
          }
        });
      }
      /**
       * Sends an online solo request to the server.
       * @param method - The method of the request.
       * @param data - The data to be sent with the request (optional).
       * @param timeOut - The timeout duration for the request (default: 10000ms).
       * @returns A promise that resolves with the response from the server.
       * @throws If there is no socket connection or if the request times out.
       */
      sendOnlineSoloRequest(method, data, timeOut = 1e4) {
        return new Promise((resolve, reject) => {
          if (!this.socket || !this.socket.connected) {
            this.logger.error("Socket:sendOnlineSoloRequest:: - connect -", "No socket connection");
            reject("No socket connection");
          } else {
            this.socket.emit("onlinerequest", { method, data }, this.timeoutCallback((err, response) => {
              if (err) {
                this.logger.error("sendOnlineSoloRequest::sendRequest %s timeout! socket: %o", method, this.socket);
                reject(err);
              } else {
                resolve(response);
              }
            }, timeOut));
          }
        });
      }
      /**
       * Sets a timeout for the given callback function.
       * If the callback is not called within the specified time, an error is thrown.
       * @param {Function} callback - The callback function to be called.
       * @param {number} timeOut - The timeout duration in milliseconds. Default is 10000ms.
       * @returns {Function} - A wrapper function that can be used to call the original callback function.
       */
      timeoutCallback(callback, timeOut = 1e4) {
        let called = false;
        const interval = setTimeout(() => {
          if (called) {
            return;
          }
          called = true;
          this.logger.error("Socket:connect:: -", "nowRequest timeout");
          callback(new Error("nowRequest timeout"));
        }, timeOut || requestTimeout);
        return (...args) => {
          if (called) {
            return;
          }
          called = true;
          clearTimeout(interval);
          callback(...args);
        };
      }
      /**
       * Disconnects the WebSocket connection.
       */
      disconnect() {
        if (this.socket?.disconnected) {
          this.logger.debug("Socket:disconnect:: - socket already disconnected");
          return;
        }
        this.socket?.disconnect();
      }
      /**
       * Sets up event handlers for the socket connection.
       * @param socket - The socket object.
       */
      setupEventHandler(socket) {
        socket.on("connect", () => {
          this.logger.debug("Socket:setupEventHandler:: - socket connected !");
          this.eventbus.chat$.next({
            type: chat_enum_1.ECHATMETHOD.SOCKET_CONNECTED
          });
        });
        socket.on("connect_error", () => {
          this.logger.warn("Socket:setupEventHandler:: - reconnect_failed !");
        });
        socket.on("connect_timeout", () => {
          this.logger.warn("Socket:setupEventHandler:: - connect_timeout !");
        });
        socket.on("disconnect", (reason) => {
          this.logger.error("Socket:setupEventHandler:: - Socket disconnect, reason: %s", reason);
          this.eventbus.chat$.next({
            type: chat_enum_1.ECHATMETHOD.SOCKET_DISCONNECTED
          });
          if (reason === "io server disconnect") {
            this.connect();
          }
        });
        socket.on("reconnect", (attemptNumber) => {
          this.logger.debug('Socket:setupEventHandler:: - "reconnect" event [attempts:"%s"]', attemptNumber);
        });
        socket.on("reconnect_failed", () => {
          this.logger.warn("Socket:setupEventHandler:: - reconnect_failed !");
        });
      }
      /**
       * Sets up the notification handler for the WebSocket connection.
       * The handler listens for the 'mainnotification' event and executes the corresponding method based on the received request.
       */
      setupNotificationHandler() {
        const socket = this.socket;
        socket?.on("mainnotification", (request) => {
          this.logger.debug("Socket:setupNotificationHandler:: - mainnotification event, method: %s,data: %o", request.method, request.data);
          const regiMethod = chatNotificationMap.get(request.method);
          if (!regiMethod) {
            this.logger.warn("Socket:setupNotificationHandler:: - mainnotification method: %s, do not register!", request.method);
            return;
          }
          this[regiMethod](request.data);
        });
      }
    };
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "roomCreated", null);
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "chatMessage", null);
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "deleteMessage", null);
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "newPeer", null);
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "newMainPeer", null);
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "peerClosed", null);
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "mainPeerClosed", null);
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "updateStatus", null);
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "updatePeer", null);
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "updateRoom", null);
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "peerOffline", null);
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "peerOnline", null);
    tslib_1.__decorate([
      chatNotification()
    ], ChatSocket.prototype, "updateViewCount", null);
    exports.ChatSocket = ChatSocket;
  }
});

// ../../wire-talk/packages/client/lib/client/src/chat-client.js
var require_chat_client = __commonJS({
  "../../wire-talk/packages/client/lib/client/src/chat-client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WireTalkClient = void 0;
    var rxjs_1 = (init_esm(), __toCommonJS(esm_exports));
    var chat_enum_1 = require_chat_enum();
    var makerandomstring_constant_1 = require_makerandomstring_constant();
    var chat_room_1 = require_chat_room();
    var chat_socket_1 = require_chat_socket();
    var logger_1 = require_logger();
    var WireTalkClient2 = class {
      /**
       * Creates an instance of the ChatController class.
       * @param myId - The ID of the user.
       * @param myNames - The name of the user.
       * @param myPhotoUrl - The URL of the user's photo.
       * @param url - The URL for the chat socket connection.
       * @param chatElementId - The ID of the chat element.
       */
      constructor(url, getAuthToken, myId, myNames, myPhotoUrl, chatElementId) {
        this.url = url;
        this.getAuthToken = getAuthToken;
        this.myId = myId;
        this.myNames = myNames;
        this.myPhotoUrl = myPhotoUrl;
        this.messages = [];
        this.toPeer = "all";
        this.activeRoom = null;
        this.allRooms = [];
        this.destroyed$ = new rxjs_1.Subject();
        this.logger = new logger_1.Logger();
        this.unviewedMsgsLength = 0;
        this.chatSocket = new chat_socket_1.ChatSocket(this.url, myId, this.getAuthToken);
        this.runSubscriptions(chatElementId);
      }
      get unviewedMessagesCount() {
        return this.allRooms.reduce((acc, room) => acc + (room.room.unviewedMsgsLength || 0), 0);
      }
      /* recalculateUnviewedMsgsLength() {
        this.unviewedMsgsLength = this.allRooms.reduce((acc, room) => acc + (room.room.unviewedMsgsLength || 0), 0);
      } */
      filterRoomsByPeer(search) {
        return this.allRooms.filter((value) => {
          const found = value.room.peers.find((peer) => peer.id !== this.myId);
          if (found) {
            return found.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
          }
          return false;
        });
      }
      /**
       * Determines the local peer information.
       * @returns The local peer information.
       */
      determineLocalPeerInfo() {
        const peerInfo = {
          id: this.myId,
          name: this.myNames,
          photo: this.myPhotoUrl,
          roomAdmin: false,
          lastSeen: /* @__PURE__ */ new Date(),
          online: true,
          unviewedMsgsLength: 0
        };
        return peerInfo;
      }
      /**
       * Joins the active room and adds new peers to the chat.
       * @returns A promise that resolves when the room is joined.
       */
      joinRoom() {
        return __async(this, null, function* () {
          if (!this.activeRoom) {
            return;
          }
          const { joined, peers } = yield this.join(this.determineLocalPeerInfo());
          if (joined) {
            return;
          }
          this.logger.debug("joined, peersinfo: %s", JSON.stringify(peers));
          for (const peer of peers) {
            this.newPeer(peer);
          }
        });
      }
      /**
       * Joins the main chat room.
       * @returns A promise that resolves when the main room is joined.
       */
      joinMainRoom() {
        return __async(this, null, function* () {
          const { joined, onlineRoomPeers, chatRoomAndLastMsg, totalUnviewedLength } = yield this.joinMain(this.determineLocalPeerInfo());
          this.allRooms = chatRoomAndLastMsg.map((room) => ({ room: new chat_room_1.ChatRoom(room.room), lastMsg: new chat_room_1.ChatMsg(this.myId, room.lastMsg) }));
          this.unviewedMsgsLength = totalUnviewedLength;
          this.logger.debug("joined main room, unviewedMsgsLength: %s", this.unviewedMsgsLength);
          if (joined) {
            return;
          }
          this.logger.debug("joined main room, peersinfo: %s", JSON.stringify(onlineRoomPeers));
          if (this.activeRoom) {
            this.reconnectToRoom();
          }
        });
      }
      /**
       * Joins the main chat room.
       * @param params - The parameters for joining the chat room.
       * @returns An object containing information about the joined peers and whether the join was successful.
       */
      joinMain(params) {
        return __async(this, null, function* () {
          const callRes = yield this.chatSocket.sendOnlineSoloRequest(chat_enum_1.ECHATMETHOD.JOIN, params);
          this.logger.debug("joinMain, res: %s", JSON.stringify(callRes));
          return callRes;
        });
      }
      /**
       * Joins the chat room with the specified parameters.
       * @param params - The parameters for joining the chat room.
       * @returns A promise that resolves to an object containing information about the joined peers and whether the join was successful.
       */
      join(params) {
        return __async(this, null, function* () {
          if (!this.activeRoom) {
            throw new Error("no active room");
          }
          const callRes = yield this.chatSocket.sendRequest(this.activeRoom.id, chat_enum_1.ECHATMETHOD.JOIN, params);
          return callRes;
        });
      }
      /**
       * Sends a chat message.
       * @param chatMessage The message to send.
       * @param chatElementId The ID of the chat element.
       * @returns A promise that resolves when the message is sent successfully, or rejects with an error if sending fails.
       */
      send(chatMessage, chatElementId) {
        if (!this.activeRoom) {
          throw new Error("no active room");
        }
        const id = this.activeRoom.id + (0, makerandomstring_constant_1.makeRandomString)(22, "combined");
        const createTime = /* @__PURE__ */ new Date();
        const msg = new chat_room_1.ChatMsg(this.myId, {
          id,
          peerInfo: this.determineLocalPeerInfo(),
          roomId: this.activeRoom.id,
          msg: chatMessage,
          createTime,
          who: "me",
          status: "pending",
          deleted: false
        });
        this.messages = [...this.messages, msg];
        this.scrollToLast(chatElementId);
        return this.chatSocket.sendRequest(this.activeRoom.id, chat_enum_1.ECHATMETHOD.CHAT_MESSAGE, {
          id,
          roomId: this.activeRoom.id,
          chatMessage,
          createTime,
          from: this.myId,
          to: this.toPeer
        }).then(() => {
          msg.status = "sent";
          const found = this.allRooms.find((room) => room.room.id === this.activeRoom?.id);
          if (found && found.lastMsg) {
            if (found.lastMsg.createTime < msg.createTime) {
              found.lastMsg = msg;
            }
          }
        }).catch((err) => {
          this.logger.error("send MESSAGE ERROR", err);
          msg.status = "failed";
        });
      }
      /**
       * Updates the status of a chat message.
       * @param status - The new status of the chat message.
       * @param msg - The chat message to update.
       * @returns A promise that resolves to true if the status update was successful, or false otherwise.
       */
      updateStatus(status, msgIds) {
        return __async(this, null, function* () {
          if (!this.activeRoom) {
            throw new Error("no active room");
          }
          const updated = yield this.chatSocket.sendRequest(this.activeRoom.id, chat_enum_1.ECHATMETHOD.UPDATE_STATUS, {
            ids: msgIds,
            status,
            statusField: status,
            from: this.myId,
            to: this.toPeer
          });
          this.logger.debug("updateStatus, updated: %s", updated);
          if (updated) {
            if (this.activeRoom?.id && this.myId) {
              this.logger.debug("getUnviewedMsgsLength: %s", this.myId);
              this.getUnviewedMsgsLength(this.myId, this.activeRoom.id);
            }
          }
          return updated;
        });
      }
      /**
       * Deletes or restores a message.
       * @param id - The ID of the message to delete or restore.
       * @param deleted - A boolean indicating whether to delete or restore the message.
       * @returns A promise that resolves to true if the request is successful, or false if it fails.
       */
      deleteRestoreMessage(id, deleted) {
        if (!this.activeRoom) {
          throw new Error("no active room");
        }
        return this.chatSocket.sendRequest(this.activeRoom.id, chat_enum_1.ECHATMETHOD.DELETE_MESSAGE, {
          id,
          deleted,
          from: this.myId,
          to: this.toPeer
        }).then(() => true).catch((err) => err);
      }
      /**
       * Sends a request to close the peer.
       * @param stopClass A boolean indicating whether to stop the class.
       * @returns A promise that resolves when the request is sent.
       */
      sendClosePeer(stopClass) {
        this.logger.debug("sendClosePeer");
        if (!this.activeRoom) {
          throw new Error("no active room");
        }
        return this.chatSocket.sendRequest(this.activeRoom.id, chat_enum_1.ECHATMETHOD.CLOSE_PEER, {
          stopClass
        });
      }
      /**
       * Updates the peer information.
       * @param peerInfo - The updated peer information.
       * @returns A Promise that resolves when the request is sent.
       */
      updatePeer(peerInfo) {
        if (!this.activeRoom) {
          throw new Error("no active room");
        }
        return this.chatSocket.sendRequest(this.activeRoom.id, chat_enum_1.ECHATMETHOD.PEER_UPDATE, {
          peerInfo,
          from: this.myId,
          to: "all"
        });
      }
      /**
       * Updates the room with the given data.
       * @param roomData - The data of the room to update.
       * @param add - A boolean indicating whether to add the room to the array or remove it if false.
       * @returns A Promise that resolves when the update request is sent.
       */
      updateRoom(roomData, add) {
        if (!this.activeRoom) {
          throw new Error("no active room");
        }
        return this.chatSocket.sendRequest(this.activeRoom.id, chat_enum_1.ECHATMETHOD.UPDATE_ROOM, {
          roomData,
          add,
          from: this.myId,
          to: "all"
        });
      }
      reconnectToRoom() {
        if (!this.activeRoom) {
          return;
        }
        const room = {
          id: this.activeRoom.id,
          peers: this.activeRoom.peers,
          blocked: this.activeRoom.blocked,
          unviewedMsgsLength: this.activeRoom.unviewedMsgsLength,
          type: this.activeRoom.type,
          extras: this.activeRoom.extras,
          closed: this.activeRoom.closed,
          lastActive: this.activeRoom.lastActive,
          createTime: this.activeRoom.createTime
        };
        let lastMsg = null;
        if (this.messages.length) {
          lastMsg = this.messages[this.messages.length - 1];
        } else {
          const found = this.allRooms.find((room2) => room2.room.id === this.activeRoom?.id);
          if (found) {
            lastMsg = found.lastMsg;
          }
        }
        return this.chatSocket.sendOnlineSoloRequest(chat_enum_1.ECHATMETHOD.NEW_ROOM, {
          room,
          userId: this.myId,
          lastMsg
        });
      }
      /**
       * Creates a new chat room.
       * @param room - The chat room to be created.
       * @returns A Promise that resolves when the request to create the room is sent.
       */
      newRoom(room) {
        return __async(this, null, function* () {
          if (this.chatSocket.isSocketConnected()) {
            if (this.activeRoom) {
              if (this.activeRoom.id !== room.room.id) {
                this.clearRoom();
              } else {
                return;
              }
            }
          } else {
            this.chatSocket.connect();
          }
          this.activeRoom = room.room;
          const res = yield this.chatSocket.sendOnlineSoloRequest(chat_enum_1.ECHATMETHOD.NEW_ROOM, {
            room: room.room,
            lastMsg: room.lastMsg,
            userId: this.myId
          });
          if (res && res.room) {
            const room2 = new chat_room_1.ChatRoom(res.room);
            this.activeRoom = room2;
            this.joinRoom();
          }
        });
      }
      /**
       * Clears the active room and removes all messages.
       */
      clearRoom() {
        this.activeRoom = null;
        this.messages.length = 0;
        this.messages = [];
      }
      /**
       * Scrolls to the last message in the chat.
       * @param chatElementId - The ID of the chat element.
       */
      scrollToLast(chatElementId) {
        if (document) {
          const elem = document?.getElementById(chatElementId);
          elem?.scrollIntoView();
        }
      }
      isOnline(id) {
        return __async(this, null, function* () {
          const res = yield this.chatSocket.sendOnlineSoloRequest(chat_enum_1.ECHATMETHOD.IS_ONLINE, {
            userId: id
          });
          return res;
        });
      }
      /**
       * Destroys the chat controller.
       */
      destroy() {
        this.destroyed$.next(true);
      }
      /**
       * Adds a new peer to the active room.
       * If the peer already exists, it updates the online status.
       * @param data - The partial information of the peer.
       */
      newPeer(data) {
        this.logger.debug("newPeer, %o", data);
        const { id } = data;
        const peerInfo = this.getPeerInfo(id);
        if (peerInfo) {
          this.logger.warn("peer %s already existed!", id);
          peerInfo.online = data.online;
          return;
        }
        const peer = {
          id: data.id,
          name: data.name,
          photo: data.photo,
          roomAdmin: data.roomAdmin,
          online: data.online,
          lastSeen: /* @__PURE__ */ new Date(),
          unviewedMsgsLength: data.unviewedMsgsLength
        };
        this.logger.debug("newPeer, %o", peer);
        if (this.activeRoom && this.activeRoom.peers) {
          this.activeRoom.peers = [...this.activeRoom.peers, peer];
        }
      }
      /**
       * Handles the event when a peer is closed.
       * Updates the online status of the peer to false.
       * @param peerId - The ID of the peer that is closed.
       */
      peerClosed(peerId) {
        const peerInfo = this.getPeerInfo(peerId);
        if (peerInfo) {
          peerInfo.online = false;
        }
      }
      /**
       * Retrieves the peer information based on the provided peer ID.
       * @param peerId - The ID of the peer.
       * @returns The peer information if found, otherwise undefined.
       */
      getPeerInfo(peerId) {
        return this.activeRoom && this.activeRoom.peers.find((peer) => peer.id === peerId);
      }
      getUnviewedMsgsLength(peerId, roomId) {
        return __async(this, null, function* () {
          this.logger.debug("getUnviewedMsgsLength: %s", peerId);
          const res = yield this.chatSocket.sendOnlineSoloRequest(chat_enum_1.ECHATMETHOD.GET_UNVIEWED_MSGS_LENGTH, {
            peerId,
            roomId
          });
          this.logger.debug("getUnviewedMsgsLength, res: %s", JSON.stringify(res));
          if (res && typeof res.totalUnviewedLength === "number") {
            this.unviewedMsgsLength = res.totalUnviewedLength;
          }
          if (res.room) {
            const foundIndex = this.allRooms.findIndex((room) => room.room.id === res.room.roomId);
            if (foundIndex > -1) {
              if (typeof res.room.unviewedMsgsLength === "number") {
                this.allRooms[foundIndex].room.unviewedMsgsLength = res.room.unviewedMsgsLength;
              }
              const peerInRoomIndex = this.allRooms[foundIndex].room.peers.findIndex((peer) => peer.id === peerId);
              if (peerInRoomIndex > -1) {
                if (typeof res.room.unviewedMsgsLengthByPeer === "number") {
                  this.allRooms[foundIndex].room.peers[peerInRoomIndex].unviewedMsgsLength = res.room.unviewedMsgsLengthByPeer;
                }
              }
            }
          }
          this.logger.debug("getUnviewedMsgsLength, total: %o", this.unviewedMsgsLength);
          this.logger.debug("getUnviewedMsgsLength, rooms: %o", this.allRooms);
        });
      }
      /**
       * Runs the subscriptions for the chat controller.
       * Subscribes to the chat events and performs corresponding actions based on the event type.
       * @param chatElementId - The ID of the chat element.
       */
      runSubscriptions(chatElementId) {
        this.chatSocket.eventbus.chat$.pipe((0, rxjs_1.takeUntil)(this.destroyed$)).subscribe((event) => {
          if (event && event.type === chat_enum_1.ECHATMETHOD.CHAT_MESSAGE) {
            const msg = event.data;
            const message = new chat_room_1.ChatMsg(this.myId, {
              id: msg.id,
              peerInfo: msg.peerInfo,
              roomId: msg.roomId,
              msg: msg.msg,
              createTime: msg.createTime,
              who: "partner",
              status: "received",
              deleted: false
            });
            if (message.roomId === this.activeRoom?.id) {
              this.messages = [...this.messages, message];
              this.scrollToLast(chatElementId);
              this.updateStatus("viewed", [message.id]);
            }
            if (message.peerInfo?.id) {
              this.logger.debug("getUnviewedMsgsLength: %s", message.peerInfo.id);
              this.getUnviewedMsgsLength(message.peerInfo.id, message.roomId);
            }
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.DELETE_MESSAGE) {
            const { id, deleted } = event.data;
            const found = this.messages.find((msg) => msg.id === id);
            if (found) {
              found.deleted = deleted;
            }
            if (found && found.status !== "viewed") {
              if (found.peerInfo?.id) {
                this.getUnviewedMsgsLength(found.peerInfo.id, found.roomId);
              }
            }
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.NEW_PEER) {
            this.newPeer(event.data);
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.NEW_MAIN_PEER) {
            this.logger.debug("new main peer: %s", JSON.stringify(event.data));
            if (this.activeRoom && event.data.id !== this.myId) {
              const foundIndex = this.activeRoom.peers.findIndex((peer) => peer.id === event.data.id);
              if (foundIndex > -1) {
                this.activeRoom.peers[foundIndex].online = true;
              }
            }
            for (const room of this.allRooms) {
              const foundIndex = room.room.peers.findIndex((peer) => peer.id === event.data.id);
              if (foundIndex > -1) {
                room.room.peers[foundIndex].online = true;
              }
            }
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.PEER_OFFLINE) {
            this.logger.debug("peer offline: %s", JSON.stringify(event.data));
            this.logger.debug("peer offline active room: %s", this.activeRoom);
            if (this.activeRoom) {
              const foundIndex = this.activeRoom.peers.findIndex((peer) => peer.id === event.data.id);
              if (foundIndex > -1) {
                this.activeRoom.peers[foundIndex].online = false;
              }
            }
            this.logger.debug("peer offline all rooms: %s", JSON.stringify(this.allRooms));
            for (const room of this.allRooms) {
              this.logger.debug("peer offline event.data again: %s", JSON.stringify(event.data));
              const foundIndex = room.room.peers.findIndex((peer) => peer.id === event.data.id);
              this.logger.debug("peer offline foundIndex: %s", foundIndex);
              if (foundIndex > -1) {
                room.room.peers[foundIndex].online = false;
              }
            }
            this.logger.debug("peer offline all rooms after: %s", JSON.stringify(this.allRooms));
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.PEER_ONLINE) {
            this.logger.debug("peer online: %s", JSON.stringify(event.data));
            this.logger.debug("peer online active room: %s", this.activeRoom);
            if (this.activeRoom) {
              const foundIndex = this.activeRoom.peers.findIndex((peer) => peer.id === event.data.id);
              if (foundIndex > -1) {
                this.activeRoom.peers[foundIndex].online = true;
              }
            }
            this.logger.debug("peer online all rooms: %s", JSON.stringify(this.allRooms));
            for (const room of this.allRooms) {
              this.logger.debug("peer online event.data again: %s", JSON.stringify(event.data));
              const foundIndex = room.room.peers.findIndex((peer) => peer.id === event.data.id);
              this.logger.debug("peer online foundIndex: %s", foundIndex);
              if (foundIndex > -1) {
                room.room.peers[foundIndex].online = true;
              }
            }
            this.logger.debug("peer online all rooms after: %s", JSON.stringify(this.allRooms));
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.PEER_CLOSE) {
            this.peerClosed(event.data.peerId);
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.MAIN_PEER_CLOSE) {
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.ROOM_CREATED) {
            this.logger.debug("room created: %s", JSON.stringify(event.data));
            const { roomAndLastMsg } = event.data;
            const found = this.allRooms.find((room) => room.room.id === roomAndLastMsg.room.id);
            if (!found) {
              const room = new chat_room_1.ChatRoom(roomAndLastMsg.room);
              const lastMsg = roomAndLastMsg.lastMsg ? new chat_room_1.ChatMsg(roomAndLastMsg.lastMsg.from, roomAndLastMsg.lastMsg) : null;
              this.allRooms = [...this.allRooms, { room, lastMsg }];
              this.logger.debug("room created all rooms: %s", JSON.stringify(this.allRooms));
            }
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.SOCKET_CONNECTED) {
            this.joinMainRoom();
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.UPDATE_STATUS) {
            const { id, status } = event.data;
            const msg = this.messages.find((val) => val.id === id);
            if (msg) {
              msg.status = status;
              if (msg.peerInfo?.id) {
                this.getUnviewedMsgsLength(msg.peerInfo.id, msg.roomId);
              }
            }
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.PEER_UPDATE) {
            const { peerInfo } = event.data;
            const localPeerInfo = this.activeRoom?.getPeerById(peerInfo.id);
            if (localPeerInfo) {
              localPeerInfo.roomAdmin = peerInfo.roomAdmin;
            }
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.UPDATE_ROOM) {
            const { roomData, add } = event.data;
            if (this.activeRoom && this.activeRoom.id === roomData.id) {
              if (roomData.unviewedMsgsLength) {
                delete roomData.unviewedMsgsLength;
              }
              this.activeRoom?.update(roomData, add);
            }
            if (roomData.unviewedMsgsLength && this.activeRoom && this.activeRoom.id === roomData.id) {
              this.getUnviewedMsgsLength(this.myId, this.activeRoom.id);
            }
          }
          if (event && event.type === chat_enum_1.ECHATMETHOD.UPDATE_VIEW_COUNT) {
            this.logger.debug("update view count: %s", JSON.stringify(event.data));
            const { peerId, roomId } = event.data;
            this.getUnviewedMsgsLength(peerId, roomId);
          }
        });
      }
    };
    exports.WireTalkClient = WireTalkClient2;
  }
});

// ../../wire-talk/packages/client/lib/client/src/index.js
var require_src = __commonJS({
  "../../wire-talk/packages/client/lib/client/src/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_chat(), exports);
    tslib_1.__exportStar(require_chat_enum(), exports);
    tslib_1.__exportStar(require_union_types(), exports);
    tslib_1.__exportStar(require_chat_client(), exports);
    tslib_1.__exportStar(require_chat_room(), exports);
    tslib_1.__exportStar(require_chat_socket(), exports);
    tslib_1.__exportStar(require_eventbus(), exports);
  }
});

// projects/shared-lib/src/lib/services/app-environment.service.ts
var AppEnvironmentService = class _AppEnvironmentService {
  constructor() {
  }
  static {
    this.\u0275fac = function AppEnvironmentService_Factory(t) {
      return new (t || _AppEnvironmentService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppEnvironmentService, factory: _AppEnvironmentService.\u0275fac, providedIn: "root" });
  }
};

// projects/shared-lib/src/lib/services/chat.service.ts
var import_client = __toESM(require_src());
var ChatService = class _ChatService {
  constructor(dataService) {
    this.dataService = dataService;
  }
  runChatController(getWsToken) {
    if (!this.dataService.profileType && !this.dataService.isSuperAdmin) {
      throw new EagleInfoClientError("profileType is undefined");
    }
    const chatInfo = this.dataService.getChatInfo();
    this.wireTalkController = new import_client.WireTalkClient(chatInfo.chatServerUrl || "", getWsToken, chatInfo._id, chatInfo.names || "Eagle Info Solutions", chatInfo.photo || "", "");
  }
  static {
    this.\u0275fac = function ChatService_Factory(t) {
      return new (t || _ChatService)(\u0275\u0275inject(DataService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatService, factory: _ChatService.\u0275fac, providedIn: "root" });
  }
};

// projects/shared-lib/src/lib/services/notifications.service.ts
init_esm();
var NotificationsService = class _NotificationsService {
  constructor(dataService, storage) {
    this.dataService = dataService;
    this.storage = storage;
    this.notificationSubject = new Subject();
    this.unReadCountSubject = new Subject();
    this.notificationSubjectMainAuthUser = new Subject();
    this.unReadCountSubjectMainAuthUser = new Subject();
    this.notificationSubjectCompany = new Subject();
    this.unReadCountSubjectCompany = new Subject();
    this.notificationSubjectCommerceUser = new Subject();
    this.unReadCountSubjectCommerceUser = new Subject();
  }
  connect(notifServer) {
    this.disconnect();
    const token = this.storage.get("access-token");
    const url = `${notifServer}stream${token ? `?token=${encodeURIComponent(token)}` : ""}`;
    FrontendLogger.info("Connecting to notification server", url);
    this.eventSource = new EventSource(url);
    this.eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.notification) {
        this.notificationSubject.next({
          notification: data.notification,
          action: data.action
        });
      }
      if (data.unreadCount) {
        this.unReadCountSubject.next(data.unreadCount);
      }
      if (data.targetId === this.dataService.authUser?._id) {
        if (data.notification) {
          this.notificationSubjectMainAuthUser.next({
            notification: data.notification,
            action: data.action
          });
        }
        if (data.unreadCount) {
          this.unReadCountSubjectMainAuthUser.next(data.unreadCount);
        }
      }
      if (data.targetId === this.dataService.currentCompany?._id) {
        if (data.notification) {
          this.notificationSubjectCompany.next({
            notification: data.notification,
            action: data.action
          });
        }
        if (data.unreadCount) {
          this.unReadCountSubjectCompany.next(data.unreadCount);
        }
      }
      if (data.targetId === this.dataService.buyerProfile?._id || data.targetId === this.dataService.staffProfile?._id || data.targetId === this.dataService.vendorManagerProfile?._id || data.targetId === this.dataService.deliveryManagerProfile?._id) {
        if (data.notification) {
          this.notificationSubjectCommerceUser.next({
            notification: data.notification,
            action: data.action
          });
        }
        if (data.unreadCount) {
          this.unReadCountSubjectCommerceUser.next(data.unreadCount);
        }
      }
    };
    this.eventSource.onerror = () => {
      this.eventSource?.close();
      setTimeout(() => this.connect(notifServer), 5e3);
    };
  }
  getNotificationSubject() {
    return this.notificationSubject.asObservable();
  }
  getAuthUserNotifications() {
    return this.notificationSubjectMainAuthUser.asObservable();
  }
  getCompanyNotifications() {
    return this.notificationSubjectCompany.asObservable();
  }
  getCommerceUserNotifications() {
    return this.notificationSubjectCommerceUser.asObservable();
  }
  getAuthUserUnReadCount() {
    return this.unReadCountSubjectMainAuthUser.asObservable();
  }
  getCompanyUnReadCount() {
    return this.unReadCountSubjectCompany.asObservable();
  }
  getCommerceUserUnReadCount() {
    return this.unReadCountSubjectCommerceUser.asObservable();
  }
  disconnect() {
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = void 0;
    }
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static {
    this.\u0275fac = function NotificationsService_Factory(t) {
      return new (t || _NotificationsService)(\u0275\u0275inject(DataService), \u0275\u0275inject(WebStorageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationsService, factory: _NotificationsService.\u0275fac, providedIn: "root" });
  }
};

// projects/shared-lib/src/lib/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(storage, dataService, currencyService, chat, notifService, windowService) {
    this.storage = storage;
    this.dataService = dataService;
    this.currencyService = currencyService;
    this.chat = chat;
    this.notifService = notifService;
    this.windowService = windowService;
    this.isLoadingExpress = false;
  }
  storeNewTokensAfterRefresh(accessToken, refreshToken) {
    return new Promise((resolve) => {
      FrontendLogger.info("Storing new tokens after refresh", accessToken, refreshToken);
      if (accessToken) {
        this.storage.set("access-token", accessToken);
      }
      if (refreshToken) {
        this.storage.set("refresh-token", refreshToken);
      }
      resolve();
    });
  }
  getRefreshTokenForRefresh() {
    return new Promise((resolve) => {
      FrontendLogger.info("Getting refresh token for refresh");
      const refreshToken = this.storage.get("refresh-token");
      FrontendLogger.info("Refresh token", refreshToken);
      resolve(refreshToken || "");
    });
  }
  appendToken(token) {
    if (!token) {
      return;
    }
    AuthClient.ehttp.appendToken(token);
    ManagerClient.ehttp.appendToken(token);
    NotificationClient.ehttp.appendToken(token);
    CommerceClient.ehttp.appendToken(token);
    FlyingMailClient.ehttp.appendToken(token);
    AutoCloudDnsClient.ehttp.appendToken(token);
  }
  getWsToken() {
    FrontendLogger.info("Getting WS token");
    if (!this.refreshToken) {
      return this.wsLogin();
    }
    return this.wsRefresh();
  }
  wsLogin() {
    return __async(this, null, function* () {
      FrontendLogger.info("Logging in");
      const res = yield wsLogin();
      FrontendLogger.debug("Logged in", res);
      this.refreshToken = res.ws_refresh_token;
      return res.ws_access_token;
    });
  }
  wsRefresh() {
    return __async(this, null, function* () {
      FrontendLogger.info("Refreshing");
      if (!this.refreshToken) {
        FrontendLogger.error("Refresh token not found");
        return;
      }
      AuthClient.ehttp.appendToHeaders({ ws_refresh_token: this.refreshToken });
      const res = yield wsRefresh();
      FrontendLogger.debug("Refreshed", res);
      this.refreshToken = res.ws_refresh_token;
      return res.ws_access_token;
    });
  }
  remeberMe(remeber = true) {
    if (remeber) {
      this.storage.set("remember-me", "true");
    } else {
      this.storage.set("remember-me", "false");
    }
  }
  getRememberMe() {
    return this.storage.get("remember-me");
  }
  logOut() {
    return __async(this, null, function* () {
      this.isLoggedIn = false;
      yield logout();
      this.clearProfile();
      this.isLoggedIn = false;
      this.storage.remove("access-token");
      this.storage.remove("refresh-token");
      window.location.reload();
    });
  }
  clearProfile() {
    this.dataService.staffProfile = void 0;
    this.dataService.vendorManagerProfile = void 0;
    this.dataService.deliveryManagerProfile = void 0;
    this.dataService.companyProfile = void 0;
    this.dataService.profileType = "";
    this.dataService.companyId = "";
  }
  initAllClients(serverAddresses, production, companyId, countryCode) {
    FrontendLogger.debug("initing all clients");
    AppEnvironmentService.environment = {
      production
    };
    this.dataService.setChatServerUrl(serverAddresses.chatServer);
    this.webMetricsServer = serverAddresses.webMetricsServer;
    this.mailMetricsServer = serverAddresses.mailMetricsServer;
    this.notifServer = serverAddresses.notifServer;
    this.runAuthClient(serverAddresses.authServer, serverAddresses.authServer, companyId);
    this.runManagerClient(serverAddresses.authServer, serverAddresses.managerServer, companyId);
    this.runNotifClient(serverAddresses.authServer, serverAddresses.notifServer, companyId);
    this.runCommerceClient(serverAddresses.authServer, serverAddresses.commerceServer, companyId);
    this.runMailClient(serverAddresses.authServer, serverAddresses.mailServer, companyId);
    this.runAutoDnsClient(serverAddresses.authServer, serverAddresses.dnsServer, companyId);
    if (countryCode) {
      this.appendHeadersToClients({ "x-country": countryCode, "x-country-code": countryCode });
    }
    const accessToken = this.storage.get("access-token");
    FrontendLogger.debug("Access token", accessToken);
    if (accessToken) {
      this.appendToken(accessToken);
    }
  }
  prepareUser(user) {
    if (!user) {
      throw new EagleInfoClientError("User not found");
    }
    if (typeof user !== "object") {
      throw new EagleInfoClientError("User not found");
    }
    this.dataService.authUser = user;
    if (!this.notifServer) {
      throw new EagleInfoClientError("Notif server not found");
    }
    this.notifService.connect(this.notifServer);
    this.isLoggedIn = true;
  }
  prepareBuyer(buyer) {
    if (!buyer) {
      throw new EagleInfoClientError("User not found");
    }
    if (typeof buyer !== "object") {
      throw new EagleInfoClientError("User not found");
    }
    this.dataService.buyerProfile = buyer;
    this.isLoggedIn = true;
    this.dataService.profileType = "buyer";
    this.currencyService.setCurrency(buyer.defaultCurrency);
  }
  prepareStaff(staff, company) {
    if (!staff) {
      throw new EagleInfoClientError("User not found");
    }
    if (typeof staff !== "object") {
      throw new EagleInfoClientError("User not found");
    }
    this.dataService.staffProfile = staff;
    this.isLoggedIn = true;
    this.dataService.profileType = "staff";
    this.dataService.currentCompany = company;
    if (!staff.commerceUser.company) {
      throw new EagleInfoClientError("User not found");
    }
    this.dataService.companyId = typeof staff.commerceUser.company === "string" ? staff.commerceUser.company : staff.commerceUser.company._id;
    this.currencyService.setCurrency(staff.commerceUser.defaultCurrency);
    this.initCommon();
  }
  prepareVendorManager(vendorManager) {
    if (!vendorManager) {
      throw new EagleInfoClientError("User not found");
    }
    if (typeof vendorManager !== "object") {
      throw new EagleInfoClientError("User not found");
    }
    this.dataService.vendorManagerProfile = vendorManager;
    this.isLoggedIn = true;
    this.dataService.profileType = "vendorManager";
    this.currencyService.setCurrency(vendorManager.manager.defaultCurrency);
  }
  prepareDeliveryManager(deliveryManager) {
    if (!deliveryManager) {
      throw new EagleInfoClientError("User not found");
    }
    if (typeof deliveryManager !== "object") {
      throw new EagleInfoClientError("User not found");
    }
    this.dataService.deliveryManagerProfile = deliveryManager;
    this.isLoggedIn = true;
    this.dataService.profileType = "deliveryManager";
    this.currencyService.setCurrency(deliveryManager.manager.defaultCurrency);
  }
  prepareCompany(company) {
    if (!company) {
      throw new EagleInfoClientError("Company not found");
    }
    if (typeof company !== "object") {
      throw new EagleInfoClientError("Company not found");
    }
    this.dataService.companyProfile = company;
    this.isLoggedIn = true;
    this.dataService.profileType = "company";
    if (typeof company.owner !== "object") {
      throw new EagleInfoClientError("Company not found");
    }
    this.dataService.companyId = company._id;
    this.currencyService.setCurrency(company.owner.defaultCurrency);
    this.dataService.currentCompany = company;
    this.initCommon();
  }
  initCommon() {
    this.appendHeadersToClients({ "x-company": this.dataService.companyId || "" });
    if (!this.dataService.currentCompany) {
      this.dataService.getCurrentCompany();
    }
    this.chat.runChatController(this.getWsToken.bind(this));
  }
  runAuthClient(authServiceBaseUrl, baseURL, companyId) {
    FrontendLogger.debug("initing auth client");
    const axiosConfig = {
      authServiceBaseUrl,
      getRefreshTokenForRefresh: this.getRefreshTokenForRefresh.bind(this),
      storeNewTokensAfterRefresh: this.storeNewTokensAfterRefresh.bind(this),
      dontUserCookie: true,
      baseURL,
      timeout: 2e6,
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: "auth-token"
      }
    };
    const query = new URLSearchParams({
      fullCallBackUrl: `${this.windowService.getLocation().origin}/auth/callback`
    }).toString();
    const googleLoginUrl = `${authServiceBaseUrl}/auth/login/google?${query}`;
    const facebookLoginUrl = `${authServiceBaseUrl}/auth/login/facebook?${query}`;
    const socialCallUrls = {
      google: googleLoginUrl,
      facebook: facebookLoginUrl
    };
    new AuthClient(axiosConfig, socialCallUrls);
    AuthClient.ehttp.appendToHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-company": companyId,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-country-code": "UG"
    });
  }
  runNotifClient(authServiceBaseUrl, baseURL, companyId) {
    FrontendLogger.debug("initing notif client");
    const axiosConfig = {
      authServiceBaseUrl,
      getRefreshTokenForRefresh: this.getRefreshTokenForRefresh.bind(this),
      storeNewTokensAfterRefresh: this.storeNewTokensAfterRefresh.bind(this),
      dontUserCookie: true,
      baseURL,
      timeout: 2e6,
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: "auth-token"
      }
    };
    new NotificationClient(axiosConfig);
    NotificationClient.ehttp.appendToHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-company": companyId,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-country-code": "UG"
    });
  }
  runCommerceClient(authServiceBaseUrl, baseURL, companyId) {
    FrontendLogger.debug("initing core client");
    const axiosConfig = {
      authServiceBaseUrl,
      getRefreshTokenForRefresh: this.getRefreshTokenForRefresh.bind(this),
      storeNewTokensAfterRefresh: this.storeNewTokensAfterRefresh.bind(this),
      dontUserCookie: true,
      baseURL,
      timeout: 2e6,
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: "auth-token"
      }
    };
    new CommerceClient(axiosConfig);
    CommerceClient.ehttp.appendToHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-company": companyId,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-country-code": "UG"
    });
  }
  runManagerClient(authServiceBaseUrl, baseURL, companyId) {
    const axiosConfig = {
      authServiceBaseUrl,
      getRefreshTokenForRefresh: this.getRefreshTokenForRefresh.bind(this),
      storeNewTokensAfterRefresh: this.storeNewTokensAfterRefresh.bind(this),
      dontUserCookie: true,
      baseURL,
      timeout: 2e6,
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: "auth-token"
      }
    };
    new ManagerClient(axiosConfig);
    ManagerClient.ehttp.appendToHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-company": companyId,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-country-code": "UG"
    });
  }
  runMailClient(authServiceBaseUrl, baseURL, companyId) {
    const axiosConfig = {
      authServiceBaseUrl,
      getRefreshTokenForRefresh: this.getRefreshTokenForRefresh.bind(this),
      storeNewTokensAfterRefresh: this.storeNewTokensAfterRefresh.bind(this),
      dontUserCookie: true,
      baseURL,
      timeout: 2e6,
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: "auth-token"
      }
    };
    new FlyingMailClient(axiosConfig);
    FlyingMailClient.ehttp.appendToHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-company": companyId,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-country-code": "UG"
    });
  }
  runAutoDnsClient(authServiceBaseUrl, baseURL, companyId) {
    const axiosConfig = {
      authServiceBaseUrl,
      getRefreshTokenForRefresh: this.getRefreshTokenForRefresh.bind(this),
      storeNewTokensAfterRefresh: this.storeNewTokensAfterRefresh.bind(this),
      dontUserCookie: true,
      baseURL,
      timeout: 2e6,
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: "auth-token"
      }
    };
    new AutoCloudDnsClient(axiosConfig);
    AutoCloudDnsClient.ehttp.appendToHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-company": companyId,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "x-country-code": "UG"
    });
  }
  appendHeadersToClients(headers) {
    AuthClient.ehttp.appendToHeaders(headers);
    NotificationClient.ehttp.appendToHeaders(headers);
    CommerceClient.ehttp.appendToHeaders(headers);
    ManagerClient.ehttp.appendToHeaders(headers);
    FlyingMailClient.ehttp.appendToHeaders(headers);
    AutoCloudDnsClient.ehttp.appendToHeaders(headers);
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(WebStorageService), \u0275\u0275inject(DataService), \u0275\u0275inject(CurrencyService), \u0275\u0275inject(ChatService), \u0275\u0275inject(NotificationsService), \u0275\u0275inject(WindowService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AppEnvironmentService,
  AuthService
};
//# sourceMappingURL=chunk-D77A7TO4.js.map
