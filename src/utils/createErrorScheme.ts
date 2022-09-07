import { OptionValue } from 'enums'
import * as yup from 'yup'
import { RequiredStringSchema } from 'yup/lib/string'
import { AnyObject } from 'yup/lib/types'

type KeySchemeType = keyof SchemaElementType

type SchemaElementType = {
  email?: RequiredStringSchema<string | undefined, AnyObject>
  password?: RequiredStringSchema<string | undefined, AnyObject>
  confirmPassword?: yup.StringSchema<string | undefined, AnyObject, string | undefined>
}

export const createErrorSchema = (params: KeySchemeType[]) => {
  const schemaElement: SchemaElementType = {
    email: yup
      .string()
      .email('Please enter a valid email format!')
      .required('Email is required please!'),

    password: yup
      .string()
      .required('No password provided.')
      .min(OptionValue.MinLengthPassword, 'Password is too short - 8 chars minimum.'),

    confirmPassword: yup.string().test('password', function (value) {
      return this.parent.password === value
    }),
  }

  const schema: SchemaElementType = {}

  params.forEach((element) => {
    if (element in schemaElement) {
      // @ts-ignore
      schema[element] = schemaElement[element]
    }
  })

  return schema
}
