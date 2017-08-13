

export default function reducer(state={
    polls: [],
    error:null,
    test:'heeh'
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


       default:
    return state
    }

   
}