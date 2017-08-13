import axios from "axios";


export function getPolls(){
    return {
        type:'FETCH_POLLS',
        payload:axios.get('http://localhost:8080/polls')
     } 
}

export function deletePoll(id){

    const result = (
        axios.delete('http://localhost:8080/polls/' + id).then(()=>{
            return axios.get('http://localhost:8080/polls')
        })
    )

    return {
        type:'DELETE_POLL',
        payload: result
     } 
}



