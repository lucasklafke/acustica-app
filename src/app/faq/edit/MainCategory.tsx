'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LiaAngleDownSolid, LiaAngleUpSolid, LiaEdit } from "react-icons/lia"
import { Categories } from "./page"
import Question from "./Question"
import SubCategory from "./SubCategory"
interface Props {
  category: Categories
}
export default function MainCategory(props:Props) {
  const {category} = props
  const [visible, setVisible] = useState(false)
  const route = useRouter()
  return (
    <div className="w-full h-fit p-2 border-1 border-dashed rounded-lg">
      <div className="flex w-full justify-between">
        <h1 className="font-itim text-xl sm:text-4xl font-semibold">{category.category}</h1>
        <div className="flex items-center gap-6">
          <LiaEdit size={36} onClick={() => route.push(`/category/edit/${category.id}`)} className="z-10 cursor-pointer"/>

          {
            visible ?
            <LiaAngleDownSolid size={36} className="z-10 cursor-pointer" onClick={() => setVisible(!visible)}/>
            :
            <LiaAngleUpSolid size={36} className="z-10 cursor-pointer" onClick={() => setVisible(!visible)}/>
          }
        </div>
      </div>
      <div className="flex flex-col gap-1">
        
        {
          visible?
            category.questions.length > 0? category.questions.map((question) => 
              <div key={Number(question.id)} className="w-full p-2 rounded-sm">
                <span className="text-base ">Pergunta</span>
                <Question question={question}/>
              </div>
            ) : <></>
          : <></>
        }

        {
        visible?
          category.children.map((category) => 
          <div key={category.id} className="w-full  p-2 rounded-sm" >
            <span className="text-base ">Categoria</span>
              <SubCategory category={category}/>
            </div>
          )
        : <></>
        }
      </div>
    </div>
  )
}
