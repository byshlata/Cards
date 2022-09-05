import React, { FC } from 'react'

import { CustomButtonBox } from '../../button'
import { HalfStar } from '../../starRating/HalfStar'
import { StarRating } from '../../starRating/StarRating'

import style from './TableGrade.module.sass'

import { star, halfStar, emptyStar } from './index'
type TableGradeType = {
  rating: number
}
export const TableGrade: FC<TableGradeType> = ({ rating }) => {
  return (
    <div className={style.gradeWrapper}>
      {/*<StarRating value={0} rating={rating} active={rating > 0} />*/}
      <HalfStar isFractional={rating > 0 && rating < 1} />
      <StarRating value={1} active={rating > 0.99} rating={rating} />
      <HalfStar isFractional={rating > 1 && rating < 2} />
      <StarRating value={2} active={rating > 1.99} rating={rating} />
      <HalfStar isFractional={rating > 2 && rating < 3} />
      <StarRating value={3} active={rating > 2.99} rating={rating} />
      <HalfStar isFractional={rating > 3 && rating < 4} />
      <StarRating value={4} active={rating > 3.99} rating={rating} />
      <HalfStar isFractional={rating > 4 && rating < 5} />
      <StarRating value={5} active={rating > 4.99} rating={rating} />
    </div>
  )
}
