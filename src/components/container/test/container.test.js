import React from 'react';
import Container from '../Container';

describe('Container snapshot', () => {
    it('should render correctly', () => {
        const props = {};

        const wrapper = shallow(
            <Container {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});