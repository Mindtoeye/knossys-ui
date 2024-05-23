import React, { Component } from 'react';

import { KnossysInfoPanel, KButton, KList, KToolbar, KToolbarItem } from '@knossys/knossys-ui-core';

import { AiOutlineSortAscending, AiOutlineSortDescending, AiOutlineToTop } from 'react-icons/ai';
import { BsStack } from 'react-icons/bs';
import { VscDebug } from 'react-icons/vsc';
import { AiOutlineWindows } from 'react-icons/ai';

import { SortOperations } from '@knossys/knossys-js-algorithm';

import DataTools from './utils/DataTools';

import './styles/wtaskmanager.css';

/**
 * 
 */
class WindowTaskManager extends Component {

  static SORT_BY_ZINDEX=0;
  static SORT_BY_AZ=1;
  static SORT_BY_ZA=2;
  
  /**
   *
   */
  constructor(props) {
    super(props);
    
    let appManager=this.props.appManager;

    this.sortOperations = new SortOperations ();
    this.dataTools=new DataTools ();

    this.state = {
      winlist: appManager.getApps (),
      sort: WindowTaskManager.SORT_BY_ZINDEX
    };

    this.onToolbarItemClick=this.onToolbarItemClick.bind(this);
    this.onSelectWindow=this.onSelectWindow.bind(this);

    this.popSelected=this.popSelected.bind(this);

    this.arrangeWindows=this.arrangeWindows.bind(this);
  }

  /**
   * This by definition returns a copy
   */
  getWinList () {
    if (this.props.hasOwnProperty ("appManager")==false) {
      return ([]);
    }

    let appManager=this.props.appManager;

    let winlist=appManager.getApps ();

    return (winlist);
  }

  /**
   * We should probably move this inside the application manager class or
   * some other singleton manager
   */
  arrangeWindows () {
    console.log ("arrangeWindows ()");

    let appManager=this.props.appManager;

    // This gets the raw application list
    // Any change we make here should be globally active
    let applist=appManager.getAppsAll ();

    for (let i=0;i<applist.length;i++) {
      let appData=applist [i].data;
      

    }
  }

  /**
   * 
   */
  onToolbarItemClick (e, anIndex) {
    console.log ("onToolbarItemClick ("+anIndex+")");

    if (anIndex==1) {
      this.setState ({
        sort: WindowTaskManager.SORT_BY_ZINDEX
      });
    }

    if (anIndex==2) {
      this.setState ({
        sort: WindowTaskManager.SORT_BY_AZ
      });
    }

    if (anIndex==3) {
      this.setState ({
        sort: WindowTaskManager.SORT_BY_ZA
      });
    }

    if (anIndex==4) {
      this.popSelected ();
    }

    if (anIndex==5) {
      this.arrangeWindows ();
    }

    if (anIndex==6) {
      console.log (this.getWinList ());
    }        
  }

  /**
   *
   */
  onSelectWindow (e, anIndex) {
    console.log ("onSelectWindow ("+anIndex+")");

  }

  /**
   * 
   */
  popSelected () {
    console.log ("popSelected ()");
    
    if (this.props.appManager) {

    }
  }

  /**
   * 
   */
  generateZOrderedList (winlist) {
    let itemClass="wtaskmanageritem";
    let itemClassTitle="wtaskmanagertitle";

    let windowList=[];

    for (let i=0;i<winlist.length;i++) {
      let app=winlist[i];

      itemClassTitle="wtaskmanagertitle";

      if (app.selected==true) {
        itemClassTitle="wtaskitemselected";
      }

      // Don't show windows and elements that are part of the Knossys system itself
      if (app.hasOwnProperty ("isSystem")==true) {
        if (app.isSystem==false) {
          windowList.unshift (<div key={"winitem-"+i} className={itemClass} onClick={(e) => this.onSelectWindow (e,i)}><div className={itemClassTitle}>{app.title}</div><div className="wtaskmanagercontent">{"modal: " + app.modal + ", centered: " + app.centered + ", type: " + app.type + ", shown: " + app.shown}</div></div>);
        }
      } else {
        windowList.unshift (<div key={"winitem-"+i} className={itemClass}><div className={itemClassTitle}>{app.title}</div><div className="wtaskmanagercontent">{"modal: " + app.modal + ", centered: " + app.centered + ", type: " + app.type + ", shown: " + app.shown}</div></div>);
      }
    }    

    return (windowList);
  }

  /**
   * 
   */
  generateAZOrderedList (winlist) {
    let itemClass="wtaskmanageritem";
    let itemClassTitle="wtaskmanagertitle";

    let sorted=this.sortOperations.sortAZ (winlist,"title");

    let windowList=[];

    for (let i=0;i<sorted.length;i++) {
      let app=sorted[i];

      itemClassTitle="wtaskmanagertitle";

      if (app.selected==true) {
        itemClassTitle="wtaskitemselected";
      }

      // Don't show windows and elements that are part of the Knossys system itself
      if (app.hasOwnProperty ("isSystem")==true) {
        if (app.isSystem==false) {
          windowList.push (<div key={"winitem-"+i} className={itemClass} onClick={(e) => this.onSelectWindow (e,i)}><div className={itemClassTitle}>{app.title}</div><div className="wtaskmanagercontent">{"modal: " + app.modal + ", centered: " + app.centered + ", type: " + app.type + ", shown: " + app.shown}</div></div>);
        }
      } else {
        windowList.push (<div key={"winitem-"+i} className={itemClass}><div className={itemClassTitle}>{app.title}</div><div className="wtaskmanagercontent">{"modal: " + app.modal + ", centered: " + app.centered + ", type: " + app.type + ", shown: " + app.shown}</div></div>);
      }
    }    

    return (windowList);
  }

  /**
   * 
   */
  generateZAOrderedList (winlist) {
    let itemClass="wtaskmanageritem";
    let itemClassTitle="wtaskmanagertitle";

    let sorted=this.sortOperations.sortZA (winlist,"title");
    
    let windowList=[];

    for (let i=0;i<sorted.length;i++) {
      let app=sorted[i];

      itemClassTitle="wtaskmanagertitle";

      if (app.selected==true) {
        itemClassTitle="wtaskitemselected";
      }

      // Don't show windows and elements that are part of the Knossys system itself
      if (app.hasOwnProperty ("isSystem")==true) {
        if (app.isSystem==false) {
          windowList.push (<div key={"winitem-"+i} className={itemClass} onClick={(e) => this.onSelectWindow (e,i)}><div className={itemClassTitle}>{app.title}</div><div className="wtaskmanagercontent">{"modal: " + app.modal + ", centered: " + app.centered + ", type: " + app.type + ", shown: " + app.shown}</div></div>);
        }
      } else {
        windowList.push (<div key={"winitem-"+i} className={itemClass}><div className={itemClassTitle}>{app.title}</div><div className="wtaskmanagercontent">{"modal: " + app.modal + ", centered: " + app.centered + ", type: " + app.type + ", shown: " + app.shown}</div></div>);
      }
    }    

    return (windowList);
  }    

  /**
   * 
   */
  render () {
    console.log ("WindowTaskManager:render("+this.state.sort+")");

    let windowList=[];

    let winlist=this.getWinList ();

    if (this.state.sort==WindowTaskManager.SORT_BY_ZINDEX) {
      windowList=this.generateZOrderedList (winlist);
    } else {
      if (this.state.sort==WindowTaskManager.SORT_BY_AZ) {
        windowList=this.generateAZOrderedList (winlist);
      } else {
        if (this.state.sort==WindowTaskManager.SORT_BY_ZA) {
          windowList=this.generateZAOrderedList (winlist);
        }        
      }
    }

    return (<div className="wtaskmanager">
      <KToolbar direction={KToolbar.DIRECTION_VERTICAL}>
        <KToolbarItem onClick={(e) => this.onToolbarItemClick (e,1)} tooltip="Sort based on Z order" toggle={true} selected={true}><BsStack /></KToolbarItem>
        <KToolbarItem onClick={(e) => this.onToolbarItemClick (e,2)} tooltip="Sort based on window title A-Z" toggle={true}><AiOutlineSortAscending /></KToolbarItem>
        <KToolbarItem onClick={(e) => this.onToolbarItemClick (e,3)} tooltip="Sort based on window title Z-A" toggle={true}><AiOutlineSortDescending /></KToolbarItem>
        <KToolbarItem onClick={(e) => this.onToolbarItemClick (e,4)} tooltip="Bring to front" toggle={false}><AiOutlineToTop /></KToolbarItem>
        <KToolbarItem onClick={(e) => this.onToolbarItemClick (e,5)} tooltip="Layout windows in grid" toggle={false}><AiOutlineWindows /></KToolbarItem>
        <KToolbarItem onClick={(e) => this.onToolbarItemClick (e,6)} tooltip="Debug internal window list" toggle={false}><VscDebug /></KToolbarItem>
        <div className="wtaskvpadding">&nbsp;</div>
      </KToolbar>
      <div className="wtasklist">
        {windowList}
      </div>  
     </div>);
  }
}

export default WindowTaskManager;
