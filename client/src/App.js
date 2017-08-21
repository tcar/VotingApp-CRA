import React, { Component } from 'react';
import {BrowserRouter,Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import * as d3 from "d3";

import Home from "./components/Home";
import NewPoll from "./containers/NewPoll";
import MyPolls from "./containers/MyPolls";
import Votes from "./containers/Votes";
import Signup from "./containers/Signup";
import Login from "./containers/Login";


const PrivateRoute = ({ component: Component,authenticated, ...rest }) => (
  <Route {...rest} render={props => (
    authenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/Login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
class App extends Component {
  render() {
    return (
<BrowserRouter className='App'>
    <div>
    <Route path="/" component = {Home} />
    <PrivateRoute authenticated={this.props.isAuthenticated} path="/newpoll" component = {NewPoll} />
    <PrivateRoute authenticated={this.props.isAuthenticated} path="/mypolls" component = {MyPolls} />
    <Route path="/votes/:data" component = {Votes} />
    <Route path="/signup" component = {Signup} />
    <Route path="/login" component = {Login} />
    </div>
</BrowserRouter>
    );
  }
}

const mapStateToProps=(state)=>{

  return{
    isAuthenticated:state.user.isAuthenticated
  }
}

export default connect(mapStateToProps)(App);
