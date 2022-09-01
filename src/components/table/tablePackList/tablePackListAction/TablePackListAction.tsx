import React, { ReactElement } from 'react'

import style from 'components/table/tablePackList/tablePackListAction/TablePackListAction.module.sass'
import { useSelector } from 'react-redux'
import { selectorUserId } from 'store'

type TableActionType = {
  user_id: string
  children?: ReactElement[]
}
export const TablePackListAction = ({ user_id, children }: TableActionType) => {
  const userId = useSelector(selectorUserId)

  const buttonLearn = children ? children[0] : null
  const buttonEdit = children ? children[1] : null
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const buttonDelete = children ? children[2] : null

  return (
    <div className={style.actionWrapper}>
      <div className={style.item}>{buttonLearn}</div>
      {user_id === userId ? (
        <>
          <div className={style.item}>{buttonEdit}</div>
          <div className={style.item}>{buttonDelete}</div>
        </>
      ) : null}
    </div>
  )
}
