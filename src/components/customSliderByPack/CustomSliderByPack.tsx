import React from 'react'

import { CustomSlider } from 'components'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectorMaxCardsOnPack, selectorMinCardsOnPack, setPackParams } from 'store'

export const CustomSliderByPack = () => {
  const dispatch = useAppDispatch()

  const maxCards = useSelector(selectorMaxCardsOnPack)
  const minCards = useSelector(selectorMinCardsOnPack)

  const onChangeValue = (max: number, min: number) => {
    dispatch(setPackParams({ max, min }))
  }

  return <CustomSlider onChange={onChangeValue} maxCards={maxCards} minCards={minCards} />
}
