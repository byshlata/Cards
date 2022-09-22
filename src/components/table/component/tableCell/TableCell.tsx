import React, { ReactElement, ReactNode } from 'react'

import style from 'components/table/component/tableCell/TableCell.module.sass'

type TableCellType = {
  title?: string | number
  children?: ReactNode | ReactElement[]
  widthCellPercent?: string
}
export const TableCell: React.FC<TableCellType> = React.memo(
  ({ title, widthCellPercent, children }) => {
    return (
      <div className={style.cell}>
        <span className={style.text}>{title}</span>
        {children}
      </div>
    )
  }
)
