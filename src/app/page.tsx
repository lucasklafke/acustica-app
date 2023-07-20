'use client'
import Title from "@/components/common/Title"
import { useRouter } from 'next/navigation'
import { useEffect } from "react"
export default function Home() {
  const router = useRouter()
  const user = true
  useEffect(() => {
    setTimeout(() => {
      if(!user) {
        router.push('/login')
      } else
        router.push('/menu')
    }, 2000);
  },[])
  return (
    <div className="flex items-center justify-center min-h-screen bg-default">
      <Title />
    </div>
  )
}
