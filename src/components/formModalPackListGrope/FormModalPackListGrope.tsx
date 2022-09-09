import { FormDelete, FormPackEditAndCreate } from 'components'
import { useAppDispatch } from 'hooks'
import { addNewPack, editPack } from 'store'
import { deletePack } from 'store/thunk/pakcThunk'
import { BackValueType } from 'types'

type FormModalPackListGropeType = {
  onClose: () => void
  isOpenModal: boolean
  packName: string
  packId: string
  modalAction: BackValueType
}

export const FormModalPackListGrope = ({
  onClose,
  isOpenModal,
  packName,
  packId,
  modalAction,
}: FormModalPackListGropeType) => {
  const dispatch = useAppDispatch()

  const onAddPack = (valueInput: string, valueCheckBox: boolean) => {
    dispatch(addNewPack({ name: valueInput, privateValue: valueCheckBox }))
  }

  const onEditPack = (valueInput: string, valueCheckBox: boolean) => {
    dispatch(editPack({ name: valueInput, privateValue: valueCheckBox, _id: packId }))
  }

  const onDeletePack = () => {
    dispatch(deletePack(packId))
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

  if (modalAction === 'delete') {
    return (
      <FormDelete
        packOrCard="pack"
        title="Delete pack"
        nameDeleteValue={packName}
        onClickDeleteButton={onDeletePack}
        onClickCancelButton={onClose}
      />
    )
  }

  return <></>
}
