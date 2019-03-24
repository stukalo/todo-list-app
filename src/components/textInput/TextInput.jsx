import React from 'react';
import PropTypes from 'prop-types';

const TextInput = props => {
    const {
        text,
        onInput,
        onSubmit,
        placeholder,
    } = props;

    const handlerKeyDown = event => {
        if (event.which === 13) {
            onSubmit();
        } else {
            onInput(event.target.value)
        }
    };

    return (
        <div className={'text-input'}>
            <input type={'text'}
                   value={text}
                   className={'text-input_input'}
                   onKeyDown={handlerKeyDown}
                   placeholder={placeholder}
            />
        </div>
    );
};

TextInput.propTypes = {
    text: PropTypes.string,
    onInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default TextInput;