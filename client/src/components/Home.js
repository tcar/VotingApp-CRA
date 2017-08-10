import React from "react";

import Header from './Header'
export default class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            logedIn:false
        }
    }

 handleLogin(){
        this.setState({logedIn:!this.state.logedIn})
        }


 

  render() {
   
    return (
      <div>
        <Header login = {this.handleLogin.bind(this)} state = {this.state.logedIn} />
      </div>
    );
  }
}