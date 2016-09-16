import React from 'react';
import ReactDom from 'react-dom';
import DebounceInput from '../..';
import css from './App.css';


const Uncontrolled = React.createClass({
  getInitialState() {
    return {
      value: '',
      key: ''
    };
  },


  onRef(ref) {
    this.ref = ReactDom.findDOMNode(ref);
  },


  onKeyDown({key}) {
    if (key === 'Enter') {
      this.setState({key, value: this.ref.value})
    } else {
      this.setState({key})
    }
  },


  render() {
    const {
      value, key
    } = this.state;

    return (
      <div>
        <DebounceInput
          ref={this.onRef}
          onKeyDown={this.onKeyDown} />
        <p>Value: {value}</p>
        <p>Key pressed: {key}</p>
      </div>

    );
  }
});


export default Uncontrolled;
