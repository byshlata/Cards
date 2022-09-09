import React, { useEffect, useState } from 'react'

import { CustomRadio } from 'components/customRadio/CustomRadio'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getLearnData } from 'store/thunk/learnThunk'

import { ButtonBack } from '../../components'
import { Path } from '../../enums'
import { selectorCardData, setCardParams } from '../../store'

import style from './Learn.module.sass'
import {ButtonBack} from "../../components";
import {Path} from "../../enums";
import {

  getCardData,
  selectorCardData, setCardParams,

} from "../../store";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

export const Learn = () => {
  const dispatch = useAppDispatch()
  const [isShow, setIsShow] = useState<boolean>(false)
  const inputValues = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']
  const [value, setValue] = useState<string>(inputValues[0])

  const param = useParams<'id'>()
  const packId = param.id
  const cardsX = useSelector(selectorCardData)
  
  const answerShower = () => {
    setIsShow(true)
  }
  // useEffect(() => {
  //   dispatch(getCardData({ cardsPack_id: packId }))
  // }, [])
  // useEffect(()=>{
  //
  // },[cardsX])

  
  
  const cardsX = useSelector(selectorCardData)


  type testType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
    comments: string
    more_id: string
    rating: number
    type: string
    __v: number
  }

  const cardsRandom = (arr: testType[]):testType =>{
    let a = []
    let c:number[] = arr.map((a)=>+(60-a.grade*10).toFixed(1))
    for(let i=0; i<c.length; i++){
      for(let j=0; j<c[i]; j++)
        a.push(arr[i])
    }
    let b = a.sort((a,b)=>a.grade-b.grade)
    return b[Math.floor(Math.random() *b.length)]
  }
  
  // console.log(packId)
  //const navigate = useNavigate()
  // const idPack = param.id
  // useEffect(() => {
  //   dispatch(setCardParams({ cardsPack_id: packId }))
  // }, [])
  useEffect(() => {
      dispatch(getCardData({cardsPack_id: packId}))
  }, [])




  // const testCards = [
  //   {
  //     answer: 'no answer',
  //     question: 'no question',
  //     cardsPack_id: '5eb6a2f72f849402d46c6ac4',
  //     grade: 4.987525071790364,
  //     shots: 1,
  //     user_id: '142151531535151',
  //     created: '2020-05-13T11:05:44.867Z',
  //     updated: '2020-05-13T11:05:44.867Z',
  //     _id: '631756fd5fc57f2a086f51f7',
  //   },
  //   {
  //     answer: 'answer1',
  //     question: 'question1',
  //     cardsPack_id: '5eb6a2f72f849402d46c6ac4',
  //     grade: 3.187525071790364,
  //     shots: 15,
  //     user_id: '142151531535151',
  //     created: '2020-05-13T11:05:44.867Z',
  //     updated: '2020-05-13T11:05:44.867Z',
  //     _id: '5ebbd48876810f1ad0e7ece4',
  //   },
  //   {
  //     answer: '333',
  //     question: '76',
  //     cardsPack_id: '5eb6a2f72f849402d46c6ac4',
  //     grade: 2.987525071790364,
  //     shots: 1,
  //     user_id: '142151531535151',
  //     created: '2020-05-13T11:05:44.867Z',
  //     updated: '2020-05-13T11:05:44.867Z',
  //     _id: '5ebbd48876810f1ad0e7ece5',
  //   },
  // ]
  const [cards, setCards] = useState<testType>(cardsRandom(cardsX))
  useEffect(()=>{
    setCards(cardsRandom(cardsX))
  },[cardsX])
  useEffect(() => {
    //dispatch(getCardData(paramsCard))
  }, [])

  console.log(cards)
  console.log(cardsX)
  const testCards = [
    {
      answer: 'no answer',
      question: 'no question',
      cardsPack_id: '5eb6a2f72f849402d46c6ac4',
      grade: 4.987525071790364,
      shots: 1,
      user_id: '142151531535151',
      created: '2020-05-13T11:05:44.867Z',
      updated: '2020-05-13T11:05:44.867Z',
      _id: '631756fd5fc57f2a086f51f7',
    },
    {
      answer: 'answer1',
      question: 'question1',
      cardsPack_id: '5eb6a2f72f849402d46c6ac4',
      grade: 3.187525071790364,
      shots: 15,
      user_id: '142151531535151',
      created: '2020-05-13T11:05:44.867Z',
      updated: '2020-05-13T11:05:44.867Z',
      _id: '5ebbd48876810f1ad0e7ece4',
    },
    {
      answer: '333',
      question: '76',
      cardsPack_id: '5eb6a2f72f849402d46c6ac4',
      grade: 2.987525071790364,
      shots: 1,
      user_id: '142151531535151',
      created: '2020-05-13T11:05:44.867Z',
      updated: '2020-05-13T11:05:44.867Z',
      _id: '5ebbd48876810f1ad0e7ece5',
    },
  ]
  const [cards, setCards] = useState(testCards[0])
  const [cardsTwo, setCardsTwo] = useState(cardsX)
  console.log(cardsTwo)

  
  const cardChanger = (id: string) => {
    setCards(cardsRandom(cardsX))
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    setCards(testCards[2])

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

    //dispatch(setCartGrade(grade))
    dispatch(getLearnData({ grade: convertValueToGrade(value), card_id: id }))
    //console.log(convertValueToGrade(value), value, id)
    setIsShow(false)
  }
  
if(cards===undefined){
  return <div></div>
}
  return (
    <>
      <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>

    <div className={style.learnWrapper}>
      <div className={style.question}>
        <span>Question:</span>
        {` ${cards.question}`}
      </div>
      <div className={style.shotsWrapper}>
        {`Количтесвтво попыток ответа на вопрос : ${cards.shots}`}
      </div>
      {isShow ? (
        <div className={style.answerWrapper}>
          <div className={style.answer}>
            <span>Answer:</span> {` ${cards.answer}`}
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
      <div className={style.learnWrapper}>
        <div className={style.question}>
          <span>Question:</span>
          {` ${cards.question}`}
          {/*берём с стейта рандомный впорс*/}
        </div>
        <div className={style.shotsWrapper}>
          {/*берём с редакс кол-во попыток*/}
          {`Количтесвтво попыток ответа на вопрос : ${cards.shots}`}
        </div>
        {isShow ? (
          <div className={style.answerWrapper}>
            <div className={style.answer}>
              <span>Answer:</span> {` ${cards.answer}`}
              {/*берем ответ из обьекта в стейте*/}
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
function paramsCard(paramsCard: any): any {
    throw new Error('Function not implemented.')
}

