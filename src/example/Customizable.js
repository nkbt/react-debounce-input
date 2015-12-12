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


  onChangeMinLength({target: {value}}) {
    this.setState({minLength: parseInt(value, 10)});
  },


  onChangeIndefiniteTimeout({target: {checked}}) {
    this.setState({indefinite: checked});
  },


  onChangeForceByEnter({target: {checked}}) {
    this.setState({forceNotifyByEnter: checked});
  },


  onChange({target: {value}}) {
    this.setState({value});
  },


  onKeyDown({key}) {
    this.setState({key});
  },


  render() {
    const {minLength, indefinite, debounceTimeout, forceNotifyByEnter, value, key} = this.state;

    return (
      <div>
        <h2>Customizable</h2>
        <label>
          Min length [{minLength}]:&nbsp;
          <input type="range" step={1} min={0} max={10}
            value={minLength} onChange={this.onChangeMinLength} />&nbsp;
        </label>&nbsp;

        <label>
          Debounce timeout [{debounceTimeout}ms]:&nbsp;
          <input disabled={indefinite} type="range" step={100} min={0} max={1000}
            value={debounceTimeout} onChange={this.onChangeDebounceTimeout} />&nbsp;
        </label>&nbsp;

        <label>
          Indefinite timeout:&nbsp;
          <input
            type="checkbox"
            checked={indefinite}
            onChange={this.onChangeIndefiniteTimeout} />
        </label>&nbsp;

        <label>
          Force notify by "Enter":&nbsp;
          <input
            type="checkbox"
            checked={forceNotifyByEnter}
            onChange={this.onChangeForceByEnter} />
        </label>

        <h3>Test</h3>
        <DebounceInput
          forceNotifyByEnter={forceNotifyByEnter}
          minLength={minLength}
          debounceTimeout={indefinite ? -1 : debounceTimeout}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown} />
        <p>Value: {value}</p>
        <p>Key pressed: {key}</p>
      </div>

    );
  }
});


export default Customizable;
