import React from 'react'

import { ButtonBack } from 'components'
import { Path } from 'enums'
import { AllUserPack } from 'pages/userPack/allUserPack/AllUserPack'

export const UserPack = () => {
  return (
    <div>
      <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
      <AllUserPack />
    </div>
  )
}
