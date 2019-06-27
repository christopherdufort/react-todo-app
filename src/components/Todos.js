// Upcase each word in the name by convention
import React , { Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
      return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} 
          markComplete = {this.props.markComplete} 
          deleteTodo = {this.props.deleteTodo}
        />
      ));
    }
}
// PropTypes - Runtime type checking for React props
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;