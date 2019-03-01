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
      content: []
    }
  }

  componentDidMount() {
    // fetches cookie via server and sets auth, then fetches user's posts 
    this.checkCookie().then((res) => {
      console.log('res', res)
      if (this.state.isAuthed) { 
        this.fetchPosts()
      }
    })
  }

  handleNewPost = (data) => {
    axios.post('/posts/new', data)
    .then(res => {
      let oldPosts = this.state.content
      let newPosts = [...oldPosts, res.data[0]]
      this.setState({content: newPosts})
    })
  }

  deletePost = (postId) => {
    let { content } = this.state
    let newPosts = content.filter(e => e.id !== postId).sort((a, b) => b.id - a.id)
    axios.post(`/posts/${postId}/delete`)
    .then((res) => {
      this.setState({content: newPosts})
    })
  }

  editPost = (postId, postUpdate) => {
    let { content } = this.state
    let updatedPost = content.filter(e => e.id === postId)
    let postIndex = content.indexOf(updatedPost)
    updatedPost = postUpdate
    content.splice(postIndex, 1)
    let newPosts = [...content, updatedPost].sort((a, b) => b.id - a.id)
    console.log(newPosts)
    axios.post(`/posts/${postId}/edit`, updatedPost)
    .then((res) => {
      this.setState({content: newPosts})
    })
  }

  handleUserAuth = (data) => {
    let { isAuthed } =  data
    this.setState({isAuthed})
    this.fetchPosts()
  }

  handleLogout = (e) => {
    e.preventDefault()
    axios.post('/logout')
    .then(() => this.setState({ isAuthed: false, content: [] }))
  }

  checkCookie = () => {
    return new Promise((resolve, reject) => {    
      axios.get('/cookie')
      .then(res => {
        if (res.data.result === 'logged in' && !this.state.isAuthed) {
          resolve(this.setState({isAuthed: true}))
        } else {
          reject('server error!!!!')
        }
      })
    })
  }

  fetchPosts = () => {
    axios.get('/posts')
    .then(res => {
      res.data.sort((a, b) => b.id - a.id)
      this.setState({content: res.data}, () => console.log('content', this.state.content))
    })
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
            <Dashboard 
              content={this.state.content} 
              handleNewPost={this.handleNewPost} 
              isAuthed={this.state.isAuthed} 
              editPost={this.editPost}
              deletePost={this.deletePost}
            />
          }/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
