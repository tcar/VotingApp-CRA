import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import {logi} from '../actions/user';


 class Login extends React.Component {
constructor(){
    super()
    this.login= this.login.bind(this)
}

render(){
       if (this.props.isAuthenticated) {
    return <Redirect to="/newpoll" />;
  }
    return(
        <div className='container center'>
            <paper>
                <h1>Login</h1>
                    <form onSubmit={(e)=>this.login(e)}>
                        <TextField
                         hintText='email'
                         floatingLabelText='email' 
                         id='email' 
                         name='email'>
                        </TextField>
                        <br/>
                        <TextField
                         type='password'
                         hintText='password'
                         floatingLabelText='password' 
                         id='password' 
                         name='password'>
                        </TextField><br/>
                    <RaisedButton type='submit' label="login" primary={true} />
                    </form>
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


