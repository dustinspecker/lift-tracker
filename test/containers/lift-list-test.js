import {fromJS, Map} from 'immutable'
import React from 'react'
import {
  renderIntoDocument,
  scryRenderedComponentsWithType,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'
import test from 'ava'

import '../_helper'
import LiftLabel from '../../src/components/lift-label'
import LiftList from '../../src/containers/lift-list'
import Weight from '../../src/components/weight'

let lifts
  , store

test.beforeEach(() => {
  lifts = fromJS([
    {name: 'squat', weight: 200},
    {name: 'bench', weight: 100},
    {name: 'deadlift', weight: 300}
  ])

  store = {
    getState() {
      return {lifts}
    },
    subscribe() {
    },
    dispatch() {
    }
  }
})

test('should list lifts', t => {
  const component = renderIntoDocument(
    <LiftList store={store} />
  )
  const liftLabels = scryRenderedComponentsWithType(component, LiftLabel)
  const weightInputs = scryRenderedComponentsWithType(component, Weight)

  t.is(liftLabels.length, 3)
  t.is(weightInputs.length, 3)
})

test('should dispatch decrement weight action when decrement button is clicked', t => {
  let decrementActionDispatched = false
  store.dispatch = ({index, type}) => decrementActionDispatched = index === 1 && type === 'DECREMENT_WEIGHT'
  const component = renderIntoDocument(
    <LiftList store={store} />
  )
  const weightInputs = scryRenderedComponentsWithType(component, Weight)
  const decrementButton = scryRenderedDOMComponentsWithTag(weightInputs[1], 'button')[2]

  Simulate.click(decrementButton)
  t.is(decrementActionDispatched, true)
})

test('should dispatch increment weight action when increment button is clicked', t => {
  let incrementActionDispatched = false
  store.dispatch = ({index, type}) => incrementActionDispatched = index === 0 && type === 'INCREMENT_WEIGHT'
  const component = renderIntoDocument(
    <LiftList store={store} />
  )
  const weightInputs = scryRenderedComponentsWithType(component, Weight)
  const incrementButton = scryRenderedDOMComponentsWithTag(weightInputs[0], 'button')[1]

  Simulate.click(incrementButton)
  t.is(incrementActionDispatched, true)
})

test('should dispatch remove lift action when delete lift button is clicked', t => {
  let removeActionDispatched = false
  store.dispatch = ({index, type}) => {
    removeActionDispatched = index === 0 && type === 'REMOVE_LIFT'
  }
  const component = renderIntoDocument(
    <LiftList store={store} />
  )
  const weightInputs = scryRenderedComponentsWithType(component, Weight)
  const removeButton = scryRenderedDOMComponentsWithTag(weightInputs[0], 'button')[0]

  Simulate.click(removeButton)
  t.ok(removeActionDispatched)
})
