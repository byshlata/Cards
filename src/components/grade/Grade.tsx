import React, { FC } from 'react'

import style from './Grade.module.sass'

import { fullStar, halfStar, emptyStar } from './index'

type GradeType = {
  rating: number
}
export const Grade: FC<GradeType> = ({ rating }) => {
  // const divKey = new Date().getMilliseconds() * Math.floor(Math.random() * 100)

  const grader = (rating: number) => {
    let integer = Math.floor(rating)
    let fullStarElement = (
      <div className={style.starWrapper}>
        <img src={fullStar} alt={'full star'} />
      </div>
    )
    let halfStarElement = (
      <div className={style.starWrapper}>
        <img src={halfStar} alt={'half star'} />
      </div>
    )
    let emptyStarElement = (
      <div className={style.starWrapper}>
        <img src={emptyStar} alt={'empty star'} />
      </div>
    )
    let emptyArray = []

    for (let i = 0; i < integer; i++) {
      emptyArray.push(fullStarElement)
    }
    let differenceBetweenNumbers = rating - integer

    if (differenceBetweenNumbers > 0) {
      emptyArray.push(halfStarElement)
    }
    while (emptyArray.length < 5) {
      emptyArray.push(emptyStarElement)
    }

    return emptyArray
  }
  let totalRating = grader(rating)

  return (
    <>
      <div className={style.gradeWrapper}>{totalRating}</div>
    </>
  )
}
