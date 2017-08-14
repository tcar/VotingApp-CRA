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

export function postPoll(newPoll){
    return{
        type:'POST_POLL',
        payload:axios.post('http://localhost:8080/polls', newPoll)
    }
}

export function createNewPoll(newPoll){
    return{
        type:'CREATE_POLL',
        payload: newPoll
    }
}
export function login(){
    return{
        type:'LOGIN',

    }
}
    export function logout(){
    return{
        type:'LOGOUT',

    }
}

    export function newPoll(){
    return{
        type:'NEW_POLL',

    }
}
    export function selectedOption(value){
    return{
        type:'SET_VOTE',
        payload:value
    }
}
    export function postVote(vote){
    return{
        type:'POST_VOTE',
        payload:axios.put('http://localhost:8080/polls/voting/' + vote)
        
    }
}
    export function getOptions(id){
    return{
        type:'GET_OPTIONS',
        payload:axios.get('http://localhost:8080/polls/' + id)
    }
}
   export function notVoted(){
    return{
        type:'NOT_VOTED',
        
    }
}
   export function addOptions(option){
    return{
        type:'ADD_OPTION',
        payload:option
    }
}
