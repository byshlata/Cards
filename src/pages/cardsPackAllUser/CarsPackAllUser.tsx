import React from 'react'

import { TitleWithButton } from 'components'
import { BasicContentCardPage } from 'pages/cardsPack/components/basicContentCardPage/BasicContentCardPage'

import { TABLET_HEADER_ALL_USER } from './optionHeaderTableAllUser/optionTableHeaderAllUser'
import { useNavigate } from 'react-router-dom'
import { Path } from 'enums/path'

type CarsPackAllUserType = {
  titlePack: string
  idPack: string | undefined
}

export const CarsPackAllUser = ({ titlePack, idPack }: CarsPackAllUserType) => {
    const navigate = useNavigate()
  const onLearn = () => {
      navigate(`${Path.Pack}${Path.Root}${idPack}${Path.Root}${Path.Learn}`)
  }

  return (
    <>
      <TitleWithButton titleText={titlePack} buttonText="Learn to pack" onClick={onLearn} />
      <BasicContentCardPage tableHeadData={TABLET_HEADER_ALL_USER} />
    </>
  )
}
