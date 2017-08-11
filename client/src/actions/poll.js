import axios from "axios";


export function fetchPolls(){
    return function(dispatch){
        type:'FETCH_POLLS'
        payload:axios.get('http://localhost:8080/polls')
    
     } 
}



