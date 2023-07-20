'use client'
import { Category, categoryHooks } from "@/api/category/categoryHooks"
import MainContentContainer from "@/components/common/MainContentContainer"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import SubCategory from "../SubCategory"

export interface Categories {
  id: Number,
  category: String,
  createdAt: String,
  parentId: null,
  children: Categories[]
  questions: question[]
}
export interface question {
  id: Number,
  categoryId: Number,
  question: String,
  answer: String,
  createdAt: String
}

export default function Faq() {
  const [subCategories, setSubCategories] = useState<Categories[]>([])
  const [mainCategory, setMainCategory] = useState<mainCategory>({
    id: null,
    category: null,
    createdAt: null,
    parentId: null
  })
  const path = usePathname()
  const fetchData = async () => {
    const splitedPath = path.split('/')
    const categories:Category = await categoryHooks.findAll(`?main=true&id=${splitedPath[3]}`)
    setMainCategory(categories.mainCategory)
    console.log('VISHdsghsdfhfdhdf', categories.subCategories[0])
    setSubCategories(categories.subCategories[0])
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="flex flex-col items-center w-screen overflow-x-hidden min-h-screen p-4 bg-default">
      <div className="flex text-center flex-col py-20">
        <h1 className="font-itim text-5xl font-bold  text-white p-2">{mainCategory.category}</h1>
        <hr className="white w-60 sm:w-96 max-w-xl"/>
      </div>
      <h2>{mainCategory.category}</h2>
      <MainContentContainer>
        {subCategories.map((category) => <SubCategory key={category.id} category={category}/>)}
      </MainContentContainer>
      
    </div>
  )
}
