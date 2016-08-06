import expect from 'expect'
import todos from '../../src/reducers'

describe('todos reducer', () => {
  it('should have an initial state', () => {
    expect(
      todos([], {type: 'NONE'})
    ).toEqual([])
  })

  it('should add a todo item', () => {
    expect(
      todos([], {type: 'ADD_TODO', text: 'hello'})
    ).toEqual(
      [{text: 'hello'}]
    )
  })
})