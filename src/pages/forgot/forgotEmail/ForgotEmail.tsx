import React from 'react'

import { CustomButton, CustomInput, FormBody, Title } from 'components'
import { Path } from 'enums'
import { useFormik } from 'formik'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectorIsLoading } from 'store'
import { sendLetterOnEmail } from 'store/thunk/forgotThunk'

import style from './ForgotEmail.module.sass'

const name = 'Aliaksandr'

type FormikErrorType = {
  email?: string
}

export const ForgotEmail = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
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
      return errors
    },
    onSubmit: (values) => {
      dispatch(sendLetterOnEmail({ email: values.email, name }))
      formik.resetForm({
        values: { email: '' },
      })
    },
  })

  const onNavigateToLoginPage = () => {
    navigate(`${Path.Login}`)
  }

  return (
    <FormBody width={410} height={460}>
      <Title text="Forgot your password?" />
      <form onSubmit={formik.handleSubmit}>
        <div className={style.inputWrapper}>
          <CustomInput
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            type="simple"
            error={formik.errors.email}
          />
        </div>
        <p className={style.textInformationWrapper}>
          Enter your email address and we will send you further instructions
        </p>
        <div className={style.buttonWrapper}>
          <CustomButton type="submit" color="primary" disabled={isLoading}>
            Send Instructions
          </CustomButton>
        </div>
      </form>

      <div>
        <p className={style.textBlockQuestion}>Did you remember your password?</p>
        <CustomButton
          type="button"
          color="link"
          onClick={onNavigateToLoginPage}
          disabled={isLoading}
        >
          Try logging in
        </CustomButton>
      </div>
    </FormBody>
  )
}
