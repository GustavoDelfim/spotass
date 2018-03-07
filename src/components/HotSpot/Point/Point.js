import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Point.css';

class PointHotSpot extends Component {
  componentDidMount() {
    let point = ReactDOM.findDOMNode(this)

    point.style.top = this.props.item.pageTop+'px'
    point.style.left = this.props.item.pageLeft+'px'
  }
  render() {
    return (
      <span className="pointHotSpot">
        <i></i>
      </span>
    )
  }
}

export default PointHotSpot;
