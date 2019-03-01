import React, { Component } from 'react';

class EditPostForm extends Component {

    render() {
      let { postId, type, title, content } = this.props
        return (
          <section id="edit-post">
            <h1>Edit Post</h1>
            <form className="edit-form" onSubmit={ this.props.editPost } >
            <label for="type">Type</label>
              <select name="type">
                <option value="article">Article</option>
                <option value="website">Website</option>
                <option value="document">Document</option>
                <option value="video">Video</option>
              </select>
              <br/>
              <label for="title" >Title</label>
              <input type="text" name="title" placeholder={title} />
              <label for="content">Description</label>
              <textarea type="text" name="content" placeholder={content} />
              <label for="link">Link</label>
              <input type="text" name="link" placeholder="link" />
              <label for="image">Image Link</label>
              <input type="text" name="image" placeholder="image" />
              <button>Edit!</button>
            </form>
              <button onClick={this.props.toggleEditForm}>Cancel</button>
          </section>
        );
    }
}

export default EditPostForm;
