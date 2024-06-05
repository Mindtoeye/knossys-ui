import React, { Component } from 'react';

import KWindowBase from './KWindowBase';

/**
 * 
 */
class WindowDummyComponent extends KWindowBase {

   /**
    * 
    */   
   constructor (props) {
      super (props);
      this.state = {};
   }

   /**
    * 
    */
   render () {
   	return (<div></div>);
   }
}

export default WindowDummyComponent;
