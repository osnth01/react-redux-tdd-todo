import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/AppContainer'
import todos from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let store = createStore(todos)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

