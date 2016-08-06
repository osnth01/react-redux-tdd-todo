import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'
import InputBox from '../../src/components/InputBox'

function setup() {
  const renderer = TestUtils.createRenderer()

  renderer.render(
    <InputBox />
  )

  let output = renderer.getRenderOutput()

  return {
    output,
    renderer
  }
}

describe('InputBox', () => {
  const { output } = setup()

  it('renders a form element', () => {
    expect(output.type).to.equal('form')
  })
})
