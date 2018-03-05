import React, { Component } from 'react';
import './Create.css';

import HotSpotList from '../../../components/HotSpot/List/List';
import HotSpotButton from '../../../components/HotSpot/Button';

class ScreenHotSpotList extends Component {
  render() {
    return (
      <div className="hotSpotList">
        <div className="button">
          <HotSpotButton />
        </div>

        <div className="spotList">
          <HotSpotList />
        </div>
      </div>
    )
  }

}

export default ScreenHotSpotList;
