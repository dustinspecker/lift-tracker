import {expect} from 'chai';
import React from 'react';
import {renderIntoDocument, findRenderedDOMComponentWithTag} from 'react-addons-test-utils';

import Weight from '../../src/components/weight';

describe('Weight', () => {
  it('should display weight in input', () => {
    const component = renderIntoDocument(
      <Weight weight='45' />
    );
    const weightInput = findRenderedDOMComponentWithTag(component, 'input');

    expect(weightInput.value).to.equal('45');
  });
});
