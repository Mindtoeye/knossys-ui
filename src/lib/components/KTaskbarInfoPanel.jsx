import React, { Component } from 'react';

import './css/taskbar.css';

/**
 *
 */
class KTaskbarInfoPanel extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.state={ 
      time: new Date() 
    }; 

    this.update=this.update.bind(this);
  }

  /**
   * 
   */
  componentDidMount() { 
    this.update ();
  }

  /**
   * 
   */
  componentWillUnmount() {
    clearInterval(this.update);
  }  

  /**
   * 
   */
  update () {
   setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000);
  }

  /**
   * 
   */
  render () {
    const { time } = this.state; // retrieve the time from state

    return (<div className="ktaskbar-infopanel">
      {time.toLocaleTimeString()}
    </div>);
  }
}

export default KTaskbarInfoPanel;
