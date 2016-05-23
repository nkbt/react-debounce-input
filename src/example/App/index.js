import React from 'react';
import Controllable from './Controllable';
import Customizable from './Customizable';
import UndoRedo from './UndoRedo';
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
  </div>
);


export default App;
