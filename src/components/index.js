import { connect } from 'react-redux';
import Component from './container/Container';
import * as selectors from '../selectors'
import PropTypes from "prop-types";

const mapStateToProps = state => ({
    todos: selectors.getTodos(state),
    strings: selectors.getStrings(state),
    todoInput: selectors.getTodoInputValue(state),
    todoInputText: PropTypes.string,
});

const mapDispatchToProps = dispatch => ({
    addTodo: payload => console.log(payload),
    todoInputChange: payload => console.log(payload),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);