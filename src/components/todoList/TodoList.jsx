import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todoItem/TodoItem';
import Scrollbar from 'react-scrollbars-custom';
import './style.less';

const TodoList = props => {
    const {
        todos,
    } = props;

    return (
        <div className={'todo-list'}>
            <Scrollbar style = {{ width: '100%', height: '100%' }}>
                {todos.map(todo => (
                    <div key={todo.id}
                        className={'todo-list_item'}
                    >
                        <TodoItem todo = {todo}/>
                    </div>

                ))}
            </Scrollbar>
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default TodoList;