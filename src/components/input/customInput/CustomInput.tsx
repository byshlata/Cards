import React, { ChangeEvent, ReactElement } from 'react';

import style from './CustomInput.module.sass';
import { UsePasswordInput } from './hooks/usePasswordInput';
import { EyeIconCloseSvg, EyeIconOpenSVG, SearchIconSvg } from './iconsSVG';
import { CustomInputType } from './types/CustomInputType';

import { UseClassInputElement } from 'components/CustomInput/hooks/useClassInputElement';

export const CustomInput = ({
  type,
  name,
  error,
  value,
  disabled,
  onChange,
  onClick,
}: CustomInputType): ReactElement => {
  const { onWatchPassword, typeInputValue, isEyeOpenIcon, isEyeIcon, isSearchIcon } =
    UsePasswordInput(type);

  const { classBar, classInput, classLabel, classIcon, classSearchIcon } =
    UseClassInputElement(error, disabled);

  const labelText = error ? 'error' : name;

  const onsetValue = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.currentTarget.value);
  };

  const iconEye: ReactElement = isEyeOpenIcon ? (
    <button onClick={onWatchPassword} className={classIcon} type="button">
      <EyeIconOpenSVG />
    </button>
  ) : (
    <button onClick={onWatchPassword} className={classIcon} type="button">
      <EyeIconCloseSvg />
    </button>
  );

  const iconSearch: ReactElement = (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classSearchIcon}
      type="button"
    >
      <SearchIconSvg />
    </button>
  );

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
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={classLabel}>{labelText}</label>
        <div className={classBar} />
        {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
        {isEyeIcon && <>{iconEye}</>}
        {isSearchIcon && <> {iconSearch} </>}
      </div>
    </div>
  );
};
