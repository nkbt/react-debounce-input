import React from 'react';
import debounce from 'lodash.debounce';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


const noop = () => {};


export const DebounceInput = React.createClass({
  propTypes: {
    element: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
    type: React.PropTypes.string,
    onChange: React.PropTypes.func,
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
    if (debounceTimeout < 0 || !this.props.hasOwnProperty('onChange')) {
      this.notify = noop;
    } else if (debounceTimeout === 0) {
      this.notify = this.props.onChange;
    } else {
      this.notify = debounce(this.props.onChange, debounceTimeout);
    }
  },


  forceNotify(event) {
    if (!this.props.hasOwnProperty('onChange')) {
      return;
    }

    if (this.notify.cancel) {
      this.notify.cancel();
    }

    const {value} = this.state;
    const {minLength, onChange} = this.props;

    if (value.length >= minLength) {
      onChange(event);
    } else {
      onChange({...event, target: {...event.target, value}});
    }
  },


  onChange(event) {
    event.persist();

    this.oldValue = this.state.value;
    this.setState({value: event.target.value}, this.afterSetState);
  },


  afterSetState() {
    const {value} = this.state;

    if (value.length >= this.props.minLength) {
      this.notify(event);
      return;
    }

    // If user hits backspace and goes below minLength consider it cleaning the value
    if (this.oldValue.length > value.length) {
      this.notify({...event, target: {...event.target, value: ''}});
    }
  },


  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.forceNotify(event);
    }
    // Invoke original onKeyDown if present
    if (this.props.hasOwnProperty('onKeyDown')) {
      this.props.onKeyDown(event);
    }
  },


  onBlur(event) {
    this.forceNotify(event);
    // Invoke original onBlur if present
    if (this.props.hasOwnProperty('onBlur')) {
      this.props.onBlur(event);
    }
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

    const onChangeProp = this.props.hasOwnProperty('onChange') ? {onChange: this.onChange} : {};
    const valueProp = this.props.hasOwnProperty('onChange') ? {value: this.state.value} : {};
    const onKeyDownProp = forceNotifyByEnter ? {onKeyDown: this.onKeyDown} : {};
    const onBlurProp = forceNotifyOnBlur ? {onBlur: this.onBlur} : {};

    return React.createElement(element, {
      ...props,
      ...valueProp,
      ...onChangeProp,
      ...onKeyDownProp,
      ...onBlurProp
    });
  }
});
