import React from 'react';
import TodoList from '../TodoList';

describe('TodoList snapshot', () => {
    it('should render correctly', () => {
        const props = {};

        const wrapper = shallow(
            <TodoList {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});