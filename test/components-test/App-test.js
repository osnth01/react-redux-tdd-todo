import React from 'react'
import ReactDOM from 'react-dom'
import { renderIntoDocument } from 'react-addons-test-utils'
import App from '../../src/components/App'

describe('App', () => {
  it('renders "Hello!"', () => {
    const component = renderIntoDocument(
      <App />
    )
  })
})