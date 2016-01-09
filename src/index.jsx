import {createStore} from 'redux'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import {addLift} from './actions'
import LiftList from './containers/lift-list'
import reducer from './reducer'

const store = createStore(reducer)
store.subscribe(() => store.getState())

store.dispatch(addLift('squat', 200))
store.dispatch(addLift('bench', 100))
store.dispatch(addLift('deadlift', 300))

ReactDOM.render(
  <Provider store={store}>
    <LiftList />
  </Provider>,
  document.getElementById('app')
)
