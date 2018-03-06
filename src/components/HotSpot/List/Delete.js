import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeHotSpot } from '../Actions';
import { IconUI, TooltipUI } from '../../UI';

class HotSpotDelete extends Component {
  render() {
    return (
      <a href="javascript:;" className="bt" onClick={(e) => this.delete(this.props.index)} controllher="HotSpot">
        <TooltipUI text="Delete HotSpot">
          <IconUI action="delete danger" data={[{controllher: 'HotSpot'}]} />
        </TooltipUI>
      </a>
    )
  }

  delete(index) {
    this.props.dispatch(removeHotSpot(index))
  }
}

export default connect(null, null)(HotSpotDelete);
