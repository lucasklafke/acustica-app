import { Category } from "@/app/category/edit/[...id]/page"
import axios from "axios"

const findAll = async (query: string) => {
    try{
      const response = await axios.get(`http://localhost:3000/category${query}`)
      console.log(response.data)
      return response.data
    }catch(err){
      console.log(err)
      return []
    }
}
const findOne = async (id:number) => {
    try{
      const response = await axios.get(`http://localhost:3000/category/${id}`)
      return response.data
    }catch(err){
      console.log(err)
      return []
    }
}

const update = async (category: Category) => {
    try{
      const response = await axios.patch(`http://localhost:3000/category/${category.id}`, category)
      return response.data
    }catch(err){
      console.log(err)
      return []
    }
}

export const categoryHooks = {
  findAll,
  findOne,
  update
}