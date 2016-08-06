import expect from 'expect'
import todos from '../../src/reducers'

describe('todos reducer', () => {
  it('should have an initial state', () => {
    expect(todos(undefined, {})).toEqual([])
  })

  it('should add a todo item', () => {
    expect(
      todos([], {
          type: 'ADD_TODO',
          text: 'hello',
          id: 0
        }
      )
    ).toEqual(
      [{
        text: 'hello',
        id: 0
      }]
    )
  })

  it('should delete a todo item', () => {
    expect(
      todos(
        [{ text: 'hello', id: 0}],
        { type: 'DELETE_TODO', id: 0}
      )
    )
    .toEqual([])
  })
})