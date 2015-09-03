import React from 'react';
import DebounceInput from '..';


const App = React.createClass({
  getInitialState() {
    return {
      value: '',
      minLength: 0,
      debounceTimeout: 300
    };
  },


  onChangeDebounceTimeout({target: {value}}) {
    this.setState({debounceTimeout: parseInt(value, 10)});
  },


  onChangeMaxLength({target: {value}}) {
    this.setState({minLength: parseInt(value, 10)});
  },


  render() {
    return (
      <div>
        <div>
          <h2>Customize</h2>
          minLength:&nbsp;
          <input type="number" step={1} min={0} max={10}
            value={this.state.minLength} onChange={this.onChangeMaxLength} />&nbsp;
          debounceTimeout:&nbsp;
          <input type="number" step={100} min={0} max={1000}
            value={this.state.debounceTimeout} onChange={this.onChangeDebounceTimeout} />
        </div>

        <div>
          <h2>Test</h2>
          <DebounceInput
            minLength={this.state.minLength}
            debounceTimeout={this.state.debounceTimeout}
            onChange={value => this.setState({value})} />
          <p>Value: {this.state.value}</p>
        </div>
      </div>
    );
  }
});


export default App;
