import {expect} from 'chai';
import React from 'react';
import {renderIntoDocument, scryRenderedComponentsWithType} from 'react-addons-test-utils';

import LiftLabel from '../../src/components/lift-label';
import LiftList from '../../src/components/lift-list';

describe('LiftList', () => {
  it('should list lifts', () => {
    const lifts = [
      {name: 'squat', weight: 200},
      {name: 'bench', weight: 100},
      {name: 'deadlift', weight: 300}
    ];
    const component = renderIntoDocument(
      <LiftList lifts={lifts} />
    );
    const liftLabels = scryRenderedComponentsWithType(component, LiftLabel);

    expect(liftLabels.length).to.equal(3);
  });
});
