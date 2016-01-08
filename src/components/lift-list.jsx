import {connect} from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import React from 'react'

import {decrementWeight, incrementWeight, removeLift, setWeight} from '../actions'
import LiftLabel from './lift-label'
import Weight from './weight'

const LiftList = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    const {change, decrement, deleteHandler, increment, lifts} = this.props
    return <div>
      {lifts.toJS().map((lift, index) =>
        <div key={lift.name}>
          <LiftLabel name={lift.name} />
          <Weight
            change={change}
            decrement={decrement}
            delete={deleteHandler}
            increment={increment}
            index={index}
            weight={lift.weight}
          />
        </div>
      )}
    </div>
  }
})

LiftList.propTypes = {
  decrement: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired,
  lifts: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      name: React.PropTypes.string.isRequired,
      weight: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
      ]).isRequired
    })
  ).isRequired
}

const mapStateToProps = ({lifts}) => ({lifts})

const actions = {
  change: setWeight,
  decrement: decrementWeight,
  deleteHandler: removeLift,
  increment: incrementWeight
}

export default connect(
  mapStateToProps,
  actions
)(LiftList)
