import React from 'react'

import { useSelector } from 'react-redux'

import { API_CONFIG } from '../../../api/config'
import { selectorUserId } from '../../../store'
import { learnIcon, editIcon, removeIcon } from '../index'

import style from './TableAction.module.sass'

type TableActionType = {
  user_id: string
}
export const TableAction: React.FC<TableActionType> = ({ user_id }) => {
  const createPack = () => {
    API_CONFIG.post(`cards/pack`, { cardsPack: { name: 'new Pack' } })
  }
  const editPack = () => {
    API_CONFIG.put(`cards/pack`, { cardsPack: { _id: packId, name: 'change name' } })
  }
  const removePack = () => {
    API_CONFIG.delete(`cards/pack`, { params: { id: '630cd8581d127a000430028a' } })
  }
  const userId = useSelector(selectorUserId)
  const packId = '630cd9f01d127a000430028b'

  return (
    <div className={style.actionWrapper}>
      {user_id === userId ? (
        <>
          <div className={style.item}>
            <img src={learnIcon} alt={'learn pack'} className={style.icon} />
          </div>
          <div className={style.item}>
            <img src={editIcon} alt={'edit pack'} className={style.icon} onClick={editPack} />
          </div>
          <div className={style.item}>
            <img src={removeIcon} alt={'remove pack'} className={style.icon} onClick={removePack} />
          </div>
        </>
      ) : (
        <div className={style.item}>
          <img src={learnIcon} alt={'learn pack'} className={style.icon} />
        </div>
      )}
      {/*<div onClick={createPack}>+</div>*/}
    </div>
  )
}
