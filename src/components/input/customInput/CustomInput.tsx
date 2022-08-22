import React, { ChangeEvent, ReactElement } from 'react'

import style from './CustomInput.module.sass'
import { useClassInputElement } from './hooks/useClassInputElement'
import { usePasswordInput } from './hooks/usePasswordInput'
import { EyeIconCloseSvg, EyeIconOpenSVG, SearchIconSvg } from './iconsSVG'
import { CustomInputType } from './types/CustomInputType'

export const CustomInput = ({
  type,
  name,
  error,
  value,
  disabled,
  onChange,
  onClick,
}: CustomInputType): ReactElement => {
  const { onWatchPassword, typeInputValue, isEyeOpenIcon, isEyeIcon, isSearchIcon, labelName } =
    usePasswordInput(type, error, name)

  const { classBar, classInput, classLabel, classIcon, classSearchIcon } = useClassInputElement(
    error,
    disabled
  )

  const onsetValue = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.currentTarget.value)
  }

  const iconEye: ReactElement = isEyeOpenIcon ? (
    <button onClick={onWatchPassword} className={classIcon} type="button">
      <EyeIconOpenSVG />
    </button>
  ) : (
    <button onClick={onWatchPassword} className={classIcon} type="button">
      <EyeIconCloseSvg />
    </button>
  )

  const iconSearch: ReactElement = (
    <button disabled={disabled} onClick={onClick} className={classSearchIcon} type="button">
      <SearchIconSvg />
    </button>
  )

  return (
    <div className={style.centered}>
      <div className={style.group}>
        <input
          type={typeInputValue}
          className={classInput}
          required
          value={value}
          disabled={disabled}
          onChange={onsetValue}
        />
        <label className={classLabel}>{labelName}</label>
        <div className={classBar} />
        {isEyeIcon && <>{iconEye}</>}
        {isSearchIcon && <> {iconSearch} </>}
      </div>
    </div>
  )
}
