import React, { Component } from 'react';
import './List.css';

import HotSpotItem from './Item';

class HotSpotListComponent extends Component {
  render() {
    return (
      <div className="list">
        <h2>List of hotspot</h2>
        <ul>
          <HotSpotItem />
        </ul>
      </div>
    )
  }
}

export default HotSpotListComponent;
