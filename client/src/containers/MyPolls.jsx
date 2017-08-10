import React from 'react';
import axios from 'axios';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default class NewPolls extends React.Component {
    constructor(){
        super();
        this.state={
            polls: [],
            id:''
        }
        this.deleteElement=this.deleteElement.bind(this)
    }
    
    componentDidMount(){
        axios.get('http://localhost:8080/polls')
        .then((response)=>{
            this.setState({polls:response.data});
        })
         .catch((error)=> {
          console.log(error);
        });

    }
    deleteElement(id){

           axios.delete('http://localhost:8080/polls/' + id)
         .then(response => {
      // The game is also removed from the state thanks to the filter function
      this.setState({ polls: this.state.polls.filter(poll => poll._id !== id) }); 
    })
  
    }
        
    render(){
        console.log(this.state.id)
        const polls=this.state.polls.map((poll)=>
            <div key ={poll._id}><ListItem onTouchTap={() => this.props.history.push('/votes/'+ poll._id)} rightIconButton={<RaisedButton onClick={()=> this.deleteElement(poll._id)} label="DELETE" secondary={true} />} primaryText={poll.question}/></div>
        )

        return (
            <div className='container center'>
                 <List>
                    {polls}
                 </List>
            </div>
        )
    }
}