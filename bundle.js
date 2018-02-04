/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    DebounceInput = _require.DebounceInput;

DebounceInput.DebounceInput = DebounceInput;

module.exports = DebounceInput;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__app_css__);
/* global document */






var appRoot = document.createElement('div');

appRoot.id = 'app';
document.body.appendChild(appRoot);
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* App */], null), appRoot);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Controllable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Customizable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UndoRedo__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Textarea__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Ref__ = __webpack_require__(12);







var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'app' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'react-debounce-input'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Example 1. Customizable'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Customizable__["a" /* Customizable */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Example 2. Controllable'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Controllable__["a" /* Controllable */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Example 3. Undo-Redo'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__UndoRedo__["a" /* UndoRedo */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Example 4. Debounced Textarea'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Textarea__["a" /* Textarea */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Example 5. Custom ref'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Ref__["a" /* Ref */], null)
    )
  );
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Controllable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Controllable = function (_React$Component) {
  _inherits(Controllable, _React$Component);

  function Controllable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Controllable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Controllable.__proto__ || Object.getPrototypeOf(Controllable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      debouncedValue: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Controllable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          value = _state.value,
          debouncedValue = _state.debouncedValue;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Contollable input:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'text',
              value: value,
              onChange: function onChange(e) {
                return _this2.setState({ value: e.target.value });
              } }),
            value
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Debounced input:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src__["DebounceInput"], {
              className: 'input',
              value: value,
              minLength: 2,
              debounceTimeout: 500,
              onChange: function onChange(e) {
                return _this2.setState({ value: e.target.value, debouncedValue: e.target.value });
              } }),
            debouncedValue
          )
        )
      );
    }
  }]);

  return Controllable;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebounceInput", function() { return DebounceInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_debounce__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_debounce__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DebounceInput = function (_React$PureComponent) {
  _inherits(DebounceInput, _React$PureComponent);

  function DebounceInput(props) {
    _classCallCheck(this, DebounceInput);

    var _this = _possibleConstructorReturn(this, (DebounceInput.__proto__ || Object.getPrototypeOf(DebounceInput)).call(this, props));

    _this.onChange = function (event) {
      event.persist();

      var oldValue = _this.state.value;

      _this.setState({ value: event.target.value }, function () {
        var value = _this.state.value;


        if (value.length >= _this.props.minLength) {
          _this.notify(event);
          return;
        }

        // If user hits backspace and goes below minLength consider it cleaning the value
        if (oldValue.length > value.length) {
          _this.notify(_extends({}, event, { target: _extends({}, event.target, { value: '' }) }));
        }
      });
    };

    _this.onKeyDown = function (event) {
      var onKeyDown = _this.props.onKeyDown;


      if (event.key === 'Enter') {
        _this.forceNotify(event);
      }
      // Invoke original onKeyDown if present
      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    _this.onBlur = function (event) {
      var onBlur = _this.props.onBlur;


      _this.forceNotify(event);
      // Invoke original onBlur if present
      if (onBlur) {
        onBlur(event);
      }
    };

    _this.createNotifier = function (debounceTimeout) {
      if (debounceTimeout < 0) {
        _this.notify = function () {
          return null;
        };
      } else if (debounceTimeout === 0) {
        _this.notify = _this.doNotify;
      } else {
        var debouncedChangeFunc = __WEBPACK_IMPORTED_MODULE_1_lodash_debounce___default()(function (event) {
          _this.isDebouncing = false;
          _this.doNotify(event);
        }, debounceTimeout);

        _this.notify = function (event) {
          _this.isDebouncing = true;
          debouncedChangeFunc(event);
        };

        _this.flush = function () {
          return debouncedChangeFunc.flush();
        };

        _this.cancel = function () {
          _this.isDebouncing = false;
          debouncedChangeFunc.cancel();
        };
      }
    };

    _this.doNotify = function () {
      var onChange = _this.props.onChange;


      onChange.apply(undefined, arguments);
    };

    _this.forceNotify = function (event) {
      if (!_this.isDebouncing) {
        return;
      }

      if (_this.cancel) {
        _this.cancel();
      }

      var value = _this.state.value;
      var minLength = _this.props.minLength;


      if (value.length >= minLength) {
        _this.doNotify(event);
      } else {
        _this.doNotify(_extends({}, event, { target: _extends({}, event.target, { value: value }) }));
      }
    };

    _this.state = {
      value: props.value || ''
    };

    _this.isDebouncing = false;
    return _this;
  }

  _createClass(DebounceInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.createNotifier(this.props.debounceTimeout);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var value = _ref.value,
          debounceTimeout = _ref.debounceTimeout;

      if (this.isDebouncing) {
        return;
      }
      if (typeof value !== 'undefined' && this.state.value !== value) {
        this.setState({ value: value });
      }
      if (debounceTimeout !== this.props.debounceTimeout) {
        this.createNotifier(debounceTimeout);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.flush) {
        this.flush();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          element = _props.element,
          _onChange = _props.onChange,
          _value = _props.value,
          _minLength = _props.minLength,
          _debounceTimeout = _props.debounceTimeout,
          forceNotifyByEnter = _props.forceNotifyByEnter,
          forceNotifyOnBlur = _props.forceNotifyOnBlur,
          onKeyDown = _props.onKeyDown,
          onBlur = _props.onBlur,
          inputRef = _props.inputRef,
          props = _objectWithoutProperties(_props, ['element', 'onChange', 'value', 'minLength', 'debounceTimeout', 'forceNotifyByEnter', 'forceNotifyOnBlur', 'onKeyDown', 'onBlur', 'inputRef']);

      var maybeOnKeyDown = void 0;
      if (forceNotifyByEnter) {
        maybeOnKeyDown = { onKeyDown: this.onKeyDown };
      } else if (onKeyDown) {
        maybeOnKeyDown = { onKeyDown: onKeyDown };
      } else {
        maybeOnKeyDown = {};
      }

      var maybeOnBlur = void 0;
      if (forceNotifyOnBlur) {
        maybeOnBlur = { onBlur: this.onBlur };
      } else if (onBlur) {
        maybeOnBlur = { onBlur: onBlur };
      } else {
        maybeOnBlur = {};
      }

      var maybeRef = inputRef ? { ref: inputRef } : {};

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(element, _extends({}, props, {
        onChange: this.onChange,
        value: this.state.value
      }, maybeOnKeyDown, maybeOnBlur, maybeRef));
    }
  }]);

  return DebounceInput;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);
DebounceInput.defaultProps = {
  element: 'input',
  type: 'text',
  onKeyDown: undefined,
  onBlur: undefined,
  value: undefined,
  minLength: 0,
  debounceTimeout: 100,
  forceNotifyByEnter: true,
  forceNotifyOnBlur: true,
  inputRef: undefined
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

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

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

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
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
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
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

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

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customizable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Customizable = function (_React$Component) {
  _inherits(Customizable, _React$Component);

  function Customizable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Customizable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Customizable.__proto__ || Object.getPrototypeOf(Customizable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      minLength: 0,
      debounceTimeout: 500,
      infinite: false,
      forceNotifyByEnter: true,
      forceNotifyOnBlur: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Customizable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          minLength = _state.minLength,
          infinite = _state.infinite,
          debounceTimeout = _state.debounceTimeout,
          forceNotifyByEnter = _state.forceNotifyByEnter,
          forceNotifyOnBlur = _state.forceNotifyOnBlur,
          value = _state.value,
          key = _state.key;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Min length:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'range',
              value: minLength,
              step: 1,
              min: 0,
              max: 10,
              onChange: function onChange(e) {
                return _this2.setState({ minLength: parseInt(e.target.value, 10) });
              } }),
            minLength
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Debounce timeout:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'range',
              disabled: infinite,
              value: debounceTimeout,
              step: 100,
              min: 0,
              max: 2000,
              onChange: function onChange(e) {
                return _this2.setState({ debounceTimeout: parseInt(e.target.value, 10) });
              } }),
            debounceTimeout
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Infinite timeout:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: infinite,
              onChange: function onChange(e) {
                return _this2.setState({ infinite: e.target.checked });
              } })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Notify by:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Enter keypress:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: forceNotifyByEnter,
              onChange: function onChange(e) {
                return _this2.setState({ forceNotifyByEnter: e.target.checked });
              } })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Blur:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: forceNotifyOnBlur,
              onChange: function onChange(e) {
                return _this2.setState({ forceNotifyOnBlur: e.target.checked });
              } })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src__["DebounceInput"], {
          forceNotifyByEnter: forceNotifyByEnter,
          forceNotifyOnBlur: forceNotifyOnBlur,
          minLength: minLength,
          debounceTimeout: infinite ? -1 : debounceTimeout,
          onChange: function onChange(e) {
            return _this2.setState({ value: e.target.value });
          },
          onKeyDown: function onKeyDown(e) {
            return _this2.setState({ key: e.key });
          } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Value: ',
          value
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Key pressed: ',
          key
        )
      );
    }
  }]);

  return Customizable;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UndoRedo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var UndoRedo = function (_React$Component) {
  _inherits(UndoRedo, _React$Component);

  function UndoRedo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UndoRedo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UndoRedo.__proto__ || Object.getPrototypeOf(UndoRedo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      history: [''],
      historyIndex: 0
    }, _this.onChange = function (_ref2) {
      var value = _ref2.target.value;
      var _this$state = _this.state,
          historyIndex = _this$state.historyIndex,
          history = _this$state.history;


      _this.setState({
        value: value,
        historyIndex: historyIndex + 1,
        history: [].concat(_toConsumableArray(history.slice(0, historyIndex + 1)), [value])
      });
    }, _this.onRedo = function () {
      _this.setValueFromHistory(_this.state.historyIndex + 1);
    }, _this.onUndo = function () {
      _this.setValueFromHistory(_this.state.historyIndex - 1);
    }, _this.setValueFromHistory = function (index) {
      var history = _this.state.history;

      var historyIndex = Math.min(Math.max(index, 0), history.length - 1);

      _this.setState({
        value: history[historyIndex],
        historyIndex: historyIndex
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UndoRedo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var history = this.state.history.map(function (value, key) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'item', key: key },
          key === _this2.state.historyIndex ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            '"' + value + '"'
          ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            null,
            '"' + value + '"'
          )
        );
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Debounced Input:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src__["DebounceInput"], {
              className: 'input',
              value: this.state.value,
              minLength: 2,
              debounceTimeout: 500,
              forceNotifyOnBlur: false,
              onChange: this.onChange })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'input', onClick: this.onUndo },
              'Undo'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'input', onClick: this.onRedo },
              'Redo'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Current Value: ',
          this.state.value
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'History: ',
          history
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'History Index: ',
          this.state.historyIndex
        )
      );
    }
  }]);

  return UndoRedo;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Textarea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Textarea = function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Textarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      minLength: 0,
      debounceTimeout: 500,
      infinite: false,
      forceNotifyByEnter: false,
      forceNotifyOnBlur: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Textarea, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          minLength = _state.minLength,
          infinite = _state.infinite,
          debounceTimeout = _state.debounceTimeout,
          forceNotifyByEnter = _state.forceNotifyByEnter,
          forceNotifyOnBlur = _state.forceNotifyOnBlur,
          value = _state.value,
          key = _state.key;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Min length:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'range',
              value: minLength,
              step: 1,
              min: 0,
              max: 10,
              onChange: function onChange(e) {
                return _this2.setState({ minLength: parseInt(e.target.value, 10) });
              } }),
            minLength
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Debounce timeout:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'range',
              disabled: infinite,
              value: debounceTimeout,
              step: 100,
              min: 0,
              max: 2000,
              onChange: function onChange(e) {
                return _this2.setState({ debounceTimeout: parseInt(e.target.value, 10) });
              } }),
            debounceTimeout
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Infinite timeout:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: infinite,
              onChange: function onChange(e) {
                return _this2.setState({ infinite: e.target.checked });
              } })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Notify by:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Enter keypress:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: forceNotifyByEnter,
              onChange: function onChange(e) {
                return _this2.setState({ forceNotifyByEnter: e.target.checked });
              } })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Blur:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: forceNotifyOnBlur,
              onChange: function onChange(e) {
                return _this2.setState({ forceNotifyOnBlur: e.target.checked });
              } })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src__["DebounceInput"], {
          cols: '60',
          rows: '7',
          element: 'textarea',
          forceNotifyByEnter: forceNotifyByEnter,
          forceNotifyOnBlur: forceNotifyOnBlur,
          minLength: minLength,
          debounceTimeout: infinite ? -1 : debounceTimeout,
          onChange: function onChange(e) {
            return _this2.setState({ value: e.target.value });
          },
          onKeyDown: function onKeyDown(e) {
            return _this2.setState({ key: e.key });
          } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Value: ',
          value
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Key pressed: ',
          key
        )
      );
    }
  }]);

  return Textarea;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ref; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Ref = function (_React$Component) {
  _inherits(Ref, _React$Component);

  function Ref() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Ref);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Ref.__proto__ || Object.getPrototypeOf(Ref)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      key: undefined
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Ref, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          value = _state.value,
          key = _state.key;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { onClick: function onClick() {
                  return _this2.ref.focus();
                } },
              'Focus, please'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { onClick: function onClick() {
                  return _this2.ref.blur();
                } },
              'Blur, please'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src__["DebounceInput"], {
          inputRef: function inputRef(ref) {
            _this2.ref = ref;
          },
          onChange: function onChange(e) {
            return _this2.setState({ value: e.target.value });
          },
          onKeyDown: function onKeyDown(e) {
            return _this2.setState({ key: e.key });
          } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Value: ',
          value
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Key pressed: ',
          key
        )
      );
    }
  }]);

  return Ref;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);