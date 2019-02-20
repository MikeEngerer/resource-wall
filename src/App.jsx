import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import LoginNav from './users/LoginNav.jsx'
import Dashboard from './main/Dashboard.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAuthed: false
    }
  }

  componentWillMount() {
    axios.get('/cookie')
      .then(res => {
        if (res.data.result === 'has cookie') {
          this.setState({isAuthed: true})
        }
      })
  }

  handleUserAuth = (data) => {
    let { isAuthed } =  data
    this.setState({isAuthed})
  }

  handleLogout = (e) => {
    e.preventDefault()
    axios.post('/logout')
      .then(() => {
        this.setState({ isAuthed: false })
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <LoginNav 
            isAuthed={this.state.isAuthed} 
            handleUserAuth={this.handleUserAuth} 
            handleLogout={this.handleLogout}
          />
          <Dashboard isAuthed={this.state.isAuthed}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
