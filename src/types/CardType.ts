import { CardShortType } from 'types/CardShortType'

export type CardType = CardShortType & {
  _id: string
  user_id: string
  comments: string
  type: string
  rating: number
  more_id: string
  created: string
  updated: string
  __v: number
}
