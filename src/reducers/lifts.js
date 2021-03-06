import {List, Map} from 'immutable'

const addLift = (lifts, name, weight = 45) => {
  const existingLift = lifts.find(lift => lift.get('name') === name)

  if (existingLift) {
    return lifts
  }

  return lifts.push(Map({name, weight}))
}

const adjustWeight = (lifts, index, cb) => {
  if (lifts.size <= index) {
    return lifts
  }

  return lifts.update(
    index,
    lift => lift.set('weight', cb(lift.get('weight')))
  )
}

export default (lifts = List(), {index, name, type, weight} = {}) => {
  switch (type) {
    case 'ADD_LIFT':
      return addLift(lifts, name, weight)
    case 'DECREMENT_WEIGHT':
      return adjustWeight(lifts, index, currentWeight => currentWeight - 5)
    case 'INCREMENT_WEIGHT':
      return adjustWeight(lifts, index, currentWeight => currentWeight + 5)
    case 'REMOVE_LIFT':
      return lifts.delete(index)
    case 'SET_WEIGHT':
      return adjustWeight(lifts, index, () => weight)
    default:
      return lifts
  }
}
