import { r as reactExports, a as reactDomExports, u as useNavigate, b as useLocation, L as Link, c as useSearchParams, d as useParams, e as Routes, f as Route, R as React, B as BrowserRouter } from "./router-BM_-eRbK.js";
import { m as motion, S as Search, a as Shield, P as Plus, L as LayoutGrid, U as User, A as AnimatePresence, b as LogOut, X, M as Menu, I as Image, c as MapPin, C as Calendar, d as ArrowRight, e as Sparkles, f as CheckCircle, g as Users, h as AlertCircle, i as Mail, j as Lock, E as EyeOff, k as Eye, l as Upload, n as ArrowLeft, o as Clock, p as XCircle, q as Package } from "./ui-CIKv3Lgv.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;
const kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
const typeOfTest = (type) => (thing) => typeof thing === type;
const { isArray } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString = typeOfTest("string");
const isFunction$1 = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(toStringTag in val) && !(iterator in val);
};
const isEmptyObject = (val) => {
  if (!isObject(val) || isBuffer(val)) {
    return false;
  }
  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    return false;
  }
};
const isDate = kindOfTest("Date");
const isFile = kindOfTest("File");
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject(val) && isFunction$1(val.pipe);
const isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]"));
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(kindOfTest);
const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l2;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l2 = obj.length; i < l2; i++) {
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
const _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : globalThis;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless, skipUndefined } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return;
    }
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
  for (let i = 0, l2 = arguments.length; i < l2; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(
    b,
    (val, key) => {
      if (thisArg && isFunction$1(val)) {
        Object.defineProperty(a, key, {
          value: bind(val, thisArg),
          writable: true,
          enumerable: true,
          configurable: true
        });
      } else {
        Object.defineProperty(a, key, {
          value: val,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
    },
    { allOwnKeys }
  );
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(
    superConstructor.prototype,
    descriptors
  );
  Object.defineProperty(constructor.prototype, "constructor", {
    value: constructor,
    writable: true,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
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
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
const isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];
  const _iterator = generator.call(obj);
  let result;
  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m2, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};
const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction$1(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction$1(value)) return;
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
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
}
const toJSONObject = (obj) => {
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
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing) => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener(
      "message",
      ({ source, data }) => {
        if (source === _global && data === token) {
          callbacks.length && callbacks.shift()();
        }
      },
      false
    );
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(typeof setImmediate === "function", isFunction$1(_global.postMessage));
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
const isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);
const utils$1 = {
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
let AxiosError$1 = class AxiosError extends Error {
  static from(error, code, config, request, response, customProps) {
    const axiosError = new AxiosError(error.message, code || error.code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(message, code, config, request, response) {
    super(message);
    this.name = "AxiosError";
    this.isAxiosError = true;
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status;
    }
  }
  toJSON() {
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
};
AxiosError$1.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
AxiosError$1.ERR_BAD_OPTION = "ERR_BAD_OPTION";
AxiosError$1.ECONNABORTED = "ECONNABORTED";
AxiosError$1.ETIMEDOUT = "ETIMEDOUT";
AxiosError$1.ERR_NETWORK = "ERR_NETWORK";
AxiosError$1.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
AxiosError$1.ERR_DEPRECATED = "ERR_DEPRECATED";
AxiosError$1.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
AxiosError$1.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
AxiosError$1.ERR_CANCELED = "ERR_CANCELED";
AxiosError$1.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
AxiosError$1.ERR_INVALID_URL = "ERR_INVALID_URL";
const httpAdapter = null;
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
function removeBrackets(key) {
  return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData$1(obj, formData, options) {
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
    if (value === null) return "";
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (utils$1.isBoolean(value)) {
      return value.toString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError$1("Blob is not supported. Use a Buffer instead.");
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
    if (utils$1.isUndefined(value)) return;
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
  params && toFormData$1(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
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
  const _options = utils$1.isFunction(options) ? {
    serialize: options
  } : options;
  const serializeFn = _options && _options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, _options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, _options).toString(_encode);
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
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
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
}
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false,
  legacyInterceptorReqResOrdering: true
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
const _navigator = typeof navigator === "object" && navigator || void 0;
const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const origin = hasBrowserEnv && window.location.href || "http://localhost";
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin
}, Symbol.toStringTag, { value: "Module" }));
const platform = {
  ...utils,
  ...platform$1
};
function toURLEncodedForm(data, options) {
  return toFormData$1(data, new platform.classes.URLSearchParams(), {
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options
  });
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
    if (name === "__proto__") return true;
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
const defaults = {
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
        return toFormData$1(
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
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data, this.parseReviver);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
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
const ignoreDuplicateOf = utils$1.toObjectSet([
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
const parseHeaders = (rawHeaders) => {
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
const $internals = Symbol("internals");
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
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils$1.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
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
let AxiosHeaders$1 = class AxiosHeaders {
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
AxiosHeaders$1.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders$1);
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel$1(value) {
  return !!(value && value.__CANCEL__);
}
let CanceledError$1 = class CanceledError extends AxiosError$1 {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(message, config, request) {
    super(message == null ? "canceled" : message, AxiosError$1.ERR_CANCELED, config, request);
    this.name = "CanceledError";
    this.__CANCEL__ = true;
  }
};
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError$1(
      "Request failed with status code " + response.status,
      [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
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
const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
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
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));
const isURLSameOrigin = platform.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
  url = new URL(url, platform.origin);
  return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true;
const cookies = platform.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure, sameSite) {
      if (typeof document === "undefined") return;
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
      if (typeof document === "undefined") return null;
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
  if (typeof url !== "string") {
    return false;
  }
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
const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;
function mergeConfig$1(config1, config2) {
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
  utils$1.forEach(
    Object.keys({ ...config1, ...config2 }),
    function computeConfigValue(prop) {
      if (prop === "__proto__" || prop === "constructor" || prop === "prototype")
        return;
      const merge2 = utils$1.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    }
  );
  return config;
}
const resolveConfig = (config) => {
  const newConfig = mergeConfig$1({}, config);
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
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config) {
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
      reject(new AxiosError$1("Request aborted", AxiosError$1.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError(event) {
      const msg = event && event.message ? event.message : "Network Error";
      const err = new AxiosError$1(msg, AxiosError$1.ERR_NETWORK, config, request);
      err.event = event || null;
      reject(err);
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError$1(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
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
        reject(!cancel || cancel.type ? new CanceledError$1(null, config, request) : cancel);
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
      reject(new AxiosError$1("Unsupported protocol " + protocol + ":", AxiosError$1.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};
const composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError$1(`timeout of ${timeout}ms exceeded`, AxiosError$1.ETIMEDOUT));
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
const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (len < chunkSize) {
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
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
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
    async pull(controller) {
      try {
        const { done: done2, value } = await iterator2.next();
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
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator2.return();
    }
  }, {
    highWaterMark: 2
  });
};
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const { isFunction } = utils$1;
const globalFetchAPI = (({ Request, Response }) => ({
  Request,
  Response
}))(utils$1.global);
const {
  ReadableStream: ReadableStream$1,
  TextEncoder
} = utils$1.global;
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
const factory = (env) => {
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
  const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));
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
        throw new AxiosError$1(`Response type '${type}' is not supported`, AxiosError$1.ERR_NOT_SUPPORT, config);
      });
    });
  })();
  const getBodyLength = async (body) => {
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
      return (await _request.arrayBuffer()).byteLength;
    }
    if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
      return body.byteLength;
    }
    if (utils$1.isURLSearchParams(body)) {
      body = body + "";
    }
    if (utils$1.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  const resolveBodyLength = async (headers, body) => {
    const length = utils$1.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  return async (config) => {
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
    let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
    let request = null;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
    });
    let requestContentLength;
    try {
      if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
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
      const resolvedOptions = {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: "half",
        credentials: isCredentialsSupported ? withCredentials : void 0
      };
      request = isRequestSupported && new Request(url, resolvedOptions);
      let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
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
      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config);
      !isStreamResponse && unsubscribe && unsubscribe();
      return await new Promise((resolve, reject) => {
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
          new AxiosError$1("Network Error", AxiosError$1.ERR_NETWORK, config, request, err && err.response),
          {
            cause: err.cause || err
          }
        );
      }
      throw AxiosError$1.from(err, err && err.code, config, request, err && err.response);
    }
  };
};
const seedCache = /* @__PURE__ */ new Map();
const getFetch = (config) => {
  let env = config && config.env || {};
  const { fetch: fetch2, Request, Response } = env;
  const seeds = [
    Request,
    Response,
    fetch2
  ];
  let len = seeds.length, i = len, seed, target, map = seedCache;
  while (i--) {
    seed = seeds[i];
    target = map.get(seed);
    target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
    map = target;
  }
  return target;
};
getFetch();
const knownAdapters = {
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
const renderReason = (reason) => `- ${reason}`;
const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
function getAdapter$1(adapters2, config) {
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
        throw new AxiosError$1(`Unknown adapter '${id}'`);
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
    throw new AxiosError$1(
      `There is no suitable adapter to dispatch the request ` + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return adapter;
}
const adapters = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: getAdapter$1,
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
    throw new CanceledError$1(null, config);
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
  const adapter = adapters.getAdapter(config.adapter || defaults.adapter, config);
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
    if (!isCancel$1(reason)) {
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
const VERSION$1 = "1.13.5";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION$1 + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError$1(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError$1.ERR_DEPRECATED
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
    throw new AxiosError$1("options must be an object", AxiosError$1.ERR_BAD_OPTION_VALUE);
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
        throw new AxiosError$1("option " + opt + " must be " + result, AxiosError$1.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError$1("Unknown option " + opt, AxiosError$1.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
let Axios$1 = class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
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
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
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
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig$1(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean),
        legacyInterceptorReqResOrdering: validators.transitional(validators.boolean)
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
    if (config.allowAbsoluteUrls !== void 0) ;
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
      const transitional3 = config.transitional || transitionalDefaults;
      const legacyInterceptorReqResOrdering = transitional3 && transitional3.legacyInterceptorReqResOrdering;
      if (legacyInterceptorReqResOrdering) {
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      } else {
        requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      }
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
    config = mergeConfig$1(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig$1(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios$1.prototype[method] = generateHTTPMethod();
  Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
});
let CancelToken$1 = class CancelToken {
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
      if (!token._listeners) return;
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
      token.reason = new CanceledError$1(message, config, request);
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
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
};
function spread$1(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError$1(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode$1 = {
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
Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
  HttpStatusCode$1[value] = key;
});
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);
  utils$1.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
  utils$1.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios = createInstance(defaults);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError$1;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData$1;
axios.AxiosError = AxiosError$1;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread$1;
axios.isAxiosError = isAxiosError$1;
axios.mergeConfig = mergeConfig$1;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel,
  CancelToken: CancelToken2,
  VERSION,
  all: all2,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios;
const API_BASE_URL = "https://your-backend-railway-app.up.railway.app";
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json"
  }
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => response,
  (error) => {
    var _a;
    if (((_a = error.response) == null ? void 0 : _a.status) === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
const AuthContext = reactExports.createContext(null);
const useAuth = () => {
  const context = reactExports.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = reactExports.useState(null);
  const [token, setToken] = reactExports.useState(localStorage.getItem("token"));
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, [token]);
  const login = async (email, password) => {
    var _a, _b;
    try {
      if (!email || !password) {
        return { success: false, message: "Please provide both email and password" };
      }
      const response = await api.post("/auth/login", { email, password });
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setToken(response.data.token);
        setUser(response.data.user);
        return { success: true };
      }
      return { success: false, message: response.data.message || "Invalid credentials" };
    } catch (error) {
      return { success: false, message: ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Network error. Please check your connection and try again." };
    }
  };
  const register = async (name, email, password) => {
    var _a, _b;
    try {
      if (!name || !email || !password) {
        return { success: false, message: "Please provide all required fields" };
      }
      if (password.length < 6) {
        return { success: false, message: "Password must be at least 6 characters long" };
      }
      const response = await api.post("/auth/register", { name, email, password });
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setToken(response.data.token);
        setUser(response.data.user);
        return { success: true };
      }
      return { success: false, message: response.data.message || "Registration failed" };
    } catch (error) {
      return { success: false, message: ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Network error. Please check your connection and try again." };
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };
  const isAdmin = () => {
    return (user == null ? void 0 : user.role) === "admin";
  };
  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAdmin,
    isAuthenticated: !!user
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value, children });
};
const Navbar = () => {
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  const [isProfileOpen, setIsProfileOpen] = reactExports.useState(false);
  const { user, isAuthenticated, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { path: "/report-lost", label: "Report Lost", icon: Plus },
    { path: "/report-found", label: "Report Found", icon: Plus }
  ];
  const handleLogout = () => {
    logout();
    navigate("/");
    setIsProfileOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.nav,
    {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
      className: `navbar ${isScrolled ? "scrolled" : ""}`,
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1e3,
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: isScrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        transition: "all 0.3s ease"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            style: {
              display: "flex",
              alignItems: "center",
              gap: "0.75rem"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dim) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px var(--accent-gold-glow)"
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 22, color: "#050508", strokeWidth: 2.5 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1
                }, children: "ASTU" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--accent-gold)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase"
                }, children: "Lost & Found" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nav-links", style: {
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }, children: [
          isAuthenticated && isAdmin() ? (
            // Admin navigation - only show Admin Dashboard
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.span,
              {
                whileHover: { y: -2 },
                style: {
                  padding: "0.6rem 1rem",
                  borderRadius: "var(--radius-md)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: location.pathname === "/admin" ? "var(--accent-gold)" : "var(--accent-teal)",
                  background: location.pathname === "/admin" ? "rgba(245, 166, 35, 0.1)" : "rgba(0, 212, 170, 0.1)",
                  border: location.pathname === "/admin" ? "1px solid rgba(245, 166, 35, 0.2)" : "1px solid rgba(0, 212, 170, 0.2)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.2s ease"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 16 }),
                  "Admin Dashboard"
                ]
              }
            ) })
          ) : (
            // Regular user navigation - show Report Lost and Report Found
            navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: link.path, style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.span,
              {
                whileHover: { y: -2 },
                style: {
                  padding: "0.6rem 1.2rem",
                  borderRadius: "var(--radius-md)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: location.pathname === link.path ? "var(--accent-gold)" : "var(--text-secondary)",
                  background: location.pathname === link.path ? "rgba(245, 166, 35, 0.1)" : "transparent",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(link.icon, { size: 16 }),
                  link.label
                ]
              }
            ) }, link.path))
          ),
          isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem", marginLeft: "1rem" }, children: [
            !isAdmin() && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/my-claims", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.span,
              {
                whileHover: { y: -2 },
                style: {
                  padding: "0.6rem 1rem",
                  borderRadius: "var(--radius-md)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: location.pathname === "/my-claims" ? "var(--accent-teal)" : "var(--text-secondary)",
                  background: location.pathname === "/my-claims" ? "rgba(0, 212, 170, 0.1)" : "transparent",
                  border: location.pathname === "/my-claims" ? "1px solid rgba(0, 212, 170, 0.2)" : "1px solid transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.2s ease"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { size: 16 }),
                  "My Claims"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  onClick: () => setIsProfileOpen(!isProfileOpen),
                  style: {
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-full)",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-medium)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-primary)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 18 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isProfileOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10, scale: 0.95 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: 10, scale: 0.95 },
                  transition: { duration: 0.2 },
                  style: {
                    position: "absolute",
                    top: "calc(100% + 0.75rem)",
                    right: 0,
                    width: "220px",
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.75rem",
                    boxShadow: "var(--shadow-lg)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
                      padding: "0.75rem",
                      borderBottom: "1px solid var(--border-subtle)",
                      marginBottom: "0.5rem"
                    }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        fontSize: "0.95rem",
                        marginBottom: "0.25rem"
                      }, children: user == null ? void 0 : user.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)"
                      }, children: user == null ? void 0 : user.email })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: handleLogout,
                        style: {
                          width: "100%",
                          padding: "0.6rem 0.75rem",
                          borderRadius: "var(--radius-sm)",
                          background: "transparent",
                          border: "none",
                          color: "var(--status-lost)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          transition: "background 0.2s ease"
                        },
                        onMouseEnter: (e) => e.target.style.background = "rgba(255, 71, 87, 0.1)",
                        onMouseLeave: (e) => e.target.style.background = "transparent",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 16 }),
                          "Sign Out"
                        ]
                      }
                    )
                  ]
                }
              ) })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "0.5rem", marginLeft: "1rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                whileHover: { y: -2 },
                style: {
                  padding: "0.6rem 1.25rem",
                  borderRadius: "var(--radius-md)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  cursor: "pointer"
                },
                children: "Sign In"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                whileHover: { y: -2 },
                whileTap: { scale: 0.95 },
                style: {
                  padding: "0.6rem 1.25rem",
                  borderRadius: "var(--radius-md)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--bg-void)",
                  background: "linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dim) 100%)",
                  cursor: "pointer",
                  boxShadow: "0 0 15px var(--accent-gold-glow)"
                },
                children: "Get Started"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "mobile-menu-btn",
            onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
            style: {
              display: "none",
              padding: "0.5rem",
              background: "transparent",
              border: "none",
              color: "var(--text-primary)",
              cursor: "pointer"
            },
            children: isMobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media (max-width: 900px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      ` })
      ]
    }
  );
};
const ItemCard = ({ item, index = 0 }) => {
  const cardRef = reactExports.useRef(null);
  const getStatusBadge = (status2) => {
    const statusConfig = {
      lost: { label: "Lost", class: "badge-lost" },
      found: { label: "Found", class: "badge-found" },
      claimed: { label: "Claimed", class: "badge-claimed" }
    };
    return statusConfig[status2] || statusConfig.lost;
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };
  const status = getStatusBadge(item.status);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref: cardRef,
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      },
      whileHover: {
        y: -8,
        transition: { duration: 0.3 }
      },
      style: {
        background: "var(--bg-elevated)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border-subtle)",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer"
      },
      className: "item-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, var(--accent-gold), transparent)`,
          opacity: 0,
          transition: "opacity 0.3s ease"
        }, className: "card-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          height: "180px",
          background: item.imageURL ? `url(${item.imageURL}) center/cover` : "linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: [
          !item.imageURL && /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 48, color: "var(--text-muted)", opacity: 0.3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            position: "absolute",
            top: "1rem",
            right: "1rem"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge ${status.class}`, children: status.label }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "1.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--accent-gold)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "0.5rem"
          }, children: item.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }, children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: "0.9rem",
            color: "var(--text-secondary)",
            marginBottom: "1rem",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }, children: item.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            paddingTop: "1rem",
            borderTop: "1px solid var(--border-subtle)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--text-muted)",
              fontSize: "0.8rem"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.location })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--text-muted)",
              fontSize: "0.8rem"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(item.dateReported) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/claim/${item._id}`, style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              whileHover: { x: 4 },
              style: {
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1rem",
                padding: "0.75rem 1rem",
                background: item.status === "lost" ? "rgba(255, 71, 87, 0.1)" : "rgba(0, 212, 170, 0.1)",
                borderRadius: "var(--radius-md)",
                color: item.status === "lost" ? "var(--status-lost)" : "var(--accent-teal)",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "all 0.2s ease"
              },
              children: [
                item.status === "lost" ? "This is mine" : "Claim Item",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .item-card:hover .card-glow {
          opacity: 1;
        }
      ` })
      ]
    }
  );
};
const ItemContext = reactExports.createContext(null);
const useItems = () => {
  const context = reactExports.useContext(ItemContext);
  if (!context) {
    throw new Error("useItems must be used within an ItemProvider");
  }
  return context;
};
const ItemProvider = ({ children }) => {
  const { token } = useAuth();
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const fetchItems = async (filters = {}) => {
    var _a, _b;
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/items", { params: filters });
      setItems(response.data);
    } catch (err) {
      setError(((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to fetch items");
    } finally {
      setLoading(false);
    }
  };
  const reportItem = async (itemData) => {
    var _a, _b, _c;
    setLoading(true);
    setError(null);
    try {
      const response = await api.post("/items", itemData);
      if (response.data) {
        setItems((prev) => [response.data, ...prev]);
        return { success: true, item: response.data };
      }
      return { success: false, message: ((_a = response.data) == null ? void 0 : _a.message) || "Failed to report item" };
    } catch (err) {
      return { success: false, message: ((_c = (_b = err.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || "Network error. Please check your connection." };
    } finally {
      setLoading(false);
    }
  };
  const claimItem = async (itemId, proof) => {
    var _a, _b, _c;
    setLoading(true);
    setError(null);
    try {
      const response = await api.post("/claims", { itemId, proof });
      if (response.data) {
        return { success: true, claim: response.data };
      }
      return { success: false, message: ((_a = response.data) == null ? void 0 : _a.message) || "Failed to submit claim" };
    } catch (err) {
      return { success: false, message: ((_c = (_b = err.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || "Network error. Please check your connection." };
    } finally {
      setLoading(false);
    }
  };
  const getItemById = async (id) => {
    try {
      const response = await api.get(`/items/${id}`);
      return response.data;
    } catch (err) {
      return null;
    }
  };
  const getUserClaims = async () => {
    try {
      const response = await api.get("/claims");
      return response.data;
    } catch (err) {
      return [];
    }
  };
  const value = {
    items,
    loading,
    error,
    fetchItems,
    reportItem,
    claimItem,
    getItemById,
    getUserClaims,
    setItems
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ItemContext.Provider, { value, children });
};
const Home = () => {
  const { items, fetchItems, loading } = useItems();
  const { isAdmin, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = reactExports.useState({ x: 0, y: 0 });
  reactExports.useEffect(() => {
    if (isAuthenticated && isAdmin()) {
      navigate("/admin");
    }
  }, [isAuthenticated, isAdmin, navigate]);
  reactExports.useEffect(() => {
    fetchItems({ status: "found", limit: 6 });
  }, []);
  reactExports.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const stats = [
    { value: "2,500+", label: "Items Recovered", icon: CheckCircle },
    { value: "1,200+", label: "Happy Students", icon: Users },
    { value: "98%", label: "Success Rate", icon: Shield }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      padding: "6rem 2rem 4rem"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: {
            x: mousePosition.x * 2,
            y: mousePosition.y * 2
          },
          transition: { type: "spring", stiffness: 50 },
          style: {
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245, 166, 35, 0.15) 0%, transparent 70%)",
            top: "10%",
            left: "20%",
            filter: "blur(60px)",
            pointerEvents: "none"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: {
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5
          },
          transition: { type: "spring", stiffness: 50 },
          style: {
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 212, 170, 0.1) 0%, transparent 70%)",
            bottom: "10%",
            right: "15%",
            filter: "blur(60px)",
            pointerEvents: "none"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
        backgroundSize: "60px 60px",
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", style: { position: "relative", zIndex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          animate: "visible",
          variants: containerVariants,
          style: { textAlign: "center", maxWidth: "900px", margin: "0 auto" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: itemVariants,
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  background: "rgba(245, 166, 35, 0.1)",
                  border: "1px solid rgba(245, 166, 35, 0.2)",
                  borderRadius: "var(--radius-full)",
                  marginBottom: "2rem"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 16, color: "var(--accent-gold)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: "var(--accent-gold)",
                    letterSpacing: "0.05em"
                  }, children: "ASTU Campus Lost & Found" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                variants: itemVariants,
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 8vw, 5.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  marginBottom: "1.5rem",
                  background: "linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                },
                children: [
                  "Find What You Lost,",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                    background: "linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dim) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }, children: "Reclaim What's Yours" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                variants: itemVariants,
                style: {
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  color: "var(--text-secondary)",
                  maxWidth: "600px",
                  margin: "0 auto 2.5rem",
                  lineHeight: 1.7
                },
                children: "The central hub for recovering lost items across ASTU campus. Report found items, search for lost possessions, and connect with finders."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: itemVariants,
                style: {
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginBottom: "4rem"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/search", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.button,
                    {
                      whileHover: { scale: 1.05, y: -2 },
                      whileTap: { scale: 0.98 },
                      style: {
                        padding: "1rem 2rem",
                        background: "linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dim) 100%)",
                        border: "none",
                        borderRadius: "var(--radius-md)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--bg-void)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        boxShadow: "0 0 30px var(--accent-gold-glow)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 20 }),
                        "Browse Items"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/report-found", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.button,
                    {
                      whileHover: { scale: 1.05, y: -2 },
                      whileTap: { scale: 0.98 },
                      style: {
                        padding: "1rem 2rem",
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border-medium)",
                        borderRadius: "var(--radius-md)",
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 20 }),
                        "Report Found Item"
                      ]
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                variants: itemVariants,
                style: {
                  display: "flex",
                  justifyContent: "center",
                  gap: "3rem",
                  flexWrap: "wrap"
                },
                children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem"
                  }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { size: 20, color: "var(--accent-gold)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--text-primary)"
                    }, children: stat.value })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em"
                  }, children: stat.label })
                ] }, index))
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          animate: { y: [0, 10, 0] },
          transition: { repeat: Infinity, duration: 2 },
          style: {
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--text-muted)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.75rem", fontFamily: "var(--font-mono)" }, children: "SCROLL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, var(--accent-gold), transparent)"
            } })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      padding: "6rem 2rem",
      position: "relative"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--accent-teal)",
                textTransform: "uppercase",
                letterSpacing: "0.1em"
              }, children: "Recently Found" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginTop: "0.5rem"
              }, children: "Items Ready for Claim" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/search", style: {
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--accent-gold)",
              fontSize: "0.95rem",
              fontWeight: 500,
              textDecoration: "none"
            }, children: [
              "View All ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
            ] })
          ]
        }
      ),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "1.5rem"
      }, children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        height: "380px",
        background: "var(--bg-elevated)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border-subtle)",
        animation: "pulse 1.5s infinite"
      } }, i)) }) : items.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "1.5rem"
      }, children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ItemCard, { item, index }, item._id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          style: {
            textAlign: "center",
            padding: "4rem 2rem",
            background: "var(--bg-elevated)",
            borderRadius: "var(--radius-lg)",
            border: "1px dashed var(--border-medium)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 48, color: "var(--text-muted)", style: { margin: "0 auto 1rem" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              color: "var(--text-primary)",
              marginBottom: "0.5rem"
            }, children: "No Items Found Yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-muted)" }, children: "Be the first to report a found item!" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      padding: "6rem 2rem",
      background: "var(--bg-elevated)",
      position: "relative",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, var(--border-medium), transparent)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            style: { textAlign: "center", marginBottom: "4rem" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--accent-gold)",
                textTransform: "uppercase",
                letterSpacing: "0.1em"
              }, children: "Simple Process" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginTop: "0.5rem"
              }, children: "How It Works" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem"
        }, children: [
          {
            step: "01",
            title: "Search or Report",
            description: "Browse the archive for lost items or report something you found on campus.",
            color: "var(--accent-gold)"
          },
          {
            step: "02",
            title: "Verify Ownership",
            description: "Claimants provide proof of ownership. Admins review and verify claims.",
            color: "var(--accent-teal)"
          },
          {
            step: "03",
            title: "Reunite",
            description: "Once approved, arrange a meeting to return the item to its owner.",
            color: "var(--status-claimed)"
          }
        ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.2 },
            style: {
              padding: "2rem",
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-subtle)",
              position: "relative"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                fontFamily: "var(--font-display)",
                fontSize: "3rem",
                fontWeight: 800,
                color: item.color,
                opacity: 0.3,
                position: "absolute",
                top: "1rem",
                right: "1.5rem"
              }, children: item.step }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "1rem"
              }, children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", lineHeight: 1.7 }, children: item.description })
            ]
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      padding: "8rem 2rem",
      position: "relative",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: {
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5
          },
          style: {
            position: "absolute",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245, 166, 35, 0.1) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(80px)",
            pointerEvents: "none"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", style: { position: "relative", zIndex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          style: {
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
              lineHeight: 1.2
            }, children: "Something Lost on Campus?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              marginBottom: "2.5rem",
              lineHeight: 1.7
            }, children: "Whether you lost something or found an item, we're here to help reunite you with your belongings." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/report-lost", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  whileHover: { scale: 1.05, y: -2 },
                  style: {
                    padding: "1rem 2rem",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-medium)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  },
                  children: "Report Lost Item"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/report-found", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  whileHover: { scale: 1.05, y: -2 },
                  style: {
                    padding: "1rem 2rem",
                    background: "linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dim) 100%)",
                    border: "none",
                    borderRadius: "var(--radius-md)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--bg-void)",
                    cursor: "pointer",
                    boxShadow: "0 0 25px var(--accent-gold-glow)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  },
                  children: "Report Found Item"
                }
              ) })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { style: {
      padding: "3rem 2rem",
      borderTop: "1px solid var(--border-subtle)",
      textAlign: "center"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.8rem",
      color: "var(--text-muted)"
    }, children: "© 2026 ASTU Lost & Found. Built for the campus community developed by Kalab Bilhatu." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      ` })
  ] });
};
const Login = () => {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await login(email, password);
      if (result.success) {
        navigate("/");
      } else {
        setError(result.message || "Invalid credentials");
      }
    } catch (error2) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    position: "relative"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(245, 166, 35, 0.1) 0%, transparent 70%)",
      top: "-20%",
      left: "-10%",
      filter: "blur(60px)",
      pointerEvents: "none"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(0, 212, 170, 0.08) 0%, transparent 70%)",
      bottom: "-20%",
      right: "-10%",
      filter: "blur(60px)",
      pointerEvents: "none"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        style: {
          width: "100%",
          maxWidth: "440px",
          background: "var(--bg-elevated)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          padding: "2.5rem",
          position: "relative",
          zIndex: 1
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "2rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.5rem"
            }, children: "Welcome Back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", fontSize: "0.95rem" }, children: "Sign in to access your account" })
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              style: {
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                background: "rgba(255, 71, 87, 0.1)",
                border: "1px solid rgba(255, 71, 87, 0.2)",
                borderRadius: "var(--radius-md)",
                marginBottom: "1.5rem",
                color: "var(--status-lost)",
                fontSize: "0.9rem"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 18 }),
                error
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.25rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                marginBottom: "0.5rem"
              }, children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18, style: {
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-muted)"
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    placeholder: "student@astu.edu",
                    required: true,
                    style: {
                      width: "100%",
                      padding: "0.875rem 1rem 0.875rem 2.75rem",
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-md)",
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                      transition: "all 0.2s ease"
                    }
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                marginBottom: "0.5rem"
              }, children: "Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 18, style: {
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-muted)"
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: showPassword ? "text" : "password",
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    placeholder: "Enter your password",
                    required: true,
                    style: {
                      width: "100%",
                      padding: "0.875rem 2.75rem 0.875rem 2.75rem",
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-md)",
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                      transition: "all 0.2s ease"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPassword(!showPassword),
                    style: {
                      position: "absolute",
                      right: "0.75rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent",
                      border: "none",
                      color: "var(--text-muted)",
                      cursor: "pointer",
                      padding: "0.25rem"
                    },
                    children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 18 })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                type: "submit",
                disabled: loading,
                whileHover: { scale: loading ? 1 : 1.02 },
                whileTap: { scale: loading ? 1 : 0.98 },
                style: {
                  width: "100%",
                  padding: "1rem",
                  background: loading ? "var(--bg-surface)" : "linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dim) 100%)",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: loading ? "var(--text-muted)" : "var(--bg-void)",
                  cursor: loading ? "not-allowed" : "pointer",
                  boxShadow: loading ? "none" : "0 0 25px var(--accent-gold-glow)",
                  transition: "all 0.3s ease"
                },
                children: loading ? "Signing in..." : "Sign In"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
            textAlign: "center",
            marginTop: "1.5rem",
            color: "var(--text-secondary)",
            fontSize: "0.9rem"
          }, children: [
            "Don't have an account?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", style: {
              color: "var(--accent-gold)",
              fontWeight: 500
            }, children: "Create one" })
          ] })
        ]
      }
    )
  ] });
};
const Register = () => {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }
    const result = await register(name, email, password);
    if (result.success) {
      navigate("/");
    } else {
      setError(result.message || "Registration failed");
    }
    setLoading(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    position: "relative"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(0, 212, 170, 0.1) 0%, transparent 70%)",
      top: "-20%",
      right: "-10%",
      filter: "blur(60px)",
      pointerEvents: "none"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(245, 166, 35, 0.08) 0%, transparent 70%)",
      bottom: "-20%",
      left: "-10%",
      filter: "blur(60px)",
      pointerEvents: "none"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        style: {
          width: "100%",
          maxWidth: "440px",
          background: "var(--bg-elevated)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          padding: "2.5rem",
          position: "relative",
          zIndex: 1
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "2rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.5rem"
            }, children: "Create Account" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", fontSize: "0.95rem" }, children: "Join the campus community" })
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              style: {
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                background: "rgba(255, 71, 87, 0.1)",
                border: "1px solid rgba(255, 71, 87, 0.2)",
                borderRadius: "var(--radius-md)",
                marginBottom: "1.5rem",
                color: "var(--status-lost)",
                fontSize: "0.9rem"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 18 }),
                error
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.25rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                marginBottom: "0.5rem"
              }, children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 18, style: {
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-muted)"
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    placeholder: "yosef debebe",
                    required: true,
                    style: {
                      width: "100%",
                      padding: "0.875rem 1rem 0.875rem 2.75rem",
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-md)",
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                      transition: "all 0.2s ease"
                    }
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.25rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                marginBottom: "0.5rem"
              }, children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18, style: {
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-muted)"
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    placeholder: "student@astu.edu",
                    required: true,
                    style: {
                      width: "100%",
                      padding: "0.875rem 1rem 0.875rem 2.75rem",
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-md)",
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                      transition: "all 0.2s ease"
                    }
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                marginBottom: "0.5rem"
              }, children: "Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 18, style: {
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-muted)"
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: showPassword ? "text" : "password",
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    placeholder: "Min. 6 characters",
                    required: true,
                    style: {
                      width: "100%",
                      padding: "0.875rem 2.75rem 0.875rem 2.75rem",
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-md)",
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                      transition: "all 0.2s ease"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPassword(!showPassword),
                    style: {
                      position: "absolute",
                      right: "0.75rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent",
                      border: "none",
                      color: "var(--text-muted)",
                      cursor: "pointer",
                      padding: "0.25rem"
                    },
                    children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 18 })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                type: "submit",
                disabled: loading,
                whileHover: { scale: loading ? 1 : 1.02 },
                whileTap: { scale: loading ? 1 : 0.98 },
                style: {
                  width: "100%",
                  padding: "1rem",
                  background: loading ? "var(--bg-surface)" : "linear-gradient(135deg, var(--accent-teal) 0%, var(--accent-teal-dim) 100%)",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: loading ? "var(--text-muted)" : "var(--bg-void)",
                  cursor: loading ? "not-allowed" : "pointer",
                  boxShadow: loading ? "none" : "0 0 25px var(--accent-teal-glow)",
                  transition: "all 0.3s ease"
                },
                children: loading ? "Creating Account..." : "Create Account"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
            textAlign: "center",
            marginTop: "1.5rem",
            color: "var(--text-secondary)",
            fontSize: "0.9rem"
          }, children: [
            "Already have an account?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", style: {
              color: "var(--accent-gold)",
              fontWeight: 500
            }, children: "Sign in" })
          ] })
        ]
      }
    )
  ] });
};
const categories$2 = [
  { value: "", label: "All" },
  { value: "ID Card", label: "ID Card" },
  { value: "Electronics", label: "Electronics" },
  { value: "Books", label: "Books" },
  { value: "Clothing", label: "Clothing" },
  { value: "Other", label: "Other" }
];
const statuses = [
  { value: "", label: "All Status" },
  { value: "lost", label: "Lost" },
  { value: "found", label: "Found" }
];
const SearchBar = ({ onSearch, initialSearch = "", initialCategory = "", initialStatus = "" }) => {
  const [searchTerm, setSearchTerm] = reactExports.useState(initialSearch);
  const [category, setCategory] = reactExports.useState(initialCategory);
  const [status, setStatus] = reactExports.useState(initialStatus);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ search: searchTerm, category, status });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          position: "relative",
          marginBottom: "1rem"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Search,
            {
              size: 20,
              style: {
                position: "absolute",
                left: "1.25rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search for items...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              style: {
                width: "100%",
                padding: "1rem 3rem 1rem 3.5rem",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                fontSize: "1rem",
                color: "var(--text-primary)",
                transition: "all 0.3s ease"
              }
            }
          ),
          searchTerm && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setSearchTerm(""),
              style: {
                position: "absolute",
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                padding: "0.25rem"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "1", minWidth: "200px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: category,
              onChange: (e) => setCategory(e.target.value),
              style: {
                width: "100%",
                padding: "0.875rem 1.25rem",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                fontSize: "0.9rem",
                color: "var(--text-primary)",
                cursor: "pointer",
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238888a0' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center"
              },
              children: categories$2.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: cat.value, children: cat.label }, cat.value))
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "1", minWidth: "150px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: status,
              onChange: (e) => setStatus(e.target.value),
              style: {
                width: "100%",
                padding: "0.875rem 1.25rem",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                fontSize: "0.9rem",
                color: "var(--text-primary)",
                cursor: "pointer",
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238888a0' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center"
              },
              children: statuses.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.value, children: s.label }, s.value))
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              type: "submit",
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              style: {
                padding: "0.875rem 2rem",
                background: "linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dim) 100%)",
                border: "none",
                borderRadius: "var(--radius-md)",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--bg-void)",
                cursor: "pointer",
                boxShadow: "0 0 20px var(--accent-gold-glow)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              },
              children: "Search"
            }
          )
        ] })
      ] })
    }
  );
};
const SearchItems = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { items, fetchItems, loading } = useItems();
  const [filters, setFilters] = reactExports.useState({
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "",
    status: searchParams.get("status") || ""
  });
  reactExports.useEffect(() => {
    fetchItems(filters);
  }, [filters]);
  const handleSearch = (newFilters) => {
    setFilters(newFilters);
    const params = new URLSearchParams();
    if (newFilters.search) params.set("search", newFilters.search);
    if (newFilters.category) params.set("category", newFilters.category);
    if (newFilters.status) params.set("status", newFilters.status);
    setSearchParams(params);
    fetchItems(newFilters);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { minHeight: "100vh", paddingTop: "100px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          style: { marginBottom: "3rem" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.5rem"
            }, children: "Browse Items" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", fontSize: "1.1rem" }, children: "Search through the archive of lost and found items" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: "2.5rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SearchBar,
        {
          onSearch: handleSearch,
          initialSearch: filters.search,
          initialCategory: filters.category,
          initialStatus: filters.status
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: "2rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1.5rem",
        flexWrap: "wrap",
        gap: "1rem"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        fontFamily: "var(--font-mono)",
        fontSize: "0.85rem",
        color: "var(--text-muted)"
      }, children: loading ? "Searching..." : `${items.length} items found` }) }) }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "1.5rem"
      }, children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        height: "380px",
        background: "var(--bg-elevated)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border-subtle)",
        animation: "pulse 1.5s infinite"
      } }, i)) }) : items.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "1.5rem"
      }, children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ItemCard, { item, index }, item._id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          style: {
            textAlign: "center",
            padding: "5rem 2rem",
            background: "var(--bg-elevated)",
            borderRadius: "var(--radius-lg)",
            border: "1px dashed var(--border-medium)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 64, color: "var(--text-muted)", style: { margin: "0 auto 1.5rem", opacity: 0.3 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              color: "var(--text-primary)",
              marginBottom: "0.75rem"
            }, children: "No Items Found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              color: "var(--text-muted)",
              maxWidth: "400px",
              margin: "0 auto",
              lineHeight: 1.7
            }, children: "We couldn't find any items matching your search. Try adjusting your filters or check back later." })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      ` })
  ] });
};
const categories$1 = [
  { value: "ID Card", label: "ID Card" },
  { value: "Electronics", label: "Electronics" },
  { value: "Books", label: "Books" },
  { value: "Clothing", label: "Clothing" },
  { value: "Other", label: "Other" }
];
const locations$1 = [
  "Stadium (futsal)",
  "Cafe",
  "borchamu Building",
  "central library",
  "applied library",
  "females library",
  "Geda gate",
  "Other"
];
const ReportLost = () => {
  const [formData, setFormData] = reactExports.useState({
    title: "",
    description: "",
    category: "",
    location: "",
    dateReported: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  });
  const [imageFile, setImageFile] = reactExports.useState(null);
  const [imagePreview, setImagePreview] = reactExports.useState("");
  const [imageError, setImageError] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [success, setSuccess] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const { isAuthenticated } = useAuth();
  const { reportItem } = useItems();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setImageError("Please upload an image file (JPEG, PNG, GIF, etc.)");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setImageError("Image size must be less than 5MB");
        return;
      }
      setImageError("");
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e2) => {
        setImagePreview(e2.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageChange({ target: { files: [file] } });
    }
  };
  const handleImageDragOver = (e) => {
    e.preventDefault();
  };
  const removeImage = () => {
    setImageFile(null);
    setImagePreview("");
    setImageError("");
    const fileInput = document.getElementById("image-upload");
    if (fileInput) {
      fileInput.value = "";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    setError("");
    let imageURL = "";
    if (imageFile) {
      try {
        const reader = new FileReader();
        reader.onload = async (e2) => {
          imageURL = e2.target.result;
          const result = await reportItem({
            ...formData,
            status: "lost",
            imageURL
          });
          if (result.success) {
            setSuccess(true);
            setTimeout(() => navigate("/"), 2e3);
          } else {
            setError(result.message || "Failed to report item");
          }
          setLoading(false);
        };
        reader.readAsDataURL(imageFile);
      } catch (err) {
        setError("Failed to process image");
        setLoading(false);
      }
    } else {
      setLoading(true);
      const result = await reportItem({ ...formData, status: "lost" });
      if (result.success) {
        setSuccess(true);
        setTimeout(() => navigate("/"), 2e3);
      } else {
        setError(result.message || "Failed to report item");
      }
      setLoading(false);
    }
  };
  if (success) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, style: { textAlign: "center", padding: "3rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { delay: 0.2, type: "spring" },
          style: { width: "80px", height: "80px", borderRadius: "50%", background: "rgba(0, 212, 170, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { size: 40, color: "var(--accent-teal)" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)" }, children: "Report Submitted!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)" }, children: "Your lost item report has been recorded." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: "100vh", paddingTop: "100px", paddingBottom: "4rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, style: { maxWidth: "640px", margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "2.5rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--status-lost)", textTransform: "uppercase" }, children: "Lost Something?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.5rem" }, children: "Report Lost Item" })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, style: { display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", background: "rgba(255, 71, 87, 0.1)", border: "1px solid rgba(255, 71, 87, 0.2)", borderRadius: "var(--radius-md)", marginBottom: "1.5rem", color: "var(--status-lost)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 18 }),
      error
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "2rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }, children: "Item Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", name: "title", value: formData.title, onChange: handleChange, placeholder: "e.g., Scientific Calculator", required: true, style: { width: "100%", padding: "0.875rem 1rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", fontSize: "0.95rem", color: "var(--text-primary)" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }, children: "Category *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "category", value: formData.category, onChange: handleChange, required: true, style: { width: "100%", padding: "0.875rem 1rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", fontSize: "0.95rem", color: "var(--text-primary)", cursor: "pointer" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a category" }),
            categories$1.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: cat.value, children: cat.label }, cat.value))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }, children: "Last Seen Location *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "location", value: formData.location, onChange: handleChange, required: true, style: { width: "100%", padding: "0.875rem 1rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", fontSize: "0.95rem", color: "var(--text-primary)", cursor: "pointer" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select location" }),
            locations$1.map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: loc, children: loc }, loc))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }, children: "Date Lost *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", name: "dateReported", value: formData.dateReported, onChange: handleChange, required: true, style: { width: "100%", padding: "0.875rem 1rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", fontSize: "0.95rem", color: "var(--text-primary)" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "2rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }, children: "Detailed Description *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "description", value: formData.description, onChange: handleChange, placeholder: "Describe your item in detail...", required: true, rows: 5, style: { width: "100%", padding: "0.875rem 1rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", fontSize: "0.95rem", color: "var(--text-primary)", resize: "vertical", minHeight: "120px" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "2rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.75rem" }, children: "Item Photo (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onDrop: handleImageDrop,
              onDragOver: handleImageDragOver,
              style: {
                border: imageError ? "2px dashed var(--status-lost)" : "2px dashed var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "2rem",
                textAlign: "center",
                background: "var(--bg-surface)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                minHeight: "150px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              },
              children: [
                imagePreview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", width: "100%", maxWidth: "300px" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: imagePreview,
                      alt: "Preview",
                      style: {
                        width: "100%",
                        maxHeight: "200px",
                        objectFit: "cover",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-subtle)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: removeImage,
                      style: {
                        position: "absolute",
                        top: "-10px",
                        right: "-10px",
                        background: "var(--status-lost)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 40, color: "var(--text-muted)", style: { marginBottom: "1rem" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-muted)", marginBottom: "0.5rem" }, children: "Drag and drop your item photo here, or click to browse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)", opacity: 0.8 }, children: "Supports JPEG, PNG, GIF • Max 5MB" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "image-upload",
                    type: "file",
                    accept: "image/*",
                    onChange: handleImageChange,
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      opacity: 0,
                      cursor: "pointer"
                    }
                  }
                )
              ]
            }
          ),
          imageError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--status-lost)", fontSize: "0.8rem", marginTop: "0.5rem" }, children: imageError }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.5rem" }, children: "Tip: For ID cards, ensure the photo is clear and all details are visible" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.button,
          {
            type: "submit",
            disabled: loading,
            whileHover: { scale: loading ? 1 : 1.02 },
            whileTap: { scale: loading ? 1 : 0.98 },
            style: { width: "100%", padding: "1rem", background: loading ? "var(--bg-surface)" : "linear-gradient(135deg, var(--status-lost) 0%, #cc3a47 100%)", border: "none", borderRadius: "var(--radius-md)", fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", cursor: loading ? "not-allowed" : "pointer", boxShadow: loading ? "none" : "0 0 25px rgba(255, 71, 87, 0.3)" },
            children: loading ? "Submitting..." : "Report Lost Item"
          }
        )
      ] }),
      !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { textAlign: "center", marginTop: "1.5rem", color: "var(--text-muted)", fontSize: "0.875rem" }, children: [
        "Need to sign in? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", style: { color: "var(--accent-gold)" }, children: "Sign in" })
      ] })
    ] })
  ] }) }) });
};
const categories = [
  { value: "ID Card", label: "ID Card" },
  { value: "Electronics", label: "Electronics" },
  { value: "Books", label: "Books" },
  { value: "Clothing", label: "Clothing" },
  { value: "Other", label: "Other" }
];
const locations = [
  "Stadium (futsal)",
  "Cafe",
  "borchamu Building",
  "central library",
  "applied library",
  "females library",
  "Geda gate",
  "Other"
];
const ReportFound = () => {
  const [formData, setFormData] = reactExports.useState({
    title: "",
    description: "",
    category: "",
    location: "",
    dateReported: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  });
  const [imageFile, setImageFile] = reactExports.useState(null);
  const [imagePreview, setImagePreview] = reactExports.useState("");
  const [imageError, setImageError] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [success, setSuccess] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const { isAuthenticated } = useAuth();
  const { reportItem } = useItems();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setImageError("Please upload an image file (JPEG, PNG, GIF, etc.)");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setImageError("Image size must be less than 5MB");
        return;
      }
      setImageError("");
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e2) => {
        setImagePreview(e2.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageChange({ target: { files: [file] } });
    }
  };
  const handleImageDragOver = (e) => {
    e.preventDefault();
  };
  const removeImage = () => {
    setImageFile(null);
    setImagePreview("");
    setImageError("");
    const fileInput = document.getElementById("image-upload");
    if (fileInput) {
      fileInput.value = "";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    setError("");
    let imageURL = "";
    if (imageFile) {
      try {
        const reader = new FileReader();
        reader.onload = async (e2) => {
          imageURL = e2.target.result;
          const result = await reportItem({
            ...formData,
            status: "found",
            imageURL
          });
          if (result.success) {
            setSuccess(true);
            setTimeout(() => navigate("/"), 2e3);
          } else {
            setError(result.message || "Failed to report item");
          }
          setLoading(false);
        };
        reader.readAsDataURL(imageFile);
      } catch (err) {
        setError("Failed to process image");
        setLoading(false);
      }
    } else {
      setLoading(true);
      const result = await reportItem({ ...formData, status: "found" });
      if (result.success) {
        setSuccess(true);
        setTimeout(() => navigate("/"), 2e3);
      } else {
        setError(result.message || "Failed to report item");
      }
      setLoading(false);
    }
  };
  if (success) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, style: { textAlign: "center", padding: "3rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { delay: 0.2, type: "spring" },
          style: { width: "80px", height: "80px", borderRadius: "50%", background: "rgba(0, 212, 170, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { size: 40, color: "var(--accent-teal)" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)" }, children: "Thank You!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)" }, children: "Your found item report has been submitted." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: "100vh", paddingTop: "100px", paddingBottom: "4rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, style: { maxWidth: "640px", margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "2.5rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-teal)", textTransform: "uppercase" }, children: "Found Something?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.5rem" }, children: "Report Found Item" })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, style: { display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", background: "rgba(255, 71, 87, 0.1)", border: "1px solid rgba(255, 71, 87, 0.2)", borderRadius: "var(--radius-md)", marginBottom: "1.5rem", color: "var(--status-lost)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 18 }),
      error
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "2rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }, children: "Item Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", name: "title", value: formData.title, onChange: handleChange, placeholder: "e.g., Black Wallet", required: true, style: { width: "100%", padding: "0.875rem 1rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", fontSize: "0.95rem", color: "var(--text-primary)" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }, children: "Category *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "category", value: formData.category, onChange: handleChange, required: true, style: { width: "100%", padding: "0.875rem 1rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", fontSize: "0.95rem", color: "var(--text-primary)", cursor: "pointer" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a category" }),
            categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: cat.value, children: cat.label }, cat.value))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }, children: "Where Did You Find It? *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "location", value: formData.location, onChange: handleChange, required: true, style: { width: "100%", padding: "0.875rem 1rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", fontSize: "0.95rem", color: "var(--text-primary)", cursor: "pointer" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select location" }),
            locations.map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: loc, children: loc }, loc))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }, children: "Date Found *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", name: "dateReported", value: formData.dateReported, onChange: handleChange, required: true, style: { width: "100%", padding: "0.875rem 1rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", fontSize: "0.95rem", color: "var(--text-primary)" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "2rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }, children: "Detailed Description *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "description", value: formData.description, onChange: handleChange, placeholder: "Describe the item in detail...", required: true, rows: 5, style: { width: "100%", padding: "0.875rem 1rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", fontSize: "0.95rem", color: "var(--text-primary)", resize: "vertical", minHeight: "120px" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "2rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.75rem" }, children: "Item Photo (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onDrop: handleImageDrop,
              onDragOver: handleImageDragOver,
              style: {
                border: imageError ? "2px dashed var(--status-lost)" : "2px dashed var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "2rem",
                textAlign: "center",
                background: "var(--bg-surface)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                minHeight: "150px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              },
              children: [
                imagePreview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", width: "100%", maxWidth: "300px" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: imagePreview,
                      alt: "Preview",
                      style: {
                        width: "100%",
                        maxHeight: "200px",
                        objectFit: "cover",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-subtle)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: removeImage,
                      style: {
                        position: "absolute",
                        top: "-10px",
                        right: "-10px",
                        background: "var(--status-lost)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 40, color: "var(--text-muted)", style: { marginBottom: "1rem" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-muted)", marginBottom: "0.5rem" }, children: "Drag and drop your item photo here, or click to browse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)", opacity: 0.8 }, children: "Supports JPEG, PNG, GIF • Max 5MB" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "image-upload",
                    type: "file",
                    accept: "image/*",
                    onChange: handleImageChange,
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      opacity: 0,
                      cursor: "pointer"
                    }
                  }
                )
              ]
            }
          ),
          imageError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--status-lost)", fontSize: "0.8rem", marginTop: "0.5rem" }, children: imageError }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.5rem" }, children: "Tip: For ID cards, ensure the photo is clear and all details are visible" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.button,
          {
            type: "submit",
            disabled: loading,
            whileHover: { scale: loading ? 1 : 1.02 },
            whileTap: { scale: loading ? 1 : 0.98 },
            style: { width: "100%", padding: "1rem", background: loading ? "var(--bg-surface)" : "linear-gradient(135deg, var(--accent-teal) 0%, var(--accent-teal-dim) 100%)", border: "none", borderRadius: "var(--radius-md)", fontSize: "1rem", fontWeight: 600, color: "var(--bg-void)", cursor: loading ? "not-allowed" : "pointer", boxShadow: loading ? "none" : "0 0 25px var(--accent-teal-glow)" },
            children: loading ? "Submitting..." : "Report Found Item"
          }
        )
      ] }),
      !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { textAlign: "center", marginTop: "1.5rem", color: "var(--text-muted)", fontSize: "0.875rem" }, children: [
        "Need to sign in? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", style: { color: "var(--accent-gold)" }, children: "Sign in" })
      ] })
    ] })
  ] }) }) });
};
const ClaimItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const { getItemById, claimItem, getUserClaims } = useItems();
  const [item, setItem] = reactExports.useState(null);
  const [proof, setProof] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [success, setSuccess] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [userClaims, setUserClaims] = reactExports.useState([]);
  const [claimsLoading, setClaimsLoading] = reactExports.useState(true);
  const [userClaimForItem, setUserClaimForItem] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const fetchData = async () => {
      const itemData = await getItemById(id);
      setItem(itemData);
      setLoading(false);
      if (isAuthenticated) {
        const claimsData = await getUserClaims();
        setUserClaims(claimsData);
        setClaimsLoading(false);
        const claimForItem = claimsData.find((claim) => {
          var _a;
          return ((_a = claim.item) == null ? void 0 : _a._id) === id;
        });
        setUserClaimForItem(claimForItem);
      } else {
        setClaimsLoading(false);
      }
    };
    fetchData();
  }, [id, isAuthenticated]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    setError("");
    setSubmitting(true);
    const result = await claimItem(id, proof);
    if (result.success) {
      setSuccess(true);
    } else {
      setError(result.message || "Failed to submit claim");
    }
    setSubmitting(false);
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { minHeight: "100vh", paddingTop: "100px", display: "flex", alignItems: "center", justifyContent: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "40px", height: "40px", border: "3px solid var(--border-medium)", borderTopColor: "var(--accent-gold)", borderRadius: "50%", animation: "spin 1s linear infinite" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `@keyframes spin { to { transform: rotate(360deg); } }` })
    ] });
  }
  if (!item) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: "100vh", paddingTop: "100px", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 48, color: "var(--status-lost)", style: { margin: "0 auto 1rem" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.5rem" }, children: "Item Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-muted)", marginBottom: "1.5rem" }, children: "This item may have been claimed or removed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/search", style: { color: "var(--accent-gold)" }, children: "Browse Items" })
    ] }) });
  }
  if (success) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, style: { textAlign: "center", padding: "3rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { delay: 0.2, type: "spring" },
          style: { width: "80px", height: "80px", borderRadius: "50%", background: "rgba(245, 166, 35, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { size: 40, color: "var(--accent-gold)" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)" }, children: "Claim Submitted!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", marginTop: "0.75rem" }, children: "Your claim has been submitted for review." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", style: { display: "inline-block", marginTop: "1.5rem", padding: "0.75rem 1.5rem", background: "var(--accent-gold)", color: "var(--bg-void)", borderRadius: "var(--radius-md)", fontWeight: 600, textDecoration: "none" }, children: "Return Home" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: "100vh", paddingTop: "100px", paddingBottom: "4rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, style: { maxWidth: "800px", margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate(-1), style: { display: "flex", alignItems: "center", gap: "0.5rem", background: "transparent", border: "none", color: "var(--text-muted)", fontSize: "0.9rem", cursor: "pointer", marginBottom: "2rem", padding: 0 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 }),
      " Go Back"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid", gap: "2rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { height: "250px", background: item.imageURL ? `url(${item.imageURL}) center/cover` : "linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }, children: [
          !item.imageURL && /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 64, color: "var(--text-muted)", opacity: 0.3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge badge-${item.status}`, style: { position: "absolute", top: "1rem", right: "1rem" }, children: item.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }, children: item.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }, children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }, children: item.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)", flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.9rem" }, children: item.location })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.9rem" }, children: formatDate(item.dateReported) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "2rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.5rem" }, children: "Claim This Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.7 }, children: "Provide proof of ownership to help us verify your claim." }),
        userClaimForItem && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, style: { marginBottom: "1.5rem", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", background: "var(--bg-surface)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }, children: [
            userClaimForItem.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 20, color: "var(--accent-teal)" }),
            userClaimForItem.status === "approved" && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { size: 20, color: "var(--status-found)" }),
            userClaimForItem.status === "rejected" && /* @__PURE__ */ jsxRuntimeExports.jsx(XCircle, { size: 20, color: "var(--status-lost)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)" }, children: [
              "Your Claim: ",
              userClaimForItem.status === "pending" ? "Under Review" : userClaimForItem.status === "approved" ? "Approved" : "Rejected"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "0.75rem" }, children: [
            "Submitted on ",
            formatDate(userClaimForItem.dateSubmitted)
          ] }),
          userClaimForItem.status === "approved" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, style: { background: "rgba(46, 213, 115, 0.1)", border: "1px solid rgba(46, 213, 115, 0.3)", borderRadius: "var(--radius-sm)", padding: "0.75rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "0.5rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ready for Collection!" }),
              " Your claim has been approved."
            ] }),
            userClaimForItem.collectionInstructions && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem", color: "var(--text-muted)", background: "rgba(245, 166, 35, 0.1)", border: "1px solid rgba(245, 166, 35, 0.2)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Collection Instructions:" }),
              " ",
              userClaimForItem.collectionInstructions
            ] })
          ] }),
          userClaimForItem.status === "rejected" && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, style: { background: "rgba(255, 71, 87, 0.1)", border: "1px solid rgba(255, 71, 87, 0.3)", borderRadius: "var(--radius-sm)", padding: "0.75rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", fontSize: "0.9rem" }, children: "Unfortunately, your claim was not approved. If you believe this is an error, please contact the admin office for clarification." }) }),
          userClaimForItem.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, style: { background: "rgba(0, 212, 170, 0.1)", border: "1px solid rgba(0, 212, 170, 0.3)", borderRadius: "var(--radius-sm)", padding: "0.75rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", fontSize: "0.9rem" }, children: "Your claim is currently being reviewed by our admin team. You will be notified once a decision has been made." }) })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, style: { display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", background: "rgba(255, 71, 87, 0.1)", border: "1px solid rgba(255, 71, 87, 0.2)", borderRadius: "var(--radius-md)", marginBottom: "1.5rem", color: "var(--status-lost)", fontSize: "0.9rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 18 }),
          error
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }, children: "Proof of Ownership *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: proof, onChange: (e) => setProof(e.target.value), placeholder: "Provide details only you would know...", required: true, rows: 5, style: { width: "100%", padding: "0.875rem 1rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", fontSize: "0.95rem", color: "var(--text-primary)", resize: "vertical", minHeight: "150px" } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              type: "submit",
              disabled: submitting,
              whileHover: { scale: submitting ? 1 : 1.02 },
              whileTap: { scale: submitting ? 1 : 0.98 },
              style: { width: "100%", padding: "1rem", background: submitting ? "var(--bg-surface)" : "linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dim) 100%)", border: "none", borderRadius: "var(--radius-md)", fontSize: "1rem", fontWeight: 600, color: "var(--bg-void)", cursor: submitting ? "not-allowed" : "pointer", boxShadow: submitting ? "none" : "0 0 25px var(--accent-gold-glow)" },
              children: submitting ? "Submitting Claim..." : "Submit Claim"
            }
          ),
          !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { textAlign: "center", marginTop: "1rem", color: "var(--text-muted)", fontSize: "0.875rem" }, children: [
            "Need to sign in? ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", style: { color: "var(--accent-gold)" }, children: "Sign in" })
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
};
const AdminDashboard = () => {
  const { isAuthenticated, isAdmin, token } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = reactExports.useState("items");
  const [stats, setStats] = reactExports.useState({ totalItems: 0, lostItems: 0, foundItems: 0, claimedItems: 0, pendingClaims: 0 });
  const [items, setItems] = reactExports.useState([]);
  const [claims, setClaims] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [adminForm, setAdminForm] = reactExports.useState({ name: "", email: "", password: "" });
  const [adminLoading, setAdminLoading] = reactExports.useState(false);
  const [adminMessage, setAdminMessage] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (!isAuthenticated || !isAdmin()) {
      navigate("/");
      return;
    }
    fetchDashboardData();
  }, [isAuthenticated, isAdmin]);
  const fetchDashboardData = async () => {
    try {
      const headers = { "Authorization": `Bearer ${token}` };
      const [itemsRes, claimsRes, statsRes] = await Promise.all([
        fetch("http://localhost:5000/api/items", { headers }),
        fetch("http://localhost:5000/api/claims", { headers }),
        fetch("http://localhost:5000/api/dashboard", { headers })
      ]);
      const itemsData = await itemsRes.json();
      const claimsData = await claimsRes.json();
      const statsData = await statsRes.json();
      if (itemsRes.ok) setItems(itemsData);
      if (claimsRes.ok) setClaims(claimsData);
      if (statsRes.ok) setStats(statsData);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  const handleClaimAction = async (claimId, action, collectionInstructions) => {
    try {
      const body = collectionInstructions ? { collectionInstructions } : void 0;
      const res = await fetch(`http://localhost:5000/api/admin/claims/${claimId}/${action}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : void 0
      });
      if (res.ok) fetchDashboardData();
    } catch (err) {
    }
  };
  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    setAdminLoading(true);
    setAdminMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/register-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(adminForm)
      });
      const data = await res.json();
      if (res.ok) {
        setAdminMessage("Admin user created successfully!");
        setAdminForm({ name: "", email: "", password: "" });
      } else {
        setAdminMessage(data.message || "Failed to create admin user");
      }
    } catch (err) {
      setAdminMessage("An error occurred while creating the admin user");
    } finally {
      setAdminLoading(false);
    }
  };
  const handleAdminInputChange = (e) => {
    setAdminForm({
      ...adminForm,
      [e.target.name]: e.target.value
    });
  };
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { minHeight: "100vh", paddingTop: "100px", display: "flex", alignItems: "center", justifyContent: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "40px", height: "40px", border: "3px solid var(--border-medium)", borderTopColor: "var(--accent-gold)", borderRadius: "50%", animation: "spin 1s linear infinite" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `@keyframes spin { to { transform: rotate(360deg); } }` })
    ] });
  }
  const statCards = [
    { label: "Total Items", value: stats.totalItems, icon: Package, color: "var(--accent-gold)" },
    { label: "Lost", value: stats.lostItems, icon: AlertCircle, color: "var(--status-lost)" },
    { label: "Found", value: stats.foundItems, icon: CheckCircle, color: "var(--status-found)" },
    { label: "Pending Claims", value: stats.pendingClaims, icon: Clock, color: "var(--accent-teal)" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: "100vh", paddingTop: "100px", paddingBottom: "4rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, style: { marginBottom: "2rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 28, color: "var(--accent-teal)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--text-primary)" }, children: "Admin Dashboard" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)" }, children: "Manage items, claims, and verify ownership" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }, children: statCards.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.1 },
        style: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "1.5rem", position: "relative", overflow: "hidden" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            position: "absolute",
            top: "-50%",
            right: "-50%",
            width: "200%",
            height: "200%",
            background: `${stat.color}20`,
            borderRadius: "50%",
            filter: "blur(20px)",
            zIndex: 0
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "1rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "56px", height: "56px", borderRadius: "var(--radius-md)", background: `${stat.color}15`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${stat.color}30` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { size: 24, color: stat.color }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1, marginBottom: "0.25rem" }, children: stat.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }, children: stat.label })
            ] })
          ] })
        ]
      },
      stat.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4 },
          style: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "1.5rem" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }, children: "Claim Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-teal)" } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }, children: "Approved" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontFamily: "var(--font-mono)", fontSize: "1.25rem", fontWeight: 700, color: "var(--status-found)" }, children: stats.claimedItems || 0 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }, children: "Rejected" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontFamily: "var(--font-mono)", fontSize: "1.25rem", fontWeight: 700, color: "var(--status-lost)" }, children: stats.rejectedClaims || 0 })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          style: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "1.5rem" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }, children: "Success Rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-gold)" } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "8px", background: "var(--bg-surface)", borderRadius: "4px", overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                  height: "100%",
                  background: "linear-gradient(90deg, var(--accent-gold), var(--accent-teal))",
                  width: `${stats.totalItems > 0 ? Math.round(stats.claimedItems / stats.totalItems * 100) : 0}%`,
                  transition: "width 0.5s ease"
                } }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.5rem" }, children: [
                  stats.totalItems > 0 ? Math.round(stats.claimedItems / stats.totalItems * 100) : 0,
                  "% Items Reunited"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontFamily: "var(--font-mono)", fontSize: "1.25rem", fontWeight: 700, color: "var(--accent-gold)" }, children: [
                stats.totalItems > 0 ? Math.round(stats.claimedItems / stats.totalItems * 100) : 0,
                "%"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.6 },
          style: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "1.5rem" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }, children: "Quick Actions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-gold)" } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "0.75rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                whileHover: { scale: 1.02 },
                style: {
                  width: "100%",
                  padding: "0.75rem",
                  background: "rgba(0, 212, 170, 0.1)",
                  border: "1px solid rgba(0, 212, 170, 0.3)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--accent-teal)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  textAlign: "left"
                },
                children: "📊 View All Statistics"
              }
            ) }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.7 },
        style: { background: "linear-gradient(135deg, rgba(245, 166, 35, 0.1), rgba(0, 212, 170, 0.1))", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "1.5rem", marginBottom: "3rem" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem" }, children: "Admin Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "0.9rem", color: "var(--text-secondary)" }, children: [
              "You have successfully managed ",
              stats.totalItems,
              " items and processed ",
              stats.pendingClaims + (stats.claimedItems || 0) + (stats.rejectedClaims || 0),
              " claims."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "1rem", alignItems: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "right" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }, children: "System Health" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "0.5rem", alignItems: "center" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "var(--status-found)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem", color: "var(--status-found)", fontWeight: 600 }, children: "Excellent" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                whileHover: { scale: 1.05 },
                style: {
                  padding: "0.5rem 1rem",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--text-primary)",
                  fontSize: "0.85rem",
                  fontWeight: 500
                },
                children: "Admin Panel Active"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "0.5rem" }, children: [{ id: "items", label: "All Items" }, { id: "pending-claims", label: "Pending Claims" }, { id: "user-claims", label: "All Claims" }, { id: "add-admin", label: "Add Admin" }].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setActiveTab(tab.id),
        style: { padding: "0.75rem 1.25rem", background: activeTab === tab.id ? "rgba(245, 166, 35, 0.1)" : "transparent", border: "none", borderRadius: "var(--radius-sm)", color: activeTab === tab.id ? "var(--accent-gold)" : "var(--text-muted)", fontSize: "0.9rem", fontWeight: 500, cursor: "pointer" },
        children: tab.label
      },
      tab.id
    )) }),
    activeTab === "items" && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, style: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: { borderBottom: "1px solid var(--border-subtle)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: { padding: "1rem", textAlign: "left", fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }, children: "ITEM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: { padding: "1rem", textAlign: "left", fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }, children: "STATUS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: { padding: "1rem", textAlign: "left", fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }, children: "LOCATION" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: { padding: "1rem", textAlign: "left", fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }, children: "DATE" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: { borderBottom: "1px solid var(--border-subtle)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { style: { padding: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontWeight: 500, color: "var(--text-primary)", marginBottom: "0.25rem" }, children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)" }, children: item.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "1rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge badge-${item.status}`, children: item.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "1rem", color: "var(--text-secondary)", fontSize: "0.9rem" }, children: item.location }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "1rem", color: "var(--text-muted)", fontSize: "0.85rem" }, children: formatDate(item.dateReported) })
      ] }, item._id)) })
    ] }) }) }),
    activeTab === "pending-claims" && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, style: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden" }, children: claims.filter((c) => c.status === "pending").length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "3rem", textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { size: 48, color: "var(--accent-teal)", style: { margin: "0 auto 1rem" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }, children: "All Caught Up!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-muted)" }, children: "No pending claims to review." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "1rem" }, children: claims.filter((c) => c.status === "pending").map((claim) => {
      var _a, _b;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "1.25rem", marginBottom: "1rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem" }, children: [
              "Claim for: ",
              ((_a = claim.item) == null ? void 0 : _a.title) || "Unknown Item"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)" }, children: [
              "Claimant: ",
              ((_b = claim.claimant) == null ? void 0 : _b.name) || "Unknown",
              " • ",
              formatDate(claim.dateSubmitted)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge", style: { background: "rgba(255, 71, 87, 0.15)", color: "var(--status-lost)" }, children: "Pending" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }, children: "PROOF OF OWNERSHIP:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9rem", color: "var(--text-secondary)", background: "var(--bg-elevated)", padding: "0.75rem", borderRadius: "var(--radius-sm)" }, children: claim.proof })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }, children: "Collection Instructions (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              id: `instructions-${claim._id}`,
              placeholder: "e.g., Visit admin office during business hours with student ID...",
              style: {
                width: "100%",
                padding: "0.5rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-surface)",
                color: "var(--text-primary)",
                fontSize: "0.9rem",
                minHeight: "60px",
                resize: "vertical"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "0.75rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                const instructions = document.getElementById(`instructions-${claim._id}`).value;
                handleClaimAction(claim._id, "approve", instructions);
              },
              style: { padding: "0.5rem 1rem", background: "rgba(46, 213, 115, 0.15)", border: "1px solid rgba(46, 213, 115, 0.3)", borderRadius: "var(--radius-sm)", color: "var(--status-found)", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { size: 16 }),
                "Approve"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleClaimAction(claim._id, "reject"), style: { padding: "0.5rem 1rem", background: "rgba(255, 71, 87, 0.15)", border: "1px solid rgba(255, 71, 87, 0.3)", borderRadius: "var(--radius-sm)", color: "var(--status-lost)", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(XCircle, { size: 16 }),
            "Reject"
          ] })
        ] })
      ] }, claim._id);
    }) }) }),
    activeTab === "user-claims" && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, style: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden" }, children: claims.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "3rem", textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 48, color: "var(--text-muted)", style: { margin: "0 auto 1rem" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }, children: "No Claims Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-muted)" }, children: "No claims have been submitted yet." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "1rem" }, children: claims.map((claim) => {
      var _a, _b, _c, _d;
      const getStatusConfig = (status) => {
        switch (status) {
          case "pending":
            return { color: "var(--accent-teal)", icon: Clock, label: "Pending" };
          case "approved":
            return { color: "var(--status-found)", icon: CheckCircle, label: "Approved" };
          case "rejected":
            return { color: "var(--status-lost)", icon: XCircle, label: "Rejected" };
          default:
            return { color: "var(--text-muted)", icon: AlertCircle, label: "Unknown" };
        }
      };
      const statusConfig = getStatusConfig(claim.status);
      const Icon = statusConfig.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "1.25rem", marginBottom: "1rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, color: statusConfig.color }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: statusConfig.color, textTransform: "uppercase", letterSpacing: "0.1em" }, children: statusConfig.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem" }, children: [
              "Claim for: ",
              ((_a = claim.item) == null ? void 0 : _a.title) || "Unknown Item"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)" }, children: [
              "Claimant: ",
              ((_b = claim.claimant) == null ? void 0 : _b.name) || "Unknown",
              " • ",
              formatDate(claim.dateSubmitted)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "right" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }, children: [
              "Item Status: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge badge-${(_c = claim.item) == null ? void 0 : _c.status}`, children: ((_d = claim.item) == null ? void 0 : _d.status) || "Unknown" })
            ] }),
            claim.reviewedBy && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)" }, children: [
              "Reviewed by: ",
              claim.reviewedBy.name
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }, children: "PROOF OF OWNERSHIP:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9rem", color: "var(--text-secondary)", background: "var(--bg-elevated)", padding: "0.75rem", borderRadius: "var(--radius-sm)" }, children: claim.proof })
        ] }),
        claim.status === "approved" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, style: { background: "rgba(46, 213, 115, 0.1)", border: "1px solid rgba(46, 213, 115, 0.3)", borderRadius: "var(--radius-sm)", padding: "0.75rem", marginBottom: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "0.5rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ready for Collection!" }),
            " This claim has been approved."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem", color: "var(--text-muted)", background: "rgba(245, 166, 35, 0.1)", border: "1px solid rgba(245, 166, 35, 0.2)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Collection Instructions:" }),
            " Visit the admin office during business hours (8:00 AM - 5:00 PM, Monday-Friday) with student ID to collect the item."
          ] })
        ] }),
        claim.status === "rejected" && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, style: { background: "rgba(255, 71, 87, 0.1)", border: "1px solid rgba(255, 71, 87, 0.3)", borderRadius: "var(--radius-sm)", padding: "0.75rem", marginBottom: "1rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", fontSize: "0.9rem" }, children: "This claim was rejected. The admin team determined the proof was insufficient." }) }),
        claim.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, style: { background: "rgba(0, 212, 170, 0.1)", border: "1px solid rgba(0, 212, 170, 0.3)", borderRadius: "var(--radius-sm)", padding: "0.75rem", marginBottom: "1rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", fontSize: "0.9rem" }, children: "This claim is currently being reviewed by the admin team." }) }),
        claim.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "0.75rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleClaimAction(claim._id, "approve"), style: { padding: "0.5rem 1rem", background: "rgba(46, 213, 115, 0.15)", border: "1px solid rgba(46, 213, 115, 0.3)", borderRadius: "var(--radius-sm)", color: "var(--status-found)", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { size: 16 }),
            "Approve"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleClaimAction(claim._id, "reject"), style: { padding: "0.5rem 1rem", background: "rgba(255, 71, 87, 0.15)", border: "1px solid rgba(255, 71, 87, 0.3)", borderRadius: "var(--radius-sm)", color: "var(--status-lost)", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(XCircle, { size: 16 }),
            "Reject"
          ] })
        ] })
      ] }, claim._id);
    }) }) }),
    activeTab === "add-admin" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, style: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "2rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 24, color: "var(--accent-teal)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }, children: "Add New Admin" })
      ] }),
      adminMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        padding: "1rem",
        borderRadius: "var(--radius-sm)",
        marginBottom: "1.5rem",
        background: adminMessage.includes("successfully") ? "rgba(46, 213, 115, 0.15)" : "rgba(255, 71, 87, 0.15)",
        border: `1px solid ${adminMessage.includes("successfully") ? "rgba(46, 213, 115, 0.3)" : "rgba(255, 71, 87, 0.3)"}`,
        color: adminMessage.includes("successfully") ? "var(--status-found)" : "var(--status-lost)"
      }, children: adminMessage }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAdminSubmit, style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { gridColumn: "1 / -1" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }, children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              name: "name",
              value: adminForm.name,
              onChange: handleAdminInputChange,
              required: true,
              style: {
                width: "100%",
                padding: "0.75rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-surface)",
                color: "var(--text-primary)",
                fontSize: "0.9rem"
              },
              placeholder: "Enter admin full name"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }, children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              name: "email",
              value: adminForm.email,
              onChange: handleAdminInputChange,
              required: true,
              style: {
                width: "100%",
                padding: "0.75rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-surface)",
                color: "var(--text-primary)",
                fontSize: "0.9rem"
              },
              placeholder: "admin@astu.edu.et"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }, children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "password",
              name: "password",
              value: adminForm.password,
              onChange: handleAdminInputChange,
              required: true,
              style: {
                width: "100%",
                padding: "0.75rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-surface)",
                color: "var(--text-primary)",
                fontSize: "0.9rem"
              },
              placeholder: "Enter secure password"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { gridColumn: "1 / -1", display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: adminLoading,
              style: {
                padding: "0.75rem 2rem",
                background: "var(--accent-teal)",
                border: "none",
                borderRadius: "var(--radius-sm)",
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: adminLoading ? "not-allowed" : "pointer",
                opacity: adminLoading ? 0.7 : 1
              },
              children: adminLoading ? "Creating Admin..." : "Create Admin User"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setAdminForm({ name: "", email: "", password: "" }),
              style: {
                padding: "0.75rem 2rem",
                background: "transparent",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-sm)",
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer"
              },
              children: "Clear Form"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "2rem", padding: "1.5rem", background: "var(--bg-surface)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.5rem" }, children: "Admin Privileges" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { style: { fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Create and manage admin users" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Approve/reject item claims" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• View all items and claims" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Access system statistics and reports" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1rem", fontStyle: "italic" }, children: "Note: Only existing admins can create new admin users. This ensures proper access control." })
      ] })
    ] })
  ] }) });
};
const MyClaims = () => {
  const { user } = useAuth();
  const { getUserClaims, getItemById } = useItems();
  const [claims, setClaims] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const fetchUserClaims = async () => {
      setLoading(true);
      try {
        const userClaims = await getUserClaims();
        setClaims(userClaims);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      fetchUserClaims();
    }
  }, [user, getUserClaims]);
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "var(--text-muted)";
      case "approved":
        return "var(--accent-gold)";
      case "rejected":
        return "#ef4444";
      default:
        return "var(--text-muted)";
    }
  };
  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return "⏳";
      case "approved":
        return "✅";
      case "rejected":
        return "❌";
      default:
        return "⏳";
    }
  };
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: "100vh", paddingTop: "100px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        style: {
          textAlign: "center",
          padding: "5rem 2rem",
          background: "var(--bg-elevated)",
          borderRadius: "var(--radius-lg)",
          border: "1px dashed var(--border-medium)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            color: "var(--text-primary)",
            marginBottom: "0.75rem"
          }, children: "Please Login to View Your Claims" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            color: "var(--text-muted)",
            maxWidth: "400px",
            margin: "0 auto",
            lineHeight: 1.7
          }, children: "You need to be logged in to view your claim history. Please log in or register to access this feature." })
        ]
      }
    ) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { minHeight: "100vh", paddingTop: "100px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          style: { marginBottom: "3rem" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.5rem"
            }, children: "My Claims" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", fontSize: "1.1rem" }, children: "Track the status of your item claims" })
          ]
        }
      ),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1rem"
      }, children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        height: "120px",
        background: "var(--bg-elevated)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border-subtle)",
        animation: "pulse 1.5s infinite"
      } }, i)) }) : claims.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1.5rem"
      }, children: claims.map((claim) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          style: {
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            transition: "all 0.3s ease"
          },
          whileHover: {
            transform: "translateY(-2px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "1rem"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem"
                }, children: claim.item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--text-secondary)", fontSize: "0.9rem" }, children: [
                  "Category: ",
                  claim.item.category,
                  " • Location: ",
                  claim.item.location
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                background: "rgba(255, 215, 0, 0.1)",
                borderRadius: "var(--radius-md)",
                border: "1px solid rgba(255, 215, 0, 0.2)"
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.2rem" }, children: getStatusIcon(claim.status) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: getStatusColor(claim.status),
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }, children: claim.status })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--text-secondary)", lineHeight: 1.6 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Claim Date:" }),
                " ",
                new Date(claim.createdAt).toLocaleDateString()
              ] }),
              claim.collectionInstructions && claim.status === "approved" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
                marginTop: "1rem",
                padding: "1rem",
                background: "rgba(255, 215, 0, 0.1)",
                border: "1px solid rgba(255, 215, 0, 0.3)",
                borderRadius: "var(--radius-md)"
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { color: "var(--accent-gold)", marginBottom: "0.5rem" }, children: "📍 Collection Instructions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-primary)", lineHeight: 1.5 }, children: claim.collectionInstructions })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "1rem"
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--text-muted)"
            }, children: [
              "Claim ID: ",
              claim._id.substring(0, 8),
              "..."
            ] }) })
          ]
        },
        claim._id
      )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          style: {
            textAlign: "center",
            padding: "5rem 2rem",
            background: "var(--bg-elevated)",
            borderRadius: "var(--radius-lg)",
            border: "1px dashed var(--border-medium)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              color: "var(--text-primary)",
              marginBottom: "0.75rem"
            }, children: "No Claims Found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              color: "var(--text-muted)",
              maxWidth: "400px",
              margin: "0 auto",
              lineHeight: 1.7
            }, children: "You haven't submitted any claims yet. Visit the search page to find items and submit a claim if you find something that belongs to you." })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      ` })
  ] });
};
const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3
    }
  }
};
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: pageVariants,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Home, {})
            },
            "home"
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/login",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: pageVariants,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Login, {})
            },
            "login"
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/register",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: pageVariants,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Register, {})
            },
            "register"
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/search",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: pageVariants,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchItems, {})
            },
            "search"
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/report-lost",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: pageVariants,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportLost, {})
            },
            "report-lost"
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/report-found",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: pageVariants,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportFound, {})
            },
            "report-found"
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/claim/:id",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: pageVariants,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClaimItem, {})
            },
            "claim"
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/my-claims",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: pageVariants,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(MyClaims, {})
            },
            "my-claims"
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/admin",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: pageVariants,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, {})
            },
            "admin"
          ) })
        }
      )
    ] })
  ] });
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) }) }) })
);
