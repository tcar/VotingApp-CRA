import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import {logi} from '../actions/user';


 class Login extends React.Component {
constructor(){
    super()
    this.state={
        user:{
            email:'',
            password:''
        }
    }
    this.login= this.login.bind(this)
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
                <h1>Login</h1>
                    <ValidatorForm  onSubmit={(e)=>this.login(e)}>
                        <TextValidator
                        onChange={this.handleChange}
                         hintText='email'
                         floatingLabelText='email' 
                         id='email' 
                         name='email'
                         value={this.state.user.email}
                         validators={['required', 'isEmail']}
                         errorMessages={['this field is required', 'email is not valid']}
                         >
                        </TextValidator>
                        <br/>
                        <TextValidator
                         type='password'
                         hintText='password'
                         onChange={this.handleChange}
                         floatingLabelText='password' 
                         id='password' 
                         name='password'
                         value={this.state.user.password}
                         validators={['required']}
                         errorMessages={['password is required']}
                         >
                        </TextValidator><br/>
                    <RaisedButton type='submit' label="login" primary={true} />
                    </ValidatorForm>
                </paper>
            
            </div>

    )  
}

login(e){
    e.preventDefault()
    const user={
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
    }
    this.props.login(user)
}

}
const mapStateToProps = (state)=>{
    return{
        isAuthenticated:state.user.isAuthenticated,
        message: state.user.message

    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        login: (user)=>{
            dispatch(logi(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)


