import React from 'react'

import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'

import { CustomButton, CustomInput, FormBody, Title } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import style from 'pages/forgot/forgotEmail/ForgotEmail.module.sass'
import { removeEmail, selectorIsLoading, selectorIsPasswordSend, sendNewPassword } from 'store'
import { createErrorSchema } from 'utils'

const schema = yup.object().shape(createErrorSchema(['password']))

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
    validationSchema: schema,
    onSubmit: (values) => {
      if (param.token) {
        dispatch(sendNewPassword({ password: values.password, resetPasswordToken: param.token }))
        formik.resetForm({
          values: { password: '' },
        })
      }
    },
  })

  const errorPassword = formik.touched.password ? formik.errors.password : undefined
  const isDisabledButton = isLoading || !formik.isValid

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
            error={errorPassword}
          />
        </div>
        <p className={style.textInformationWrapper}>
          Create new password and we will send you further instructions to email{' '}
        </p>
        <div className={style.buttonWrapper}>
          <CustomButton type="submit" color="primary" disabled={isDisabledButton}>
            Create new password
          </CustomButton>
        </div>
      </form>
    </FormBody>
  )
}
