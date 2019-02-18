import React, { Component } from 'react';
import {
  BrowserRouter, Link, Route 
} from 'react-router-dom';

import Login from './users/Login.jsx'
import Card from './board/Card.jsx';
import Register from './users/Register.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/server');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/register"> Register </Link>
          <Link to="/login"> Login </Link>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
