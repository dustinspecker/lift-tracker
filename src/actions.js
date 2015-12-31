export const addLift = (name, weight) => ({
  type: 'ADD_LIFT',
  name,
  weight
})

export const incrementWeight = index => ({
  type: 'INCREMENT_WEIGHT',
  index
})
