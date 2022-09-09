import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import style from './CustomRadio.module.sass'

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type CustomRadioType = DefaultRadioPropsType & {
  options?: string[]
  onChangeOption?: (option: string) => void
}

export const CustomRadio: FC<CustomRadioType> = ({
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeOption && onChangeOption(e.currentTarget.value)
  }

  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <div key={name ? +i : i} className={style.item}>
          <input
            type="radio"
            onChange={onChangeCallback}
            name={o}
            id={o}
            value={o}
            checked={o === value}
          />
          <label htmlFor={o}>{o}</label>
        </div>
      ))
    : []

  return <>{mappedOptions}</>
}
