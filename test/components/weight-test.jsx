import {expect} from 'chai'
import {findDOMNode} from 'react-dom'
import {
  findRenderedDOMComponentWithTag,
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'
import React from 'react'

import Weight from '../../src/components/weight'

describe('Weight', () => {
  it('should display weight in input', () => {
    const component = renderIntoDocument(
      <Weight
        decrement={() => {}}
        delete={() => {}}
        increment={() => {}}
        index={0}
        weight='45'
      />
    )
    const weightInput = findRenderedDOMComponentWithTag(component, 'input')

    expect(weightInput.value).to.equal('45')
  })

  it('should call delete handler when delete button is click', () => {
    let deleted = false
    const deleteHandler = index => deleted = index === 1
    const component = renderIntoDocument(
      <Weight
        decrement={() => {}}
        delete={deleteHandler}
        increment={() => {}}
        index={1}
        weight='45'
      />
    )
    const deleteButton = scryRenderedDOMComponentsWithTag(component, 'button')[0]

    Simulate.click(deleteButton)

    expect(deleted).to.equal(true)
  })

  it('should call increment handler when increment button is clicked', () => {
    let incremented = false
    const increment = index => incremented = index === 1
    const component = renderIntoDocument(
      <Weight
        decrement={() => {}}
        delete={() => {}}
        increment={increment}
        index={1}
        weight='45'
      />
    )
    const incrementButton = scryRenderedDOMComponentsWithTag(component, 'button')[1]

    Simulate.click(incrementButton)

    expect(incremented).to.equal(true)
  })

  it('should call decrement handler when decrement button is clicked', () => {
    let decremented = false
    const decrement = index => decremented = index === 2
    const component = renderIntoDocument(
      <Weight
        decrement={decrement}
        delete={decrement}
        increment={() => {}}
        index={2}
        weight='45'
      />
    )
    const decrementButton = scryRenderedDOMComponentsWithTag(component, 'button')[2]

    Simulate.click(decrementButton)

    expect(decremented).to.equal(true)
  })
})
