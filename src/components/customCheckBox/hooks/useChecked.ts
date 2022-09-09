import { useState } from 'react'

export const useCustomCheckBox = (checked = false) => {
  const [checkedBox, setCheckedBox] = useState<boolean>(checked)

  return { checkedBox, setCheckedBox }
}
