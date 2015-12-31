import {expect} from 'chai'
import {findDOMNode} from 'react-dom'
import React from 'react'
import {renderIntoDocument, findRenderedDOMComponentWithTag, Simulate} from 'react-addons-test-utils'

import Weight from '../../src/components/weight'

describe('Weight', () => {
  it('should display weight in input', () => {
    const component = renderIntoDocument(
      <Weight weight='45' />
    )
    const weightInput = findRenderedDOMComponentWithTag(component, 'input')

    expect(weightInput.value).to.equal('45')
  })

  it('should call increment handler when increment button is clicked', () => {
    let incremented = false
    const increment = index => incremented = index === 1
    const component = renderIntoDocument(
      <Weight index={1} weight='45' increment={increment} />
    )
    const incrementButton = findDOMNode(component.refs.increment)

    Simulate.click(incrementButton)

    expect(incremented).to.equal(true)
  })

  it('should call decrement handler when decrement button is clicked', () => {
    let decremented = false
    const decrement = index => decremented = index === 2
    const component = renderIntoDocument(
      <Weight index={2} weight='45' decrement={decrement} />
    )
    const decrementButton = findDOMNode(component.refs.decrement)

    Simulate.click(decrementButton)

    expect(decremented).to.equal(true)
  })
})
