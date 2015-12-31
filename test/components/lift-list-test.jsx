import {expect} from 'chai'
import {fromJS, Map} from 'immutable'
import React from 'react'
import {
  renderIntoDocument,
  scryRenderedComponentsWithType,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'

import LiftLabel from '../../src/components/lift-label'
import LiftList from '../../src/components/lift-list'
import Weight from '../../src/components/weight'

describe('LiftList', () => {
  const lifts = fromJS([
    {name: 'squat', weight: 200},
    {name: 'bench', weight: 100},
    {name: 'deadlift', weight: 300}
  ])

  const store = {
    getState() {
      return {lifts}
    },
    subscribe() {
    },
    dispatch() {
    }
  }

  it('should list lifts', () => {
    const component = renderIntoDocument(
      <LiftList store={store} />
    )
    const liftLabels = scryRenderedComponentsWithType(component, LiftLabel)
    const weightInputs = scryRenderedComponentsWithType(component, Weight)

    expect(liftLabels.length).to.equal(3)
    expect(weightInputs.length).to.equal(3)
  })

  it('should dispatch decrement weight action when decrement button is clicked', () => {
    let decrementActionDispatched = false
    store.dispatch = ({index, type}) => decrementActionDispatched = index === 1 && type === 'DECREMENT_WEIGHT'
    const component = renderIntoDocument(
      <LiftList store={store} />
    )
    const weightInputs = scryRenderedComponentsWithType(component, Weight)
    const decrementButton = scryRenderedDOMComponentsWithTag(weightInputs[1], 'button')[1]

    Simulate.click(decrementButton)
    expect(decrementActionDispatched).to.eql(true)
  })

  it('should dispatch increment weight action when increment button is clicked', () => {
    let incrementActionDispatched = false
    store.dispatch = ({index, type}) => incrementActionDispatched = index === 0 && type === 'INCREMENT_WEIGHT'
    const component = renderIntoDocument(
      <LiftList store={store} />
    )
    const weightInputs = scryRenderedComponentsWithType(component, Weight)
    const incrementButton = scryRenderedDOMComponentsWithTag(weightInputs[0], 'button')[0]

    Simulate.click(incrementButton)
    expect(incrementActionDispatched).to.eql(true)
  })
})
