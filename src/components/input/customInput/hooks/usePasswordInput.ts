import { useState } from 'react'

import { InputType } from '../types/CustomInputType'

export const usePasswordInput = (type: InputType, error = '', name = '') => {
  const [isWatchPassword, setIsWatchPassword] = useState<boolean>(false)

  const typeInputValue = isWatchPassword ? 'password' : 'text'

  const onWatchPassword = (): void => {
    setIsWatchPassword(!isWatchPassword)
  }

  const labelName = error ? error : name

  const isEyeIcon = type === 'password'
  const isSearchIcon = type === 'search'
  const isEyeOpenIcon = type === 'password' && isWatchPassword

  return { typeInputValue, onWatchPassword, isEyeIcon, isEyeOpenIcon, isSearchIcon, labelName }
}
