import React from 'react';
import DebounceInput from '../DebounceInput';
import * as style from './style';


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
        <div style={style.config}>
          <label style={style.label}>
            Contollable input:
            <input style={style.input}
              type="text"
              value={value}
              onChange={e => this.setState({value: e.target.value})} />
            {value}
          </label>
        </div>

        <div style={style.config}>
          <label style={style.label}>
            Debounced input:
            <DebounceInput style={style.input}
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
