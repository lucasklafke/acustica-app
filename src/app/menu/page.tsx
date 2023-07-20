import Header from "@/components/common/Header"
import MainContentContainer from "@/components/common/MainContentContainer" 
import { LiaPlusSolid, LiaEdit, LiaHistorySolid, LiaListSolid } from "react-icons/lia";
import {Option} from "./Option"
export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 justify-center min-h-screen bg-default">
      <Header />
      <MainContentContainer>
        <div className="flex w-full items-center justify-center">
          <div className="flex flex-wrap justify-center w-full gap-2">
              <Option text='Adicionar Registro' routeTo="/faq/create">
                  <LiaPlusSolid size={36} />
              </Option>
              <Option text='Editar Registro' routeTo="/faq/edit">
                  <LiaEdit size={36}/>
              </Option>
              <Option text='Histórico' routeTo="/record/create">
                  <LiaHistorySolid size={36}/>
              </Option>
              <Option text='Adicionar Categoria' routeTo="/category/create">
                  <LiaPlusSolid size={36}/>
              </Option>
              <Option text='Editar Registro' routeTo="/record/edit">
                  <LiaEdit size={36}/>
              </Option>
              <Option text='Visualizar Registros' routeTo="/faq">
                  <LiaListSolid size={36}/>
              </Option>
          </div>
        </div>
      </MainContentContainer>
    </div>
  )
}
