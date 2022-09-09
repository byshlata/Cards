import { FormDelete, FormPackEditAndCreate } from 'components'
import { useAppDispatch } from 'hooks'
import { addNewPack, editPack, deletePack } from 'store'
import { BackValueType } from 'types'

type FormModalPackListGropeType = {
  onClose: () => void
  isOpenModal: boolean
  packName: string
  packId: string
  action: BackValueType
}

export const FormModalPackListGrope = ({
  onClose,
  isOpenModal,
  packName,
  packId,

  action,
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

  if (action === 'edit') {
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

  if (action === 'add') {
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

  if (action === 'delete') {
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
