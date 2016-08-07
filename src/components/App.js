import React, { PropTypes } from 'react'
import InputBox from './InputBox'
import TodoList from './TodoList'

const App = ({ todos, addTodo, deleteTodo }) => {
  return (
    <div>
      <h1>Hello!</h1>
      <InputBox onAddTodo={ addTodo } />
      <TodoList todos={todos} onDeleteTodo={ deleteTodo } />
    </div>
  )
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default App