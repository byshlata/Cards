import React, { useCallback } from 'react'

import { CustomButton, CustomInput, FormBody, Title } from 'components'
import { useFormik } from 'formik'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { RootStoreType, selectorIsLoading } from 'store'
import { RegistrationThunk } from 'store/thunk/registrationThunk'
import * as yup from 'yup'

import { Path } from '../../enums'

import style from './Registration.module.sass'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email format !')
    .required('Email is required please !'),
  password: yup
    .string()
    .required('No password provided.')
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    .min(8, 'Password is too short - 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

  confirmPassword: yup.string().test('password', function (value) {
    return this.parent.password === value
  }),
})

export const Registration = () => {
  const dispatch = useAppDispatch()

  const isRegistration = useSelector<RootStoreType, boolean>(
    (state) => state.registration.isRegistration
  )

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
    onSubmit: (values) => {
      dispatch(RegistrationThunk(values))
      formik.resetForm({
        values: { email: '', password: '', confirmPassword: '' },
      })
    },
  })

  if (isRegistration) {
    return <Navigate to={'/login'} />
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
            name="confirmPassword"
            error={formik.errors.confirmPassword}
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
