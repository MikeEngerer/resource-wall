import React, { Component } from 'react';

import Card from './Card.jsx'

class ContentList extends Component {

    render() {
        return (
            <div className="content-container">
            {this.props.content.map((item) => <Card 
                key={Math.random()} 
                postId={item.id}
                type={item.type}
                title={item.title} 
                content={item.content} 
                deletePost={this.props.deletePost}
                editPost={this.props.editPost}
                />
            )}
            </div>
        );
    }
}

export default ContentList;
