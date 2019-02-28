import React, { Component } from 'react';

import Card from './Card.jsx'

class ContentList extends Component {

    render() {
      console.log(this.props.content[this.props.content.length - 1])
        return (
            <div className="content-container">
            {this.props.content.map((item) => <Card key={Math.random()} type={item.type} title={item.title} content={item.content} />)}
            </div>
        );
    }
}

export default ContentList;
