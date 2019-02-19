import React, { Component } from 'react';
import axios from 'axios';
import Cookie from 'react-cookie'

class Login extends Component {

    constructor() {
        super();
        this.state = {
        	loggedIn: false
        }
    }

    handleLogin = (e) => {
    	e.preventDefault();
    	let credentials = {
    		email: e.target.email.value,
    		password: e.target.password.value
    	}
    	axios.post('/login', credentials)
    		.then(res => {
    			if (res.data.loggedIn) {
    				const cookie = new Cookie();
    				cookie.set('id', 1)
    			}
    			this.setState({loggedIn: res.data.loggedIn}, () => {
    				console.log('state', this.state)
    			})
    		})
    }

    render() {
        return (
          <section id="login">
            <h1>Login</h1>
            <form onSubmit={ this.handleLogin } >
              <input type="email" name="email" placeholder="Email"/>
              <input type="password" name="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </section>
        );
    }
}

export default Login;
