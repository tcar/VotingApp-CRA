export default function reducer(state={
    polls: [],
    error:null,
  }, action) {

    switch (action.type) {
     
      case'FETCH POLLs_FULLFILED' :{
        return {...state,
             polls:action.payload}
      }
      case'FETCH POLLS_REJECTED' :{
        return {...state,
           error:action.payload}
      }
    }

    return state
}