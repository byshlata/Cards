import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

import { useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

import avatar from '../../assets/image/avatar.png'
import camera from '../../assets/image/camera.png'
import exitArrow from '../../assets/image/exitArrow.png'
import logout from '../../assets/image/logout.png'
import pencil from '../../assets/image/pencil.png'
import { SecondTableContainer } from '../../components/seondTable/SecondTableContainer'
import { Cards } from '../cards/Cards'

import style from './Profile.module.sass'

import { AvatarUser, ButtonBack, CustomButton, FormBody, Title } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import {
  selectorUserEmail,
  selectorUserName,
  changeProfileName,
  logoutUser,
  selectorUserId,
} from 'store'

export const Profile = () => {
  const dispatch = useAppDispatch()
  const userName = useSelector(selectorUserName)
  const userEmail = useSelector(selectorUserEmail)
  const realUserId = useSelector(selectorUserId)

  const navigate = useNavigate()

  const params = useParams<'id'>()

  useEffect(() => {
    if (params.id !== realUserId) {
      navigate(`${Path.Other}`)
    }
  }, [])

  const [mode, setMode] = useState<boolean>(false)

  const [value, setValue] = useState<string>(userName)

  const NameChanger = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const logoutHandle = () => {
    dispatch(logoutUser())
  }
  const asyncChangeName = () => {
    dispatch(changeProfileName(value))
    setMode(false)
  }

  return (
    <>
      <div className={style.exitArrow}>
        <div className={style.buttonBackPacksWrapper}>
          <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
        </div>
      </div>

      <FormBody width={415} height={410}>
        <Title text="Personal Information" />

        <AvatarUser />
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
        <div className={style.profileEmail}>
          <h4>{userEmail}</h4>
        </div>
        <div className={style.buttonLogout} onClick={logoutHandle}>
          <img src={logout} alt={'log out'} />
          Log Out
        </div>
        {/*<Cards />*/}
        <SecondTableContainer />
      </FormBody>
    </>
  )
}
