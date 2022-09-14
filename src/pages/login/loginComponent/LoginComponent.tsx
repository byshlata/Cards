import React, { FC } from 'react'

import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import common from './../../../assets/style/container.module.sass'
import style from './LoginComponent.module.sass'

import { CustomButton, CustomInput, FormBody, Title } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { selectorIsAuth, selectorIsLoading, selectorAuthUserId, authThunk } from 'store'
import { createErrorSchema } from 'utils'

const schema = yup.object().shape(createErrorSchema(['email', 'password']))

export const LoginComponent: FC = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const isAuth = useSelector(selectorIsAuth)
  const userId = useSelector(selectorAuthUserId)

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validateOnBlur: true,
    validationSchema: schema,
    onSubmit: values => {
      dispatch(authThunk(values))
      formik.resetForm({
        values: { email: '', password: '', rememberMe: false },
      })
    },
  })

  const errorEmail = formik.touched.email ? formik.errors.email : undefined
  const errorPassword = formik.touched.password ? formik.errors.password : undefined

  if (isAuth) {
    navigate(`${Path.Profile}${Path.Root}${userId}`)
  }

  return (
    <>
      <div className={common.container}>
        <Title text="Sign in" />
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
          <div>
            <label>
              <input type="checkbox" name="rememberMe" />
              Remember Me
            </label>
          </div>
          <NavLink to={`${Path.Forgot}`}>
            <div className={style.forgotPassword}>Forgot Password?</div>
          </NavLink>
          <div className={style.buttonWrapper}>
            <CustomButton type="submit" color="primary" disabled={isLoading}>
              Sign In
            </CustomButton>
          </div>
        </form>
        <div>
          <p className={style.textBlockQuestion}>Already have an account?</p>
          <CustomButton type="button" color="link" disabled={isLoading}>
            <NavLink to={`${Path.Register}`}>Sign Up</NavLink>
          </CustomButton>
        </div>
      </div>
    </>
  )
}
