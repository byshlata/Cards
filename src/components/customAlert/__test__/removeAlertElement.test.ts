import { useStyleCustomButton } from 'components/button/customButton/hooks/useStyleCustomButton'
import { AlertElementType } from 'components/customAlert/types'
import { addAlertElement, removeAlertElement } from 'components/customAlert/utils'

describe('Remove element in array', () => {
  let alertElements: AlertElementType[] = []

  beforeEach(() => {
    alertElements = [
      { id: '1', message: '1000' },
      { id: '2', message: '2000' },
    ]
  })

  test('Element should be removed', () => {
    expect(removeAlertElement(alertElements, '1')).not.toEqual(alertElements)
    expect(removeAlertElement(alertElements, '1')).toEqual([{ id: '2', message: '2000' }])
    expect(removeAlertElement(null, '1')).toBeNull()
  })
})
