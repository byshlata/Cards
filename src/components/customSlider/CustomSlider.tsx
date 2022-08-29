import React, { useEffect, useState } from 'react'

import { Slider } from 'antd'
import { CustomButtonBox } from 'components/button/customButton/CustomButtonBox'
import { useAppDispatch, useDebounce } from 'hooks'
import { useSelector } from 'react-redux'
import {
  selectorIsLoading,
  selectorMaxCardsOnPack,
  selectorMinCardsOnPack,
  START_VALUE_PACK_PARAMS,
} from 'store'

import 'antd/dist/antd.css'

import style from './CustomSlider.module.sass'

export const CustomSlider = () => {
  const dispatch = useAppDispatch()

  const disabled = useSelector(selectorIsLoading)
  const minCardsOnPack = useSelector(selectorMinCardsOnPack)
  const maxCardsOnPack = useSelector(selectorMaxCardsOnPack)

  const [valueMax, setValueMax] = useState<number>(START_VALUE_PACK_PARAMS.maxCardsOnPack)
  const [valueMin, setValueMin] = useState<number>(START_VALUE_PACK_PARAMS.minCardsOnPack)

  const onClickMinButton = () => {
    setValueMin(START_VALUE_PACK_PARAMS.maxCardsOnPack)
  }
  const onClickMaxButton = () => {
    setValueMax(START_VALUE_PACK_PARAMS.minCardsOnPack)
  }

  const OnChangeValueSlider = (value: [number, number]) => {
    if (value[0] > value[1]) {
      setValueMin(value[1])
      setValueMax(value[0])
    } else {
      setValueMin(value[0])
      setValueMax(value[1])
    }
  }

  const debounceValueMax = useDebounce(valueMax)
  const debounceValueMin = useDebounce(valueMin)

  useEffect(() => {
    if (valueMax !== debounceValueMax) {
      console.log()
    }
    if (valueMin === debounceValueMin) {
      console.log()
    }
  }, [OnChangeValueSlider])

  return (
    <div className={style.sliderWrapper}>
      <CustomButtonBox
        color={'secondary'}
        borderRadius="2px"
        onClick={onClickMinButton}
        disabled={disabled}
      >
        0
      </CustomButtonBox>
      <Slider
        style={{ width: '180px' }}
        range
        disabled={disabled}
        defaultValue={[valueMin, valueMax]}
        max={START_VALUE_PACK_PARAMS.maxCardsOnPack}
        min={START_VALUE_PACK_PARAMS.minCardsOnPack}
        onChange={OnChangeValueSlider}
      />
      <CustomButtonBox
        color={'secondary'}
        borderRadius="2px"
        onClick={onClickMaxButton}
        disabled={disabled}
      >
        30
      </CustomButtonBox>
    </div>
  )
}
