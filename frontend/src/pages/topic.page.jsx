import { useParams} from "react-router-dom"
import { Footer, NavMenu } from "../components"
import { FindByIdTopics } from "../services/topics.services"

export const TopicPage = ()=> {
  return(
    <>
    <header><NavMenu/></header>
    <main className="bg-naturalWhite">
     <div className=" mt-4 px-2">
      <p>Não encontrou o que procura?</p>
    </div>
    
    
    </main>
    <Footer />
    </>
  )
}