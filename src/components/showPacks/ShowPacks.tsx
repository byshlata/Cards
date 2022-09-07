import React, { useState } from 'react'

import { API_CONFIG } from '../../api/config'

import style from './ShowPacks.module.sass'

export const ShowPacks = () => {
  const [packs, setPacks] = useState<PackType[]>([])
  // const requestMyPacks = () => {
  //   API_CONFIG.get('cards/pack', {
  //     params: { packName: user_id },
  //   }).then((res) => {
  //     setPacks(res.data.cardPacks)
  //   })
  // }
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

  return (
    <div className={style.wrapper}>
      <button className={style.content}></button>
      <button className={style.content}></button>
    </div>
  )
}
