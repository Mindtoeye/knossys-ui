import React, { Component } from 'react';

import KTaskbarMain from './KTaskbarMain';
import KTaskbarIcon from './KTaskbarIcon';
import KTaskbarSeparator from './KTaskbarSeparator';
import KTaskbarInfoPanel from './KTaskbarInfoPanel';

import { TiFlowMerge } from 'react-icons/ti';
import { HiOutlineTerminal } from 'react-icons/hi';
import { FaTasks } from 'react-icons/fa';
import { VscFileSubmodule } from 'react-icons/vsc';

import './css/taskbar.css';

/**
 *
 */
class KTaskbar extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.state={
      mainShown: false
    };

    this.onMain=this.onMain.bind(this);
  }

  /**
   * 
   */
  onMain () {
    console.log ("onMain ()");
    let toggle=!this.state.mainShown;
    this.setState ({
      mainShown: toggle
    });
  }

  /**
   * 
   */
  render () {
    let icons=[];
    let main;
    let infopanel;

    if (this.state.mainShown==true) {
      main=<KTaskbarMain key="key0" onHide={this.onMain} />;
    }

    if (this.props.showinfo==true) {
      infopanel=<KTaskbarInfoPanel />;
    }

    icons.push (<KTaskbarIcon showlabel={this.props.showlabels} key="icon1" onClick={this.onMain} icon=<TiFlowMerge/> label="Knossys" />);
    icons.push (<KTaskbarSeparator key="icon2" />);
    icons.push (<KTaskbarIcon showlabel={this.props.showlabels} key="icon3" label="Console" icon=<HiOutlineTerminal/> />);
    icons.push (<KTaskbarIcon showlabel={this.props.showlabels} key="icon4" label="Pipeline Editor" icon=<TiFlowMerge/> />);
    icons.push (<KTaskbarIcon showlabel={this.props.showlabels} key="icon5" label="Task Manager" icon=<FaTasks/> />);
    icons.push (<KTaskbarIcon showlabel={this.props.showlabels} key="icon6" label="File Manager" icon=<VscFileSubmodule/> />);

    return (<div className="ktaskbar">
      {main}
      {icons}
      <div className="kmenuhstretcher" />
      {infopanel}
    </div>);
  }
}

export default KTaskbar;
