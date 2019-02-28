import React, { Component } from 'react';

class LegendItem extends Component {

    render() {
        return (
            <li> {this.props.type} {this.props.color}</li>
        );
    }
}

export default LegendItem;
