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
    window.location.reload(true);
  }
  function windowCheck(){
    if(window.matchMedia("(max-height:650px) and (min-width:550px)").matches || window.matchMedia("(min-width: 850px)")){
        document.querySelector(".NavBar").style.display="flex"
    }
    sandwich();
  }
  window.onresize=windowCheck

  function sandwich(){
    if(!(window.matchMedia("(max-height:650px) and (min-width:550px)").matches)){
      if(window.matchMedia("(max-width: 849px)").matches){
          let navbar=document.querySelector(".NavBar");
          let sandwichX=document.querySelector("#layerTwo")
          let layerOne=document.querySelector("#layerOne")
          let layerThree=document.querySelector("#layerThree")
          if(navbar.style.display==="flex"){
              navbar.style.display="none";
              layerOne.style.transform="rotate(0deg)"
              layerThree.style.transform="rotate(0deg)"
              layerOne.style.position="relative";
              layerThree.style.position="relative";
              sandwichX.style.display="block"
              layerOne.style.backgroundColor="#1EA7FC";
              layerThree.style.backgroundColor="#1EA7FC";
          }else{
              navbar.style.display="flex";
              sandwichX.style.display="none";
              layerOne.style.position="absolute";
              layerThree.style.position="absolute";
              layerOne.style.transform="rotate(50deg)";
              layerThree.style.transform="rotate(-50deg)";
              layerOne.style.backgroundColor="white";
              layerThree.style.backgroundColor="white";
          }
      }
  }
  }
  return (
    <div className="App">
      <Router>
          <div className="NavBar">
              <Link to="/" onClick={sandwich}>Home </Link>
              <Link to="/login" onClick={sandwich} >Login </Link> 
              <Link to="/signUp"  onClick={sandwich}>Sign Up</Link> 
              <Link to="/profile" onClick={sandwich}>Profile</Link>
              <Link to="/login" onClick={logout}>Log out</Link>
          </div>
          <div id="sandwich" onClick={sandwich}>
              <div id="layerOne"></div>
              <div id="layerTwo"></div>
              <div id="layerThree"></div>
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
