import React, { useState } from 'react'

import { CustomButtonBox } from 'components'

import style from './ButtonChoiceGrope.module.sass'

type ButtonChoiceGropeType = {
  onClickButton: (value: string) => void
  disabled: boolean
  authUserId: string
  userIdParam: string
}

export const ButtonChoiceGrope = ({
  onClickButton,
  disabled,
  authUserId,
  userIdParam,
}: ButtonChoiceGropeType) => {
  const [isUserCards, setIsUserCards] = useState<boolean>(!!userIdParam)

  const onClickUserButton = () => {
    if (!isUserCards) {
      setIsUserCards(true)
    }
    onClickButton(authUserId)
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
