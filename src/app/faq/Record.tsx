'use client'
import { useState } from "react"
import { LiaAngleUpSolid, LiaAngleDownSolid } from "react-icons/lia";
export default function Record() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="flex flex-col w-full h-fit bg-white">
      <h1 className="font-itim font-semibold text-lg p-1 sm:text-2xl">Sobre a Empresa Acústica</h1>
      <div className="flex flex-col p-2 w-full h-fit rounded-md border-1 border-details" onClick={() => setVisible(!visible)}>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-sm sm:text-base">O que é a acústica?</span>
          <div className="">
            {
              visible ?
              <LiaAngleDownSolid size={32} rotate={100}/>
              :
              <LiaAngleUpSolid size={32} rotate={100}/>
            }
          </div>
        </div>
        {visible? <div>Somos uma empresa legal</div> : <></>}
      </div>
      
    </div>
  )
}
