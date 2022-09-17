import React, { ReactElement, ReactNode } from 'react'

import style from 'components/table/component/tableCell/TableCell.module.sass'

const PERCENT_ALL_WIDTH = 100

type TableCellType = {
  title?: string | number
  children?: ReactNode | ReactElement[]
  countCell?: number
}
export const TableCell: React.FC<TableCellType> = React.memo(
  ({ title, countCell = 1, children }) => {
    return (
      <div className={style.cell} style={{ width: `${PERCENT_ALL_WIDTH / countCell}%` }}>
        <span className={style.text}>{title}</span>
        {children}
      </div>
    )
  }
)
