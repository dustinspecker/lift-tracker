import {fromJS, is, List} from 'immutable'
import test from 'ava'

import reducer from '../src/reducer'

test('should handle initial state', t => {
  const state = {
    lifts: List()
  }

  t.same(reducer(), state)
})

test('should handle add lift', t => {
  const action = {type: 'ADD_LIFT', name: 'squat'}
  const nextState = reducer(undefined, action)

  t.ok(is(nextState.lifts, fromJS(
    [{name: 'squat', weight: 45}]
  )))
})

test('should handle adding multiple lifts', t => {
  const state = {
    lifts: fromJS([{name: 'squat', weight: 45 }])
  }
  const action = {type: 'ADD_LIFT', name: 'bench'}
  const nextState = reducer(state, action)

  t.ok(is(nextState.lifts, fromJS(
    [
      {name: 'squat', weight: 45},
      {name: 'bench', weight: 45}
    ]
  )))
})

test('should add lift with weight', t => {
  const action = {type: 'ADD_LIFT', name: 'squat', weight: 100}
  const nextState = reducer(undefined, action)

  t.ok(is(nextState.lifts, fromJS(
    [{name: 'squat', weight: 100}]
  )))
})

test('should not add duplicate lifts', t => {
  const state = {
    lifts: fromJS([
      {name: 'squat', weight: 45},
      {name: 'bench', weight: 45}
    ])
  }
  const action = {type: 'ADD_LIFT', name: 'bench'}
  const nextState = reducer(state, action)

  t.ok(is(nextState.lifts, state.lifts))
})

test('should remove lift', t => {
  const state = {
    lifts: fromJS([{name: 'squat', weight: 45}])
  }
  const action = {type: 'REMOVE_LIFT', index: 0}
  const nextState = reducer(state, action)

  t.ok(is(nextState.lifts, List()))
})

test('should return same state if index not found', t => {
  const state = {
    lifts: fromJS([{name: 'squat', weight: 45}])
  }
  const action = {type: 'REMOVE_LIFT', index: 1}
  const nextState = reducer(state, action)

  t.ok(is(nextState.lifts, fromJS(
    [{name: 'squat', weight: 45}]
  )))
})

test('should increment lift weight', t => {
  const state = {
    lifts: fromJS([{name: 'squat', weight: 45}])
  }
  const action = {type: 'INCREMENT_WEIGHT', index: 0}
  const nextState = reducer(state, action)

  t.ok(is(nextState.lifts, fromJS(
    [{name: 'squat', weight: 50}]
  )))
})

test('should return same state if index not found', t => {
  const state = {
    lifts: fromJS([{name: 'squat', weight: 45}])
  }
  const action = {type: 'INCREMENT_WEIGHT', index: 1}
  const nextState = reducer(state, action)

  t.ok(is(nextState.lifts, fromJS(
    [{name: 'squat', weight: 45}]
  )))
})

test('should decrement lift weight', t => {
  const state = {
    lifts: fromJS([{name: 'squat', weight: 45}])
  }
  const action = {type: 'DECREMENT_WEIGHT', index: 0}
  const nextState = reducer(state, action)

  t.ok(is(nextState.lifts, fromJS(
    [{name: 'squat', weight: 40}]
  )))
})

test('should return same state if index not found', t => {
  const state = {
    lifts: fromJS([{name: 'squat', weight: 45}])
  }
  const action = {type: 'DECREMENT_WEIGHT', index: 1}
  const nextState = reducer(state, action)

  t.ok(is(nextState.lifts, fromJS(
    [{name: 'squat', weight: 45}]
  )))
})

test('should set lift weight', t => {
  const state = {
    lifts: fromJS([{name: 'squat', weight: 45}])
  }
  const action = {type: 'SET_WEIGHT', index: 0, weight: 100}
  const nextState = reducer(state, action)

  t.ok(is(nextState.lifts, fromJS(
    [{name: 'squat', weight: 100}]
  )))
})

test('should return same state if index not found', t => {
  const state = {
    lifts: fromJS([{name: 'squat', weight: 45}])
  }
  const action = {type: 'SET_WEIGHT', index: 1, weight: 100}
  const nextState = reducer(state, action)

  t.ok(is(nextState.lifts, fromJS(
    [{name: 'squat', weight: 45}]
  )))
})
