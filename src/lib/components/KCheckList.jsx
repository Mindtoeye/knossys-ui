
import React, { Component } from 'react';

import KDataTools from './utils/KDataTools';
import KCheckListItem from './KCheckListItem';

import './styles/lists.css';

/**
 * 
 */
class KCheckList extends Component {

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
      if(anIndex==i) {
        if (newList[i].checked==true){
          newList[i].checked=false;
        } else {
          newList[i].checked=true;          
        }
      }
    }

    this.setState ({
      list: newList
    });

    if (this.props.checklistChecked) {
      this.props.checklistChecked (newList);
    }
  }

  /**
   *
   */
  renderItems () {
    let items=[];

    for (let i=0;i<this.state.list.length;i++) {
      items.push (<KCheckListItem key={this.dataTools.uuidv4()} id={i} onItemCheck={this.onItemCheck} item={this.state.list [i]}/>);
    }

    return (items);
  }

  /**
   *
   */
  render () {
    let classes="kcheck-list klist-regular";
    let style;
    let items;

    if (this.props.size) {
      if (this.props.size==KButton.TINY) {
        classes="kcheck-list klist-tiny";
      }

      if (this.props.size==KButton.REGULAR) {
        classes="kcheck-list klist-regular";
      }

      if (this.props.size==KButton.MEDIUM) {
        classes="kcheck-list klist-medium";
      }

      if (this.props.size==KButton.LARGE) {
        classes="kcheck-list klist-large";
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

export default KCheckList;
