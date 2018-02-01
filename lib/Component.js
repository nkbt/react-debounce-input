'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebounceInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DebounceInput = exports.DebounceInput = function (_React$PureComponent) {
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
        var debouncedChangeFunc = (0, _lodash2.default)(function (event) {
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

      return _react2.default.createElement(element, _extends({}, props, {
        onChange: this.onChange,
        value: this.state.value
      }, maybeOnKeyDown, maybeOnBlur, maybeRef));
    }
  }]);

  return DebounceInput;
}(_react2.default.PureComponent);

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