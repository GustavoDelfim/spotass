import React, { Component } from 'react';

import { IconUI, TooltipUI } from '../../UI';

class HotSpotDelete extends Component {
  render() {
    return (
      <a href="javascript:;" className="bt" onClick={this.delete}>
        <TooltipUI text="Delete HotSpot">
          <IconUI action="delete" />
        </TooltipUI>
      </a>
    )
  }

  delete() {
    alert('Delete')
  }
}

export default HotSpotDelete;
