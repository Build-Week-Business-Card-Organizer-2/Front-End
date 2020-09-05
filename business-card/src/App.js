import React from 'react';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BusinessCard from './components/BusinessCard/BusinessCard'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import './App.css';

function App() {
  function logout(){
    localStorage.clear()
  }
  return (
    <div className="App">
      <Router>
          <div className="NavBar">
              <Link to="/">Home </Link>
              <Link to="/login">Login </Link> 
              <Link to="/signUp">Sign Up</Link> 
              <Link to="/profile">Profile</Link>
              <Link to="/login" onClick={logout}>Log out</Link>
          </div>
          <Switch>

          <Route exact path="/">
            <h1>Business Card Organizer</h1>
            <h3>Home Page</h3>
          </Route>
          <Route path="/login" component={Login}/>
          <Route path="/signUp" component={SignUp}/>
          <PrivateRoute path="/profile" component={BusinessCard}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
