import React from 'react'

import { MenuUserPack, TitleWithButton } from 'components'
import { BasicContentCardPage } from 'pages/userCard/basicContentCardPage/BasicContentCardPage'
import { useSelector } from 'react-redux'
import { selectorTitlePack } from 'store'
import { TableHeadElementType } from 'types'

type authUserCardType = {
  tableHeadData: TableHeadElementType[]
}

export const AuthUserCard = ({ tableHeadData }: authUserCardType) => {
  const titlePack = useSelector(selectorTitlePack)

  const onLearnCard = () => {}

  return (
    <>
      <TitleWithButton titleText={titlePack} buttonText="Learn to pack" onClick={onLearnCard}>
        <MenuUserPack />
      </TitleWithButton>
      <BasicContentCardPage tableHeadData={tableHeadData} />
    </>
  )
}
