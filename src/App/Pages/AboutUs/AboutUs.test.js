import React from 'react';
import ReactDOM from 'react-dom';
import AboutUsContainer from "./AboutUsContainer";

it('renders About Us without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AboutUsContainer />, div);
        ReactDOM.unmountComponentAtNode(div);
});
