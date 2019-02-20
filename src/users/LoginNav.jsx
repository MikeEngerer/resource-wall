import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

import Login from './Login.jsx'
import Register from './Register.jsx';

class LoginNav extends Component {

	switchLoginNav = (currentUrl) => {
    currentUrl = currentUrl.split('/')
    console.log('current path: ', '/' + currentUrl[currentUrl.length - 1])
    switch (currentUrl[currentUrl.length - 1]) {
      case 'login':
        return <Link to="/register"><button> Register </button></Link>
      case 'register':
        return <Link to="/login"><button> Login </button></Link>
      default:
        return (
          <div>
            <Link to="/login"><button> Login </button></Link>
            <Link to="/register"><button> Register </button></Link>
          </div>
        )
    }
	}

    render() {
        return (
          	<div className="login-nav">
	            { this.props.isAuthed ? (
	              <div>
	                <Redirect to="/dashboard" />
	                <button onClick={this.props.handleLogout}>Log out</button>
	              </div>
	              ) : (
	              <div>
	                {this.switchLoginNav(window.location.href)}
	                <Route path="/login" component={() => <Login handleUserAuth={this.props.handleUserAuth} />}/>
	                <Route path="/register" component={() => <Register handleUserAuth={this.props.handleUserAuth} />}/>
	              </div>
                )
	            }
         	</div>
        );
    }
}

export default LoginNav;
