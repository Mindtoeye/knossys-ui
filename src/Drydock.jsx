import React, { Component } from 'react';

import { FaFile, FaFolder, FaFolderOpen } from 'react-icons/fa';
import { MdAddLocation, MdUnfoldMore, MdUnfoldLess } from 'react-icons/md';
import { RiStackshareLine } from 'react-icons/ri';
import { GrUndo, GrRedo } from 'react-icons/gr';
import { AiOutlineFolderOpen, AiOutlineFolder} from 'react-icons/ai';

import KDriver from './lib/components/KDriver';
import KnossysInfoPanel from './lib/components/KnossysInfoPanel';
import KButton from './lib/components/KButton';
import KTextInput from './lib/components/KTextInput';
import KList from './lib/components/KList';
import KCheckList from './lib/components/KCheckList';
import KRadioList from './lib/components/KRadioList';
import KHorizontalSeparator from './lib/components/KHorizontalSeparator';
import KSelect from './lib/components/KSelect';
import KToggleSwitch from './lib/components/KToggleSwitch';
import KAccordion from './lib/components/KAccordion';
import KTabs from './lib/components/KTabs';
import KTree from './lib/components/KTree';
import KToolbar from './lib/components/KToolbar';
import KToolbarItem from './lib/components/KToolbarItem';
import KWaitSpinner from './lib/components/KWaitSpinner';
import KMultiRangeSlider from './lib/components/KMultiRangeSlider';
import KBasicEditor from './lib/components/KBasicEditor';
import KSessionStorage from './lib/components/KSessionStorage';

import './lib/components/styles/misc.css';
import './lib/components/styles/accordion.css';
import './lib/components/styles/driver.css';
import './Drydock.css';

const lorem1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare aenean euismod elementum. Nullam non nisi est sit amet. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Vitae semper quis lectus nulla at volutpat diam ut. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Facilisis magna etiam tempor orci eu lobortis. Est pellentesque elit ullamcorper dignissim cras. Morbi tincidunt augue interdum velit euismod. Egestas congue quisque egestas diam. Justo laoreet sit amet cursus sit amet dictum. A arcu cursus vitae congue mauris rhoncus. Morbi tincidunt ornare massa eget egestas. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Consequat id porta nibh venenatis cras. Mi eget mauris pharetra et ultrices. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Sed felis eget velit aliquet sagittis. In fermentum et sollicitudin ac orci phasellus. Est ultricies integer quis auctor elit sed vulputate mi sit.";
const lorem2="Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Orci ac auctor augue mauris augue neque gravida in fermentum. Ut consequat semper viverra nam libero. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Ac felis donec et odio pellentesque. In tellus integer feugiat scelerisque varius morbi. Pellentesque sit amet porttitor eget dolor. Cursus sit amet dictum sit amet justo. Et malesuada fames ac turpis egestas sed tempus. Nunc aliquet bibendum enim facilisis gravida neque. Dictum fusce ut placerat orci nulla pellentesque dignissim. Tortor condimentum lacinia quis vel eros donec.";
const lorem3="Tortor at auctor urna nunc id cursus. Placerat duis ultricies lacus sed turpis. Posuere lorem ipsum dolor sit. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Sem fringilla ut morbi tincidunt augue. Sit amet nisl purus in mollis. Libero justo laoreet sit amet cursus sit. Ac orci phasellus egestas tellus rutrum. Eu nisl nunc mi ipsum faucibus vitae. Enim tortor at auctor urna. Sollicitudin tempor id eu nisl nunc mi. Id aliquet risus feugiat in ante. Malesuada nunc vel risus commodo. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Eu augue ut lectus arcu bibendum. Condimentum id venenatis a condimentum vitae. Id neque aliquam vestibulum morbi blandit. Tristique risus nec feugiat in fermentum posuere urna.";

const listRegular = [
  {
    name: "Banana",
    checked: true
  },
  {
    name: "Apple",
    checked: false
  },
  {
    name: "Orange",
    checked: true
  },
  {
    name: "Tomato",
    checked: false
  }
];

const listRadio = [
  {
    name: "Banana",
    checked: true
  },
  {
    name: "Apple",
    checked: false
  },
  {
    name: "Orange",
    checked: false
  },
  {
    name: "Tomato",
    checked: false
  }
];

const accordionData = [
  {
    id: 0,
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
  },
  {
    id: 1,
    title: 'Section 2',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`
  },
  {
    id: 2,
    title: 'Section 3',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`
  }
];

const treeData = {
  '/root': {
    path: '/root',
    type: 'folder',
    isRoot: true,
    children: ['/root/david', '/root/jslancer'],
  },
  '/root/david': {
    path: '/root/david',
    type: 'folder',
    children: ['/root/david/file1.txt','/root/david/file2.txt','/root/david/file3.txt'],
  },
  '/root/david/file1.txt': {
    path: '/root/david/file1.txt',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/root/david/file2.txt': {
    path: '/root/david/file2.txt',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/root/david/file3.txt': {
    path: '/root/david/file3.txt',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/root/jslancer': {
    path: '/root/jslancer',
    type: 'folder',
    children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
  },
  '/root/jslancer/projects': {
    path: '/root/jslancer/projects',
    type: 'folder',
    children: ['/root/jslancer/projects/treeview'],
  },
  '/root/jslancer/projects/treeview': {
    path: '/root/jslancer/projects/treeview',
    type: 'folder',
    children: [],
  },
  '/root/jslancer/vblogs': {
    path: '/root/jslancer/vblogs',
    type: 'folder',
    children: [],
  },
};

/**
 * 
 */
class Drydock extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.sessionStorage=new KSessionStorage ("kuicore");
    this.sessionStorage.setValue ("A",lorem1);
    this.sessionStorage.setValue ("B",lorem2);
    this.sessionStorage.setValue ("C",lorem3);

    //this.sessionStorage.setJSONObject ("test",accordionData);
    //this.sessionStorage.getJSONObject ("test");

    this.state = {
      toggled: false,
      spinnerType: KWaitSpinner.SPINNER_STYLE_01,
      tinytext: "Tiny",
      regulartext: "Regular",
      mediumtext: "Medium",
      largetext: "Large",
      hexvalue: "0x04",
      floatvalue: "0.1",
      intvalue: "0",
      binaryvalue: "0",
      storageA: this.sessionStorage.getValue ("A","Unable to retrieve storage with key A"),
      storageB: this.sessionStorage.getValue ("B","Unable to retrieve storage with key A"),
      storageC: this.sessionStorage.getValue ("C","Unable to retrieve storage with key A")
    };

    this.handleChangeTiny=this.handleChangeTiny.bind(this);
    this.handleChangeRegular=this.handleChangeRegular.bind(this);
    this.handleChangeMedium=this.handleChangeMedium.bind(this);
    this.handleChangeLarge=this.handleChangeLarge.bind(this);

    this.checklistChecked=this.checklistChecked.bind(this);
    this.radiolistChecked=this.radiolistChecked.bind(this);    
    this.onToolbarItemClick=this.onToolbarItemClick.bind(this);
    this.onToggleChange=this.onToggleChange.bind(this);
    this.onTreebarItemClick=this.onTreebarItemClick.bind(this);
    this.onTreeNodeSelect=this.onTreeNodeSelect.bind(this);

    this.onAlert=this.onAlert.bind(this);
    this.onConfirm=this.onConfirm.bind(this);
    this.onPrompt=this.onPrompt.bind(this);

    this.handleChangeHex=this.handleChangeHex.bind(this);
    this.handleChangeInteger=this.handleChangeInteger.bind(this);
    this.handleChangeFloat=this.handleChangeFloat.bind(this);
    this.handleChangeBinary=this.handleChangeBinary.bind(this);

    this.onEditChange=this.onEditChange.bind(this);
  }

  /**
   *
   */
  handleChangeTiny (aValue) {
    this.setState({
      tinytext: aValue
    });
  }

  /**
   *
   */
  handleChangeRegular (aValue) {
    this.setState({
      regulartext: aValue
    });
  }

  /**
   *
   */
  handleChangeMedium (aValue) {
    this.setState({
      mediumtext: aValue
    });
  }

  /**
   *
   */
  handleChangeHex (aValue) {
    this.setState({
      hexvalue: aValue
    });
  }

  /**
   *
   */
  handleChangeInteger (aValue) {
    this.setState({
      intvalue: aValue
    });
  }

  /**
   *
   */
  handleChangeFloat (aValue) {
    this.setState({
      floatvalue: aValue
    });
  }    

  /**
   *
   */
  handleChangeBinary (aValue) {
    this.setState({
      binaryvalue: aValue
    });
  }      

  /**
   *
   */
  handleChangeLarge (aValue) {
    this.setState({
      largetext: aValue
    });
  }

  /**
   *
   */
  onAlert () {
    console.log ("onAlert ()");
    window.knossys.alert ("Generic alert replacement");
  }

  /**
   *
   */
  onConfirm () {
    window.knossys.confirm ("Generic confirm replacement");
  }

  /**
   *
   */
  onPrompt () {
    window.knossys.prompt ("Please enter your name", "Harry Potter");
  }  

  /**
   *
   */
  onClick (e) {
    console.log ("onClick ()");
  }

  /**
   *
   */
  onToggleChange(aValue) {
    this.setState ({
      toggled: aValue
    });
  }

  /**
   *
   */
  checklistChecked (aList) {
    console.log ("checklistChecked ()");
    //console.log (JSON.stringify (aList, null, 2));

  }

  /**
   *
   */
  radiolistChecked (aList) {
    console.log ("radiolistChecked ()");
    //console.log (JSON.stringify (aList, null, 2));

  }  

  /**
   *
   */
  onToolbarItemClick (anItem) {
    console.log ("onToolbarItemClick ()");
    console.log (anItem);
  }

  /**
   *
   */
  onTreebarItemClick (anItem) {
    console.log ("onTreebarItemClick ()");
    console.log (anItem);

    if (anItem=="foldin") {

    }

    if (anItem=="foldopen") {
      
    }    
  }

  /**
   *
   */
  onTreeNodeSelect (anItem) {
    console.log ("onTreeNodeSelect ()");
    console.log (anItem);
  }

  /**
   *
   */
  changeSpinner (e) {
    let currentType=this.state.spinnerType;
 
    currentType++;

    if (currentType>KWaitSpinner.SPINNER_STYLE_10) {
      currentType=KWaitSpinner.SPINNER_STYLE_01;
    }

    this.setState ({
      spinnerType: currentType
    });
  }

  /**
   *
   */
  onEditChange (aTextValue) {
    //console.log ("onEditChange ()");
    //console.log (aTextValue);
  }

  /**
   *
   */
  render () {
    return (
      <KDriver>

       <div className="klabel" style={{position: "absolute", top: "8px", left:"8px", fontSize: "15pt"}}>Built-in Component Palette</div>

       <KnossysInfoPanel label="Buttons" style={{left: "50px", top: "50px"}}>
          <KButton size={KButton.TINY} onClick={this.onClick} style={{margin: "2px"}}>
          Tiny
          </KButton>

          <br/>

          <KButton size={KButton.REGULAR} onClick={this.onClick} style={{margin: "2px"}}>
          Regular
          </KButton>

          <br/>

          <KButton size={KButton.MEDIUM} onClick={this.onClick} style={{margin: "2px"}}>
          Medium
          </KButton>

          <br/>

          <KButton size={KButton.LARGE} onClick={this.onClick} style={{margin: "2px"}}>
          Large
          </KButton>
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Text Input" style={{left: "250px", top: "50px", width: "200px", height: "350px"}}>
          <KTextInput size={KTextInput.TINY} style={{width: "100%"}} value={this.state.tinytext} handleChange={this.handleChangeTiny}></KTextInput>

          <br/>

          <KTextInput size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.regulartext} handleChange={this.handleChangeRegular}></KTextInput>

          <br/>

          <KTextInput size={KTextInput.MEDIUM} style={{width: "100%"}} value={this.state.mediumtext} handleChange={this.handleChangeMedium}></KTextInput>

          <br/>

          <KTextInput size={KTextInput.LARGE} style={{width: "100%"}} value={this.state.largetext} handleChange={this.handleChangeLarge}></KTextInput>

          <div className="klabel">Hexadecimal String:</div>

          <KTextInput type={KTextInput.TYPE_HEX} size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.hexvalue} handleChange={this.handleChangeHex}></KTextInput>

          <br/>
          <div className="klabel">Integer String:</div>

          <KTextInput type={KTextInput.TYPE_ALPHANUMERIC} size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.intvalue} handleChange={this.handleChangeInteger}></KTextInput>          

          <br/>
          <div className="klabel">Float String:</div>

          <KTextInput type={KTextInput.TYPE_ALPHAFLOAT} size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.floatvalue} handleChange={this.handleChangeFloat}></KTextInput>

          <br/>
          <div className="klabel">Binary String:</div>

          <KTextInput type={KTextInput.TYPE_BINARY} size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.binaryvalue} handleChange={this.handleChangeBinary}></KTextInput>

       </KnossysInfoPanel>

       <KnossysInfoPanel label="Lists" style={{left: "50px", top: "243px", height: "268px"}}>

        <KList list={["Banana","Apple","Orange","Tomato"]} />
        
        <KHorizontalSeparator />
        
        <KCheckList list={listRegular} checklistChecked={(list) => this.checklistChecked (list)} />

        <KHorizontalSeparator />

        <KRadioList list={listRadio} radiolistChecked={(list) => this.radiolistChecked (list)} />

       </KnossysInfoPanel>

       <KnossysInfoPanel label="Toolbars" style={{left: "50px", top: "534px", height: "260px"}}>
        <KToolbar>
          <KToolbarItem onClick={this.onItemToggle}><FaFile /></KToolbarItem>
          <KToolbarItem onClick={this.onItemToggle}><FaFolder /></KToolbarItem>
          <KToolbarItem onClick={this.onItemToggle}><FaFolderOpen /></KToolbarItem>
          <KToolbarItem onClick={this.onItemToggle}><MdAddLocation /></KToolbarItem>
        </KToolbar>

        <br/>

        <div style={{display: "flex", flexDirection: "row"}}>
          <KToolbar direction={KToolbar.DIRECTION_VERTICAL} label="Regular Vertical" style={{margin: "4px", padding: "0px"}}>
            <KToolbarItem onClick={this.onItemToggle}><RiStackshareLine /></KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle}><GrUndo /></KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle}><GrRedo /></KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle}><MdAddLocation /></KToolbarItem>
          </KToolbar>

          <KToolbar direction={KToolbar.DIRECTION_VERTICAL} label="Toggles Vertical" style={{margin: "4px", padding: "0px"}}>
            <KToolbarItem onClick={this.onItemToggle} toggle={true}>A</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle} toggle={true}>B</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle} toggle={true}>C</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle} toggle={true} selected={true}>D</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle} toggle={true}>E</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle} toggle={true}>F</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle} toggle={true}>G</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle} toggle={true}>H</KToolbarItem>            
          </KToolbar>

          <KToolbar direction={KToolbar.DIRECTION_VERTICAL} style={{margin: "4px", padding: "0px"}}>
            <KToolbarItem onClick={this.onItemToggle}>1</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle}>2</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle}>3</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle}>4</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle}>5</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle}>6</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle}>7</KToolbarItem>
            <KToolbarItem onClick={this.onItemToggle}>8</KToolbarItem>            
          </KToolbar>          
        </div>

       </KnossysInfoPanel>       

       <KnossysInfoPanel label="Dropdowns" style={{left: "250px", top: "422px", width: "200px", height: "181px"}}>
         <KSelect size={KSelect.TINY} style={{width: "100%"}} options={["Banana","Apple","Orange","Tomato"]} />
         <KSelect size={KSelect.REGULAR} style={{width: "100%"}} options={["Banana","Apple","Orange","Tomato"]} />
         <KSelect size={KSelect.MEDIUM} style={{width: "100%"}} options={["Banana","Apple","Orange","Tomato"]} />
         <KSelect size={KSelect.LARGE} style={{width: "100%"}} options={["Banana","Apple","Orange","Tomato"]} />
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Toggles" style={{left: "250px", top: "624px", width: "200px", height: "142px"}}>
         <KToggleSwitch id="default" checked={this.state.toggled} onChange={this.onToggleChange}/>
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Global/Environmnent" style={{left: "476px", top: "427px", width: "225px", height: "57px"}}>
          <KButton size={KButton.REGULAR} onClick={this.onAlert} style={{margin: "2px"}}>
          alert
          </KButton>
          <KButton size={KButton.REGULAR} onClick={this.onConfirm} style={{margin: "2px"}}>
          confirm
          </KButton>
          <KButton size={KButton.REGULAR} onClick={this.onPrompt} style={{margin: "2px"}}>
          prompt
          </KButton>                       
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Wait Spinners" style={{left: "476px", top: "505px", width: "227px", height: "267px", display: "flex", flexDirection: "column"}}>
          <div style={{position: "relative", border: "0px solid yellow", flex: "1"}}>            
            <KWaitSpinner type={this.state.spinnerType} style={{top: "5px", width: "32px", height: "32px"}} onClick={(e) => this.changeSpinner(e)}/>
            <KWaitSpinner type={this.state.spinnerType} style={{top: "47px", width: "50px", height: "50px"}} onClick={(e) => this.changeSpinner(e)}/>
            <KWaitSpinner type={this.state.spinnerType} style={{top: "105px", width: "75px", height: "75px"}} onClick={(e) => this.changeSpinner(e)}/>            
            <div className="kreference"><a target="_blank" href="https://codepen.io/nikhil8krishnan/pen/rVoXJa">Original by Nikhil Krishnan</a></div>
          </div>
       </KnossysInfoPanel>       

       <KnossysInfoPanel label="Accordion" style={{left: "475px", top: "50px", width: "226px", height: '350px', overflowY: 'auto'}}>
        <KAccordion data={accordionData} />
       </KnossysInfoPanel>          

       <KnossysInfoPanel label="Tabs" style={{left: "725px", top: "51px", width: "226px", height: '350px', display: 'flex', flexDirection: 'column'}}>
        <KTabs>
          <div label="Key: A">
            {this.state.storageA}
          </div>
          <div label="Key: B">
            {this.state.storageB}
          </div>
          <div label="Key: C">
            {this.state.storageC}
          </div>
        </KTabs>        
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Tree View" style={{left: "725px", top: "422px", width: "226px", height: '350px'}}>
        <KToolbar>        
          <KToolbarItem onClick={(e) => this.onTreebarItemClick (e,"foldopen")}><AiOutlineFolderOpen /></KToolbarItem>
          <KToolbarItem onClick={(e) => this.onTreebarItemClick (e,"foldin")}><AiOutlineFolder /></KToolbarItem>
        </KToolbar>
         <KTree onSelect={this.onTreeNodeSelect} data={treeData} />
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Sliders" style={{left: "975px", top: "51px", width: "226px", height: '350px'}}>
          <KMultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          />
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Mini Text Editor" style={{left: "975px", top: "423px", width: "226px", height: '350px', display: 'flex', flexDirection: 'column'}}>
         <KBasicEditor onEditChange={this.onEditChange}/> 
       </KnossysInfoPanel>

       <KnossysInfoPanel classes="kbottom-right" />
      </KDriver>
    );
  }
}

export default Drydock;
