import { ResponseLearnType } from 'store/slice/learnSlice'

import { API_CONFIG } from './config'

export const learnAPI = {
  sendGrade: (grade: number, card_id: string) =>
    API_CONFIG.put<ResponseLearnType>('cards/grade', { grade, card_id }),
}
