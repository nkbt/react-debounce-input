import React from 'react';
import Controllable from './Controllable';
import Customizable from './Customizable';
import UndoRedo from './UndoRedo';

const section = {marginBottom: 40};

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>DebounceInput</h1>

        <section style={section}>
          <Customizable />
        </section>

        <section style={section}>
          <Controllable />
        </section>

        <section style={section}>
          <UndoRedo />
        </section>
      </div>
    );
  }
});


export default App;
