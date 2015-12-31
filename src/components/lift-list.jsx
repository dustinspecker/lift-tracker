import {connect} from 'react-redux'
import React from 'react'

import {decrementWeight, incrementWeight} from '../actions'
import LiftLabel from './lift-label'
import Weight from './weight'

const LiftList = ({decrement, increment, lifts}) =>
  <div>
    {lifts.map((lift, index) =>
      <div key={lift.name}>
        <LiftLabel name={lift.name} />
        <Weight
          decrement={decrement}
          increment={increment}
          index={index}
          weight={lift.weight}
        />
      </div>
    )}
  </div>

const mapStateToProps = ({lifts}) => ({lifts: lifts.toJS()})

const actions = {
  decrement: decrementWeight,
  increment: incrementWeight
}

export default connect(
  mapStateToProps,
  actions
)(LiftList)
