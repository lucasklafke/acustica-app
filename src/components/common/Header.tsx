import {MdPerson} from "react-icons/md";
import Title from "./Title";
export default function Header() {
  return (
    <header className="flex items-center p-6 sm:p-10 xl:p-20 justify-between w-screen absolute top-0">
        <Title />
        <div className="flex items-center gap-4">
          <span className="font-itim text-white text-sm sm:text-base">Olá, usuário 147</span>
          <div className="flex rounded-md items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-slate-200">
            <MdPerson className="text-3xl sm:text-5xl"/>
          </div>
        </div>
    </header>
  )
}