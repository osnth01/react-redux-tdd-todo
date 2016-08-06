import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'
import App from '../../src/components/App'

function setup() {
  const renderer = TestUtils.createRenderer()

  renderer.render(
    <App />
  )

  let output = renderer.getRenderOutput()

  return {
    output,
    renderer
  }
}

describe('App', () => {
  const { output } = setup()
  it('renders an h1 element', () => {
    expect(output.type).to.equal('h1')
  })

  it('renders "Hello!"', () => {
    expect(output.props.children).to.equal('Hello!')
  })
})