import React from 'react'

import { useSelector } from 'react-redux'

import { packAPI } from '../../../api'
import { useAppDispatch } from '../../../hooks'
import { editIcon, learnIcon, removeIcon } from '../index'

import style from './TableAction.module.sass'

import { CustomButtonBox } from 'components/button'
import { selectorUserId } from 'store'

type TableActionType = {
  user_id?: string
}
export const TableAction: React.FC<TableActionType> = ({ user_id }) => {
  const dispatch = useAppDispatch()
  const userId = useSelector(selectorUserId)
  const onLearnPack = () => {}
  const onCreatePack = () => {
    dispatch(packAPI.createPack('second less'))
  }
  const onEditPack = () => {
    dispatch(packAPI.editPack('630cdb7b1d127a000430028d', 'rr_test-2'))
  }
  const onRemovePack = () => {}

  //dispatch(packAPI.removePack('630f68b42e50022c906cb732'))

  return (
    <div className={style.actionWrapper}>
      <div className={style.item}>
        <CustomButtonBox color="link" onClick={onLearnPack}>
          <img src={learnIcon} alt={'learn pack'} className={style.icon} />
        </CustomButtonBox>
      </div>
      {user_id === userId ? (
        <>
          <div className={style.item}>
            <CustomButtonBox color="link" onClick={onEditPack}>
              <img src={editIcon} alt={'edit pack'} className={style.icon} />
            </CustomButtonBox>
          </div>
          <div className={style.item}>
            <CustomButtonBox color="link" onClick={onRemovePack}>
              <img src={removeIcon} alt={'edit pack'} className={style.icon} />
            </CustomButtonBox>
          </div>
          {/*<div onClick={onCreatePack}>+</div>*/}
        </>
      ) : null}
    </div>
  )
}
