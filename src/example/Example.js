import React from 'react';
import DebounceInput from '..';


const App = React.createClass({
  render() {
    return (
      <div>
        <DebounceInput />
      </div>
    );
  }
});


React.render(<App />, document.body);
