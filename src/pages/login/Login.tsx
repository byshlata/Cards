import React from 'react'

import { CustomInput, CustomButton, FormBody, Title } from 'components'
import { useFormik } from 'formik'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootStoreType, selectorIsLoading } from 'store'
import { signInOnEmail } from 'store/thunk/loginThunk'

import style from './Login.module.sass'

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

export const Login = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const isLoginIn = useSelector((state: RootStoreType) => state.login.isLoginIn)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = ''
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&
        formik.handleBlur('email')
      ) {
        errors.email = 'Invalid email address'
      }
      if (!values.password) {
        errors.password = 'Required'
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      } else if (values.password.length < 3) {
        errors.password = 'Поле обязательно для заполнения'
      }
      return errors
    },
    onSubmit: (values) => {
      dispatch(signInOnEmail(values))
      formik.resetForm({
        values: { email: '', password: '', rememberMe: false },
      })
    },
  })

  const onNavigateToLogOutPage = () => {
    console.log('Q')
  }
  const onClickCheckBoxHandler = () => {
    console.log('Q')
  }

  if (isLoginIn) {
    return <Navigate to={'/profile'} />
  }

  return (
    <FormBody width={413} height={552}>
      <Title text="Sign in" />
      <form onSubmit={formik.handleSubmit}>
        <div className={style.inputWrapper}>
          <CustomInput
            onChange={formik.handleChange}
            value={formik.values.email}
            type="simple"
            name="email"
            error={formik.errors.email}
          />
        </div>
        <div className={style.inputWrapper}>
          <CustomInput
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            name="password"
            error={formik.errors.password}
          />
        </div>
        <div className={style.checkboxWrapper}>
          <input type="checkbox" checked={formik.values.rememberMe} />
          <div onClick={onClickCheckBoxHandler}>Remember me</div>
        </div>
        <div className={style.forgotPassword}>Forgot Password?</div>
        <div className={style.buttonWrapper}>
          <CustomButton type="submit" color="primary" disabled={isLoading}>
            Sign In
          </CustomButton>
        </div>
      </form>
      <div>
        <p className={style.textBlockQuestion}>Already have an account?</p>
        <CustomButton
          type="button"
          color="link"
          onClick={onNavigateToLogOutPage}
          disabled={isLoading}
        >
          Sign Up
        </CustomButton>
      </div>
    </FormBody>
  )
}
