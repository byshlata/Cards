import { CustomRadio } from 'components/customRadio/CustomRadio';
import React, {useState} from 'react';
import style from './Learn.module.sass'

export const Learn = () => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const answerShower = () => {
        setIsShow(true)
    }
    
    const inputValues = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']
    //const inputValues2 = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']
    const [value, setValue] = useState<string>(inputValues[0])
    return (
        <div className={style.learnWrapper}>
            <div className={style.shotsWrapper}>
                берём с редакс кол-во попыток
            </div>
            <div className={style.question}>
                Question:
                берём с стейта рандомный впорс
            </div>
            {isShow
                ?
                <div className={style.answerWrapper}>
                    <div className={style.answer}>
                        берем ответ из обьекта в стейте
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
                    <div className={style.next}>
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

