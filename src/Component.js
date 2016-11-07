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
    if (typeof value !== 'undefined' && this.state.value !== value) {
      this.setState({value});
    }
    if (debounceTimeout !== this.props.debounceTimeout) {
      this.createNotifier(debounceTimeout);
    }
  },


  shouldComponentUpdate,


  componentWillUnmount() {
    if (this.notify.cancel) {
      this.notify.cancel();
    }
  },


  createNotifier(debounceTimeout) {
    if (debounceTimeout < 0) {
      this.notify = () => null;
    } else if (debounceTimeout === 0) {
      this.notify = this.doNotify;
    } else {
      this.notify = debounce(this.doNotify, debounceTimeout);
    }
  },


  doNotify(...args) {
    this.props.onChange(...args);
  },


  forceNotify(event) {
    if (this.notify.cancel) {
      this.notify.cancel();
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
      ...props
    } = this.props;

    const onKeyDown = forceNotifyByEnter ? {
      onKeyDown: event => {
        if (event.key === 'Enter') {
          this.forceNotify(event);
        }
        // Invoke original onKeyDown if present
        if (this.props.onKeyDown) {
          this.props.onKeyDown(event);
        }
      }
    } : {};

    const onBlur = forceNotifyOnBlur ? {
      onBlur: event => {
        this.forceNotify(event);
        // Invoke original onBlur if present
        if (this.props.onBlur) {
          this.props.onBlur(event);
        }
      }
    } : {};


    return React.createElement(element, {
      ...props,
      onChange: this.onChange,
      value: this.state.value,
      ...onKeyDown,
      ...onBlur
    });
  }
});
