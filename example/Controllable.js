import React from 'react';
import {DebounceInput} from '../src';


export class Controllable extends React.Component {
  state = {
    value: '',
    debouncedValue: ''
  };

  render() {
    const {value, debouncedValue} = this.state;

    return (
      <div>
        <div className="config">
          <label className="label">
            Contollable input:
            <input
              className="input"
              type="text"
              value={value}
              onChange={e => this.setState({value: e.target.value})} />
            {value}
          </label>
        </div>

        <div className="config">
          <label className="label">
            Debounced input:
            <DebounceInput
              className="input"
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
}
