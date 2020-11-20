import React from 'react';
import './App.css';
// import SimpleMap from './SimpleMap';
import { Route, Switch, withRouter } from 'react-router-dom';


import Navbar from './container/Navbar';
import Login from './Auth/Login';


class App extends React.Component {

  state = {
    user: "",
    token: ""
  };

  // auth
  handleLogin = (info) => {
    console.log('login');
    
  };

  // render components
  


  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Switch>
          <Route path="/" exact component={} />
        </Switch> */}
        <Login handleSubmit={this.handleSubmit}/>
        {/* <SimpleMap /> */}
      </div>
    );
  }
}

export default App;
