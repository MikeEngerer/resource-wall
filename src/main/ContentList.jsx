import React, { Component } from 'react';

import Card from './Card.jsx'

class ContentList extends Component {

    render() {
        return (
            <div class="content-container">
            {this.props.content.map((item) => <Card type={item.type} title={item.title} description={item.description} />)}
            </div>
        );
    }
}

export default ContentList;
