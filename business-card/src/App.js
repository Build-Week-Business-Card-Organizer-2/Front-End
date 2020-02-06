import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BusinessCard from './components/BusinessCard/BusinessCard'
import AllUsersCards from './components/BusinessCard/AllUsersCard'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
function App() {

  
  return (
    <div className="App">
      <Router>
          <div className="NavBar">
              <Link to="/">Home </Link>
              <Link to="/login">Login </Link> 
              <Link to="/signUp">Sign Up  </Link> 
              <Link to="/allusercards">All User Cards </Link> 
              <Link to="/privateRoute">Private Route </Link>
              <input styleName="input"/>
          </div>
          {/* <BusinessCard /> */}
          <Switch>

          <Route exact path="/">
            <h1>Business Card Organizer</h1>
            <h3>Home Page</h3>
          </Route>
          <Route path="/login" component={Login}/>
          <Route path="/signUp" component={SignUp}/>
          <PrivateRoute path="/PrivateRoute" component={BusinessCard}/>
         <Route path="/login" component={Login}/>
                  <Route exact path="/allusercards" component={AllUsersCards}/>

        </Switch>
         {/* <Route exact path="/allusercards" component={AllUsersCards}/> */}
      </Router>
    </div>
  );
}

export default App;
