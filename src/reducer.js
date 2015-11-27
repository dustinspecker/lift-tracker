import {List, Map} from 'immutable';

export default function (state, action) {
  if (!state) {
    state = Map({
      lifts: List()
    });
  }

  return state;
}
