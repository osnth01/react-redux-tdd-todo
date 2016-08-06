import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'
import todos from '../../src/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../../src/containers/App'

describe('App', () => {
  let store = createStore(todos)
  const component = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <App />
    </Provider>
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