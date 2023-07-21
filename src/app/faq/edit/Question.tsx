'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LiaAngleUpSolid, LiaAngleDownSolid } from "react-icons/lia";
import { LiaPlusSolid, LiaEdit, LiaHistorySolid, LiaListSolid } from "react-icons/lia";
import { question } from "./page";
interface Props {
  question: question
}
export default function Question(props:Props) {
  const [visible, setVisible] = useState(false)
  const {question} = props
  const route = useRouter()
  return (
    <div className="flex flex-col pl-2 w-full h-fit bg-white  border-1 border-dashed border-black rounded-md">
        <div className="flex items-center p-1 justify-between ">
          <span className="font-semibold text-sm sm:text-base">O que é a acústica?</span>
          <div className="flex items-center gap-4">
            <LiaEdit size={32} onClick={() => route.push(`/question/edit/${question.id}`)} className="z-10 cursor-pointer"/>
            {
              visible ?
              <LiaAngleDownSolid size={32} onClick={() => setVisible(!visible)} className="z-10 cursor-pointer"/>
              :
              <LiaAngleUpSolid size={32} onClick={() => setVisible(!visible)} className="z-10 cursor-pointer"/>
            }
          </div>
        </div>
        {visible? <div>Somos uma empresa legal</div> : <></>}
      </div>
  )
}