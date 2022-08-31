import React, { ReactNode } from 'react'

import style from './TableCell.module.sass'

type TableCellType = {
  title?: string | number
  children?: ReactNode
}
export const TableCell: React.FC<TableCellType> = ({ title, children }) => {
  return (
    <div className={style.cell}>
      {title}
      {children}
    </div>
  )
}
