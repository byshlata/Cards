import React from 'react'

import style from './TableCell.module.sass'
type TableCellType = {
  title: string | number
}
export const TableCell: React.FC<TableCellType> = ({ title }) => {
  return <div className={style.cell}>{title}</div>
}
