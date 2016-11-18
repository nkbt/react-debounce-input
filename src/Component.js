import React from 'react';
import debounce from 'lodash.debounce';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


export const DebounceInput = React.createClass({
  propTypes: {
    element: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
    type: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    onKeyDown: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    minLength: React.PropTypes.number,
    debounceTimeout: React.PropTypes.number,
    forceNotifyByEnter: React.PropTypes.bool,
    forceNotifyOnBlur: React.PropTypes.bool
  },


  getDefaultProps() {
    return {
      element: 'input',
      type: 'text',
      minLength: 0,
      debounceTimeout: 100,
      forceNotifyByEnter: true,
      forceNotifyOnBlur: true
    };
  },


  getInitialState() {
    return {
      value: this.props.value || ''
    };
  },


  componentWillMount() {
    this.createNotifier(this.props.debounceTimeout);
  },


  componentWillReceiveProps({value, debounceTimeout}) {
    if (this.isDebouncing) {
      return;
    }
    if (typeof value !== 'undefined' && this.state.value !== value) {
      this.setState({value});
    }
    if (debounceTimeout !== this.props.debounceTimeout) {
      this.createNotifier(debounceTimeout);
    }
  },


  shouldComponentUpdate,


  componentWillUnmount() {
    if (this.notify.flush) {
      this.notify.flush();
    }
  },

  isDebouncing: false,

  createNotifier(debounceTimeout) {
    if (debounceTimeout < 0) {
      this.notify = () => null;
    } else if (debounceTimeout === 0) {
      this.notify = this.doNotify;
    } else {
      const debouncedChangeFunc = debounce(event => {
        this.isDebouncing = false;
        this.doNotify(event);
      }, debounceTimeout);

      this.notify = event => {
        this.isDebouncing = true;
        debouncedChangeFunc(event);
      };
    }
  },

  doNotify(...args) {
    const {onChange} = this.props;

    onChange(...args);
  },


  forceNotify(event) {
    if (!this.isDebouncing) {
      return;
    }

    if (this.notify.cancel) {
      this.notify.cancel();
      this.isDebouncing = false;
    }

    const {value} = this.state;
    const {minLength} = this.props;

    if (value.length >= minLength) {
      this.doNotify(event);
    } else {
      this.doNotify({...event, target: {...event.target, value}});
    }
  },


  onChange(event) {
    event.persist();

    const oldValue = this.state.value;

    this.setState({value: event.target.value}, () => {
      const {value} = this.state;

      if (value.length >= this.props.minLength) {
        this.notify(event);
        return;
      }

      // If user hits backspace and goes below minLength consider it cleaning the value
      if (oldValue.length > value.length) {
        this.notify({...event, target: {...event.target, value: ''}});
      }
    });
  },


  render() {
    const {
      element,
      onChange: _onChange,
      value: _value,
      minLength: _minLength,
      debounceTimeout: _debounceTimeout,
      forceNotifyByEnter,
      forceNotifyOnBlur,
      onKeyDown,
      onBlur,
      ...props
    } = this.props;

    const maybeOnKeyDown = forceNotifyByEnter ? {
      onKeyDown: event => {
        if (event.key === 'Enter') {
          this.forceNotify(event);
        }
        // Invoke original onKeyDown if present
        if (onKeyDown) {
          onKeyDown(event);
        }
      }
    } : {};

    const maybeOnBlur = forceNotifyOnBlur ? {
      onBlur: event => {
        this.forceNotify(event);
        // Invoke original onBlur if present
        if (onBlur) {
          onBlur(event);
        }
      }
    } : {};


    return React.createElement(element, {
      ...props,
      onChange: this.onChange,
      value: this.state.value,
      ...maybeOnKeyDown,
      ...maybeOnBlur
    });
  }
});
