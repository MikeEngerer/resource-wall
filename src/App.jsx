import React, { Component } from 'react';
import {
  BrowserRouter, Link, Route, Redirect 
} from 'react-router-dom';
import axios from 'axios';

import Login from './users/Login.jsx'
import Card from './board/Card.jsx';
import Register from './users/Register.jsx';
import Dashboard from './main/Dashboard.jsx'
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

  handleLogout = (e) => {
    e.preventDefault()
    axios.post('/logout')
      .then(res => {
        let data = { isAuthed: false }
        this.handleUserAuth(data)
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="login-nav">
            { this.state.isAuthed ?
              <div>
                <Redirect to="/" /> 
                <button onClick={this.handleLogout}>Log out</button>
              </div>
              :
              <div>
                <Link to="/login"><button> Login </button></Link>
                <Link to="/register"><button> Register </button></Link>
                <Route path="/login" component={() => <Login handleUserAuth={this.handleUserAuth} />}/>
                <Route path="/register" component={() => <Register handleUserAuth={this.handleUserAuth} />}/>
              </div>
            }
          </div>
          <Dashboard />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
