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
    forceNotifyByEnter: React.PropTypes.bool
  },


  getDefaultProps() {
    return {
      minLength: 0,
      debounceTimeout: 100,
      forceNotifyByEnter: true
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
      this.notify = this.props.onChange;
    } else {
      this.notify = debounce(this.props.onChange, debounceTimeout);
    }
  },


  forceNotify(event) {
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
    const {onChange, value: v, minLength,
      debounceTimeout, forceNotifyByEnter, ...props} = this.props;
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
