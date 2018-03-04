import React, { Component } from 'react';

import HotSpotDelete from './Delete';

class HotSpotItem extends Component {
  render() {
    return (
      <li>
        <div>#1 Nome</div>
        <div>
          <HotSpotDelete />
        </div>
      </li>
    )
  }
}

export default HotSpotItem;
