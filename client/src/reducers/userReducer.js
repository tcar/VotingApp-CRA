
import jwtDecode from 'jwt-decode';

export default function reducer(state={
 isAuthenticated: false,
  token: null,
  name: null,
  message:false
  }, action) {
    switch (action.type) {
     
      case'SIGNUP' :{
        return {...state,
             isAuthenticated:true,
             token:action.payload.data.token,
             name:jwtDecode(action.payload.data.token).sub,
             message:action.payload.data.message
        }
      }
       case'SIGNUP_FAIL' :{
        return {...state,
             message:action.payload
        }
      }
      
        case'LOGOUT' :{
        return {...state,
             isAuthenticated:false,
             token:null,
             name:null,
             message:null
        }
      }
        case'LOGIN' :{
        return {...state,
             isAuthenticated:true,
             token:action.payload.data.token,
             name:jwtDecode(action.payload.data.token).sub,
             message:action.payload.data.message
        }
      }
          case'LOGIN_FAIL' :{
        return {...state,
             message:action.payload
        }
      }
      



       default:
    return state
    }

   
}