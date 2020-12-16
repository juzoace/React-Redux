import React, { Component } from 'react';

import './CounterOutput.css';

// const counterOutput = (props) => (
//     <div className="CounterOutput">
//         Current Counter: {props.value}
//     </div>
// );

class counterOutput extends Component {
    render() {
        return (
            <div className="CounterOutput">
                Current Counter: {this.props.value}
            </div>
        );
    }

}
export default counterOutput;