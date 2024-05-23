import React, { Component } from 'react';
import PropTypes from 'prop-types';

import KDataTools from './utils/KDataTools';
import KTreeNode from './KTreeNode';

import './styles/tree.css';

/**
 *
 */
class KTree extends Component {

  /**
   *
   */
  constructor (props) {
    super(props);

    this.dataTools=new KDataTools ();

    this.state = {
      nodes: this.prep(props.data)
    };

    this.onNodeSelect=this.onNodeSelect.bind();
  }

  /**
   *
   */
  componentDidUpdate(prevProps) {    
    if (this.props.data !== prevProps.data) {
      this.setState ({
        nodes: this.prep (this.props.data)
      });
    }
  }  

  /**
   *
   */
  prep (data) {
    let prepped=this.dataTools.deepCopy (data);

    for (let item in prepped) {
      let testNode=prepped[item];
      if (!testNode.id) {
        testNode.id=this.dataTools.uuidv4();
      }

      if (!testNode.selected) {
        testNode.selected=false;
      }
    }

    return (prepped);
  }

  /**
   *
   */
  getRootNodes = () => {
    const { nodes } = this.state;

    let rootNodes=[];

    for (let item in nodes) {
      let testNode=nodes[item];
      if (testNode.isRoot) {
        if(testNode.isRoot==true) {
          rootNodes.push(testNode);
        }
      }
    }

    return (rootNodes);
  }

  /**
   *
   */
  getChildNodes = (node) => {
    const { nodes } = this.state;
    if (!node.children) return [];
    return node.children.map(path => nodes[path]);
  }  

  /**
   *
   */
  onToggle = (node) => {
    const { nodes } = this.state;
    nodes[node.path].isOpen = !node.isOpen;
    this.setState({ nodes });
  }

  /**
   *
   */
  onNodeSelect = node => {
    const { onSelect } = this.props;

    let prepped=this.dataTools.deepCopy (this.state.nodes);

    for (let item in prepped) {
      let testNode=prepped[item];
      testNode.selected=false;
      if (testNode.path==node.path) {
        console.log("Selecting node: " + node.path);
        testNode.selected=true;
      }
    }    
 
    this.setState ({
      nodes: prepped
    },(e) => {
      onSelect(node);
    });
  }

  /**
   *
   */
  render() {
    let nodes=[];
    const rootNodes = this.getRootNodes();

    for (let i=0;i<rootNodes.length;i++) {
      nodes.push (<KTreeNode key={"treenode-root-" + i} node={rootNodes [i]} getChildNodes={this.getChildNodes} onToggle={this.onToggle} onNodeSelect={this.onNodeSelect} />);
    }    

    return (
      <div key="treeroot" className={"ktree " + this.props.classes} style={this.props.style}>
       {nodes}
      </div>
    );
  }
}

KTree.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default KTree;
