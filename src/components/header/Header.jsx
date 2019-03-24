import React from 'react';
import TextInput from '../textInput/TextInput';
import PropTypes from 'prop-types';
import './style.less';

const Header = props => {
    const {
        strings,
        addTodo,
        todoInputChange,
    } = props;

    return (
        <div className={'header'}>
            <span className={'header_title'}>Todo</span>
            <div className={'header_input'}>
                <TextInput
                    onInput = {todoInputChange}
                    onSubmit = {addTodo}
                    placeholder={strings.todoInputPlaceholder}
                />
            </div>
        </div>
    );
};

Header.propTypes = {
    strings: PropTypes.object.isRequired,
    addTodo: PropTypes.func.isRequired,
    todoInputChange: PropTypes.func.isRequired,
};

export default Header;