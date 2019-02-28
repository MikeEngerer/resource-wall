import React, { Component } from 'react';

class NewPost extends Component {

    handleNewPost = (e) => {
      e.preventDefault();
      let t = e.target
      let data = {
        type: t.type.value,
        title: t.title.value,
        content: t.content.value,
        link: t.link.value,
        image: t.image.value
      }
      this.props.handleNewPost(data)
    }

    render() {
        return (
          <section id="new-post">
            <h1>Create New Post</h1>
            <form className="post-form" onSubmit={ this.handleNewPost } >
              <select name="type">
                <option value="article">Article</option>
                <option value="website">Website</option>
                <option value="document">Document</option>
                <option value="video">Video</option>
              </select>
              <br/>
              <input type="text" name="title" placeholder="Title"required/>
              <input type="text" name="content" placeholder="Content"required/>
              <input type="text" name="link" placeholder="Link to content" />
              <input type="text" name="image" placeholder="Link to image" />
              <button>Post!</button>
              <button onClick={this.props.showNewPostForm}>Cancel</button>
            </form>
          </section>
        );
    }
}

export default NewPost;
