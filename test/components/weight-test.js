import {
  findRenderedDOMComponentWithTag,
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'
import React from 'react'
import test from 'ava'

import '../_helper'
import Weight from '../../src/components/weight'

/* eslint-disable arrow-body-style */
const noop = () => {}
/* eslint-enable arrow-body-style */

test('should display weight in input', t => {
  const component = renderIntoDocument(
    <Weight
      change={noop}
      decrement={noop}
      delete={noop}
      increment={noop}
      index={0}
      weight='45'
    />
  )
  const weightInput = findRenderedDOMComponentWithTag(component, 'input')

  t.is(weightInput.value, '45')
})

test('should call delete handler when delete button is click', t => {
  let deleted = false
  const deleteHandler = index => deleted = index === 1
  const component = renderIntoDocument(
    <Weight
      change={noop}
      decrement={noop}
      delete={deleteHandler}
      increment={noop}
      index={1}
      weight='45'
    />
  )
  const deleteButton = scryRenderedDOMComponentsWithTag(component, 'button')[0]

  Simulate.click(deleteButton)

  t.is(deleted, true)
})

test('should call increment handler when increment button is clicked', t => {
  let incremented = false
  const increment = index => incremented = index === 1
  const component = renderIntoDocument(
    <Weight
      change={noop}
      decrement={noop}
      delete={noop}
      increment={increment}
      index={1}
      weight='45'
    />
  )
  const incrementButton = scryRenderedDOMComponentsWithTag(component, 'button')[1]

  Simulate.click(incrementButton)

  t.is(incremented, true)
})

test('should call decrement handler when decrement button is clicked', t => {
  let decremented = false
  const decrement = index => decremented = index === 2
  const component = renderIntoDocument(
    <Weight
      change={noop}
      decrement={decrement}
      delete={decrement}
      increment={noop}
      index={2}
      weight='45'
    />
  )
  const decrementButton = scryRenderedDOMComponentsWithTag(component, 'button')[2]

  Simulate.click(decrementButton)

  t.is(decremented, true)
})

test('should call change handler when input is changed', t => {
  const change = (index, weight) => {
    t.is(index, 3)
    t.is(weight, '100')
  }
  const component = renderIntoDocument(
    <Weight
      change={change}
      decrement={noop}
      delete={noop}
      increment={noop}
      index={3}
      weight='45'
    />
  )
  const weightInput = scryRenderedDOMComponentsWithTag(component, 'input')[0]

  weightInput.value = 100
  Simulate.change(weightInput)
})
