import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div className={`card ${this.props.type}`}>
            	<h1>{this.props.title}</h1>
            	<div class="card-body">
            		<p>{this.props.description}</p>
            	</div>
            	<div class="btn-action-container">
					<button class="btn-details">details</button>
					<button class="btn-edit">edit</button>
					<button class="btn-delete">delete</button>
				</div>	
            </div>
        );
    }
}

export default Card;

