import React, { Component } from 'react';

import KDataTools from './utils/KDataTools';
import AnimateHeight from './AnimateHeight';

import './styles/accordion.css';

/**
 * 
 */
class KAccordion extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.dataTools=new KDataTools ();

    let prepped=[];

    for (let i=0;i<props.data.length;i++) {
      let newItem = {
        id: i,
        title: props.data [i].title,
        content: props.data [i].content,
        open: false,
        height: 0
      };
      prepped.push (newItem);
    }

    this.state = {
      data: prepped
    };

    this.setIsActive=this.setIsActive.bind(this);    
  }

  /**
   * 
   */
  setIsActive (anIndex) {
    let newData=this.dataTools.deepCopy (this.state.data);
 
    for (let i=0;i<newData.length;i++) {
      let item=newData [i];

      if (item.id==anIndex) {        
        if (item.open==true) {
          item.open=false;
          item.height=0;
        } else {
          item.open=true;
          item.height="auto";
        }
      } else {
        item.open=false;
        item.height=0;
      }
    }

    this.setState ({
      data: newData
    });
  }

  /**
   * 
   */
  renderItem (i,anItem) {
    let content;
    //if (anItem.open==true) {
      content=<AnimateHeight id={"panel-"+i} duration={200} height={anItem.height}><div className="kaccordion-content">{anItem.content}</div></AnimateHeight>;
    //}
    return (<div key={"accordion-item-"+i} className="kaccordion-item">
      <div className="kaccordion-title" onClick={(e) => this.setIsActive(i)}>
        <div>{anItem.title}</div>
        <div>{anItem.open ? '-' : '+'}</div>
      </div>      
      {content}
    </div>);  
  }

  /**
   * 
   */
  render () {
    let items=[];
 
    for (let i=0;i<this.state.data.length;i++) {
      items.push (this.renderItem (i,this.state.data [i]));
    }

    return (
      <div className="kaccordion">
      {items}
      </div>
    );
  }
}

export default KAccordion;
