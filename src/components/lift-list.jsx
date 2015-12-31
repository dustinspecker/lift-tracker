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

LiftList.propTypes = {
  decrement: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired,
  lifts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      weight: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
      ]).isRequired
    })
  ).isRequired
}

const mapStateToProps = ({lifts}) => ({lifts: lifts.toJS()})

const actions = {
  decrement: decrementWeight,
  increment: incrementWeight
}

export default connect(
  mapStateToProps,
  actions
)(LiftList)
