import React from 'react';
import Controllable from './Controllable';
import Customizable from './Customizable';
import UndoRedo from './UndoRedo';
import * as style from './style';


const App = React.createClass({
  render() {
    return (
      <div style={style.container}>
        <h1>DebounceInput</h1>

        <section style={style.section}>
          <h2>Example 1. Customizable</h2>
          <Customizable />
        </section>

        <section style={style.section}>
          <h2>Example 2. Controllabe</h2>
          <Controllable />
        </section>

        <section style={style.section}>
          <h2>Example 3. Undo-Redo</h2>
          <UndoRedo />
        </section>
      </div>
    );
  }
});


export default App;
