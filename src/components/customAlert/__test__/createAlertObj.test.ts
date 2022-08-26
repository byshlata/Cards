import { createAlertObj } from 'components/customAlert/utils'

describe('Create element ', () => {
  test('Element should be created', () => {
    expect(createAlertObj('000').message).toBe('000')
    expect(createAlertObj('000').id).toBeDefined()
  })
})
