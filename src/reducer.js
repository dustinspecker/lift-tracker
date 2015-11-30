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

function removeLift(lifts, index) {
  return lifts.delete(index);
}

function adjustWeight(lifts, index, weightChange) {
  if (lifts.size <= index) {
    return lifts;
  }

  return lifts.update(
    index,
    lift => lift.set('weight', lift.get('weight') + weightChange)
  );
}

function setWeight(lifts, index, weight) {
  if (lifts.size <= index) {
    return lifts;
  }

  return lifts.update(
    index,
    lift => lift.set('weight', weight)
  );
}

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case 'ADD_LIFT':
      return state.set('lifts', addLift(state.get('lifts'), action.name, action.weight));
    case 'DECREMENT_WEIGHT':
      return state.set('lifts', adjustWeight(state.get('lifts'), action.index, -5));
    case 'INCREMENT_WEIGHT':
      return state.set('lifts', adjustWeight(state.get('lifts'), action.index, 5));
    case 'SET_WEIGHT':
      return state.set('lifts', setWeight(state.get('lifts'), action.index, action.weight));
    case 'REMOVE_LIFT':
      return state.set('lifts', removeLift(state.get('lifts'), action.index));
  }

  return state;
}
