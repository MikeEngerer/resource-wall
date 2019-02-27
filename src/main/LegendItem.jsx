import React, { Component } from 'react';

class LegendItem extends Component {

    render() {
        return (
            <li> {this.props.type} </li>
        );
    }
}

export default LegendItem;
