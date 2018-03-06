import React, { Component } from 'react';

import HotSpotDelete from './Delete';

class HotSpotItem extends Component {
  render() {
    return (
      <li>
        <div>HotSpot #{this.props.label}</div>
        <div>
          <HotSpotDelete key={this.props.index} index={this.props.index} />
        </div>
      </li>
    )
  }
}

export default HotSpotItem;
