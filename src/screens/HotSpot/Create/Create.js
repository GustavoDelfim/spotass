import React, { Component } from 'react';
import './Create.css';

import HotSpotList from '../../../components/HotSpot/List/List';
import { ButtonUI } from '../../../components/UI';

class ScreenHotSpotList extends Component {
  constructor(props){
    super(props);
    this.state = {
      creating: false,
      labelButton: 'Create HotSpot'
    };

    this.createHotSpot = this.createHotSpot.bind(this);
  }
  render() {
    return (
      <div className="hotSpotList">
        <div className="button">
          <ButtonUI label={this.state.labelButton} handleClick={(e) => this.createHotSpot(e)} />
        </div>

        <div className="spotList">
          <HotSpotList />
        </div>
      </div>
    )
  }

  createHotSpot() {

    if(this.state.creating) {
      this.toogleButton('Create HotSpot');
    } else {
      this.toogleButton('Stop HotSpot');
    }

  }

  toogleButton(string) {
    this.setState({
      labelButton: string,
      creating: !this.state.creating
    })
  }

}

export default ScreenHotSpotList;
