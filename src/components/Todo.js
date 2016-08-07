import React from 'react'

const Todo = ({ text, onClick }) => {
  return (
  <li>
    {text} <button onClick={onClick}>X</button>
  </li>
  )

}

export default Todo
