import React, { Component } from 'react';

import './styles/wait.css';

/**
 * 
 */
class KWaitSpinner extends Component {

  static SPINNER_STYLE_01 =  1;
  static SPINNER_STYLE_02 =  2;
  static SPINNER_STYLE_03 =  3;
  static SPINNER_STYLE_04 =  4;
  static SPINNER_STYLE_05 =  5;
  static SPINNER_STYLE_06 =  6;  
  static SPINNER_STYLE_07 =  7;  
  static SPINNER_STYLE_08 =  8;  
  static SPINNER_STYLE_09 =  9;  
  static SPINNER_STYLE_10 = 10;  

  /**
   * 
   */
  constructor (props) {
    super(props);

    this.onClick=this.onClick.bind(this);
  }

  /**
   * 
   */
  renderWait01() {
    return (<svg className="kwaitsvg" viewBox="0 0 100 100">
          <circle fill="none" stroke="#cdc9c9" strokeWidth="6" strokeMiterlimit="15" strokeDasharray="14.2472,14.2472" cx="50" cy="50" r="47" >
            <animateTransform 
               attributeName="transform" 
               attributeType="XML" 
               type="rotate"
               dur="5s" 
               from="0 50 50"
               to="360 50 50" 
               repeatCount="indefinite" />
        </circle>
        <circle fill="none" stroke="#cdc9c9" strokeWidth="1" strokeMiterlimit="10" strokeDasharray="10,10" cx="50" cy="50" r="39">
            <animateTransform 
               attributeName="transform" 
               attributeType="XML" 
               type="rotate"
               dur="5s" 
               from="0 50 50"
               to="-360 50 50" 
               repeatCount="indefinite" />
        </circle>
        <g fill="#cdc9c9">
        <rect x="30" y="35" width="5" height="30">
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 5 ; 0 -5; 0 5" 
             repeatCount="indefinite" 
             begin="0.1"/>
        </rect>
        <rect x="40" y="35" width="5" height="30" >
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 5 ; 0 -5; 0 5" 
             repeatCount="indefinite" 
             begin="0.2"/>
        </rect>
        <rect x="50" y="35" width="5" height="30" >
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 5 ; 0 -5; 0 5" 
             repeatCount="indefinite" 
             begin="0.3"/>
        </rect>
        <rect x="60" y="35" width="5" height="30" >
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 5 ; 0 -5; 0 5"  
             repeatCount="indefinite" 
             begin="0.4"/>
        </rect>
        <rect x="70" y="35" width="5" height="30" >
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 5 ; 0 -5; 0 5" 
             repeatCount="indefinite" 
             begin="0.5"/>
        </rect>
        </g>
      </svg>);
  }

  /**
   * 
   */
  renderWait02() {
    return (<svg className="kwaitsvg" viewBox="0 0 100 100">
      <circle fill="none" stroke="#cdc9c9" strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="48"/>
      <line fill="none" strokeLinecap="round" stroke="#cdc9c9" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
        <animateTransform 
             attributeName="transform" 
             dur="2s"
             type="rotate"
             from="0 50 50"
             to="360 50 50"
             repeatCount="indefinite" />
      </line>
      <line fill="none" strokeLinecap="round" stroke="#cdc9c9" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
        <animateTransform 
             attributeName="transform" 
             dur="15s"
             type="rotate"
             from="0 50 50"
             to="360 50 50"
             repeatCount="indefinite" />
      </line>
      </svg>);
  }

  /**
   * 
   */
  renderWait03() {
    return (<svg className="kwaitsvg" viewBox="0 0 100 100">
      <circle fill="none" stroke="#cdc9c9" strokeWidth="4" cx="50" cy="50" r="44" style={{opacity: "0.5"}}/>
        <circle fill="#cdc9c9" stroke="#e74c3c" strokeWidth="3" cx="8" cy="54" r="6" >
          <animateTransform
            attributeName="transform"
            dur="2s"
            type="rotate"
            from="0 50 48"
            to="360 50 52"
            repeatCount="indefinite" />
          
        </circle>
      </svg>);
  }

  /**
   * 
   */
  renderWait04() {
    return (<svg className="kwaitsvg" viewBox="0 0 100 100">
        <circle fill="#cdc9c9" stroke="none" cx="6" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"/>    
        </circle>
        <circle fill="#cdc9c9" stroke="none" cx="26" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite" 
            begin="0.2"/>       
        </circle>
        <circle fill="#cdc9c9" stroke="none" cx="46" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite" 
            begin="0.3"/>     
        </circle>
      </svg>);
  }

  /**
   * 
   */
  renderWait05() {
    return (<svg className="kwaitsvg" viewBox="0 0 100 100">
        <circle fill="#cdc9c9" stroke="none" cx="6" cy="50" r="6">
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 15 ; 0 -15; 0 15" 
             repeatCount="indefinite" 
             begin="0.1"/>
        </circle>
        <circle fill="#cdc9c9" stroke="none" cx="30" cy="50" r="6">
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 10 ; 0 -10; 0 10" 
             repeatCount="indefinite" 
             begin="0.2"/>
        </circle>
        <circle fill="#cdc9c9" stroke="none" cx="54" cy="50" r="6">
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 5 ; 0 -5; 0 5" 
             repeatCount="indefinite" 
             begin="0.3"/>
        </circle>
      </svg>);
  }

  /**
   * 
   */
  renderWait06() {
    return (<svg className="kwaitsvg" viewBox="0 0 100 100">
         <rect fill="none" stroke="#cdc9c9" strokeWidth="4" x="25" y="25" width="50" height="50">
        <animateTransform
           attributeName="transform"
           dur="0.5s"
           from="0 50 50"
           to="180 50 50"
           type="rotate"
           id="strokeBox"
           attributeType="XML"
           begin="rectBox.end"/>
        </rect>
         <rect x="27" y="27" fill="#cdc9c9" width="46" height="50">
        <animate
           attributeName="height"
           dur="1.3s"
           attributeType="XML"
           from="50" 
           to="0"
           id="rectBox" 
           fill="freeze"
           begin="0s;strokeBox.end"/>
        </rect>
      </svg>);
  }

  /**
   * 
   */
  renderWait07() {
    return (<svg className="kwaitsvg" viewBox="0 0 100 100">
       <path fill="#cdc9c9" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
        c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
            <animateTransform 
               attributeName="transform" 
               attributeType="XML" 
               type="rotate"
               dur="2s" 
               from="0 50 50"
               to="360 50 50" 
               repeatCount="indefinite" />
        </path>
       <path fill="#cdc9c9" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
        c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
            <animateTransform 
               attributeName="transform" 
               attributeType="XML" 
               type="rotate"
               dur="1s" 
               from="0 50 50"
               to="-360 50 50" 
               repeatCount="indefinite" />
        </path>
       <path fill="#cdc9c9" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
        L82,35.7z">
            <animateTransform 
               attributeName="transform" 
               attributeType="XML" 
               type="rotate"
               dur="2s" 
               from="0 50 50"
               to="360 50 50" 
               repeatCount="indefinite" />
        </path>
      </svg>);
  }

  /**
   * 
   */
  renderWait08() {
    return (<svg className="kwaitsvg" viewBox="0 0 100 100">
      <rect fill="#cdc9c9" width="3" height="100" transform="translate(0) rotate(180 3 50)">
        <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"/>
      </rect>
      <rect x="17" fill="#cdc9c9" width="3" height="100" transform="translate(0) rotate(180 20 50)">
        <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.1s"/>
      </rect>
      <rect x="40" fill="#cdc9c9" width="3" height="100" transform="translate(0) rotate(180 40 50)">
        <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.3s"/>
      </rect>
      <rect x="60" fill="#cdc9c9" width="3" height="100" transform="translate(0) rotate(180 58 50)">
        <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.5s"/>
      </rect>
      <rect x="80" fill="#cdc9c9" width="3" height="100" transform="translate(0) rotate(180 76 50)">
        <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.1s"/>
      </rect>
      </svg>);
  }

  /**
   * 
   */
  renderWait09() {
    return(<svg className="kwaitsvg" viewBox="0 0 100 100">
        <rect x="20" y="50" width="4" height="10" fill="#cdc9c9">
          <animateTransform attributeType="xml"
            attributeName="transform" type="translate"
            values="0 0; 0 20; 0 0"
            begin="0" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="30" y="50" width="4" height="10" fill="#cdc9c9">
          <animateTransform attributeType="xml"
            attributeName="transform" type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.2s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="40" y="50" width="4" height="10" fill="#cdc9c9">
          <animateTransform attributeType="xml"
            attributeName="transform" type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.4s" dur="0.6s" repeatCount="indefinite" />
        </rect>
    </svg>);
  }

  /**
   * 
   */
  renderWait10() {
    return(<svg className="kwaitsvg" viewBox="0 0 100 100">
        <path fill="#cdc9c9" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
          <animateTransform 
             attributeName="transform" 
             attributeType="XML" 
             type="rotate"
             dur="1s" 
             from="0 50 50"
             to="360 50 50" 
             repeatCount="indefinite" />
      </path>
    </svg>);
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
    let classes="kwaitspinner kwaitspinnerdefaults";

    if (this.props.type==KWaitSpinner.SPINNER_STYLE_01) {
      return (<div onClick={(e) => this.onClick(e)} className={classes} style={this.props.style}>{this.renderWait01()}</div>);
    }

    if (this.props.type==KWaitSpinner.SPINNER_STYLE_02) {
      return (<div onClick={(e) => this.onClick(e)} className={classes} style={this.props.style}>{this.renderWait02()}</div>);
    }

    if (this.props.type==KWaitSpinner.SPINNER_STYLE_03) {
      return (<div onClick={(e) => this.onClick(e)} className={classes} style={this.props.style}>{this.renderWait03()}</div>);      
    }

    if (this.props.type==KWaitSpinner.SPINNER_STYLE_04) {
      return (<div onClick={(e) => this.onClick(e)} className={classes} style={this.props.style}>{this.renderWait04()}</div>);      
    }

    if (this.props.type==KWaitSpinner.SPINNER_STYLE_05) {
      return (<div onClick={(e) => this.onClick(e)} className={classes} style={this.props.style}>{this.renderWait05()}</div>);      
    }

    if (this.props.type==KWaitSpinner.SPINNER_STYLE_06) {
      return (<div onClick={(e) => this.onClick(e)} className={classes} style={this.props.style}>{this.renderWait06()}</div>);      
    }

    if (this.props.type==KWaitSpinner.SPINNER_STYLE_07) {
      return (<div onClick={(e) => this.onClick(e)} className={classes} style={this.props.style}>{this.renderWait07()}</div>);      
    }

    if (this.props.type==KWaitSpinner.SPINNER_STYLE_08) {
      return (<div onClick={(e) => this.onClick(e)} className={classes} style={this.props.style}>{this.renderWait08()}</div>);      
    }

    if (this.props.type==KWaitSpinner.SPINNER_STYLE_09) {
      return (<div onClick={(e) => this.onClick(e)} className={classes} style={this.props.style}>{this.renderWait09()}</div>);      
    }

    if (this.props.type==KWaitSpinner.SPINNER_STYLE_10) {
      return (<div onClick={(e) => this.onClick(e)} className={classes} style={this.props.style}>{this.renderWait10()}</div>);      
    }        

    return (<div className={classes} style={this.props.style}>{this.renderWait01()}</div>);
  }
}

export default KWaitSpinner;
