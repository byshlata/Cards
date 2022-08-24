import React from 'react'

import { CustomButton, CustomInput, FormBody, Title } from 'components'
import { Path } from 'enums'
import { useFormik } from 'formik'
import { useAppDispatch } from 'hooks'
import style from 'pages/forgot/forgotEmail/ForgotEmail.module.sass'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { removeEmail, selectorIsLoading, selectorIsPasswordSend } from 'store'
import { sendNewPassword } from 'store/thunk/forgotThunk'

const MIN_ACCEPTABLE_LENGTH_PASSWORD = 8

type FormikErrorType = {
  password?: string
}

export const ForgotCreatePassword = () => {
  const dispatch = useAppDispatch()

  const isPasswordSend = useSelector(selectorIsPasswordSend)
  const isLoading = useSelector(selectorIsLoading)

  const navigate = useNavigate()

  if (isPasswordSend) {
    dispatch(removeEmail())
    navigate(`${Path.Login}`)
  }

  const param = useParams<'token'>()

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {}

      if (
        values.password.trim().length < MIN_ACCEPTABLE_LENGTH_PASSWORD &&
        formik.handleBlur('password')
      ) {
        errors.password = 'The password must be longer than 8 characters'
      }
      return errors
    },
    onSubmit: (values) => {
      if (param.token) {
        dispatch(sendNewPassword({ password: values.password, resetPasswordToken: param.token }))
        formik.resetForm({
          values: { password: '' },
        })
      }
    },
  })

  return (
    <FormBody width={410} height={370}>
      <Title text="Create new password" />

      <form onSubmit={formik.handleSubmit}>
        <div className={style.inputWrapper}>
          <CustomInput
            disabled={isLoading}
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            name="password"
            error={formik.errors.password}
          />
        </div>
        <p className={style.textInformationWrapper}>
          Create new password and we will send you further instructions to email{' '}
        </p>
        <div className={style.buttonWrapper}>
          <CustomButton type="submit" color="primary" disabled={isLoading}>
            Create new password
          </CustomButton>
        </div>
      </form>
    </FormBody>
  )
}
