import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleCreate, changeTarget, addHotSpot } from './Actions';

const style = {
  container: {
    display: 'flex'
  },
  hover: {
    width: 0,
    height: 0,
    border: '#ff3b3b solid 1px',
    background: 'rgba(255, 59, 59, 0.1)',
    display: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    boxSizing: 'border-box'
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
        <span style={style.hover} ref="hoverHotSpot"></span>
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
    e.preventDefault()

    let controllher = e.target.getAttribute('controllher')
    if(controllher == 'HotSpot') return false

    let spot = {
      target: e.target,
      top: e.clientX,
      left: e.clientY
    }

    this.props.addHotSpot(spot)

    return false
  }

  startHover() {
    this.refs.hoverHotSpot.style.display = 'block'
    let hotSpot = this.refs.hotSpot
    hotSpot.addEventListener("mouseover", (e) => this.mouseOver(e))
    hotSpot.addEventListener("mouseout", (e) => this.mouseOut(e))
  }
  stopHover() {
    this.refs.hoverHotSpot.style.display = 'none'
  }

  mouseOver(e) {
    if(!this.props.HotSpotCreate.creating) return false
    e.target.classList.add("hoverHotSpot")

    if (this.props.HotSpotCreate.target == e.target) {
      return false
    }

    this.props.changeTarget(e.target)
    this.preparyHover(e.target)
  }

  mouseOut(e) {
    if(!this.props.HotSpotCreate.creating) return false
    e.target.classList.remove("hoverHotSpot")
  }

  preparyHover(target) {
    let hover = this.refs.hoverHotSpot
    let infos = target.getBoundingClientRect();

    hover.style.width = infos.width+'px'
    hover.style.height = infos.height+'px'
    hover.style.left = infos.x+'px'
    hover.style.top = infos.y+'px'

  }

}

const mapStateToProps = state =>  ({
    HotSpotCreate: state.HotSpotReducer
})
const mapDispatchToProps = dispatch =>
bindActionCreators({
  toggleCreate,
  changeTarget,
  addHotSpot
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HotSpotCreate);
