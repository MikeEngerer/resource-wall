import React, { Component } from 'react';


class Register extends Component {

  handleRegister = () => {
    return
  }

	render() {
		return (         
		<section id="register">
            <h1>Register</h1>
            <form action="/register" method="POST" onSubmit={ this.handleRegister } >
              <input type="email" name="email" placeholder="Email"/>
              <input type="text" name="name" placeholder="Name"/>
              <input type="password" name="password" placeholder="Password" />
              <input type="password" name="password-confirm" placeholder="Confirm password" />
              <button>Login</button>
            </form>
          </section>
        )
	}
}
export default Register;