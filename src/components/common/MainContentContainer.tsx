import {MdPerson} from "react-icons/md";
import Title from "./Title";
interface Props {
  children: React.ReactNode;
}
export default function MainContentContainer({children}: Props) {
  return (
    <main className="flex flex-col items-start justify-evenly h-fit gap-3 p-4 w-full max-w-xl rounded-md bg-white">
        {children}
    </main>
  )
}