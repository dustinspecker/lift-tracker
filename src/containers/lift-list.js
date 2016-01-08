import {connect} from 'react-redux'

import {decrementWeight, incrementWeight, removeLift, setWeight} from '../actions'
import LiftList from '../components/lift-list'

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
