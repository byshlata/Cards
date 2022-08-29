import React, { useEffect, useState } from 'react'

import { Slider } from 'antd'
import { CustomButtonBox } from 'components'
import { useAppDispatch, useDebounce } from 'hooks'
import { useSelector } from 'react-redux'
import { getPackData, selectorIsLoading, START_VALUE_PACK_PARAMS } from 'store'
import 'antd/dist/antd.css'
import { maxValue, minValue } from 'utils'

import style from './CustomSlider.module.sass'

export const CustomSlider = () => {
  const dispatch = useAppDispatch()

  const disabled = useSelector(selectorIsLoading)

  const [value, setValue] = useState<number[]>([
    START_VALUE_PACK_PARAMS.minCardsOnPack,
    START_VALUE_PACK_PARAMS.maxCardsOnPack,
  ])

  const onClickMinButton = () => {
    console.log([START_VALUE_PACK_PARAMS.minCardsOnPack, value[1]])
    setValue([START_VALUE_PACK_PARAMS.minCardsOnPack, value[1]])
  }

  const onClickMaxButton = () => {
    console.log([value[0], START_VALUE_PACK_PARAMS.maxCardsOnPack])
    setValue([value[0], START_VALUE_PACK_PARAMS.maxCardsOnPack])
  }

  const OnChangeValueSlider = (value: [number, number]) => {
    setValue(value)
  }

  const debounceValue = useDebounce(value)

  useEffect(() => {
    const max = maxValue(debounceValue)
    const min = minValue(debounceValue)
    dispatch(getPackData({ max, min }))
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
          defaultValue={[
            START_VALUE_PACK_PARAMS.minCardsOnPack,
            START_VALUE_PACK_PARAMS.maxCardsOnPack,
          ]}
          max={START_VALUE_PACK_PARAMS.maxCardsOnPack}
          min={START_VALUE_PACK_PARAMS.minCardsOnPack}
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
