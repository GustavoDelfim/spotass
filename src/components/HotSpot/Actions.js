
const toggleButton = (newStates) => {
  return {
    type: 'TOGGLE_BUTTON',
    value: newStates
  }
}

const toggleCreate = (status) => {
  return {
    type: 'TOOGLE_CREATE',
    value: status
  }
}

const changeTarget = (target) => {
  return {
    type: 'CHANGE_TARGET_HOTSPOT',
    value: {target: target}
  }
}

const addHotSpot = (object) => {
  return {
    type: 'ADD_HOTSPOT',
    value: object
  }
}

const removeHotSpot = (index) => {
  return {
    type: 'REMOVE_HOTSPOT',
    value: index
  }
}

export {
  toggleButton,
  toggleCreate,
  changeTarget,
  addHotSpot,
  removeHotSpot
};
