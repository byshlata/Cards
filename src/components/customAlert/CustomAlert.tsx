import React, { ReactElement, useEffect, useState } from 'react'

import { CustomAlertChild } from 'components/customAlert/CustomAlertChild'

import { CustomAlertChildType } from './types'

let START_NUMBER_ALERT = 0
let ArrayAlert: ReactElement[] = []

export const CustomAlert = React.memo(({ textMessage, severity }: CustomAlertChildType) => {
  const [numberAlert, setNumberAlert] = useState<number>(START_NUMBER_ALERT)

  useEffect(() => {
    START_NUMBER_ALERT++
    ArrayAlert.push(<CustomAlertChild textMessage={textMessage} severity={severity} />)
  }, [textMessage])

  console.log(START_NUMBER_ALERT)

  return <> {ArrayAlert.map((element) => element)}</>
})
