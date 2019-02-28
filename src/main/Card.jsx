import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div className={`card ${this.props.type}`}>
            	<h1>{this.props.title}</h1>
            	<div className="card-body">
            		<p>{this.props.content}</p>
            	</div>
            	<div className="btn-action-container">
					<button className="btn-details">details</button>
					<button className="btn-edit">edit</button>
					<button className="btn-delete">delete</button>
				</div>	
            </div>
        );
    }
}

export default Card;

