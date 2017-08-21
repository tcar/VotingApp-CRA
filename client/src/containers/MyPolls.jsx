import React from 'react';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from "react-redux";

import {getPolls} from '../actions/poll'
import {deletePoll} from '../actions/poll'

 class MyPolls extends React.Component {
    constructor(){
        super();
        this.deleteElement=this.deleteElement.bind(this)
    }
    
    componentDidMount(id){
            this.props.getPolls(this.props.id);
            
    }
    
    deleteElement(id, userId){
            
    this.props.deletePoll(id, this.props.id)
  

    }
        
    render(){
        const polls=this.props.polls.polls.map((poll)=>
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


const mapStateToProps = (state) => {
  return {
      polls: state.polls,
      id:state.user.id,
      isAuthenticated: state.user.isAuthenticated
     
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPolls: (id) => {
            dispatch(getPolls(id));
        },
        deletePoll: (id, userId) => {
            dispatch(deletePoll(id, userId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPolls)