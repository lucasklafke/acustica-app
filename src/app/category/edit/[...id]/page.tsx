'use client'
import { categoryHooks } from "@/api/category/categoryHooks"
import Header from "@/components/common/Header"
import MainContentContainer from "@/components/common/MainContentContainer"
import { usePathname, useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"
import LoadingSpinnerComponent from "react-spinners-components"
export interface Category {
category: string
createdAt:string
id: Number | null
parentId: Number | null
}
export default function EditCategory() {
  const route = usePathname()
  const router = useRouter()
  const [category, setCategory] = useState<Category>({
    category: '',
    createdAt:'',
    id: null,
    parentId:  null
  })
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const response = await categoryHooks.update(category)
      if(response.message) {
        window.alert(response.message)
        setLoading(false)
      } else {
        window.alert('updated')
        router.push('/faq/edit')
      }
    
  }
  const fetchData = async () => {
    const splitedRoute = route.split('/')
    const id = Number(splitedRoute[3])
    const category = await categoryHooks.findOne(id)
    setCategory(category)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="flex flex-col items-center justify-center w-screen overflow-x-hidden min-h-screen p-4 bg-default">
      <Header />
      <MainContentContainer>
        <form className="flex flex-col w-full items-center justify-center gap-2" onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="categoria">Nome da categoria</label>
          <input type="text" className="w-2/3 border-1 border-black rounded-md p-2" value={category?.category ?? ''} onChange={(event) => setCategory({ ...category, category: event.target.value })}/>
          <button className="w-1/3 bg-green-200 rounded-md p-2">
            {loading? <LoadingSpinnerComponent type={ 'DualBall' } color={ '' } size={ '30px' } /> : 'Salvar' }
          </button>
        </form>
      </MainContentContainer>
      
    </div>
  )
}
