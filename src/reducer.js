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

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case 'ADD_LIFT':
      return state.update(
        'lifts',
        List(),
        lifts => addLift(lifts, action.name, action.weight)
      );
    case 'DECREMENT_WEIGHT':
      return state.update(
        'lifts',
        List(),
        lifts => adjustWeight(lifts, action.index, -5)
      );
    case 'INCREMENT_WEIGHT':
      return state.update(
        'lifts',
        List(),
        lifts => adjustWeight(lifts, action.index, 5)
      );
    case 'REMOVE_LIFT':
      return state.update(
        'lifts',
        List(),
        lifts => removeLift(lifts, action.index)
      );
  }

  return state;
}
