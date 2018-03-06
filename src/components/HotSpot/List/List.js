import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PointHotSpot from '../Point/Point';
import './List.css';

import HotSpotItem from './Item';

class HotSpotList extends Component {
  render() {
    const items = this.props.HotSpotList.map((item, index) => {
      PointHotSpot(item)
      return <HotSpotItem key={index} index={index} />
    });

    return (
      <div className="list">
        <h2>List of hotspot</h2>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  HotSpotList: state.HotSpotReducer.list
})

const mapDispatchToProps = dispatch =>
bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HotSpotList);
