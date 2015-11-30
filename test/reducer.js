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

  describe('ADD_LIFT', () => {
    it('should handle add lift', () => {
      const action = {type: 'ADD_LIFT', name: 'squat'};
      const nextState = reducer(undefined, action);

      expect(nextState).to.equal(fromJS({
        lifts: [
          {
            name: 'squat',
            weight: 45
          }
        ]
      }));
    });

    it('should handle adding multiple lifts', () => {
      const state = Map({
        lifts: List.of(Map({
          name: 'squat',
          weight: 45
        }))
      });
      const action = {type: 'ADD_LIFT', name: 'bench'};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        lifts: [
          {name: 'squat', weight: 45},
          {name: 'bench', weight: 45}
        ]
      }));
    });

    it('should add lift with weight', () => {
      const action = {type: 'ADD_LIFT', name: 'squat', weight: 100};
      const nextState = reducer(undefined, action);

      expect(nextState).to.equal(fromJS({
        lifts: [{name: 'squat', weight: 100}]
      }));
    });

    it('should not add duplicate lifts', () => {
      const state = Map({
        lifts: List.of(
          Map({name: 'squat', weight: 45}),
          Map({name: 'bench', weight: 45})
        )
      });
      const action = {type: 'ADD_LIFT', name: 'bench'};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(state);
    });
  });

  describe('REMOVE_LIFT', () => {
    it('should remove lift', () => {
      const state = fromJS({
        lifts: [{name: 'squat', weight: 45}]
      });
      const action = {type: 'REMOVE_LIFT', index: 0};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        lifts: []
      }));
    });

    it('should return same state if index not found', () => {
      const state = fromJS({
        lifts: [{name: 'squat', weight: 45}]
      });
      const action = {type: 'REMOVE_LIFT', index: 1};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        lifts: [{name: 'squat', weight: 45}]
      }));
    });
  });

  describe('INCREMENT_WEIGHT', () => {
    it('should increment lift weight', () => {
      const state = fromJS({
        lifts: [{name: 'squat', weight: 45}]
      });
      const action = {type: 'INCREMENT_WEIGHT', index: 0};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        lifts: [{name: 'squat', weight: 50}]
      }));
    });

    it('should return same state if index not found', () => {
      const state = fromJS({
        lifts: [{name: 'squat', weight: 45}]
      });
      const action = {type: 'INCREMENT_WEIGHT', index: 1};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        lifts: [{name: 'squat', weight: 45}]
      }));
    });
  });

  describe('DECREMENT_WEIGHT', () => {
    it('should decrement lift weight', () => {
      const state = fromJS({
        lifts: [{name: 'squat', weight: 45}]
      });
      const action = {type: 'DECREMENT_WEIGHT', index: 0};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        lifts: [{name: 'squat', weight: 40}]
      }));
    });

    it('should return same state if index not found', () => {
      const state = fromJS({
        lifts: [{name: 'squat', weight: 45}]
      });
      const action = {type: 'DECREMENT_WEIGHT', index: 1};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        lifts: [{name: 'squat', weight: 45}]
      }));
    });
  });

  describe('SET_WEIGHT', () => {
    it('should set lift weight', () => {
      const state = fromJS({
        lifts: [{name: 'squat', weight: 45}]
      });
      const action = {type: 'SET_WEIGHT', index: 0, weight: 100};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        lifts: [{name: 'squat', weight: 100}]
      }));
    });

    it('should return same state if index not found', () => {
      const state = fromJS({
        lifts: [{name: 'squat', weight: 45}]
      });
      const action = {type: 'SET_WEIGHT', index: 1, weight: 100};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        lifts: [{name: 'squat', weight: 45}]
      }));
    });
  });
});
