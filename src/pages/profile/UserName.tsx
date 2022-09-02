import React, { ChangeEvent, useState } from 'react'

import { useSelector } from 'react-redux'

import pencil from '../../assets/image/pencil.png'
import { useAppDispatch } from '../../hooks'
import { changeProfileName, selectorUserName } from '../../store'

import style from './UserName.module.sass'
const dispatch = useAppDispatch()
const userName = useSelector(selectorUserName)

export const UserName = () => {
  const [mode, setMode] = useState<boolean>(false)

  const [value, setValue] = useState<string>(userName)
  const NameChanger = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const asyncChangeName = () => {
    dispatch(changeProfileName(value))
    setMode(false)
  }

  return (
    <div className={style.changeProfileNameWrapper}>
      {mode ? (
        <input value={value} onChange={NameChanger} autoFocus onBlur={asyncChangeName} />
      ) : (
        <>
          <h3 className={style.profileName}>{value}</h3>

          <img
            src={pencil}
            alt={'change name'}
            onClick={() => {
              setMode(true)
            }}
          />
        </>
      )}
    </div>
  )
}
