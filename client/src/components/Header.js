import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'


export default class Header extends React.Component {


 

  render() {

     

    let logedIn = this.props.state
     let buttons;
     let logout;
    
     if(logedIn){
         buttons = (
             <div>
             <Link to="/newpoll"><RaisedButton label="New Poll" primary={true}  /></Link>
            <Link to="/mypolls"><RaisedButton  label="My Polls" primary={true}  /></Link>
            </div>
         )
         logout =(<Link to="/"><RaisedButton onClick={this.props.login} label="Logout" primary={true} /></Link>)
     }else{

  buttons =(<RaisedButton onClick={this.props.login}label="Login"  primary={true}  />)
     }
       



    return (
      
      <div className = 'container header'>
      <div className= 'row '>{logout}</div>
        <h1>VotePlex</h1>
        <h2>Create custom polls with live results</h2>
        <div className= 'row center'>{buttons}</div>
      </div>

    );
  }
}