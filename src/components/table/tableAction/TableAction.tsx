import React from 'react'

import { CustomButtonBox } from 'components/button'
import { useSelector } from 'react-redux'
import { selectorUserId } from 'store'

import { editIcon, learnIcon, removeIcon } from '../index'

import style from './TableAction.module.sass'

type TableActionType = {
  user_id: string
  onClickEditAction?: (value: string) => void
  onClickDeleteAction?: (value: string) => void
  onClickLearnAction?: (value: string) => void
}
export const TableAction = ({
  user_id,
  onClickEditAction,
  onClickDeleteAction,
  onClickLearnAction,
}: TableActionType) => {
  const userId = useSelector(selectorUserId)

  const onLearnPack = () => {
    if (onClickLearnAction) {
      onClickLearnAction(user_id)
    }
  }

  const onEditPack = () => {
    if (onClickEditAction) {
      onClickEditAction(user_id)
    }
  }
  const onDeletePack = () => {
    if (onClickDeleteAction) {
      onClickDeleteAction(user_id)
    }
  }

  return (
    <div className={style.actionWrapper}>
      <div className={style.item}>
        <CustomButtonBox color="link" onClick={onLearnPack}>
          <img src={learnIcon} alt={'learn packsList'} className={style.icon} />
        </CustomButtonBox>
      </div>
      {user_id === userId ? (
        <>
          <div className={style.item}>
            <CustomButtonBox color="link" onClick={onEditPack}>
              <img src={editIcon} alt={'edit packsList'} className={style.icon} />
            </CustomButtonBox>
          </div>
          <div className={style.item}>
            <CustomButtonBox color="link" onClick={onDeletePack}>
              <img src={removeIcon} alt={'edit packsList'} className={style.icon} />
            </CustomButtonBox>
          </div>
        </>
      ) : null}
    </div>
  )
}
