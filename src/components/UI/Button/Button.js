import React, { Component } from 'react';
import './Button.css';

class ButtonUI extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button
        className="buttonUI"
        onClick={this.props.handleClick}> {this.props.label} </button>
    )
  }
}

export default ButtonUI;
