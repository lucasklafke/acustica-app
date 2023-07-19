'use client'
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

interface MyComponentProps {
  text: string;
  routeTo: string
}
export const Option:React.FC<PropsWithChildren<MyComponentProps>> = ({children, text, routeTo}) =>  {
  const router = useRouter()
  
  return (
    <div onClick={() => router.push(routeTo)}>
      <span className="text-sm font-itim ml-1 font-semibold text-gray-800">{text}</span>
      <div className="flex items-center justify-center w-36 h-16 border-2 border-details rounded-md hover:bg-slate-100 hover:cursor-pointer">
        {children}
      </div>
    </div>
  )
}