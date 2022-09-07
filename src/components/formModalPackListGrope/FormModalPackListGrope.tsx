import { FormPackEditAndCreate } from 'components'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import {
  addNewPack,
  editPack,
  selectorModalElementAction,
  selectorModalElementId,
  selectorModalElementName,
} from 'store'

type FormModalPackListGropeType = {
  onClose: () => void
  isOpenModal: boolean
}

export const FormModalPackListGrope = ({ onClose, isOpenModal }: FormModalPackListGropeType) => {
  const dispatch = useAppDispatch()

  const packName = useSelector(selectorModalElementName)
  const packId = useSelector(selectorModalElementId)
  const modalAction = useSelector(selectorModalElementAction)

  const onAddPack = (valueInput: string, valueCheckBox: boolean) => {
    dispatch(addNewPack({ name: valueInput, private: valueCheckBox }))
  }

  const onEditPack = (valueInput: string, valueCheckBox: boolean) => {
    dispatch(editPack({ name: valueInput, private: valueCheckBox, _id: packId }))
  }

  if (modalAction === 'edit') {
    return (
      <FormPackEditAndCreate
        title="Edit pack"
        valueInput={packName}
        valueCheckBox={false}
        labelInput="Name pack"
        labelCheckBox="Private pack"
        onClickSaveButton={onEditPack}
        onClickCancelButton={onClose}
        isOpenModal={isOpenModal}
      />
    )
  }

  if (modalAction === 'delete') {
    return <div></div>
  }

  if (modalAction === 'add') {
    return (
      <FormPackEditAndCreate
        title="Add new pack"
        valueInput=""
        valueCheckBox={false}
        labelInput="Name pack"
        labelCheckBox="Private pack"
        onClickSaveButton={onAddPack}
        onClickCancelButton={onClose}
        isOpenModal={isOpenModal}
      />
    )
  }

  return <></>
}
