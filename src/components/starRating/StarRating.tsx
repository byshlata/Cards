import React, { FC } from 'react'

import { emptyStar, star } from '../table/tableGrade'

import style from './StarRating.module.sass'

type StarRatingType = {
  value: number
  active: boolean
  rating: number
}
export const StarRating: FC<StarRatingType> = ({ value, active, rating }) => {
  return (
    <div>
      {active ? (
        <div className={style.starWrapper}>
          <img src={star} alt={'full star'} />
        </div>
      ) : (
        <div className={style.starWrapper}>
          <img src={emptyStar} alt={'empty star'} />
        </div>
      )}
    </div>
  )
}
