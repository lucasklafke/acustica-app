'use client'
import { categoryHooks } from "@/api/category/categoryHooks"
import { questionHooks } from "@/api/question/questionHooks"
import { question } from "@/app/faq/page"
import Header from "@/components/common/Header"
import MainContentContainer from "@/components/common/MainContentContainer"
import { usePathname, useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"
import LoadingSpinnerComponent from "react-spinners-components"

export default function EditCategory() {
  const route = usePathname()
  const router = useRouter()
  const [question, setQuestion] = useState<question>({
    id: null,
    categoryId: null,
    question: '',
    answer: '',
    createdAt: ''
  })
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const response = await questionHooks.update(question)
    if(response){
      setTimeout(() => {
        const confirm = window.confirm('updated')
        if(confirm) {
          router.push('/faq/edit')
        }
      }, 1000);
    }
  }
  const fetchData = async () => {
    const splitedRoute = route.split('/')
    const id = Number(splitedRoute[3])
    const question = await questionHooks.findOne(id)
    setQuestion(question)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="flex flex-col items-center justify-center w-screen overflow-x-hidden min-h-screen p-4 bg-default">
      <Header />
      <MainContentContainer>
        <form className="flex flex-col w-full items-center justify-center gap-2" onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="categoria">Pergunta</label>
          <input type="text" 
            className="w-2/3 border-1 border-black rounded-md p-2" 
            value={question?.question ?? ''} 
            onChange={(event) => setQuestion({ ...question, question: event.target.value })}
          />

          <label htmlFor="categoria">Resposta</label>
          <input type="text" 
            className="w-2/3 border-1 border-black rounded-md p-2" 
            value={question?.answer ?? ''} 
            onChange={(event) => setQuestion({ ...question, answer: event.target.value })}
          />
          <button className="w-1/3 bg-green-200 rounded-md p-2">
            {loading? <LoadingSpinnerComponent type={ 'DualBall' } color={ '' } size={ '30px' } /> : 'Salvar' }
          </button>
        </form>
      </MainContentContainer>
      
    </div>
  )
}
