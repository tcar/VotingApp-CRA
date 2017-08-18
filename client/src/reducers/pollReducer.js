

export default function reducer(state={
    polls: [],
    error:null,
    newPoll: {},
    pollId:null,
    isCreated:false,
    options:[],
    vote:'',
    question:{},
    isVoted: false,
    getVotes:{},
    addOptions:[]
  }, action) {
    switch (action.type) {
     
      case'FETCH_POLLS_FULFILLED' :{
        
        return {...state,
             polls:action.payload.data}
      }
      case'FETCH_POLLS_REJECTED' :{
        return {...state,
           error:action.payload}
      }
       case'DELETE_POLL_FULFILLED' :
       {
        return {...state,
            polls:action.payload.data
           }
      }
       case'DELETE_POLL_REJECTED' :{
        return {...state,
           error:action.payload}
      }
        case'POST_POLL_FULFILLED' :{
        return {...state,
           pollId:action.payload.data._id,

           isCreated:true
        }

      }  case'POST_POLL_REJECTED' :{
        return {...state,
           error:action.payload}
      }
      case'CREATE_POLL' :{
        return {...state,
           newPoll:action.payload}
      }
    
     
        case'NEW_POLL' :{
        return {...state,
           isCreated:false}
      }
        case'SET_VOTE' :{
        return {...state,
           vote:action.payload}
      }
        case'POST_VOTE_FULFILLED' :{
        return {...state,
           isVoted:true,
           getVotes:action.payload.data.options
          }
      }
        case'GET_OPTIONS_FULFILLED' :{
        return {...state,
           options:action.payload.data.options,
           question:action.payload.data
        }
      }
         case'NOT_VOTED' :{
        return {...state,
           isVoted:false
        }
      }
       case'ADD_OPTION' :{
        return {...state,
           addOptions:action.payload
        }
      }
       case'REMOVE_OPTION' :{
        return {...state,
           addOptions:action.payload
        }
      }
         case'LOGOUT' :{
        return {...state,
           polls:[]
        }
      }

       default:
    return state
    }

   
}