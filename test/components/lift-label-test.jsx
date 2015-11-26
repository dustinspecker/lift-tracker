import {expect} from 'chai';
import React from 'react/addons';

import LiftLabel from '../../src/components/lift-label';

const {findRenderedDOMComponentWithTag, renderIntoDocument} = React.addons.TestUtils;

describe('LiftLabel', () => {
  it('should display name of lift', () => {
    const component = renderIntoDocument(<LiftLabel name='squat' />);
    const name = findRenderedDOMComponentWithTag(component, 'div');

    expect(name.textContent).to.equal('squat');
  });
});
