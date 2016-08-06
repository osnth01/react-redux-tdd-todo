import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'
import Todo from '../../src/components/Todo'

function setup() {
  const props = {
    text: 'test'
  }

  const renderer = TestUtils.createRenderer()

  renderer.render(
    <Todo {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('Todo', () => {
  const { output, props } = setup()

  it('renders a li element', () => {
    expect(output.type).to.equal('li')
  })

  it('renders the given todo item', () => {
    expect(output.props.children).to.equal(props.text)
  })
})
