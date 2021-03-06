import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class NewPoll extends React.Component {

   

    render(){
        

       const options = this.props.options.map((i)=>
       
       <div key={i}>
       <TextField  name='option' className='tekst' onChange={() => this.props.setPoll()} hintText="option"/>
       <button onClick ={()=>this.props.removeOption(i)}>X</button>
       </div>
       )
        return (
            <div className='container center'>
            <paper>
            
                <h1>New Poll</h1>
                <h2>Name your poll</h2>
                <form action ='' name='vote' onSubmit = {(e)=> this.props.ubmit(e)}>
                    <TextField id='question' className='tekst' onChange={() => this.props.setPoll()} hintText="question"/>
                    <h2>Options</h2>
                      <div>
                        <TextField  name='option' className='tekst' onChange={() => this.props.setPoll()} hintText="option"/>
                      </div>
                      <div>
                        <TextField  name='option' className='tekst' onChange={() => this.props.setPoll()} hintText="option"/>
                      </div>
                    {options}
                    <RaisedButton label="add options" primary={true} onClick={()=>this.props.addoption()}/><br /><br />
                    <RaisedButton disabled={this.props.disable} type='submit' label="submit" primary={true} />
                </form>
                </paper>
            </div>
        )
    }
}