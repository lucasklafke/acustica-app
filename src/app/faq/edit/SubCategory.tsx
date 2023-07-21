'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LiaAngleUpSolid, LiaAngleDownSolid, LiaEdit } from "react-icons/lia";
import { Categories } from "./page";
import Question from "./Question";
interface Props {
  category: Categories
}

export default function SubCategory(props: Props) {
  const {category} = props
  const [visible, setVisible] = useState(false)
  const router = useRouter()
  return (
    <div className="flex flex-col p-1 w-full h-fit rounded-md border-1 border-black">
      <div className="flex w-full h-fit items-center justify-between">
        <h1 className="font-itim text-xl font-semibold">{category.category}</h1>
        <div className="flex items-center gap-4">
            <LiaEdit size={32} onClick={() => router.push(`/category/edit/${category.id}`)} className="z-10 cursor-pointer"/>

              {
                visible ?
                <LiaAngleDownSolid size={32} onClick={() => setVisible(!visible)} className="z-10 cursor-pointer"/>
                :
                <LiaAngleUpSolid size={32}  onClick={() => setVisible(!visible)} className="z-10 cursor-pointer"/>
              }
        </div>
      </div>
      <div className="flex flex-col p-1 items-start justify-between gap-1">
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
          <div key={category.id} className="w-full p-2 rounded-sm" >
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