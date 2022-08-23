import React, { useEffect, useState } from 'react'

import { CustomButton, FormBody, LetterSendIcon, Title } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectorIsLoading } from 'store'
import { selectorEmail } from 'store/selectors/selectors'
import { removeEmail } from 'store/slice/forgotSlice'

import style from './ForgotSendLetter.module.sass'

const COUNT_VAlUE = 5
const CONST_DELAY = 1000

export const ForgotSendLetter = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const email = useSelector(selectorEmail)

  const navigate = useNavigate()

  const [counterDown, setCounterDown] = useState<number>(COUNT_VAlUE)
  const onNavigateToLoginPage = () => {}

  useEffect(() => {
    setTimeout(() => {
      setCounterDown(counterDown - 1)
    }, CONST_DELAY)
  }, [counterDown])

  if (counterDown === -1) {
    dispatch(removeEmail())
    navigate(`${Path.Login}`)
  }

  return (
    <FormBody width={410} height={410}>
      <Title text="Check Email" />
      <div className={style.iconSendWrapper}>
        <LetterSendIcon width={110} />
      </div>
      <p className={style.textInformationWrapper}>
        We’ve sent an Email with instructions to {email}
      </p>
      <p className={style.textInformationWrapper}>Going to the sing in page via... {counterDown}</p>
      <div className={style.buttonWrapper}>
        <CustomButton color="primary" disabled={isLoading} onClick={onNavigateToLoginPage}>
          Back to login
        </CustomButton>
      </div>
    </FormBody>
  )
}
