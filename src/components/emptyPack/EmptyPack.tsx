import React from 'react'

import { Path } from '../../enums'
import { CustomButton } from '../button'
import { ButtonBack } from '../button/buttonBack/ButtonBack'
import { FormBody } from '../formBody/FormBody'
import { Header } from '../header/Header'

import style from './emptyPack.module.sass'

export const EmptyPack = () => {
  return (
    <>
      <Header />
      <div className={style.buttonBackWrapper}>
        <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
      </div>
      <div className={style.emptyPackWrapper}>
        <p className={style.text}>This pack is empty. Click add new card to fill this pack</p>
        <CustomButton color={'primary'}> Add new card </CustomButton>
      </div>
    </>
  )
}
