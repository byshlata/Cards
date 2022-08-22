import React from 'react'

import { ForgotEmail, ForgotSendLetter } from 'pages/forgot'
import { useSelector } from 'react-redux'
import { selectorEmail } from 'store'

export const Forgot = () => {
  const email = useSelector(selectorEmail)

  return email ? <ForgotSendLetter /> : <ForgotEmail />
}
