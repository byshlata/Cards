import React, { ReactElement } from 'react'

import style from './TablePackListAction.module.sass'

type TableActionType = {
  authUser_id: string
  user_id: string
  children?: ReactElement[]
}

const INDEX_ELEMENT = 2

export const TablePackListAction = ({ user_id, children, authUser_id }: TableActionType) => {
  const buttonLearn = children ? children[0] : null
  const buttonEdit = children ? children[1] : null
  const buttonDelete = children ? children[INDEX_ELEMENT] : null

  return (
    <div className={style.actionWrapper}>
      <div className={style.item}>{buttonLearn}</div>
      {user_id === authUser_id ? (
        <>
          <div className={style.item}>{buttonEdit}</div>
          <div className={style.item}>{buttonDelete}</div>
        </>
      ) : null}
    </div>
  )
}
