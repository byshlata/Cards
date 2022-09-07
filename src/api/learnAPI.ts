import { API_CONFIG } from './config'
import { PathAPI } from 'enums'
import { LearnRequestType, LearnType, ResponseLearnType } from 'store/slice/learnSlice'
import { AxiosResponse } from 'axios'
export const learnAPI = {
    sendGrade: async (grade: number, card_id: string)=>{
        return await API_CONFIG.put<any, AxiosResponse<ResponseLearnType, LearnType>, LearnRequestType>(`${PathAPI.Cards}${PathAPI.Grade}`,{
            grade, card_id
        })
    }
}