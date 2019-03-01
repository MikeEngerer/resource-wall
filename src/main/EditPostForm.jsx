import React, { Component } from 'react';

class EditPostForm extends Component {

    render() {
      let { postId, type, title, content } = this.props
        return (
          <section id="new-post">
            <h1>Edit Post</h1>
            <form className="post-form" onSubmit={ this.props.editPost } >
              <select name="type">
                <option value="article">Article</option>
                <option value="website">Website</option>
                <option value="document">Document</option>
                <option value="video">Video</option>
              </select>
              <br/>
              <input type="text" name="title" placeholder={title} />
              <input type="text" name="content" placeholder={content} />
              <input type="text" name="link" placeholder="link" />
              <input type="text" name="image" placeholder="image" />
              <button>Edit!</button>
            </form>
              <button onClick={this.props.toggleEditForm}>Cancel</button>
          </section>
        );
    }
}

export default EditPostForm;
