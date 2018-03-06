import React, { Component } from 'react';
import './Icon.css';

class IconUI extends Component {
  render() {
    return (
      <i ref='icon' className={`iconUI ${this.props.action}`}></i>
    )
  }
  componentDidMount() {
    const icons = this.refs.icon

    if(typeof this.props.data != 'undefined') {
      this.props.data.map((value) => {
        let index = Object.keys(value)[0]
        let val = value[index]
        return icons.setAttribute(index, val);
      });
    }

  }
}

export default IconUI;
