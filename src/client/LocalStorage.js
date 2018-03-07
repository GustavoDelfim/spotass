import objectStringify from 'json-stringify';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) {
      return undefined
    }
    return JSON.parce(serializedState)
  } catch(err) {
    return undefined
  }
}

const saveState = (state) => {
  try {
    var pretty = objectStringify(state);
    localStorage.setItem('state', pretty)
  } catch(err) {
    console.log(err)
  }
}

export {
  loadState,
  saveState
}
