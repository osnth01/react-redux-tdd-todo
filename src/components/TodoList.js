import React, { Component } from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => (
  <ul>
    { todos.map( (todo, i) => 
        <Todo
          key={i}
          text={todo.text} />
    ) }
  </ul>
)

export default TodoList