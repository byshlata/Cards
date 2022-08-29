import React, { ReactElement } from 'react'
import 'antd/dist/antd.css'

import { Pagination } from 'antd'
import {
  CustomSlider,
  TitleWithButton,
  Search,
  ButtonChoiceGrope,
  ButtonResetFilter,
  FilterElementContainer,
} from 'components'
import { useSelector } from 'react-redux'
import { selectorIsLoading } from 'store'
import { FilterElementType } from 'types'

import style from './Pack.module.sass'

const FILTER_ELEMENT: FilterElementType[] = [
  { title: 'Search', element: <Search /> },
  { title: 'Show packs cards', element: <ButtonChoiceGrope /> },
  { title: 'Number of cards', element: <CustomSlider /> },
  { title: '', element: <ButtonResetFilter /> },
]

export const Pack = () => {
  const isLoading = useSelector(selectorIsLoading)

  const onChangePack = (number: number) => {
    console.log(number)
  }

  const onRemovePack = (number: number) => {
    console.log(number)
  }

  const onLearnPack = (number: number) => {
    console.log(number)
  }

  const onchangePagination = (page: number, pageSize: number) => {}

  const onClockButton = () => {}

  return (
    <div className={style.packWrapper}>
      <TitleWithButton titleText="Pack list" buttonText="Add new pack" onClick={onClockButton} />
      <div className={style.filterElementWrapper}>
        {FILTER_ELEMENT.map(({ element, title }) => (
          <FilterElementContainer key={title} element={element} title={title} />
        ))}
      </div>
      <div className={style.paginationWrapper}>
        <Pagination
          disabled={isLoading}
          showQuickJumper
          defaultCurrent={2}
          total={500}
          onChange={onchangePagination}
        />
      </div>
    </div>
  )
}
