import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../hooks'
import { getLearnData } from '../../store/thunk/LearnThunk'

import style from './Learn.module.sass'

import { CustomRadio } from 'components/customRadio/CustomRadio'
import { setCartGrade } from 'store/slice/learnSlice'

export const Learn = () => {
  const dispatch = useAppDispatch()
  const [isShow, setIsShow] = useState<boolean>(false)
  const inputValues = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']
  const [value, setValue] = useState<string>(inputValues[0])
  const answerShower = () => {
    setIsShow(true)
  }
  //const cards = useSelector=> cards
type testType = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  shots: number,
  user_id: string
  created: string
  updated: string
  _id: string
}
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
      _id: '631756f25fc57f2a086f51f5',
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
      _id: '631756fb5fc57f2a086f51f6',
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
      _id: '631756fd5fc57f2a086f51f7',
    },
    {
      answer: '1+1',
      question: '1+1',
      cardsPack_id: '5eb6a2f72f849402d46c6ac4',
      grade: 1.987525071790364,
      shots: 1,
      user_id: '142151531535151',
      created: '2020-05-13T11:05:44.867Z',
      updated: '2020-05-13T11:05:44.867Z',
      _id: '63199db446b5d30818fd1f1c',
    },
  ]
 

  const inputValues2 = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']

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
  const [cards, setCards] = useState(cardsRandom(testCards))
  const cardChanger = (id: string) => {
    setCards(cardsRandom(testCards))

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

  return (
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
  )
}
