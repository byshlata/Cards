import React, { ChangeEvent } from 'react'

import style from './CustomCheckBox.module.sass'

type CustomCheckBoxType = {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
}

export const CustomCheckBox = ({ checked, label, onChange }: CustomCheckBoxType) => {
  const onChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.checked)
  }

  return (
    <>
      <input type="checkbox" checked={checked} onChange={onChangeCheckBox} />
      <label className={style.label} htmlFor="checkbox">
        {label}
      </label>
    </>
  )
}
