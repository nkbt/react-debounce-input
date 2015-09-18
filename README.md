# react-debounce-input


[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nkbt/help)

[![Circle CI](https://circleci.com/gh/nkbt/react-debounce-input.svg?style=svg)](https://circleci.com/gh/nkbt/react-debounce-input)
[![Coverage Status](https://coveralls.io/repos/nkbt/react-debounce-input/badge.svg?branch=master)](https://coveralls.io/r/nkbt/react-debounce-input?branch=master)
[![Dependency Status](https://david-dm.org/nkbt/react-debounce-input.svg)](https://david-dm.org/nkbt/react-debounce-input)
[![devDependency Status](https://david-dm.org/nkbt/react-debounce-input/dev-status.svg)](https://david-dm.org/nkbt/react-debounce-input#info=devDependencies)

React component that renders Input with debounced onChange



![React Debounce Input](src/example/react-debounce-input.gif)


## Installation

### npm

```sh
npm install --save react-debounce-input
```

### bower

Coming soon


## Demo

[http://nkbt.github.io/react-debounce-input/example](http://nkbt.github.io/react-debounce-input/example)


## Usage

```js
import React from 'react';
import DebounceInput from 'react-debounce-input';

const App = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  render() {
    return (
      <div>
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={value => this.setState({value})} />
        
        <p>Value: {this.state.value}</p>
      </div>
    );
  }
});


React.render(<App />, document.body);
```


## Options


#### `onChange`: PropTypes.func.isRequired

Function called when value is changed (debounced)


#### `value`: PropTypes.string (default: '')

Initial value


#### `minLength`: PropTypes.number (default: 2)

Minimal length of text to start notify, if value becomes shorter then `minLength` (after removing some characters), there will be a notification with empty value `''`.


#### `debounceTimeout`: PropTypes.number (default: 100)

Notification debounce timeout in ms. If set to `-1`, disables automatic notification completely. Notification will only happen by pressing `Enter` then.


#### `forceNotifyByEnter`: PropTypes.boolean (default: true)

Notification of current value will be sent immediately by hitting `Enter` key. Enabled by-default. Notification value follows the same rule as with debounced notification, so if Length is less, then `minLength` - empty value `''` will be sent back.

*NOTE* if `onKeyDown` callback prop was present, it will be still invoked transparently.


#### Arbitrary props will be transferred to rendered `<input>`

```js
<DebounceInput
  onChange={value => this.setState({value})}
  placeholder="Name"
  className="user-name" />
});
```

Will result in

```js
<input type="text"
  placeholder="Name"
  className="user-name" />
});
```

## Development and testing

```bash
npm install
npm start
```

Then 

```bash
open http://localhost:8080
```

## License

MIT
