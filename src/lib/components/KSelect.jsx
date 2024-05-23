import React, { Component } from 'react';

import KDataTools from './utils/KDataTools';

import './styles/select.css';

/**
 * 
 */
class KSelect extends Component {

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
      selected: ""
    };
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
  handleChange(e) {    
    this.setState({ 
      selected: e.target.value 
    });

    if (this.props.handleChange) {
      this.props.handleChange (e.target.value);
    }
  }

  /**
   *
   */
  render () {
    let style;
    let options=[];
    let classes="kselect kselect-regular";

    if (this.props.size) {
      if (this.props.size==KSelect.TINY) {
        classes="kselect kselect-tiny";
      }

      if (this.props.size==KSelect.REGULAR) {
        classes="kselect kselect-regular";
      }

      if (this.props.size==KSelect.MEDIUM) {
        classes="kselect kselect-medium";
      }

      if (this.props.size==KSelect.LARGE) {
        classes="kselect kselect-large";
      }
    }

    if (this.props.style) {
      style=this.props.style;
    }    

    if (this.props.classes) {
      classes=classes + " " + this.props.classes;
    }

    if (this.props.options) {
      for (let i=0;i<this.props.options.length;i++) {
        options.push(<option key={"option-"+this.dataTools.uuidv4()}>{this.props.options [i]}</option>);
      }
    }

    return (
      <select className={classes} style={style} onChange={this.handleChange}>
      {options}
      </select>
    );
  }
}

export default KSelect;
