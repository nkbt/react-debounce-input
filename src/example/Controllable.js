import React from 'react';
import DebounceInput from '../DebounceInput';


const Controllable = React.createClass({
  getInitialState() {
    return {
      value: '',
      debouncedValue: ''
    };
  },


  onChangeDebounced({target: {value}}) {
    this.setState({debouncedValue: value, value});
  },


  onChange({target: {value}}) {
    this.setState({value});
  },


  render() {
    return (
      <div>
        Contollable input
        <input type="text" value={this.state.value} onChange={this.onChange} />
        <p>Value: {this.state.value}</p>

        Debounced input
        <DebounceInput
          value={this.state.value}
          minLength={2}
          debounceTimeout={500}
          onChange={this.onChangeDebounced} />
        <p>Debounced Value: {this.state.debouncedValue}</p>
      </div>
    );
  }
});


export default Controllable;
