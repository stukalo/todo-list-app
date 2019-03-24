import { connect } from 'react-redux';
import Component from './container/Container';
import * as selectors from '../selectors';
import * as actions from '../actions';

const mapStateToProps = state => ({
    todos: selectors.getTodos(state),
    strings: selectors.getStrings(state),
});

const mapDispatchToProps = dispatch => ({
    addTodo: payload => dispatch(actions.addTodo(payload)),
    updateTodo: payload => dispatch(actions.updateTodo(payload)),
    toggleTodoEditing: payload => dispatch(actions.toggleTodoEditing(payload)),
    toggleTodoCompleted: payload => dispatch(actions.toggleTodoCompleted(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);