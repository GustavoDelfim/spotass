import React, { Component } from 'react';
import CircleHotSpot from './Circle';
import './Point.css'

const PointHotSpot = (item) => {
  // let circle = React.cloneElement(<CircleHotSpot />)
  // console.log( React.isValidElement(circle) )

  item.target.appendChild('<p>das</p>');
}

export default PointHotSpot;
