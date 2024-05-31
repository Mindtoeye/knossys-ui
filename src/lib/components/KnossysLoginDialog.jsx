import React from "react";
import ReactDOM from "react-dom";

import KTextInput from './KTextInput';

import logo from  './css/images/klogo-inverted.png';

import './styles/wmanager.css';

/**
 *
 */
export class KnossysLoginDialog extends React.Component {

  /**
   *
   */
  constructor(props){
    super(props);

    this.state={
      username: "",
      password: ""
    };

    this.handleUsernameChange=this.handleUsernameChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
  }

  /**
   *
   */
  handleUsernameChange (aValue) {
    this.setState({
      username: aValue
    });
  }

  /**
   *
   */
  handlePasswordChange (aValue) {
    this.setState({
      password: aValue
    });
  }

  render () {
    return (<div className="kdialog-content">
      <div className="klogo">
        <img className="klogo-img" src={logo} />
      </div>      
      <label for="uname"><b>Username</b></label>      
      <KTextInput size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.username} handleChange={this.handleUsernameChange}></KTextInput>

      <label for="psw"><b>Password</b></label>
      <KTextInput size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.password} handleChange={this.handlePasswordChange}></KTextInput>
    </div>);
  }
}

export default KnossysLoginDialog;
