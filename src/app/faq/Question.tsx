'use client'
import { useState } from "react";
import { LiaAngleUpSolid, LiaAngleDownSolid } from "react-icons/lia";

export default function Question() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="flex flex-col pl-2 w-full h-fit bg-white  border-1 border-dashed border-black rounded-md" onClick={() => setVisible(!visible)}>
        <div className="flex items-center p-1 justify-between ">
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
  )
}