import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'
import TodoList from '../../src/components/TodoList'
import Todo from '../../src/components/Todo'

function setup(propOverrides) {
  const props = Object.assign({
    todos: [
      {
        text: 'Learn React'
      },
      {
        text: 'Learn Redux'
      },
      {
        text: 'Learn Webpack'
      }
    ]
  }, propOverrides)

  const renderer = TestUtils.createRenderer()
  renderer.render(<TodoList {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('TodoList', () => {
  const { output, props } = setup()

  it('renders a ul element', () => {
    expect(output.type).to.equal('ul')
  })

  it('should have the same number of todo items as given', () => {
    expect(output.props.children.length).to.equal(props.todos.length)
  })
})