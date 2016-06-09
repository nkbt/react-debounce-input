import React from 'react';
import Controllable from './Controllable';
import Customizable from './Customizable';
import UndoRedo from './UndoRedo';
import Textarea from './Textarea';
import Uncontrolled from './Uncontrolled';
import css from './App.css';


const App = () => (
  <div className={css.app}>
    <h1>react-debounce-input</h1>
    <section className={css.section}>
      <h2>Example 1. Customizable</h2>
      <Customizable />
    </section>

    <section className={css.section}>
      <h2>Example 2. Controllable</h2>
      <Controllable />
    </section>

    <section className={css.section}>
      <h2>Example 3. Undo-Redo</h2>
      <UndoRedo />
    </section>

    <section className={css.section}>
      <h2>Example 4. Debounced Textarea</h2>
      <Textarea />
    </section>

    <section className={css.section}>
      <h2>Example 5. Uncontrolled input</h2>
      <Uncontrolled />
    </section>
  </div>
);


export default App;
