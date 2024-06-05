import React from "react";
import ReactDOM from "react-dom";

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

    return (true);
  }

  /**
   *
   */
  onOk () {
    console.log ("onOk () Implement in child window!");

    return (true);    
  }

  /**
   *
   */
  onCancel () {
    console.log ("onCancel () Implement in child window!");

    return (true);    
  }    

  /**
   *
   */
  onMinimize () {
    console.log ("onMinimize () Implement in child window!");

    return (true);    
  }  

  /**
   *
   */
  onMaximize () {
    console.log ("onMaximize () Implement in child window!");

    return (true);    
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
