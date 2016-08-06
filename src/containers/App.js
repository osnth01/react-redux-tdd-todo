import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import InputBox from '../components/InputBox'

class App extends Component {
  render() {
    const { todos } = this.props

    return (
      <div>
        <h1>Hello!</h1>
        <InputBox />
        <TodoList todos={todos}/>
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state
  }
}

export default connect(
  mapStateToProps
)(App)
