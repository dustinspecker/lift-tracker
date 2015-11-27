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

function setWeight(state, name, weight) {
  return state.updateIn(
    ['lifts'],
    List(),
    lifts => {
      const foundLiftIndex = lifts.findIndex(lift => lift.get('name') === name);
      if (foundLiftIndex > -1) {
        return lifts.update(
          foundLiftIndex,
          lift => lift.set('weight', weight)
        );
      }

      return lifts;
    }
  );
}

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case 'ADD_LIFT':
     return addLift(state, action.name, action.weight);
    case 'SET_WEIGHT':
     return setWeight(state, action.name, action.weight);
  }

  return state;
}
