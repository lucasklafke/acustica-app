import { LoginForm } from "@/app/login/page"
import axios from "axios"

const login = async (loginForm: LoginForm) => {
  try{

    const response = await axios.post(`http://localhost:3000/auth/login`,loginForm)
    return response.data
  }catch(error){
    return error
  }
}
export const authHooks = {
  login
}