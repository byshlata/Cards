import React, { useCallback, useEffect, useState, memo } from 'react'

import { AlertElementType } from './types'
import { CustomAlertType } from './types/CusstomAlertType'

import { CustomAlertChild } from 'components/customAlert/CustomAlertChild'
import { addAlertElement } from 'components/customAlert/utils/addAlertElement'
import { createAlertObj } from 'components/customAlert/utils/createAlertObj'
import { removeAlertElement } from 'components/customAlert/utils/removeAlertElement'
import { Nullable } from 'types'

export const CustomAlert = memo(({ message, severity }: CustomAlertType) => {
  const [alerts, setAlerts] = useState<Nullable<AlertElementType[]>>(null)

  const onCloseAlert = useCallback(
    (id: string) => {
      const newAlerts = removeAlertElement(alerts, id)

      setAlerts(newAlerts)
    },
    [message.message]
  )

  useEffect(() => {
    if (message.message) {
      const newAlert = createAlertObj(message.message)
      const alertsArray = addAlertElement(alerts, newAlert)

      setAlerts(alertsArray)
    }
  }, [message])

  return (
    <>
      {alerts?.map(element => (
        <CustomAlertChild
          key={element.id}
          message={element.message}
          onClose={onCloseAlert}
          severity={severity}
          id={element.id}
        />
      ))}
    </>
  )
})
