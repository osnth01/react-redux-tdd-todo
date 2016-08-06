import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'
import App from '../../src/components/App'

describe('App', () => {
  const component = TestUtils.renderIntoDocument(
    <App />
  )

  it('renders "Hello!"', () => {
    const h1 = TestUtils.findRenderedDOMComponentWithTag(
      component, 'h1'
    )

    expect(h1.textContent).to.equal('Hello!')
  })

  it('renders the todo list', () => {
    const ul = TestUtils.findRenderedDOMComponentWithTag(
      component, 'ul'
    )
  })

  it('renders the input box', () => {
    const form = TestUtils.findRenderedDOMComponentWithTag(
      component, 'form'
    )
  })
})