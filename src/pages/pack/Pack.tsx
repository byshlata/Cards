import React from 'react'
import 'antd/dist/antd.css'

import { Pagination } from 'antd'
import { useSelector } from 'react-redux'
import { selectorIsLoading } from 'store'

export const Pack = () => {
  const isLoading = useSelector(selectorIsLoading)

  const onChange = (number: number) => {
    console.log(number)
  }

  return (
    <>
      <Pagination
        disabled={isLoading}
        showQuickJumper
        defaultCurrent={2}
        total={500}
        onChange={onChange}
      />
    </>
  )
}
