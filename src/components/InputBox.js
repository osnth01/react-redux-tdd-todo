import React, { PropTypes } from 'react'

const InputBox = ({ onAddTodo }) => {
  let input

  return (
    <form onSubmit={ e => {
        e.preventDefault()
        onAddTodo(input.value)
      }}>

      <input ref={node => {
        input = node
      }} />

      <button type="submit">
        Add Todo
      </button>
    </form>
  )
}

InputBox.propTypes = {
  onAddTodo: PropTypes.func.isRequired
}

export default InputBox