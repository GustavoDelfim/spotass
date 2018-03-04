import React, { Component } from 'react';
import './Root.css';

// Base Application
import ScreenBaseHeader from './Base/Header/Header';

// Screens
import ScreenHotSpotList from './HotSpot/Create/Create';


class ScreensRoot extends Component {
  render() {
    return (
      <div className="root">
        <ScreenBaseHeader />

        <div className="pages">
          <ScreenHotSpotList />
        </div>

      </div>
    );
  }
}

export default ScreensRoot;
