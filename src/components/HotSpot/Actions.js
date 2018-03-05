
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

const addHotSpot = (object) => {
  return {
    type: 'ADD_HOTSPOT',
    value: object
  }
}

export {
  toggleButton,
  toggleCreate
};
