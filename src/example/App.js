import React from 'react';
import DebounceInput from '..';


const App = React.createClass({
  getInitialState() {
    return {
      value: '',
      minLength: 0,
      debounceTimeout: 300,
      indefinite: false
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


  onChange(value) {
    this.setState({value});
  },


  onKeyDown({key}) {
    this.setState({key});
  },

  setTextBoxValueToASDF() {
    this.setState({value: 'ASDF'});
  },


  render() {
    return (
      <div>
        <div>
          <h2>Customize</h2>
          <label>
            minLength:&nbsp;
            <input type="number" step={1} min={0} max={10}
              value={this.state.minLength} onChange={this.onChangeMaxLength} />&nbsp;
          </label>

          <label>
            debounceTimeout:&nbsp;
            <input disabled={this.state.indefinite} type="number" step={100} min={0} max={1000}
              value={this.state.debounceTimeout} onChange={this.onChangeDebounceTimeout} />&nbsp;
          </label>

          <label>
            Indefinite timeout:&nbsp;
            <input
              type="checkbox"
              onChange={this.onChangeIndefiniteTimeout} />
          </label>
        </div>

        <div>
          <h2>Test</h2>
          <DebounceInput
            value={this.state.value}
            minLength={this.state.minLength}
            debounceTimeout={this.state.indefinite ? -1 : this.state.debounceTimeout}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown} />
          <p>Value: {this.state.value}</p>
          <p>Key pressed: {this.state.key}</p>
          <button onClick={this.setTextBoxValueToASDF}>Set input to ASDF</button>
        </div>
      </div>
    );
  }
});


export default App;
