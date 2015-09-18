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
      value: this.props.value
    };
  },


  shouldComponentUpdate,


  componentWillReceiveProps({value}) {
    if (typeof value !== 'undefined' && this.state.value !== value) {
      this.setState({value});
    }
  },


  componentWillUpdate({minLength, debounceTimeout}, {value}) {
    this.maybeUpdateNotifier(debounceTimeout);
    this.maybeNotify(minLength, value);
  },


  componentWillMount() {
    this.createNotifier(this.props.debounceTimeout);
  },


  createNotifier(debounceTimeout) {
    if (debounceTimeout < 0) {
      this.notify = () => {};
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


  maybeNotify(minLength, value) {
    const {value: oldValue} = this.state;

    if (value === oldValue) {
      return;
    }

    if (value.length >= minLength) {
      this.notify(value);
      return;
    }

    // If user hits backspace and goes below minLength consider it cleaning the value
    if (value.length < oldValue.length) {
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


  render() {
    const {onChange, value: v, minLength, debounceTimeout, forceNotifyByEnter,
      ...props} = this.props;
    const onKeyDown = !forceNotifyByEnter ? {} : {
      onKeyDown: (event) => {
        if (event.key === 'Enter') {
          this.forceNotify();
        }
        // Invoke original onKeyDown if present
        if (this.props.onKeyDown) {
          this.props.onKeyDown(event);
        }
      }
    };


    return (
      <input type="text"
        {...props}
        value={this.state.value}
        onChange={({target: {value}}) => this.setState({value})}
        {...onKeyDown} />
    );
  }
});


export default DebounceInput;
