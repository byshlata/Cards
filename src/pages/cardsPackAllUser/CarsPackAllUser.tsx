import React from 'react'

import { TitleWithButton } from 'components'
import { BasicContentCardPage } from 'pages/cardsPack/components/basicContentCardPage/BasicContentCardPage'

import { TABLET_HEADER_ALL_USER } from './optionHeaderTableAllUser/optionTableHeaderAllUser'

type CarsPackAllUserType = {
  titlePack: string
  idPack: string | undefined
}

export const CarsPackAllUser = ({ titlePack, idPack }: CarsPackAllUserType) => {
  const onLearn = () => {}

  return (
    <>
      <TitleWithButton titleText={titlePack} buttonText="Learn to pack" onClick={onLearn} />
      <BasicContentCardPage tableHeadData={TABLET_HEADER_ALL_USER} />
    </>
  )
}
