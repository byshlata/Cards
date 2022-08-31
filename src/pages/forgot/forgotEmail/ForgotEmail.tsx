import React, { useCallback, memo } from 'react'

import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import style from './ForgotEmail.module.sass'

import { CustomButton, CustomInput, FormBody, Title } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { selectorIsLoading, sendLetterOnEmail } from 'store'
import { createErrorSchema } from 'utils'

const name = 'Aliaksandr'

const schema = yup.object().shape(createErrorSchema(['email']))

export const ForgotEmail = memo(() => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(sendLetterOnEmail({ email: values.email, name }))
      formik.resetForm({
        values: { email: '' },
      })
    },
  })

  const onNavigateToLoginPage = useCallback(() => {
    navigate(`${Path.Login}`)
  }, [])

  const errorEmail = formik.touched.email ? formik.errors.email : undefined
  const isDisabledButton = isLoading || !formik.isValid

  return (
    <FormBody width={410} height={460}>
      <Title text="Forgot your password?" />
      <form onSubmit={formik.handleSubmit}>
        <div className={style.inputWrapper}>
          <CustomInput
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            type="simple"
            error={errorEmail}
            disabled={isLoading}
          />
        </div>
        <p className={style.textInformationWrapper}>
          Enter your email address and we will send you further instructions
        </p>
        <div className={style.buttonWrapper}>
          <CustomButton type="submit" color="primary" disabled={isDisabledButton}>
            Send Instructions
          </CustomButton>
        </div>
      </form>

      <div>
        <p className={style.textBlockQuestion}>Did you remember your password?</p>
        <CustomButton
          type="button"
          color="link"
          onClick={onNavigateToLoginPage}
          disabled={isLoading}
        >
          Try logging in
        </CustomButton>
      </div>
    </FormBody>
  )
})
