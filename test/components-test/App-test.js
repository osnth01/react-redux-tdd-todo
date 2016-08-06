import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils'
import { expect } from 'chai'
import App from '../../src/components/App'

describe('App', () => {
  it('renders "Hello!"', () => {
    const component = renderIntoDocument(
      <App />
    )
    const h1 = scryRenderedDOMComponentsWithTag(component, 'h1')

    expect(h1[0].textContent).to.equal('Hello!')
  })
})