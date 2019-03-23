import React from 'react';
import App from '../App';

describe('App snapshot', () => {
    it('should render correctly', () => {
        const props = {};

        const wrapper = shallow(
            <App {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});