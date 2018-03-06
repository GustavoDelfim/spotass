import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {PointHotSpot, PointHotSpotDelete} from '../Point/Point';
import './List.css';

import HotSpotItem from './Item';

class HotSpotList extends Component {
  render() {
    //
    // ReactDOM.unstable_batchedUpdates(() => {
    //   alert('dsa')
    // });

    const items = this.props.HotSpotCreator.list.map((item, index) => {
      return <HotSpotItem key={index} index={index} label={item.label} />
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
  HotSpotCreator: state.HotSpotReducer
})

const mapDispatchToProps = dispatch =>
bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HotSpotList);
