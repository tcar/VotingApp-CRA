import axios from 'axios';

export function signup(user){
    return dispatch => {
        axios.post('http://localhost:8080/auth/signup', user)
        .then((res)=>{
            dispatch({type:'SIGNUP',payload:res})
            localStorage.setItem('token',res.data.token)
        }).catch((err)=>{
            dispatch({type:'SIGNUP_FAIL',payload:err.response.data.message})
        })
     } 
}
export function logout(user){
    return {
        type:'LOGOUT',
        
     } 
}

export function logi(user){
    return dispatch => {
        axios.post('http://localhost:8080/auth/login', user)
        .then((res)=>{
            dispatch({type:'LOGIN',payload:res})
            localStorage.setItem('token',res.data.token)
        }).catch((err)=>{
                 dispatch({type:'LOGIN_FAIL', payload: err.response.data.message})
            
           
        })
     } 
}




