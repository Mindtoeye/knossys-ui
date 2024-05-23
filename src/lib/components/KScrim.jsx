import React from "react";

import './styles/scrim.css';

/**
 *
 */
export class KScrim extends React.Component {

  /**
   *
   */  
  render() {
    if (this.props.visible==true) {
      return (<div className="knossys-scrim knossys-scrim-visible"></div>);
    }

    return (<div className="knossys-scrim"></div>);
  }
}

export default KScrim;
