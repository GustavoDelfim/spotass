import React, { Component } from 'react';
import './Tooltip.css';

class TootipUI extends Component {
  render() {
    return (
      <div className="TooltipUI">
        <span className="text">{this.props.text}</span>
        {this.props.children}
      </div>
    )
  }
}

export default TootipUI;
