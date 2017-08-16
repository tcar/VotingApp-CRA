import React from "react";
import {connect} from 'react-redux'

import { newPoll, notVoted} from '../actions/poll';
import {logout} from '../actions/user';
import Header from './Header'
class Home extends React.Component {
  constructor(){
    super()
    this.logout=this.logout.bind(this)
  }

  render() {
    return (
      <div>
        <Header logout={this.logout} notVoted={this.props.notVoted.bind(this)} newPoll={this.props.newPoll.bind(this)} />
      
      </div>
    );
  }


  logout(){
    this.props.logout()
    localStorage.removeItem('token')
  }
}

const mapStateToProps = (state) => {
  return {
     isAuthenticated:state.user.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
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