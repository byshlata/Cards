import { FormDelete } from 'components'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import {
  addNewPack,
  deleteCard,
  editPack,
  selectorModalPackAction,
  selectorModalPackId,
  selectorModalPackName,
} from 'store'

type FormModalPackListGropeType = {
  onClose: () => void
  isOpenModal: boolean
}

export const FormModalCardsPackGrope = ({ onClose, isOpenModal }: FormModalPackListGropeType) => {
  const dispatch = useAppDispatch()

  const cardName = useSelector(selectorModalPackName)
  const cardId = useSelector(selectorModalPackId)
  const modalAction = useSelector(selectorModalPackAction)

  const onAddCards = (valueInput: string, valueCheckBox: boolean) => {
    dispatch(addNewPack({ name: valueInput, privateValue: valueCheckBox }))
  }

  const onEditCard = (valueInput: string, valueCheckBox: boolean) => {
    dispatch(editPack({ name: valueInput, privateValue: valueCheckBox, _id: cardId }))
  }

  const onDeleteCard = () => {
    dispatch(deleteCard(cardId))
  }

  if (modalAction === 'edit') {
    return <></>
  }

  if (modalAction === 'add') {
    return <></>
  }

  if (modalAction === 'delete') {
    return (
      <FormDelete
        packOrCard="card"
        title="Delete card"
        nameDeleteValue={cardName}
        onClickDeleteButton={onDeleteCard}
        onClickCancelButton={onClose}
      />
    )
  }

  return <></>
}
