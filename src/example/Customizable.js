import React from 'react';
import DebounceInput from '../DebounceInput';


const Customizable = React.createClass({
  getInitialState() {
    return {
      value: '',
      minLength: 0,
      debounceTimeout: 500,
      indefinite: false,
      forceNotifyByEnter: true
    };
  },


  onChangeDebounceTimeout({target: {value}}) {
    this.setState({debounceTimeout: parseInt(value, 10)});
  },


  onChangeMaxLength({target: {value}}) {
    this.setState({minLength: parseInt(value, 10)});
  },


  onChangeIndefiniteTimeout({target: {checked}}) {
    this.setState({indefinite: checked});
  },


  onChangeForceByEnter({target: {checked}}) {
    this.setState({forceNotifyByEnter: checked});
  },


  onChange(value) {
    this.setState({value});
  },


  onKeyDown({key}) {
    this.setState({key});
  },


  render() {
    return (
      <div>
        <h2>Customizable</h2>
        <label>
          Min length:&nbsp;
          <input type="number" step={1} min={0} max={10}
            value={this.state.minLength} onChange={this.onChangeMaxLength} />&nbsp;
        </label>&nbsp;

        <label>
          Debounce timeout:&nbsp;
          <input disabled={this.state.indefinite} type="number" step={100} min={0} max={1000}
            value={this.state.debounceTimeout} onChange={this.onChangeDebounceTimeout} />&nbsp;
        </label>&nbsp;

        <label>
          Indefinite timeout:&nbsp;
          <input
            type="checkbox"
            checked={this.state.indefinite}
            onChange={this.onChangeIndefiniteTimeout} />
        </label>&nbsp;

        <label>
          Force notify by "Enter":&nbsp;
          <input
            type="checkbox"
            checked={this.state.forceNotifyByEnter}
            onChange={this.onChangeForceByEnter} />
        </label>

        <h3>Test</h3>
        <DebounceInput
          forceNotifyByEnter={this.state.forceNotifyByEnter}
          minLength={this.state.minLength}
          debounceTimeout={this.state.indefinite ? -1 : this.state.debounceTimeout}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown} />
        <p>Value: {this.state.value}</p>
        <p>Key pressed: {this.state.key}</p>
      </div>

    );
  }
});


export default Customizable;
