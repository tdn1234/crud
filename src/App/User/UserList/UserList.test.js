import React from 'react';
import ReactDOM from 'react-dom';
import UserListContainer from "./UserListContainer";

it('renders User listing without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserListContainer />, div);
        ReactDOM.unmountComponentAtNode(div);
});
