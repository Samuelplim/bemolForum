import { io } from "socket.io-client"
import { useAuth } from "../hooks/auth"
import { useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import { CommentsList, Footer, Header, InputLarge } from "../components"
import { FindByIdTopics } from "../services/topics.services"

export const TopicPage = ()=> {
  const { customer } = useAuth()
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("")
  const params = useParams()

  const handleSendMessage = (event) => {
    if(event.key === "Enter" || event._reactName === "onClick") {
      console.log(message)

      setMessage("")
    }
  }

  async function fetchTopic(){
    const result = await FindByIdTopics(params).then(respons=>{return respons})
    if(result){
      setData(result.data)
    }
    return result.data;
  }

  useEffect(() => {

    fetchTopic().then(data=>{
      const socket = io(import.meta.env.VITE_BACKEND_URL); 
      socket.on('connection', () => {
        console.log('Connected to the Socket.IO server!');
      });
      socket.emit("select_topic",{
        data,
        customer
      })
      // Listen for the "customEvent" event from the server
      socket.on('customEvent', (data) => {
        console.log('Received customEvent from the server:', data);
        // Handle the data received from the server as needed
      });
  
      // Clean up the socket connection on component unmount
      return () => {
        socket.disconnect();
      };
    })

  }, [])

  
  return(
    <>
    <Header/>
    <main className="bg-naturalWhite">
      {data?
      <div className=" mt-4 px-2">
        <p className="uppercase font-bold text-xl">{data.title}</p>
        <p className="font-light">Autor {data.author.name}</p>
        <span className="text-xs">Assunto</span>
        <p>{data.content}</p>
        <div className="h-1 w-full bg-blue-100"/>
        <CommentsList comments={data.comments} customer={customer}/>
      </div>
      :<p>Carregando</p>}
      <InputLarge
        placeholder={"Menssagem"}
        paperAirPlane
        onKeyPress={handleSendMessage}
        onChange={e => setMessage(e.target.value)}
        value={message}
        onClick={handleSendMessage}
       />
    </main>
    <Footer />
    </>
  )
}