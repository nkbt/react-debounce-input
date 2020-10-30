import React from 'react';
import {Controllable} from './Controllable';
import {Customizable} from './Customizable';
import {UndoRedo} from './UndoRedo';
import {Textarea} from './Textarea';
import {Ref} from './Ref';
import {DefaultValue} from './DefaultValue';


export const App = () => (
  <div className="app">
    <h1>react-debounce-input</h1>
    <section className="section">
      <h2>Example 1. Customizable</h2>
      <Customizable />
    </section>

    <section className="section">
      <h2>Example 2. Controllable</h2>
      <Controllable />
    </section>

    <section className="section">
      <h2>Example 3. Undo-Redo</h2>
      <UndoRedo />
    </section>

    <section className="section">
      <h2>Example 4. Debounced Textarea</h2>
      <Textarea />
    </section>

    <section className="section">
      <h2>Example 5. Custom ref</h2>
      <Ref />
    </section>

    <section className="section">
      <h2>Example 6. Create with default value</h2>
      <DefaultValue />
    </section>
  </div>
);
