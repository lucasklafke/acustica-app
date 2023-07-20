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

export const categoryHooks = {
  findAll
}