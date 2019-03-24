import React from 'react';
import Header from '../Header';

describe('Header snapshot', () => {
    it('should render correctly', () => {
        const props = {};

        const wrapper = shallow(
            <Header {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});