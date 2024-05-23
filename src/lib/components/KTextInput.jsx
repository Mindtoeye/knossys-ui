import React, { Component } from 'react';

import './styles/textinput.css';

const extract = (str, pattern) => (str.match(pattern) || []).pop() || '';

const extractHexadecimal = (str) => extract(str, "0x[0-9a-fA-F]+");

const extractAlphanum = (str) => extract(str, "[-+]*[0-9]+");

const extractAlphaFloat = (str) => extract(str, "[-+]?([0-9]*\.[0-9]*)");

const extractBinary = (str) => extract(str, "[0-1]+");

const not = (aValue) => {if (aValue==true) {return (false);} return (true);}

/**
 * 
 */
class KTextInput extends Component {

  static TINY = 'small';
  static REGULAR = 'regular';
  static MEDIUM = 'medium';
  static LARGE = 'large';

  static TYPE_STRING = 0;
  static TYPE_HEX = 1;
  static TYPE_ALPHANUMERIC = 2;
  static TYPE_ALPHAFLOAT = 3;
  static TYPE_BINARY = 4;

  /**
   * 
   */
  constructor (props) {
    super (props);

    let type=KTextInput.TYPE_STRING;
 
    if (props.type) {
      type=props.type;
    }

    this.state = {
      value: props.value,
      type: type
    };

    this.handleTextChange=this.handleTextChange.bind(this);
  }

  /**
   * 
   */
  componentDidMount () {
    //console.log ("componentDidMount ()");
  }

  /**
   * 
   */
  componentWillUnmount() {
    //console.log ("componentWillUnmount ()");    
  }

  /**
   *
   */
  componentDidUpdate(prevProps) {   
    if (this.props.value !== prevProps.value) {
      this.setState ({     
        value: this.props.value
      });
    }
  }

  /**
   * 
   */
  handleTextChange(aValue) {    
    console.log ("handleTextChange ("+aValue+")");

    let value=aValue;

    if (this.state.type==KTextInput.TYPE_HEX) {
      if (aValue.length<=2) {
        value="0x0";
      } else {
        value=extractHexadecimal(aValue);
      }
      console.log ("Hex value: " + value);
    }

    if (this.state.type==KTextInput.TYPE_ALPHANUMERIC) {
      if (aValue=="") {
        value="0";
      } else {
        value=parseInt(extractAlphanum(aValue));
      }

      console.log ("Integer value: " + value);
    }

    if (this.state.type==KTextInput.TYPE_ALPHAFLOAT) {
      if (aValue=="") {
        value="0.0";
      } else {
        value=extractAlphaFloat(aValue);
      }

      console.log ("Float value: " + value);
    }

    if (this.state.type==KTextInput.TYPE_BINARY) {
      if (aValue=="") {
        value=0;
      } else {
        value=extractBinary(aValue);
      }

      console.log ("Binary value: " + value);
    }


    if (this.props.handleChange) {
      //console.log ("Propagating ...");
      this.props.handleChange(value);
    }
  }

  /**
   *
   */
  render () {
    let classes="ktextinput ktextinput-regular";
    let style;

    if (this.props.size) {
      if (this.props.size==KTextInput.TINY) {
        classes="ktextinput ktextinput-tiny";
      }

      if (this.props.size==KTextInput.REGULAR) {
        classes="ktextinput ktextinput-regular";
      }

      if (this.props.size==KTextInput.MEDIUM) {
        classes="ktextinput ktextinput-medium";
      }

      if (this.props.size==KTextInput.LARGE) {
        classes="ktextinput ktextinput-large";
      }
    }

    if (this.props.style) {
      style=this.props.style;
    }

    if (this.props.classes) {
      classes=classes + " " + this.props.classes;
    }

    return (
      <input type="text" className={classes} style={style} value={this.state.value} onChange={(e) => this.handleTextChange (e.target.value)} />
    );
  }
}

export default KTextInput;
