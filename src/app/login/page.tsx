'use client'
import Title from "@/components/common/Title";
import { useState } from "react";
import LoadingSpinnerComponent from 'react-spinners-components';
import { useRouter } from "next/navigation";
import MainContentContainer from "@/components/common/MainContentContainer";
import { authHooks } from "@/api/auth/authHooks";
export interface LoginForm {
  username: string,
  password: string
}
export default function Login() {
  const [loading, setLoading] = useState(false)
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: '',
    password: ''
  })
  const router = useRouter()
  const login = async () => {
    setLoading(true)
    const response = await authHooks.login(loginForm)
    if(response.access_token) {
      setTimeout(() => {
        window.localStorage.setItem("access_token", response.access_token)
        router.push('/menu')
    }, 3000);
    }else {
      setLoading(false)
      window.alert('Usuário inválido')
    }
  } 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-default">
      <div className="absolute top-20">
        <Title />
      </div>
      <MainContentContainer>
        <div className="w-full">
          <label htmlFor="username">Username</label>
          <input type="input" name="username" value={loginForm.username} className="w-full h-10 p-1 text-sm border-1 border-details rounded-md text-gray-800"
            onChange={(event) => setLoginForm({ ...loginForm, username: event.target.value })}
          />
        </div>
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={loginForm.password} className="w-full h-10 p-1 border-1 border-details rounded-md text-gray-800"
            onChange={(event) => setLoginForm({ ...loginForm, password: event.target.value })}
          />
        </div>
        <button className="w-32 p-1 border-1 border-details text rounded-md font-itim text-lg" onClick={login}>
          {loading? <LoadingSpinnerComponent type={ 'DualBall' } color={ '' } size={ '30px' } /> : 'Enter' }
        </button>
      </MainContentContainer>
    </div>
  )
}
