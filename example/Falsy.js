import React from 'react';
import {DebounceInput} from '../src';

export class Falsy extends React.Component {
  render() {
    return (
      <div>
        <DebounceInput type="number" value={0} />
      </div>
    )
  }
}
