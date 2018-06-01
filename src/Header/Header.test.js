import React from 'react';
import ReactDOM from 'react-dom';
import HeaderContainer from './HeaderContainer';

it('renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
