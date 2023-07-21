'use client'
import MainContentContainer from "@/components/common/MainContentContainer"
import { useEffect, useState } from "react"
import MainCategory from "./MainCategory"
import { categoryHooks } from "@/api/category/categoryHooks"
import axios from "axios"
import Header from "@/components/common/Header"

export interface Categories {
  id: number,
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

export default function EditFaq() {
  const [categories, setCategories] = useState<Categories[]>([])
  const fetchData = async () => {
    const categories = await categoryHooks.findAll('')
    setCategories(categories)
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className="flex flex-col items-center w-screen overflow-x-hidden min-h-screen p-4 bg-default">
      <Header />
      <div className="flex text-center flex-col py-20">
        <h1 className="font-itim text-5xl font-bold  text-white p-2">FAQ</h1>
        <hr className="white w-60 sm:w-96 max-w-xl"/>
      </div>
      <MainContentContainer>
        {categories.map((category) => <MainCategory key={category.id}  category={category}/>)}
      </MainContentContainer>
      
    </div>
  )
}
