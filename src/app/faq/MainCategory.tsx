'use client'
import { useState } from "react"
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia"
import { Categories } from "./page"
import Question from "./Question"
import SubCategory from "./SubCategory"
interface Props {
  category: Categories
}
export default function MainCategory(props:Props) {
  const {category} = props
  const [visible, setVisible] = useState(false)
  return (
    <div className="w-full h-fit p-2 border-1 border-dashed rounded-lg">
      <div className="flex w-full justify-between" onClick={() => setVisible(!visible)}>
        <h1 className="font-itim text-4xl font-semibold">{category.category}</h1>
        <div className="">
              {
                visible ?
                <LiaAngleDownSolid size={32} rotate={100}/>
                :
                <LiaAngleUpSolid size={32} rotate={100}/>
              }
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {
          visible?
            category.questions.length > 0? category.questions.map((question) => 
              <div key={Number(question.id)} className="w-full p-2 rounded-sm">
                <span className="text-base ">Pergunta</span>
                <Question />
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
