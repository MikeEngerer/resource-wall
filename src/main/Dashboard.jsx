import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
        	<div className="dashboard">
        	{this.props.isAuthed ? 
	            <div>
	            	<p style={{textDecoration: 'underline'}}>Dashboard</p>
	            	<p>Some stuff</p>
	            	<p>Some more stuff</p>
	            	<p>The most stuff</p>
	            </div>	
        	:
        		<p>Login or Register to get started!</p>
        	}
        	</div>
        );
    }
}

export default Dashboard;
