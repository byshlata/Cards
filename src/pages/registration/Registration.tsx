import React from 'react'

import { CustomButton, CustomInput, FormBody, Title } from 'components'
import { OptionValue } from 'enums'
import { Field, FieldProps, FormikProvider, useFormik } from 'formik'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootStoreType, selectorIsLoading } from 'store'
import { RegistrationThunk } from 'store/thunk/registrationThunk'

import style from './Registration.module.sass'

type FormikErrorType = {
  email?: string
  password?: string
  confirmPassword?: string
}

export const Registration = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const isRegistration = useSelector<RootStoreType, boolean>(
    (state) => state.registration.isRegistration
  )

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email && formik.handleBlur('email')) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&
        formik.handleBlur('email')
      ) {
        errors.email = 'Invalid email address'
      }
      if (!values.password) {
        errors.password = 'Required'
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      } else if (values.password.length < OptionValue.MinLengthPassword) {
        errors.password = 'Поле обязательно для заполнения'
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      } else if (values.password.length < 3) {
        errors.confirmPassword = 'Поле обязательно для заполнения'
      }
      if (values.password !== values.confirmPassword) {
        errors.password = 'Введите одинаковы пароль'
        errors.confirmPassword = 'Поле обязательно для заполнения'
      }
      return errors
    },
    onSubmit: (values) => {
      dispatch(RegistrationThunk(values))
      formik.resetForm({
        values: { email: '', password: '', confirmPassword: '' },
      })
    },
  })

  if (isRegistration) {
    // eslint-disable-next-line no-debugger
    debugger
    return <Navigate to={'/profile'} />
  }

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
            error={formik.errors.email}
          />
        </div>
        <div className={style.inputWrapper}>
          <CustomInput
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            name="password"
            error={formik.errors.password}
          />
        </div>
        <div className={style.inputWrapper}>
          <CustomInput
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            type="password"
            name="confirm password"
            error={formik.errors.password}
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
        <CustomButton type="button" color="link" disabled={isLoading}>
          <a href="/login">Sign In</a>
        </CustomButton>
      </div>
    </FormBody>
  )
}
