import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HotSpotCreate from './Create';
import { toggleButton } from './Actions';
import { ButtonUI } from '../UI';

class HotSpotButton extends Component {
  render() {
    return (
      <ButtonUI label={this.props.HotSpotCreate.labelButton} bg={this.props.HotSpotCreate.bgButton} handleClick={(e) => this.createHotSpot(e)} />
    )
  }

  createHotSpot() {
    let newState = {}

    if(this.props.HotSpotCreate.creating) {
      newState.labelButton = 'Create HotSpot';
      newState.bgButton    = '';
    } else {
      newState.labelButton = 'Stop HotSpot';
      newState.bgButton    = 'danger';
    }

    newState.creating = !this.props.HotSpotCreate.creating
    this.props.toggleButton(newState)
  }

}

// const mapStateToProps = state =>  state.HotSpotReducer
const mapStateToProps = state =>  ({
  HotSpotCreate: state.HotSpotReducer
})

const mapDispatchToProps = dispatch =>
bindActionCreators({
  toggleButton
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HotSpotButton);
