import React, { Component } from 'react';

import KScrim from './KScrim';
import KAlert from './KAlert';

import './styles/driver.css';
import './styles/main.css';

/**
 * 
 */
class KDriver extends Component {

  /**
   * This constructor will in some sense rebuild or augment the browser environment
   * such that developers can stay inside the same unified and standardized 
   * expectations
   */
  constructor (props) {
    super (props);

    this.state={
      show: false,
      message: "",
      type: "alert"
    }

    window.knossys=this;

    this.onOk=this.onOk.bind(this);
    this.onYes=this.onYes.bind(this);
    this.onNo=this.onNo.bind(this);
  }

  /**
   *
   */
  alert (aMessage) {
    console.log ("alert ()");

    this.setState ({
      show: true,
      message: aMessage,
      type: "alert"
    });
  }

  /**
   *
   */
  confirm (aMessage) {
    console.log ("confirm ()");

    this.setState ({
      show: true,
      message: aMessage,
      type: "confirm"
    });
  }  

  /**
   *
   */
  prompt (aMessage,aDefault) {
    console.log ("prompt ()");

    this.setState ({
      show: true,
      message: aMessage,
      default: aDefault,
      type: "prompt"
    });
  }    

  /**
   * 
   */
  onOk () {
    this.setState ({
      show: false
    });
  }

  /**
   * 
   */
  onYes () {
    this.setState ({
      show: false
    });
  }

  /**
   * 
   */
  onNo () {
    this.setState ({
      show: false
    });
  }    

  /**
   *
   */
  render () {
    let scrim;
    let alertComponent;

    if (this.state.show==true) {
      scrim=<KScrim visible={true} />;
      alertComponent=<KAlert type={this.state.type} message={this.state.message} default={this.state.default} onOk={this.onOk} onYes={this.onYes} onNo={this.onNo} />;
    }

    return (
      <div className="kdesktop-content knossys-dark">
      {this.props.children}
      {scrim}
      {alertComponent}
      </div>
    );
  }
}

export default KDriver;
