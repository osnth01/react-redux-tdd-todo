import { expect } from 'chai'
import todos from '../../src/reducers'

describe('todos reducer', () => {
  it('should have an initial state', () => {
    expect(todos()).to.deep.equal([])
  })
})