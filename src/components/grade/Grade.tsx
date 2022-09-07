import React, { FC, ReactElement } from 'react'

import { createGrade } from 'components/grade/utils/createGrade'
import style from './Grade.module.sass'

import { emptyStar, fullStar, halfStar } from './index'

type GradeType = {
  rating: number
}

export type StarGradeType = {
  fullStar: ReactElement
  halfStar: ReactElement
  emptyStar: ReactElement
}

const START_GRADE = {
  fullStar: <img className={style.starItem} src={fullStar} alt={'full star'} />,
  halfStar: <img className={style.starItem} src={halfStar} alt={'half star'} />,
  emptyStar: <img className={style.starItem} src={emptyStar} alt={'empty star'} />,
}

export const Grade: FC<GradeType> = ({ rating }) => {
  const totalRating = createGrade(rating, START_GRADE)

  return (
    <>
      <div className={style.gradeWrapper}>
        {totalRating.map((element, index) => {
          return (
            <div className={style.starWrapper} key={index}>
              {element}
            </div>
          )
        })}
      </div>
    </>
  )
}
