import React from 'react'

import style from './SecondTableCell.module.sass'
type SecondTableCellType = {
  title: string | undefined | number
}
export const SecondTableCell: React.FC<SecondTableCellType> = ({ title }) => {
  return <div className={style.cellWrapper}>{title}</div>
}
