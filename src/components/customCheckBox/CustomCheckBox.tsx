import React, { MouseEvent } from 'react'

import style from './CustomCheckBox.module.sass'

type CustomCheckBoxType = {
  checked: boolean
  onClick: (checked: boolean) => void
  label?: string
}

export const CustomCheckBox = ({ checked, label, onClick }: CustomCheckBoxType) => {
  const onClickCheckBox = (e: MouseEvent<HTMLInputElement>) => {
    onClick(e.currentTarget.checked)
  }

  return (
    <>
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        checked={checked}
        onClick={onClickCheckBox}
      />
      <label className={style.label} htmlFor="checkbox">
        {label}
      </label>
    </>
  )
}
