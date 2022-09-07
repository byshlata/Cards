import React, { FC } from 'react'

import { emptyStar } from '../table/tableGrade'

import style from './StarRating.module.sass'

type StarRatingExtraType = {
  rating: number
}
export const StarRatingExtra: FC<StarRatingExtraType> = ({ rating }) => {
  return (
    <>
      {rating === 5 ? (
        <div className={style.starWrapper}>
          <img src={emptyStar} alt={'empty star'} />
        </div>
      ) : null}
    </>
  )
}
