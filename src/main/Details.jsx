import React, { Component } from 'react';

class Details extends Component {

    render() {
      console.log(this.props.post)
      let { title, type, content, image, link} = this.props.post[0];
        return (
            <section class="details">
              <h1>{title}</h1>
              <h4>{type}</h4>
              <p>{content}</p>
            </section>
        );
    }
}

export default Details;
