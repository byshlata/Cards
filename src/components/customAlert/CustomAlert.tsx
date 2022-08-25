import React, { useEffect, useState } from 'react'

import { CustomAlertChild } from 'components/customAlert/CustomAlertChild'
import { AlertElementType } from 'components/customAlert/types/alertElementType'
import { CustomAlertType } from 'components/customAlert/types/CusstomAlertType'
import { addAlertElement } from 'components/customAlert/utils/addAlertElement'
import { createAlertObj } from 'components/customAlert/utils/createAlertObj'
import { removeAlertElement } from 'components/customAlert/utils/removeAlertElement'
import { Nullable } from 'types'

export const CustomAlert = React.memo(({ message, severity }: CustomAlertType) => {
  const [alerts, setAlerts] = useState<Nullable<AlertElementType[]>>(null)
  const onCloseAlert = (id: string) => {
    const newAlerts = removeAlertElement(alerts, id)
    setAlerts(newAlerts)
  }

  useEffect(() => {
    const newAlert = createAlertObj(message)
    const alertsArray = addAlertElement(alerts, newAlert)
    setAlerts(alertsArray)
  }, [message])

  return (
    <>
      {alerts?.map((element) => (
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
