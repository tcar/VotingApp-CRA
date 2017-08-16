import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import{signup} from '../actions/user'
import {Redirect} from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';


 class Signup extends React.Component {
     constructor(){
         super()
         this.signup= this.signup.bind(this);
     }



render(){
    if (this.props.isAuthenticated) {
    return <Redirect to="/newpoll" />;
  }
    return(
         <div className='container center'>
            <paper>
                <h1>Signup</h1>
                    <form onSubmit={(e)=>this.signup(e)}>
                        <TextField
                         hintText='email'
                         floatingLabelText='email' 
                         id='email' 
                         name='email'>
                        </TextField>
                        <br/>
                        <TextField
                         hintText='name'
                         floatingLabelText='name' 
                         id='name' 
                         name='name'>
                        </TextField>
                        <br/>
                        <TextField
                         type='password'
                         hintText='password'
                         floatingLabelText='password' 
                         id='password' 
                         name='password'>
                        </TextField><br/>
                    <RaisedButton  type='submit' label="signup" primary={true} />
                    </form>
                </paper>
                      <Snackbar
          open={this.props.message}
          message={this.props.message}
          autoHideDuration={2000}
        />
            </div>

    )
    
}

signup(e){

    e.preventDefault()

    const user ={
        email: document.getElementById('email').value,
        name :document.getElementById('name').value,
        password: document.getElementById('password').value
    }
   
    this.props.signup(user)
}


}
const mapStateToProps = (state) => {
  return {
      user:state.user.name,
      message: state.user.message,
      isAuthenticated:state.user.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user)=>{
            dispatch(signup(user))
        }
        
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Signup)