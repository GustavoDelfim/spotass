import React, { Component } from 'react';
import './Button.css';

class ButtonUI extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button
        ref="button"
        type="button"
        className={`buttonUI ${this.props.bg}`}
        onClick={this.props.handleClick} > {this.props.label} </button>
    )
  }
  componentDidMount() {
    const button = this.refs.button
    if(typeof this.props.data != 'undefined') {  
      this.props.data.map((value) => {
        let index = Object.keys(value)[0]
        let val = value[index]
        return button.setAttribute(index, val);
      });
    }
  }
}

export default ButtonUI;
