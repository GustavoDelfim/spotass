import React, { Component } from 'react';
import './Create.css';

import ButtonUI from '../../../components/UI/Button/Button';

class HotSpotList extends Component {
  constructor(props){
    super(props);
    this.state = {
      creating: false,
      labelButton: 'Create HotSpot'
    };
  }
  render() {
    return (
      <div className="hotSpotList">
        <div className="button">
          <ButtonUI label={this.state.labelButton} handleClick={(e) => this.createHotSpot(e)} />
        </div>
      </div>
    )
  }

  createHotSpot() {

    if(this.state.creating) {
      this.state.labelButton = 'Stop HotSpot';
    } else {
      this.state.labelButton = 'Create HotSpot';
    }

    console.log( this.state.labelButton );

    this.state.creating = !this.state.creating;

  }

}

export default HotSpotList;
