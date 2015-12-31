export const addLift = (name, weight) => ({
  type: 'ADD_LIFT',
  name,
  weight
})

export const decrementWeight = index => ({
  type: 'DECREMENT_WEIGHT',
  index
})

export const incrementWeight = index => ({
  type: 'INCREMENT_WEIGHT',
  index
})

export const removeLift = index => ({
  type: 'REMOVE_LIFT',
  index
})
