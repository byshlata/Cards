import React from 'react'

import { CustomButtonBox } from 'components/button'
import { useSelector } from 'react-redux'
import { selectorUserId } from 'store'

import { editIcon, learnIcon, removeIcon } from '../index'

import style from './TableAction.module.sass'

type TableActionType = {
  user_id: string
}
export const TableAction: React.FC<TableActionType> = ({ user_id }) => {
  const userId = useSelector(selectorUserId)
  const onLearnPack = () => {}
  const onEditPack = () => {}
  const onRemovePack = () => {}

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
            <CustomButtonBox color="link" onClick={onRemovePack}>
              <img src={removeIcon} alt={'edit packsList'} className={style.icon} />
            </CustomButtonBox>
          </div>
        </>
      ) : null}
    </div>
  )
}
