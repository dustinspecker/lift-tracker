import {List, Map} from 'immutable';

const INITIAL_STATE = Map({
  lifts: List()
});

function addLift(state, name, weight = 45) {
  const existingLift = (
    state
      .get('lifts', List())
      .find(lift => lift.get('name') === name)
  );

  if (existingLift) {
    return state;
  }

  return state.update(
   'lifts',
    List(),
    lifts => lifts.push(Map({name, weight}))
  );
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
      return addLift(state, action.name, action.weight);
    case 'DECREMENT_WEIGHT':
      return decrementWeight(state, action.index);
    case 'INCREMENT_WEIGHT':
      return incrementWeight(state, action.index);
    case 'REMOVE_LIFT':
      return removeLift(state, action.index);
  }

  return state;
}
