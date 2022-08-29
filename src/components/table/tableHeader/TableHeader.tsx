import React from 'react'

import { sortArrow } from '../index'
import { TableCell } from '../tableCell/TableCell'

import style from './TableHeader.module.sass'

export const TableHeader = () => {
  return (
    <div className={style.headerWrapper}>
      <TableCell title={'Name'} />
      <TableCell title={'Cards'} />
      <TableCell title={'Last Updated'} />
      <div className={style.tableHeaderWithButton}>
        <TableCell title={'Created By'} />
        <div>
          <img src={sortArrow} alt={'sort arrow'} className={style.sortArrow} />
        </div>
      </div>
      <TableCell title={'Actions'} />
    </div>
  )
}
