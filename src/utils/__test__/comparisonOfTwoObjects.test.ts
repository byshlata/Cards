import { isComparisonOfTwoObjects } from 'utils'

describe('Comparison objects', () => {
  const objOne = {
    a: 5,
    b: true,
    c: 'dsad',
  }

  const objTwo = {
    a: 2,
    b: true,
    c: 'dsad',
  }

  test('Objects should be compared', () => {
    expect(isComparisonOfTwoObjects(objOne, objOne)).toBeTruthy()
    expect(isComparisonOfTwoObjects(objOne, objTwo)).toBeFalsy()
  })
})
