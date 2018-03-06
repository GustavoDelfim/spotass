import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CircleHotSpot from './Circle';
import './Point.css'

const PointHotSpot = (item) => {

  const element = ReactDOM.findDOMNode(item.target);
  // console.log(element);
  // button = React.createElement(button);

  // let circle = React.cloneElement(<CircleHotSpot />)

  // let circle = document.createElement('span')
  // circle.className = 'pointHotSpot'
  // let text = document.createTextNode('A')
  // circle.appendChild(text)
  //
  //
  // item.target.appendChild(circle);
}

const PointHotSpotDelete = () => {
  let circles = document.getElementsByClassName('pointHotSpot')
}

export {
  PointHotSpot,
  PointHotSpotDelete
};
