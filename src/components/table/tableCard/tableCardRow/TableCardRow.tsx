import React from 'react'

import { CustomButtonBox, IconDeleteSvg, IconEditSvg, Grade } from 'components'
import { TablePackListAction } from 'components/table/tablePackList/tablePackListAction/TablePackListAction'
import { BackValueType } from 'types'

import { TableCell } from '../../component/tableCell/TableCell'

import style from './TableCardRow.module.sass'

type TableCardRowType = {
  user_id: string
  authUser_id: string
  _id: string
  question: string
  answer: string
  grade: number
  updated: string
  create: string
  onClickAction?: (
    idCard: string,
    questionCard: string,
    answer: string,
    action: BackValueType
  ) => void
}

const COUNT_COLUMN_ALL_USER_TABLE = 4
const COUNT_COLUMN_AUTH_USER_TABLE = 5

export const TableCardRow = ({
  user_id,
  authUser_id,
  answer,
  question,
  updated,
  grade,
  _id,
  onClickAction,
}: TableCardRowType) => {
  const onClickActionHandle = (action: BackValueType) => {
    onClickAction && onClickAction(_id, question, answer, action)
  }

  const isAuthUserTable = authUser_id === user_id

  const widthCells = isAuthUserTable ? COUNT_COLUMN_AUTH_USER_TABLE : COUNT_COLUMN_ALL_USER_TABLE

  return (
    <div className={style.rowWrapper}>
      <TableCell title={question} countCell={widthCells} />
      <TableCell title={answer} countCell={widthCells} />
      <TableCell title={updated} countCell={widthCells} />
      <TableCell countCell={widthCells}>
        <Grade rating={grade} />
      </TableCell>
      {isAuthUserTable && (
        <TableCell countCell={widthCells}>
          <TablePackListAction user_id={user_id} authUser_id={authUser_id}>
            <CustomButtonBox color="link" onClick={() => onClickActionHandle('edit')}>
              <IconEditSvg />
            </CustomButtonBox>
            <CustomButtonBox color="link" onClick={() => onClickActionHandle('delete')}>
              <IconDeleteSvg />
            </CustomButtonBox>
          </TablePackListAction>
        </TableCell>
      )}
    </div>
  )
}
