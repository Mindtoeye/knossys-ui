
import React, { Component } from 'react';
import PropTypes from "prop-types";

import './styles/toggle.css';

/**
 * 
 */
class KToggleSwitch extends Component {

  /**
   *
   */
  constructor (props) {
    super(props);

    this.state={

    };

    this.handleKeyPress=this.handleKeyPress.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  /**
   *
   */
  handleKeyPress(e) {
    if (e.keyCode !== 32) {
      return;
    }

    e.preventDefault();

    onChange(!checked);
  }

  /**
   *
   */
  onChange (checked) {
    if (this.props.onChange) {
      this.props.onChange(checked);
    }
  }

  render () {
    let id=this.props.id;
    let name=this.props.name;
    let checked=this.props.checked;
    let disabled=this.props.disabled;
    let optionLabels=this.props.optionLabels;

    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          name={name}
          className="toggle-switch-checkbox"
          id={id}
          checked={checked}
          onChange={(e) => this.onChange(e.target.checked)}
          disabled={disabled} />
        <label
          className="toggle-switch-label"
          tabIndex={disabled ? -1 : 1}
          onKeyDown={(e) => handleKeyPress(e)}
          htmlFor={id}>
            <span
              className={disabled ? "toggle-switch-inner toggle-switch-disabled" : "toggle-switch-inner"}
              data-yes={optionLabels[0]}
              data-no={optionLabels[1]}
              tabIndex={-1} />
            <span
              className={disabled ? "toggle-switch-switch toggle-switch-disabled" : "toggle-switch-switch"}
              tabIndex={-1} />
        </label>
      </div>);
  }
}

// Set optionLabels for rendering.
KToggleSwitch.defaultProps = {
  optionLabels: ["Yes", "No"]
};

KToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool
};

export default KToggleSwitch;
