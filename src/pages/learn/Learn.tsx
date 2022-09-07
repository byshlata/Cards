import { CustomRadio } from 'components/customRadio/CustomRadio';
import React, {useState} from 'react';
import style from './Learn.module.sass'

export const Learn = () => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const answerShower = () => {
        setIsShow(true)
    }
    //const cards = useSelector=> cards
    const testCards = [
        {
            answer: "no answer",
            question: "no question",
            cardsPack_id: "5eb6a2f72f849402d46c6ac4",
            grade: 4.987525071790364,
            shots: 1,
            user_id: "142151531535151",
            created: "2020-05-13T11:05:44.867Z",
            updated: "2020-05-13T11:05:44.867Z",
            _id: "5ebbd48876810f1ad0e7ece3"
        },
        {
            answer: "answer1",
            question: "question1",
            cardsPack_id: "5eb6a2f72f849402d46c6ac4",
            grade: 3.187525071790364,
            shots: 15,
            user_id: "142151531535151",
            created: "2020-05-13T11:05:44.867Z",
            updated: "2020-05-13T11:05:44.867Z",
            _id: "5ebbd48876810f1ad0e7ece4"
        },
        {
            answer: "333",
            question: "76",
            cardsPack_id: "5eb6a2f72f849402d46c6ac4",
            grade: 2.987525071790364,
            shots: 1,
            user_id: "142151531535151",
            created: "2020-05-13T11:05:44.867Z",
            updated: "2020-05-13T11:05:44.867Z",
            _id: "5ebbd48876810f1ad0e7ece5"
        },

    ]
    const [cards, setCards] = useState(testCards[0])

    const inputValues = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']
    //const grades = [1,2,3,4,5]
    
    //const inputValues2 = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']
    const [value, setValue] = useState<string>(inputValues[1])
    const cardChanger = () => {
        setCards(testCards[2])
    }
    return (
        <div className={style.learnWrapper}>
            <div className={style.shotsWrapper}>
                {/*берём с редакс кол-во попыток*/}
                {`Количтесвтво попыток ответа на вопрос : ${cards.shots}`}
            </div>
            <div className={style.question}>
                Question:{` ${cards.question}`}
                {/*берём с стейта рандомный впорс*/}
            </div>
            {isShow
                ?
                <div className={style.answerWrapper}>
                    <div className={style.answer}>
                        Answer: {` ${cards.answer}`}
                        {/*берем ответ из обьекта в стейте*/}
                    </div>
                    <div>
                        Rate yourself:
                    </div>
                    <div className={style.rate}>
                        <CustomRadio 
                        name={'radio'}
                        options={inputValues}
                        value={value}
                        onChangeOption={setValue}
                        />
                        {/*<div className={style.rateItem}>*/}
                        {/*    <input type={'radio'} value={1} id={'grageInput'}/>*/}
                        {/*    <label> Did not know</label>*/}
                        {/*</div>*/}
                        {/*<div className={style.rateItem}>*/}
                        {/*   */}
                        {/*    <input type={'radio'} value={2} id={'grageInput'}/>*/}
                        {/*    <label> Forgot</label>*/}
                        {/*</div>*/}
                        {/*<div className={style.rateItem}>*/}
                        {/*    */}
                        {/*    <input type={'radio'} value={3} id={'grageInput'}/>*/}
                        {/*    <label> A lot of thought</label>*/}
                        {/*</div>*/}
                        {/*<div className={style.rateItem}>*/}
                        {/*  */}
                        {/*    <input type={'radio'} value={4} id={'grageInput'}/>*/}
                        {/*    <label> Confused</label>*/}
                        {/*</div>*/}
                        {/*<div className={style.rateItem}>*/}
                        {/*   */}
                        {/*    <input type={'radio'} value={5} id={'grageInput'}/>*/}
                        {/*    <label> Knew the answer</label>*/}
                        {/*</div>*/}
                           
                       
                    </div>
                    <div className={style.next} onClick={cardChanger}>
                        Next question
                    </div>
                </div>
                :
                <div className={style.showButton} onClick={answerShower}>
                    SHOW ANSWER
                </div>}
        </div>
    );
};

