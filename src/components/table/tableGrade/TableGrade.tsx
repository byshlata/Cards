import React from 'react'

import { CustomButtonBox } from '../../button'

import style from './TableGrade.module.sass'

import { star } from './index'

export const TableGrade = () => {
  return (
    <div className={style.gradeWrapper}>
      <CustomButtonBox color="link">
        <img src={star} alt={'rate card'} />
      </CustomButtonBox>
      <CustomButtonBox color="link">
        <img src={star} alt={'rate card'} />
      </CustomButtonBox>
      <CustomButtonBox color="link">
        <img src={star} alt={'rate card'} />
      </CustomButtonBox>
      <CustomButtonBox color="link">
        <img src={star} alt={'rate card'} />
      </CustomButtonBox>
      <CustomButtonBox color="link">
        <img src={star} alt={'rate card'} />
      </CustomButtonBox>
    </div>
  )
}
