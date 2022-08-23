import React from 'react'

import { CustomButton, FormBody, Title } from 'components'
import { CustomInput } from 'components/input'
import { Field, FieldProps, FormikProvider, useFormik } from 'formik'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectorsIsLoading } from 'store'
import { sendLetterOnEmail } from 'store/thunk/forgotThunk'

import style from './ForgotEmail.module.sass'

export type FormikErrorType = {
  email?: string
}

export const ForgotEmail = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorsIsLoading)

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      console.log(formik.handleBlur('email'))
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
      dispatch(sendLetterOnEmail(values.email))
      formik.resetForm({
        values: { email: '' },
      })
    },
  })

  const onNavigateToLoginPage = () => {}

  return (
    <FormBody width={410} height={460}>
      <Title text="Forgot your password?" />
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <div className={style.inputWrapper}>
            <Field name="email">
              {({ form, meta, field }: FieldProps) => (
                <CustomInput
                  field={field}
                  form={form}
                  meta={meta}
                  type="simple"
                  name="email"
                  error={formik.errors.email}
                />
              )}
            </Field>
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
      </FormikProvider>
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
