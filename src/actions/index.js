let nextTodoId = 0

export const addTodo = (text) => {
  return {
    id: nextTodoId++,
    type: 'ADD_TODO',
    text
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}