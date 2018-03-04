import React, { Component } from 'react';
import './Create.css';

import HotSpotList from '../../../components/HotSpot/List/List';
import HotSpotCreate from '../../../components/HotSpot/Create';

class ScreenHotSpotList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="hotSpotList">
        <div className="button">
          <HotSpotCreate />
        </div>

        <div className="spotList">
          <HotSpotList />
        </div>
      </div>
    )
  }

}

export default ScreenHotSpotList;
