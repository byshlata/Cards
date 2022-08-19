import React from 'react'

type TitleType = {
  text: string
}

export const Title = ({ text }: TitleType) => {
  return <h2>{text}</h2>
}
