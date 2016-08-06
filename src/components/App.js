import React, { PropTypes } from 'react'
import InputBox from './InputBox'
import TodoList from './TodoList'

const App = ({ todos, actions }) => {
  return (
    <div>
      <h1>Hello!</h1>
      <InputBox onAddTodo={actions.addTodo} />
      <TodoList todos={todos}/>
    </div>
  )
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default App