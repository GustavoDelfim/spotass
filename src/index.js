import React from 'react';
import ReactDOM from 'react-dom';
import ScreenRoot from './screens/Root';
import registerServiceWorker from './registerServiceWorker';
import HotSpotCreate from './components/HotSpot/Create';

import { Provider } from 'react-redux';
import store from './Store';

ReactDOM.render(
  <Provider store={store}>
    <HotSpotCreate>
      <ScreenRoot />
    </HotSpotCreate>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
