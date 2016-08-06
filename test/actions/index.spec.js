import expect from 'expect'
import { addTodo, deleteTodo } from '../../src/actions'

describe('todo actions', () => {
  it('should create an ADD_TODO action', () => {
    const text = 'test'

    expect(
      addTodo(text)
    )
    .toEqual(
      {
        id: 0,
        type: 'ADD_TODO',
        text
      }
    )
  })

  it('should create a DELETE_TODO action', () => {
    const id = 0

    expect(
      deleteTodo(id)
    )
    .toEqual(
      {
        type: 'DELETE_TODO',
        id
      }
    )
  })

})