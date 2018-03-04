import React, { Component } from 'react';
import './Icon.css';

class IconUI extends Component {
  render() {
    return (
      <i className={`iconUI ${this.props.action}`}></i>
    )
  }
}

export default IconUI;
