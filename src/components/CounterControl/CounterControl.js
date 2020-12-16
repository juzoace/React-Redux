import React , { Component } from 'react';

import './CounterControl.css';

class counterControl extends Component {
    render() {
        return (
            <div className="CounterControl" onClick={this.props.clicked}>
                {this.props.label}
            </div>
        );
    }
}

export default counterControl;