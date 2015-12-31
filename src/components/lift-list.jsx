import {connect} from 'react-redux'
import React from 'react'

import LiftLabel from './lift-label'
import Weight from './weight'

const LiftList = ({lifts}) =>
  <div>
    {lifts.map(lift =>
      <div key={lift.name}>
        <LiftLabel name={lift.name} />
        <Weight weight={lift.weight} />
      </div>
    )}
  </div>

const mapStateToProps = state => ({lifts: state.get('lifts').toJS()})

export const LiftListContainer = connect(mapStateToProps)(LiftList)
