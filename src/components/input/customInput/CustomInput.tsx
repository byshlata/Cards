import React, { ReactElement } from 'react'

import style from './CustomInput.module.sass'
import { useClassInputElement } from './hooks/useClassInputElement'
import { usePasswordInput } from './hooks/usePasswordInput'
import { EyeIconCloseSvg, EyeIconOpenSVG, SearchIconSvg } from './iconsSVG'
import { CustomInputType } from './types/CustomInputType'

export const CustomInput: React.FC<CustomInputType> = React.memo(
  ({ type, name, error, disabled, onClick, value, onChange, className }): ReactElement => {
    const { onWatchPassword, typeInputValue, isEyeOpenIcon, isEyeIcon, isSearchIcon, labelName } =
      usePasswordInput(type, error, name)

    const { classBar, classInput, classLabel, classIcon, classSearchIcon } = useClassInputElement(
      error,
      disabled
    )

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
            autoComplete="on | off"
            name={name}
            type={typeInputValue}
            className={`${classInput}${className ? ` ${className}` : ''}`}
            required
            disabled={disabled}
            value={value}
            onChange={onChange}
          />
          <label className={classLabel}>{labelName}</label>
          <div className={classBar} />
          {isEyeIcon && <>{iconEye}</>}
          {isSearchIcon && <> {iconSearch} </>}
        </div>
      </div>
    )
  }
)
