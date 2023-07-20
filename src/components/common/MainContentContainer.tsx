import {MdPerson} from "react-icons/md";
import Title from "./Title";
export interface Props {
  children: React.ReactNode;
}
export default function MainContentContainer({children}: Props) {
  return (
    <main className="flex flex-col items-start justify-evenly h-fit gap-3 p-4 w-full max-w-4xl rounded-md bg-white">
      {children}
    </main>
  )
}