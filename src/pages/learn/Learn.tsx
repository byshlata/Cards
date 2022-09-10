import React, {useEffect, useState} from 'react'

import {CustomRadio} from 'components/customRadio/CustomRadio'
import {useAppDispatch} from 'hooks'


import style from './Learn.module.sass'
import {ButtonBack} from "../../components";
import {Path} from "../../enums";
import {

    getCardData,
    selectorCardData, selectorTotalCountCard, setCardParams,

} from "../../store";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import { getLearnData } from 'store/thunk/learnThunk';
import { CardType } from 'types';

type RandomType = {
    _id: string
    user_id: string
    comments: string
    type: string
    rating: number
    more_id: string
    created: string
    updated: string
    __v: number
    cardsPack_id: string
    question: string
    answer: string
    grade: number
    shots?: number
    answerImg?: string
   // answerVideo?: string
   // questionImg?: string
  //  questionVideo?: string
}

// const typeConverter= (arr: CardType[]):RandomType[]=>{
//     let copy = [...arr]
//     let addGrade = copy.map((c)=> c.grade===undefined? {...c, grade: 0} : {...c})
//     let addShots = addGrade.map((c)=> c.shots? {...c}: {...c, shots: 0})
//     let addAnswerImg = addShots.map((c)=> c.answerImg? {...c}: {...c, answerImg: ''})
//    
//     return addGrade
// }

export const Learn = () => {
    const dispatch = useAppDispatch()
    const [isShow, setIsShow] = useState<boolean>(false)
    const inputValues = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']
    const [value, setValue] = useState<string>(inputValues[0])

    const param = useParams<'id'>()
    const packId = param.id
    const cardsX = useSelector(selectorCardData)
    const totalCount = useSelector(selectorTotalCountCard)

    const answerShower = () => {
        setIsShow(true)
    }
  
    const cardsRandom = (arr: any): CardType => {
        let a = []
        let c: number[] = arr.map((a:any) => +(60 - a.grade * 10).toFixed(1))
        for (let i = 0; i < c.length; i++) {
            for (let j = 0; j < c[i]; j++)
                a.push(arr[i])
        }
        let b = a.sort((a, b) => a.grade - b.grade)
        return b[Math.floor(Math.random() * b.length)]
    }


    useEffect(() => {
        dispatch(getCardData({cardsPack_id: packId, pageCount:totalCount}))
    }, [totalCount])


    const [cards, setCards] = useState<CardType>(cardsRandom(cardsX))
    useEffect(() => {
        setCards(cardsRandom(cardsX))
    }, [cardsX])
    

    const cardChanger = (id: string) => {
        setCards(cardsRandom(cardsX))

        const convertValueToGrade = (value: string): number => {
            let grade

            if (value === 'Did not know') {
                grade = 1
            } else if (value === 'Forgot') {
                grade = 2
            } else if (value === 'A lot of thought') {
                grade = 3
            } else if (value === 'Confused') {
                grade = 4
            } else if (value === 'Knew the answer') {
                grade = 5
            } else {
                grade = 0
            }

            return grade
        }


        dispatch(getLearnData({grade: convertValueToGrade(value), card_id: id}))

        setIsShow(false)
    }

    if (cards === undefined) {
        return <div></div>
    }
    return (
        <>
            <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
            <div className={style.learnWrapper}>
                <div className={style.question}>
                    <span>Question:</span>
                    { `${cards.question}`}
                </div>
                <div className={style.shotsWrapper}>
                    {`Количтесвтво попыток ответа на вопрос : ${cards.shots}`}
                </div>
                {isShow ? (
                    <div className={style.answerWrapper}>
                        <div className={style.answer}>
                            <span>Answer:</span> { `${cards.answer}`}
                        </div>
                        <div>Rate yourself:</div>
                        <div className={style.rate}>
                            <CustomRadio
                                name={'radio'}
                                options={inputValues}
                                value={value}
                                onChangeOption={setValue}
                            />
                        </div>
                        <div
                            className={style.next}
                            onClick={() => {
                                cardChanger(cards._id)
                            }}
                        >
                            Next question
                        </div>
                    </div>
                ) : (
                    <div className={style.showButton} onClick={answerShower}>
                        Show answer
                    </div>
                )}
            </div>
        </>
    )
}

