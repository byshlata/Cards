import { FormDelete } from 'components'
import { FormCardEditAndCreate } from 'components/formCardEditAndCreate/FormCardEditAndCreate'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import {
  deleteCard,
  selectorModalCardAction,
  selectorModalCardId,
  selectorModalCardQuestion,
} from 'store'

type FormModalPackListGropeType = {
  onClose: () => void
  isOpenModal: boolean
}

export const FormModalCardsPackGrope = ({ onClose, isOpenModal }: FormModalPackListGropeType) => {
  const dispatch = useAppDispatch()

  const cardQuestion = useSelector(selectorModalCardQuestion)
  const cardId = useSelector(selectorModalCardId)
  const modalAction = useSelector(selectorModalCardAction)

  const onAddCards = (valueQuestionInput: string, valueAnswerInput: string) => {
    // dispatch(addNewPack({ name: valueInput, privateValue: valueCheckBox }))
    console.log('add')
  }

  const onEditCard = (valueQuestionInput: string, valueAnswerInput: string) => {
    console.log('edit')
    // dispatch(editPack({ name: valueInput, privateValue: valueCheckBox, _id: cardId }))
  }

  const onDeleteCard = () => {
    dispatch(deleteCard(cardId))
  }

  if (modalAction === 'edit') {
    return (
      <FormCardEditAndCreate
        title="Edit crd"
        valueQuestionInput={'1'}
        valueAnswerInput={'2'}
        labelSelector={'3'}
        labelQuestionInput="Question"
        labelAnswerInput="Answer"
        onClickSaveButton={onEditCard}
        onClickCancelButton={onClose}
        isOpenModal={isOpenModal}
      />
    )
  }

  if (modalAction === 'add') {
    return <></>
  }

  if (modalAction === 'delete') {
    return (
      <FormDelete
        packOrCard="card"
        title="Delete card"
        nameDeleteValue={cardQuestion}
        onClickDeleteButton={onDeleteCard}
        onClickCancelButton={onClose}
      />
    )
  }

  return <></>
}
