import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import{signup} from '../actions/user'
import {Redirect} from 'react-router-dom';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';



 class Signup extends React.Component {
     constructor(){
         super()
          this.state={
        user:{
            email:'',
            password:'',
            name:''
        }
    }
         this.signup= this.signup.bind(this);
        this.handleChange= this.handleChange.bind(this)

     }
     handleChange(event){
     const  {user}  = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
}



render(){
    if (this.props.isAuthenticated) {
    return <Redirect to="/newpoll" />;
  }
    return(
         <div className='container center'>
            <paper>
                <h1>Signup</h1>
                    <ValidatorForm onSubmit={(e)=>this.signup(e)}>
                        <TextValidator
                         hintText='email'
                         onChange={this.handleChange}
                         floatingLabelText='email'
                         value={this.state.user.email}
                         id='email' 
                         name='email'
                         validators={['required', 'isEmail']}
                         errorMessages={['this field is required', 'email is not valid']}
                         >
                         
                        </TextValidator>
                        <br/>
                        <TextValidator
                         hintText='name'
                         onChange={this.handleChange}
                         value={this.state.user.name}
                         validators={['required']}
                         errorMessages={['this field is required']}
                         floatingLabelText='name' 
                         id='name' 
                         name='name'>
                        </TextValidator>
                        <br/>
                        <TextValidator
                        onChange={this.handleChange}
                        value={this.state.user.password}
                        validators={['required']}
                         errorMessages={['this field is required']}
                         type='password'
                         hintText='password'
                         floatingLabelText='password' 
                         id='password' 
                         name='password'>
                        </TextValidator><br/>
                    <RaisedButton  type='submit' label="signup" primary={true} />
                    </ValidatorForm>
                </paper>
                      
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