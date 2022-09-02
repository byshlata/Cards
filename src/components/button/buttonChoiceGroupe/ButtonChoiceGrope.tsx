import React, { useState } from 'react'

import { CustomButtonBox } from 'components/index'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectorIsLoading, selectorAuthUserId, setPackParams } from 'store'

import style from './ButtonChoiceGrope.module.sass'

export const ButtonChoiceGrope = () => {
  const dispatch = useAppDispatch()

  const disabled = useSelector(selectorIsLoading)
  const idUser = useSelector(selectorAuthUserId)

  const [isUserCards, setIsUserCards] = useState<boolean>(false)

  const onClickUserButton = () => {
    if (!isUserCards) {
      setIsUserCards(true)
    }
    dispatch(setPackParams({ user_id: idUser }))
  }

  const onClickAllButton = () => {
    if (isUserCards) {
      setIsUserCards(false)
    }
    dispatch(setPackParams({ user_id: '' }))
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
