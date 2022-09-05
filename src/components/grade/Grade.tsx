import React, { FC, ReactElement } from 'react'

import style from './Grade.module.sass'

import { fullStar, halfStar, emptyStar } from './index'
import { createGrade } from 'components/grade/utils/createGrade'

type GradeType = {
    rating: number
}

export type StarGradeType = {
    fullStar: ReactElement
    halfStar: ReactElement
    emptyStar: ReactElement
}

const STAR_GRADE: StarGradeType = {
    fullStar: <img src={fullStar} alt={'full star'} />,
    halfStar: <img src={halfStar} alt={'half star'} />,
    emptyStar: <img src={emptyStar} alt={'empty star'} />,
}

export const Grade: FC<GradeType> = ({ rating }) => {
    const totalGrade = createGrade(rating, STAR_GRADE)

    return (
        <>
            <div className={style.gradeWrapper}>
                {totalGrade.map((element, index) => (
                    <div key={index} className={style.starWrapper}>
                        {element}
                    </div>
                ))}
            </div>
        </>
    )
}