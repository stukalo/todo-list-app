import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const TodoItem = props => {
    const {
        todo,
    } = props;

    const getContent = todo => {
        return <div>{todo.id}</div>
    };

    return (
        <div className={'todo-item'}>
            {getContent(todo)}
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    })
};

export default TodoItem;