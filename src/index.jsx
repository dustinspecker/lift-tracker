import {createStore} from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

import {addLift} from './actions'
import LiftList from './components/lift-list'
import reducer from './reducer'

const store = createStore(reducer)
store.subscribe(() => store.getState())

store.dispatch(addLift('squat', 200))
store.dispatch(addLift('bench', 100))
store.dispatch(addLift('deadlift', 300))

ReactDOM.render(
  <LiftList store={store} />,
  document.getElementById('app')
)
