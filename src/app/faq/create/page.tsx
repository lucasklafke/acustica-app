'use client'
import { categoryHooks } from "@/api/category/categoryHooks";
import { questionHooks } from "@/api/question/questionHooks";
import Header from "@/components/common/Header";
import MainContentContainer from "@/components/common/MainContentContainer";
import { FormEvent, useEffect, useState } from "react";
import LoadingSpinnerComponent from "react-spinners-components";
import { Categories } from "../page";
export interface QuestionForm {
  question: string,
    answer: string,
    categoryId: number | string
}
export default function Home() {
  const [selected, setSelected] = useState<string>('')
  const [categories, setCategories] = useState<Categories[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [questionForm, setQuestionForm] = useState<QuestionForm>({
    question: '',
    answer: '',
    categoryId: ''
  })
  const fetchData = async () => {
    const categories = await categoryHooks.findAll('?all=true')
    setCategories(categories)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    if(selected === 'Pergunta') {
      questionHooks.create(questionForm)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-default">
      <Header />
      <MainContentContainer>
        <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col items-center w-full">
          <label htmlFor="select">Qual tipo de registro deseja criar?</label>
          <select name="select" id="select" defaultValue={''} 
          onChange={(event) => setSelected(event.target.value)} className="w-2/3 p-2 bg-white border-1 border-details rounded-md">
            <option value=""></option>
            <option value="Categoria">Categoria</option>
            <option value="Pergunta">Pergunta</option>
          </select>
          {selected === 'Categoria'?
            <div className="flex flex-col items-center w-full">
            <label htmlFor="">Nome da categoria</label>
            <input type="text" className="w-2/3 border-1 border-details rounded-md p-2"/>
            <label htmlFor="">Pertence à categoria:</label>
            <select name="" id="" className="w-2/3 p-2 bg-white border-1 border-details rounded-md">
              <option value='null'>nenhuma</option>
              {categories.map((category) => 
                <option value={category.category} key={category.id}>{category.category}</option>
              )}
            </select>
            </div>
            : 
            <div className="flex flex-col items-center w-full">
              <label htmlFor="">Pergunta</label>
              <input type="text" className="w-2/3 border-1 border-details rounded-md p-2" 
                value={questionForm.question} onChange={(event) => setQuestionForm({...questionForm, question: event.target.value})}
              />
              <label htmlFor="">Resposta</label>
              <input type="text" className="w-2/3 border-1 border-details rounded-md p-2"
                value={questionForm.answer} onChange={(event) => setQuestionForm({...questionForm, answer: event.target.value})}
              />
              <label htmlFor="">Pertence à categoria:</label>
              <select name="" id="" className="w-2/3 p-2 bg-white border-1 border-details rounded-md "
              value={questionForm.categoryId} onChange={(event) => setQuestionForm({...questionForm, categoryId: event.target.value})}>
                <option value='null'>nenhuma</option>
                {categories.map((category) => 
                  <option value={category.id} key={category.id}>{category.category}</option>
                )}
              </select>
            </div>
          }
          <button className="w-1/3 bg-green-200 rounded-md p-2">
            {loading? <LoadingSpinnerComponent type={ 'DualBall' } color={ '' } size={ '30px' } /> : 'Salvar' }
          </button>
        </form>
      </MainContentContainer>
    </div>
  )
}
