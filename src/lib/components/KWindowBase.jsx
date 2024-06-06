import React from "react";
import ReactDOM from "react-dom";

import KWindowTools from './KWindowTools';

/**
 *
 */
export class KWindowBase extends React.Component {

  /**
   *
   */
  constructor(props){
    super(props);
  }

  /**
   *
   */
  componentDidMount () {
    console.log ("componentDidMount ()");

    if (this.props.appManager) {
      this.props.appManager.setSelf (this.props.data.id, this);
    }    
  }

  /**
   *
   */
  onClose () {
    console.log ("onClose () Implement in child window!");

    return (KWindowTools.createWindowAccept ());
  }

  /**
   *
   */
  onOk () {
    console.log ("onOk () Implement in child window!");

    return (KWindowTools.createWindowAccept ());
  }

  /**
   *
   */
  onCancel () {
    console.log ("onCancel () Implement in child window!");

    return (KWindowTools.createWindowAccept ());
  }    

  /**
   *
   */
  onMinimize () {
    console.log ("onMinimize () Implement in child window!");

    return (KWindowTools.createWindowAccept ());
  }  

  /**
   *
   */
  onMaximize () {
    console.log ("onMaximize () Implement in child window!");

    return (KWindowTools.createWindowAccept ());
  }  

  /**
   *
   */
  render () {
    return (<div className="kdialog-content">
      Abstract Class!
    </div>);
  }
}

export default KWindowBase;
