import React from 'react';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class Voting extends React.Component {



render(){
    const data =this.props.data
  
    const option = data.map((option)=>
    <RadioButton
        key={option._id}
        value={option._id}
        label={option.answear}
        name = 'vote'
      /> 
            
            )

    return(
        <div className='voting'>
        <h1>{this.props.question.question}</h1>
        <form action ='' name='vote' onSubmit = {(e)=> this.props.postVote(e)}>
         <RadioButtonGroup  onChange={(e) => this.props.selectedOption(e)} name="vote" labelPosition="left">
         {option}
        </RadioButtonGroup>
    <RaisedButton type='submit' label="vote" primary={true} />

    </form>
    </div>
    )
    
}



}