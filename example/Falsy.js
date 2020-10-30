import React from 'react';
import {DebounceInput} from '../src';

export const Falsy = () => (
  <div>
    <DebounceInput type="number" value={0} />
  </div>
);
