import {expect} from 'chai'
import {fromJS, Map} from 'immutable'
import React from 'react'
import {renderIntoDocument, scryRenderedComponentsWithType} from 'react-addons-test-utils'

import LiftLabel from '../../src/components/lift-label'
import {LiftListContainer} from '../../src/components/lift-list'

describe('LiftList', () => {
  it('should list lifts', () => {
    const lifts = fromJS([
      {name: 'squat', weight: 200},
      {name: 'bench', weight: 100},
      {name: 'deadlift', weight: 300}
    ])

    const store = {
      getState() {
        return Map({lifts})
      },
      subscribe() {
      },
      dispatch() {
      }
    }

    const component = renderIntoDocument(
      <LiftListContainer store={store} />
    )
    const liftLabels = scryRenderedComponentsWithType(component, LiftLabel)

    expect(liftLabels.length).to.equal(3)
  })
})
