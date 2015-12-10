import React from 'react';
import DebounceInput from '..';


const App = React.createClass({
  getInitialState() {
    return {
      value: '',
      minLength: 0,
      debounceTimeout: 300,
      indefinite: false,
      history: [''],
      historyIndex: 0,
      lastNotifiedValue: '',
      onlyNotifyOnUserInput: true
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

  onChangeNotifyUserInput({target: {checked}}) {
    this.setState({onlyNotifyOnUserInput: checked});
  },


  onChange(value) {
    const historyIndex = this.state.historyIndex + 1;

    this.setState({
      value,
      lastNotifiedValue: value,
      historyIndex,
      history: this.state.history.slice(0, historyIndex).concat(value)
    });
  },


  onKeyDown({key}) {
    this.setState({key});
  },

  setValueFromHistory(newIndex) {
    let historyIndex = newIndex;

    if (historyIndex < 0) {
      historyIndex = 0;
    } else if (historyIndex >= this.state.history.length) {
      historyIndex = this.state.history.length - 1;
    }

    if (historyIndex === 0 && this.state.history.length === 0) {
      return;
    }

    this.setState({value: this.state.history[historyIndex], historyIndex});
  },

  redo() {
    this.setValueFromHistory(this.state.historyIndex + 1);
  },

  undo() {
    this.setValueFromHistory(this.state.historyIndex - 1);
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

          <label>
            Notifications for User Input Only:&nbsp;
            <input
              type="checkbox"
              checked={this.state.onlyNotifyOnUserInput}
              onChange={this.onChangeNotifyUserInput} />
          </label>
        </div>

        <div>
          <h2>Test</h2>
          <DebounceInput
            value={this.state.value}
            minLength={this.state.minLength}
            debounceTimeout={this.state.indefinite ? -1 : this.state.debounceTimeout}
            onChange={this.onChange}
            onlyNotifyOnUserInput={this.state.onlyNotifyOnUserInput}
            onKeyDown={this.onKeyDown} />
          <button onClick={this.undo}>Undo</button>
          <button onClick={this.redo}>Redo</button>
          <p>Undo Stack: {
            this.state.history
              .map(s => `"${s}"`)
              .splice(0, this.state.historyIndex)
              .reverse()
              .join(', ')}
          </p>
          <p>Current Value: {this.state.value}</p>
          <p>Redo Stack: {
            this.state.history
              .map(s => `"${s}"`)
              .splice(this.state.historyIndex + 1)
              .join(', ')}
          </p>
          <p>Key pressed: {this.state.key}</p>
          <p>Last Change Notification Value: {this.state.lastNotifiedValue}</p>
        </div>
      </div>
    );
  }
});


export default App;
