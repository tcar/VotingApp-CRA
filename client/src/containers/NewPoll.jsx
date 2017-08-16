import React from 'react';
import {connect} from 'react-redux'

import {postPoll} from '../actions/poll';
import {createNewPoll, addOptions,removeOption} from '../actions/poll';
import Form from '../components/Form';
import Share from '../components/Share';
import Snackbar from 'material-ui/Snackbar';
;


 class NewPoll extends React.Component {
    constructor (props) {
    super(props);

    // Bind this (context) to the functions to be passed down to the children components
    this.ubmit = this.ubmit.bind(this);
    this.setPoll = this.setPoll.bind(this);
    this.addoption = this.addoption.bind(this)
    this.removeOption = this.removeOption.bind(this)
  }
        addoption(){
          
        var options = this.props.option.slice()
        options.push(this.props.option.length)
        this.props.addOptions(options)
}
removeOption(key){
         
        const option = this.props.option.filter((option)=>{
            return option!==key
        })
        this.props.removeOption(option)
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
                (<Form removeOption={this.removeOption} addoption={this.addoption} options={this.props.option} id={this.props.pollId} ubmit={this.ubmit} poll={this.props.newPoll} setPoll={this.setPoll}/>)
            }
                <Snackbar
          open={this.props.isAuthenticated}
          message={this.props.message}
          autoHideDuration={2000}
        />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
      newPoll: state.polls.newPoll,
      pollId: state.polls.pollId,
      isCreated: state.polls.isCreated,
      isAuthenticated:state.user.isAuthenticated,
      message: state.user.message,
      option:state.polls.addOptions
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
        },
        removeOption:(options)=>{
            dispatch(removeOption(options))
        }
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPoll)