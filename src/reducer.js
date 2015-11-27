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

function removeLift(state, index) {
  return state.update(
    'lifts',
    List(),
    lifts => lifts.delete(index)
  );
}

function adjustWeight(state, index, weightChange) {
  if (state.get('lifts').size <= index) {
    return state;
  }

  return state.update(
    'lifts',
    List(),
    lifts => lifts.update(
      index,
      lift => lift.set('weight', lift.get('weight') + weightChange)
    )
  );
}

function decrementWeight(state, index) {
  return adjustWeight(state, index, -5);
}

function incrementWeight(state, index) {
  return adjustWeight(state, index, 5);
}

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case 'ADD_LIFT':
      return state.update(
        'lifts',
        List(),
        lifts => addLift(lifts, action.name, action.weight)
      );
    case 'DECREMENT_WEIGHT':
      return decrementWeight(state, action.index);
    case 'INCREMENT_WEIGHT':
      return incrementWeight(state, action.index);
    case 'REMOVE_LIFT':
      return removeLift(state, action.index);
  }

  return state;
}
