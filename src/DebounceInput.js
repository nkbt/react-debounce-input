import React from 'react';
import debounce from 'lodash.debounce';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


const DebounceInput = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    minLength: React.PropTypes.number,
    debounceTimeout: React.PropTypes.number
  },


  getDefaultProps() {
    return {
      minLength: 0,
      value: '',
      debounceTimeout: 100
    };
  },


  getInitialState() {
    return {
      value: this.props.value
    };
  },


  shouldComponentUpdate,


  componentWillReceiveProps({value}) {
    if (this.state.value !== value) {
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
    this.notify = debounce(this.props.onChange, debounceTimeout);
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


  render() {
    const {onChange, value: v, minLength, debounceTimeout, ...props} = this.props;

    return (
      <input type="text"
        {...props}
        value={this.state.value}
        onChange={({target: {value}}) => this.setState({value})} />
    );
  }
});


export default DebounceInput;
