import { expect } from 'chai'
import { addTodo } from '../../src/actions'

describe('todo actions', () => {
  it('should create an ADD_TODO action', () => {
    expect(addTodo({text: 'test'}))
      .to.deep.equal({ text: 'test' })
  })
})