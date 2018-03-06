import { createStore } from 'redux';
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom';
import { batchedSubscribe } from 'redux-batched-subscribe';

import reducers from './reducers';

const initialState = {};

const store = createStore(reducers, initialState, window.devToolsExtension() && window.devToolsExtension());

export default store;
