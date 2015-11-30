import {List, Map} from 'immutable';

const INITIAL_STATE = Map({
  lifts: List()
});

function addLift(lifts, name, weight = 45) {
  const existingLift = lifts.find(lift => lift.get('name') === name);

  if (existingLift) {
    return lifts;
  }

  return lifts.push(Map({name, weight}))
}

function adjustWeight(lifts, index, cb) {
  if (lifts.size <= index) {
    return lifts;
  }

  return lifts.update(
    index,
    lift => lift.set('weight', cb(lift.get('weight')))
  );
}

function removeLift(lifts, index) {
  return lifts.delete(index);
}

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case 'ADD_LIFT':
      return state.set('lifts', addLift(state.get('lifts'), action.name, action.weight));
    case 'DECREMENT_WEIGHT':
      return state.set('lifts', adjustWeight(state.get('lifts'), action.index, weight => weight - 5));
    case 'INCREMENT_WEIGHT':
      return state.set('lifts', adjustWeight(state.get('lifts'), action.index, weight => weight + 5));
    case 'REMOVE_LIFT':
      return state.set('lifts', removeLift(state.get('lifts'), action.index));
    case 'SET_WEIGHT':
      return state.set('lifts', adjustWeight(state.get('lifts'), action.index, () => action.weight));
  }

  return state;
}
