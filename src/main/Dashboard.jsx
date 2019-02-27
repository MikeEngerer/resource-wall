import React, { Component } from 'react';

import Legend from './Legend.jsx'
import ContentList from './ContentList.jsx';
import SideNav from '../nav/SideNav.jsx';

class Dashboard extends Component {

    render() {
        return (
        	<div className="dashboard">
        	{this.props.isAuthed ? 
                <div>
                    <SideNav />
                    <ContentList content={this.props.content}/>
	                <Legend content={this.props.content}/>   
                </div>	
        	:
        		<p>Login or Register to get started!</p>
        	}
        	</div>
        );
    }
}

export default Dashboard;
