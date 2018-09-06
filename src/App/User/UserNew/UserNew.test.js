import React from 'react';
import ReactDOM from 'react-dom';
import UserNewContainer from "./UserNewContainer";

it('renders User listing without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserNewContainer />, div);
        ReactDOM.unmountComponentAtNode(div);
});
