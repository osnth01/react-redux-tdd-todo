import React from 'react'
import expect from 'expect'
import InputBox from '../../src/components/InputBox'
import { shallow } from 'enzyme'

function setup() {
  const actions = {
    onAddTodo: expect.createSpy()
  }

  const component = shallow(
    <InputBox {...actions}/>
  )

  return {
    component
  }
}

describe('InputBox', () => {
  const { component } = setup()

  it('renders a form element', () => {
    expect(component.type()).toEqual('form')
  })
})
