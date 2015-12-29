import {expect} from 'chai';

import * as actions from '../src/actions';

describe('actions', () => {
  it('should return add lift action', () => {
    expect(actions.addLift('squat', 100)).to.eql({
      type: 'ADD_LIFT',
      name: 'squat',
      weight: 100
    });
  });
});
