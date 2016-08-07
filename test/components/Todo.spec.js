import React from 'react'
import expect from 'expect'
import Todo from '../../src/components/Todo'
import { shallow } from 'enzyme'

function setup() {
  const props = {
    text: 'test'
  }

  const component = shallow(<Todo {...props} />)

  return {
    component,
    props
  }
}

describe('Todo', () => {
  it('renders a li element', () => {
    const { component } = setup()
    expect(component.type()).toEqual('li')
  })

  it('renders the given todo item', () => {
    const { component, props } = setup()
    expect(component.text()).toEqual(props.text + ' X')
  })
})
