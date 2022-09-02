import React from 'react'

import { MenuUserPack, TitleWithButton } from 'components'
import { BasicContentCardPage } from 'pages/userPack/index'
import { useSelector } from 'react-redux'
import { selectorTitlePack } from 'store'
import { BackValueType, TableHeadElementType } from 'types'

type authUserCardType = {
  tableHeadData: TableHeadElementType[]
}

export const AuthUserCard = ({ tableHeadData }: authUserCardType) => {
  const titlePack = useSelector(selectorTitlePack)

  const onAddNewCard = () => {}

  const onClickActionTable = (idCard: string, backValue: BackValueType) => {}

  return (
    <>
      <TitleWithButton titleText={titlePack} buttonText="Add new card" onClick={onAddNewCard}>
        <MenuUserPack />
      </TitleWithButton>
      <BasicContentCardPage tableHeadData={tableHeadData} onClickActionTable={onClickActionTable} />
    </>
  )
}
