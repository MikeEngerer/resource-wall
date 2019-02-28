import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import LoginNav from './users/LoginNav.jsx'
import Dashboard from './main/Dashboard.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAuthed: false,
      currentUser: null,
      content: [
      {
        type: 'article',
        color: 'blue',
        title: 'Card 1 Title',
        description: 'Card 1 description Card 1 description Card 1 description Card 1 description Card 1 description'
      },
      {
        type: 'article',
        color: 'blue',
        title: 'Card 1 Title',
        description: 'Card 1 description Card 1 description Card 1 description Card 1 description Card 1 description'
      },
      {
        type: 'website',
        color: 'green',
        title: 'Card 2 Title',
        description: 'Card 2 description Card 2 description Card 2 description Card 2 description Card 2 description'
      }
      ]
    }
  }

  componentWillMount() {
    // fetches cookie via server and sets auth
    axios.get('/cookie')
    .then(res => {
      if (res.data.result === 'logged in' && !this.state.isAuthed) {
        this.setState({isAuthed: true})
      }
    })
  }

  handleNewPost = (data) => {
    axios.post('/posts/new', data)
    .then(res => {
      let oldPosts = this.state.content
      let newPosts = [...oldPosts, res.data[0]]
      console.log(res.data[0])
      this.setState({content: newPosts})
    })
  }

  handleUserAuth = (data) => {
    let { isAuthed } =  data
    this.setState({isAuthed})
  }

  handleLogout = (e) => {
    e.preventDefault()
    axios.post('/logout')
    .then(() => this.setState({ isAuthed: false }))
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App" >
          <LoginNav
            isAuthed={this.state.isAuthed} 
            handleUserAuth={this.handleUserAuth} 
            handleLogout={this.handleLogout}
          />
          <Route path="/dashboard" component={() => 
            <Dashboard content={this.state.content} handleNewPost={this.handleNewPost} isAuthed={this.state.isAuthed} />
          }/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
