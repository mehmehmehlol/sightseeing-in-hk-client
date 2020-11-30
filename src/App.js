import React from 'react';
// import axios from 'axios'
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Login from './Auth/Login'
import Signup from './Auth/Signup'

import Home from './container/Home'
import Navbar from './container/Navbar';

// import ExploreDetails from './Explore/ExploreDetails';
import ExploreComponent from './Explore/ExploreComponent'
import FavoriteComponent from './Favorites/FavoriteComponent';
import Profile from './User/Profile';
// import MapContainer from './GoogleApi/MapContainer';


const profileURL = 'http://localhost:3001/profile'

class App extends React.Component {

  state = {
    user: {},
    token: '',
    places: [],
    favorites: []
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      fetch((profileURL), {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // debugger
        this.setState({user: data.user.data.attributes})
      })
    }

    //fetch places
    fetch('http://localhost:3001/places')
        .then(res => res.json())
        .then(data => { 
          console.log(data)
          // debugger
          this.setState({places: data})
        })
  }


  // auth

  renderForm = (routerProps) => {
    if (routerProps.location.pathname === "/login"){
      return <Login handleSubmit={this.handleLogin} />
    } else if (routerProps.location.pathname === "/signup"){
      return <Signup handleSubmit={this.handleSignup} />
    }
  }
  
 
   handleLogin = (info) => {
    //  console.log(info)
    //  console.log('login')
     this.handleSigninFetch(info, 'http://localhost:3001/login')
   }

   handleSignup = (info) => {
    //  console.log('sign up')
     this.handleSignupFetch(info, 'http://localhost:3001/users' )
   }


   handleSigninFetch = (info, request) => {
    //  console.log(info)
    //  console.log(request)
     fetch(request, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
        //  "Authorization": "application/json"
       },
       body: JSON.stringify({
         username: info.username,
         password: info.password,
       })
     })
     .then(res => res.json())
     .then(data => {
       console.log(data)
      //  debugger
       localStorage.setItem('token', data.token)
       this.setState({
          user: 
            // id: data.user.data.id,
            // places: data.user.data.attributes.places,
            // first_name: data.user.data.attributes.first_name
            data.user.data.attributes
          
        }, () => {
        this.props.history.push('/') 
        })
    })
    .catch(errors => console.log(errors))
  }

    handleSignupFetch = (info, request) => {
      //  console.log(info)
      //  console.log(request)
       fetch(request, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
          //  "Authorization": "application/json"
         },
         body: JSON.stringify({
           
            first_name: info.first_name,
            last_name: info.last_name,
            username: info.username,
            password: info.password
         })
       })
       .then(res => res.json())
       .then(data => {
        //  console.log(data)
        //  debugger
         localStorage.setItem('token', data.token)
         this.setState({
           user: data.user.data.attributes
          }, () => {
            // console.log(this.props.history)
          this.props.history.push('/') 
         }
        )
      
        })
        .catch(errors => console.log(errors))
        // .then(this.props.history.push('/home'))
      }

   handleLogout = (user) => {
    localStorage.removeItem('token')
    this.setState({user: user })
    return <Redirect to="/" push={true} />
  }

  

  
  


  // Favorites
  

  addFavorite = (place) => {
    const newFavorite = { favorites: {place_id: place.id, user_id: this.state.user.id}}
    fetch(`http://localhost:3001/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFavorite)
    })
    .then(res => res.json())
    .then(favorite => {
      this.setState(prevState => {
        return {favorites: [...prevState.favorites, favorite]}
      })
    })
  }

  removeFavorite = (place) => {
    const fav = this.state.favorites.find(favorite => favorite.place.id === place.id)
    fetch(`http://localhost:3001/favorites/${fav.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(favorite => {
      this.setState(prevState => {
        return {favorites: prevState.favorites.filter(favorite => favorite.id !== fav.id)}
      })
    })
  }

  render() {

    const { user, places } = this.state
    console.log(places)
      return (
        <div className="App">
  
              <Navbar user={user}/>
              <Switch>
                  <Route exact path = '/' render={() => <Home user={user} />} />
                  <Route exact path = '/login' component = {this.renderForm} />
                  <Route exact path = "/signup" component = {this.renderForm} />
                  <Route exact path = '/logout' component={() => this.handleLogout()} />

                  <Route 
                    exact path="/explore" 
                    render={() => (
                      <ExploreComponent 
                        explore={this.state.places} 
                        addFavorite={this.addFavorite} 
                        removeFavorite={this.removeFavorite} 
                      />
                    )}
                  />


                  <Route
                    exact path="/favorites" 
                    render={() => (
                      <FavoriteComponent 
                        places={user.places} 
                      />
                    )}
                  />

                  <Route
                    exact path="/profile"
                    render={() => <Profile />} 
                  />
            </Switch>


        </div>
      );
    }
}

export default withRouter (App);
