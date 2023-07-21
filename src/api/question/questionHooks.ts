import { QuestionForm } from "@/app/faq/create/page"
import { question } from "@/app/faq/page"
import axios from "axios"

const findAll = async (query: string) => {
  const url = process.env.NEXT_PUBLIC_API_URL
  try{
    const response = await axios.get(`${url}/question${query}`)
    return response.data
  }catch(err){
    return []
  }
}
const findOne = async (id:number) => {
  const url = process.env.NEXT_PUBLIC_API_URL
  try{
    const response = await axios.get(`${url}/question/${id}`)
    return response.data
  }catch(err){
    return []
  }
}

const update = async (question: question) => {
  const url = process.env.NEXT_PUBLIC_API_URL
  const token = window.localStorage.getItem('access_token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
    try{
      const response = await axios.patch(`${url}/question/${question.id}`, question, config)
      return response.data
    }catch(err){
      return []
    }
}
const create = async (data: QuestionForm) => {
  const url = process.env.NEXT_PUBLIC_API_URL
  const token = window.localStorage.getItem('access_token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  data.categoryId = Number(data.categoryId)
    try{
      const response = await axios.post(`${url}/question`, data, config)
      return response.data
    }catch(err){
      return err
    }
}

export const questionHooks = {
  findAll,
  findOne,
  update,
  create
}