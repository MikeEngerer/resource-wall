import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

class Login extends Component {

    handleLogin = (e) => {
    	e.preventDefault();
    	let credentials = {
    		email: e.target.email.value,
    		password: e.target.password.value
    	}
    	axios.post('/login', credentials)
    		.then(res => {
    			if (res.data.result == 'success') {
    				this.props.handleUserAuth({isAuthed: true})
    			} else {
    				alert(res.data.result)
    			}
    		}) 
    }

    render() {
        return (
          <section id="login">
            <h1>Login</h1>
            <form onSubmit={ this.handleLogin }>
              <input type="email" name="email" placeholder="Email"/>
              <input type="password" name="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </section>
        );
    }
}

export default Login;
