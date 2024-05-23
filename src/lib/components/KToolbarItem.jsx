import React, { Component } from 'react';

import './styles/toolbar.css';

/**
 * 
 */
class KToolbarItem extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.state = {

    };

    this.onClick=this.onClick.bind(this);
    this.toggle=this.toggle.bind(this);
  }

  /**
   * 
   */
  onClick (e) {
    console.log ("onClick ()");

    if (this.toggle ()==true) {
      if (this.props.onItemToggleInternal) {
        this.props.onItemToggleInternal(e, this.props.itemIndex);
      }
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }    
  }

  /**
   *
   */
  toggle (e) {
    console.log ("toggle ()");

    if (this.props.toggle) {
      if (this.props.toggle==true) {
        return (true);
      }
    }

    return (false);
  }

  /**
   *
   */
  render () {
    let button;
    let classes="ktoolbaritem";
    let style;

    if (this.props.style) {
      style=this.props.style;
    }

    if (this.props.classes) {
      classes=classes + " " + this.props.classes;
    }

    if (this.props.toggled) {
      if (this.props.toggled=="true") {
        classes=classes + " ktoolbaritem-toggled";
      }
    }

    return (
      <div className={classes} style={style} onClick={(e) => this.onClick(e)} alt={this.props.tooltip} title={this.props.tooltip}>
        {this.props.children}
      </div>
    );
  }
}

export default KToolbarItem;
