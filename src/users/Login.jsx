import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    handleLogin = () => {
    	return
    }

    render() {
        return (
          <section id="login">
            <h1>Login</h1>
            <form action="/login" method="POST" onSubmit={ this.handleLogin } >
              <input type="email" name="email" placeholder="Email"/>
              <input type="text" name="name" placeholder="Name"/>
              <button>Login</button>
            </form>
          </section>
        );
    }
}

export default Login;
