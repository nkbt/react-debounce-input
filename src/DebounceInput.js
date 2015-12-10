import React from 'react';
import debounce from 'lodash.debounce';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


const DebounceInput = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    onKeyDown: React.PropTypes.func,
    value: React.PropTypes.string,
    minLength: React.PropTypes.number,
    debounceTimeout: React.PropTypes.number,
    forceNotifyByEnter: React.PropTypes.bool,
    onlyNotifyOnUserInput: React.PropTypes.bool
  },


  getDefaultProps() {
    return {
      minLength: 0,
      debounceTimeout: 100,
      forceNotifyByEnter: true,
      onlyNotifyOnUserInput: false,
      value: ''
    };
  },


  getInitialState() {
    return {
      isUserInput: false,
      value: this.props.value
    };
  },


  componentWillMount() {
    this.createNotifier(this.props.debounceTimeout);
  },


  componentWillReceiveProps({value}) {
    if (typeof value !== 'undefined' && this.props.value !== value) {
      this.setState({value});
    }
  },


  shouldComponentUpdate,


  componentWillUpdate({minLength, debounceTimeout, onlyNotifyOnUserInput}, {value, isUserInput}) {
    this.maybeUpdateNotifier(debounceTimeout);
    this.maybeNotify(isUserInput, minLength, onlyNotifyOnUserInput, value);
  },


  createNotifier(debounceTimeout) {
    if (debounceTimeout < 0) {
      this.notify = () => null;
    } else if (debounceTimeout === 0) {
      this.notify = this.props.onChange;
    } else {
      this.notify = debounce(this.props.onChange, debounceTimeout);
    }
  },


  maybeUpdateNotifier(debounceTimeout) {
    if (debounceTimeout !== this.props.debounceTimeout) {
      this.createNotifier(debounceTimeout);
    }
  },


  maybeNotify(isUserInput, minLength, onlyNotifyOnUserInput, value) {
    const {value: oldValue} = this.state;

    if (value === oldValue) {
      return;
    }

    if (onlyNotifyOnUserInput && !isUserInput) {
      return;
    }

    this.setState({isUserInput: false});

    if (value.length >= minLength) {
      this.notify(value);
      return;
    }

    // If user hits backspace and goes below minLength consider it cleaning the value
    if (oldValue && value.length < oldValue.length) {
      this.notify('');
    }
  },


  forceNotify() {
    const {value} = this.state;
    const {minLength, onChange} = this.props;

    if (value.length >= minLength) {
      onChange(value);
    } else {
      onChange('');
    }
  },


  onChange({target: {value}}) {
    this.setState({value, isUserInput: true});
  },


  render() {
    const {onChange, value: v, minLength,
      debounceTimeout, forceNotifyByEnter, onlyNotifyOnUserInput, ...props} = this.props;
    const onKeyDown = forceNotifyByEnter ? {
      onKeyDown: event => {
        if (event.key === 'Enter') {
          this.forceNotify();
        }
        // Invoke original onKeyDown if present
        if (this.props.onKeyDown) {
          this.props.onKeyDown(event);
        }
      }
    } : {};

    return (
      <input type="text"
        {...props}
        value={this.state.value}
        onChange={this.onChange}
        {...onKeyDown} />
    );
  }
});


export default DebounceInput;
