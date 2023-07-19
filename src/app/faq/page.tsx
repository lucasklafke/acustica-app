import MainContentContainer from "@/components/common/MainContentContainer"
import Record from "./Record"
export default function Faq() {
  return (
    <div className="flex flex-col items-center w-screen overflow-x-hidden min-h-screen p-4 bg-default">
      <div className="flex text-center flex-col py-20">
        <h1 className="font-itim text-5xl font-bold  text-white p-2">FAQ</h1>
        <hr className="white w-60 sm:w-96 max-w-xl"/>
      </div>
      <MainContentContainer>
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />

      </MainContentContainer>
      
    </div>
  )
}
