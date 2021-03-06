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
        let { showNewPostForm } = this.state;
        this.setState({showNewPostForm: !showNewPostForm})
    }

    render() {
        return (
        	<div className="dashboard">
        	{this.props.isAuthed ? 
                <div>
                    <SideNav />
                    <ContentList 
                        deletePost={this.props.deletePost} 
                        editPost={this.props.editPost} 
                        content={this.props.content}
                        handleDetails={this.props.handleDetails}
                    />
	                <Legend content={this.props.content}/>   
                    {this.state.showNewPostForm ? ( 
                        <NewPost 
                            handleNewPost={this.props.handleNewPost} 
                            showNewPostForm={this.props.showNewPostForm}
                        />
                        ) : (
                        <button onClick={this.showNewPostForm}>New Post</button>
                        )
                    }
                </div>	
        	:
        		<p>Login or Register to get started!</p>
        	}
        	</div>
        );
    }
}

export default Dashboard;
