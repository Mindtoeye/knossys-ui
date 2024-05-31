import React from "react";
import ReactDOM from "react-dom";

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
    };
  }

  render () {
    return (<div>
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required></input>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required></input>   
    </div>);
  }
}

export default KnossysLoginDialog;
