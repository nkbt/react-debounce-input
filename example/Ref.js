import React from 'react';
import {DebounceInput} from '../src';


export class Ref extends React.Component {
  state = {
    value: '',
    key: undefined
  };


  render() {
    const {
      value,
      key
    } = this.state;

    return (
      <div>
        <div className="config">
          <label className="label">
            <button onClick={() => this.ref.focus()}>Focus, please</button>
          </label>

          <label className="label">
            <button onClick={() => this.ref.blur()}>Blur, please</button>
          </label>
        </div>

        <DebounceInput
          inputRef={ref => {
            this.ref = ref;
          }}
          onChange={e => this.setState({value: e.target.value})}
          onKeyDown={e => this.setState({key: e.key})} />
        <p>Value: {value}</p>
        <p>Key pressed: {key}</p>
      </div>

    );
  }
}
