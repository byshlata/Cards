import React, { useCallback } from 'react'

import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import style from './Registration.module.sass'

import { CustomButton, CustomInput, FormBody, Title } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { RootStoreType, selectorIsLoading, selectorIsRegistration, RegistrationThunk } from 'store'
import { createErrorSchema } from 'utils'

const schema = yup.object().shape(createErrorSchema(['email', 'password', 'confirmPassword']))

export const Registration = () => {
  const dispatch = useAppDispatch()

  const isRegistration = useSelector<RootStoreType, boolean>(selectorIsRegistration)

  const isLoading = useSelector(selectorIsLoading)

  const navigate = useNavigate()
  const onNavigateToLoginPage = useCallback(() => {
    navigate(`${Path.Login}`)
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(RegistrationThunk(values))
      formik.resetForm({
        values: { email: '', password: '', confirmPassword: '' },
      })
    },
  })

  if (isRegistration) {
    return <Navigate to={`${Path.Login}`} />
  }

  const errorEmail = formik.touched.email ? formik.errors.email : undefined
  const errorPassword = formik.touched.password ? formik.errors.password : undefined
  const errorConfirmPassword = formik.touched.confirmPassword
    ? formik.errors.confirmPassword
    : undefined

  return (
    <FormBody width={415} height={550}>
      <Title text="Sign Up" />
      <form onSubmit={formik.handleSubmit}>
        <div className={style.inputWrapper}>
          <CustomInput
            value={formik.values.email}
            onChange={formik.handleChange}
            type="simple"
            name="email"
            error={errorEmail}
          />
        </div>
        <div className={style.inputWrapper}>
          <CustomInput
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            name="password"
            error={errorPassword}
          />
        </div>
        <div className={style.inputWrapper}>
          <CustomInput
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            type="password"
            name="confirmPassword"
            error={errorConfirmPassword}
          />
        </div>
        <div className={style.buttonWrapper}>
          <CustomButton type="submit" color="primary" disabled={isLoading}>
            Sign Up
          </CustomButton>
        </div>
      </form>
      <div>
        <p className={style.textBlockQuestion}>Already have an account?</p>
        <CustomButton
          type="button"
          color="link"
          onClick={onNavigateToLoginPage}
          disabled={isLoading}
        >
          Sign In
        </CustomButton>
      </div>
    </FormBody>
  )
}
