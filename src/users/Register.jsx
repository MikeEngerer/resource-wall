import React, { Component } from 'react';


class Register extends Component {
	render() {
		return (         
		<section id="login">
            <h1>Get started</h1>
            <form action="/register" method="POST" onSubmit={ this.handleLogin } >
              <input type="email" name="email" placeholder="Email"/>
              <input type="text" name="name" placeholder="Name"/>
              <button>Login</button>
            </form>
          </section>
        )
	}
}
export default Register;