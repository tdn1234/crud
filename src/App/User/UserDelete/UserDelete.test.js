import React from 'react';
import ReactDOM from 'react-dom';
import UserDeleteContainer from "./UserDeleteContainer";

it('renders User listing without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserDeleteContainer />, div);
        ReactDOM.unmountComponentAtNode(div);
});
