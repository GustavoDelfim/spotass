import React from 'react';
import ReactDOM from 'react-dom';
import ScreenRoot from './Root';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScreenRoot />, div);
  ReactDOM.unmountComponentAtNode(div);
});
