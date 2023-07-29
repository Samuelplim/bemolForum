import { useParams} from "react-router-dom"
import { Footer, Header } from "../components"
import { FindByIdTopics } from "../services/topics.services"

export const TopicPage = ()=> {
  return(
    <>
    <Header/>
    <main className="bg-naturalWhite">
      <div className=" mt-4 px-2">
        <p>Não encontrou o que procura?</p>
      </div>
    </main>
    <Footer />
    </>
  )
}