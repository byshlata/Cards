import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import style from 'components/button/buttonChoiceGroupe/ButtonChoiceGrope.module.sass'
import { CustomButtonBox } from 'components/index'
import { useAppDispatch } from 'hooks'
import { selectorIsLoading, selectorUserId, selectorUserParam_id, setPackParams } from 'store'

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
      dispatch(setPackParams({ user_id: idUser }))
    } else {
      dispatch(setPackParams({ user_id: '' }))
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
