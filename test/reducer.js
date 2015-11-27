import {expect} from 'chai';
import {fromJS, Map} from 'immutable';

import reducer from '../src/reducer';

describe('reducer', () => {
  it('should handle initial state', () => {
    const state = fromJS({
      lifts: []
    });

    expect(reducer()).to.equal(state);
  });
});
