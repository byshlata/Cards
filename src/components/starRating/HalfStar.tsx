import React, { FC } from 'react'

import { halfStar } from '../table/tableGrade'

import style from './StarRating.module.sass'

type HalfStarType = {
  isFractional: boolean
}
export const HalfStar: FC<HalfStarType> = ({ isFractional }) => {
  return (
    <div>
      {isFractional ? (
        <div className={style.starWrapper}>
          <img src={halfStar} alt={'half star'} />
        </div>
      ) : null}
    </div>
  )
}
