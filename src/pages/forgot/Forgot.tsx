import React from 'react'

import { useSelector } from 'react-redux'
import { selectorEmail } from 'store'

import { ForgotEmail } from './forgotEmail/ForgotEmail'
import { ForgotSendLetter } from './forgotSendLetter/ForgotSendLetter'

export const Forgot = () => {
  const email = useSelector(selectorEmail)

  return email ? <ForgotSendLetter /> : <ForgotEmail />
}
