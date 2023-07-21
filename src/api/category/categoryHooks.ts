import { Category } from "@/app/category/edit/[...id]/page"
import { CategoryForm, QuestionForm } from "@/app/faq/create/page"
import axios from "axios"

const findAll = async (query: string) => {
  const url = process.env.NEXT_PUBLIC_API_URL

  try{
    const response = await axios.get(`${url}/category${query}`)
    return response.data
  }catch(err){
    return err
  }
}
const findOne = async (id:number) => {
  const url = process.env.NEXT_PUBLIC_API_URL

  try{
    const response = await axios.get(`${url}/category/${id}`)
    return response.data
  }catch(err){
    return err
  }
}

const update = async (category: Category) => {
  const url = process.env.NEXT_PUBLIC_API_URL

  const token = window.localStorage.getItem('access_token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
    try{
      const response = await axios.patch(`${url}/category/${category.id}`, category, config)
      return response.data
    }catch(err){
      return err
    }
}
const create = async (data: CategoryForm) => {
  const url = process.env.NEXT_PUBLIC_API_URL
  const token = window.localStorage.getItem('access_token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  if(data.parentId !== null) {
    data.parentId = Number(data.parentId)
  }
    try{
      const response = await axios.post(`${url}/category`, data, config)
      return response.data
    }catch(err){
      return err
    }
}

export const categoryHooks = {
  findAll,
  findOne,
  update,
  create
}