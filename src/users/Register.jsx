import React, { Component } from 'react';

import axios from 'axios';


class Register extends Component {

  handleRegister = (e) => {
    e.preventDefault()
    let data = {
      email: e.target.email.value,
      name: e.target.name.value,
      password: e.target.password.value
    }
    if (data.password !== e.target.passwordConfirm.value) {
      return alert('passwords must match')
    }
    axios.post('/register', data)
      .then(res => {
        res.data.result === 'success' ? this.props.handleUserAuth({isAuthed: true}) : alert(res.data.result)
      })
  }

	render() {
		return (         
		<section id="register">
        <h1>Register</h1>
        <form className="login-form" onSubmit={ this.handleRegister } >
          <input type="email" name="email" placeholder="Email"required/>
          <input type="text" name="name" placeholder="Name"required/>
          <input type="password" name="password" placeholder="Password" required/>
          <input type="password" name="passwordConfirm" placeholder="Confirm password" required/>
          <button>Register</button>
        </form>
      </section>
    )
	}
}
export default Register;