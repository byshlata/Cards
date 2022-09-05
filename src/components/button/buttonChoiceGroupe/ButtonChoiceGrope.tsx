import React, { useState } from 'react'

import { CustomButtonBox } from 'components/index'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectorIsLoading, selectorAuthUserId, setPackParams } from 'store'

import style from './ButtonChoiceGrope.module.sass'

type ButtonChoiceGropeType = {
  onClickButton: (value: string) => void
  disabled: boolean
  value: string
}

export const ButtonChoiceGrope = ({ onClickButton, disabled, value }: ButtonChoiceGropeType) => {
  const [isUserCards, setIsUserCards] = useState<boolean>(false)

  const onClickUserButton = () => {
    if (!isUserCards) {
      setIsUserCards(true)
    }
    onClickButton(value)
  }

  const onClickAllButton = () => {
    if (isUserCards) {
      setIsUserCards(false)
    }
    onClickButton('')
  }

  return (
    <div className={style.buttonWrapper}>
      <CustomButtonBox
        color={isUserCards ? 'primary' : 'secondary'}
        borderRadius={'2px 0 0 2px'}
        onClick={onClickUserButton}
        disabled={disabled}
      >
        My
      </CustomButtonBox>
      <CustomButtonBox
        color={!isUserCards ? 'primary' : 'secondary'}
        borderRadius={'0 2px 2px 0'}
        onClick={onClickAllButton}
        disabled={disabled}
      >
        All
      </CustomButtonBox>
    </div>
  )
}
