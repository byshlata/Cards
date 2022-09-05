import { StarGradeType } from 'components/grade/Grade'

export const createGrade = (rating: number, starGrade: StarGradeType) => {
    let integer = Math.floor(rating)

    let emptyArray = []

    for (let i = 0; i < integer; i++) {
        emptyArray.push(starGrade.fullStar)
    }
    let differenceBetweenNumbers = rating - integer

    if (differenceBetweenNumbers > 0) {
        emptyArray.push(starGrade.halfStar)
    }
    while (emptyArray.length < 5) {
        emptyArray.push(starGrade.emptyStar)
    }

    return emptyArray
}