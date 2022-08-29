import React, { useEffect, useState } from 'react'

import { Slider } from 'antd'
import { CustomButtonBox } from 'components'
import { useAppDispatch, useDebounce } from 'hooks'
import { useSelector } from 'react-redux'
import {
  initialStatePackParams,
  selectorIsLoading,
  selectorMaxCardsOnPack,
  selectorMinCardsOnPack,
  setPackParams,
} from 'store'
import 'antd/dist/antd.css'
import { maxValue, minValue } from 'utils'

import style from './CustomSlider.module.sass'

export const CustomSlider = () => {
  const dispatch = useAppDispatch()

  const disabled = useSelector(selectorIsLoading)
  const maxCards = useSelector(selectorMaxCardsOnPack)
  const minCards = useSelector(selectorMinCardsOnPack)

  const [value, setValue] = useState([minCards, maxCards])

  const onClickMinButton = () => {
    if (value[0] !== initialStatePackParams.min) {
      setValue([initialStatePackParams.min, value[1]])
    }
  }

  const onClickMaxButton = () => {
    if (value[1] !== initialStatePackParams.max) {
      setValue([value[0], initialStatePackParams.max])
    }
  }

  const OnChangeValueSlider = (value: [number, number]) => {
    setValue(value)
  }

  const debounceValue = useDebounce(value)

  useEffect(() => {
    const max = maxValue(debounceValue)
    const min = minValue(debounceValue)
    dispatch(setPackParams({ max, min }))
  }, [debounceValue])

  return (
    <div className={style.CustomSliderWrapper}>
      <div className={style.buttonWrapper}>
        <CustomButtonBox
          color={'secondary'}
          borderRadius="2px"
          onClick={onClickMinButton}
          disabled={disabled}
        >
          0
        </CustomButtonBox>
      </div>

      <div className={style.sliderWrapper}>
        <Slider
          className={style.slider}
          range
          disabled={disabled}
          defaultValue={[initialStatePackParams.min, initialStatePackParams.max]}
          max={initialStatePackParams.max}
          min={initialStatePackParams.min}
          value={[value[0], value[1]]}
          onChange={OnChangeValueSlider}
        />
      </div>

      <div className={style.buttonWrapper}>
        <CustomButtonBox
          color={'secondary'}
          borderRadius="2px"
          onClick={onClickMaxButton}
          disabled={disabled}
        >
          30
        </CustomButtonBox>
      </div>
    </div>
  )
}
