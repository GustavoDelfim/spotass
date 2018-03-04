import React, { Component } from 'react';

import { ButtonUI } from '../UI';

class HotSpotCreate extends Component {
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
      <ButtonUI label={this.state.labelButton} handleClick={(e) => this.createHotSpot(e)} />
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

export default HotSpotCreate;
