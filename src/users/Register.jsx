import React, { Component } from 'react';
import axios from 'axios';


class Register extends Component {

  handleRegister = (e) => {
    e.preventDefault()
    console.log('here')
    let data = {
      email: e.target.email.value,
      name: e.target.name.value,
      password: e.target.password.value
    }
    if (data.password !== e.target.passwordConfirm.value) {
      alert('passwords must match')
      return
    }
    axios.post('/register', data)
      .then(res => {
        if (res.data.result !== 'success') {
          alert(res.data.result)
          return
        } else {
          this.props.handleUserAuth({isAuthed: true})
        }
      })
  }

	render() {
		return (         
		<section id="register">
            <h1>Register</h1>
            <form onSubmit={ this.handleRegister } >
              <input type="email" name="email" placeholder="Email"/>
              <input type="text" name="name" placeholder="Name"/>
              <input type="password" name="password" placeholder="Password" />
              <input type="password" name="passwordConfirm" placeholder="Confirm password" />
              <button>Login</button>
            </form>
          </section>
        )
	}
}
export default Register;