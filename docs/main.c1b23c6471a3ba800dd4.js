/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(639);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 239:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(705),
    getRawTag = __webpack_require__(607),
    objectToString = __webpack_require__(333);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 607:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(705);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 333:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(957);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(218),
    now = __webpack_require__(771),
    toNumber = __webpack_require__(841);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 218:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 5:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(239),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 771:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(639);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__(279),
    isObject = __webpack_require__(218);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 841:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(218),
    isSymbol = __webpack_require__(448);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
"use strict";

;// CONCATENATED MODULE: ./app/assets/scripts/modules/MobileMenu.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.menuIconBtn = document.querySelector(".menu-icon");
    this.primaryNav = document.querySelector(".primary-nav");
    this.lowerNav = document.querySelector(".lower-nav");
    this.headerSection = document.querySelector(".header-section");
    this.logoTextElement = document.querySelector(".lower-nav__main-title");
    this.logoImage = document.querySelector(".lower-nav__logo");
    this.logoContainer = document.querySelector(".lower-nav__logo-link");
    this.borderBottom = document.querySelector(".lower-nav .border-bottom");
    this.events();
  }

  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.menuIconBtn.addEventListener("click", function () {
        return _this.toggleTheMenu();
      });
    }
  }, {
    key: "toggleTheMenu",
    value: function toggleTheMenu() {
      this.menuIconBtn.classList.toggle("menu-icon__close-btn");
      this.menuIconBtn.classList.toggle("menu-icon--position-absolute");
      this.primaryNav.classList.toggle("primary-nav--is-visible");
      this.lowerNav.classList.toggle("lower-nav--is-flex-col");
      this.logoTextElement.classList.toggle("lower-nav__main-title--text-center");
      this.logoImage.classList.toggle("lower-nav__logo--margin-bottom");
      this.logoContainer.classList.toggle("lower-nav__logo-link--display-flex-col");
      this.logoContainer.classList.toggle("lower-nav__logo-link--remove-max-width");
      this.borderBottom.classList.toggle("border-bottom--show");
      this.headerSection.classList.toggle("header-section--is-expanded");

      if (window.scrollY > 60 && !this.headerSection.classList.contains("header-section--dark")) {
        this.headerSection.classList.add("header-section--dark");
      } else {
        this.headerSection.classList.remove("header-section--dark");
      }
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ const modules_MobileMenu = (MobileMenu);
;// CONCATENATED MODULE: ./app/assets/scripts/modules/Showmore.js
function Showmore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Showmore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Showmore_createClass(Constructor, protoProps, staticProps) { if (protoProps) Showmore_defineProperties(Constructor.prototype, protoProps); if (staticProps) Showmore_defineProperties(Constructor, staticProps); return Constructor; }

var Showmore = /*#__PURE__*/function () {
  function Showmore(buttonID, element, textMessage) {
    Showmore_classCallCheck(this, Showmore);

    this.textMessage = textMessage;
    this.hidden = true;
    this.btn = document.querySelector(buttonID);
    this.text = document.querySelector(element);
    this.events();
  }

  Showmore_createClass(Showmore, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.btn.addEventListener("click", function (e) {
        if (_this.hidden) {
          _this.hidden = false;
          _this.btn.innerHTML = "Hide <i class='fas fa-angle-up'></i>";

          _this.text.classList.add("visible");

          _this.btn.classList.add("btn--filled-bg");
        } else {
          _this.hidden = true;
          _this.btn.innerHTML = _this.textMessage;

          _this.text.classList.remove("visible");

          _this.btn.classList.remove("btn--filled-bg");
        }
      });
    }
  }]);

  return Showmore;
}();

/* harmony default export */ const modules_Showmore = (Showmore);
;// CONCATENATED MODULE: ./app/assets/scripts/modules/Slider.js
function Slider_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Slider_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Slider_createClass(Constructor, protoProps, staticProps) { if (protoProps) Slider_defineProperties(Constructor.prototype, protoProps); if (staticProps) Slider_defineProperties(Constructor, staticProps); return Constructor; }

var counter = 0;

var Slider = /*#__PURE__*/function () {
  function Slider() {
    Slider_classCallCheck(this, Slider);

    counter = 0;
    this.sliderImages = document.querySelectorAll(".about-us-section__img");
    this.dots = document.querySelectorAll(".slider__dot");
    this.prevBtn = document.querySelector(".slider__prev-btn");
    this.nextBtn = document.querySelector(".slider__next-btn");
    this.events();
  }

  Slider_createClass(Slider, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.timer = setInterval(this.autoSlide.bind(this), 5000);
      this.playSlide(counter);
      this.plusSlides(this.prevBtn, -1);
      this.plusSlides(this.nextBtn, 1);
      this.dots.forEach(function (dot) {
        return dot.addEventListener("click", function () {
          _this.currentSlide(+dot.id);
        });
      });
    }
  }, {
    key: "autoSlide",
    value: function autoSlide() {
      counter += 1;
      this.playSlide(counter);
    } // navigation buttons --------

  }, {
    key: "plusSlides",
    value: function plusSlides(el, num) {
      var _this2 = this;

      el.addEventListener("click", function () {
        counter += num;

        _this2.playSlide(counter);

        _this2.resetTimer();
      });
    } // dots

  }, {
    key: "currentSlide",
    value: function currentSlide(n) {
      counter = n;
      this.playSlide(counter);
      this.resetTimer();
    }
  }, {
    key: "resetTimer",
    value: function resetTimer() {
      clearTimeout(this.timer); // create new timer/interval

      this.timer = setInterval(this.autoSlide.bind(this), 5000);
    }
  }, {
    key: "playSlide",
    value: function playSlide(n) {
      for (var i = 0; i < this.sliderImages.length; i++) {
        this.sliderImages[i].style.display = "none";
      }

      for (var _i = 0; _i < this.dots.length; _i++) {
        this.dots[_i].classList.remove("active");
      }

      if (n >= this.sliderImages.length) {
        counter = 0;
      }

      if (n < 0) {
        counter = this.sliderImages.length - 1;
      }

      this.sliderImages[counter].style.display = "inline-block";
      this.dots[counter].classList.add("active");
    }
  }]);

  return Slider;
}();

/* harmony default export */ const modules_Slider = (Slider);
;// CONCATENATED MODULE: ./app/assets/scripts/modules/StickyHeader.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function StickyHeader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StickyHeader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StickyHeader_createClass(Constructor, protoProps, staticProps) { if (protoProps) StickyHeader_defineProperties(Constructor.prototype, protoProps); if (staticProps) StickyHeader_defineProperties(Constructor, staticProps); return Constructor; }

var StickyHeader = /*#__PURE__*/function () {
  function StickyHeader() {
    StickyHeader_classCallCheck(this, StickyHeader);

    this.headerSection = document.querySelector(".header-section");
    this.landingSection = document.querySelector(".landing-section");
    this.pageSections = document.querySelectorAll(".page-section");
    this.navLinks = document.querySelectorAll(".nav__link");
    this.backToTopBtn = document.querySelector(".back-to-top");
    this.events();
  }

  StickyHeader_createClass(StickyHeader, [{
    key: "events",
    value: function events() {
      this.runObserver();
      this.observeSections();
      this.backToTop();
    }
  }, {
    key: "removeHighlightedLinks",
    value: function removeHighlightedLinks() {
      this.navLinks.forEach(function (el) {
        return el.classList.remove("primary-nav--is-current-link");
      });
    }
  }, {
    key: "runObserver",
    value: function runObserver() {
      var _this = this;

      var stickyNav = function stickyNav(entries) {
        var _entries = _slicedToArray(entries, 1),
            entry = _entries[0];

        if (!entry.isIntersecting && !_this.headerSection.classList.contains("header-section--is-expanded")) {
          _this.headerSection.classList.add("header-section--dark");

          _this.backToTopBtn.classList.add("back-to-top--show");
        } else {
          _this.headerSection.classList.remove("header-section--dark");

          _this.backToTopBtn.classList.remove("back-to-top--show"); // specifically for the home link


          _this.removeHighlightedLinks();

          _this.navLinks[0].classList.add("primary-nav--is-current-link");
        }
      };

      var oberver = new IntersectionObserver(stickyNav, {
        root: null,
        threshold: 0.9
      });
      oberver.observe(this.landingSection);
    }
  }, {
    key: "backToTop",
    value: function backToTop() {
      var _this2 = this;

      this.backToTopBtn.addEventListener("click", function (e) {
        _this2.landingSection.scrollIntoView();
      });
    }
  }, {
    key: "observeSections",
    value: function observeSections() {
      var _this3 = this;

      var highlightLink = function highlightLink(entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // find nav link
            var link = document.getElementById("".concat(entry.target.id, "-link"));

            _this3.removeHighlightedLinks();

            link.classList.add("primary-nav--is-current-link");
          }
        });
      };

      var observer = new IntersectionObserver(highlightLink, {
        root: null,
        threshold: 0.3
      });
      this.pageSections.forEach(function (section) {
        return observer.observe(section);
      });
    }
  }]);

  return StickyHeader;
}();

/* harmony default export */ const modules_StickyHeader = (StickyHeader);
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(493);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
;// CONCATENATED MODULE: ./app/assets/scripts/modules/RevealOnScroll.js
function RevealOnScroll_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RevealOnScroll_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RevealOnScroll_createClass(Constructor, protoProps, staticProps) { if (protoProps) RevealOnScroll_defineProperties(Constructor.prototype, protoProps); if (staticProps) RevealOnScroll_defineProperties(Constructor, staticProps); return Constructor; }




var RevealOnScroll = /*#__PURE__*/function () {
  function RevealOnScroll() {
    RevealOnScroll_classCallCheck(this, RevealOnScroll);

    this.revealItems = document.querySelectorAll(".reveal-item");
    this.scrollThrottle = throttle_default()(this.calcCaller, 200).bind(this);
    this.browserHeight = window.innerHeight;
    this.areHidden();
    this.events();
  }

  RevealOnScroll_createClass(RevealOnScroll, [{
    key: "events",
    value: function events() {
      var _this = this;

      window.addEventListener("scroll", this.scrollThrottle);
      window.addEventListener("resize", debounce_default()(function () {
        _this.browserHeight = window.innerHeight;
      }, 333));
    }
  }, {
    key: "calcCaller",
    value: function calcCaller() {
      var _this2 = this;

      this.revealItems.forEach(function (el) {
        if (el.isRevealed === false) {
          _this2.calculateIfScrolledTo(el);
        }
      });
    }
  }, {
    key: "calculateIfScrolledTo",
    value: function calculateIfScrolledTo(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop) {
        var scrollPercent = el.getBoundingClientRect().top / this.browserHeight * 100;

        if (scrollPercent < 75) {
          el.classList.add("reveal-item--is-visible");
          el.isRevealed = true;

          if (el.isLastItem) {
            window.removeEventListener("scroll", this.scrollThrottle);
          }
        }
      }
    }
  }, {
    key: "areHidden",
    value: function areHidden() {
      this.revealItems.forEach(function (el) {
        return el.isRevealed = false;
      });
      this.revealItems[this.revealItems.length - 1].isLastItem = true;
    }
  }]);

  return RevealOnScroll;
}();

/* harmony default export */ const modules_RevealOnScroll = (RevealOnScroll);
;// CONCATENATED MODULE: ./app/assets/scripts/modules/Modal.js
function Modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) Modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) Modal_defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal() {
    Modal_classCallCheck(this, Modal);

    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.openModalButtons = document.querySelectorAll(".open-modal");
    this.events();
  }

  Modal_createClass(Modal, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.modal.addEventListener("click", function (e) {
        if (e.target.classList.contains("modal__close-btn") || e.target.classList.contains("modal")) {
          _this.closeModal();
        }
      }); // open modal

      this.openModalButtons.forEach(function (el) {
        return el.addEventListener("click", function (e) {
          return _this.openModal(e);
        });
      }); // esc key, close modal

      document.addEventListener("keyup", function (e) {
        if (e.keyCode === 27 || e.key === "Escape") {
          _this.closeModal();
        }
      });
    }
  }, {
    key: "openModal",
    value: function openModal(e) {
      e.preventDefault();
      this.modal.classList.add("modal--is-visible");
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.modal.classList.remove("modal--is-visible");
    }
  }, {
    key: "injectHTML",
    value: function injectHTML() {
      document.body.insertAdjacentHTML("beforeend", "\n            <div class=\"modal\">\n                <div class=\"wrapper\">\n                    <a href=\"#\" class=\"modal__envelope\"><i class=\"fas fa-envelope\"></i></a>\n                    <h1 class=\"modal__main-title\">Get in <span class=\"bold\">Touch</span></h1>\n                    <span class=\"border-bottom\"></span>\n                    <p class=\"modal__description\">Reach us through our social media accounts/page for appointments or call us with the provided phone number in the home page.</p>\n                    <span class=\"modal__close-btn\">X</span>\n                    <div class=\"modal__social-icons\">\n                        <a href=\"https://www.facebook.com/narvaezsalonandspa\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a>\n                        <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n                        <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\n                    </div>\n                </div>\n            </div>\n        ");
    }
  }]);

  return Modal;
}();

/* harmony default export */ const modules_Modal = (Modal);
;// CONCATENATED MODULE: ./app/assets/scripts/App.js







new modules_MobileMenu();
new modules_StickyHeader();
new modules_RevealOnScroll();
new modules_Modal();
new modules_Slider();
new modules_Showmore("#showmore-btn", ".about-us-section__hidden-text", "Read More <i class='fas fa-angle-down'></i>");
new modules_Showmore("#show-price-list-btn", ".price-list", "Price List <i class='fas fa-angle-down'></i>");

if (false) {}
})();

/******/ })()
;