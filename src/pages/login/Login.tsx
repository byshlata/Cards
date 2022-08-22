import React from 'react'

import { CustomInput } from 'components/input/customInput/CustomInput'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import { Title } from '../../components'

import style from './login.module.sass'

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

export const Login = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },

    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
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
      // dispatch(loginTC(values))
      formik.resetForm()
    },
  })

  const emailChangeHandler = (value: string) => {
    console.log(value)
  }
  const passwordlChangeHandler = (value: string) => {
    console.log(value)
  }

  return (
    <div className={style.container}>
      <form onSubmit={formik.handleSubmit}>
        <Title text="Sign In" />
        <CustomInput
          type={'search'}
          value={'formik.initialValues.email'}
          onChange={emailChangeHandler}
        />
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
        <CustomInput
          type={'password'}
          value={'formik.initialValues.password'}
          onChange={passwordlChangeHandler}
        />
        {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
      </form>
    </div>
  )
}
