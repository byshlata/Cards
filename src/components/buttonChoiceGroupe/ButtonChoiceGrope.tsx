import React, { useEffect, useState } from 'react'

import { CustomButtonBox } from 'components/button/customButton/CustomButtonBox'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { getPackData, selectorIsLoading, selectorUserId } from 'store'

import style from './ButtonChoiceGrope.module.sass'

export const ButtonChoiceGrope = () => {
  const dispatch = useAppDispatch()

  const disabled = useSelector(selectorIsLoading)
  const idUser = useSelector(selectorUserId)

  const [isUserCards, setIsUserCards] = useState<boolean>(false)

  const onClickUserButton = () => {
    if (!isUserCards) {
      setIsUserCards(true)
    }
  }

  const onClickAllButton = () => {
    if (isUserCards) {
      setIsUserCards(false)
    }
  }

  useEffect(() => {
    if (isUserCards) {
      dispatch(getPackData({ user_id: idUser }))
    } else {
      dispatch(getPackData({ user_id: '' }))
    }
  }, [isUserCards])

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
