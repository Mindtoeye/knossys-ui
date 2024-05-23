import React from "react";
import ReactDOM from "react";

import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

import KToolbar from './KToolbar';
import KToolbarItem from './KToolbarItem';

import { GrUndo, GrRedo } from 'react-icons/gr';
import { CgFormatItalic, CgFormatBold, CgFormatHeading, CgLink } from 'react-icons/cg';
import { BiBold } from 'react-icons/bi';
import { BsCursorText } from 'react-icons/bs';
import { MdInvertColors } from 'react-icons/md';


import './styles/editable.css';

const sanitizeConf = {
  allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
  allowedAttributes: { a: ["href"] }
};

/**
 * Via: https://codesandbox.io/s/l91xvkox9l?file=/src/styles.css:0-214
 */
class KBasicEditor extends React.Component {

  /**
   * 
   */
  constructor(props) {
    super(props);

    this.state = {
      html: `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`,
      editable: true,
      inverted: false
    };

    this.onEditBold=this.onEditBold.bind(this);
    this.onEditItalic=this.onEditItalic.bind(this);
    this.onEditHeading=this.onEditHeading.bind(this);
    this.onEditInvert=this.onEditInvert.bind(this);
    this.onEditLink=this.onEditLink.bind(this);
    this.onEditToggle=this.onEditToggle.bind(this);
  }

  /**
   * 
   */
  handleChange = evt => {
    //console.log ("handleChange ()");

    this.setState({ html: evt.target.value });

    if (this.props.onEditChange) {
      this.props.onEditChange (evt.target.value);
    }
  };

  /**
   * 
   */
  sanitize = () => {
    this.setState({ html: sanitizeHtml(this.state.html, sanitizeConf) });
  };

  /**
   * 
   */
  onEditBold (e) {
    console.log ("onEditBold ()");

    document.execCommand("bold", false, null); // Send the command to the browser
  }

  /**
   * 
   */
  onEditItalic (e) {
    console.log ("onEditItalic ()");

    document.execCommand("italic", false, null); // Send the command to the browser
  }

  /**
   * 
   */
  onEditHeading (e) {
    console.log ("onEditHeading ()");

    document.execCommand("formatBlock", false, "h1"); // Send the command to the browser
  }

  onEditInvert (e) {
    console.log ("onEditLink ()");

    this.setState({ inverted: !this.state.inverted });    
  }

  /**
   * 
   */
  onEditLink (e) {
    console.log ("onEditLink ()");

    document.execCommand("createLink", false, "https://www.knossys.com"); // Send the command to the browser
  }
   
  /**
   * 
   */   
  onEditToggle (e) {
    console.log ("onEditToggle ()");

    this.setState({ editable: !this.state.editable });
  }

  /**
   * 
   */
  render = () => {
    let editableclass="keditcontainer";
    if (this.state.inverted==true) {
      editableclass="keditcontainer-inverted";
    }
    return (
      <div className="keditor">
        <KToolbar>        
          <KToolbarItem onClick={(e) => this.onEditBold (e)}><BiBold /></KToolbarItem>        
          <KToolbarItem onClick={(e) => this.onEditItalic (e)}><CgFormatItalic /></KToolbarItem>
          <KToolbarItem onClick={(e) => this.onEditHeading (e)}><CgFormatHeading /></KToolbarItem>
          <KToolbarItem onClick={(e) => this.onEditInvert (e)}><MdInvertColors /></KToolbarItem>                    
          <KToolbarItem onClick={(e) => this.onEditToggle (e)} toggle={true} selected={true}><BsCursorText /></KToolbarItem> 
        </KToolbar>      
        <div className={editableclass}>
          <ContentEditable
            className="keditable"
            tagName="pre"
            html={this.state.html} // innerHTML of the editable div
            disabled={!this.state.editable} // use true to disable edition
            onChange={this.handleChange} // handle innerHTML change
            onBlur={this.sanitize}
          />
        </div>
      </div>
    );
  };
}

export default KBasicEditor;
