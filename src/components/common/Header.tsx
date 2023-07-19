import {MdPerson} from "react-icons/md";
import Title from "./Title";
export default function Header() {
  return (
    <header className="flex items-center p-10 justify-between w-screen">
        <Title />
        <div className="flex items-center gap-4">
          <span className="font-itim text-white">Olá, usuário 147</span>
          <div className="flex rounded-md items-center justify-center w-20 h-20 bg-slate-200">
            <MdPerson size={40}/>
          </div>
        </div>
    </header>
  )
}