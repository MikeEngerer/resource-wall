import React, { Component } from 'react';
import {
  BrowserRouter, Link, Route 
} from 'react-router-dom';

import Login from './users/Login.jsx'
import Logout from './users/Logout.jsx'
import Card from './board/Card.jsx';
import Register from './users/Register.jsx';
import Main from './main/main.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAuthed: false
    }
  }

  handleUserAuth = (data) => {
    let { isAuthed } =  data
    this.setState({isAuthed})
  }

  render() {
    if (this.state.isAuthed) {
      return (
        <BrowserRouter>
        <div>
          <Logout handleUserAuth={this.handleUserAuth}/>
          <Main />
        </div>
        </BrowserRouter>
      )
    } else {
      return (
        <BrowserRouter>
          <div className="App">
            <Link to="/register"><button> Register </button></Link>
            <Link to="/login"><button> Login </button></Link>
            <Route path="/login" component={() => <Login handleUserAuth={this.handleUserAuth} />}/>
            <Route path="/register" component={() => <Register handleUserAuth={this.handleUserAuth} />}/>
            <Main />
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default App;
