import { FormDelete, FormCardEditAndCreate } from 'components'
import { useAppDispatch } from 'hooks'
import { deleteCard, addNewCard, editCard } from 'store'
import { BackValueType } from 'types'

type FormModalPackListGropeType = {
  onClose: () => void
  isOpenModal: boolean
  idCard: string
  idPack: string
  question: string
  answer: string
  action: BackValueType
}

export const FormModalCardsPackGrope = ({
  onClose,
  isOpenModal,
  idCard,
  idPack,
  question,
  answer,
  action,
}: FormModalPackListGropeType) => {
  const dispatch = useAppDispatch()

  const onAddCards = (valueQuestionInput: string, valueAnswerInput: string) => {
    dispatch(
      addNewCard({ cardsPack_id: idPack, question: valueQuestionInput, answer: valueAnswerInput })
    )
  }

  const onEditCard = (valueQuestionInput: string, valueAnswerInput: string) => {
    dispatch(editCard({ _id: idCard, question: valueQuestionInput, answer: valueAnswerInput }))
  }

  const onDeleteCard = () => {
    dispatch(deleteCard(idCard))
  }

  if (action === 'edit') {
    return (
      <FormCardEditAndCreate
        title="Edit card"
        valueQuestionInput={question}
        valueAnswerInput={answer}
        labelSelector="text"
        labelQuestionInput="Question"
        labelAnswerInput="Answer"
        onClickSaveButton={onEditCard}
        onClickCancelButton={onClose}
        isOpenModal={isOpenModal}
      />
    )
  }

  if (action === 'add') {
    return (
      <FormCardEditAndCreate
        title="Create card"
        valueQuestionInput={question}
        valueAnswerInput={answer}
        labelSelector="text"
        labelQuestionInput="Question"
        labelAnswerInput="Answer"
        onClickSaveButton={onAddCards}
        onClickCancelButton={onClose}
        isOpenModal={isOpenModal}
      />
    )
  }

  if (action === 'delete') {
    return (
      <FormDelete
        packOrCard="card"
        title="Delete card"
        nameDeleteValue={question}
        onClickDeleteButton={onDeleteCard}
        onClickCancelButton={onClose}
      />
    )
  }

  return <></>
}
