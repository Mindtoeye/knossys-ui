
import React, { Component } from 'react';

import './styles/lists.css';

/**
 * 
 */
class KRadioListItem extends Component {

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
    let classes="kradio-default";

    if (item.checked==true) {
      classes="kradio-checked";
    }

    return (
      <li className={classes} onClick={(e) => this.onClick (this.props.id)}>{item.name}</li>
    );
  }
}

export default KRadioListItem;
