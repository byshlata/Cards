import React, { ReactElement, ReactNode } from 'react'

import style from 'components/table/component/tableCell/TableCell.module.sass'

type TableCellType = {
  title?: string | number
  children?: ReactElement | ReactElement[]
}
export const TableCell: React.FC<TableCellType> = React.memo(({ title, children }) => {
  return (
    <div className={style.cell}>
      {title}
      {children}
    </div>
  )
})
