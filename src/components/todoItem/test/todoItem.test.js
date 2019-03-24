import React from 'react';
import TodoItem from '../TodoItem';

describe('TodoItem snapshot', () => {
    it('should render correctly', () => {
        const props = {};

        const wrapper = shallow(
            <TodoItem {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});