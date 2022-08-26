import React from 'react'

import { CustomButton, CustomInput, FormBody, Title } from 'components'
import { useFormik } from 'formik'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectorIsAuth, selectorIsLoading, selectorUserId } from 'store'
import { authThunk } from 'store/thunk/loginThunk'
import * as yup from 'yup'

import style from './Login.module.sass'

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
})

export const Login = () => {
  console.log('login')
  const dispatch = useAppDispatch()
  const isLoading = useSelector(selectorIsLoading)
  const isAuth = useSelector(selectorIsAuth)
  const userId = useSelector(selectorUserId)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(authThunk(values))
      formik.resetForm({
        values: { email: '', password: '', rememberMe: false },
      })
    },
  })

  if (isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <FormBody width={415} height={550}>
      <Title text="Sign in" />
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
        <div>
          <label>
            <input
              className={style.inputChecked}
              type="checkbox"
              {...formik.getFieldProps('rememberMe')}
            />
            Remember Me
          </label>
        </div>
        <div className={style.forgotPassword}>
          <a href={'/forgot'}> Forgot Password?</a>
        </div>
        <div className={style.buttonWrapper}>
          <CustomButton type="submit" color="primary" disabled={isLoading}>
            Sign In
          </CustomButton>
        </div>
      </form>
      <div>
        <p className={style.textBlockQuestion}>Already have an account?</p>
        <CustomButton type="button" color="link" disabled={isLoading}>
          <a href="/registration"> Sign Up</a>
        </CustomButton>
      </div>
    </FormBody>
  )
}
