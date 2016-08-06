import expect from 'expect'
import { addTodo } from '../../src/actions'

describe('todo actions', () => {
  it('should create an ADD_TODO action', () => {

    expect(
      addTodo('test')
    )
    .toEqual(
      {
        type: 'ADD_TODO',
        text: 'test'
      }
    )
  })
})