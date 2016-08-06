import React from 'react'
import TodoList from './TodoList'
import InputBox from './InputBox'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <InputBox />
        <TodoList todos={[{text: 'hello'}]}/>
      </div>
    )
  }
}

export default App
