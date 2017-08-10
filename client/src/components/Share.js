import React from 'react';
import {Link} from 'react-router-dom';

export default class Share extends React.Component {



render(){
    return(
        <div className='Share'>
        <Link to ={'/votes/' + this.props.id}><h1>{'http://localhost:3000/votes/' + this.props.id}</h1></Link>
    </div>

    )
    
}



}