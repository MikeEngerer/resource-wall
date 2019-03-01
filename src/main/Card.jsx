import React, { Component } from 'react';

import EditPostForm from './EditPostForm.jsx'
class Card extends Component {
    constructor() {
        super()
        this.state = {
            showEditForm: false
        }
    }

    showPostDetails = () => {
        return
    }

    editPost = (e) => {
        e.preventDefault()
        let { title, type, content, link, image } = this.props;
        let t = e.target
        let data = {
            id: this.props.postId,
            type: t.type.value || type,
            title: t.title.value || title,
            content: t.content.value || content,
            link: t.link.value || link,
            image: t.image.value || image
        }
        this.props.editPost(this.props.postId, data)
    }

    toggleEditForm = () => {
        let { showEditForm } = this.state
        this.setState({showEditForm: !showEditForm}, () => {
            console.log(this.state.showEditForm)
        })

    }
    render() {
        let { postId, type, title, content } = this.props
        return (
            <div className={`card ${type}`}>
            	<h1>{title}</h1>
            	<div className="card-body">
            		<p>{content}</p>
            	</div>
            	<div className="btn-action-container">
					<button onClick={this.showPostDetails} className="btn-details">details</button>
					{ !this.state.showEditForm ? (
                            <button onClick={this.toggleEditForm} className="btn-edit">edit</button> 
                        ) : (
                            <EditPostForm 
                                title={title} 
                                type={type} 
                                content={content} 
                                postId={postId} 
                                toggleEditForm={this.toggleEditForm}
                                editPost={this.editPost}
                            />
                        )
                    }
					<button onClick={() => this.props.deletePost(postId)} className="btn-delete">delete</button>
				</div>	
            </div>
        );
    }
}

export default Card;

