import React, { ChangeEvent, useState } from 'react'

import pencil from '../../assets/image/pencil.png'

import style from './ChangeLogin.module.sass'

type ChangeLoginType = {
  userLogin: string
  onChangeName: (userLogin: string) => void
}

export const ChangeLogin = ({ onChangeName, userLogin }: ChangeLoginType) => {
  const [mode, setMode] = useState<boolean>(false)
  const [login, setLogin] = useState<string>(userLogin)

  const NameChanger = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value)
  }
  const changeName = () => {
    if (login) {
      onChangeName(login)
      setMode(false)
    }
  }

  return (
    <div className={style.changeLoginWrapper}>
      {mode ? (
        <input value={login} onChange={NameChanger} autoFocus onBlur={changeName} />
      ) : (
        <>
          <h3 className={style.title}>{login}</h3>

          <img
            className={style.imageItem}
            src={pencil}
            alt="change name"
            onClick={() => {
              setMode(true)
            }}
          />
        </>
      )}
    </div>
  )
}
