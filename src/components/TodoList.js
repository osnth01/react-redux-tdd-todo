import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo, i) => 
      <Todo
        key={i}
        text={todo.text} />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList