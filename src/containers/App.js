import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import InputBox from '../components/InputBox'
import * as TodoActions from '../actions'

class App extends Component {
  render() {
    const { todos, actions } = this.props

    return (
      <div>
        <h1>Hello!</h1>
        <InputBox onAddTodo={actions.addTodo} />
        <TodoList todos={todos}/>
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
