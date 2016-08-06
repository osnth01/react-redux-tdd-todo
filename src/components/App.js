import React from 'react'
import TodoList from './TodoList'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <TodoList todos={[{text: 'hello'}]}/>
      </div>
    )
  }
}

export default App
