import {expect} from 'chai';
import {fromJS, List, Map} from 'immutable';

import reducer from '../src/reducer';

describe('reducer', () => {
  it('should handle initial state', () => {
    const state = fromJS({
      lifts: []
    });

    expect(reducer()).to.equal(state);
  });

  it('should handle add lift', () => {
    const state = Map();
    const action = {type: 'ADD_LIFT', name: 'squat'};
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      lifts: [
        {
          name: 'squat'
        }
      ]
    }));
  });

  it('should handle adding multiple lifts', () => {
    const state = Map({
      lifts: List.of(Map({
        name: 'squat'
      }))
    });
    const action = {type: 'ADD_LIFT', name: 'bench'};
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      lifts: [
        {name: 'squat'},
        {name: 'bench'}
      ]
    }));
  });

  it('should not add duplicate lifts', () => {
    const state = Map({
      lifts: List.of(
        Map({name: 'squat'}),
        Map({name: 'bench'})
      )
    });
    const action = {type: 'ADD_LIFT', name: 'bench'};
    const nextState = reducer(state, action);

    expect(nextState).to.equal(state);
  });

  it('should set lift weight', () => {
    const state = fromJS({
      lifts: [{name: 'squat'}]
    });
    const action = {type: 'SET_WEIGHT', name: 'squat', weight: 200};
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      lifts: [{name: 'squat', weight: 200}]
    }));
  });

  it('should return same state if lift not found', () => {
    const state = fromJS({
      lifts: [{name: 'squat'}]
    });
    const action = {type: 'SET_WEIGHT', name: 'bench', weight: 200};
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      lifts: [{name: 'squat'}]
    }));
  });
});
