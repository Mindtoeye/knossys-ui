import React, { Component } from 'react';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import { RiArrowLeftRightLine, RiArrowUpDownFill } from 'react-icons/ri';

//import { KButton, KSessionStorage } from '@knossys/knossys-ui-core';

import KButton from './KButton';
import KSessionStorage from './KSessionStorage';

import DataTools from './utils/DataTools';
import DesktopIcon from './DesktopIcon';
import WindowTools from './utils/WindowTools';

import './css/desktop.css';

import defaultIcon from './css/images/app.png';

var marginX = 4;
var marginY = 4;
var paddingX = 12;
var paddingY = 12;
var iconDim = 64;

/**
 *
 */
class Desktop extends Component {

  static LAYOUT_HORIZONTAL = 0;
  static LAYOUT_VERTICAL = 1;

  /**
   * @param {any} props
   */  
  constructor (props){
    super (props);

    this.sessionStorage=new KSessionStorage ("kdesktop");
    this.dataTools=new DataTools ();
    this.windowTools=new WindowTools ();

    let snapIcons=false;

    if (props.snap) {
      snapIcons=props.snap;
    }

    this.state = {
      iconDim: iconDim,
      autoLayout: true,
      layout: this.sessionStorage.getIntegerValue ("direction",Desktop.LAYOUT_HORIZONTAL),
      snap: true,
      snapIcons: snapIcons,
      showGrid: false,
      mouseDown: false,
      mouseXOld: 0,
      mouseYOld: 0,
      mouseX: 0,
      mouseY: 0
    }

    //this.loadSettings ();

    //this.saveState = this.saveState.bind (this);
    this.onLayout = this.onLayout.bind (this);
    this.onDesktopIconClick=this.onDesktopIconClick.bind (this);
    this.onMouseDownIcon=this.onMouseDownIcon.bind(this);
   
    this.onMouseMove=this.onMouseMove.bind(this);
    this.onMouseDown=this.onMouseDown.bind(this);
    this.onMouseUp=this.onMouseUp.bind(this);

    this.onIconSizeChange=this.onIconSizeChange.bind(this);
    this.onAutolayoutChange=this.onAutolayoutChange.bind(this);

    this.onShowGrid=this.onShowGrid.bind(this);

    document.addEventListener('mousedown', this.onMouseDown);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  /**
   * Do we still need this?
   */
  /* 
  saveState () {
    //for (let i=0;i<this.state.icons.length;i++) {
    //  let icon=this.state.icons [i];     
    //  this.cookieStorage.setCookie (icon.id,icon.x+","+icon.y,10); 
    //}

    this.sessionStorage.setJSONObject ("icons",this.state.icons);
  } 
  */ 

  calculateIconPosition (proposedX,proposedY) {
    let position={
      x: proposedX,
      y: proposedY
    }

    return (position);
  }

  /**
   * 
   */
  onMouseMove (e) {
  	let oldX = this.state.mouseX;
  	let oldY = this.state.mouseY;

    let newMouseX=e.pageX;
    let newMouseY=e.pageY;

    let separation=this.state.iconDim;

    if (separation<64) {
      separation=64;
    }    

  	if (this.state.mouseDown==true) {
      let deltaX = (newMouseX - this.state.mouseX);
      let deltaY = (newMouseY - this.state.mouseY);

      let icons=this.props.iconManager.getIcons ();

  	  let updatedIconList=this.dataTools.deepCopy (icons);

  	  for (let i=0;i<updatedIconList.length;i++) {
        let icon=updatedIconList [i];
        if (icon.moving==true) {
          if ((deltaX!=0) || (deltaY!=0)) {
            this.setState({
              autoLayout: false
            });
          }
  	
          if (this.state.snap==false) {
            icon.x=(icon.x+deltaX);
            icon.y=(icon.y+deltaY);
          } else {
            let proposedX=(icon.x+deltaX);
            let proposedY=(icon.y+deltaY);

            let calculatedPosition=this.calculateIconPosition (proposedX,proposedY);

            icon.x=calculatedPosition.x;
            icon.y=calculatedPosition.y;            
          }
        }
      }   

      this.setState ({
        autoLayout: false,
      	mouseXOld: oldX,
      	mouseYOld: oldY,
      	mouseX: newMouseX,
      	mouseY: newMouseY
      });

      e.preventDefault ();
      e.stopPropagation ();

      if (this.props.iconManager) {
        this.props.iconManager.setIcons(updatedIconList);
      }      

	    return;  
  	}

    this.setState ({
      mouseXOld: oldX,
      mouseYOld: oldY,
      mouseX: newMouseX,
      mouseY: newMouseY});

    e.preventDefault ();
    e.stopPropagation ();
  }

  /**
   * 
   */
  onMouseDownIcon (e,uuid) {
  	//console.log ("onMouseDownIcon ("+uuid+")");

    let icons=this.props.iconManager.getIcons ();

  	let updatedIconList=this.dataTools.deepCopy (icons);

    for (let i=0;i<updatedIconList.length;i++) {
      let icon=updatedIconList [i];
      icon.moving=false;
      if (icon.uuid==uuid) {
      	icon.moving=true;
      }
    }    

    /*
    this.setState({
  	  icons: updatedIconList      
    });    
    */

    if (this.props.iconManager) {
      this.props.iconManager.setIcons(updatedIconList);
    }
  }   

  /**
   * 
   */
  onMouseDown (e) {
  	//console.log ("onMouseDown ()");

    var newMouseX=e.pageX;
    var newMouseY=e.pageY;

    this.setState({
      mouseDown: true,
      mouseXOld: newMouseX,
      mouseYOld: newMouseY,        
      mouseX: newMouseX,
      mouseY: newMouseY
    });

    e.preventDefault ();
    e.stopPropagation ();
  }  

  /**
   * 
   */
  onMouseUp (e) {
	  //console.log ("onMouseUp ()");

    var newMouseX=e.pageX;
    var newMouseY=e.pageY;

    let icons=this.props.iconManager.getIcons ();

  	let updatedIconList=this.dataTools.deepCopy (icons);

    for (let i=0;i<updatedIconList.length;i++) {
      let icon=updatedIconList [i];
      icon.moving=false;
    }

    this.setState({
      mouseDown: false
    },(e) => {
      //this.saveState (updatedIconList);
      if (this.props.iconManager) {
        this.props.iconManager.setIcons(updatedIconList);
      }
    });

    e.preventDefault ();
    e.stopPropagation ();    
  }

  /**
   *
   */
  launchInternal (anIcon) {
    let result=false;

    if (anIcon.type=="knossys:url") {
      window.open(anIcon.url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
      result=true;
    }   

    return (result);
  }

  /**
   * @param {any} e
   */
  onDesktopIconClick (e,uuid) {
  	//console.log ("onDesktopIconClick ("+uuid+")");

    let icons=this.props.iconManager.getIcons ();

    for (let i=0;i<icons.length;i++) {
      let icon=icons [i];
      if (icon.uuid==uuid) {
        if (icon.type=="knossys:application"){
          if(this.props.launch) {
            this.props.launch(icon.id);
          }
        }

        if (icon.type=="knossys:url") {
          if (this.launchInternal (icon)==false) {
            if (this.props.launch) {
              this.props.launch (icon);
            }
          }
        }

      	return;
      }
    }
  }

  /**
   * @param {any} e
   */
  onLayout (e) {
  	console.log ("onLayout ()");

    let separation=this.state.iconDim;

    if (separation<64) {
      separation=64;
    }

    let icons=this.props.iconManager.getIcons ();

    let updatedIconList=this.dataTools.deepCopy (icons);

    if (this.state.layout==Desktop.LAYOUT_HORIZONTAL) {
      let index=0;
      let xIndex=marginX;
      let yIndex=marginY;
     
      for (let j=0;j<updatedIconList.length;j++) {
        var xPos=xIndex;
        var yPos=yIndex;
  	      
        index++;
  	      
        if (index>10) {
          index=0;
          xIndex=marginX;
          yIndex+=(separation+paddingY);
        } else {
          xIndex+=(separation+paddingX);
        }

        updatedIconList [j].x=xPos;
        updatedIconList [j].y=yPos;
      }
    }

    if (this.state.layout==Desktop.LAYOUT_VERTICAL) {
      let index=0;
      let xIndex=marginX;
      let yIndex=marginY;
     
      for (let j=0;j<updatedIconList.length;j++) {
        var xPos=xIndex;
        var yPos=yIndex;
          
        index++;
          
        if (index>10) {
          index=0;
          yIndex=marginY;
          xIndex+=(separation+paddingX);
        } else {
          yIndex+=(separation+paddingY);
        }

        updatedIconList [j].x=xPos;
        updatedIconList [j].y=yPos;
      }
    }

    //this.saveState (updatedIconList);

    if (this.props.iconManager) {
      this.props.iconManager.setIcons(updatedIconList);
    } else {

    }

    /*
    this.setState ({icons: updatedIconList}, (e) => {
      this.saveState ();
    });
    */
  }

  /**
   *
   */
  onIconSizeChange = (value) => {
    this.setState({
      iconDim: value
    },(e) => {
      if (this.state.autoLayout==true) {
      	this.onLayout (null);
      }
    });
  };

  /**
   *
   */
  onAutolayoutChange = (event,layout) => {
  	console.log ("onAutolayoutChange ()");

    this.setState({
      autoLayout: true,
      layout: layout
    },(e) => {
      this.sessionStorage.setIntegerValue ("direction",this.state.layout)
      this.onLayout (null);
    });
  }

  /**
   *
   */
  onSnapChange = (event) => {
  	console.log ("onSnapChange ()");

    let that=this;

    this.setState({
      snap: event.target.checked
    },() => {
      if (that.state.snap==true) {
        that.onLayout ();
      }
    });
  }  

  /**
   *
   */
  onShowGrid (e) {
    console.log ("onShowGrid ()");

    this.setState({
      showGrid: e.target.checked
    });       
  }

  /**
   * 
   */
  onDebug (e) {
    let icons=this.props.iconManager.getIcons ();
    console.log (icons);
  }

  /**
   * 
   */
  createDryDockPanel () {
    return (<div className="drydockpanel">
      <KButton onClick={(e) => this.onAutolayoutChange(e,this.state.layout)} style={{width: "100%"}}>Layout</KButton>
      <KButton onClick={(e) => this.onDebug(e)} style={{width: "100%"}}>Debug</KButton>

      <div className="drydockbox">
        <p>Snap to grid</p>
        <input type="checkbox" checked={this.state.snap} onChange={this.onSnapChange} />
      </div>

      <div className="drydockbox">
        <p>Arrange</p>
        <KButton classes="desktop_button_icon" onClick={(e) => this.onAutolayoutChange(e,Desktop.LAYOUT_HORIZONTAL)}><RiArrowLeftRightLine /></KButton>            
        <KButton classes="desktop_button_icon" onClick={(e) => this.onAutolayoutChange(e,Desktop.LAYOUT_VERTICAL)}><RiArrowUpDownFill /></KButton>
      </div>          

      <div className="drydockbox">
        <p>Show Grid</p>
        <input type="checkbox" checked={this.state.showGrid} onChange={(e) => this.onShowGrid(e)} />
      </div>                  

      <div className="drydockbox">
        <p>Icon Size: {this.state.iconDim}px</p>
        <div className="drydockconstrictor">
          <Slider min={32} max={128} defaultValue={32} value={this.state.iconDim} onChange={this.onIconSizeChange} />
        </div>
      </div>
    </div>);
  }

  /**
   * 
   */  
  render() {
    let grid;
    let status;
    let drydockpanel;    
    let activeicons = [];

    if (this.state.showGrid==true) {
      grid=this.windowTools.generateGrid();
    }

    status=<div className="mousestatus">{this.state.mouseX + ", " + this.state.mouseY}</div>;
    drydockpanel=this.createDryDockPanel ();
       
    let icons=this.props.iconManager.getIcons ();

    for (let i=0;i<icons.length;i++) {
      let icon=icons [i];
      if (icon.visible==true) {
        let face=null;
        if (typeof icon.face !== 'undefined') {
          face=this.props.faces[icon.face];
        }
        activeicons.push (<DesktopIcon key={"icon-"+i} icon={icon} face={face} dim={this.state.iconDim} onDesktopIconClick={this.onDesktopIconClick} onMouseDown={this.onMouseDownIcon} />);
      }
    }
   
    return (
      <div id="desktop" className="knossys-dark desktop">
        {grid}
        {activeicons}
        {status}
        {drydockpanel} 
        {this.props.children}        
      </div>
    );
  }
}

export default Desktop;
