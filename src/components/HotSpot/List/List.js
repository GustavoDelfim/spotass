import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './List.css';

import HotSpotItem from './Item';

class HotSpotList extends Component {
  render() {

    const items = this.props.HotSpotCreate.list.map((item, index) => {
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
  HotSpotCreate: state.HotSpotReducer
})

const mapDispatchToProps = dispatch =>
bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HotSpotList);
