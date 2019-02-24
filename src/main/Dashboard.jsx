import React, { Component } from 'react';

import SideNav from '../nav/SideNav.jsx'

class Dashboard extends Component {
    render() {
        return (
        	<div className="dashboard">
        	{this.props.isAuthed ? 
                <div>
                <SideNav />
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
