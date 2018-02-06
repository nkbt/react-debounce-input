import React from 'react';
import {DebounceInput} from '../src';


export class UndoRedo extends React.Component {
  state = {
    value: '',
    history: [''],
    historyIndex: 0
  };

  onChange = ({target: {value}}) => {
    const {historyIndex, history} = this.state;

    this.setState({
      value,
      historyIndex: historyIndex + 1,
      history: [...history.slice(0, historyIndex + 1), value]
    });
  };

  onRedo = () => {
    this.setValueFromHistory(this.state.historyIndex + 1);
  };

  onUndo = () => {
    this.setValueFromHistory(this.state.historyIndex - 1);
  };

  setValueFromHistory = index => {
    const {history} = this.state;
    const historyIndex = Math.min(Math.max(index, 0), history.length - 1);

    this.setState({
      value: history[historyIndex],
      historyIndex
    });
  };

  render() {
    const history = this.state.history.map((value, key) => (
      <span className="item" key={key}>
        {key === this.state.historyIndex ? <b>{`"${value}"`}</b> : <span>{`"${value}"`}</span>}
      </span>
    ));


    return (
      <div>
        <div className="config">
          <label className="label">
            Debounced Input:
            <DebounceInput
              className="input"
              value={this.state.value}
              minLength={2}
              debounceTimeout={500}
              forceNotifyOnBlur={false}
              onChange={this.onChange} />
          </label>

          <label className="label">
            <button className="input" onClick={this.onUndo}>Undo</button>
          </label>

          <label className="label">
            <button className="input" onClick={this.onRedo}>Redo</button>
          </label>
        </div>

        <p>Current Value: {this.state.value}</p>
        <p>History: {history}</p>
        <p>History Index: {this.state.historyIndex}</p>
      </div>
    );
  }
}
