import {expect} from 'chai';
import React from 'react/addons';

import LiftLabel from '../../src/components/lift-label';
import LiftList from '../../src/components/lift-list';

const {renderIntoDocument, scryRenderedComponentsWithType} = React.addons.TestUtils;

describe('LiftList', () => {
  it('should list lifts', () => {
    const component = renderIntoDocument(
      <LiftList
        lifts={['squat', 'bench', 'dead']} />
    );
    const lifts = scryRenderedComponentsWithType(component, LiftLabel);

    expect(lifts.length).to.equal(3);
  });
});
