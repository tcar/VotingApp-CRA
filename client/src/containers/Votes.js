import React from 'react';

import {connect} from 'react-redux';
import{selectedOption, postVote, getOptions} from '../actions/poll';
import Chart from '../components/Chart';
import Voting from '../components/Voting';

 class Votes extends React.Component {

    constructor(){
        super()
        this.state = {
            options:[],
            vote:'',
            question:{},
            isVoted: false,
            getVotes:{}
        };

        this.postVote = this.postVote.bind(this)
        this.selectedOption = this.selectedOption.bind(this)
    }
    
    componentDidMount(){
        const id = this.props.match.params.data
        this.props.getOptions(id);
    }

    render(){
         const option = this.props.options
         const options=option.map((option)=>
            option
         )
        return (
            <div className="container">
            {this.props.isVoted ?(
                
            <Chart  data = {this.props.getVotes}/>) :
            <Voting question={this.props.question} data = {options} postVote={this.postVote} selectedOption={this.selectedOption}/>

            }
            </div>
        )
    }

    //post and get vote
    postVote(e){
        e.preventDefault()
        
        this.props.postVote(this.props.vote)
      
    }

    selectedOption(e){

        const value = e.target.value
        this.props.selectedOption(value)
        
    }

}


const mapStateToProps = (state) => {
  return {
     options:state.polls.options,
     vote:state.polls.vote,
     question:state.polls.question,
     isVoted: state.polls.isVoted,
     getVotes:state.polls.getVotes
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      selectedOption:(value)=>{
          dispatch(selectedOption(value))
      },
      postVote:(vote)=>{
          dispatch(postVote(vote))
      },
      getOptions:(id)=>{
          dispatch(getOptions(id))
      }
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Votes)


