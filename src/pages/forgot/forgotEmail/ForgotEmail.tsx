import React from 'react'

import { CustomButton, CustomInput, FormBody, Title } from 'components'
import { useCustomInput } from 'components/input/customInput/hooks'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectorsIsLoading, sendLetterOnEmail } from 'store'

import style from './ForgotEmail.module.sass'

export const ForgotEmail = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorsIsLoading)

  const { value, setValue } = useCustomInput('')

  const onSendLetterEmail = () => {
    dispatch(sendLetterOnEmail(value))
  }

  const onNavigateToLoginPage = () => {}

  return (
    <FormBody width={410} height={460}>
      <Title text="Forgot your password?" />
      <div className={style.inputWrapper}>
        <CustomInput value={value} onChange={setValue} type="simple" name="Email" />
      </div>
      <p className={style.textInformationWrapper}>
        Enter your email address and we will send you further instructions
      </p>
      <div className={style.buttonWrapper}>
        <CustomButton type="primary" disabled={isLoading} onClick={onSendLetterEmail}>
          Send Instructions
        </CustomButton>
      </div>
      <p className={style.textBlockQuestion}>Did you remember your password?</p>
      <div>
        <CustomButton type="link" onClick={onNavigateToLoginPage} disabled={isLoading}>
          Try logging in
        </CustomButton>
      </div>
    </FormBody>
  )
}
