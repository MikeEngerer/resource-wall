import React, { Component } from 'react';

import NewPost from './NewPost.jsx'
import Legend from './Legend.jsx'
import ContentList from './ContentList.jsx';
import SideNav from '../nav/SideNav.jsx';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            showNewPostForm: false
        }
    }


    showNewPostForm = () => {
        !this.state.showNewPostForm ? this.setState({showNewPostForm: true}) : this.setState({showNewPostForm: false})
    }

    render() {
        return (
        	<div className="dashboard">
        	{this.props.isAuthed ? 
                <div>
                    <SideNav />
                    <ContentList deletePost={this.props.deletePost} editPost={this.props.editPost} content={this.props.content}/>
	                <Legend content={this.props.content}/>   
                    {this.state.showNewPostForm ? <NewPost handleNewPost={this.props.handleNewPost} showNewPostForm={this.showNewPostForm}/> : <button onClick={this.showNewPostForm}>New Post</button>}
                </div>	
        	:
        		<p>Login or Register to get started!</p>
        	}
        	</div>
        );
    }
}

export default Dashboard;
