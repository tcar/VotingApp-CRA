import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Home from "./components/Home";
import NewPoll from "./containers/NewPoll";
import MyPolls from "./containers/MyPolls";
import Votes from "./containers/Votes";
import Signup from "./containers/Signup";
import Login from "./containers/Login";

class App extends Component {
  render() {
    return (
<BrowserRouter className='App'>
    <div>
    <Route path="/" component = {Home} />
    <Route path="/newpoll" component = {NewPoll} />
    <Route path="/mypolls" component = {MyPolls} />
    <Route path="/votes/:data" component = {Votes} />
    <Route path="/signup" component = {Signup} />
    <Route path="/login" component = {Login} />
    </div>
</BrowserRouter>
    );
  }
}

export default App;
