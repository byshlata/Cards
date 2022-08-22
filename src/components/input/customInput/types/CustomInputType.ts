export type CustomInputType = {
  name?: string
  type: InputType
  error?: string
  disabled?: boolean
  onClick?: () => void
}

export type InputType = 'search' | 'password' | 'simple'
