
import React, { Component } from 'react';

import './styles/lists.css';

/**
 * 
 */
class KCheckListItem extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.onClick=this.onClick.bind(this);
  }

  /**
   * 
   */
  onClick (e) {
    if (this.props.onItemCheck) {
      this.props.onItemCheck(e);
    }
  }

  /**
   *
   */
  render () {
    let item=this.props.item;
    let classes="kcheck-default";

    if (item.checked==true) {
      classes="kcheck-checked";
    }

    return (
      <li className={classes} onClick={(e) => this.onClick (this.props.id)}>{item.name}</li>
    );
  }
}

export default KCheckListItem;
