import React, { Component } from 'react';

import './styles/buttons.css';

/**
 * 
 */
class KButton extends Component {

  static TINY = 'small';
  static REGULAR = 'regular';
  static MEDIUM = 'medium';
  static LARGE = 'large';

  /**
   * 
   */
  constructor (props) {
    super (props);
 
    /*
    this.state = {      
      enabled: true
    };
    */

    this.state = {
    };


    this.onClick=this.onClick.bind(this);
  }

  /**
   * 
   */
  componentDidMount () {
    //console.log ("componentDidMount ()");
  }

  /**
   * 
   */
  componentWillUnmount() {      
    //console.log ("componentWillUnmount ()");
  }

  /**
   * 
   */
  onClick (e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  /**
   *
   */
  render () {
    let button;
    let classes="kbutton kbutton-regular";
    let style;

    if (this.props.enabled) {
      if (this.props.enabled==false) {
        classes=classes + " kbutton-disabled";
      }
    }

    if (this.props.size) {
      if (this.props.size==KButton.TINY) {
        classes="kbutton kbutton-tiny";
      }

      if (this.props.size==KButton.REGULAR) {
        classes="kbutton kbutton-regular";
      }

      if (this.props.size==KButton.MEDIUM) {
        classes="kbutton kbutton-medium";
      }

      if (this.props.size==KButton.LARGE) {
        classes="kbutton kbutton-large";
      }
    }

    if (this.props.style) {
      style=this.props.style;
    }

    if (this.props.styles) {
      style=this.props.styles;
    }    

    if (this.props.classes) {
      classes=classes + " " + this.props.classes;
    }

    button=<div onClick={(e) => this.onClick (e)} className={classes} style={style}>{this.props.children}</div>;

    return (
      button
    );
  }
}

export default KButton;
