import { LoginForm } from "@/app/login/page"
import axios from "axios"

const login = async (loginForm: LoginForm) => {
  const url = process.env.NEXT_PUBLIC_API_URL
  try{
    const response = await axios.post(`${url}/auth/login`,loginForm)
    return response.data
  }catch(error){
    return error
  }
}
export const authHooks = {
  login
}