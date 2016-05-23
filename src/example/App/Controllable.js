import React from 'react';
import DebounceInput from '../..';
import css from './App.css';


const Controllable = React.createClass({
  getInitialState() {
    return {
      value: '',
      debouncedValue: ''
    };
  },


  render() {
    const {value, debouncedValue} = this.state;

    return (
      <div>
        <div className={css.config}>
          <label className={css.label}>
            Contollable input:
            <input className={css.input}
              type="text"
              value={value}
              onChange={e => this.setState({value: e.target.value})} />
            {value}
          </label>
        </div>

        <div className={css.config}>
          <label className={css.label}>
            Debounced input:
            <DebounceInput className={css.input}
              value={value}
              minLength={2}
              debounceTimeout={500}
              onChange={e =>
                this.setState({value: e.target.value, debouncedValue: e.target.value})} />
            {debouncedValue}
          </label>
        </div>
      </div>
    );
  }
});


export default Controllable;
