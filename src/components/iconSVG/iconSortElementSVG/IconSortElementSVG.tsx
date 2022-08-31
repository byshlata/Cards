import React from 'react'

type IconSortElementSvgType = {
  rotate: boolean
  isActive: boolean
}

const ROTATE_ANGEL = 180

export const IconSortElementSvg = ({ rotate, isActive }: IconSortElementSvgType) => {
  const rotateAngle = rotate ? ROTATE_ANGEL : 0
  const fillColor = isActive ? 'red' : 'black'

  return (
    <svg
      fill={fillColor}
      width="15px"
      transform={`rotate(${rotateAngle})`}
      height="15px"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 483.049 483.049"
      xmlSpace="preserve"
    >
      <polygon points="241.524,121.155 241.524,361.894 483.049,361.894 	" />
      <polygon points="0,361.894 241.524,361.894 241.524,121.155 	" />
    </svg>
  )
}
