import { QuestionForm } from "@/app/faq/create/page"
import { question } from "@/app/faq/page"
import axios from "axios"

const findAll = async (query: string) => {
    try{
      const response = await axios.get(`http://localhost:3000/question${query}`)
      console.log(response.data)
      return response.data
    }catch(err){
      console.log(err)
      return []
    }
}
const findOne = async (id:number) => {
    try{
      const response = await axios.get(`http://localhost:3000/question/${id}`)
      return response.data
    }catch(err){
      console.log(err)
      return []
    }
}

const update = async (question: question) => {
    try{
      const response = await axios.patch(`http://localhost:3000/question/${question.id}`, question)
      return response.data
    }catch(err){
      console.log(err)
      return []
    }
}
const create = async (data: QuestionForm) => {
  data.categoryId = Number(data.categoryId)
    try{
      const response = await axios.post(`http://localhost:3000/question`, data)
    }catch(err){
      console.log(err)
      return []
    }
}

export const questionHooks = {
  findAll,
  findOne,
  update,
  create
}