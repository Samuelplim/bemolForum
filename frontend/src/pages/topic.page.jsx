import { useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import { CommentsList, Footer, Header, InputLarge } from "../components"
import { FindByIdTopics } from "../services/topics.services"

export const TopicPage = ()=> {
  const [data, setData] = useState(null);
  const params = useParams()

  useEffect(() => {
    async function fetchNote(){
      const result = await FindByIdTopics(params).then(respons=>{return respons})
      if(result){
        setData(result)
      }
    }
    fetchNote()
  }, [])
  
  return(
    <>
    <Header/>
    <main className="bg-naturalWhite">
      {data?
      <div className=" mt-4 px-2">
        <p className="uppercase font-bold text-xl">{data.data.title}</p>
        <p className="font-light">Autor {data.data.author.name}</p>
        <span className="text-xs">Assunto</span>
        <p>{data.data.content}</p>
        <div className="h-1 w-full bg-blue-100"/>
        <CommentsList comments={data.data.comments} />
      </div>
      :<p>Carregando</p>}
      <InputLarge placeholder={"Menssagem"} paperAirPlane/>
    </main>
    <Footer />
    </>
  )
}