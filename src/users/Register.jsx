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
              <button>Login</button>
            </form>
          </section>
        )
	}
}
export default Register;