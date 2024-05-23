import React, { Component } from 'react';

import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

import KDataTools from './utils/KDataTools';

import './styles/tree.css';

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 15;
  if (type === 'file') paddingLeft += 5;
  return paddingLeft;
}

const getNodeLabel = (node) => {
  let splitter=node.path.split('/');
  return (splitter[splitter.length-1]);
}

/**
 *
 */
class KTreeNode extends Component {
  
  /**
   * 
   */
  constructor (props) {
    super(props);

    this.dataTools=new KDataTools ();
  }

  /**
   * 
   */
  render () {
    const { node, getChildNodes, level, type, onToggle, onNodeSelect } = this.props;
    let padding=getPaddingLeft (level,type);
    let treeclass;

    if (node.selected) {
      if (node.selected==true) {
        treeclass="kselected";
      }
    }

    let chevron;
    let marginLeft="0px";

    if (node.type=='file') {
      marginLeft="4px";
    }

    if (node.children) {
      if (node.children.length>0) {
        chevron=<div key={this.dataTools.uuidv4()} style={{marginRight: "5px"}} onClick={() => onToggle(node)}>{ node.type === 'folder' && (node.isOpen ? <FaChevronDown /> : <FaChevronRight />) }</div>;
      }
    }

    return (
      <React.Fragment>
        <div key={this.dataTools.uuidv4()} className="ktreenode" style={{paddingLeft: padding}}>

          {chevron}          
          
          <div key={this.dataTools.uuidv4()} style={{fontSize: "12px", marginRight: "4px", marginLeft: marginLeft}} onClick={() => onNodeSelect(node)}>
            { node.type === 'file' && <FaFile /> }
            { node.type === 'folder' && node.isOpen === true && <FaFolderOpen /> }
            { node.type === 'folder' && !node.isOpen && <FaFolder /> }
          </div>
          
          <span className={treeclass} role="button" onClick={() => onNodeSelect(node)}>
            { getNodeLabel(node) }
          </span>
        </div>

        { node.isOpen && getChildNodes(node).map(childNode => (
          <KTreeNode key={this.dataTools.uuidv4()}
            {...this.props}
            node={childNode}          
            level={level + 1}
          />
        ))}
      </React.Fragment>
    );
  }
}

KTreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  getChildNodes: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onNodeSelect: PropTypes.func.isRequired,
};

KTreeNode.defaultProps = {
  level: 0,
};

export default KTreeNode;
