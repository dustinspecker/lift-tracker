import test from 'ava'

import * as actions from '../src/actions'

test('should return add lift action', t => {
  t.same(actions.addLift('squat', 100), {
    type: 'ADD_LIFT',
    name: 'squat',
    weight: 100
  })
})

test('should return decrement weight action', t => {
  t.same(actions.decrementWeight(1), {
    type: 'DECREMENT_WEIGHT',
    index: 1
  })
})

test('should return increment weight action', t => {
  t.same(actions.incrementWeight(1), {
    type: 'INCREMENT_WEIGHT',
    index: 1
  })
})

test('should return remove lift action', t => {
  t.same(actions.removeLift(1), {
    type: 'REMOVE_LIFT',
    index: 1
  })
})
