import React, { Component } from 'react';
import './List.css';

import IconUI from '../../UI/Icon/Icon';
import TooltipUI from '../../UI/Tooltip/Tooltip';

class HotSpotListComponent extends Component {
  render() {
    return (
      <div className="list">
        <h2>List of hotspot</h2>
        <ul>
          <li>
            <div>das</div>
            <div>
              <a href="javascript:;" className="bt" onClick={this.delete}>
                <TooltipUI text="Delete HotSpot">
                  <IconUI action="delete" />
                </TooltipUI>
              </a>
            </div>
          </li>
        </ul>
      </div>
    )
  }

  delete() {
    alert('Delete')
  }
}

export default HotSpotListComponent;
