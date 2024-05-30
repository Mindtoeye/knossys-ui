import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import KTaskbarSeparator from './KTaskbarSeparator';

import { HiOutlineTerminal } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { BiHelpCircle } from 'react-icons/bi';

import './css/taskbar.css';

/**
 *
 */
class KTaskbarMain extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.onHide=this.onHide.bind(this);
  }

  /**
   * 
   */
  onHide () {
    //this.props.onHide();
  }

  /**
   * 
   */
  componentDidMount() {
    this.focusDiv();
  }

  /**
   * 
   */
  focusDiv() {
    ReactDOM.findDOMNode(this.refs.main).focus();
  }  

  /**
   * 
   */
  render () {
    return (<div ref="main" tabIndex="2" className="ktaskbarmain" onBlur={this.onHide}>
      <div className="ktaskbartitle">Knossys Configuration</div>
      <div className="ktaskbarhsep"></div>
      <div className="ktasbarcont">
        <div className="kverticaltoolbar">
          <div className="kmenuvstretcher" />
          <div className="ktaskicon">
            <BiHelpCircle />
          </div>                    
          <div className="ktaskicon">
            <FiSettings />
          </div>          
          <div className="ktaskicon">
            <HiOutlineTerminal />
          </div>
        </div>
        <KTaskbarSeparator />
        <div className="ktaskbarpanel"></div>
      </div>
    </div>);
  }
}

export default KTaskbarMain;
