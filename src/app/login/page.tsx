'use client'
import Title from "@/components/common/Title";
import { useState } from "react";
import LoadingSpinnerComponent from 'react-spinners-components';
import { useRouter } from "next/navigation";

export default function Login() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const login = () => {
    setLoading(true)
    setTimeout(() => {
      router.push('/menu')
    }, 3000);
  } 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-default">
      <div className="absolute top-20">
        <Title />
      </div>
      <div className="flex flex-col items-start justify-evenly h-fit gap-3 p-4 w-full max-w-xl rounded-md bg-white">
        <div className="w-full">
          <label htmlFor="username">Username</label>
          <input type="input" name="username" className="w-full h-10 p-1 text-sm border-2 border-details rounded-md text-gray-800"/>
        </div>
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="w-full h-10 p-1 border-2 border-details rounded-md text-gray-800"/>
        </div>
        <button className="w-32 p-1 border-2 border-details text rounded-md font-itim text-lg" onClick={login}>
          {loading? <LoadingSpinnerComponent type={ 'DualBall' } color={ '' } size={ '30px' } /> : 'Enter' }
        </button>
      </div>
    </div>
  )
}
