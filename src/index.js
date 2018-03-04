import React from 'react';
import ReactDOM from 'react-dom';
import ScreenRoot from './screens/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ScreenRoot />, document.getElementById('root'));
registerServiceWorker();
