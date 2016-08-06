import React from 'react'
import expect from 'expect'
import TodoList from '../../src/components/TodoList'
import { shallow } from 'enzyme'

function setup(propOverrides) {
  const props = Object.assign({
    todos: [
      {
        text: 'Learn React'
      },
      {
        text: 'Learn Redux'
      },
      {
        text: 'Learn Webpack'
      }
    ]
  }, propOverrides)

  const component = shallow(<TodoList {...props} />)

  return {
    component,
    props,
    todos: component.find('Todo')
  }
}

describe('TodoList', () => {
  it('renders a ul element', () => {
    const { component } = setup()
    expect(component.type()).toEqual('ul')
  })

  it('should have the same number of todo items as given', () => {
    const { todos, props } = setup()
    console.log(todos.length)
    expect(todos.length).toEqual(props.todos.length)
  })
})