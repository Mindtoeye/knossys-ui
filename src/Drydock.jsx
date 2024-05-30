import React, { Component } from 'react';

import { RiStackshareLine } from 'react-icons/ri';
import { VscFileSubmodule } from 'react-icons/vsc';
import { MdPermIdentity } from 'react-icons/md';
import { GiPortal } from 'react-icons/gi';

import DataTools from './lib/components/utils/DataTools';
import Desktop from './lib/components/Desktop';
import DesktopIconManager from './lib/components/DesktopIconManager';

//import KnossysInfoPanel from './lib/KnossysInfoPanel';
import KButton from './lib/components/KButton';
import KList from './lib/components/KList';

import { uuidv4 } from './lib/components/utils/uuid';
import WindowConstants from './lib/components/WindowConstants';
import WindowManager from './lib/components/WindowManager';
import WindowTaskManager from './lib/components/WindowTaskManager';
import ApplicationManager from './lib/components/ApplicationManager';
import KTaskbar from './lib/components/KTaskbar';

import '../css/main.css';
import '../css/drydock.css';
import './lib/components/css/desktop.css';

import defaultIcon from '../css/images/app.png';

// Via: https://github.com/shinshin86/random-fruits-name.js
var fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Boysenberrie",
  "Blueberrie",
  "Bing Cherry",
  "Cherrie",
  "Cantaloupe",
  "Crab apple",
  "Clementine",
  "Cucumber",
  "Damson plum",
  "Dinosaur Eggs",
  "Date",
  "Dewberrie",
  "Dragon Fruit",
  "Elderberry",
  "Eggfruit",
  "Evergreen Huckleberry",
  "Entawak",
  "Fig",
  "Farkleberry",
  "Finger Lime",
  "Grapefruit",
  "Grape",
  "Gooseberrie",
  "Guava",
  "Honeydew melon",
  "Hackberry",
  "Honeycrisp Apple",
  "Indian Prune",
  "Indonesian Lime",
  "Imbe",
  "Indian Fig",
  "Jackfruit",
  "Java Apple",
  "Jambolan",
  "Kiwi",
  "Kaffir Lime",
  "Kumquat",
  "Lime",
  "Longan",
  "Lychee",
  "Loquat",
  "Mango",
  "Mandarin Orange",
  "Mulberry",
  "Melon",
  "Nectarine",
  "Navel Orange",
  "Nashi Pear",
  "Olive",
  "Orange",
  "Ogeechee Lime",
  "Oval Kumquat",
  "Papaya",
  "Persimmon",
  "Paw Paw",
  "Prickly Pear",
  "Peach",
  "Pomegranate",
  "Pineapple",
  "Quince",
  "Queen Anne Cherry",
  "Quararibea cordata",
  "Rambutan",
  "Raspberrie",
  "Rose Hip",
  "Star Fruit",
  "Strawberrie",
  "Sugar Baby Watermelon",
  "Tomato",
  "Tangerine",
  "Tamarind",
  "Tart Cherrie",
  "Ugli Fruit",
  "Uniq Fruit",
  "Ugni",
  "Vanilla Bean",
  "Velvet Pink Banana",
  "Voavanga",
  "Watermelon",
  "Wolfberry",
  "White Mulberry",
  "Xigua",
  "Ximenia caffra fruit",
  "Xango Mangosteen Fruit Juice",
  "Yellow Passion Fruit",
  "Yunnan Hackberry",
  "Yangmei",
  "Zig Zag Vine fruit",
  "Zinfandel Grape",
  "Zucchini"
];

/**
 * 
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * 
 */
class DryDock extends Component {

  /**
   *
   */
  constructor(props) {
    super(props);

    let testTimer=-1;
    
    this.dataTools=new DataTools ();

    this.faces=[<RiStackshareLine/>,<VscFileSubmodule/>, <MdPermIdentity />, <GiPortal />];

    this.state={
      trigger: 0,
      showLabels: true,
      showInfo: true,      
      globalSettings: {}      
    };

    this.update = this.update.bind(this);
    this.launch = this.launch.bind(this);
    this.testDisabling = this.testDisabling.bind(this);

    // Desktop Manager

    this.desktopIconManager=new DesktopIconManager ();
    this.desktopIconManager.setUpdateDesktop(this.update);    

    // Window Manager

    this.onKeyDown=this.onKeyDown.bind (this);
    this.updateWindowStack=this.updateWindowStack.bind (this);

    this.appManager=new ApplicationManager ();
    this.appManager.setOnUpdate (this.updateWindowStack);    
  }

  /**
   *
   */
  componentDidMount () {
    console.log ("componentDidMount ()");

    this.desktopIconManager.addApp ("Pipeliner","pipeliner","knossys:application",0);
    this.desktopIconManager.addApp ("File Manager","filemanager","knossys:application",1);
    this.desktopIconManager.addApp ("Credentials","credentials","knossys:application",2);
    this.desktopIconManager.addApp ("Data Portal","dataportal","knossys:application",3);

    //this.testTimer=setInterval(this.testDisabling,10000);

    this.appManager.addApplication ({
      title: "Knossys Task Manager",
      type: WindowConstants.WINDOW_DEFAULT,
      width: 250,
      height: 300,
      isSystem: true,
      content: <WindowTaskManager appManager={this.appManager} />
    });

    this.updateWindowStack ();    
  }

  /**
   *
   */
  componentWillUnmount () {
    console.log ("componentWillUnmount ()");
    clearInterval(this.testTimer);
  }  


  /**
   * This will go into the app manager
   */
  updateWindowStack () {
    this.setState(this.state);
  }  

  /**
   * 
   */
  getRandomFruit () {
    return (fruits [getRandomInt (fruits.length-1)]);
  }

  /**
   * 
   */
  testDisabling () {
    //console.log ("testDisabling ()");

    let testIcon=null;

    testIcon=this.desktopIconManager.getIcon ("dataportal");
    if (testIcon) {
      if (testIcon.disabled==false) {
        testIcon.disabled=true;
        //this.desktopIconManager.disableIcon ("dataportal",true);
      } else {
        testIcon.disabled=false;
        //this.desktopIconManager.disableIcon ("dataportal",false);
      }
    } else {
      console.log ("Error target icon not found");
    }

    testIcon=this.desktopIconManager.getIcon ("filemanager");
    if (testIcon) {
      if (testIcon.visible==false) {
        testIcon.visible=true;
      } else {
        testIcon.visible=false;
      }
    } else {
      console.log ("Error target icon not found");
    }

    this.update();      
  }

  /**
   * change this value to trigger a state update in the desktop. Haven't made a decision yet on
   * which system/library paradigm to use to accomplish this in a cleaner way
   */
  update () {
    let trgr=this.state.trigger;
    this.setState ({
      trigger: trgr++
    });
  }

  /**
   *
   */
  launch (anApp) {
    console.log ("launch ("+anApp+")");

  }

  /**
   *
   */
  onKeyDown (e) {
    console.log ("onKeyDown ("+e.keyCode+")");

    // 'd'
    if(e.keyCode==68) {
      console.log ("Showing modal dialog ...");

      this.appManager.addApplication ({
        title: "Modal (" + this.getRandomFruit () + ") Dialog",
        type: WindowConstants.WINDOW_DIALOG,
        modal: true,
        centered: true,
        width: 320,
        height: 200
      });
    }

    // 's'
    if(e.keyCode==83) {
      console.log ("Showing modeless dialog ...");

      this.appManager.addApplication ({
        title: "Modeless (" + this.getRandomFruit () + ") Dialog",
        type: WindowConstants.WINDOW_DIALOG,
        modal: false,
        centered: true,
        resizable: true,
        width: 320,
        height: 200
      });
    }

    // 't'
    if(e.keyCode==84) {
      console.log ("Showing tool window ...");

      this.appManager.addApplication ({
        title: "Tool (" + this.getRandomFruit () + ") Window",
        type: WindowConstants.WINDOW_TOOLWINDOW,
        width: 50,
        height: 300
      });
    }    

    // 'w'
    if(e.keyCode==87) {
      console.log ("Showing generic window ...");

      this.appManager.addApplication ({
        title: "Generic (" + this.getRandomFruit () + ") Window",
        type: WindowConstants.WINDOW_DEFAULT,
        width: 320,
        height: 200
      });
    }        

    // 'a'
    if(e.keyCode==65) {
      console.log ("Showing application window ...");

      this.appManager.addApplication ({
        title: "Application (" + this.getRandomFruit () + ")",
        type: WindowConstants.WINDOW_APPLICATION,
        width: 400,
        height: 300
      });      
    }

    // 'b'
    if(e.keyCode==66) {
      console.log ("Showing basic application window ...");

      this.appManager.addApplication ({
        title: "Basic  (" + this.getRandomFruit () + ") Application",
        type: WindowConstants.WINDOW_BASICAPPLICATION,
        width: 400,
        height: 300
      });      
    }    

    // 'c'
    if(e.keyCode==67) {
      console.log ("Showing confirm dialog ...");
    }        

    // 'l'
    if(e.keyCode==76) {
      console.log ("Listing windows ...");

      this.appManager.listWindows();
    }    

    // 'l'
    if(e.keyCode==76) {
      console.log ("Toggling taskbar labels");

      let toggle=this.state.showLabels;
      this.setState ({
        showLabels: !toggle
      });
    }

    // 'i'
    if(e.keyCode==80) {
      console.log ("Toggling taskbar info panel");
      let toggle=this.state.showInfo;
      this.setState ({
        showInfo: !toggle
      });  
    }            

    this.updateWindowStack ();
  }

  /**
   *
   */
  render() {
    return (
     <WindowManager 
        onKeyDown={this.onKeyDown}
        settings={this.state.globalSettings}
        appManager={this.appManager}>
        <Desktop 
          trigger={this.state.trigger} // change this value to trigger a state update in the desktop
          iconManager={this.desktopIconManager} 
          faces={this.faces} 
          snap={true} 
          launch={this.launch} />
        <KTaskbar 
          showlabels={this.state.showLabels}
          showinfo={this.state.showInfo}>
        </KTaskbar>          
      </WindowManager>);
  }
}

export default DryDock;
