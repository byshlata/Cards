import React from 'react'

import { TitleWithButton } from 'components'
import { BasicContentCardPage } from 'pages/userPack/index'
import { useSelector } from 'react-redux'
import { selectorTitlePack } from 'store'
import { BackValueType, TableHeadElementType } from 'types'

type AllUserCardType = {
  tableHeadData: TableHeadElementType[]
}

export const AllUserCard = ({ tableHeadData }: AllUserCardType) => {
  const titlePack = useSelector(selectorTitlePack)

  const onLearnCard = () => {}

  const onClickActionTable = (idCard: string, backValue: BackValueType) => {}

  return (
    <>
      <TitleWithButton titleText={titlePack} buttonText="Learn to pack" onClick={onLearnCard} />
      <BasicContentCardPage tableHeadData={tableHeadData} onClickActionTable={onClickActionTable} />
    </>
  )
}
