import React, { Component } from 'react';

import '../../css/taskbar.css';

/**
 *
 */
class KTaskbarIcon extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);
  }

  /**
   * 
   */
  render () {
    let label;

    if (this.props.showlabel==true) {
      label=<div className="klabel">{this.props.label}</div>;
    }

    return (<div className="kicon" onClick={this.props.onClick}>
      <div className="kstarticon">
      {this.props.icon}
      </div>
      {label}
    </div>);
  }
}

export default KTaskbarIcon;
