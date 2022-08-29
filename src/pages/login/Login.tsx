import React from 'react'

import { CustomButton, CustomInput, FormBody, Title } from 'components'
import { OptionValue, Path } from 'enums'
import { useFormik } from 'formik'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectorIsAuth, selectorIsLoading, selectorUserId } from 'store'
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
  const isAuth = useSelector(selectorIsAuth)
  const userId = useSelector(selectorUserId)

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
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
      if (!values.password && formik.handleBlur('password')) {
        errors.password = 'Required'
      } else if (values.password.length < OptionValue.MinLengthPassword) {
        errors.password = 'The field is required to fill in'
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

  if (isAuth) {
    navigate(`${Path.Profile}${Path.Root}${userId}`)
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
    </FormBody>
  )
}
