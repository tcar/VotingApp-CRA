import React from 'react';
import axios from 'axios';

import Chart from '../components/Chart';
import Voting from '../components/Voting'
export default class Votes extends React.Component {

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
        this.getOptions();
    }

    render(){
   
         const option = this.state.options
         const options=option.map((option)=>
            option
         )
        return (
            <div className="container">
            {this.state.isVoted ?(
                
            <Chart  data = {this.state.getVotes}/>) :
            <Voting question={this.state.question} data = {options} postVote={this.postVote} selectedOption={this.selectedOption}/>

            }
            </div>
        )
    }

    getOptions(){
        const id = this.props.match.params.data
      
        axios.get('http://localhost:8080/polls/' + id)
        .then((response)=>{
          
            this.setState({options:response.data.options,
                question:response.data
            },
            
            )
            
        })
         .catch((error)=> {
          console.log(error);
        });
    }

    //post and get vote
    postVote(e){
        e.preventDefault()
        
        const vote = this.state.vote
         axios.put('http://localhost:8080/polls/voting/' + vote)
        .then((response)=>{
            this.setState({getVotes:response.data.options})
            this.setState({isVoted:true})
            
        })
         .catch((error)=> {
          console.log(error);
        });

  
    }

    selectedOption(e){
        e.stopPropagation();
        const value = e.target.value
        this.setState({vote:value})
       e.preventDefault()
        
    }





}


