export const isComparisonOfTwoObjects = <T>(objOne: T, objTwo: T): boolean => {
  for (let key in objOne) {
    if (objOne[key] !== objTwo[key]) {
      return false
    }
  }

  return true
}
