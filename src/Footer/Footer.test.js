import React from 'react';
import ReactDOM from 'react-dom';
import FooterContainer from './FooterContainer';

it('renders Footer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
