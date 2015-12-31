import {expect} from 'chai'

import * as actions from '../src/actions'

describe('actions', () => {
  it('should return add lift action', () => {
    expect(actions.addLift('squat', 100)).to.eql({
      type: 'ADD_LIFT',
      name: 'squat',
      weight: 100
    })
  })

  it('should return decrement weight action', () => {
    expect(actions.decrementWeight(1)).to.eql({
      type: 'DECREMENT_WEIGHT',
      index: 1
    })
  })

  it('should return increment weight action', () => {
    expect(actions.incrementWeight(1)).to.eql({
      type: 'INCREMENT_WEIGHT',
      index: 1
    })
  })

  it('should return remove lift action', () => {
    expect(actions.removeLift(1)).to.eql({
      type: 'REMOVE_LIFT',
      index: 1
    })
  })
})
