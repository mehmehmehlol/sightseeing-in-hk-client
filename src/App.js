import React from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './container/Home'
import Login from './Auth/Login'
import Signup from './Auth/Signup'

// import SimpleMap from './SimpleMap';
import Navbar from './container/Navbar';
import ExploreComponent from './Explore/ExploreComponent';


class App extends React.Component {

  state = {
    isLoggedIn: false,
    user: {}
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})

    .then(res => {
      if (res.data.logged_in) {
        this.handleLogin(res)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState ({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = (data) => {
    // debugger
    this.setState ({
      isLoggedIn: false,
      user: {}
    })
  }

  render() {


  
      return (
        <div className="App">
          <Router>
                <Navbar />
                <Route 
                  exact path="/" 
                  render={props => (
                  <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />)} 
                />

                <Route 
                  exact path="/login" 
                  render={props => (
                  <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} 
                />
                <Route 
                  exact path="/signup" 
                  render={props => (
                  <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} 
                />
                <Route 
                  exact path="/explore" 
                  component={ExploreComponent}
                />
            
          </Router>

        </div>
      );
    }
}

export default App;
