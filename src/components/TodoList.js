import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul>
    {todos.map((todo) => 
      <Todo
        key={todo.id}
        text={todo.text}
        onClick={ e => {
          onDeleteTodo(todo.id)
        }} />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodoList