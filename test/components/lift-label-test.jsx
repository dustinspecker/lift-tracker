import {expect} from 'chai';
import {findRenderedDOMComponentWithTag, renderIntoDocument} from 'react-addons-test-utils';
import React from 'react';

import LiftLabel from '../../src/components/lift-label';

describe('LiftLabel', () => {
  it('should display name of lift', () => {
    const component = renderIntoDocument(<LiftLabel name='squat' />);
    const name = findRenderedDOMComponentWithTag(component, 'div');

    expect(name.textContent).to.equal('squat');
  });
});
