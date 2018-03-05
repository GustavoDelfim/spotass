import { createStore } from 'redux';

import reducers from './reducers';
const initialState = {};
const store = createStore(reducers, initialState, window.devToolsExtension() && window.devToolsExtension());

export default store;
