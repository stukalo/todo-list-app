import React from 'react';
import Footer from '../Footer';

describe('Footer snapshot', () => {
    it('should render correctly', () => {
        const props = {};

        const wrapper = shallow(
            <Footer {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});