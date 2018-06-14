import React from 'react';
import ReactDOM from 'react-dom';
import UserEditContainer from "./UserEditContainer";

it('renders User listing without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserEditContainer />, div);
        ReactDOM.unmountComponentAtNode(div);
});
