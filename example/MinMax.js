import React from 'react';
import {DebounceInput} from '../src';


export class MinMax extends React.Component {
    state = {
        value: null
    };

    render() {
        const {value} = this.state;

        const min = 10;
        const max = 100;

        const handleChange = (e) => {
            let newValue = Number(e.target.value);
            if (newValue === 0) {
                newValue = null;
            } else if (newValue < min) {
                newValue = min;
            } else if (newValue > max) {
                newValue = max;
            }
            this.setState({value: newValue});
        }

        return (
            <div>
              <div className="config">
                <DebounceInput
                    className="input"
                    type="number"
                    min={min}
                    max={max}
                    value={value}
                    debounceTimeout={500}
                    onChange={handleChange} />
                <p>Value: {JSON.stringify(value)}</p>
              </div>
            </div>
        );
    }
}
