import { expect } from 'chai'
import todos from '../../src/reducers'

describe('todos reducer', () => {
  it('should have an initial state', () => {
    expect(
      todos([], {type: 'NONE'})
    ).to.deep.equal([])
  })

  it('should add a todo item', () => {
    expect(
      todos([], {type: 'ADD_TODO', text: 'hello'})
    ).to.deep.equal(
      [{text: 'hello'}]
    )
  })
})