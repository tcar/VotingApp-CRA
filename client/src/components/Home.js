import React from "react";
import {connect} from 'react-redux'

import {login, logout, newPoll, notVoted} from '../actions/poll'
import Header from './Header'
class Home extends React.Component {
  

  render() {
    return (
      <div>
        <Header notVoted={this.props.notVoted.bind(this)} newPoll={this.props.newPoll.bind(this)} login = {this.props.loggedin} loggmein={this.props.login.bind(this)} logout={this.props.logout.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      loggedin:state.polls.loggedin
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      login:()=>{
        dispatch(login())
      },
      logout:()=>{
        dispatch(logout())
      },
       newPoll:()=>{
        dispatch(newPoll())
      },
       notVoted:()=>{
        dispatch(notVoted())
      },
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)