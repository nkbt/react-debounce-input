import React from 'react';
import DebounceInput from '../../DebounceInput';
import css from './App.css';


const UndoRedo = React.createClass({
  getInitialState() {
    return {
      value: '',
      history: [''],
      historyIndex: 0
    };
  },


  onChange({target: {value}}) {
    const {historyIndex, history} = this.state;

    this.setState({
      value,
      historyIndex: historyIndex + 1,
      history: [...history.slice(0, historyIndex + 1), value]
    });
  },


  setValueFromHistory(index) {
    const {history} = this.state;
    const historyIndex = Math.min(Math.max(index, 0), history.length - 1);

    this.setState({
      value: history[historyIndex],
      historyIndex
    });
  },


  redo() {
    this.setValueFromHistory(this.state.historyIndex + 1);
  },


  undo() {
    this.setValueFromHistory(this.state.historyIndex - 1);
  },


  render() {
    const history = this.state.history.map((value, key) => (
      <span className={css.item} key={key}>
        {key === this.state.historyIndex ? <b>"{value}"</b> : <span>"{value}"</span>}
      </span>
    ));


    return (
      <div>
        <div className={css.config}>
          <label className={css.label}>
            Debounced Input:
            <DebounceInput className={css.input}
              value={this.state.value}
              minLength={2}
              debounceTimeout={500}
              forceNotifyOnBlur={false}
              onChange={this.onChange} />
          </label>

          <label className={css.label}>
            <button className={css.input} onClick={this.undo}>Undo</button>
          </label>

          <label className={css.label}>
            <button className={css.input} onClick={this.redo}>Redo</button>
          </label>
        </div>

        <p>Current Value: {this.state.value}</p>
        <p>History: {history}</p>
        <p>History Index: {this.state.historyIndex}</p>
      </div>
    );
  }
});


export default UndoRedo;
