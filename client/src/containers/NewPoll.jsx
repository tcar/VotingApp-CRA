import React from 'react';
import {connect} from 'react-redux'

import {postPoll} from '../actions/poll';
import {createNewPoll, addOptions} from '../actions/poll';
import Form from '../components/Form';
import Share from '../components/Share';


 class NewPoll extends React.Component {
    constructor (props) {
    super(props);

    // Bind this (context) to the functions to be passed down to the children components
    this.ubmit = this.ubmit.bind(this);
    this.setPoll = this.setPoll.bind(this);
    this.addoption = this.addoption.bind(this)
  }
        addoption(){
        
        var options = this.props.options.slice()
        options.push(this.props.options.length)
        this.props.addOptions(options)
    }

ubmit(e){
    e.preventDefault()

    this.props.postPoll(this.props.newPoll)
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
this.props.createNewPoll(newPoll)

}
    render(){
        return (
            <div className='container center'>
            {this.props.isCreated ? 
                (<Share id = {this.props.pollId}/>):
                (<Form options={this.props.options} id={this.props.pollId} ubmit={this.ubmit} poll={this.props.newPoll} setPoll={this.setPoll}/>)
            }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
      newPoll: state.polls.newPoll,
      pollId: state.polls.pollId,
      isCreated: state.polls.isCreated,
      options:state.polls.addOptions
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        postPoll:(newPoll)=>{
            dispatch(postPoll(newPoll))
        },
        createNewPoll:(newPoll)=>{
            dispatch(createNewPoll(newPoll))
        },
         addOptions:(option)=>{
            dispatch(addOptions(option))
        }
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPoll)