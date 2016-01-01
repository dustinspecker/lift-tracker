import {findRenderedDOMComponentWithTag, renderIntoDocument} from 'react-addons-test-utils'
import React from 'react'
import test from 'ava'

import '../_helper'
import LiftLabel from '../../src/components/lift-label'

test('should display name of lift', t => {
  const component = renderIntoDocument(<LiftLabel name='squat' />)
  const name = findRenderedDOMComponentWithTag(component, 'div')

  t.is(name.textContent, 'squat')
})
