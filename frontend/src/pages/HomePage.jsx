import { useEffect, useState } from "react";
import { ButtonLarge, NavMenu, VerticalList } from "../components";
import { io } from "socket.io-client";
import { indexTopics } from "../services/topics.services";



export const HomePage = () => {

  const {topics, setTopics} = useState([])

  /*
  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io(import.meta.env.VITE_BACKEND_URL); // Replace with your server URL

    // Listen for the "connect" event, indicating a successful connection
    socket.on('connect', () => {
      console.log('Connected to the Socket.IO server!');
    });

    // Listen for the "customEvent" event from the server
    socket.on('customEvent', (data) => {
      console.log('Received customEvent from the server:', data);
      // Handle the data received from the server as needed
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);
*/

  useEffect(() => {
/*
    (async () =>{
      const response = await indexTopics()
      setTopics(response);
    })()
*/
  },[])

  return (
    <>
    <header><NavMenu/></header>
    <main className="bg-naturalWhite">
     <div className=" mt-4 px-2">
      <p>Não encontrou o que procura?</p>
      <ButtonLarge title="criar um topico" className="" />
    </div>

    <section className=" bg-light-200 mt-4 h-96">
     {topics ? topics.map(topic => (
      <VerticalList key={String(topic._id)} data={topic} />
     )):(<div className="h-full items-center flex px-4"> <p className="font-medium text-center">Não encontrei nenhum topico no momento, tente criar um novo topico ou volte mais tarde!</p></div>)}
     </section>
    </main>
    </>
  );
};
