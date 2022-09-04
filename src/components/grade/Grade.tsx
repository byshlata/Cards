import React, { FC, ReactElement } from 'react'

import style from './Grade.module.sass'

import { emptyStar, fullStar, halfStar } from './index'
import { createGrade } from 'components/grade/utils/createGrade'

type GradeType = {
  rating: number
}

export type StarGradeType = {
  fullStar: ReactElement
  halfStar: ReactElement
  emptyStar: ReactElement
}

const START_GRADE = {
  fullStar: <img className={style.starWrapper} src={fullStar} alt={'full star'} />,
  halfStar: <img className={style.starWrapper} src={halfStar} alt={'half star'} />,
  emptyStar: <img className={style.starWrapper} src={emptyStar} alt={'empty star'} />,
}

export const Grade: FC<GradeType> = ({ rating }) => {
  const totalRating = createGrade(rating, START_GRADE)

  return (
    <>
      <div className={style.gradeWrapper}>{totalRating}</div>
    </>
  )
}
