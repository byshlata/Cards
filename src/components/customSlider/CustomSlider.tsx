import React, { useEffect, useState } from 'react'

import { Slider } from 'antd'
import { CustomButtonBox } from 'components'
import { useDebounce } from 'hooks'
import { useSelector } from 'react-redux'
import { initialStatePackParams, selectorIsLoading } from 'store'
import 'antd/dist/antd.css'
import { maxValue, minValue } from 'utils'

import style from './CustomSlider.module.sass'

type CustomSliderType = {
  disabled: boolean
  onChange: (max: number, min: number) => void
  maxCards: number
  minCards: number
}

export const CustomSlider = ({ onChange, minCards, maxCards, disabled }: CustomSliderType) => {
  useEffect(() => {}, [onChange])

  const [value, setValue] = useState([minCards, maxCards])

  const debounceValue = useDebounce(value)

  useEffect(() => {
    if (minCards === initialStatePackParams.min && maxCards === initialStatePackParams.max) {
      setValue([minCards, maxCards])
    }
  }, [minCards, maxCards])

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

  const onChangeValueSlider = (value: [number, number]) => {
    setValue(value)
  }

  useEffect(() => {
    if (debounceValue[0] !== minCards || debounceValue[1] !== maxCards) {
      const max = maxValue(debounceValue)
      const min = minValue(debounceValue)
      onChange(max, min)
    }
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
          {value[0]}
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
          onChange={onChangeValueSlider}
        />
      </div>

      <div className={style.buttonWrapper}>
        <CustomButtonBox
          color={'secondary'}
          borderRadius="2px"
          onClick={onClickMaxButton}
          disabled={disabled}
        >
          {value[1]}
        </CustomButtonBox>
      </div>
    </div>
  )
}
