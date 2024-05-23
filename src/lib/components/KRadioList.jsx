
import React, { Component } from 'react';

import KDataTools from './utils/KDataTools';
import KRadioListItem from './KRadioListItem';

import './styles/lists.css';

/**
 * 
 */
class KRadioList extends Component {

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

    this.onItemCheck=this.onItemCheck.bind(this);
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
  onItemCheck (anIndex) {
    let newList=this.dataTools.deepCopy (this.state.list);

    for (let i=0;i<newList.length;i++) {
      newList[i].checked=false;
      if(anIndex==i) {
        newList[i].checked=true;
      }
    }

    this.setState ({
      list: newList
    });

    if (this.props.radiolistChecked) {
      this.props.radiolistChecked (newList);
    }
  }

  /**
   *
   */
  renderItems () {
    let items=[];

    for (let i=0;i<this.state.list.length;i++) {
      items.push (<KRadioListItem key={this.dataTools.uuidv4()} id={i} onItemCheck={this.onItemCheck} item={this.state.list [i]}/>);
    }

    return (items);
  }

  /**
   *
   */
  render () {
    let classes="kradio-list klist-regular";
    let style;
    let items;

    if (this.props.size) {
      if (this.props.size==KButton.TINY) {
        classes="kradio-list klist-tiny";
      }

      if (this.props.size==KButton.REGULAR) {
        classes="kradio-list klist-regular";
      }

      if (this.props.size==KButton.MEDIUM) {
        classes="kradio-list klist-medium";
      }

      if (this.props.size==KButton.LARGE) {
        classes="kradio-list klist-large";
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

export default KRadioList;
