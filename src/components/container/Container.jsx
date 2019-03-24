import React from 'react';
import Header from '../header/Header';
import PropTypes from 'prop-types';
import './style.less';
import TodoList from "../todoList/TodoList";
import Footer from "../footer/Footer";

const Container = props => {
    const {
        todos,
        strings,
        addTodo,
        todoInputChange,
    } = props;

    return (
        <div className={'main-container'}>
            <div className={'main-container_header'}>
                <Header
                    strings = {strings}
                    addTodo = {addTodo}
                    todoInputChange = {todoInputChange}
                />
            </div>
            <div className={'main-container_todo-list'}>
                <TodoList todos={todos}/>
            </div>
            <div className={'main-container_footer'}>
                <Footer/>
            </div>
        </div>
    );
};

Container.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    })),
    strings: PropTypes.object.isRequired,
    addTodo: PropTypes.func.isRequired,
    todoInputChange: PropTypes.func.isRequired,
};

export default Container;