import React from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { ThemeProvider } from "styled-components"
import { GlobalStyles } from './Theme/GlobalStyles'
import { lightTheme, darkTheme } from './Theme/Themes'
// import Toggle from './Theme/Toggle'

import Login from './Auth/Login'
import Signup from './Auth/Signup'

import Home from './container/Home'
import Navbar from './container/Navbar';
import About from './container/About'

import ExploreContainer from './Explore/ExploreContainer.js'
import FavoriteContainer from './Favorites/FavoriteContainer';
import Profile from './User/Profile';
import notFound from './container/notFound'



const profileURL = 'https://sightseeing-in-hk-backend.herokuapp.com/profile'

class App extends React.Component {

  state = {
    user: null,
    token: '',
    favorites: [], 
    theme: 'light'
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
        debugger
        this.setState({
          user: data.user.data.attributes,
          favorites: data.user.data.attributes.places
        })
      })
    }
  }

  // theme
  toggleTheme = () => {
    this.state.theme === 'light' ? this.setState({ theme: 'dark'}) : this.setState({ theme: 'light'})
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
     this.handleSigninFetch(info, 'https://sightseeing-in-hk-backend.herokuapp.com/login')
   }

   handleSignup = (info) => {
     this.handleSignupFetch(info, 'https://sightseeing-in-hk-backend.herokuapp.com/users' )
   }


   handleSigninFetch = (info, request) => {
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
          user: data.user.data.attributes
        }, () => {
        this.props.history.push('/') 
        })
    })
    .catch(errors => console.log(errors))
  }

    handleSignupFetch = (info, request) => {
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
          this.props.history.push('/') 
         }
        )
        })
        .catch(errors => console.log(errors))
      }

   handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({user: null })
    return <Redirect to="/" push={true} />
  }

  // Favorites

  addFavorite = (place) => {
    const token = localStorage.getItem('token')
    fetch(`https://sightseeing-in-hk-backend.herokuapp.com/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({place_id: place.id, user_id: this.state.user.id})
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      // debugger
        this.setState(prevState => {
          // debugger
          return {
            favorites: [...prevState.favorites, data.data.attributes.place]
          }
        })
      })
  }

  removeFavorite = (place) => {
    // debugger
    const fav = this.state.favorites.find(favorite => favorite.id === place.id)
    // console.log(fav)
    // debugger
    fetch(`https://sightseeing-in-hk-backend.herokuapp.com/favorites/${fav.fav_id}`, {
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
        }
      })
    })

  }

  // Update Profile
  updateProfile = (profile) => {
    const token = localStorage.getItem('token')
      fetch(`https://sightseeing-in-hk-backend.herokuapp.com/users/${this.state.user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify({
          first_name: profile.first_name,
          last_name: profile.last_name,
          username: profile.username,
          password: profile.password
        })
      })
      .then(res => res.json())
      .then(profile => {
        // debugger
        this.setState({user: profile.data.attributes })
      })
    }

    

  
  render() {

    const { user, favorites } = this.state
    // console.log(favorites)
    // debugger
    console.log(user)
      return (
       
            <div className="App">
               <Navbar theme={this.state.theme} toggleTheme={this.toggleTheme} user={user}/>
                  <div className="body">
                    <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme} >
                      <>
                      <GlobalStyles />
                      {/* <Toggle theme={this.state.theme} toggleTheme={this.toggleTheme} /> */}
                      
                    <Switch>
                        <Route exact path = '/' render={() => <Home user={user} />} />
                        <Route exact path = '/about' render={() => <About />} />
                        <Route exact path = '/login' component = {this.renderForm} />
                        <Route exact path = "/signup" component = {this.renderForm} />
                        <Route exact path = '/logout' component={() => this.state.user ? this.handleLogout() : <Redirect to="/" />} />

                        <Route 
                          exact path="/explore" 
                          render={() => (
                            <ExploreContainer
                              addFavorite={this.addFavorite} 
                              removeFavorite={this.removeFavorite} 
                              favorites={favorites}
                              user={user}
                            />
                          )}
                        />
                        <Route
                          exact path="/favorites" 
                          render={() => (
                            <FavoriteContainer
                              favorites={favorites}
                              removeFavorite={this.removeFavorite}
                            />
                          )}
                        />
                        <Route
                          exact path="/profile"
                          render={() => 
                          <Profile 
                            user={user}
                            updateProfile={this.updateProfile}
                          />} 
                        />
                        <Route component={notFound} />
                  </Switch>
                  </>
                </ThemeProvider>
              </div>
            </div>

      );
    }
}

export default withRouter (App);
