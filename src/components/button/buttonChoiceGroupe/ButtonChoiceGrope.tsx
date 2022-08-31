import React, { useEffect, useState } from 'react'

import style from 'components/button/buttonChoiceGroupe/ButtonChoiceGrope.module.sass'
import { CustomButtonBox } from 'components/index'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import {
  selectorIsFirsOpen,
  selectorIsLoading,
  selectorUserId,
  selectorUserParam_id,
  setPackParams,
} from 'store'

export const ButtonChoiceGrope = () => {
  const dispatch = useAppDispatch()

  const disabled = useSelector(selectorIsLoading)
  const idUser = useSelector(selectorUserId)
  const isFirstOpenPage = useSelector(selectorIsFirsOpen)

  console.log('isFirstOpenPage', isFirstOpenPage)

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