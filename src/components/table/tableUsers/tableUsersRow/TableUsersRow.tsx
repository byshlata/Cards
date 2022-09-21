import React, { SyntheticEvent } from 'react'

import defaultAvatar from 'assets/image/avatar.png'
import { CustomButtonBox, Modal } from 'components'
import { useModal } from 'components/modal/hooks/useModal'
import { TableCell } from 'components/table/component/tableCell/TableCell'
import { BackValueType } from 'types'

import style from './TableUsersRow.module.sass'

type TableSimpleRowUserType = {
  avatar?: string
  numberOfPacks: number
  user_id: string
  created: string
  user_name: string
  onClickAction: (idUser: string, backValue: BackValueType) => void
}

const COUNT_COLUMN_TABLE = 4

export const TableUsersRow = ({
  numberOfPacks,
  user_id,
  user_name,
  created,
  onClickAction,
  avatar,
}: TableSimpleRowUserType) => {
  const [isOpenModal, onOpenModal, onCloseModal] = useModal()
  if (!avatar) {
    avatar = defaultAvatar
  }

  const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultAvatar
  }

  const onClickActionHandle = (backValue: BackValueType) => {
    onClickAction(user_id, backValue)
  }

  return (
    <div className={style.rowWrapper}>
      <TableCell countCell={COUNT_COLUMN_TABLE}>
        <Modal onClose={onCloseModal} isOpen={isOpenModal}>
          <img className={style.imgModal} src={avatar} alt="avatarUser" />
        </Modal>
        <img
          className={style.imgAvatar}
          src={avatar}
          alt="avatarUser"
          onError={onError}
          onClick={onOpenModal}
        />
      </TableCell>
      <TableCell countCell={COUNT_COLUMN_TABLE}>
        <CustomButtonBox color={'link'} onClick={() => onClickActionHandle('name')}>
          {user_name}
        </CustomButtonBox>
      </TableCell>
      <TableCell title={numberOfPacks} countCell={COUNT_COLUMN_TABLE} />
      <TableCell title={created} countCell={COUNT_COLUMN_TABLE} />
    </div>
  )
}
