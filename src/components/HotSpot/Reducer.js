let initialState = {
  creating: false,
  labelButton: 'Create HotSpot',
  bgButton: '',
  list: {}
}

const HotSpotReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BUTTON':
      return action.value
      break;

    case 'TOOGLE_CREATE':
      return action.value
      break;

    case 'ADD_HOTSPOT':
      return action.value
      break;

    default:
      return initialState
  }
}


export default HotSpotReducer;
