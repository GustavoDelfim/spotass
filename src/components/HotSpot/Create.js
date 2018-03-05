import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleCreate } from './Actions';

const style = {
  container: {
    display: 'flex'
  },
  hover: {
    width: '200px',
    height: '200px',
    border: '#ff3b3b solid 2px',
    background: 'rgba(255, 59, 59, 0.1)',
    display: 'none',
    position: 'absolute',
    top: 0,
    left: 0
  }
}

class HotSpotCreate extends Component {
  constructor(props) {
    super(props)

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }
  render() {
    return (
      <div ref="hotSpot" style={style.container} onClick={(e) => this.createPoint(e)}>
        <span style={style.hover}></span>
        {this.props.children}
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.HotSpotCreate.creating !== nextProps.HotSpotCreate.creating) {
      if(nextProps.HotSpotCreate.creating) {
        this.startHover()
      } else {
        this.stopHover()
      }
    }
  }

  createPoint(e) {
    if (!this.props.HotSpotCreate.creating) return false
    console.log(e.nativeEvent.offsetX, e.screenX)
  }

  startHover() {
    console.log( style.hover.display )
    // style.hover.display = 'block'

    let hotSpot = this.refs.hotSpot
    hotSpot.addEventListener("mouseover", (e) => this.mouseOver(e))
    hotSpot.addEventListener("mouseout", (e) => this.mouseOut(e))
  }
  stopHover() {
    let hotSpot = this.refs.hotSpot
    // style.hover.display = 'none'
  }

  mouseOver(e) {
    if(!this.props.HotSpotCreate.creating) return false
    console.log(e)
    e.target.classList.add("hoverHotSpot")
  }

  mouseOut(e) {
    if(!this.props.HotSpotCreate.creating) return false
    e.target.classList.remove("hoverHotSpot")
  }


}

const mapStateToProps = state =>  ({
    HotSpotCreate: state.HotSpotReducer
})
const mapDispatchToProps = dispatch =>
bindActionCreators({
  toggleCreate
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HotSpotCreate);
