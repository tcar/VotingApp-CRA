import React from 'react';
import axios from 'axios'

import Form from '../components/Form';
import Share from '../components/Share';


export default class NewPoll extends React.Component {
    constructor (props) {
    super(props);
    // Initial state
    this.state = { newPoll: {},
    pollId:'',
    isCreated:false
};
    // Bind this (context) to the functions to be passed down to the children components
    this.ubmit = this.ubmit.bind(this);
    this.setPoll = this.setPoll.bind(this);

  }

ubmit(e){
    e.preventDefault()

     const newPoll = Object.assign({}, this.state.newPoll); 
    axios.post('http://localhost:8080/polls', newPoll)
  .then((response)=> {
      this.setState({pollId:response.data.poll._id})
      this.setState({isCreated:true})
  })
  .catch(function (error) {
    console.log(error);
  });
}

setPoll(){
    const poll=[]
const inputs = document.getElementsByName('option')
  for (let input of inputs) {
      poll.push({answear:input.value})
}
const newPoll ={
    question: document.getElementById('question').value,
    options: poll
}
this.setState({newPoll})


}
    render(){
       
        return (
            <div className='container center'>
            {this.state.isCreated ? 
                (<Share id = {this.state.pollId}/>):
                (<Form id={this.state.pollId} ubmit={this.ubmit} poll={this.state.newPoll} setPoll={this.setPoll}/>)
            }
            </div>
        )
    }
}