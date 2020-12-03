import React from 'react';
// import axios from 'axios'
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Login from './Auth/Login'
import Signup from './Auth/Signup'

import Home from './container/Home'
import Navbar from './container/Navbar';

// import ExploreDetails from './Explore/ExploreDetails';
import ExploreContainer from './Explore/ExploreContainer.js'
import FavoriteContainer from './Favorites/FavoriteContainer';
// import Profile from './User/Profile';
// import MapContainer from './GoogleApi/MapContainer';


const profileURL = 'http://localhost:3001/profile'

class App extends React.Component {
  // _isMounted = false;

  state = {
    user: {},
    token: '',
    // places: [],
    favorites: [], 
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
        this.setState({
          user: data.user.data.attributes,
          favorites: data.user.data.attributes.places
        })
      })
    }

    // //fetch places
    // this._isMounted = true
    // fetch('http://localhost:3001/places')
    //     .then(res => res.json())
    //     .then(places => { 
    //     // console.log(data)
    //     // debugger
    //         if (this._isMounted) {
    //             this.setState({places})
    //         }
    //     })
  }

  // componentWillUnmount() {
  //   this._isMounted = false;
  // }


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
      }

   handleLogout = (user) => {
    localStorage.removeItem('token')
    this.setState({user: user })
    return <Redirect to="/" push={true} />
  }

  // Favorites

  addFavorite = (place) => {
    const token = localStorage.getItem('token')
    // const newFavorite = { favorite: {place_id: place.id, user_id: this.state.user.id}}
    fetch(`http://localhost:3001/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({place_id: place.id, user_id: this.state.user.id})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // console.log(this.state.user)
      debugger
      // console.log(this.state.user.favorites)
      // console.log(this.state.favorites)
      // debugger
      // if(!this.state.user.favorites.some(favorite => favorite.place_id === data.place_id)) {
      //   console.log(this.state.user.favorites)
        this.setState(prevState => {
          // debugger
          return {
            favorites: [...prevState.favorites, data.data.attributes.place]
            // user: [...prevState.user.favorites, data.data.attributes]
          }
        })
      })
      
  }

  removeFavorite = (place) => {
    // debugger
    const fav = this.state.favorites.find(favorite => favorite.id === place.id)
    // console.log(fav)
    // debugger
    fetch(`http://localhost:3001/favorites/${fav.fav_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      // debugger
      console.log(data)
      this.setState(prevState => {
        // debugger
        return {
          favorites: prevState.favorites.filter(favorite => favorite.id !== data.data.attributes.place.id)
          // user: prevState.user.favorites.filter(favorite => favorite.place_id !== data.place_id)
        }
      })
    })

  }

  render() {

    const { user, favorites } = this.state
    console.log(favorites)
    // debugger
    console.log(user)
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
                      <ExploreContainer
                        addFavorite={this.addFavorite} 
                        removeFavorite={this.removeFavorite} 
                        favorites={favorites}
                        // places={places}
                        user={user}
                      />
                    )}
                  />
                  {/* <Route 
                    exact path="/explore/:id" 
                    render={() => (
                      <ExploreDetails
                        addFavorite={this.addFavorite} 
                        removeFavorite={this.removeFavorite} 
                        favorites={user.places}
                        // places={places}
                        user={user}
                      />
                    )}
                  /> */}

                  <Route
                    exact path="/favorites" 
                    render={() => (
                      <FavoriteContainer
                        favorites={favorites}
                        removeFavorite={this.removeFavorite}
                      />
                    )}
                  />
{/* 
                  <Route
                    exact path="/profile"
                    render={() => <Profile />} 
                  /> */}
            </Switch>


        </div>
      );
    }
}

export default withRouter (App);
