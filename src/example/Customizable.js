import React from 'react';
import DebounceInput from '../DebounceInput';
import * as style from './style';


const Customizable = React.createClass({
  getInitialState() {
    return {
      value: '',
      minLength: 0,
      debounceTimeout: 500,
      infinite: false,
      forceNotifyByEnter: true,
      forceNotifyByBlur: true
    };
  },


  render() {
    const {minLength, infinite, debounceTimeout,
      forceNotifyByEnter, forceNotifyByBlur,
      value, key} = this.state;

    return (
      <div>
        <div style={style.config}>
          <label style={style.label}>
            Min length:
            <input style={style.input}
              type="range"
              value={minLength} step={1} min={0} max={10}
              onChange={e => this.setState({minLength: parseInt(e.target.value, 10)})} />
            {minLength}
          </label>

          <label style={style.label}>
            Debounce timeout:
            <input style={style.input}
              type="range"
              value={debounceTimeout} step={100} min={0} max={2000}
              onChange={e => this.setState({debounceTimeout: parseInt(e.target.value, 10)})} />
            {debounceTimeout}
          </label>

          <label style={style.label}>
            Infinite timeout:
            <input style={style.input}
              type="checkbox"
              checked={infinite}
              onChange={e => this.setState({infinite: e.target.checked})} />
          </label>

          <br />
          <br />

          <label style={style.label}>
            Notify by:
          </label>

          <label style={style.label}>
            "Enter" keypress:
            <input style={style.input}
              type="checkbox"
              checked={forceNotifyByEnter}
              onChange={e => this.setState({forceNotifyByEnter: e.target.checked})} />
          </label>

          <label style={style.label}>
            Blur:
            <input style={style.input}
              type="checkbox"
              checked={forceNotifyByBlur}
              onChange={e => this.setState({forceNotifyByBlur: e.target.checked})} />
          </label>
        </div>

        <DebounceInput
          forceNotifyByEnter={forceNotifyByEnter}
          forceNotifyByBlur={forceNotifyByBlur}
          minLength={minLength}
          debounceTimeout={infinite ? -1 : debounceTimeout}
          onChange={e => this.setState({value: e.target.value})}
          onKeyDown={e => this.setState({key: e.key})} />
        <p>Value: {value}</p>
        <p>Key pressed: {key}</p>
      </div>

    );
  }
});


export default Customizable;
