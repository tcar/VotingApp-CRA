import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class NewPoll extends React.Component {
    constructor(){
        super()
        this.state={
            options:[]
        }
    }
    addoption(){
        
        var options = this.state.options.slice()
        options.push(this.state.options.length)
        this.setState({ options: options })
    }

    render(){
       const options = this.state.options.map((i)=>
       
       <div key={i}>
       <TextField  name='option' onChange={() => this.props.setPoll()} hintText="option"/>
       </div>
       )
        console.log(this.props.poll)
        return (
            <div className='container center'>
            <paper>
            
                <h1>New Poll</h1>
                <h2>Name your poll</h2>
                <form action ='' name='vote' onSubmit = {(e)=> this.props.ubmit(e)}>
                    <TextField id='question' onChange={() => this.props.setPoll()} hintText="question"/>
                    <h2>Options</h2>
                      <div>
                        <TextField  name='option'  onChange={() => this.props.setPoll()} hintText="option"/>
                      </div>
                      <div>
                        <TextField  name='option'  onChange={() => this.props.setPoll()} hintText="option"/>
                      </div>
                    {options}
                    <RaisedButton label="add options" primary={true} onClick={this.addoption.bind(this)}/><br /><br />
                    <RaisedButton type='submit' label="submit" primary={true} />
                </form>
                </paper>
            </div>
        )
    }
}