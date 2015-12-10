import React from 'react';
import Controllable from './Controllable';
import Customizable from './Customizable';


const App = React.createClass({


  render() {
    return (
      <div>
        <h1>DebounceInput</h1>

        <Customizable />
        <Controllable />
      </div>
    );
  }
});


export default App;
