import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Header extends React.Component {


 

  render() {

     

     let buttons;
     let logout;
    
     if(this.props.isAuthenticated){
        
         buttons = (
             <div>
             <Link to="/newpoll"><RaisedButton onClick={this.props.notVoted} label="New Poll" onClick={this.props.newPoll} primary={true}  /></Link>
            <Link to="/mypolls"><RaisedButton  onClick={this.props.notVoted} label="My Polls" primary={true}  /></Link>
            </div>
         )
         logout =(<Link to="/"><RaisedButton onClick={this.props.notVoted} onClick={()=>this.props.logout()} label="Logout" primary={true} /></Link>)
     }else{

  buttons =(
    <div>
    <Link to='/login'><RaisedButton label="Login"  primary={true}  /></Link>
    <Link to='/signup'><RaisedButton label="Signup"  primary={true}  /></Link>
    </div>
  )
     
    }
       



    return (
      
      <div className = 'container header'>
      <div className= 'row '>{logout}</div>
        <h1>VotePlex</h1>
        {this.props.isAuthenticated?(
          <div>
            <h1>welcome {this.props.name}</h1>
            <h2>Create custom polls with live results</h2>
          </div>
        ):<h2>Create custom polls with live results</h2>
        }
        <div className= 'row center'>{buttons}</div>
      </div>

    );
  }
}

const mapStateToProps = (state)=>{
  return{
      isAuthenticated: state.user.isAuthenticated,
      name: state.user.name
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{

  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Header)