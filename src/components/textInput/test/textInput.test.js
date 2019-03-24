import React from 'react';
import TextInput from '../TextInput';

describe('TextInput snapshot', () => {
    it('should render correctly', () => {
        const props = {};

        const wrapper = shallow(
            <TextInput {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});