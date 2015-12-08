export function addLift(name, weight) {
  return {
    type: 'ADD_LIFT',
    name,
    weight
  };
}
