import React from 'react'

import { useSelector } from 'react-redux'

import { ForgotEmail } from './forgotEmail/ForgotEmail'
import { ForgotSendLetter } from './forgotSendLetter/ForgotSendLetter'

import { selectorEmail } from 'store'

export const Forgot = () => {
  const email = useSelector(selectorEmail)

  return email ? <ForgotSendLetter /> : <ForgotEmail />
}
