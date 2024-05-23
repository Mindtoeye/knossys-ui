import React, { Component } from 'react';

/**
 *
 */
class KTreeBase extends Component {

  /**
   *
   */
  constructor (props) {
    super(props);
  }

  /**
   *
   */
  getPaddingLeft = (level, type) => {
    let paddingLeft = level * 15;
    if (type === 'file') paddingLeft += 5;
    return paddingLeft;
  }

  /**
   *
   */
  getNodeLabel = (node) => {
    let splitter=node.path.split('/');
    return (splitter[splitter.length-1]);
  }

  /**
   *
   */
  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }  
}

export default KTreeBase;
