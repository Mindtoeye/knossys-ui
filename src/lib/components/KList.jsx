import React, { Component } from 'react';

import KDataTools from './utils/KDataTools';

import './styles/lists.css';

/**
 * 
 */
class KList extends Component {

  static TINY = 'small';
  static REGULAR = 'regular';
  static MEDIUM = 'medium';
  static LARGE = 'large';

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.dataTools=new KDataTools ();

    this.state = {
      list: props.list
    };

    this.onClick=this.onClick.bind(this);
  }

  /**
   *
   */
  componentDidUpdate(prevProps) {   
    if (this.props.list !== prevProps.list) {
      this.setState ({
        list: this.props.list
      });
    }
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
  renderItems () {
    let items=[];

    for (let i=0;i<this.state.list.length;i++) {
      items.push (<li key={this.dataTools.uuidv4()} id={i} className={this.props.itemclass}>{this.state.list [i]}</li>);
    }

    return (items);
  }

  /**
   *
   */
  render () {
    let classes="klist klist-regular";
    let style;
    let items;

    if (this.props.size) {
      if (this.props.size==KButton.TINY) {
        classes="klist klist-tiny";
      }

      if (this.props.size==KButton.REGULAR) {
        classes="klist klist-regular";
      }

      if (this.props.size==KButton.MEDIUM) {
        classes="klist klist-medium";
      }

      if (this.props.size==KButton.LARGE) {
        classes="klist klist-large";
      }
    }

    if (this.props.style) {
      style=this.props.style;
    }

    if (this.props.classes) {
      classes=classes + " " + this.props.classes;
    }

    items=this.renderItems ();

    return (
      <ul className={classes} style={style}>
      {items}
      </ul>
    );
  }
}

export default KList;
