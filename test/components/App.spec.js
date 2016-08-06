import React from 'react'
import expect from 'expect'
import App from '../../src/components/App'
import { mount } from 'enzyme'

function setup(todos = [], actions = {}) {

  const wrapper = mount(
    <App
      todos={todos}
      actions={actions}/>
    )

  return {
    wrapper,
    h1: wrapper.find('h1'),
    ul: wrapper.find('ul'),
    form: wrapper.find('form')
  }
}

describe('App', () => {
  it('renders "Hello!"', () => {
    const { h1 } = setup()
    expect(h1.text()).toEqual('Hello!')
  })

  it('renders the todo list', () => {
    const { ul } = setup()
    expect(ul.type()).toEqual('ul')
  })

  it('renders the input box', () => {
    const { form } = setup()
    expect(form.type()).toEqual('form')
  })
})