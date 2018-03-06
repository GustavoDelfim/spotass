let initialState = {
  creating: false,
  labelButton: 'Create HotSpot',
  bgButton: '',
  target: null,
  list: []
}

const HotSpotReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BUTTON':
      return Object.assign({}, state,  action.value)
      break;

    case 'TOOGLE_CREATE':
      return Object.assign({}, state,  action.value)
      break;

    case 'CHANGE_TARGET_HOTSPOT':
      return Object.assign({}, state,  action.value)
      break;

    case 'ADD_HOTSPOT':
      let list = state.list;
      list = {list: list.concat(action.value)}
      return Object.assign({}, state,  list)
      break;

    case 'REMOVE_HOTSPOT':
      let listRemove = state.list;
      listRemove.splice(action.value, 1)
      listRemove = {list: listRemove}
      return Object.assign({}, state,  listRemove)
      break;

    default:
      return initialState
  }
}


export default HotSpotReducer;
