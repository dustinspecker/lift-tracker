import {List, Map} from 'immutable';

function addLift(state, name) {
  const existingLift = (
    state
      .get('lifts', List())
      .find(lift => lift.get('name') === name)
  );

  if (existingLift) {
    return state;
  }

  return state.updateIn(
    ['lifts'],
    List(),
    lifts => lifts.push(Map({name}))
  );
}

export default function (state, action) {
  if (!state) {
    state = Map({
      lifts: List()
    });
  }

  if (!action) {
    return state;
  }

  switch (action.type) {
    case 'ADD_LIFT':
     return addLift(state, action.name);
  }

  return state;
}
