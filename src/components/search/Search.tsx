import React, { useEffect, useState } from 'react'

import { API_CONFIG } from '../../api/config'
import { CustomInput } from '../input'

import { useDebounce } from './debounce'
import { useInput } from './input'
import style from './search.module.sass'

export const Search = () => {
  type PackType = {
    _id: string
    user_id: string
    user_name: string
    private: boolean
    name: string
    path: string
    grade: number
    shots: number
    cardsCount: number
    type: string
    rating: number
    created: string
    updated: string
    more_id: string
    __v: number
  }
  const [packs, setPacks] = useState<PackType[]>([])
  const searchingsPacks = packs.map((el) => (
    <div key={el._id}>
      <h2>{el.name}</h2>
    </div>
  ))
  const MIN_CHARACTERS = 2
  const input = useInput('')

  const debounce = useDebounce(input.value)

  useEffect(() => {
    if (debounce.length > MIN_CHARACTERS) {
      API_CONFIG.get('cards/pack', {
        params: { packName: debounce },
      }).then((res) => {
        setPacks(res.data.cardPacks)
      })
    }
  }, [debounce])
  return (
    <div className={style.searchWrapper}>
      <CustomInput type={'search'} {...input} />
      <div className={style.dropDown}>{searchingsPacks}</div>
    </div>
  )
}
