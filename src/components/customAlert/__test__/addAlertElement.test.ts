import { AlertElementType } from 'components/customAlert/types'
import { addAlertElement } from 'components/customAlert/utils'

describe('Add element in array', () => {
  let alertElements: AlertElementType[] = []
  let alertElement: AlertElementType = { id: '0', message: '0000' }

  beforeEach(() => {
    alertElements = [
      { id: '1', message: '1000' },
      { id: '2', message: '2000' },
    ]
  })

  test('Element should be added', () => {
    expect(addAlertElement(alertElements, alertElement)).not.toEqual(alertElements)
    expect(addAlertElement(alertElements, alertElement)).toEqual([
      { id: '1', message: '1000' },
      { id: '2', message: '2000' },
      { id: '0', message: '0000' },
    ])
    expect(addAlertElement(null, alertElement)).toEqual([alertElement])
  })
})
