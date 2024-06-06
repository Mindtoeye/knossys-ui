import React from "react";
import ReactDOM from "react-dom";

import KWindowBase from './KWindowBase';
import KWindowTools from './KWindowTools';
import KTextInput from './KTextInput';

import logo from  './css/images/klogo-inverted.png';

import './styles/wmanager.css';

/**
 *
 */
export class KnossysLoginDialog extends KWindowBase {

  /**
   *
   */
  constructor(props) {
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
    },()=> {
      this.updateSessionData (this.state);
    });
  }

  /**
   *
   */
  handlePasswordChange (aValue) {
    this.setState({
      password: aValue
    },()=> {
      this.updateSessionData (this.state);
    });
  }

  /**
   *
   */
  updateSessionData () {
    if(this.props.onSessionData) {
      this.props.onSessionData (this.state);
    }
  }

  /**
   *
   */
  onOk () {
    console.log ("onClose ()");

    if (this.state.username=="") {
      return (KWindowTools.createWindowReject ("Can't leave username blank"));
    }

    if (this.state.password=="") {
      return (KWindowTools.createWindowReject ("Can't leave password blank"));
    }    

    return (KWindowTools.createWindowAccept ());
  }

  /**
   *
   */
  render () {
    return (<div className="kdialog-content">
      <div className="klogo">
        <div>
          <img className="klogo-img" src={logo} />
        </div>  
        <label style={{color: "#b9b8b8"}}>Cloud-Based Distributed Knowledge System</label>
      </div>      

      <div style={{display: "flex", flexDirection: "row", marginLeft: "20px", marginRight: "20px"}}>
        <label style={{width: "92px"}}><b>Username</b></label>      
        <KTextInput placeholder="Enter Username" size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.username} handleChange={this.handleUsernameChange}></KTextInput>
      </div>

      <div style={{display: "flex", flexDirection: "row", marginLeft: "20px", marginRight: "20px"}}>
        <label style={{width: "92px"}}><b>Password</b></label>
        <KTextInput type={KTextInput.TYPE_PASSWORD} placeholder="Enter Password" size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.password} handleChange={this.handlePasswordChange}></KTextInput>
      </div>
    </div>);
  }
}

export default KnossysLoginDialog;
